import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, dateStringToDayjs, dayjsDateToString } from '#src/components/utils';
import type { CalendarProps } from '#src/components/Calendar/interfaces';
import { DatesOfMonthWidget } from '#src/components/DatesOfMonthWidget';
import { DATES_OF_MONTH_WIDGET_WIDTH } from '#src/components/DatesOfMonthWidget/constants';
import type { CellStateProps } from '#src/components/DatesOfMonthWidget/interfaces';
import {
  baseDateCellMixin,
  baseDayNameCellMixin,
  disabledDateCellMixin,
  disabledHolidayDateCellMixin,
  hiddenDateCellMixin,
  holidayDateCellMixin,
  outsideMonthDateCellMixin,
  selectedDateCellMixin,
  todayDateCellMixin,
  todayHolidayDateCellMixin,
} from '#src/components/DatesOfMonthWidget/mixins';

dayjs.extend(LocalizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding: 10px;
  width: ${DATES_OF_MONTH_WIDGET_WIDTH}px;
`;
const MonthYear = styled.div`
  margin-bottom: 10px;
  ${typography['Subtitle/Subtitle 2']}
`;

const getDateCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isHoliday?: boolean,
  isOutsideMonth?: boolean,
  isToday?: boolean,
) => {
  if (hidden) return hiddenDateCellMixin;
  if (disabled && isHoliday) return disabledHolidayDateCellMixin;
  if (disabled) return disabledDateCellMixin;
  if (isOutsideMonth) return outsideMonthDateCellMixin;
  if (selected) return selectedDateCellMixin;
  if (isHoliday && isToday) return todayHolidayDateCellMixin;
  if (isHoliday) return holidayDateCellMixin;
  if (isToday) return todayDateCellMixin;
  return baseDateCellMixin;
};

const getDateCellDataAttributes = (
  isHoliday?: boolean,
  isOutsideMonth?: boolean,
  isToday?: boolean,
): Record<string, any> => {
  return {
    'data-is-holiday': isHoliday ? isHoliday : undefined,
    'data-is-outside-month': isOutsideMonth ? isOutsideMonth : undefined,
    'data-is-today': isToday ? isToday : undefined,
  };
};

export const Calendar = ({
  date,
  defaultDate,
  onDateChange,
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone,
  locale = 'ru',
  ...props
}: CalendarProps) => {
  console.log(`default date - ${defaultDate}`);
  const getDayjsDate = (locale: string, timezone: string, dateString?: string) => {
    return dateStringToDayjs(dateString)?.tz(timezone).locale(locale) || dayjs().locale(locale);
  };
  const localeInner = locale || 'ru';

  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(
    getDayjsDate(localeInner, timezone).add(1, 'day'),
  );
  const [dateState, setDateState] = useState(getDayjsDate(localeInner, timezone, defaultDate));
  const dateInner = (date && getDayjsDate(localeInner, timezone, date)) || dateState;

  //console.log(dateState.toISOString());

  const handleDateChange = (dateString: string) => {
    const dayjsDate = getDayjsDate(localeInner, timezone, dateString);
    setDateState(dayjsDate);
    onDateChange?.(dayjsDateToString(dayjsDate));
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
    const clickedDate = dateStringToDayjs(clickedCell);
    if (clickedDate && !dateIsDisabled(clickedDate) && !dateIsOutsideMonth(clickedDate)) {
      setSelectedDate(clickedDate);
    }
  };

  const dateIsOutsideMonth = (dateCurrent?: Dayjs) => {
    return dateCurrent && dateCurrent.month() !== dateInner.month();
  };
  const dateIsDisabled = (dateCurrent?: Dayjs) => {
    return !!(
      dateCurrent &&
      dateCurrent.month() === dateInner.month() &&
      (dateCurrent.day() === 6 || dateCurrent.date() < 5)
    );
  };
  const dateIsHoliday = (dateCurrent?: Dayjs) => {
    return !!(
      dateCurrent &&
      dateCurrent.month() === dateInner.month() &&
      (dateCurrent.day() === 6 || dateCurrent.day() === 0 || dateCurrent.isSame(dayjs().locale(localeInner), 'date'))
    );
  };
  const dateIsHidden = (dateCurrent?: Dayjs) => {
    return dateCurrent && dateCurrent.isAfter(dateInner, 'month');
  };

  const getDateCellState = (dateString: string): CellStateProps => {
    const dateCurrent = dateStringToDayjs(dateString, localeInner);
    const selected = dateCurrent && dateCurrent.isSame(selectedDate, 'date');
    const disabled = dateIsDisabled(dateCurrent);
    const isOutsideMonth = dateIsOutsideMonth(dateCurrent);
    const hidden = dateIsHidden(dateCurrent);
    const isHoliday = dateIsHoliday(dateCurrent);
    const isToday = dateCurrent && dateCurrent.isSame(dayjs().locale(localeInner), 'date');

    const cellMixin = getDateCellMixin(selected, disabled, hidden, isHoliday, isOutsideMonth, isToday);
    const dataAttributes = getDateCellDataAttributes(isHoliday, isOutsideMonth, isToday);

    return { selected, disabled, hidden, cellMixin, ...dataAttributes };
  };

  const getDayNameCellState = (dayNumber: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(dateInner.format('D MMMM YYYY'))}</MonthYear>
      <DatesOfMonthWidget
        {...props}
        date={dayjsDateToString(dateInner)}
        locale={localeInner}
        onClick={handleClick}
        dayNamesProps={{ dayNameCellState: getDayNameCellState }}
        datesProps={{ dateCellState: getDateCellState }}
      />
    </Wrapper>
  );
};

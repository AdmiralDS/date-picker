import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';

import { typography } from '@admiral-ds/react-ui';

import {
  capitalizeFirstLetter,
  dateStringToDayjs,
  getCurrentTimeZone,
  getDayjsDate,
  getCurrentDate,
} from '#src/components/utils';
import { DatesOfMonthWidget } from 'components/DatesOfMonthWidget';
import { DATES_OF_MONTH_WIDGET_WIDTH } from '#src/components/DatesOfMonthWidget/constants';
import type { DatesOfMonthWidgetProps, CellStateProps } from '#src/components/DatesOfMonthWidget/interfaces';
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding: 10px;
  width: ${DATES_OF_MONTH_WIDGET_WIDTH}px;
  border: 1px ${(p) => p.theme.color['Neutral/Neutral 90']} solid;
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

export const DatesOfMonthWidgetSimpleTemplate = ({
  date,
  locale = 'ru',
  timezone = getCurrentTimeZone(),
  ...props
}: DatesOfMonthWidgetProps) => {
  const dateInner = getDayjsDate(locale, timezone, date);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(getCurrentDate(locale, timezone).add(1, 'day'));

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
      (dateCurrent.day() === 6 ||
        dateCurrent.day() === 0 ||
        dateCurrent.isSame(getCurrentDate(locale, timezone), 'date'))
    );
  };
  const dateIsHidden = (dateCurrent?: Dayjs) => {
    return dateCurrent && dateCurrent.isAfter(date, 'month');
  };

  const getDateCellState = (dateString: string): CellStateProps => {
    const dateCurrent = dateStringToDayjs(dateString, locale, timezone);
    const selected = dateCurrent && dateCurrent.isSame(selectedDate, 'date');
    const disabled = dateIsDisabled(dateCurrent);
    const isOutsideMonth = dateIsOutsideMonth(dateCurrent);
    const hidden = dateIsHidden(dateCurrent);
    const isHoliday = dateIsHoliday(dateCurrent);
    const isToday = dateCurrent && dateCurrent.isSame(getCurrentDate(locale, timezone), 'date');

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
        onClick={handleClick}
        dayNamesProps={{ dayNameCellState: getDayNameCellState }}
        datesProps={{ dateCellState: getDateCellState }}
      />
    </Wrapper>
  );
};

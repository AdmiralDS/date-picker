import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import {
  dateStringToDayjs,
  dayjsDateToString,
  getCurrentTimeZone,
  getDayjsDate,
  outOfBounds,
} from '#src/components/utils';
import type { CalendarProps } from '#src/components/Calendar/interfaces';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/Calendar/constants';
import { MonthNavigationPanelWidget } from '#src/components/MonthNavigationPanelWidget';
import { DatesOfMonthWidget } from '#src/components/DatesOfMonthWidget';
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

const CalendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: ${CALENDAR_WIDTH}px;
  height: ${CALENDAR_HEIGHT}px;
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

const getInitialDateRange = (dateRange?: [string, string], locale?: string, timezone?: string) => {
  if (!dateRange || !dateRange[0] || !dateRange[1]) return undefined;
  return [getDayjsDate(locale, timezone, dateRange[0]), getDayjsDate(locale, timezone, dateRange[1])];
};

export const Calendar = ({
  dateRange,
  date,
  defaultDate,
  onDateChange,
  selectedDate,
  defaultSelectedDate,
  onSelectedDateChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  ...props
}: CalendarProps) => {
  const localeInner = locale || 'ru';

  const [dateRangeState, setDateRangeState] = useState(getInitialDateRange(dateRange, localeInner, timezone));
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(
    defaultSelectedDate ? getDayjsDate(localeInner, timezone, defaultSelectedDate) : undefined,
  );
  const selectedDateInner =
    (selectedDate && dateStringToDayjs(selectedDate, localeInner, timezone)) || selectedDateState;
  const [dateState, setDateState] = useState(getDayjsDate(localeInner, timezone, defaultDate));
  const dateInner = (date && getDayjsDate(localeInner, timezone, date)) || dateState;

  const handleDateChange = (dateString: string) => {
    const dayjsDate = getDayjsDate(localeInner, timezone, dateString);
    setDateState(dayjsDate);
    onDateChange?.(dayjsDateToString(dayjsDate));
  };

  const handleSelectedDateChange = (dateString: string) => {
    const dayjsSelectedDate = dateStringToDayjs(dateString, localeInner, timezone);
    setSelectedDateState(dayjsSelectedDate);
    onSelectedDateChange?.(dateString);
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
    const clickedDate = dateStringToDayjs(clickedCell, localeInner, timezone);
    if (clickedDate && !dateIsDisabled(clickedDate) && !dateIsOutsideMonth(clickedDate)) {
      handleSelectedDateChange(dayjsDateToString(clickedDate));
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

  const dateIsInRange = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !dateRangeState) return false;
    return dateCurrent.isBetween(dateRangeState[0], dateRangeState[1], 'date', '()');
  };
  const dateIsRangeStart = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !dateRangeState) return false;
    return dateCurrent.isSame(dateRangeState[0], 'date');
  };
  const dateIsRangeEnd = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !dateRangeState) return false;
    return dateCurrent.isSame(dateRangeState[1], 'date');
  };

  const getDateCellState = (dateString: string): CellStateProps => {
    const dateCurrent = dateStringToDayjs(dateString, localeInner, timezone);
    const selected = dateCurrent && dateCurrent.isSame(selectedDateInner, 'date');
    const disabled = dateIsDisabled(dateCurrent);
    const isInRange = dateIsInRange(dateCurrent);
    const isRangeStart = dateIsRangeStart(dateCurrent);
    const isRangeEnd = dateIsRangeEnd(dateCurrent);
    const isOutsideMonth = dateIsOutsideMonth(dateCurrent);
    const hidden = dateIsHidden(dateCurrent);
    const isHoliday = dateIsHoliday(dateCurrent);
    const isToday = dateCurrent && dateCurrent.isSame(dayjs().locale(localeInner), 'date');

    const cellMixin = getDateCellMixin(selected, disabled, hidden, isHoliday, isOutsideMonth, isToday);
    const dataAttributes = getDateCellDataAttributes(isHoliday, isOutsideMonth, isToday);

    return { selected, disabled, hidden, cellMixin, isInRange, isRangeStart, isRangeEnd, ...dataAttributes };
  };

  const getDayNameCellState = (dayNumber: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  const handleMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.direction;
    switch (targetType) {
      case 'left':
        handleDateChange(dayjsDateToString(dateInner.subtract(1, 'month')));
        break;
      case 'right':
        handleDateChange(dayjsDateToString(dateInner.add(1, 'month')));
        break;
    }
  };

  return (
    <CalendarWrapper>
      <MonthNavigationPanelWidget
        date={dayjsDateToString(dateInner)}
        locale={localeInner}
        timezone={timezone}
        onClick={handleMonthNavigationPanelClick}
      />
      <DatesOfMonthWidget
        {...props}
        date={dayjsDateToString(dateInner)}
        locale={localeInner}
        onClick={handleClick}
        dayNamesProps={{ dayNameCellState: getDayNameCellState }}
        datesProps={{ dateCellState: getDateCellState }}
      />
    </CalendarWrapper>
  );
};

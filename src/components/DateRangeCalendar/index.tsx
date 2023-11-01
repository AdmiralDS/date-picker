import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

import {
  dateStringToDayjs,
  dayjsDateToString,
  dayjsStateToString,
  getCurrentTimeZone,
  getDayjsDate,
  sortDatesAsc,
} from '#src/components/utils';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants';
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
  currentDateCellMixin,
  currentDateHolidayDateCellMixin,
} from '#src/components/DatesOfMonthWidget/mixins';
import type { DateCellProps } from '#src/components/DatesOfMonthWidget/Dates';
import { DefaultDateCell } from '#src/components/DatesOfMonthWidget/Dates';
import type { CalendarProps } from '#src/components/calendarInterfaces';

export interface DateRangeCalendarProps extends CalendarProps {
  /** Даты в формате ISO */
  dateRange?: [string, string];
  /** Даты в формате ISO */
  defaultDateRange?: [string | undefined, string | undefined];
  onDateRangeChange?: (dateRangeString: [string | undefined, string | undefined]) => void;
}

const DateCalendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: ${CALENDAR_WIDTH}px;
  height: ${CALENDAR_HEIGHT}px;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(p) => p.theme.shadow['Shadow 08']}
`;

export const getDateCellMixin = (
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
  if (isHoliday && isToday) return currentDateHolidayDateCellMixin;
  if (isHoliday) return holidayDateCellMixin;
  if (isToday) return currentDateCellMixin;
  return baseDateCellMixin;
};

const getDateCellDataAttributes = (
  value?: string,
  isHoliday?: boolean,
  isOutsideMonth?: boolean,
  isCurrentDay?: boolean,
  isActive?: boolean,
  isInRange?: boolean,
  isRangeStart?: boolean,
  isRangeEnd?: boolean,
  isInRangeSelecting?: boolean,
  isRangeSelectingStart?: boolean,
  isRangeSelectingEnd?: boolean,
  isStartOfWeek?: boolean,
  isEndOfWeek?: boolean,
) => {
  return {
    'data-value': value ? value : undefined,
    'data-is-holiday-cell': isHoliday ? isHoliday : undefined,
    'data-is-outside-month-cell': isOutsideMonth ? isOutsideMonth : undefined,
    'data-is-current-day-cell': isCurrentDay ? isCurrentDay : undefined,
    'data-is-active-cell': isActive ? isActive : undefined,
    'data-is-in-range-cell': isInRange ? isInRange : undefined,
    'data-is-range-start-cell': isRangeStart ? isRangeStart : undefined,
    'data-is-range-end-cell': isRangeEnd ? isRangeEnd : undefined,
    'data-is-in-range-selecting-cell': isInRangeSelecting ? isInRangeSelecting : undefined,
    'data-is-range-selecting-start-cell': isRangeSelectingStart ? isRangeSelectingStart : undefined,
    'data-is-range-selecting-end-cell': isRangeSelectingEnd ? isRangeSelectingEnd : undefined,
    'data-is-start-of-week-cell': isStartOfWeek ? isStartOfWeek : undefined,
    'data-is-end-of-week-cell': isEndOfWeek ? isEndOfWeek : undefined,
  };
};

export const DateRangeCalendar = ({
  dateRange,
  defaultDateRange,
  onDateRangeChange,
  date,
  defaultDate,
  onDateChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  onClick,
  ...props
}: DateRangeCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const [dateState, setDateState] = useState(getDayjsDate(locale, timezone, defaultDate));
  const dateInner = (date && getDayjsDate(locale, timezone, date)) || dateState;
  const handleDateChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    if (dayjsDate) {
      setDateState(dayjsDate);
      onDateChange?.(dateString);
    }
  };
  //</editor-fold>

  //<editor-fold desc="Hovered date">
  const [activeDateInner, setActiveDateInner] = useState<Dayjs>();
  const handleActiveDateChange = (dateString?: string) => {
    const dayjsActiveDate = dateStringToDayjs(dateString, locale, timezone);
    //console.log(`set active ${dayjsActiveDate}`);
    setActiveDateInner(dayjsActiveDate);
  };
  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'dateCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale, timezone);
      if (hoveredDate) {
        if (activeDateInner && (dateIsHidden(hoveredDate) || dateIsDisabled(hoveredDate))) {
          handleActiveDateChange(undefined);
          return;
        }
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
    }
  };
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'dateCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale, timezone);
      if (hoveredDate && (!activeDateInner || !hoveredDate.isSame(activeDateInner, 'date'))) {
        if (dateIsHidden(hoveredDate) || dateIsDisabled(hoveredDate)) {
          if (activeDateInner) {
            handleActiveDateChange(undefined);
          }
          return;
        }
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
      return;
    }
    if (target.dataset.containerType !== 'datesWrapper') {
      if (activeDateInner) {
        handleActiveDateChange(undefined);
        return;
      }
    }
  };
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    handleActiveDateChange(undefined);
  };
  //</editor-fold>

  //<editor-fold desc="First date of range">
  const [dateRangeFirstState, setDateRangeFirstState] = useState(
    dateStringToDayjs(defaultDateRange?.[0], locale, timezone),
  );
  const dateRangeFirstInner = (dateRange && dateStringToDayjs(locale, timezone, dateRange?.[0])) || dateRangeFirstState;
  const handleDateRangeFirstChange = (dateString?: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    setDateRangeFirstState(dayjsDate);
  };
  //</editor-fold>

  //<editor-fold desc="Second date of range">
  const [dateRangeSecondState, setDateRangeSecondState] = useState(
    dateStringToDayjs(defaultDateRange?.[1], locale, timezone),
  );
  const dateRangeSecondInner =
    (dateRange && dateStringToDayjs(locale, timezone, dateRange?.[1])) || dateRangeSecondState;
  const handleDateRangeSecondChange = (dateString?: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    setDateRangeSecondState(dayjsDate);
  };
  //</editor-fold>

  //<editor-fold desc="Active end of range">
  const [dateRangeActiveEnd, setDateRangeActiveEnd] = useState<Dayjs | undefined>();
  const handleDateRangeActiveEndChange = (dateString?: string) => {
    const dateDayjs = dateStringToDayjs(dateString, locale, timezone);
    setDateRangeActiveEnd(dateDayjs);
  };
  //</editor-fold>

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    const clickedDate = dateStringToDayjs(clickedCell, locale, timezone);
    if (clickedDate && !dateIsDisabled(clickedDate) && !dateIsOutsideMonth(clickedDate)) {
      /*//if (dateRangeActiveEnd === 'first') {
      //if (dateRangeActiveEnd && dateRangeFirstInner && dateRangeActiveEnd.isSame(dateRangeFirstInner, 'date')) {
      if ((!dateRangeFirstInner && !dateRangeSecondInner) || (!dateRangeFirstInner && dateRangeSecondInner)) {
        handleDateRangeFirstChange(clickedCell);
      }
      //if (dateRangeActiveEnd === 'second') {
      //if (dateRangeActiveEnd && dateRangeSecondInner && dateRangeActiveEnd.isSame(dateRangeSecondInner, 'date')) {
      if ((dateRangeFirstInner && !dateRangeSecondInner) || (!dateRangeFirstInner && dateRangeSecondInner)) {
        handleDateRangeSecondChange(clickedCell);
      }*/

      if (!dateRangeActiveEnd) {
        if (dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeSecondChange(clickedCell);
        } else {
          handleDateRangeFirstChange(clickedCell);
        }
        /*if (!dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeFirstChange(clickedCell);
        }
        if (!dateRangeFirstInner && dateRangeSecondInner) {
          handleDateRangeFirstChange(clickedCell);
        }
        if (dateRangeFirstInner && dateRangeSecondInner) {
          handleDateRangeFirstChange(clickedCell);
        }*/
      } else {
        if (dateRangeFirstInner && dateRangeSecondInner) {
          if (dateRangeActiveEnd.isSame(dateRangeFirstInner, 'date')) {
            handleDateRangeSecondChange(clickedCell);
          }
          if (dateRangeActiveEnd.isSame(dateRangeSecondInner, 'date')) {
            handleDateRangeFirstChange(clickedCell);
          }
        } else if (dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeSecondChange(clickedCell);
        } else {
          handleDateRangeFirstChange(clickedCell);
        }
        /*if (!dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeFirstChange(clickedCell);
        }
        if (!dateRangeFirstInner && dateRangeSecondInner) {
          handleDateRangeFirstChange(clickedCell);
        }*/
      }
      handleDateRangeActiveEndChange(clickedCell);
      onDateRangeChange?.([dayjsStateToString(dateRangeFirstState), dayjsStateToString(dateRangeSecondState)]);
    }
    onClick?.(e);
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
      dateCurrent.date() !== 14 &&
      (dateCurrent.day() === 6 || dateCurrent.day() === 0 || dateCurrent.isSame(dayjs().locale(locale), 'date'))
    );
  };
  const dateIsHidden = (dateCurrent?: Dayjs) => {
    //return dateCurrent && (dateCurrent.isBefore(dateInner, 'month') || dateCurrent.isAfter(dateInner, 'month'));
    return dateCurrent && dateCurrent.month() !== dateInner.month();
  };

  const dateIsInRange = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) return false;
    if (dateRangeFirstInner && dateRangeSecondInner) {
      const dates = sortDatesAsc(dateRangeFirstInner, dateRangeSecondInner);
      return dateCurrent.isBetween(dates[0], dates[1], 'date', '()');
    }
    return false;
  };
  const dateIsRangeStart = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !dateRangeFirstInner || !dateRangeSecondInner) return false;
    const dates = sortDatesAsc(dateRangeFirstInner, dateRangeSecondInner);
    return dateCurrent.isSame(dates[0], 'date');
  };
  const dateIsRangeEnd = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !dateRangeFirstInner || !dateRangeSecondInner) return false;
    const dates = sortDatesAsc(dateRangeFirstInner, dateRangeSecondInner);
    return dateCurrent.isSame(dates[1], 'date');
  };
  const dateIsRangeSelectingStart = (dateCurrent?: Dayjs) => {
    if (
      dateCurrent &&
      activeDateInner &&
      dateRangeActiveEnd &&
      !dateIsDisabled(dateCurrent) &&
      !dateIsHidden(dateCurrent)
    ) {
      const dates = sortDatesAsc(dateRangeActiveEnd, activeDateInner);
      return dateCurrent.isSame(dates[0], 'date');
    }
    return false;
  };
  const dateIsRangeSelectingEnd = (dateCurrent?: Dayjs) => {
    if (
      dateCurrent &&
      activeDateInner &&
      dateRangeActiveEnd &&
      !dateIsDisabled(dateCurrent) &&
      !dateIsHidden(dateCurrent)
    ) {
      const dates = sortDatesAsc(dateRangeActiveEnd, activeDateInner);
      return dateCurrent.isSame(dates[1], 'date');
    }
    return false;
  };
  const dateIsInRangeSelecting = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) return false;
    if (dateRangeActiveEnd && activeDateInner) {
      const dates = sortDatesAsc(dateRangeActiveEnd, activeDateInner);
      return dateCurrent.isBetween(dates[0], dates[1], 'date', '()');
      //return dateCurrent.isBetween(dateRangeFirstInner, activeDateInner, 'date', '()');
    }
    return false;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  //useMemo
  const renderDate = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale, timezone);
    if (!dateCurrent) return () => <></>;
    const cellContent = dateCurrent.date();
    const disabled = dateIsDisabled(dateCurrent);
    const hidden = dateIsHidden(dateCurrent);
    const isCurrentDay = dateCurrent && dateCurrent.isSame(dayjs().locale(locale), 'date');
    const isHoliday = dateIsHoliday(dateCurrent);
    const isOutsideMonth = dateIsOutsideMonth(dateCurrent);
    const isInRange = dateIsInRange(dateCurrent);
    const isRangeStart = dateIsRangeStart(dateCurrent);
    const isRangeEnd = dateIsRangeEnd(dateCurrent);
    const isInRangeSelecting = dateIsInRangeSelecting(dateCurrent);
    const isRangeSelectingStart = dateIsRangeSelectingStart(dateCurrent);
    const isRangeSelectingEnd = dateIsRangeSelectingEnd(dateCurrent);
    const isStartOfWeek =
      dateCurrent.isSame(dateCurrent.startOf('week'), 'date') ||
      dateCurrent.isSame(dateCurrent.startOf('month'), 'date');
    const isEndOfWeek =
      dateCurrent.isSame(dateCurrent.endOf('week'), 'date') || dateCurrent.isSame(dateCurrent.endOf('month'), 'date');
    const isActive = activeDateInner?.isSame(dateCurrent, 'date');

    const dataAttributes = getDateCellDataAttributes(
      dateCurrent.toISOString(),
      isHoliday,
      isOutsideMonth,
      isCurrentDay,
      isActive,
      isInRange,
      isRangeStart,
      isRangeEnd,
      isInRangeSelecting,
      isRangeSelectingStart,
      isRangeSelectingEnd,
      isStartOfWeek,
      isEndOfWeek,
    );
    const renderDefaultDateCell = (props: DateCellProps) => (
      <DefaultDateCell key={dayjsDateToString(dateCurrent)} {...props} />
    );

    return renderDefaultDateCell({
      cellContent,
      disabled,
      hidden,
      isCurrentDay,
      isHoliday,
      isOutsideMonth,
      isInRange,
      isRangeStart,
      isRangeEnd,
      isInRangeSelecting,
      isRangeSelectingStart,
      isRangeSelectingEnd,
      isStartOfWeek,
      isEndOfWeek,
      isActive,
      ...dataAttributes,
    });
  };

  return (
    <DateCalendarWrapper>
      <MonthNavigationPanelWidget
        date={dayjsDateToString(dateInner)}
        locale={locale}
        timezone={timezone}
        onClick={handleMonthNavigationPanelClick}
      />
      <DatesOfMonthWidget
        {...props}
        renderDateCell={renderDate}
        date={dayjsDateToString(dateInner)}
        locale={locale}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        dayNamesProps={{ dayNameCellState: getDayNameCellState }}
      />
    </DateCalendarWrapper>
  );
};

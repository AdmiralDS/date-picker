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
import { baseDayNameCellMixin } from '#src/components/DatesOfMonthWidget/mixins';
import type { DefaultDateCellProps } from '#src/components/DatesOfMonthWidget/Dates';
import { DefaultDateCell } from '#src/components/DatesOfMonthWidget/Dates';
import type { CalendarProps } from '#src/components/calendarInterfaces';

export interface DateRangeDoubleCalendarProps extends CalendarProps {
  /** Даты в формате ISO */
  dateRange?: [string, string];
  /** Даты в формате ISO */
  defaultDateRange?: [string | undefined, string | undefined];
  onDateRangeChange?: (dateRangeString: [string | undefined, string | undefined]) => void;
}

const DateRangeCalendarDoubleWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: ${CALENDAR_WIDTH * 2}px;
  height: ${CALENDAR_HEIGHT}px;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(p) => p.theme.shadow['Shadow 08']}
`;
const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: ${CALENDAR_WIDTH}px;
  height: ${CALENDAR_HEIGHT}px;
`;

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

export const DateRangeDoubleCalendar = ({
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
}: DateRangeDoubleCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const [dateLeftState, setDateLeftState] = useState(getDayjsDate(locale, timezone, defaultDate));
  const dateLeftInner = (date && getDayjsDate(locale, timezone, date)) || dateLeftState;
  const handleDateLeftChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    if (dayjsDate) {
      setDateLeftState(dayjsDate);
      onDateChange?.(dateString);
    }
  };
  const [dateRightState, setDateRightState] = useState(getDayjsDate(locale, timezone, defaultDate));
  const dateRightInner = (date && getDayjsDate(locale, timezone, date)) || dateRightState;
  const handleDateRightChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    if (dayjsDate) {
      setDateRightState(dayjsDate);
      onDateChange?.(dateString);
    }
  };
  //</editor-fold>

  //<editor-fold desc="Hovered date">
  const [activeDateInner, setActiveDateInner] = useState<Dayjs>();
  const handleActiveDateChange = (dateString?: string) => {
    const dayjsActiveDate = dateStringToDayjs(dateString, locale, timezone);
    console.log(`set active ${dateString}`);
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
    //console.log(`first-${dateString}`);
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
    //console.log(`second-${dateString}`);
    setDateRangeSecondState(dayjsDate);
  };
  //</editor-fold>

  //<editor-fold desc="Active end of range">
  const [dateRangeActiveEnd, setDateRangeActiveEnd] = useState<Dayjs | undefined>();
  const handleDateRangeActiveEndChange = (dateString?: string) => {
    const dateDayjs = dateStringToDayjs(dateString, locale, timezone);
    console.log(`activeEnd-${dateString}`);
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
      //console.log(`first-${dateRangeFirstInner}, second-${dateRangeSecondInner}, activeEnd-${dateRangeActiveEnd}`);
    }
    onClick?.(e);
  };

  //<editor-fold desc="Date state functions">
  const dateIsOutsideMonth = (dateCurrent?: Dayjs, dateVisible?: Dayjs) => {
    return dateCurrent && dateVisible && dateCurrent.month() !== dateVisible.month();
  };
  const dateIsDisabled = (dateCurrent?: Dayjs, dateVisible?: Dayjs) => {
    return !!(
      dateCurrent &&
      dateVisible &&
      dateCurrent.month() === dateVisible.month() &&
      (dateCurrent.day() === 6 || dateCurrent.date() < 5)
    );
  };
  const dateIsHoliday = (dateCurrent?: Dayjs, dateVisible?: Dayjs) => {
    return !!(
      dateCurrent &&
      dateVisible &&
      dateCurrent.month() === dateVisible.month() &&
      dateCurrent.date() !== 14 &&
      (dateCurrent.day() === 6 || dateCurrent.day() === 0 || dateCurrent.isSame(dayjs().locale(locale), 'date'))
    );
  };
  const dateIsHidden = (dateCurrent?: Dayjs, dateVisible?: Dayjs) => {
    //return dateCurrent && (dateCurrent.isBefore(dateInner, 'month') || dateCurrent.isAfter(dateInner, 'month'));
    return dateCurrent && dateVisible && dateCurrent.month() !== dateVisible.month();
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
  const dateIsRangeSelectingStart = (dateCurrent?: Dayjs, dateVisible?: Dayjs) => {
    if (
      dateCurrent &&
      activeDateInner &&
      dateRangeActiveEnd &&
      !dateIsDisabled(dateCurrent, dateVisible) &&
      !dateIsHidden(dateCurrent, dateVisible)
    ) {
      const dates = sortDatesAsc(dateRangeActiveEnd, activeDateInner);
      const res = dateCurrent.isSame(dates[0], 'date');
      if (res) {
        //console.log(`range selecting start-${dayjsDateToString(dateCurrent)}`);
        console.log(`range selecting start-${dayjsDateToString(dateCurrent)}`);
      }
      return res;
      //return dateCurrent.isSame(dates[0], 'date');
    }
    return false;
  };
  const dateIsRangeSelectingEnd = (dateCurrent?: Dayjs, dateVisible?: Dayjs) => {
    if (
      dateCurrent &&
      activeDateInner &&
      dateRangeActiveEnd &&
      !dateIsDisabled(dateCurrent, dateVisible) &&
      !dateIsHidden(dateCurrent, dateVisible)
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
  //</editor-fold>

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getDayNameCellState = (_: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  const handleLeftMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.direction;
    switch (targetType) {
      case 'left':
        handleDateLeftChange(dayjsDateToString(dateLeftInner.subtract(1, 'month')));
        break;
      case 'right':
        handleDateLeftChange(dayjsDateToString(dateLeftInner.add(1, 'month')));
        break;
    }
  };
  const handleRightMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.direction;
    switch (targetType) {
      case 'left':
        handleDateRightChange(dayjsDateToString(dateRightInner.subtract(1, 'month')));
        break;
      case 'right':
        handleDateRightChange(dayjsDateToString(dateRightInner.add(1, 'month')));
        break;
    }
  };

  //useMemo
  const renderDateLeft = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale, timezone);
    if (!dateCurrent) return () => <></>;
    const cellContent = dateCurrent.date();
    const disabled = dateIsDisabled(dateCurrent, dateLeftInner);
    const hidden = dateIsHidden(dateCurrent, dateLeftInner);
    const isCurrentDay = dateCurrent && dateCurrent.isSame(dayjs().locale(locale), 'date');
    const isHoliday = dateIsHoliday(dateCurrent, dateLeftInner);
    const isOutsideMonth = dateIsOutsideMonth(dateCurrent, dateLeftInner);
    const isInRange = dateIsInRange(dateCurrent);
    const isRangeStart = dateIsRangeStart(dateCurrent);
    const isRangeEnd = dateIsRangeEnd(dateCurrent);
    const isInRangeSelecting = dateIsInRangeSelecting(dateCurrent);
    const isRangeSelectingStart = dateIsRangeSelectingStart(dateCurrent, dateLeftInner);
    const isRangeSelectingEnd = dateIsRangeSelectingEnd(dateCurrent, dateLeftInner);
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
    const renderDefaultDateCell = (props: DefaultDateCellProps) => (
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
  const renderDateRight = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale, timezone);
    if (!dateCurrent) return () => <></>;
    const cellContent = dateCurrent.date();
    const disabled = dateIsDisabled(dateCurrent, dateRightInner);
    const hidden = dateIsHidden(dateCurrent, dateRightInner);
    const isCurrentDay = dateCurrent && dateCurrent.isSame(dayjs().locale(locale), 'date');
    const isHoliday = dateIsHoliday(dateCurrent, dateRightInner);
    const isOutsideMonth = dateIsOutsideMonth(dateCurrent, dateRightInner);
    const isInRange = dateIsInRange(dateCurrent);
    const isRangeStart = dateIsRangeStart(dateCurrent);
    const isRangeEnd = dateIsRangeEnd(dateCurrent);
    const isInRangeSelecting = dateIsInRangeSelecting(dateCurrent);
    const isRangeSelectingStart = dateIsRangeSelectingStart(dateCurrent, dateRightInner);
    const isRangeSelectingEnd = dateIsRangeSelectingEnd(dateCurrent, dateRightInner);
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
    const renderDefaultDateCell = (props: DefaultDateCellProps) => (
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
    <DateRangeCalendarDoubleWrapper>
      <Container>
        <MonthNavigationPanelWidget
          date={dayjsDateToString(dateLeftInner)}
          locale={locale}
          timezone={timezone}
          onClick={handleLeftMonthNavigationPanelClick}
        />
        <DatesOfMonthWidget
          {...props}
          renderDateCell={renderDateLeft}
          date={dayjsDateToString(dateLeftInner)}
          locale={locale}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          dayNamesProps={{ dayNameCellState: getDayNameCellState }}
        />
      </Container>
      <Container>
        <MonthNavigationPanelWidget
          date={dayjsDateToString(dateRightInner)}
          locale={locale}
          timezone={timezone}
          onClick={handleRightMonthNavigationPanelClick}
        />
        <DatesOfMonthWidget
          {...props}
          renderDateCell={renderDateRight}
          date={dayjsDateToString(dateRightInner)}
          locale={locale}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          dayNamesProps={{ dayNameCellState: getDayNameCellState }}
        />
      </Container>
    </DateRangeCalendarDoubleWrapper>
  );
};

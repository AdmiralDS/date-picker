import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

import {
  capitalizeFirstLetter,
  dateStringToDayjs,
  dayjsDateToString,
  dayjsStateToString,
  getCurrentDate,
  getCurrentTimeZone,
  getDayjsDate,
  sortDatesAsc,
} from '#src/components/utils';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants';
import type { RangePickerCalendarProps } from '#src/components/calendarInterfaces';
import { YearNavigationPanelWidget } from '#src/components/YearNavigationPanelWidget';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';

export interface MonthRangeCalendarProps extends RangePickerCalendarProps {}

const MonthRangeCalendarWrapper = styled.div`
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

const getMonthCellDataAttributes = (
  value?: string,
  //isHoliday?: boolean,
  //isOutsideMonth?: boolean,
  isCurrent?: boolean,
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
    //'data-is-holiday-cell': isHoliday ? isHoliday : undefined,
    //'data-is-outside-month-cell': isOutsideMonth ? isOutsideMonth : undefined,
    'data-is-current-day-cell': isCurrent ? isCurrent : undefined,
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

export const MonthRangeCalendar = ({
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  dateValue,
  defaultDateValue,
  onDateValueChange,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  onClick,
  ...props
}: MonthRangeCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const [dateState, setDateState] = useState(getDayjsDate(locale, timezone, defaultDateValue));
  const dateInner = (dateValue && getDayjsDate(locale, timezone, dateValue)) || dateState;
  const handleDateChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    if (dayjsDate) {
      setDateState(dayjsDate);
      onDateValueChange?.(dateString);
    }
  };
  //</editor-fold>

  //<editor-fold desc="Hovered date">
  const [activeDateState, setActiveDateState] = useState<Dayjs | undefined>(
    dateStringToDayjs(defaultActiveDateValue, locale, timezone),
  );
  const activeDateInner = (activeDateValue && getDayjsDate(locale, timezone, activeDateValue)) || activeDateState;

  const handleActiveDateChange = (dateString?: string) => {
    const dayjsActiveDate = dateStringToDayjs(dateString, locale, timezone);
    //console.log(`set active ${dayjsActiveDate}`);
    setActiveDateState(dayjsActiveDate);
    onActiveDateValueChange?.(dateString);
  };
  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'monthCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale, timezone);
      if (hoveredDate) {
        if (activeDateInner) {
          handleActiveDateChange(undefined);
          return;
        }
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
    }
  };
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'monthCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale, timezone);
      if (hoveredDate && (!activeDateInner || !hoveredDate.isSame(activeDateInner, 'month'))) {
        if (activeDateInner) {
          handleActiveDateChange(undefined);
          return;
        }
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
      return;
    }
    if (target.dataset.containerType !== 'monthsWrapper') {
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
    dateStringToDayjs(defaultSelectedDateRangeValue?.[0], locale, timezone),
  );
  const dateRangeFirstInner =
    (selectedDateRangeValue && dateStringToDayjs(locale, timezone, selectedDateRangeValue?.[0])) || dateRangeFirstState;
  const handleDateRangeFirstChange = (dateString?: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    //console.log(`first-${dateString}`);
    setDateRangeFirstState(dayjsDate);
  };
  //</editor-fold>

  //<editor-fold desc="Second date of range">
  const [dateRangeSecondState, setDateRangeSecondState] = useState(
    dateStringToDayjs(defaultSelectedDateRangeValue?.[1], locale, timezone),
  );
  const dateRangeSecondInner =
    (selectedDateRangeValue && dateStringToDayjs(locale, timezone, selectedDateRangeValue?.[1])) ||
    dateRangeSecondState;
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
    //console.log(`activeEnd-${dateString}`);
    setDateRangeActiveEnd(dateDayjs);
  };
  //</editor-fold>

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    const clickedDate = dateStringToDayjs(clickedCell, locale, timezone);
    if (clickedDate) {
      if (!dateRangeActiveEnd) {
        if (dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeSecondChange(clickedCell);
        } else {
          handleDateRangeFirstChange(clickedCell);
        }
      } else {
        if (dateRangeFirstInner && dateRangeSecondInner) {
          if (dateRangeActiveEnd.isSame(dateRangeFirstInner, 'month')) {
            handleDateRangeSecondChange(clickedCell);
          }
          if (dateRangeActiveEnd.isSame(dateRangeSecondInner, 'month')) {
            handleDateRangeFirstChange(clickedCell);
          }
        } else if (dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeSecondChange(clickedCell);
        } else {
          handleDateRangeFirstChange(clickedCell);
        }
      }
      handleDateRangeActiveEndChange(clickedCell);
      onSelectedDateRangeValueChange?.([
        dayjsStateToString(dateRangeFirstState),
        dayjsStateToString(dateRangeSecondState),
      ]);
      //console.log(`first-${dateRangeFirstInner}, second-${dateRangeSecondInner}, activeEnd-${dateRangeActiveEnd}`);
    }
    onClick?.(e);
  };

  const dateIsInRange = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) return false;
    if (dateRangeFirstInner && dateRangeSecondInner) {
      const dates = sortDatesAsc(dateRangeFirstInner, dateRangeSecondInner);
      return dateCurrent.isBetween(dates[0], dates[1], 'month', '()');
    }
    return false;
  };
  const dateIsRangeStart = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !dateRangeFirstInner || !dateRangeSecondInner) return false;
    const dates = sortDatesAsc(dateRangeFirstInner, dateRangeSecondInner);
    return dateCurrent.isSame(dates[0], 'month');
  };
  const dateIsRangeEnd = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !dateRangeFirstInner || !dateRangeSecondInner) return false;
    const dates = sortDatesAsc(dateRangeFirstInner, dateRangeSecondInner);
    return dateCurrent.isSame(dates[1], 'month');
  };
  const dateIsRangeSelectingStart = (dateCurrent?: Dayjs) => {
    if (dateCurrent && activeDateInner && dateRangeActiveEnd) {
      const dates = sortDatesAsc(dateRangeActiveEnd, activeDateInner);
      /*const res = dateCurrent.isSame(dates[0], 'month');
      if (res) {
        //console.log(`range selecting start-${dayjsDateToString(dateCurrent)}`);
        console.log(`range selecting start-${dayjsDateToString(dateCurrent)}`);
      }
      return res;*/
      return dateCurrent.isSame(dates[0], 'month');
    }
    return false;
  };
  const dateIsRangeSelectingEnd = (dateCurrent?: Dayjs) => {
    if (dateCurrent && activeDateInner && dateRangeActiveEnd) {
      const dates = sortDatesAsc(dateRangeActiveEnd, activeDateInner);
      return dateCurrent.isSame(dates[1], 'month');
    }
    return false;
  };
  const dateIsInRangeSelecting = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) return false;
    if (dateRangeActiveEnd && activeDateInner) {
      const dates = sortDatesAsc(dateRangeActiveEnd, activeDateInner);
      return dateCurrent.isBetween(dates[0], dates[1], 'month', '()');
      //return dateCurrent.isBetween(dateRangeFirstInner, activeDateInner, 'month', '()');
    }
    return false;
  };

  const handleYearNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.direction;
    switch (targetType) {
      case 'left':
        handleDateChange(dayjsDateToString(dateInner.subtract(1, 'year')));
        break;
      case 'right':
        handleDateChange(dayjsDateToString(dateInner.add(1, 'year')));
        break;
    }
  };

  //useMemo
  const renderDate = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale, timezone);
    if (!dateCurrent) return {};
    const cellContent = capitalizeFirstLetter(dateCurrent.format('MMMM'));
    //const disabled = dateIsDisabled(dateCurrent);
    //const hidden = dateIsHidden(dateCurrent);
    const isCurrent = dateCurrent.isSame(getCurrentDate(locale, timezone), 'month');
    const isActive = activeDateInner && dateCurrent.isSame(activeDateInner, 'month');
    const isInRange = dateIsInRange(dateCurrent);
    const isRangeStart = dateIsRangeStart(dateCurrent);
    const isRangeEnd = dateIsRangeEnd(dateCurrent);
    const isInRangeSelecting = dateIsInRangeSelecting(dateCurrent);
    const isRangeSelectingStart = dateIsRangeSelectingStart(dateCurrent);
    const isRangeSelectingEnd = dateIsRangeSelectingEnd(dateCurrent);
    /*const isStartOfWeek =
      dateCurrent.isSame(dateCurrent.startOf('week'), 'month') ||
      dateCurrent.isSame(dateCurrent.startOf('month'), 'month');
    const isEndOfWeek =
      dateCurrent.isSame(dateCurrent.endOf('week'), 'month') || dateCurrent.isSame(dateCurrent.endOf('month'), 'month');*/

    const dataAttributes = getMonthCellDataAttributes(
      dateCurrent.toISOString(),
      isCurrent,
      isActive,
      isInRange,
      isRangeStart,
      isRangeEnd,
      isInRangeSelecting,
      isRangeSelectingStart,
      isRangeSelectingEnd,
      /*isStartOfWeek,
      isEndOfWeek,*/
    );

    return {
      cellContent,
      isCurrent,
      isInRange,
      isRangeStart,
      isRangeEnd,
      isInRangeSelecting,
      isRangeSelectingStart,
      isRangeSelectingEnd,
      /*isStartOfWeek,
      isEndOfWeek,*/
      isActive,
      ...dataAttributes,
    };
  };

  return (
    <MonthRangeCalendarWrapper>
      <YearNavigationPanelWidget
        date={dayjsDateToString(dateInner)}
        locale={locale}
        timezone={timezone}
        onClick={handleYearNavigationPanelClick}
      />
      <MonthsOfYearWidget
        {...props}
        renderMonthCell={renderDate}
        date={dayjsDateToString(dateInner)}
        locale={locale}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
    </MonthRangeCalendarWrapper>
  );
};
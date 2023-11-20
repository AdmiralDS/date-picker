import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import {
  dateStringToDayjs,
  dayjsDateToString,
  dayjsStateToString,
  getCurrentDate,
  getCurrentTimeZone,
  getDayjsDate,
  sortDatesAsc,
} from '#src/components/utils';
import type { RangeCalendarProps } from '#src/components/calendarInterfaces';
import { YearsOfTwentyYearsWidget } from '#src/components/YearsOfTwentyYearsWidget';
import { YEARS_COLUMNS } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';

export interface YearRangeCalendarProps extends Omit<RangeCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {}

const getYearCellDataAttributes = (
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
  isStartOfRow?: boolean,
  isEndOfRow?: boolean,
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
    'data-is-start-of-week-cell': isStartOfRow ? isStartOfRow : undefined,
    'data-is-end-of-week-cell': isEndOfRow ? isEndOfRow : undefined,
  };
};

export const YearRangeCalendar = ({
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  activeDateRangeEndValue,
  defaultActiveDateRangeEndValue,
  onActiveDateRangeEndValueChange,
  dateValue,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  onClick,
  ...props
}: YearRangeCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const dateInner = getDayjsDate(locale, timezone, dateValue);
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
    if (target.dataset.cellType === 'yearCell') {
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
    if (target.dataset.cellType === 'yearCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale, timezone);
      if (hoveredDate && (!activeDateInner || !hoveredDate.isSame(activeDateInner, 'year'))) {
        if (activeDateInner) {
          handleActiveDateChange(undefined);
          return;
        }
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
      return;
    }
    if (target.dataset.containerType !== 'yearsWrapper') {
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
      const newSelectedDateRangeValue: [string | undefined, string | undefined] = [undefined, undefined];
      if (!dateRangeActiveEnd) {
        if (dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeSecondChange(clickedCell);
          newSelectedDateRangeValue[0] = dayjsStateToString(dateRangeFirstState);
          newSelectedDateRangeValue[1] = clickedCell;
        } else {
          handleDateRangeFirstChange(clickedCell);
          newSelectedDateRangeValue[0] = clickedCell;
          newSelectedDateRangeValue[1] = dayjsStateToString(dateRangeSecondState);
        }
      } else {
        if (dateRangeFirstInner && dateRangeSecondInner) {
          if (dateRangeActiveEnd.isSame(dateRangeFirstInner, 'year')) {
            handleDateRangeSecondChange(clickedCell);
            newSelectedDateRangeValue[0] = dayjsStateToString(dateRangeFirstState);
            newSelectedDateRangeValue[1] = clickedCell;
          }
          if (dateRangeActiveEnd.isSame(dateRangeSecondInner, 'year')) {
            handleDateRangeFirstChange(clickedCell);
            newSelectedDateRangeValue[0] = clickedCell;
            newSelectedDateRangeValue[1] = dayjsStateToString(dateRangeSecondState);
          }
        } else if (dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeSecondChange(clickedCell);
          newSelectedDateRangeValue[0] = dayjsStateToString(dateRangeFirstState);
          newSelectedDateRangeValue[1] = clickedCell;
        } else {
          handleDateRangeFirstChange(clickedCell);
          newSelectedDateRangeValue[0] = clickedCell;
          newSelectedDateRangeValue[1] = dayjsStateToString(dateRangeSecondState);
        }
      }
      handleDateRangeActiveEndChange(clickedCell);
      onSelectedDateRangeValueChange?.(newSelectedDateRangeValue);
      //console.log(`first-${dateRangeFirstInner}, second-${dateRangeSecondInner}, activeEnd-${dateRangeActiveEnd}`);
    }
    onClick?.(e);
  };

  const dateIsInRange = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) return false;
    if (dateRangeFirstInner && dateRangeSecondInner) {
      const dates = sortDatesAsc(dateRangeFirstInner, dateRangeSecondInner);
      return dateCurrent.isBetween(dates[0], dates[1], 'year', '()');
    }
    return false;
  };
  const dateIsRangeStart = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !dateRangeFirstInner || !dateRangeSecondInner) return false;
    const dates = sortDatesAsc(dateRangeFirstInner, dateRangeSecondInner);
    return dateCurrent.isSame(dates[0], 'year');
  };
  const dateIsRangeEnd = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !dateRangeFirstInner || !dateRangeSecondInner) return false;
    const dates = sortDatesAsc(dateRangeFirstInner, dateRangeSecondInner);
    return dateCurrent.isSame(dates[1], 'year');
  };
  const dateIsRangeSelectingStart = (dateCurrent?: Dayjs) => {
    if (dateCurrent && activeDateInner && dateRangeActiveEnd) {
      const dates = sortDatesAsc(dateRangeActiveEnd, activeDateInner);
      /*const res = dateCurrent.isSame(dates[0], 'year');
      if (res) {
        //console.log(`range selecting start-${dayjsDateToString(dateCurrent)}`);
        console.log(`range selecting start-${dayjsDateToString(dateCurrent)}`);
      }
      return res;*/
      return dateCurrent.isSame(dates[0], 'year');
    }
    return false;
  };
  const dateIsRangeSelectingEnd = (dateCurrent?: Dayjs) => {
    if (dateCurrent && activeDateInner && dateRangeActiveEnd) {
      const dates = sortDatesAsc(dateRangeActiveEnd, activeDateInner);
      return dateCurrent.isSame(dates[1], 'year');
    }
    return false;
  };
  const dateIsInRangeSelecting = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) return false;
    if (dateRangeActiveEnd && activeDateInner) {
      const dates = sortDatesAsc(dateRangeActiveEnd, activeDateInner);
      return dateCurrent.isBetween(dates[0], dates[1], 'year', '()');
      //return dateCurrent.isBetween(dateRangeFirstInner, activeDateInner, 'year', '()');
    }
    return false;
  };

  //useMemo
  const renderDate = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale, timezone);
    if (!dateCurrent) return {};
    const cellContent = dateCurrent.year();
    //const disabled = dateIsDisabled(dateCurrent);
    //const hidden = dateIsHidden(dateCurrent);
    const isCurrent = dateCurrent.isSame(getCurrentDate(locale, timezone), 'year');
    const isActive = activeDateInner && dateCurrent.isSame(activeDateInner, 'year');
    const isInRange = dateIsInRange(dateCurrent);
    const isRangeStart = dateIsRangeStart(dateCurrent);
    const isRangeEnd = dateIsRangeEnd(dateCurrent);
    const isInRangeSelecting = dateIsInRangeSelecting(dateCurrent);
    const isRangeSelectingStart = dateIsRangeSelectingStart(dateCurrent);
    const isRangeSelectingEnd = dateIsRangeSelectingEnd(dateCurrent);
    const isStartOfRow = (dateCurrent.year() - 1) % YEARS_COLUMNS === 0;
    const isEndOfRow = (dateCurrent.year() - 1) % YEARS_COLUMNS === 3;

    const dataAttributes = getYearCellDataAttributes(
      dateCurrent.toISOString(),
      isCurrent,
      isActive,
      isInRange,
      isRangeStart,
      isRangeEnd,
      isInRangeSelecting,
      isRangeSelectingStart,
      isRangeSelectingEnd,
      isStartOfRow,
      isEndOfRow,
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
      isStartOfRow,
      isEndOfRow,
      isActive,
      ...dataAttributes,
    };
  };

  return (
    <YearsOfTwentyYearsWidget
      {...props}
      rangeCalendar={true}
      renderCell={renderDate}
      date={dayjsDateToString(dateInner)}
      locale={locale}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    />
  );
};

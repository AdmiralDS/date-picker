import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import {
  capitalizeFirstLetter,
  dateStringToDayjs,
  dayjsStateToString,
  getCurrentDate,
  sortDatesAsc,
} from '#src/components/utils';
import type { RangeCalendarProps } from '#src/components/calendarInterfaces';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';
import { MONTHS_COLUMNS } from '#src/components/MonthsOfYearWidget/constants.ts';

export interface MonthRangeCalendarProps extends Omit<RangeCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {}

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

export const MonthRangeCalendar = ({
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  activeDateRangeEndValue,
  defaultActiveDateRangeEndValue,
  onActiveDateRangeEndValueChange,
  disabledDate,
  dateValue,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  locale = 'ru',
  onClick,
  ...props
}: MonthRangeCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const dateInner = dateValue || getCurrentDate(locale);
  //</editor-fold>

  //<editor-fold desc="Hovered date">
  const [activeDateState, setActiveDateState] = useState<Dayjs | undefined>(defaultActiveDateValue);
  const activeDateInner = activeDateValue || activeDateState;

  const handleActiveDateChange = (date?: Dayjs) => {
    setActiveDateState(date);
    onActiveDateValueChange?.(date);
  };
  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'monthCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale);
      if (hoveredDate) {
        if (activeDateInner) {
          handleActiveDateChange(undefined);
          return;
        }
        handleActiveDateChange(hoveredDate);
      }
    }
  };
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'monthCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale);
      if (hoveredDate && (!activeDateInner || !hoveredDate.isSame(activeDateInner, 'month'))) {
        if (activeDateInner) {
          handleActiveDateChange(undefined);
          return;
        }
        handleActiveDateChange(hoveredDate);
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
  const [dateRangeFirstState, setDateRangeFirstState] = useState(defaultSelectedDateRangeValue?.[0]);
  const dateRangeFirstInner = selectedDateRangeValue?.[0] || dateRangeFirstState;

  const handleDateRangeFirstChange = (dateString?: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale);
    setDateRangeFirstState(dayjsDate);
  };
  //</editor-fold>

  //<editor-fold desc="Second date of range">
  const [dateRangeSecondState, setDateRangeSecondState] = useState(defaultSelectedDateRangeValue?.[1]);
  const dateRangeSecondInner = selectedDateRangeValue?.[1] || dateRangeSecondState;

  const handleDateRangeSecondChange = (dateString?: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale);
    setDateRangeSecondState(dayjsDate);
  };
  //</editor-fold>

  //<editor-fold desc="Active end of range">
  const setInitialDateRangeActiveEndState = () => {
    if (defaultActiveDateRangeEndValue) {
      return defaultActiveDateRangeEndValue;
    }
    if (dateRangeFirstInner && dateRangeSecondInner) {
      return dateRangeSecondInner;
    }
    if (dateRangeFirstInner && !dateRangeSecondInner) {
      return dateRangeFirstInner;
    }
    if (!dateRangeFirstInner && dateRangeSecondInner) {
      return dateRangeSecondInner;
    }
    return undefined;
  };
  const [dateRangeActiveEndState, setDateRangeActiveEndState] = useState<Dayjs | undefined>(
    setInitialDateRangeActiveEndState(),
  );
  const dateRangeActiveEndInner = activeDateRangeEndValue || dateRangeActiveEndState;
  const handleDateRangeActiveEndChange = (dateString?: string) => {
    const dateDayjs = dateStringToDayjs(dateString, locale);
    setDateRangeActiveEndState(dateDayjs);
    onActiveDateRangeEndValueChange?.(dateString);
  };
  //</editor-fold>

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    const clickedDate = dateStringToDayjs(clickedCell, locale);
    if (clickedDate) {
      const newSelectedDateRangeValue: [string | undefined, string | undefined] = [undefined, undefined];
      if (!dateRangeActiveEndInner) {
        if (dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeSecondChange(clickedCell);
          newSelectedDateRangeValue[0] = dayjsStateToString(dateRangeFirstInner);
          newSelectedDateRangeValue[1] = clickedCell;
        } else {
          handleDateRangeFirstChange(clickedCell);
          newSelectedDateRangeValue[0] = clickedCell;
          newSelectedDateRangeValue[1] = dayjsStateToString(dateRangeSecondInner);
        }
      } else {
        if (dateRangeFirstInner && dateRangeSecondInner) {
          if (dateRangeActiveEndInner.isSame(dateRangeFirstInner, 'month')) {
            handleDateRangeSecondChange(clickedCell);
            newSelectedDateRangeValue[0] = dayjsStateToString(dateRangeFirstInner);
            newSelectedDateRangeValue[1] = clickedCell;
          }
          if (dateRangeActiveEndInner.isSame(dateRangeSecondInner, 'month')) {
            handleDateRangeFirstChange(clickedCell);
            newSelectedDateRangeValue[0] = clickedCell;
            newSelectedDateRangeValue[1] = dayjsStateToString(dateRangeSecondInner);
          }
        } else if (dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeSecondChange(clickedCell);
          newSelectedDateRangeValue[0] = dayjsStateToString(dateRangeFirstInner);
          newSelectedDateRangeValue[1] = clickedCell;
        } else {
          handleDateRangeFirstChange(clickedCell);
          newSelectedDateRangeValue[0] = clickedCell;
          newSelectedDateRangeValue[1] = dayjsStateToString(dateRangeSecondInner);
        }
      }
      handleDateRangeActiveEndChange(clickedCell);
      onSelectedDateRangeValueChange?.(newSelectedDateRangeValue);
    }
    onClick?.(e);
  };

  const dateIsDisabled = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !disabledDate || !dateInner) {
      return false;
    }
    const datesArray = Array.from(Array(dateInner.endOf('month').date()).keys());
    return datesArray.every((v) => {
      const date = dateInner.date(v);
      return disabledDate(date);
    });
  };
  const dateIsInRange = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) return false;
    if (dateRangeFirstInner && dateRangeSecondInner) {
      const dates = sortDatesAsc(dateRangeFirstInner, dateRangeSecondInner);
      return dateCurrent.isBetween(dates[0], dates[1], 'month', '()');
    }
    return false;
  };
  const dateIsSelected = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) return false;
    if (dateRangeFirstInner && dateCurrent.isSame(dateRangeFirstInner, 'month')) {
      return true;
    }
    return !!(dateRangeSecondInner && dateCurrent.isSame(dateRangeSecondInner, 'month'));
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
    if (dateCurrent && activeDateInner && dateRangeActiveEndInner) {
      const dates = sortDatesAsc(dateRangeActiveEndInner, activeDateInner);
      return dateCurrent.isSame(dates[0], 'month');
    }
    return false;
  };
  const dateIsRangeSelectingEnd = (dateCurrent?: Dayjs) => {
    if (dateCurrent && activeDateInner && dateRangeActiveEndInner) {
      const dates = sortDatesAsc(dateRangeActiveEndInner, activeDateInner);
      return dateCurrent.isSame(dates[1], 'month');
    }
    return false;
  };
  const dateIsInRangeSelecting = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) return false;
    if (dateRangeActiveEndInner && activeDateInner) {
      const dates = sortDatesAsc(dateRangeActiveEndInner, activeDateInner);
      return dateCurrent.isBetween(dates[0], dates[1], 'month', '()');
    }
    return false;
  };

  //useMemo
  const renderDate = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale);
    if (!dateCurrent) return {};
    const cellContent = capitalizeFirstLetter(dateCurrent.format('MMMM'));
    const selected = dateIsSelected(dateCurrent);
    const disabled = dateIsDisabled(dateCurrent);
    //const hidden = dateIsHidden(dateCurrent);
    const isCurrent = dateCurrent.isSame(getCurrentDate(locale), 'month');
    const isActive = activeDateInner && dateCurrent.isSame(activeDateInner, 'month');
    const isInRange = dateIsInRange(dateCurrent);
    const isRangeStart = dateIsRangeStart(dateCurrent);
    const isRangeEnd = dateIsRangeEnd(dateCurrent);
    const isInRangeSelecting = dateIsInRangeSelecting(dateCurrent);
    const isRangeSelectingStart = dateIsRangeSelectingStart(dateCurrent);
    const isRangeSelectingEnd = dateIsRangeSelectingEnd(dateCurrent);
    const isStartOfRow = dateCurrent.month() % MONTHS_COLUMNS === 0;
    const isEndOfRow = dateCurrent.month() % MONTHS_COLUMNS === 2;

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
      isStartOfRow,
      isEndOfRow,
    );

    return {
      cellContent,
      selected,
      disabled,
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
    <MonthsOfYearWidget
      {...props}
      rangeCalendar={true}
      renderCell={renderDate}
      date={dateInner}
      locale={locale}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    />
  );
};

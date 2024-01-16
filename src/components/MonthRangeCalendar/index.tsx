import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import {
  capitalizeFirstLetter,
  dateIsInRange,
  dateIsInRangeSelecting,
  dateIsRangeEnd,
  dateIsRangeSelectingEnd,
  dateIsRangeSelectingStart,
  dateIsRangeStart,
  dateIsSelected,
  getCurrentDate,
  getSelectedDateRange,
  monthIsDisabled,
} from '#src/components/utils';
import type { RangeCalendarProps, RenderFunctionProps } from '#src/components/calendarInterfaces';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';
import { MONTHS_COLUMNS } from '#src/components/MonthsOfYearWidget/constants.ts';
import { DefaultMonthRangeCell } from '#src/components/DefaultCell';

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
  onCellMouseEnter,
  onCellClick,
  locale = 'ru',
  renderCell,
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

  const handleMouseEnter = (date: Dayjs, disabled?: boolean) => {
    if (!disabled) {
      handleActiveDateChange(date);
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    handleActiveDateChange(undefined);
  };
  //</editor-fold>

  //<editor-fold desc="First date of range">
  const [dateRangeFirstState, setDateRangeFirstState] = useState(defaultSelectedDateRangeValue?.[0]);
  const dateRangeFirstInner = selectedDateRangeValue?.[0] || dateRangeFirstState;

  const handleDateRangeFirstChange = (date?: Dayjs) => {
    setDateRangeFirstState(date);
  };
  //</editor-fold>

  //<editor-fold desc="Second date of range">
  const [dateRangeSecondState, setDateRangeSecondState] = useState(defaultSelectedDateRangeValue?.[1]);
  const dateRangeSecondInner = selectedDateRangeValue?.[1] || dateRangeSecondState;

  const handleDateRangeSecondChange = (date?: Dayjs) => {
    setDateRangeSecondState(date);
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

  const handleDateRangeActiveEndChange = (date?: Dayjs) => {
    setDateRangeActiveEndState(date);
    onActiveDateRangeEndValueChange?.(date);
  };
  //</editor-fold>

  const handleDateClick = (date: Dayjs, disabled?: boolean) => {
    if (!disabled) {
      const newSelectedDateRangeValue: [Dayjs | undefined, Dayjs | undefined] = [undefined, undefined];
      if (!dateRangeActiveEndInner) {
        if (dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeSecondChange(date);
          newSelectedDateRangeValue[0] = dateRangeFirstInner;
          newSelectedDateRangeValue[1] = date;
        } else {
          handleDateRangeFirstChange(date);
          newSelectedDateRangeValue[0] = date;
          newSelectedDateRangeValue[1] = dateRangeSecondInner;
        }
      } else {
        if (dateRangeFirstInner && dateRangeSecondInner) {
          if (dateRangeActiveEndInner.isSame(dateRangeFirstInner, 'month')) {
            handleDateRangeSecondChange(date);
            newSelectedDateRangeValue[0] = dateRangeFirstInner;
            newSelectedDateRangeValue[1] = date;
          }
          if (dateRangeActiveEndInner.isSame(dateRangeSecondInner, 'month')) {
            handleDateRangeFirstChange(date);
            newSelectedDateRangeValue[0] = date;
            newSelectedDateRangeValue[1] = dateRangeSecondInner;
          }
        } else if (dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeSecondChange(date);
          newSelectedDateRangeValue[0] = dateRangeFirstInner;
          newSelectedDateRangeValue[1] = date;
        } else {
          handleDateRangeFirstChange(date);
          newSelectedDateRangeValue[0] = date;
          newSelectedDateRangeValue[1] = dateRangeSecondInner;
        }
      }
      handleDateRangeActiveEndChange(date);
      onSelectedDateRangeValueChange?.(newSelectedDateRangeValue);
    }
  };

  const renderDefaultMonthRangeCell = ({
    date,
    selected: selectedRange,
    active,
    activeRangeEnd,
    onCellMouseEnter,
    onCellClick,
  }: RenderFunctionProps) => {
    const selectedDateRange = getSelectedDateRange(selectedRange);
    const cellContent = capitalizeFirstLetter(date.locale(locale).format('MMMM'));
    const selected = dateIsSelected('month', date, selectedDateRange);
    const disabled = monthIsDisabled(date, disabledDate);
    //const hidden = dateIsHidden(dateCurrent);
    const isCurrent = date.isSame(getCurrentDate(locale), 'month');
    const isActive = date.isSame(active, 'month');
    const isInRange = dateIsInRange('month', date, selectedDateRange);
    const isRangeStart = dateIsRangeStart('month', date, selectedDateRange);
    const isRangeEnd = dateIsRangeEnd('month', date, selectedDateRange);
    const isInRangeSelecting = dateIsInRangeSelecting('month', date, active, activeRangeEnd);
    const isRangeSelectingStart = dateIsRangeSelectingStart('month', date, active, activeRangeEnd, disabled);
    const isRangeSelectingEnd = dateIsRangeSelectingEnd('month', date, active, activeRangeEnd, disabled);
    const isStartOfRow = date.month() % MONTHS_COLUMNS === 0;
    const isEndOfRow = date.month() % MONTHS_COLUMNS === 2;
    return (
      <DefaultMonthRangeCell
        key={date.toString()}
        cellContent={cellContent}
        selected={selected}
        disabled={disabled}
        isCurrent={isCurrent}
        isActive={isActive}
        isInRange={isInRange}
        isRangeStart={isRangeStart}
        isRangeEnd={isRangeEnd}
        isInRangeSelecting={isInRangeSelecting}
        isRangeSelectingStart={isRangeSelectingStart}
        isRangeSelectingEnd={isRangeSelectingEnd}
        isStartOfRow={isStartOfRow}
        isEndOfRow={isEndOfRow}
        onMouseEnter={() => onCellMouseEnter?.(date, disabled)}
        onClick={() => onCellClick?.(date, disabled)}
        {...getMonthCellDataAttributes(
          date.toString(),
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
        )}
      />
    );
  };

  return (
    <MonthsOfYearWidget
      {...props}
      date={dateInner}
      selected={[dateRangeFirstInner, dateRangeSecondInner]}
      active={activeDateInner}
      activeRangeEnd={dateRangeActiveEndInner}
      locale={locale}
      onMouseLeave={handleMouseLeave}
      onCellMouseEnter={onCellMouseEnter || handleMouseEnter}
      onCellClick={onCellClick || handleDateClick}
      renderCell={renderCell || renderDefaultMonthRangeCell}
    />
  );
};

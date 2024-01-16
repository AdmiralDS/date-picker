import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import {
  dateIsInRange,
  dateIsInRangeSelecting,
  dateIsRangeEnd,
  dateIsRangeSelectingEnd,
  dateIsRangeSelectingStart,
  dateIsRangeStart,
  dateIsSelected,
  getCurrentDate,
  getSelectedDateRange,
} from '#src/components/utils';
import { DatesOfMonthWidget } from '#src/components/DatesOfMonthWidget';
import type { CellStateProps } from '#src/components/DatesOfMonthWidget/interfaces';
import { baseDayNameCellMixin } from '#src/components/DefaultCell/mixins.tsx';
import type { RangeCalendarProps, RenderFunctionProps } from '#src/components/calendarInterfaces';
import { DefaultDateRangeCell } from '#src/components/DefaultCell';

export interface DateRangeCalendarProps extends Omit<RangeCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {}

const getDateCellDataAttributes = (
  value?: string,
  isHoliday?: boolean,
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
    'data-is-holiday-cell': isHoliday ? isHoliday : undefined,
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

export const DateRangeCalendar = ({
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
  renderCell,
  locale = 'ru',
  ...props
}: DateRangeCalendarProps) => {
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
          if (dateRangeActiveEndInner.isSame(dateRangeFirstInner, 'date')) {
            handleDateRangeSecondChange(date);
            newSelectedDateRangeValue[0] = dateRangeFirstInner;
            newSelectedDateRangeValue[1] = date;
          }
          if (dateRangeActiveEndInner.isSame(dateRangeSecondInner, 'date')) {
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

  const dateIsDisabled = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !disabledDate) {
      return false;
    }
    return disabledDate(dateCurrent);
  };
  /*const dateIsHoliday = (dateCurrent?: Dayjs) => {
    return !!(
      dateCurrent &&
      dateCurrent.month() === dateInner.month() &&
      dateCurrent.date() !== 14 &&
      (dateCurrent.day() === 6 || dateCurrent.day() === 0 || dateCurrent.isSame(dayjs().locale(locale), 'date'))
    );
  };*/
  const dateIsHidden = (dateCurrent?: Dayjs) => {
    //return dateCurrent && (dateCurrent.isBefore(dateInner, 'month') || dateCurrent.isAfter(dateInner, 'month'));
    return dateCurrent && dateCurrent.month() !== dateInner.month();
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getDayNameCellState = (_: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  const renderDefaultRangeDateCell = ({
    date,
    selected: selectedRange,
    active,
    activeRangeEnd,
    onCellMouseEnter,
    onCellClick,
  }: RenderFunctionProps) => {
    const selectedDateRange = getSelectedDateRange(selectedRange);
    const cellContent = date.date();
    const selected = dateIsSelected('date', date, selectedDateRange);
    const disabled = dateIsDisabled(date);
    const hidden = dateIsHidden(date);
    const isCurrent = date.isSame(dayjs().locale(locale), 'date');
    //const isHoliday = dateIsHoliday(dateCurrent);
    //const isOutsideMonth = dateIsOutsideMonth(dateCurrent);
    const isInRange = dateIsInRange('date', date, selectedDateRange);
    const isRangeStart = dateIsRangeStart('date', date, selectedDateRange);
    const isRangeEnd = dateIsRangeEnd('date', date, selectedDateRange);
    const isInRangeSelecting = dateIsInRangeSelecting('date', date, active, activeRangeEnd);
    const isRangeSelectingStart = dateIsRangeSelectingStart('date', date, active, activeRangeEnd, disabled, hidden);
    const isRangeSelectingEnd = dateIsRangeSelectingEnd('date', date, active, activeRangeEnd, disabled, hidden);
    const isStartOfRow = date.isSame(date.startOf('week'), 'date') || date.isSame(date.startOf('month'), 'date');
    const isEndOfRow = date.isSame(date.endOf('week'), 'date') || date.isSame(date.endOf('month'), 'date');
    const isActive = date.isSame(active, 'date');

    return (
      <DefaultDateRangeCell
        key={date.toString()}
        cellContent={cellContent}
        selected={selected}
        disabled={disabled}
        hidden={hidden}
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
        onMouseEnter={() => onCellMouseEnter?.(date, disabled || !!hidden)}
        onClick={() => onCellClick?.(date, disabled || !!hidden)}
        {...getDateCellDataAttributes(
          date.toString(),
          false,
          //isOutsideMonth,
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
    <DatesOfMonthWidget
      {...props}
      date={dateInner}
      selected={[dateRangeFirstInner, dateRangeSecondInner]}
      active={activeDateInner}
      activeRangeEnd={dateRangeActiveEndInner}
      locale={locale}
      onMouseLeave={handleMouseLeave}
      onCellMouseEnter={handleMouseEnter}
      onCellClick={handleDateClick}
      renderCell={renderCell || renderDefaultRangeDateCell}
      dayNamesProps={{ dayNameCellState: getDayNameCellState }}
    />
  );
};

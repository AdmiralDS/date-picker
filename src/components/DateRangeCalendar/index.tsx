import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { dateStringToDayjs, getCurrentDate, sortDatesAsc } from '#src/components/utils';
import { DatesOfMonthWidget } from '#src/components/DatesOfMonthWidget';
import type { CellStateProps } from '#src/components/DatesOfMonthWidget/interfaces';
import { baseDayNameCellMixin } from '#src/components/DefaultCell/mixins.tsx';
import type { RangeCalendarProps } from '#src/components/calendarInterfaces';

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
  locale = 'ru',
  onClick,
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
  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'dateCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale);
      if (hoveredDate) {
        if (activeDateInner && (target.dataset.hiddenCell || target.dataset.disabledCell)) {
          handleActiveDateChange(undefined);
          return;
        }
        handleActiveDateChange(hoveredDate);
      }
    }
  };
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'dateCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale);
      if (hoveredDate && (!activeDateInner || !hoveredDate.isSame(activeDateInner, 'date'))) {
        if (target.dataset.hiddenCell || target.dataset.disabledCell) {
          if (activeDateInner) {
            handleActiveDateChange(undefined);
          }
          return;
        }
        handleActiveDateChange(hoveredDate);
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

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    const clickedCell = target.dataset.value;
    const clickedDate = dateStringToDayjs(clickedCell, locale);
    if (clickedDate && !target.dataset.hiddenCell && !target.dataset.disabledCell) {
      const newSelectedDateRangeValue: [Dayjs | undefined, Dayjs | undefined] = [undefined, undefined];
      if (!dateRangeActiveEndInner) {
        if (dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeSecondChange(clickedDate);
          newSelectedDateRangeValue[0] = dateRangeFirstInner;
          newSelectedDateRangeValue[1] = clickedDate;
        } else {
          handleDateRangeFirstChange(clickedDate);
          newSelectedDateRangeValue[0] = clickedDate;
          newSelectedDateRangeValue[1] = dateRangeSecondInner;
        }
      } else {
        if (dateRangeFirstInner && dateRangeSecondInner) {
          if (dateRangeActiveEndInner.isSame(dateRangeFirstInner, 'date')) {
            handleDateRangeSecondChange(clickedDate);
            newSelectedDateRangeValue[0] = dateRangeFirstInner;
            newSelectedDateRangeValue[1] = clickedDate;
          }
          if (dateRangeActiveEndInner.isSame(dateRangeSecondInner, 'date')) {
            handleDateRangeFirstChange(clickedDate);
            newSelectedDateRangeValue[0] = clickedDate;
            newSelectedDateRangeValue[1] = dateRangeSecondInner;
          }
        } else if (dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeSecondChange(clickedDate);
          newSelectedDateRangeValue[0] = dateRangeFirstInner;
          newSelectedDateRangeValue[1] = clickedDate;
        } else {
          handleDateRangeFirstChange(clickedDate);
          newSelectedDateRangeValue[0] = clickedDate;
          newSelectedDateRangeValue[1] = dateRangeSecondInner;
        }
      }
      handleDateRangeActiveEndChange(clickedDate);
      onSelectedDateRangeValueChange?.(newSelectedDateRangeValue);
      //console.log(`first-${dateRangeFirstInner}, second-${dateRangeSecondInner}, activeEnd-${dateRangeActiveEnd}`);
    }
    onClick?.(e);
  };

  const dateIsDisabled = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !disabledDate) {
      return false;
    }
    return disabledDate(dateCurrent);
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
  const dateIsSelected = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) return false;
    if (dateRangeFirstInner && dateCurrent.isSame(dateRangeFirstInner, 'date')) {
      return true;
    }
    if (dateRangeSecondInner && dateCurrent.isSame(dateRangeSecondInner, 'date')) {
      return true;
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
  const dateIsRangeSelectingStart = (dateCurrent?: Dayjs, disabled?: boolean, hidden?: boolean) => {
    if (dateCurrent && activeDateInner && dateRangeActiveEndInner && !disabled && !hidden) {
      const dates = sortDatesAsc(dateRangeActiveEndInner, activeDateInner);
      return dateCurrent.isSame(dates[0], 'date');
    }
    return false;
  };
  const dateIsRangeSelectingEnd = (dateCurrent?: Dayjs, disabled?: boolean, hidden?: boolean) => {
    if (dateCurrent && activeDateInner && dateRangeActiveEndInner && !disabled && !hidden) {
      const dates = sortDatesAsc(dateRangeActiveEndInner, activeDateInner);
      return dateCurrent.isSame(dates[1], 'date');
    }
    return false;
  };
  const dateIsInRangeSelecting = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) return false;
    if (dateRangeActiveEndInner && activeDateInner) {
      const dates = sortDatesAsc(dateRangeActiveEndInner, activeDateInner);
      return dateCurrent.isBetween(dates[0], dates[1], 'date', '()');
      //return dateCurrent.isBetween(dateRangeFirstInner, activeDateInner, 'date', '()');
    }
    return false;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getDayNameCellState = (_: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  //useMemo
  const renderDate = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale);
    if (!dateCurrent) return {};
    const cellContent = dateCurrent.date();
    const selected = dateIsSelected(dateCurrent);
    const disabled = dateIsDisabled(dateCurrent);
    const hidden = dateIsHidden(dateCurrent);
    const isCurrent = dateCurrent && dateCurrent.isSame(dayjs().locale(locale), 'date');
    const isHoliday = dateIsHoliday(dateCurrent);
    //const isOutsideMonth = dateIsOutsideMonth(dateCurrent);
    const isInRange = dateIsInRange(dateCurrent);
    const isRangeStart = dateIsRangeStart(dateCurrent);
    const isRangeEnd = dateIsRangeEnd(dateCurrent);
    const isInRangeSelecting = dateIsInRangeSelecting(dateCurrent);
    const isRangeSelectingStart = dateIsRangeSelectingStart(dateCurrent, disabled, hidden);
    const isRangeSelectingEnd = dateIsRangeSelectingEnd(dateCurrent, disabled, hidden);
    const isStartOfRow =
      dateCurrent.isSame(dateCurrent.startOf('week'), 'date') ||
      dateCurrent.isSame(dateCurrent.startOf('month'), 'date');
    const isEndOfRow =
      dateCurrent.isSame(dateCurrent.endOf('week'), 'date') || dateCurrent.isSame(dateCurrent.endOf('month'), 'date');
    const isActive = activeDateInner?.isSame(dateCurrent, 'date');

    const dataAttributes = getDateCellDataAttributes(
      dateCurrent.toISOString(),
      isHoliday,
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
    );

    return {
      cellContent,
      selected,
      disabled,
      hidden,
      isCurrent,
      isHoliday,
      //isOutsideMonth,
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
    <DatesOfMonthWidget
      {...props}
      rangeCalendar={true}
      renderCell={renderDate}
      date={dateInner}
      locale={locale}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      dayNamesProps={{ dayNameCellState: getDayNameCellState }}
    />
  );
};

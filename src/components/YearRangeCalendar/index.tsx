import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import {
  dateStringToDayjs,
  getCurrentDate,
  getDateByDayOfYear,
  getDaysInYear,
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
  disabledDate,
  dateValue,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  locale = 'ru',
  onClick,
  ...props
}: YearRangeCalendarProps) => {
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
    if (target.dataset.cellType === 'yearCell') {
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
    if (target.dataset.cellType === 'yearCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale);
      if (hoveredDate && (!activeDateInner || !hoveredDate.isSame(activeDateInner, 'year'))) {
        if (activeDateInner) {
          handleActiveDateChange(undefined);
          return;
        }
        handleActiveDateChange(hoveredDate);
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
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    const clickedDate = dateStringToDayjs(clickedCell, locale);
    if (clickedDate) {
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
          if (dateRangeActiveEndInner.isSame(dateRangeFirstInner, 'year')) {
            handleDateRangeSecondChange(clickedDate);
            newSelectedDateRangeValue[0] = dateRangeFirstInner;
            newSelectedDateRangeValue[1] = clickedDate;
          }
          if (dateRangeActiveEndInner.isSame(dateRangeSecondInner, 'year')) {
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
    if (!dateCurrent || !disabledDate || !dateInner) {
      return false;
    }
    const datesArray = Array.from(Array(getDaysInYear(dateInner)).keys());
    return datesArray.every((v) => {
      const date = getDateByDayOfYear(dateInner, v);
      return disabledDate(date);
    });
  };
  const dateIsInRange = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) return false;
    if (dateRangeFirstInner && dateRangeSecondInner) {
      const dates = sortDatesAsc(dateRangeFirstInner, dateRangeSecondInner);
      return dateCurrent.isBetween(dates[0], dates[1], 'year', '()');
    }
    return false;
  };
  const dateIsSelected = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) return false;
    if (dateRangeFirstInner && dateCurrent.isSame(dateRangeFirstInner, 'year')) {
      return true;
    }
    if (dateRangeSecondInner && dateCurrent.isSame(dateRangeSecondInner, 'year')) {
      return true;
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
    if (dateCurrent && activeDateInner && dateRangeActiveEndInner) {
      const dates = sortDatesAsc(dateRangeActiveEndInner, activeDateInner);
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
    if (dateCurrent && activeDateInner && dateRangeActiveEndInner) {
      const dates = sortDatesAsc(dateRangeActiveEndInner, activeDateInner);
      return dateCurrent.isSame(dates[1], 'year');
    }
    return false;
  };
  const dateIsInRangeSelecting = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) return false;
    if (dateRangeActiveEndInner && activeDateInner) {
      const dates = sortDatesAsc(dateRangeActiveEndInner, activeDateInner);
      return dateCurrent.isBetween(dates[0], dates[1], 'year', '()');
      //return dateCurrent.isBetween(dateRangeFirstInner, activeDateInner, 'year', '()');
    }
    return false;
  };

  //useMemo
  const renderDate = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale);
    if (!dateCurrent) return {};
    const cellContent = dateCurrent.year();
    const selected = dateIsSelected(dateCurrent);
    const disabled = dateIsDisabled(dateCurrent);
    //const hidden = dateIsHidden(dateCurrent);
    const isCurrent = dateCurrent.isSame(getCurrentDate(locale), 'year');
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
      disabled,
      selected,
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
      renderCellWithString={renderDate}
      date={dateInner}
      locale={locale}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    />
  );
};

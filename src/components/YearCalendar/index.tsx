import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import { getCurrentDate, getDateByDayOfYear, getDaysInYear } from '#src/components/utils';
import { YearsOfTwentyYearsWidget } from '#src/components/YearsOfTwentyYearsWidget';
import type { SingleCalendarProps } from '#src/components/calendarInterfaces.ts';
import { DefaultYearCell } from '#src/components/DefaultCell';

export interface YearCalendarProps extends Omit<SingleCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {}

export const YearCalendar = ({
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  disabledDate,
  dateValue,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  renderCell,
  locale = 'ru',
  ...props
}: YearCalendarProps) => {
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

  const handleMouseEnter = (date: Dayjs, disabled: boolean) => {
    if (!disabled) {
      handleActiveDateChange(date);
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    handleActiveDateChange(undefined);
  };
  //</editor-fold>

  //<editor-fold desc="Selected date">
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(defaultSelectedDateValue);
  const selectedDateInner = selectedDateValue || selectedDateState;

  const handleSelectedDateChange = (date: Dayjs) => {
    setSelectedDateState(date);
    onSelectedDateValueChange?.(date);
  };

  const handleDateClick = (date: Dayjs, disabled: boolean) => {
    if (!disabled) {
      handleSelectedDateChange(date);
    }
  };
  //</editor-fold>

  const getYearCellDataAttributes = (value?: string, isCurrent?: boolean, isActive?: boolean): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-year': isCurrent ? isCurrent : undefined,
      'data-is-active-year': isActive ? isActive : undefined,
    };
  };

  const dateIsDisabled = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !disabledDate) {
      return false;
    }
    const datesArray = Array.from(Array(getDaysInYear(dateCurrent)).keys());
    return datesArray.every((v) => {
      const date = getDateByDayOfYear(dateCurrent, v);
      return disabledDate(date);
    });
  };

  const renderDefaultYearCell = (date: Dayjs) => {
    const disabled = dateIsDisabled(date);
    const isCurrent = date && date.isSame(getCurrentDate(locale), 'year');
    const isActive = activeDateInner && date.isSame(activeDateInner, 'year');
    return (
      <DefaultYearCell
        key={date.toString()}
        cellContent={date.year()}
        disabled={disabled}
        selected={date && selectedDateInner && date.isSame(selectedDateInner, 'year')}
        isCurrent={isCurrent}
        isActive={isActive}
        onMouseEnter={() => handleMouseEnter(date, disabled)}
        onClick={() => handleDateClick(date, disabled)}
        {...getYearCellDataAttributes(date.toString(), isCurrent, isActive)}
      />
    );
  };

  return (
    <YearsOfTwentyYearsWidget
      {...props}
      date={dateInner}
      locale={locale}
      onMouseLeave={handleMouseLeave}
      renderCell={renderCell || renderDefaultYearCell}
    />
  );
};

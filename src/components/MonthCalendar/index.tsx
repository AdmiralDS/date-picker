import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import { capitalizeFirstLetter, getCurrentDate } from '#src/components/utils';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';
import type { SingleCalendarProps } from '#src/components/calendarInterfaces.ts';
import { DefaultMonthCell } from '#src/components/DefaultCell';

export interface MonthCalendarProps extends Omit<SingleCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {}

export const MonthCalendar = ({
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
}: MonthCalendarProps) => {
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

  const getMonthCellDataAttributes = (value?: string, isCurrent?: boolean, isActive?: boolean): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-month': isCurrent ? isCurrent : undefined,
      'data-is-active-month': isActive ? isActive : undefined,
    };
  };

  const dateIsDisabled = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !disabledDate) {
      return false;
    }
    const datesArray = Array.from(Array(dateCurrent.endOf('month').date()).keys());
    return datesArray.every((v) => {
      const date = dateCurrent.date(v);
      return disabledDate(date);
    });
  };

  const renderDefaultMonthCell = (date: Dayjs) => {
    const disabled = dateIsDisabled(date);
    const isCurrent = date.isSame(getCurrentDate(locale), 'month');
    const isActive = activeDateInner && date.isSame(activeDateInner, 'month');
    return (
      <DefaultMonthCell
        key={date.toString()}
        cellContent={capitalizeFirstLetter(date.locale(locale).format('MMMM'))}
        disabled={disabled}
        selected={selectedDateInner && date.isSame(selectedDateInner, 'month')}
        isCurrent={isCurrent}
        isActive={isActive}
        onMouseEnter={() => handleMouseEnter(date, disabled)}
        onClick={() => handleDateClick(date, disabled)}
        {...getMonthCellDataAttributes(date.toString(), isCurrent, isActive)}
      />
    );
  };

  return (
    <MonthsOfYearWidget
      {...props}
      date={dateInner}
      locale={locale}
      onMouseLeave={handleMouseLeave}
      renderCell={renderCell || renderDefaultMonthCell}
    />
  );
};

import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import { capitalizeFirstLetter, getCurrentDate, getSelectedDate, monthIsDisabled } from '#src/components/utils';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';
import type { RenderFunctionProps, SingleCalendarProps } from '#src/components/calendarInterfaces.ts';
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

  const renderDefaultMonthCell = ({ date, selected, active }: RenderFunctionProps) => {
    const selectedDate = getSelectedDate(selected);
    const disabled = monthIsDisabled(date, disabledDate);
    const isCurrent = date.isSame(getCurrentDate(locale), 'month');
    const isActive = date.isSame(active, 'month');
    return (
      <DefaultMonthCell
        key={date.toString()}
        cellContent={capitalizeFirstLetter(date.locale(locale).format('MMMM'))}
        disabled={disabled}
        selected={date.isSame(selectedDate, 'month')}
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
      selected={selectedDateInner}
      active={activeDateInner}
      locale={locale}
      onMouseLeave={handleMouseLeave}
      renderCell={renderCell || renderDefaultMonthCell}
    />
  );
};

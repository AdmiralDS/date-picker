import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { getCurrentDate } from '#src/components/utils';
import { DatesOfMonthWidget } from '#src/components/DatesOfMonthWidget';
import type { CellStateProps } from '#src/components/DatesOfMonthWidget/interfaces';
import { baseDayNameCellMixin } from '#src/components/DefaultCell/mixins.tsx';
import type { SingleCalendarProps } from '#src/components/calendarInterfaces';
import { MemoDefaultDateCell } from '#src/components/DefaultCell';

export interface DateCalendarProps extends Omit<SingleCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {}

export const DateCalendar = ({
  disabledDate,
  dateValue,
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  cell,
  locale = 'ru',
  ...props
}: DateCalendarProps) => {
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

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'dateCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale);
    const disabled = targetDataAttributes['disabled'] === 'true';
    if (!disabled && !date.isSame(activeDateInner)) {
      handleActiveDateChange(date);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (_) => {
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

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'dateCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale);
    const disabled = targetDataAttributes['disabled'] === 'true';
    if (!disabled) {
      handleSelectedDateChange(date);
    }
  };
  //</editor-fold>

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getDayNameCellState = (_: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  return (
    <DatesOfMonthWidget
      {...props}
      dayNamesProps={{ dayNameCellState: getDayNameCellState }}
      date={dateInner}
      selected={selectedDateInner}
      active={activeDateInner}
      disabledDate={disabledDate}
      locale={locale}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onClick={handleDateClick}
      cell={cell || MemoDefaultDateCell}
    />
  );
};

import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { getCurrentDate } from '#lib/utils';
import { DatesOfMonthWidget } from '#lib/DatesOfMonthWidget';
import type { CellStateProps } from '#lib/DatesOfMonthWidget/interfaces';
import { baseDayNameCellMixin } from '#lib/DefaultCell/mixins.tsx';
import type { SingleCalendarProps } from '#lib/calendarInterfaces';
import { MemoDefaultDateCell } from '#lib/DefaultCell';
import { ruLocale } from '#lib/calendarConstants.ts';

export interface DateCalendarProps extends Omit<SingleCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {}

export const DateCalendar = ({
  dateAttributes,
  dateValue,
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  cell,
  locale = ruLocale,
  ...props
}: DateCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const dateInner = dateValue || getCurrentDate(locale?.localeName);
  //</editor-fold>

  //<editor-fold desc="Hovered date">
  const [activeDateState, setActiveDateState] = useState<Dayjs | undefined>(defaultActiveDateValue);
  const activeDateInner = activeDateValue || activeDateState;

  const [shouldHandleMouseOver, setShouldHandleMouseOver] = useState(false);

  const handleActiveDateChange = (date?: Dayjs) => {
    setActiveDateState(date);
    if (shouldHandleMouseOver) {
      onActiveDateValueChange?.(date);
    }
  };

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'dateCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName);
    const disabled = targetDataAttributes['disabledCell'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
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
    e.preventDefault();
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'dateCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName);
    const disabled = targetDataAttributes['disabledCell'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
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
      dateAttributes={dateAttributes}
      locale={locale}
      onMouseEnter={() => setShouldHandleMouseOver(true)}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onMouseDown={handleDateClick}
      cell={cell || MemoDefaultDateCell}
    />
  );
};

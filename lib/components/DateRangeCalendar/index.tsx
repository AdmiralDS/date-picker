import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { getCurrentDate } from '#lib/utils';
import { DatesOfMonthWidget } from '#lib/DatesOfMonthWidget';
import type { CellStateProps } from '#lib/DatesOfMonthWidget/interfaces';
import { baseDayNameCellMixin } from '#lib/DefaultCell/mixins.tsx';
import type { RangeCalendarProps } from '#lib/calendarInterfaces';
import { MemoDefaultDateRangeCell } from '#lib/DefaultCell';
import { ruLocale } from '#lib/calendarConstants.ts';

export interface DateRangeCalendarProps extends Omit<RangeCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {}

export const DateRangeCalendar = ({
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  activeDateRangeEndValue,
  defaultActiveDateRangeEndValue,
  onActiveDateRangeEndValueChange,
  dateAttributes,
  dateValue,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  cell,
  locale = ruLocale,
  ...props
}: DateRangeCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const dateInner = dateValue || getCurrentDate(locale?.localeName);
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
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName);
    const disabled = targetDataAttributes['disabledCell'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
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

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'dateCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName);
    const disabled = targetDataAttributes['disabledCell'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getDayNameCellState = (_: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  return (
    <DatesOfMonthWidget
      {...props}
      date={dateInner}
      selected={[dateRangeFirstInner, dateRangeSecondInner]}
      active={activeDateInner}
      activeRangeEnd={dateRangeActiveEndInner}
      dateAttributes={dateAttributes}
      locale={locale}
      dayNamesProps={{ dayNameCellState: getDayNameCellState }}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onClick={handleDateClick}
      cell={cell || MemoDefaultDateRangeCell}
      range={true}
    />
  );
};

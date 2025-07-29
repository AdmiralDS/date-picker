import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { getCurrentDate } from '#lib/utils';
import type { RangeCalendarProps } from '#lib/calendarInterfaces';
import { MonthsWidget } from '#lib/MonthsWidget';
import { MemoDefaultMonthRangeCell } from '#lib/DefaultCell';
import { ruLocale } from '#lib/calendarConstants.ts';
import type { DateRange } from 'lib/types';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface MonthRangeCalendarProps extends Omit<RangeCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {}

export const MonthRangeCalendar = ({
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
  locale = ruLocale,
  cell,
  ...props
}: MonthRangeCalendarProps) => {
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
    if (targetDataAttributes['cellType'] !== 'monthCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName || 'ru');
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
    if (targetDataAttributes['cellType'] !== 'monthCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName || 'ru');
    const disabled = targetDataAttributes['disabledCell'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled) {
      let first: Dayjs | undefined = undefined;
      let second: Dayjs | undefined = undefined;
      if (!dateRangeActiveEndInner) {
        if (dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeSecondChange(date);
          first = dateRangeFirstInner;
          second = date;
        } else {
          handleDateRangeFirstChange(date);
          first = date;
          second = dateRangeSecondInner;
        }
      } else {
        if (dateRangeFirstInner && dateRangeSecondInner) {
          if (dateRangeActiveEndInner.isSame(dateRangeFirstInner, 'month')) {
            handleDateRangeSecondChange(date);
            first = dateRangeFirstInner;
            second = date;
          }
          if (dateRangeActiveEndInner.isSame(dateRangeSecondInner, 'month')) {
            handleDateRangeFirstChange(date);
            first = date;
            second = dateRangeSecondInner;
          }
        } else if (dateRangeFirstInner && !dateRangeSecondInner) {
          handleDateRangeSecondChange(date);
          first = dateRangeFirstInner;
          second = date;
        } else {
          handleDateRangeFirstChange(date);
          first = date;
          second = dateRangeSecondInner;
        }
      }
      const newSelectedDateRangeValue: DateRange = [first, second];
      handleDateRangeActiveEndChange(date);
      onSelectedDateRangeValueChange?.(newSelectedDateRangeValue);
    }
  };

  return (
    <MonthsWidget
      {...props}
      date={dateInner}
      selected={[dateRangeFirstInner, dateRangeSecondInner]}
      active={activeDateInner}
      activeRangeEnd={dateRangeActiveEndInner}
      dateAttributes={dateAttributes}
      locale={locale}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onClick={handleDateClick}
      cell={cell || MemoDefaultMonthRangeCell}
      range={true}
    />
  );
};

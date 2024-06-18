import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { getCurrentDate } from '#lib/utils';
import { YearsOfTwentyYearsWidget } from '#lib/YearsOfTwentyYearsWidget';
import type { SingleCalendarProps } from '#lib/calendarInterfaces.ts';
import { MemoDefaultYearCell } from '#lib/DefaultCell';
import { ruLocale } from '#lib/calendarConstants.ts';

export interface YearCalendarProps extends Omit<SingleCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {}

export const YearCalendar = ({
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  dateAttributes,
  dateValue,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  cell,
  locale = ruLocale,
  ...props
}: YearCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const dateInner = dateValue || getCurrentDate();
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
    if (targetDataAttributes['cellType'] !== 'yearCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName);
    const disabled = targetDataAttributes['disabledCell'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled && !date.isSame(activeDateInner)) {
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

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'yearCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName);
    const disabled = targetDataAttributes['disabledCell'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled) {
      handleSelectedDateChange(date);
    }
  };
  //</editor-fold>

  return (
    <YearsOfTwentyYearsWidget
      {...props}
      date={dateInner}
      selected={selectedDateInner}
      active={activeDateInner}
      dateAttributes={dateAttributes}
      locale={locale}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onMouseDown={handleDateClick}
      cell={cell || MemoDefaultYearCell}
    />
  );
};

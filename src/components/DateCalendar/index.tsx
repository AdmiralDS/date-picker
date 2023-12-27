import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { getCurrentDate } from '#src/components/utils';
import { DatesOfMonthWidget } from '#src/components/DatesOfMonthWidget';
import type { CellStateProps } from '#src/components/DatesOfMonthWidget/interfaces';
import { baseDayNameCellMixin } from '#src/components/DefaultCell/mixins.tsx';
import type { SingleCalendarProps } from '#src/components/calendarInterfaces';
import { DefaultDateCell } from '#src/components/DefaultCell';

export interface DateCalendarProps extends Omit<SingleCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {}

const getDateCellDataAttributes = (
  value?: string,
  isHoliday?: boolean,
  //isOutsideMonth?: boolean,
  isCurrent?: boolean,
  isActive?: boolean,
) => {
  return {
    'data-value': value ? value : undefined,
    'data-is-holiday-cell': isHoliday ? isHoliday : undefined,
    //'data-is-outside-month-cell': isOutsideMonth ? isOutsideMonth : undefined,
    'data-is-current-day-cell': isCurrent ? isCurrent : undefined,
    'data-is-active-cell': isActive ? isActive : undefined,
  };
};

export const DateCalendar = ({
  disabledDate,
  dateValue,
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  renderCell,
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

  const handleMouseEnter = (date: Dayjs, hidden: boolean, disabled: boolean) => {
    if (!hidden && !disabled) {
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

  const handleDateClick = (date: Dayjs, hidden: boolean, disabled: boolean) => {
    if (!hidden && !disabled) {
      handleSelectedDateChange(date);
    }
  };
  //</editor-fold>

  const dateIsSelected = (dateCurrent?: Dayjs) => {
    return dateCurrent && selectedDateInner && dateCurrent.isSame(selectedDateInner, 'date');
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
    return dateCurrent && dateCurrent.month() !== dateInner.month();
    //return dateCurrent && dateCurrent.isAfter(dateInner, 'month');
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getDayNameCellState = (_: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  const renderDefaultDateCell = (date: Dayjs) => {
    const cellContent = date.date();
    const hidden = dateIsHidden(date);
    const disabled = dateIsDisabled(date);
    const isCurrent = date && date.isSame(dayjs().locale(locale), 'date');
    const isHoliday = dateIsHoliday(date);
    //const isOutsideMonth = dateIsOutsideMonth(dateCurrent);
    const isActive = activeDateInner?.isSame(date, 'date');
    return (
      <DefaultDateCell
        key={date.toString()}
        cellContent={cellContent}
        disabled={disabled}
        selected={dateIsSelected(date)}
        hidden={hidden}
        isCurrent={isCurrent}
        isActive={isActive}
        isHoliday={isHoliday}
        onMouseEnter={() => handleMouseEnter(date, !!hidden, disabled)}
        onClick={() => handleDateClick(date, !!hidden, disabled)}
        {...getDateCellDataAttributes(
          date.toString(),
          isHoliday,
          //isOutsideMonth,
          isCurrent,
          isActive,
        )}
      />
    );
  };

  return (
    <DatesOfMonthWidget
      {...props}
      renderCell={renderCell || renderDefaultDateCell}
      date={dateInner}
      locale={locale}
      onMouseLeave={handleMouseLeave}
      dayNamesProps={{ dayNameCellState: getDayNameCellState }}
    />
  );
};

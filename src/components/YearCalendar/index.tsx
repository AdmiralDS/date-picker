import type { MouseEventHandler } from 'react';
import { memo, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { getCurrentDate } from '#src/components/utils';
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
  cell,
  locale = 'ru',
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

  const handleMouseEnter = (date: Dayjs, disabled?: boolean) => {
    if (!disabled && !date.isSame(activeDateInner)) {
      handleActiveDateChange(date);
    }
  };
  const zzz: MouseEventHandler<HTMLDivElement> = (e) => {
    const date = dayjs((e.target as HTMLDivElement).dataset['value']);
    const disabled = (e.target as HTMLDivElement).dataset['disabled'] === 'true';
    handleMouseEnter(date, disabled);
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

  const handleDateClick = (date: Dayjs, disabled?: boolean) => {
    if (!disabled) {
      handleSelectedDateChange(date);
    }
  };
  const yyy: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const date = dayjs((e.target as HTMLDivElement).dataset['value']);
    const disabled = (e.target as HTMLDivElement).dataset['disabled'] === 'true';
    handleDateClick(date, disabled);
  };
  //</editor-fold>

  /*const getYearCellDataAttributes = (value?: string, isCurrent?: boolean, isActive?: boolean): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-year': isCurrent ? isCurrent : undefined,
      'data-is-active-year': isActive ? isActive : undefined,
    };
  };

  const YearCell = ({ date, selected, active, onCellMouseEnter, onCellClick }: RenderFunctionProps) => {
    const selectedDate = getSelectedDate(selected);
    const disabled = yearIsDisabled(date, disabledDate);
    const isCurrent = date.isSame(getCurrentDate(locale), 'year');
    const isActive = date.isSame(active, 'year');
    return (
      <DefaultYearCell
        key={date.toString()}
        cellContent={date.year()}
        disabled={disabled}
        selected={date.isSame(selectedDate, 'year')}
        isCurrent={isCurrent}
        isActive={isActive}
        onMouseEnter={() => onCellMouseEnter?.(date, disabled)}
        onClick={() => onCellClick?.(date, disabled)}
        {...getYearCellDataAttributes(date.toString(), isCurrent, isActive)}
      />
    );
  };
  const MemoCell = memo(cell ? cell : YearCell);*/
  const MemoCell = memo(cell ? cell : DefaultYearCell);

  return (
    <YearsOfTwentyYearsWidget
      {...props}
      date={dateInner}
      selected={selectedDateInner}
      active={activeDateInner}
      disabledDate={disabledDate}
      locale={locale}
      onMouseLeave={handleMouseLeave}
      onMouseOver={zzz}
      onClick={yyy}
      //onCellMouseEnter={handleMouseEnter}
      //onCellClick={handleDateClick}
      cell={MemoCell}
    />
  );
};

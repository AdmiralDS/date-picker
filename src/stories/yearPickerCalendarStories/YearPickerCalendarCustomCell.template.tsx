import type { MouseEventHandler } from 'react';
//import { useState } from 'react';

import type { YearPickerCalendarProps } from '@admiral-ds/date-picker';
import { YearPickerCalendar } from '#src/components/YearPickerCalendar';
//import type { Dayjs } from 'dayjs';
import { getCurrentDate, getSelectedDate, yearIsDisabled } from '#src/components/utils.ts';
import { DefaultYearCell } from '#src/components/DefaultCell';
import type { RenderFunctionProps } from '#src/components/calendarInterfaces.ts';

export const YearPickerCalendarCustomCellTemplate = ({ locale, ...props }: YearPickerCalendarProps) => {
  const localeInner = locale || 'ru';
  //const [activeDateState, setActiveDateState] = useState<Dayjs | undefined>();
  //const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>();

  const getYearCellDataAttributes = (value?: string, isCurrent?: boolean, isActive?: boolean): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-year': isCurrent ? isCurrent : undefined,
      'data-is-active-year': isActive ? isActive : undefined,
    };
  };

  const renderDefaultYearCell = ({ date, selected, active, onCellMouseEnter, onCellClick }: RenderFunctionProps) => {
    const selectedDate = getSelectedDate(selected);
    const disabled = yearIsDisabled(date);
    const isCurrent = date.isSame(getCurrentDate(locale), 'year');
    const isActive = date.isSame(active, 'year');
    console.log(`render custom cell`);
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

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <YearPickerCalendar {...props} renderCell={renderDefaultYearCell} onClick={handleClick} locale={localeInner} />
  );
};

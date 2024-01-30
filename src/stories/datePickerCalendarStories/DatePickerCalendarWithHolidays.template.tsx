import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import type { DatePickerCalendarProps } from '@admiral-ds/date-picker';
import { DatePickerCalendar } from '@admiral-ds/date-picker';
import type { DateAttributes } from '#src/components/DefaultCell';

export const DatePickerCalendarWithHolidaysTemplate = (props: DatePickerCalendarProps) => {
  const dateAttrs: (date: Dayjs) => DateAttributes = (date: Dayjs) => {
    return {
      disabled: date.isBefore(dayjs()),
      isHoliday: date.day() === 0 || date.day() === 6 || date.isSame(dayjs(), 'date'),
    };
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <DatePickerCalendar {...props} onClick={handleClick} dateAttributes={dateAttrs} />;
};

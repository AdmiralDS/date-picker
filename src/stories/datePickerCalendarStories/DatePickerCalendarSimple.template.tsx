import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import type { DatePickerCalendarProps } from '@admiral-ds/date-picker';
import { DatePickerCalendar } from '@admiral-ds/date-picker';
import type { DateAttributes } from '#src/components/DefaultCell';

export const DatePickerCalendarSimpleTemplate = ({ locale, ...props }: DatePickerCalendarProps) => {
  const localeInner = locale || 'ru';

  const dateAttrs: (date: Dayjs) => DateAttributes = (date: Dayjs) => {
    return { disabled: date.isBefore(dayjs()) };
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <DatePickerCalendar {...props} onClick={handleClick} locale={localeInner} dateAttributes={dateAttrs} />;
};

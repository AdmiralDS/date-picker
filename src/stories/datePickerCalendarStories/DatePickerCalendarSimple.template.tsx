import type { MouseEventHandler } from 'react';

import type { DatePickerCalendarProps } from '@admiral-ds/date-picker';
import { DatePickerCalendar } from '@admiral-ds/date-picker';

export const DatePickerCalendarSimpleTemplate = ({ locale, ...props }: DatePickerCalendarProps) => {
  const localeInner = locale || 'ru';

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <DatePickerCalendar {...props} onClick={handleClick} locale={localeInner} />;
};

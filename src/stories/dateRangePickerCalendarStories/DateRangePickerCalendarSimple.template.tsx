import type { MouseEventHandler } from 'react';

import type { DateRangePickerCalendarProps } from '@admiral-ds/date-picker';
import { DateRangePickerCalendar } from '@admiral-ds/date-picker';

export const DateRangePickerCalendarSimpleTemplate = ({ locale, ...props }: DateRangePickerCalendarProps) => {
  const localeInner = locale || 'ru';

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <DateRangePickerCalendar {...props} onClick={handleClick} locale={localeInner} />;
};

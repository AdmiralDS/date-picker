import type { MouseEventHandler } from 'react';

import type { DatePickerCalendarProps } from '@admiral-ds/date-picker';
import { YearPickerCalendar } from '#src/components/YearPickerCalendar';

export const YearPickerCalendarSimpleTemplate = ({ locale, ...props }: DatePickerCalendarProps) => {
  const localeInner = locale || 'ru';

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <YearPickerCalendar {...props} onClick={handleClick} locale={localeInner} />;
};
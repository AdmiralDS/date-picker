import type { MouseEventHandler } from 'react';

import type { MonthRangePickerCalendarProps } from '@admiral-ds/date-picker';
import { MonthRangePickerCalendar } from '#src/components/MonthRangePickerCalendar';

export const MonthRangePickerCalendarSimpleTemplate = ({ locale, ...props }: MonthRangePickerCalendarProps) => {
  const localeInner = locale || 'ru';

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <MonthRangePickerCalendar {...props} onClick={handleClick} locale={localeInner} />;
};
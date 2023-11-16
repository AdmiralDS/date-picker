import type { MouseEventHandler } from 'react';

import type { YearRangeCalendarProps } from '@admiral-ds/date-picker';
import { YearRangePickerCalendar } from '@admiral-ds/date-picker';

export const YearRangePickerCalendarSimpleTemplate = ({ locale, ...props }: YearRangeCalendarProps) => {
  const localeInner = locale || 'ru';

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <YearRangePickerCalendar {...props} onClick={handleClick} locale={localeInner} />;
};

import type { MouseEventHandler } from 'react';

import type { DateRangeCalendarProps } from '#src/components/DateRangeCalendar';
import { DateRangeCalendar } from '#src/components/DateRangeCalendar';

export const DateRangeCalendarSimpleTemplate = ({ locale, ...props }: DateRangeCalendarProps) => {
  const localeInner = locale || 'ru';

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  //return <Calendar {...props} defaultDateRange={['2023-10-08T12:00:00Z', '2023-10-16T12:00:00Z']} />;
  return <DateRangeCalendar {...props} onClick={handleClick} locale={localeInner} />;
};

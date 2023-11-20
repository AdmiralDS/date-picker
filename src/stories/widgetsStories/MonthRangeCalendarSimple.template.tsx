import type { MouseEventHandler } from 'react';

import type { MonthRangeCalendarProps } from '@admiral-ds/date-picker';
import { MonthRangeCalendar } from '@admiral-ds/date-picker';

export const MonthRangeCalendarSimpleTemplate = ({ locale, ...props }: MonthRangeCalendarProps) => {
  const localeInner = locale || 'ru';

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <MonthRangeCalendar {...props} onClick={handleClick} locale={localeInner} />;
};

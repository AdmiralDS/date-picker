import type { MouseEventHandler } from 'react';

import type { YearRangeCalendarProps } from '@admiral-ds/date-picker';
import { YearRangeCalendar } from '#src/components/YearRangeCalendar';

export const YearRangeCalendarSimpleTemplate = ({ locale, ...props }: YearRangeCalendarProps) => {
  const localeInner = locale || 'ru';

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <YearRangeCalendar {...props} onClick={handleClick} locale={localeInner} />;
};

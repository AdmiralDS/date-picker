import type { MouseEventHandler } from 'react';

import type { YearRangeCalendarProps } from '@admiral-ds/date-picker';
import { YearRangeCalendar } from '#lib/YearRangeCalendar';

export const YearRangeCalendarSimpleTemplate = (props: YearRangeCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <YearRangeCalendar {...props} onClick={handleClick} />;
};

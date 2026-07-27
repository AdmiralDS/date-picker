import type { MouseEventHandler } from 'react';

import type { YearCalendarProps } from '@admiral-ds/date-picker';

import { YearCalendar } from '@admiral-ds/date-picker';

export const YearCalendarSimpleTemplate = (props: YearCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <YearCalendar {...props} onClick={handleClick} />;
};

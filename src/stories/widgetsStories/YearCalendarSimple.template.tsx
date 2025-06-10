import type { MouseEventHandler } from 'react';

import type { YearCalendarProps } from '@admiral-ds/date-picker';

import { YearCalendar } from '@admiral-ds/date-picker';

const yearsArray = Array.from(Array(20).keys());
const yearModel = yearsArray.map(() => ({ 'data-testid': 'test' }));

export const YearCalendarSimpleTemplate = (props: YearCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <YearCalendar {...props} yearModel={yearModel} onClick={handleClick} />;
};

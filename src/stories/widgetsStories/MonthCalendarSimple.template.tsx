import type { MouseEventHandler } from 'react';

import type { MonthCalendarProps } from '@admiral-ds/date-picker';
import { MonthCalendar } from '@admiral-ds/date-picker';

export const MonthCalendarSimpleTemplate = (props: MonthCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <MonthCalendar {...props} onClick={handleClick} />;
};

import type { MouseEventHandler } from 'react';

import type { MonthPickerCalendarProps } from '@admiral-ds/date-picker';
import { MonthPickerCalendar } from '#src/components/MonthPickerCalendar';

export const MonthPickerCalendarSimpleTemplate = (props: MonthPickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <MonthPickerCalendar {...props} onClick={handleClick} />;
};

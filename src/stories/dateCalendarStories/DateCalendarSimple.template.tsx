import type { MouseEventHandler } from 'react';

import type { DateCalendarProps } from '@admiral-ds/date-picker';
import { DateCalendar } from '@admiral-ds/date-picker';

export const DateCalendarSimpleTemplate = ({ locale, ...props }: DateCalendarProps) => {
  const localeInner = locale || 'ru';

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <DateCalendar {...props} onClick={handleClick} locale={localeInner} />;
};

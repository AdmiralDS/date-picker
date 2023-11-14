import type { MouseEventHandler } from 'react';

import type { CalendarProps } from '@admiral-ds/date-picker';
import { Calendar } from '@admiral-ds/date-picker';

export const CalendarSimpleTemplate = ({ locale, ...props }: CalendarProps) => {
  const localeInner = locale || 'ru';

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <Calendar {...props} onClick={handleClick} locale={localeInner} />;
};

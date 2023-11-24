import type { MouseEventHandler } from 'react';

import type { MonthRangeDoublePickerCalendarProps } from '@admiral-ds/date-picker';
import { MonthRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

export const MonthRangeDoublePickerCalendarSimpleTemplate = ({
  locale,
  ...props
}: MonthRangeDoublePickerCalendarProps) => {
  const localeInner = locale || 'ru';

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <MonthRangeDoublePickerCalendar
      {...props}
      onClick={handleClick}
      locale={localeInner}
      //defaultSelectedDateRangeValue={['2023-10-01T12:00:00Z', '2024-07-01T12:00:00Z']}
    />
  );
};

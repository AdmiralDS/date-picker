import type { MouseEventHandler } from 'react';

import type { DateRangeDoublePickerCalendarProps } from '@admiral-ds/date-picker';
import { DateRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

export const DateRangeDoublePickerCalendarSimpleTemplate = ({
  locale,
  ...props
}: DateRangeDoublePickerCalendarProps) => {
  const localeInner = locale || 'ru';

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <DateRangeDoublePickerCalendar
      {...props}
      onClick={handleClick}
      locale={localeInner}
      //defaultSelectedDateRangeValue={['2023-10-01T12:00:00Z', '2024-07-01T12:00:00Z']}
    />
  );
};

import type { MouseEventHandler } from 'react';

import type { YearRangeDoublePickerCalendarProps } from '@admiral-ds/date-picker';
import { YearRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

export const YearRangeDoublePickerCalendarSimpleTemplate = ({
  locale,
  ...props
}: YearRangeDoublePickerCalendarProps) => {
  const localeInner = locale || 'ru';

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <YearRangeDoublePickerCalendar
      {...props}
      onClick={handleClick}
      locale={localeInner}
      //defaultSelectedDateRangeValue={['2023-10-08T12:00:00Z', '2028-10-16T12:00:00Z']}
    />
  );
};

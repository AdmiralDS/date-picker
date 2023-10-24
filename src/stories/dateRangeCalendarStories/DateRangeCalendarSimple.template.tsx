import { DateRangeCalendar } from '#src/components/DateRangeCalendar';
import type { DateRangeCalendarProps } from '#src/components/DateRangeCalendar/interfaces';

export const DateRangeCalendarSimpleTemplate = (props: DateRangeCalendarProps) => {
  //return <Calendar {...props} defaultDateRange={['2023-10-08T12:00:00Z', '2023-10-16T12:00:00Z']} />;
  return <DateRangeCalendar {...props} pickerType="rangePicker" />;
};

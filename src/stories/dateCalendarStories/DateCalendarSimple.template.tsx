import type { DateCalendarProps } from '#src/components/DateCalendar/interfaces';
import { DateCalendar } from '@admiral-ds/date-picker';

export const DateCalendarSimpleTemplate = (props: DateCalendarProps) => {
  //return <Calendar {...props} defaultDateRange={['2023-10-08T12:00:00Z', '2023-10-16T12:00:00Z']} />;
  return <DateCalendar {...props} pickerType="rangePicker" />;
};

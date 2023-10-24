import type { CalendarProps } from '#src/components/Calendar/interfaces';
import { Calendar } from '@admiral-ds/date-picker';

export const CalendarSimpleTemplate = (props: CalendarProps) => {
  return <Calendar {...props} defaultDateRange={['2023-10-08T12:00:00Z', '2023-10-16T12:00:00Z']} />;
};

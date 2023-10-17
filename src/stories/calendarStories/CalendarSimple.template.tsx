import type { CalendarProps } from '#src/components/Calendar/interfaces';
import { Calendar } from '@admiral-ds/date-picker';

export const CalendarSimpleTemplate = (props: CalendarProps) => {
  return <Calendar {...props} dateRange={['2023-10-01T12:00:00Z', '2023-10-09T12:00:00Z']} />;
};

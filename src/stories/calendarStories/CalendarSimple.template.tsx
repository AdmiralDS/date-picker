import type { CalendarProps } from '#src/components/Calendar/interfaces';
import { Calendar } from '@admiral-ds/date-picker';

export const CalendarSimpleTemplate = (props: CalendarProps) => {
  return <Calendar {...props} />;
};

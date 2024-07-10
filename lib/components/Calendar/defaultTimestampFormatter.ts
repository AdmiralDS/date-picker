import { formatDateToLocalDateString } from 'lib/dateFormatters';

export function defaultTimestampFormatter(timestamp: number) {
  return formatDateToLocalDateString(new Date(timestamp));
}

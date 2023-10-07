import type { Dayjs } from 'dayjs';

export interface DatesOfMonthProps {
  /** Дата в формате "YYYY-MM-DDT12:00:00 */
  date?: string;
}

export interface DatesProps {
  date: Dayjs;
}

export interface DaysProps {
  locale?: string;
}

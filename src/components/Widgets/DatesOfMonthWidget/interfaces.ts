import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';

export interface CellStateProps {
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  outsideMonth?: boolean;
  holiday?: boolean;
}

export interface DatesOfMonthProps {
  /** Дата в формате "YYYY-MM-DDT12:00:00 */
  date?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  cellState?: (date: string) => CellStateProps;
}

export interface DatesProps {
  date: Dayjs;
  cellState?: (date: string) => CellStateProps;
}

export interface DaysProps {
  locale?: string;
}

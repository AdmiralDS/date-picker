import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';

export interface MonthsOfYearWidgetProps {
  /** Дата в формате "YYYY-MM-DDT12:00:00 */
  date?: string;
  locale?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export interface MonthsProps {
  date: Dayjs;
  locale?: string;
  //dateCellState: (date: string) => CellStateProps;
}

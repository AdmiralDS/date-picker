import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';
import type { RuleSet } from 'styled-components';

export interface CellStateProps {
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  cellMixin: RuleSet<object>;
}

export interface YearsOfTwentyYearsWidgetProps {
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  yearCellState: (date: string) => CellStateProps;
}

export interface YearsProps {
  date: Dayjs;
  yearCellState: (date: string) => CellStateProps;
}

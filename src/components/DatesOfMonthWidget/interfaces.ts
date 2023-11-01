import type { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import type { Dayjs } from 'dayjs';
import type { RuleSet } from 'styled-components';

export interface CellStateProps {
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  cellMixin: RuleSet<object>;

  isInRange?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
}

export interface DayNameCellProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  dayNameCellState: (dayNumber: number) => CellStateProps;
}

export interface DatesOfMonthWidgetProps extends HTMLAttributes<HTMLDivElement> {
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
  dayNamesProps: DayNameCellProps;
  onClick?: MouseEventHandler<HTMLDivElement>;
  renderDateCell: (date: string) => ReactNode;
}

export interface DatesProps {
  date: Dayjs;
  renderDateCell: (date: string) => ReactNode;
}

export interface DaysProps {
  locale: string;
  dayNameCellState: (dayNumber: number) => CellStateProps;
}

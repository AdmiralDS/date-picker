import type { HTMLAttributes, MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';
import type { RuleSet } from 'styled-components';
import type { DefaultCellProps } from '#src/components/DefaultCell';

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
  renderDateCell: (dateString: string) => DefaultCellProps;
}

export interface DatesProps {
  date: Dayjs;
  renderDateCell: (dateString: string) => DefaultCellProps;
}

export interface DaysProps {
  locale: string;
  dayNameCellState: (dayNumber: number) => CellStateProps;
}

import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

export interface CellStateProps {
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  cellMixin: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export interface DayNameCellProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  dayNameCellState: (dayNumber: number) => CellStateProps;
}

export interface DateCellProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  dateCellState: (date: string) => CellStateProps;
}

export interface DatesOfMonthWidgetProps {
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
  dayNamesProps: DayNameCellProps;
  datesProps: DateCellProps;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export interface DatesProps {
  date: Dayjs;
  dateCellState: (date: string) => CellStateProps;
}

export interface DaysProps {
  locale: string;
  dayNameCellState: (dayNumber: number) => CellStateProps;
}

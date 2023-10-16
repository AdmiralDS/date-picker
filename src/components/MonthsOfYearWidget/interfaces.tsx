import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

export interface CellStateProps {
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  cellMixin: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export interface MonthsOfYearWidgetProps {
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  monthCellState: (date: string) => CellStateProps;
}

export interface MonthsProps {
  date: Dayjs;
  monthCellState: (date: string) => CellStateProps;
}
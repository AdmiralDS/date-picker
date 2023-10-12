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
  onClick?: MouseEventHandler<HTMLDivElement>;
  monthCellState: (date: string) => CellStateProps;
}

export interface MonthsProps {
  date: Dayjs;
  monthCellState: (date: string) => CellStateProps;
}

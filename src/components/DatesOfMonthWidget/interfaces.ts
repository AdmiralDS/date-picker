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
  /** Дата в формате "YYYY-MM-DDT12:00:00 */
  date?: string;
  locale?: string;
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

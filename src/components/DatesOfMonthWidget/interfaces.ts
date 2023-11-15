import type { HTMLAttributes } from 'react';
import type { RuleSet } from 'styled-components';

import type { BaseInnerWidgetProps, BaseWidgetProps } from '#src/components/widgetInterfaces.ts';

export interface CellStateProps {
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  cellMixin: RuleSet<object>;

  isInRange?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
}

export interface DayNameCellProps extends HTMLAttributes<HTMLDivElement> {
  dayNameCellState: (dayNumber: number) => CellStateProps;
}

export interface DatesOfMonthWidgetProps extends BaseWidgetProps {
  dayNamesProps: DayNameCellProps;
}
export interface DatesProps extends BaseInnerWidgetProps {}

export interface DaysProps {
  locale: string;
  dayNameCellState: (dayNumber: number) => CellStateProps;
}

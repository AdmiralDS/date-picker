import type { HTMLAttributes } from 'react';
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

export interface DayNameCellProps extends HTMLAttributes<HTMLDivElement> {
  dayNameCellState: (dayNumber: number) => CellStateProps;
}

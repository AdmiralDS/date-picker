import type { HTMLAttributes, ReactNode } from 'react';
import type { RuleSet } from 'styled-components';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { dayjsDateToString, setNoon, yearsRange } from '#src/components/utils';
import {
  YEAR_CELL_HEIGHT,
  YEAR_CELL_WIDTH,
  YEARS_ON_SCREEN,
  YEARS_WRAPPER_HEIGHT,
} from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import type { YearsProps } from '#src/components/YearsOfTwentyYearsWidget/interfaces.tsx';
import {
  baseYearCellMixin,
  currentYearCellMixin,
  disabledYearCellMixin,
  hiddenYearCellMixin,
  selectedYearCellMixin,
} from '#src/components/YearsOfTwentyYearsWidget/mixins.tsx';

const YearsWrapper = styled.div`
  height: ${YEARS_WRAPPER_HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const YearCell = styled.div<{ $yearCellMixin?: RuleSet<object>; $isActive?: boolean }>`
  box-sizing: border-box;
  text-align: center;
  width: ${YEAR_CELL_WIDTH}px;
  height: ${YEAR_CELL_HEIGHT}px;
  cursor: pointer;

  &[data-disabled='true'] {
    cursor: default;
  }
  &[data-hidden='true'] {
    cursor: default;
  }
  ${(p) => p.$yearCellMixin}
`;

const yearsArray = Array.from(Array(YEARS_ON_SCREEN).keys());

export const Years = ({ date, renderYearCell, ...props }: YearsProps) => {
  const { start } = yearsRange(date, YEARS_ON_SCREEN);
  const firstYear = setNoon(dayjs(`${start}-01-01T12:00:00`));

  return (
    <YearsWrapper {...props}>
      {<>{yearsArray.map((v) => renderYearCell(dayjsDateToString(firstYear.add(v, 'year'))))}</>}
    </YearsWrapper>
  );
};

export interface DefaultYearCellProps extends HTMLAttributes<HTMLDivElement> {
  cellContent?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  isCurrentYear?: boolean;
  isActive?: boolean;
  //isInRange?: boolean;
  //isRangeStart?: boolean;
  //isRangeEnd?: boolean;
  //isInRangeSelecting?: boolean;
  //isRangeSelectingStart?: boolean;
  //isRangeSelectingEnd?: boolean;
}

const getDefaultYearCellMixin = (selected?: boolean, disabled?: boolean, hidden?: boolean, isCurrentYear?: boolean) => {
  if (hidden) return hiddenYearCellMixin;
  if (disabled) return disabledYearCellMixin;
  if (selected) return selectedYearCellMixin;
  if (isCurrentYear) return currentYearCellMixin;
  return baseYearCellMixin;
};

export const DefaultYearCell = ({
  cellContent,
  selected,
  disabled,
  hidden,
  isCurrentYear,
  isActive,
  ...props
}: DefaultYearCellProps) => {
  const cellMixin = getDefaultYearCellMixin(selected, disabled, hidden, isCurrentYear);

  return (
    <YearCell
      data-cell-type="yearCell"
      data-selected={selected ? true : undefined}
      data-disabled={disabled ? true : undefined}
      data-hidden={hidden ? true : undefined}
      $isActive={isActive}
      $yearCellMixin={cellMixin}
      {...props}
    >
      {cellContent}
    </YearCell>
  );
};

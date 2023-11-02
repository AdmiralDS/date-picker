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

const YearsWrapper = styled.div`
  height: ${YEARS_WRAPPER_HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const YearCell = styled.div<{ $yearCellMixin?: RuleSet<object> }>`
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

export const Years = ({ date, yearCellState, ...props }: YearsProps) => {
  const { start, end } = yearsRange(date, YEARS_ON_SCREEN);
  const firstDate = setNoon(dayjs(`${start}-${1}-01T12:00:00`));

  const renderYears = () => {
    return Array.from(Array(YEARS_ON_SCREEN).keys()).map((v) => {
      const currentDate = firstDate.add(v, 'year');
      const { selected, disabled, hidden, cellMixin, ...restCellStateProps } = yearCellState(
        dayjsDateToString(currentDate),
      );
      return (
        <YearCell
          key={currentDate.toISOString()}
          data-value={currentDate.toISOString()}
          data-selected={selected ? true : undefined}
          data-disabled={disabled ? true : undefined}
          data-hidden={hidden ? true : undefined}
          $yearCellMixin={cellMixin}
        >
          {currentDate.year()}
        </YearCell>
      );
    });
  };

  return <YearsWrapper {...props}>{renderYears()}</YearsWrapper>;
};

import type { RuleSet } from 'styled-components';
import styled from 'styled-components';

import { capitalizeFirstLetter, getDayNamesList } from '#lib/utils';
import type { DaysProps } from '#lib/DatesOfMonthWidget/interfaces';
import { DAY_CELL_HEIGHT, DAY_CELL_WIDTH } from '#lib/DefaultCell/constants.ts';

const DayNamesWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-bottom: 4px;
`;
const DayNameCell = styled.div<{ $dateCellMixin: RuleSet<object> }>`
  box-sizing: border-box;
  width: ${DAY_CELL_WIDTH}px;
  height: ${DAY_CELL_HEIGHT}px;
  text-align: center;
  ${(p) => p.$dateCellMixin}
`;

export const Days = ({ locale, dayNameCellState, ...props }: DaysProps) => {
  const dayNamesList = getDayNamesList(locale);
  const dayNames = dayNamesList.map((day, i) => {
    const { cellMixin, ...restCellStateProps } = dayNameCellState(i);

    return (
      <DayNameCell
        data-cell-type="dayCell"
        data-value={day}
        key={day}
        {...restCellStateProps}
        $dateCellMixin={cellMixin}
      >
        {capitalizeFirstLetter(day)}
      </DayNameCell>
    );
  });

  return <DayNamesWrapper {...props}>{dayNames}</DayNamesWrapper>;
};

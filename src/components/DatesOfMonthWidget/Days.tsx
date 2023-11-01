import styled, { RuleSet } from 'styled-components';

import { capitalizeFirstLetter, getDayNamesList } from '#src/components/utils';
import { CELL_SIZE } from '#src/components/DatesOfMonthWidget/constants';
import type { DaysProps } from '#src/components/DatesOfMonthWidget/interfaces';

const DayNamesWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-bottom: 4px;
`;
const DayNameCell = styled.div<{ $dateCellMixin: RuleSet<object> }>`
  box-sizing: border-box;
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
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

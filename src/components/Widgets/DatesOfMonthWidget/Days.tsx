import styled from 'styled-components';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

import { capitalizeFirstLetter, getDayNamesList } from '#src/components/Calendar/utils';
import { CELL_SIZE } from '#src/components/Widgets/DatesOfMonthWidget/constants';
import type { DaysProps } from '#src/components/Widgets/DatesOfMonthWidget/interfaces';

const DayNamesWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-bottom: 4px;
`;
const DayNameCell = styled.div<{ $dateCellMixin: FlattenInterpolation<ThemeProps<DefaultTheme>> }>`
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
      <DayNameCell data-value={day} key={day} {...props} {...restCellStateProps} $dateCellMixin={cellMixin}>
        {capitalizeFirstLetter(day)}
      </DayNameCell>
    );
  });

  return <DayNamesWrapper>{dayNames}</DayNamesWrapper>;
};

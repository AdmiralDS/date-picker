import styled from 'styled-components';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

import { dayjsDateToString, setNoon } from '#src/components/utils';
import { CELL_SIZE, DATES_ON_SCREEN, DATES_WRAPPER_HEIGHT } from '#src/components/DatesOfMonthWidget/constants';
import type { DatesProps } from '#src/components/DatesOfMonthWidget/interfaces';

const DatesWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: ${DATES_WRAPPER_HEIGHT}px;
`;
const DateCell = styled.div<{ $dateCellMixin: FlattenInterpolation<ThemeProps<DefaultTheme>> }>`
  box-sizing: border-box;
  text-align: center;
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  cursor: pointer;

  &[data-disabled='true'] {
    cursor: default;
  }
  &[data-hidden='true'] {
    cursor: default;
  }
  ${(p) => p.$dateCellMixin}
`;

export const Dates = ({ date, dateCellState, ...props }: DatesProps) => {
  const firstDate = date.startOf('month').startOf('week');

  const renderDates = () => {
    return Array.from(Array(DATES_ON_SCREEN).keys()).map((v) => {
      const currentDate = setNoon(firstDate.add(v, 'day'));
      const { selected, disabled, hidden, cellMixin, ...restCellStateProps } = dateCellState(
        dayjsDateToString(currentDate),
      );

      return (
        <DateCell
          {...restCellStateProps}
          key={currentDate.toISOString()}
          $dateCellMixin={cellMixin}
          data-value={currentDate.toISOString()}
          data-selected={selected ? true : undefined}
          data-disabled={disabled ? true : undefined}
          data-hidden={hidden ? true : undefined}
        >
          {currentDate.date()}
        </DateCell>
      );
    });
  };

  return <DatesWrapper {...props}>{renderDates()}</DatesWrapper>;
};

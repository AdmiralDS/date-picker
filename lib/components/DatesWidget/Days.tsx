import { createElement } from 'react';
import type { DataAttributes, RuleSet } from 'styled-components';
import styled from 'styled-components';

import { arrayFormatter, capitalizeFirstLetter, getDayNamesList } from '#lib/utils';
import type { CellStateProps } from '#lib/DatesWidget/interfaces';
import { DAY_CELL_HEIGHT, DAY_CELL_WIDTH } from '#lib/DefaultCell/constants.ts';

const DaysContainer = styled.div`
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

export interface DaysProps<T> {
  locale: string;
  dayNameCellState: (dayNumber: number) => CellStateProps;
  daysModel?: T[];
  daysWidgetContainerPropsConfig?: (
    props: React.ComponentProps<typeof DaysContainer> & DataAttributes,
  ) => Partial<React.ComponentProps<typeof DaysContainer> & DataAttributes>;
}

export function daysMapStateToProps<T extends object>(
  locale: string,
  dayNameCellState: (dayNumber: number) => CellStateProps,
  model?: T[],
) {
  const innerModel = model ? arrayFormatter(7, model) : [];
  const dayNamesList = getDayNamesList(locale);

  return dayNamesList.map((day, i) => {
    const { cellMixin, ...restCellStateProps } = dayNameCellState(i);

    return {
      'data-cell-type': 'dayCell',
      'data-value': day,
      key: day,
      $dateCellMixin: cellMixin,
      children: capitalizeFirstLetter(day),
      ...restCellStateProps,
      ...innerModel[i],
    };
  });
}

export const Days = <T extends object>({
  locale,
  dayNameCellState,
  daysModel,
  daysWidgetContainerPropsConfig = () => ({}),
  ...containerProps
}: DaysProps<T>) => {
  const cellProps = daysMapStateToProps(locale, dayNameCellState, daysModel);

  const cells = cellProps.map((cellProps) => createElement(DayNameCell, cellProps));

  const daysContainerProps = {
    'data-container-type': 'daysContainer',
    ...containerProps,
  };

  return (
    <DaysContainer {...daysContainerProps} {...daysWidgetContainerPropsConfig(daysContainerProps)}>
      {cells}
    </DaysContainer>
  );
};

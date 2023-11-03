import type { RuleSet } from 'styled-components';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { capitalizeFirstLetter, dayjsDateToString, getMonthNamesList } from '#src/components/utils';
import type { MonthsProps } from '#src/components/MonthsOfYearWidget/interfaces';
import {
  MONTH_CELL_HEIGHT,
  MONTH_CELL_WIDTH,
  MONTHS_WRAPPER_HEIGHT,
} from '#src/components/MonthsOfYearWidget/constants';

const MonthsWrapper = styled.div`
  height: ${MONTHS_WRAPPER_HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const MonthCell = styled.div<{ $monthCellMixin?: RuleSet<object> }>`
  box-sizing: border-box;
  text-align: center;
  width: ${MONTH_CELL_WIDTH}px;
  height: ${MONTH_CELL_HEIGHT}px;
  cursor: pointer;

  &[data-disabled='true'] {
    cursor: default;
  }
  &[data-hidden='true'] {
    cursor: default;
  }
  ${(p) => p.$monthCellMixin}
`;

export const Months = ({ date, monthCellState, ...props }: MonthsProps) => {
  const monthsNamesList = getMonthNamesList(date.locale());
  const year = date.year();

  const monthsNames = monthsNamesList.map((month, i) => {
    const currentDate = dayjs(`${year}-${i + 1}-01T12:00:00`);
    const { selected, disabled, hidden, cellMixin, ...restCellStateProps } = monthCellState(
      dayjsDateToString(currentDate),
    );

    return (
      <MonthCell
        key={currentDate.toISOString()}
        data-value={currentDate.toISOString()}
        data-selected={selected ? true : undefined}
        data-disabled={disabled ? true : undefined}
        data-hidden={hidden ? true : undefined}
        $monthCellMixin={cellMixin}
        {...restCellStateProps}
      >
        {capitalizeFirstLetter(month)}
      </MonthCell>
    );
  });
  return <MonthsWrapper {...props}>{monthsNames}</MonthsWrapper>;
};

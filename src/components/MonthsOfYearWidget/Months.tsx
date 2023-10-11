import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled from 'styled-components';

import type { MonthsProps } from '#src/components/MonthsOfYearWidget/interfaces';
import {
  MONTH_CELL_HEIGHT,
  MONTH_CELL_PADDING,
  MONTH_CELL_WIDTH,
  MONTHS_WRAPPER_HEIGHT,
} from '#src/components/MonthsOfYearWidget/constants';
import { capitalizeFirstLetter, getMonthNamesList } from '#src/components/utils';
import { typography } from '@admiral-ds/react-ui';

const MonthsWrapper = styled.div`
  height: ${MONTHS_WRAPPER_HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const MonthCell = styled.div<{ $monthCellMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>> }>`
  padding: ${MONTH_CELL_PADDING};
  ${typography['Body/Body 2 Long']}
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  &:hover {
    padding: 7px 0;
    border: 1px ${(p) => p.theme.color['Primary/Primary 60 Main']} solid;
    border-radius: 18px;
  }

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

export const Months = ({ date, locale = 'ru', ...props }: MonthsProps) => {
  const monthsNamesList = getMonthNamesList(locale);
  console.log(monthsNamesList);

  const monthsNames = monthsNamesList.map((month) => {
    /*const { selected, disabled, hidden, cellMixin, ...restCellStateProps } = dateCellState(
      dayjsDateToString(currentDate),
    );*/

    return (
      <MonthCell
        key={month}
        //$dateCellMixin={cellMixin}
        data-value={month}
      >
        {capitalizeFirstLetter(month)}
      </MonthCell>
    );
  });
  return <MonthsWrapper>{monthsNames}</MonthsWrapper>;
};

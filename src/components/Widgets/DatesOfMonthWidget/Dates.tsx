import styled from 'styled-components';

import {
  CELL_PADDING,
  CELL_SIZE,
  DATES_ON_SCREEN,
  DATES_WRAPPER_HEIGHT,
} from '#src/components/Widgets/DatesOfMonthWidget/constants';
import type { DatesProps } from '#src/components/Widgets/DatesOfMonthWidget/interfaces';
import { dayjsDateToString, setNoon } from '#src/components/Calendar/utils';

const DatesWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: ${DATES_WRAPPER_HEIGHT}px;
`;
const DateCell = styled.div<{ $outsideMonth: boolean }>`
  box-sizing: border-box;
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  padding: ${CELL_PADDING};
  color: ${(p) => (p.$outsideMonth ? p.theme.color['Neutral/Neutral 20'] : p.theme.color['Neutral/Neutral 90'])};
  text-align: center;
`;

export const Dates = ({ date }: DatesProps) => {
  const firstDate = date.startOf('month').startOf('week');

  const renderDates = () => {
    return Array.from(Array(DATES_ON_SCREEN).keys()).map((v) => {
      const currentDate = setNoon(firstDate.add(v, 'day'));
      return (
        <DateCell
          data-value={currentDate.toISOString()}
          $outsideMonth={date.month() != currentDate.month()}
          key={v + 1}
        >
          {currentDate.date()}
        </DateCell>
      );
    });
  };

  return <DatesWrapper>{renderDates()}</DatesWrapper>;
};

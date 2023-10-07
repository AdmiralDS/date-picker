import styled from 'styled-components';

import {
  CELL_PADDING,
  CELL_SIZE,
  DATES_ON_SCREEN,
  DATES_WRAPPER_HEIGHT,
} from '#src/components/Widgets/DatesOfMonthWidget/constants';
import type { DatesProps } from '#src/components/Widgets/DatesOfMonthWidget/interfaces';

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
  const dates: number[] = [];
  for (let i = 0; i < DATES_ON_SCREEN; i++) {
    dates.push(i + 1);
  }
  const renderDates = () => {
    return dates.map((_, i) => {
      const currentDate = firstDate.add(i, 'day');
      return (
        <DateCell $outsideMonth={date.month() != currentDate.month()} key={i + 1}>
          {currentDate.date()}
        </DateCell>
      );
    });
  };

  return <DatesWrapper>{renderDates()}</DatesWrapper>;
};

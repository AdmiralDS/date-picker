import styled from 'styled-components';

import { setNoon } from '#src/components/utils';
import { DATES_ON_SCREEN, DATES_WRAPPER_HEIGHT } from '#src/components/DatesOfMonthWidget/constants';
import type { DatesProps } from '#src/components/DatesOfMonthWidget/interfaces';

const DatesWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: ${DATES_WRAPPER_HEIGHT}px;
`;
const datesArray = Array.from(Array(DATES_ON_SCREEN).keys());

export const Dates = ({ date, selected, active, activeRangeEnd, renderCell, ...props }: DatesProps) => {
  const firstDate = setNoon(date.startOf('month').startOf('week'));
  console.log('render Dates');

  return (
    <DatesWrapper {...props} data-container-type="datesWrapper">
      {datesArray.map((v) => renderCell({ date: firstDate.add(v, 'day'), selected, active, activeRangeEnd }))}
    </DatesWrapper>
  );
};

import styled from 'styled-components';

import { dayjsDateToString, setNoon } from '#src/components/utils';
import { DATES_ON_SCREEN, DATES_WRAPPER_HEIGHT } from '#src/components/DatesOfMonthWidget/constants';
import type { DatesProps } from '#src/components/DatesOfMonthWidget/interfaces';
import { DefaultDateCell } from '#src/components/DefaultCell';

const DatesWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: ${DATES_WRAPPER_HEIGHT}px;
`;
const datesArray = Array.from(Array(DATES_ON_SCREEN).keys());

export const Dates = ({ date, renderDateCell, ...props }: DatesProps) => {
  const firstDate = setNoon(date.startOf('month').startOf('week'));

  return (
    <DatesWrapper {...props} data-container-type="datesWrapper">
      {datesArray.map((v) => (
        <DefaultDateCell key={v} {...renderDateCell(dayjsDateToString(firstDate.add(v, 'day')))} />
      ))}
    </DatesWrapper>
  );
};

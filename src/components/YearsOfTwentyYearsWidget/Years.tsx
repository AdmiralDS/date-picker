import styled from 'styled-components';
import dayjs from 'dayjs';

import { setNoon, yearsRange } from '#src/components/utils';
import { YEARS_ON_SCREEN, YEARS_WRAPPER_HEIGHT } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import type { BaseInnerWidgetProps } from '#src/components/widgetInterfaces.ts';

interface YearsProps extends BaseInnerWidgetProps {}

const YearsWrapper = styled.div`
  height: ${YEARS_WRAPPER_HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const yearsArray = Array.from(Array(YEARS_ON_SCREEN).keys());

export const Years = ({ date, selected, active, activeRangeEnd, renderCell, ...props }: YearsProps) => {
  const { start } = yearsRange(date, YEARS_ON_SCREEN);
  const firstYear = setNoon(dayjs(`${start}-01-01T12:00:00`));

  return (
    <YearsWrapper {...props}>
      {yearsArray.map((v) => renderCell({ date: firstYear.add(v, 'year'), selected, active, activeRangeEnd }))}
    </YearsWrapper>
  );
};

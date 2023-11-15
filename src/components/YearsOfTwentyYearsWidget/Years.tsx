import styled from 'styled-components';
import dayjs from 'dayjs';

import { dayjsDateToString, setNoon, yearsRange } from '#src/components/utils';
import { YEARS_ON_SCREEN, YEARS_WRAPPER_HEIGHT } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import { DefaultYearCell, DefaultYearRangeCell } from '#src/components/DefaultCell';
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

export const Years = ({ rangeCalendar, date, renderCell, ...props }: YearsProps) => {
  const { start } = yearsRange(date, YEARS_ON_SCREEN);
  const firstYear = setNoon(dayjs(`${start}-01-01T12:00:00`));

  return (
    <YearsWrapper {...props}>
      {yearsArray.map((v) =>
        rangeCalendar ? (
          <DefaultYearRangeCell key={v} {...renderCell(dayjsDateToString(firstYear.add(v, 'year')))} />
        ) : (
          <DefaultYearCell key={v} {...renderCell(dayjsDateToString(firstYear.add(v, 'year')))} />
        ),
      )}
    </YearsWrapper>
  );
};

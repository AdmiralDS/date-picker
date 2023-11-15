import styled from 'styled-components';
import dayjs from 'dayjs';

import { dayjsDateToString, setNoon } from '#src/components/utils';
import type { MonthsProps } from '#src/components/MonthsOfYearWidget/interfaces';
import { MONTHS_COLUMNS, MONTHS_ROWS, MONTHS_WRAPPER_HEIGHT } from '#src/components/MonthsOfYearWidget/constants';
import { DefaultMonthCell, DefaultMonthRangeCell } from '#src/components/DefaultCell';

const MonthsWrapper = styled.div`
  height: ${MONTHS_WRAPPER_HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const monthsArray = Array.from(Array(MONTHS_ROWS * MONTHS_COLUMNS).keys());

export const Months = ({ rangeCalendar, date, renderCell, ...props }: MonthsProps) => {
  const firstMonth = setNoon(dayjs(`${date.year()}-01-01T12:00:00`));

  return (
    <MonthsWrapper {...props}>
      {monthsArray.map((v) =>
        rangeCalendar ? (
          <DefaultMonthRangeCell key={v} {...renderCell(dayjsDateToString(firstMonth.add(v, 'month')))} />
        ) : (
          <DefaultMonthCell key={v} {...renderCell(dayjsDateToString(firstMonth.add(v, 'month')))} />
        ),
      )}
    </MonthsWrapper>
  );
};

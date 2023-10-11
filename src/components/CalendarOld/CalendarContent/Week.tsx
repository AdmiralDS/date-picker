import styled from 'styled-components';

import type { WeekProps } from './interfaces';
import { dateStringToDayjs, dayjsDateToString } from '../../utils';

export const DAY_NUMBERS = [0, 1, 2, 3, 4, 5, 6];

const WeekWrapper = styled.div`
  white-space: nowrap;
`;

export const Week = ({ weekStartDate: weekStartDateString, renderCell, locale }: WeekProps) => {
  const weekStartDate = dateStringToDayjs(weekStartDateString, locale);
  return (
    <>
      {weekStartDate && (
        <WeekWrapper>
          {DAY_NUMBERS.map((day) => renderCell(dayjsDateToString(weekStartDate.add(day, 'day')), 'DATES'))}
        </WeekWrapper>
      )}
    </>
  );
};

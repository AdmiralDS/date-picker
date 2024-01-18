import styled from 'styled-components';
import dayjs from 'dayjs';

import { setNoon } from '#src/components/utils';
import { MONTHS_COLUMNS, MONTHS_ROWS, MONTHS_WRAPPER_HEIGHT } from '#src/components/MonthsOfYearWidget/constants';
import type { BaseWidgetProps } from '#src/components/widgetInterfaces.ts';

interface MonthsProps extends BaseWidgetProps {}

const MonthsWrapper = styled.div`
  height: ${MONTHS_WRAPPER_HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const monthsArray = Array.from(Array(MONTHS_ROWS * MONTHS_COLUMNS).keys());

export const Months = ({
  date,
  selected,
  active,
  activeRangeEnd,
  onCellMouseEnter,
  onCellClick,
  renderCell,
  ...props
}: MonthsProps) => {
  const firstMonth = setNoon(dayjs(`${date.year()}-01-01T12:00:00`));

  return (
    <MonthsWrapper {...props}>
      {monthsArray.map((v) =>
        renderCell({
          date: firstMonth.add(v, 'month'),
          selected,
          active,
          activeRangeEnd,
          onCellMouseEnter,
          onCellClick,
        }),
      )}
    </MonthsWrapper>
  );
};

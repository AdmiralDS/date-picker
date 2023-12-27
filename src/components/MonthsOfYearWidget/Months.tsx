import styled from 'styled-components';
import dayjs from 'dayjs';

import { dayjsDateToString, setNoon } from '#src/components/utils';
import { MONTHS_COLUMNS, MONTHS_ROWS, MONTHS_WRAPPER_HEIGHT } from '#src/components/MonthsOfYearWidget/constants';
import { DefaultMonthCell, DefaultMonthRangeCell } from '#src/components/DefaultCell';
import type { BaseInnerWidgetProps } from '#src/components/widgetInterfaces.ts';

interface MonthsProps extends BaseInnerWidgetProps {}

const MonthsWrapper = styled.div`
  height: ${MONTHS_WRAPPER_HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const monthsArray = Array.from(Array(MONTHS_ROWS * MONTHS_COLUMNS).keys());

export const Months = ({ rangeCalendar, date, cells, renderCellWithString, ...props }: MonthsProps) => {
  const firstMonth = setNoon(dayjs(`${date.year()}-01-01T12:00:00`));

  return (
    <MonthsWrapper {...props}>
      {cells
        ? cells
        : renderCellWithString
          ? monthsArray.map((v) =>
              rangeCalendar ? (
                <DefaultMonthRangeCell key={v} {...renderCellWithString(dayjsDateToString(firstMonth.add(v, 'month')))} />
              ) : (
                <DefaultMonthCell key={v} {...renderCellWithString(dayjsDateToString(firstMonth.add(v, 'month')))} />
              ),
            )
          : null}
    </MonthsWrapper>
  );
};

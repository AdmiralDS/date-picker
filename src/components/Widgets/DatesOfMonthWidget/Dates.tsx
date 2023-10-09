import styled from 'styled-components';
import dayjs from 'dayjs';

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
const DateCell = styled.div<{ $outsideMonth?: boolean }>`
  box-sizing: border-box;
  text-align: center;
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  padding: ${CELL_PADDING};
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  cursor: pointer;
  &[data-date-is-holiday] {
    color: ${(p) => p.theme.color['Error/Error 60 Main']};
  }
  &[data-date-is-today='true'] {
    padding: 7px 0;
    border: 1px ${(p) => p.theme.color['Neutral/Neutral 90']} solid;
    border-radius: 50%;
  }
  &:hover {
    padding: 7px 0;
    border: 1px ${(p) => p.theme.color['Primary/Primary 60 Main']} solid;
    border-radius: 50%;
  }
  &[data-date-is-selected='true'] {
    border-radius: 50%;
    border: none;
    background-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
    color: ${(p) => p.theme.color['Special/Static White']};
    &:hover {
      padding: ${CELL_PADDING};
      background-color: ${(p) => p.theme.color['Primary/Primary 70']};
    }
  }
  &[data-date-is-disabled] {
    border: none;
    color: ${(p) => p.theme.color['Neutral/Neutral 30']};
    background-color: ${(p) => p.theme.color['Special/Elevated BG']};
    cursor: default;
    padding: ${CELL_PADDING};
  }
  &[data-date-is-holiday][data-date-is-disabled] {
    border: none;
    color: ${(p) => p.theme.color['Error/Error 30']};
    background-color: ${(p) => p.theme.color['Special/Elevated BG']};
    cursor: default;
    padding: ${CELL_PADDING};
  }
  &[data-date-is-outside-month='true'] {
    border: none;
    color: ${(p) => p.theme.color['Neutral/Neutral 20']};
    background-color: ${(p) => p.theme.color['Special/Elevated BG']};
    cursor: default;
    padding: ${CELL_PADDING};
  }
  &[data-date-is-hidden='true'] {
    border: none;
    color: ${(p) => p.theme.color['Special/Elevated BG']};
    background-color: ${(p) => p.theme.color['Special/Elevated BG']};
    cursor: default;
    padding: ${CELL_PADDING};
  }
`;

export const Dates = ({ date, cellState }: DatesProps) => {
  const firstDate = date.startOf('month').startOf('week');

  const renderDates = () => {
    return Array.from(Array(DATES_ON_SCREEN).keys()).map((v) => {
      const currentDate = setNoon(firstDate.add(v, 'day'));
      const cellType = cellState?.(dayjsDateToString(currentDate));
      const outsideMonth = cellType && cellType.outsideMonth ? true : date.month() != currentDate.month();

      return (
        <DateCell
          key={v + 1}
          data-value={currentDate.toISOString()}
          data-date-is-outside-month={outsideMonth ? true : undefined}
          data-date-is-today={currentDate.isSame(dayjs(), 'date') ? true : undefined}
          data-date-is-selected={!outsideMonth && cellType && cellType.selected ? true : undefined}
          data-date-is-disabled={cellType && cellType.disabled ? true : undefined}
          data-date-is-hidden={cellType && cellType.hidden ? true : undefined}
          data-date-is-holiday={cellType && cellType.holiday ? true : undefined}
        >
          {currentDate.date()}
        </DateCell>
      );
    });
  };

  return <DatesWrapper>{renderDates()}</DatesWrapper>;
};

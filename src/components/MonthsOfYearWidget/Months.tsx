import type { HTMLAttributes, ReactNode } from 'react';
import type { RuleSet } from 'styled-components';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { dayjsDateToString, setNoon } from '#src/components/utils';
import type { MonthsProps } from '#src/components/MonthsOfYearWidget/interfaces';
import {
  MONTH_CELL_HEIGHT,
  MONTH_CELL_WIDTH,
  MONTHS_WRAPPER_HEIGHT,
} from '#src/components/MonthsOfYearWidget/constants';
import {
  baseMonthCellMixin,
  currentMonthCellMixin,
  disabledMonthCellMixin,
  hiddenMonthCellMixin,
  selectedMonthCellMixin,
} from '#src/components/MonthsOfYearWidget/mixins.tsx';

const MonthsWrapper = styled.div`
  height: ${MONTHS_WRAPPER_HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const MonthCell = styled.div<{ $monthCellMixin?: RuleSet<object> }>`
  box-sizing: border-box;
  text-align: center;
  width: ${MONTH_CELL_WIDTH}px;
  height: ${MONTH_CELL_HEIGHT}px;
  cursor: pointer;

  &[data-disabled='true'] {
    cursor: default;
  }
  &[data-hidden='true'] {
    cursor: default;
  }
  ${(p) => p.$monthCellMixin}
`;

export const Months = ({ date, renderMonthCell, ...props }: MonthsProps) => {
  const firstMonth = setNoon(dayjs(`${date.year()}-01-01T12:00:00`));

  const renderMonths = () => {
    return (
      <>{Array.from(Array(12).keys()).map((v) => renderMonthCell(dayjsDateToString(firstMonth.add(v, 'month'))))}</>
    );
  };
  return <MonthsWrapper {...props}>{renderMonths()}</MonthsWrapper>;
};

export interface DefaultMonthCellProps extends HTMLAttributes<HTMLDivElement> {
  cellContent?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  isCurrentMonth?: boolean;
  //isInRange?: boolean;
  //isRangeStart?: boolean;
  //isRangeEnd?: boolean;
  //isInRangeSelecting?: boolean;
  //isRangeSelectingStart?: boolean;
  //isRangeSelectingEnd?: boolean;
  //isActive?: boolean;
}

const getDefaultMonthCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isCurrentMonth?: boolean,
) => {
  if (hidden) return hiddenMonthCellMixin;
  if (disabled) return disabledMonthCellMixin;
  if (selected) return selectedMonthCellMixin;
  if (isCurrentMonth) return currentMonthCellMixin;
  return baseMonthCellMixin;
};

export const DefaultMonthCell = ({
  cellContent,
  selected,
  disabled,
  hidden,
  isCurrentMonth,
  ...props
}: DefaultMonthCellProps) => {
  const cellMixin = getDefaultMonthCellMixin(selected, disabled, hidden, isCurrentMonth);

  return (
    <MonthCell
      data-selected={selected ? true : undefined}
      data-disabled={disabled ? true : undefined}
      data-hidden={hidden ? true : undefined}
      $monthCellMixin={cellMixin}
      {...props}
    >
      {cellContent}
    </MonthCell>
  );
};

import type { HTMLAttributes, ReactNode } from 'react';
//import type { RuleSet } from 'styled-components';
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
  /*baseMonthCellMixin,
  currentMonthCellMixin,
  disabledMonthCellMixin,
  hiddenMonthCellMixin,
  selectedMonthCellMixin,*/
  monthCellMixin,
} from '#src/components/MonthsOfYearWidget/mixins.tsx';

const MonthsWrapper = styled.div`
  height: ${MONTHS_WRAPPER_HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const MonthCell = styled.div<{
  //$monthCellMixin?: RuleSet<object>;
  $isActive?: boolean;
  $isSelected?: boolean;
  $isCurrentMonth?: boolean;
  $disabled?: boolean;
  $hidden?: boolean;
}>`
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
  ${monthCellMixin}
`;

const monthsArray = Array.from(Array(12).keys());

export const Months = ({ date, renderMonthCell, ...props }: MonthsProps) => {
  const firstMonth = setNoon(dayjs(`${date.year()}-01-01T12:00:00`));

  return (
    <MonthsWrapper {...props}>
      <>{monthsArray.map((v) => renderMonthCell(dayjsDateToString(firstMonth.add(v, 'month'))))}</>
    </MonthsWrapper>
  );
};

export interface DefaultMonthCellProps extends HTMLAttributes<HTMLDivElement> {
  cellContent?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  isCurrentMonth?: boolean;
  isActive?: boolean;
  //isInRange?: boolean;
  //isRangeStart?: boolean;
  //isRangeEnd?: boolean;
  //isInRangeSelecting?: boolean;
  //isRangeSelectingStart?: boolean;
  //isRangeSelectingEnd?: boolean;
}

/*const getDefaultMonthCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isCurrentMonth?: boolean,
  //isActive?: boolean,
) => {
  if (hidden) return hiddenMonthCellMixin;
  if (disabled) return disabledMonthCellMixin;
  if (selected) return selectedMonthCellMixin;
  if (isCurrentMonth) return currentMonthCellMixin;
  return baseMonthCellMixin;
};*/

export const DefaultMonthCell = ({
  cellContent,
  selected,
  disabled,
  hidden,
  isCurrentMonth,
  isActive,
  ...props
}: DefaultMonthCellProps) => {
  //const cellMixin = getDefaultMonthCellMixin(selected, disabled, hidden, isCurrentMonth);
  //console.log(cellContent);

  return (
    <MonthCell
      data-cell-type="monthCell"
      data-selected={selected ? true : undefined}
      data-disabled={disabled ? true : undefined}
      data-hidden={hidden ? true : undefined}
      //$monthCellMixin={cellMixin}
      $isActive={isActive}
      $isSelected={selected}
      $disabled={disabled}
      $hidden={hidden}
      $isCurrentMonth={isCurrentMonth}
      {...props}
    >
      {cellContent}
    </MonthCell>
  );
};

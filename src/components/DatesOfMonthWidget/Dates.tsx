import type { HTMLAttributes, ReactNode } from 'react';
import type { RuleSet } from 'styled-components';
import styled, { css } from 'styled-components';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

import { dayjsDateToString, setNoon } from '#src/components/utils';
import { CELL_SIZE, DATES_ON_SCREEN, DATES_WRAPPER_HEIGHT } from '#src/components/DatesOfMonthWidget/constants';
import type { DatesProps } from '#src/components/DatesOfMonthWidget/interfaces';
import {
  baseDateCellMixin,
  disabledDateCellMixin,
  disabledHolidayDateCellMixin,
  hiddenDateCellMixin,
  holidayDateCellMixin,
  outsideMonthDateCellMixin,
  selectedDateCellMixin,
  currentDateCellMixin,
  currentDateHolidayDateCellMixin,
  rangeDateCellMixin,
  rangeHolidayDateCellMixin,
  rangeDisabledHolidayDateCellMixin,
  rangeDisabledDateCellMixin,
  rangeCurrentDateCellMixin,
  rangeCurrentHolidayDateCellMixin,
} from '#src/components/DatesOfMonthWidget/mixins';

const DatesWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: ${DATES_WRAPPER_HEIGHT}px;
`;

const DateCellContainer = styled.div`
  position: relative;
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  & > * {
    pointer-events: none;
  }
  cursor: pointer;

  &[data-disabled-cell='true'] {
    cursor: default;
  }
  &[data-hidden-cell='true'] {
    cursor: default;
  }
`;

const rangeLayoutMixin = css<{ $isVisible: boolean; $isSelectingRange: boolean }>`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: ${(p) => (p.$isSelectingRange ? p.theme.color['Opacity/Press'] : p.theme.color['Opacity/Hover'])};
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

const LeftHalf = styled.div<{ $isVisible: boolean; $isSelectingRange: boolean; $isStartOfWeek: boolean }>`
  ${rangeLayoutMixin};
  left: 0;
  ${(p) =>
    p.$isStartOfWeek &&
    `border-top-left-radius: ${mediumGroupBorderRadius(p.theme.shape)};
     border-bottom-left-radius: ${mediumGroupBorderRadius(p.theme.shape)};`}
`;
const RightHalf = styled.div<{ $isVisible: boolean; $isSelectingRange: boolean; $isEndOfWeek: boolean }>`
  ${rangeLayoutMixin};
  right: 0;
  ${(p) =>
    p.$isEndOfWeek &&
    `border-top-right-radius: ${mediumGroupBorderRadius(p.theme.shape)};
     border-bottom-right-radius: ${mediumGroupBorderRadius(p.theme.shape)};`}
`;

const DateCell = styled.div<{
  $dateCellMixin: RuleSet<object>;
  $isInRange?: boolean;
  $isRangeStart?: boolean;
  $isRangeEnd?: boolean;
  $isActive?: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  text-align: center;
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  ${(p) => p.$dateCellMixin}
`;

export const Dates = ({ date, renderDateCell, ...props }: DatesProps) => {
  const firstDate = setNoon(date.startOf('month').startOf('week'));

  const renderDates = () => {
    return (
      <>
        {Array.from(Array(DATES_ON_SCREEN).keys()).map((v) =>
          renderDateCell(dayjsDateToString(firstDate.add(v, 'day'))),
        )}
      </>
    );
  };

  return (
    <DatesWrapper {...props} data-container-type="datesWrapper">
      {renderDates()}
    </DatesWrapper>
  );
};

export interface DefaultDateCellProps extends HTMLAttributes<HTMLDivElement> {
  cellContent?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  isCurrentDay?: boolean;
  isHoliday?: boolean;
  isOutsideMonth?: boolean;
  isInRange?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  isInRangeSelecting?: boolean;
  isRangeSelectingStart?: boolean;
  isRangeSelectingEnd?: boolean;
  isStartOfWeek?: boolean;
  isEndOfWeek?: boolean;
  isActive?: boolean;
}

const getDefaultDateCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isCurrentDay?: boolean,
  isHoliday?: boolean,
  isOutsideMonth?: boolean,
  isInRange?: boolean,
  isRangeStart?: boolean,
  isRangeEnd?: boolean,
  /*isInRangeSelecting?: boolean,
  isRangeSelectingStart?: boolean,
  isRangeSelectingEnd?: boolean,
  isStartOfWeek?: boolean,
  isEndOfWeek?: boolean,*/
  isActive?: boolean,
) => {
  if (hidden) return hiddenDateCellMixin;
  if (isInRange && disabled && isHoliday) return rangeDisabledHolidayDateCellMixin;
  if (isInRange && isCurrentDay && isHoliday) return rangeCurrentHolidayDateCellMixin;
  //if (isRangeSelectingStart || isRangeSelectingEnd) return selectingRangeEndDateCellMixin;
  if (isInRange && disabled) return rangeDisabledDateCellMixin;
  if (isInRange && isCurrentDay) return rangeCurrentDateCellMixin;
  if (disabled && isHoliday) return disabledHolidayDateCellMixin;
  if (disabled) return disabledDateCellMixin;
  if (isActive) return baseDateCellMixin;
  if (isOutsideMonth) return outsideMonthDateCellMixin;
  if (selected || isRangeStart || isRangeEnd) return selectedDateCellMixin;
  //if (isRangeStart || isRangeEnd) return rangeEndsDateCellMixin;
  if (isInRange && isHoliday) return rangeHolidayDateCellMixin;
  if (isHoliday && isCurrentDay) return currentDateHolidayDateCellMixin;
  if (isHoliday) return holidayDateCellMixin;
  if (isCurrentDay) return currentDateCellMixin;
  if (isInRange) return rangeDateCellMixin;
  return baseDateCellMixin;
};

export const DefaultDateCell = ({
  cellContent,
  selected,
  disabled,
  hidden,
  isCurrentDay,
  isHoliday,
  isOutsideMonth,
  isInRange,
  isRangeStart,
  isRangeEnd,
  isInRangeSelecting,
  isRangeSelectingStart,
  isRangeSelectingEnd,
  isStartOfWeek,
  isEndOfWeek,
  isActive,
  className,
  ...props
}: DefaultDateCellProps) => {
  const cellMixin = getDefaultDateCellMixin(
    selected,
    disabled,
    hidden,
    isCurrentDay,
    isHoliday,
    isOutsideMonth,
    isInRange || isInRangeSelecting,
    isRangeStart || isRangeSelectingStart,
    isRangeEnd || isRangeSelectingEnd,
    /*isInRangeSelecting,
    //isRangeSelectingStart,
    false,
    //isRangeSelectingEnd,
    false,
    isStartOfWeek,
    isEndOfWeek,*/
    isActive,
  );
  return (
    <DateCellContainer
      className={className}
      {...props}
      data-cell-type="dateCell"
      data-selected-cell={selected ? true : undefined}
      data-disabled-cell={disabled ? true : undefined}
      data-hidden-cell={hidden ? true : undefined}
    >
      <LeftHalf
        $isVisible={
          !hidden &&
          !(isRangeStart && isRangeEnd) &&
          !(isRangeSelectingStart && isRangeSelectingEnd && !isRangeEnd) &&
          (!!isInRange || !!isRangeEnd || !!isInRangeSelecting || !!isRangeSelectingEnd)
        }
        $isSelectingRange={
          !!isInRangeSelecting || (!!isRangeSelectingEnd && !!isRangeSelectingStart !== isRangeSelectingEnd)
        }
        $isStartOfWeek={!!isStartOfWeek}
      />
      <RightHalf
        $isVisible={
          !hidden &&
          !(isRangeStart && isRangeEnd) &&
          !(isRangeSelectingStart && isRangeSelectingEnd && !isRangeStart) &&
          (!!isInRange || !!isRangeStart || !!isInRangeSelecting || !!isRangeSelectingStart)
        }
        $isSelectingRange={
          !!isInRangeSelecting || (!!isRangeSelectingStart && isRangeSelectingStart !== !!isRangeSelectingEnd)
        }
        $isEndOfWeek={!!isEndOfWeek}
      />
      <DateCell
        $dateCellMixin={cellMixin}
        $isInRange={isInRange || isInRangeSelecting}
        $isRangeStart={isRangeStart}
        $isRangeEnd={isRangeEnd}
        $isActive={isActive}
      >
        {cellContent}
      </DateCell>
    </DateCellContainer>
  );
};

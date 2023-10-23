import type { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

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
  rangeDisabledHolidayDateCellMixin, rangeDisabledDateCellMixin,
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
`;

const LeftHalf = styled.div<{ $isVisible: boolean; $isStartOfWeek: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: ${(p) => p.theme.color['Opacity/Hover']};
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
  ${(p) =>
    p.$isStartOfWeek &&
    `border-top-left-radius: ${mediumGroupBorderRadius(p.theme.shape)};
     border-bottom-left-radius: ${mediumGroupBorderRadius(p.theme.shape)};`}
`;
const RightHalf = styled.div<{ $isVisible: boolean; $isEndOfWeek: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: ${(p) => p.theme.color['Opacity/Hover']};
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
  ${(p) =>
    p.$isEndOfWeek &&
    `border-top-right-radius: ${mediumGroupBorderRadius(p.theme.shape)};
     border-bottom-right-radius: ${mediumGroupBorderRadius(p.theme.shape)};`}
`;

const DateCell = styled.div<{
  $dateCellMixin: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  $isInRange?: boolean;
  $isRangeStart?: boolean;
  $isRangeEnd?: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  text-align: center;
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  cursor: pointer;

  &[data-disabled='true'] {
    cursor: default;
  }
  &[data-hidden='true'] {
    cursor: default;
  }
  ${(p) => p.$dateCellMixin}
`;

export const Dates = ({ date, renderDateCell, ...props }: DatesProps) => {
  const firstDate = setNoon(date.startOf('month').startOf('week'));

  const renderDates = () => {
    return Array.from(Array(DATES_ON_SCREEN).keys()).map((v) =>
      renderDateCell(dayjsDateToString(firstDate.add(v, 'day'))),
    );
  };

  return <DatesWrapper {...props}>{renderDates()}</DatesWrapper>;
};

export interface DateCellProps extends HTMLAttributes<HTMLDivElement> {
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
  isStartOfWeek?: boolean;
  isEndOfWeek?: boolean;
}

const getDateCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isCurrentDay?: boolean,
  isHoliday?: boolean,
  isOutsideMonth?: boolean,
  isInRange?: boolean,
  isRangeStart?: boolean,
  isRangeEnd?: boolean,
  isStartOfWeek?: boolean,
  isEndOfWeek?: boolean,
) => {
  if (hidden) return hiddenDateCellMixin;
  if (isInRange && disabled && isHoliday) return rangeDisabledHolidayDateCellMixin;
  if (isInRange && disabled) return rangeDisabledDateCellMixin;
  if (disabled && isHoliday) return disabledHolidayDateCellMixin;
  if (disabled) return disabledDateCellMixin;
  if (isOutsideMonth) return outsideMonthDateCellMixin;
  if (selected || isRangeStart || isRangeEnd) return selectedDateCellMixin;
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
  isStartOfWeek,
  isEndOfWeek,
  className,
  ...props
}: DateCellProps) => {
  const cellMixin = getDateCellMixin(
    selected,
    disabled,
    hidden,
    isCurrentDay,
    isHoliday,
    isOutsideMonth,
    isInRange,
    isRangeStart,
    isRangeEnd,
    isStartOfWeek,
    isEndOfWeek,
  );
  return (
    <DateCellContainer className={className}>
      <LeftHalf $isVisible={!!isInRange || !!isRangeEnd} $isStartOfWeek={!!isStartOfWeek} />
      <RightHalf $isVisible={!!isInRange || !!isRangeStart} $isEndOfWeek={!!isEndOfWeek} />
      <DateCell
        {...props}
        data-selected={selected ? true : undefined}
        data-disabled={disabled ? true : undefined}
        data-hidden={hidden ? true : undefined}
        $dateCellMixin={cellMixin}
        $isInRange={isInRange}
        $isRangeStart={isRangeStart}
        $isRangeEnd={isRangeEnd}
      >
        {cellContent}
      </DateCell>
    </DateCellContainer>
  );
};

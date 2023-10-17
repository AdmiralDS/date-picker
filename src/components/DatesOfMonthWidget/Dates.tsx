import type { HTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';
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
//${(p) => p.$isInRange && rangeDateCellMixin}
//${(p) => (p.$isRangeStart || p.$isRangeEnd) && selectedDateCellMixin}

export const Dates = ({ date, dateCellState, ...props }: DatesProps) => {
  const firstDate = date.startOf('month').startOf('week');

  const renderDates = () => {
    return Array.from(Array(DATES_ON_SCREEN).keys()).map((v) => {
      //const currentDate = setNoon(firstDate.add(v, 'day'));
      const currentDate = setNoon(firstDate.add(v, 'day'));
      const { selected, disabled, hidden, cellMixin, isInRange, isRangeStart, isRangeEnd, ...restCellStateProps } =
        dateCellState(dayjsDateToString(currentDate));

      return (
        <DateCellContainer key={currentDate.toISOString()}>
          {/*{renderCell(currentDate)}*/}
          <LeftHalf
            $isVisible={!!isInRange || !!isRangeEnd}
            $isStartOfWeek={currentDate.isSame(currentDate.startOf('week'), 'date')}
          />
          <RightHalf
            $isVisible={!!isInRange || !!isRangeStart}
            $isEndOfWeek={currentDate.isSame(currentDate.endOf('week'), 'date')}
          />
          <DateCell
            {...restCellStateProps}
            $dateCellMixin={cellMixin}
            $isInRange={isInRange}
            $isRangeStart={isRangeStart}
            $isRangeEnd={isRangeEnd}
            data-value={currentDate.toISOString()}
            data-selected={selected ? true : undefined}
            data-disabled={disabled ? true : undefined}
            data-hidden={hidden ? true : undefined}
          >
            {currentDate.date()}
          </DateCell>
        </DateCellContainer>
      );
    });
  };

  return <DatesWrapper {...props}>{renderDates()}</DatesWrapper>;
};

export interface DateCellProps extends HTMLAttributes<HTMLElement> {
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
  if (disabled && isHoliday) return disabledHolidayDateCellMixin;
  if (disabled) return disabledDateCellMixin;
  if (isOutsideMonth) return outsideMonthDateCellMixin;
  if (selected || isRangeStart || isRangeEnd) return selectedDateCellMixin;
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
  children,
  //className,
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
    <DateCellContainer
      {...props}
      data-selected={selected ? true : undefined}
      data-disabled={disabled ? true : undefined}
      data-hidden={hidden ? true : undefined}
    >
      <LeftHalf $isVisible={!!isInRange || !!isRangeEnd} $isStartOfWeek={!!isStartOfWeek} />
      <RightHalf $isVisible={!!isInRange || !!isRangeStart} $isEndOfWeek={!!isEndOfWeek} />
      <DateCell
        $dateCellMixin={cellMixin}
        $isInRange={isInRange}
        $isRangeStart={isRangeStart}
        $isRangeEnd={isRangeEnd}
        //data-value={currentDate.toISOString()}
      >
        {cellContent}
      </DateCell>
    </DateCellContainer>
  );
};

//export const renderDefaultDateCell = (props: DateCellProps) => <DefaultDateCell {...props} />;

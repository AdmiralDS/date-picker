import styled, { css } from 'styled-components';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

import { dayjsDateToString, setNoon } from '#src/components/utils';
import { CELL_SIZE, DATES_ON_SCREEN, DATES_WRAPPER_HEIGHT } from '#src/components/DatesOfMonthWidget/constants';
import type { DatesProps } from '#src/components/DatesOfMonthWidget/interfaces';
import { selectedDateCellMixin } from '#src/components/DatesOfMonthWidget/mixins';

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

const rangeDateCellMixin = css`
  background-color: transparent;
  border-color: transparent;

  &:hover {
    background-color: ${(p) => p.theme.color['Special/Elevated BG']};
    border-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  }
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

  ${(p) => p.$isInRange && rangeDateCellMixin}
  ${(p) => (p.$isRangeStart || p.$isRangeEnd) && selectedDateCellMixin}
`;

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

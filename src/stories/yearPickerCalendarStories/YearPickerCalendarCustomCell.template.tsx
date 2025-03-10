import type { MouseEventHandler } from 'react';
import { memo } from 'react';
import { css } from 'styled-components';

import { vars } from '@admiral-ds/web';
import { T } from '@admiral-ds/react-ui';
import { DefaultCell, YearPickerCalendar } from '@admiral-ds/date-picker';
import type { DefaultCellProps } from '@admiral-ds/date-picker';
import { YEAR_CELL_HEIGHT, YEAR_CELL_WIDTH } from '#lib/DefaultCell/constants.ts';
import {
  baseYearCellMixin,
  currentYearCellMixin,
  disabledYearCellMixin,
  hiddenYearCellMixin,
  selectedYearCellMixin,
} from '#lib/DefaultCell/mixins.tsx';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

const getDefaultYearCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isCurrent?: boolean,
  isActive?: boolean,
) => {
  if (hidden) return hiddenYearCellMixin;
  if (disabled) return disabledYearCellMixin;
  if (selected) return selectedYearCellMixin;
  if (isActive) return baseYearCellMixin;
  if (isCurrent) return currentYearCellMixin;
  return baseYearCellMixin;
};

const getYearCellDataAttributes = (isCurrent?: boolean, isActive?: boolean): Record<string, any> => {
  return {
    'data-is-current-year': isCurrent ? isCurrent : undefined,
    'data-is-active-year': isActive ? isActive : undefined,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DefaultYearCell = ({ isCurrent, isHoliday, ...props }: DefaultCellProps) => {
  const yearCellMixin = getDefaultYearCellMixin(
    props.selected,
    props.disabled,
    props.hidden,
    isCurrent,
    props.isActive,
  );
  const cellMixin = css`
    ${yearCellMixin};
    color: ${vars.color.Success_Success50Main};
  `;

  return (
    <DefaultCell
      width={YEAR_CELL_WIDTH}
      height={YEAR_CELL_HEIGHT}
      cellMixin={cellMixin}
      data-cell-type="yearCell"
      {...getYearCellDataAttributes(!!isCurrent, props.isActive)}
      {...props}
    />
  );
};
const MemoCell = memo(DefaultYearCell);

export const YearPickerCalendarCustomCellTemplate = () => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <WrapperHorizontal>
      <YearPickerCalendar cell={{ yearCell: MemoCell }} onClick={handleClick} />
      <WrapperVertical>
        <T font="Body/Body 2 Long" as="div">
          Календарь позволяет кастомизировать отображение ячеек при необходимости, например, изменять базовый цвет
          текста.
          <br />
          <br />
          Очень важно передавать подобные кастомизированные элементы, обернув их в React.memo, чтобы избежать лишних
          перерендеров при обновлении компонента.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

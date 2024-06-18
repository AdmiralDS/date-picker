import type { MouseEventHandler } from 'react';
import { memo } from 'react';
import type { Dayjs } from 'dayjs';
import { css } from 'styled-components';

import { T } from '@admiral-ds/react-ui';
import type { DatePickerCalendarProps, DateAttributes, DefaultCellProps } from '@admiral-ds/date-picker';
import { DatePickerCalendar, DefaultCell } from '@admiral-ds/date-picker';
import {
  baseDateCellMixin,
  currentDateCellMixin,
  currentDateHolidayDateCellMixin,
  disabledCurrentDateCellMixin,
  disabledCurrentHolidayDateCellMixin,
  disabledDateCellMixin,
  disabledHolidayDateCellMixin,
  holidayDateCellMixin,
  selectedDateCellMixin,
} from '#lib/DefaultCell/mixins.tsx';
import { DATE_CELL_HEIGHT, DATE_CELL_WIDTH } from '#lib/DefaultCell/constants.ts';

import { WrapperHorizontal } from '#src/stories/common.tsx';

const outsideMonthDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateCellMixin};
  color: ${(p) => p.theme.color['Neutral/Neutral 10']};
`;

const getDefaultDateCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  isOutsideMonth?: boolean,
  isCurrent?: boolean,
  isHoliday?: boolean,
  isActive?: boolean,
) => {
  if (isOutsideMonth) return outsideMonthDateCellMixin;
  if (disabled && isHoliday && isCurrent) return disabledCurrentHolidayDateCellMixin;
  if (disabled && isHoliday) return disabledHolidayDateCellMixin;
  if (disabled && isCurrent) return disabledCurrentDateCellMixin;
  if (disabled) return disabledDateCellMixin;
  if (selected) return selectedDateCellMixin;
  if (isActive && isHoliday) return holidayDateCellMixin;
  if (isActive) return baseDateCellMixin;
  if (isHoliday && isCurrent) return currentDateHolidayDateCellMixin;
  if (isHoliday) return holidayDateCellMixin;
  if (isCurrent) return currentDateCellMixin;
  return baseDateCellMixin;
};

const getDateCellDataAttributes = (isHoliday?: boolean, isCurrent?: boolean, isActive?: boolean) => {
  return {
    'data-is-holiday-cell': isHoliday ? isHoliday : undefined,
    'data-is-current-day-cell': isCurrent ? isCurrent : undefined,
    'data-is-active-cell': isActive ? isActive : undefined,
  };
};

const CustomDateCell = ({ isCurrent, isHoliday, ...props }: DefaultCellProps) => {
  const dateCellMixin = getDefaultDateCellMixin(
    props.selected,
    props.disabled,
    props.hidden,
    isCurrent,
    isHoliday,
    props.isActive,
  );
  console.log('render DateCell');

  return (
    <DefaultCell
      width={DATE_CELL_WIDTH}
      height={DATE_CELL_HEIGHT}
      cellMixin={dateCellMixin}
      data-cell-type="dateCell"
      {...getDateCellDataAttributes(isHoliday, isCurrent, props.isActive)}
      {...props}
    />
  );
};
const MemoCustomDateCell = memo(CustomDateCell);

export const DatePickerCalendarCustomCellTemplate = (props: DatePickerCalendarProps) => {
  const dateAttrs: (date: Dayjs) => DateAttributes = (date: Dayjs) => {
    return {
      disabled: date.day() === 6,
      isHoliday: date.day() === 0,
    };
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <WrapperHorizontal>
      <DatePickerCalendar
        {...props}
        onClick={handleClick}
        dateAttributes={dateAttrs}
        cell={{ dateCell: MemoCustomDateCell }}
      />
      <T font="Body/Body 2 Long" as="div">
        Календарь позволяет кастомизировать отображение ячеек дат (а также месяцев и лет) при необходимости, например,
        отображать дни, которые не входят в месяц.
        <br />
        <br />
        Очень важно передавать подобные кастомизированные элементы, обернув их в React.memo, чтобы избежать лишних
        перерендеров при обновлении компонента.
      </T>
    </WrapperHorizontal>
  );
};

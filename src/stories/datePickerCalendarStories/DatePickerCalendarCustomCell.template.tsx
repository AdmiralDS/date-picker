import type { MouseEventHandler } from 'react';
import { memo } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import type { DatePickerCalendarProps } from '@admiral-ds/date-picker';
import { DatePickerCalendar } from '@admiral-ds/date-picker';
import type { DateAttributes, DefaultCellProps } from '#src/components/DefaultCell';
import { DefaultCell } from '#src/components/DefaultCell';
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
} from '#src/components/DefaultCell/mixins.tsx';
import { DATE_CELL_HEIGHT, DATE_CELL_WIDTH } from '#src/components/DefaultCell/constants.ts';
import { css } from 'styled-components';

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
      disabled: date.isBefore(dayjs()),
      isHoliday: date.day() === 0 || date.day() === 6 || date.isSame(dayjs(), 'date'),
    };
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <DatePickerCalendar
      {...props}
      onClick={handleClick}
      dateAttributes={dateAttrs}
      cell={{ dateCell: MemoCustomDateCell }}
    />
  );
};

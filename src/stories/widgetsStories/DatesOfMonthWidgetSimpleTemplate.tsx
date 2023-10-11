import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';

import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, dateStringToDayjs } from '#src/components/Calendar/utils';
import { DatesOfMonthWidget } from '#src/components/Widgets/DatesOfMonthWidget';
import { DATES_OF_MONTH_WIDGET_WIDTH } from '#src/components/Widgets/DatesOfMonthWidget/constants';
import type { DatesOfMonthProps, CellStateProps } from '#src/components/Widgets/DatesOfMonthWidget/interfaces';
import {
  baseDateCellMixin,
  baseDayNameCellMixin,
  disabledDateCellMixin,
  disabledHolidayDateCellMixin,
  hiddenDateCellMixin,
  holidayDateCellMixin,
  outsideMonthDateCellMixin,
  selectedDateCellMixin,
  todayDateCellMixin,
  todayHolidayDateCellMixin,
} from '#src/components/Widgets/DatesOfMonthWidget/mixins';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding: 10px;
  width: ${DATES_OF_MONTH_WIDGET_WIDTH}px;
`;
const MonthYear = styled.div`
  margin-bottom: 10px;
  ${typography['Subtitle/Subtitle 2']}
`;

const getDateCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isHoliday?: boolean,
  isOutsideMonth?: boolean,
  isToday?: boolean,
) => {
  if (hidden) return hiddenDateCellMixin;
  if (disabled && isHoliday) return disabledHolidayDateCellMixin;
  if (disabled) return disabledDateCellMixin;
  if (isOutsideMonth) return outsideMonthDateCellMixin;
  if (selected) return selectedDateCellMixin;
  if (isHoliday && isToday) return todayHolidayDateCellMixin;
  if (isHoliday) return holidayDateCellMixin;
  if (isToday) return todayDateCellMixin;
  return baseDateCellMixin;
};

const getDateCellDataAttributes = (
  isHoliday?: boolean,
  isOutsideMonth?: boolean,
  isToday?: boolean,
): Record<string, any> => {
  return {
    'data-is-holiday': isHoliday ? isHoliday : undefined,
    'data-is-outside-month': isOutsideMonth ? isOutsideMonth : undefined,
    'data-is-today': isToday ? isToday : undefined,
  };
};

export const DatesOfMonthWidgetSimpleTemplate = (props: DatesOfMonthProps) => {
  const locale = 'ru';
  const date = dateStringToDayjs(props.date, locale) || dayjs().locale(locale);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs().locale(locale).add(1, 'day'));

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
    const clickedDate = dateStringToDayjs(clickedCell);
    if (clickedDate && !dateIsDisabled(clickedDate) && !dateIsOutsideMonth(clickedDate)) {
      setSelectedDate(clickedDate);
    }
  };

  const dateIsOutsideMonth = (dateCurrent?: Dayjs) => {
    return dateCurrent && dateCurrent.month() !== date.month();
  };
  const dateIsDisabled = (dateCurrent?: Dayjs) => {
    return !!(
      dateCurrent &&
      dateCurrent.month() === date.month() &&
      (dateCurrent.day() === 6 || dateCurrent.date() < 5)
    );
  };
  const dateIsHoliday = (dateCurrent?: Dayjs) => {
    return !!(
      dateCurrent &&
      dateCurrent.month() === date.month() &&
      (dateCurrent.day() === 6 || dateCurrent.day() === 0 || dateCurrent.isSame(dayjs().locale(locale), 'date'))
    );
  };
  const dateIsHidden = (dateCurrent?: Dayjs) => {
    return dateCurrent && dateCurrent.isAfter(date, 'month');
  };

  const getDateCellState = (dateString: string): CellStateProps => {
    const dateCurrent = dateStringToDayjs(dateString, locale);
    const selected = dateCurrent && dateCurrent.isSame(selectedDate, 'date');
    const disabled = dateIsDisabled(dateCurrent);
    const isOutsideMonth = dateIsOutsideMonth(dateCurrent);
    const hidden = dateIsHidden(dateCurrent);
    const isHoliday = dateIsHoliday(dateCurrent);
    const isToday = dateCurrent && dateCurrent.isSame(dayjs().locale(locale), 'date');

    const cellMixin = getDateCellMixin(selected, disabled, hidden, isHoliday, isOutsideMonth, isToday);
    const dataAttributes = getDateCellDataAttributes(isHoliday, isOutsideMonth, isToday);

    return { selected, disabled, hidden, cellMixin, ...dataAttributes };
  };

  const getDayNameCellState = (dayNumber: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(date.format('D MMMM YYYY'))}</MonthYear>
      <DatesOfMonthWidget
        {...props}
        onClick={handleClick}
        dayNamesProps={{ dayNameCellState: getDayNameCellState }}
        datesProps={{ dateCellState: getDateCellState }}
      />
    </Wrapper>
  );
};

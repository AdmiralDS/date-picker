import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, dateStringToDayjs, dayjsDateToString } from '#src/components/utils';
import type { MonthsOfYearWidgetProps } from '#src/components/MonthsOfYearWidget/interfaces';
import { MONTHS_OF_YEAR_WIDGET_WIDTH } from '#src/components/MonthsOfYearWidget/constants';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';
import {
  baseMonthCellMixin,
  currentMonthCellMixin,
  disabledMonthCellMixin,
  hiddenMonthCellMixin,
  selectedMonthCellMixin,
} from '#src/components/MonthsOfYearWidget/mixins';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding: 10px;
  width: ${MONTHS_OF_YEAR_WIDGET_WIDTH}px;
  border: 1px ${(p) => p.theme.color['Neutral/Neutral 90']} solid;
`;
const MonthYear = styled.div`
  margin-bottom: 10px;
  ${typography['Subtitle/Subtitle 2']}
`;

export const MonthsOfYearWidgetSimpleTemplate = ({
  date,
  locale = 'ru',
  timezone,
  onClick,
  monthCellState,
  ...props
}: MonthsOfYearWidgetProps) => {
  const dateInner = dateStringToDayjs(date, locale) || dayjs().locale(locale);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs().locale(locale).add(1, 'day'));

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
    const clickedDate = dateStringToDayjs(clickedCell, locale, timezone);
    if (clickedDate) {
      setSelectedDate(clickedDate);
    }
  };

  const getMonthCellMixin = (selected?: boolean, disabled?: boolean, hidden?: boolean, isCurrentMonth?: boolean) => {
    if (hidden) return hiddenMonthCellMixin;
    if (disabled) return disabledMonthCellMixin;
    if (selected) return selectedMonthCellMixin;
    if (isCurrentMonth) return currentMonthCellMixin;
    return baseMonthCellMixin;
  };

  const getMonthCellDataAttributes = (isCurrentMonth?: boolean): Record<string, any> => {
    return {
      'data-is-current-month': isCurrentMonth ? isCurrentMonth : undefined,
    };
  };

  const getMonthCellState = (dateString: string) => {
    const date = dateStringToDayjs(dateString, locale, timezone);
    const selected = date && selectedDate && date.isSame(selectedDate, 'month');
    const isCurrentMonth = date && date.isSame(dayjs().tz(timezone).locale(locale), 'month');

    const cellMixin = getMonthCellMixin(selected, false, false, isCurrentMonth);
    const dataAttributes = getMonthCellDataAttributes(isCurrentMonth);

    return { selected, cellMixin, ...dataAttributes };
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(dateInner.format('D MMMM YYYY'))}</MonthYear>
      <MonthsOfYearWidget
        {...props}
        date={dayjsDateToString(dateInner)}
        locale={locale}
        timezone={timezone}
        onClick={handleClick}
        monthCellState={getMonthCellState}
      />
    </Wrapper>
  );
};

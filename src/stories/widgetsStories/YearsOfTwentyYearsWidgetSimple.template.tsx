import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, dateStringToDayjs, dayjsDateToString, getCurrentDate } from '#src/components/utils';
import type { YearsOfTwentyYearsWidgetProps } from '#src/components/YearsOfTwentyYearsWidget/interfaces';
import { YEARS_OF_YEAR_WIDGET_WIDTH } from '#src/components/YearsOfTwentyYearsWidget/constants';
import {
  baseYearCellMixin,
  currentYearCellMixin,
  disabledYearCellMixin,
  hiddenYearCellMixin,
  selectedYearCellMixin,
} from '#src/components/YearsOfTwentyYearsWidget/mixins';
import { YearsOfTwentyYearsWidget } from '#src/components/YearsOfTwentyYearsWidget';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding: 10px;
  width: ${YEARS_OF_YEAR_WIDGET_WIDTH}px;
  border: 1px ${(p) => p.theme.color['Neutral/Neutral 90']} solid;
`;
const MonthYear = styled.div`
  margin-bottom: 10px;
  ${typography['Subtitle/Subtitle 2']}
`;

export const YearsOfTwentyYearsWidgetSimpleTemplate = ({
  date,
  locale = 'ru',
  timezone,
  onClick,
  yearCellState,
  ...props
}: YearsOfTwentyYearsWidgetProps) => {
  const dateInner = dateStringToDayjs(date, locale) || dayjs().locale(locale);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs().locale(locale).add(1, 'year'));

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
    const clickedDate = dateStringToDayjs(clickedCell, locale, timezone);
    if (clickedDate) {
      setSelectedDate(clickedDate);
    }
  };

  const getYearCellMixin = (selected?: boolean, disabled?: boolean, hidden?: boolean, isCurrentYear?: boolean) => {
    if (hidden) return hiddenYearCellMixin;
    if (disabled) return disabledYearCellMixin;
    if (selected) return selectedYearCellMixin;
    if (isCurrentYear) return currentYearCellMixin;
    return baseYearCellMixin;
  };

  const getYearCellDataAttributes = (isCurrentYear?: boolean): Record<string, any> => {
    return {
      'data-is-current-year': isCurrentYear ? isCurrentYear : undefined,
    };
  };

  const getYearCellState = (dateString: string) => {
    const date = dateStringToDayjs(dateString, locale, timezone);
    const selected = date && selectedDate && date.isSame(selectedDate, 'year');
    const isCurrentYear = date && date.isSame(getCurrentDate(locale, timezone), 'year');

    const cellMixin = getYearCellMixin(selected, false, false, isCurrentYear);
    const dataAttributes = getYearCellDataAttributes(isCurrentYear);

    return { selected, cellMixin, ...dataAttributes };
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(dateInner.format('D MMMM YYYY'))}</MonthYear>
      <YearsOfTwentyYearsWidget
        {...props}
        date={dayjsDateToString(dateInner)}
        locale={locale}
        timezone={timezone}
        onClick={handleClick}
        yearCellState={getYearCellState}
      />
    </Wrapper>
  );
};

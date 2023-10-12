import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, dateStringToDayjs } from '#src/components/utils';
import type { MonthsOfYearWidgetProps } from '#src/components/MonthsOfYearWidget/interfaces';
import { MONTHS_OF_YEAR_WIDGET_WIDTH } from '#src/components/MonthsOfYearWidget/constants';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';
import { baseMonthCellMixin } from '#src/components/MonthsOfYearWidget/mixins';

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

export const MonthsOfYearWidgetSimpleTemplate = (props: MonthsOfYearWidgetProps) => {
  const locale = 'ru';
  const date = dateStringToDayjs(props.date, locale) || dayjs().locale(locale);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs().locale(locale).add(1, 'day'));

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
    const clickedDate = dateStringToDayjs(clickedCell);
    if (clickedDate) {
      setSelectedDate(clickedDate);
    }
  };

  const getMonthCellState = (dateString: string) => {
    const cellMixin = baseMonthCellMixin;
    return { cellMixin };
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(date.format('D MMMM YYYY'))}</MonthYear>
      <MonthsOfYearWidget {...props} onClick={handleClick} monthCellState={getMonthCellState} />
    </Wrapper>
  );
};

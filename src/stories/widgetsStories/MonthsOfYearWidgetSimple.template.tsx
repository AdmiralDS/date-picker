import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, dateStringToDayjs, dayjsDateToString, getCurrentDate } from '#src/components/utils';
import { MONTHS_OF_YEAR_WIDGET_WIDTH } from '#src/components/MonthsOfYearWidget/constants';
import type { MonthsOfYearWidgetProps } from '#src/components/MonthsOfYearWidget';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';

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
  renderCell,
  ...props
}: MonthsOfYearWidgetProps) => {
  const localeInner = locale || 'ru';
  const dateInner = dateStringToDayjs(date, localeInner) || dayjs().locale(localeInner);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs().locale(localeInner).add(1, 'day'));

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
    const clickedDate = dateStringToDayjs(clickedCell, localeInner, timezone);
    if (clickedDate) {
      setSelectedDate(clickedDate);
    }
  };

  const getMonthCellDataAttributes = (value?: string, isCurrent?: boolean): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-month': isCurrent ? isCurrent : undefined,
    };
  };

  const renderMonth = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, localeInner, timezone);
    if (!dateCurrent) return {};
    const cellContent = capitalizeFirstLetter(dateCurrent.format('MMMM'));
    const selected = dateCurrent && selectedDate && dateCurrent.isSame(selectedDate, 'month');
    const isCurrent = dateCurrent && dateCurrent.isSame(getCurrentDate(localeInner, timezone), 'month');
    const dataAttributes = getMonthCellDataAttributes(dateCurrent.toISOString(), isCurrent);

    return { cellContent, selected, isCurrent, ...dataAttributes };
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(dateInner.format('D MMMM YYYY'))}</MonthYear>
      <MonthsOfYearWidget
        {...props}
        date={dayjsDateToString(dateInner)}
        locale={localeInner}
        timezone={timezone}
        onClick={handleClick}
        renderCell={renderCell || renderMonth}
      />
    </Wrapper>
  );
};

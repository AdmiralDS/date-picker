import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, dateStringToDayjs, dayjsDateToString, getCurrentDate } from '#src/components/utils';
import type { YearsOfTwentyYearsWidgetProps } from '#src/components/YearsOfTwentyYearsWidget/interfaces';
import { YEARS_OF_YEAR_WIDGET_WIDTH } from '#src/components/YearsOfTwentyYearsWidget/constants';
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
  renderCell,
  ...props
}: YearsOfTwentyYearsWidgetProps) => {
  const localeInner = locale || 'ru';
  const dateInner = dateStringToDayjs(date, localeInner) || dayjs().locale(localeInner);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs().locale(localeInner).add(1, 'year'));

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
    const clickedDate = dateStringToDayjs(clickedCell, localeInner, timezone);
    if (clickedDate) {
      setSelectedDate(clickedDate);
    }
  };

  const getYearCellDataAttributes = (value?: string, isCurrent?: boolean): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-year': isCurrent ? isCurrent : undefined,
    };
  };

  const renderYear = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, localeInner, timezone);
    if (!dateCurrent) return {};
    const cellContent = dateCurrent.year();
    const selected = dateCurrent && selectedDate && dateCurrent.isSame(selectedDate, 'year');
    const isCurrent = dateCurrent && dateCurrent.isSame(getCurrentDate(localeInner, timezone), 'year');
    const dataAttributes = getYearCellDataAttributes(dateCurrent.toISOString(), isCurrent);

    return { cellContent, selected, isCurrent, ...dataAttributes };
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(dateInner.format('D MMMM YYYY'))}</MonthYear>
      <YearsOfTwentyYearsWidget
        {...props}
        date={dayjsDateToString(dateInner)}
        locale={localeInner}
        timezone={timezone}
        onClick={handleClick}
        renderCell={renderCell || renderYear}
      />
    </Wrapper>
  );
};

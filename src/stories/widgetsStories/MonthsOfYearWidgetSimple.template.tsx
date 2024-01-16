import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Dayjs, isDayjs } from 'dayjs';
import dayjs from 'dayjs';

import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, getCurrentDate } from '#src/components/utils';
import { MONTHS_OF_YEAR_WIDGET_WIDTH } from '#src/components/MonthsOfYearWidget/constants';
import type { MonthsOfYearWidgetProps } from '#src/components/MonthsOfYearWidget';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';
import { DefaultMonthCell } from '#src/components/DefaultCell';
import type { RenderFunctionProps } from '#src/components/calendarInterfaces.ts';

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

  renderCell,
  ...props
}: MonthsOfYearWidgetProps) => {
  const localeInner = locale || 'ru';
  const dateInner = date || getCurrentDate(locale);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs().locale(localeInner).add(1, 'day'));

  const [activeDateInner, setActiveDateInner] = useState<Dayjs>();

  const handleActiveDateChange = (date?: Dayjs) => {
    setActiveDateInner(date);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (_) => {
    handleActiveDateChange(undefined);
  };

  const getMonthCellDataAttributes = (value?: string, isCurrent?: boolean, isActive?: boolean): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-month': isCurrent ? isCurrent : undefined,
      'data-is-active-month': isActive ? isActive : undefined,
    };
  };

  const dateIsDisabled = (dateCurrent?: Dayjs) => {
    if (!dateCurrent) {
      return false;
    }
    const datesArray = Array.from(Array(dateCurrent.endOf('month').date()).keys());
    return datesArray.every((v) => {
      const date = dateCurrent.date(v);
      return date && date.month() === dateInner.month() && (date.day() === 6 || date.date() < 5);
    });
  };

  const renderDefaultMonthCell = ({ date, selected, active, onCellMouseEnter, onCellClick }: RenderFunctionProps) => {
    const isCurrent = date.isSame(getCurrentDate(locale), 'month');
    const isActive = date.isSame(active, 'month');
    return (
      <DefaultMonthCell
        key={date.toString()}
        cellContent={capitalizeFirstLetter(date.format('MMMM'))}
        disabled={dateIsDisabled(date)}
        selected={isDayjs(selected) ? date.isSame(selected, 'month') : undefined}
        isCurrent={isCurrent}
        isActive={isActive}
        onMouseEnter={() => onCellMouseEnter?.(date)}
        onClick={() => onCellClick?.(date)}
        {...getMonthCellDataAttributes(date.toString(), isCurrent, isActive)}
      />
    );
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(dateInner.format('D MMMM YYYY'))}</MonthYear>
      <MonthsOfYearWidget
        {...props}
        date={dateInner}
        selected={selectedDate}
        active={activeDateInner}
        locale={localeInner}
        onCellMouseEnter={handleActiveDateChange}
        onCellClick={setSelectedDate}
        renderCell={renderCell || renderDefaultMonthCell}
        onMouseLeave={handleMouseLeave}
      />
    </Wrapper>
  );
};

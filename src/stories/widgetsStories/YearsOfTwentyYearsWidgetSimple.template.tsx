import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, getCurrentDate, getSelectedDate, yearIsDisabled } from '#src/components/utils';
import { YEARS_OF_YEAR_WIDGET_WIDTH } from '#src/components/YearsOfTwentyYearsWidget/constants';
import type { YearsOfTwentyYearsWidgetProps } from '#src/components/YearsOfTwentyYearsWidget';
import { YearsOfTwentyYearsWidget } from '#src/components/YearsOfTwentyYearsWidget';
import { DefaultYearCell } from '#src/components/DefaultCell';
import type { RenderFunctionProps } from '#src/components/calendarInterfaces.ts';

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
  ...props
}: YearsOfTwentyYearsWidgetProps) => {
  const localeInner = locale || 'ru';
  const dateInner = date || getCurrentDate(locale);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs().locale(localeInner).add(1, 'year'));

  const [activeDateInner, setActiveDateInner] = useState<Dayjs>();

  const handleActiveDateChange = (date?: Dayjs) => {
    setActiveDateInner(date);
  };

  const handleMouseEnter = (date: Dayjs, disabled: boolean) => {
    if (!disabled) {
      handleActiveDateChange(date);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (_) => {
    handleActiveDateChange(undefined);
  };

  const handleDateClick = (date: Dayjs, disabled: boolean) => {
    if (!disabled) {
      setSelectedDate(date);
    }
  };

  const getYearCellDataAttributes = (value?: string, isCurrent?: boolean, isActive?: boolean): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-year': isCurrent ? isCurrent : undefined,
      'data-is-active-year': isActive ? isActive : undefined,
    };
  };

  const renderDefaultYearCell = ({ date, selected, active }: RenderFunctionProps) => {
    const selectedDate = getSelectedDate(selected);
    const disabled = yearIsDisabled(date);
    const isCurrent = date.isSame(getCurrentDate(locale), 'year');
    const isActive = date.isSame(active, 'year');
    return (
      <DefaultYearCell
        key={date.toString()}
        cellContent={date.year()}
        disabled={disabled}
        selected={date.isSame(selectedDate, 'year')}
        isCurrent={isCurrent}
        isActive={isActive}
        onMouseEnter={() => handleMouseEnter(date, disabled)}
        onClick={() => handleDateClick(date, disabled)}
        {...getYearCellDataAttributes(date.toString(), isCurrent, isActive)}
      />
    );
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(dateInner.format('D MMMM YYYY'))}</MonthYear>
      <YearsOfTwentyYearsWidget
        {...props}
        date={dateInner}
        selected={selectedDate}
        active={activeDateInner}
        locale={localeInner}
        onMouseLeave={handleMouseLeave}
        renderCell={renderDefaultYearCell}
      />
    </Wrapper>
  );
};

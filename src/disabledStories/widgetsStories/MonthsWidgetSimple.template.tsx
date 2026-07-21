import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { textValues, vars } from '@admiral-ds/web';

import { capitalizeFirstLetter, getCurrentDate } from '#lib/utils';
import { MonthsWidget } from '#lib/MonthsWidget';
import { MemoDefaultMonthCell } from '#lib/DefaultCell';
import { ruLocale } from '#lib/calendarConstants.ts';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding: 10px;
  width: 252px;
  border: 1px ${vars.color.Neutral_Neutral90} solid;
`;
const MonthYear = styled.div`
  margin-bottom: 10px;
  ${textValues['Subtitle/Subtitle 2']}
`;

export const MonthsWidgetSimpleTemplate = ({
  date,
  locale = ruLocale,
  ...props
}: React.ComponentProps<typeof MonthsWidget>) => {
  const localeInner = locale?.localeName || 'ru';
  const dateInner = date || getCurrentDate(locale?.localeName);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs().locale(localeInner).add(1, 'day'));

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'monthCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName || 'ru');
    const disabled = targetDataAttributes['disabled'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled) {
      setSelectedDate(date);
    }
  };

  const [activeDateInner, setActiveDateInner] = useState<Dayjs>();

  const handleActiveDateChange = (date?: Dayjs) => {
    setActiveDateInner(date);
  };

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'monthCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName || 'ru');
    const disabled = targetDataAttributes['disabled'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled && !date.isSame(activeDateInner)) {
      handleActiveDateChange(date);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (_) => {
    handleActiveDateChange(undefined);
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(dateInner.format('D MMMM YYYY'))}</MonthYear>
      <MonthsWidget
        {...props}
        date={dateInner}
        selected={selectedDate}
        active={activeDateInner}
        locale={locale}
        cell={MemoDefaultMonthCell}
        onMouseOver={handleMouseOver}
        onClick={handleDateClick}
        onMouseLeave={handleMouseLeave}
      />
    </Wrapper>
  );
};

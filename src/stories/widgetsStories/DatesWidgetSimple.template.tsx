import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';

import { vars, textValues } from '@admiral-ds/web';

import { capitalizeFirstLetter, getCurrentDate } from '#lib/utils';
import { DatesWidget, type DatesWidgetProps } from '#lib/DatesWidget';
import type { CellStateProps } from '#lib/DatesWidget/interfaces';
import { baseDayNameCellMixin } from '#lib/DefaultCell/mixins.tsx';
import { MemoDefaultDateCell } from '#lib/DefaultCell';
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

export const DatesWidgetSimpleTemplate = ({ date, locale = ruLocale, ...props }: DatesWidgetProps) => {
  const localeInner = locale?.localeName || 'ru';
  const dateInner = date || getCurrentDate(localeInner);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(getCurrentDate(localeInner).add(1, 'day'));

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'dateCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(localeInner);
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
    if (targetDataAttributes['cellType'] !== 'dateCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(localeInner);
    console.log(`hiddenCell-${targetDataAttributes['hiddenCell']}`);
    const disabled = targetDataAttributes['disabled'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled && !date.isSame(activeDateInner)) {
      handleActiveDateChange(date);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (_) => {
    handleActiveDateChange(undefined);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getDayNameCellState = (_: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(dateInner.format('D MMMM YYYY'))}</MonthYear>
      <DatesWidget
        {...props}
        date={dateInner}
        selected={selectedDate}
        active={activeDateInner}
        locale={locale}
        cell={MemoDefaultDateCell}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        onClick={handleDateClick}
        dayNamesProps={{ dayNameCellState: getDayNameCellState }}
      />
    </Wrapper>
  );
};

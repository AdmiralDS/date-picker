import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { vars } from '@admiral-ds/web';
import { getCurrentDate } from '#lib/utils';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH, ruLocale } from '#lib/calendarConstants';
import type { RangeYearsNavigationPanelWidgetProps } from '#lib/RangeYearsNavigationPanelWidget';
import { RangeYearsNavigationPanelWidget } from '#lib/RangeYearsNavigationPanelWidget';
import { YearsWidget } from '#lib/YearsWidget';
import { MemoDefaultYearCell } from '#lib/DefaultCell';

const CalendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: ${CALENDAR_WIDTH}px;
  height: ${CALENDAR_HEIGHT}px;
  box-shadow: ${vars.boxShadow.Shadow_08};
`;

export const RangeYearsNavigationPanelWidgetSimpleTemplate = ({
  locale = ruLocale,
  date,
  yearsOnScreen = 20,
  ...props
}: RangeYearsNavigationPanelWidgetProps) => {
  const localeInner = locale?.localeName || 'ru';
  const [dateState, setDateState] = useState(date || getCurrentDate(locale?.localeName));
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(getCurrentDate(localeInner).add(1, 'day'));

  const [activeDateInner, setActiveDateInner] = useState<Dayjs>();

  const handleActiveDateChange = (date?: Dayjs, disabled?: boolean) => {
    if (!disabled) {
      setActiveDateInner(date);
    }
  };

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'yearCell') {
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

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'yearCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName || 'ru');
    const disabled = targetDataAttributes['disabled'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled) {
      setSelectedDate(date);
    }
  };

  const handleRangeYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        setDateState(dateState.subtract(yearsOnScreen, 'year'));
        break;
      case 'right':
        setDateState(dateState.add(yearsOnScreen, 'year'));
        break;
    }
  };

  return (
    <CalendarWrapper>
      <RangeYearsNavigationPanelWidget
        date={dateState}
        locale={locale}
        onClick={handleRangeYearsNavigationPanelClick}
        yearsOnScreen={yearsOnScreen}
      />
      <YearsWidget
        {...props}
        date={dateState}
        selected={selectedDate}
        active={activeDateInner}
        locale={locale}
        cell={MemoDefaultYearCell}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        onClick={handleDateClick}
        yearsOnScreen={yearsOnScreen}
      />
    </CalendarWrapper>
  );
};

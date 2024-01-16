import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import { getCurrentDate, getSelectedDate, yearIsDisabled } from '#src/components/utils';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants';
import type { TwentyYearsNavigationPanelWidgetProps } from '#src/components/TwentyYearsNavigationPanelWidget';
import { TwentyYearsNavigationPanelWidget } from '#src/components/TwentyYearsNavigationPanelWidget';
import { YearsOfTwentyYearsWidget } from '#src/components/YearsOfTwentyYearsWidget';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import { DefaultYearCell } from '#src/components/DefaultCell';
import type { RenderFunctionProps } from '#src/components/calendarInterfaces.ts';

const CalendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: ${CALENDAR_WIDTH}px;
  height: ${CALENDAR_HEIGHT}px;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

export const TwentyYearsNavigationPanelWidgetSimpleTemplate = ({
  locale = 'ru',
  date,
  ...props
}: TwentyYearsNavigationPanelWidgetProps) => {
  const localeInner = locale || 'ru';
  const [dateState, setDateState] = useState(date || getCurrentDate(locale));
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(getCurrentDate(localeInner).add(1, 'day'));

  const [activeDateInner, setActiveDateInner] = useState<Dayjs>();

  const handleActiveDateChange = (date?: Dayjs, disabled?: boolean) => {
    if (!disabled) {
      setActiveDateInner(date);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (_) => {
    handleActiveDateChange(undefined);
  };

  const handleDateClick = (date: Dayjs, disabled?: boolean) => {
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

  const renderDefaultYearCell = ({ date, selected, active, onCellMouseEnter, onCellClick }: RenderFunctionProps) => {
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
        onMouseEnter={() => onCellMouseEnter?.(date, disabled)}
        onClick={() => onCellClick?.(date, disabled)}
        {...getYearCellDataAttributes(date.toString(), isCurrent, isActive)}
      />
    );
  };

  const handleTwentyYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        setDateState(dateState.subtract(YEARS_ON_SCREEN, 'year'));
        break;
      case 'right':
        setDateState(dateState.add(YEARS_ON_SCREEN, 'year'));
        break;
    }
  };

  return (
    <CalendarWrapper>
      <TwentyYearsNavigationPanelWidget
        date={dateState}
        locale={localeInner}
        onClick={handleTwentyYearsNavigationPanelClick}
      />
      <YearsOfTwentyYearsWidget
        {...props}
        date={dateState}
        selected={selectedDate}
        active={activeDateInner}
        locale={localeInner}
        onMouseLeave={handleMouseLeave}
        onCellMouseEnter={handleActiveDateChange}
        onCellClick={handleDateClick}
        renderCell={renderDefaultYearCell}
      />
    </CalendarWrapper>
  );
};

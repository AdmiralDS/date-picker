import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import { capitalizeFirstLetter, getCurrentDate, getSelectedDate, monthIsDisabled } from '#src/components/utils';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';
import type { YearNavigationPanelWidgetProps } from '#src/components/YearNavigationPanelWidget';
import { YearNavigationPanelWidget } from '#src/components/YearNavigationPanelWidget';
import { DefaultMonthCell } from '#src/components/DefaultCell';
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

export const YearNavigationPanelWidgetSimpleTemplate = ({
  locale = 'ru',
  date,
  ...props
}: YearNavigationPanelWidgetProps) => {
  const localeInner = locale || 'ru';
  const [dateState, setDateState] = useState(date || getCurrentDate(locale));
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(getCurrentDate(localeInner).add(1, 'day'));

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

  const getMonthCellDataAttributes = (value?: string, isCurrent?: boolean, isActive?: boolean): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-month': isCurrent ? isCurrent : undefined,
      'data-is-active-month': isActive ? isActive : undefined,
    };
  };

  const renderDefaultMonthCell = ({ date, selected, active }: RenderFunctionProps) => {
    const selectedDate = getSelectedDate(selected);
    const disabled = monthIsDisabled(date);
    const isCurrent = date.isSame(getCurrentDate(locale), 'month');
    const isActive = date.isSame(active, 'month');
    return (
      <DefaultMonthCell
        key={date.toString()}
        cellContent={capitalizeFirstLetter(date.locale(locale).format('MMMM'))}
        disabled={disabled}
        selected={date.isSame(selectedDate, 'month')}
        isCurrent={isCurrent}
        isActive={isActive}
        onMouseEnter={() => handleMouseEnter(date, disabled)}
        onClick={() => handleDateClick(date, disabled)}
        {...getMonthCellDataAttributes(date.toString(), isCurrent, isActive)}
      />
    );
  };

  const handleYearNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        setDateState(dateState.subtract(1, 'year'));
        break;
      case 'right':
        setDateState(dateState.add(1, 'year'));
        break;
    }
  };

  return (
    <CalendarWrapper>
      <YearNavigationPanelWidget date={dateState} locale={localeInner} onClick={handleYearNavigationPanelClick} />
      <MonthsOfYearWidget
        {...props}
        date={dateState}
        selected={selectedDate}
        active={activeDateInner}
        locale={localeInner}
        onMouseLeave={handleMouseLeave}
        renderCell={renderDefaultMonthCell}
      />
    </CalendarWrapper>
  );
};

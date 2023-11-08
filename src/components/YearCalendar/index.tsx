import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import {
  dateStringToDayjs,
  dayjsDateToString,
  getCurrentDate,
  getCurrentTimeZone,
  getDayjsDate,
} from '#src/components/utils';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants';
import { TwentyYearsNavigationPanelWidget } from '#src/components/TwentyYearsNavigationPanelWidget';
import { YearsOfTwentyYearsWidget } from '#src/components/YearsOfTwentyYearsWidget';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import { DefaultYearCell } from '#src/components/YearsOfTwentyYearsWidget/Years.tsx';
import type { CalendarProps } from '#src/components/calendarInterfaces.ts';

const YearCalendarWrapper = styled.div`
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

export interface YearCalendarProps extends CalendarProps {
  /** Выбранная дата в формате ISO */
  selectedDate?: string;
  /** Выбранная дата по умолчанию в формате ISO */
  defaultSelectedDate?: string;
  onSelectedDateChange?: (dateString: string) => void;
}

export const YearCalendar = ({
  selectedDate,
  defaultSelectedDate,
  onSelectedDateChange,
  date,
  defaultDate,
  onDateChange,
  onClick,
  locale = 'ru',
  timezone = getCurrentTimeZone(),
  ...props
}: YearCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const [dateState, setDateState] = useState(getDayjsDate(locale, timezone, defaultDate));
  const dateInner = (date && getDayjsDate(locale, timezone, date)) || dateState;

  const handleDateChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    if (dayjsDate) {
      setDateState(dayjsDate);
      onDateChange?.(dateString);
    }
  };
  //</editor-fold>

  //<editor-fold desc="Hovered date">
  const [activeDateInner, setActiveDateInner] = useState<Dayjs>();
  const handleActiveDateChange = (dateString?: string) => {
    const dayjsActiveDate = dateStringToDayjs(dateString, locale, timezone);
    //console.log(`set active ${dateString}`);
    setActiveDateInner(dayjsActiveDate);
  };

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'yearCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale, timezone);
      if (hoveredDate) {
        if (activeDateInner) {
          handleActiveDateChange(undefined);
          return;
        }
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
    }
  };
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'yearCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale, timezone);
      if (hoveredDate && (!activeDateInner || !hoveredDate.isSame(activeDateInner, 'date'))) {
        if (activeDateInner) {
          handleActiveDateChange(undefined);
          return;
        }
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
      return;
    }
    //if (target.dataset.containerType !== 'yearsWrapper') {
    if (activeDateInner) {
      handleActiveDateChange(undefined);
      return;
    }
    //}
  };
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    handleActiveDateChange(undefined);
  };
  //</editor-fold>

  //<editor-fold desc="Selected date">
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(
    dateStringToDayjs(defaultSelectedDate, locale, timezone),
  );
  const selectedDateInner = (selectedDate && dateStringToDayjs(selectedDate, locale, timezone)) || selectedDateState;

  const handleSelectedDateChange = (dateString: string) => {
    const dayjsSelectedDate = dateStringToDayjs(dateString, locale, timezone);
    setSelectedDateState(dayjsSelectedDate);
    onSelectedDateChange?.(dateString);
  };
  //</editor-fold>

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    const clickedDate = dateStringToDayjs(clickedCell, locale, timezone);
    if (clickedDate) {
      handleSelectedDateChange(dayjsDateToString(clickedDate));
    }
    onClick?.(e);
  };

  const getYearCellDataAttributes = (
    value?: string,
    isCurrentYear?: boolean,
    isActive?: boolean,
  ): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-year': isCurrentYear ? isCurrentYear : undefined,
      'data-is-active-year': isActive ? isActive : undefined,
    };
  };

  const renderYear = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale, timezone);
    if (!dateCurrent) return <></>;
    const cellContent = dateCurrent.year();
    const selected = dateCurrent && selectedDateInner && dateCurrent.isSame(selectedDateInner, 'year');
    const isCurrentYear = dateCurrent && dateCurrent.isSame(getCurrentDate(locale, timezone), 'year');
    const isActive = activeDateInner && dateCurrent.isSame(activeDateInner, 'year');
    const dataAttributes = getYearCellDataAttributes(dateCurrent.toISOString(), isCurrentYear, isActive);
    const cellProps = { cellContent, selected, isCurrentYear, isActive, ...dataAttributes };

    return <DefaultYearCell key={dayjsDateToString(dateCurrent)} {...cellProps} />;
  };

  const handleTwentyYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.direction;
    switch (targetType) {
      case 'left':
        handleDateChange(dayjsDateToString(dateInner.subtract(YEARS_ON_SCREEN, 'year')));
        break;
      case 'right':
        handleDateChange(dayjsDateToString(dateInner.add(YEARS_ON_SCREEN, 'year')));
        break;
    }
  };

  return (
    <YearCalendarWrapper>
      <TwentyYearsNavigationPanelWidget
        date={dayjsDateToString(dateInner)}
        locale={locale}
        timezone={timezone}
        onClick={handleTwentyYearsNavigationPanelClick}
      />
      <YearsOfTwentyYearsWidget
        {...props}
        date={dayjsDateToString(dateInner)}
        locale={locale}
        timezone={timezone}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        renderYearCell={renderYear}
      />
    </YearCalendarWrapper>
  );
};

import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

import type { CalendarViewMode, SinglePickerCalendarProps } from '#src/components/calendarInterfaces.ts';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants.ts';
import { MonthNavigationPanelWidget } from '#src/components/MonthNavigationPanelWidget';
import {
  dateStringToDayjs,
  dayjsDateToString,
  dayjsStateToString,
  getCurrentTimeZone,
  getDayjsDate,
} from '#src/components/utils.ts';
import { DateCalendar } from '#src/components/DateCalendar';
import { MonthCalendar } from '#src/components/MonthCalendar';
import { YearCalendar } from '#src/components/YearCalendar';

export interface CalendarProps extends SinglePickerCalendarProps {
  /** Экран выбора дат, месяцев, лет */
  viewModeValue?: CalendarViewMode;
  /** Режим отображения по умолчанию */
  defaultViewModeValue?: CalendarViewMode;
  /** Коллбэк на переключение экрана */
  onViewModeChange?: (mode: CalendarViewMode) => void;
  onDateChange?: (dateString: string) => void;
  onMonthChange?: (dateString: string) => void;
  onYearChange?: (dateString: string) => void;
}

const CalendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: ${CALENDAR_WIDTH}px;
  height: ${CALENDAR_HEIGHT}px;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(p) => p.theme.shadow['Shadow 08']}
`;

const CalendarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  & > div {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StyledDateCalendar = styled(DateCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

const StyledMonthCalendar = styled(MonthCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

const StyledYearCalendar = styled(YearCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

export const Calendar = ({
  viewModeValue,
  defaultViewModeValue,
  onViewModeChange,
  dateValue,
  defaultDateValue,
  onDateValueChange,
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  onDateChange,
  onMonthChange,
  onYearChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  ...props
}: CalendarProps) => {
  //<editor-fold desc="Calendar view mode">
  const [viewModeState, setViewModeState] = useState<CalendarViewMode>(defaultViewModeValue || 'dates');
  const viewModeInner = viewModeValue || viewModeState;

  const handleViewModeChange = (mode: CalendarViewMode) => {
    setViewModeState(mode);
    onViewModeChange?.(mode);
  };
  //</editor-fold>

  //<editor-fold desc="Date shown on calendar">
  const [dateState, setDateState] = useState(getDayjsDate(locale, timezone, defaultDateValue));
  const dateInner = (dateValue && getDayjsDate(locale, timezone, dateValue)) || dateState;

  const handleDateChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    if (dayjsDate) {
      setDateState(dayjsDate);
      onDateValueChange?.(dateString);
    }
  };
  //</editor-fold>

  //<editor-fold desc="Selected date">
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(
    defaultSelectedDateValue ? dateStringToDayjs(defaultSelectedDateValue, locale, timezone) : undefined,
  );
  const selectedDateInner =
    (selectedDateValue && dateStringToDayjs(selectedDateValue, locale, timezone)) || selectedDateState;

  const handleSelectedDateChange = (dateString: string) => {
    const dayjsSelectedDate = dateStringToDayjs(dateString, locale, timezone);
    setSelectedDateState(dayjsSelectedDate);
    onSelectedDateValueChange?.(dateString);
  };
  //</editor-fold>

  const handleDateClick = (dateString: string) => {
    handleSelectedDateChange(dateString);
    onDateChange?.(dateString);
  };
  const handleMonthClick = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    const newDate = dayjsDate ? dayjsDateToString(dateInner.month(dayjsDate.month())) : dateString;
    handleDateChange(newDate);
    handleViewModeChange('dates');
    onMonthChange?.(newDate);
  };
  const handleYearClick = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    const newDate = dayjsDate ? dayjsDateToString(dateInner.year(dayjsDate.year())) : dateString;
    handleDateChange(newDate);
    handleViewModeChange('dates');
    onYearChange?.(newDate);
  };

  const handleMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateChange(dayjsDateToString(dateInner.subtract(1, 'month')));
        break;
      case 'right':
        handleDateChange(dayjsDateToString(dateInner.add(1, 'month')));
        break;
      case 'month':
        handleViewModeChange(viewModeInner === 'months' ? 'dates' : 'months');
        break;
      case 'year':
        handleViewModeChange(viewModeInner === 'years' ? 'dates' : 'years');
        break;
    }
  };

  return (
    <CalendarWrapper>
      <MonthNavigationPanelWidget
        date={dayjsDateToString(dateInner)}
        viewMode={viewModeInner}
        locale={locale}
        timezone={timezone}
        onClick={handleMonthNavigationPanelClick}
      />
      <CalendarContainer>
        <StyledDateCalendar
          {...props}
          dateValue={dayjsDateToString(dateInner)}
          selectedDateValue={dayjsStateToString(selectedDateInner)}
          onSelectedDateValueChange={handleDateClick}
          locale={locale}
          $isVisible={viewModeInner === 'dates'}
        />
        <StyledMonthCalendar
          {...props}
          dateValue={dayjsDateToString(dateInner)}
          selectedDateValue={dayjsStateToString(selectedDateInner)}
          onSelectedDateValueChange={handleMonthClick}
          locale={locale}
          $isVisible={viewModeInner === 'months'}
        />
        <StyledYearCalendar
          {...props}
          dateValue={dayjsDateToString(dateInner)}
          selectedDateValue={dayjsStateToString(selectedDateInner)}
          onSelectedDateValueChange={handleYearClick}
          locale={locale}
          $isVisible={viewModeInner === 'years'}
        />
      </CalendarContainer>
    </CalendarWrapper>
  );
};

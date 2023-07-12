import { forwardRef, useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import styled, { useTheme } from 'styled-components';

import { LIGHT_THEME, typography } from '@admiral-ds/react-ui';

import { DayCell } from './CalendarContent/DayCell';
import { Panel } from './Panel/Panel';
import { YearCell } from './CalendarContent/YearCell';
import type { CalendarViewMode } from './constants';
import { MonthCell } from './CalendarContent/MonthCell';
import { DEFAULT_YEAR_COUNT } from './constants';
import { YearsCalendarView } from './CalendarContent/YearsCalendarView';
import { MonthsCalendarView } from './CalendarContent/MonthsCalendarView';
import { DateCalendarView } from './CalendarContent/DateCalendarView';
import type { CalendarWidgetProps } from './interfaces';

const CALENDAR_WIDTH = 284;
const YEARS_VIEW_PADDING = '20px 12px 16px';
const MONTHS_VIEW_PADDING = '20px 12px 4px';
const DAYS_VIEW_PADDING = '20px 12px 12px';

export const CalendarWidgetWrapper = styled.div<{
  viewMode: CalendarViewMode;
}>`
  position: relative;
  box-sizing: border-box;
  text-align: center;
  border: 0 none;
  z-index: 0; /* для отрисовки белого кружка с синей рамочкой при ховере над датой в выбранном диапазоне */

  padding: ${(p) =>
    p.viewMode === 'YEARS' ? YEARS_VIEW_PADDING : p.viewMode === 'MONTHS' ? MONTHS_VIEW_PADDING : DAYS_VIEW_PADDING};

  flex: 0 0 auto;
  width: ${CALENDAR_WIDTH}px;
  background: ${({ theme }) => theme.color['Special/Elevated BG']};
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

export const CalendarWidget = forwardRef<HTMLDivElement, CalendarWidgetProps>(
  (
    {
      viewMode = {},
      pickerType = 'DATE_MONTH_YEAR',
      rangePicker = false,
      activeDate,
      selected,
      startDate,
      endDate,
      minDate,
      maxDate,
      viewDate: viewDateString,
      renderCell = {},
      validator,
      disabledDate,
      isHiddenDate,
      highlightSpecialDay,
      onSelectCell = {},
      onViewDateChange,
      onActiveDateChange,
      onDateMouseEnter,
      onDateMouseLeave,
      locale = {},
    },
    ref,
  ) => {
    const viewDate = dayjs(viewDateString);
    const getInitialViewDate = (): Dayjs => {
      const current = dayjs();
      if (viewDate) {
        return viewDate.locale(currentLocaleName || 'ru');
      }
      if (selected) {
        return selected.locale(currentLocaleName || 'ru');
      }
      if (minDate && current.isBefore(minDate)) {
        return minDate;
      }
      if (maxDate && current.isAfter(maxDate)) {
        return maxDate;
      }
      return current.locale(currentLocaleName || 'ru');
    };
    const { viewModeName = 'DATES', defaultViewModeName, onViewModeNameChange } = viewMode;
    const { renderDateCell, renderMonthCell, renderYearCell } = renderCell;
    const { onSelectDate, onSelectMonth, onSelectYear } = onSelectCell;
    const { localeName, localeText } = locale;

    const theme = useTheme() || LIGHT_THEME;
    const currentLocaleName = localeName || theme.currentLocale || 'ru';

    const [innerViewDate, setInnerViewDate] = useState<Dayjs>(getInitialViewDate());
    const finalViewDate = viewDate ?? innerViewDate;

    const clearActiveDate = () => onActiveDateChange(undefined);

    useEffect(() => {
      if (onViewDateChange) {
        onViewDateChange(innerViewDate);
      }
    }, [innerViewDate]);

    useEffect(() => {
      if (currentLocaleName) {
        setInnerViewDate(finalViewDate.locale(currentLocaleName));
      }
    }, [currentLocaleName]);

    const handleAreaMouseLeave = () => {
      clearActiveDate();
      onDateMouseLeave();
    };

    const defaultIsHidden = (date: Dayjs) => {
      return !date.isSame(finalViewDate, 'month');
    };

    const changeYear = (year: number) => setInnerViewDate(finalViewDate.year(year));
    const changeMonth = (month: number) => setInnerViewDate(finalViewDate.month(month));

    const handleYearClick = (date: Dayjs) => {
      changeYear(date.year());
      /*!currentActiveViewImportant && setYearsView(false);*/
      switch (pickerType) {
        case 'YEAR':
          setInnerViewDate(date);
          break;
        case 'MONTH_YEAR':
          clearActiveDate();
          onViewModeNameChange?.('MONTHS');
          break;
        default:
        case 'DATE_MONTH_YEAR':
          clearActiveDate();
          onViewModeNameChange?.('DATES');
          break;
      }
      onSelectYear && onSelectYear(date);
    };

    const handleMonthClick = (date: Dayjs) => {
      changeMonth(date.month());
      /*!currentActiveViewImportant && setMonthsView(false);*/
      switch (pickerType) {
        case 'YEAR':
          break;
        case 'MONTH_YEAR':
          setInnerViewDate(date);
          onViewModeNameChange?.('MONTHS');
          break;
        default:
        case 'DATE_MONTH_YEAR':
          clearActiveDate();
          onViewModeNameChange?.('DATES');
          break;
      }
      onSelectMonth && onSelectMonth(date);
    };

    const defaultRenderDateCell = (date: Dayjs) => {
      return (
        <DayCell
          key={date.valueOf()}
          date={date}
          startDate={rangePicker ? startDate : undefined}
          endDate={rangePicker ? endDate : undefined}
          selected={!rangePicker ? selected : undefined}
          activeDate={activeDate}
          disabled={disabledDate?.(date)}
          onSelectDate={onSelectDate}
          isHidden={isHiddenDate?.(date) || defaultIsHidden(date)}
          highlightSpecialDate={highlightSpecialDay}
          onMouseEnter={onDateMouseEnter}
        />
      );
    };
    const defaultRenderMonthCell = (date: Dayjs) => {
      return (
        <MonthCell
          key={date.valueOf()}
          date={date}
          activeDate={activeDate}
          startDate={rangePicker && pickerType === 'MONTH_YEAR' ? startDate : undefined}
          endDate={rangePicker && pickerType === 'MONTH_YEAR' ? endDate : undefined}
          selected={!rangePicker ? selected : undefined}
          onSelectMonth={handleMonthClick}
          disabled={!!validator?.invalidMonth(date.month(), date.year())}
          onMouseEnter={onDateMouseEnter}
        />
      );
    };
    const defaultRenderYearCell = (date: Dayjs) => {
      return (
        <YearCell
          key={date.valueOf()}
          date={date}
          activeDate={activeDate}
          startDate={rangePicker && pickerType === 'YEAR' ? startDate : undefined}
          endDate={rangePicker && pickerType === 'YEAR' ? endDate : undefined}
          selected={!rangePicker ? selected : undefined}
          onSelectYear={handleYearClick}
          disabled={!!validator?.invalidYear(date.year())}
          onMouseEnter={onDateMouseEnter}
        />
      );
    };

    const increaseMonth = () => setInnerViewDate(finalViewDate.add(1, 'month'));
    const decreaseMonth = () => setInnerViewDate(finalViewDate.subtract(1, 'month'));

    const increaseYear = () =>
      setInnerViewDate(finalViewDate.add(viewModeName === 'YEARS' ? DEFAULT_YEAR_COUNT : 1, 'year'));
    const decreaseYear = () =>
      setInnerViewDate(finalViewDate.subtract(viewModeName === 'YEARS' ? DEFAULT_YEAR_COUNT : 1, 'year'));

    const handleYearsViewShow = () => {
      onViewModeNameChange?.('YEARS');
      //onViewYearSelect && onViewYearSelect();
    };
    const handleYearsViewHide = () => {
      if (pickerType === 'DATE_MONTH_YEAR') {
        onViewModeNameChange?.('DATES');
        clearActiveDate();
      } else if (pickerType === 'MONTH_YEAR') {
        onViewModeNameChange?.('MONTHS');
        clearActiveDate();
      }
      //onViewYearSelect && onViewYearSelect();
    };

    const handleMonthsViewShow = () => {
      onViewModeNameChange?.('MONTHS');
      //onViewMonthSelect && onViewMonthSelect();
    };
    const handleMonthsViewHide = () => {
      if (pickerType === 'DATE_MONTH_YEAR') {
        onViewModeNameChange?.('DATES');
        clearActiveDate();
      }
      //onViewMonthSelect && onViewMonthSelect();
    };

    const renderPanel = () => {
      return (
        <Panel
          viewMode={viewModeName}
          pickerType={pickerType}
          date={finalViewDate}
          locale={locale}
          onNext={viewModeName === 'DATES' ? increaseMonth : increaseYear}
          onPrevious={viewModeName === 'DATES' ? decreaseMonth : decreaseYear}
          onMonthsViewShow={handleMonthsViewShow}
          onMonthsViewHide={handleMonthsViewHide}
          onYearsViewShow={handleYearsViewShow}
          onYearsViewHide={handleYearsViewHide}
        />
      );
    };
    const renderContent = () => {
      switch (viewModeName) {
        case 'YEARS':
          return (
            <YearsCalendarView
              date={finalViewDate}
              renderCell={renderYearCell || defaultRenderYearCell}
              onMouseLeave={handleAreaMouseLeave}
            />
          );
        case 'MONTHS':
          return (
            <MonthsCalendarView
              date={finalViewDate}
              renderCell={renderMonthCell || defaultRenderMonthCell}
              onMouseLeave={handleAreaMouseLeave}
            />
          );
        case 'DATES':
        default:
          return (
            <DateCalendarView
              date={finalViewDate}
              renderCell={renderDateCell || defaultRenderDateCell}
              onMouseLeave={handleAreaMouseLeave}
            />
          );
      }
    };

    return currentLocaleName ? (
      <CalendarWidgetWrapper ref={ref} viewMode={viewModeName}>
        {renderPanel()}
        {renderContent()}
      </CalendarWidgetWrapper>
    ) : null;
  },
);

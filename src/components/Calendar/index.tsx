import { forwardRef, useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import styled from 'styled-components';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';
import { DEFAULT_YEAR_COUNT } from './constants';
import type { CalendarViewMode, PickerTypeMode } from './constants';
import type { CalendarWidgetProps } from './interfaces';
import { CalendarWidget } from './CalendarWidget';
import { yearsRange } from './utils';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export * from './constants';
export * from './CalendarContent/DayCell';

const CalendarWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  overflow: hidden;
  width: max-content;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(props) => props.theme.shadow['Shadow 08']}
`;

export interface CalendarProps
  extends Omit<CalendarWidgetProps, 'onActiveDateChange' | 'onDateMouseEnter' | 'onDateMouseLeave'> {
  doubleView?: boolean;
}

const SingleCalendar = forwardRef<HTMLDivElement, CalendarWidgetProps>(({ ...props }, ref) => {
  return (
    <CalendarWrapper ref={ref}>
      <CalendarWidget {...props} />
    </CalendarWrapper>
  );
});

const DoubleCalendar = forwardRef<HTMLDivElement, CalendarWidgetProps>(
  (
    {
      rangePicker = false,
      pickerType = 'DATE_MONTH_YEAR',
      viewMode,
      viewDate,
      activeDate,
      selected,
      minDate,
      maxDate,
      onActiveDateChange,
      onDateMouseEnter,
      onDateMouseLeave,
      ...props
    },
    ref,
  ) => {
    const calendarWidgetProps = {
      viewMode,
      pickerType,
      rangePicker,
      selected,
      minDate,
      maxDate,
      ...props,
    } as Record<string, any>;

    const getInitialViewDateLeft = (): Dayjs => {
      const current = dayjs();
      if (selected) {
        return selected;
      }
      if (minDate && current.isBefore(minDate)) {
        return minDate;
      }
      if (maxDate && current.isAfter(maxDate)) {
        return maxDate;
      }
      return current;
    };
    const compareYearsRange = (dateLeft: Dayjs, dateRight: Dayjs) => {
      const rangeLeft = yearsRange(dateLeft, DEFAULT_YEAR_COUNT);
      const rangeRight = yearsRange(dateRight, DEFAULT_YEAR_COUNT);
      return rangeLeft.start - rangeRight.start;
    };
    const dateLeftIsSameOrAfter = (dateLeft: Dayjs, dateRight: Dayjs) => {
      switch (pickerType) {
        case 'YEAR':
          return compareYearsRange(dateLeft, dateRight) >= 0;
        case 'MONTH_YEAR':
          return dateLeft.isSameOrAfter(dateRight, 'year');
        case 'DATE_MONTH_YEAR':
        default:
          return dateLeft.isSameOrAfter(dateRight, 'date');
      }
    };
    const dateRightIsSameOrBefore = (dateLeft: Dayjs, dateRight: Dayjs) => {
      switch (pickerType) {
        case 'YEAR':
          return compareYearsRange(dateLeft, dateRight) <= 0;
        case 'MONTH_YEAR':
          return dateRight.isSameOrBefore(dateLeft, 'year');
        case 'DATE_MONTH_YEAR':
        default:
          return dateRight.isSameOrBefore(dateLeft, 'date');
      }
    };
    const decreaseDate = (dateRight: Dayjs) => {
      switch (pickerType) {
        case 'YEAR':
          return dateRight.subtract(DEFAULT_YEAR_COUNT, 'year');
        case 'MONTH_YEAR':
          return dateRight.subtract(1, 'year');
        case 'DATE_MONTH_YEAR':
        default:
          return dateRight.subtract(1, 'month');
      }
    };
    const increaseDate = (dateLeft: Dayjs) => {
      switch (pickerType) {
        case 'YEAR':
          return dateLeft.add(DEFAULT_YEAR_COUNT, 'year');
        case 'MONTH_YEAR':
          return dateLeft.add(1, 'year');
        case 'DATE_MONTH_YEAR':
        default:
          return dateLeft.add(1, 'month');
      }
    };
    const getInitialViewDateRight = (): Dayjs => {
      return increaseDate(getInitialViewDateLeft());
    };

    const [viewDateLeft, setViewDateLeft] = useState<Dayjs>(getInitialViewDateLeft());
    const [viewDateRight, setViewDateRight] = useState<Dayjs>(getInitialViewDateRight());

    const handleViewDateLeftChange = (date: string) => setViewDateLeft(dayjs(date));
    const handleViewDateRightChange = (date: string) => setViewDateRight(dayjs(date));

    useEffect(() => {
      if (dateRightIsSameOrBefore(viewDateLeft, viewDateRight)) {
        setViewDateRight(increaseDate(viewDateLeft));
      }
    }, [viewDateLeft]);

    useEffect(() => {
      if (dateLeftIsSameOrAfter(viewDateLeft, viewDateRight)) {
        setViewDateLeft(decreaseDate(viewDateRight));
      }
    }, [viewDateRight]);

    const getInitialViewMode = (pickerType: PickerTypeMode): CalendarViewMode => {
      switch (pickerType) {
        case 'YEAR':
          return 'YEARS';
        case 'MONTH_YEAR':
          return 'MONTHS';
        case 'DATE_MONTH_YEAR':
        default:
          return 'DATES';
      }
    };
    const [viewModeLeft, setViewModeLeft] = useState<CalendarViewMode>(getInitialViewMode(pickerType));
    const [viewModeRight, setViewModeRight] = useState<CalendarViewMode>(getInitialViewMode(pickerType));

    const handleViewModeLeftChange = (viewMode: CalendarViewMode) => setViewModeLeft(viewMode);
    const handleViewModeRightChange = (viewMode: CalendarViewMode) => setViewModeRight(viewMode);
    useEffect(() => {
      switch (pickerType) {
        case 'DATE_MONTH_YEAR':
          setViewModeLeft('DATES');
          setViewModeRight('DATES');
          break;
        case 'MONTH_YEAR':
          setViewModeLeft('MONTHS');
          setViewModeRight('MONTHS');
          break;
        case 'YEAR':
          setViewModeLeft('YEARS');
          setViewModeRight('YEARS');
          break;
      }
      //resetDateStates1();
    }, [pickerType]);

    return (
      <CalendarWrapper ref={ref}>
        <CalendarWidget
          {...calendarWidgetProps}
          viewDate={viewDateLeft.format('YYYY-MM-DDTHH:mm:ss')}
          activeDate={activeDate}
          onViewDateChange={handleViewDateLeftChange}
          viewMode={{ viewModeName: viewModeLeft, onViewModeNameChange: handleViewModeLeftChange }}
          onDateMouseEnter={onDateMouseEnter}
          onDateMouseLeave={onDateMouseLeave}
          onActiveDateChange={onActiveDateChange}
        />
        <CalendarWidget
          {...calendarWidgetProps}
          viewDate={viewDateRight.format('YYYY-MM-DDTHH:mm:ss')}
          activeDate={activeDate}
          onViewDateChange={handleViewDateRightChange}
          viewMode={{ viewModeName: viewModeRight, onViewModeNameChange: handleViewModeRightChange }}
          onDateMouseEnter={onDateMouseEnter}
          onDateMouseLeave={onDateMouseLeave}
          onActiveDateChange={onActiveDateChange}
        />
      </CalendarWrapper>
    );
  },
);

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  ({ doubleView = false, rangePicker = false, ...props }, ref) => {
    // активная дата, на которой сейчас ховер
    const [activeDate, setActiveDate] = useState<Dayjs | undefined>(undefined);
    const handleActiveDateChange = (date: Dayjs | undefined) => setActiveDate(date);
    const clearActiveDate = () => setActiveDate(undefined);

    const handleDateMouseEnter = (date: Dayjs, _: any) => {
      setActiveDate(date);
    };
    const handleAreaMouseLeave = () => {
      clearActiveDate();
    };
    return doubleView && rangePicker ? (
      <DoubleCalendar
        {...props}
        activeDate={activeDate}
        onActiveDateChange={handleActiveDateChange}
        onDateMouseEnter={handleDateMouseEnter}
        onDateMouseLeave={handleAreaMouseLeave}
        rangePicker={rangePicker}
        ref={ref}
      />
    ) : (
      <SingleCalendar
        {...props}
        activeDate={activeDate}
        onActiveDateChange={handleActiveDateChange}
        onDateMouseEnter={handleDateMouseEnter}
        onDateMouseLeave={handleAreaMouseLeave}
        rangePicker={rangePicker}
        ref={ref}
      />
    );
  },
);

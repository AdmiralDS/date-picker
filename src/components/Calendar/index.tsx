import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
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
import { dateStringToDayjs, dayjsDateToString, yearsRange } from './utils';

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
      selected: selectedDateString,
      minDate,
      maxDate,
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
      selectedDateString,
      minDate,
      maxDate,
      ...props,
    } as Record<string, any>;
    const selected = dateStringToDayjs(selectedDateString, props.locale?.localeName);

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

    const [viewDateLeft, setViewDateLeft] = useState<Dayjs | undefined>(getInitialViewDateLeft());
    const [viewDateRight, setViewDateRight] = useState<Dayjs | undefined>(getInitialViewDateRight());

    const handleViewDateLeftChange = useCallback(
      (date: string) => setViewDateLeft(dateStringToDayjs(date, props.locale?.localeName)),
      [],
    );
    const handleViewDateRightChange = useCallback(
      (date: string) => setViewDateRight(dateStringToDayjs(date, props.locale?.localeName)),
      [],
    );

    useEffect(() => {
      if (viewDateLeft && viewDateRight && dateRightIsSameOrBefore(viewDateLeft, viewDateRight)) {
        setViewDateRight(increaseDate(viewDateLeft));
      }
    }, [viewDateLeft]);

    useEffect(() => {
      if (viewDateLeft && viewDateRight && dateLeftIsSameOrAfter(viewDateLeft, viewDateRight)) {
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

    const handleViewModeLeftChange = useCallback((viewMode: CalendarViewMode) => setViewModeLeft(viewMode), []);
    const handleViewModeRightChange = useCallback((viewMode: CalendarViewMode) => setViewModeRight(viewMode), []);

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

    const viewDateLeftMemo = useMemo(
      () => ({
        viewDateValue: viewDateLeft && dayjsDateToString(viewDateLeft),
        onViewDateChange: handleViewDateLeftChange,
      }),
      [viewDateLeft, handleViewDateLeftChange],
    );
    const viewDateRightMemo = useMemo(
      () => ({
        viewDateValue: viewDateRight && dayjsDateToString(viewDateRight),
        onViewDateChange: handleViewDateRightChange,
      }),
      [viewDateRight, handleViewDateRightChange],
    );

    const viewModeLeftMemo = useMemo(
      () => ({ viewModeName: viewModeLeft, onViewModeNameChange: handleViewModeLeftChange }),
      [viewModeLeft, handleViewModeLeftChange],
    );
    const viewModeRightMemo = useMemo(
      () => ({ viewModeName: viewModeRight, onViewModeNameChange: handleViewModeRightChange }),
      [viewModeRight, handleViewModeRightChange],
    );

    return (
      <CalendarWrapper ref={ref}>
        <CalendarWidget
          {...calendarWidgetProps}
          viewDate={viewDateLeftMemo}
          activeDate={activeDate}
          viewMode={viewModeLeftMemo}
          onDateMouseEnter={onDateMouseEnter}
          onDateMouseLeave={onDateMouseLeave}
        />
        <CalendarWidget
          {...calendarWidgetProps}
          viewDate={viewDateRightMemo}
          activeDate={activeDate}
          viewMode={viewModeRightMemo}
          onDateMouseEnter={onDateMouseEnter}
          onDateMouseLeave={onDateMouseLeave}
        />
      </CalendarWrapper>
    );
  },
);

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  ({ doubleView = false, rangePicker = false, ...props }, ref) => {
    // активная дата, на которой сейчас ховер
    const [activeDate, setActiveDate] = useState<string | undefined>(undefined);
    const handleActiveDateChange = useCallback((date: string | undefined) => setActiveDate(date), []);
    const clearActiveDate = () => setActiveDate(undefined);
    const activeDateMemo = useMemo(
      () => ({ activeDateValue: activeDate, onActiveDateChange: handleActiveDateChange }),
      [activeDate, handleActiveDateChange],
    );

    const handleDateMouseEnter = (date: string, _: any) => {
      setActiveDate(date);
    };
    const handleAreaMouseLeave = () => {
      clearActiveDate();
    };
    return doubleView && rangePicker ? (
      <DoubleCalendar
        {...props}
        activeDate={activeDateMemo}
        onDateMouseEnter={handleDateMouseEnter}
        onDateMouseLeave={handleAreaMouseLeave}
        rangePicker={rangePicker}
        ref={ref}
      />
    ) : (
      <SingleCalendar
        {...props}
        activeDate={activeDateMemo}
        onDateMouseEnter={handleDateMouseEnter}
        onDateMouseLeave={handleAreaMouseLeave}
        rangePicker={rangePicker}
        ref={ref}
      />
    );
  },
);

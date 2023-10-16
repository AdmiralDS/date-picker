import { forwardRef, useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import styled from 'styled-components';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';
import { DEFAULT_YEAR_COUNT } from './constants';
import type { CalendarOldViewMode, PickerTypeMode } from './constants';
import type { CalendarWidgetOldProps } from './interfaces';
import { CalendarWidgetOld } from './CalendarWidgetOld';
import { dateStringToDayjs, dayjsDateToString, yearsRange } from '../utils';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export * from './constants';
export * from './CalendarContent/DayCell';

const CalendarOldWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  overflow: hidden;
  width: max-content;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(props) => props.theme.shadow['Shadow 08']}
`;

export interface CalendarOldProps
  extends Omit<CalendarWidgetOldProps, 'onActiveDateChange' | 'onDateMouseEnter' | 'onDateMouseLeave'> {
  doubleView?: boolean;
}

const SingleCalendarOld = forwardRef<HTMLDivElement, CalendarWidgetOldProps>(({ ...props }, ref) => {
  return (
    <CalendarOldWrapper ref={ref}>
      <CalendarWidgetOld {...props} />
    </CalendarOldWrapper>
  );
});

const DoubleCalendarOld = forwardRef<HTMLDivElement, CalendarWidgetOldProps>(
  (
    {
      rangePicker = false,
      pickerType = 'DATE_MONTH_YEAR',
      viewMode,
      viewDate,
      activeDate,
      selectedDate,
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
      selectedDate,
      minDate,
      maxDate,
      ...props,
    } as Record<string, any>;
    const selected = dateStringToDayjs(selectedDate?.selectedDateValue, props.locale?.localeName);

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
          return compareYearsRange(dateLeft, dateRight) >= 0;
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

    const handleViewDateLeftChange = (date: string) => {
      console.log(date);
      setViewDateLeft(dateStringToDayjs(date, props.locale?.localeName));
    };
    const handleViewDateRightChange = (date: string) => {
      setViewDateRight(dateStringToDayjs(date, props.locale?.localeName));
    };

    useEffect(() => {
      if (viewDateLeft && viewDateRight && dateRightIsSameOrBefore(viewDateLeft, viewDateRight)) {
        setViewDateRight(increaseDate(viewDateLeft));
      }
    }, [viewDateLeft, pickerType]);

    useEffect(() => {
      if (viewDateLeft && viewDateRight && dateLeftIsSameOrAfter(viewDateLeft, viewDateRight)) {
        setViewDateLeft(decreaseDate(viewDateRight));
      }
    }, [viewDateRight, pickerType]);

    const getInitialViewMode = (pickerType: PickerTypeMode): CalendarOldViewMode => {
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
    const [viewModeLeft, setViewModeLeft] = useState<CalendarOldViewMode>(getInitialViewMode(pickerType));
    const [viewModeRight, setViewModeRight] = useState<CalendarOldViewMode>(getInitialViewMode(pickerType));

    const handleViewModeLeftChange = (viewMode: CalendarOldViewMode) => setViewModeLeft(viewMode);
    const handleViewModeRightChange = (viewMode: CalendarOldViewMode) => setViewModeRight(viewMode);

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
      <CalendarOldWrapper ref={ref}>
        <CalendarWidgetOld
          {...calendarWidgetProps}
          viewDate={{
            viewDateValue: viewDateLeft && dayjsDateToString(viewDateLeft),
            onViewDateChange: handleViewDateLeftChange,
          }}
          activeDate={activeDate}
          viewMode={{ viewModeName: viewModeLeft, onViewModeNameChange: handleViewModeLeftChange }}
          onDateMouseEnter={onDateMouseEnter}
          onDateMouseLeave={onDateMouseLeave}
        />
        <CalendarWidgetOld
          {...calendarWidgetProps}
          viewDate={{
            viewDateValue: viewDateRight && dayjsDateToString(viewDateRight),
            onViewDateChange: handleViewDateRightChange,
          }}
          activeDate={activeDate}
          viewMode={{ viewModeName: viewModeRight, onViewModeNameChange: handleViewModeRightChange }}
          onDateMouseEnter={onDateMouseEnter}
          onDateMouseLeave={onDateMouseLeave}
        />
      </CalendarOldWrapper>
    );
  },
);

export const CalendarOld = forwardRef<HTMLDivElement, CalendarOldProps>(
  ({ doubleView = false, rangePicker = false, ...props }, ref) => {
    // активная дата, на которой сейчас ховер
    const [activeDate, setActiveDate] = useState<string | undefined>(undefined);
    const handleActiveDateChange = (date: string | undefined) => setActiveDate(date);
    const clearActiveDate = () => setActiveDate(undefined);

    const handleDateMouseEnter = (date: string, _: any) => {
      setActiveDate(date);
    };
    const handleAreaMouseLeave = () => {
      clearActiveDate();
    };
    return doubleView && rangePicker ? (
      <DoubleCalendarOld
        {...props}
        activeDate={{ activeDateValue: activeDate, onActiveDateChange: handleActiveDateChange }}
        onDateMouseEnter={handleDateMouseEnter}
        onDateMouseLeave={handleAreaMouseLeave}
        rangePicker={rangePicker}
        ref={ref}
      />
    ) : (
      <SingleCalendarOld
        {...props}
        activeDate={{ activeDateValue: activeDate, onActiveDateChange: handleActiveDateChange }}
        onDateMouseEnter={handleDateMouseEnter}
        onDateMouseLeave={handleAreaMouseLeave}
        rangePicker={rangePicker}
        ref={ref}
      />
    );
  },
);
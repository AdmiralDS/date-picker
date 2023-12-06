import type { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import {
  dateStringToDayjs,
  dayjsDateToString,
  dayjsStateToString,
  getCurrentTimeZone,
  getDayjsDate,
} from '#src/components/utils.ts';
import { YearRangeCalendar } from '#src/components/YearRangeCalendar';
import { TwentyYearsNavigationPanelWidget } from '#src/components/TwentyYearsNavigationPanelWidget';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import type { RangeDoubleCalendarProps } from '#src/components/calendarInterfaces.ts';
import { DoublePickerCalendarWrapper, SingleContainer } from '#src/components/pickerStyle.ts';

export interface YearRangeDoublePickerCalendarProps
  extends Omit<
    RangeDoubleCalendarProps,
    'activeDateRangeEndValue' | 'defaultActiveDateRangeEndValue' | 'onActiveDateRangeEndValueChange'
  > {}

const YearRangeDoublePickerCalendarContainer = styled.div`
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

const StyledYearRangeCalendar = styled(YearRangeCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

export const YearRangeDoublePickerCalendar = ({
  dateRangeValue,
  defaultDateRangeValue,
  onDateRangeValueChange,
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  ...props
}: YearRangeDoublePickerCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const [dateLeftState, setDateLeftState] = useState(getDayjsDate(locale, timezone, defaultDateRangeValue?.[0]));
  const dateLeftInner = (dateRangeValue && getDayjsDate(locale, timezone, dateRangeValue[0])) || dateLeftState;
  const handleDateLeftChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    if (dayjsDate) {
      setDateLeftState(dayjsDate);
      onDateRangeValueChange?.([dateString, dayjsDateToString(dateRightInner)]);
    }
  };
  const [dateRightState, setDateRightState] = useState(
    defaultDateRangeValue && defaultDateRangeValue[1]
      ? getDayjsDate(locale, timezone, defaultDateRangeValue[1])
      : dateLeftInner.add(YEARS_ON_SCREEN, 'year'),
  );
  const dateRightInner = (dateRangeValue && getDayjsDate(locale, timezone, dateRangeValue[1])) || dateRightState;
  const handleDateRightChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    if (dayjsDate) {
      setDateRightState(dayjsDate);
      onDateRangeValueChange?.([dayjsDateToString(dateLeftInner), dateString]);
    }
  };

  useEffect(() => {
    if (dateLeftInner.isSameOrAfter(dateRightInner)) {
      handleDateRightChange(dayjsDateToString(dateLeftInner.add(YEARS_ON_SCREEN, 'year')));
    }
  }, [dateLeftInner]);
  useEffect(() => {
    if (dateRightInner.isSameOrBefore(dateLeftInner)) {
      handleDateLeftChange(dayjsDateToString(dateRightInner.subtract(YEARS_ON_SCREEN, 'year')));
    }
  }, [dateRightInner]);
  //</editor-fold>

  //<editor-fold desc="Hovered date">
  const [activeDateState, setActiveDateState] = useState<Dayjs | undefined>(
    dateStringToDayjs(defaultActiveDateValue, locale, timezone),
  );
  const activeDateInner = (activeDateValue && getDayjsDate(locale, timezone, activeDateValue)) || activeDateState;
  const handleActiveDateChange = (dateString?: string) => {
    const dayjsActiveDate = dateStringToDayjs(dateString, locale, timezone);
    setActiveDateState(dayjsActiveDate);
    onActiveDateValueChange?.(dateString);
  };
  //</editor-fold>

  //<editor-fold desc="Selected range">
  const [selectedDateRangeState, setSelectedDateRangeState] = useState(defaultSelectedDateRangeValue);
  const selectedDateRangeInner = selectedDateRangeValue || selectedDateRangeState;
  const handleSelectedDateRangeChange = (dateRangeString: [string | undefined, string | undefined]) => {
    setSelectedDateRangeState(dateRangeString);
    onSelectedDateRangeValueChange?.(dateRangeString);
  };
  //</editor-fold>

  //<editor-fold desc="Active end of range">
  const [dateRangeActiveEndState, setDateRangeActiveEndState] = useState<Dayjs | undefined>();
  const handleDateRangeActiveEndChange = (dateString?: string) => {
    const dateDayjs = dateStringToDayjs(dateString, locale, timezone);
    setDateRangeActiveEndState(dateDayjs);
  };
  //</editor-fold>

  const handleLeftTwentyYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateLeftChange(dayjsDateToString(dateLeftInner.subtract(YEARS_ON_SCREEN, 'year')));
        break;
      case 'right':
        handleDateLeftChange(dayjsDateToString(dateLeftInner.add(YEARS_ON_SCREEN, 'year')));
        break;
    }
  };
  const handleRightTwentyYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateRightChange(dayjsDateToString(dateRightInner.subtract(YEARS_ON_SCREEN, 'year')));
        break;
      case 'right':
        handleDateRightChange(dayjsDateToString(dateRightInner.add(YEARS_ON_SCREEN, 'year')));
        break;
    }
  };

  return (
    <DoublePickerCalendarWrapper>
      <SingleContainer>
        <TwentyYearsNavigationPanelWidget
          date={dayjsDateToString(dateLeftInner)}
          viewMode={'years'}
          locale={locale}
          timezone={timezone}
          onClick={handleLeftTwentyYearsNavigationPanelClick}
        />
        <YearRangeDoublePickerCalendarContainer>
          <StyledYearRangeCalendar
            {...props}
            dateValue={dayjsDateToString(dateLeftInner)}
            selectedDateRangeValue={selectedDateRangeInner}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeDateValue={dayjsStateToString(activeDateInner)}
            onActiveDateValueChange={handleActiveDateChange}
            activeDateRangeEndValue={dayjsStateToString(dateRangeActiveEndState)}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            locale={locale}
            $isVisible={true}
          />
        </YearRangeDoublePickerCalendarContainer>
      </SingleContainer>
      <SingleContainer>
        <TwentyYearsNavigationPanelWidget
          date={dayjsDateToString(dateRightInner)}
          viewMode={'years'}
          locale={locale}
          timezone={timezone}
          onClick={handleRightTwentyYearsNavigationPanelClick}
        />
        <YearRangeDoublePickerCalendarContainer>
          <StyledYearRangeCalendar
            {...props}
            dateValue={dayjsDateToString(dateRightInner)}
            selectedDateRangeValue={selectedDateRangeInner}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeDateValue={dayjsStateToString(activeDateInner)}
            onActiveDateValueChange={handleActiveDateChange}
            activeDateRangeEndValue={dayjsStateToString(dateRangeActiveEndState)}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            locale={locale}
            $isVisible={true}
          />
        </YearRangeDoublePickerCalendarContainer>
      </SingleContainer>
    </DoublePickerCalendarWrapper>
  );
};

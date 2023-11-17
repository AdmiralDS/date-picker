import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

import type { RangeCalendarProps } from '#src/components/calendarInterfaces.ts';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants.ts';
import { dateStringToDayjs, dayjsDateToString, getCurrentTimeZone, getDayjsDate } from '#src/components/utils.ts';
import { YearRangeCalendar } from '#src/components/YearRangeCalendar';
import { TwentyYearsNavigationPanelWidget } from '#src/components/TwentyYearsNavigationPanelWidget';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';

export interface YearRangePickerCalendarProps extends RangeCalendarProps {}

const YearRangePickerCalendarWrapper = styled.div`
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

const YearRangePickerCalendarContainer = styled.div`
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

export const YearRangePickerCalendar = ({
  dateValue,
  defaultDateValue,
  onDateValueChange,
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  ...props
}: YearRangePickerCalendarProps) => {
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

  //<editor-fold desc="Selected range">
  const [selectedDateRangeState, setSelectedDateRangeState] = useState(defaultSelectedDateRangeValue);
  const selectedDateRangeInner = selectedDateRangeValue || selectedDateRangeState;
  const handleSelectedDateRangeChange = (dateRangeString: [string | undefined, string | undefined]) => {
    setSelectedDateRangeState(dateRangeString);
    onSelectedDateRangeValueChange?.(dateRangeString);
  };
  //</editor-fold>

  const handleTwentyYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
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
    <YearRangePickerCalendarWrapper>
      <TwentyYearsNavigationPanelWidget
        date={dayjsDateToString(dateInner)}
        viewMode={'years'}
        locale={locale}
        timezone={timezone}
        onClick={handleTwentyYearsNavigationPanelClick}
      />
      <YearRangePickerCalendarContainer>
        <StyledYearRangeCalendar
          {...props}
          dateValue={dayjsDateToString(dateInner)}
          selectedDateRangeValue={selectedDateRangeInner}
          onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
          locale={locale}
          $isVisible={true}
        />
      </YearRangePickerCalendarContainer>
    </YearRangePickerCalendarWrapper>
  );
};

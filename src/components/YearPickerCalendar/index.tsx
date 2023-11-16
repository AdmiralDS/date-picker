import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

import type { SingleCalendarProps, PickerCalendarProps } from '#src/components/calendarInterfaces.ts';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants.ts';
import {
  dateStringToDayjs,
  dayjsDateToString,
  dayjsStateToString,
  getCurrentTimeZone,
  getDayjsDate,
} from '#src/components/utils.ts';
import { YearCalendar } from '#src/components/YearCalendar';
import { TwentyYearsNavigationPanelWidget } from '#src/components/TwentyYearsNavigationPanelWidget';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';

export interface YearPickerCalendarProps extends SingleCalendarProps, PickerCalendarProps {
  onYearChange?: (dateString: string) => void;
}

const YearPickerCalendarWrapper = styled.div`
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

const YearPickerCalendarContainer = styled.div`
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

const StyledYearCalendar = styled(YearCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

export const YearPickerCalendar = ({
  viewModeValue = 'years',
  defaultViewModeValue,
  onViewModeChange,
  dateValue,
  defaultDateValue,
  onDateValueChange,
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  onYearChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  ...props
}: YearPickerCalendarProps) => {
  //<editor-fold desc="Calendar view mode">
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const viewModeInner = viewModeValue;
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

  const handleYearClick = (dateString: string) => {
    handleSelectedDateChange(dateString);
    onYearChange?.(dateString);
  };

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
    <YearPickerCalendarWrapper>
      <TwentyYearsNavigationPanelWidget
        date={dayjsDateToString(dateInner)}
        viewMode={viewModeInner}
        locale={locale}
        timezone={timezone}
        onClick={handleTwentyYearsNavigationPanelClick}
      />
      <YearPickerCalendarContainer>
        <StyledYearCalendar
          {...props}
          dateValue={dayjsDateToString(dateInner)}
          selectedDateValue={dayjsStateToString(selectedDateInner)}
          onSelectedDateValueChange={handleYearClick}
          locale={locale}
          $isVisible={viewModeInner === 'years'}
        />
      </YearPickerCalendarContainer>
    </YearPickerCalendarWrapper>
  );
};

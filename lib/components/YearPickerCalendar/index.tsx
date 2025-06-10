import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import type { PickerCalendarProps, SingleCalendarProps, CalendarLocaleProps } from '#lib/calendarInterfaces.ts';
import { getCurrentDate } from '#lib/utils.ts';
import { CalendarContainer, SinglePickerCalendarWrapper, YearCalendarView } from '#lib/calendarStyle.ts';
import { ruLocale } from '#lib/calendarConstants.ts';
import { RangeYearsNavigationPanelWidget } from '#lib/RangeYearsNavigationPanelWidget';

export interface YearPickerCalendarProps
  extends Omit<SingleCalendarProps, 'cell'>,
    Omit<PickerCalendarProps, 'viewModeValue' | 'defaultViewModeValue' | 'onViewModeChange'> {
  calendarLocale?: CalendarLocaleProps;
  yearModel?: React.ComponentProps<typeof YearCalendarView>['yearModel'];
  yearsWidgetContainerPropsConfig?: React.ComponentProps<typeof YearCalendarView>['yearsWidgetContainerPropsConfig'];
  yearsNavigationContainerPropsConfig?: React.ComponentProps<
    typeof RangeYearsNavigationPanelWidget
  >['yearsNavigationContainerPropsConfig'];
  yearsOnScreen?: number;
  yearsColumns?: number;
}

export const YearPickerCalendar = ({
  dateValue,
  defaultDateValue,
  onDateValueChange,
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  cell,
  locale = ruLocale,
  prevButtonPropsConfig,
  nextButtonPropsConfig,
  yearModel,
  yearsWidgetContainerPropsConfig,
  yearsOnScreen = 20,
  yearsColumns,
  yearsNavigationContainerPropsConfig,
  ...props
}: YearPickerCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const [dateState, setDateState] = useState(defaultDateValue || getCurrentDate(locale?.localeName));
  const dateInner = dateValue || dateState;

  const handleDateChange = (date: Dayjs) => {
    setDateState(date);
    onDateValueChange?.(date);
  };
  //</editor-fold>

  //<editor-fold desc="Selected date">
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(defaultSelectedDateValue);
  const selectedDateInner = selectedDateValue || selectedDateState;

  const handleSelectedDateChange = (date: Dayjs) => {
    setSelectedDateState(date);
    onSelectedDateValueChange?.(date);
  };
  //</editor-fold>

  const handleYearClick = (date: Dayjs) => {
    handleSelectedDateChange(date);
  };

  const handleRangeYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateChange(dateInner.subtract(yearsOnScreen, 'year'));
        break;
      case 'right':
        handleDateChange(dateInner.add(yearsOnScreen, 'year'));
        break;
    }
  };

  return (
    <SinglePickerCalendarWrapper>
      <RangeYearsNavigationPanelWidget
        date={dateInner}
        viewMode={'years'}
        locale={locale}
        onMouseDown={handleRangeYearsNavigationPanelClick}
        prevButtonPropsConfig={prevButtonPropsConfig}
        nextButtonPropsConfig={nextButtonPropsConfig}
        yearsNavigationContainerPropsConfig={yearsNavigationContainerPropsConfig}
        yearsOnScreen={yearsOnScreen}
      />
      <CalendarContainer>
        <YearCalendarView
          {...props}
          cell={cell?.yearCell}
          dateValue={dateInner}
          selectedDateValue={selectedDateInner}
          onSelectedDateValueChange={handleYearClick}
          locale={locale}
          $isVisible={true}
          yearModel={yearModel}
          yearsWidgetContainerPropsConfig={yearsWidgetContainerPropsConfig}
          yearsOnScreen={yearsOnScreen}
          yearsColumns={yearsColumns}
        />
      </CalendarContainer>
    </SinglePickerCalendarWrapper>
  );
};

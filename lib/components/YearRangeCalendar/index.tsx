import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { getCurrentDate } from '#lib/utils';
import type { ActiveEnd, RangeCalendarProps } from '#lib/calendarInterfaces';
import { YearsWidget } from '#lib/YearsWidget';
import { MemoDefaultYearRangeCell } from '#lib/DefaultCell';
import { ruLocale } from '#lib/calendarConstants.ts';
import type { DateRange } from 'lib/types';

export interface YearRangeCalendarProps extends Omit<RangeCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {
  yearsOnScreen?: number;
  yearsWidgetContainerPropsConfig?: React.ComponentProps<typeof YearsWidget>['yearsWidgetContainerPropsConfig'];
}

export const YearRangeCalendar = ({
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  onActiveDateRangeEndValueChange,
  dateAttributes,
  dateValue,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  activeEndValue,
  defaultActiveEndValue,
  onActiveEndValueChange,
  cell,
  locale = ruLocale,
  yearsOnScreen,
  yearsWidgetContainerPropsConfig,
  ...props
}: YearRangeCalendarProps) => {
  //#region "Date shown on calendar"
  const dateInner = dateValue || getCurrentDate();
  //#endregion

  //#region "Hovered date"
  const [activeDateState, setActiveDateState] = useState<Dayjs | undefined>(defaultActiveDateValue);
  const activeDateInner = activeDateValue || activeDateState;

  const handleActiveDateChange = (date?: Dayjs) => {
    setActiveDateState(date);
    onActiveDateValueChange?.(date);
  };

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'yearCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName || 'ru');
    const disabled = targetDataAttributes['disabledCell'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled) {
      handleActiveDateChange(date);
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    handleActiveDateChange(undefined);
  };
  //#endregion

  //#region "First date of range"
  const [dateRangeFirstState, setDateRangeFirstState] = useState(defaultSelectedDateRangeValue?.[0]);
  const dateRangeFirstInner = selectedDateRangeValue?.[0] || dateRangeFirstState;

  const handleDateRangeFirstChange = (date?: Dayjs) => {
    setDateRangeFirstState(date);
  };
  //#endregion

  //#region "Second date of range"
  const [dateRangeSecondState, setDateRangeSecondState] = useState(defaultSelectedDateRangeValue?.[1]);
  const dateRangeSecondInner = selectedDateRangeValue?.[1] || dateRangeSecondState;

  const handleDateRangeSecondChange = (date?: Dayjs) => {
    setDateRangeSecondState(date);
  };
  //#endregion

  //#region "Active end of range"
  const setInitialActiveEndState = () => {
    if (defaultActiveEndValue) {
      return defaultActiveEndValue;
    }
    return 'start';
  };
  const [activeEndState, setActiveEndState] = useState<ActiveEnd>(setInitialActiveEndState());
  const activeEndInner = activeEndValue || activeEndState;

  const handleActiveEndChange = (end?: ActiveEnd) => {
    const newValue: ActiveEnd = end ? end : activeEndInner === 'start' ? 'end' : 'start';
    setActiveEndState(newValue);
    onActiveEndValueChange?.(newValue);
  };

  const setInitialDateRangeActiveEndState = () => {
    if (activeEndInner) {
      switch (activeEndInner) {
        case 'start':
        default:
          return dateRangeFirstInner;
        case 'end':
          return dateRangeSecondInner;
      }
    }
    return undefined;
  };
  const [dateRangeActiveEnd, setDateRangeActiveEndState] = useState<Dayjs | undefined>(
    setInitialDateRangeActiveEndState(),
  );

  const handleDateRangeActiveEndChange = (date?: Dayjs) => {
    setDateRangeActiveEndState(date);
    onActiveDateRangeEndValueChange?.(date);
  };
  //#endregion

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'yearCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName);
    const disabled = targetDataAttributes['disabledCell'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled) {
      let first: Dayjs | undefined = undefined;
      let second: Dayjs | undefined = undefined;
      switch (activeEndInner) {
        case 'start':
          handleDateRangeFirstChange(date);
          first = date;
          second = dateRangeSecondInner;
          break;
        case 'end':
          handleDateRangeSecondChange(date);
          first = dateRangeFirstInner;
          second = date;
          break;
        case 'none':
        default:
          break;
      }

      const newSelectedDateRangeValue: DateRange = [first, second];
      handleActiveEndChange();
      handleDateRangeActiveEndChange(date);
      onSelectedDateRangeValueChange?.(newSelectedDateRangeValue);
    }
  };

  return (
    <YearsWidget
      {...props}
      date={dateInner}
      selected={[dateRangeFirstInner, dateRangeSecondInner]}
      active={activeDateInner}
      activeRangeEnd={dateRangeActiveEnd}
      dateAttributes={dateAttributes}
      locale={locale}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onClick={handleDateClick}
      cell={cell || MemoDefaultYearRangeCell}
      range={true}
      yearsOnScreen={yearsOnScreen}
      yearsWidgetContainerPropsConfig={yearsWidgetContainerPropsConfig}
    />
  );
};

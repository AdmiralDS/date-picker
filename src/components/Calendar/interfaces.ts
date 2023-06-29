import type { Dayjs } from 'dayjs';
import type { ReactNode } from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

import type { CalendarViewMode, PickerTypeMode } from '@admiral-ds/date-picker';
import type { DateValidator } from '#src/components/Calendar/validator';

export interface ViewModeProps {
  viewModeName?: CalendarViewMode;
  defaultViewModeName?: CalendarViewMode;
  onViewModeNameChange?: (viewMode: CalendarViewMode) => void;
}

export interface CalendarWidgetProps {
  viewMode?: ViewModeProps;
  pickerType?: PickerTypeMode;
  rangePicker?: boolean;
  viewDate?: Dayjs;
  activeDate?: Dayjs;
  selected?: Dayjs;
  startDate?: Dayjs;
  endDate?: Dayjs;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  //---------------------------
  //объединить в объект render
  renderDateCell?: (date: Dayjs) => ReactNode;
  renderMonthCell?: (date: Dayjs) => ReactNode;
  renderYearCell?: (date: Dayjs) => ReactNode;
  //---------------------------
  validator?: DateValidator;
  onViewDateChange?: (date: Dayjs) => void;
  onActiveDateChange: (date: Dayjs | undefined) => void;
  onDateMouseEnter: (date: Dayjs, _: any) => void;
  onDateMouseLeave: () => void;
  onSelectDate?: (date: Dayjs) => void;
  onSelectMonth?: (date: Dayjs) => void;
  onSelectYear?: (date: Dayjs) => void;
  disabledDate?: (date: Dayjs) => boolean;
  isHiddenDate?: (date: Dayjs) => boolean;
  highlightSpecialDay?: (date: Dayjs) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
  userLocale?: string;
  locale?: {
    backwardText?: string;
    forwardText?: string;
    nextMonthText?: string;
    previousMonthText?: string;
    returnText?: string;
    selectYearText?: string;
    selectMonthText?: string;
  };
}

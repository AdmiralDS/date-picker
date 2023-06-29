import type { Dayjs } from 'dayjs';
import type { ReactNode } from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

import type { CalendarViewMode, PickerTypeMode } from '@admiral-ds/date-picker';
import type { DateValidator } from '#src/components/Calendar/validator';

export interface ViewModeProps {
  /** Экран выбора дат, месяцев, лет */
  viewModeName?: CalendarViewMode;
  /** Режим отображения по умолчанию */
  defaultViewModeName?: CalendarViewMode;
  /** Коллбэк на переключение экрана */
  onViewModeNameChange?: (viewMode: CalendarViewMode) => void;
}

export interface RenderCellsProp {
  /** Позволяет кастомизировать отображение дат */
  renderDateCell?: (date: Dayjs) => ReactNode;
  /** Позволяет кастомизировать отображение месяцев */
  renderMonthCell?: (date: Dayjs) => ReactNode;
  /** Позволяет кастомизировать отображение лет */
  renderYearCell?: (date: Dayjs) => ReactNode;
}

export interface CalendarWidgetProps {
  /** Управление экраном выбора дат */
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
  /** Функции для кастомного отображения дат, месяцев и лет */
  renderCell?: RenderCellsProp;
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

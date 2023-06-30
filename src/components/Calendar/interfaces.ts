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

export interface OnSelectCellProps {
  /** Коллбэк при выборе числа */
  onSelectDate?: (date: Dayjs) => void;
  /** Коллбэк при выборе месяца */
  onSelectMonth?: (date: Dayjs) => void;
  /** Коллбэк при выборе года */
  onSelectYear?: (date: Dayjs) => void;
}

export interface CalendarLocaleProps {
  /** Название локали */
  localeName?: string;
  /** Текстовые константы, используемые в компоненте */
  localeText?: {
    backwardText?: string;
    forwardText?: string;
    nextMonthText?: string;
    previousMonthText?: string;
    returnText?: string;
    selectYearText?: string;
    selectMonthText?: string;
  };
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
  /** Коллбэк при выборе числа/месяца/года */
  onSelectCell?: OnSelectCellProps;
  disabledDate?: (date: Dayjs) => boolean;
  isHiddenDate?: (date: Dayjs) => boolean;
  highlightSpecialDay?: (date: Dayjs) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
  /** Объект локализации - позволяет перезадать текстовые константы, используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: CalendarLocaleProps;
}

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
  renderDateCell?: (date: string) => ReactNode;
  /** Позволяет кастомизировать отображение месяцев */
  renderMonthCell?: (date: string) => ReactNode;
  /** Позволяет кастомизировать отображение лет */
  renderYearCell?: (date: string) => ReactNode;
}

export interface OnSelectCellProps {
  /** Коллбэк при выборе числа */
  onSelectDate?: (date: string) => void;
  /** Коллбэк при выборе месяца */
  onSelectMonth?: (date: string) => void;
  /** Коллбэк при выборе года */
  onSelectYear?: (date: string) => void;
}

export interface CalendarLocaleProps {
  /** Название локали */
  localeName?: string;
  /** Текстовые константы, используемые в компоненте */
  localeText?: {
    /** Надпись (тултип) для кнопки со стрелкой, ведущей вперед */
    backwardText?: string;
    /** Надпись (тултип) для кнопки со стрелкой, ведущей назад */
    forwardText?: string;
    /** Надпись (тултип) для кнопки со стрелкой, ведущей к следующему месяцу */
    nextMonthText?: string;
    /** Надпись (тултип) для кнопки со стрелкой ведущей, к предыдущему месяцу */
    previousMonthText?: string;
    /** Надпись (тултип) для кнопки возврата  */
    returnText?: string;
    /** Надпись (тултип) для кнопки, открывающей панель выбора года */
    selectYearText?: string;
    /** Надпись (тултип) для кнопки, открывающей панель выбора месяца */
    selectMonthText?: string;
  };
}

export interface ViewDateProps {
  /** Дата для отображения на экране в формате "YYYY-MM-DDT12:00:00 */
  viewDateValue?: string;
  /** Дата для отображения на экране по умолчанию в формате "YYYY-MM-DDT12:00:00 */
  defaultViewDateValue?: string;
  /** Коллбэк на изменение даты отображения на экране */
  onViewDateChange?: (date: string) => void;
}

export interface ActiveDateProps {
  /** Активная дата (hover) в формате "YYYY-MM-DDT12:00:00 */
  activeDateValue?: string;
  /** Активная дата (hover) по умолчанию в формате "YYYY-MM-DDT12:00:00 */
  defaultActiveDateValue?: string;
  /** Коллбэк на изменение активной даты */
  onActiveDateChange?: (date: string) => void;
}

export interface CalendarWidgetProps {
  /** Управление экраном выбора дат */
  viewMode?: ViewModeProps;
  /** Выбор только года, месяца или полной даты */
  pickerType?: PickerTypeMode;
  /** Режим выбора диапазона дат */
  rangePicker?: boolean;
  /** Дата для отображения на экране в формате "YYYY-MM-DDT12:00:00 */
  viewDate?: ViewDateProps;
  /** Активная дата (hover) в формате "YYYY-MM-DDT12:00:00 */
  activeDate?: ActiveDateProps;
  /** Коллбэк для установки активной даты */
  onDateMouseEnter: (date: string, _: any) => void;
  /** Коллбэк для сброса активной даты при выходе за пределы области дат */
  onDateMouseLeave: () => void;
  /** Выбранное значение даты в формате "YYYY-MM-DDT12:00:00 */
  selected?: string;
  /** Коллбэк при выборе числа/месяца/года */
  onSelectCell?: OnSelectCellProps;
  /** Начальная дата диапазона */
  startDate?: Dayjs;
  /** Конечная дата диапазона */
  endDate?: Dayjs;
  /** Минимально возможная для выбора дата */
  minDate?: Dayjs;
  /** Максимально возможная для выбора дата */
  maxDate?: Dayjs;
  /** Функции для кастомного отображения дат, месяцев и лет */
  renderCell?: RenderCellsProp;
  /** Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
   *  Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
   *  функцией значение является текстом ошибки
   */
  validator?: DateValidator;
  /** Функция фильтрации даты. Если функция возвращает false для конкретного дня,
   * то этот день будет задизейблен и его нельзя будет выбрать
   */
  disabledDate?: (date: string) => boolean;
  /** Функция отображения даты на текущем экране */
  isHiddenDate?: (date: string) => boolean;
  /** Позволяет добавлять стили на необходимые даты */
  highlightSpecialDay?: (date: Dayjs) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
  /** Объект локализации - позволяет перезадать текстовые константы, используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: CalendarLocaleProps;
}

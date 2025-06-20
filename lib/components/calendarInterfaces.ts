import type { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import type { Dayjs } from 'dayjs';

import type { DateAttributes, DefaultCellProps } from '#lib/DefaultCell';
import type { ArrowButtonProps, ArrowButtonPropsConfig } from '#lib/widgetInterfaces.ts';
import type { DateRange } from 'lib/types';

export type CalendarViewMode = 'dates' | 'months' | 'years';
// export type MonthCalendarViewMode = 'months' | 'years';

export type Timestamp = number;
export type RangeTimestamp = readonly [Timestamp, Timestamp];

export interface CalendarLocaleProps {
  /** Название локали */
  localeName: string;
  /** Текстовые константы, используемые в компоненте */
  localeText: {
    /** Надпись (тултип) для кнопки со стрелкой, ведущей вперед */
    backwardText: string;
    /** Надпись (тултип) для кнопки со стрелкой, ведущей назад */
    forwardText: string;
    /** Надпись (тултип) для кнопки со стрелкой, ведущей к следующему месяцу */
    nextMonthText: string;
    /** Надпись (тултип) для кнопки со стрелкой ведущей, к предыдущему месяцу */
    previousMonthText: string;
    /** Надпись (тултип) для кнопки возврата  */
    returnText: string;
    /** Надпись (тултип) для кнопки, открывающей панель выбора года */
    selectYearText: string;
    /** Надпись (тултип) для кнопки, открывающей панель выбора месяца */
    selectMonthText: string;
  };
}

export interface RenderFunctionProps {
  date: Dayjs;
  selected?: Dayjs | DateRange;
  active?: Dayjs;
  activeRangeEnd?: Dayjs;
  onCellMouseEnter?: (date: Dayjs, disabled?: boolean) => void;
  onCellClick?: (date: Dayjs, disabled?: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DateCellProps extends DefaultCellProps {}

export type RenderFunctionType = (props: RenderFunctionProps) => ReactNode;

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
  cell?: FunctionComponent<DateCellProps>;
  /** Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden) */
  dateAttributes?: (currentDate: Dayjs) => DateAttributes;

  /** Дата для отображения на экране */
  dateValue?: Dayjs;
  /** Дата для отображения на экране по умолчанию */
  defaultDateValue?: Dayjs;
  /** Коллбэк на изменение даты отображения на экране */
  onDateValueChange?: (date: Dayjs) => void;

  /** Активная дата (hover) */
  activeDateValue?: Dayjs;
  /** Активная дата (hover) по умолчанию */
  defaultActiveDateValue?: Dayjs;
  /** Коллбэк на изменение активной даты */
  onActiveDateValueChange?: (date?: Dayjs) => void;

  locale?: CalendarLocaleProps;
}

export interface SingleCalendarProps extends CalendarProps {
  /** Выбранное значение даты в формате ISO */
  selectedDateValue?: Dayjs;
  /** Выбранное значение даты по умолчанию в формате ISO */
  defaultSelectedDateValue?: Dayjs;
  /** Коллбэк на изменение выбранной даты */
  onSelectedDateValueChange?: (date: Dayjs) => void;
}

export interface RangeCalendarProps extends CalendarProps {
  /** Выбранное значение диапазона дат */
  selectedDateRangeValue?: DateRange;
  /** Выбранное значение диапазона дат по умолчанию */
  defaultSelectedDateRangeValue?: DateRange;
  /** Коллбэк на изменение выбранного диапазона дат */
  onSelectedDateRangeValueChange?: (dateRange: DateRange) => void;

  /** Значение активного конца диапазона дат */
  activeDateRangeEndValue?: Dayjs;
  /** Значение активного конца диапазона дат по умолчанию */
  defaultActiveDateRangeEndValue?: Dayjs;
  /** Коллбэк на изменение значения активного конца диапазона дат */
  onActiveDateRangeEndValueChange?: (date: Dayjs | undefined) => void;
}

export interface RangeDoubleCalendarProps
  extends Omit<RangeCalendarProps, 'dateValue' | 'defaultDateValue' | 'onDateValueChange'> {
  /** Выбранное значение диапазона дат */
  dateRangeValue?: [Dayjs, Dayjs];
  /** Выбранное значение диапазона дат по умолчанию */
  defaultDateRangeValue?: DateRange;
  /** Коллбэк на изменение выбранного диапазона дат */
  onDateRangeValueChange?: (dateRange: DateRange) => void;
}

export type СellProps = {
  dateCell?: FunctionComponent<DateCellProps>;
  monthCell?: FunctionComponent<DateCellProps>;
  yearCell?: FunctionComponent<DateCellProps>;
};

export interface PickerCalendarProps<T = CalendarViewMode> {
  /** Экран выбора дат, месяцев, лет */
  viewModeValue?: T;
  /** Режим отображения по умолчанию */
  defaultViewModeValue?: T;
  /** Коллбэк на переключение экрана */
  onViewModeChange?: (mode: T) => void;
  /** Кастомное отображение ячеек */
  cell?: СellProps;
  //todo удалить при дальнейшем рефакторинге month date
  prevButtonProps?: ArrowButtonProps;
  nextButtonProps?: ArrowButtonProps;
  /** Конфиг функция пропсов для кнопки панели "Назад". На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  prevButtonPropsConfig?: ArrowButtonPropsConfig;
  /** Конфиг функция пропсов для кнопки панели "Вперед". На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  nextButtonPropsConfig?: ArrowButtonPropsConfig;
}

// export interface MonthInputProps extends PickerCalendarProps<MonthCalendarViewMode> {}

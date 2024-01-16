import type { HTMLAttributes, ReactNode } from 'react';
import type { Dayjs } from 'dayjs';

export type CalendarViewMode = 'dates' | 'months' | 'years';

export interface RenderFunctionProps {
  date: Dayjs;
  selected?: Dayjs | [Dayjs | undefined, Dayjs | undefined];
  active?: Dayjs;
  activeRangeEnd?: Dayjs;
  onCellMouseEnter?: (date: Dayjs, disabled?: boolean) => void;
  onCellClick?: (date: Dayjs, disabled?: boolean) => void;
}

export type RenderFunctionType = (props: RenderFunctionProps) => ReactNode;

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
  renderCell?: RenderFunctionType;
  /** Дата, которая не может быть выбрана */
  disabledDate?: (currentDate: Dayjs) => boolean;

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

  locale?: string;
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
  selectedDateRangeValue?: [Dayjs | undefined, Dayjs | undefined];
  /** Выбранное значение диапазона дат по умолчанию */
  defaultSelectedDateRangeValue?: [Dayjs | undefined, Dayjs | undefined];
  /** Коллбэк на изменение выбранного диапазона дат */
  onSelectedDateRangeValueChange?: (dateRange: [Dayjs | undefined, Dayjs | undefined]) => void;

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
  defaultDateRangeValue?: [Dayjs | undefined, Dayjs | undefined];
  /** Коллбэк на изменение выбранного диапазона дат */
  onDateRangeValueChange?: (dateRange: [Dayjs | undefined, Dayjs | undefined]) => void;
}

export type renderCellProps = {
  renderDateCell?: RenderFunctionType;
  renderMonthCell?: RenderFunctionType;
  renderYearCell?: RenderFunctionType;
};

export interface PickerCalendarProps {
  /** Экран выбора дат, месяцев, лет */
  viewModeValue?: CalendarViewMode;
  /** Режим отображения по умолчанию */
  defaultViewModeValue?: CalendarViewMode;
  /** Коллбэк на переключение экрана */
  onViewModeChange?: (mode: CalendarViewMode) => void;
  /** Кастомное отображение ячеек */
  renderCell?: renderCellProps;
}

import type { MouseEvent } from 'react';
import type { Dayjs } from 'dayjs';

import type { CalendarViewMode, PickerTypeMode } from '../constants';
import type { CalendarLocaleProps } from '#src/components/Calendar/interfaces';

export interface BaseContentProps {
  viewMode: CalendarViewMode;
  date: Dayjs;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  /** Текстовые константы, используемые в компоненте */
  localeText: {
    backwardText?: string;
    forwardText?: string;
    nextMonthText?: string;
    previousMonthText?: string;
    returnText?: string;
    selectYearText?: string;
    selectMonthText?: string;
  };

  onNext(event: MouseEvent<HTMLButtonElement>): void;
  onPrevious(event: MouseEvent<HTMLButtonElement>): void;
}

interface YearsCallbacks {
  onYearsViewShow(event: MouseEvent<HTMLDivElement>): void;
  onYearsViewHide(event: MouseEvent<HTMLDivElement>): void;
}

interface MonthsCallbacks {
  onMonthsViewShow(event: MouseEvent<HTMLDivElement>): void;
  onMonthsViewHide(event: MouseEvent<HTMLDivElement>): void;
}

export interface PanelProps extends Omit<BaseContentProps, 'localeText'>, YearsCallbacks, MonthsCallbacks {
  pickerType: PickerTypeMode;
  /** Объект локализации - позволяет перезадать текстовые константы, используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: CalendarLocaleProps;
}

export interface YearMonthDatePanelProps extends BaseContentProps, YearsCallbacks, MonthsCallbacks {}
export interface YearMonthPanelProps extends BaseContentProps, YearsCallbacks {}

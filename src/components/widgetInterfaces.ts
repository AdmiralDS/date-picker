import type { HTMLAttributes } from 'react';
import type { Dayjs } from 'dayjs';

import type { CalendarViewMode, renderFunctionType } from '#src/components/calendarInterfaces.ts';

export interface BaseWidgetProps extends HTMLAttributes<HTMLDivElement> {
  /** Дата */
  date: Dayjs;
  selected?: Dayjs;
  active?: Dayjs;
  locale?: string;
  renderCell: renderFunctionType;
}

export interface BaseInnerWidgetProps extends HTMLAttributes<HTMLDivElement> {
  date: Dayjs;
  selected?: Dayjs;
  active?: Dayjs;
  renderCell: renderFunctionType;
}

export interface BasePanelWidgetProps extends HTMLAttributes<HTMLDivElement> {
  viewMode?: CalendarViewMode;
  /** Дата */
  date?: Dayjs;
  locale?: string;
}

import type { HTMLAttributes, ReactNode } from 'react';
import type { Dayjs } from 'dayjs';

import type { CalendarViewMode } from '#src/components/calendarInterfaces.ts';

export interface BaseWidgetProps extends HTMLAttributes<HTMLDivElement> {
  /** Дата */
  date?: Dayjs;
  locale?: string;
  renderCell: (date: Dayjs) => ReactNode;
}

export interface BaseInnerWidgetProps extends HTMLAttributes<HTMLDivElement> {
  date: Dayjs;
  renderCell: (date: Dayjs) => ReactNode;
}

export interface BasePanelWidgetProps extends HTMLAttributes<HTMLDivElement> {
  viewMode?: CalendarViewMode;
  /** Дата */
  date?: Dayjs;
  locale?: string;
}

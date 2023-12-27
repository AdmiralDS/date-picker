import type { HTMLAttributes, ReactNode } from 'react';
import type { Dayjs } from 'dayjs';

import type { DefaultCellProps } from '#src/components/DefaultCell';
import type { CalendarViewMode } from '#src/components/calendarInterfaces.ts';

export interface BaseWidgetProps extends HTMLAttributes<HTMLDivElement> {
  rangeCalendar?: boolean;
  /** Дата */
  date?: Dayjs;
  locale?: string;
  renderCellWithString?: (dateString: string) => DefaultCellProps;
  cells?: ReactNode;
}

export interface BaseInnerWidgetProps extends HTMLAttributes<HTMLDivElement> {
  rangeCalendar?: boolean;
  date: Dayjs;
  renderCellWithString?: (dateString: string) => DefaultCellProps;
  cells?: ReactNode;
}

export interface BasePanelWidgetProps extends HTMLAttributes<HTMLDivElement> {
  viewMode?: CalendarViewMode;
  /** Дата */
  date?: Dayjs;
  locale?: string;
}

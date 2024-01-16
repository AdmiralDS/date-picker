import type { HTMLAttributes } from 'react';
import type { Dayjs } from 'dayjs';

import type { CalendarViewMode, RenderFunctionType } from '#src/components/calendarInterfaces.ts';

export interface BaseWidgetProps extends HTMLAttributes<HTMLDivElement> {
  /** Дата */
  date: Dayjs;
  selected?: Dayjs | [Dayjs | undefined, Dayjs | undefined];
  active?: Dayjs;
  activeRangeEnd?: Dayjs;
  onCellMouseEnter?: (date: Dayjs, disabled?: boolean) => void;
  onCellClick?: (date: Dayjs, disabled?: boolean) => void;
  renderCell: RenderFunctionType;
  locale?: string;
}

export interface BaseInnerWidgetProps extends HTMLAttributes<HTMLDivElement> {
  date: Dayjs;
  selected?: Dayjs | [Dayjs | undefined, Dayjs | undefined];
  active?: Dayjs;
  activeRangeEnd?: Dayjs;
  onCellMouseEnter?: (date: Dayjs, disabled?: boolean) => void;
  onCellClick?: (date: Dayjs, disabled?: boolean) => void;
  renderCell: RenderFunctionType;
}

export interface BasePanelWidgetProps extends HTMLAttributes<HTMLDivElement> {
  viewMode?: CalendarViewMode;
  /** Дата */
  date?: Dayjs;
  locale?: string;
}

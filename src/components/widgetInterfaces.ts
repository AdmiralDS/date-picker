import type { FunctionComponent, HTMLAttributes } from 'react';
import type { Dayjs } from 'dayjs';

import type { CalendarViewMode, DateCellProps } from '#src/components/calendarInterfaces.ts';

export interface BaseWidgetProps extends HTMLAttributes<HTMLDivElement> {
  /** Дата */
  date: Dayjs;
  selected?: Dayjs | [Dayjs | undefined, Dayjs | undefined];
  active?: Dayjs;
  activeRangeEnd?: Dayjs;
  disabledDate?: (currentDate: Dayjs) => boolean;
  onCellMouseEnter?: (date: Dayjs, disabled?: boolean) => void;
  onCellClick?: (date: Dayjs, disabled?: boolean) => void;
  //renderCell: RenderFunctionType;
  cell: FunctionComponent<DateCellProps>;
  locale?: string;
}

export interface BasePanelWidgetProps extends HTMLAttributes<HTMLDivElement> {
  viewMode?: CalendarViewMode;
  /** Дата */
  date?: Dayjs;
  locale?: string;
}

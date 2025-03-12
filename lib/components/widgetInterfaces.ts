import type { FunctionComponent, HTMLAttributes } from 'react';
import type { Dayjs } from 'dayjs';

import type { CalendarLocaleProps, CalendarViewMode, DateCellProps } from '#lib/calendarInterfaces.ts';
import type { DateAttributes } from '#lib/DefaultCell';
import type { IconPlacementProps } from '@admiral-ds/react-ui';
import type { DateRange } from 'lib/types';

export interface BaseWidgetProps extends HTMLAttributes<HTMLDivElement> {
  /** Дата */
  date: Dayjs;
  selected?: Dayjs | DateRange;
  active?: Dayjs;
  activeRangeEnd?: Dayjs;
  dateAttributes?: (currentDate: Dayjs) => DateAttributes;
  cell: FunctionComponent<DateCellProps>;
  locale?: CalendarLocaleProps;
  range?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ArrowButtonProps extends IconPlacementProps {}

export interface BasePanelWidgetProps extends HTMLAttributes<HTMLDivElement> {
  viewMode?: CalendarViewMode;
  /** Дата */
  date?: Dayjs;
  locale: CalendarLocaleProps;
  prevButtonProps?: ArrowButtonProps;
  nextButtonProps?: ArrowButtonProps;
}

import type { FunctionComponent, HTMLAttributes } from 'react';
import type { Dayjs } from 'dayjs';

import type { CalendarLocaleProps, CalendarViewMode, DateCellProps } from '#src/components/calendarInterfaces.ts';
import type { DateAttributes } from '#src/components/DefaultCell';
import type { IconPlacementProps } from '@admiral-ds/react-ui';

export interface BaseWidgetProps extends HTMLAttributes<HTMLDivElement> {
  /** Дата */
  date: Dayjs;
  selected?: Dayjs | [Dayjs | undefined, Dayjs | undefined];
  active?: Dayjs;
  activeRangeEnd?: Dayjs;
  dateAttributes?: (currentDate: Dayjs) => DateAttributes;
  cell: FunctionComponent<DateCellProps>;
  locale?: CalendarLocaleProps;
  range?: boolean;
}

export interface ArrowButtonProps extends IconPlacementProps {}

export interface BasePanelWidgetProps extends HTMLAttributes<HTMLDivElement> {
  viewMode?: CalendarViewMode;
  /** Дата */
  date?: Dayjs;
  locale: CalendarLocaleProps;
  prevButtonProps?: ArrowButtonProps;
  nextButtonProps?: ArrowButtonProps;
}

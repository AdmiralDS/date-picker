import type { ReactNode } from 'react';

import type { CalendarOldViewMode } from '@admiral-ds/date-picker';

interface BaseCalendarViewProps {
  date: string;
  onMouseLeave: () => void;
  renderCell: (date: string) => ReactNode;
  locale: string;
}

export type YearsCalendarViewProps = BaseCalendarViewProps;
export type MonthsCalendarViewProps = BaseCalendarViewProps;
export interface DatesCalendarViewProps extends Omit<BaseCalendarViewProps, 'renderCell'> {
  renderCell: (date: string, viewMode: CalendarOldViewMode) => ReactNode;
}

export type MonthProps = DatesCalendarViewProps;

export interface WeekProps {
  weekStartDate: string;
  renderCell: (date: string, viewMode: CalendarOldViewMode) => ReactNode;
  locale: string;
}

export interface DayNamesProps {
  date: string;
  locale: string;
}
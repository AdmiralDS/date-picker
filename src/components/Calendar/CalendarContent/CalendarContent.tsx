import type { ReactNode } from 'react';
import type { Dayjs } from 'dayjs';
import type { CalendarViewMode } from '../constants';

import { YearsCalendarView } from './YearsCalendarView';
import { MonthsCalendarView } from './MonthsCalendarView';
import { DateCalendarView } from './DateCalendarView';

export interface CalendarContentProps {
  viewMode: CalendarViewMode;
  date: Dayjs;
  renderCell: (date: Dayjs) => ReactNode;
  onMouseLeave: () => void;
}
export const CalendarContent = ({ viewMode, date, renderCell, onMouseLeave }: CalendarContentProps) => {
  switch (viewMode) {
    case 'YEARS':
      return <YearsCalendarView date={date} renderCell={renderCell} onMouseLeave={onMouseLeave} />;
    case 'MONTHS':
      return <MonthsCalendarView date={date} renderCell={renderCell} onMouseLeave={onMouseLeave} />;
    case 'DATES':
    default:
      return <DateCalendarView onMouseLeave={onMouseLeave} date={date} renderCell={renderCell} />;
  }
};

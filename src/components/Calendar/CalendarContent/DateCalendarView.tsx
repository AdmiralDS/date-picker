import type { ReactNode } from 'react';
import type { Dayjs } from 'dayjs';

import { DayNames } from './DayNames';
import { Month } from './Month';
import type { CalendarViewMode } from '../constants';

export interface DateCalendarProps {
  date: Dayjs;
  renderCell: (date: Dayjs, viewMode: CalendarViewMode) => ReactNode;
  onMouseLeave: () => void;
}

export const DateCalendarView = ({ date, renderCell, onMouseLeave }: DateCalendarProps) => {
  return (
    <>
      <DayNames date={date} />
      <Month onMouseLeave={onMouseLeave} date={date} renderCell={renderCell} />
    </>
  );
};

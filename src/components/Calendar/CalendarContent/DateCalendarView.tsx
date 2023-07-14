import { DayNames } from './DayNames';
import { Month } from './Month';
import type { DatesCalendarViewProps } from './interfaces';

export const DateCalendarView = ({ date: dateString, renderCell, onMouseLeave, locale }: DatesCalendarViewProps) => {
  return (
    <>
      <DayNames date={dateString} locale={locale} />
      <Month onMouseLeave={onMouseLeave} date={dateString} renderCell={renderCell} locale={locale} />
    </>
  );
};

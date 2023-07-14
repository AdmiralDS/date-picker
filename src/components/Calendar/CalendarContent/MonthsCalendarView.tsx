import type { MonthsCalendarViewProps } from './interfaces';
import { dateStringToDayjs, dayjsDateToString } from '../utils';

const MONTH_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const MonthsCalendarView = ({ date: dateString, renderCell, onMouseLeave, locale }: MonthsCalendarViewProps) => {
  const date = dateStringToDayjs(dateString, locale);
  if (!date) return <></>;

  return (
    <div onMouseLeave={onMouseLeave}>
      {MONTH_NUMBERS.map((month) => {
        const monthStart = date.set('month', month).startOf('month');
        return renderCell(dayjsDateToString(monthStart));
      })}
    </div>
  );
};

import { dateStringToDayjs, dayjsDateToString, yearsRange } from '../utils';
import { DEFAULT_YEAR_COUNT } from '../constants';
import type { YearsCalendarViewProps } from './interfaces';

export const YearsCalendarView = ({ date: dateString, renderCell, onMouseLeave, locale }: YearsCalendarViewProps) => {
  const date = dateStringToDayjs(dateString, locale);
  if (!date) return <></>;

  const { start, end } = yearsRange(date, DEFAULT_YEAR_COUNT);
  const years = Array(end - start + 1)
    .fill(0)
    .map((_, index) => start + index);

  return (
    date && (
      <div onMouseLeave={onMouseLeave}>
        {years.map((year) => {
          const yearStart = date.set('year', year).startOf('year');
          return renderCell(dayjsDateToString(yearStart));
        })}
      </div>
    )
  );
};

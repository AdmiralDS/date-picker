import type { Dayjs } from 'dayjs';

import { Week } from './Week';
import type { MonthProps } from './interfaces';
import { dateStringToDayjs, dayjsDateToString } from '../../utils';

const FIXED_WEEK_COUNT = 6;

function getWeeksStartDates(viewDate: Dayjs, weeksNum: number) {
  let start = viewDate.startOf('month').startOf('week');
  const weeks: Array<Dayjs> = [];
  for (let i = 0; i < weeksNum; i++) {
    weeks.push(start);
    start = start.add(1, 'week');
  }
  return weeks;
}

export const Month = ({ date: dateString, renderCell, onMouseLeave, locale }: MonthProps) => {
  const date = dateStringToDayjs(dateString, locale);
  if (!date) return <></>;

  const handleMouseLeave = () => onMouseLeave();

  const weeks = getWeeksStartDates(date, FIXED_WEEK_COUNT);
  return (
    <div onMouseLeave={handleMouseLeave}>
      {weeks.map((weekStart) => (
        <Week
          key={weekStart.valueOf()}
          weekStartDate={dayjsDateToString(weekStart)}
          renderCell={renderCell}
          locale={locale}
        />
      ))}
    </div>
  );
};

import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import type { DatePickerCalendarProps } from '@admiral-ds/date-picker';
import { DatePickerCalendar } from '@admiral-ds/date-picker';
import { getCurrentTimeZone } from '#src/components/utils';

export const DatePickerCalendarSimpleTemplate = ({ locale, timezone, ...props }: DatePickerCalendarProps) => {
  const localeInner = locale || 'ru';
  const timezoneInner = timezone || getCurrentTimeZone();

  const dateIsDisabled = (date: Dayjs) => {
    return date.isBefore(dayjs());
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <DatePickerCalendar
      {...props}
      onClick={handleClick}
      locale={localeInner}
      disabledDate={dateIsDisabled}
      timezone={timezoneInner}
      //timezone="America/Toronto"
    />
  );
};

import type { MouseEventHandler } from 'react';

import type { DatePickerCalendarProps } from '@admiral-ds/date-picker';
import { DatePickerCalendar } from '@admiral-ds/date-picker';
import { dateStringToDayjs, getCurrentTimeZone } from '#src/components/utils.ts';
import dayjs from 'dayjs';

export const DatePickerCalendarSimpleTemplate = ({ locale, ...props }: DatePickerCalendarProps) => {
  const localeInner = locale || 'ru';
  const timezone = getCurrentTimeZone();
  const dateIsDisabled = (dateString: string) => {
    const date = dateStringToDayjs(dateString, locale, timezone);
    if (!date) return false;
    return date.isBefore(dayjs());
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return <DatePickerCalendar {...props} onClick={handleClick} locale={localeInner} disabledDate={dateIsDisabled} />;
};

import { useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import type { DateRangeCalendarProps } from '#src/components/DateRangeCalendar';
import { DateRangeCalendar } from '#src/components/DateRangeCalendar';

import { dayjsDateToString, getCurrentTimeZone, getDayjsDate } from '#src/components/utils';

const DoubleCalendarWrapper = styled.div`
  box-sizing: border-box;
  width: max-content;
  display: flex;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

export const DateRangeCalendarDoubleTemplate = ({
  date,
  defaultDate,
  onDateChange,
  locale = 'ru',
  timezone = getCurrentTimeZone(),
  ...props
}: DateRangeCalendarProps) => {
  const [dateLeft, setDateLeft] = useState<Dayjs>(getDayjsDate(locale, timezone, defaultDate));
  const [dateRight, setDateRight] = useState<Dayjs>(dateLeft.add(1, 'month'));

  const handleLeftDateChange = (dateString: string) => {
    const dayjsDateLeft = getDayjsDate(locale, timezone, dateString);
    setDateLeft(dayjsDateLeft);
    if (dayjsDateLeft.isSameOrAfter(dateRight, 'month')) {
      setDateRight(dayjsDateLeft.add(1, 'month'));
    }
  };
  const handleRightDateChange = (dateString: string) => {
    const dayjsDateRight = getDayjsDate(locale, timezone, dateString);
    setDateRight(dayjsDateRight);
    if (dayjsDateRight.isSameOrBefore(dateLeft, 'month')) {
      setDateLeft(dayjsDateRight.subtract(1, 'month'));
    }
  };

  return (
    <DoubleCalendarWrapper>
      <DateRangeCalendar
        {...props}
        date={dayjsDateToString(dateLeft)}
        locale={locale}
        timezone={timezone}
        onDateChange={handleLeftDateChange}
      />
      <DateRangeCalendar
        {...props}
        date={dayjsDateToString(dateRight)}
        locale={locale}
        timezone={timezone}
        onDateChange={handleRightDateChange}
      />
    </DoubleCalendarWrapper>
  );
};

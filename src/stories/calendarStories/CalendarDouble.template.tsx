import { useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import { Calendar } from '@admiral-ds/date-picker';
import type { CalendarProps } from '#src/components/Calendar/interfaces';
import { dateStringToDayjs, dayjsDateToString, getDayjsDate } from '#src/components/utils';

const DoubleCalendarWrapper = styled.div`
  box-sizing: border-box;
  width: max-content;
  display: flex;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

export const CalendarDoubleTemplate = ({
  date,
  defaultDate,
  onDateChange,
  locale = 'ru',
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone,
  ...props
}: CalendarProps) => {
  const [dateLeft, setDateLeft] = useState<Dayjs>(getDayjsDate(locale, timezone, defaultDate));
  const [dateRight, setDateRight] = useState<Dayjs>(dateLeft.add(1, 'month'));
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(undefined);

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

  const handleSelectedDateChange = (dateString: string) => {
    setSelectedDate(dateStringToDayjs(dateString, locale, timezone));
  };

  return (
    <DoubleCalendarWrapper>
      <Calendar
        {...props}
        date={dayjsDateToString(dateLeft)}
        locale={locale}
        timezone={timezone}
        onDateChange={handleLeftDateChange}
        selectedDate={selectedDate && dayjsDateToString(selectedDate)}
        onSelectedDateChange={handleSelectedDateChange}
      />
      <Calendar
        {...props}
        date={dayjsDateToString(dateRight)}
        locale={locale}
        timezone={timezone}
        onDateChange={handleRightDateChange}
        selectedDate={selectedDate && dayjsDateToString(selectedDate)}
        onSelectedDateChange={handleSelectedDateChange}
      />
    </DoubleCalendarWrapper>
  );
};

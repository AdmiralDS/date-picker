import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import styled from 'styled-components';

import type { DatePickerCalendarProps } from '@admiral-ds/date-picker';
import { DatePickerCalendar } from '@admiral-ds/date-picker';
import type { DateAttributes } from '#src/components/DefaultCell';
import { T } from '@admiral-ds/react-ui';

const WrapperVertical = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const DatePickerCalendarWithHolidaysTemplate = (props: DatePickerCalendarProps) => {
  const dateAttrs: (date: Dayjs) => DateAttributes = (date: Dayjs) => {
    return {
      disabled: date.isBefore(dayjs()),
      isHoliday: date.day() === 0 || date.day() === 6 || date.isSame(dayjs(), 'date'),
    };
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <WrapperVertical>
      <T font="Body/Body 2 Long" as="div">
        Праздничные, скрытые и недоступные для выбора даты можно задавать с помощью dateAttributes, вернув
        соответствующие значения isHoliday, hidden и disabled.
      </T>
      <DatePickerCalendar {...props} onClick={handleClick} dateAttributes={dateAttrs} />
    </WrapperVertical>
  );
};

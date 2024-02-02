import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import type { DatePickerCalendarProps } from '@admiral-ds/date-picker';
import { DatePickerCalendar } from '@admiral-ds/date-picker';
import type { DateAttributes } from '#src/components/DefaultCell';
import { T } from '@admiral-ds/react-ui';
import { WrapperHorizontal } from '#src/stories/common.tsx';

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
    <WrapperHorizontal>
      <DatePickerCalendar {...props} onClick={handleClick} dateAttributes={dateAttrs} />
      <T font="Body/Body 2 Long" as="div">
        Праздничные, скрытые и недоступные для выбора даты можно задавать с помощью dateAttributes, вернув
        соответствующие значения isHoliday, hidden и disabled.
      </T>
    </WrapperHorizontal>
  );
};

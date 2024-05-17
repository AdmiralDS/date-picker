import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { T } from '@admiral-ds/react-ui';
import type { DatePickerCalendarProps, DateAttributes } from '@admiral-ds/date-picker';
import { DatePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

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
      <WrapperVertical>
        <T font="Body/Body 2 Long" as="div">
          Можно блокировать для выбора как отдельные даты, так и диапазон. Так же можно блокировать для выбора месяцы и
          годы.
          <br />
          <br />
          Праздничные или выходные дни могут обозначаться (опционально) отдельным цветом Error 60 Main.
          <br />
          <br />
          Признаки праздничных, скрытых и недоступных для выбора даты можно задавать с помощью dateAttributes, вернув
          соответствующие значения isHoliday, hidden и disabled.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

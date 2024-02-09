import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import { T } from '@admiral-ds/react-ui';
import type { DateRangePickerCalendarProps } from '@admiral-ds/date-picker';
import { DateRangePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const DateRangePickerCalendarBlockEarlierDatesTemplate = (props: DateRangePickerCalendarProps) => {
  const [activeDateRangeEnd, setActiveDateRangeEnd] = useState<Dayjs | undefined>();
  const handleActiveDateRangeEndChange = (date?: Dayjs) => {
    setActiveDateRangeEnd(date);
  };

  const dateAttrs = (date: Dayjs) => {
    if (activeDateRangeEnd && date.isBefore(activeDateRangeEnd, 'date')) {
      return { disabled: true };
    }
    return {};
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <WrapperHorizontal>
      <DateRangePickerCalendar
        {...props}
        onClick={handleClick}
        onActiveDateRangeEndValueChange={handleActiveDateRangeEndChange}
        dateAttributes={dateAttrs}
      />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор диапазона дат
        </T>
        <T font="Body/Body 2 Long" as="div">
          При первом клике на число оно выделяется синим. Далее ведем курсор ко второму числу, числа автоматически
          закрашиваются во всем диапазоне до даты под курсором.
          <br />
          При клике на второе число оно также выделяется синим. Диапазон дат выбран.
          <br />
          <br />
          Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год,
          либо нажав на месяц/год в шапке календаря.
          <br />
          <br />
          Стрелки влево-вправо позволяют менять год.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

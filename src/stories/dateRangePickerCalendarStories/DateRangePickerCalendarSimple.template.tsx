import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { DateRangePickerCalendarProps } from '@admiral-ds/date-picker';
import { DateRangePickerCalendar } from '@admiral-ds/date-picker';
import { WrapperHorizontal } from '#src/stories/common.tsx';

export const DateRangePickerCalendarSimpleTemplate = (props: DateRangePickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <WrapperHorizontal>
      <DateRangePickerCalendar {...props} onClick={handleClick} />
      <T font="Body/Body 2 Long" as="div">
        Выбор диапазона дат.
        <br />
        При первом клике на число оно выделяется синим. Далее ведем курсор ко второму числу, числа автоматически
        закрашиваются во всем диапазоне до даты под курсором.
        <br />
        При клике на второе число оно также выделяется синим. Диапазон дат выбран.
        <br />
        Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год,
        либо нажав на месяц/год в шапке календаря
      </T>
    </WrapperHorizontal>
  );
};

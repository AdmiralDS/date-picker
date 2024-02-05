import type { MouseEventHandler } from 'react';

import type { DatePickerCalendarProps } from '@admiral-ds/date-picker';
import { DatePickerCalendar } from '@admiral-ds/date-picker';
import { WrapperHorizontal } from '#src/stories/common.tsx';
import { T } from '@admiral-ds/react-ui';

export const DatePickerCalendarSimpleTemplate = (props: DatePickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <WrapperHorizontal>
      <DatePickerCalendar {...props} onClick={handleClick} />
      <T font="Body/Body 2 Long" as="div">
        Высота календаря постоянна и состоит из шести рядов чисел. Текущий месяц начинается с первого ряда и, если его
        даты не заходят на шестой ряд, то там ставятся пустые ячейки (Empty).
        <br />
        Текущая дата выделяется обводкой в виде черного кружка. Ховер на дате подсвечивается обводкой синего цвета.
        Выбранная дата отмечается синим кружком.
        <br />
        При ховере на месяце, годе, стрелках вправо/влево появляются тултипы с подсказками.
        <br />
        Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год,
        либо нажав на месяц/год в шапке календаря
      </T>
    </WrapperHorizontal>
  );
};

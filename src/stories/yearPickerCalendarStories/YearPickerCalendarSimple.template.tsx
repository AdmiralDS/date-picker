import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { YearPickerCalendarProps } from '@admiral-ds/date-picker';
import { YearPickerCalendar } from '#src/components/YearPickerCalendar';
import { WrapperHorizontal } from '#src/stories/common.tsx';

export const YearPickerCalendarSimpleTemplate = (props: YearPickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <WrapperHorizontal>
      <YearPickerCalendar {...props} onClick={handleClick} />
      <T font="Body/Body 2 Long" as="div">
        Выбор года.
        <br />
        Цифры в шапке календаря не активны и отображают текущий временной интервал. Стрелки влево-вправо позволяют
        менять отображаемый интервал на 20 лет назад/вперед.
      </T>
    </WrapperHorizontal>
  );
};

import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import { MonthPickerCalendar } from '#lib/MonthPickerCalendar';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const MonthPickerCalendarSimpleTemplate = () => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <WrapperHorizontal>
      <MonthPickerCalendar onClick={handleClick} />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор месяца
        </T>
        <T font="Body/Body 2 Long" as="div">
          Клик на год открывает экран выбора года. Вернуться на экран выбора месяца можно выбрав год, либо нажав на год
          в шапке календаря.
          <br />
          <br />
          Стрелки влево-вправо позволяют менять год.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { MonthPickerCalendarProps } from '@admiral-ds/date-picker';
import { MonthPickerCalendar } from '#src/components/MonthPickerCalendar';
import { WrapperHorizontal } from '#src/stories/common.tsx';

export const MonthPickerCalendarSimpleTemplate = (props: MonthPickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <WrapperHorizontal>
      <MonthPickerCalendar {...props} onClick={handleClick} />
      <T font="Body/Body 2 Long" as="div">
        Выбор месяца и года.
        <br />
        Клик на год открывает экран выбора года. Вернуться на экран выбора месяца можно выбрав год, либо нажав на год в
        шапке календаря.
        <br />
        Стрелки влево-вправо позволяют менять год.
      </T>
    </WrapperHorizontal>
  );
};

import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { YearRangePickerCalendarProps } from '@admiral-ds/date-picker';
import { YearRangePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const YearRangePickerCalendarSimpleTemplate = (props: YearRangePickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <WrapperHorizontal>
      <YearRangePickerCalendar {...props} onClick={handleClick} />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор диапазона лет
        </T>
        <T font="Body/Body 2 Long" as="div">
          При первом клике на год он выделяется синим. Далее ведем курсор ко второму году, годы автоматически
          закрашиваются во всем диапазоне до года под курсором.
          <br />
          При клике на второй год он также выделяется синим. Диапазон лет выбран.
          <br />
          <br />
          Стрелки влево-вправо позволяют менять временной интервал.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

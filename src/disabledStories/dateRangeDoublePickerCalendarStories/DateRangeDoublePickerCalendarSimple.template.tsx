import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import { DateRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const DateRangeDoublePickerCalendarSimpleTemplate = () => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <WrapperHorizontal>
      <DateRangeDoublePickerCalendar
        onClick={handleClick}
        //defaultSelectedDateRangeValue={['2023-10-01T12:00:00Z', '2024-07-01T12:00:00Z']}
      />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор диапазона дат
        </T>
        <T font="Body/Body 2 Long" as="div">
          Части сдвоенного календаря ведут себя независимо, то есть при взаимодействии с одной его частью, вторая не
          меняется. Первый пункт работает до тех пор, пока левая часть «младше» правой.
          <br />
          <br />В случае, когда мы меняем правую часть так, что выбранный в ней месяц года «младше», чем в левой части,
          то левая часть подстраивается, отображая месяц стоящий перед тем, который в правой. И наоборот.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

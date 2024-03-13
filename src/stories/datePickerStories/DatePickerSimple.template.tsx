import type { MouseEventHandler } from 'react';
import { maskitoDateOptionsGenerator, maskitoDateRangeOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { T } from '@admiral-ds/react-ui';
import { InputBox, InputLine, Separator } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

const dateOptions = maskitoDateOptionsGenerator({ mode: 'dd/mm/yyyy' });
const dateRangeOptions = maskitoDateRangeOptionsGenerator({ mode: 'dd/mm/yyyy' });

export const DatePickerSimpleTemplate = (props) => {
  const maskedDateInputRef = useMaskito({ options: dateOptions });
  const maskedDateRangeInputRef = useMaskito({ options: dateRangeOptions });
  const maskedStartDateInputRef = useMaskito({ options: dateOptions });
  const maskedEndDateInputRef = useMaskito({ options: dateOptions });
  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <InputBox>
          <InputLine ref={maskedDateInputRef} placeholder="дд.мм.гггг" />
        </InputBox>
        <InputBox data-size="xl">
          <InputLine ref={maskedDateRangeInputRef} placeholder="дд.мм.гггг - дд.мм.гггг" />
        </InputBox>
        <InputBox data-size="s">
          <InputLine ref={maskedStartDateInputRef} placeholder="дд.мм.гггг" />
          <Separator> – </Separator>
          <InputLine ref={maskedEndDateInputRef} placeholder="дд.мм.гггг" />
        </InputBox>
      </WrapperVertical>

      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор даты
        </T>
        <T font="Body/Body 2 Long" as="div">
          Высота календаря постоянна и состоит из шести рядов чисел. Текущий месяц начинается с первого ряда и, если его
          даты не заходят на шестой ряд, то там ставятся пустые ячейки (Empty).
          <br />
          <br />
          Текущая дата выделяется обводкой в виде черного кружка. Ховер на дате подсвечивается обводкой синего цвета.
          Выбранная дата отмечается синим кружком.
          <br />
          При ховере на месяце, годе, стрелках вправо/влево появляются тултипы с подсказками.
          <br />
          <br />
          Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год,
          либо нажав на месяц/год в шапке календаря
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

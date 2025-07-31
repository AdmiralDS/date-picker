import { T } from '@admiral-ds/react-ui';
import { DateRangePicker } from '@admiral-ds/date-picker';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { useState } from 'react';

const defaultInputStartProps = {
  placeholder: 'дд.мм.гггг',
  dataPlaceholder: 'дд.мм.гггг',
  value: '',
};
const defaultInputEndProps = {
  placeholder: 'дд.мм.гггг',
  dataPlaceholder: 'дд.мм.гггг',
  value: '',
};

export const DateRangePickerSimpleTemplate = () => {
  const [inputStartValue, setInputStartValue] = useState(defaultInputStartProps.value);
  const [inputEndValue, setInputEndValue] = useState(defaultInputEndProps.value);
  const dateOptions = maskitoDateOptionsGenerator({ mode: 'dd/mm/yyyy' });
  const maskedDateInputStartRef = useMaskito({ options: dateOptions });
  const maskedDateInputEndRef = useMaskito({ options: dateOptions });

  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <DateRangePicker
          inputPropsStart={{
            ...defaultInputStartProps,
            value: inputStartValue,
            onInput: (e) => setInputStartValue(e.currentTarget.value),
            ref: maskedDateInputStartRef,
          }}
          inputPropsEnd={{
            ...defaultInputEndProps,
            value: inputEndValue,
            onInput: (e) => setInputEndValue(e.currentTarget.value),
            ref: maskedDateInputEndRef,
          }}
        />
      </WrapperVertical>

      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор диапазона дат
        </T>
        <T font="Body/Body 2 Long" as="div">
          Высота календаря постоянна и состоит из шести рядов чисел. Текущий месяц начинается с первого ряда и, если его
          даты не заходят на шестой ряд, то там ставятся пустые ячейки (Empty).
          <br />
          <br />
          Текущая дата выделяется обводкой в виде черного кружка. Ховер на дате подсвечивается обводкой синего цвета.
          Выбранная дата отмечается синим кружком.
          <br />
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

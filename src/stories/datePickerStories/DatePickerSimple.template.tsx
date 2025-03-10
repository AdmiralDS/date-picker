import { T } from '@admiral-ds/react-ui';
import { DatePicker } from '@admiral-ds/date-picker';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { useState } from 'react';

const dateOptions = maskitoDateOptionsGenerator({ mode: 'dd/mm/yyyy' });

const defaultInputProps = {
  placeholder: 'Введите дату',
  dataPlaceholder: 'дд.мм.гггг',
  value: '11.',
};

export const DatePickerSimpleTemplate = () => {
  const [inputValue, setInputValue] = useState(defaultInputProps.value);
  const maskedDateInputRef = useMaskito({ options: dateOptions });
  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <DatePicker
          inputProps={{
            ...defaultInputProps,
            value: inputValue,
            onInput: (e) => setInputValue(e.currentTarget.value),
            ref: maskedDateInputRef,
          }}
        />
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

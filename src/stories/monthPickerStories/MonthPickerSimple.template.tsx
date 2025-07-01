import { T } from '@admiral-ds/react-ui';
import { MonthPicker } from '@admiral-ds/date-picker';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { useState } from 'react';

const dateOptions = maskitoDateOptionsGenerator({ mode: 'mm/yyyy' });

const defaultInputProps = {
  placeholder: 'Введите дату',
  dataPlaceholder: 'мм.гггг',
  value: '1',
};

const monthArray = new Array(9).fill({});

export const MonthPickerSimpleTemplate = () => {
  const [inputValue, setInputValue] = useState(defaultInputProps.value);
  const maskedDateInputRef = useMaskito({ options: dateOptions });
  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <MonthPicker
          monthsModel={monthArray}
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
          Выбор месяца
        </T>
        <T font="Body/Body 2 Long" as="div">
          Высота календаря постоянна и состоит из четырех рядов месяцев или пяти рядов лет.
          <br />
          <br />
          Текущая дата выделяется обводкой в виде черного кружка. Ховер на дате подсвечивается обводкой синего цвета.
          Выбранная дата отмечается синим кружком.
          <br />
          При ховере на месяце, годе, стрелках вправо/влево появляются тултипы с подсказками.
          <br />
          <br />
          Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора месяца можно выбрав год, либо
          нажав на год в шапке календаря.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

import { T } from '@admiral-ds/react-ui';
import { MonthRangePicker } from '@admiral-ds/date-picker';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { useState } from 'react';

const defaultInputStartProps = {
  placeholder: 'мм.гггг',
  dataPlaceholder: 'мм.гггг',
  value: '',
};
const defaultInputEndProps = {
  placeholder: 'мм.гггг',
  dataPlaceholder: 'мм.гггг',
  value: '',
};

export const MonthRangePickerSimpleTemplate = () => {
  const [inputStartValue, setInputStartValue] = useState(defaultInputStartProps.value);
  const [inputEndValue, setInputEndValue] = useState(defaultInputEndProps.value);
  const dateOptions = maskitoDateOptionsGenerator({ mode: 'mm/yyyy' });
  const maskedDateInputStartRef = useMaskito({ options: dateOptions });
  const maskedDateInputEndRef = useMaskito({ options: dateOptions });

  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <MonthRangePicker
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
          Выбор диапазона месяцев
        </T>
        <T font="Body/Body 2 Long" as="div">
          Текущий месяц выделяется обводкой в виде черного кружка. Ховер на месяце подсвечивается обводкой синего цвета.
          Выбранный месяц отмечается синим кружком.
          <br />
          <br />
          При ховере на годе, стрелках вправо/влево появляются тултипы с подсказками.
          <br />
          <br />
          Клик на год открывает экран выбора месяца/года. Вернуться на экран выбора месяца можно выбрав год, либо нажав
          на год в шапке календаря
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

import { T } from '@admiral-ds/react-ui';
import { YearRangePicker } from '@admiral-ds/date-picker';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { useState } from 'react';

const defaultInputStartProps = {
  placeholder: 'гггг',
  dataPlaceholder: 'гггг',
  value: '',
};
const defaultInputEndProps = {
  placeholder: 'гггг',
  dataPlaceholder: 'гггг',
  value: '',
};

export const YearRangePickerSimpleTemplate = () => {
  const [inputStartValue, setInputStartValue] = useState(defaultInputStartProps.value);
  const [inputEndValue, setInputEndValue] = useState(defaultInputEndProps.value);
  const dateOptions = maskitoDateOptionsGenerator({ mode: 'yyyy' });
  const maskedDateInputStartRef = useMaskito({ options: dateOptions });
  const maskedDateInputEndRef = useMaskito({ options: dateOptions });

  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <YearRangePicker
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
          Выбор диапазона лет
        </T>
        <T font="Body/Body 2 Long" as="div">
          Текущий год выделяется обводкой в виде черного кружка. Ховер на годе подсвечивается обводкой синего цвета.
          Выбранный год отмечается синим кружком.
          <br />
          <br />
          При ховере на стрелках вправо/влево появляются тултипы с подсказками.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

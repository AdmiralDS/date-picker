import { T } from '@admiral-ds/react-ui';
import { YearPicker } from '@admiral-ds/date-picker';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { useState } from 'react';

const dateOptions = maskitoDateOptionsGenerator({ mode: 'yyyy' });

const defaultInputProps = {
  placeholder: 'Введите год',
  dataPlaceholder: 'гггг',
};

const yearsArray = Array.from(Array(20).keys());

const yearModel = yearsArray.map((_, i) => {
  return { 'data-testid': `test-cell-${i}` };
});

export const YearPickerSimpleTemplate = () => {
  const [inputValue, setInputValue] = useState('');
  const maskedDateInputRef = useMaskito({ options: dateOptions });

  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <YearPicker
          yearModel={yearModel}
          iconButtonPropsConfig={(p) => ({ ...p, role: 'iconButton' })}
          prevButtonPropsConfig={(p) => ({ ...p, role: 'prevButtonNavigationPanel' })}
          nextButtonPropsConfig={(p) => ({ ...p, role: 'nextButtonNavigationPanel' })}
          inputProps={{
            ...defaultInputProps,
            value: inputValue,
            onInput: (e) => setInputValue(e.currentTarget.value),
            ref: maskedDateInputRef,
          }}
          inputPropsConfig={(props) => ({
            ...props,
            'data-testid': 'inputYear',
          })}
          yearsWidgetContainerPropsConfig={(props) => ({ ...props, 'data-testid': 'containerCells' })}
        />
      </WrapperVertical>

      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор года
        </T>
        <T font="Body/Body 2 Long" as="div">
          Высота календаря постоянна и состоит из пяти рядов лет.
          <br />
          <br />
          Текущая дата выделяется обводкой в виде черного кружка. Ховер на дате подсвечивается обводкой синего цвета.
          Выбранная дата отмечается синим кружком.
          <br />
          При ховере на годе, стрелках вправо/влево появляются тултипы с подсказками.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

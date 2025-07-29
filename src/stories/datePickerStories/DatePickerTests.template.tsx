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

const YEARS_ON_SCREEN = 20;

const datesArray = new Array(42).fill({});
const datesModel = datesArray.map((_, i) => {
  return { 'data-testid': `date-cell-${i}` };
});

const monthsArray = new Array(12).fill({});
const monthsModel = monthsArray.map((_, i) => {
  return { 'data-testid': `month-cell-${i}` };
});

const yearsArray = new Array(YEARS_ON_SCREEN).fill({});
const yearsModel = yearsArray.map((_, i) => {
  return { 'data-testid': `year-cell-${i}` };
});

export const DatePickerTestsTemplate = () => {
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
          datesModel={datesModel}
          monthsModel={monthsModel}
          yearsModel={yearsModel}
          yearsOnScreen={YEARS_ON_SCREEN}
          datesWidgetContainerPropsConfig={(p) => ({ ...p, 'data-testid': 'datesWidgetContainer' })}
          iconButtonPropsConfig={(p) => ({ ...p, role: 'iconButton' })}
          prevButtonPropsConfig={(p) => ({ ...p, role: 'prevButtonNavigationPanel' })}
          nextButtonPropsConfig={(p) => ({ ...p, role: 'nextButtonNavigationPanel' })}
          monthNavigationButtonPropsConfig={(p) => ({ ...p, role: 'monthButtonNavigationPanel' })}
          yearNavigationButtonPropsConfig={(p) => ({ ...p, role: 'yearButtonNavigationPanel' })}
          inputPropsConfig={(p) => ({ ...p, 'data-testid': 'input' })}
          yearsWidgetContainerPropsConfig={(p) => ({ ...p, 'data-testid': 'containerYearCells' })}
          monthsWidgetContainerPropsConfig={(p) => ({ ...p, 'data-testid': 'containerMonthCells' })}
        />
      </WrapperVertical>

      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Тесты
        </T>
        <T font="Body/Body 2 Long" as="div">
          Если рандомный год равен текущему году и рандомный месяц находится в диапазоне +-3 от текущего месяца на
          навигационной панели, то поиск месяца происходит в режиме отображения дней.
        </T>
        <T font="Body/Body 2 Long" as="div">
          Иначе если рандомный год находится в диапазоне +-4 от текущего года на навигационной панели, то поиск года
          происходит в режиме отображения месяцев, иначе включается режим отображения диапазона лет и поиск происходит
          там
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

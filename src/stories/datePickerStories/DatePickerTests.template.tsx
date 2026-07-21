import { useState } from 'react';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { T } from '@admiral-ds/react-ui';
import { DatePicker } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

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
          Описание
        </T>
        <T font="Body/Body 2 Long" as="div">
          <T font="Subtitle/Subtitle 3" as="div">
            Первый тест
          </T>
          Год равен текущему году, месяц и день случайные.
          <br />
          Поиск месяца происходит в режиме отображения дней с помощью стрелок на навигационной панели.
        </T>
        <T font="Body/Body 2 Long" as="div">
          <T font="Subtitle/Subtitle 3" as="div">
            Второй тест
          </T>
          Случайный год находится в диапазоне +-4 от текущего года, месяц и день случайные.
          <br />
          Поиск года происходит в режиме отображения месяцев с помощью стрелок на навигационной панели.
        </T>
        <T font="Body/Body 2 Long" as="div">
          <T font="Subtitle/Subtitle 3" as="div">
            Третий тест
          </T>
          Случайный год находится в диапазоне от 2000 до 2080, месяц и день случайные.
          <br />
          Поиск года происходит через режим отображения диапазона лет.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

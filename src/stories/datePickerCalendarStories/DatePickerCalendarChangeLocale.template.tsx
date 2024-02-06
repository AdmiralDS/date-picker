import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import 'dayjs/locale/es';

import { Button, T } from '@admiral-ds/react-ui';
import type { DatePickerCalendarProps, CalendarLocaleProps } from '@admiral-ds/date-picker';
import { DatePickerCalendar, enLocale, ruLocale } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

const esLocale: CalendarLocaleProps = {
  localeName: 'es',
  localeText: {
    backwardText: 'Atrás',
    forwardText: 'Adelante',
    nextMonthText: 'El mes que viene',
    previousMonthText: 'El mes anterior',
    returnText: 'Salir',
    selectYearText: 'Seleccionar un año',
    selectMonthText: 'Seleccionar un mes',
  },
};

export const DatePickerCalendarChangeLocaleTemplate = (props: DatePickerCalendarProps) => {
  const [locale, setLocale] = useState(esLocale);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  const handleButtonClick = () => {
    switch (locale.localeName) {
      case 'ru':
        setLocale(esLocale);
        break;
      case 'es':
        setLocale(enLocale);
        break;
      case 'en':
        setLocale(ruLocale);
        break;
    }
  };

  return (
    <WrapperHorizontal>
      <DatePickerCalendar {...props} onClick={handleClick} locale={locale} />
      <WrapperVertical>
        <T font="Body/Body 2 Long" as="div">
          По умолчанию в календаре используется русская локализация, также есть английский вариант. Если требуется
          использовать другой язык, необходимо импортировать его из dayjs, а также добавить объект для локализации
          подписей к кнопкам панели.
          <br />
          <br />
          Остальные параметры (такие как первый день недели, названия месяцев и дней недели и т.п.) контроллируются с
          помощью локализации, предоставляемой библиотекой dayjs.
        </T>
        <Button onClick={handleButtonClick}>Переключить локаль</Button>
        <T font="Body/Body 1 Long" as="div">
          {locale.localeName}
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

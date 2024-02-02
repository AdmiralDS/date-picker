import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

import type { DatePickerCalendarProps } from '@admiral-ds/date-picker';
import { DatePickerCalendar } from '@admiral-ds/date-picker';
import type { DateAttributes } from '#src/components/DefaultCell';
import type { CalendarLocaleProps } from '#src/components/calendarInterfaces.ts';
import { Button, T } from '@admiral-ds/react-ui';
import { enLocale, ruLocale } from '#src/components/calendarConstants.ts';
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
  const dateAttrs: (date: Dayjs) => DateAttributes = (date: Dayjs) => {
    return { disabled: date.isBefore(dayjs()), isHoliday: date.day() === 0 || date.day() === 6 };
  };

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
      <DatePickerCalendar {...props} onClick={handleClick} dateAttributes={dateAttrs} locale={locale} />
      <WrapperVertical>
        <T font="Body/Body 2 Long" as="div">
          По умолчанию в календаре используется русская локализация, также есть английский вариант. Если требуется
          использовать другой язык, необходимо импортировать его из dayjs, а также добавить объект для локализации
          подписей к кнопкам панели. Остальные параметры (такие как первый день недели, названия месяцев и дней недели и
          т.п.) контроллируются с помощью локализации, предоставляемой библиотекой dayjs.
        </T>
        <Button onClick={handleButtonClick}>Переключить локаль</Button>
        <T font="Body/Body 1 Long" as="div">
          {locale.localeName}
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

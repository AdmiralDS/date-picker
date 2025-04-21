import { T, Select, Option } from '@admiral-ds/react-ui';
import { MonthPicker, enLocale, ruLocale } from '@admiral-ds/date-picker';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';
import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

const defaultInputProps = {
  placeholder: 'Введите дату',
  dataPlaceholder: 'мм.гггг',
  value: '1',
};

const locales = [
  { label: 'Русский', value: 'ru-RU', placeholder: 'Введите дату', dataPlaceholder: 'мм.гггг' },
  { label: 'English', value: 'en-US', placeholder: 'Enter the date', dataPlaceholder: 'yyyy-mm' },
];

const getDefaultFormatter = (locale: string) => {
  return locale === 'en-US' ? (date: Dayjs) => date.format('YYYY-MM') : (date: Dayjs) => date.format('MM.YYYY');
};

const getDefaultParcer = (locale: string) => {
  return locale === 'en-US' ? (date?: string) => dayjs(date, 'YYYY-MM') : (date?: string) => dayjs(date, 'MM.YYYY');
};

const getDateOptions = (locale: string) => {
  return locale === 'ru-RU'
    ? maskitoDateOptionsGenerator({ mode: 'mm/yyyy', separator: '.' })
    : maskitoDateOptionsGenerator({ mode: 'yyyy/mm', separator: '-' });
};

export const MonthPickerChangeLocaleTemplate = () => {
  const [inputProps, setInputProps] = useState(defaultInputProps);
  const [inputValue, setInputValue] = useState(inputProps.value);
  const [locale, setLocale] = useState(locales[0].value);
  const maskedDateInputRef = useMaskito({ options: getDateOptions(locale) });

  const [calendarLocale, setCalendarLocale] = useState(ruLocale);
  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value);
    setInputProps(locales.find((loc) => loc.value === e.target.value) || locales[0]);
    switch (e.target.value) {
      case 'ru-RU':
        setCalendarLocale(ruLocale);
        break;
      case 'en-US':
        setCalendarLocale(enLocale);
        break;
    }
  };

  const formatter = getDefaultFormatter(locale);
  const parcer = getDefaultParcer(locale);

  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <MonthPicker
          inputProps={{
            ...inputProps,
            value: inputValue,
            onInput: (e) => setInputValue(e.currentTarget.value),
            ref: maskedDateInputRef,
          }}
          format={formatter}
          parce={parcer}
          Calendarlocale={calendarLocale}
        />
      </WrapperVertical>

      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор локали
        </T>
        <Select onChange={handleLocaleChange} value={locale}>
          {locales.map((loc) => (
            <Option key={loc.value} value={loc.value}>
              {loc.label}
            </Option>
          ))}
        </Select>
        <T font="Body/Body 2 Long" as="div">
          Выбор локали даты из выпадающего списка позволяет изменять формат отображения даты (регулируется маской из
          библиотеки maskito) и локаль календаря с остальными параметрами (такие как первый день недели, названия
          месяцев и дней недели и т.п.) контроллируются с помощью локализации, предоставляемой библиотекой dayjs.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

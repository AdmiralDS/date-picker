import { T, Select, Option } from '@admiral-ds/react-ui';
import { YearPicker, enLocale, ruLocale } from '@admiral-ds/date-picker';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';
import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

const defaultInputProps = {
  placeholder: 'Введите год',
  dataPlaceholder: 'гггг',
  value: '2',
};

const locales = [
  { label: 'Русский', value: 'ru-RU', placeholder: 'Введите год', dataPlaceholder: 'гггг' },
  { label: 'English (US)', value: 'en-US', placeholder: 'Enter the year', dataPlaceholder: 'yyyy' },
];

const getDefaultFormatter = () => {
  return (date: Dayjs) => date.format('YYYY');
};

const getDefaultParser = () => {
  return (date?: string) => dayjs(date, 'YYYY');
};

const getDateOptions = (locale: string) => {
  return locale === 'ru-RU'
    ? maskitoDateOptionsGenerator({ mode: 'yyyy', separator: '.' })
    : maskitoDateOptionsGenerator({ mode: 'yyyy', separator: '/' });
};

export const YearPickerChangeLocaleTemplate = () => {
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

  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <YearPicker
          inputProps={{
            ...inputProps,
            value: inputValue,
            onInput: (e) => setInputValue(e.currentTarget.value),
            ref: maskedDateInputRef,
          }}
          format={getDefaultFormatter()}
          parse={getDefaultParser()}
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
          библиотеки maskito) и локаль календаря с остальными параметрами (подсказки при hover) контроллируются с
          помощью локализации, предоставляемой библиотекой dayjs.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

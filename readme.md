# @admiral-ds/date-picker

Библиотека, реализующая календарь и поле ввода дат, основанная на дизайн-системе Admiral 2.1.

Документация компонентов и интерактивные примеры доступны в [Storybook](https://admiralds.github.io/date-picker/).

## Содержимое

- [Соглашения и внесение изменений](CONTRIBUTING.md)
- [Установка](#установка)
- [Подключение](#подключение)
- [DatePicker](#datepicker)
- [DatePickerCalendar](#datepickercalendar)

## Установка

Установите пакет:

```shell
npm install @admiral-ds/date-picker
```

Для работы `@admiral-ds/date-picker` требуются следующие peer-зависимости:

| Пакет                  | Поддерживаемые версии  |
| ---------------------- | ---------------------- |
| `@admiral-ds/react-ui` | `^8.0.0`               |
| `@admiral-ds/web`      | `^0.0.4`               |
| `@admiral-ds/fonts`    | `^2.0.0`               |
| `@admiral-ds/icons`    | `^4.3.3`               |
| `dayjs`                | `^1.11.0`              |
| `react`                | `^17.0.0 \|\| ^18.0.0` |
| `react-dom`            | `^17.0.0 \|\| ^18.0.0` |
| `styled-components`    | `^6.1.0`               |

Если они ещё не установлены в приложении, добавьте их отдельно:

```shell
npm install @admiral-ds/react-ui@^8 @admiral-ds/web@^0.0.4 @admiral-ds/fonts@^2 @admiral-ds/icons@^4.3.3 dayjs@^1.11 react@^18 react-dom@^18 styled-components@^6.1
```

## Подключение

Компоненты используют тему, шрифты и контейнер выпадающих элементов Admiral. Подключите `ThemeProvider`, `FontsVTBGroup`, `DropdownProvider` и CSS-тему `@admiral-ds/web` в корне приложения:

```tsx
// main.tsx
import { useEffect, type PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { DropdownProvider, FontsVTBGroup, LIGHT_THEME } from '@admiral-ds/react-ui';
import { lightThemeClassName } from '@admiral-ds/web';

import App from './App';
import './index.css';

function AdmiralProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const classNames = lightThemeClassName.split(' ');
    document.body.classList.add(...classNames);

    return () => document.body.classList.remove(...classNames);
  }, []);

  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        {children}
      </DropdownProvider>
    </ThemeProvider>
  );
}

export function Root() {
  return (
    <AdmiralProvider>
      <App />
    </AdmiralProvider>
  );
}
```

## DatePicker

Для маскированного ввода даты используйте Maskito:

```shell
npm install @maskito/core@^3 @maskito/kit@^3 @maskito/react@^3
```

```tsx
import { useState } from 'react';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';
import { DatePicker } from '@admiral-ds/date-picker';

const dateMask = maskitoDateOptionsGenerator({ mode: 'dd/mm/yyyy' });

function App() {
  const [value, setValue] = useState('');
  const inputRef = useMaskito({ options: dateMask });

  return (
    <DatePicker
      inputProps={{
        ref: inputRef,
        value,
        placeholder: 'Введите дату',
        dataPlaceholder: 'дд.мм.гггг',
        onInput: (event) => setValue(event.currentTarget.value),
      }}
    />
  );
}
```

## DatePickerCalendar

Календарь можно использовать отдельно от поля ввода:

```tsx
import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import { DatePickerCalendar } from '@admiral-ds/date-picker';

function CalendarExample() {
  const [selectedDate, setSelectedDate] = useState<Dayjs>();

  return <DatePickerCalendar selectedDateValue={selectedDate} onSelectedDateValueChange={setSelectedDate} />;
}
```

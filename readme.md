# @admiral-ds/date-picker

Библиотека, реализующая календарь и поле ввода дат, основанная на дизайн-системе Admiral 2.1

## Содержимое

- [Соглашения и внесение изменений](CONTRIBUTING.md)
- [Установка](#Установка)
- [Подключение](#Подключение)

## Установка

@admiral-ds/react-ui требует зависимостей :

1. `styled-components > 6.1.0`
2. `react > 17.0.0`
3. `react-dom > 17.0.0`
4. `dayjs > 1.11.0`

```shell
npm install @admiral-ds/date-picker
```

## Подключение

Для правильной работы @admiral-ds/date-picker требуется использовать `<ThemeProvider>`, `<FontsVTBGroup />` и `<DropdownProvider>`, их **рекомендуется** подключать в корне проекта:

main.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        <App />
      </DropdownProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
```

```jsx
import React from "react";
import { DatePickerCalendar} from "@admiral-ds/date-picker";

function App() {
  const handleClick = (e) => {
    const clickedCell = e.target.dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <div>
      <DatePickerCalendar onClick={handleClick} />
    </div>
  );
}

export default App;
```

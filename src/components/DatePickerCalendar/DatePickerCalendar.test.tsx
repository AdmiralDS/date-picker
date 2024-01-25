import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import type { Dayjs } from 'dayjs';

import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { DatePickerCalendar } from '@admiral-ds/date-picker';
import type { DateAttributes } from '#src/components/DefaultCell';

describe('DatePickerCalendar', () => {
  const dateAttrs: (date: Dayjs) => DateAttributes = (date: Dayjs) => {
    return { disabled: date.day() === 6 || date.date() < 5 };
  };
  test('should render component', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DatePickerCalendar dateAttributes={dateAttrs} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

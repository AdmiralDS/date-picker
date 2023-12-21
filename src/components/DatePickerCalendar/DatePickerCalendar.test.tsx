import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import type { Dayjs } from 'dayjs';

import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { DatePickerCalendar } from '@admiral-ds/date-picker';

describe('DatePickerCalendar', () => {
  const disabledDate = (currentDate: Dayjs) => {
    if (!currentDate) return false;
    return currentDate.day() === 6 || currentDate.date() < 5;
  };
  test('should render component', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DatePickerCalendar disabledDate={disabledDate} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

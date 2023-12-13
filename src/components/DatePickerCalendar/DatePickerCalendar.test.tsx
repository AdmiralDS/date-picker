import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import dayjs from 'dayjs';

import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { DatePickerCalendar } from '@admiral-ds/date-picker';

describe('DatePickerCalendar', () => {
  const disabledDate = (currentDate: string) => {
    const dateCurrent = dayjs(currentDate);
    if (!dateCurrent) return false;
    return dateCurrent.day() === 6 || dateCurrent.date() < 5;
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

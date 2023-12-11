import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { DatePickerCalendar } from '@admiral-ds/date-picker';

describe('DatePickerCalendar', () => {
  test('should render component', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DatePickerCalendar />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { MonthPickerCalendar } from '@admiral-ds/date-picker';

describe('MonthPickerCalendar', () => {
  test('should render component', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <MonthPickerCalendar />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

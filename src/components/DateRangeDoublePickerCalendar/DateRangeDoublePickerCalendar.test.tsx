import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { DateRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

describe('DateRangeDoublePickerCalendar', () => {
  test('should render component', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DateRangeDoublePickerCalendar />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { MonthRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

describe('MonthRangeDoublePickerCalendar', () => {
  test('should render component', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <MonthRangeDoublePickerCalendar />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

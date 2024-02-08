import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { YearRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

describe('YearRangeDoublePickerCalendar', () => {
  test('should render component', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <YearRangeDoublePickerCalendar />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

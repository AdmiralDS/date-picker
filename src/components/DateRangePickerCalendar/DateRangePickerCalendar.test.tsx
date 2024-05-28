import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { DateRangePickerCalendar } from '@admiral-ds/date-picker';

describe('DateRangePickerCalendar', () => {
  test('should render component', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DateRangePickerCalendar />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should render today date', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DateRangePickerCalendar />
      </ThemeProvider>,
    );
    expect(wrapper).toBeTruthy();
    const currentDateCell = wrapper.container.querySelector('[data-is-current-day-cell]');
    expect(currentDateCell?.getAttribute('data-value')).toBe(new Date().toISOString().substring(0, 10));
  });
});

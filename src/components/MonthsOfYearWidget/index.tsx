import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import { typography } from '@admiral-ds/react-ui';

import { getCurrentDate, getCurrentTimeZone } from '#src/components/utils';
import { MONTHS_OF_YEAR_WIDGET_WIDTH } from '#src/components/MonthsOfYearWidget/constants';
import { Months } from '#src/components/MonthsOfYearWidget/Months';
import type { BaseWidgetProps } from '#src/components/widgetInterfaces.ts';

export interface MonthsOfYearWidgetProps extends BaseWidgetProps {}

const MonthsOfYearWrapper = styled.div`
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
  width: ${MONTHS_OF_YEAR_WIDGET_WIDTH}px;
  margin: 28px 16px 36px 16px;
  ${typography['Body/Body 2 Long']}
`;

export const MonthsOfYearWidget = ({
  rangeCalendar = false,
  date,
  locale = 'ru',
  timezone,
  //timezone = getCurrentTimeZone(),
  onClick,
  cells,
  renderCell,
  ...props
}: MonthsOfYearWidgetProps) => {
  const localDate = date || getCurrentDate(locale, timezone);

  return (
    <MonthsOfYearWrapper {...props} onClick={onClick} data-container-type="monthsOfYearWrapper">
      <Months
        rangeCalendar={rangeCalendar}
        date={localDate}
        cells={cells}
        renderCell={renderCell}
        data-container-type="monthsWrapper"
      />
    </MonthsOfYearWrapper>
  );
};

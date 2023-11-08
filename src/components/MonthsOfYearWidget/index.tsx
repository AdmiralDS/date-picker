import styled from 'styled-components';
import 'dayjs/locale/ru';

import { typography } from '@admiral-ds/react-ui';

import { getCurrentTimeZone, getDayjsDate } from '#src/components/utils';
import type { MonthsOfYearWidgetProps } from '#src/components/MonthsOfYearWidget/interfaces';
import { MONTHS_OF_YEAR_WIDGET_WIDTH } from '#src/components/MonthsOfYearWidget/constants';
import { Months } from '#src/components/MonthsOfYearWidget/Months';

const MonthsOfYearWrapper = styled.div`
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
  width: ${MONTHS_OF_YEAR_WIDGET_WIDTH}px;
  margin-top: 28px;
  ${typography['Body/Body 2 Long']}
`;

export const MonthsOfYearWidget = ({
  date,
  locale = 'ru',
  timezone = getCurrentTimeZone(),
  onClick,
  renderMonthCell,
  ...props
}: MonthsOfYearWidgetProps) => {
  const localDate = getDayjsDate(locale, timezone, date);

  return (
    <MonthsOfYearWrapper {...props} onClick={onClick} data-container-type="monthsOfYearWrapper">
      <Months date={localDate} renderMonthCell={renderMonthCell} data-container-type="monthsWrapper" />
    </MonthsOfYearWrapper>
  );
};

import styled from 'styled-components';
import 'dayjs/locale/ru';

import { typography } from '@admiral-ds/react-ui';

import type { MonthsOfYearWidgetProps } from '#src/components/MonthsOfYearWidget/interfaces';
import { MONTHS_OF_YEAR_WIDGET_WIDTH } from '#src/components/MonthsOfYearWidget/constants';
import { Months } from '#src/components/MonthsOfYearWidget/Months';
import { dateStringToDayjs } from '#src/components/utils';
import dayjs from 'dayjs';

const MonthsOfYearWrapper = styled.div`
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
  width: ${MONTHS_OF_YEAR_WIDGET_WIDTH}px;
  ${typography['Body/Body 2 Long']}
`;

export const MonthsOfYearWidget = ({ date, onClick, ...props }: MonthsOfYearWidgetProps) => {
  const locale = 'ru';
  const localDate = dateStringToDayjs(date, locale) || dayjs().locale(locale);

  return (
    <MonthsOfYearWrapper {...props} onClick={onClick}>
      <Months date={localDate} locale={locale} />
    </MonthsOfYearWrapper>
  );
};

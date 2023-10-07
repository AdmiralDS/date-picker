import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import { typography } from '@admiral-ds/react-ui';

import { dateStringToDayjs } from '#src/components/Calendar/utils';
import type { DatesOfMonthProps } from '#src/components/Widgets/DatesOfMonthWidget/interfaces';
import { DATES_OF_MONTH_WIDGET_WIDTH } from '#src/components/Widgets/DatesOfMonthWidget/constants';
import { Days } from '#src/components/Widgets/DatesOfMonthWidget/Days';
import { Dates } from '#src/components/Widgets/DatesOfMonthWidget/Dates';

const DatesOfMonthWrapper = styled.div`
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
  width: ${DATES_OF_MONTH_WIDGET_WIDTH}px;
  ${typography['Body/Body 2 Long']}
`;

export const DatesOfMonthWidget = ({ date }: DatesOfMonthProps) => {
  const locale = 'ru';
  const localDate = dateStringToDayjs(date, locale) || dayjs().locale(locale);

  return (
    <DatesOfMonthWrapper>
      <Days locale={locale} />
      <Dates date={localDate} />
    </DatesOfMonthWrapper>
  );
};

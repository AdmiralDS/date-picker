import styled from 'styled-components';
import 'dayjs/locale/ru';

import { typography } from '@admiral-ds/react-ui';

import { getCurrentTimeZone, getDayjsDate } from '#src/components/utils';
import type { YearsOfTwentyYearsWidgetProps } from '#src/components/YearsOfTwentyYearsWidget/interfaces.tsx';
import { Years } from '#src/components/YearsOfTwentyYearsWidget/Years.tsx';
import { YEARS_OF_YEAR_WIDGET_WIDTH } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';

const YearsOfYearWrapper = styled.div`
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
  width: ${YEARS_OF_YEAR_WIDGET_WIDTH}px;
  margin-top: 28px;
  ${typography['Body/Body 2 Long']}
`;

export const YearsOfTwentyYearsWidget = ({
  date,
  locale = 'ru',
  timezone = getCurrentTimeZone(),
  onClick,
  renderYearCell,
  ...props
}: YearsOfTwentyYearsWidgetProps) => {
  const localDate = getDayjsDate(locale, timezone, date);

  return (
    <YearsOfYearWrapper {...props} onClick={onClick} data-container-type="yearsOfYearWrapper">
      <Years date={localDate} renderYearCell={renderYearCell} data-container-type="yearsWrapper" />
    </YearsOfYearWrapper>
  );
};

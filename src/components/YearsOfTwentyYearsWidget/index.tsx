import styled from 'styled-components';
import 'dayjs/locale/ru';

import { typography } from '@admiral-ds/react-ui';

import { getCurrentTimeZone, getDayjsDate } from '#src/components/utils';
import { Years } from '#src/components/YearsOfTwentyYearsWidget/Years.tsx';
import { YEARS_OF_YEAR_WIDGET_WIDTH } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import type { BaseWidgetProps } from '#src/components/widgetInterfaces.ts';

export interface YearsOfTwentyYearsWidgetProps extends BaseWidgetProps {}

const YearsOfYearWrapper = styled.div`
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
  width: ${YEARS_OF_YEAR_WIDGET_WIDTH}px;
  margin: 28px 22px 32px 22px;
  ${typography['Body/Body 2 Long']}
`;

export const YearsOfTwentyYearsWidget = ({
  rangeCalendar = false,
  date,
  locale = 'ru',
  timezone = getCurrentTimeZone(),
  onClick,
  renderCell,
  ...props
}: YearsOfTwentyYearsWidgetProps) => {
  const localDate = getDayjsDate(locale, timezone, date);

  return (
    <YearsOfYearWrapper {...props} onClick={onClick} data-container-type="yearsOfYearWrapper">
      <Years
        rangeCalendar={rangeCalendar}
        date={localDate}
        renderCell={renderCell}
        data-container-type="yearsWrapper"
      />
    </YearsOfYearWrapper>
  );
};

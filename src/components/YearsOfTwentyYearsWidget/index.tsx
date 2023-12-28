import styled from 'styled-components';
import 'dayjs/locale/ru';

import { typography } from '@admiral-ds/react-ui';

import { getCurrentDate } from '#src/components/utils';
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
  date,
  selected,
  active,
  locale = 'ru',
  renderCell,
  ...props
}: YearsOfTwentyYearsWidgetProps) => {
  const localDate = date || getCurrentDate(locale);

  return (
    <YearsOfYearWrapper {...props} data-container-type="yearsOfYearWrapper">
      <Years
        date={localDate}
        selected={selected}
        active={active}
        renderCell={renderCell}
        data-container-type="yearsWrapper"
      />
    </YearsOfYearWrapper>
  );
};

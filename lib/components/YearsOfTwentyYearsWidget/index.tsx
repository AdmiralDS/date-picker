import styled from 'styled-components';
import 'dayjs/locale/ru';

import { vars, textValues } from '@admiral-ds/web';

import { getCurrentDate } from '#lib/utils';
import { Years } from '#lib/YearsOfTwentyYearsWidget/Years.tsx';
import { YEARS_OF_YEAR_WIDGET_WIDTH } from '#lib/YearsOfTwentyYearsWidget/constants.ts';
import type { BaseWidgetProps } from '#lib/widgetInterfaces.ts';
import { ruLocale } from '#lib/calendarConstants.ts';

export interface YearsOfTwentyYearsWidgetProps extends BaseWidgetProps {}

const YearsOfYearWrapper = styled.div`
  background-color: ${vars.color.Special_ElevatedBG};
  width: ${YEARS_OF_YEAR_WIDGET_WIDTH}px;
  margin: 28px 22px 32px 22px;
  ${textValues['Body/Body 2 Long']}
`;

export const YearsOfTwentyYearsWidget = ({
  date,
  selected,
  active,
  activeRangeEnd,
  dateAttributes,
  locale = ruLocale,
  cell,
  range = false,
  ...props
}: YearsOfTwentyYearsWidgetProps) => {
  const localDate = date || getCurrentDate();

  return (
    <YearsOfYearWrapper {...props} data-container-type="yearsOfYearWrapper">
      <Years
        date={localDate}
        selected={selected}
        active={active}
        activeRangeEnd={activeRangeEnd}
        dateAttributes={dateAttributes}
        cell={cell}
        data-container-type="yearsWrapper"
        locale={locale}
        range={range}
      />
    </YearsOfYearWrapper>
  );
};

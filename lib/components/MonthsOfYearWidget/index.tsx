import styled from 'styled-components';
import 'dayjs/locale/ru';

import { vars, textValues } from '@admiral-ds/web';

import { getCurrentDate } from '#lib/utils';
import { MONTHS_OF_YEAR_WIDGET_WIDTH } from '#lib/MonthsOfYearWidget/constants';
import { Months } from '#lib/MonthsOfYearWidget/Months';
import type { BaseWidgetProps } from '#lib/widgetInterfaces.ts';
import { ruLocale } from '#lib/calendarConstants.ts';

export interface MonthsOfYearWidgetProps extends BaseWidgetProps {}

const MonthsOfYearWrapper = styled.div`
  background-color: ${vars.color.Special_ElevatedBG};
  width: ${MONTHS_OF_YEAR_WIDGET_WIDTH}px;
  margin: 28px 16px 36px 16px;
  ${textValues['Body/Body 2 Long']}
`;

export const MonthsOfYearWidget = ({
  date,
  selected,
  active,
  activeRangeEnd,
  dateAttributes,
  locale = ruLocale,
  cell,
  range,
  ...props
}: MonthsOfYearWidgetProps) => {
  const localDate = date || getCurrentDate(locale?.localeName);

  return (
    <MonthsOfYearWrapper {...props} data-container-type="monthsOfYearWrapper">
      <Months
        date={localDate}
        selected={selected}
        active={active}
        activeRangeEnd={activeRangeEnd}
        dateAttributes={dateAttributes}
        cell={cell}
        data-container-type="monthsWrapper"
        locale={locale}
        range={range}
      />
    </MonthsOfYearWrapper>
  );
};

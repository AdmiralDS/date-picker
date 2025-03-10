import styled from 'styled-components';
import 'dayjs/locale/ru';

import { vars, textValues } from '@admiral-ds/web';

import { getCurrentDate } from '#lib/utils';
import type { DatesOfMonthWidgetProps } from '#lib/DatesOfMonthWidget/interfaces';
import { DATES_OF_MONTH_WIDGET_WIDTH } from '#lib/DatesOfMonthWidget/constants';
import { Days } from '#lib/DatesOfMonthWidget/Days';
import { Dates } from '#lib/DatesOfMonthWidget/Dates';
import { ruLocale } from '#lib/calendarConstants.ts';

const DatesOfMonthWrapper = styled.div`
  background-color: ${vars.color.Special_ElevatedBG};
  width: ${DATES_OF_MONTH_WIDGET_WIDTH}px;
  margin: 12px 16px 16px 16px;
  ${textValues['Body/Body 2 Long']}
`;

export const DatesOfMonthWidget = ({
  date,
  selected,
  active,
  activeRangeEnd,
  dateAttributes,
  locale = ruLocale,
  dayNamesProps,
  cell,
  range,
  ...props
}: DatesOfMonthWidgetProps) => {
  const { dayNameCellState } = dayNamesProps;
  const localDate = date || getCurrentDate(locale?.localeName);

  return (
    <DatesOfMonthWrapper {...props} data-container-type="datesOfMonthWrapper">
      <Days locale={locale?.localeName} dayNameCellState={dayNameCellState} />
      <Dates
        date={localDate}
        selected={selected}
        active={active}
        activeRangeEnd={activeRangeEnd}
        dateAttributes={dateAttributes}
        cell={cell}
        data-container-type="datesWrapper"
        locale={locale}
        range={range}
      />
    </DatesOfMonthWrapper>
  );
};

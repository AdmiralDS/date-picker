import styled from 'styled-components';
import 'dayjs/locale/ru';

import { typography } from '@admiral-ds/react-ui';

import { getCurrentDate } from '#src/components/utils';
import type { DatesOfMonthWidgetProps } from '#src/components/DatesOfMonthWidget/interfaces';
import { DATES_OF_MONTH_WIDGET_WIDTH } from '#src/components/DatesOfMonthWidget/constants';
import { Days } from '#src/components/DatesOfMonthWidget/Days';
import { Dates } from '#src/components/DatesOfMonthWidget/Dates';

const DatesOfMonthWrapper = styled.div`
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
  width: ${DATES_OF_MONTH_WIDGET_WIDTH}px;
  margin: 12px 16px 16px 16px;
  ${typography['Body/Body 2 Long']}
`;

export const DatesOfMonthWidget = ({
  date,
  selected,
  active,
  activeRangeEnd,
  dateAttributes,
  locale = 'ru',
  dayNamesProps,
  cell,
  range,
  ...props
}: DatesOfMonthWidgetProps) => {
  const { dayNameCellState } = dayNamesProps;
  const localDate = date || getCurrentDate(locale);

  return (
    <DatesOfMonthWrapper {...props} data-container-type="datesOfMonthWrapper">
      <Days locale={locale} dayNameCellState={dayNameCellState} />
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

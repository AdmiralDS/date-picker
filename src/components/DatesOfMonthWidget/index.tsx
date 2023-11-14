import styled from 'styled-components';
import 'dayjs/locale/ru';

import { typography } from '@admiral-ds/react-ui';

import { getCurrentTimeZone, getDayjsDate } from '#src/components/utils';
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
  //onClick,
  locale = 'ru',
  timezone = getCurrentTimeZone(),
  dayNamesProps,
  renderDateCell,
  ...props
}: DatesOfMonthWidgetProps) => {
  const { dayNameCellState } = dayNamesProps;
  const localDate = getDayjsDate(locale, timezone, date);

  /*const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.disabled || target.dataset.hidden) {
      console.log(`click on disabled or hidden`);
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };*/

  return (
    <DatesOfMonthWrapper {...props} data-container-type="datesOfMonthWrapper">
      <Days locale={locale} dayNameCellState={dayNameCellState} />
      <Dates date={localDate} renderDateCell={renderDateCell} data-container-type="datesWrapper" />
    </DatesOfMonthWrapper>
  );
};

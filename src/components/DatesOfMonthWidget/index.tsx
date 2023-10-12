import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import { typography } from '@admiral-ds/react-ui';

import { dateStringToDayjs } from '#src/components/utils';
import type { DatesOfMonthWidgetProps } from '#src/components/DatesOfMonthWidget/interfaces';
import { DATES_OF_MONTH_WIDGET_WIDTH } from '#src/components/DatesOfMonthWidget/constants';
import { Days } from '#src/components/DatesOfMonthWidget/Days';
import { Dates } from '#src/components/DatesOfMonthWidget/Dates';

const DatesOfMonthWrapper = styled.div`
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
  width: ${DATES_OF_MONTH_WIDGET_WIDTH}px;
  margin-top: 12px;
  ${typography['Body/Body 2 Long']}
`;

export const DatesOfMonthWidget = ({ date, onClick, locale = 'ru', ...props }: DatesOfMonthWidgetProps) => {
  const { dateCellState } = props.datesProps;
  const { dayNameCellState } = props.dayNamesProps;
  const localDate = dateStringToDayjs(date, locale) || dayjs().locale(locale);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.disabled || target.dataset.hidden) {
      console.log(`click on disabled or hidden`);
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };

  return (
    <DatesOfMonthWrapper {...props} onClick={handleClick}>
      <Days locale={locale} dayNameCellState={dayNameCellState} />
      <Dates date={localDate} dateCellState={dateCellState} />
    </DatesOfMonthWrapper>
  );
};

import styled from 'styled-components';
import 'dayjs/locale/ru';

import { typography } from '@admiral-ds/react-ui';

import { DATES_OF_MONTH_WIDGET_WIDTH } from './constants';
import { Days } from './Days';
import { Dates } from './Dates';
import { ruLocale } from '#lib/calendarConstants.ts';
import type { FunctionComponent, HTMLAttributes } from 'react';
import type { Dayjs } from 'dayjs';
import type { DateAttributes } from '#lib/DefaultCell';
import type { CalendarLocaleProps, DateCellProps } from '#lib/calendarInterfaces';
import { baseDayNameCellMixin } from '#lib/DefaultCell/mixins';

const DatesOfMonthWrapper = styled.div`
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
  width: ${DATES_OF_MONTH_WIDGET_WIDTH}px;
  margin: 12px 16px 16px 16px;
  ${typography['Body/Body 2 Long']}
`;

const cellMixin = { cellMixin: baseDayNameCellMixin };
const getDayNameCellState = () => cellMixin;

export interface CalendarComponentProps extends HTMLAttributes<HTMLDivElement> {
  /** timestamp задает дату календаря для отображения месяца, по умолчанию отображается текущий месяц */
  displayMonthTimestamp?: number;
  selectedTimestamp?: number;
  activeTimestamp?: number;
  activeRangeEnd?: Dayjs;
  dateAttributes?: (currentDateTimestamp: number) => DateAttributes;
  cell?: FunctionComponent<DateCellProps>;
  locale?: CalendarLocaleProps;
  range?: boolean;
}

export const Calendar = ({
  selectedTimestamp,
  activeTimestamp,
  activeRangeEnd,
  dateAttributes,
  locale = ruLocale,
  cell,
  range,
  displayMonthTimestamp = Date.now(),
  ...props
}: CalendarComponentProps) => {
  return (
    <DatesOfMonthWrapper {...props} data-container-type="datesOfMonthWrapper">
      <Days locale={locale?.localeName} dayNameCellState={getDayNameCellState} />
      <Dates
        displayMonthTimestamp={displayMonthTimestamp}
        selectedTimestamp={selectedTimestamp}
        activeTimestamp={activeTimestamp}
        activeRangeEnd={activeRangeEnd}
        dateAttributes={dateAttributes}
        cell={cell}
        data-container-type="datesWrapper"
        range={range}
      />
    </DatesOfMonthWrapper>
  );
};

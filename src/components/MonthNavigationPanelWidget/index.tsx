import type { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { IconPlacement, typography } from '@admiral-ds/react-ui';
import ChevronLeftOutline from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg?react';
import ChevronRightOutline from '@admiral-ds/icons/build/system/ChevronRightOutline.svg?react';

import { capitalizeFirstLetter, getCurrentTimeZone, getDayjsDate } from '#src/components/utils';
import { CALENDAR_WIDTH } from '#src/components/calendarConstants';

export interface MonthNavigationPanelWidgetProps extends HTMLAttributes<HTMLElement> {
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
}

const MonthNavigationPanelWrapper = styled.div`
  box-sizing: border-box;
  width: ${CALENDAR_WIDTH}PX;
  height: 32px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
`;

const MonthYearWrapper = styled.div`
  display: flex;
  color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  ${typography['Subtitle/Subtitle 2']}
`;
const MonthWrapper = styled.div`
  padding: 4px 8px;
`;
const YearWrapper = styled.div`
  padding: 4px 8px;
`;

export const MonthNavigationPanelWidget = ({
  date,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  ...props
}: MonthNavigationPanelWidgetProps) => {
  const dateInner = getDayjsDate(locale, timezone, date);

  return (
    <MonthNavigationPanelWrapper {...props}>
      <IconPlacement dimension="lSmall" highlightFocus={false} data-panel-target-type="left">
        <ChevronLeftOutline />
      </IconPlacement>
      <MonthYearWrapper {...props}>
        <MonthWrapper data-panel-target-type="month">{capitalizeFirstLetter(dateInner.format('MMMM'))}</MonthWrapper>
        <YearWrapper data-panel-target-type="year">{dateInner.year()}</YearWrapper>
      </MonthYearWrapper>
      <IconPlacement dimension="lSmall" highlightFocus={false} data-panel-target-type="right">
        <ChevronRightOutline />
      </IconPlacement>
    </MonthNavigationPanelWrapper>
  );
};

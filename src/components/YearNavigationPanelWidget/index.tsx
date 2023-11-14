import type { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { IconPlacement, typography } from '@admiral-ds/react-ui';
import ChevronLeftOutline from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg?react';
import ChevronRightOutline from '@admiral-ds/icons/build/system/ChevronRightOutline.svg?react';

import { CALENDAR_WIDTH } from '#src/components/calendarConstants';
import { getCurrentTimeZone, getDayjsDate } from '#src/components/utils';

export interface YearNavigationPanelWidgetProps extends HTMLAttributes<HTMLElement> {
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
}

const YearNavigationPanelWrapper = styled.div`
  box-sizing: border-box;
  width: ${CALENDAR_WIDTH}PX;
  height: 32px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
`;

const YearWrapper = styled.div`
  padding: 4px 8px;
  color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  ${typography['Subtitle/Subtitle 2']}
`;

export const YearNavigationPanelWidget = ({
  date,
  locale = 'ru',
  timezone = getCurrentTimeZone(),
  ...props
}: YearNavigationPanelWidgetProps) => {
  const dateInner = getDayjsDate(locale, timezone, date);

  return (
    <YearNavigationPanelWrapper {...props}>
      <IconPlacement dimension="lSmall" highlightFocus={false} data-panel-target-type="left">
        <ChevronLeftOutline />
      </IconPlacement>
      <YearWrapper data-panel-target-type="year">{dateInner.year()}</YearWrapper>
      <IconPlacement dimension="lSmall" highlightFocus={false} data-panel-target-type="right">
        <ChevronRightOutline />
      </IconPlacement>
    </YearNavigationPanelWrapper>
  );
};

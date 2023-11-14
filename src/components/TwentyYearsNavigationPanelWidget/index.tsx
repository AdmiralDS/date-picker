import type { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { IconPlacement, typography } from '@admiral-ds/react-ui';
import ChevronLeftOutline from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg?react';
import ChevronRightOutline from '@admiral-ds/icons/build/system/ChevronRightOutline.svg?react';

import { CALENDAR_WIDTH } from '#src/components/calendarConstants';
import { getCurrentTimeZone, getDayjsDate, yearsRange } from '#src/components/utils';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';

export interface TwentyYearsNavigationPanelWidgetProps extends HTMLAttributes<HTMLElement> {
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
}

const TwentyYearsNavigationPanelWrapper = styled.div`
  box-sizing: border-box;
  width: ${CALENDAR_WIDTH}PX;
  height: 32px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
`;

const TwentyYearsWrapper = styled.div`
  padding: 4px 8px;
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  ${typography['Subtitle/Subtitle 2']}
`;

export const TwentyYearsNavigationPanelWidget = ({
  date,
  locale = 'ru',
  timezone = getCurrentTimeZone(),
  ...props
}: TwentyYearsNavigationPanelWidgetProps) => {
  const dateInner = getDayjsDate(locale, timezone, date);
  const { start, end } = yearsRange(dateInner, YEARS_ON_SCREEN);

  return (
    <TwentyYearsNavigationPanelWrapper {...props}>
      <IconPlacement dimension="lSmall" highlightFocus={false} data-panel-target-type="left">
        <ChevronLeftOutline />
      </IconPlacement>
      <TwentyYearsWrapper>{`${start}–${end}`}</TwentyYearsWrapper>
      <IconPlacement dimension="lSmall" highlightFocus={false} data-panel-target-type="right">
        <ChevronRightOutline />
      </IconPlacement>
    </TwentyYearsNavigationPanelWrapper>
  );
};

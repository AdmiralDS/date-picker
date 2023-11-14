import styled from 'styled-components';

import { IconPlacement } from '@admiral-ds/react-ui';
import ChevronLeftOutline from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg?react';
import ChevronRightOutline from '@admiral-ds/icons/build/system/ChevronRightOutline.svg?react';

import { getCurrentTimeZone, getDayjsDate } from '#src/components/utils';
import { CALENDAR_WIDTH } from '#src/components/calendarConstants';
import type { MonthNavigationPanelWidgetProps } from '#src/components/MonthNavigationPanelWidget/interfaces';
import { MonthYear } from '#src/components/MonthNavigationPanelWidget/MonthYear';

const MonthNavigationPanelWrapper = styled.div`
  box-sizing: border-box;
  width: ${CALENDAR_WIDTH}PX;
  height: 32px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
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
      <MonthYear date={dateInner} />
      <IconPlacement dimension="lSmall" highlightFocus={false} data-panel-target-type="right">
        <ChevronRightOutline />
      </IconPlacement>
    </MonthNavigationPanelWrapper>
  );
};

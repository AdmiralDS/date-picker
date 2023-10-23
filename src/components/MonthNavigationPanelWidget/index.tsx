import styled from 'styled-components';

import { IconPlacement } from '@admiral-ds/react-ui';
import { ReactComponent as ChevronLeftOutline } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

import { getCurrentTimeZone, getDayjsDate } from '#src/components/utils';
import { CALENDAR_WIDTH } from '#src/components/Calendar/constants';
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
      <IconPlacement dimension="lSmall" highlightFocus={false} data-direction="left">
        <ChevronLeftOutline />
      </IconPlacement>
      <MonthYear date={dateInner} />
      <IconPlacement dimension="lSmall" highlightFocus={false} data-direction="right">
        <ChevronRightOutline />
      </IconPlacement>
    </MonthNavigationPanelWrapper>
  );
};

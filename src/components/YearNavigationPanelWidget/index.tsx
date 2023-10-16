import type { YearNavigationPanelWidgetProps } from '#src/components/YearNavigationPanelWidget/interfaces';
import styled from 'styled-components';

import { IconPlacement, typography } from '@admiral-ds/react-ui';
import { ReactComponent as ChevronLeftOutline } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

import { CALENDAR_WIDTH } from '#src/components/Calendar/constants';
import { getCurrentTimeZone, getDayjsDate } from '#src/components/utils';

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
      <IconPlacement dimension="lSmall" highlightFocus={false} data-direction="left">
        <ChevronLeftOutline />
      </IconPlacement>
      <YearWrapper>{dateInner.year()}</YearWrapper>
      <IconPlacement dimension="lSmall" highlightFocus={false} data-direction="right">
        <ChevronRightOutline />
      </IconPlacement>
    </YearNavigationPanelWrapper>
  );
};

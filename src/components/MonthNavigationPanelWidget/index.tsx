import styled from 'styled-components';

import { getDayjsDate } from '#src/components/utils';
import { CALENDAR_WIDTH } from '#src/components/Calendar/constants';
import type { MonthNavigationPanelWidgetProps } from '#src/components/MonthNavigationPanelWidget/interfaces';
import { NavigationPanelButton } from '#src/components/MonthNavigationPanelWidget/NavigationPanelButton';
import { MonthYear } from '#src/components/MonthNavigationPanelWidget/MonthYear';

const MonthNavigationPanelWrapper = styled.div`
  box-sizing: border-box;
  width: ${CALENDAR_WIDTH}PX;
  height: 32px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
`;

export const MonthNavigationPanelWidget = ({
  date,
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone,
  locale = 'ru',
  onClick,
  ...props
}: MonthNavigationPanelWidgetProps) => {
  const dateInner = getDayjsDate(locale, timezone, date);

  return (
    <MonthNavigationPanelWrapper {...props}>
      <NavigationPanelButton onClick={onClick} disabled={false} type="left" />
      <MonthYear date={dateInner} />
      <NavigationPanelButton onClick={onClick} disabled={false} type="right" />
    </MonthNavigationPanelWrapper>
  );
};

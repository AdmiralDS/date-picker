import styled from 'styled-components';
import dayjs from 'dayjs';

import { IconPlacement, typography } from '@admiral-ds/react-ui';
import ChevronLeftOutline from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg?react';
import ChevronRightOutline from '@admiral-ds/icons/build/system/ChevronRightOutline.svg?react';

import { capitalizeFirstLetter, getCurrentTimeZone } from '#src/components/utils';
import { CALENDAR_WIDTH } from '#src/components/calendarConstants';
import type { BasePanelWidgetProps } from '#src/components/widgetInterfaces.ts';

export interface MonthNavigationPanelWidgetProps extends BasePanelWidgetProps {}

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
`;
const TextWrapper = styled.div<{ $isActive?: boolean }>`
  padding: 4px 8px;
  border-radius: 16px;
  cursor: pointer;
  color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  ${typography['Subtitle/Subtitle 2']}
  background-color: ${(p) => (p.$isActive ? p.theme.color['Opacity/Focus'] : p.theme.color['Special/Elevated BG'])};
  &:hover {
    background-color: ${(p) => p.theme.color['Opacity/Hover']};
  }
`;

export const MonthNavigationPanelWidget = ({
  viewMode,
  date,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  ...props
}: MonthNavigationPanelWidgetProps) => {
  const dateInner = date || dayjs().tz(timezone).locale(locale);

  return (
    <MonthNavigationPanelWrapper {...props}>
      <IconPlacement dimension="lSmall" highlightFocus={false} data-panel-target-type="left">
        <ChevronLeftOutline />
      </IconPlacement>
      <MonthYearWrapper {...props}>
        <TextWrapper data-panel-target-type="month" $isActive={viewMode === 'months'}>
          {capitalizeFirstLetter(dateInner.format('MMMM'))}
        </TextWrapper>
        <TextWrapper data-panel-target-type="year" $isActive={viewMode === 'years'}>
          {dateInner.year()}
        </TextWrapper>
      </MonthYearWrapper>
      <IconPlacement dimension="lSmall" highlightFocus={false} data-panel-target-type="right">
        <ChevronRightOutline />
      </IconPlacement>
    </MonthNavigationPanelWrapper>
  );
};

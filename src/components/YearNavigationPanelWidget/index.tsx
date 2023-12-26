import styled from 'styled-components';

import { IconPlacement, typography } from '@admiral-ds/react-ui';
import ChevronLeftOutline from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg?react';
import ChevronRightOutline from '@admiral-ds/icons/build/system/ChevronRightOutline.svg?react';

import { CALENDAR_WIDTH } from '#src/components/calendarConstants';
import { getCurrentDate } from '#src/components/utils';
import type { BasePanelWidgetProps } from '#src/components/widgetInterfaces.ts';

export interface YearNavigationPanelWidgetProps extends BasePanelWidgetProps { }

const YearNavigationPanelWrapper = styled.div`
  box-sizing: border-box;
  width: ${CALENDAR_WIDTH}PX;
  height: 32px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
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

export const YearNavigationPanelWidget = ({
  viewMode,
  date,
  locale = 'ru',
  ...props
}: YearNavigationPanelWidgetProps) => {
  const dateInner = date || getCurrentDate(locale);

  return (
    <YearNavigationPanelWrapper {...props}>
      <IconPlacement dimension="lSmall" highlightFocus={false} data-panel-target-type="left">
        <ChevronLeftOutline />
      </IconPlacement>
      <TextWrapper data-panel-target-type="year" $isActive={viewMode === 'years'}>
        {dateInner.year()}
      </TextWrapper>
      <IconPlacement dimension="lSmall" highlightFocus={false} data-panel-target-type="right">
        <ChevronRightOutline />
      </IconPlacement>
    </YearNavigationPanelWrapper>
  );
};

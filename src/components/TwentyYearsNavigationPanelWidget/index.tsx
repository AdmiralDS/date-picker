import styled from 'styled-components';

import { IconPlacement, typography } from '@admiral-ds/react-ui';
import ChevronLeftOutline from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg?react';
import ChevronRightOutline from '@admiral-ds/icons/build/system/ChevronRightOutline.svg?react';

import { CALENDAR_WIDTH } from '#src/components/calendarConstants';
import { getCurrentDate, yearsRange } from '#src/components/utils';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import type { BasePanelWidgetProps } from '#src/components/widgetInterfaces.ts';

export interface TwentyYearsNavigationPanelWidgetProps extends BasePanelWidgetProps { }

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
  cursor: default;
  ${typography['Subtitle/Subtitle 2']}
`;

export const TwentyYearsNavigationPanelWidget = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  viewMode,
  date,
  locale = 'ru',
  ...props
}: TwentyYearsNavigationPanelWidgetProps) => {
  const dateInner = date || getCurrentDate(locale);
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

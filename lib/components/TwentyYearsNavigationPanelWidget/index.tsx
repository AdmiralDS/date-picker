import styled from 'styled-components';

import { IconPlacement, TooltipHoc, typography } from '@admiral-ds/react-ui';
import ChevronLeftOutline from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg?react';
import ChevronRightOutline from '@admiral-ds/icons/build/system/ChevronRightOutline.svg?react';

import { CALENDAR_WIDTH, ruLocale } from '#lib/calendarConstants';
import { getCurrentDate, yearsRange } from '#lib/utils';
import { YEARS_ON_SCREEN } from '#lib/YearsOfTwentyYearsWidget/constants.ts';
import type { BasePanelWidgetProps } from '#lib/widgetInterfaces.ts';

export interface TwentyYearsNavigationPanelWidgetProps extends BasePanelWidgetProps {}

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

const IconWithTooltip = TooltipHoc(IconPlacement);

export const TwentyYearsNavigationPanelWidget = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  viewMode,
  date,
  locale = ruLocale,
  prevButtonProps,
  nextButtonProps,
  ...props
}: TwentyYearsNavigationPanelWidgetProps) => {
  const dateInner = date?.locale(locale?.localeName) || getCurrentDate(locale?.localeName);
  const { start, end } = yearsRange(dateInner, YEARS_ON_SCREEN);

  return (
    <TwentyYearsNavigationPanelWrapper {...props}>
      <IconWithTooltip
        dimension="lSmall"
        highlightFocus={false}
        data-panel-target-type="left"
        renderContent={() => locale?.localeText.backwardText}
        {...prevButtonProps}
      >
        <ChevronLeftOutline />
      </IconWithTooltip>
      <TwentyYearsWrapper>{`${start}–${end}`}</TwentyYearsWrapper>
      <IconWithTooltip
        dimension="lSmall"
        highlightFocus={false}
        data-panel-target-type="right"
        renderContent={() => locale?.localeText.forwardText}
        {...nextButtonProps}
      >
        <ChevronRightOutline />
      </IconWithTooltip>
    </TwentyYearsNavigationPanelWrapper>
  );
};

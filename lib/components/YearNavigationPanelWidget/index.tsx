import styled from 'styled-components';

import { vars, textValues } from '@admiral-ds/web';
import { IconPlacement, TooltipHoc } from '@admiral-ds/react-ui';
import ChevronLeftOutline from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg?react';
import ChevronRightOutline from '@admiral-ds/icons/build/system/ChevronRightOutline.svg?react';

import { CALENDAR_WIDTH, ruLocale } from '#lib/calendarConstants';
import { getCurrentDate } from '#lib/utils';
import type { BasePanelWidgetProps } from '#lib/widgetInterfaces.ts';

export type YearNavigationPanelWidgetProps = BasePanelWidgetProps;

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
  color: ${vars.color.Primary_Primary60Main};
  ${textValues['Subtitle/Subtitle 2']}
  background-color: ${(p) => (p.$isActive ? vars.color.Opacity_Focus : vars.color.Special_ElevatedBG)};
  &:hover {
    background-color: ${vars.color.Opacity_Hover};
  }
`;

const IconWithTooltip = TooltipHoc(IconPlacement);
const TextWithTooltip = TooltipHoc(TextWrapper);

const nothing = () => ({});

export const YearNavigationPanelWidget = ({
  viewMode,
  date,
  locale = ruLocale,
  prevButtonProps,
  nextButtonProps,
  prevButtonPropsConfig = nothing,
  nextButtonPropsConfig = nothing,
  ...props
}: YearNavigationPanelWidgetProps) => {
  const dateInner = date?.locale(locale?.localeName) || getCurrentDate(locale?.localeName);

  const prevButtonPropsFinal = {
    dimension: 'lSmall',
    highlightFocus: false,
    'data-panel-target-type': 'left',
    renderContent: () => locale?.localeText.backwardText,
    ...prevButtonProps,
  } as const;

  const nextButtonPropsFinal = {
    dimension: 'lSmall',
    highlightFocus: false,
    'data-panel-target-type': 'right',
    renderContent: () => locale?.localeText.forwardText,
    ...nextButtonProps,
  } as const;

  return (
    <YearNavigationPanelWrapper {...props}>
      <IconWithTooltip {...prevButtonPropsFinal} {...prevButtonPropsConfig(prevButtonPropsFinal)}>
        <ChevronLeftOutline />
      </IconWithTooltip>
      <TextWithTooltip
        data-panel-target-type="year"
        $isActive={viewMode === 'years'}
        renderContent={() => (viewMode === 'years' ? locale?.localeText.returnText : locale.localeText.selectYearText)}
      >
        {dateInner.year()}
      </TextWithTooltip>
      <IconWithTooltip {...nextButtonPropsFinal} {...nextButtonPropsConfig(nextButtonPropsFinal)}>
        <ChevronRightOutline />
      </IconWithTooltip>
    </YearNavigationPanelWrapper>
  );
};

import styled from 'styled-components';

import { IconPlacement, TooltipHoc } from '@admiral-ds/react-ui';
import { vars, textValues } from '@admiral-ds/web';
import ChevronLeftOutline from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg?react';
import ChevronRightOutline from '@admiral-ds/icons/build/system/ChevronRightOutline.svg?react';

import { capitalizeFirstLetter, getCurrentDate } from '#lib/utils';
import { CALENDAR_WIDTH, ruLocale } from '#lib/calendarConstants';
import type { BasePanelWidgetProps } from '#lib/widgetInterfaces.ts';

export interface MonthNavigationPanelWidgetProps extends BasePanelWidgetProps {}

const MonthNavigationPanelWrapper = styled.div`
  box-sizing: border-box;
  width: ${CALENDAR_WIDTH}PX;
  height: 32px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  background-color: ${vars.color.Special_ElevatedBG};
`;

const MonthYearWrapper = styled.div`
  display: flex;
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

export const MonthNavigationPanelWidget = ({
  viewMode,
  date,
  locale = ruLocale,
  prevButtonPropsConfig = nothing,
  nextButtonPropsConfig = nothing,
  ...props
}: MonthNavigationPanelWidgetProps) => {
  const dateInner = date?.locale(locale.localeName) || getCurrentDate(locale?.localeName || 'ru');

  const prevButtonPropsFinal = {
    dimension: 'lSmall',
    highlightFocus: false,
    'data-panel-target-type': 'left',
    renderContent: () =>
      viewMode === 'dates' ? locale?.localeText.previousMonthText : locale?.localeText.backwardText,
  } as const;

  const nextButtonPropsFinal = {
    dimension: 'lSmall',
    highlightFocus: false,
    'data-panel-target-type': 'right',
    renderContent: () => (viewMode === 'dates' ? locale?.localeText.nextMonthText : locale?.localeText.forwardText),
  } as const;

  return (
    <MonthNavigationPanelWrapper {...props}>
      <IconWithTooltip {...prevButtonPropsFinal} {...prevButtonPropsConfig(prevButtonPropsFinal)}>
        <ChevronLeftOutline />
      </IconWithTooltip>
      <MonthYearWrapper {...props}>
        <TextWithTooltip
          data-panel-target-type="month"
          $isActive={viewMode === 'months'}
          renderContent={() =>
            viewMode === 'months' ? locale?.localeText.returnText : locale.localeText.selectMonthText
          }
        >
          {capitalizeFirstLetter(dateInner.format('MMMM'))}
        </TextWithTooltip>
        <TextWithTooltip
          data-panel-target-type="year"
          $isActive={viewMode === 'years'}
          renderContent={() =>
            viewMode === 'years' ? locale?.localeText.returnText : locale.localeText.selectYearText
          }
        >
          {dateInner.year()}
        </TextWithTooltip>
      </MonthYearWrapper>
      <IconWithTooltip {...nextButtonPropsFinal} {...nextButtonPropsConfig(nextButtonPropsFinal)}>
        <ChevronRightOutline />
      </IconWithTooltip>
    </MonthNavigationPanelWrapper>
  );
};

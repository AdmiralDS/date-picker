import styled, { DataAttributes } from 'styled-components';

import { vars, textValues } from '@admiral-ds/web';
import { IconPlacement, TooltipHoc } from '@admiral-ds/react-ui';
import ChevronLeftOutline from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg?react';
import ChevronRightOutline from '@admiral-ds/icons/build/system/ChevronRightOutline.svg?react';

import { CALENDAR_WIDTH, ruLocale } from '#lib/calendarConstants';
import { getCurrentDate } from '#lib/utils';
import type { BasePanelWidgetProps } from '#lib/widgetInterfaces.ts';

export interface YearNavigationPanelWidgetProps extends BasePanelWidgetProps {
  /** Конфиг функция пропсов для контейнера с годами на навигационной панели. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearNavigationButtonPropsConfig?: (
    props: React.ComponentProps<typeof TextWithTooltip>,
  ) => Partial<React.ComponentProps<typeof TextWithTooltip> & DataAttributes>;
}

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
  prevButtonPropsConfig = nothing,
  nextButtonPropsConfig = nothing,
  yearNavigationButtonPropsConfig = nothing,
  ...props
}: YearNavigationPanelWidgetProps) => {
  const dateInner = date?.locale(locale?.localeName) || getCurrentDate(locale?.localeName);

  const prevButtonPropsFinal = {
    dimension: 'lSmall',
    highlightFocus: false,
    'data-panel-target-type': 'left',
    renderContent: () => locale?.localeText.backwardText,
  } as const;

  const nextButtonPropsFinal = {
    dimension: 'lSmall',
    highlightFocus: false,
    'data-panel-target-type': 'right',
    renderContent: () => locale?.localeText.forwardText,
  } as const;

  const yearNavigationButtonPropsFinal = {
    'data-panel-target-type': 'year',
    renderContent: () => (viewMode === 'years' ? locale?.localeText.returnText : locale.localeText.selectYearText),
    $isActive: viewMode === 'years',
  } as const;

  return (
    <YearNavigationPanelWrapper {...props}>
      <IconWithTooltip {...prevButtonPropsFinal} {...prevButtonPropsConfig(prevButtonPropsFinal)}>
        <ChevronLeftOutline />
      </IconWithTooltip>
      <TextWithTooltip
        {...yearNavigationButtonPropsFinal}
        {...yearNavigationButtonPropsConfig(yearNavigationButtonPropsFinal)}
      >
        {dateInner.year()}
      </TextWithTooltip>
      <IconWithTooltip {...nextButtonPropsFinal} {...nextButtonPropsConfig(nextButtonPropsFinal)}>
        <ChevronRightOutline />
      </IconWithTooltip>
    </YearNavigationPanelWrapper>
  );
};

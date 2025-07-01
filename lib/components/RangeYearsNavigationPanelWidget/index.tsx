import styled, { DataAttributes } from 'styled-components';

import { vars, textValues } from '@admiral-ds/web';
import { IconPlacement, TooltipHoc } from '@admiral-ds/react-ui';
import ChevronLeftOutline from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg?react';
import ChevronRightOutline from '@admiral-ds/icons/build/system/ChevronRightOutline.svg?react';

import { CALENDAR_WIDTH, ruLocale } from '#lib/calendarConstants';
import { getCurrentDate, yearsRange } from '#lib/utils';
import type { BasePanelWidgetProps } from '#lib/widgetInterfaces.ts';

export interface RangeYearsNavigationPanelWidgetProps extends BasePanelWidgetProps {
  /** Конфиг функция пропсов для контейнера с годами. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearsNavigationContainerPropsConfig?: (
    props: React.ComponentProps<typeof YearsWrapper>,
  ) => Partial<React.ComponentProps<typeof YearsWrapper> & DataAttributes>;
  //** Количество ячеек в виджете с годами */
  yearsOnScreen?: number;
}

const RangeYearsNavigationPanelWrapper = styled.div`
  box-sizing: border-box;
  width: ${CALENDAR_WIDTH}PX;
  height: 32px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
`;

const YearsWrapper = styled.div`
  padding: 4px 8px;
  color: ${vars.color.Neutral_Neutral90};
  cursor: default;
  ${textValues['Subtitle/Subtitle 2']}
`;

const IconWithTooltip = TooltipHoc(IconPlacement);

const nothing = () => ({});

export const RangeYearsNavigationPanelWidget = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  viewMode,
  date,
  locale = ruLocale,
  prevButtonPropsConfig = nothing,
  nextButtonPropsConfig = nothing,
  yearsNavigationContainerPropsConfig = nothing,
  yearsOnScreen = 20,
  ...props
}: RangeYearsNavigationPanelWidgetProps) => {
  const dateInner = date?.locale(locale?.localeName) || getCurrentDate(locale?.localeName);
  const { start, end } = yearsRange(dateInner, yearsOnScreen);

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

  return (
    <RangeYearsNavigationPanelWrapper {...props}>
      <IconWithTooltip {...prevButtonPropsFinal} {...prevButtonPropsConfig(prevButtonPropsFinal)}>
        <ChevronLeftOutline />
      </IconWithTooltip>
      <YearsWrapper {...yearsNavigationContainerPropsConfig({})}>{`${start}–${end}`}</YearsWrapper>
      <IconWithTooltip {...nextButtonPropsFinal} {...nextButtonPropsConfig(nextButtonPropsFinal)}>
        <ChevronRightOutline />
      </IconWithTooltip>
    </RangeYearsNavigationPanelWrapper>
  );
};

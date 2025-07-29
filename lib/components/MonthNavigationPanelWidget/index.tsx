import styled, { type DataAttributes } from 'styled-components';

import { IconPlacement, TooltipHoc } from '@admiral-ds/react-ui';
import { vars, textValues } from '@admiral-ds/web';
import ChevronLeftOutline from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg?react';
import ChevronRightOutline from '@admiral-ds/icons/build/system/ChevronRightOutline.svg?react';

import { capitalizeFirstLetter, getCurrentDate } from '#lib/utils';
import { CALENDAR_WIDTH, ruLocale } from '#lib/calendarConstants';
import type { BasePanelWidgetProps } from '#lib/widgetInterfaces.ts';

export interface MonthNavigationPanelWidgetProps extends BasePanelWidgetProps {
  /** Конфиг функция пропсов для кнопки с месяцем на навигационной панели с выбором режима календаря. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  monthNavigationButtonPropsConfig?: (
    props: React.ComponentProps<typeof TextWithTooltip>,
  ) => Partial<React.ComponentProps<typeof TextWithTooltip> & DataAttributes>;

  /** Конфиг функция пропсов для кнопки с годом на навигационной панели с выбором режима календаря. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearNavigationButtonPropsConfig?: (
    props: React.ComponentProps<typeof TextWithTooltip>,
  ) => Partial<React.ComponentProps<typeof TextWithTooltip> & DataAttributes>;
}

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
  monthNavigationButtonPropsConfig = nothing,
  yearNavigationButtonPropsConfig = nothing,
  ...props
}: MonthNavigationPanelWidgetProps) => {
  const dateInner = date?.locale(locale.localeName) || getCurrentDate(locale?.localeName || 'ru');

  const prevButtonProps = {
    dimension: 'lSmall',
    highlightFocus: false,
    'data-panel-target-type': 'left',
    renderContent: () =>
      viewMode === 'dates' ? locale?.localeText.previousMonthText : locale?.localeText.backwardText,
  } as const;

  const nextButtonProps = {
    dimension: 'lSmall',
    highlightFocus: false,
    'data-panel-target-type': 'right',
    renderContent: () => (viewMode === 'dates' ? locale?.localeText.nextMonthText : locale?.localeText.forwardText),
  } as const;

  const monthNavigationButtonProps = {
    'data-panel-target-type': 'month',
    $isActive: viewMode === 'months',
    renderContent: () => (viewMode === 'months' ? locale?.localeText.returnText : locale.localeText.selectMonthText),
  } as const;

  const yearNavigationButtonProps = {
    'data-panel-target-type': 'year',
    renderContent: () => (viewMode === 'years' ? locale?.localeText.returnText : locale.localeText.selectYearText),
    $isActive: viewMode === 'years',
  } as const;

  return (
    <MonthNavigationPanelWrapper {...props}>
      <IconWithTooltip {...prevButtonProps} {...prevButtonPropsConfig(prevButtonProps)}>
        <ChevronLeftOutline />
      </IconWithTooltip>
      <MonthYearWrapper {...props}>
        <TextWithTooltip
          {...monthNavigationButtonProps}
          {...monthNavigationButtonPropsConfig(monthNavigationButtonProps)}
        >
          {capitalizeFirstLetter(dateInner.format('MMMM'))}
        </TextWithTooltip>
        <TextWithTooltip {...yearNavigationButtonProps} {...yearNavigationButtonPropsConfig(yearNavigationButtonProps)}>
          {dateInner.year()}
        </TextWithTooltip>
      </MonthYearWrapper>
      <IconWithTooltip {...nextButtonProps} {...nextButtonPropsConfig(nextButtonProps)}>
        <ChevronRightOutline />
      </IconWithTooltip>
    </MonthNavigationPanelWrapper>
  );
};

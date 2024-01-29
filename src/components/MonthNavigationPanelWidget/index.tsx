import styled from 'styled-components';

import { IconPlacement, TooltipHoc, typography } from '@admiral-ds/react-ui';
import ChevronLeftOutline from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg?react';
import ChevronRightOutline from '@admiral-ds/icons/build/system/ChevronRightOutline.svg?react';

import { capitalizeFirstLetter, getCurrentDate } from '#src/components/utils';
import { CALENDAR_WIDTH, ruLocale } from '#src/components/calendarConstants';
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

const IconWithTooltip = TooltipHoc(IconPlacement);
const TextWithTooltip = TooltipHoc(TextWrapper);

export const MonthNavigationPanelWidget = ({
  viewMode,
  date,
  locale = ruLocale,
  ...props
}: MonthNavigationPanelWidgetProps) => {
  const dateInner = date || getCurrentDate(locale?.localeName || 'ru');

  return (
    <MonthNavigationPanelWrapper {...props}>
      <IconWithTooltip
        dimension="lSmall"
        highlightFocus={false}
        data-panel-target-type="left"
        renderContent={() =>
          viewMode === 'dates' ? locale?.localeText.previousMonthText : locale?.localeText.backwardText
        }
      >
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
      <IconWithTooltip
        dimension="lSmall"
        highlightFocus={false}
        data-panel-target-type="right"
        renderContent={() => (viewMode === 'dates' ? locale?.localeText.nextMonthText : locale?.localeText.forwardText)}
      >
        <ChevronRightOutline />
      </IconWithTooltip>
    </MonthNavigationPanelWrapper>
  );
};

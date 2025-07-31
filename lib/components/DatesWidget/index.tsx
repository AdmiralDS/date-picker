import styled from 'styled-components';
import 'dayjs/locale/ru';

import { vars, textValues } from '@admiral-ds/web';

import { getCurrentDate } from '#lib/utils';
import type { DayNameCellProps } from '#lib/DatesWidget/interfaces';
import { Days } from '#lib/DatesWidget/Days';
import { Dates } from '#lib/DatesWidget/Dates';
import { ruLocale } from '#lib/calendarConstants.ts';
import type { BaseWidgetProps } from '#lib/widgetInterfaces';

const DatesWidgetContainer = styled.div`
  background-color: ${vars.color.Special_ElevatedBG};
  width: 252px;
  margin: 12px 16px 16px 16px;
  ${textValues['Body/Body 2 Long']}
`;

export interface DatesWidgetProps extends BaseWidgetProps {
  dayNamesProps: DayNameCellProps;
  datesWidgetContainerPropsConfig?: React.ComponentProps<typeof Dates>['datesWidgetContainerPropsConfig'];
  datesModel?: React.ComponentProps<typeof Dates>['datesModel'];
  daysWidgetContainerPropsConfig?: React.ComponentProps<typeof Days>['daysWidgetContainerPropsConfig'];
  daysModel?: React.ComponentProps<typeof Days>['daysModel'];
}

export const DatesWidget = ({
  locale = ruLocale,
  date = getCurrentDate(locale?.localeName),
  selected,
  active,
  activeRangeEnd,
  dateAttributes,
  dayNamesProps,
  cell,
  range,
  datesWidgetContainerPropsConfig,
  datesModel,
  daysWidgetContainerPropsConfig,
  daysModel,
  ...props
}: DatesWidgetProps) => {
  const { dayNameCellState } = dayNamesProps;

  return (
    <DatesWidgetContainer {...props} data-container-type={'datesWidgetContainer'}>
      <Days
        locale={locale.localeName}
        daysModel={daysModel}
        daysWidgetContainerPropsConfig={daysWidgetContainerPropsConfig}
        dayNameCellState={dayNameCellState}
      />
      <Dates
        date={date}
        selected={selected}
        active={active}
        activeRangeEnd={activeRangeEnd}
        dateAttributes={dateAttributes}
        cell={cell}
        locale={locale}
        range={range}
        datesWidgetContainerPropsConfig={datesWidgetContainerPropsConfig}
        datesModel={datesModel}
      />
    </DatesWidgetContainer>
  );
};

import type { FunctionComponent, HTMLAttributes } from 'react';
import type { Dayjs } from 'dayjs';

import type { CalendarLocaleProps, CalendarViewMode, DateCellProps } from '#lib/calendarInterfaces.ts';
import type { DateAttributes } from '#lib/DefaultCell';
import type { IconPlacementProps, TooltipHocProps } from '@admiral-ds/react-ui';
import type { DateRange } from 'lib/types';
import { DataAttributes } from 'styled-components';

export interface BaseWidgetProps extends HTMLAttributes<HTMLDivElement> {
  /** Дата */
  date: Dayjs;
  selected?: Dayjs | DateRange;
  active?: Dayjs;
  activeRangeEnd?: Dayjs;
  dateAttributes?: (currentDate: Dayjs) => DateAttributes;
  cell: FunctionComponent<DateCellProps>;
  locale?: CalendarLocaleProps;
  range?: boolean;
}

export type ArrowButtonProps = IconPlacementProps;

export type ArrowButtonPropsConfig = (
  props: IconPlacementProps & TooltipHocProps & DataAttributes,
) => Partial<IconPlacementProps & TooltipHocProps & DataAttributes>;

export interface BasePanelWidgetProps extends HTMLAttributes<HTMLDivElement> {
  viewMode?: CalendarViewMode;
  /** Дата */
  date?: Dayjs;
  locale: CalendarLocaleProps;
  prevButtonProps?: ArrowButtonProps;
  nextButtonProps?: ArrowButtonProps;
  /** Конфиг функция пропсов для кнопки панели "Назад". На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  prevButtonPropsConfig?: ArrowButtonPropsConfig;
  /** Конфиг функция пропсов для кнопки панели "Вперед". На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  nextButtonPropsConfig?: ArrowButtonPropsConfig;
}

import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { getCurrentDate } from '#lib/utils';
import { DatesWidget } from '#lib/DatesWidget';
import type { CellStateProps } from '#lib/DatesWidget/interfaces';
import { baseDayNameCellMixin } from '#lib/DefaultCell/mixins.tsx';
import type { SingleCalendarProps } from '#lib/calendarInterfaces';
import { MemoDefaultDateCell } from '#lib/DefaultCell';
import { ruLocale } from '#lib/calendarConstants.ts';

export interface DateCalendarProps extends Omit<SingleCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {
  /** Конфиг функция пропсов для контейнера с днями. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  datesWidgetContainerPropsConfig?: React.ComponentProps<typeof DatesWidget>['datesWidgetContainerPropsConfig'];

  /** Модель массива для рендера ячеек с днями, на выход должна отдавать массив по размеру равный 42,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  datesModel?: React.ComponentProps<typeof DatesWidget>['datesModel'];

  /** Конфиг функция пропсов для контейнера с названиями дня в неделе. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  daysWidgetContainerPropsConfig?: React.ComponentProps<typeof DatesWidget>['daysWidgetContainerPropsConfig'];

  /** Модель массива для рендера ячеек с названиями дня в неделе, на выход должна отдавать массив по размеру равный 7,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  daysModel?: React.ComponentProps<typeof DatesWidget>['daysModel'];
}

export const DateCalendar = ({
  dateAttributes,
  dateValue,
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  cell,
  locale = ruLocale,
  datesWidgetContainerPropsConfig,
  datesModel,
  daysWidgetContainerPropsConfig,
  daysModel,
  ...props
}: DateCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const dateInner = dateValue || getCurrentDate(locale?.localeName);
  //</editor-fold>

  //<editor-fold desc="Hovered date">
  const [activeDateState, setActiveDateState] = useState<Dayjs | undefined>(defaultActiveDateValue);
  const activeDateInner = activeDateValue || activeDateState;

  const [shouldHandleMouseOver, setShouldHandleMouseOver] = useState(false);

  const handleActiveDateChange = (date?: Dayjs) => {
    setActiveDateState(date);
    if (shouldHandleMouseOver) {
      onActiveDateValueChange?.(date);
    }
  };

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'dateCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName);
    const disabled = targetDataAttributes['disabledCell'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled && !date.isSame(activeDateInner)) {
      handleActiveDateChange(date);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (_) => {
    handleActiveDateChange(undefined);
  };
  //</editor-fold>

  //<editor-fold desc="Selected date">
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(defaultSelectedDateValue);
  const selectedDateInner = selectedDateValue || selectedDateState;

  const handleSelectedDateChange = (date: Dayjs) => {
    setSelectedDateState(date);
    onSelectedDateValueChange?.(date);
  };

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'dateCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName);
    const disabled = targetDataAttributes['disabledCell'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled) {
      handleSelectedDateChange(date);
    }
  };
  //</editor-fold>

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getDayNameCellState = (_: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  return (
    <DatesWidget
      {...props}
      dayNamesProps={{ dayNameCellState: getDayNameCellState }}
      date={dateInner}
      selected={selectedDateInner}
      active={activeDateInner}
      dateAttributes={dateAttributes}
      locale={locale}
      onMouseEnter={() => setShouldHandleMouseOver(true)}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onMouseDown={handleDateClick}
      cell={cell || MemoDefaultDateCell}
      datesWidgetContainerPropsConfig={datesWidgetContainerPropsConfig}
      datesModel={datesModel}
      daysWidgetContainerPropsConfig={daysWidgetContainerPropsConfig}
      daysModel={daysModel}
    />
  );
};

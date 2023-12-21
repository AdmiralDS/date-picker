import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { dateStringToDayjs, dayjsDateToString, getCurrentTimeZone, setNoon } from '#src/components/utils';
import { DatesOfMonthWidget } from '#src/components/DatesOfMonthWidget';
import type { CellStateProps } from '#src/components/DatesOfMonthWidget/interfaces';
import { baseDayNameCellMixin } from '#src/components/DefaultCell/mixins.tsx';
import type { SingleCalendarProps } from '#src/components/calendarInterfaces';
import { DefaultDateCell } from '#src/components/DefaultCell';
import { DATES_ON_SCREEN } from '#src/components/DatesOfMonthWidget/constants.ts';

export interface DateCalendarProps extends Omit<SingleCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {}

const datesArray = Array.from(Array(DATES_ON_SCREEN).keys());

const getDateCellDataAttributes = (
  value?: string,
  isHoliday?: boolean,
  //isOutsideMonth?: boolean,
  isCurrent?: boolean,
  isActive?: boolean,
) => {
  return {
    'data-value': value ? value : undefined,
    'data-is-holiday-cell': isHoliday ? isHoliday : undefined,
    //'data-is-outside-month-cell': isOutsideMonth ? isOutsideMonth : undefined,
    'data-is-current-day-cell': isCurrent ? isCurrent : undefined,
    'data-is-active-cell': isActive ? isActive : undefined,
  };
};

export const DateCalendar = ({
  disabledDate,
  dateValue,
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderDateCell,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  onClick,
  ...props
}: DateCalendarProps) => {
  /*//<editor-fold desc="Date shown on calendar">
  const [dateState, setDateState] = useState(getDayjsDate(locale, timezone, defaultDateValue));
  const dateInner = (dateValue && getDayjsDate(locale, timezone, dateValue)) || dateState;

  const handleDateChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    if (dayjsDate) {
      setDateState(dayjsDate);
      onDateValueChange?.(dateString);
    }
  };
  //</editor-fold>*/
  const dateInner = dateValue || dayjs().tz(timezone).locale(locale);

  //<editor-fold desc="Hovered date">
  const [activeDateState, setActiveDateState] = useState<Dayjs | undefined>(defaultActiveDateValue);
  const activeDateInner = activeDateValue || activeDateState;

  const handleActiveDateChange = (dateString?: string) => {
    const dayjsActiveDate = dateStringToDayjs(dateString, locale, timezone);
    setActiveDateState(dayjsActiveDate);
    onActiveDateValueChange?.(dateString);
  };
  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'dateCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale, timezone);
      if (hoveredDate) {
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
    }
  };
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'dateCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale, timezone);
      if (hoveredDate && (!activeDateInner || !hoveredDate.isSame(activeDateInner, 'date'))) {
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
      return;
    }
    if (target.dataset.containerType !== 'datesWrapper') {
      if (activeDateInner) {
        handleActiveDateChange(undefined);
        return;
      }
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

  const handleSelectedDateChange = (dateString: string) => {
    const dayjsSelectedDate = dateStringToDayjs(dateString, locale, timezone);
    setSelectedDateState(dayjsSelectedDate);
    onSelectedDateValueChange?.(dateString);
  };
  //</editor-fold>

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    const clickedCell = target.dataset.value;
    const clickedDate = dateStringToDayjs(clickedCell, locale, timezone);
    if (clickedDate && !target.dataset.disabledCell && !target.dataset.hiddenCell) {
      handleSelectedDateChange(dayjsDateToString(clickedDate));
    }
    onClick?.(e);
  };

  const dateIsSelected = (dateCurrent?: Dayjs) => {
    return dateCurrent && selectedDateInner && dateCurrent.isSame(selectedDateInner, 'date');
  };
  const dateIsDisabled = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !disabledDate) {
      return false;
    }
    return disabledDate(dateCurrent);
  };
  const dateIsHoliday = (dateCurrent?: Dayjs) => {
    return !!(
      dateCurrent &&
      dateCurrent.month() === dateInner.month() &&
      dateCurrent.date() !== 14 &&
      (dateCurrent.day() === 6 || dateCurrent.day() === 0 || dateCurrent.isSame(dayjs().locale(locale), 'date'))
    );
  };
  const dateIsHidden = (dateCurrent?: Dayjs) => {
    return dateCurrent && dateCurrent.month() !== dateInner.month();
    //return dateCurrent && dateCurrent.isAfter(dateInner, 'month');
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getDayNameCellState = (_: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  /*//useMemo
  const renderDefaultDate = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale, timezone);
    if (!dateCurrent) return {};
    const cellContent = dateCurrent.date();
    const selected = dateIsSelected(dateCurrent);
    const disabled = dateIsDisabled(dateCurrent);
    const hidden = dateIsHidden(dateCurrent);
    const isCurrent = dateCurrent && dateCurrent.isSame(dayjs().locale(locale), 'date');
    const isHoliday = dateIsHoliday(dateCurrent);
    //const isOutsideMonth = dateIsOutsideMonth(dateCurrent);
    //const isStartOfRow = dateCurrent.isSame(dateCurrent.startOf('week'), 'date');
    //const isEndOfRow = dateCurrent.isSame(dateCurrent.endOf('week'), 'date');
    const isActive = activeDateInner?.isSame(dateCurrent, 'date');

    const dataAttributes = getDateCellDataAttributes(
      dateCurrent.toISOString(),
      isHoliday,
      //isOutsideMonth,
      isCurrent,
      isActive,
    );
    return {
      cellContent,
      selected,
      disabled,
      hidden,
      isCurrent,
      isHoliday,
      //isOutsideMonth,
      //isStartOfRow,
      //isEndOfRow,
      isActive,
      ...dataAttributes,
    };
  };*/

  const dateCells = () => {
    const firstDate = setNoon(dateInner.startOf('month').startOf('week'));
    const array = datesArray.map((v) => {
      const dateCurrent = firstDate.add(v, 'day');
      const isCurrent = dateCurrent && dateCurrent.isSame(dayjs().locale(locale), 'date');
      const isHoliday = dateIsHoliday(dateCurrent);
      //const isOutsideMonth = dateIsOutsideMonth(dateCurrent);
      const isActive = activeDateInner?.isSame(dateCurrent, 'date');
      return (
        <DefaultDateCell
          key={v}
          cellContent={dateCurrent.date()}
          disabled={dateIsDisabled(dateCurrent)}
          selected={dateIsSelected(dateCurrent)}
          hidden={dateIsHidden(dateCurrent)}
          isCurrent={isCurrent}
          isActive={isActive}
          isHoliday={isHoliday}
          {...getDateCellDataAttributes(
            dateCurrent.toISOString(),
            isHoliday,
            //isOutsideMonth,
            isCurrent,
            isActive,
          )}
        />
      );
    });
    return <>{array}</>;
  };
  console.log('render DateCalendar');

  return (
    <DatesOfMonthWidget
      {...props}
      rangeCalendar={false}
      cells={dateCells()}
      //renderCell={renderDateCell || renderDefaultDate}
      date={dateInner}
      locale={locale}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      dayNamesProps={{ dayNameCellState: getDayNameCellState }}
    />
  );
};

import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import {
  capitalizeFirstLetter,
  dateStringToDayjs,
  dayjsDateToString,
  getCurrentDate,
  getCurrentTimeZone,
  setNoon,
} from '#src/components/utils';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';
import type { SingleCalendarProps } from '#src/components/calendarInterfaces.ts';
import { DefaultMonthCell } from '#src/components/DefaultCell';
import { MONTHS_COLUMNS, MONTHS_ROWS } from '#src/components/MonthsOfYearWidget/constants.ts';

export interface MonthCalendarProps extends Omit<SingleCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {}

const monthsArray = Array.from(Array(MONTHS_ROWS * MONTHS_COLUMNS).keys());

export const MonthCalendar = ({
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  disabledDate,
  dateValue,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  onClick,
  locale = 'ru',
  timezone = getCurrentTimeZone(),
  ...props
}: MonthCalendarProps) => {
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
    //console.log(`set active ${dayjsActiveDate}`);
    setActiveDateState(dayjsActiveDate);
    onActiveDateValueChange?.(dateString);
  };

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'monthCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale, timezone);
      if (hoveredDate) {
        if (activeDateInner) {
          handleActiveDateChange(undefined);
          return;
        }
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
    }
  };
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'monthCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale, timezone);
      if (hoveredDate && (!activeDateInner || !hoveredDate.isSame(activeDateInner, 'date'))) {
        if (activeDateInner) {
          handleActiveDateChange(undefined);
          return;
        }
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
      return;
    }
    //if (target.dataset.containerType !== 'monthsWrapper') {
    if (activeDateInner) {
      handleActiveDateChange(undefined);
      return;
    }
    //}
  };
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    handleActiveDateChange(undefined);
  };
  //</editor-fold>

  //<editor-fold desc="Selected date">
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(
    dateStringToDayjs(defaultSelectedDateValue, locale, timezone),
  );
  const selectedDateInner =
    (selectedDateValue && dateStringToDayjs(selectedDateValue, locale, timezone)) || selectedDateState;

  const handleSelectedDateChange = (dateString: string) => {
    const dayjsSelectedDate = dateStringToDayjs(dateString, locale, timezone);
    setSelectedDateState(dayjsSelectedDate);
    onSelectedDateValueChange?.(dateString);
  };
  //</editor-fold>

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    const clickedDate = dateStringToDayjs(clickedCell, locale, timezone);
    if (clickedDate) {
      handleSelectedDateChange(dayjsDateToString(clickedDate));
    }
    onClick?.(e);
  };

  const getMonthCellDataAttributes = (value?: string, isCurrent?: boolean, isActive?: boolean): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-month': isCurrent ? isCurrent : undefined,
      'data-is-active-month': isActive ? isActive : undefined,
    };
  };

  const dateIsDisabled = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !disabledDate) {
      return false;
    }
    const datesArray = Array.from(Array(dateCurrent.endOf('month').date()).keys());
    //console.log(`start Month Check-${dayjs()}`);
    const res = datesArray.every((v) => {
      const date = dateCurrent.date(v);
      return disabledDate(date);
    });
    //console.log(`stop Month Check-${dayjs()}`);
    console.log('months checked');
    return res;
  };

  /*const renderMonth = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale, timezone);
    if (!dateCurrent) return {};
    const cellContent = capitalizeFirstLetter(dateCurrent.format('MMMM'));
    const disabled = dateIsDisabled(dateCurrent);
    const selected = selectedDateInner && dateCurrent.isSame(selectedDateInner, 'month');
    const isCurrent = dateCurrent.isSame(getCurrentDate(locale, timezone), 'month');
    const isActive = activeDateInner && dateCurrent.isSame(activeDateInner, 'month');
    const dataAttributes = getMonthCellDataAttributes(dateCurrent.toISOString(), isCurrent, isActive);

    return { cellContent, disabled, selected, isCurrent: isCurrent, isActive, ...dataAttributes };
    //return <DefaultMonthCell key={dayjsDateToString(dateCurrent)} {...cellProps} />;
  };*/

  const monthCells = () => {
    const firstMonth = setNoon(dayjs(`${dateInner.year()}-01-01T12:00:00`));
    const array = monthsArray.map((v) => {
      const dateCurrent = firstMonth.add(v, 'month');
      const isCurrent = dateCurrent.isSame(getCurrentDate(locale, timezone), 'month');
      const isActive = activeDateInner && dateCurrent.isSame(activeDateInner, 'month');
      return (
        <DefaultMonthCell
          key={v}
          cellContent={capitalizeFirstLetter(dateCurrent.format('MMMM'))}
          disabled={dateIsDisabled(dateCurrent)}
          selected={selectedDateInner && dateCurrent.isSame(selectedDateInner, 'month')}
          isCurrent={isCurrent}
          isActive={isActive}
          {...getMonthCellDataAttributes(dateCurrent.toISOString(), isCurrent, isActive)}
        />
      );
    });
    //console.log(`yearCells stop-${dayjs()}`);
    return <>{array}</>;
  };

  return (
    <MonthsOfYearWidget
      {...props}
      rangeCalendar={false}
      date={dateInner}
      locale={locale}
      timezone={timezone}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      //renderCell={renderMonth}
      cells={monthCells()}
    />
  );
};

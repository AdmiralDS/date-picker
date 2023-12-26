import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import {
  dateStringToDayjs,
  dayjsDateToString,
  getCurrentDate,
  getDateByDayOfYear,
  getDaysInYear,
  yearsRange,
} from '#src/components/utils';
import { YearsOfTwentyYearsWidget } from '#src/components/YearsOfTwentyYearsWidget';
import type { SingleCalendarProps } from '#src/components/calendarInterfaces.ts';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import { DefaultYearCell } from '#src/components/DefaultCell';

export interface YearCalendarProps extends Omit<SingleCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {}

const yearsArray = Array.from(Array(YEARS_ON_SCREEN).keys());

export const YearCalendar = ({
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
  ...props
}: YearCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const dateInner = dateValue || getCurrentDate(locale);
  //</editor-fold>

  //<editor-fold desc="Hovered date">
  const [activeDateState, setActiveDateState] = useState<Dayjs | undefined>(defaultActiveDateValue);
  const activeDateInner = activeDateValue || activeDateState;

  const handleActiveDateChange = (dateString?: string) => {
    const dayjsActiveDate = dateStringToDayjs(dateString, locale);
    //console.log(`set active ${dayjsActiveDate}`);
    setActiveDateState(dayjsActiveDate);
    onActiveDateValueChange?.(dateString);
  };

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'yearCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale);
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
    if (target.dataset.cellType === 'yearCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale);
      if (hoveredDate && (!activeDateInner || !hoveredDate.isSame(activeDateInner, 'date'))) {
        if (activeDateInner) {
          handleActiveDateChange(undefined);
          return;
        }
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
      return;
    }
    //if (target.dataset.containerType !== 'yearsWrapper') {
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
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(defaultSelectedDateValue);
  const selectedDateInner = selectedDateValue || selectedDateState;

  const handleSelectedDateChange = (date: Dayjs) => {
    setSelectedDateState(date);
    onSelectedDateValueChange?.(date);
  };
  //</editor-fold>

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    const clickedDate = dateStringToDayjs(clickedCell, locale);
    if (clickedDate) {
      handleSelectedDateChange(clickedDate);
    }
    onClick?.(e);
  };

  const getYearCellDataAttributes = (value?: string, isCurrent?: boolean, isActive?: boolean): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-year': isCurrent ? isCurrent : undefined,
      'data-is-active-year': isActive ? isActive : undefined,
    };
  };

  const dateIsDisabled = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !disabledDate) {
      return false;
    }
    const datesArray = Array.from(Array(getDaysInYear(dateCurrent)).keys());
    //console.log(`start Year Check-${dayjs()}`);
    const res = datesArray.every((v) => {
      const date = getDateByDayOfYear(dateCurrent, v);
      //console.log(date);
      return disabledDate(date);
    });
    //console.log(`stop Year Check-${dayjs()}`);
    console.log('years checked');
    return res;
  };

  /*const renderYear = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale);
    if (!dateCurrent) return {};
    const cellContent = dateCurrent.year();
    const disabled = dateIsDisabled(dateCurrent);
    const selected = dateCurrent && selectedDateInner && dateCurrent.isSame(selectedDateInner, 'year');
    const isCurrent = dateCurrent && dateCurrent.isSame(getCurrentDate(locale), 'year');
    const isActive = activeDateInner && dateCurrent.isSame(activeDateInner, 'year');
    const dataAttributes = getYearCellDataAttributes(dateCurrent.toISOString(), isCurrent, isActive);

    return { cellContent, disabled, selected, isCurrent, isActive, ...dataAttributes };
  };*/

  const yearCells = () => {
    //console.log(`yearCells start-${dayjs()}`);
    const { start } = yearsRange(dateInner, YEARS_ON_SCREEN);
    const firstYear = dayjs(`${start}-01-01T12:00:00`).locale(locale);
    /* const firstYearWithTimezone = setNoon(dateInner.year(start).startOf('year'));
    console.log(firstYearWithTimezone.toISOString());
    const firstYear = getDayjsDateWithoutTimezone(firstYearWithTimezone); */

    /* console.log(firstYear);
    const base = dayjs('2024-01-01T01:00:00Z');
    const one = base;
    const two = base.tz('America/Toronto');
    const americanDate = dayjs.tz('2023-12-31 20:00:00', 'America/Toronto');
    console.log(americanDate);

    console.log(base.isSame(americanDate, 'date'));

    //console.log(one.toString());
    console.log(one);
    //console.log(two.toString());
    console.log(two);

    const res = one.isSame(two, 'hour');
    console.log(`res-${res}`); */
    const array = yearsArray.map((v) => {
      const dateCurrent = firstYear.add(v, 'year');
      //console.log(dateCurrent);
      const isCurrent = dateCurrent && dateCurrent.isSame(getCurrentDate(locale), 'year');
      const isActive = activeDateInner && dateCurrent.isSame(activeDateInner, 'year');
      return (
        <DefaultYearCell
          key={v}
          cellContent={dateCurrent.year()}
          disabled={dateIsDisabled(dateCurrent)}
          selected={dateCurrent && selectedDateInner && dateCurrent.isSame(selectedDateInner, 'year')}
          isCurrent={isCurrent}
          isActive={isActive}
          {...getYearCellDataAttributes(dateCurrent.toISOString(), isCurrent, isActive)}
        />
      );
    });
    //console.log(`yearCells stop-${dayjs()}`);
    return <>{array}</>;
  };

  /*const handleTwentyYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateChange(dayjsDateToString(dateInner.subtract(YEARS_ON_SCREEN, 'year')));
        break;
      case 'right':
        handleDateChange(dayjsDateToString(dateInner.add(YEARS_ON_SCREEN, 'year')));
        break;
    }
  };*/

  return (
    <YearsOfTwentyYearsWidget
      {...props}
      rangeCalendar={false}
      date={dateInner}
      locale={locale}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      cells={yearCells()}
      //renderCell={renderYear}
    />
  );
};

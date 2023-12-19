import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import {
  dateStringToDayjs,
  dayjsDateToString,
  getCurrentDate,
  getCurrentTimeZone,
  getDateByDayOfYear,
  getDayjsDate,
  getDaysInYear,
  setNoon,
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
  timezone = getCurrentTimeZone(),
  ...props
}: YearCalendarProps) => {
  /*//<editor-fold desc="Date shown on calendar">
  const [dateState] = useState(getDayjsDate(locale, timezone, defaultDateValue));
  const dateInner = (dateValue && getDayjsDate(locale, timezone, dateValue)) || dateState;

  const handleDateChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    if (dayjsDate) {
      setDateState(dayjsDate);
      onDateValueChange?.(dateString);
    }
  };
  //</editor-fold>*/

  //<editor-fold desc="Hovered date">
  const [activeDateState, setActiveDateState] = useState<Dayjs | undefined>(
    dateStringToDayjs(defaultActiveDateValue, locale, timezone),
  );
  const activeDateInner = (activeDateValue && getDayjsDate(locale, timezone, activeDateValue)) || activeDateState;

  const handleActiveDateChange = (dateString?: string) => {
    const dayjsActiveDate = dateStringToDayjs(dateString, locale, timezone);
    //console.log(`set active ${dayjsActiveDate}`);
    setActiveDateState(dayjsActiveDate);
    onActiveDateValueChange?.(dateString);
  };

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'yearCell') {
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
    if (target.dataset.cellType === 'yearCell') {
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
    const dateCurrent = dateStringToDayjs(dateString, locale, timezone);
    if (!dateCurrent) return {};
    const cellContent = dateCurrent.year();
    const disabled = dateIsDisabled(dateCurrent);
    const selected = dateCurrent && selectedDateInner && dateCurrent.isSame(selectedDateInner, 'year');
    const isCurrent = dateCurrent && dateCurrent.isSame(getCurrentDate(locale, timezone), 'year');
    const isActive = activeDateInner && dateCurrent.isSame(activeDateInner, 'year');
    const dataAttributes = getYearCellDataAttributes(dateCurrent.toISOString(), isCurrent, isActive);

    return { cellContent, disabled, selected, isCurrent, isActive, ...dataAttributes };
  };*/

  const yearCells = () => {
    //console.log(`yearCells start-${dayjs()}`);
    const localDate = getDayjsDate(locale, timezone, dateValue);
    const { start } = yearsRange(localDate, YEARS_ON_SCREEN);
    const firstYear = setNoon(dayjs(`${start}-01-01T12:00:00`));
    const array = yearsArray.map((v) => {
      const dateCurrent = firstYear.add(v, 'year');
      const isCurrent = dateCurrent && dateCurrent.isSame(getCurrentDate(locale, timezone), 'year');
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
      date={dateValue}
      locale={locale}
      timezone={timezone}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      cells={yearCells()}
      //renderCell={renderYear}
    />
  );
};

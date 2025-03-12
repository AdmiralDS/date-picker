import dayjs, { isDayjs, extend } from 'dayjs';
import type { Dayjs, ManipulateType, UnitType } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import type { DateAttributes } from '#lib/DefaultCell';
import type { DateRange } from 'lib/types';

[localeData, customParseFormat, localizedFormat, utc, isLeapYear, isBetween, isSameOrAfter, dayOfYear].forEach(
  (plugin) => extend(plugin),
);

export const dateIsSameOrAfter = (dateToCheck: Dayjs, dateBase: Dayjs, unit?: dayjs.OpUnitType) => {
  return dateToCheck.isSameOrAfter(dateBase, unit);
};

export const getDaysInYear = (date: Dayjs) => {
  return date.isLeapYear() ? 366 : 365;
};

export const getDateByDayOfYear = (date: Dayjs, dayOfYear: number) => {
  return date.dayOfYear(dayOfYear);
};

export const getCurrentDate = (locale?: string) => {
  if (locale) return setNoon(dayjs().locale(locale));
  return setNoon(dayjs()).locale('ru');
};

export const dateStringToDayjs = (dateString?: string, locale?: string) => {
  if (dateString === undefined) return undefined;
  const date = setNoon(dayjs(dateString));
  if (!date.isValid()) return undefined;
  if (locale) return date.locale(locale);
  return date;
};

export const dayjsDateToString = (date: Dayjs) => {
  return date.toString();
};

export const setNoon = (date: Dayjs) => {
  return date.hour(12).minute(0).second(0);
};

export const capitalizeFirstLetter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

export const getDayNamesList = (locale: string): string[] => {
  const instanceLocaleData = dayjs().locale(locale).localeData();
  const nameList = instanceLocaleData.weekdaysMin();
  const firstDay = instanceLocaleData.firstDayOfWeek();
  return nameList.map((_, index, arr) => {
    return arr[(firstDay + index) % 7];
  });
};

export const getMonthNamesList = (locale?: string, format: 'long' | 'short' = 'long') => {
  const localisedDate = dayjs()
    .locale(locale || 'ru')
    .localeData();
  return format === 'short' ? localisedDate.monthsShort() : localisedDate.months();
};

export const valid = (date: Dayjs | null): boolean => {
  return dayjs(date, 'DD.MM.YYYY', true).isValid();
};

const unitDifference = (dateLeft: Dayjs, dateRight: Dayjs, unit: ManipulateType | undefined): number => {
  return dateLeft.diff(dateRight, unit);
};

export const differenceDays = (dateLeft: Dayjs, dateRight: Dayjs) => {
  return unitDifference(dateLeft, dateRight, 'day');
};
export const differenceMonths = (dateLeft: Dayjs, dateRight: Dayjs): number => {
  return unitDifference(dateLeft, dateRight, 'month');
};
export const differenceYears = (dateLeft: Dayjs, dateRight: Dayjs): number => {
  return unitDifference(dateLeft, dateRight, 'year');
};

export const outOfBounds = (day: Dayjs, minDate?: Dayjs | null, maxDate?: Dayjs | null) =>
  (minDate && differenceDays(day, minDate) < 0) || (maxDate && differenceDays(day, maxDate) > 0);

export const compareDates = (date1?: Dayjs | null, date2?: Dayjs | null): number => {
  // no dates
  if ((date1 === null && date2 === null) || (date1 === undefined && date2 === undefined)) return 0;
  // only second date exists
  if ((date1 === undefined || date1 === null) && date2 !== undefined && date2 !== null) return -1;
  // only first day exists
  if ((date2 === undefined || date2 === null) && date1 !== undefined && date1 !== null) return 1;
  // return diff in time between dates
  return date1 && date2 ? date1.diff(date2) : 0;
};

export const yearsRange = (date: Dayjs, yearCount: number) => {
  const end = Math.ceil(date.year() / yearCount) * yearCount;
  const start = end - (yearCount - 1);
  return { start, end };
};

export const sortDatesAsc = (date1: Dayjs, date2: Dayjs, unit: dayjs.OpUnitType | undefined) => {
  const dateFirst = date1.isBefore(date2, unit) ? date1 : date2;
  const dateSecond = dateFirst.isSame(date1, unit) ? date2 : date1;
  return [dateFirst, dateSecond];
};

export const dateIsInRange = (
  unit: dayjs.OpUnitType | undefined,
  dateCurrent?: Dayjs,
  selectedDateRange?: DateRange,
) => {
  if (!dateCurrent || !selectedDateRange) return false;
  if (selectedDateRange[0] && selectedDateRange[1]) {
    const dates = sortDatesAsc(selectedDateRange[0], selectedDateRange[1], unit);
    return dateCurrent.isBetween(dates[0], dates[1], unit, '()');
  }
  return false;
};
export const dateIsSelected = (
  unit: dayjs.OpUnitType | undefined,
  dateCurrent?: Dayjs,
  selectedDateRange?: DateRange,
) => {
  if (!dateCurrent || !selectedDateRange) return false;
  const sameAsFirst = selectedDateRange[0] ? dateCurrent.isSame(selectedDateRange[0], unit) : false;
  const sameAsSecond = selectedDateRange[1] ? dateCurrent.isSame(selectedDateRange[1], unit) : false;
  return sameAsFirst || sameAsSecond;
};
export const dateIsRangeStart = (
  unit: dayjs.OpUnitType | undefined,
  dateCurrent?: Dayjs,
  selectedDateRange?: DateRange,
) => {
  if (!dateCurrent || !selectedDateRange || !selectedDateRange[0] || !selectedDateRange[1]) return false;
  const dates = sortDatesAsc(selectedDateRange[0], selectedDateRange[1], unit);
  return dateCurrent.isSame(dates[0], unit);
};
export const dateIsRangeEnd = (
  unit: dayjs.OpUnitType | undefined,
  dateCurrent?: Dayjs,
  selectedDateRange?: DateRange,
) => {
  if (!dateCurrent || !selectedDateRange || !selectedDateRange[0] || !selectedDateRange[1]) return false;
  const dates = sortDatesAsc(selectedDateRange[0], selectedDateRange[1], unit);
  return dateCurrent.isSame(dates[1], unit);
};

export const dateIsInRangeSelecting = (
  unit: dayjs.OpUnitType | undefined,
  dateCurrent?: Dayjs,
  active?: Dayjs,
  activeRangeEnd?: Dayjs,
) => {
  if (!dateCurrent || !active || !activeRangeEnd) return false;
  const dates = sortDatesAsc(activeRangeEnd, active, unit);
  return dateCurrent.isBetween(dates[0], dates[1], unit, '()');
};
export const dateIsRangeSelectingStart = (
  unit: dayjs.OpUnitType | undefined,
  dateCurrent?: Dayjs,
  active?: Dayjs,
  activeRangeEnd?: Dayjs,
  disabled?: boolean,
  hidden?: boolean,
) => {
  if (dateCurrent && active && activeRangeEnd && !disabled && !hidden) {
    const dates = sortDatesAsc(activeRangeEnd, active, unit);
    return dateCurrent.isSame(dates[0], unit);
  }
  return false;
};
export const dateIsRangeSelectingEnd = (
  unit: dayjs.OpUnitType | undefined,
  dateCurrent?: Dayjs,
  active?: Dayjs,
  activeRangeEnd?: Dayjs,
  disabled?: boolean,
  hidden?: boolean,
) => {
  if (dateCurrent && active && activeRangeEnd && !disabled && !hidden) {
    const dates = sortDatesAsc(activeRangeEnd, active, unit);
    return dateCurrent.isSame(dates[1], unit);
  }
  return false;
};

function getMaxUnitDay(startDate: Dayjs, unit: UnitType) {
  switch (unit) {
    case 'month':
      return startDate.endOf('month').date();
    case 'year':
      return getDaysInYear(startDate);
    default:
      return 0;
  }
}

export function getUnitAttributes(
  startDate: Dayjs,
  unit: UnitType,
  dateAttrs?: (currentDate: Dayjs) => DateAttributes,
): DateAttributes {
  if (!dateAttrs) return {};
  const attrs: DateAttributes = {};
  const maxDate = getMaxUnitDay(startDate, unit);
  const firstDate = startDate.startOf(unit);
  let i = 0;
  while (!(attrs.disabled === false && attrs.isHoliday === false && attrs.hidden === false) && i < maxDate) {
    const res = dateAttrs(firstDate.add(i, 'day'));
    if (attrs.disabled !== false) attrs.disabled = res.disabled;
    if (attrs.isHoliday !== false) attrs.isHoliday = res.isHoliday;
    if (attrs.hidden !== false) attrs.hidden = res.hidden;
    i++;
  }

  return attrs;
}

export function getMonthAttributes(
  startDate: Dayjs,
  dateAttrs?: (currentDate: Dayjs) => DateAttributes,
): DateAttributes {
  return getUnitAttributes(startDate, 'month', dateAttrs);
}

export function getYearAttributes(startDate: Dayjs, dateAttrs?: (currentDate: Dayjs) => DateAttributes) {
  return getUnitAttributes(startDate, 'year', dateAttrs);
}

export const getSelectedDate = (selected?: Dayjs | DateRange) => {
  return isDayjs(selected) ? selected : undefined;
};
export const getSelectedDateRange = (selected?: Dayjs | DateRange) => {
  return isDayjs(selected) ? undefined : selected;
};

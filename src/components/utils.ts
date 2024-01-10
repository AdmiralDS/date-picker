import dayjs from 'dayjs';
import type { Dayjs, ManipulateType } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import DayOfYear from 'dayjs/plugin/dayOfYear';

dayjs.extend(localeData);
dayjs.extend(CustomParseFormat);
dayjs.extend(LocalizedFormat);
dayjs.extend(utc);
dayjs.extend(isLeapYear);
dayjs.extend(DayOfYear);

export const getDaysInYear = (date: Dayjs) => {
  return date.isLeapYear() ? 366 : 365;
};

export const getDateByDayOfYear = (date: Dayjs, dayOfYear: number) => {
  return date.dayOfYear(dayOfYear);
};

export const getCurrentDate = (locale?: string) => {
  if (locale) return setNoon(dayjs().locale(locale));
  return setNoon(dayjs());
};

export const dateStringToDayjs = (dateString?: string, locale?: string) => {
  if (dateString === undefined) return undefined;
  const date = setNoon(dayjs(dateString));
  if (!date.isValid()) return undefined;
  if (locale) return date.locale(locale);
  return date;
};

export const dayjsDateToString = (date: Dayjs) => {
  return date.toISOString();
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
  selectedDateRange?: [Dayjs | undefined, Dayjs | undefined],
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
  selectedDateRange?: [Dayjs | undefined, Dayjs | undefined],
) => {
  if (!dateCurrent || !selectedDateRange) return false;
  if (dateCurrent.isSame(selectedDateRange[0], unit)) {
    return true;
  }
  return dateCurrent.isSame(selectedDateRange[1], unit);
};
export const dateIsRangeStart = (
  unit: dayjs.OpUnitType | undefined,
  dateCurrent?: Dayjs,
  selectedDateRange?: [Dayjs | undefined, Dayjs | undefined],
) => {
  if (!dateCurrent || !selectedDateRange || !selectedDateRange[0] || !selectedDateRange[1]) return false;
  const dates = sortDatesAsc(selectedDateRange[0], selectedDateRange[1], unit);
  return dateCurrent.isSame(dates[0], unit);
};
export const dateIsRangeEnd = (
  unit: dayjs.OpUnitType | undefined,
  dateCurrent?: Dayjs,
  selectedDateRange?: [Dayjs | undefined, Dayjs | undefined],
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

export const monthIsDisabled = (dateCurrent?: Dayjs, disabledDate?: (currentDate: Dayjs) => boolean) => {
  if (!dateCurrent || !disabledDate) {
    return false;
  }
  const datesArray = Array.from(Array(dateCurrent.endOf('month').date()).keys());
  return datesArray.every((v) => {
    const date = dateCurrent.date(v);
    return disabledDate(date);
  });
};

export const yearIsDisabled = (dateCurrent?: Dayjs, disabledDate?: (currentDate: Dayjs) => boolean) => {
  if (!dateCurrent || !disabledDate) {
    return false;
  }
  const datesArray = Array.from(Array(getDaysInYear(dateCurrent)).keys());
  return datesArray.every((v) => {
    const date = getDateByDayOfYear(dateCurrent, v);
    return disabledDate(date);
  });
};

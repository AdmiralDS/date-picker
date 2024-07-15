import { addOrSubstractDays } from './dateTimestampUtils';

function toStringPadZero(num: number, targetLength = 2) {
  return String(num).padStart(targetLength, '0');
}

/**
 * Форматирует дату в виде "2024-07-10T15:02:01+03:00" в локальной временной зоне
 * @param date дата для форматирования
 * @returns строку с отформатированной датой
 */
export function formatDateToIsoTimezoneString(date: Date) {
  const tzo = -date.getTimezoneOffset();
  const dif = tzo >= 0 ? '+' : '-';

  return (
    toStringPadZero(date.getFullYear(), 4) +
    '-' +
    toStringPadZero(date.getMonth() + 1) +
    '-' +
    toStringPadZero(date.getDate()) +
    'T' +
    toStringPadZero(date.getHours()) +
    ':' +
    toStringPadZero(date.getMinutes()) +
    ':' +
    toStringPadZero(date.getSeconds()) +
    dif +
    toStringPadZero(Math.floor(Math.abs(tzo) / 60)) +
    ':' +
    toStringPadZero(Math.abs(tzo) % 60)
  );
}
/**
 * Форматирует дату в виде DD.MM.YYYY или DD/MM/YYYY в локальной временной зоне
 * @param date дата для форматирования
 * @param separator символ разделителя цифр
 * @returns строку с отформатированной датой
 */
export function formatDateToLocalDateString(date: Date, separator = '.') {
  return (
    toStringPadZero(date.getDate()) +
    separator +
    toStringPadZero(date.getMonth() + 1) +
    separator +
    toStringPadZero(date.getFullYear(), 4)
  );
}

/** Возвращает текущую локаль браузера */
export const getLanguage = () =>
  (navigator.languages && navigator.languages.length && navigator.languages[0]) || navigator.language || 'en';

/**
 * Возращает массив имен дней недели для определенной локали
 * @param locales локаль для имен, по умолчанию текущая
 * @returns массив имен дней недели, воскресенье под индексом 0, понедельник - 1, итд.
 */
export function weekdayNameList(
  locales: Intl.LocalesArgument = getLanguage(),
  weekday: 'long' | 'short' | 'narrow' = 'short',
) {
  const date = new Date();
  const day = date.getDay();
  const formatter = new Intl.DateTimeFormat(locales, { weekday });
  const weekdayNames = Array.from(Array(7).keys()).map((num) => {
    const weekDate = addOrSubstractDays(date.getTime(), num - day);
    const dayName = formatter.format(weekDate);
    return dayName;
  });
  return weekdayNames;
}

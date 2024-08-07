/**
 * Возвращает Date установленный на полночь с воскресенья на понедельник недели в текущей таймзоне.
 * @param timestamp милисекунды, прошедшие с 1 января 1970 года 00:00:00 по UTC.
 * @returns Date установленный на понедельник недели в текущей таймзоне.
 */
export function mondayOfTheWeek(timestamp: number) {
  const someDate = midnightOfTheDate(timestamp);
  const day = someDate.getDay() || 7;
  return addOrSubstractDays(someDate.getTime(), -day + 1);
}

/**
 * Возвращает Date установленный на полночь первого дня месяца в текущей таймзоне.
 * @param timestamp милисекунды, прошедшие с 1 января 1970 года 00:00:00 по UTC.
 * @returns Date установленный на полночь первого дня месяца в текущей таймзоне.
 */
export function firstDayOfTheMonth(timestamp: number) {
  const someDate = midnightOfTheDate(timestamp);
  someDate.setDate(1);
  return someDate;
}

/**
 * Возвращает Date установленный на полночь текущей даты в текущей таймзоне.
 * @param timestamp милисекунды, прошедшие с 1 января 1970 года 00:00:00 по UTC.
 * @returns Date установленный на полночь в текущей таймзоне.
 */
export function midnightOfTheDate(timestamp: number) {
  const someDate = new Date(timestamp);
  someDate.setHours(0, 0, 0, 0);
  return someDate;
}

/**
 * Добавляет или вычитает N дней в зависимости от знака с учетом изменения месяца
 * @param timestamp милисекунды, прошедшие с 1 января 1970 года 00:00:00 по UTC.
 * @param n количество дней добавить или вычесть в зависимости от знака числа
 * @returns Date установленный на полночь в текущей таймзоне.
 */
export function addOrSubstractDays(timestamp: number, n: number) {
  const someDate = midnightOfTheDate(timestamp);
  someDate.setHours(24 * n);
  return someDate;
}
/**
 * Проверяет две даты на то что они находятся в одном календарном дне для текущей таймзоны
 * @param oneTimestamp милисекунды, прошедшие с 1 января 1970 года 00:00:00 по UTC.
 * @param anotherTimestamp милисекунды, прошедшие с 1 января 1970 года 00:00:00 по UTC.
 * @returns true если обе даты находятся в одном календарном дне для текущей таймзоны
 */
export function isInTheSameCalendarDay(oneTimestamp: number, anotherTimestamp: number) {
  const oneDate = new Date(oneTimestamp);
  const anotherDate = new Date(anotherTimestamp);
  return (
    oneDate.getDate() === anotherDate.getDate() &&
    oneDate.getMonth() === anotherDate.getMonth() &&
    oneDate.getFullYear() === anotherDate.getFullYear()
  );
}

/**
 * Проверяет две даты на то что они находятся в одном календарном месяце для текущей таймзоны
 * @param oneTimestamp милисекунды, прошедшие с 1 января 1970 года 00:00:00 по UTC.
 * @param anotherTimestamp милисекунды, прошедшие с 1 января 1970 года 00:00:00 по UTC.
 * @returns true если обе даты находятся в одном календарном месяце для текущей таймзоны
 */
export function isInTheSameCalendarMonth(oneTimestamp: number, anotherTimestamp: number) {
  const oneDate = new Date(oneTimestamp);
  const anotherDate = new Date(anotherTimestamp);
  return oneDate.getMonth() === anotherDate.getMonth() && oneDate.getFullYear() === anotherDate.getFullYear();
}

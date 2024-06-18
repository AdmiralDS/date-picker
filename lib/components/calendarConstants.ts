import type { CalendarLocaleProps } from '#lib/calendarInterfaces.ts';

export const CALENDAR_WIDTH = 284;
export const CALENDAR_HEIGHT = 356;

export const ruLocale: CalendarLocaleProps = {
  localeName: 'ru',
  localeText: {
    backwardText: 'Назад',
    forwardText: 'Вперед',
    nextMonthText: 'Следующий месяц',
    previousMonthText: 'Предыдущий месяц',
    returnText: 'Вернуться',
    selectYearText: 'Выбор года',
    selectMonthText: 'Выбор месяца',
  },
};
export const enLocale: CalendarLocaleProps = {
  localeName: 'en',
  localeText: {
    backwardText: 'Back',
    forwardText: 'Forward',
    nextMonthText: 'Next month',
    previousMonthText: 'Previous month',
    returnText: 'Return',
    selectYearText: 'Select year',
    selectMonthText: 'Select month',
  },
};

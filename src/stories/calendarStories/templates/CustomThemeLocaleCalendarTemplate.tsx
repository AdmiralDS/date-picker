import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { css, ThemeProvider } from 'styled-components';
import 'dayjs/locale/de';

import type { Locale, Theme } from '@admiral-ds/react-ui';

import { Calendar } from '@admiral-ds/date-picker';
import type { CalendarProps, CalendarViewMode } from '@admiral-ds/date-picker';
import { dateStringToDayjs, dayjsDateToString } from '#src/components/Calendar/utils';

const weekendMixin = css<{ disabled?: boolean }>`
  color: ${(p) => (p.disabled ? p.theme.color['Error/Error 30'] : p.theme.color['Error/Error 60 Main'])};
`;

const highlightSundays = (date: Dayjs) => {
  if (date.day() === 0) {
    return weekendMixin;
  }
  return undefined;
};

const deLocale: Locale = {
  /** Число от 0 до 6, где 0 - это воскресенье */
  firstDayOfWeek: 1,
  badge: {
    amountAriaLabel: 'Anzahl',
  },
  calendar: {
    backwardText: 'Zurück',
    forwardText: 'Vorwärts',
    nextMonthText: 'Nächster Monat',
    previousMonthText: 'Vorheriger Monat',
    returnText: 'Zurück sein',
    selectYearText: 'Wahl des Jahres',
    selectMonthText: 'Monatsauswahl',
  },
  fileInput: {
    metricUnits: ['Kb', 'Mb', 'Gb'],
  },
  groupActionsPane: {
    inputPlaceholder: 'In der Tabelle suchen',
  },
  hint: {
    closeButtonAriaLabel: 'Tipp schließen',
  },
  modal: {
    closeButtonAriaLabel: 'Modales Fenster schließen',
  },
  paginationOne: {
    itemsPerPageText: 'Einträge pro Seite:',
    pageSelectLabel: (page: number, totalPages: number) => `Seite ${page} von ${totalPages}`,
    pageSizeSelectLabel: (pageSize: number, total: number) => `Einträge ${pageSize} von ${total}`,
    itemRangeText: (min: number, max: number, total: number) => `${min}–${max} einträge von ${total}`,
    pageRangeText: (total: number) => `von ${total} ${total === 1 ? 'Seite' : 'Seiten'}`,
    backwardText: 'Vorherige Seite, auswählen',
    forwardText: 'Nächste Seite, auswählen',
  },
  paginationTwo: {
    inputPlaceholder: '№ Seiten',
    itemRangeText: (min: number, max: number, total: number) => `${min}–${max} einträge von ${total}`,
  },
  progressStepper: {
    renderNextStepName: (stepName: string) => `Weiter - ${stepName}`,
    stepName: ['schritt', 'schritte'],
    progressText: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) =>
      `${activeStepNumber} von ${stepsAmount} ${stepNamePlural}`,
  },
  select: {
    emptyMessage: 'Keine Zufälle',
  },
  suggestInput: {
    emptyMessage: 'Keine Zufälle',
  },
  table: {
    emptyMessage: 'Keine Zufälle',
  },
};

const customThemeLocaleName = 'de';

export const CustomThemeLocaleCalendarTemplate = ({
  rangePicker = false,
  doubleView = false,
  ...props
}: CalendarProps) => {
  function setDeLocale(theme: Theme): Theme {
    const newTheme = { ...theme, currentLocale: 'de', locales: { ...theme.locales, de: deLocale } };
    newTheme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return newTheme;
  }

  const [viewModeInner, setViewModeInner] = useState<CalendarViewMode>('DATES');
  const [selectedInner, setSelectedInner] = useState<Dayjs>(dayjs());
  const [startDateInner, setStartDateInner] = useState<Dayjs | undefined>(undefined);
  const [endDateInner, setEndDateInner] = useState<Dayjs | undefined>(undefined);

  const resetDateStatesInner = () => {
    setSelectedInner(dayjs());
    setStartDateInner(undefined);
    setEndDateInner(undefined);
  };

  useEffect(() => {
    switch (props.pickerType) {
      case 'DATE_MONTH_YEAR':
        setViewModeInner('DATES');
        break;
      case 'MONTH_YEAR':
        setViewModeInner('MONTHS');
        break;
      case 'YEAR':
        setViewModeInner('YEARS');
        break;
    }
    resetDateStatesInner();
  }, [props.pickerType]);

  useEffect(() => {
    resetDateStatesInner();
  }, [rangePicker]);

  const filterDate = (date: Dayjs) => {
    return date.date() < 7;
    //return date.isSame(dayjs(), 'date');
  };

  const handleDayClickInner = (dateString: string) => {
    const date = dateStringToDayjs(dateString, customThemeLocaleName);
    if (date) {
      console.log(`click on ${date.format('DD MMM YYYY')}`);
      if (rangePicker) {
        if (!startDateInner) {
          setStartDateInner(date);
        } else {
          if (!endDateInner) {
            if (date.isAfter(startDateInner)) {
              setEndDateInner(date);
            }
          } else {
            setStartDateInner(date);
            setEndDateInner(undefined);
          }
        }
      } else {
        setSelectedInner(date);
      }
    }
  };

  const handleMonthClickInner = (dateString: string) => {
    if (props.pickerType === 'MONTH_YEAR') {
      const date = dateStringToDayjs(dateString, customThemeLocaleName);
      if (date) {
        if (rangePicker) {
          if (!startDateInner) {
            setStartDateInner(date);
          } else {
            if (!endDateInner) {
              if (date.isAfter(startDateInner)) {
                setEndDateInner(date);
              }
            } else {
              setStartDateInner(date);
              setEndDateInner(undefined);
            }
          }
        } else {
          setSelectedInner(date);
        }
      }
    }
  };

  const handleYearClickInner = (dateString: string) => {
    if (props.pickerType === 'YEAR') {
      const date = dateStringToDayjs(dateString, customThemeLocaleName);
      if (date) {
        setSelectedInner(date);
      }
    }
  };
  const handleYearRangeClickInner = (dateString: string) => {
    if (props.pickerType === 'YEAR') {
      const date = dateStringToDayjs(dateString, customThemeLocaleName);
      if (date) {
        if (!startDateInner) {
          setStartDateInner(date);
        } else {
          if (!endDateInner) {
            if (date.isAfter(startDateInner)) {
              setEndDateInner(date);
            }
          } else {
            setStartDateInner(date);
            setEndDateInner(undefined);
          }
        }
      }
    }
  };

  const handleViewModeChangeInner = (viewMode: CalendarViewMode) => setViewModeInner(viewMode);

  return (
    <ThemeProvider theme={setDeLocale}>
      <div style={{ display: 'flex' }}>
        <Calendar
          doubleView={doubleView}
          rangePicker={rangePicker}
          pickerType={props.pickerType}
          viewMode={{ viewModeName: viewModeInner, onViewModeNameChange: handleViewModeChangeInner }}
          selected={dayjsDateToString(selectedInner)}
          startDate={startDateInner}
          endDate={endDateInner}
          onSelectCell={{
            onSelectDate: handleDayClickInner,
            onSelectMonth: handleMonthClickInner,
            onSelectYear: rangePicker ? handleYearRangeClickInner : handleYearClickInner,
          }}
          highlightSpecialDay={highlightSundays}
          locale={{ localeName: customThemeLocaleName }}
        />
      </div>
    </ThemeProvider>
  );
};

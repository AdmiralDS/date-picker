import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { css, ThemeProvider } from 'styled-components';
import 'dayjs/locale/de';

import type { Locale, Theme } from '@admiral-ds/react-ui';

import { Calendar } from '@admiral-ds/date-picker';
import type { CalendarProps, CalendarViewMode } from '@admiral-ds/date-picker';

const weekendMixin = css<{ disabled?: boolean }>`
  color: ${(p) => (p.disabled ? p.theme.color['Error/Error 30'] : p.theme.color['Error/Error 60 Main'])};
`;

const highlightSundays = (date: Dayjs) => {
  if (date.day() === 0) {
    return weekendMixin;
  }
  return undefined;
};

export const CustomThemeLocaleCalendarTemplate = ({
  rangePicker = false,
  doubleView = false,
  ...props
}: CalendarProps) => {
  function setDeLocale(theme: Theme): Theme {
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
    const newTheme = { ...theme, currentLocale: 'de', locales: { ...theme.locales, de: deLocale } };
    newTheme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return newTheme;
  }

  const [viewMode1, setViewMode1] = useState<CalendarViewMode>('DATES');
  const [selected1, setSelected1] = useState<Dayjs>(dayjs());
  const [startDate1, setStartDate1] = useState<Dayjs | undefined>(undefined);
  const [endDate1, setEndDate1] = useState<Dayjs | undefined>(undefined);

  const resetDateStates1 = () => {
    setSelected1(dayjs());
    setStartDate1(undefined);
    setEndDate1(undefined);
  };

  useEffect(() => {
    switch (props.pickerType) {
      case 'DATE_MONTH_YEAR':
        setViewMode1('DATES');
        break;
      case 'MONTH_YEAR':
        setViewMode1('MONTHS');
        break;
      case 'YEAR':
        setViewMode1('YEARS');
        break;
    }
    resetDateStates1();
  }, [props.pickerType]);

  useEffect(() => {
    resetDateStates1();
  }, [rangePicker]);

  const filterDate = (date: Dayjs) => {
    return date.date() < 7;
    //return date.isSame(dayjs(), 'date');
  };

  const handleDayClick1 = (date: Dayjs) => {
    console.log(`click on ${date.format('DD MMM YYYY')}`);
    if (rangePicker) {
      if (!startDate1) {
        setStartDate1(date);
      } else {
        if (!endDate1) {
          if (date.isAfter(startDate1)) {
            setEndDate1(date);
          }
        } else {
          setStartDate1(date);
          setEndDate1(undefined);
        }
      }
    } else {
      setSelected1(date);
    }
  };

  const handleMonthClick1 = (date: Dayjs) => {
    if (props.pickerType === 'MONTH_YEAR') {
      if (rangePicker) {
        if (!startDate1) {
          setStartDate1(date);
        } else {
          if (!endDate1) {
            if (date.isAfter(startDate1)) {
              setEndDate1(date);
            }
          } else {
            setStartDate1(date);
            setEndDate1(undefined);
          }
        }
      } else {
        setSelected1(date);
      }
    }
  };

  const handleYearClick1 = (date: Dayjs) => {
    if (props.pickerType === 'YEAR') {
      setSelected1(date);
    }
  };
  const handleYearRangeClick1 = (date: Dayjs) => {
    if (props.pickerType === 'YEAR') {
      if (!startDate1) {
        setStartDate1(date);
      } else {
        if (!endDate1) {
          if (date.isAfter(startDate1)) {
            setEndDate1(date);
          }
        } else {
          setStartDate1(date);
          setEndDate1(undefined);
        }
      }
    }
  };

  const handleViewModeChange1 = (viewMode: CalendarViewMode) => setViewMode1(viewMode);

  return (
    <ThemeProvider theme={setDeLocale}>
      <div style={{ display: 'flex' }}>
        <Calendar
          doubleView={doubleView}
          rangePicker={rangePicker}
          pickerType={props.pickerType}
          viewMode={{ viewModeName: viewMode1, onViewModeNameChange: handleViewModeChange1 }}
          selected={selected1}
          startDate={startDate1}
          endDate={endDate1}
          onSelectDate={handleDayClick1}
          onSelectMonth={handleMonthClick1}
          onSelectYear={rangePicker ? handleYearRangeClick1 : handleYearClick1}
          highlightSpecialDay={highlightSundays}
          locale={{ localeName: 'de' }}
        />
      </div>
    </ThemeProvider>
  );
};

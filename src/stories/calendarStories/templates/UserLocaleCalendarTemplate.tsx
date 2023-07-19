import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { css, ThemeProvider } from 'styled-components';
import 'dayjs/locale/es';

import type { Theme } from '@admiral-ds/react-ui';

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

const userLocaleName = 'es';

export const UserLocaleCalendarTemplate = ({ rangePicker = false, doubleView = false, ...props }: CalendarProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const customLocale = {
    backwardText: 'Atrás',
    forwardText: 'Adelante',
    nextMonthText: 'El mes que viene',
    previousMonthText: 'El mes anterior',
    returnText: 'Salir',
    selectYearText: 'Seleccionar un año',
    selectMonthText: 'Seleccionar un mes',
  };

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
    const date = dateStringToDayjs(dateString, userLocaleName);
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
      const date = dateStringToDayjs(dateString, userLocaleName);
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
      const date = dateStringToDayjs(dateString, userLocaleName);
      if (date) {
        setSelectedInner(date);
      }
    }
  };
  const handleYearRangeClickInner = (dateString: string) => {
    if (props.pickerType === 'YEAR') {
      const date = dateStringToDayjs(dateString, userLocaleName);
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
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex' }}>
        <Calendar
          doubleView={doubleView}
          rangePicker={rangePicker}
          pickerType={props.pickerType}
          selected={dayjsDateToString(selectedInner)}
          startDate={startDateInner}
          endDate={endDateInner}
          onSelectCell={{
          viewMode={{ viewModeName: viewModeInner, onViewModeNameChange: handleViewModeChangeInner }}
            onSelectDate: handleDayClickInner,
            onSelectMonth: handleMonthClickInner,
            onSelectYear: rangePicker ? handleYearRangeClickInner : handleYearClickInner,
          }}
          highlightSpecialDay={highlightSundays}
          locale={{ localeName: userLocaleName, localeText: customLocale }}
        />
      </div>
    </ThemeProvider>
  );
};

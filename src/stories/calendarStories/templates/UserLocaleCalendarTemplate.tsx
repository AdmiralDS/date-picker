import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { css, ThemeProvider } from 'styled-components';
import 'dayjs/locale/es';

import type { Theme } from '@admiral-ds/react-ui';

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

export const UserLocaleCalendarTemplate = ({ rangePicker = false, doubleView = false, ...props }: CalendarProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const customLocale = {
    backwardText: 'Atrás',
    forwardText: 'Adelante',
    nextMonthText: 'El mes que viene',
    previousMonthText: 'Mes anterior',
    returnText: 'Devolver',
    selectYearText: 'Seleccionar año',
    selectMonthText: 'Seleccionar mes',
  };

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
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex' }}>
        <Calendar
          doubleView={doubleView}
          rangePicker={rangePicker}
          pickerType={props.pickerType}
          viewMode={viewMode1}
          onViewModeChange={handleViewModeChange1}
          selected={selected1}
          startDate={startDate1}
          endDate={endDate1}
          onSelectDate={handleDayClick1}
          onSelectMonth={handleMonthClick1}
          onSelectYear={rangePicker ? handleYearRangeClick1 : handleYearClick1}
          highlightSpecialDay={highlightSundays}
          userLocale="es"
          locale={customLocale}
        />
      </div>
    </ThemeProvider>
  );
};

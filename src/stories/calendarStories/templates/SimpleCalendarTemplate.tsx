import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { css, ThemeProvider } from 'styled-components';

import type { Theme } from '@admiral-ds/react-ui';

import { Calendar } from '@admiral-ds/date-picker';
import type { CalendarProps, CalendarViewMode } from '@admiral-ds/date-picker';
import { dateStringToDayjs } from '#src/components/Calendar/utils';

const weekendMixin = css<{ disabled?: boolean }>`
  color: ${(p) => (p.disabled ? p.theme.color['Error/Error 30'] : p.theme.color['Error/Error 60 Main'])};
`;

const highlightSundays = (date: Dayjs) => {
  if (date.day() === 0) {
    return weekendMixin;
  }
  return undefined;
};

const simpleTemplateLocaleName = 'ru';

export const SimpleCalendarTemplate = ({ rangePicker = true, doubleView = true, ...props }: CalendarProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
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

  const filterDate = (dateString: string) => {
    const date = dateStringToDayjs(dateString, simpleTemplateLocaleName);
    return date && date.date() < 7;
  };

  const handleDayClickInner = (dateString: string) => {
    const date = dateStringToDayjs(dateString, simpleTemplateLocaleName);
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
      const date = dateStringToDayjs(dateString, simpleTemplateLocaleName);
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
      const date = dateStringToDayjs(dateString, simpleTemplateLocaleName);
      if (date) {
        setSelectedInner(date);
      }
    }
  };
  const handleYearRangeClickInner = (dateString: string) => {
    if (props.pickerType === 'YEAR') {
      const date = dateStringToDayjs(dateString, simpleTemplateLocaleName);
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

  const handleViewModeChangeInner = useCallback((viewMode: CalendarViewMode) => setViewModeInner(viewMode), []);

  const viewModeMemo = useMemo(
    () => ({ viewModeName: viewModeInner, onViewModeNameChange: handleViewModeChangeInner }),
    [viewModeInner, handleViewModeChangeInner],
  );

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex' }}>
        <Calendar
          doubleView={doubleView}
          rangePicker={rangePicker}
          pickerType={props.pickerType}
          viewMode={viewModeMemo}
          selected={selectedInner.format('YYYY-MM-DDTHH:mm:ss')}
          startDate={startDateInner}
          endDate={endDateInner}
          /*startDate={startDate1?.format('YYYY-MM-DDTHH:mm:ss')}
          endDate={endDate1?.format('YYYY-MM-DDTHH:mm:ss')}*/
          onSelectCell={{
            onSelectDate: handleDayClickInner,
            onSelectMonth: handleMonthClickInner,
            onSelectYear: rangePicker ? handleYearRangeClickInner : handleYearClickInner,
          }}
          //disabledDate={filterDate}
          highlightSpecialDay={highlightSundays}
        />
      </div>
    </ThemeProvider>
  );
};

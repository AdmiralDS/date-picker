import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { css, ThemeProvider } from 'styled-components';

import type { Theme } from '@admiral-ds/react-ui';

import { CalendarOld } from '@admiral-ds/date-picker';
import type { CalendarOldProps, CalendarOldViewMode } from '@admiral-ds/date-picker';
import { dateStringToDayjs, dayjsDateToString } from '#src/components/utils';

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

export const SimpleCalendarOldTemplate = ({ rangePicker = true, doubleView = true, ...props }: CalendarOldProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [viewModeInner, setViewModeInner] = useState<CalendarOldViewMode>('DATES');
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

  const handleViewModeChangeInner = (viewMode: CalendarOldViewMode) => setViewModeInner(viewMode);

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex' }}>
        <CalendarOld
          doubleView={doubleView}
          rangePicker={rangePicker}
          pickerType={props.pickerType}
          viewMode={{ viewModeName: viewModeInner, onViewModeNameChange: handleViewModeChangeInner }}
          selectedDate={{
            selectedDateValue: dayjsDateToString(selectedInner),
            onSelectDate: handleDayClickInner,
            onSelectMonth: handleMonthClickInner,
            onSelectYear: rangePicker ? handleYearRangeClickInner : handleYearClickInner,
          }}
          startDate={startDateInner}
          endDate={endDateInner}
          //disabledDate={filterDate}
          highlightSpecialDay={highlightSundays}
        />
      </div>
    </ThemeProvider>
  );
};

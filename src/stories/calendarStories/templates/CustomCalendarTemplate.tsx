import type { MouseEvent } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import styled, { ThemeProvider } from 'styled-components';

import type { Theme } from '@admiral-ds/react-ui';

import { Calendar, DAY_BORDER_RADIUS, DayCellWrapper } from '@admiral-ds/date-picker';
import type { CalendarProps, CalendarViewMode } from '@admiral-ds/date-picker';
import { dateStringToDayjs, dayjsDateToString } from '#src/components/Calendar/utils';

const StyledDay = styled(DayCellWrapper)`
  color: ${(p) => (p.disabled ? p.theme.color['Neutral/Neutral 10'] : p.theme.color['Error/Error 60 Main'])};
`;

const customCalendarTemplateLocale = 'en';

export const CustomCalendarTemplate = (props: CalendarProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [viewModeInner, setViewModeInner] = useState<CalendarViewMode>('DATES');
  const [selectedInner, setSelectedInner] = useState<Dayjs>(dayjs());
  const [viewDateInner, setViewDateInner] = useState<Dayjs>(selectedInner);
  const [activeDateInner, setActiveDateInner] = useState<Dayjs | undefined>(undefined);

  const resetDateStatesInner = () => {
    setSelectedInner(dayjs());
    //setStartDateInner(undefined);
    //setEndDateInner(undefined);
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
    //resetDateStatesInner();
  }, [props.pickerType]);

  useEffect(() => {
    //resetDateStatesInner();
  }, [props.rangePicker]);

  const filterDate = (dateString: string) => {
    const date = dateStringToDayjs(dateString, customCalendarTemplateLocale);
    return date && date.date() < 7;
  };

  const handleDayClickInner = (dateString: string) => {
    const date = dateStringToDayjs(dateString, customCalendarTemplateLocale);
    if (date) {
      console.log(`click on ${date.format('DD MMM YYYY')}`);
      setSelectedInner(date);
      setViewDateInner(date);
    }
  };

  const handleMonthClickInner = (dateString: string) => {
    if (props.pickerType === 'MONTH_YEAR') {
      const date = dateStringToDayjs(dateString, customCalendarTemplateLocale);
      if (date) {
        setSelectedInner(date);
        setViewDateInner(date);
      }
    }
  };

  const handleYearClickInner = (dateString: string) => {
    if (props.pickerType === 'YEAR') {
      const date = dateStringToDayjs(dateString, customCalendarTemplateLocale);
      if (date) {
        setSelectedInner(date);
        setViewDateInner(date);
      }
    }
  };

  const handleDayMouseEnterInner = (date: Dayjs, _: any) => {
    setActiveDateInner(date);
  };
  const handleDayMouseLeaveInner = (date: Dayjs, _: any) => {
    setActiveDateInner(undefined);
  };

  const customRenderDay = (dateString: string) => {
    const date = dateStringToDayjs(dateString, customCalendarTemplateLocale);
    if (!date) return <></>;

    const disabled = filterDate(dayjsDateToString(date));
    /*// ранее выбранный диапазон
    const inRange = !!startDate && !!endDate && date.isBetween(startDate, endDate, 'date', '[]');
    const rangeStart = !!startDate && date.isSame(startDate, 'date');
    const rangeEnd = !!startDate && !!endDate && date.isSame(endDate, 'date');
    // диапазон в процессе выбора
    const inSelectingRange = isInSelectingRange(date, disabled, startDate, endDate, activeDate);
    const rangeSelectingStart = inSelectingRange && date.isSame(startDate, 'date');
    const rangeSelectingEnd = inSelectingRange && date.isSame(activeDate, 'date');

    const weekStart = date.isSame(date.startOf('week'), 'date');
    const weekEnd = date.isSame(date.endOf('week'), 'date');
    const start = rangeStart || rangeSelectingStart;
    const end = rangeEnd || rangeSelectingEnd;*/
    return (
      <StyledDay
        key={date.valueOf()}
        today={date.isSame(dayjs(), 'date')}
        selected={date.isSame(selectedInner, 'date')}
        disabled={disabled}
        outsideMonth={!date.isSame(viewDateInner, 'month')}
        onClick={() => !disabled && handleDayClickInner(dayjsDateToString(date))}
        isActiveDate={!!activeDateInner && date.isSame(activeDateInner, 'date')}
        isRangeStart={false}
        isRangeEnd={false}
        isRowStart={false}
        isRowEnd={false}
        onMouseEnter={(e: MouseEvent) => !disabled && handleDayMouseEnterInner(date, e)}
        onMouseLeave={(e: MouseEvent) => !disabled && handleDayMouseLeaveInner(date, e)}
        borderRadius={DAY_BORDER_RADIUS}
      >
        {date.date()}
      </StyledDay>
    );
  };

  const handleViewDateChangeInner = (date: string) => {
    setViewDateInner(dayjs(date));
  };

  const handleViewModeChangeInner = useCallback((viewMode: CalendarViewMode) => setViewModeInner(viewMode), []);

  const viewModeMemo = useMemo(
    () => ({ viewModeName: viewModeInner, onViewModeNameChange: handleViewModeChangeInner }),
    [viewModeInner, handleViewModeChangeInner],
  );

  const viewDateMemo = useMemo(() => ({ onViewDateChange: handleViewDateChangeInner }), [handleViewDateChangeInner]);

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex' }}>
        <Calendar
          doubleView={props.doubleView}
          rangePicker={props.rangePicker}
          pickerType={props.pickerType}
          viewMode={viewModeMemo}
          selected={dayjsDateToString(selectedInner)}
          onSelectCell={{ onSelectMonth: handleMonthClickInner, onSelectYear: handleYearClickInner }}
          renderCell={{ renderDateCell: customRenderDay }}
          viewDate={viewDateMemo}
          locale={{ localeName: customCalendarTemplateLocale }}
        />
      </div>
    </ThemeProvider>
  );
};

import {useEffect, useState} from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import styled, { ThemeProvider } from 'styled-components';

import type { Theme } from '@admiral-ds/react-ui';

import { Calendar, DAY_BORDER_RADIUS, DayCellWrapper } from '@admiral-ds/date-picker';
import type { Calendar5Props, Calendar5ViewMode } from '@admiral-ds/date-picker';

const StyledDay = styled(DayCellWrapper)`
  color: ${(p) => (p.disabled ? p.theme.color['Neutral/Neutral 10'] : p.theme.color['Error/Error 60 Main'])};
`;

export const CustomCalendarTemplate = (props: Calendar5Props) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [viewMode2, setViewMode2] = useState<Calendar5ViewMode>('DATES');
  const [selected2, setSelected2] = useState<Dayjs>(dayjs());
  const [viewDate2, setViewDate2] = useState<Dayjs>(selected2);
  const [activeDate2, setActiveDate2] = useState<Dayjs | undefined>(undefined);

  const resetDateStates2 = () => {
    setSelected2(dayjs());
    //setStartDate2(undefined);
    //setEndDate2(undefined);
  };
  useEffect(() => {
    switch (props.pickerType) {
      case 'DATE_MONTH_YEAR':
        setViewMode2('DATES');
        break;
      case 'MONTH_YEAR':
        setViewMode2('MONTHS');
        break;
      case 'YEAR':
        setViewMode2('YEARS');
        break;
    }
    //resetDateStates2();
  }, [props.pickerType]);

  useEffect(() => {
    //resetDateStates2();
  }, [props.rangePicker]);

  const filterDate = (date: Dayjs) => {
    return date.date() < 7;
    //return date.isSame(dayjs(), 'date');
  };

  const handleDayClick2 = (date: Dayjs) => {
    console.log(`click on ${date.format('DD MMM YYYY')}`);
    setSelected2(date);
    setViewDate2(date);
  };

  const handleMonthClick2 = (date: Dayjs) => {
    if (props.pickerType === 'MONTH_YEAR') {
      setSelected2(date);
      setViewDate2(date);
    }
  };

  const handleYearClick2 = (date: Dayjs) => {
    if (props.pickerType === 'YEAR') {
      setSelected2(date);
      setViewDate2(date);
    }
  };

  const handleDayMouseEnter2 = (date: Dayjs, _: any) => {
    setActiveDate2(date);
  };
  const handleDayMouseLeave2 = (date: Dayjs, _: any) => {
    setActiveDate2(undefined);
  };

  const customRenderDay = (date: Dayjs) => {
    const disabled = filterDate(date);
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
        selected={date.isSame(selected2, 'date')}
        disabled={disabled}
        outsideMonth={!date.isSame(viewDate2, 'month')}
        onClick={() => !filterDate(date) && handleDayClick2(date)}
        isActiveDate={!!activeDate2 && date.isSame(activeDate2, 'date')}
        isRangeStart={false}
        isRangeEnd={false}
        isRowStart={false}
        isRowEnd={false}
        onMouseEnter={(e: React.MouseEvent) => !disabled && handleDayMouseEnter2(date, e)}
        onMouseLeave={(e: React.MouseEvent) => !disabled && handleDayMouseLeave2(date, e)}
        borderRadius={DAY_BORDER_RADIUS}
      >
        {date.date()}
      </StyledDay>
    );
  };

  const handleViewDateChange2 = (date: Dayjs) => {
    setViewDate2(date);
  };

  const handleViewModeChange2 = (viewMode: Calendar5ViewMode) => setViewMode2(viewMode);

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex' }}>
        <Calendar
          doubleView={props.doubleView}
          rangePicker={props.rangePicker}
          pickerType={props.pickerType}
          viewMode={viewMode2}
          onViewModeChange={handleViewModeChange2}
          selected={selected2}
          onSelectMonth={handleMonthClick2}
          onSelectYear={handleYearClick2}
          renderDateCell={customRenderDay}
          onViewDateChange={handleViewDateChange2}
          userLocale="en"
        />
      </div>
    </ThemeProvider>
  );
};

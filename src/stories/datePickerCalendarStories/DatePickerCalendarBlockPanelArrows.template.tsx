import type { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { T } from '@admiral-ds/react-ui';
import type { CalendarViewMode, DateAttributes, DatePickerCalendarProps } from '@admiral-ds/date-picker';
import { DatePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';

const minDate = dayjs().startOf('year');
const maxDate = dayjs().add(10, 'year').endOf('year');

const getUnitType = (mode: CalendarViewMode) => {
  switch (mode) {
    case 'years':
      return 'year';
    case 'months':
      return 'month';
    case 'dates':
    default:
      return 'date';
  }
};
const getPrevDate = (date: Dayjs, viewMode: CalendarViewMode) => {
  switch (viewMode) {
    case 'years':
      return date.subtract(YEARS_ON_SCREEN, 'year');
    case 'months':
      return date.subtract(1, 'year');
    case 'dates':
    default:
      return date.subtract(1, 'month');
  }
};
const getNextDate = (date: Dayjs, viewMode: CalendarViewMode) => {
  switch (viewMode) {
    case 'years':
      return date.add(YEARS_ON_SCREEN, 'year');
    case 'months':
      return date.add(1, 'year');
    case 'dates':
    default:
      return date.add(1, 'month');
  }
};

export const DatePickerCalendarBlockPanelArrowsTemplate = (props: DatePickerCalendarProps) => {
  const [viewMode, setViewMode] = useState<CalendarViewMode>('dates');
  const handleViewModeChange = (mode: CalendarViewMode) => {
    setViewMode(mode);
  };

  const [viewDate, setViewDate] = useState<Dayjs>(dayjs());
  const handleViewDateChange = (date: Dayjs) => {
    setViewDate(date);
  };

  const [prevArrowDisabled, setPrevArrowDisabled] = useState<boolean>(false);
  useEffect(() => {
    const prevDate = getPrevDate(viewDate, viewMode);
    const unit = getUnitType(viewMode);
    if (prevDate.isBefore(minDate, unit)) {
      setPrevArrowDisabled(true);
    } else {
      if (prevArrowDisabled) {
        setPrevArrowDisabled(false);
      }
    }
  }, [viewDate, viewMode]);

  const [nextArrowDisabled, setNextArrowDisabled] = useState<boolean>(false);
  useEffect(() => {
    const unit = getUnitType(viewMode);
    const nextDate = getNextDate(viewDate, viewMode);
    if (nextDate.isAfter(maxDate, unit)) {
      setNextArrowDisabled(true);
    } else {
      if (nextArrowDisabled) {
        setNextArrowDisabled(false);
      }
    }
  }, [viewDate, viewMode]);

  const dateAttrs: (date: Dayjs) => DateAttributes = (date: Dayjs) => {
    return { disabled: date.isBefore(minDate, 'date') || date.isAfter(maxDate, 'date') };
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
  };

  return (
    <WrapperHorizontal>
      <DatePickerCalendar
        {...props}
        onClick={handleClick}
        defaultViewModeValue={'dates'}
        defaultDateValue={dayjs()}
        onDateValueChange={handleViewDateChange}
        onViewModeChange={handleViewModeChange}
        prevButtonProps={{ disabled: prevArrowDisabled }}
        nextButtonProps={{ disabled: nextArrowDisabled }}
        dateAttributes={dateAttrs}
      />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор даты
        </T>
        <T font="Body/Body 2 Long" as="div">
          При необходимости можно блокировать кнопки панели
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

import type { ComponentProps, MouseEventHandler } from 'react';
import { forwardRef, useRef, useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { refSetter } from '@admiral-ds/react-ui';
import { DateRangePickerCalendar } from '#lib/DateRangePickerCalendar';
import type { InputBoxProps } from '#lib/Input/InputBox';
import { InputBox } from '#lib/Input/InputBox';
import type { InputLineProps } from '#lib/Input/InputLine';
import { InputIconButton } from '#lib/InputIconButton';
import CalendarOutline from '@admiral-ds/icons/build/system/CalendarOutline.svg?react';
import { PopoverPanel } from '#lib/PopoverPanel';
import type { CalendarViewMode } from '#lib/calendarInterfaces.js';
import type { DateRange } from 'lib/types';
import { RangeInput, RangeInputProps } from '#lib/Input/RangeInput';

const Calendar = styled(DateRangePickerCalendar)`
  border: none;
  box-shadow: none;
`;

export type DateRangePickerProps = InputBoxProps & {
  /** Пропсы внутреннего инпута */
  inputPropsStart?: InputLineProps;
  /** Пропсы внутреннего инпута */
  inputPropsEnd?: InputLineProps;

  /** Функция для конвертации значение календаря в строку инпута */
  format?: (date?: Dayjs) => string;

  // TODO: typo!!! parSe
  /** Функция для конвертации строки инпута в значение календаря */
  parce?: (date?: string) => Dayjs | undefined;

  separator?: string;
};

/**
 * Компонент DateRangePicker
 */
export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    { inputPropsStart = {}, inputPropsEnd = {}, separator = '\u2014', format, parce, ...containerProps },
    refContainerProps,
  ) => {
    const [displayDate, setDisplayDate] = useState(dayjs());

    const inputBoxRef = useRef(null);

    const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);
    const handleCalendarVisibilityChange = (newState: boolean) => {
      setCalendarOpen(newState);
    };

    const [activeDate, setActiveDate] = useState<Dayjs | undefined>(undefined);
    const handleActiveDateValueChange = (date?: Dayjs) => {
      if (calendarViewMode === 'dates') {
        setActiveDate(date);
      }
    };

    const [calendarViewMode, setCalendarViewMode] = useState<CalendarViewMode>('dates');

    const handleInputIconButtonMouseDown: MouseEventHandler<Element> = (e) => {
      e.preventDefault();
      setCalendarOpen((isOpen) => !isOpen);
    };

    const [selectedRange, setSelectedRange] = useState<DateRange>([undefined, undefined]);
    const handleSelectedDateValueChange = (dateRange: DateRange) => {
      if (calendarViewMode === 'dates') {
        setSelectedRange(dateRange);
      }
    };

    const handleCalendarViewModeChange = (view: CalendarViewMode) => {
      setCalendarViewMode(view);
    };

    // TODO смержить с оригинальными обработчиками из пропсов
    const containerFinalProps: ComponentProps<typeof InputBox> = {
      ...containerProps,
      ref: refSetter(inputBoxRef, refContainerProps),
    };

    const rangeInputProps: RangeInputProps = {
      'data-size': containerProps['data-size'],

      inputPropsStart: inputPropsStart,
      inputPropsEnd: inputPropsEnd,
      isCalendarOpen: isCalendarOpen,
      changeCalendarVisibility: handleCalendarVisibilityChange,
      separator: separator,
      activeDate: activeDate,
      selectedRange: selectedRange,
      onSelectedRangeChange: handleSelectedDateValueChange,
      format: format,
      parce: parce,
    };

    return (
      <InputBox {...containerFinalProps} style={{ alignItems: 'center' }}>
        <RangeInput {...rangeInputProps} />
        <InputIconButton icon={CalendarOutline} onMouseDown={handleInputIconButtonMouseDown} />
        {isCalendarOpen && (
          <PopoverPanel targetElement={inputBoxRef.current} alignSelf="auto" onMouseDown={(e) => e.preventDefault()}>
            <Calendar
              onViewModeChange={handleCalendarViewModeChange}
              dateValue={displayDate}
              onDateValueChange={(day) => setDisplayDate(day)}
              selectedDateRangeValue={selectedRange}
              onSelectedDateRangeValueChange={handleSelectedDateValueChange}
              onActiveDateValueChange={handleActiveDateValueChange}
            />
          </PopoverPanel>
        )}
      </InputBox>
    );
  },
);
DateRangePicker.displayName = 'DateRangePicker';

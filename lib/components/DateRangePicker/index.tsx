import type { ComponentProps, MouseEventHandler } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
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
import { defaultDateParser } from '#lib/utils';

function dateRangeFromValue(
  values?: Array<string | undefined>,
  parse: (date?: string) => Dayjs | undefined = defaultDateParser,
): DateRange {
  const [start, end] = values
    ? values.map((item) => {
        const parsedItem = parse(item);
        return parsedItem?.isValid() ? parsedItem : undefined;
      })
    : [undefined, undefined];
  return start && end && start.isAfter(end) ? ([end, start] as const) : ([start, end] as const);
}

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

  /** Функция для конвертации строки инпута в значение календаря */
  parse?: (date?: string) => Dayjs | undefined;

  separator?: string;
};

/**
 * Компонент DateRangePicker
 */
export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      inputPropsStart = {},
      inputPropsEnd = {},
      separator = '\u2014',
      format,
      parse = defaultDateParser,
      ...containerProps
    },
    refContainerProps,
  ) => {
    const [displayDate, setDisplayDate] = useState(dayjs());

    const inputBoxRef = useRef(null);

    const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);

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

    useEffect(() => {
      if (calendarViewMode === 'dates') {
        const startDate = parse(inputPropsStart.value);
        const endDate = parse(inputPropsEnd.value);

        const start = startDate?.isValid() ? startDate : undefined;
        const end = endDate?.isValid() ? endDate : undefined;

        setSelectedRange([start, end]);
      }
    }, [inputPropsStart, inputPropsEnd]);

    const handleCalendarViewModeChange = (view: CalendarViewMode) => {
      setCalendarViewMode(view);
    };

    // const handleRangeInputBegin = () => {
    //   setCalendarOpen(true);
    // };
    // const handleRangeInputFinish = () => {
    //   setCalendarOpen(false);
    // };

    // TODO смержить с оригинальными обработчиками из пропсов
    const containerFinalProps: ComponentProps<typeof InputBox> = {
      ...containerProps,
      ref: refSetter(inputBoxRef, refContainerProps),
    };

    const handleInputFocus = () => {
      setCalendarOpen(true);
    };

    const handleInputBlur = () => {
      setCalendarOpen(false);
    };

    const rangeInputProps: RangeInputProps = {
      'data-size': containerProps['data-size'],

      inputPropsStart: inputPropsStart,
      inputPropsEnd: inputPropsEnd,
      // isCalendarOpen: isCalendarOpen,
      // onRangeInputBegin: handleRangeInputBegin,
      // onRangeInputFinish: handleRangeInputFinish,
      separator: separator,
      activeDate: activeDate,
      // selectedRange: selectedRange,
      onSelectedRangeChange: handleSelectedDateValueChange,
      format: format,
      parse: parse,
      onFocus: handleInputFocus,
      onBlur: handleInputBlur,
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

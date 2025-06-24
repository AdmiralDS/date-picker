import type { ComponentProps, MouseEventHandler, Ref } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { changeInputData, refSetter } from '@admiral-ds/react-ui';
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
import { defaultDateFormatter, defaultDateParser } from '#lib/utils';

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

enum RangeSalectedState {
  initial = 0,
  firstSelected = 1,
  bothSelected = 2,
}

/**
 * Компонент DateRangePicker
 */
export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      inputPropsStart = {},
      inputPropsEnd = {},
      separator = '\u2014',
      format = defaultDateFormatter,
      parse = defaultDateParser,
      ...containerProps
    },
    refContainerProps,
  ) => {
    const [displayDate, setDisplayDate] = useState(dayjs());
    const [rangeSelectedState, setRangeSelectedState] = useState<RangeSalectedState>(RangeSalectedState.initial);

    const inputBoxRef = useRef(null);
    const startInputRef = useRef<HTMLInputElement>(null);
    const endInputRef = useRef<HTMLInputElement>(null);

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
        console.log(dateRange);

        const start = dateRange[0];
        const end = dateRange[1];

        if (start && start.isValid() && !start.isSame(selectedRange[0])) {
          const formattedStart = format(start);

          if (startInputRef.current) changeInputData(startInputRef.current, { value: formattedStart });
        }

        if (end && end.isValid() && !end.isSame(selectedRange[1])) {
          const formattedEnd = format(end);

          if (endInputRef.current) changeInputData(endInputRef.current, { value: formattedEnd });
        }

        setSelectedRange(dateRange);
        if (rangeSelectedState >= RangeSalectedState.firstSelected) {
          setCalendarOpen(false);
        } else {
          setRangeSelectedState(rangeSelectedState + 1);
        }
      }
    };

    useEffect(() => {
      if (isCalendarOpen) setRangeSelectedState(RangeSalectedState.initial);
    }, [isCalendarOpen]);

    // TODO: fix! Зацикливавется
    // useEffect(() => {
    //   if (calendarViewMode === 'dates') {
    //     const startDate = parse(inputPropsStart.value);
    //     const endDate = parse(inputPropsEnd.value);

    //     const start = startDate?.isValid() ? startDate : undefined;
    //     const end = endDate?.isValid() ? endDate : undefined;

    //     setSelectedRange([start, end]);
    //   }
    // }, [inputPropsStart, inputPropsEnd]);

    const handleCalendarViewModeChange = (view: CalendarViewMode) => {
      setCalendarViewMode(view);
    };

    // const handleRangeInputBegin = () => {
    //   setCalendarOpen(true);
    // };
    // const handleRangeInputFinish = () => {
    //   setCalendarOpen(false);
    // };
    const handleRangeInputCancel = () => {
      setCalendarOpen(false);
    };

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

    const startRef =
      inputPropsStart.ref !== undefined
        ? refSetter(startInputRef, inputPropsStart.ref as Ref<HTMLInputElement>)
        : startInputRef;

    const endRef =
      inputPropsEnd.ref !== undefined
        ? refSetter(endInputRef, inputPropsEnd.ref as Ref<HTMLInputElement>)
        : endInputRef;

    const rangeInputProps: RangeInputProps = {
      'data-size': containerProps['data-size'],

      inputPropsStart: { ...inputPropsStart, ref: startRef },
      inputPropsEnd: { ...inputPropsEnd, ref: endRef },
      separator: separator,
      activeDate: activeDate,
      onSelectedRangeChange: handleSelectedDateValueChange,
      format: format,
      parse: parse,
      onFocus: handleInputFocus,
      onBlur: handleInputBlur,
      onCancelInput: handleRangeInputCancel,
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

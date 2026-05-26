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

// function dateRangeFromValue(
//   values?: Array<string | undefined>,
//   parse: (date?: string) => Dayjs | undefined = defaultDateParser,
// ): DateRange {
//   const [start, end] = values
//     ? values.map((item) => {
//         const parsedItem = parse(item);
//         return parsedItem?.isValid() ? parsedItem : undefined;
//       })
//     : [undefined, undefined];
//   return start && end && start.isAfter(end) ? ([end, start] as const) : ([start, end] as const);
// }

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

    const inputBoxRef = useRef<HTMLDivElement>(null);
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
      startInputRef.current!.focus();
    };

    const [selectedRange, setSelectedRange] = useState<DateRange>([undefined, undefined]);
    const handleSelectedDateValueChange = (dateRange: DateRange) => {
      const secondSelection =
        inputBoxRef.current!.querySelector(':focus') === endInputRef.current &&
        rangeSelectedState === RangeSalectedState.initial;

      if (calendarViewMode === 'dates') {
        let start = dateRange[0];
        let end = dateRange[1];

        if (secondSelection) {
          (dateRange as unknown as (Dayjs | undefined)[]).reverse();

          start = selectedRange[0] || dateRange[0];
          end = selectedRange[1] === dateRange[1] ? selectedRange[1] : dateRange[1];
        }

        if (start && start.isValid() && !start.isSame(selectedRange[0])) {
          const formattedStart = format(start);

          if (startInputRef.current) changeInputData(startInputRef.current, { value: formattedStart });
        }

        if (end && end.isValid() && !end.isSame(selectedRange[1])) {
          const formattedEnd = format(end);

          if (endInputRef.current) changeInputData(endInputRef.current, { value: formattedEnd });
        }

        setSelectedRange(dateRange);
        if (secondSelection) {
          setRangeSelectedState(rangeSelectedState + 1);
          startInputRef.current!.focus();
        } else {
          if (rangeSelectedState >= RangeSalectedState.firstSelected) {
            setCalendarOpen(false);
            inputBoxRef.current!.blur();
            startInputRef.current!.blur();
            endInputRef.current!.blur();
          } else {
            setRangeSelectedState(rangeSelectedState + 1);
          }
        }
      }
    };

    useEffect(() => {
      if (isCalendarOpen) {
        setRangeSelectedState(RangeSalectedState.initial);
      }
    }, [isCalendarOpen]);

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
      // const startDate = parse(inputPropsStart.value);
      // const endDate = parse(inputPropsEnd.value);
      // console.log('🚀 ~ startDate:', startDate > endDate);

      // if (startDate > endDate) setSelectedRange([endDate, startDate]);
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

import type { ComponentProps, FocusEvent, KeyboardEventHandler, MouseEventHandler, Ref } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { refSetter, changeInputData } from '@admiral-ds/react-ui';
import { DateRangePickerCalendar } from '#lib/DateRangePickerCalendar';
import type { InputBoxProps } from '#lib/Input/InputBox';
import { InputBox } from '#lib/Input/InputBox';
import type { InputLineProps } from '#lib/Input/InputLine';
import { InputLine } from '#lib/Input/InputLine';
import { InputIconButton } from '#lib/InputIconButton';
import CalendarOutline from '@admiral-ds/icons/build/system/CalendarOutline.svg?react';
import { PopoverPanel } from '#lib/PopoverPanel';
import type { CalendarViewMode } from '#lib/calendarInterfaces.js';
import type { DateRange } from 'lib/types';

const Calendar = styled(DateRangePickerCalendar)`
  border: none;
  box-shadow: none;
`;

const defaultFormatter = (date?: Dayjs) => (date ? date.format('DD.MM.YYYY') : '');
const defaultParser = (date?: string) => dayjs(date, 'DD.MM.YYYY');

function dateRangeFromValue(value?: string, separator = ' – ', parse = defaultParser): DateRange {
  const [start, end] = value ? value.split(separator).map(parse) : [];
  return start && start.isAfter(end) ? ([end, start] as const) : ([start, end] as const);
}

// function formatRangeValue(start?: Dayjs, end?: Dayjs, separator = ' – ', format = defaultFormatter): string {
//   if (start && start.isValid()) {
//     if (!end || !end.isValid()) {
//       return format(start);
//     }
//     return start.isBefore(end) ? format(start) + separator + format(end) : format(end) + separator + format(start);
//   } else if (end && end.isValid()) {
//     return format(end);
//   }
//   return '';
// }

export type DateRangePickerProps = InputBoxProps & {
  /** Пропсы внутреннего инпута */
  inputProps?: InputLineProps;

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
    { inputProps = {}, separator = ' – ', format = defaultFormatter, parse = defaultParser, ...containerProps },
    refContainerProps,
  ) => {
    const [inputValue, setInputValue] = useState<string | undefined>(inputProps.value);
    const [displayDate, setDisplayDate] = useState(dayjs());
    const [tmpValue, setTmpValue] = useState<string | undefined>();
    const [isTmpValueDisplayed, setTmpValueDisplayed] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const inputBoxRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);
    const [calendarViewMode, setCalendarViewMode] = useState<CalendarViewMode>('dates');
    const [activeEnd, setActiveEnd] = useState<'start' | 'end' | 'none'>('start');

    const handleInputIconButtonMouseDown: MouseEventHandler<Element> = (e) => {
      e.preventDefault();
      if (isFocused) {
        setCalendarOpen((isOpen) => !isOpen);
      }
    };

    const handleSelectedDateValueChange = (dateRange: DateRange) => {
      const [dayStart, dayEnd] = dateRange;
      if (calendarViewMode === 'dates') {
        const formattedValue = `${format(dayStart)}${separator}${format(dayEnd)}`;
        setInputValue(formattedValue);
        if (activeEnd === 'start') {
          setActiveEnd('end');
        } else if (activeEnd === 'end') {
          setTmpValueDisplayed(false);
          setCalendarOpen(false);
        }
      }
    };

    const handleActiveDateValueChange = (date?: Dayjs) => {
      const [startString, endString] = tmpValue?.split(separator) ?? [];
      if (activeEnd === 'start') {
        setTmpValue(date ? format(date) + (endString ? separator + endString : '') : '');
      } else if (activeEnd === 'end') {
        setTmpValue(date ? startString + separator + format(date) : '');
      }

      if (calendarViewMode === 'dates') {
        setTmpValueDisplayed(!!date);
      }
    };

    const handleCalendarViewModeChange = (view: CalendarViewMode) => {
      setCalendarViewMode(view);
      if (view !== 'dates') {
        setTmpValue(undefined);
        setTmpValueDisplayed(false);
      }
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
      setCalendarOpen(false);
      setIsFocused(false);
      setTmpValueDisplayed(false);
      inputProps.onBlur?.(e);
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
      setCalendarOpen(true);
      setIsFocused(true);
      inputProps.onFocus?.(e);
    };

    const handleInputBoxMouseDown: MouseEventHandler<Element> = (e) => {
      if (e.target === e.currentTarget) e.preventDefault();
      if (!isFocused) {
        inputRef.current?.focus();
      }
    };

    const handleInputKeyDown: KeyboardEventHandler<Element> = (e) => {
      if (e.key === 'Enter' && isCalendarOpen) {
        e.preventDefault();
        setCalendarOpen(false);
        if (isTmpValueDisplayed && tmpValue) {
          setInputValue(tmpValue);
          setTmpValueDisplayed(false);
        }
      }
    };
    // TODO смержить с оригинальными обработчиками из пропсов
    const containerFinalProps: ComponentProps<typeof InputBox> = {
      ...containerProps,
      ref: refSetter(inputBoxRef, refContainerProps),
      onMouseDown: handleInputBoxMouseDown,
    };

    useEffect(() => {
      const inputNode = inputRef.current;
      if (inputNode) {
        const { value } = inputNode;
        if (inputValue !== value) {
          changeInputData(inputRef.current, { value: inputValue });
        }
      }
    }, [inputValue]);

    useEffect(() => {
      if (isCalendarOpen && inputRef.current) {
        const node = inputRef.current;
        const { value } = node;
        setInputValue(value);
      }
    }, [isCalendarOpen]);

    useEffect(() => {
      function oninput(this: HTMLInputElement) {
        const { value } = this;
        setTmpValueDisplayed(false);
        if (value !== inputValue) {
          setInputValue(value);
          setCalendarOpen(true);
        }
      }

      if (inputRef.current) {
        const node = inputRef.current;
        node.addEventListener('input', oninput, true);
        return () => {
          node.removeEventListener('input', oninput, true);
        };
      }
    }, [inputValue]);

    // useEffect(() => {
    //   const date = parse(inputValue);
    //   if (date.isValid()) {
    //     setDisplayDate(date);
    //   } else if (!inputValue) {
    //     setDisplayDate(dayjs());
    //   }
    // }, [inputValue]);

    const ref = inputProps.ref !== undefined ? refSetter(inputRef, inputProps.ref as Ref<HTMLInputElement>) : inputRef;
    const inputFinalProps: ComponentProps<typeof InputLine> = {
      ...inputProps,
      ref,
      onBlur: handleBlur,
      onFocus: handleFocus,
      tmpValue: isTmpValueDisplayed ? tmpValue : undefined,
    };

    const rangeTimestamp = dateRangeFromValue(inputValue);
    const [activeTmpStart, activeTmpEnd] = dateRangeFromValue(tmpValue);
    return (
      <InputBox {...containerFinalProps}>
        <InputLine {...inputFinalProps} onKeyDown={handleInputKeyDown} />
        <InputIconButton icon={CalendarOutline} onMouseDown={handleInputIconButtonMouseDown} />
        {isCalendarOpen && (
          <PopoverPanel targetElement={inputBoxRef.current} alignSelf="auto" onMouseDown={(e) => e.preventDefault()}>
            <Calendar
              onViewModeChange={handleCalendarViewModeChange}
              dateValue={displayDate}
              onDateValueChange={(day) => setDisplayDate(day)}
              selectedDateRangeValue={rangeTimestamp}
              onSelectedDateRangeValueChange={handleSelectedDateValueChange}
              activeDateValue={activeEnd === 'start' ? activeTmpStart : activeTmpEnd}
              onActiveDateValueChange={handleActiveDateValueChange}
            />
          </PopoverPanel>
        )}
      </InputBox>
    );
  },
);
DateRangePicker.displayName = 'DateRangePicker';

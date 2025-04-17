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
import { InputSeparator, InputSeparatorProps } from '#lib/Input/InputSeparator';
import { InputIconButton } from '#lib/InputIconButton';
import CalendarOutline from '@admiral-ds/icons/build/system/CalendarOutline.svg?react';
import { PopoverPanel } from '#lib/PopoverPanel';
import type { CalendarViewMode } from '#lib/calendarInterfaces.js';
import type { DateRange } from 'lib/types';
import { sortDateRange } from '#lib/utils';

const Calendar = styled(DateRangePickerCalendar)`
  border: none;
  box-shadow: none;
`;

const defaultFormatter = (date?: Dayjs) => (date ? date.format('DD.MM.YYYY') : '');
const defaultParcer = (date?: string) => dayjs(date, 'DD.MM.YYYY');

function dateRangeFromValue(
  values?: Array<string | undefined>,
  parce: (date?: string) => Dayjs | undefined = defaultParcer,
): DateRange {
  const [start, end] = values
    ? values.map((item) => {
        const parcedItem = parce(item);
        return parcedItem?.isValid() ? parcedItem : undefined;
      })
    : [undefined, undefined];
  return start && end && start.isAfter(end) ? ([end, start] as const) : ([start, end] as const);
}

export type DateRangePickerProps = InputBoxProps & {
  /** Пропсы внутреннего инпута */
  inputPropsStart?: InputLineProps;
  /** Пропсы внутреннего инпута */
  inputPropsEnd?: InputLineProps;

  /** Функция для конвертации значение календаря в строку инпута */
  format?: (date?: Dayjs) => string;

  /** Функция для конвертации строки инпута в значение календаря */
  parce?: (date?: string) => Dayjs | undefined;

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
      format = defaultFormatter,
      parce = defaultParcer,
      ...containerProps
    },
    refContainerProps,
  ) => {
    const [inputStartValue, setInputStartValue] = useState<string | undefined>(inputPropsStart.value);
    const [inputEndValue, setInputEndValue] = useState<string | undefined>(inputPropsEnd.value);
    const [displayDate, setDisplayDate] = useState(dayjs());
    const [tmpValueStart, setTmpValueStart] = useState<string | undefined>();
    const [isTmpValueStartDisplayed, setTmpValueStartDisplayed] = useState(false);
    const [tmpValueEnd, setTmpValueEnd] = useState<string | undefined>();
    const [isTmpValueEndDisplayed, setTmpValueEndDisplayed] = useState(false);
    const inputBoxRef = useRef(null);
    const inputRefStart = useRef<HTMLInputElement>(null);
    const inputRefEnd = useRef<HTMLInputElement>(null);
    const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);
    useEffect(() => {
      const startFocused = document.activeElement === inputRefStart.current;
      const endFocused = document.activeElement === inputRefEnd.current;
      if (isCalendarOpen && !startFocused && !endFocused) {
        inputRefStart.current?.focus();
      }
    }, [isCalendarOpen]);
    const [calendarViewMode, setCalendarViewMode] = useState<CalendarViewMode>('dates');
    const [activeEnd, setActiveEnd] = useState<'start' | 'end' | 'none'>('start');
    const handleActiveEndChange = (newValue: 'start' | 'end' | 'none') => {
      setActiveEnd(newValue);
    };

    const handleInputIconButtonMouseDown: MouseEventHandler<Element> = (e) => {
      e.preventDefault();
      setCalendarOpen((isOpen) => !isOpen);
    };

    const handleSelectedDateValueChange = (dateRange: DateRange) => {
      const [dayStart, dayEnd] = sortDateRange(dateRange, 'date');
      if (calendarViewMode === 'dates') {
        setInputStartValue(format(dayStart));
        setInputEndValue(format(dayEnd));
        if (activeEnd === 'start') {
          handleActiveEndChange('end');
          if (inputRefEnd.current) {
            inputRefEnd.current.focus();
          }
        } else if (activeEnd === 'end') {
          setTmpValueEndDisplayed(false);
          setTmpValueStartDisplayed(false);
          setCalendarOpen(false);
          if (inputRefEnd.current) {
            inputRefEnd.current.blur();
          }
        }
      }
    };

    const handleActiveDateValueChange = (date?: Dayjs) => {
      if (activeEnd === 'start') {
        setTmpValueStart(date ? format(date) : '');
        if (calendarViewMode === 'dates') {
          setTmpValueStartDisplayed(!!date);
        }
      } else if (activeEnd === 'end') {
        setTmpValueEnd(date ? format(date) : '');
        if (calendarViewMode === 'dates') {
          setTmpValueEndDisplayed(!!date);
        }
      }
    };

    const handleCalendarViewModeChange = (view: CalendarViewMode) => {
      setCalendarViewMode(view);
      if (view !== 'dates') {
        setTmpValueStart(undefined);
        setTmpValueEnd(undefined);
        setTmpValueStartDisplayed(false);
        setTmpValueEndDisplayed(false);
      }
    };

    const handleBlurStart = (e: FocusEvent<HTMLInputElement, Element>) => {
      setCalendarOpen(false);
      setTmpValueStartDisplayed(false);
      inputPropsStart.onBlur?.(e);
    };
    const handleBlurEnd = (e: FocusEvent<HTMLInputElement, Element>) => {
      setCalendarOpen(false);
      setTmpValueEndDisplayed(false);
      inputPropsEnd.onBlur?.(e);
    };

    const handleFocusStart = (e: FocusEvent<HTMLInputElement, Element>) => {
      setCalendarOpen(true);
      handleActiveEndChange('start');
      inputPropsStart.onFocus?.(e);
    };
    const handleFocusEnd = (e: FocusEvent<HTMLInputElement, Element>) => {
      setCalendarOpen(true);
      handleActiveEndChange('end');
      inputPropsEnd.onFocus?.(e);
    };

    const handleInputStartKeyDown: KeyboardEventHandler<Element> = (e) => {
      if (e.key === 'Enter' && isCalendarOpen) {
        e.preventDefault();
        setCalendarOpen(false);
        if (isTmpValueStartDisplayed && tmpValueStart) {
          setInputStartValue(tmpValueStart);
          setTmpValueStartDisplayed(false);
        }
      }
    };
    const handleInputEndKeyDown: KeyboardEventHandler<Element> = (e) => {
      if (e.key === 'Enter' && isCalendarOpen) {
        e.preventDefault();
        setCalendarOpen(false);
        if (isTmpValueEndDisplayed && tmpValueEnd) {
          setInputEndValue(tmpValueEnd);
          setTmpValueEndDisplayed(false);
        }
      }
    };
    // TODO смержить с оригинальными обработчиками из пропсов
    const containerFinalProps: ComponentProps<typeof InputBox> = {
      ...containerProps,
      ref: refSetter(inputBoxRef, refContainerProps),
    };

    useEffect(() => {
      const inputNode = inputRefStart.current;
      if (inputNode) {
        const { value } = inputNode;
        if (inputStartValue !== value) {
          changeInputData(inputRefStart.current, { value: inputStartValue });
        }
      }
    }, [inputStartValue]);
    useEffect(() => {
      const inputNode = inputRefEnd.current;
      if (inputNode) {
        const { value } = inputNode;
        if (inputEndValue !== value) {
          changeInputData(inputRefEnd.current, { value: inputEndValue });
        }
      }
    }, [inputEndValue]);

    useEffect(() => {
      if (isCalendarOpen) {
        if (inputRefStart.current) {
          const node = inputRefStart.current;
          const { value } = node;
          setInputStartValue(value);
        }
        if (inputRefEnd.current) {
          const node = inputRefEnd.current;
          const { value } = node;
          setInputEndValue(value);
        }
      }
    }, [isCalendarOpen]);

    useEffect(() => {
      function oninput(this: HTMLInputElement) {
        const { value } = this;
        setTmpValueStartDisplayed(false);
        if (value !== inputStartValue) {
          setInputStartValue(value);
          setCalendarOpen(true);
        }
      }

      if (inputRefStart.current) {
        const node = inputRefStart.current;
        node.addEventListener('input', oninput, true);
        return () => {
          node.removeEventListener('input', oninput, true);
        };
      }
    }, [inputStartValue]);
    useEffect(() => {
      function oninput(this: HTMLInputElement) {
        const { value } = this;
        setTmpValueEndDisplayed(false);
        if (value !== inputEndValue) {
          setInputEndValue(value);
          setCalendarOpen(true);
        }
      }

      if (inputRefEnd.current) {
        const node = inputRefEnd.current;
        node.addEventListener('input', oninput, true);
        return () => {
          node.removeEventListener('input', oninput, true);
        };
      }
    }, [inputEndValue]);

    const refStart =
      inputPropsStart.ref !== undefined
        ? refSetter(inputRefStart, inputPropsStart.ref as Ref<HTMLInputElement>)
        : inputRefStart;
    const refEnd =
      inputPropsEnd.ref !== undefined
        ? refSetter(inputRefEnd, inputPropsEnd.ref as Ref<HTMLInputElement>)
        : inputRefEnd;
    const inputStartFinalProps: ComponentProps<typeof InputLine> = {
      ...inputPropsStart,
      'data-size': containerProps['data-size'],
      ref: refStart,
      onBlur: handleBlurStart,
      onFocus: handleFocusStart,
      onKeyDown: handleInputStartKeyDown,
      tmpValue: isTmpValueStartDisplayed ? tmpValueStart : undefined,
    };
    const inputEndFinalProps: ComponentProps<typeof InputLine> = {
      ...inputPropsEnd,
      'data-size': containerProps['data-size'],
      ref: refEnd,
      onBlur: handleBlurEnd,
      onFocus: handleFocusEnd,
      onKeyDown: handleInputEndKeyDown,
      tmpValue: isTmpValueEndDisplayed ? tmpValueEnd : undefined,
    };
    const inputSeparatorProps: InputSeparatorProps = {
      'data-size': containerProps['data-size'],
    };

    const rangeTimestamp = dateRangeFromValue([inputStartValue, inputEndValue], parce);
    return (
      <InputBox {...containerFinalProps} style={{ alignItems: 'center' }}>
        <InputLine {...inputStartFinalProps} />
        <InputSeparator {...inputSeparatorProps}>{separator}</InputSeparator>
        <InputLine {...inputEndFinalProps} />
        <InputIconButton icon={CalendarOutline} onMouseDown={handleInputIconButtonMouseDown} />
        {isCalendarOpen && (
          <PopoverPanel targetElement={inputBoxRef.current} alignSelf="auto" onMouseDown={(e) => e.preventDefault()}>
            <Calendar
              onViewModeChange={handleCalendarViewModeChange}
              dateValue={displayDate}
              onDateValueChange={(day) => setDisplayDate(day)}
              selectedDateRangeValue={rangeTimestamp}
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

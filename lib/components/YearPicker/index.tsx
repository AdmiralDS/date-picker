import type { ComponentProps, FocusEvent, KeyboardEventHandler, MouseEventHandler, Ref } from 'react';
import { forwardRef, useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { refSetter } from '@admiral-ds/react-ui';
import { YearPickerCalendar } from '#lib/YearPickerCalendar';
import type { InputBoxProps } from '#lib/Input/InputBox';
import { InputBox } from '#lib/Input/InputBox';
import type { InputLineProps } from '#lib/Input/InputLine';
import { InputLine } from '#lib/Input/InputLine';
import { InputIconButton } from '#lib/InputIconButton';
import CalendarOutline from '@admiral-ds/icons/build/system/CalendarOutline.svg?react';
import { PopoverPanel } from '#lib/PopoverPanel';
import type { CalendarViewMode } from '#lib/calendarInterfaces.js';
import { ruLocale } from '#lib/calendarConstants.ts';
import type { CalendarLocaleProps } from '#lib/calendarInterfaces.js';

const Calendar = styled(YearPickerCalendar)`
  border: none;
  box-shadow: none;
`;

const defaultFormatter = (date: Dayjs) => date.format('YYYY');
const defaultParcer = (date?: string) => dayjs(date, 'YYYY');

export type YearPickerProps = InputBoxProps & {
  /** Пропсы внутреннего инпута */
  inputProps?: InputLineProps;

  /** Функция для конвертации значение календаря в строку инпута */
  format?: (date: Dayjs) => string;

  /** Функция для конвертации строки инпута в значение календаря */
  parce?: (date?: string) => Dayjs;

  /** Изменение локали выпадающего календаря */
  Calendarlocale?: CalendarLocaleProps;
};

export const YearPicker = forwardRef<HTMLDivElement, YearPickerProps>(
  (
    { inputProps = {}, format = defaultFormatter, parce = defaultParcer, Calendarlocale = ruLocale, ...containerProps },
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
    const [calendarViewMode] = useState<CalendarViewMode>('years');

    const handleInputIconButtonMouseDown: MouseEventHandler<Element> = (e) => {
      e.preventDefault();
      if (isFocused) {
        setCalendarOpen((isOpen) => !isOpen);
      }
    };

    const handleSelectedDateValueChange = useCallback(
      (date: Dayjs) => {
        if (calendarViewMode === 'years') {
          const formattedValue = format(date);
          setInputValue(formattedValue);
          setTmpValueDisplayed(false);
          setCalendarOpen(false);
        }
      },
      [calendarViewMode, format],
    );

    const handleActiveDateValueChange = useCallback(
      (date?: Dayjs) => {
        setTmpValue(date ? format(date) : undefined);
        if (calendarViewMode === 'years') {
          setTmpValueDisplayed(!!date);
        }
      },
      [format],
    );

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

    const containerFinalProps: ComponentProps<typeof InputBox> = {
      ...containerProps,
      ref: refSetter(inputBoxRef, refContainerProps),
      onMouseDown: handleInputBoxMouseDown,
    };

    useEffect(() => {
      if (isCalendarOpen && inputRef.current) {
        setInputValue(inputRef.current.value);
      }
    }, [isCalendarOpen]);

    useEffect(() => {
      const date = parce(inputValue);
      if (date.isValid()) {
        setDisplayDate(date);
      } else if (!inputValue) {
        setDisplayDate(dayjs());
      }
    }, [inputValue]);

    const ref = inputProps.ref !== undefined ? refSetter(inputRef, inputProps.ref as Ref<HTMLInputElement>) : inputRef;
    const inputFinalProps: ComponentProps<typeof InputLine> = {
      ...inputProps,
      ref,
      onBlur: handleBlur,
      onFocus: handleFocus,
      tmpValue: isTmpValueDisplayed ? tmpValue : undefined,
    };

    const date = parce(inputValue);

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;

      setTmpValueDisplayed(false);
      if (value !== inputValue) {
        setInputValue(value);
        setCalendarOpen(true);
      }
      inputProps.onInput?.(e);
    };

    return (
      <InputBox {...containerFinalProps}>
        <InputLine {...inputFinalProps} onKeyDown={handleInputKeyDown} onInput={handleInput} />
        <InputIconButton icon={CalendarOutline} onMouseDown={handleInputIconButtonMouseDown} />
        {isCalendarOpen && (
          <PopoverPanel targetElement={inputBoxRef.current} alignSelf="auto">
            <Calendar
              dateValue={displayDate}
              onDateValueChange={(month) => setDisplayDate(month)}
              selectedDateValue={date}
              onSelectedDateValueChange={handleSelectedDateValueChange}
              activeDateValue={parce(tmpValue)}
              onActiveDateValueChange={handleActiveDateValueChange}
              locale={Calendarlocale}
            />
          </PopoverPanel>
        )}
      </InputBox>
    );
  },
);
YearPicker.displayName = 'YearPicker';

import type { ComponentProps, FocusEvent, KeyboardEventHandler, MouseEventHandler, Ref } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { refSetter, changeInputData } from '@admiral-ds/react-ui';
import { DatePickerCalendar } from '#lib/DatePickerCalendar';
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

const Calendar = styled(DatePickerCalendar)`
  border: none;
  box-shadow: none;
`;

const defaultFormatter = (date: Dayjs) => date.format('DD.MM.YYYY');
const defaultParcer = (date?: string) => dayjs(date, 'DD.MM.YYYY');

export type DatePickerProps = InputBoxProps & {
  /** Пропсы внутреннего инпута */
  inputProps?: InputLineProps;

  /** Функция для конвертации значение календаря в строку инпута */
  format?: (date: Dayjs) => string;

  /** Функция для конвертации строки инпута в значение календаря */
  parce?: (date?: string) => Dayjs;

  /** Изменение локали выпадающего календаря */
  Calendarlocale?: CalendarLocaleProps;
};

/**
 * Компонент DatePicker
 */
export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
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
    const [calendarViewMode, setCalendarViewMode] = useState<CalendarViewMode>('dates');

    const handleInputIconButtonMouseDown: MouseEventHandler<Element> = (e) => {
      e.preventDefault();
      if (isFocused) {
        setCalendarOpen((isOpen) => !isOpen);
      }
    };

    const handleSelectedDateValueChange = (date: Dayjs) => {
      if (calendarViewMode === 'dates') {
        const formattedValue = format(date);
        if (inputRef.current) {
          changeInputData(inputRef.current, { value: formattedValue });
        }
        setInputValue(formattedValue);
        setTmpValueDisplayed(false);
        setCalendarOpen(false);
      }
    };

    const handleActiveDateValueChange = (date?: Dayjs) => {
      setTmpValue(date ? format(date) : undefined);
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
    // TODO: смержить с оригинальными обработчиками из пропсов
    const containerFinalProps: ComponentProps<typeof InputBox> = {
      ...containerProps,
      ref: refSetter(inputBoxRef, refContainerProps),
      onMouseDown: handleInputBoxMouseDown,
    };

    useEffect(() => {
      if (isCalendarOpen && inputRef.current) {
        const node = inputRef.current;
        const { value } = node;
        setInputValue(value);
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
              onViewModeChange={handleCalendarViewModeChange}
              dateValue={displayDate}
              onDateValueChange={(day) => setDisplayDate(day)}
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
DatePicker.displayName = 'DatePicker';

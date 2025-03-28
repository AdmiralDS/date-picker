import type { ComponentProps, FocusEvent, KeyboardEventHandler, MouseEventHandler, Ref } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { refSetter, changeInputData } from '@admiral-ds/react-ui';
import { MonthPickerCalendar } from '#lib/MonthPickerCalendar';
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

const Calendar = styled(MonthPickerCalendar)`
  border: none;
  box-shadow: none;
`;

const defaultFormatter = (date: Dayjs) => date.format('MM.YYYY');
const defaultParcer = (date?: string) => dayjs(date, 'MM.YYYY');

export type MonthInputProps = InputBoxProps & {
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
 * Компонент MonthInput
 */
export const MonthInput = forwardRef<HTMLDivElement, MonthInputProps>(
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
    const [calendarViewMode, setCalendarViewMode] = useState<CalendarViewMode>('months');

    const handleInputIconButtonMouseDown: MouseEventHandler<Element> = (e) => {
      e.preventDefault();
      if (isFocused) {
        setCalendarOpen((isOpen) => !isOpen);
      }
    };

    const handleSelectedDateValueChange = (date: Dayjs) => {
      if (calendarViewMode === 'months') {
        const formattedValue = format(date);
        setInputValue(formattedValue);
        setTmpValueDisplayed(false);
        setCalendarOpen(false);
      }
    };

    const handleActiveDateValueChange = (date?: Dayjs) => {
      setTmpValue(date ? format(date) : undefined);
      if (calendarViewMode === 'months') {
        setTmpValueDisplayed(!!date);
      }
    };

    const handleCalendarViewModeChange = (view: CalendarViewMode) => {
      if (view === 'months' || view === 'years') {
        setCalendarViewMode(view);
        if (view !== 'months') {
          setTmpValue(undefined);
          setTmpValueDisplayed(false);
        }
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

    return (
      <InputBox {...containerFinalProps}>
        <InputLine {...inputFinalProps} onKeyDown={handleInputKeyDown} />
        <InputIconButton icon={CalendarOutline} onMouseDown={handleInputIconButtonMouseDown} />
        {isCalendarOpen && (
          <PopoverPanel targetElement={inputBoxRef.current} alignSelf="auto">
            <Calendar
              onViewModeChange={handleCalendarViewModeChange}
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
MonthInput.displayName = 'MonthInput';

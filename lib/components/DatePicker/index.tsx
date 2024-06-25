import type { ComponentProps, FocusEvent, MouseEventHandler, Ref } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';

import { refSetter, changeInputData } from '@admiral-ds/react-ui';
import { DatePickerCalendar } from '#lib/DatePickerCalendar';
import type { InputBoxProps } from '#lib/Input/InputBox';
import { InputBox } from '#lib/Input/InputBox';
import type { InputLineProps } from '#lib/Input/InputLine';
import { InputLine } from '#lib/Input/InputLine';
import { InputIconButton } from '#lib/InputIconButton';
import CalendarOutline from '@admiral-ds/icons/build/system/CalendarOutline.svg?react';

import { PopoverPanel } from '#lib/PopoverPanel';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

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
};

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ inputProps = {}, format = defaultFormatter, parce = defaultParcer, ...containerProps }, refContainerProps) => {
    const [inputValue, setInputValue] = useState<string | undefined>(inputProps.value);
    const [displayDate, setDisplayDate] = useState(dayjs());
    const [tmpValue, setTmpValue] = useState<string | undefined>();
    const [isFocused, setIsFocused] = useState(false);
    const inputBoxRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);

    const handleInputIconButtonMouseDown: MouseEventHandler<Element> = (e) => {
      e.preventDefault();
      if (isFocused) {
        setCalendarOpen((isOpen) => !isOpen);
      }
    };

    const handleSelectedDateValueChange = (date: Dayjs) => {
      setInputValue(format(date));
      setTmpValue(undefined);
      setCalendarOpen(false);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
      setCalendarOpen(false);
      setIsFocused(false);
      setTmpValue(undefined);
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

    // TODO смержить с оригинальными обработчиками из пропсов
    const containerFinalProps: ComponentProps<typeof InputBox> = {
      ...containerProps,
      ref: refSetter(inputBoxRef, refContainerProps),
      onMouseDown: handleInputBoxMouseDown,
    };

    useEffect(() => {
      const inputNode = inputRef.current;
      if (inputNode) {
        changeInputData(inputRef.current, { value: inputValue });
      }
    }, [inputValue]);

    useEffect(() => {
      if (inputRef.current) {
        const node = inputRef.current;
        const { value } = node;
        setInputValue(value);
      }
    }, [isCalendarOpen]);

    useEffect(() => {
      function oninput(this: HTMLInputElement) {
        const { value } = this;
        setTmpValue(undefined);
        setInputValue(value);
      }

      if (inputRef.current) {
        const node = inputRef.current;
        node.addEventListener('input', oninput, true);

        const { value } = node;
        setInputValue(value);

        return () => {
          node.removeEventListener('input', oninput, true);
        };
      }
    }, []);

    useEffect(() => {
      const date = parce(inputValue);
      if (date.isValid()) {
        setDisplayDate(date);
      }
    }, [inputValue]);

    const ref = inputProps.ref !== undefined ? refSetter(inputRef, inputProps.ref as Ref<HTMLInputElement>) : inputRef;
    const inputFinalProps: ComponentProps<typeof InputLine> = {
      ...inputProps,
      ref,
      onBlur: handleBlur,
      onFocus: handleFocus,
      tmpValue,
    };

    const date = parce(inputValue);

    return (
      <InputBox {...containerFinalProps}>
        <InputLine {...inputFinalProps} />
        <InputIconButton icon={CalendarOutline} onMouseDown={handleInputIconButtonMouseDown} />
        {isCalendarOpen && (
          <PopoverPanel targetElement={inputBoxRef.current} alignSelf="auto">
            <Calendar
              dateValue={displayDate}
              onDateValueChange={(day) => setDisplayDate(day)}
              selectedDateValue={date}
              onSelectedDateValueChange={handleSelectedDateValueChange}
              activeDateValue={parce(tmpValue)}
              onActiveDateValueChange={(date) => setTmpValue(date ? format(date) : undefined)}
            />
          </PopoverPanel>
        )}
      </InputBox>
    );
  },
);

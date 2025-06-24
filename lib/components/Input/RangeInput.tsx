import type { ComponentProps, FocusEvent, KeyboardEventHandler, Ref } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Dayjs } from 'dayjs';
import { refSetter } from '@admiral-ds/react-ui';
import { InputLine, InputLineProps } from './InputLine';
import { InputSeparatorProps, InputSeparator } from './InputSeparator';
import { DateRange } from 'lib/types';
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

export interface RangeInputProps extends InputLineProps {
  /** Пропсы внутреннего инпута */
  inputPropsStart: InputLineProps;
  /** Пропсы внутреннего инпута */
  inputPropsEnd: InputLineProps;

  onRangeInputFinish?: () => void;
  separator?: string;
  activeDate?: Dayjs;
  onSelectedRangeChange: (range: DateRange) => void;
  /** Функция для конвертации значение календаря в строку инпута */
  format?: (date?: Dayjs) => string;
  /** Функция для конвертации строки инпута в значение календаря */
  parse?: (date?: string) => Dayjs | undefined;

  onCancelInput?: () => void;

  onStartDateChanged?: (date: Dayjs) => void;
  onStartDateInputComplete?: (date: Dayjs) => void;
  onEndDateChanged?: (date: Dayjs) => void;
  onEndDateInputComplete?: (date: Dayjs) => void;
}

export const RangeInput = ({
  inputPropsStart,
  inputPropsEnd,
  onRangeInputFinish,
  separator,
  activeDate,
  selectedRange,
  onSelectedRangeChange,
  onStartDateChanged,
  onEndDateChanged,
  format = defaultDateFormatter,
  parse: parse = defaultDateParser,
  ...props
}: RangeInputProps) => {
  const inputRefStart = useRef<HTMLInputElement>(null);
  const inputRefEnd = useRef<HTMLInputElement>(null);

  const [inputsConfirmed, setInputsConfirmed] = useState(0);
  // const handleRangeInputBegin = () => {
  //   onRangeInputBegin?.();
  // };
  const handleRangeInputFinish = () => {
    onRangeInputFinish?.();
    setInputsConfirmed(0);
  };
  //#region "Значения инпутов после клика или ручного ввода"
  const [inputStartValue, setInputStartValue] = useState<string | undefined>(inputPropsStart.value);
  const [inputEndValue, setInputEndValue] = useState<string | undefined>(inputPropsEnd.value);
  //#endregion

  //#region "Значения инпутов после изменения активной даты в календаре (hovered date)"
  const [tmpValueStart, setTmpValueStart] = useState<string | undefined>();
  const [isTmpValueStartDisplayed, setTmpValueStartDisplayed] = useState(false);
  const [tmpValueEnd, setTmpValueEnd] = useState<string | undefined>();
  const [isTmpValueEndDisplayed, setTmpValueEndDisplayed] = useState(false);
  //#endregion

  //#region "Фокусировка на первом инпуте при открытии календаря"
  // useEffect(() => {
  //   const startFocused = document.activeElement === inputRefStart.current;
  //   const endFocused = document.activeElement === inputRefEnd.current;
  //   if (isCalendarOpen && !startFocused && !endFocused) {
  //     inputRefStart.current?.focus();
  //   }
  // }, [isCalendarOpen]);
  //#endregion

  const [activeEnd, setActiveEnd] = useState<'start' | 'end' | 'none'>('start');

  //#region "Обработчики событий focus и blur на инпутах"
  const handleBlurStart = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.relatedTarget !== inputRefEnd.current) {
      props.onBlur?.(e);
    }

    setTmpValueStartDisplayed(false);
    inputPropsStart.onBlur?.(e);
  };
  const handleBlurEnd = (e: FocusEvent<HTMLInputElement, Element>) => {
    // handleRangeInputFinish();
    //changeCalendarVisibility(false);
    if (e.relatedTarget !== inputRefStart.current) {
      props.onBlur?.(e);
    }
    setTmpValueEndDisplayed(false);
    inputPropsEnd.onBlur?.(e);
  };

  const handleFocusStart = (e: FocusEvent<HTMLInputElement, Element>) => {
    props.onFocus?.(e);
    // handleRangeInputBegin();
    //changeCalendarVisibility(true);
    setActiveEnd('start');
    inputPropsStart.onFocus?.(e);
  };
  const handleFocusEnd = (e: FocusEvent<HTMLInputElement, Element>) => {
    props.onFocus?.(e);
    // handleRangeInputBegin();
    //changeCalendarVisibility(true);
    setActiveEnd('end');
    inputPropsEnd.onFocus?.(e);
  };
  //#endregion

  //#region "Обработчики нажатия Enter на инпутах"
  const handleInputStartKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // if (isCalendarOpen) {
    if (e.key === 'Enter') {
      e.preventDefault();

      handleRangeInputFinish();
      //changeCalendarVisibility(false);
      // if (isTmpValueStartDisplayed && tmpValueStart) {
      //   setInputStartValue(tmpValueStart);
      //   setTmpValueStartDisplayed(false);
      // }

      const value = e.currentTarget.value;

      const parsedValue = parse(value);
      if (parsedValue?.isValid()) {
        onSelectedRangeChange(dateRangeFromValue([value, inputEndValue], parse));
      }
    }
    // }
  };

  const handleInputEndKeyDown: KeyboardEventHandler<Element> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleRangeInputFinish();
      //changeCalendarVisibility(false);
      if (isTmpValueEndDisplayed && tmpValueEnd) {
        setInputEndValue(tmpValueEnd);
        setTmpValueEndDisplayed(false);
      }
    }
  };
  //#endregion

  //#region "Отслеживаем изменение ховера на календаре"
  useEffect(() => {
    if (activeEnd === 'start') {
      setTmpValueStart(activeDate ? format(activeDate) : '');
      setTmpValueStartDisplayed(!!activeDate);
    } else if (activeEnd === 'end') {
      setTmpValueEnd(activeDate ? format(activeDate) : '');
      setTmpValueEndDisplayed(!!activeDate);
    }
  }, [activeDate]);
  //#endregion

  //#region "Вешаем листенеры на инпуты для ручного ввода"
  // useEffect(() => {
  //   function oninputStart(this: HTMLInputElement, ev: Event) {
  //     const { value } = this;
  //     setTmpValueStartDisplayed(false);
  //     if (value !== inputStartValue) {
  //       handleRangeInputBegin();
  //       //changeCalendarVisibility(true);
  //       const parsedValue = parse(value);
  //       if (parsedValue?.isValid()) {
  //         setInputStartValue(value);
  //         onSelectedRangeChange(dateRangeFromValue([value, inputEndValue], parse));
  //       }
  //     }
  //   }
  //   function oninputEnd(this: HTMLInputElement, ev: Event) {
  //     const { value } = this;
  //     setTmpValueEndDisplayed(false);
  //     if (value !== inputEndValue) {
  //       handleRangeInputBegin();
  //       //changeCalendarVisibility(true);
  //       const parsedValue = parse(value);
  //       if (parsedValue?.isValid()) {
  //         setInputEndValue(value);
  //         onSelectedRangeChange(dateRangeFromValue([inputStartValue, value], parse));
  //       }
  //     }
  //   }

  //   if (inputRefStart.current && inputRefEnd.current) {
  //     // const nodeStart = inputRefStart.current;
  //     // const nodeEnd = inputRefEnd.current;
  //     // nodeStart.addEventListener('input', oninputStart, true);
  //     // nodeEnd.addEventListener('input', oninputEnd, true);
  //     return () => {
  //       // nodeStart.removeEventListener('input', oninputStart, true);
  //       // nodeEnd.removeEventListener('input', oninputEnd, true);
  //     };
  //   }
  // }, [inputStartValue, inputEndValue]);

  const handleInputStart = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, selectionStart } = e.currentTarget;
    setTmpValueStartDisplayed(false);
    const parsedValue = parse(value);

    if (parsedValue?.isValid()) {
      if (value !== inputStartValue) {
        setInputStartValue(value);
        onStartDateChanged?.(parsedValue);
      }
      if (selectionStart === value.length && inputRefEnd.current) {
        inputRefEnd.current.focus();
        inputRefEnd.current.selectionStart = 0;
        inputRefEnd.current.selectionEnd = 0;
      }
    }

    inputPropsStart.onInput?.(e);
  };

  const handleInputEnd = (e: React.FormEvent<HTMLInputElement>) => {
    if (inputRefEnd.current) {
      console.log('handleInputEnd');

      const { value } = inputRefEnd.current;
      setTmpValueEndDisplayed(false);
      if (value !== inputEndValue) {
        // changeCalendarVisibility(true);
        const parsedValue = parse(value);
        if (parsedValue?.isValid()) {
          setInputEndValue(value);
          onEndDateChanged?.(parsedValue);
          // onSelectedRangeChange(dateRangeFromValue([value, inputEndValue], parse));
        }
      }
    }

    inputPropsEnd.onInput?.(e);
  };
  //#endregion

  //#region "Итоговые ref и props инпутов"
  //ref на инпуты
  const refStart =
    inputPropsStart.ref !== undefined
      ? refSetter(inputRefStart, inputPropsStart.ref as Ref<HTMLInputElement>)
      : inputRefStart;
  const refEnd =
    inputPropsEnd.ref !== undefined ? refSetter(inputRefEnd, inputPropsEnd.ref as Ref<HTMLInputElement>) : inputRefEnd;

  // props для инпутов
  const inputStartFinalProps: ComponentProps<typeof InputLine> = {
    ...inputPropsStart,
    'data-size': props['data-size'],
    ref: refStart,
    onBlur: handleBlurStart,
    onFocus: handleFocusStart,
    onKeyDown: handleInputStartKeyDown,
    onInput: handleInputStart,
    tmpValue: isTmpValueStartDisplayed ? tmpValueStart : undefined,
  };
  const inputEndFinalProps: ComponentProps<typeof InputLine> = {
    ...inputPropsEnd,
    'data-size': props['data-size'],
    ref: refEnd,
    onBlur: handleBlurEnd,
    onFocus: handleFocusEnd,
    onKeyDown: handleInputEndKeyDown,
    onInput: handleInputEnd,
    tmpValue: isTmpValueEndDisplayed ? tmpValueEnd : undefined,
  };
  const inputSeparatorProps: InputSeparatorProps = {
    'data-size': props['data-size'],
  };
  //#endregion

  return (
    <>
      <InputLine {...inputStartFinalProps} />
      <InputSeparator {...inputSeparatorProps}>{separator}</InputSeparator>
      <InputLine {...inputEndFinalProps} />
    </>
  );
};

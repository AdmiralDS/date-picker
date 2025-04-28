import type { ComponentProps, FocusEvent, KeyboardEventHandler, Ref } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Dayjs } from 'dayjs';
import { changeInputData, refSetter } from '@admiral-ds/react-ui';
import { InputLine, InputLineProps } from './InputLine';
import { InputSeparatorProps, InputSeparator } from './InputSeparator';
import { DateRange } from 'lib/types';
import { defaultDateFormatter, defaultDateParser, sortDateRange } from '#lib/utils';

type InputProcessStatusType = 'notStarted' | 'halfDone' | 'finished';

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

  isCalendarOpen: boolean;
  //changeCalendarVisibility: (newState: boolean) => void;
  onRangeInputBegin?: () => void;
  onRangeInputFinish?: () => void;
  separator?: string;
  activeDate?: Dayjs;
  selectedRange: DateRange;
  onSelectedRangeChange: (range: DateRange) => void;
  /** Функция для конвертации значение календаря в строку инпута */
  format?: (date?: Dayjs) => string;
  /** Функция для конвертации строки инпута в значение календаря */
  parse?: (date?: string) => Dayjs | undefined;
}

export const RangeInput = ({
  inputPropsStart,
  inputPropsEnd,
  isCalendarOpen,
  //changeCalendarVisibility,
  onRangeInputBegin,
  onRangeInputFinish,
  separator,
  activeDate,
  selectedRange,
  onSelectedRangeChange,
  format = defaultDateFormatter,
  parse: parse = defaultDateParser,
  ...props
}: RangeInputProps) => {
  const inputRefStart = useRef<HTMLInputElement>(null);
  const inputRefEnd = useRef<HTMLInputElement>(null);

  const [inputsConfirmed, setInputsConfirmed] = useState(0);
  const handleRangeInputBegin = () => {
    onRangeInputBegin?.();
  };
  const handleRangeInputFinish = () => {
    onRangeInputFinish?.();
    setInputsConfirmed(0);
  };

  //<editor-fold desc="Значения инпутов после клика или ручного ввода">
  const [inputStartValue, setInputStartValue] = useState<string | undefined>(inputPropsStart.value);
  const [inputEndValue, setInputEndValue] = useState<string | undefined>(inputPropsEnd.value);
  //</editor-fold>

  //<editor-fold desc="Значения инпутов после изменения активной даты в календаре (hovered date)">
  const [tmpValueStart, setTmpValueStart] = useState<string | undefined>();
  const [isTmpValueStartDisplayed, setTmpValueStartDisplayed] = useState(false);
  const [tmpValueEnd, setTmpValueEnd] = useState<string | undefined>();
  const [isTmpValueEndDisplayed, setTmpValueEndDisplayed] = useState(false);
  //</editor-fold>

  //<editor-fold desc="Фокусировка на первом инпуте при открытии календаря">
  useEffect(() => {
    const startFocused = document.activeElement === inputRefStart.current;
    const endFocused = document.activeElement === inputRefEnd.current;
    if (isCalendarOpen && !startFocused && !endFocused) {
      inputRefStart.current?.focus();
    }
  }, [isCalendarOpen]);
  //</editor-fold>

  //<editor-fold desc="Активный инпут">
  const [activeEnd, setActiveEnd] = useState<'start' | 'end' | 'none'>('start');
  const handleActiveEndChange = (newValue: 'start' | 'end' | 'none') => {
    setActiveEnd(newValue);
  };
  //</editor-fold>

  //<editor-fold desc="Обработчики событий focus и blur на инпутах">
  const handleBlurStart = (e: FocusEvent<HTMLInputElement, Element>) => {
    handleRangeInputFinish();
    //changeCalendarVisibility(false);
    setTmpValueStartDisplayed(false);
    inputPropsStart.onBlur?.(e);
  };
  const handleBlurEnd = (e: FocusEvent<HTMLInputElement, Element>) => {
    handleRangeInputFinish();
    //changeCalendarVisibility(false);
    setTmpValueEndDisplayed(false);
    inputPropsEnd.onBlur?.(e);
  };

  const handleFocusStart = (e: FocusEvent<HTMLInputElement, Element>) => {
    handleRangeInputBegin();
    //changeCalendarVisibility(true);
    handleActiveEndChange('start');
    inputPropsStart.onFocus?.(e);
  };
  const handleFocusEnd = (e: FocusEvent<HTMLInputElement, Element>) => {
    handleRangeInputBegin();
    //changeCalendarVisibility(true);
    handleActiveEndChange('end');
    inputPropsEnd.onFocus?.(e);
  };
  //</editor-fold>

  //<editor-fold desc="Обработчики нажатия Enter на инпутах">
  const handleInputStartKeyDown: KeyboardEventHandler<Element> = (e) => {
    if (isCalendarOpen) {
      if (e.key === 'Enter') {
        e.preventDefault();

        handleRangeInputFinish();
        //changeCalendarVisibility(false);
        if (isTmpValueStartDisplayed && tmpValueStart) {
          setInputStartValue(tmpValueStart);
          setTmpValueStartDisplayed(false);
        }

        const parsedValue = parse(inputStartValue);
        if (parsedValue?.isValid()) {
          onSelectedRangeChange(dateRangeFromValue([inputStartValue, inputEndValue], parse));
        }
      }
    }
  };
  const handleInputEndKeyDown: KeyboardEventHandler<Element> = (e) => {
    if (e.key === 'Enter' && isCalendarOpen) {
      e.preventDefault();
      handleRangeInputFinish();
      //changeCalendarVisibility(false);
      if (isTmpValueEndDisplayed && tmpValueEnd) {
        setInputEndValue(tmpValueEnd);
        setTmpValueEndDisplayed(false);
      }
    }
  };
  //</editor-fold>

  //<editor-fold desc="Отслеживаем изменение ховера на календаре">
  useEffect(() => {
    if (activeEnd === 'start') {
      setTmpValueStart(activeDate ? format(activeDate) : '');
      setTmpValueStartDisplayed(!!activeDate);
    } else if (activeEnd === 'end') {
      setTmpValueEnd(activeDate ? format(activeDate) : '');
      setTmpValueEndDisplayed(!!activeDate);
    }
  }, [activeDate]);
  //</editor-fold>

  //<editor-fold desc="Отслеживаем клик на календаре">
  useEffect(() => {
    if (isCalendarOpen) {
      const [dayStart, dayEnd] = sortDateRange(selectedRange, 'date').map((date) => format(date));

      if (activeEnd === 'start') {
        setInputStartValue(dayStart);
        setTmpValueStartDisplayed(false);
        const inputNode = inputRefStart.current;
        if (inputNode) {
          changeInputData(inputNode, { value: dayStart });
        }
        if (inputsConfirmed < 2) {
          setInputsConfirmed((prev) => prev + 1);
          handleActiveEndChange('end');
          if (inputRefEnd.current) {
            inputRefEnd.current.focus();
          }
        } else {
          if (inputNode) {
            inputNode.blur();
            handleRangeInputFinish();
          }
        }
      } else if (activeEnd === 'end') {
        setInputEndValue(dayEnd);
        setTmpValueEndDisplayed(false);
        const inputNode = inputRefEnd.current;
        if (inputNode) {
          changeInputData(inputNode, { value: dayEnd });
        }
        if (inputsConfirmed < 2) {
          setInputsConfirmed((prev) => prev + 1);
          handleActiveEndChange('start');
          if (inputRefStart.current) {
            inputRefStart.current.focus();
          }
        } else {
          if (inputNode) {
            inputNode.blur();
            handleRangeInputFinish();
          }
        }
      }
    }
  }, [selectedRange]);
  //</editor-fold>

  //<editor-fold desc="Вешаем листенеры на инпуты для ручного ввода">
  useEffect(() => {
    function oninputStart(this: HTMLInputElement, ev: Event) {
      const { value } = this;
      setTmpValueStartDisplayed(false);
      if (value !== inputStartValue) {
        handleRangeInputBegin();
        //changeCalendarVisibility(true);
        const parsedValue = parse(value);
        if (parsedValue?.isValid()) {
          setInputStartValue(value);
          onSelectedRangeChange(dateRangeFromValue([value, inputEndValue], parse));
        }
      }
    }
    function oninputEnd(this: HTMLInputElement, ev: Event) {
      const { value } = this;
      setTmpValueEndDisplayed(false);
      if (value !== inputEndValue) {
        handleRangeInputBegin();
        //changeCalendarVisibility(true);
        const parsedValue = parse(value);
        if (parsedValue?.isValid()) {
          setInputEndValue(value);
          onSelectedRangeChange(dateRangeFromValue([inputStartValue, value], parse));
        }
      }
    }

    if (inputRefStart.current && inputRefEnd.current) {
      const nodeStart = inputRefStart.current;
      const nodeEnd = inputRefEnd.current;
      nodeStart.addEventListener('input', oninputStart, true);
      nodeEnd.addEventListener('input', oninputEnd, true);
      return () => {
        nodeStart.removeEventListener('input', oninputStart, true);
        nodeEnd.removeEventListener('input', oninputEnd, true);
      };
    }
  }, [inputStartValue, inputEndValue]);
  /*
  const handleInputStart = () => {
    if (inputRefStart.current) {
      const { value } = inputRefStart.current;
      setTmpValueStartDisplayed(false);
      if (value !== inputStartValue) {
        changeCalendarVisibility(true);
        const parsedValue = parse(value);
        if (parsedValue?.isValid()) {
          setInputStartValue(value);
          onSelectedRangeChange(dateRangeFromValue([value, inputEndValue], parse));
        }
      }
    }
  };
  const handleInputEnd = () => {
    if (inputRefEnd.current) {
      const { value } = inputRefEnd.current;
      setTmpValueEndDisplayed(false);
      if (value !== inputEndValue) {
        changeCalendarVisibility(true);
        const parsedValue = parse(value);
        if (parsedValue?.isValid()) {
          setInputEndValue(value);
          onSelectedRangeChange(dateRangeFromValue([value, inputEndValue], parse));
        }
      }
    }
  };
  */
  //</editor-fold>

  //<editor-fold desc="Итоговые ref и props инпутов">
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
    //onInput: handleInputStart,
    tmpValue: isTmpValueStartDisplayed ? tmpValueStart : undefined,
  };
  const inputEndFinalProps: ComponentProps<typeof InputLine> = {
    ...inputPropsEnd,
    'data-size': props['data-size'],
    ref: refEnd,
    onBlur: handleBlurEnd,
    onFocus: handleFocusEnd,
    onKeyDown: handleInputEndKeyDown,
    //onInput: handleInputEnd,
    tmpValue: isTmpValueEndDisplayed ? tmpValueEnd : undefined,
  };
  const inputSeparatorProps: InputSeparatorProps = {
    'data-size': props['data-size'],
  };
  //</editor-fold>

  return (
    <>
      <InputLine {...inputStartFinalProps} />
      <InputSeparator {...inputSeparatorProps}>{separator}</InputSeparator>
      <InputLine {...inputEndFinalProps} />
    </>
  );
};

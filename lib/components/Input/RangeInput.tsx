import type { ComponentProps, FocusEvent, KeyboardEventHandler, Ref } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Dayjs } from 'dayjs';
import { changeInputData, refSetter } from '@admiral-ds/react-ui';
import { InputLine, InputLineProps } from './InputLine';
import { InputSeparatorProps, InputSeparator } from './InputSeparator';
import { DateRange } from 'lib/types';
import { defaultDateFormatter, defaultDateParser, sortDateRange } from '#lib/utils';

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
  changeCalendarVisibility: (newState: boolean) => void;
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
  changeCalendarVisibility,
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
    changeCalendarVisibility(false);
    setTmpValueStartDisplayed(false);
    inputPropsStart.onBlur?.(e);
  };
  const handleBlurEnd = (e: FocusEvent<HTMLInputElement, Element>) => {
    changeCalendarVisibility(false);
    setTmpValueEndDisplayed(false);
    inputPropsEnd.onBlur?.(e);
  };

  const handleFocusStart = (e: FocusEvent<HTMLInputElement, Element>) => {
    changeCalendarVisibility(true);
    handleActiveEndChange('start');
    inputPropsStart.onFocus?.(e);
  };
  const handleFocusEnd = (e: FocusEvent<HTMLInputElement, Element>) => {
    changeCalendarVisibility(true);
    handleActiveEndChange('end');
    inputPropsEnd.onFocus?.(e);
  };
  //</editor-fold>

  //<editor-fold desc="Обработчики нажатия Enter на инпутах">
  const handleInputStartKeyDown: KeyboardEventHandler<Element> = (e) => {
    if (e.key === 'Enter' && isCalendarOpen) {
      e.preventDefault();
      changeCalendarVisibility(false);
      if (isTmpValueStartDisplayed && tmpValueStart) {
        setInputStartValue(tmpValueStart);
        setTmpValueStartDisplayed(false);
      }
    }
  };
  const handleInputEndKeyDown: KeyboardEventHandler<Element> = (e) => {
    if (e.key === 'Enter' && isCalendarOpen) {
      e.preventDefault();
      changeCalendarVisibility(false);
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
        handleActiveEndChange('end');
        const inputNode = inputRefStart.current;
        if (inputNode) {
          changeInputData(inputNode, { value: dayStart });
        }
        if (inputRefEnd.current) {
          inputRefEnd.current.focus();
        }
      } else if (activeEnd === 'end') {
        setInputEndValue(dayEnd);
        setTmpValueEndDisplayed(false);
        changeCalendarVisibility(false);
        const inputNode = inputRefEnd.current;
        if (inputNode) {
          changeInputData(inputNode, { value: dayEnd });
          inputNode.blur();
        }
      }
    }
  }, [selectedRange]);
  //</editor-fold>

  //<editor-fold desc="Вешаем листенеры на инпуты для ручного ввода">
  useEffect(() => {
    function oninputStart(this: HTMLInputElement) {
      const { value } = this;
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
    function oninputEnd(this: HTMLInputElement) {
      const { value } = this;
      setTmpValueEndDisplayed(false);
      if (value !== inputEndValue) {
        changeCalendarVisibility(true);
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
    tmpValue: isTmpValueStartDisplayed ? tmpValueStart : undefined,
  };
  const inputEndFinalProps: ComponentProps<typeof InputLine> = {
    ...inputPropsEnd,
    'data-size': props['data-size'],
    ref: refEnd,
    onBlur: handleBlurEnd,
    onFocus: handleFocusEnd,
    onKeyDown: handleInputEndKeyDown,
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

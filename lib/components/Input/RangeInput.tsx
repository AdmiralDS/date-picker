import type { ComponentProps, FocusEvent, KeyboardEventHandler, Ref } from 'react';
import { useEffect, useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { changeInputData, refSetter } from '@admiral-ds/react-ui';
import { InputLine, InputLineProps } from './InputLine';
import { InputSeparatorProps, InputSeparator } from './InputSeparator';
import { DateRange } from 'lib/types';
import { sortDateRange } from '#lib/utils';

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
  parce?: (date?: string) => Dayjs | undefined;
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
  format = defaultFormatter,
  parce = defaultParcer,
  ...props
}: RangeInputProps) => {
  const inputRefStart = useRef<HTMLInputElement>(null);
  const inputRefEnd = useRef<HTMLInputElement>(null);
  // Values after click
  const [inputStartValue, setInputStartValue] = useState<string | undefined>(inputPropsStart.value);
  const [inputEndValue, setInputEndValue] = useState<string | undefined>(inputPropsEnd.value);

  // Values after activeDate change (hovered date)
  const [tmpValueStart, setTmpValueStart] = useState<string | undefined>();
  const [isTmpValueStartDisplayed, setTmpValueStartDisplayed] = useState(false);
  const [tmpValueEnd, setTmpValueEnd] = useState<string | undefined>();
  const [isTmpValueEndDisplayed, setTmpValueEndDisplayed] = useState(false);

  useEffect(() => {
    const startFocused = document.activeElement === inputRefStart.current;
    const endFocused = document.activeElement === inputRefEnd.current;
    if (isCalendarOpen && !startFocused && !endFocused) {
      inputRefStart.current?.focus();
    }
  }, [isCalendarOpen]);
  const [activeEnd, setActiveEnd] = useState<'start' | 'end' | 'none'>('start');
  const handleActiveEndChange = (newValue: 'start' | 'end' | 'none') => {
    setActiveEnd(newValue);
  };
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

  // отслеживаем изменение ховера на календаре
  useEffect(() => {
    if (activeEnd === 'start') {
      setTmpValueStart(activeDate ? format(activeDate) : '');
      setTmpValueStartDisplayed(!!activeDate);
    } else if (activeEnd === 'end') {
      setTmpValueEnd(activeDate ? format(activeDate) : '');
      setTmpValueEndDisplayed(!!activeDate);
    }
  }, [activeDate]);

  // отслеживаем клик на календаре
  useEffect(() => {
    if (isCalendarOpen) {
      const [dayStart, dayEnd] = sortDateRange(selectedRange, 'date');
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
        changeCalendarVisibility(false);
        if (inputRefEnd.current) {
          inputRefEnd.current.blur();
        }
      }
    }
  }, [selectedRange]);

  // передаем изменение значений по клику на календаре в инпуты
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

  // вешаем листенеры на инпуты для ручного ввода
  useEffect(() => {
    function oninput(this: HTMLInputElement) {
      const { value } = this;
      setTmpValueStartDisplayed(false);
      if (value !== inputStartValue) {
        setInputStartValue(value);
        changeCalendarVisibility(true);
        const parcedValue = parce(value);
        if (parcedValue?.isValid()) {
          onSelectedRangeChange(dateRangeFromValue([value, inputEndValue], parce));
        }
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
        changeCalendarVisibility(true);
        const parcedValue = parce(value);
        if (parcedValue?.isValid()) {
          onSelectedRangeChange(dateRangeFromValue([inputStartValue, value], parce));
        }
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
    inputPropsEnd.ref !== undefined ? refSetter(inputRefEnd, inputPropsEnd.ref as Ref<HTMLInputElement>) : inputRefEnd;
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
  return (
    <>
      <InputLine {...inputStartFinalProps} />
      <InputSeparator {...inputSeparatorProps}>{separator}</InputSeparator>
      <InputLine {...inputEndFinalProps} />
    </>
  );
};

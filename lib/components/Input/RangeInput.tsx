import type { ComponentProps, FocusEvent, KeyboardEventHandler, Ref } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Dayjs } from 'dayjs';
import { changeInputData, refSetter } from '@admiral-ds/react-ui';
import { InputSeparatorProps, InputSeparator } from './InputSeparator';
import { DateRange } from 'lib/types';
import { defaultDateFormatter, defaultDateParser } from '#lib/utils';
import { SingleInput } from './SingleInput';
import { DimensionInterface } from './types';
import { type ActiveEnd, InputsConfirmedState } from '#lib/calendarInterfaces';

const DefaultCancelHandler = () => undefined;

export interface RangeInputProps extends DimensionInterface {
  /** Пропсы внутреннего инпута */
  inputPropsStart: ComponentProps<typeof SingleInput>;
  /** Пропсы внутреннего инпута */
  inputPropsEnd: ComponentProps<typeof SingleInput>;
  /** Символ, используемый в качестве разделителя */
  separator?: string;
  /** Текущее значение активной, но невыбранной даты. */
  activeDate?: Dayjs;
  /** Функция для конвертации значение календаря в строку инпута */
  format?: (date?: Dayjs) => string;
  /** Функция для конвертации строки инпута в значение календаря */
  parse?: (date?: string) => Dayjs | undefined;
  /**
   * Вызывается при любом изменении выбранного диапазона дат.
   * Срабатывает при вводе валидных значений
   *
   * @param {DateRange} range - Текущий выбранный диапазон [начало, конец].
   */
  onSelectedRangeChange?: (range: DateRange) => void;
  /**
   * Вызывается после завершения ввода диапазона (подтверждение).
   * Срабатывает при нажатии "Enter",
   *
   * @param {DateRange} range - Финальный диапазон [начало, конец].
   */
  onRangeInputFinish?: (range: DateRange) => void;
  /**
   * Вызывается при отмене выбора (например, нажатие "Отмена" или ESC).
   */
  onCancelInput?: () => void;
  /**
   * Вызывается при любом изменении начальной даты.
   * Срабатывает в реальном времени при:
   * - ручном вводе в поле,
   * - выборе даты в календаре,
   * - программном изменении значения.
   *
   * @param {Dayjs} date - Новое значение начальной даты (может быть невалидным).
   */
  onStartDateChanged?: (date: Dayjs) => void;
  /**
   * Вызывается при завершении ввода начальной даты.
   * Срабатывает при:
   * - потере фокуса с поля ввода (если дата валидна),
   * - явном подтверждении (например, Enter).
   *
   * @param {Dayjs} date - Валидная начальная дата.
   */
  onStartDateInputComplete?: (date: Dayjs) => void;
  /**
   * Вызывается при любом изменении конечной даты.
   * Аналогичен `onStartDateChanged`, но для конечной даты.
   *
   * @param {Dayjs} date - Новое значение конечной даты.
   */
  onEndDateChanged?: (date: Dayjs) => void;
  /**
   * Вызывается при завершении ввода конечной даты.
   * Аналогичен `onStartDateInputComplete`, но для конечной даты.
   *
   * @param {Dayjs} date - Валидная конечная дата.
   */
  onEndDateInputComplete?: (date: Dayjs) => void;
  /**
   * Вызывается при изменении активного края диапазона (начало/конец).
   *
   * @param {ActiveEnd} end - Какой край диапазона сейчас активен.
   *
   * Возможные значения:
   * - 'start' - редактируется начальная дата,
   * - 'end' - редактируется конечная дата,
   * - 'none' - ни один (диапазон заблокирован или неактивен).
   */
  onActiveEndValueChange?: (end: ActiveEnd) => void;

  /**
   * Callback, вызываемый при изменении статуса подтверждения полей.
   * @param {number} newStatus — новый статус (0, 1 или 2).
   */
  onInputsConfirmationChange?: (newStatus: InputsConfirmedState) => void;

  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export const RangeInput = ({
  dimension = 'm',
  width,
  inputPropsStart,
  inputPropsEnd,
  onRangeInputFinish,
  separator,
  activeDate,
  onSelectedRangeChange,
  format = defaultDateFormatter,
  parse = defaultDateParser,
  onCancelInput = DefaultCancelHandler,
  onStartDateChanged,
  onStartDateInputComplete,
  onEndDateChanged,
  onEndDateInputComplete,
  onActiveEndValueChange,
  onFocus,
  onBlur,
  onInputsConfirmationChange,
}: RangeInputProps) => {
  const inputRefStart = useRef<HTMLInputElement>(null);
  const inputRefEnd = useRef<HTMLInputElement>(null);

  //#region "Значения инпутов после клика или ручного ввода"
  const [inputStartValue, setInputStartValue] = useState(inputPropsStart.value);
  const [inputEndValue, setInputEndValue] = useState(inputPropsEnd.value);
  //#endregion

  //#region "Значения инпутов после изменения активной даты в календаре (hovered date)"
  const [tmpValueStart, setTmpValueStart] = useState<string | undefined>(undefined);
  const [tmpValueEnd, setTmpValueEnd] = useState<string | undefined>(undefined);
  //#endregion

  const [activeEnd, setActiveEnd] = useState<ActiveEnd>('start');
  const handleActiveEndValueChange = (end: ActiveEnd) => {
    setActiveEnd(end);
    onActiveEndValueChange?.(end);
  };

  //#region "Обработчики событий focus и blur на инпутах"
  const handleBlurStart = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.relatedTarget !== inputRefEnd.current) {
      onBlur?.(e);
    }
    setTmpValueStart(undefined);
    inputPropsStart.onBlur?.(e);
  };
  const handleBlurEnd = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.relatedTarget !== inputRefStart.current) {
      onBlur?.(e);
    }
    setTmpValueEnd(undefined);
    inputPropsEnd.onBlur?.(e);
  };

  const handleFocusStart = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.relatedTarget !== inputRefEnd.current) {
      onInputsConfirmationChange?.(InputsConfirmedState.initial);
    }
    onFocus?.(e);
    handleActiveEndValueChange('start');
    inputPropsStart.onFocus?.(e);
  };
  const handleFocusEnd = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.relatedTarget !== inputRefStart.current) {
      onInputsConfirmationChange?.(InputsConfirmedState.initial);
    }
    onFocus?.(e);
    handleActiveEndValueChange('end');
    inputPropsEnd.onFocus?.(e);
  };
  //#endregion

  //#region "Обработчики нажатия кнопок на инпутах"
  const handleInputStartKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const startInputNode = inputRefStart.current;
    const endInputNode = inputRefEnd.current;
    const value = e.currentTarget.value;

    if (!startInputNode || !endInputNode) return;

    switch (e.key) {
      case 'Enter':
        {
          e.preventDefault();

          const value = e.currentTarget.value;
          const parsedStartValue = parse(value);
          const parsedEndValue = parse(inputEndValue);

          if (parsedStartValue?.isValid()) {
            if (parsedEndValue?.isValid()) {
              onSelectedRangeChange?.([parsedStartValue, parsedEndValue]);
              onRangeInputFinish?.([parsedStartValue, parsedEndValue]);
              onInputsConfirmationChange?.(InputsConfirmedState.initial);
            } else {
              conditionalSwitchInput(endInputNode);
            }

            onStartDateInputComplete?.(parsedStartValue);
          }
        }
        break;
      case 'Escape':
        {
          onInputsConfirmationChange?.(InputsConfirmedState.initial);
          onCancelInput();
        }
        break;
      case 'ArrowRight':
        {
          if (value.length === startInputNode.selectionEnd) {
            e.preventDefault();
            conditionalSwitchInput(endInputNode);
          }
        }
        break;
      default:
        {
          if (tmpValueStart) setTmpValueStart(undefined);
          else {
            if (/\d+/g.test(e.key)) {
              const parsedValue = parse(value);

              if (parsedValue?.isValid() && e.currentTarget.selectionStart === value.length) {
                conditionalSwitchInput(endInputNode);
              }
            }
          }
        }
        break;
    }
  };

  const handleInputEndKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    const startInputNode = inputRefStart.current;
    const endInputNode = inputRefEnd.current;

    if (!startInputNode || !endInputNode) return;

    switch (e.key) {
      case 'Enter':
        {
          e.preventDefault();

          const value = e.currentTarget.value;
          const parsedEndValue = parse(value);
          const parsedStartValue = parse(inputStartValue);

          if (parsedEndValue?.isValid()) {
            if (parsedStartValue?.isValid()) {
              onSelectedRangeChange?.([parsedStartValue, parsedEndValue]);
              onRangeInputFinish?.([parsedStartValue, parsedEndValue]);
              onInputsConfirmationChange?.(InputsConfirmedState.initial);
            } else {
              conditionalSwitchInput(startInputNode);
            }

            onEndDateInputComplete?.(parsedEndValue);
          }
        }
        break;
      case 'Escape':
        {
          onInputsConfirmationChange?.(InputsConfirmedState.initial);
          onCancelInput();
        }
        break;
      case 'ArrowLeft':
        {
          if (endInputNode.selectionStart === 0) {
            const indexLastSimbol = startInputNode.value.length;

            e.preventDefault();
            conditionalSwitchInput(startInputNode, indexLastSimbol, indexLastSimbol);
          }
        }
        break;
      case 'Backspace':
        {
          if (endInputNode.selectionStart === 0 && endInputNode.selectionEnd === 0) {
            const newStartValue = startInputNode.value.slice(0, -1);
            e.preventDefault();
            startInputNode.focus();
            changeInputData(startInputNode, { value: newStartValue });
          }
          if (endInputNode.selectionStart === 1 && endInputNode.selectionEnd === 1) {
            const indexLastSimbol = startInputNode.value.length;

            changeInputData(endInputNode, { value: '' });
            e.preventDefault();
            conditionalSwitchInput(startInputNode, indexLastSimbol, indexLastSimbol);
          }
        }
        break;
      default:
        if (tmpValueEnd) setTmpValueEnd(undefined);
        break;
    }
  };
  //#endregion

  //#region "Отслеживаем изменение ховера на календаре"
  useEffect(() => {
    if (activeEnd === 'start') {
      setTmpValueStart(activeDate ? format(activeDate) : undefined);
    }
    if (activeEnd === 'end') {
      setTmpValueEnd(activeDate ? format(activeDate) : undefined);
    }
  }, [activeDate]);
  //#endregion

  const conditionalSwitchInput = (
    nextInput: HTMLInputElement | null,
    selectionStart?: number | null,
    selectionEnd?: number | null,
  ) => {
    if (nextInput) {
      nextInput.focus();
      nextInput.setSelectionRange(selectionStart || 0, selectionEnd || 0);
    }
  };

  const handleInputStart = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, selectionStart } = e.currentTarget;
    const parsedValue = parse(value);

    if (tmpValueStart) setTmpValueStart(undefined);

    if (parsedValue?.isValid()) {
      if (value !== inputStartValue) {
        setInputStartValue(value);
        onStartDateChanged?.(parsedValue);
      }
      if (!tmpValueStart && selectionStart === value.length) conditionalSwitchInput(inputRefEnd.current);
    }

    inputPropsStart.onInput?.(e);
  };

  const handleInputEnd = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const parsedValue = parse(value);

    if (tmpValueEnd) setTmpValueEnd(undefined);

    if (parsedValue?.isValid()) {
      if (value !== inputEndValue) {
        setInputEndValue(value);
        onEndDateChanged?.(parsedValue);
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
  const inputStartFinalProps: ComponentProps<typeof SingleInput> = {
    ...inputPropsStart,
    ref: refStart,
    dimension: dimension,
    width: width,
    onBlur: handleBlurStart,
    onFocus: handleFocusStart,
    onKeyDown: handleInputStartKeyDown,
    onInput: handleInputStart,
    tmpValue: tmpValueStart,
  };
  const inputEndFinalProps: ComponentProps<typeof SingleInput> = {
    ...inputPropsEnd,
    ref: refEnd,
    dimension: dimension,
    width: width,
    onBlur: handleBlurEnd,
    onFocus: handleFocusEnd,
    onKeyDown: handleInputEndKeyDown,
    onInput: handleInputEnd,
    tmpValue: tmpValueEnd,
  };
  const inputSeparatorProps: InputSeparatorProps = {
    $dimension: dimension,
  };
  //#endregion

  return (
    <>
      <SingleInput {...inputStartFinalProps} />
      <InputSeparator {...inputSeparatorProps}>{separator}</InputSeparator>
      <SingleInput {...inputEndFinalProps} />
    </>
  );
};

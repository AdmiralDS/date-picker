import type { ComponentProps, FocusEvent, KeyboardEventHandler, Ref } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Dayjs } from 'dayjs';
import { refSetter } from '@admiral-ds/react-ui';
import { InputSeparatorProps, InputSeparator } from './InputSeparator';
import { DateRange } from 'lib/types';
import { defaultDateFormatter, defaultDateParser } from '#lib/utils';
import { SingleInput } from './SingleInput';
import { DimensionInterface } from './types';
import { type ActiveEnd, InputsConfirmedState } from '#lib/calendarInterfaces';

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
  /**
   * Текущий статус подтверждения значений в полях ввода диапазона.
   * Возможные состояния:
   * - `0` (Initial) — ни одно поле не подтверждено (начальное состояние);
   * - `1` (FirstConfirmed) — подтверждено только первое поле (начало диапазона);
   * - `2` (BothConfirmed) — подтверждены оба поля (диапазон полностью валиден).
   *
   * @default 0
   */
  inputsConfirmation?: InputsConfirmedState;
  /**
   * Начальный статус подтверждения полей ввода при монтировании компонента.
   * Используется, если `inputsConfirmation` не передан (неконтролируемый режим).
   *
   * Возможные значения:
   * - `0` (Initial) — ни одно поле не подтверждено (значение по умолчанию);
   * - `1` (FirstConfirmed) — подтверждено только первое поле (начало диапазона);
   * - `2` (BothConfirmed) — подтверждены оба поля (диапазон полностью валиден).
   *
   * @default 0
   */
  defaultInputsConfirmation?: InputsConfirmedState;
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
  inputPropsStart,
  inputPropsEnd,
  onRangeInputFinish,
  separator,
  activeDate,
  onSelectedRangeChange,
  format = defaultDateFormatter,
  parse: parse = defaultDateParser,
  onCancelInput = DefaultCancelHandler,
  onStartDateChanged,
  onStartDateInputComplete,
  onEndDateChanged,
  onEndDateInputComplete,
  onActiveEndValueChange,
  onFocus,
  onBlur,
  inputsConfirmation,
  defaultInputsConfirmation,
  onInputsConfirmationChange,
}: RangeInputProps) => {
  const inputRefStart = useRef<HTMLInputElement>(null);
  const inputRefEnd = useRef<HTMLInputElement>(null);

  const [inputsConfirmedState, setInputsConfirmedState] = useState<InputsConfirmedState>(
    defaultInputsConfirmation || InputsConfirmedState.initial,
  );
  const derivedConfirmationStatus = inputsConfirmation || inputsConfirmedState;
  console.log(derivedConfirmationStatus);

  const handleConfirmInput = (state: InputsConfirmedState) => {
    setInputsConfirmedState(state);
    onInputsConfirmationChange?.(state);
  };

  const incInputsConfirmStatus = () => {
    const newState =
      derivedConfirmationStatus >= InputsConfirmedState.bothConfirmed
        ? InputsConfirmedState.initial
        : derivedConfirmationStatus + 1;

    handleConfirmInput(newState);
  };

  const handleRangeInputFinish = () => {
    onRangeInputFinish?.(dateRangeFromValue([inputStartValue, inputEndValue], parse));
    handleConfirmInput(InputsConfirmedState.initial);
  };
  useEffect(() => {
    if (derivedConfirmationStatus === InputsConfirmedState.bothConfirmed) {
      handleRangeInputFinish();
    }
  }, [derivedConfirmationStatus]);

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

    setTmpValueStartDisplayed(false);
    inputPropsStart.onBlur?.(e);
  };
  const handleBlurEnd = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.relatedTarget !== inputRefStart.current) {
      onBlur?.(e);
    }
    setTmpValueEndDisplayed(false);
    inputPropsEnd.onBlur?.(e);
  };

  const handleFocusStart = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.relatedTarget !== inputRefEnd.current) {
      setInputsConfirmedState(InputsConfirmedState.initial);
    }
    onFocus?.(e);
    handleActiveEndValueChange('start');
    inputPropsStart.onFocus?.(e);
  };
  const handleFocusEnd = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.relatedTarget !== inputRefStart.current) {
      setInputsConfirmedState(InputsConfirmedState.initial);
    }
    onFocus?.(e);
    handleActiveEndValueChange('end');
    inputPropsEnd.onFocus?.(e);
  };
  //#endregion

  //#region "Обработчики нажатия Enter на инпутах"
  const handleInputStartKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      const value = e.currentTarget.value;
      const parsedValue = parse(value);
      if (parsedValue?.isValid()) {
        onSelectedRangeChange?.(dateRangeFromValue([value, inputEndValue], parse));
        onStartDateInputComplete?.(parsedValue);

        if (derivedConfirmationStatus < InputsConfirmedState.firstConfirmed && inputRefEnd.current) {
          inputRefEnd.current.focus();
          inputRefEnd.current.selectionStart = 0;
          inputRefEnd.current.selectionEnd = 0;
        }
        incInputsConfirmStatus();
      }
    } else if (e.key === 'Escape') {
      handleConfirmInput(InputsConfirmedState.initial);
      onCancelInput();
    }
  };

  const handleInputEndKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      const value = e.currentTarget.value;
      const parsedValue = parse(value);

      if (parsedValue?.isValid()) {
        onSelectedRangeChange?.(dateRangeFromValue([inputStartValue, value], parse));
        onEndDateInputComplete?.(parsedValue);

        if (derivedConfirmationStatus < InputsConfirmedState.firstConfirmed && inputRefStart.current) {
          inputRefStart.current.focus();
          inputRefStart.current.selectionStart = 0;
          inputRefStart.current.selectionEnd = 0;
        }
        incInputsConfirmStatus();
      }
    } else if (e.key === 'Escape') {
      handleConfirmInput(InputsConfirmedState.initial);
      onCancelInput();
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

  const conditionalSwitchInput = (value: string, selectionStart: number | null, nextInput: HTMLInputElement | null) => {
    if (inputsConfirmedState < InputsConfirmedState.firstConfirmed && selectionStart === value.length && nextInput) {
      nextInput.focus();
      nextInput.selectionStart = 0;
      nextInput.selectionEnd = 0;
      if (derivedConfirmationStatus < InputsConfirmedState.firstConfirmed) incInputsConfirmStatus();
    }
  };

  const handleInputStart = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, selectionStart } = e.currentTarget;
    setTmpValueStartDisplayed(false);
    const parsedValue = parse(value);

    if (parsedValue?.isValid()) {
      if (value !== inputStartValue) {
        setInputStartValue(value);
        onStartDateChanged?.(parsedValue);
      }

      conditionalSwitchInput(value, selectionStart, inputRefEnd.current);
    }

    inputPropsStart.onInput?.(e);
  };

  const handleInputEnd = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, selectionStart } = e.currentTarget;
    setTmpValueEndDisplayed(false);
    const parsedValue = parse(value);

    if (parsedValue?.isValid()) {
      if (value !== inputEndValue) {
        setInputEndValue(value);
        onEndDateChanged?.(parsedValue);
      }
      conditionalSwitchInput(value, selectionStart, inputRefStart.current);
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
    onBlur: handleBlurStart,
    onFocus: handleFocusStart,
    onKeyDown: handleInputStartKeyDown,
    onInput: handleInputStart,
    tmpValue: isTmpValueStartDisplayed ? tmpValueStart : undefined,
  };
  const inputEndFinalProps: ComponentProps<typeof SingleInput> = {
    ...inputPropsEnd,
    ref: refEnd,
    dimension: dimension,
    onBlur: handleBlurEnd,
    onFocus: handleFocusEnd,
    onKeyDown: handleInputEndKeyDown,
    onInput: handleInputEnd,
    tmpValue: isTmpValueEndDisplayed ? tmpValueEnd : undefined,
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

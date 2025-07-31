import type { ComponentProps, FocusEvent, KeyboardEventHandler, MouseEventHandler, Ref } from 'react';
import { forwardRef, useEffect, useRef, useState, useCallback } from 'react';
import styled, { DataAttributes } from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { refSetter, changeInputData } from '@admiral-ds/react-ui';
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
const defaultParser = (date?: string) => dayjs(date, 'YYYY');
const nothing = () => {};

export type YearPickerProps = InputBoxProps & {
  /** Пропсы внутреннего инпута */
  inputProps?: InputLineProps;

  /** Функция для конвертации значение календаря в строку инпута */
  format?: (date: Dayjs) => string;

  /** Функция для конвертации строки инпута в значение календаря */
  parse?: (date?: string) => Dayjs;

  /** Изменение локали выпадающего календаря */
  Calendarlocale?: CalendarLocaleProps;

  /** Конфиг функция пропсов для кнопки. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  iconButtonPropsConfig?: (
    props: React.ComponentProps<typeof InputIconButton>,
  ) => Partial<React.ComponentProps<typeof InputIconButton> & DataAttributes>;

  /** Конфиг функция пропсов для input. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  inputPropsConfig?: (
    props: React.ComponentProps<typeof InputLine>,
  ) => Partial<React.ComponentProps<typeof InputLine> & DataAttributes>;

  /** Конфиг функция пропсов для dropdown. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  dropdownPropsConfig?: (
    props: React.ComponentProps<typeof PopoverPanel>,
  ) => Partial<React.ComponentProps<typeof PopoverPanel> & DataAttributes>;

  /** Модель массива для рендера ячеек с годами, на выход должна отдавать массив по размеру равный yearsOnScreen,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  yearsModel?: React.ComponentProps<typeof Calendar>['yearsModel'];

  /** Конфиг функция пропсов для контейнера с годами. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearsWidgetContainerPropsConfig?: React.ComponentProps<typeof Calendar>['yearsWidgetContainerPropsConfig'];

  /** Конфиг функция пропсов для кнопки панели "Назад". На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  prevButtonPropsConfig?: React.ComponentProps<typeof Calendar>['prevButtonPropsConfig'];

  /** Конфиг функция пропсов для кнопки панели "Вперед". На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  nextButtonPropsConfig?: React.ComponentProps<typeof Calendar>['nextButtonPropsConfig'];

  /** Конфиг функция пропсов для контейнера с годами на навигационной панели. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearsNavigationContainerPropsConfig?: React.ComponentProps<typeof Calendar>['yearsNavigationContainerPropsConfig'];

  //** Количество ячеек в виджете с годами */
  yearsOnScreen?: number;
  //** Количество столбцов в виджете с годами */
  yearsColumns?: number;
};

export const YearPicker = forwardRef<HTMLDivElement, YearPickerProps>(
  (
    {
      inputProps = {},
      format = defaultFormatter,
      parse = defaultParser,
      Calendarlocale = ruLocale,
      iconButtonPropsConfig = nothing,
      inputPropsConfig = nothing,
      dropdownPropsConfig = nothing,
      yearsModel,
      yearsWidgetContainerPropsConfig,
      yearsOnScreen = 20,
      yearsNavigationContainerPropsConfig,
      prevButtonPropsConfig,
      nextButtonPropsConfig,
      yearsColumns = 4,
      ...containerProps
    },
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

    const handleSelectedDateValueChange = (date: Dayjs) => {
      if (calendarViewMode === 'years') {
        const formattedValue = format(date);
        if (inputRef.current) {
          changeInputData(inputRef.current, { value: formattedValue });
        }
        setInputValue(formattedValue);
        setTmpValueDisplayed(false);
        setCalendarOpen(false);
      }
    };

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
    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;

      setTmpValueDisplayed(false);
      if (value !== inputValue) {
        setInputValue(value);
        setCalendarOpen(true);
      }
      inputProps.onInput?.(e);
    };

    useEffect(() => {
      if (isCalendarOpen && inputRef.current) {
        setInputValue(inputRef.current.value);
      }
    }, [isCalendarOpen]);

    useEffect(() => {
      const date = parse(inputValue);

      if (date.isValid()) {
        setDisplayDate(date);
      } else if (!inputValue) {
        setDisplayDate(dayjs());
      }
    }, [inputValue]);

    const ref = inputProps.ref !== undefined ? refSetter(inputRef, inputProps.ref as Ref<HTMLInputElement>) : inputRef;
    const date = parse(inputValue);

    const inputFinalProps: ComponentProps<typeof InputLine> = {
      ...inputProps,
      ref,
      onBlur: handleBlur,
      onFocus: handleFocus,
      tmpValue: isTmpValueDisplayed ? tmpValue : undefined,
      onKeyDown: handleInputKeyDown,
      onInput: handleInput,
    };

    const iconButtonFinalProps: ComponentProps<typeof InputIconButton> = {
      icon: CalendarOutline,
      onMouseDown: handleInputIconButtonMouseDown,
    };

    const dropdownFinalProps: ComponentProps<typeof PopoverPanel> = {
      targetElement: inputBoxRef.current,
      alignSelf: 'auto',
    };

    const containerFinalProps: ComponentProps<typeof InputBox> = {
      ...containerProps,
      ref: refSetter(inputBoxRef, refContainerProps),
      onMouseDown: handleInputBoxMouseDown,
    };

    return (
      <InputBox {...containerFinalProps}>
        <InputLine {...inputFinalProps} {...inputPropsConfig(inputFinalProps)} />
        <InputIconButton {...iconButtonFinalProps} {...iconButtonPropsConfig(iconButtonFinalProps)} />
        {isCalendarOpen && (
          <PopoverPanel {...dropdownFinalProps} {...dropdownPropsConfig(dropdownFinalProps)}>
            <Calendar
              dateValue={displayDate}
              onDateValueChange={(month) => setDisplayDate(month)}
              selectedDateValue={date}
              onSelectedDateValueChange={handleSelectedDateValueChange}
              activeDateValue={parse(tmpValue)}
              onActiveDateValueChange={handleActiveDateValueChange}
              locale={Calendarlocale}
              yearsModel={yearsModel}
              yearsWidgetContainerPropsConfig={yearsWidgetContainerPropsConfig}
              yearsOnScreen={yearsOnScreen}
              yearsColumns={yearsColumns}
              yearsNavigationContainerPropsConfig={yearsNavigationContainerPropsConfig}
              prevButtonPropsConfig={prevButtonPropsConfig}
              nextButtonPropsConfig={nextButtonPropsConfig}
            />
          </PopoverPanel>
        )}
      </InputBox>
    );
  },
);
YearPicker.displayName = 'YearPicker';

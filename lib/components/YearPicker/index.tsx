import type { ComponentProps, FocusEvent, KeyboardEventHandler, MouseEventHandler, Ref } from 'react';
import { forwardRef, useEffect, useRef, useState, useCallback } from 'react';
import styled, { type DataAttributes } from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { refSetter, changeInputData, InputLine, InputBox } from '@admiral-ds/react-ui';
import CalendarOutline from '@admiral-ds/icons/build/system/CalendarOutline.svg?react';

import { YearPickerCalendar } from '#lib/YearPickerCalendar';
import { InputIconButton } from '#lib/InputIconButton';
import { PopoverPanel } from '#lib/PopoverPanel';
import type { CalendarViewMode, CalendarLocaleProps } from '#lib/calendarInterfaces.js';
import { ruLocale } from '#lib/calendarConstants.ts';

const Calendar = styled(YearPickerCalendar)`
  border: none;
  box-shadow: none;
`;

const defaultFormatter = (date: Dayjs) => date.format('YYYY');
const defaultParser = (date?: string) => dayjs(date, 'YYYY');
const nothing = () => {};

export type YearPickerProps = ComponentProps<typeof InputBox> & {
  /** Пропсы внутреннего инпута */
  inputProps?: ComponentProps<typeof InputLine>;

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
    const [tmpValue, setTmpValue] = useState<string | undefined>(undefined);
    const [isFocused, setIsFocused] = useState(false);
    const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);
    const [calendarViewMode] = useState<CalendarViewMode>('years');

    const inputBoxRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);

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
        setTmpValue(undefined);
        setCalendarOpen(false);
      }
    };

    const handleActiveDateValueChange = useCallback(
      (date?: Dayjs) => {
        setTmpValue(date ? format(date) : undefined);
      },
      [format],
    );

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

    const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
      const parsedValue = parse(e.currentTarget.value);

      if (e.key === 'Enter' && isCalendarOpen && parsedValue.isValid()) {
        e.preventDefault();
        setCalendarOpen(false);

        if (tmpValue) {
          changeInputData(e.currentTarget, { value: tmpValue });
          setInputValue(tmpValue);
          setTmpValue(undefined);
        }

        e.currentTarget.blur();
      } else {
        if (tmpValue) setTmpValue(undefined);
      }

      inputProps.onKeyDown?.(e);
    };

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;

      if (value !== inputValue) setInputValue(value);
      if (!isCalendarOpen) setCalendarOpen(true);

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
      tmpValue: calendarViewMode === 'years' ? tmpValue : undefined,
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

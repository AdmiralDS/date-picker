import type { ComponentProps, FocusEvent, KeyboardEventHandler, MouseEventHandler, Ref } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import styled, { type DataAttributes } from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { refSetter, changeInputData } from '@admiral-ds/react-ui';
import { DatePickerCalendar } from '#lib/DatePickerCalendar';
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

const Calendar = styled(DatePickerCalendar)`
  border: none;
  box-shadow: none;
`;

const nothing = () => {};
const defaultFormatter = (date: Dayjs) => date.format('DD.MM.YYYY');
const defaultParcer = (date?: string) => dayjs(date, 'DD.MM.YYYY');

export type DatePickerProps = InputBoxProps & {
  /** Пропсы внутреннего инпута */
  inputProps?: InputLineProps;

  /** Функция для конвертации значение календаря в строку инпута */
  format?: (date: Dayjs) => string;

  /** Функция для конвертации строки инпута в значение календаря */
  parce?: (date?: string) => Dayjs;

  /** Изменение локали выпадающего календаря */
  Calendarlocale?: CalendarLocaleProps;

  /** Конфиг функция пропсов для input. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  inputPropsConfig?: (
    props: React.ComponentProps<typeof InputLine>,
  ) => Partial<React.ComponentProps<typeof InputLine> & DataAttributes>;

  /** Конфиг функция пропсов для кнопки. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  iconButtonPropsConfig?: (
    props: React.ComponentProps<typeof InputIconButton>,
  ) => Partial<React.ComponentProps<typeof InputIconButton> & DataAttributes>;

  /** Конфиг функция пропсов для dropdown. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  dropdownPropsConfig?: (
    props: React.ComponentProps<typeof PopoverPanel>,
  ) => Partial<React.ComponentProps<typeof PopoverPanel> & DataAttributes>;

  /** Модель массива для рендера ячеек с днями, на выход должна отдавать массив по размеру равный 42,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  datesModel?: React.ComponentProps<typeof Calendar>['datesModel'];

  /** Конфиг функция пропсов для контейнера с днями. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  datesWidgetContainerPropsConfig?: React.ComponentProps<typeof Calendar>['datesWidgetContainerPropsConfig'];

  /** Модель массива для рендера ячеек с названиями дня в неделе, на выход должна отдавать массив по размеру равный 7,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  daysModel?: React.ComponentProps<typeof Calendar>['daysModel'];

  /** Конфиг функция пропсов для контейнера с названиями дня в неделе. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  daysWidgetContainerPropsConfig?: React.ComponentProps<typeof Calendar>['daysWidgetContainerPropsConfig'];

  /** Модель массива для рендера ячеек с месяцами, на выход должна отдавать массив по размеру равный 12,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  monthsModel?: React.ComponentProps<typeof Calendar>['monthsModel'];

  /** Конфиг функция пропсов для контейнера с месяцами. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  monthsWidgetContainerPropsConfig?: React.ComponentProps<typeof Calendar>['monthsWidgetContainerPropsConfig'];

  /** Конфиг функция пропсов для контейнера с годами. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearsWidgetContainerPropsConfig?: React.ComponentProps<typeof Calendar>['yearsWidgetContainerPropsConfig'];

  /** Модель массива для рендера ячеек с годами, на выход должна отдавать массив по размеру равный yearsOnScreen,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  yearsModel?: React.ComponentProps<typeof Calendar>['yearsModel'];

  //** Количество ячеек в виджете с годами */
  yearsOnScreen?: number;
  //** Количество столбцов в виджете с годами */
  yearsColumns?: number;

  /** Конфиг функция пропсов для кнопки с месяцем на навигационной панели с выбором режима календаря. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  monthNavigationButtonPropsConfig?: React.ComponentProps<typeof Calendar>['monthNavigationButtonPropsConfig'];

  /** Конфиг функция пропсов для кнопки с годом на навигационной панели с выбором режима календаря. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearNavigationButtonPropsConfig?: React.ComponentProps<typeof Calendar>['yearNavigationButtonPropsConfig'];

  /** Конфиг функция пропсов для кнопки панели "Назад". На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  prevButtonPropsConfig?: React.ComponentProps<typeof Calendar>['prevButtonPropsConfig'];

  /** Конфиг функция пропсов для кнопки панели "Вперед". На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  nextButtonPropsConfig?: React.ComponentProps<typeof Calendar>['nextButtonPropsConfig'];
};

/**
 * Компонент DatePicker
 */
export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      inputProps = {},
      format = defaultFormatter,
      parce = defaultParcer,
      Calendarlocale = ruLocale,
      datesWidgetContainerPropsConfig,
      datesModel,
      daysWidgetContainerPropsConfig,
      daysModel,
      monthsModel,
      monthsWidgetContainerPropsConfig,
      yearsWidgetContainerPropsConfig,
      yearsModel,
      yearsOnScreen,
      yearsColumns,
      prevButtonPropsConfig,
      nextButtonPropsConfig,
      monthNavigationButtonPropsConfig,
      yearNavigationButtonPropsConfig,
      inputPropsConfig = nothing,
      iconButtonPropsConfig = nothing,
      dropdownPropsConfig = nothing,
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
    const [calendarViewMode, setCalendarViewMode] = useState<CalendarViewMode>('dates');

    const handleInputIconButtonMouseDown: MouseEventHandler<Element> = (e) => {
      e.preventDefault();
      if (isFocused) {
        setCalendarOpen((isOpen) => !isOpen);
      }
    };

    const handleSelectedDateValueChange = (date: Dayjs) => {
      if (calendarViewMode === 'dates') {
        const formattedValue = format(date);
        if (inputRef.current) {
          changeInputData(inputRef.current, { value: formattedValue });
        }
        setInputValue(formattedValue);
        setTmpValueDisplayed(false);
        setCalendarOpen(false);
      }
    };

    const handleActiveDateValueChange = (date?: Dayjs) => {
      setTmpValue(date ? format(date) : undefined);
      if (calendarViewMode === 'dates') {
        setTmpValueDisplayed(!!date);
      }
    };

    const handleCalendarViewModeChange = (view: CalendarViewMode) => {
      setCalendarViewMode(view);
      if (view !== 'dates') {
        setTmpValue(undefined);
        setTmpValueDisplayed(false);
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

    useEffect(() => {
      if (isCalendarOpen && inputRef.current) {
        const node = inputRef.current;
        const { value } = node;
        setInputValue(value);
      }
    }, [isCalendarOpen]);

    useEffect(() => {
      const date = parce(inputValue);
      if (date.isValid()) {
        setDisplayDate(date);
      } else if (!inputValue) {
        setDisplayDate(dayjs());
      }
    }, [inputValue]);

    const date = parce(inputValue);

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;

      setTmpValueDisplayed(false);
      if (value !== inputValue) {
        setInputValue(value);
        setCalendarOpen(true);
      }
      inputProps.onInput?.(e);
    };

    // TODO: смержить с оригинальными обработчиками из пропсов
    const containerFinalProps: ComponentProps<typeof InputBox> = {
      ...containerProps,
      ref: refSetter(inputBoxRef, refContainerProps),
      onMouseDown: handleInputBoxMouseDown,
    };

    const ref = inputProps.ref !== undefined ? refSetter(inputRef, inputProps.ref as Ref<HTMLInputElement>) : inputRef;
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

    return (
      <InputBox {...containerFinalProps}>
        <InputLine {...inputFinalProps} {...inputPropsConfig(inputFinalProps)} />
        <InputIconButton {...iconButtonFinalProps} {...iconButtonPropsConfig(iconButtonFinalProps)} />
        {isCalendarOpen && (
          <PopoverPanel {...dropdownFinalProps} {...dropdownPropsConfig(dropdownFinalProps)}>
            <Calendar
              onViewModeChange={handleCalendarViewModeChange}
              dateValue={displayDate}
              onDateValueChange={(day) => setDisplayDate(day)}
              selectedDateValue={date}
              onSelectedDateValueChange={handleSelectedDateValueChange}
              activeDateValue={parce(tmpValue)}
              onActiveDateValueChange={handleActiveDateValueChange}
              locale={Calendarlocale}
              prevButtonPropsConfig={prevButtonPropsConfig}
              nextButtonPropsConfig={nextButtonPropsConfig}
              monthNavigationButtonPropsConfig={monthNavigationButtonPropsConfig}
              yearNavigationButtonPropsConfig={yearNavigationButtonPropsConfig}
              datesWidgetContainerPropsConfig={datesWidgetContainerPropsConfig}
              datesModel={datesModel}
              daysWidgetContainerPropsConfig={daysWidgetContainerPropsConfig}
              daysModel={daysModel}
              monthsModel={monthsModel}
              monthsWidgetContainerPropsConfig={monthsWidgetContainerPropsConfig}
              yearsModel={yearsModel}
              yearsWidgetContainerPropsConfig={yearsWidgetContainerPropsConfig}
              yearsOnScreen={yearsOnScreen}
              yearsColumns={yearsColumns}
            />
          </PopoverPanel>
        )}
      </InputBox>
    );
  },
);
DatePicker.displayName = 'DatePicker';

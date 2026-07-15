import type { ComponentProps, FocusEvent, KeyboardEventHandler, MouseEventHandler, Ref } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import styled, { type DataAttributes } from 'styled-components';
import dayjs, { type Dayjs } from 'dayjs';

import { refSetter, changeInputData, InputBox, InputLine } from '@admiral-ds/react-ui';
import CalendarOutline from '@admiral-ds/icons/build/system/CalendarOutline.svg?react';

import { MonthPickerCalendar } from '#lib/MonthPickerCalendar';
import { InputIconButton } from '#lib/InputIconButton';
import { PopoverPanel } from '#lib/PopoverPanel';
import type { CalendarViewMode, CalendarLocaleProps } from '#lib/calendarInterfaces.js';
import { ruLocale } from '#lib/calendarConstants.ts';

const Calendar = styled(MonthPickerCalendar)`
  border: none;
  box-shadow: none;
`;

const defaultFormatter = (date: Dayjs) => date.format('MM.YYYY');
const defaultParser = (date?: string) => dayjs(date, 'MM.YYYY');

const nothing = () => {};

export type MonthPickerProps = React.ComponentProps<typeof InputBox> & {
  /** Пропсы внутреннего инпута */
  inputProps?: React.ComponentProps<typeof InputLine>;

  /** Функция для конвертации значение календаря в строку инпута */
  format?: (date: Dayjs) => string;

  /** Функция для конвертации строки инпута в значение календаря */
  parse?: (date?: string) => Dayjs;

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

  /** Конфиг функция пропсов для кнопки панели "Назад". На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  prevButtonPropsConfig?: React.ComponentProps<typeof Calendar>['prevButtonPropsConfig'];

  /** Конфиг функция пропсов для кнопки панели "Вперед". На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  nextButtonPropsConfig?: React.ComponentProps<typeof Calendar>['nextButtonPropsConfig'];

  /** Конфиг функция пропсов для кнопки с годом на навигационной панели с выбором режима календаря. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearNavigationButtonPropsConfig?: React.ComponentProps<typeof Calendar>['yearNavigationButtonPropsConfig'];

  /** Модель массива для рендера ячеек с месяцами, на выход должна отдавать массив по размеру равный 12,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  monthsModel?: React.ComponentProps<typeof Calendar>['monthsModel'];

  /** Конфиг функция пропсов для контейнера с месяцами. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  monthsWidgetContainerPropsConfig?: React.ComponentProps<typeof Calendar>['monthsWidgetContainerPropsConfig'];

  /** Модель массива для рендера ячеек с годами, на выход должна отдавать массив по размеру равный yearsOnScreen,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  yearsModel?: React.ComponentProps<typeof Calendar>['yearsModel'];

  /** Конфиг функция пропсов для контейнера с годами. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearsWidgetContainerPropsConfig?: React.ComponentProps<typeof Calendar>['yearsWidgetContainerPropsConfig'];

  //** Количество ячеек в виджете с годами */
  yearsOnScreen?: number;
  //** Количество столбцов в виджете с годами */
  yearsColumns?: number;
};

/**
 * Компонент MonthPicker
 */
export const MonthPicker = forwardRef<HTMLDivElement, MonthPickerProps>(
  (
    {
      inputProps = {},
      format = defaultFormatter,
      parse = defaultParser,
      Calendarlocale = ruLocale,
      inputPropsConfig = nothing,
      iconButtonPropsConfig = nothing,
      dropdownPropsConfig = nothing,
      prevButtonPropsConfig,
      nextButtonPropsConfig,
      yearNavigationButtonPropsConfig,
      monthsModel,
      monthsWidgetContainerPropsConfig,
      yearsWidgetContainerPropsConfig,
      yearsModel,
      yearsOnScreen,
      yearsColumns,
      ...containerProps
    },
    refContainerProps,
  ) => {
    const [inputValue, setInputValue] = useState<string | undefined>(inputProps.value);
    const [displayDate, setDisplayDate] = useState(dayjs());
    const [tmpValue, setTmpValue] = useState<string | undefined>(undefined);
    const [isFocused, setIsFocused] = useState(false);
    const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);
    const [calendarViewMode, setCalendarViewMode] = useState<CalendarViewMode>('months');

    const inputBoxRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputIconButtonMouseDown: MouseEventHandler<Element> = (e) => {
      e.preventDefault();
      if (isFocused) {
        setCalendarOpen((isOpen) => !isOpen);
      }
    };

    const handleSelectedDateValueChange = (date: Dayjs) => {
      const inputNode = inputRef.current;

      if (calendarViewMode === 'months' && inputNode) {
        const formattedValue = format(date);

        changeInputData(inputNode, { value: formattedValue });
        setInputValue(formattedValue);
        setTmpValue(undefined);
        setCalendarOpen(false);
        inputNode.blur();
      }
    };

    const handleActiveDateValueChange = (date?: Dayjs) => {
      setTmpValue(date ? format(date) : undefined);
    };

    const handleCalendarViewModeChange = (view: CalendarViewMode) => {
      if (view === 'months' || view === 'years') {
        setCalendarViewMode(view);
        if (view !== 'months') {
          setTmpValue(undefined);
        }
      }
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

    const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
      const parsedValue = parse(e.currentTarget.value);

      if (e.key === 'Enter' && isCalendarOpen && parsedValue.isValid()) {
        e.preventDefault();

        if (tmpValue) {
          changeInputData(e.currentTarget, { value: tmpValue });
          setInputValue(tmpValue);
          setTmpValue(undefined);
        }

        setCalendarOpen(false);
        e.currentTarget.blur();
      } else {
        if (tmpValue) setTmpValue(undefined);
      }

      inputProps.onKeyDown?.(e);
    };

    useEffect(() => {
      const inputNode = inputRef.current;

      if (isCalendarOpen && inputNode) {
        setInputValue(inputNode.value);
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

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;

      if (!isCalendarOpen) setCalendarOpen(true);
      if (value !== inputValue) setInputValue(value);

      inputProps.onInput?.(e);
    };

    // TODO смержить с оригинальными обработчиками из пропсов
    const containerFinalProps: ComponentProps<typeof InputBox> = {
      ...containerProps,
      ref: refSetter(inputBoxRef, refContainerProps),
      onMouseDown: handleInputBoxMouseDown,
    };

    const inputFinalProps: ComponentProps<typeof InputLine> = {
      ...inputProps,
      ref,
      onBlur: handleBlur,
      onFocus: handleFocus,
      tmpValue: calendarViewMode === 'months' ? tmpValue : undefined,
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
              onDateValueChange={(month) => setDisplayDate(month)}
              selectedDateValue={date}
              onSelectedDateValueChange={handleSelectedDateValueChange}
              activeDateValue={parse(tmpValue)}
              onActiveDateValueChange={handleActiveDateValueChange}
              locale={Calendarlocale}
              prevButtonPropsConfig={prevButtonPropsConfig}
              nextButtonPropsConfig={nextButtonPropsConfig}
              yearNavigationButtonPropsConfig={yearNavigationButtonPropsConfig}
              monthsModel={monthsModel}
              monthsWidgetContainerPropsConfig={monthsWidgetContainerPropsConfig}
              yearsWidgetContainerPropsConfig={yearsWidgetContainerPropsConfig}
              yearsModel={yearsModel}
              yearsOnScreen={yearsOnScreen}
              yearsColumns={yearsColumns}
            />
          </PopoverPanel>
        )}
      </InputBox>
    );
  },
);
MonthPicker.displayName = 'MonthPicker';

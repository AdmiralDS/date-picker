import type { ComponentProps, FocusEvent, KeyboardEventHandler, MouseEventHandler, Ref } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import styled, { type DataAttributes } from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { refSetter, changeInputData } from '@admiral-ds/react-ui';
import { DateRangePickerCalendar } from '#lib/DateRangePickerCalendar';
import type { InputBoxProps } from '#lib/Input/InputBox';
import { InputBox } from '#lib/Input/InputBox';
import type { InputLineProps } from '#lib/Input/InputLine';
import { InputLine } from '#lib/Input/InputLine';
import { InputIconButton } from '#lib/InputIconButton';
import CalendarOutline from '@admiral-ds/icons/build/system/CalendarOutline.svg?react';
import { PopoverPanel } from '#lib/PopoverPanel';
import type { CalendarLocaleProps, CalendarViewMode } from '#lib/calendarInterfaces.js';
import type { DateRange } from 'lib/types';

const Calendar = styled(DateRangePickerCalendar)`
  border: none;
  box-shadow: none;
`;

const defaultFormatter = (date?: Dayjs) => (date ? date.format('DD.MM.YYYY') : '');
const defaultParser = (date?: string) => dayjs(date, 'DD.MM.YYYY');

function dateRangeFromValue(value?: string, separator = ' – ', parse = defaultParser): DateRange {
  const [start, end] = value ? value.split(separator).map(parse) : [];
  return start && start.isAfter(end) ? ([end, start] as const) : ([start, end] as const);
}

// function formatRangeValue(start?: Dayjs, end?: Dayjs, separator = ' – ', format = defaultFormatter): string {
//   if (start && start.isValid()) {
//     if (!end || !end.isValid()) {
//       return format(start);
//     }
//     return start.isBefore(end) ? format(start) + separator + format(end) : format(end) + separator + format(start);
//   } else if (end && end.isValid()) {
//     return format(end);
//   }
//   return '';
// }

export type DateRangePickerProps = InputBoxProps & {
  /** Пропсы внутреннего инпута */
  inputProps?: InputLineProps;

  /** Функция для конвертации значение календаря в строку инпута */
  format?: (date?: Dayjs) => string;

  /** Функция для конвертации строки инпута в значение календаря */
  parse?: (date?: string) => Dayjs;

  separator?: string;

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

const nothing = () => {};

/**
 * Компонент DateRangePicker
 */
export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      inputProps = {},
      separator = ' – ',
      format = defaultFormatter,
      //parse = defaultParser,
      Calendarlocale,
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
    const [activeEnd, setActiveEnd] = useState<'start' | 'end' | 'none'>('start');

    const handleInputIconButtonMouseDown: MouseEventHandler<Element> = (e) => {
      e.preventDefault();
      if (isFocused) {
        setCalendarOpen((isOpen) => !isOpen);
      }
    };

    const handleSelectedDateValueChange = (dateRange: DateRange) => {
      const [dayStart, dayEnd] = dateRange;
      if (calendarViewMode === 'dates') {
        const formattedValue = `${format(dayStart)}${separator}${format(dayEnd)}`;
        setInputValue(formattedValue);
        if (activeEnd === 'start') {
          setActiveEnd('end');
        } else if (activeEnd === 'end') {
          setTmpValueDisplayed(false);
          setCalendarOpen(false);
        }
      }
    };

    const handleActiveDateValueChange = (date?: Dayjs) => {
      const [startString, endString] = tmpValue?.split(separator) ?? [];
      if (activeEnd === 'start') {
        setTmpValue(date ? format(date) + (endString ? separator + endString : '') : '');
      } else if (activeEnd === 'end') {
        setTmpValue(date ? startString + separator + format(date) : '');
      }

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
      const inputNode = inputRef.current;
      if (inputNode) {
        const { value } = inputNode;
        if (inputValue !== value) {
          changeInputData(inputRef.current, { value: inputValue });
        }
      }
    }, [inputValue]);

    useEffect(() => {
      if (isCalendarOpen && inputRef.current) {
        const node = inputRef.current;
        const { value } = node;
        setInputValue(value);
      }
    }, [isCalendarOpen]);

    useEffect(() => {
      function oninput(this: HTMLInputElement) {
        const { value } = this;
        setTmpValueDisplayed(false);
        if (value !== inputValue) {
          setInputValue(value);
          setCalendarOpen(true);
        }
      }

      if (inputRef.current) {
        const node = inputRef.current;
        node.addEventListener('input', oninput, true);
        return () => {
          node.removeEventListener('input', oninput, true);
        };
      }
    }, [inputValue]);

    // useEffect(() => {
    //   const date = parse(inputValue);
    //   if (date.isValid()) {
    //     setDisplayDate(date);
    //   } else if (!inputValue) {
    //     setDisplayDate(dayjs());
    //   }
    // }, [inputValue]);

    // TODO смержить с оригинальными обработчиками из пропсов
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
      onMouseDown: (e) => e.preventDefault(),
    };

    const rangeTimestamp = dateRangeFromValue(inputValue);
    const [activeTmpStart, activeTmpEnd] = dateRangeFromValue(tmpValue);
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
              selectedDateRangeValue={rangeTimestamp}
              onSelectedDateRangeValueChange={handleSelectedDateValueChange}
              activeDateValue={activeEnd === 'start' ? activeTmpStart : activeTmpEnd}
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
DateRangePicker.displayName = 'DateRangePicker';

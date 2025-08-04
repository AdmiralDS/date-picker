import type { ComponentProps, MouseEventHandler, Ref } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import styled, { type DataAttributes } from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { changeInputData, refSetter } from '@admiral-ds/react-ui';
import { DateRangePickerCalendar } from '#lib/DateRangePickerCalendar';
import type { InputBoxProps } from '#lib/Input/InputBox';
import { InputBox } from '#lib/Input/InputBox';
import { InputIconButton } from '#lib/InputIconButton';
import CalendarOutline from '@admiral-ds/icons/build/system/CalendarOutline.svg?react';
import { PopoverPanel } from '#lib/PopoverPanel';
import { InputsConfirmedState } from '#lib/calendarInterfaces.js';
import type { ActiveEnd, CalendarLocaleProps, CalendarViewMode } from '#lib/calendarInterfaces.js';
import type { DateRange } from 'lib/types';
import { RangeInput, RangeInputProps } from '#lib/Input/RangeInput';
import { defaultDateFormatter, sortDatesAsc } from '#lib/utils';
import { DimensionInterface } from '#lib/Input/types';
import { DATE_INPUT_WIDTH_S, DATE_INPUT_WIDTH_M_XL } from '#lib/Input/constatnts';

const Calendar = styled(DateRangePickerCalendar)`
  border: none;
  box-shadow: none;
`;

export interface DateRangePickerProps
  extends RangeInputProps,
    Omit<DimensionInterface, 'width'>,
    Omit<InputBoxProps, 'onBlur' | 'onFocus' | '$dimension'> {
  /** Изменение локали выпадающего календаря */
  Calendarlocale?: CalendarLocaleProps;

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

  /** Проверка диапазона */
  checkDateRange?: (dateRange: DateRange) => DateRange;
}

function checkDateRangeDefault(dateRange: DateRange) {
  return sortDatesAsc(...dateRange, 'date');
}

const nothing = () => {};

/**
 * Компонент DateRangePicker
 */
export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      dimension = 'm',
      inputPropsStart = {},
      inputPropsEnd = {},
      separator = '\u2014',
      checkDateRange = checkDateRangeDefault,
      onSelectedRangeChange,
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
      format = defaultDateFormatter,
      monthNavigationButtonPropsConfig,
      yearNavigationButtonPropsConfig,
      iconButtonPropsConfig = nothing,
      dropdownPropsConfig = nothing,
      ...containerProps
    },
    refContainerProps,
  ) => {
    const [displayDate, setDisplayDate] = useState(dayjs());
    const [inputsConfirmed, setInputsConfirmed] = useState<InputsConfirmedState>(InputsConfirmedState.initial);
    const handleInputsConfirmedChange = () => {
      if (inputsConfirmed >= InputsConfirmedState.firstConfirmed) {
        setCalendarOpen(false);
      } else {
        setInputsConfirmed(inputsConfirmed + 1);
      }
    };

    const inputBoxRef = useRef(null);
    const startInputRef = useRef<HTMLInputElement>(null);
    const endInputRef = useRef<HTMLInputElement>(null);

    const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);

    const [activeDate, setActiveDate] = useState<Dayjs | undefined>(undefined);
    const handleActiveDateValueChange = (date?: Dayjs) => {
      if (calendarViewMode === 'dates') {
        setActiveDate(date);
      }
    };

    const [activeEnd, setActiveEnd] = useState<ActiveEnd>('start');

    const handleActiveEndChange = (end: ActiveEnd) => {
      setActiveEnd(end);
    };

    const [calendarViewMode, setCalendarViewMode] = useState<CalendarViewMode>('dates');

    const handleInputIconButtonMouseDown: MouseEventHandler<Element> = (e) => {
      e.preventDefault();
      setCalendarOpen((isOpen) => !isOpen);
    };

    const [selectedRange, setSelectedRange] = useState<DateRange>([undefined, undefined]);
    const handleSelectedDateValueChange = (dateRange: DateRange) => {
      if (calendarViewMode === 'dates') {
        const checkedRange = checkDateRange(dateRange);
        const start = checkedRange[0];
        const end = checkedRange[1];

        if (start && start.isValid() && !start.isSame(selectedRange[0])) {
          const formattedStart = format(start);

          if (startInputRef.current) changeInputData(startInputRef.current, { value: formattedStart });
        }

        if (end && end.isValid() && !end.isSame(selectedRange[1])) {
          const formattedEnd = format(end);

          if (endInputRef.current) changeInputData(endInputRef.current, { value: formattedEnd });
        }

        setSelectedRange(checkedRange);
        handleInputsConfirmedChange();
        onSelectedRangeChange?.(checkedRange);
      }
    };

    useEffect(() => {
      if (isCalendarOpen) setInputsConfirmed(InputsConfirmedState.initial);
    }, [isCalendarOpen]);

    const handleCalendarViewModeChange = (view: CalendarViewMode) => {
      setCalendarViewMode(view);
    };

    const handleRangeInputCancel = () => {
      setCalendarOpen(false);
    };
    const handleStartDateInputComplete = () => {
      handleInputsConfirmedChange();
    };
    const handleEndDateInputComplete = () => {
      handleInputsConfirmedChange();
    };

    const containerFinalProps: ComponentProps<typeof InputBox> = {
      ...containerProps,
      $dimension: dimension,
      ref: refSetter(inputBoxRef, refContainerProps),
    };

    const handleInputFocus = () => {
      setCalendarOpen(true);
    };

    const handleInputBlur = () => {
      setCalendarOpen(false);
    };

    const handleRangeInputFinish = () => {
      setCalendarOpen(false);
    };

    const startRef =
      inputPropsStart.ref !== undefined
        ? refSetter(startInputRef, inputPropsStart.ref as Ref<HTMLInputElement>)
        : startInputRef;

    const endRef =
      inputPropsEnd.ref !== undefined
        ? refSetter(endInputRef, inputPropsEnd.ref as Ref<HTMLInputElement>)
        : endInputRef;

    const rangeInputProps: RangeInputProps = {
      dimension: dimension,
      width: dimension === 's' ? DATE_INPUT_WIDTH_S : DATE_INPUT_WIDTH_M_XL,

      inputPropsStart: { ...inputPropsStart, ref: startRef },
      inputPropsEnd: { ...inputPropsEnd, ref: endRef },
      separator: separator,
      activeDate: activeDate,
      onSelectedRangeChange: handleSelectedDateValueChange,
      onFocus: handleInputFocus,
      onBlur: handleInputBlur,
      onCancelInput: handleRangeInputCancel,
      onStartDateInputComplete: handleStartDateInputComplete,
      onEndDateInputComplete: handleEndDateInputComplete,
      onActiveEndValueChange: handleActiveEndChange,
      onRangeInputFinish: handleRangeInputFinish,
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

    return (
      <InputBox {...containerFinalProps} style={{ alignItems: 'center' }}>
        <RangeInput {...rangeInputProps} />
        <InputIconButton {...iconButtonFinalProps} {...iconButtonPropsConfig(iconButtonFinalProps)} />
        {isCalendarOpen && (
          <PopoverPanel {...dropdownFinalProps} {...dropdownPropsConfig(dropdownFinalProps)}>
            <Calendar
              onViewModeChange={handleCalendarViewModeChange}
              dateValue={displayDate}
              onDateValueChange={(day) => setDisplayDate(day)}
              selectedDateRangeValue={selectedRange}
              onSelectedDateRangeValueChange={handleSelectedDateValueChange}
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
              activeEndValue={activeEnd}
            />
          </PopoverPanel>
        )}
      </InputBox>
    );
  },
);
DateRangePicker.displayName = 'DateRangePicker';

import type { ComponentProps, MouseEventHandler, Ref } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
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
import type { ActiveEnd, CalendarViewMode } from '#lib/calendarInterfaces.js';
import type { DateRange } from 'lib/types';
import { RangeInput, RangeInputProps } from '#lib/Input/RangeInput';
import { defaultDateFormatter, defaultDateParser, sortDatesAsc } from '#lib/utils';
import { DimensionInterface } from '#lib/Input/types';

const Calendar = styled(DateRangePickerCalendar)`
  border: none;
  box-shadow: none;
`;

export interface DateRangePickerProps
  extends RangeInputProps,
    DimensionInterface,
    Omit<InputBoxProps, 'onBlur' | 'onFocus' | '$dimension'> {
  /** Функция для конвертации значение календаря в строку инпута */
  format?: (date?: Dayjs) => string;

  /** Функция для конвертации строки инпута в значение календаря */
  parse?: (date?: string) => Dayjs | undefined;

  /** Разделитель между инпутами */
  separator?: string;

  /** Проверка диапазона */
  checkDateRange?: (dateRange: DateRange) => DateRange;
}

function checkDateRangeDefault(dateRange: DateRange) {
  return sortDatesAsc(...dateRange, 'date');
}

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
      format = defaultDateFormatter,
      parse = defaultDateParser,
      onSelectedRangeChange,
      ...containerProps
    },
    refContainerProps,
  ) => {
    console.log('date range picker');

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
    useEffect(() => {
      console.log('DateRangePicker', activeEnd);
    }, [activeEnd]);

    const [calendarViewMode, setCalendarViewMode] = useState<CalendarViewMode>('dates');

    const handleInputIconButtonMouseDown: MouseEventHandler<Element> = (e) => {
      e.preventDefault();
      setCalendarOpen((isOpen) => !isOpen);
    };

    const [selectedRange, setSelectedRange] = useState<DateRange>([undefined, undefined]);
    const handleSelectedDateValueChange = (dateRange: DateRange) => {
      if (calendarViewMode === 'dates') {
        console.log(dateRange);

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
        console.log('handleSelectedDateValueChange', checkedRange);
      }
    };

    useEffect(() => {
      if (isCalendarOpen) setInputsConfirmed(InputsConfirmedState.initial);
    }, [isCalendarOpen]);

    const handleCalendarViewModeChange = (view: CalendarViewMode) => {
      setCalendarViewMode(view);
    };

    // const handleRangeInputBegin = () => {
    //   setCalendarOpen(true);
    // };
    // const handleRangeInputFinish = () => {
    //   setCalendarOpen(false);
    // };
    const handleRangeInputCancel = () => {
      setCalendarOpen(false);
    };
    const handleStartDateInputComplete = () => {
      handleInputsConfirmedChange();
    };
    const handleEndDateInputComplete = () => {
      handleInputsConfirmedChange();
    };

    // TODO смержить с оригинальными обработчиками из пропсов
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

      inputPropsStart: { ...inputPropsStart, ref: startRef },
      inputPropsEnd: { ...inputPropsEnd, ref: endRef },
      separator: separator,
      activeDate: activeDate,
      onSelectedRangeChange: handleSelectedDateValueChange,
      format: format,
      parse: parse,
      onFocus: handleInputFocus,
      onBlur: handleInputBlur,
      onCancelInput: handleRangeInputCancel,
      onStartDateInputComplete: handleStartDateInputComplete,
      onEndDateInputComplete: handleEndDateInputComplete,
      onActiveEndValueChange: handleActiveEndChange,
    };
    console.log(rangeInputProps.inputPropsStart, rangeInputProps.inputPropsEnd);

    return (
      <InputBox {...containerFinalProps} style={{ alignItems: 'center' }}>
        <RangeInput {...rangeInputProps} />
        <InputIconButton icon={CalendarOutline} onMouseDown={handleInputIconButtonMouseDown} />
        {isCalendarOpen && (
          <PopoverPanel targetElement={inputBoxRef.current} alignSelf="auto" onMouseDown={(e) => e.preventDefault()}>
            <Calendar
              onViewModeChange={handleCalendarViewModeChange}
              dateValue={displayDate}
              onDateValueChange={(day) => setDisplayDate(day)}
              selectedDateRangeValue={selectedRange}
              onSelectedDateRangeValueChange={handleSelectedDateValueChange}
              onActiveDateValueChange={handleActiveDateValueChange}
              activeEndValue={activeEnd}
            />
          </PopoverPanel>
        )}
      </InputBox>
    );
  },
);
DateRangePicker.displayName = 'DateRangePicker';

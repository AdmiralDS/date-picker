import type { ComponentProps, FormEventHandler, MouseEventHandler } from 'react';
import { forwardRef, useRef, useState } from 'react';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { refSetter } from '@admiral-ds/react-ui';
import { DatePickerCalendar } from '#lib/DatePickerCalendar';
import { InputBox } from '#lib/Input/InputBox';
import type { InputLineProps } from '#lib/Input/InputLine';
import { InputLine } from '#lib/Input/InputLine';
import { InputIconButton } from '#lib/InputIconButton';
import CalendarOutline from '@admiral-ds/icons/build/system/CalendarOutline.svg?react';

import { PopoverPanel } from '#lib/PopoverPanel';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

const dateOptions = maskitoDateOptionsGenerator({ mode: 'dd/mm/yyyy' });

const Calendar = styled(DatePickerCalendar)`
  border: none;
  box-shadow: none;
`;

export type SizeProps = {
  /** Размеры компонента */
  'data-size'?: 's' | 'm' | 'xl';
};

export type DatePickerProps = ComponentProps<typeof InputBox> & {
  /**
   * Пропсы внутреннего инпута
   */
  inputProps?: InputLineProps;
} & SizeProps;

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ inputProps = {}, ...containerProps }, refContainerProps) => {
    const [inputValue, setInputValue] = useState('11.');
    const [tmpValue, setTmpValue] = useState<string | undefined>();
    const [isFocused, setIsFocused] = useState(false);
    const inputBoxRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);

    const maskedDateInputRef = useMaskito({ options: dateOptions });

    const handleInputIconButtonMouseDown: MouseEventHandler<Element> = (e) => {
      e.preventDefault();
      if (isFocused) {
        setCalendarOpen((isOpen) => !isOpen);
      }
    };

    const handleSelectedDateValueChange = (date: Dayjs) => {
      setInputValue(date.format('DD.MM.YYYY'));
      setTmpValue(undefined);
      setCalendarOpen(false);
    };

    const handleBlur = () => {
      setCalendarOpen(false);
      setIsFocused(false);
      setTmpValue(undefined);
    };

    const handleFocus = () => {
      setCalendarOpen(true);
      setIsFocused(true);
    };

    const handleInputBoxMouseDown: MouseEventHandler<Element> = (e) => {
      if (e.target === e.currentTarget) e.preventDefault();
      if (!isFocused) {
        inputRef.current?.focus();
      }
    };

    const handleInput: FormEventHandler<HTMLInputElement> = (e) => {
      setInputValue(e.currentTarget.value);
      setTmpValue(undefined);
    };

    // TODO смержить с оригинальными обработчиками из пропсов
    const containerFinalProps: ComponentProps<typeof InputBox> = {
      ...containerProps,
      ref: refSetter(inputBoxRef, refContainerProps),
      onMouseDown: handleInputBoxMouseDown,
    };
    const inputFinalProps: ComponentProps<typeof InputLine> = {
      ...inputProps,
      ref: refSetter(maskedDateInputRef, inputRef),
      value: inputValue,
      onInput: handleInput,
      onBlur: handleBlur,
      onFocus: handleFocus,
      tmpValue,
    };
    return (
      <InputBox {...containerFinalProps}>
        <InputLine {...inputFinalProps} />
        <InputIconButton icon={CalendarOutline} onMouseDown={handleInputIconButtonMouseDown} />
        {isCalendarOpen && (
          <PopoverPanel targetElement={inputBoxRef.current} alignSelf="auto">
            <Calendar
              selectedDateValue={dayjs(inputValue, 'DD.MM.YYYY')}
              onSelectedDateValueChange={handleSelectedDateValueChange}
              onActiveDateValueChange={(date) => setTmpValue(date ? date.format('DD.MM.YYYY') : undefined)}
            />
          </PopoverPanel>
        )}
      </InputBox>
    );
  },
);

import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { T, refSetter } from '@admiral-ds/react-ui';
import { DatePickerCalendar as DatePicker } from '#src/components/DatePickerCalendar';
import { InputBox } from '#src/components/Input/InputBox';
import { InputLine } from '#src/components/Input/InputLine';
import { InputIconButton } from '#src/components/InputIconButton';
//import { Separator } from '#src/components/Input';
import CalendarOutline from '@admiral-ds/icons/build/system/CalendarOutline.svg?react';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { PopoverPanel } from '#src/components/PopoverPanel.js';
import { useRef, useState, type MouseEventHandler } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

const dateOptions = maskitoDateOptionsGenerator({ mode: 'dd/mm/yyyy' });

const Calendar = styled(DatePicker)`
  border: none;
  box-shadow: none;
`;

export const DatePickerSimpleTemplate = () => {
  const [inputValue, setInputValue] = useState('11.');
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
    setCalendarOpen(false);
  };

  const handleBlur = () => {
    setCalendarOpen(false);
    setIsFocused(false);
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

  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <InputBox ref={inputBoxRef} onMouseDown={handleInputBoxMouseDown}>
          <InputLine
            ref={refSetter(maskedDateInputRef, inputRef)}
            value={inputValue}
            onInput={(e) => setInputValue(e.currentTarget.value)}
            placeholder="Введите дату"
            dataPlaceholder="дд.мм.гггг"
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <InputIconButton icon={CalendarOutline} onMouseDown={handleInputIconButtonMouseDown} />
        </InputBox>
        {isCalendarOpen && (
          <PopoverPanel targetElement={inputBoxRef.current} alignSelf="auto">
            <Calendar
              selectedDateValue={dayjs(inputValue, 'DD.MM.YYYY')}
              onSelectedDateValueChange={handleSelectedDateValueChange}
            />
          </PopoverPanel>
        )}
        {/* <InputBox data-size="xl">
          <InputLine ref={maskedDateRangeInputRef} dataPlaceholder="дд.мм.гггг - дд.мм.гггг" />
          <InputIconButton icon={CalendarOutline} />
        </InputBox>
        <InputBox data-size="s">
          <InputLine ref={maskedStartDateInputRef} placeholder="дд.мм.гггг" style={{ width: 70 }} />
          <Separator style={{ width: 20 }}> – </Separator>
          <InputLine ref={maskedEndDateInputRef} placeholder="дд.мм.гггг" />
          <InputIconButton icon={CalendarOutline} />
        </InputBox> */}
      </WrapperVertical>

      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор даты
        </T>
        <T font="Body/Body 2 Long" as="div">
          Высота календаря постоянна и состоит из шести рядов чисел. Текущий месяц начинается с первого ряда и, если его
          даты не заходят на шестой ряд, то там ставятся пустые ячейки (Empty).
          <br />
          <br />
          Текущая дата выделяется обводкой в виде черного кружка. Ховер на дате подсвечивается обводкой синего цвета.
          Выбранная дата отмечается синим кружком.
          <br />
          При ховере на месяце, годе, стрелках вправо/влево появляются тултипы с подсказками.
          <br />
          <br />
          Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год,
          либо нажав на месяц/год в шапке календаря
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

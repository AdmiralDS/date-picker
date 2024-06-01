import { maskitoDateOptionsGenerator, maskitoDateRangeOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { T } from '@admiral-ds/react-ui';
import { Separator } from '@admiral-ds/date-picker';
import { DatePickerCalendar as DatePicker } from '#src/components/DatePickerCalendar';
import { InputBox } from '#src/components/Input/InputBox';
import { InputLine } from '#src/components/Input/InputLine';
import { InputIconButton } from '#src/components/InputIconButton';
//import { Separator } from '#src/components/Input';
import CalendarOutline from '@admiral-ds/icons/build/system/CalendarOutline.svg?react';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { PopoverPanel } from '#src/components/PopoverPanel.js';
import { useState, type MouseEventHandler } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

const dateOptions = maskitoDateOptionsGenerator({ mode: 'dd/mm/yyyy' });
const dateRangeOptions = maskitoDateRangeOptionsGenerator({ mode: 'dd/mm/yyyy' });

const Calendar = styled(DatePicker)`
  border: none;
  box-shadow: none;
  background-color: transparent;
`;

export const DatePickerSimpleTemplate = () => {
  const [defaultDateValue, setDefaultDateValue] = useState('11.');
  const maskedDateInputRef = useMaskito({ options: dateOptions });
  const maskedDateRangeInputRef = useMaskito({ options: dateRangeOptions });
  const maskedStartDateInputRef = useMaskito({ options: dateOptions });
  const maskedEndDateInputRef = useMaskito({ options: dateOptions });

  const handleInputIconButtonClick: MouseEventHandler<Element> = (e) => {
    e.preventDefault();
    const calendar = document.getElementById('calendar');
    calendar?.togglePopover();
  };
  const handleSelectedDateValueChange = (date: Dayjs) => {
    console.log(date.format('DD.MM.YYYY'));
    setDefaultDateValue(date.format('DD.MM.YYYY'));
  };
  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <InputBox>
          <InputLine
            ref={maskedDateInputRef}
            value={defaultDateValue}
            onChange={(e) => setDefaultDateValue(e.target.value)}
            placeholder="Введите дату"
            dataPlaceholder="дд.мм.гггг"
          />
          <InputIconButton icon={CalendarOutline} onMouseDown={handleInputIconButtonClick} />
        </InputBox>
        <PopoverPanel id="calendar" popover="manual">
          <Calendar onSelectedDateValueChange={handleSelectedDateValueChange} />
        </PopoverPanel>
        <InputBox data-size="xl">
          <InputLine ref={maskedDateRangeInputRef} dataPlaceholder="дд.мм.гггг - дд.мм.гггг" />
          <InputIconButton icon={CalendarOutline} />
        </InputBox>
        <InputBox data-size="s">
          <InputLine ref={maskedStartDateInputRef} placeholder="дд.мм.гггг" style={{ width: 70 }} />
          <Separator style={{ width: 20 }}> – </Separator>
          <InputLine ref={maskedEndDateInputRef} placeholder="дд.мм.гггг" />
          <InputIconButton icon={CalendarOutline} />
        </InputBox>
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

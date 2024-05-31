import { maskitoDateOptionsGenerator, maskitoDateRangeOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { T } from '@admiral-ds/react-ui';
import { Separator } from '@admiral-ds/date-picker';
import { InputBox } from '#src/components/Input/InputBox';
import { InputLine } from '#src/components/Input/InputLine';
import { InputIconButton } from '#src/components/InputIconButton';
//import { Separator } from '#src/components/Input';
import CalendarOutline from '@admiral-ds/icons/build/system/CalendarOutline.svg?react';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

const dateOptions = maskitoDateOptionsGenerator({ mode: 'dd/mm/yyyy' });
const dateRangeOptions = maskitoDateRangeOptionsGenerator({ mode: 'dd/mm/yyyy' });

export const DatePickerSimpleTemplate = () => {
  const maskedDateInputRef = useMaskito({ options: dateOptions });
  const maskedDateRangeInputRef = useMaskito({ options: dateRangeOptions });
  const maskedStartDateInputRef = useMaskito({ options: dateOptions });
  const maskedEndDateInputRef = useMaskito({ options: dateOptions });
  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <InputBox>
          <InputLine
            ref={maskedDateInputRef}
            defaultValue="11."
            placeholder="Введите дату"
            dataPlaceholder="дд.мм.гггг"
          />
          <InputIconButton icon={CalendarOutline} />
        </InputBox>
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

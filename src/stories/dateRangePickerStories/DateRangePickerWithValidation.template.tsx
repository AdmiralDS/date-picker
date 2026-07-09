import { T } from '@admiral-ds/react-ui';
import { DateRangePicker } from '@admiral-ds/date-picker';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { useRef, useState, type FormEvent } from 'react';
import dayjs, { type Dayjs } from 'dayjs';

const defaultInputStartProps = {
  placeholder: 'дд.мм.гггг',
  dataPlaceholder: 'дд.мм.гггг',
  value: '',
};
const defaultInputEndProps = {
  placeholder: 'дд.мм.гггг',
  dataPlaceholder: 'дд.мм.гггг',
  value: '',
};

export const DateRangePickerWithValidationTemplate = () => {
  const [inputStartValue, setInputStartValue] = useState(defaultInputStartProps.value);
  const [inputEndValue, setInputEndValue] = useState(defaultInputEndProps.value);

  const valuesRef = useRef({ start: '', end: '' });

  const dateOptions = maskitoDateOptionsGenerator({ mode: 'dd/mm/yyyy' });
  const maskedDateInputStartRef = useMaskito({ options: dateOptions });
  const maskedDateInputEndRef = useMaskito({ options: dateOptions });

  const sortDate = (firstDate: Dayjs, secondDate: Dayjs) => {
    if (firstDate.isAfter(secondDate)) {
      setInputEndValue(String(firstDate.format('DD.MM.YYYY')));
      setInputStartValue(String(secondDate.format('DD.MM.YYYY')));
    }
  };

  const hangleBlur = () => {
    const { start, end } = valuesRef.current;

    const startDate = dayjs(start, 'DD.MM.YYYY');
    const endDate = dayjs(end, 'DD.MM.YYYY');

    if (startDate.isValid() && endDate.isValid()) sortDate(startDate, endDate);
  };

  const handleChangeStartInput = (e: FormEvent<HTMLInputElement>) => {
    setInputStartValue(e.currentTarget.value);
    valuesRef.current.start = e.currentTarget.value;
  };

  const handleChangeEndInput = (e: FormEvent<HTMLInputElement>) => {
    setInputEndValue(e.currentTarget.value);
    valuesRef.current.end = e.currentTarget.value;
  };

  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <DateRangePicker
          onBlur={hangleBlur}
          inputPropsStart={{
            ...defaultInputStartProps,
            value: inputStartValue,
            onInput: handleChangeStartInput,
            ref: maskedDateInputStartRef,
          }}
          inputPropsEnd={{
            ...defaultInputEndProps,
            value: inputEndValue,
            onInput: handleChangeEndInput,
            ref: maskedDateInputEndRef,
          }}
        />
      </WrapperVertical>

      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Валидация даты в хронологическом порядке
        </T>
        <T font="Body/Body 2 Long" as="div">
          Если значение начальной даты больше конечной, то при событии blur даты поменяются местами.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};

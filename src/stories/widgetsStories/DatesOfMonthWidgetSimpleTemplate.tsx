import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';

import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, dateStringToDayjs } from '#src/components/Calendar/utils';
import { DatesOfMonthWidget } from '#src/components/Widgets/DatesOfMonthWidget';
import { DATES_OF_MONTH_WIDGET_WIDTH } from '#src/components/Widgets/DatesOfMonthWidget/constants';
import type { DatesOfMonthProps, CellStateProps } from '#src/components/Widgets/DatesOfMonthWidget/interfaces';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding: 10px;
  width: ${DATES_OF_MONTH_WIDGET_WIDTH}px;
`;
const MonthYear = styled.div`
  margin-bottom: 10px;
  ${typography['Subtitle/Subtitle 2']}
`;

export const DatesOfMonthWidgetSimpleTemplate = (props: DatesOfMonthProps) => {
  const locale = 'ru';
  const date = dateStringToDayjs(props.date, locale) || dayjs().locale(locale);
  const [selected, setSelected] = useState<Dayjs | undefined>(dayjs().locale(locale).add(1, 'day'));

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
    const clickedDate = dateStringToDayjs(clickedCell);
    if (clickedDate && !dateIsDisabled(clickedDate) && !dateIsOutsideMonth(clickedDate)) {
      setSelected(clickedDate);
    }
  };
  const dateIsOutsideMonth = (dateCurrent?: Dayjs) => {
    return dateCurrent && dateCurrent.month() !== date.month();
  };
  const dateIsDisabled = (dateCurrent?: Dayjs) => {
    return !!(dateCurrent && dateCurrent.month() === date.month() && dateCurrent.day() === 6);
  };
  const dateIsHoliday = (dateCurrent?: Dayjs) => {
    return !!(
      dateCurrent &&
      dateCurrent.month() === date.month() &&
      (dateCurrent.day() === 6 || dateCurrent.day() === 0 || dateCurrent.isSame(dayjs().locale(locale), 'date'))
    );
  };
  const dateIsHidden = (dateCurrent?: Dayjs) => {
    return dateCurrent && dateCurrent.isAfter(date, 'month');
  };

  const getDateState = (dateString: string) => {
    const state: CellStateProps = {};
    const dateCurrent = dateStringToDayjs(dateString, locale);
    if (dateCurrent && dateCurrent.isSame(selected, 'date')) {
      state.selected = true;
    }
    state.disabled = dateIsDisabled(dateCurrent);
    state.outsideMonth = dateIsOutsideMonth(dateCurrent);
    state.hidden = dateIsHidden(dateCurrent);
    state.holiday = dateIsHoliday(dateCurrent);

    return state;
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(date.format('D MMMM YYYY'))}</MonthYear>
      <DatesOfMonthWidget {...props} onClick={handleClick} cellState={getDateState} />
    </Wrapper>
  );
};

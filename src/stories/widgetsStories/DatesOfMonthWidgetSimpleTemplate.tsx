import type { DatesOfMonthProps } from '#src/components/Widgets/DatesOfMonthWidget/interfaces';
import { capitalizeFirstLetter, dateStringToDayjs } from '#src/components/Calendar/utils';
import dayjs from 'dayjs';
import { DatesOfMonthWidget } from '#src/components/Widgets/DatesOfMonthWidget';
import styled from 'styled-components';
import { DATES_OF_MONTH_WIDGET_WIDTH } from '#src/components/Widgets/DatesOfMonthWidget/constants';
import { typography } from '@admiral-ds/react-ui';

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

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(date.format('D MMMM YYYY'))}</MonthYear>
      <DatesOfMonthWidget {...props} />
    </Wrapper>
  );
};

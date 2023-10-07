import { capitalizeFirstLetter, getDayNamesList } from '#src/components/Calendar/utils';
import styled from 'styled-components';
import { CELL_PADDING, CELL_SIZE } from '#src/components/Widgets/DatesOfMonthWidget/constants';
import type { DaysProps } from '#src/components/Widgets/DatesOfMonthWidget/interfaces';

const DayNamesWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-bottom: 4px;
`;
const DayNameCell = styled.div`
  box-sizing: border-box;
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  padding: ${CELL_PADDING};
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  text-align: center;
`;

export const Days = ({ locale = 'ru' }: DaysProps) => {
  const dayNamesList = getDayNamesList(locale);
  const renderDayNames = () => {
    return dayNamesList.map((day) => <DayNameCell key={day}>{capitalizeFirstLetter(day)}</DayNameCell>);
  };

  return <DayNamesWrapper>{renderDayNames()}</DayNamesWrapper>;
};

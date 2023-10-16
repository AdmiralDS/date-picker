import styled from 'styled-components';
import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, dateStringToDayjs, getDayNamesList } from '../../utils';
import type { DayNamesProps } from './interfaces';

const DAY_NAME_SIZE = '36px';
const DAY_NAME_MARGIN_BOTTOM = '4px';
const DAY_NAME_PADDING = '8px 0';

const DayNameWrapper = styled.div`
  display: inline-block;
  user-select: none;
  width: ${DAY_NAME_SIZE};
  height: ${DAY_NAME_SIZE};
  padding: ${DAY_NAME_PADDING};
  margin-bottom: ${DAY_NAME_MARGIN_BOTTOM};
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  box-sizing: border-box;
`;

export const DayNames = ({ date: dateString, locale }: DayNamesProps) => {
  const date = dateStringToDayjs(dateString, locale);
  if (!date) return <></>;

  const dayNamesList = getDayNamesList(date.locale());
  return (
    <div>
      {dayNamesList.map((dayName) => {
        return <DayNameWrapper key={dayName}>{capitalizeFirstLetter(dayName)}</DayNameWrapper>;
      })}
    </div>
  );
};
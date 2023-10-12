import styled from 'styled-components';

import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter } from '#src/components/utils';
import type { MonthYearProps } from '#src/components/MonthNavigationPanelWidget/interfaces';

const MonthYearWrapper = styled.div`
  display: flex;
  color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  ${typography['Subtitle/Subtitle 2']}
`;
const MonthWrapper = styled.div`
  padding: 4px 8px;
`;
const YearWrapper = styled.div`
  padding: 4px 8px;
`;

export const MonthYear = ({ date, ...props }: MonthYearProps) => {
  return (
    <MonthYearWrapper {...props}>
      <MonthWrapper>{capitalizeFirstLetter(date.format('MMMM'))}</MonthWrapper>
      <YearWrapper>{date.year()}</YearWrapper>
    </MonthYearWrapper>
  );
};

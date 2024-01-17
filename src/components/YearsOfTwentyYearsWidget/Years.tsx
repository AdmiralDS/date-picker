import styled from 'styled-components';
import dayjs from 'dayjs';

import { getCurrentDate, getSelectedDate, setNoon, yearIsDisabled, yearsRange } from '#src/components/utils';
import { YEARS_ON_SCREEN, YEARS_WRAPPER_HEIGHT } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import type { BaseInnerWidgetProps } from '#src/components/widgetInterfaces.ts';
import { createElement } from 'react';

interface YearsProps extends BaseInnerWidgetProps {}

const YearsWrapper = styled.div`
  height: ${YEARS_WRAPPER_HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const yearsArray = Array.from(Array(YEARS_ON_SCREEN).keys());

/*const getYearCellDataAttributes = (value?: string, isCurrent?: boolean, isActive?: boolean): Record<string, any> => {
  return {
    'data-value': value ? value : undefined,
    'data-is-current-year': isCurrent ? isCurrent : undefined,
    'data-is-active-year': isActive ? isActive : undefined,
  };
};*/

export const Years = ({
  date,
  selected,
  active,
  activeRangeEnd,
  disabledDate,
  onCellMouseEnter,
  onCellClick,
  cell,
  ...props
}: YearsProps) => {
  const { start } = yearsRange(date, YEARS_ON_SCREEN);
  const firstYear = setNoon(dayjs(`${start}-01-01T12:00:00`));
  const cellModel = yearsArray.map((v) => {
    const date = firstYear.add(v, 'year');
    const selectedDate = getSelectedDate(selected);
    const disabled = yearIsDisabled(date, disabledDate);
    const isCurrent = date.isSame(getCurrentDate(), 'year');
    const isActive = date.isSame(active, 'year');
    return {
      date,
      key: date.toString(),
      cellContent: date.year(),
      disabled: disabled,
      selected: date.isSame(selectedDate, 'year'),
      isCurrent: isCurrent,
      isActive: isActive,
      //onMouseEnter: () => onCellMouseEnter?.(date, disabled),
      //onClick: () => onCellClick?.(date, disabled),
      //...getYearCellDataAttributes(date.toString(), isCurrent, isActive),
    };
  });
  const cells = cellModel.map((model) => {
    return createElement(cell, model);
  });

  return <YearsWrapper {...props}>{cells}</YearsWrapper>;
};

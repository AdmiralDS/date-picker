import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';

import { typography } from '@admiral-ds/react-ui';

import {
  capitalizeFirstLetter,
  dateStringToDayjs,
  getCurrentTimeZone,
  getDayjsDate,
  getCurrentDate,
  dayjsDateToString,
} from '#src/components/utils';
import { DatesOfMonthWidget } from '#src/components/DatesOfMonthWidget';
import { DATES_OF_MONTH_WIDGET_WIDTH } from '#src/components/DatesOfMonthWidget/constants';
import type { DatesOfMonthWidgetProps, CellStateProps } from '#src/components/DatesOfMonthWidget/interfaces';
import { baseDayNameCellMixin } from '#src/components/DefaultCell/mixins.tsx';
import dayjs from 'dayjs';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding: 10px;
  width: ${DATES_OF_MONTH_WIDGET_WIDTH}px;
  border: 1px ${(p) => p.theme.color['Neutral/Neutral 90']} solid;
`;
const MonthYear = styled.div`
  margin-bottom: 10px;
  ${typography['Subtitle/Subtitle 2']}
`;

const getDateCellDataAttributes = (
  value?: string,
  isHoliday?: boolean,
  //isOutsideMonth?: boolean,
  isCurrent?: boolean,
  isActive?: boolean,
) => {
  return {
    'data-value': value ? value : undefined,
    'data-is-holiday-cell': isHoliday ? isHoliday : undefined,
    //'data-is-outside-month-cell': isOutsideMonth ? isOutsideMonth : undefined,
    'data-is-current-day-cell': isCurrent ? isCurrent : undefined,
    'data-is-active-cell': isActive ? isActive : undefined,
  };
};

export const DatesOfMonthWidgetSimpleTemplate = ({
  date,
  locale = 'ru',
  timezone = getCurrentTimeZone(),
  ...props
}: DatesOfMonthWidgetProps) => {
  const localeInner = locale || 'ru';
  const dateInner = getDayjsDate(localeInner, timezone, date);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(
    getCurrentDate(localeInner, timezone).add(1, 'day'),
  );

  const [activeDateInner, setActiveDateInner] = useState<Dayjs>();

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
    const clickedDate = dateStringToDayjs(clickedCell);
    if (clickedDate && !dateIsDisabled(clickedDate) && !dateIsOutsideMonth(clickedDate)) {
      setSelectedDate(clickedDate);
    }
  };

  const handleActiveDateChange = (dateString?: string) => {
    const dayjsActiveDate = dateStringToDayjs(dateString, localeInner, timezone);
    //console.log(`set active ${dayjsActiveDate}`);
    setActiveDateInner(dayjsActiveDate);
  };
  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'dateCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, localeInner, timezone);
      if (hoveredDate) {
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
    }
  };
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'dateCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, localeInner, timezone);
      if (hoveredDate && (!activeDateInner || !hoveredDate.isSame(activeDateInner, 'date'))) {
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
      return;
    }
    if (target.dataset.containerType !== 'datesWrapper') {
      if (activeDateInner) {
        handleActiveDateChange(undefined);
        return;
      }
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (_) => {
    handleActiveDateChange(undefined);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getDayNameCellState = (_: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  const dateIsSelected = (dateCurrent?: Dayjs) => {
    return dateCurrent && selectedDate && dateCurrent.isSame(selectedDate, 'date');
  };
  const dateIsOutsideMonth = (dateCurrent?: Dayjs) => {
    return dateCurrent && dateCurrent.month() !== dateInner.month();
  };
  const dateIsDisabled = (dateCurrent?: Dayjs) => {
    return !!(
      dateCurrent &&
      dateCurrent.month() === dateInner.month() &&
      (dateCurrent.day() === 6 || dateCurrent.date() < 5)
    );
  };
  const dateIsHoliday = (dateCurrent?: Dayjs) => {
    return !!(
      dateCurrent &&
      dateCurrent.month() === dateInner.month() &&
      dateCurrent.date() !== 14 &&
      (dateCurrent.day() === 6 || dateCurrent.day() === 0 || dateCurrent.isSame(dayjs().locale(localeInner), 'date'))
    );
  };
  const dateIsHidden = (dateCurrent?: Dayjs) => {
    return dateCurrent && dateCurrent.isAfter(dateInner, 'month');
  };
  const renderDefaultDate = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, localeInner, timezone);
    if (!dateCurrent) return {};
    const cellContent = dateCurrent.date();
    const selected = dateIsSelected(dateCurrent);
    const disabled = dateIsDisabled(dateCurrent);
    const hidden = dateIsHidden(dateCurrent);
    const isCurrent = dateCurrent && dateCurrent.isSame(dayjs().locale(localeInner), 'date');
    const isHoliday = dateIsHoliday(dateCurrent);
    //const isOutsideMonth = dateIsOutsideMonth(dateCurrent);
    const isStartOfRow = dateCurrent.isSame(dateCurrent.startOf('week'), 'date');
    const isEndOfRow = dateCurrent.isSame(dateCurrent.endOf('week'), 'date');
    const isActive = activeDateInner?.isSame(dateCurrent, 'date');

    const dataAttributes = getDateCellDataAttributes(
      dateCurrent.toISOString(),
      isHoliday,
      //isOutsideMonth,
      isCurrent,
      isActive,
    );

    return {
      cellContent,
      selected,
      disabled,
      hidden,
      isCurrent,
      isHoliday,
      //isOutsideMonth,
      isStartOfRow,
      isEndOfRow,
      isActive,
      ...dataAttributes,
    };
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(dateInner.format('D MMMM YYYY'))}</MonthYear>
      <DatesOfMonthWidget
        {...props}
        locale={localeInner}
        timezone={timezone}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        dayNamesProps={{ dayNameCellState: getDayNameCellState }}
        renderDateCell={renderDefaultDate}
      />
    </Wrapper>
  );
};

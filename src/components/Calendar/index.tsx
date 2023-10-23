import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

import { dateStringToDayjs, dayjsDateToString, getCurrentTimeZone, getDayjsDate } from '#src/components/utils';
import type { CalendarProps } from '#src/components/Calendar/interfaces';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/Calendar/constants';
import { MonthNavigationPanelWidget } from '#src/components/MonthNavigationPanelWidget';
import { DatesOfMonthWidget } from '#src/components/DatesOfMonthWidget';
import type { CellStateProps } from '#src/components/DatesOfMonthWidget/interfaces';
import {
  baseDateCellMixin,
  baseDayNameCellMixin,
  disabledDateCellMixin,
  disabledHolidayDateCellMixin,
  hiddenDateCellMixin,
  holidayDateCellMixin,
  outsideMonthDateCellMixin,
  selectedDateCellMixin,
  currentDateCellMixin,
  currentDateHolidayDateCellMixin,
} from '#src/components/DatesOfMonthWidget/mixins';
import type { DateCellProps } from '#src/components/DatesOfMonthWidget/Dates';
import { DefaultDateCell } from '#src/components/DatesOfMonthWidget/Dates';

const CalendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: ${CALENDAR_WIDTH}px;
  height: ${CALENDAR_HEIGHT}px;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(p) => p.theme.shadow['Shadow 08']}
`;

export const getDateCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isHoliday?: boolean,
  isOutsideMonth?: boolean,
  isToday?: boolean,
) => {
  if (hidden) return hiddenDateCellMixin;
  if (disabled && isHoliday) return disabledHolidayDateCellMixin;
  if (disabled) return disabledDateCellMixin;
  if (isOutsideMonth) return outsideMonthDateCellMixin;
  if (selected) return selectedDateCellMixin;
  if (isHoliday && isToday) return currentDateHolidayDateCellMixin;
  if (isHoliday) return holidayDateCellMixin;
  if (isToday) return currentDateCellMixin;
  return baseDateCellMixin;
};

const getDateCellDataAttributes = (
  value?: string,
  isHoliday?: boolean,
  isOutsideMonth?: boolean,
  isCurrentDay?: boolean,
): Record<string, any> => {
  return {
    'data-value': value ? value : undefined,
    'data-is-holiday': isHoliday ? isHoliday : undefined,
    'data-is-outside-month': isOutsideMonth ? isOutsideMonth : undefined,
    'data-is-current-day': isCurrentDay ? isCurrentDay : undefined,
  };
};

const getInitialDateRange = (dateRange?: [string, string], locale?: string, timezone?: string) => {
  if (!dateRange || !dateRange[0] || !dateRange[1]) return undefined;
  return [getDayjsDate(locale, timezone, dateRange[0]), getDayjsDate(locale, timezone, dateRange[1])];
};

export const Calendar = ({
  dateRange,
  date,
  defaultDate,
  onDateChange,
  selectedDate,
  defaultSelectedDate,
  onSelectedDateChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  ...props
}: CalendarProps) => {
  const localeInner = locale || 'ru';

  const [dateRangeState, setDateRangeState] = useState(getInitialDateRange(dateRange, localeInner, timezone));
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(
    defaultSelectedDate ? getDayjsDate(localeInner, timezone, defaultSelectedDate) : undefined,
  );
  const selectedDateInner =
    (selectedDate && dateStringToDayjs(selectedDate, localeInner, timezone)) || selectedDateState;

  const [dateState, setDateState] = useState(getDayjsDate(localeInner, timezone, defaultDate));
  const dateInner = (date && getDayjsDate(localeInner, timezone, date)) || dateState;

  const [activeDateInner, setActiveDateInner] = useState<Dayjs>();

  const handleDateChange = (dateString: string) => {
    const dayjsDate = getDayjsDate(localeInner, timezone, dateString);
    setDateState(dayjsDate);
    onDateChange?.(dayjsDateToString(dayjsDate));
  };

  const handleSelectedDateChange = (dateString: string) => {
    const dayjsSelectedDate = dateStringToDayjs(dateString, localeInner, timezone);
    setSelectedDateState(dayjsSelectedDate);
    onSelectedDateChange?.(dateString);
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
    const clickedDate = dateStringToDayjs(clickedCell, localeInner, timezone);
    if (clickedDate && !dateIsDisabled(clickedDate) && !dateIsOutsideMonth(clickedDate)) {
      handleSelectedDateChange(dayjsDateToString(clickedDate));
    }
  };

  const handleActiveDateChange = (dateString?: string) => {
    const dayjsActiveDate = dateStringToDayjs(dateString, localeInner, timezone);
    console.log(`set active ${dayjsActiveDate}`);
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
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType !== 'dateCell' && target.dataset.containerType !== 'datesWrapper') {
      handleActiveDateChange(undefined);
    }
  };

  const dateIsSelected = (dateCurrent?: Dayjs) => {
    return dateCurrent && selectedDateInner && dateCurrent.isSame(selectedDateInner, 'date');
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

  const dateIsInRange = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !dateRangeState) return false;
    return dateCurrent.isBetween(dateRangeState[0], dateRangeState[1], 'date', '()');
  };
  const dateIsRangeStart = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !dateRangeState) return false;
    return dateCurrent.isSame(dateRangeState[0], 'date');
  };
  const dateIsRangeEnd = (dateCurrent?: Dayjs) => {
    if (!dateCurrent || !dateRangeState) return false;
    return dateCurrent.isSame(dateRangeState[1], 'date');
  };

  const getDayNameCellState = (dayNumber: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  const handleMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.direction;
    switch (targetType) {
      case 'left':
        handleDateChange(dayjsDateToString(dateInner.subtract(1, 'month')));
        break;
      case 'right':
        handleDateChange(dayjsDateToString(dateInner.add(1, 'month')));
        break;
    }
  };

  //useMemo
  const renderDate = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, localeInner, timezone);
    if (!dateCurrent) return () => <></>;
    const cellContent = dateCurrent.date();
    const selected = dateIsSelected(dateCurrent);
    const disabled = dateIsDisabled(dateCurrent);
    const hidden = dateIsHidden(dateCurrent);
    const isCurrentDay = dateCurrent && dateCurrent.isSame(dayjs().locale(localeInner), 'date');
    const isHoliday = dateIsHoliday(dateCurrent);
    const isOutsideMonth = dateIsOutsideMonth(dateCurrent);
    const isInRange = dateIsInRange(dateCurrent);
    const isRangeStart = dateIsRangeStart(dateCurrent);
    const isRangeEnd = dateIsRangeEnd(dateCurrent);
    const isStartOfWeek = dateCurrent.isSame(dateCurrent.startOf('week'), 'date');
    const isEndOfWeek = dateCurrent.isSame(dateCurrent.endOf('week'), 'date');

    const dataAttributes = getDateCellDataAttributes(
      dateCurrent.toISOString(),
      isHoliday,
      isOutsideMonth,
      isCurrentDay,
    );
    const renderDefaultDateCell = (props: DateCellProps) => (
      <DefaultDateCell key={dayjsDateToString(dateCurrent)} {...props} />
    );

    return renderDefaultDateCell({
      cellContent,
      selected,
      disabled,
      hidden,
      isCurrentDay,
      isHoliday,
      isOutsideMonth,
      isInRange,
      isRangeStart,
      isRangeEnd,
      isStartOfWeek,
      isEndOfWeek,
      ...dataAttributes,
    });
  };

  return (
    <CalendarWrapper>
      <MonthNavigationPanelWidget
        date={dayjsDateToString(dateInner)}
        locale={localeInner}
        timezone={timezone}
        onClick={handleMonthNavigationPanelClick}
      />
      <DatesOfMonthWidget
        {...props}
        renderDateCell={renderDate}
        date={dayjsDateToString(dateInner)}
        locale={localeInner}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        dayNamesProps={{ dayNameCellState: getDayNameCellState }}
      />
    </CalendarWrapper>
  );
};

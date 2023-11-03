import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

import { dateStringToDayjs, dayjsDateToString, getCurrentTimeZone, getDayjsDate } from '#src/components/utils';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants';
import { MonthNavigationPanelWidget } from '#src/components/MonthNavigationPanelWidget';
import { DatesOfMonthWidget } from '#src/components/DatesOfMonthWidget';
import type { CellStateProps } from '#src/components/DatesOfMonthWidget/interfaces';
import { baseDayNameCellMixin } from '#src/components/DatesOfMonthWidget/mixins';
import type { DefaultDateCellProps } from '#src/components/DatesOfMonthWidget/Dates';
import { DefaultDateCell } from '#src/components/DatesOfMonthWidget/Dates';
import type { CalendarProps } from '#src/components/calendarInterfaces';

export interface DateCalendarProps extends CalendarProps {
  /** Выбранная дата в формате ISO */
  selectedDate?: string;
  /** Выбранная дата по умолчанию в формате ISO */
  defaultSelectedDate?: string;
  onSelectedDateChange?: (dateString: string) => void;
}

const DateCalendarWrapper = styled.div`
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

const getDateCellDataAttributes = (
  value?: string,
  isHoliday?: boolean,
  isOutsideMonth?: boolean,
  isCurrentDay?: boolean,
  isActive?: boolean,
) => {
  return {
    'data-value': value ? value : undefined,
    'data-is-holiday-cell': isHoliday ? isHoliday : undefined,
    'data-is-outside-month-cell': isOutsideMonth ? isOutsideMonth : undefined,
    'data-is-current-day-cell': isCurrentDay ? isCurrentDay : undefined,
    'data-is-active-cell': isActive ? isActive : undefined,
  };
};

export const DateCalendar = ({
  date,
  defaultDate,
  onDateChange,
  selectedDate,
  defaultSelectedDate,
  onSelectedDateChange,
  renderDateCell,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  onClick,
  ...props
}: DateCalendarProps) => {
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(
    defaultSelectedDate ? dateStringToDayjs(defaultSelectedDate, locale, timezone) : undefined,
  );
  const selectedDateInner = (selectedDate && dateStringToDayjs(selectedDate, locale, timezone)) || selectedDateState;

  const [dateState, setDateState] = useState(getDayjsDate(locale, timezone, defaultDate));
  const dateInner = (date && getDayjsDate(locale, timezone, date)) || dateState;

  const [activeDateInner, setActiveDateInner] = useState<Dayjs>();

  const handleDateChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    if (dayjsDate) {
      setDateState(dayjsDate);
      onDateChange?.(dateString);
    }
  };

  const handleSelectedDateChange = (dateString: string) => {
    const dayjsSelectedDate = dateStringToDayjs(dateString, locale, timezone);
    setSelectedDateState(dayjsSelectedDate);
    onSelectedDateChange?.(dateString);
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    const clickedDate = dateStringToDayjs(clickedCell, locale, timezone);
    if (clickedDate && !dateIsDisabled(clickedDate) && !dateIsOutsideMonth(clickedDate)) {
      handleSelectedDateChange(dayjsDateToString(clickedDate));
    }
    onClick?.(e);
  };

  const handleActiveDateChange = (dateString?: string) => {
    const dayjsActiveDate = dateStringToDayjs(dateString, locale, timezone);
    //console.log(`set active ${dayjsActiveDate}`);
    setActiveDateInner(dayjsActiveDate);
  };
  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'dateCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale, timezone);
      if (hoveredDate) {
        handleActiveDateChange(dayjsDateToString(hoveredDate));
      }
    }
  };
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.cellType === 'dateCell') {
      const hoveredDate = dateStringToDayjs(target.dataset.value, locale, timezone);
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
      (dateCurrent.day() === 6 || dateCurrent.day() === 0 || dateCurrent.isSame(dayjs().locale(locale), 'date'))
    );
  };
  const dateIsHidden = (dateCurrent?: Dayjs) => {
    return dateCurrent && dateCurrent.isAfter(dateInner, 'month');
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getDayNameCellState = (_: number): CellStateProps => {
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
  const renderDefaultDate = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale, timezone);
    if (!dateCurrent) return () => <></>;
    const cellContent = dateCurrent.date();
    const selected = dateIsSelected(dateCurrent);
    const disabled = dateIsDisabled(dateCurrent);
    const hidden = dateIsHidden(dateCurrent);
    const isCurrentDay = dateCurrent && dateCurrent.isSame(dayjs().locale(locale), 'date');
    const isHoliday = dateIsHoliday(dateCurrent);
    const isOutsideMonth = dateIsOutsideMonth(dateCurrent);
    const isStartOfWeek = dateCurrent.isSame(dateCurrent.startOf('week'), 'date');
    const isEndOfWeek = dateCurrent.isSame(dateCurrent.endOf('week'), 'date');
    const isActive = activeDateInner?.isSame(dateCurrent, 'date');

    const dataAttributes = getDateCellDataAttributes(
      dateCurrent.toISOString(),
      isHoliday,
      isOutsideMonth,
      isCurrentDay,
      isActive,
    );
    const renderDefaultDateCell = (props: DefaultDateCellProps) => (
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
      isStartOfWeek,
      isEndOfWeek,
      isActive,
      ...dataAttributes,
    });
  };

  return (
    <DateCalendarWrapper>
      <MonthNavigationPanelWidget
        date={dayjsDateToString(dateInner)}
        locale={locale}
        timezone={timezone}
        onClick={handleMonthNavigationPanelClick}
      />
      <DatesOfMonthWidget
        {...props}
        renderDateCell={renderDateCell || renderDefaultDate}
        date={dayjsDateToString(dateInner)}
        locale={locale}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        dayNamesProps={{ dayNameCellState: getDayNameCellState }}
      />
    </DateCalendarWrapper>
  );
};

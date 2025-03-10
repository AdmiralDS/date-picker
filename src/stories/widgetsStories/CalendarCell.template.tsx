import { useMemo, type ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { weekdayNameList } from '@admiral-ds/date-picker';
import type { CalendarDataCell } from '#lib/Calendar/Dates';
import { generateCalendarDataCellList } from '#lib/Calendar/Dates';
import { defaultTimestampFormatter } from '#lib/Calendar/defaultTimestampFormatter';
import { vars } from '@admiral-ds/web';

const StoryComponentWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  border: 1px ${vars.color.Neutral_Neutral20} dashed;
  border-radius: 8px;
`;

const Calendar = styled.div`
  background-color: #ffffff;
  width: 252px;
  margin: 12px 16px 16px 16px;
  font-family: var(--admiral-font-family, 'VTB Group UI', sans-serif);
  font-style: normal;
  font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
  font-size: var(--admiral-font-size-Body_Body2Long, 14px);
  line-height: var(--admiral-line-height-Body_Body2Long, 20px);
  font-feature-settings:
    'tnum' on,
    'lnum' on;
  text-rendering: geometricPrecision;
`;

const WeekdayNames = styled.div`
  display: flex;
  pointer-events: none;
`;

const Week = styled.div`
  display: flex;
  margin-block: 4px;
`;

const CalendarCell = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 36px;
  height: 36px;
  text-align: center;
  padding: 7px 0;
  font-family: var(--admiral-font-family, 'VTB Group UI', sans-serif);
  font-style: normal;
  font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
  font-size: var(--admiral-font-size-Body_Body2Long, 14px);
  line-height: var(--admiral-line-height-Body_Body2Long, 20px);
  font-feature-settings:
    'tnum' on,
    'lnum' on;
  text-rendering: geometricPrecision;
  color: #23262d;
  background-color: #ffffff;
  cursor: default;

  &[data-hidden='true'] * {
    display: none;
  }

  & .calendar-cell-date_ring:not([data-type]) {
    display: none;
  }

  & .calendar-cell-date_ring[data-type='ring-solid'] {
    background-color: ${vars.color.Primary_Primary60Main};
  }

  & .calendar-cell-date_ring[data-type='ring-solid'] + .calendar-cell-text {
    color: ${vars.color.Special_StaticWhite};
  }

  &:hover .calendar-cell-date_ring[data-type='ring-solid'] {
    background-color: ${vars.color.Primary_Primary70};
  }

  & .calendar-cell-date_ring[data-type='ring-blue'] {
    border: solid 1px ${vars.color.Primary_Primary60Main};
  }

  & .calendar-cell-date_ring[data-type='ring-black'] {
    border: solid 1px ${vars.color.Neutral_Neutral90};
  }

  &:hover {
    cursor: pointer;
  }

  /* закругленные края у первого не скрытого числа месяца или первого в строке */
  &[data-hidden='true'] + :not([data-hidden='true']) .calendar-cell-background-left,
  &:first-of-type .calendar-cell-background-left {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  /* закругленные края у последнего не скрытого числа месяца или последнего в строке */
  &:has(+ [data-hidden='true']) .calendar-cell-background-right,
  &:last-of-type .calendar-cell-background-right {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const Text = styled.div`
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Ring = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
`;

const LeftHalf = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  background-color: ${vars.color.Opacity_Focus};
`;

const RightHalf = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50%;
  background-color: ${vars.color.Opacity_Focus};
`;

export const firstCapitalized = (s: string) => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase();
type IntlProps = {
  locales?: Intl.LocalesArgument;
  weekdayNamesFormat?: 'long' | 'short' | 'narrow';
};

type CellProps = {
  ringType?: 'ring-blue' | 'ring-solid' | 'ring-black';
  backgroundType?: 'left' | 'right' | 'all';
};

const startDate = new Date();
startDate.setMonth(7);

export const CalendarCellStoryTemplate = ({ ...props }: ComponentPropsWithoutRef<typeof Calendar> & IntlProps) => {
  const [sunday, ...weekdayNames] = weekdayNameList().map(firstCapitalized);

  const cellDataList = useMemo<CalendarDataCell[][]>(() => {
    return generateCalendarDataCellList(startDate.getTime(), defaultTimestampFormatter).reduce((acc, val, index) => {
      const indexAtInnerArray = index % 7;
      const arrayIndex = Math.floor(index / 7);
      if (indexAtInnerArray === 0) {
        acc[arrayIndex] = [];
      }
      const innerArray = acc[arrayIndex];
      innerArray[indexAtInnerArray] = val;
      return acc;
    }, [] as CalendarDataCell[][]);
  }, []);

  return (
    <StoryComponentWrapper>
      <Calendar className="calendar-month">
        <WeekdayNames className="calendar-weekday-names">
          {[...weekdayNames, sunday].map((name, index) => (
            <CalendarCell className="calendar-cell-weekday-name" key={name + index}>
              {name}
            </CalendarCell>
          ))}
        </WeekdayNames>
        {cellDataList.map((weekArr, index) => (
          <Week className="calendar-week" key={index}>
            {weekArr.map((data) => (
              <CalendarCell className="calendar-cell-date" key={data.timestamp} data-hidden={data.hidden}>
                <LeftHalf className="calendar-cell-background-left" />
                <RightHalf className="calendar-cell-background-right" />
                <Ring className="calendar-cell-date_ring" data-type="ring-black" />
                <Text className="calendar-cell-text">{data.dateOfMonth}</Text>
              </CalendarCell>
            ))}
          </Week>
        ))}
        <Week></Week>
      </Calendar>
    </StoryComponentWrapper>
  );
};

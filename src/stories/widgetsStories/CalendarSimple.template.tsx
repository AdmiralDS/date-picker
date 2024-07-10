import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Calendar } from '@admiral-ds/date-picker';
import { ruLocale } from '#lib/calendarConstants.ts';
import { addOrSubstractDays } from 'lib/dateUtils';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  border: 1px ${(p) => p.theme.color['Neutral/Neutral 20']} dashed;
  border-radius: 8px;
`;

function getDateCellAttributeValues(element: HTMLElement) {
  const isDateCell = element.dataset['cellType'] === 'dateCell';
  const disabled = element.dataset['disabled'] === 'true' || element.dataset['hiddenCell'] === 'true';
  const timestampString = element.dataset['value'];
  const timestamp = timestampString ? Number.parseInt(timestampString) : undefined;
  const dateString = element.dataset['date'];

  return {
    isDateCell,
    disabled,
    timestamp,
    dateString,
  };
}
export const CalendarSimpleTemplate = ({ locale = ruLocale, ...props }: ComponentPropsWithoutRef<typeof Calendar>) => {
  const [selectedTimestamp, setSelectedDate] = useState<number | undefined>(
    addOrSubstractDays(Date.now(), 1).getTime(),
  );

  const [activeTimestamp, setactiveTimestamp] = useState<number | undefined>();

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const cellData = getDateCellAttributeValues(e.target as HTMLElement);
    if (cellData.isDateCell && !cellData.disabled) {
      const newTimestamp = cellData.timestamp;
      setSelectedDate((timestamp) => (timestamp !== newTimestamp ? newTimestamp : undefined));
    }
  };

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const cellData = getDateCellAttributeValues(e.target as HTMLElement);
    setactiveTimestamp(cellData.timestamp);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setactiveTimestamp(undefined);
  };

  return (
    <Wrapper>
      <Calendar
        {...props}
        selectedTimestamp={selectedTimestamp}
        activeTimestamp={activeTimestamp}
        onClick={handleDateClick}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
      />
    </Wrapper>
  );
};

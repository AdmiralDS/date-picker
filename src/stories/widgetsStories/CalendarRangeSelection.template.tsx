import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import type { DateRangeTimestamp, Timestamp } from '@admiral-ds/date-picker';
import { Calendar, MemoDefaultDateRangeCell } from '@admiral-ds/date-picker';

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

export const CalendarRangeSelectionTemplate = ({ ...props }: ComponentPropsWithoutRef<typeof Calendar>) => {
  const [selectedRangeTimestamp, setSelectedRange] = useState<DateRangeTimestamp | undefined>();
  const [current, setCurrent] = useState<'start' | 'end' | 'none'>('none');
  const [activeTimestamp, setactiveTimestamp] = useState<Timestamp | undefined>();

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const cellData = getDateCellAttributeValues(e.target as HTMLElement);
    if (cellData.isDateCell && !cellData.disabled && cellData.timestamp) {
      const newTimestamp = cellData.timestamp;
      if (current == 'none') {
        if (!selectedRangeTimestamp) {
          setSelectedRange([newTimestamp, newTimestamp]);
          setCurrent('end');
        } else {
          if (newTimestamp > selectedRangeTimestamp[0] && newTimestamp < selectedRangeTimestamp[1]) {
            setSelectedRange(undefined);
          } else if (newTimestamp >= selectedRangeTimestamp[1]) {
            setCurrent('end');
            setSelectedRange([selectedRangeTimestamp[0], newTimestamp]);
          } else {
            setCurrent('start');
            setSelectedRange([newTimestamp, selectedRangeTimestamp[1]]);
          }
          setactiveTimestamp(newTimestamp);
        }
      } else {
        if (current == 'end') {
          setSelectedRange((range) => (range ? [range[0], newTimestamp] : [newTimestamp, newTimestamp]));
        }
        if (current == 'start') {
          setSelectedRange((range) => (range ? [newTimestamp, range[1]] : [newTimestamp, newTimestamp]));
        }
        setCurrent('none');
        setactiveTimestamp(undefined);
      }
    }
  };

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const cellData = getDateCellAttributeValues(e.target as HTMLElement);
    const newTimestamp = cellData.timestamp;
    setactiveTimestamp(newTimestamp);
    if (newTimestamp) {
      switch (current) {
        case 'start':
          setSelectedRange((range) => (range ? [newTimestamp, range[1]] : [newTimestamp, newTimestamp]));
          break;

        case 'end':
          setSelectedRange((range) => (range ? [range[0], newTimestamp] : [newTimestamp, newTimestamp]));
          break;

        case 'none':
          if (
            selectedRangeTimestamp &&
            (newTimestamp === selectedRangeTimestamp[0] || newTimestamp === selectedRangeTimestamp[1])
          ) {
            setactiveTimestamp(undefined);
          }
      }
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setactiveTimestamp(undefined);
  };

  return (
    <Wrapper>
      <Calendar
        {...props}
        selectedRangeTimestamp={selectedRangeTimestamp}
        activeTimestamp={activeTimestamp}
        onClick={handleDateClick}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        cell={MemoDefaultDateRangeCell}
      />
    </Wrapper>
  );
};

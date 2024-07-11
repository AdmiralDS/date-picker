import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import type { RangeTimestamp, Timestamp } from '@admiral-ds/date-picker';
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
  const [selectedRange, setSelectedRange] = useState<RangeTimestamp | undefined>();
  const [togle, setTogle] = useState(true);
  const [current, setCurrent] = useState<'start' | 'end' | 'none'>('none');
  const [active, setActive] = useState<Timestamp | undefined>();

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const cellData = getDateCellAttributeValues(e.target as HTMLElement);
    if (cellData.isDateCell && !cellData.disabled && cellData.timestamp) {
      const newTimestamp = cellData.timestamp;
      if (current == 'none') {
        if (!selectedRange) {
          setSelectedRange([newTimestamp, newTimestamp]);
          setCurrent('end');
          setActive(undefined);
        } else {
          if (newTimestamp == selectedRange[0]) {
            setSelectedRange([newTimestamp, selectedRange[1]]);
            setCurrent('start');
            setTogle(false);
            setActive(newTimestamp);
          } else if (newTimestamp == selectedRange[1]) {
            setSelectedRange([selectedRange[0], newTimestamp]);
            setCurrent('end');
            setTogle(true);
            setActive(newTimestamp);
          } else if (newTimestamp > selectedRange[1]) {
            setSelectedRange([selectedRange[0], newTimestamp]);
            setActive(undefined);
          } else if (newTimestamp < selectedRange[0]) {
            setSelectedRange([newTimestamp, selectedRange[1]]);
            setActive(undefined);
          } else {
            if (togle) {
              setSelectedRange([newTimestamp, selectedRange[1]]);
            } else {
              setSelectedRange([selectedRange[0], newTimestamp]);
            }
            setTogle((c) => !c);
            setActive(undefined);
          }
        }
      } else {
        if (current == 'end') {
          setSelectedRange((range) => (range ? [range[0], newTimestamp] : [newTimestamp, newTimestamp]));
        }
        if (current == 'start') {
          setSelectedRange((range) => (range ? [newTimestamp, range[1]] : [newTimestamp, newTimestamp]));
        }
        setCurrent('none');
        setTogle(true);
        setActive(undefined);
      }
    }
  };

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const cellData = getDateCellAttributeValues(e.target as HTMLElement);
    const newTimestamp = cellData.timestamp;
    setActive(newTimestamp);
    if (newTimestamp) {
      switch (current) {
        case 'start':
          setSelectedRange((range) => (range ? [newTimestamp, range[1]] : [newTimestamp, newTimestamp]));
          break;

        case 'end':
          setSelectedRange((range) => (range ? [range[0], newTimestamp] : [newTimestamp, newTimestamp]));
          break;

        case 'none':
          if (selectedRange && (newTimestamp === selectedRange[0] || newTimestamp === selectedRange[1])) {
            setActive(undefined);
          }
      }
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setActive(undefined);
  };

  return (
    <Wrapper>
      <Calendar
        {...props}
        selectedRangeTimestamp={selectedRange}
        activeTimestamp={active}
        onClick={handleDateClick}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        cell={MemoDefaultDateRangeCell}
      />
    </Wrapper>
  );
};

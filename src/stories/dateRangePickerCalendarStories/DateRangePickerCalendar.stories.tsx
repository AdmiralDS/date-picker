import type { Meta, StoryFn } from '@storybook/react';

import { DateRangePickerCalendar } from '@admiral-ds/date-picker';
import { DateRangePickerCalendarSimpleTemplate } from '#src/stories/dateRangePickerCalendarStories/DateRangePickerCalendarSimple.template.tsx';

export default {
  title: 'Admiral-2.1/RangePicker/DateRangePickerCalendar',
  component: DateRangePickerCalendar,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407',
    },
  },
  argTypes: {
    dateValue: {
      control: { type: 'text' },
    },
    defaultDateValue: {
      control: { type: 'text' },
    },
    onDateValueChange: {
      control: false,
    },
    locale: {
      control: false,
    },
  },
} as Meta<typeof DateRangePickerCalendar>;

const DateRangePickerCalendarSimpleStory: StoryFn<typeof DateRangePickerCalendar> = (props) => {
  return <DateRangePickerCalendarSimpleTemplate {...props} />;
};
export const DateRangePickerCalendarSimple = DateRangePickerCalendarSimpleStory.bind({});
DateRangePickerCalendarSimple.storyName = 'DateRangePickerCalendarSimple';

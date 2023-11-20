import type { Meta, StoryFn } from '@storybook/react';

import { MonthRangePickerCalendar } from '@admiral-ds/date-picker';
import { MonthRangePickerCalendarSimpleTemplate } from '#src/stories/monthRangePickerCalendarStories/MonthRangePickerCalendarSimple.template.tsx';

export default {
  title: 'Admiral-2.1/MonthRangePickerCalendar',
  component: MonthRangePickerCalendar,
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
    timezone: {
      control: { type: 'text' },
    },
    locale: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof MonthRangePickerCalendar>;

const MonthRangePickerCalendarSimpleStory: StoryFn<typeof MonthRangePickerCalendar> = (props) => {
  return <MonthRangePickerCalendarSimpleTemplate {...props} />;
};
export const MonthRangePickerCalendarSimple = MonthRangePickerCalendarSimpleStory.bind({});
MonthRangePickerCalendarSimple.storyName = 'MonthRangePickerCalendarSimple';

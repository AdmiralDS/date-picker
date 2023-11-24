import type { Meta, StoryFn } from '@storybook/react';

import { MonthRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

import { MonthRangeDoublePickerCalendarSimpleTemplate } from '#src/stories/monthRangeDoublePickerCalendarStories/MonthRangeDoublePickerCalendarSimple.template.tsx';

export default {
  title: 'Admiral-2.1/MonthRangeDoublePickerCalendar',
  component: MonthRangeDoublePickerCalendar,
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
    timezone: {
      control: { type: 'text' },
    },
    locale: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof MonthRangeDoublePickerCalendar>;

const MonthRangeDoublePickerCalendarSimpleStory: StoryFn<typeof MonthRangeDoublePickerCalendar> = (props) => {
  return <MonthRangeDoublePickerCalendarSimpleTemplate {...props} />;
};
export const MonthRangeDoublePickerCalendarSimple = MonthRangeDoublePickerCalendarSimpleStory.bind({});
MonthRangeDoublePickerCalendarSimple.storyName = 'MonthRangeDoublePickerCalendarSimple';

import type { Meta, StoryFn } from '@storybook/react';

import { DateRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

import { DateRangeDoublePickerCalendarSimpleTemplate } from '#src/stories/dateRangeDoublePickerCalendarStories/DateRangeDoublePickerCalendarSimple.template.tsx';

export default {
  title: 'Admiral-2.1/DateRangeDoublePickerCalendar',
  component: DateRangeDoublePickerCalendar,
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
    locale: {
      control: false,
    },
  },
} as Meta<typeof DateRangeDoublePickerCalendar>;

const DateRangeDoublePickerCalendarSimpleStory: StoryFn<typeof DateRangeDoublePickerCalendar> = (props) => {
  return <DateRangeDoublePickerCalendarSimpleTemplate {...props} />;
};
export const DateRangeDoublePickerCalendarSimple = DateRangeDoublePickerCalendarSimpleStory.bind({});
DateRangeDoublePickerCalendarSimple.storyName = 'DateRangeDoublePickerCalendarSimple';

import type { Meta, StoryFn } from '@storybook/react';

import { DateRangeDoubleCalendar } from '@admiral-ds/date-picker';

import { DateRangeDoubleCalendarSimpleTemplate } from '#src/stories/dateRangeDoubleCalendarStories/DateRangeDoubleCalendarSimple.template.tsx';

export default {
  title: 'Admiral-2.1/DateRangeDoubleCalendar',
  component: DateRangeDoubleCalendar,
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
} as Meta<typeof DateRangeDoubleCalendar>;

const DateRangeDoubleCalendarSimpleStory: StoryFn<typeof DateRangeDoubleCalendar> = (props) => {
  return <DateRangeDoubleCalendarSimpleTemplate {...props} />;
};
export const DateRangeDoubleCalendarSimple = DateRangeDoubleCalendarSimpleStory.bind({});
DateRangeDoubleCalendarSimple.storyName = 'DateRangeDoubleCalendarSimple';

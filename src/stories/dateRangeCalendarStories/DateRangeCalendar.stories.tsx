import type { Meta, StoryFn } from '@storybook/react';

import { DateRangeCalendar } from '#src/components/DateRangeCalendar';
import { DateRangeCalendarDoubleTemplate } from '#src/stories/dateRangeCalendarStories/DateRangeCalendarDouble.template';
import { DateRangeCalendarSimpleTemplate } from '#src/stories/dateRangeCalendarStories/DateRangeCalendarSimple.template';

export default {
  title: 'Admiral-2.1/DateRangeCalendar',
  component: DateRangeCalendar,
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
    date: {
      control: { type: 'text' },
    },
    defaultDate: {
      control: { type: 'text' },
    },
    onDateChange: {
      control: false,
    },
    timezone: {
      control: { type: 'text' },
    },
    locale: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof DateRangeCalendar>;

const DateRangeCalendarSimpleStory: StoryFn<typeof DateRangeCalendar> = (props) => {
  return <DateRangeCalendarSimpleTemplate {...props} />;
};
export const DateRangeCalendarSimple = DateRangeCalendarSimpleStory.bind({});
DateRangeCalendarSimple.storyName = 'DateRangeCalendarSimple';

const DateRangeCalendarDoubleStory: StoryFn<typeof DateRangeCalendar> = (props) => {
  return <DateRangeCalendarDoubleTemplate {...props} />;
};
export const DateRangeCalendarDouble = DateRangeCalendarDoubleStory.bind({});
DateRangeCalendarDouble.storyName = 'DateRangeCalendarDouble';

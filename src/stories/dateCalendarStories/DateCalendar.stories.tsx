import type { Meta, StoryFn } from '@storybook/react';

import { DateCalendar } from '@admiral-ds/date-picker';
import { DateCalendarSimpleTemplate } from '#src/stories/dateCalendarStories/DateCalendarSimple.template';
import { DateCalendarDoubleTemplate } from '#src/stories/dateCalendarStories/DateCalendarDouble.template';

export default {
  title: 'Admiral-2.1/DateCalendar',
  component: DateCalendar,
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
} as Meta<typeof DateCalendar>;

const DateCalendarSimpleStory: StoryFn<typeof DateCalendar> = (props) => {
  return <DateCalendarSimpleTemplate {...props} />;
};
export const DateCalendarSimple = DateCalendarSimpleStory.bind({});
DateCalendarSimple.storyName = 'DateCalendarSimple';

const DateCalendarDoubleStory: StoryFn<typeof DateCalendar> = (props) => {
  return <DateCalendarDoubleTemplate {...props} />;
};
export const DateCalendarDouble = DateCalendarDoubleStory.bind({});
DateCalendarDouble.storyName = 'DateCalendarDouble';

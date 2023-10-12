import type { Meta, StoryFn } from '@storybook/react';

import { Calendar } from '@admiral-ds/date-picker';
import { CalendarSimpleTemplate } from '#src/stories/calendarStories/CalendarSimple.template';

export default {
  title: 'Admiral-2.1/Calendar',
  component: Calendar,
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
} as Meta<typeof Calendar>;

const CalendarSimpleStory: StoryFn<typeof Calendar> = (props) => {
  return <CalendarSimpleTemplate {...props} />;
};

export const CalendarSimple = CalendarSimpleStory.bind({});
CalendarSimple.storyName = 'Calendar';

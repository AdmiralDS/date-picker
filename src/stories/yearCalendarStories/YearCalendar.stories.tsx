import type { Meta, StoryFn } from '@storybook/react';

import { YearCalendar } from '@admiral-ds/date-picker';

import { YearCalendarSimpleTemplate } from '#src/stories/yearCalendarStories/YearCalendarSimple.template.tsx';

export default {
  title: 'Admiral-2.1/YearCalendar',
  component: YearCalendar,
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
} as Meta<typeof YearCalendar>;

const YearCalendarSimpleStory: StoryFn<typeof YearCalendar> = (props) => {
  return <YearCalendarSimpleTemplate {...props} />;
};
export const YearCalendarSimple = YearCalendarSimpleStory.bind({});
YearCalendarSimple.storyName = 'YearCalendarSimple';
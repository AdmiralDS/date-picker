import type { Meta, StoryFn } from '@storybook/react';

import { MonthRangeCalendar } from '@admiral-ds/date-picker';

import { MonthRangeCalendarSimpleTemplate } from '#src/stories/monthRangeCalendarStories/MonthRangeCalendarSimple.template.tsx';

export default {
  title: 'Admiral-2.1/Widgets/MonthRangeCalendar',
  component: MonthRangeCalendar,
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
} as Meta<typeof MonthRangeCalendar>;

const MonthRangeCalendarSimpleStory: StoryFn<typeof MonthRangeCalendar> = (props) => {
  return <MonthRangeCalendarSimpleTemplate {...props} />;
};
export const MonthRangeCalendarSimple = MonthRangeCalendarSimpleStory.bind({});
MonthRangeCalendarSimple.storyName = 'MonthRangeCalendarSimple';

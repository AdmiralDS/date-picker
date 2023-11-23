import type { Meta, StoryFn } from '@storybook/react';

import { DateRangeCalendar } from '@admiral-ds/date-picker';

import { DateRangeCalendarSimpleTemplate } from '#src/stories/widgetsStories/DateRangeCalendarSimple.template.tsx';

export default {
  title: 'Admiral-2.1/Widgets/DateRangeCalendar',
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
} as Meta<typeof DateRangeCalendar>;

const DateRangeCalendarSimpleStory: StoryFn<typeof DateRangeCalendar> = (props) => {
  return <DateRangeCalendarSimpleTemplate {...props} />;
};
export const DateRangeCalendarSimple = DateRangeCalendarSimpleStory.bind({});
DateRangeCalendarSimple.storyName = 'DateRangeCalendarSimple';
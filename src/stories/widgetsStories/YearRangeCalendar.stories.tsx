import type { Meta, StoryFn } from '@storybook/react';

import { YearRangeCalendar } from '@admiral-ds/date-picker';

import { YearRangeCalendarSimpleTemplate } from '#src/stories/widgetsStories/YearRangeCalendarSimple.template.tsx';

export default {
  title: 'Admiral-2.1/Widgets/YearRangeCalendar',
  component: YearRangeCalendar,
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
} as Meta<typeof YearRangeCalendar>;

const YearRangeCalendarSimpleStory: StoryFn<typeof YearRangeCalendar> = (props) => {
  return <YearRangeCalendarSimpleTemplate {...props} />;
};
export const YearRangeCalendarSimple = YearRangeCalendarSimpleStory.bind({});
YearRangeCalendarSimple.storyName = 'YearRangeCalendarSimple';

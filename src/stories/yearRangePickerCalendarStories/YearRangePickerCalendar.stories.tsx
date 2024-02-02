import type { Meta, StoryFn } from '@storybook/react';

import { YearRangePickerCalendar } from '@admiral-ds/date-picker';

import { YearRangePickerCalendarSimpleTemplate } from '#src/stories/yearRangePickerCalendarStories/YearRangePickerCalendarSimple.template.tsx';

export default {
  title: 'Admiral-2.1/RangePicker/YearRangePickerCalendar',
  component: YearRangePickerCalendar,
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
} as Meta<typeof YearRangePickerCalendar>;

const YearRangePickerCalendarSimpleStory: StoryFn<typeof YearRangePickerCalendar> = (props) => {
  return <YearRangePickerCalendarSimpleTemplate {...props} />;
};
export const YearRangePickerCalendarSimple = YearRangePickerCalendarSimpleStory.bind({});
YearRangePickerCalendarSimple.storyName = 'YearRangePickerCalendarSimple';

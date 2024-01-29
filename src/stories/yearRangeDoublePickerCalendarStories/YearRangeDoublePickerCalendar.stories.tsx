import type { Meta, StoryFn } from '@storybook/react';

import { YearRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

import { YearRangeDoublePickerCalendarSimpleTemplate } from '#src/stories/yearRangeDoublePickerCalendarStories/YearRangeDoublePickerCalendarSimple.template.tsx';

export default {
  title: 'Admiral-2.1/YearRangeDoublePickerCalendar',
  component: YearRangeDoublePickerCalendar,
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
} as Meta<typeof YearRangeDoublePickerCalendar>;

const YearRangeDoublePickerCalendarSimpleStory: StoryFn<typeof YearRangeDoublePickerCalendar> = (props) => {
  return <YearRangeDoublePickerCalendarSimpleTemplate {...props} />;
};
export const YearRangeDoublePickerCalendarSimple = YearRangeDoublePickerCalendarSimpleStory.bind({});
YearRangeDoublePickerCalendarSimple.storyName = 'YearRangeDoublePickerCalendarSimple';

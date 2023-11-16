import type { Meta, StoryFn } from '@storybook/react';

import { YearPickerCalendar } from '@admiral-ds/date-picker';
import { YearPickerCalendarSimpleTemplate } from '#src/stories/yearPickerCalendarStories/YearPickerCalendarSimple.template.tsx';

export default {
  title: 'Admiral-2.1/YearPickerCalendar',
  component: YearPickerCalendar,
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
} as Meta<typeof YearPickerCalendar>;

const YearPickerCalendarSimpleStory: StoryFn<typeof YearPickerCalendar> = (props) => {
  return <YearPickerCalendarSimpleTemplate {...props} />;
};
export const YearPickerCalendarSimple = YearPickerCalendarSimpleStory.bind({});
YearPickerCalendarSimple.storyName = 'YearPickerCalendarSimple';
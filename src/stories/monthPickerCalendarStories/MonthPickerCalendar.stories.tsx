import type { Meta, StoryFn } from '@storybook/react';

import { MonthPickerCalendar } from '@admiral-ds/date-picker';
import { MonthPickerCalendarSimpleTemplate } from '#src/stories/monthPickerCalendarStories/MonthPickerCalendarSimple.template.tsx';

export default {
  title: 'Admiral-2.1/MonthPickerCalendar',
  component: MonthPickerCalendar,
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
    locale: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof MonthPickerCalendar>;

const MonthPickerCalendarSimpleStory: StoryFn<typeof MonthPickerCalendar> = (props) => {
  return <MonthPickerCalendarSimpleTemplate {...props} />;
};
export const MonthPickerCalendarSimple = MonthPickerCalendarSimpleStory.bind({});
MonthPickerCalendarSimple.storyName = 'MonthPickerCalendarSimple';

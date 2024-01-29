import type { Meta, StoryFn } from '@storybook/react';

import { DatePickerCalendar } from '@admiral-ds/date-picker';
import { DatePickerCalendarSimpleTemplate } from '#src/stories/datePickerCalendarStories/DatePickerCalendarSimple.template.tsx';
import { DatePickerCalendarWithHolidaysTemplate } from './DatePickerCalendarWithHolidays.template';

export default {
  title: 'Admiral-2.1/DatePickerCalendar',
  component: DatePickerCalendar,
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
      control: false,
    },
  },
} as Meta<typeof DatePickerCalendar>;

const DatePickerCalendarSimpleStory: StoryFn<typeof DatePickerCalendar> = (props) => {
  return <DatePickerCalendarSimpleTemplate {...props} />;
};
export const DatePickerCalendarSimple = DatePickerCalendarSimpleStory.bind({});
DatePickerCalendarSimple.storyName = 'DatePickerCalendarSimple';

const DatePickerCalendarWithHolidaysStory: StoryFn<typeof DatePickerCalendar> = (props) => {
  return <DatePickerCalendarWithHolidaysTemplate {...props} />;
};
export const DatePickerCalendarWithHolidays = DatePickerCalendarWithHolidaysStory.bind({});
DatePickerCalendarWithHolidays.storyName = 'DatePickerCalendarWithHolidays';

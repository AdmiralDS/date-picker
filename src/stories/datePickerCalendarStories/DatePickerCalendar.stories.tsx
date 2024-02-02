import type { Meta, StoryFn } from '@storybook/react';

import { DatePickerCalendar } from '@admiral-ds/date-picker';
import { DatePickerCalendarSimpleTemplate } from './DatePickerCalendarSimple.template.tsx';
import DatePickerCalendarSimpleTemplateRaw from './DatePickerCalendarSimple.template.tsx?raw';
import { DatePickerCalendarWithHolidaysTemplate } from './DatePickerCalendarWithHolidays.template';
import { DatePickerCalendarChangeLocaleTemplate } from './DatePickerCalendarChangeLocale.template';
import { DatePickerCalendarCustomCellTemplate } from './DatePickerCalendarCustomCell.template';

export default {
  title: 'Admiral-2.1/DatePicker/DatePickerCalendar',
  component: DatePickerCalendar,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
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

export const DatePickerCalendarSimple = {
  render: DatePickerCalendarSimpleStory,

  parameters: {
    docs: {
      source: {
        code: DatePickerCalendarSimpleTemplateRaw,
      },
    },
  },
  name: 'DatePickerCalendarSimple',
};

const DatePickerCalendarWithHolidaysStory: StoryFn<typeof DatePickerCalendar> = (props) => {
  return <DatePickerCalendarWithHolidaysTemplate {...props} />;
};
export const DatePickerCalendarWithHolidays = DatePickerCalendarWithHolidaysStory.bind({});
DatePickerCalendarWithHolidays.storyName = 'DatePickerCalendarWithHolidays';

const DatePickerCalendarChangeLocaleStory: StoryFn<typeof DatePickerCalendar> = (props) => {
  return <DatePickerCalendarChangeLocaleTemplate {...props} />;
};
export const DatePickerCalendarChangeLocale = DatePickerCalendarChangeLocaleStory.bind({});
DatePickerCalendarChangeLocale.storyName = 'DatePickerCalendarChangeLocale';

const DatePickerCalendarCustomCellStory: StoryFn<typeof DatePickerCalendar> = (props) => {
  return <DatePickerCalendarCustomCellTemplate {...props} />;
};
export const DatePickerCalendarCustomCell = DatePickerCalendarCustomCellStory.bind({});
DatePickerCalendarCustomCell.storyName = 'DatePickerCalendarCustomCell';

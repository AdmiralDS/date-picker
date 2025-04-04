import type { Meta, StoryFn } from '@storybook/react';

import { MonthRangePickerCalendar } from '@admiral-ds/date-picker';
import { MonthRangePickerCalendarSimpleTemplate } from './MonthRangePickerCalendarSimple.template.tsx';
import MonthRangePickerCalendarSimpleTemplateRaw from './MonthRangePickerCalendarSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Range Picker/MonthRangePickerCalendar',
  component: MonthRangePickerCalendar,
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
} as Meta<typeof MonthRangePickerCalendar>;

const MonthRangePickerCalendarSimpleStory: StoryFn<typeof MonthRangePickerCalendar> = () => {
  return <MonthRangePickerCalendarSimpleTemplate />;
};
export const MonthRangePickerCalendarSimple = {
  render: MonthRangePickerCalendarSimpleStory,

  parameters: {
    docs: {
      source: {
        code: MonthRangePickerCalendarSimpleTemplateRaw,
      },
    },
  },
  name: 'Выбор диапазона месяцев',
};

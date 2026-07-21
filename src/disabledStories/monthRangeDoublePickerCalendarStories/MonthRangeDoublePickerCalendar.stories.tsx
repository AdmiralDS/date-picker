import type { Meta, StoryFn } from '@storybook/react';

import { MonthRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

import { MonthRangeDoublePickerCalendarSimpleTemplate } from './MonthRangeDoublePickerCalendarSimple.template.tsx';
import MonthRangeDoublePickerCalendarSimpleTemplateRaw from './MonthRangeDoublePickerCalendarSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Double Range Picker/Picker Calendar/MonthRangeDoublePickerCalendar',
  component: MonthRangeDoublePickerCalendar,
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
} as Meta<typeof MonthRangeDoublePickerCalendar>;

const MonthRangeDoublePickerCalendarSimpleStory: StoryFn<typeof MonthRangeDoublePickerCalendar> = () => {
  return <MonthRangeDoublePickerCalendarSimpleTemplate />;
};
export const MonthRangeDoublePickerCalendarSimple = {
  render: MonthRangeDoublePickerCalendarSimpleStory,

  parameters: {
    docs: {
      source: {
        code: MonthRangeDoublePickerCalendarSimpleTemplateRaw,
      },
    },
  },
  name: 'Сдвоенный календарь выбора месяцев',
};

import type { Meta, StoryFn } from '@storybook/react';

import { YearRangePickerCalendar } from '@admiral-ds/date-picker';

import { YearRangePickerCalendarSimpleTemplate } from './YearRangePickerCalendarSimple.template.tsx';
import YearRangePickerCalendarSimpleTemplateRaw from './YearRangePickerCalendarSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Range Picker/YearRangePickerCalendar',
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

const YearRangePickerCalendarSimpleStory: StoryFn<typeof YearRangePickerCalendar> = () => {
  return <YearRangePickerCalendarSimpleTemplate />;
};
export const YearRangePickerCalendarSimple = {
  render: YearRangePickerCalendarSimpleStory,

  parameters: {
    docs: {
      source: {
        code: YearRangePickerCalendarSimpleTemplateRaw,
      },
    },
  },
  name: 'Выбор диапазона лет',
};

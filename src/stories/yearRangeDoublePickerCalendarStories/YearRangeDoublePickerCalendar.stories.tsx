import type { Meta, StoryFn } from '@storybook/react';

import { YearRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

import { YearRangeDoublePickerCalendarSimpleTemplate } from './YearRangeDoublePickerCalendarSimple.template.tsx';
import YearRangeDoublePickerCalendarSimpleTemplateRaw from './YearRangeDoublePickerCalendarSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/DoubleRangePicker/YearRangeDoublePickerCalendar',
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
export const YearRangeDoublePickerCalendarSimple = {
  render: YearRangeDoublePickerCalendarSimpleStory,

  parameters: {
    docs: {
      source: {
        code: YearRangeDoublePickerCalendarSimpleTemplateRaw,
      },
    },
  },
  name: 'YearRangeDoublePickerCalendarSimple',
};

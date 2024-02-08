import type { Meta, StoryFn } from '@storybook/react';

import { YearPickerCalendar } from '@admiral-ds/date-picker';
import { YearPickerCalendarSimpleTemplate } from './YearPickerCalendarSimple.template.tsx';
import YearPickerCalendarSimpleTemplateRaw from './YearPickerCalendarSimple.template.tsx?raw';
import { YearPickerCalendarCustomCellTemplate } from './YearPickerCalendarCustomCell.template';
import YearPickerCalendarCustomCellTemplateRaw from './YearPickerCalendarCustomCell.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Date Picker/YearPickerCalendar',
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
    locale: {
      control: false,
    },
  },
} as Meta<typeof YearPickerCalendar>;

const YearPickerCalendarSimpleStory: StoryFn<typeof YearPickerCalendar> = (props) => {
  return <YearPickerCalendarSimpleTemplate {...props} />;
};
export const YearPickerCalendarSimple = {
  render: YearPickerCalendarSimpleStory,

  parameters: {
    docs: {
      source: {
        code: YearPickerCalendarSimpleTemplateRaw,
      },
    },
  },
  name: 'Выбор года',
};

const YearPickerCalendarCustomCellStory: StoryFn<typeof YearPickerCalendar> = (props) => {
  return <YearPickerCalendarCustomCellTemplate {...props} />;
};
export const YearPickerCalendarCustomCell = {
  render: YearPickerCalendarCustomCellStory,

  parameters: {
    docs: {
      source: {
        code: YearPickerCalendarCustomCellTemplateRaw,
      },
    },
  },
  name: 'Кастомизация отображения',
};

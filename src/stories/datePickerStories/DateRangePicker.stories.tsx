import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '@admiral-ds/date-picker';
import { DateRangePickerSimpleTemplate } from './DateRangePickerSimple.template.tsx';
import DateRangePickerSimpleTemplateRaw from './DateRangePickerSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Date Picker/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
  argTypes: {},
} as Meta<typeof DateRangePicker>;

//типизация стори обязательна для правильной генерации доки
type Story = StoryObj<typeof DateRangePicker>;

export const DatePickerCalendarSimple: Story = {
  // обязательно для правильной работы хуков внутри темплейта
  render: () => <DateRangePickerSimpleTemplate />,
  parameters: {
    docs: {
      source: {
        code: DateRangePickerSimpleTemplateRaw,
      },
    },
  },
  name: 'Выбор даты',
};

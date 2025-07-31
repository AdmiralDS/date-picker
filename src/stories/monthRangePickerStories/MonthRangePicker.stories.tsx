import type { Meta, StoryObj } from '@storybook/react';
import { MonthRangePicker } from '@admiral-ds/date-picker';
import { MonthRangePickerSimpleTemplate } from './MonthRangePickerSimple.template';
import MonthRangePickerSimpleTemplateRaw from './MonthRangePickerSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Range Picker/Picker/MonthRangePicker',
  component: MonthRangePicker,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
  argTypes: {},
} as Meta<typeof MonthRangePicker>;

//типизация стори обязательна для правильной генерации доки
type Story = StoryObj<typeof MonthRangePicker>;

export const MonthPickerCalendarSimple: Story = {
  // обязательно для правильной работы хуков внутри темплейта
  render: () => <MonthRangePickerSimpleTemplate />,
  parameters: {
    docs: {
      source: {
        code: MonthRangePickerSimpleTemplateRaw,
      },
    },
  },
  name: 'Выбор даты',
};

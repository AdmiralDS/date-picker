import type { Meta, StoryObj } from '@storybook/react';
import { YearRangePicker } from '@admiral-ds/date-picker';
import { YearRangePickerSimpleTemplate } from './YearRangePickerSimple.template';
import YearRangePickerSimpleTemplateRaw from './YearRangePickerSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Range Picker/Picker/YearRangePicker',
  component: YearRangePicker,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
  argTypes: {},
} as Meta<typeof YearRangePicker>;

//типизация стори обязательна для правильной генерации доки
type Story = StoryObj<typeof YearRangePicker>;

export const YearPickerCalendarSimple: Story = {
  // обязательно для правильной работы хуков внутри темплейта
  render: () => <YearRangePickerSimpleTemplate />,
  parameters: {
    docs: {
      source: {
        code: YearRangePickerSimpleTemplateRaw,
      },
    },
  },
  name: 'Выбор даты',
};

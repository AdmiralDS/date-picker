import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '@admiral-ds/date-picker';

import { DateRangePickerSimpleTemplate } from './DateRangePickerSimple.template';
import { DateRangePickerTestsTemplate } from './DateRangePickerTests.template';

import DateRangePickerSimpleTemplateRaw from './DateRangePickerSimple.template.tsx?raw';
import DateRangePickerTestsTemplateRaw from './DateRangePickerTests.template.tsx?raw';

import { pickRangeDateFirstTest, pickRangeDateSecondTest, pickRangeDateThirdTest } from './DateRangePickerTests';

export default {
  title: 'Admiral-2.1/Range Picker/Picker/DateRangePicker',
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

export const DatePickerSimple: Story = {
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

export const DateRangePickerTests: StoryObj<typeof DateRangePicker> = {
  // обязательно для правильной работы хуков внутри темплейта
  render: () => <DateRangePickerTestsTemplate />,
  parameters: {
    docs: {
      source: {
        code: DateRangePickerTestsTemplateRaw,
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    await step('First Test', async () => {
      await pickRangeDateFirstTest(canvasElement);
    });
    await step('Second Test', async () => {
      await pickRangeDateSecondTest(canvasElement);
    });
    await step('Third Test', async () => {
      await pickRangeDateThirdTest(canvasElement);
    });
  },
  name: 'Тесты',
};

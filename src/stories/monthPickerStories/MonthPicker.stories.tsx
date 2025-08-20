import type { Meta, StoryObj } from '@storybook/react';
import { MonthPicker } from '@admiral-ds/date-picker';

import { MonthPickerSimpleTemplate } from './MonthPickerSimple.template.tsx';
import { MonthPickerChangeLocaleTemplate } from './MonthPickerChangeLocale.template.tsx';

import MonthPickerSimpleTemplateRaw from './MonthPickerSimple.template.tsx?raw';
import MonthPickerChangeLocaleTemplateRaw from './MonthPickerChangeLocale.template.tsx?raw';
import { pickMonthTest } from './MonthPicker.tests.ts';

export default {
  title: 'Admiral-2.1/Date Picker/Picker/MonthPicker',
  component: MonthPicker,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
  argTypes: {},
} as Meta<typeof MonthPicker>;

export const MonthPickerSimple: StoryObj<typeof MonthPicker> = {
  render: () => <MonthPickerSimpleTemplate />,
  parameters: {
    docs: {
      source: {
        code: MonthPickerSimpleTemplateRaw,
      },
    },
  },
  name: 'Тест выбора месяца',
  play: async (context) => {
    await pickMonthTest(context.canvasElement, context.id);
  },
};

export const MonthPickerChangeLocale: StoryObj<typeof MonthPicker> = {
  render: () => <MonthPickerChangeLocaleTemplate />,
  parameters: {
    docs: {
      source: {
        code: MonthPickerChangeLocaleTemplateRaw,
      },
    },
  },
  name: 'Выбор локализации',
};

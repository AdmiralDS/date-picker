import type { Meta, StoryObj } from '@storybook/react';
import { YearPicker } from '@admiral-ds/date-picker';
import { YearPickerSimpleTemplate } from './YearPickerSimple.template.tsx';
import YearPickerSimpleTemplateRaw from './YearPickerSimple.template.tsx?raw';
import { YearPickerChangeLocaleTemplate } from './YearPickerChangeLocale.template.tsx';
import YearPickerChangeLocaleTemplateRaw from './YearPickerChangeLocale.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Date Picker/YearPicker',
  component: YearPicker,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
  argTypes: {},
} as Meta<typeof YearPicker>;

export const YearPickerSimple: StoryObj<typeof YearPicker> = {
  render: () => <YearPickerSimpleTemplate />,
  parameters: {
    docs: {
      source: {
        code: YearPickerSimpleTemplateRaw,
      },
    },
  },
  name: 'Выбор года',
};

export const YearPickerChangeLocale: StoryObj<typeof YearPicker> = {
  render: () => <YearPickerChangeLocaleTemplate />,
  parameters: {
    docs: {
      source: {
        code: YearPickerChangeLocaleTemplateRaw,
      },
    },
  },
  name: 'Смена локализации',
};

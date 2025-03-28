import type { Meta, StoryObj } from '@storybook/react';
import { MonthInput } from '@admiral-ds/date-picker';
import { MonthInputSimpleTemplate } from './MonthInputSimple.template.tsx';
import MonthInputSimpleTemplateRaw from './MonthInputSimple.template.tsx?raw';
import { MonthInputChangeLocaleTemplate } from './MonthInputChangeLocale.template.tsx';
import MonthInputChangeLocaleTemplateRaw from './MonthInputChangeLocale.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Date Picker/MonthInput',
  component: MonthInput,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
  argTypes: {},
} as Meta<typeof MonthInput>;

export const MonthInputSimple: StoryObj<typeof MonthInput> = {
  render: () => <MonthInputSimpleTemplate />,
  parameters: {
    docs: {
      source: {
        code: MonthInputSimpleTemplateRaw,
      },
    },
  },
  name: 'Выбор месяца',
};

export const MonthInputChangeLocale: StoryObj<typeof MonthInput> = {
  render: () => <MonthInputChangeLocaleTemplate />,
  parameters: {
    docs: {
      source: {
        code: MonthInputChangeLocaleTemplateRaw,
      },
    },
  },
  name: 'Выбор локализации',
};

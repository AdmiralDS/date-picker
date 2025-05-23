import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@admiral-ds/date-picker';
import { DatePickerSimpleTemplate } from './DatePickerSimple.template.tsx';
import DatePickerSimpleTemplateRaw from './DatePickerSimple.template.tsx?raw';
import { DatePickerChangeLocaleTemplate } from './DatePickerChangeLocale.template.tsx';
import DatePickerChangeLocaleTemplateRaw from './DatePickerChangeLocale.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Date Picker/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
  argTypes: {},
} as Meta<typeof DatePicker>;

export const DatePickerCalendarSimple: StoryObj<typeof DatePicker> = {
  // обязательно для правильной работы хуков внутри темплейта
  render: () => <DatePickerSimpleTemplate />,
  parameters: {
    docs: {
      source: {
        code: DatePickerSimpleTemplateRaw,
      },
    },
  },
  name: 'Выбор даты',
  args: {
    inputProps: {
      placeholder: 'Введите дату',
      dataPlaceholder: 'дд.мм.гггг',
      value: '11.',
    },
  },
};

export const DatePickerChangeLocale: StoryObj<typeof DatePicker> = {
  render: () => <DatePickerChangeLocaleTemplate />,

  parameters: {
    docs: {
      source: {
        code: DatePickerChangeLocaleTemplateRaw,
      },
    },
  },
  name: 'Смена локализации',
};

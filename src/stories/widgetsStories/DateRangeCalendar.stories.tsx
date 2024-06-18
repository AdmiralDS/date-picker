import type { Meta, StoryObj } from '@storybook/react';

import { DateRangeCalendar } from '#lib/DateRangeCalendar';

import { DateRangeCalendarSimpleTemplate } from './DateRangeCalendarSimple.template.tsx';
import DateRangeCalendarSimpleTemplateRaw from './DateRangeCalendarSimple.template.tsx?raw';

const meta: Meta<typeof DateRangeCalendar> = {
  title: 'Admiral-2.1/Widgets/DateRangeCalendar',
  tags: ['autodocs'],
  component: DateRangeCalendar,
};

type Story = StoryObj<typeof DateRangeCalendar>;

export const DateRangeCalendarSimple: Story = {
  render: DateRangeCalendarSimpleTemplate,

  parameters: {
    docs: {
      source: {
        code: DateRangeCalendarSimpleTemplateRaw,
      },
    },
  },
  name: 'DateRangeCalendarSimple',
};

export default meta;

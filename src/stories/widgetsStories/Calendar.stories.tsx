import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from '@admiral-ds/date-picker';

import { CalendarSimpleTemplate } from './CalendarSimple.template.tsx';
import CalendarSimpleTemplateRaw from './CalendarSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Widgets/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
  argTypes: {},
} as Meta<typeof Calendar>;

export const DatesOfMonthWidgetSimple: StoryObj<typeof Calendar> = {
  render: (props) => <CalendarSimpleTemplate {...props} />,

  parameters: {
    docs: {
      source: {
        code: CalendarSimpleTemplateRaw,
      },
    },
  },
  name: 'CalendarSimple',
};

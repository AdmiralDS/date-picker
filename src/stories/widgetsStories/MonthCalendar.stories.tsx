import type { Meta, StoryFn } from '@storybook/react';

import { MonthCalendar } from '@admiral-ds/date-picker';

import { MonthCalendarSimpleTemplate } from './MonthCalendarSimple.template.tsx';
import MonthCalendarSimpleTemplateRaw from './MonthCalendarSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Widgets/MonthCalendar',
  component: MonthCalendar,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407',
    },
  },
  argTypes: {
    dateValue: {
      control: { type: 'text' },
    },
    locale: {
      control: false,
    },
  },
} as Meta<typeof MonthCalendar>;

const MonthCalendarSimpleStory: StoryFn<typeof MonthCalendar> = (props) => {
  return <MonthCalendarSimpleTemplate {...props} />;
};
export const MonthCalendarSimple = {
  render: MonthCalendarSimpleStory,

  parameters: {
    docs: {
      source: {
        code: MonthCalendarSimpleTemplateRaw,
      },
    },
  },
  name: 'MonthCalendarSimple',
};

import type { Meta, StoryFn } from '@storybook/react';

import { MonthRangeCalendar } from '@admiral-ds/date-picker';

import { MonthRangeCalendarSimpleTemplate } from './MonthRangeCalendarSimple.template.tsx';
import MonthRangeCalendarSimpleTemplateRaw from './MonthRangeCalendarSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Widgets/MonthRangeCalendar',
  component: MonthRangeCalendar,
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
    locale: {
      control: false,
    },
  },
} as Meta<typeof MonthRangeCalendar>;

const MonthRangeCalendarSimpleStory: StoryFn<typeof MonthRangeCalendar> = (props) => {
  return <MonthRangeCalendarSimpleTemplate {...props} />;
};
export const MonthRangeCalendarSimple = {
  render: MonthRangeCalendarSimpleStory,

  parameters: {
    docs: {
      source: {
        code: MonthRangeCalendarSimpleTemplateRaw,
      },
    },
  },
  name: 'MonthRangeCalendarSimple',
};

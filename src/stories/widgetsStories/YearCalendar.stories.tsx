import type { Meta, StoryFn } from '@storybook/react';

import { YearCalendar } from '@admiral-ds/date-picker';

import { YearCalendarSimpleTemplate } from './YearCalendarSimple.template.tsx';
import YearCalendarSimpleTemplateRaw from './YearCalendarSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Widgets/YearCalendar',
  component: YearCalendar,
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
} as Meta<typeof YearCalendar>;

const YearCalendarSimpleStory: StoryFn<typeof YearCalendar> = (props) => {
  return <YearCalendarSimpleTemplate {...props} />;
};
export const YearCalendarSimple = {
  render: YearCalendarSimpleStory,

  parameters: {
    docs: {
      source: {
        code: YearCalendarSimpleTemplateRaw,
      },
    },
  },
  name: 'YearCalendarSimple',
};

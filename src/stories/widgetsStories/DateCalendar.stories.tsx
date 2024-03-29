import type { Meta, StoryFn } from '@storybook/react';

import { DateCalendar } from '@admiral-ds/date-picker';
import { DateCalendarSimpleTemplate } from './DateCalendarSimple.template.tsx';
import DateCalendarSimpleTemplateRaw from './DateCalendarSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Widgets/DateCalendar',
  component: DateCalendar,
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
} as Meta<typeof DateCalendar>;

const DateCalendarSimpleStory: StoryFn<typeof DateCalendar> = (props) => {
  return <DateCalendarSimpleTemplate {...props} />;
};
export const DateCalendarSimple = {
  render: DateCalendarSimpleStory,

  parameters: {
    docs: {
      source: {
        code: DateCalendarSimpleTemplateRaw,
      },
    },
  },
  name: 'DateCalendarSimple',
};

import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { Calendar } from '@admiral-ds/date-picker';
import { SimpleCalendarTemplate } from "#src/stories/calendarStories/templates/SimpleCalendarTemplate";
import { CustomCalendarTemplate } from "#src/stories/calendarStories/templates/CustomCalendarTemplate";

// Imports of text sources
import SimpleCalendarTemplateRaw from '!!raw-loader!./templates/SimpleCalendarTemplate';
import CustomCalendarTemplateRaw from '!!raw-loader!./templates/CustomCalendarTemplate';

export default {
  title: 'Admiral-2.1/Calendar',
  component: Calendar,
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
    viewMode: {
      options: ['DATES', 'MONTHS', 'YEARS'],
      control: { type: 'radio' },
    },
    pickerType: {
      options: ['DATE_MONTH_YEAR', 'MONTH_YEAR', 'YEAR'],
      control: { type: 'radio' },
    },
    rangePicker: {
      control: { type: 'boolean' },
    },
    doubleView: {
      control: { type: 'boolean' },
    },
    validator: {
      control: false,
    },
    selected: {
      control: false,
    },
    minDate: {
      control: false,
    },
    maxDate: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Calendar>;

const SimpleCalendarStory: ComponentStory<typeof Calendar> = (props) => (
  <SimpleCalendarTemplate {...props} />
);

export const SimpleCalendar = SimpleCalendarStory.bind({});
SimpleCalendar.parameters = {
  docs: {
    source: {
      code: SimpleCalendarTemplateRaw,
    },
  },
};
SimpleCalendar.storyName = 'Simple.';

const CustomCalendarStory: ComponentStory<typeof Calendar> = (props) => (
  <CustomCalendarTemplate {...props} />
);

export const CustomCalendar = CustomCalendarStory.bind({});
CustomCalendar.parameters = {
  docs: {
    source: {
      code: CustomCalendarTemplateRaw,
    },
  },
};
CustomCalendar.storyName = 'Custom.';

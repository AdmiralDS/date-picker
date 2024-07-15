import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from '@admiral-ds/date-picker';

import { CalendarDateSelectionTemplate } from './CalendarDateSelection.template.tsx';
import CalendarDateSelectionTemplateRaw from './CalendarDateSelection.template?raw';

import { CalendarRangeSelectionTemplate } from './CalendarRangeSelection.template.tsx';
import CalendarRangeSelectionTemplateRaw from './CalendarRangeSelection.template?raw';
import { CalendarCellStoryTemplate } from './CalendarCell.template.tsx';
import CalendarCellStoryTemplateRaw from './CalendarCell.template.tsx?raw';

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

export const CalendarDateSelectionStory: StoryObj<typeof Calendar> = {
  render: (props) => <CalendarDateSelectionTemplate {...props} />,

  parameters: {
    docs: {
      source: {
        code: CalendarDateSelectionTemplateRaw,
      },
    },
  },
  name: 'Calendar выбор даты',
};

export const CalendarRangeSelectionStory: StoryObj<typeof Calendar> = {
  render: (props) => <CalendarRangeSelectionTemplate {...props} />,

  parameters: {
    docs: {
      source: {
        code: CalendarRangeSelectionTemplateRaw,
      },
    },
  },
  name: 'Calendar выбор отрезка времени',
};

export const CalendarCellStory: StoryObj<typeof Calendar> = {
  render: (props) => <CalendarCellStoryTemplate {...props} />,

  parameters: {
    docs: {
      source: {
        code: CalendarCellStoryTemplateRaw,
      },
    },
  },
  name: 'CalendarDateCell',
};

import type { Meta, StoryFn } from '@storybook/react';

import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';

import { MonthsOfYearWidgetSimpleTemplate } from './MonthsOfYearWidgetSimple.template';
import MonthsOfYearWidgetSimpleTemplateRaw from './MonthsOfYearWidgetSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Widgets/MonthsOfYear',
  component: MonthsOfYearWidget,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {},
} as Meta<typeof MonthsOfYearWidget>;

const MonthsOfYearWidgetSimpleStory: StoryFn<typeof MonthsOfYearWidget> = (props) => {
  return <MonthsOfYearWidgetSimpleTemplate {...props} />;
};
export const MonthsOfYearWidgetSimple = {
  render: MonthsOfYearWidgetSimpleStory,

  parameters: {
    docs: {
      source: {
        code: MonthsOfYearWidgetSimpleTemplateRaw,
      },
    },
  },
  name: 'MonthsOfYearWidgetSimple',
};

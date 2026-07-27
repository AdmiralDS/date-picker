import type { Meta, StoryFn } from '@storybook/react';

import { MonthsWidget } from '#lib/MonthsWidget';

import { MonthsWidgetSimpleTemplate } from './MonthsWidgetSimple.template';
import MonthsWidgetSimpleTemplateRaw from './MonthsWidgetSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Widgets/Months',
  component: MonthsWidget,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {},
} as Meta<typeof MonthsWidget>;

const MonthsWidgetSimpleStory: StoryFn<typeof MonthsWidget> = (props) => {
  return <MonthsWidgetSimpleTemplate {...props} />;
};
export const MonthsWidgetSimple = {
  render: MonthsWidgetSimpleStory,

  parameters: {
    docs: {
      source: {
        code: MonthsWidgetSimpleTemplateRaw,
      },
    },
  },
  name: 'MonthsWidgetSimple',
};

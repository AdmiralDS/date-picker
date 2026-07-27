import type { Meta, StoryFn } from '@storybook/react';

import { DatesWidget } from '#lib/DatesWidget/index.tsx';

import { DatesWidgetSimpleTemplate } from './DatesWidgetSimple.template.tsx';
import DatesWidgetSimpleTemplateRaw from './DatesWidgetSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Widgets/Dates',
  component: DatesWidget,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {},
} as Meta<typeof DatesWidget>;

const DatesWidgetSimpleStory: StoryFn<typeof DatesWidget> = (props) => {
  return <DatesWidgetSimpleTemplate {...props} />;
};
export const DatesWidgetSimple = {
  render: DatesWidgetSimpleStory,

  parameters: {
    docs: {
      source: {
        code: DatesWidgetSimpleTemplateRaw,
      },
    },
  },
  name: 'DatesWidgetSimple',
};

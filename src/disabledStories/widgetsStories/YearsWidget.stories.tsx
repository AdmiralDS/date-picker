import type { Meta, StoryFn } from '@storybook/react';

import { YearsWidget } from '#lib/YearsWidget';

import { YearsWidgetSimpleTemplate } from './YearsWidgetSimple.template.tsx';
import YearsWidgetSimpleTemplateRaw from './YearsWidgetSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Widgets/Years',
  component: YearsWidget,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {},
} as Meta<typeof YearsWidget>;

const YearsWidgetSimpleStory: StoryFn<typeof YearsWidget> = (props) => {
  return <YearsWidgetSimpleTemplate {...props} />;
};
export const YearsWidgetSimple = {
  render: YearsWidgetSimpleStory,

  parameters: {
    docs: {
      source: {
        code: YearsWidgetSimpleTemplateRaw,
      },
    },
  },
  name: 'YearsWidgetSimple',
};

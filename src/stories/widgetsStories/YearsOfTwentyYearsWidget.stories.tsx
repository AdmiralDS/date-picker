import type { Meta, StoryFn } from '@storybook/react';

import { YearsOfTwentyYearsWidget } from '#src/components/YearsOfTwentyYearsWidget';

import { YearsOfTwentyYearsWidgetSimpleTemplate } from './YearsOfTwentyYearsWidgetSimple.template.tsx';
import YearsOfTwentyYearsWidgetSimpleTemplateRaw from './YearsOfTwentyYearsWidgetSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Widgets/YearsOfTwentyYears',
  component: YearsOfTwentyYearsWidget,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {},
} as Meta<typeof YearsOfTwentyYearsWidget>;

const YearsOfTwentyYearsWidgetSimpleStory: StoryFn<typeof YearsOfTwentyYearsWidget> = (props) => {
  return <YearsOfTwentyYearsWidgetSimpleTemplate {...props} />;
};
export const YearsOfTwentyYearsWidgetSimple = {
  render: YearsOfTwentyYearsWidgetSimpleStory,

  parameters: {
    docs: {
      source: {
        code: YearsOfTwentyYearsWidgetSimpleTemplateRaw,
      },
    },
  },
  name: 'YearsOfTwentyYearsWidgetSimple',
};

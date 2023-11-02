import type { Meta, StoryFn } from '@storybook/react';

import { YearsOfTwentyYearsWidget } from '#src/components/YearsOfTwentyYearsWidget';

import { YearsOfTwentyYearsWidgetSimpleTemplate } from '#src/stories/widgetsStories/YearsOfTwentyYearsWidgetSimple.template.tsx';

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

const YearsOfTwentyYearsWidgetStory: StoryFn<typeof YearsOfTwentyYearsWidget> = (props) => {
  return <YearsOfTwentyYearsWidgetSimpleTemplate {...props} />;
};

export const YearsOfTwentyYearsWidgetSimple = YearsOfTwentyYearsWidgetStory.bind({});
YearsOfTwentyYearsWidgetSimple.storyName = 'YearsOfTwentyYearsWidget.';

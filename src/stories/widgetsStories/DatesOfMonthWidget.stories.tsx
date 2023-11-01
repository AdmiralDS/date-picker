import type { Meta, StoryFn } from '@storybook/react';

import { DatesOfMonthWidget } from '#src/components/DatesOfMonthWidget';

import { DatesOfMonthWidgetSimpleTemplate } from '#src/stories/widgetsStories/DatesOfMonthWidgetSimpleTemplate';

export default {
  title: 'Admiral-2.1/Widgets/DatesOfMonth',
  component: DatesOfMonthWidget,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {},
} as Meta<typeof DatesOfMonthWidget>;

const DatesOfMonthWidgetStory: StoryFn<typeof DatesOfMonthWidget> = (props) => {
  return <DatesOfMonthWidgetSimpleTemplate {...props} />;
};

export const DatesOfMonthWidgetSimple = DatesOfMonthWidgetStory.bind({});
DatesOfMonthWidgetSimple.storyName = 'DatesOfMonthWidget.';

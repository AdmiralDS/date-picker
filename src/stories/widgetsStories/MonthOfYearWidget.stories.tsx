import type { Meta, StoryFn } from '@storybook/react';

import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';

import { MonthsOfYearWidgetSimpleTemplate } from '#src/stories/widgetsStories/MonthsOfYearWidgetSimple.template';

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

const DatesOfMonthWidgetStory: StoryFn<typeof MonthsOfYearWidget> = (props) => {
  return <MonthsOfYearWidgetSimpleTemplate {...props} />;
};

export const DatesOfMonthWidgetSimple = DatesOfMonthWidgetStory.bind({});
DatesOfMonthWidgetSimple.storyName = 'DatesOfMonthWidget.';

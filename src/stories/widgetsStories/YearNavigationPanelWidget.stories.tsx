import type { Meta, StoryFn } from '@storybook/react';

import { YearNavigationPanelWidget } from '#src/components/YearNavigationPanelWidget';
import { YearNavigationPanelWidgetSimpleTemplate } from '#src/stories/widgetsStories/YearNavigationPanelWidgetSimple.template';

export default {
  title: 'Admiral-2.1/Widgets/MonthsOfYear',
  component: YearNavigationPanelWidget,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {},
} as Meta<typeof YearNavigationPanelWidget>;

const YearNavigationPanelWidgetStory: StoryFn<typeof YearNavigationPanelWidget> = (props) => {
  return <YearNavigationPanelWidgetSimpleTemplate {...props} />;
};

export const YearNavigationPanelWidgetSimple = YearNavigationPanelWidgetStory.bind({});
YearNavigationPanelWidgetSimple.storyName = 'YearNavigationPanelWidget.';

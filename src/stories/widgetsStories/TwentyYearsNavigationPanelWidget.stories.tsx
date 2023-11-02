import type { Meta, StoryFn } from '@storybook/react';

import { TwentyYearsNavigationPanelWidget } from '#src/components/TwentyYearsNavigationPanelWidget';
import { TwentyYearsNavigationPanelWidgetSimpleTemplate } from '#src/stories/widgetsStories/TwentyYearsNavigationPanelWidgetSimple.template';

export default {
  title: 'Admiral-2.1/Widgets/TwentyYearsNavigationPanel',
  component: TwentyYearsNavigationPanelWidget,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {},
} as Meta<typeof TwentyYearsNavigationPanelWidget>;

const TwentyYearsNavigationPanelWidgetStory: StoryFn<typeof TwentyYearsNavigationPanelWidget> = (props) => {
  return <TwentyYearsNavigationPanelWidgetSimpleTemplate {...props} />;
};

export const TwentyYearsNavigationPanelWidgetSimple = TwentyYearsNavigationPanelWidgetStory.bind({});
TwentyYearsNavigationPanelWidgetSimple.storyName = 'TwentyYearsNavigationPanelWidget.';

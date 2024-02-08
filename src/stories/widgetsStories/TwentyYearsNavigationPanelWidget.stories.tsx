import type { Meta, StoryFn } from '@storybook/react';

import { TwentyYearsNavigationPanelWidget } from '#src/components/TwentyYearsNavigationPanelWidget';
import { TwentyYearsNavigationPanelWidgetSimpleTemplate } from './TwentyYearsNavigationPanelWidgetSimple.template';
import TwentyYearsNavigationPanelWidgetSimpleTemplateRaw from './TwentyYearsNavigationPanelWidgetSimple.template.tsx?raw';

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

const TwentyYearsNavigationPanelWidgetSimpleStory: StoryFn<typeof TwentyYearsNavigationPanelWidget> = (props) => {
  return <TwentyYearsNavigationPanelWidgetSimpleTemplate {...props} />;
};
export const TwentyYearsNavigationPanelWidgetSimple = {
  render: TwentyYearsNavigationPanelWidgetSimpleStory,

  parameters: {
    docs: {
      source: {
        code: TwentyYearsNavigationPanelWidgetSimpleTemplateRaw,
      },
    },
  },
  name: 'TwentyYearsNavigationPanelWidgetSimple',
};

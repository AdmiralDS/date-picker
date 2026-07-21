import type { Meta, StoryFn } from '@storybook/react';

import { YearNavigationPanelWidget } from '#lib/YearNavigationPanelWidget';
import { YearNavigationPanelWidgetSimpleTemplate } from './YearNavigationPanelWidgetSimple.template';
import YearNavigationPanelWidgetSimpleTemplateRaw from './YearNavigationPanelWidgetSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Widgets/YearNavigationPanel',
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

const YearNavigationPanelWidgetSimpleStory: StoryFn<typeof YearNavigationPanelWidget> = (props) => {
  return <YearNavigationPanelWidgetSimpleTemplate {...props} />;
};
export const YearNavigationPanelWidgetSimple = {
  render: YearNavigationPanelWidgetSimpleStory,

  parameters: {
    docs: {
      source: {
        code: YearNavigationPanelWidgetSimpleTemplateRaw,
      },
    },
  },
  name: 'YearNavigationPanelWidgetSimple',
};

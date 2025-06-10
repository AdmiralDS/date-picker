import type { Meta, StoryFn } from '@storybook/react';

import { RangeYearsNavigationPanelWidget } from '#lib/RangeYearsNavigationPanelWidget';
import { RangeYearsNavigationPanelWidgetSimpleTemplate } from './RangeYearsNavigationPanelWidgetSimple.template';
import RangeYearsNavigationPanelWidgetSimpleTemplateRaw from './RangeYearsNavigationPanelWidgetSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Widgets/RangeYearsNavigationPanel',
  component: RangeYearsNavigationPanelWidget,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {},
} as Meta<typeof RangeYearsNavigationPanelWidget>;

const RangeYearsNavigationPanelWidgetSimpleStory: StoryFn<typeof RangeYearsNavigationPanelWidget> = (props) => {
  return <RangeYearsNavigationPanelWidgetSimpleTemplate {...props} />;
};
export const RangeYearsNavigationPanelWidgetSimple = {
  render: RangeYearsNavigationPanelWidgetSimpleStory,

  parameters: {
    docs: {
      source: {
        code: RangeYearsNavigationPanelWidgetSimpleTemplateRaw,
      },
    },
  },
  name: 'RangeYearsNavigationPanelWidgetSimple',
};

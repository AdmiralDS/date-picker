import type { Meta, StoryFn } from '@storybook/react';

import { DatesOfMonthWidget } from '#src/components/DatesOfMonthWidget';

import { DatesOfMonthWidgetSimpleTemplate } from './DatesOfMonthWidgetSimple.template.tsx';
import DatesOfMonthWidgetSimpleTemplateRaw from './DatesOfMonthWidgetSimple.template.tsx?raw';

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

const DatesOfMonthWidgetSimpleStory: StoryFn<typeof DatesOfMonthWidget> = (props) => {
  return <DatesOfMonthWidgetSimpleTemplate {...props} />;
};
export const DatesOfMonthWidgetSimple = {
  render: DatesOfMonthWidgetSimpleStory,

  parameters: {
    docs: {
      source: {
        code: DatesOfMonthWidgetSimpleTemplateRaw,
      },
    },
  },
  name: 'DatesOfMonthWidgetSimple',
};

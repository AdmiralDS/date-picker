import type { Meta, StoryFn } from '@storybook/react';

import { DatePickerCalendar } from '@admiral-ds/date-picker';
import { DatePickerCalendarSimpleTemplate } from './DatePickerCalendarSimple.template.tsx';
import DatePickerCalendarSimpleTemplateRaw from './DatePickerCalendarSimple.template.tsx?raw';
import { DatePickerCalendarWithHolidaysTemplate } from './DatePickerCalendarWithHolidays.template';
import DatePickerCalendarWithHolidaysTemplateRaw from './DatePickerCalendarWithHolidays.template.tsx?raw';
import { DatePickerCalendarChangeLocaleTemplate } from './DatePickerCalendarChangeLocale.template';
import DatePickerCalendarChangeLocaleTemplateRaw from './DatePickerCalendarChangeLocale.template.tsx?raw';
import { DatePickerCalendarCustomCellTemplate } from './DatePickerCalendarCustomCell.template';
import DatePickerCalendarCustomCellTemplateRaw from './DatePickerCalendarCustomCell.template.tsx?raw';
import { DatePickerCalendarBlockPanelArrowsTemplate } from '#src/stories/datePickerCalendarStories/DatePickerCalendarBlockPanelArrows.template.tsx';
import DatePickerCalendarBlockPanelArrowsTemplateRaw from './DatePickerCalendarBlockPanelArrows.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Date Picker/DatePickerCalendar',
  component: DatePickerCalendar,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407',
    },
  },
  argTypes: {
    dateValue: {
      control: { type: 'text' },
    },
    defaultDateValue: {
      control: { type: 'text' },
    },
    onDateValueChange: {
      control: false,
    },
    locale: {
      control: false,
    },
  },
} as Meta<typeof DatePickerCalendar>;

const DatePickerCalendarSimpleStory: StoryFn<typeof DatePickerCalendar> = (props) => {
  return <DatePickerCalendarSimpleTemplate {...props} />;
};
export const DatePickerCalendarSimple = {
  render: DatePickerCalendarSimpleStory,

  parameters: {
    docs: {
      source: {
        code: DatePickerCalendarSimpleTemplateRaw,
      },
    },
  },
  name: 'Выбор даты',
};

const DatePickerCalendarWithHolidaysStory: StoryFn<typeof DatePickerCalendar> = () => {
  return <DatePickerCalendarWithHolidaysTemplate />;
};
export const DatePickerCalendarWithHolidays = {
  render: DatePickerCalendarWithHolidaysStory,

  parameters: {
    docs: {
      source: {
        code: DatePickerCalendarWithHolidaysTemplateRaw,
      },
    },
  },
  name: 'Отображение выходных и заблокированных дат',
};

const DatePickerCalendarChangeLocaleStory: StoryFn<typeof DatePickerCalendar> = () => {
  return <DatePickerCalendarChangeLocaleTemplate />;
};
export const DatePickerCalendarChangeLocale = {
  render: DatePickerCalendarChangeLocaleStory,

  parameters: {
    docs: {
      source: {
        code: DatePickerCalendarChangeLocaleTemplateRaw,
      },
    },
  },
  name: 'Смена локализации',
};

const DatePickerCalendarCustomCellStory: StoryFn<typeof DatePickerCalendar> = () => {
  return <DatePickerCalendarCustomCellTemplate />;
};
export const DatePickerCalendarCustomCell = {
  render: DatePickerCalendarCustomCellStory,

  parameters: {
    docs: {
      source: {
        code: DatePickerCalendarCustomCellTemplateRaw,
      },
    },
  },
  name: 'Кастомизация отображения дат',
};

const DatePickerCalendarBlockPanelArrowsStory: StoryFn<typeof DatePickerCalendar> = () => {
  return <DatePickerCalendarBlockPanelArrowsTemplate />;
};
export const DatePickerCalendarBlockPanelArrows = {
  render: DatePickerCalendarBlockPanelArrowsStory,

  parameters: {
    docs: {
      source: {
        code: DatePickerCalendarBlockPanelArrowsTemplateRaw,
      },
    },
  },
  name: 'Блокировка стрелок панели',
};

import type { Meta, StoryFn } from '@storybook/react';

import { InputLine } from '@admiral-ds/date-picker';
import { DatePickerSimpleTemplate } from './DatePickerSimple.template.tsx';
import DatePickerSimpleTemplateRaw from './DatePickerSimple.template.tsx?raw';

// import { DatePickerCalendarWithHolidaysTemplate } from './DatePickerCalendarWithHolidays.template';
// import DatePickerCalendarWithHolidaysTemplateRaw from './DatePickerCalendarWithHolidays.template.tsx?raw';
// import { DatePickerCalendarChangeLocaleTemplate } from './DatePickerCalendarChangeLocale.template';
// import DatePickerCalendarChangeLocaleTemplateRaw from './DatePickerCalendarChangeLocale.template.tsx?raw';
// import { DatePickerCalendarCustomCellTemplate } from './DatePickerCalendarCustomCell.template';
// import DatePickerCalendarCustomCellTemplateRaw from './DatePickerCalendarCustomCell.template.tsx?raw';
// import { DatePickerCalendarBlockPanelArrowsTemplate } from '#src/stories/datePickerCalendarStories/DatePickerCalendarBlockPanelArrows.template.tsx';
// import DatePickerCalendarBlockPanelArrowsTemplateRaw from './DatePickerCalendarBlockPanelArrows.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Date Picker/DatePicker',
  component: InputLine,
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
} as Meta<typeof InputLine>;

const DatePickerCalendarSimpleStory: StoryFn<typeof InputLine> = (props) => {
  return <DatePickerSimpleTemplate {...props} />;
};

export const DatePickerCalendarSimple = {
  render: DatePickerCalendarSimpleStory,

  parameters: {
    docs: {
      source: {
        code: DatePickerSimpleTemplateRaw,
      },
    },
  },
  name: 'Выбор даты',
};

// const DatePickerCalendarWithHolidaysStory: StoryFn<typeof DatePickerCalendar> = (props) => {
//   return <DatePickerCalendarWithHolidaysTemplate {...props} />;
// };
// export const DatePickerCalendarWithHolidays = {
//   render: DatePickerCalendarWithHolidaysStory,

//   parameters: {
//     docs: {
//       source: {
//         code: DatePickerCalendarWithHolidaysTemplateRaw,
//       },
//     },
//   },
//   name: 'Отображение выходных и заблокированных дат',
// };

// const DatePickerCalendarChangeLocaleStory: StoryFn<typeof DatePickerCalendar> = (props) => {
//   return <DatePickerCalendarChangeLocaleTemplate {...props} />;
// };
// export const DatePickerCalendarChangeLocale = {
//   render: DatePickerCalendarChangeLocaleStory,

//   parameters: {
//     docs: {
//       source: {
//         code: DatePickerCalendarChangeLocaleTemplateRaw,
//       },
//     },
//   },
//   name: 'Смена локализации',
// };

// const DatePickerCalendarCustomCellStory: StoryFn<typeof DatePickerCalendar> = (props) => {
//   return <DatePickerCalendarCustomCellTemplate {...props} />;
// };
// export const DatePickerCalendarCustomCell = {
//   render: DatePickerCalendarCustomCellStory,

//   parameters: {
//     docs: {
//       source: {
//         code: DatePickerCalendarCustomCellTemplateRaw,
//       },
//     },
//   },
//   name: 'Кастомизация отображения дат',
// };

// const DatePickerCalendarBlockPanelArrowsStory: StoryFn<typeof DatePickerCalendar> = (props) => {
//   return <DatePickerCalendarBlockPanelArrowsTemplate {...props} />;
// };
// export const DatePickerCalendarBlockPanelArrows = {
//   render: DatePickerCalendarBlockPanelArrowsStory,

//   parameters: {
//     docs: {
//       source: {
//         code: DatePickerCalendarBlockPanelArrowsTemplateRaw,
//       },
//     },
//   },
//   name: 'Блокировка стрелок панели',
// };

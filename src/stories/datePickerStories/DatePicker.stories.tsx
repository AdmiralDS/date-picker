import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@admiral-ds/date-picker';
import { DatePickerSimpleTemplate } from './DatePickerSimple.template.tsx';
import DatePickerSimpleTemplateRaw from './DatePickerSimple.template.tsx?raw';

export default {
  title: 'Admiral-2.1/Date Picker/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
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
} as Meta<typeof DatePicker>;

//типизация стори обязательна для правильной генерации доки
type Story = StoryObj<typeof DatePicker>;

export const DatePickerCalendarSimple: Story = {
  render: DatePickerSimpleTemplate,
  parameters: {
    docs: {
      source: {
        code: DatePickerSimpleTemplateRaw,
      },
    },
  },
  name: 'Выбор даты',
  args: {
    inputProps: {
      placeholder: 'Введите дату',
      dataPlaceholder: 'дд.мм.гггг',
    },
  },
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

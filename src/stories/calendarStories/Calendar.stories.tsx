import type { Meta, StoryFn } from '@storybook/react';

import { ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { Calendar } from '@admiral-ds/date-picker';
import { SimpleCalendarTemplate } from './templates/SimpleCalendarTemplate';
import { CustomThemeLocaleCalendarTemplate } from './templates/CustomThemeLocaleCalendarTemplate';
import { UserLocaleCalendarTemplate } from './templates/UserLocaleCalendarTemplate';
import { CustomCalendarTemplate } from './templates/CustomCalendarTemplate';

// Imports of text sources
import SimpleCalendarTemplateRaw from './templates/SimpleCalendarTemplate?raw';
import CustomThemeLocaleCalendarTemplateRaw from './templates/CustomThemeLocaleCalendarTemplate?raw';
import UserLocaleCalendarTemplateRaw from './templates/UserLocaleCalendarTemplate?raw';
import CustomCalendarTemplateRaw from './templates/CustomCalendarTemplate?raw';

export default {
  title: 'Admiral-2.1/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407',
    },
  },
  argTypes: {
    viewMode: {
      options: ['DATES', 'MONTHS', 'YEARS'],
      control: { type: 'radio' },
    },
    pickerType: {
      options: ['DATE_MONTH_YEAR', 'MONTH_YEAR', 'YEAR'],
      control: { type: 'radio' },
    },
    rangePicker: {
      control: { type: 'boolean' },
    },
    doubleView: {
      control: { type: 'boolean' },
    },
    validator: {
      control: false,
    },
    selected: {
      control: false,
    },
    minDate: {
      control: false,
    },
    maxDate: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Calendar>;

const SimpleCalendarStory: StoryFn<typeof Calendar> = (props) => <SimpleCalendarTemplate {...props} />;

export const SimpleCalendar = SimpleCalendarStory.bind({});
SimpleCalendar.parameters = {
  docs: {
    source: {
      code: SimpleCalendarTemplateRaw,
    },
  },
};
SimpleCalendar.storyName = 'Simple.';

const CustomThemeLocaleCalendarStory: StoryFn<typeof Calendar> = (props) => (
  <CustomThemeLocaleCalendarTemplate {...props} />
);

export const CustomThemeLocaleCalendar = CustomThemeLocaleCalendarStory.bind({});
CustomThemeLocaleCalendar.parameters = {
  docs: {
    source: {
      code: CustomThemeLocaleCalendarTemplateRaw,
    },
    description: {
      story: `Пользователь может использовать любую локаль, не ограничиваясь русской или английской. Для 
      этого в объект theme.locales добавляется соответсвующий ключ, значением которого является объект типа Locale.
      Данный объект содержит в себе перечисление текстовых констант для компонентов библиотеки, а также содержит
      свойство firstDayOfWeek. Свойство firstDayOfWeek (значение св-ва - число от 0 до 6) обозначает, 
      с какого дня начинается неделя для данной локали, где 0 - это воскресенье. Также необходимо прописать импорт 
      необходимой локали из библиотеки Dayjs (import 'dayjs/locale/[необходимая локаль]', 
      https://day.js.org/docs/en/i18n/loading-into-nodejs).`,
    },
  },
};
CustomThemeLocaleCalendar.storyName = 'Пример с немецкой локалью, заданной через theme.locales.';

const UserLocaleCalendarStory: StoryFn<typeof Calendar> = (props) => <UserLocaleCalendarTemplate {...props} />;

export const UserLocaleCalendar = UserLocaleCalendarStory.bind({});
UserLocaleCalendar.parameters = {
  docs: {
    source: {
      code: UserLocaleCalendarTemplateRaw,
    },
    description: {
      story: `В некоторых случаях может быть необходимо изменить значения текстовых констант только для данного компонента. 
        Для этого есть специальный параметр locale - объект, в котором можно задать альтернативные значения текстовых 
        констант, отличные от тех, что заданы в theme.locales. Текстовая константа, заданная через пропс locale компонента 
        имеет больший приоритет, чем та же константа, заданная в theme.locale. Также необходимо прописать импорт необходимой 
        локали из библиотеки Dayjs  (import 'dayjs/locale/[необходимая локаль]', 
        https://day.js.org/docs/en/i18n/loading-into-nodejs).`,
    },
  },
};
UserLocaleCalendar.storyName = 'Пример с испанской локалью, заданной через props.locale.';

const CustomCalendarStory: StoryFn<typeof Calendar> = (props) => <CustomCalendarTemplate {...props} />;

export const CustomCalendar = CustomCalendarStory.bind({});
CustomCalendar.parameters = {
  docs: {
    source: {
      code: CustomCalendarTemplateRaw,
    },
  },
};
CustomCalendar.storyName = 'Custom.';

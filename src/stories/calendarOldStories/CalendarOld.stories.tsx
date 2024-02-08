import type { Meta, StoryFn } from '@storybook/react';

import { ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { CalendarOld } from '@admiral-ds/date-picker';
import { SimpleCalendarOldTemplate } from './templates/SimpleCalendarOldTemplate';
import { CustomThemeLocaleCalendarOldTemplate } from './templates/CustomThemeLocaleCalendarOldTemplate';
import { UserLocaleCalendarOldTemplate } from './templates/UserLocaleCalendarOldTemplate';
import { CustomCalendarOldTemplate } from './templates/CustomCalendarOldTemplate';

// Imports of text sources
import SimpleCalendarOldTemplateRaw from './templates/SimpleCalendarOldTemplate?raw';
import CustomThemeLocaleCalendarOldTemplateRaw from './templates/CustomThemeLocaleCalendarOldTemplate?raw';
import UserLocaleCalendarOldTemplateRaw from './templates/UserLocaleCalendarOldTemplate?raw';
import CustomCalendarOldTemplateRaw from './templates/CustomCalendarOldTemplate?raw';

export default {
  title: 'Admiral-2.1/CalendarOld',
  component: CalendarOld,
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
} as Meta<typeof CalendarOld>;

const SimpleCalendarOldStory: StoryFn<typeof CalendarOld> = (props) => <SimpleCalendarOldTemplate {...props} />;

export const SimpleCalendarOld = SimpleCalendarOldStory.bind({});
SimpleCalendarOld.parameters = {
  docs: {
    source: {
      code: SimpleCalendarOldTemplateRaw,
    },
  },
};
SimpleCalendarOld.storyName = 'Simple.';

const CustomThemeLocaleCalendarOldStory: StoryFn<typeof CalendarOld> = (props) => (
  <CustomThemeLocaleCalendarOldTemplate {...props} />
);

export const CustomThemeLocaleCalendarOld = CustomThemeLocaleCalendarOldStory.bind({});
CustomThemeLocaleCalendarOld.parameters = {
  docs: {
    source: {
      code: CustomThemeLocaleCalendarOldTemplateRaw,
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
CustomThemeLocaleCalendarOld.storyName = 'Пример с немецкой локалью, заданной через theme.locales.';

const UserLocaleCalendarOldStory: StoryFn<typeof CalendarOld> = (props) => <UserLocaleCalendarOldTemplate {...props} />;

export const UserLocaleCalendarOld = UserLocaleCalendarOldStory.bind({});
UserLocaleCalendarOld.parameters = {
  docs: {
    source: {
      code: UserLocaleCalendarOldTemplateRaw,
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
UserLocaleCalendarOld.storyName = 'Пример с испанской локалью, заданной через props.locale.';

const CustomCalendarOldStory: StoryFn<typeof CalendarOld> = (props) => <CustomCalendarOldTemplate {...props} />;

export const CustomCalendarOld = CustomCalendarOldStory.bind({});
CustomCalendarOld.parameters = {
  docs: {
    source: {
      code: CustomCalendarOldTemplateRaw,
    },
  },
};
CustomCalendarOld.storyName = 'Custom.';

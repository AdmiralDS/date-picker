import type { Meta, StoryObj } from '@storybook/react';
import { YearPicker } from '@admiral-ds/date-picker';
import { YearPickerSimpleTemplate } from './YearPickerSimple.template.tsx';
import YearPickerSimpleTemplateRaw from './YearPickerSimple.template.tsx?raw';
import { YearPickerChangeLocaleTemplate } from './YearPickerChangeLocale.template.tsx';
import YearPickerChangeLocaleTemplateRaw from './YearPickerChangeLocale.template.tsx?raw';
import { userEvent, within, expect } from '@storybook/test';
import dayjs from 'dayjs';

export default {
  title: 'Admiral-2.1/Date Picker/Picker/YearPicker',
  component: YearPicker,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
  argTypes: {},
} as Meta<typeof YearPicker>;

export const YearPickerSimple: StoryObj<typeof YearPicker> = {
  render: () => <YearPickerSimpleTemplate />,
  parameters: {
    docs: {
      source: {
        code: YearPickerSimpleTemplateRaw,
      },
    },
  },
  name: 'Выбор года',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('iconButton'));

    const containerCells = document.querySelector('[data-testid = containerCells]') as HTMLElement;
    const inputNode = document.querySelector('[data-testid = inputYear]') as HTMLElement;

    //Получение рандомного числа в указанном диапазоне
    const min = Math.ceil(2000);
    const max = Math.floor(2080);
    const randomYear = Math.floor(Math.random() * (max - min + 1)) + min;

    const length = containerCells.childNodes.length;
    const date = containerCells.firstElementChild?.getAttribute('data-value');
    const innerYear = dayjs(date).year();

    const findYear = async (find: number) => {
      if (randomYear >= find && randomYear <= find + length - 1) {
        for (const [i, elem] of containerCells.childNodes.entries()) {
          const value = Number((elem.childNodes[2] as HTMLElement).innerText);

          if (value === randomYear) await userEvent.click(canvas.getByTestId(`test-cell-${i}`));
        }
      } else {
        if (randomYear < find) {
          await userEvent.click(canvas.getByRole('prevButtonNavigationPanel'));
          await findYear(find - length);
        } else {
          await userEvent.click(canvas.getByRole('nextButtonNavigationPanel'));
          await findYear(find + length);
        }
      }
    };

    await findYear(innerYear);

    await expect(inputNode).toHaveFocus();
    await expect(inputNode).toHaveValue(`${randomYear}`);
  },
};

export const YearPickerChangeLocale: StoryObj<typeof YearPicker> = {
  render: () => <YearPickerChangeLocaleTemplate />,
  parameters: {
    docs: {
      source: {
        code: YearPickerChangeLocaleTemplateRaw,
      },
    },
  },
  name: 'Смена локализации',
};

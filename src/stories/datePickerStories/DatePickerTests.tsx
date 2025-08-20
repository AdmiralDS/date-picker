import { userEvent, within, expect } from '@storybook/test';
import dayjs from 'dayjs';

const getRandomFromRange = (min: number, max: number) => {
  const innerMin = Math.ceil(min);
  const innerMax = Math.floor(max);
  const random = Math.floor(Math.random() * (innerMax - innerMin + 1)) + innerMin;

  return random;
};

const findDate = async (canvasElement: HTMLElement, year: number, month: number, date: number) => {
  const canvas = within(canvasElement);

  const datesWidgetContainerNode = document.querySelector('[data-testid = datesWidgetContainer]') as HTMLElement;
  for (const item of Object.values(datesWidgetContainerNode.childNodes)) {
    const element = item as HTMLDivElement;
    const cellValue = element.getAttribute('data-value');

    if (cellValue === `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`) {
      await userEvent.click(canvas.getByTestId(element.getAttribute('data-testid') as string));
    }
  }
};

export const pickDateFirstTest = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);

  const year = new Date().getFullYear();
  const randomMonth = getRandomFromRange(0, 11);

  const datesInMonth = 32 - new Date(year, randomMonth, 32).getDate();
  const randomDate = getRandomFromRange(1, datesInMonth);

  await userEvent.click(canvas.getByRole('iconButton'));

  const middleDateInViewCells = document.querySelector(`[data-testid = date-cell-${42 / 2}]`) as HTMLElement;
  const currentIndexMonthNavigationPanel = new Date(
    String(middleDateInViewCells.getAttribute('data-value')),
  ).getMonth();

  const findMonth = async (find: number) => {
    if (randomMonth === find) {
      return;
    } else {
      if (randomMonth < find) {
        await userEvent.click(canvas.getByRole('prevButtonNavigationPanel'));
        await findMonth(find - 1);
      } else {
        await userEvent.click(canvas.getByRole('nextButtonNavigationPanel'));
        await findMonth(find + 1);
      }
    }
  };

  await findMonth(currentIndexMonthNavigationPanel);
  await findDate(canvasElement, year, randomMonth, randomDate);

  const inputNode = document.querySelector('[data-testid = input]') as HTMLElement;

  await expect(inputNode).toHaveFocus();
  await expect(inputNode).toHaveValue(
    `${String(randomDate).padStart(2, '0')}.${String(randomMonth + 1).padStart(2, '0')}.${year}`,
  );
};

export const pickDateSecondTest = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);

  const nowYear = new Date().getFullYear();
  const randomYear = getRandomFromRange(nowYear - 4, nowYear + 4);
  const randomMonth = getRandomFromRange(0, 11);

  const datesInMonth = 32 - new Date(randomYear, randomMonth, 32).getDate();
  const randomDate = getRandomFromRange(1, datesInMonth);

  await userEvent.click(canvas.getByRole('iconButton'));

  const yearButtonNavigationPanelNode = document.querySelector('[role = yearButtonNavigationPanel]') as HTMLElement;
  const currentYearNavigationPanel = Number(yearButtonNavigationPanelNode.innerText);

  const findYear = async (find: number) => {
    if (randomYear === find) {
      await userEvent.click(canvas.getByTestId(`month-cell-${randomMonth}`));
    } else {
      if (randomYear < find) {
        await userEvent.click(canvas.getByRole('prevButtonNavigationPanel'));
        await findYear(find - 1);
      } else {
        await userEvent.click(canvas.getByRole('nextButtonNavigationPanel'));
        await findYear(find + 1);
      }
    }
  };

  await userEvent.click(canvas.getByRole('monthButtonNavigationPanel'));
  await findYear(currentYearNavigationPanel);
  await findDate(canvasElement, randomYear, randomMonth, randomDate);

  const inputNode = document.querySelector('[data-testid = input]') as HTMLElement;

  await expect(inputNode).toHaveFocus();
  await expect(inputNode).toHaveValue(
    `${String(randomDate).padStart(2, '0')}.${String(randomMonth + 1).padStart(2, '0')}.${randomYear}`,
  );
};

export const pickDateThirdTest = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);

  const randomYear = getRandomFromRange(2000, 2080);
  const randomMonth = getRandomFromRange(0, 11);

  const datesInMonth = 32 - new Date(randomYear, randomMonth, 32).getDate();
  const randomDate = getRandomFromRange(1, datesInMonth);

  await userEvent.click(canvas.getByRole('iconButton'));

  await userEvent.click(canvas.getByRole('yearButtonNavigationPanel'));

  const containerYearCells = document.querySelector('[data-testid = containerYearCells]') as HTMLElement;
  const length = containerYearCells.childNodes.length;
  const date = containerYearCells.firstElementChild?.getAttribute('data-value');
  const firstRangeYear = dayjs(date).year();

  const findRangeYear = async (find: number) => {
    if (randomYear >= find && randomYear <= find + length - 1) {
      for (const [i, elem] of containerYearCells.childNodes.entries()) {
        const value = (elem as HTMLElement).getAttribute('data-value');
        const foundYear = dayjs(value).year();

        if (foundYear === randomYear) await userEvent.click(canvas.getByTestId(`year-cell-${i}`));
      }
    } else {
      if (randomYear < find) {
        await userEvent.click(canvas.getByRole('prevButtonNavigationPanel'));
        await findRangeYear(find - length);
      } else {
        await userEvent.click(canvas.getByRole('nextButtonNavigationPanel'));
        await findRangeYear(find + length);
      }
    }
  };

  await findRangeYear(firstRangeYear);

  await userEvent.click(canvas.getByTestId(`month-cell-${randomMonth}`));

  await findDate(canvasElement, randomYear, randomMonth, randomDate);

  const inputNode = document.querySelector('[data-testid = input]') as HTMLElement;

  await expect(inputNode).toHaveFocus();
  await expect(inputNode).toHaveValue(
    `${String(randomDate).padStart(2, '0')}.${String(randomMonth + 1).padStart(2, '0')}.${randomYear}`,
  );
};

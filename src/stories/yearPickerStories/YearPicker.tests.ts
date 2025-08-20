import { userEvent, within, expect } from '@storybook/test';
import dayjs from 'dayjs';

export const pickYearTest = async (canvasElement: HTMLElement, portalContainerId: string) => {
  const canvas = within(canvasElement);
  const portalElement = document.getElementById(portalContainerId);
  const portal = portalElement ? within(portalElement) : canvas;

  await userEvent.click(canvas.getByRole('iconButton'));

  const containerCells = document.querySelector('[data-testid = containerCells]') as HTMLElement;
  const inputNode = document.querySelector('[data-testid = inputYear]') as HTMLElement;

  //Получение рандомного числа в указанном диапазоне
  const min = Math.ceil(2000);
  const max = Math.floor(2080);
  const randomYear = Math.floor(Math.random() * (max - min + 1)) + min;

  const length = containerCells.childNodes.length;
  const date = containerCells.firstElementChild?.getAttribute('data-value');
  const firstRangeYear = dayjs(date).year();

  const findYear = async (find: number) => {
    if (randomYear >= find && randomYear <= find + length - 1) {
      for (const [i, elem] of containerCells.childNodes.entries()) {
        const value = (elem as HTMLElement).getAttribute('data-value');
        const foundYear = dayjs(value).year();

        if (foundYear === randomYear) await userEvent.click(portal.getByTestId(`test-cell-${i}`));
      }
    } else {
      if (randomYear < find) {
        await userEvent.click(portal.getByRole('prevButtonNavigationPanel'));
        await findYear(find - length);
      } else {
        await userEvent.click(portal.getByRole('nextButtonNavigationPanel'));
        await findYear(find + length);
      }
    }
  };

  await findYear(firstRangeYear);

  await expect(inputNode).toHaveFocus();
  await expect(inputNode).toHaveValue(`${randomYear}`);
};

import { userEvent, within, expect } from '@storybook/test';
import dayjs from 'dayjs';

export const pickMonthTest = async (canvasElement: HTMLElement, portalContainerId: string) => {
  const canvas = within(canvasElement);
  const portalElement = document.getElementById(portalContainerId);
  const portal = portalElement ? within(portalElement) : canvas;

  const getRandomFromRange = (min: number, max: number) => {
    const innerMin = Math.ceil(min);
    const innerMax = Math.floor(max);
    const random = Math.floor(Math.random() * (innerMax - innerMin + 1)) + innerMin;

    return random;
  };

  const randomYear = getRandomFromRange(2000, 2080);
  const randomMonth = getRandomFromRange(1, 12);

  await userEvent.click(canvas.getByRole('iconButton'));

  const yearButtonNavigationPanelNode = document.querySelector('[role = yearButtonNavigationPanel]') as HTMLElement;
  const currentYearNavigationPanel = Number(yearButtonNavigationPanelNode.innerText);

  //Если рандомный год находится в диапазоне +-4 от текущего года на навигационной панели, то поиск года происходит
  // в режиме отображения месяцев, иначе включается режим отображения диапазона лет и поиск происходит там
  if (currentYearNavigationPanel - 5 < randomYear && randomYear < currentYearNavigationPanel + 5) {
    const findYear = async (find: number) => {
      if (randomYear === find) {
        await userEvent.click(portal.getByTestId(`month-cell-${randomMonth - 1}`));
      } else {
        if (randomYear < find) {
          await userEvent.click(portal.getByRole('prevButtonNavigationPanel'));
          await findYear(find - 1);
        } else {
          await userEvent.click(portal.getByRole('nextButtonNavigationPanel'));
          await findYear(find + 1);
        }
      }
    };

    await findYear(currentYearNavigationPanel);
  } else {
    await userEvent.click(portal.getByRole('yearButtonNavigationPanel'));

    const containerYearCells = document.querySelector('[data-testid = containerYearCells]') as HTMLElement;
    const length = containerYearCells.childNodes.length;
    const date = containerYearCells.firstElementChild?.getAttribute('data-value');
    const firstRangeYear = dayjs(date).year();

    const findRangeYear = async (find: number) => {
      if (randomYear >= find && randomYear <= find + length - 1) {
        for (const [i, elem] of containerYearCells.childNodes.entries()) {
          const value = (elem as HTMLElement).getAttribute('data-value');
          const foundYear = dayjs(value).year();

          if (foundYear === randomYear) await userEvent.click(portal.getByTestId(`year-cell-${i}`));
        }
      } else {
        if (randomYear < find) {
          await userEvent.click(portal.getByRole('prevButtonNavigationPanel'));
          await findRangeYear(find - length);
        } else {
          await userEvent.click(portal.getByRole('nextButtonNavigationPanel'));
          await findRangeYear(find + length);
        }
      }
    };

    await findRangeYear(firstRangeYear);

    await userEvent.click(portal.getByTestId(`month-cell-${randomMonth - 1}`));
  }

  const inputNode = document.querySelector('[data-testid = input]') as HTMLElement;

  await expect(inputNode).toHaveFocus();
  await expect(inputNode).toHaveValue(`${String(randomMonth).padStart(2, '0')}.${randomYear}`);
};

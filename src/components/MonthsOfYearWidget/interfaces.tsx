import type { MouseEventHandler, JSX, HTMLAttributes } from 'react';
import type { Dayjs } from 'dayjs';
import type { RuleSet } from 'styled-components';

export interface CellStateProps {
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  cellMixin: RuleSet<object>;
}

export interface MonthsOfYearWidgetProps extends HTMLAttributes<HTMLDivElement> {
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  renderMonthCell: (dateString: string) => JSX.Element | (() => JSX.Element);
}

export interface MonthsProps {
  date: Dayjs;
  renderMonthCell: (dateString: string) => JSX.Element | (() => JSX.Element);
}

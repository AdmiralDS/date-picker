import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';
import type { RuleSet } from 'styled-components';
import { HTMLAttributes, JSX } from 'react';

export interface CellStateProps {
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  cellMixin: RuleSet<object>;
}

export interface YearsOfTwentyYearsWidgetProps extends HTMLAttributes<HTMLDivElement> {
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  renderYearCell: (dateString: string) => JSX.Element | (() => JSX.Element);
}

export interface YearsProps {
  date: Dayjs;
  renderYearCell: (dateString: string) => JSX.Element | (() => JSX.Element);
}

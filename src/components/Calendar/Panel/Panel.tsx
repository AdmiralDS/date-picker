import { useTheme } from 'styled-components';

import { LIGHT_THEME, type Theme } from '@admiral-ds/react-ui';

import { PanelWrapper } from './PanelWrapper';
import { YearMonthDatePanel } from './YearMonthDatePanel';
import { YearMonthPanel } from './YearMonthPanel';
import { YearPanel } from './YearPanel';
import type { PanelProps } from './interfaces';

export const Panel = ({
  viewMode,
  pickerType,
  date,
  locale = {},
  onNext,
  onPrevious,
  onMonthsViewShow,
  onMonthsViewHide,
  onYearsViewShow,
  onYearsViewHide,
}: PanelProps) => {
  const { localeName, localeText } = locale;
  const theme: Theme = useTheme() || LIGHT_THEME;
  const definedLocaleName = localeName || theme.currentLocale;
  const currentLocaleText =
    localeText ||
    (theme.locales[definedLocaleName] && theme.locales[definedLocaleName].calendar) ||
    theme.locales['en'].calendar;
  const monthsView = viewMode === 'MONTHS';
  const yearsView = viewMode === 'YEARS';

  return (
    <PanelWrapper monthsView={monthsView} yearsView={yearsView}>
      {pickerType === 'DATE_MONTH_YEAR' && (
        <YearMonthDatePanel
          viewMode={viewMode}
          date={date}
          localeText={currentLocaleText}
          onNext={onNext}
          onPrevious={onPrevious}
          onMonthsViewShow={onMonthsViewShow}
          onMonthsViewHide={onMonthsViewHide}
          onYearsViewShow={onYearsViewShow}
          onYearsViewHide={onYearsViewHide}
        />
      )}
      {pickerType === 'MONTH_YEAR' && (
        <YearMonthPanel
          viewMode={viewMode}
          date={date}
          localeText={currentLocaleText}
          onNext={onNext}
          onPrevious={onPrevious}
          onYearsViewShow={onYearsViewShow}
          onYearsViewHide={onYearsViewHide}
        />
      )}
      {pickerType === 'YEAR' && (
        <YearPanel
          viewMode={viewMode}
          date={date}
          localeText={currentLocaleText}
          onNext={onNext}
          onPrevious={onPrevious}
        />
      )}
    </PanelWrapper>
  );
};

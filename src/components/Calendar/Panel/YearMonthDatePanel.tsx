import { MonthWithTooltip, PanelDate, YearWithTooltip } from './PanelDate';
import { capitalizeFirstLetter, differenceMonths, differenceYears } from '../utils';
import type { YearMonthDatePanelProps } from './interfaces';
import { ButtonWithTooltip } from './PanelButton';

export const YearMonthDatePanel = ({
  viewMode,
  date,
  minDate,
  maxDate,
  localeText,
  onNext,
  onPrevious,
  onMonthsViewShow,
  onMonthsViewHide,
  onYearsViewShow,
  onYearsViewHide,
}: YearMonthDatePanelProps) => {
  const monthsView = viewMode === 'MONTHS';
  const yearsView = viewMode === 'YEARS';

  const previousMonthDisabled = !!minDate && differenceMonths(minDate, date.subtract(1, 'month')) > 0;
  const nextMonthDisabled = !!maxDate && differenceMonths(date.add(1, 'month'), maxDate) > 0;
  const previousYearDisabled = !!minDate && differenceYears(minDate, date.subtract(1, 'year')) > 0;
  const nextYearDisabled = !!maxDate && differenceYears(date.add(1, 'year'), maxDate) > 0;
  const previousDisabled = yearsView ? previousYearDisabled : previousMonthDisabled;
  const nextDisabled = yearsView ? nextYearDisabled : nextMonthDisabled;

  const monthMouseDownHandle = (event: any) => {
    event.preventDefault();
    monthsView ? onMonthsViewHide(event) : onMonthsViewShow(event);
  };
  const yearMouseDownHandle = (event: any) => {
    event.preventDefault();
    yearsView ? onYearsViewHide(event) : onYearsViewShow(event);
  };
  return (
    <>
      {!monthsView && !previousDisabled && (
        <ButtonWithTooltip
          disabled={false}
          type={'left'}
          onMouseDown={onPrevious}
          renderContent={() => (yearsView ? localeText.backwardText : localeText.previousMonthText)}
        />
      )}
      <PanelDate>
        <MonthWithTooltip
          renderContent={() => (monthsView ? localeText.returnText : localeText.selectMonthText)}
          view={monthsView}
          onMouseDown={monthMouseDownHandle}
        >
          {capitalizeFirstLetter(date.format('MMMM'))}
        </MonthWithTooltip>
        <YearWithTooltip
          renderContent={() => (yearsView ? localeText.returnText : localeText.selectYearText)}
          view={yearsView}
          onMouseDown={yearMouseDownHandle}
        >
          {date.format('YYYY')}
        </YearWithTooltip>
      </PanelDate>
      {!monthsView && !nextDisabled && (
        <ButtonWithTooltip
          disabled={false}
          type={'right'}
          onMouseDown={onNext}
          renderContent={() => (yearsView ? localeText.forwardText : localeText.nextMonthText)}
        />
      )}
    </>
  );
};

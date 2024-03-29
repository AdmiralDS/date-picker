import{u as y,j as o}from"./styled-components.browser.esm-7zUEPxZV.js";import{D as _,a as h}from"./index-LrOJhR-V.js";import{r as p}from"./index-DogsOklH.js";import{t as N,g as m,c as E,M as I,r as j,a as D,b as L}from"./index-GEu7UUTq.js";const H=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding: 10px;
  width: ${_}px;
  border: 1px ${a=>a.theme.color["Neutral/Neutral 90"]} solid;
`,F=y.div`
  margin-bottom: 10px;
  ${N["Subtitle/Subtitle 2"]}
`,i=({date:a,locale:n=j,...v})=>{const r=(n==null?void 0:n.localeName)||"ru",d=a||m(r),[C,b]=p.useState(m(r).add(1,"day")),x=t=>{const e=t.target.dataset;if(e.cellType!=="dateCell")return;const l=D(e.value).locale(r);e.disabled==="true"||e.hiddenCell==="true"||b(l)},[u,S]=p.useState(),c=t=>{S(t)},T=t=>{const e=t.target.dataset;if(e.cellType!=="dateCell")return;const l=D(e.value).locale(r);console.log(`hiddenCell-${e.hiddenCell}`),!(e.disabled==="true"||e.hiddenCell==="true")&&!l.isSame(u)&&c(l)},O=t=>{c(void 0)},W=t=>({cellMixin:L});return o.jsxs(H,{children:[o.jsxs(F,{children:["Дата: ",E(d.format("D MMMM YYYY"))]}),o.jsx(h,{...v,date:d,selected:C,active:u,locale:n,cell:I,onMouseLeave:O,onMouseOver:T,onClick:x,dayNamesProps:{dayNameCellState:W}})]})};try{i.displayName="DatesOfMonthWidgetSimpleTemplate",i.__docgenInfo={description:"",displayName:"DatesOfMonthWidgetSimpleTemplate",props:{dayNamesProps:{defaultValue:null,description:"",name:"dayNamesProps",required:!0,type:{name:"DayNameCellProps"}},date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
  localeName: 'ru',
  localeText: {
    backwardText: 'Назад',
    forwardText: 'Вперед',
    nextMonthText: 'Следующий месяц',
    previousMonthText: 'Предыдущий месяц',
    returnText: 'Вернуться',
    selectYearText: 'Выбор года',
    selectMonthText: 'Выбор месяца',
  },
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"boolean"}}}}}catch{}const Y=`import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';

import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, getCurrentDate } from '#src/components/utils';
import { DatesOfMonthWidget } from '#src/components/DatesOfMonthWidget';
import { DATES_OF_MONTH_WIDGET_WIDTH } from '#src/components/DatesOfMonthWidget/constants';
import type { DatesOfMonthWidgetProps, CellStateProps } from '#src/components/DatesOfMonthWidget/interfaces';
import { baseDayNameCellMixin } from '#src/components/DefaultCell/mixins.tsx';
import { MemoDefaultDateCell } from '#src/components/DefaultCell';
import { ruLocale } from '#src/components/calendarConstants.ts';

const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding: 10px;
  width: \${DATES_OF_MONTH_WIDGET_WIDTH}px;
  border: 1px \${(p) => p.theme.color['Neutral/Neutral 90']} solid;
\`;
const MonthYear = styled.div\`
  margin-bottom: 10px;
  \${typography['Subtitle/Subtitle 2']}
\`;

export const DatesOfMonthWidgetSimpleTemplate = ({ date, locale = ruLocale, ...props }: DatesOfMonthWidgetProps) => {
  const localeInner = locale?.localeName || 'ru';
  const dateInner = date || getCurrentDate(localeInner);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(getCurrentDate(localeInner).add(1, 'day'));

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'dateCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(localeInner);
    const disabled = targetDataAttributes['disabled'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled) {
      setSelectedDate(date);
    }
  };

  const [activeDateInner, setActiveDateInner] = useState<Dayjs>();

  const handleActiveDateChange = (date?: Dayjs) => {
    setActiveDateInner(date);
  };

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'dateCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(localeInner);
    console.log(\`hiddenCell-\${targetDataAttributes['hiddenCell']}\`);
    const disabled = targetDataAttributes['disabled'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled && !date.isSame(activeDateInner)) {
      handleActiveDateChange(date);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (_) => {
    handleActiveDateChange(undefined);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getDayNameCellState = (_: number): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(dateInner.format('D MMMM YYYY'))}</MonthYear>
      <DatesOfMonthWidget
        {...props}
        date={dateInner}
        selected={selectedDate}
        active={activeDateInner}
        locale={locale}
        cell={MemoDefaultDateCell}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        onClick={handleDateClick}
        dayNamesProps={{ dayNameCellState: getDayNameCellState }}
      />
    </Wrapper>
  );
};
`,k={title:"Admiral-2.1/Widgets/DatesOfMonth",component:h,parameters:{docs:{source:{code:null}}},argTypes:{}},P=a=>o.jsx(i,{...a}),s={render:P,parameters:{docs:{source:{code:Y}}},name:"DatesOfMonthWidgetSimple"};var f,g,M;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: DatesOfMonthWidgetSimpleStory,
  parameters: {
    docs: {
      source: {
        code: DatesOfMonthWidgetSimpleTemplateRaw
      }
    }
  },
  name: 'DatesOfMonthWidgetSimple'
}`,...(M=(g=s.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};const R=["DatesOfMonthWidgetSimple"];export{s as DatesOfMonthWidgetSimple,R as __namedExportsOrder,k as default};

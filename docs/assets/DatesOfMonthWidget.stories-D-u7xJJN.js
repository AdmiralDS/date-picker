import{p as y,t as A,j as o}from"./typography.es-CjQrIQMn.js";import{D as N,a as h}from"./index-BOqrSKSN.js";import{r as p}from"./index-CDs2tPxN.js";import{g as m,c as I,M as E,r as j,d as D,b as L}from"./index-D7UWWCrG.js";import"./tslib.es6-CRos2fHm.js";const H=y.div.withConfig({displayName:"DatesOfMonthWidgetSimple.template__Wrapper",componentId:"sc-20acd82e-0"})(["display:flex;flex-direction:column;align-items:center;align-content:space-between;padding:10px;width:","px;border:1px "," solid;"],N,a=>a.theme.color["Neutral/Neutral 90"]),Y=y.div.withConfig({displayName:"DatesOfMonthWidgetSimple.template__MonthYear",componentId:"sc-20acd82e-1"})(["margin-bottom:10px;",""],A["Subtitle/Subtitle 2"]),i=({date:a,locale:n=j,...C})=>{const l=(n==null?void 0:n.localeName)||"ru",d=a||m(l),[v,b]=p.useState(m(l).add(1,"day")),x=t=>{const e=t.target.dataset;if(e.cellType!=="dateCell")return;const r=D(e.value).locale(l);e.disabled==="true"||e.hiddenCell==="true"||b(r)},[u,S]=p.useState(),c=t=>{S(t)},O=t=>{const e=t.target.dataset;if(e.cellType!=="dateCell")return;const r=D(e.value).locale(l);console.log(`hiddenCell-${e.hiddenCell}`),!(e.disabled==="true"||e.hiddenCell==="true")&&!r.isSame(u)&&c(r)},T=t=>{c(void 0)},W=t=>({cellMixin:L});return o.jsxs(H,{children:[o.jsxs(Y,{children:["Дата: ",I(d.format("D MMMM YYYY"))]}),o.jsx(h,{...C,date:d,selected:v,active:u,locale:n,cell:E,onMouseLeave:T,onMouseOver:O,onClick:x,dayNamesProps:{dayNameCellState:W}})]})};try{i.displayName="DatesOfMonthWidgetSimpleTemplate",i.__docgenInfo={description:"",displayName:"DatesOfMonthWidgetSimpleTemplate",props:{dayNamesProps:{defaultValue:null,description:"",name:"dayNamesProps",required:!0,type:{name:"DayNameCellProps"}},date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"boolean"}}}}}catch{}const F=`import type { MouseEventHandler } from 'react';
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
`,$={title:"Admiral-2.1/Widgets/DatesOfMonth",component:h,parameters:{docs:{source:{code:null}}},argTypes:{}},P=a=>o.jsx(i,{...a}),s={render:P,parameters:{docs:{source:{code:F}}},name:"DatesOfMonthWidgetSimple"};var f,g,M;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: DatesOfMonthWidgetSimpleStory,
  parameters: {
    docs: {
      source: {
        code: DatesOfMonthWidgetSimpleTemplateRaw
      }
    }
  },
  name: 'DatesOfMonthWidgetSimple'
}`,...(M=(g=s.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};const B=["DatesOfMonthWidgetSimple"];export{s as DatesOfMonthWidgetSimple,B as __namedExportsOrder,$ as default};

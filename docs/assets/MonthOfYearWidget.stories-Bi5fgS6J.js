import{p as g,j as o}from"./styled-components.browser.esm-DrTmyIAt.js";import{M as T,a as M}from"./index-D5nqERbw.js";import{r as p}from"./index-CDs2tPxN.js";import{d as l}from"./ru-lGojcqRe.js";import{g as x,l as _}from"./utils-B_ZJ_ERX.js";import{b as A,r as j}from"./index-COKZno0_.js";import{t as E}from"./typography.es-DSm7pTxC.js";import"./tslib.es6-CRos2fHm.js";import"./mixins-BYFRP_bt.js";const I=g.div.withConfig({displayName:"MonthsOfYearWidgetSimple.template__Wrapper",componentId:"sc-6e6b54f7-0"})(["display:flex;flex-direction:column;align-items:center;align-content:space-between;padding:10px;width:","px;border:1px "," solid;"],T,n=>n.theme.color["Neutral/Neutral 90"]),N=g.div.withConfig({displayName:"MonthsOfYearWidgetSimple.template__MonthYear",componentId:"sc-6e6b54f7-1"})(["margin-bottom:10px;",""],E["Subtitle/Subtitle 2"]),i=({date:n,locale:e=j,...D})=>{const y=(e==null?void 0:e.localeName)||"ru",d=n||x(e==null?void 0:e.localeName),[v,b]=p.useState(l().locale(y).add(1,"day")),Y=a=>{const t=a.target.dataset;if(t.cellType!=="monthCell")return;const r=l(t.value).locale((e==null?void 0:e.localeName)||"ru");t.disabled==="true"||t.hiddenCell==="true"||b(r)},[u,O]=p.useState(),c=a=>{O(a)},W=a=>{const t=a.target.dataset;if(t.cellType!=="monthCell")return;const r=l(t.value).locale((e==null?void 0:e.localeName)||"ru");!(t.disabled==="true"||t.hiddenCell==="true")&&!r.isSame(u)&&c(r)},C=a=>{c(void 0)};return o.jsxs(I,{children:[o.jsxs(N,{children:["Дата: ",_(d.format("D MMMM YYYY"))]}),o.jsx(M,{...D,date:d,selected:v,active:u,locale:e,cell:A,onMouseOver:W,onClick:Y,onMouseLeave:C})]})};try{i.displayName="MonthsOfYearWidgetSimpleTemplate",i.__docgenInfo={description:"",displayName:"MonthsOfYearWidgetSimpleTemplate",props:{date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"boolean"}}}}}catch{}const L=`import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, getCurrentDate } from '#src/components/utils';
import { MONTHS_OF_YEAR_WIDGET_WIDTH } from '#src/components/MonthsOfYearWidget/constants';
import type { MonthsOfYearWidgetProps } from '#src/components/MonthsOfYearWidget';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';
import { MemoDefaultMonthCell } from '#src/components/DefaultCell';
import { ruLocale } from '#src/components/calendarConstants.ts';

const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding: 10px;
  width: \${MONTHS_OF_YEAR_WIDGET_WIDTH}px;
  border: 1px \${(p) => p.theme.color['Neutral/Neutral 90']} solid;
\`;
const MonthYear = styled.div\`
  margin-bottom: 10px;
  \${typography['Subtitle/Subtitle 2']}
\`;

export const MonthsOfYearWidgetSimpleTemplate = ({ date, locale = ruLocale, ...props }: MonthsOfYearWidgetProps) => {
  const localeInner = locale?.localeName || 'ru';
  const dateInner = date || getCurrentDate(locale?.localeName);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs().locale(localeInner).add(1, 'day'));

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'monthCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName || 'ru');
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
    if (targetDataAttributes['cellType'] !== 'monthCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName || 'ru');
    const disabled = targetDataAttributes['disabled'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled && !date.isSame(activeDateInner)) {
      handleActiveDateChange(date);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (_) => {
    handleActiveDateChange(undefined);
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(dateInner.format('D MMMM YYYY'))}</MonthYear>
      <MonthsOfYearWidget
        {...props}
        date={dateInner}
        selected={selectedDate}
        active={activeDateInner}
        locale={locale}
        cell={MemoDefaultMonthCell}
        onMouseOver={handleMouseOver}
        onClick={handleDateClick}
        onMouseLeave={handleMouseLeave}
      />
    </Wrapper>
  );
};
`,G={title:"Admiral-2.1/Widgets/MonthsOfYear",component:M,parameters:{docs:{source:{code:null}}},argTypes:{}},H=n=>o.jsx(i,{...n}),s={render:H,parameters:{docs:{source:{code:L}}},name:"MonthsOfYearWidgetSimple"};var m,f,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: MonthsOfYearWidgetSimpleStory,
  parameters: {
    docs: {
      source: {
        code: MonthsOfYearWidgetSimpleTemplateRaw
      }
    }
  },
  name: 'MonthsOfYearWidgetSimple'
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const $=["MonthsOfYearWidgetSimple"];export{s as MonthsOfYearWidgetSimple,$ as __namedExportsOrder,G as default};

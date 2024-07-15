import{p as g,t as T,j as l}from"./typography.es-DJ4WRfsu.js";import{a as x,M}from"./index-bQnesnJw.js";import{r as p}from"./index-RYns6xqu.js";import{g as _,d as o,c as A,e as j,r as E}from"./index-BdAXGuOE.js";const I=g.div.withConfig({displayName:"MonthsOfYearWidgetSimpletemplate__Wrapper",componentId:"sc-1063lk2-0"})(["display:flex;flex-direction:column;align-items:center;align-content:space-between;padding:10px;width:","px;border:1px "," solid;"],x,a=>a.theme.color["Neutral/Neutral 90"]),N=g.div.withConfig({displayName:"MonthsOfYearWidgetSimpletemplate__MonthYear",componentId:"sc-1063lk2-1"})(["margin-bottom:10px;",""],T["Subtitle/Subtitle 2"]),i=({date:a,locale:e=E,...D})=>{const y=(e==null?void 0:e.localeName)||"ru",d=a||_(e==null?void 0:e.localeName),[v,b]=p.useState(o().locale(y).add(1,"day")),Y=n=>{const t=n.target.dataset;if(t.cellType!=="monthCell")return;const r=o(t.value).locale((e==null?void 0:e.localeName)||"ru");t.disabled==="true"||t.hiddenCell==="true"||b(r)},[u,O]=p.useState(),c=n=>{O(n)},W=n=>{const t=n.target.dataset;if(t.cellType!=="monthCell")return;const r=o(t.value).locale((e==null?void 0:e.localeName)||"ru");!(t.disabled==="true"||t.hiddenCell==="true")&&!r.isSame(u)&&c(r)},C=n=>{c(void 0)};return l.jsxs(I,{children:[l.jsxs(N,{children:["Дата: ",A(d.format("D MMMM YYYY"))]}),l.jsx(M,{...D,date:d,selected:v,active:u,locale:e,cell:j,onMouseOver:W,onClick:Y,onMouseLeave:C})]})};try{i.displayName="MonthsOfYearWidgetSimpleTemplate",i.__docgenInfo={description:"",displayName:"MonthsOfYearWidgetSimpleTemplate",props:{date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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

import { capitalizeFirstLetter, getCurrentDate } from '#lib/utils';
import { MONTHS_OF_YEAR_WIDGET_WIDTH } from '#lib/MonthsOfYearWidget/constants';
import type { MonthsOfYearWidgetProps } from '#lib/MonthsOfYearWidget';
import { MonthsOfYearWidget } from '#lib/MonthsOfYearWidget';
import { MemoDefaultMonthCell } from '#lib/DefaultCell';
import { ruLocale } from '#lib/calendarConstants.ts';

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
`,R={title:"Admiral-2.1/Widgets/MonthsOfYear",component:M,parameters:{docs:{source:{code:null}}},argTypes:{}},H=a=>l.jsx(i,{...a}),s={render:H,parameters:{docs:{source:{code:L}}},name:"MonthsOfYearWidgetSimple"};var m,f,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: MonthsOfYearWidgetSimpleStory,
  parameters: {
    docs: {
      source: {
        code: MonthsOfYearWidgetSimpleTemplateRaw
      }
    }
  },
  name: 'MonthsOfYearWidgetSimple'
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const V=["MonthsOfYearWidgetSimple"];export{s as MonthsOfYearWidgetSimple,V as __namedExportsOrder,R as default};

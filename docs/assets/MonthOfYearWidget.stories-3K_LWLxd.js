import{u as h,j as o}from"./styled-components.browser.esm-7zUEPxZV.js";import{M as S,a as M}from"./index-CppLjZWP.js";import{r as p}from"./index-DogsOklH.js";import{t as W,g as A,a as l,c as _,e as j,r as E}from"./index-GEu7UUTq.js";const I=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding: 10px;
  width: ${S}px;
  border: 1px ${n=>n.theme.color["Neutral/Neutral 90"]} solid;
`,N=h.div`
  margin-bottom: 10px;
  ${W["Subtitle/Subtitle 2"]}
`,u=({date:n,locale:e=E,...g})=>{const y=(e==null?void 0:e.localeName)||"ru",i=n||A(e==null?void 0:e.localeName),[v,b]=p.useState(l().locale(y).add(1,"day")),Y=a=>{const t=a.target.dataset;if(t.cellType!=="monthCell")return;const r=l(t.value).locale((e==null?void 0:e.localeName)||"ru");t.disabled==="true"||t.hiddenCell==="true"||b(r)},[d,O]=p.useState(),c=a=>{O(a)},T=a=>{const t=a.target.dataset;if(t.cellType!=="monthCell")return;const r=l(t.value).locale((e==null?void 0:e.localeName)||"ru");!(t.disabled==="true"||t.hiddenCell==="true")&&!r.isSame(d)&&c(r)},x=a=>{c(void 0)};return o.jsxs(I,{children:[o.jsxs(N,{children:["Дата: ",_(i.format("D MMMM YYYY"))]}),o.jsx(M,{...g,date:i,selected:v,active:d,locale:e,cell:j,onMouseOver:T,onClick:Y,onMouseLeave:x})]})};try{u.displayName="MonthsOfYearWidgetSimpleTemplate",u.__docgenInfo={description:"",displayName:"MonthsOfYearWidgetSimpleTemplate",props:{date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
`,V={title:"Admiral-2.1/Widgets/MonthsOfYear",component:M,parameters:{docs:{source:{code:null}}},argTypes:{}},H=n=>o.jsx(u,{...n}),s={render:H,parameters:{docs:{source:{code:L}}},name:"MonthsOfYearWidgetSimple"};var m,f,D;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: MonthsOfYearWidgetSimpleStory,
  parameters: {
    docs: {
      source: {
        code: MonthsOfYearWidgetSimpleTemplateRaw
      }
    }
  },
  name: 'MonthsOfYearWidgetSimple'
}`,...(D=(f=s.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};const k=["MonthsOfYearWidgetSimple"];export{s as MonthsOfYearWidgetSimple,k as __namedExportsOrder,V as default};

import{p as Y,t as S,j as l}from"./typography.es-DJ4WRfsu.js";import{b as O,a as g}from"./index-CMIGvJsC.js";import{r as p}from"./index-RYns6xqu.js";import{g as x,d as i,c as A,f as _,r as E}from"./index-DnXc0ZDD.js";const j=Y.div.withConfig({displayName:"YearsOfTwentyYearsWidgetSimple.template__Wrapper",componentId:"sc-ac27e2e-0"})(["display:flex;flex-direction:column;align-items:center;align-content:space-between;padding:10px;width:","px;border:1px "," solid;"],O,a=>a.theme.color["Neutral/Neutral 90"]),I=Y.div.withConfig({displayName:"YearsOfTwentyYearsWidgetSimple.template__MonthYear",componentId:"sc-ac27e2e-1"})(["margin-bottom:10px;",""],S["Subtitle/Subtitle 2"]),d=({date:a,locale:e=E,...D})=>{const T=(e==null?void 0:e.localeName)||"ru",u=a||x(e==null?void 0:e.localeName),[v,b]=p.useState(i().locale(T).add(1,"year")),[o,h]=p.useState(),c=n=>{h(n)},M=n=>{const t=n.target.dataset;if(t.cellType!=="yearCell")return;const r=i(t.value).locale((e==null?void 0:e.localeName)||"ru");!(t.disabled==="true"||t.hiddenCell==="true")&&!r.isSame(o)&&c(r)},W=n=>{c(void 0)},w=n=>{const t=n.target.dataset;if(t.cellType!=="yearCell")return;const r=i(t.value).locale((e==null?void 0:e.localeName)||"ru");t.disabled==="true"||t.hiddenCell==="true"||b(r)};return l.jsxs(j,{children:[l.jsxs(I,{children:["Дата: ",A(u.format("D MMMM YYYY"))]}),l.jsx(g,{...D,date:u,selected:v,active:o,locale:e,cell:_,onMouseLeave:W,onMouseOver:M,onClick:w})]})};try{d.displayName="YearsOfTwentyYearsWidgetSimpleTemplate",d.__docgenInfo={description:"",displayName:"YearsOfTwentyYearsWidgetSimpleTemplate",props:{date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"boolean"}}}}}catch{}const L=`import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { typography } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, getCurrentDate } from '#lib/utils';
import { YEARS_OF_YEAR_WIDGET_WIDTH } from '#lib/YearsOfTwentyYearsWidget/constants';
import type { YearsOfTwentyYearsWidgetProps } from '#lib/YearsOfTwentyYearsWidget';
import { YearsOfTwentyYearsWidget } from '#lib/YearsOfTwentyYearsWidget';
import { MemoDefaultYearCell } from '#lib/DefaultCell';
import { ruLocale } from '#lib/calendarConstants.ts';

const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding: 10px;
  width: \${YEARS_OF_YEAR_WIDGET_WIDTH}px;
  border: 1px \${(p) => p.theme.color['Neutral/Neutral 90']} solid;
\`;
const MonthYear = styled.div\`
  margin-bottom: 10px;
  \${typography['Subtitle/Subtitle 2']}
\`;

export const YearsOfTwentyYearsWidgetSimpleTemplate = ({
  date,
  locale = ruLocale,
  ...props
}: YearsOfTwentyYearsWidgetProps) => {
  const localeInner = locale?.localeName || 'ru';
  const dateInner = date || getCurrentDate(locale?.localeName);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs().locale(localeInner).add(1, 'year'));

  const [activeDateInner, setActiveDateInner] = useState<Dayjs>();

  const handleActiveDateChange = (date?: Dayjs) => {
    setActiveDateInner(date);
  };

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'yearCell') {
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

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'yearCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName || 'ru');
    const disabled = targetDataAttributes['disabled'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled) {
      setSelectedDate(date);
    }
  };

  return (
    <Wrapper>
      <MonthYear>Дата: {capitalizeFirstLetter(dateInner.format('D MMMM YYYY'))}</MonthYear>
      <YearsOfTwentyYearsWidget
        {...props}
        date={dateInner}
        selected={selectedDate}
        active={activeDateInner}
        locale={locale}
        cell={MemoDefaultYearCell}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        onClick={handleDateClick}
      />
    </Wrapper>
  );
};
`,V={title:"Admiral-2.1/Widgets/YearsOfTwentyYears",component:g,parameters:{docs:{source:{code:null}}},argTypes:{}},N=a=>l.jsx(d,{...a}),s={render:N,parameters:{docs:{source:{code:L}}},name:"YearsOfTwentyYearsWidgetSimple"};var m,y,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: YearsOfTwentyYearsWidgetSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearsOfTwentyYearsWidgetSimpleTemplateRaw
      }
    }
  },
  name: 'YearsOfTwentyYearsWidgetSimple'
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const k=["YearsOfTwentyYearsWidgetSimple"];export{s as YearsOfTwentyYearsWidgetSimple,k as __namedExportsOrder,V as default};

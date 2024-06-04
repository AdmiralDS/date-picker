import{p as Y,t as S,j as l}from"./typography.es-CjQrIQMn.js";import{Y as g}from"./index-Cstbj4N4.js";import{r as p}from"./index-CDs2tPxN.js";import{d as o}from"./ru-lGojcqRe.js";import{g as O,l as x}from"./utils-B_ZJ_ERX.js";import{c as A}from"./constants-C6vCpwtL.js";import{e as _,r as E}from"./index-Bb5GWzc-.js";import"./tslib.es6-CRos2fHm.js";import"./mixins-0kl9vljp.js";const j=Y.div.withConfig({displayName:"YearsOfTwentyYearsWidgetSimple.template__Wrapper",componentId:"sc-7443e259-0"})(["display:flex;flex-direction:column;align-items:center;align-content:space-between;padding:10px;width:","px;border:1px "," solid;"],A,a=>a.theme.color["Neutral/Neutral 90"]),I=Y.div.withConfig({displayName:"YearsOfTwentyYearsWidgetSimple.template__MonthYear",componentId:"sc-7443e259-1"})(["margin-bottom:10px;",""],S["Subtitle/Subtitle 2"]),i=({date:a,locale:e=E,...D})=>{const T=(e==null?void 0:e.localeName)||"ru",d=a||O(e==null?void 0:e.localeName),[v,h]=p.useState(o().locale(T).add(1,"year")),[u,b]=p.useState(),c=n=>{b(n)},M=n=>{const t=n.target.dataset;if(t.cellType!=="yearCell")return;const r=o(t.value).locale((e==null?void 0:e.localeName)||"ru");!(t.disabled==="true"||t.hiddenCell==="true")&&!r.isSame(u)&&c(r)},W=n=>{c(void 0)},w=n=>{const t=n.target.dataset;if(t.cellType!=="yearCell")return;const r=o(t.value).locale((e==null?void 0:e.localeName)||"ru");t.disabled==="true"||t.hiddenCell==="true"||h(r)};return l.jsxs(j,{children:[l.jsxs(I,{children:["Дата: ",x(d.format("D MMMM YYYY"))]}),l.jsx(g,{...D,date:d,selected:v,active:u,locale:e,cell:_,onMouseLeave:W,onMouseOver:M,onClick:w})]})};try{i.displayName="YearsOfTwentyYearsWidgetSimpleTemplate",i.__docgenInfo={description:"",displayName:"YearsOfTwentyYearsWidgetSimpleTemplate",props:{date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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

import { capitalizeFirstLetter, getCurrentDate } from '#src/components/utils';
import { YEARS_OF_YEAR_WIDGET_WIDTH } from '#src/components/YearsOfTwentyYearsWidget/constants';
import type { YearsOfTwentyYearsWidgetProps } from '#src/components/YearsOfTwentyYearsWidget';
import { YearsOfTwentyYearsWidget } from '#src/components/YearsOfTwentyYearsWidget';
import { MemoDefaultYearCell } from '#src/components/DefaultCell';
import { ruLocale } from '#src/components/calendarConstants.ts';

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
`,G={title:"Admiral-2.1/Widgets/YearsOfTwentyYears",component:g,parameters:{docs:{source:{code:null}}},argTypes:{}},N=a=>l.jsx(i,{...a}),s={render:N,parameters:{docs:{source:{code:L}}},name:"YearsOfTwentyYearsWidgetSimple"};var m,y,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: YearsOfTwentyYearsWidgetSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearsOfTwentyYearsWidgetSimpleTemplateRaw
      }
    }
  },
  name: 'YearsOfTwentyYearsWidgetSimple'
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const $=["YearsOfTwentyYearsWidgetSimple"];export{s as YearsOfTwentyYearsWidgetSimple,$ as __namedExportsOrder,G as default};

import{u as D,j as l}from"./styled-components.browser.esm-7zUEPxZV.js";import{b as W,a as Y}from"./index-iEjp33-N.js";import{r as p}from"./index-DogsOklH.js";import{t as O,g as w,a as u,c as A,h as E,r as _}from"./index-GEu7UUTq.js";const j=D.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding: 10px;
  width: ${W}px;
  border: 1px ${a=>a.theme.color["Neutral/Neutral 90"]} solid;
`,I=D.div`
  margin-bottom: 10px;
  ${O["Subtitle/Subtitle 2"]}
`,o=({date:a,locale:e=_,...g})=>{const T=(e==null?void 0:e.localeName)||"ru",i=a||w(e==null?void 0:e.localeName),[v,b]=p.useState(u().locale(T).add(1,"year")),[d,h]=p.useState(),c=n=>{h(n)},M=n=>{const t=n.target.dataset;if(t.cellType!=="yearCell")return;const r=u(t.value).locale((e==null?void 0:e.localeName)||"ru");!(t.disabled==="true"||t.hiddenCell==="true")&&!r.isSame(d)&&c(r)},x=n=>{c(void 0)},C=n=>{const t=n.target.dataset;if(t.cellType!=="yearCell")return;const r=u(t.value).locale((e==null?void 0:e.localeName)||"ru");t.disabled==="true"||t.hiddenCell==="true"||b(r)};return l.jsxs(j,{children:[l.jsxs(I,{children:["Дата: ",A(i.format("D MMMM YYYY"))]}),l.jsx(Y,{...g,date:i,selected:v,active:d,locale:e,cell:E,onMouseLeave:x,onMouseOver:M,onClick:C})]})};try{o.displayName="YearsOfTwentyYearsWidgetSimpleTemplate",o.__docgenInfo={description:"",displayName:"YearsOfTwentyYearsWidgetSimpleTemplate",props:{date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
`,V={title:"Admiral-2.1/Widgets/YearsOfTwentyYears",component:Y,parameters:{docs:{source:{code:null}}},argTypes:{}},N=a=>l.jsx(o,{...a}),s={render:N,parameters:{docs:{source:{code:L}}},name:"YearsOfTwentyYearsWidgetSimple"};var m,y,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

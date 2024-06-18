import{p as W,j as l}from"./typography.es-DO68Qy5l.js";import{Y as h}from"./index-DVjN3Tgn.js";import{r as o}from"./index-CDs2tPxN.js";import{C as Y,e as E,g as p,a as L,r as H,d as m}from"./index-ujbVYY4f.js";import{a as _}from"./index-xh3kyrvP.js";import"./ChevronRightOutline-BkuwWOlR.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-D0cPpzFA.js";const w=W.div.withConfig({displayName:"YearNavigationPanelWidgetSimple.template__CalendarWrapper",componentId:"sc-e8df6d44-0"})(["box-sizing:border-box;display:flex;flex-direction:column;align-items:center;align-content:space-between;padding-top:20px;width:","px;height:","px;",""],Y,E,e=>e.theme.shadow["Shadow 08"]),s=({locale:e=H,date:f,...y})=>{const C=(e==null?void 0:e.localeName)||"ru",[n,d]=o.useState(f||p(e==null?void 0:e.localeName)),[b,N]=o.useState(p(C).add(1,"day")),[u,S]=o.useState(),c=a=>{S(a)},T=a=>{const t=a.target.dataset;if(t.cellType!=="monthCell")return;const r=m(t.value).locale((e==null?void 0:e.localeName)||"ru");!(t.disabled==="true"||t.hiddenCell==="true")&&!r.isSame(u)&&c(r)},M=a=>{c(void 0)},x=a=>{const t=a.target.dataset;if(t.cellType!=="monthCell")return;const r=m(t.value).locale((e==null?void 0:e.localeName)||"ru");t.disabled==="true"||t.hiddenCell==="true"||N(r)},A=a=>{switch(a.target.dataset.panelTargetType){case"left":d(n.subtract(1,"year"));break;case"right":d(n.add(1,"year"));break}};return l.jsxs(w,{children:[l.jsx(h,{date:n,locale:e,onClick:A}),l.jsx(_,{...y,date:n,selected:b,active:u,locale:e,cell:L,onMouseOver:T,onClick:x,onMouseLeave:M})]})};try{s.displayName="YearNavigationPanelWidgetSimpleTemplate",s.__docgenInfo={description:"",displayName:"YearNavigationPanelWidgetSimpleTemplate",props:{viewMode:{defaultValue:null,description:"",name:"viewMode",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},date:{defaultValue:null,description:"Дата",name:"date",required:!1,type:{name:"Dayjs"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},prevButtonProps:{defaultValue:null,description:"",name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:"",name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const I=`import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { getCurrentDate } from '#lib/utils';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH, ruLocale } from '#lib/calendarConstants';
import { MonthsOfYearWidget } from '#lib/MonthsOfYearWidget';
import type { YearNavigationPanelWidgetProps } from '#lib/YearNavigationPanelWidget';
import { YearNavigationPanelWidget } from '#lib/YearNavigationPanelWidget';
import { MemoDefaultMonthCell } from '#lib/DefaultCell';

const CalendarWrapper = styled.div\`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: \${CALENDAR_WIDTH}px;
  height: \${CALENDAR_HEIGHT}px;
  \${(p) => p.theme.shadow['Shadow 08']}
\`;

export const YearNavigationPanelWidgetSimpleTemplate = ({
  locale = ruLocale,
  date,
  ...props
}: YearNavigationPanelWidgetProps) => {
  const localeInner = locale?.localeName || 'ru';
  const [dateState, setDateState] = useState(date || getCurrentDate(locale?.localeName));
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(getCurrentDate(localeInner).add(1, 'day'));

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

  const handleYearNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        setDateState(dateState.subtract(1, 'year'));
        break;
      case 'right':
        setDateState(dateState.add(1, 'year'));
        break;
    }
  };

  return (
    <CalendarWrapper>
      <YearNavigationPanelWidget date={dateState} locale={locale} onClick={handleYearNavigationPanelClick} />
      <MonthsOfYearWidget
        {...props}
        date={dateState}
        selected={selectedDate}
        active={activeDateInner}
        locale={locale}
        cell={MemoDefaultMonthCell}
        onMouseOver={handleMouseOver}
        onClick={handleDateClick}
        onMouseLeave={handleMouseLeave}
      />
    </CalendarWrapper>
  );
};
`,$={title:"Admiral-2.1/Widgets/YearNavigationPanel",component:h,parameters:{docs:{source:{code:null}}},argTypes:{}},j=e=>l.jsx(s,{...e}),i={render:j,parameters:{docs:{source:{code:I}}},name:"YearNavigationPanelWidgetSimple"};var g,v,D;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: YearNavigationPanelWidgetSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearNavigationPanelWidgetSimpleTemplateRaw
      }
    }
  },
  name: 'YearNavigationPanelWidgetSimple'
}`,...(D=(v=i.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const z=["YearNavigationPanelWidgetSimple"];export{i as YearNavigationPanelWidgetSimple,z as __namedExportsOrder,$ as default};

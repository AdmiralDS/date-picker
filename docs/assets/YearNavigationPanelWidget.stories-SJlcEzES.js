import{p as W,j as s}from"./typography.es-CjQrIQMn.js";import{Y as h}from"./index-NEYl-_FI.js";import{r as i}from"./index-CDs2tPxN.js";import{C as Y,e as E,g as p,a as L,r as H,d as m}from"./index-D7UWWCrG.js";import{a as _}from"./index-5_C4kZbb.js";import"./tslib.es6-CRos2fHm.js";import"./ChevronRightOutline-w7Oo2fdL.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-C-Oh7jsZ.js";const w=W.div.withConfig({displayName:"YearNavigationPanelWidgetSimple.template__CalendarWrapper",componentId:"sc-f8e0a298-0"})(["box-sizing:border-box;display:flex;flex-direction:column;align-items:center;align-content:space-between;padding-top:20px;width:","px;height:","px;",""],Y,E,e=>e.theme.shadow["Shadow 08"]),l=({locale:e=H,date:f,...y})=>{const C=(e==null?void 0:e.localeName)||"ru",[n,d]=i.useState(f||p(e==null?void 0:e.localeName)),[N,b]=i.useState(p(C).add(1,"day")),[u,S]=i.useState(),c=a=>{S(a)},T=a=>{const t=a.target.dataset;if(t.cellType!=="monthCell")return;const r=m(t.value).locale((e==null?void 0:e.localeName)||"ru");!(t.disabled==="true"||t.hiddenCell==="true")&&!r.isSame(u)&&c(r)},M=a=>{c(void 0)},x=a=>{const t=a.target.dataset;if(t.cellType!=="monthCell")return;const r=m(t.value).locale((e==null?void 0:e.localeName)||"ru");t.disabled==="true"||t.hiddenCell==="true"||b(r)},A=a=>{switch(a.target.dataset.panelTargetType){case"left":d(n.subtract(1,"year"));break;case"right":d(n.add(1,"year"));break}};return s.jsxs(w,{children:[s.jsx(h,{date:n,locale:e,onClick:A}),s.jsx(_,{...y,date:n,selected:N,active:u,locale:e,cell:L,onMouseOver:T,onClick:x,onMouseLeave:M})]})};try{l.displayName="YearNavigationPanelWidgetSimpleTemplate",l.__docgenInfo={description:"",displayName:"YearNavigationPanelWidgetSimpleTemplate",props:{viewMode:{defaultValue:null,description:"",name:"viewMode",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},date:{defaultValue:null,description:"Дата",name:"date",required:!1,type:{name:"Dayjs"}},locale:{defaultValue:{value:`{
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

import { getCurrentDate } from '#src/components/utils';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH, ruLocale } from '#src/components/calendarConstants';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';
import type { YearNavigationPanelWidgetProps } from '#src/components/YearNavigationPanelWidget';
import { YearNavigationPanelWidget } from '#src/components/YearNavigationPanelWidget';
import { MemoDefaultMonthCell } from '#src/components/DefaultCell';

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
`,z={title:"Admiral-2.1/Widgets/YearNavigationPanel",component:h,parameters:{docs:{source:{code:null}}},argTypes:{}},j=e=>s.jsx(l,{...e}),o={render:j,parameters:{docs:{source:{code:I}}},name:"YearNavigationPanelWidgetSimple"};var g,v,D;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: YearNavigationPanelWidgetSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearNavigationPanelWidgetSimpleTemplateRaw
      }
    }
  },
  name: 'YearNavigationPanelWidgetSimple'
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const J=["YearNavigationPanelWidgetSimple"];export{o as YearNavigationPanelWidgetSimple,J as __namedExportsOrder,z as default};

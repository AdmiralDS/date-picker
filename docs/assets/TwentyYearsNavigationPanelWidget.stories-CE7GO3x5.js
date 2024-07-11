import{p as W,j as i}from"./typography.es-DJ4WRfsu.js";import{T as D}from"./index-D4_0Szhj.js";import{r as l}from"./index-RYns6xqu.js";import{C as P,e as M,g as p,f as _,r as L,d as m}from"./index-DnXc0ZDD.js";import{a as H,Y as g}from"./index-CMIGvJsC.js";import"./ChevronRightOutline-4h1Amxbj.js";import"./index-BQaZqJLe.js";import"./DropdownProvider.es-DMHOw4-n.js";const I=W.div.withConfig({displayName:"TwentyYearsNavigationPanelWidgetSimple.template__CalendarWrapper",componentId:"sc-38a17cfb-0"})(["box-sizing:border-box;display:flex;flex-direction:column;align-items:center;align-content:space-between;padding-top:20px;width:","px;height:","px;",""],P,M,e=>e.theme.shadow["Shadow 08"]),o=({locale:e=L,date:f,...C})=>{const b=(e==null?void 0:e.localeName)||"ru",[n,d]=l.useState(f||p(e==null?void 0:e.localeName)),[N,w]=l.useState(p(b).add(1,"day")),[u,S]=l.useState(),c=(a,t)=>{S(a)},h=a=>{const t=a.target.dataset;if(t.cellType!=="yearCell")return;const r=m(t.value).locale((e==null?void 0:e.localeName)||"ru");!(t.disabled==="true"||t.hiddenCell==="true")&&!r.isSame(u)&&c(r)},Y=a=>{c(void 0)},E=a=>{const t=a.target.dataset;if(t.cellType!=="yearCell")return;const r=m(t.value).locale((e==null?void 0:e.localeName)||"ru");t.disabled==="true"||t.hiddenCell==="true"||w(r)},A=a=>{switch(a.target.dataset.panelTargetType){case"left":d(n.subtract(g,"year"));break;case"right":d(n.add(g,"year"));break}};return i.jsxs(I,{children:[i.jsx(D,{date:n,locale:e,onClick:A}),i.jsx(H,{...C,date:n,selected:N,active:u,locale:e,cell:_,onMouseLeave:Y,onMouseOver:h,onClick:E})]})};try{o.displayName="TwentyYearsNavigationPanelWidgetSimpleTemplate",o.__docgenInfo={description:"",displayName:"TwentyYearsNavigationPanelWidgetSimpleTemplate",props:{viewMode:{defaultValue:null,description:"",name:"viewMode",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},date:{defaultValue:null,description:"Дата",name:"date",required:!1,type:{name:"Dayjs"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},prevButtonProps:{defaultValue:null,description:"",name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:"",name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const j=`import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { getCurrentDate } from '#lib/utils';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH, ruLocale } from '#lib/calendarConstants';
import type { TwentyYearsNavigationPanelWidgetProps } from '#lib/TwentyYearsNavigationPanelWidget';
import { TwentyYearsNavigationPanelWidget } from '#lib/TwentyYearsNavigationPanelWidget';
import { YearsOfTwentyYearsWidget } from '#lib/YearsOfTwentyYearsWidget';
import { YEARS_ON_SCREEN } from '#lib/YearsOfTwentyYearsWidget/constants.ts';
import { MemoDefaultYearCell } from '#lib/DefaultCell';

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

export const TwentyYearsNavigationPanelWidgetSimpleTemplate = ({
  locale = ruLocale,
  date,
  ...props
}: TwentyYearsNavigationPanelWidgetProps) => {
  const localeInner = locale?.localeName || 'ru';
  const [dateState, setDateState] = useState(date || getCurrentDate(locale?.localeName));
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(getCurrentDate(localeInner).add(1, 'day'));

  const [activeDateInner, setActiveDateInner] = useState<Dayjs>();

  const handleActiveDateChange = (date?: Dayjs, disabled?: boolean) => {
    if (!disabled) {
      setActiveDateInner(date);
    }
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

  const handleTwentyYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        setDateState(dateState.subtract(YEARS_ON_SCREEN, 'year'));
        break;
      case 'right':
        setDateState(dateState.add(YEARS_ON_SCREEN, 'year'));
        break;
    }
  };

  return (
    <CalendarWrapper>
      <TwentyYearsNavigationPanelWidget
        date={dateState}
        locale={locale}
        onClick={handleTwentyYearsNavigationPanelClick}
      />
      <YearsOfTwentyYearsWidget
        {...props}
        date={dateState}
        selected={selectedDate}
        active={activeDateInner}
        locale={locale}
        cell={MemoDefaultYearCell}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        onClick={handleDateClick}
      />
    </CalendarWrapper>
  );
};
`,z={title:"Admiral-2.1/Widgets/TwentyYearsNavigationPanel",component:D,parameters:{docs:{source:{code:null}}},argTypes:{}},R=e=>i.jsx(o,{...e}),s={render:R,parameters:{docs:{source:{code:j}}},name:"TwentyYearsNavigationPanelWidgetSimple"};var y,v,T;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: TwentyYearsNavigationPanelWidgetSimpleStory,
  parameters: {
    docs: {
      source: {
        code: TwentyYearsNavigationPanelWidgetSimpleTemplateRaw
      }
    }
  },
  name: 'TwentyYearsNavigationPanelWidgetSimple'
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const J=["TwentyYearsNavigationPanelWidgetSimple"];export{s as TwentyYearsNavigationPanelWidgetSimple,J as __namedExportsOrder,z as default};

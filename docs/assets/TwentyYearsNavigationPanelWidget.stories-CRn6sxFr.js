import{p as h,t as j,j as n}from"./typography.es-CjQrIQMn.js";import{T as I,S as L,a as H,I as B}from"./ChevronRightOutline-BFEwPjnF.js";import{C as b,r as Y,d as R,e as k}from"./index-B0XozSxi.js";import{g as v,y as O}from"./utils-B_ZJ_ERX.js";import{a as T}from"./constants-C6vCpwtL.js";import{r as y}from"./index-CDs2tPxN.js";import{d as D}from"./ru-lGojcqRe.js";import{Y as F}from"./index-fVtI0-nO.js";import"./tslib.es6-CRos2fHm.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-Dczk-0Um.js";import"./mixins-0kl9vljp.js";const q=h.div.withConfig({displayName:"TwentyYearsNavigationPanelWidget__TwentyYearsNavigationPanelWrapper",componentId:"sc-b015cadc-0"})(["box-sizing:border-box;width:","PX;height:32px;padding:0 12px;display:flex;justify-content:space-between;"],b),V=h.div.withConfig({displayName:"TwentyYearsNavigationPanelWidget__TwentyYearsWrapper",componentId:"sc-b015cadc-1"})(["padding:4px 8px;color:",";cursor:default;",""],e=>e.theme.color["Neutral/Neutral 90"],j["Subtitle/Subtitle 2"]),N=I(B),p=({viewMode:e,date:i,locale:t=Y,prevButtonProps:c,nextButtonProps:s,...o})=>{const m=(i==null?void 0:i.locale(t==null?void 0:t.localeName))||v(t==null?void 0:t.localeName),{start:g,end:u}=O(m,T);return n.jsxs(q,{...o,children:[n.jsx(N,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"left",renderContent:()=>t==null?void 0:t.localeText.backwardText,...c,children:n.jsx(L,{})}),n.jsx(V,{children:`${g}–${u}`}),n.jsx(N,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"right",renderContent:()=>t==null?void 0:t.localeText.forwardText,...s,children:n.jsx(H,{})})]})};try{p.displayName="TwentyYearsNavigationPanelWidget",p.__docgenInfo={description:"",displayName:"TwentyYearsNavigationPanelWidget",props:{viewMode:{defaultValue:null,description:"",name:"viewMode",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},date:{defaultValue:null,description:"Дата",name:"date",required:!1,type:{name:"Dayjs"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},prevButtonProps:{defaultValue:null,description:"",name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:"",name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const $=h.div.withConfig({displayName:"TwentyYearsNavigationPanelWidgetSimple.template__CalendarWrapper",componentId:"sc-30497ac1-0"})(["box-sizing:border-box;display:flex;flex-direction:column;align-items:center;align-content:space-between;padding-top:20px;width:","px;height:","px;",""],b,R,e=>e.theme.shadow["Shadow 08"]),f=({locale:e=Y,date:i,...t})=>{const c=(e==null?void 0:e.localeName)||"ru",[s,o]=y.useState(i||v(e==null?void 0:e.localeName)),[m,g]=y.useState(v(c).add(1,"day")),[u,P]=y.useState(),w=(r,a)=>{P(r)},E=r=>{const a=r.target.dataset;if(a.cellType!=="yearCell")return;const l=D(a.value).locale((e==null?void 0:e.localeName)||"ru");!(a.disabled==="true"||a.hiddenCell==="true")&&!l.isSame(u)&&w(l)},W=r=>{w(void 0)},_=r=>{const a=r.target.dataset;if(a.cellType!=="yearCell")return;const l=D(a.value).locale((e==null?void 0:e.localeName)||"ru");a.disabled==="true"||a.hiddenCell==="true"||g(l)},A=r=>{switch(r.target.dataset.panelTargetType){case"left":o(s.subtract(T,"year"));break;case"right":o(s.add(T,"year"));break}};return n.jsxs($,{children:[n.jsx(p,{date:s,locale:e,onClick:A}),n.jsx(F,{...t,date:s,selected:m,active:u,locale:e,cell:k,onMouseLeave:W,onMouseOver:E,onClick:_})]})};try{f.displayName="TwentyYearsNavigationPanelWidgetSimpleTemplate",f.__docgenInfo={description:"",displayName:"TwentyYearsNavigationPanelWidgetSimpleTemplate",props:{viewMode:{defaultValue:null,description:"",name:"viewMode",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},date:{defaultValue:null,description:"Дата",name:"date",required:!1,type:{name:"Dayjs"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},prevButtonProps:{defaultValue:null,description:"",name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:"",name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const z=`import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { getCurrentDate } from '#src/components/utils';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH, ruLocale } from '#src/components/calendarConstants';
import type { TwentyYearsNavigationPanelWidgetProps } from '#src/components/TwentyYearsNavigationPanelWidget';
import { TwentyYearsNavigationPanelWidget } from '#src/components/TwentyYearsNavigationPanelWidget';
import { YearsOfTwentyYearsWidget } from '#src/components/YearsOfTwentyYearsWidget';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import { MemoDefaultYearCell } from '#src/components/DefaultCell';

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
`,ie={title:"Admiral-2.1/Widgets/TwentyYearsNavigationPanel",component:p,parameters:{docs:{source:{code:null}}},argTypes:{}},G=e=>n.jsx(f,{...e}),d={render:G,parameters:{docs:{source:{code:z}}},name:"TwentyYearsNavigationPanelWidgetSimple"};var x,C,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: TwentyYearsNavigationPanelWidgetSimpleStory,
  parameters: {
    docs: {
      source: {
        code: TwentyYearsNavigationPanelWidgetSimpleTemplateRaw
      }
    }
  },
  name: 'TwentyYearsNavigationPanelWidgetSimple'
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const oe=["TwentyYearsNavigationPanelWidgetSimple"];export{d as TwentyYearsNavigationPanelWidgetSimple,oe as __namedExportsOrder,ie as default};

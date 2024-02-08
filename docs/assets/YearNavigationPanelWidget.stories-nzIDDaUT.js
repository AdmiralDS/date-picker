import{u as Y,j as o}from"./styled-components.browser.esm-7zUEPxZV.js";import{Y as h}from"./index-ppHAGUN8.js";import{r as i}from"./index-DogsOklH.js";import{C as E,f as P,g as p,e as L,r as H,a as m}from"./index-GEu7UUTq.js";import{a as _}from"./index-CppLjZWP.js";import"./ChevronRightOutline-2Sr-EFPQ.js";import"./index-MroJ3egt.js";import"./DropdownProvider.es-vuRa4WZF.js";const j=Y.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: ${E}px;
  height: ${P}px;
  ${e=>e.theme.shadow["Shadow 08"]}
`,l=({locale:e=H,date:f,...y})=>{const C=(e==null?void 0:e.localeName)||"ru",[n,d]=i.useState(f||p(e==null?void 0:e.localeName)),[N,b]=i.useState(p(C).add(1,"day")),[u,T]=i.useState(),c=a=>{T(a)},S=a=>{const t=a.target.dataset;if(t.cellType!=="monthCell")return;const r=m(t.value).locale((e==null?void 0:e.localeName)||"ru");!(t.disabled==="true"||t.hiddenCell==="true")&&!r.isSame(u)&&c(r)},M=a=>{c(void 0)},x=a=>{const t=a.target.dataset;if(t.cellType!=="monthCell")return;const r=m(t.value).locale((e==null?void 0:e.localeName)||"ru");t.disabled==="true"||t.hiddenCell==="true"||b(r)},A=a=>{switch(a.target.dataset.panelTargetType){case"left":d(n.subtract(1,"year"));break;case"right":d(n.add(1,"year"));break}};return o.jsxs(j,{children:[o.jsx(h,{date:n,locale:e,onClick:A}),o.jsx(_,{...y,date:n,selected:N,active:u,locale:e,cell:L,onMouseOver:S,onClick:x,onMouseLeave:M})]})};try{l.displayName="YearNavigationPanelWidgetSimpleTemplate",l.__docgenInfo={description:"",displayName:"YearNavigationPanelWidgetSimpleTemplate",props:{viewMode:{defaultValue:null,description:"",name:"viewMode",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},date:{defaultValue:null,description:"Дата",name:"date",required:!1,type:{name:"Dayjs"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const I=`import { useState } from 'react';
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
`,V={title:"Admiral-2.1/Widgets/YearNavigationPanel",component:h,parameters:{docs:{source:{code:null}}},argTypes:{}},w=e=>o.jsx(l,{...e}),s={render:w,parameters:{docs:{source:{code:I}}},name:"YearNavigationPanelWidgetSimple"};var g,v,D;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: YearNavigationPanelWidgetSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearNavigationPanelWidgetSimpleTemplateRaw
      }
    }
  },
  name: 'YearNavigationPanelWidgetSimple'
}`,...(D=(v=s.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const z=["YearNavigationPanelWidgetSimple"];export{s as YearNavigationPanelWidgetSimple,z as __namedExportsOrder,V as default};

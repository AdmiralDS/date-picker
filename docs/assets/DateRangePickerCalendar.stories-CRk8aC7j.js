import{j as a}from"./styled-components.browser.esm-DrTmyIAt.js";import{r as c,c as ue,g as ae}from"./index-CDs2tPxN.js";import{N as te,o as ne}from"./index-CaQ8XlvV.js";import{k as re}from"./index-BBtkqL62.js";import{_ as le,S as de,V as se,R as oe,D as ie}from"./calendarStyle-D5URKbyB.js";import{A as T}from"./index-Be6cgLpj.js";import{W as L,a as z,T as R}from"./common-CDJ8tmOp.js";import{d as j}from"./ru-lGojcqRe.js";import{d as ce,j as De}from"./utils-B_ZJ_ERX.js";import{a as pe}from"./constants-C6vCpwtL.js";import"./tslib.es6-CRos2fHm.js";import"./typography.es-DSm7pTxC.js";import"./index.es-n1eWmiMq.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-BaHm9Kb7.js";import"./index-DDgR2ROP.js";import"./index-QWFBIMH2.js";import"./index-BcVcSavK.js";import"./index-Y8ituuGQ.js";import"./index-f_P1f7s3.js";import"./index-7NNlG1Bn.js";import"./index-nA2Ey_1t.js";import"./index-CSAbbKMT.js";const M=({viewModeValue:t,defaultViewModeValue:l,onViewModeChange:s,dateValue:d,defaultDateValue:V,onDateValueChange:E,selectedDateRangeValue:D,defaultSelectedDateRangeValue:u,onSelectedDateRangeValueChange:p,onActiveDateRangeEndValueChange:i,cell:n,locale:m=ne,prevButtonProps:w,nextButtonProps:C,...y})=>{const[k,S]=c.useState(l||"dates"),e=t||k,f=r=>{S(r),s==null||s(r)},[v,O]=c.useState(V||te(m==null?void 0:m.localeName)),o=d||v,h=r=>{O(r),E==null||E(r)},[G,U]=c.useState(u),g=D||G,K=r=>{U(r),p==null||p(r)},[F,J]=c.useState(),Z=r=>{J(r),i==null||i(r)},Q=r=>{const P=o.month(r.month());h(P),f("dates")},X=r=>{const P=o.year(r.year());h(P),f("dates")},ee=r=>{switch(r.target.dataset.panelTargetType){case"left":h(e==="dates"?o.subtract(1,"month"):e==="months"?o.subtract(1,"year"):o.subtract(T,"year"));break;case"right":h(e==="dates"?o.add(1,"month"):e==="months"?o.add(1,"year"):o.add(T,"year"));break;case"month":f(e==="months"?"dates":"months");break;case"year":f(e==="years"?"dates":"years");break}},q=(()=>{if(!(!F||!g)){if(g[0]&&F.isSame(g[0],"date"))return g[1];if(g[1]&&F.isSame(g[1],"date"))return g[0]}})();return a.jsxs(le,{children:[a.jsx(re,{date:o,viewMode:e,locale:m,onClick:ee,prevButtonProps:w,nextButtonProps:C}),a.jsxs(de,{children:[a.jsx(se,{...y,cell:n==null?void 0:n.dateCell,dateValue:o,selectedDateRangeValue:g,defaultSelectedDateRangeValue:u,onSelectedDateRangeValueChange:K,onActiveDateRangeEndValueChange:Z,locale:m,$isVisible:e==="dates"}),a.jsx(oe,{...y,cell:n==null?void 0:n.monthCell,dateValue:o,selectedDateValue:q,onSelectedDateValueChange:Q,locale:m,$isVisible:e==="months"}),a.jsx(ie,{...y,cell:n==null?void 0:n.yearCell,dateValue:o,selectedDateValue:q,onSelectedDateValueChange:X,locale:m,$isVisible:e==="years"})]})]})},b=t=>{const l=s=>{const d=s.target.dataset.value;console.log(`click on ${d}`)};return a.jsxs(L,{children:[a.jsx(M,{...t,onClick:l}),a.jsxs(z,{children:[a.jsx(R,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона дат"}),a.jsxs(R,{font:"Body/Body 2 Long",as:"div",children:["При первом клике на число оно выделяется синим. Далее ведем курсор ко второму числу, числа автоматически закрашиваются во всем диапазоне до даты под курсором.",a.jsx("br",{}),"При клике на второе число оно также выделяется синим. Диапазон дат выбран.",a.jsx("br",{}),a.jsx("br",{}),"Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год, либо нажав на месяц/год в шапке календаря.",a.jsx("br",{}),a.jsx("br",{}),"Стрелки влево-вправо позволяют менять год."]})]})]})};try{b.displayName="DateRangePickerCalendarSimpleTemplate",b.__docgenInfo={description:"",displayName:"DateRangePickerCalendarSimpleTemplate",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}var Y={exports:{}};(function(t,l){(function(s,d){t.exports=d()})(ue,function(){return function(s,d,V){var E=function(D,u){if(!u||!u.length||u.length===1&&!u[0]||u.length===1&&Array.isArray(u[0])&&!u[0].length)return null;var p;u.length===1&&u[0].length>0&&(u=u[0]),p=(u=u.filter(function(n){return n}))[0];for(var i=1;i<u.length;i+=1)u[i].isValid()&&!u[i][D](p)||(p=u[i]);return p};V.max=function(){var D=[].slice.call(arguments,0);return E("isAfter",D)},V.min=function(){var D=[].slice.call(arguments,0);return E("isBefore",D)}}})})(Y);var me=Y.exports;const fe=ae(me);j.extend(fe);const ge=t=>{switch(t){case"years":return"year";case"months":return"month";case"dates":default:return"date"}},Ve=(t,l)=>{switch(l){case"years":return t.subtract(pe,"year");case"months":return t.subtract(1,"year");case"dates":default:return t.subtract(1,"month")}},Ee=(t,l,s)=>{if(!t&&!l&&!s)return;const d=[];return t&&d.push(t),l&&d.push(l),s&&d.push(s),j.min(d)},x=t=>{const[l,s]=c.useState("dates"),d=e=>{s(e)},[V,E]=c.useState(j()),D=e=>{E(e)},[u,p]=c.useState(),i=e=>{p(e)},[n,m]=c.useState(),w=e=>{m(e)},[C,y]=c.useState(!1);c.useEffect(()=>{const e=Ve(V,l),f=ge(l),v=Ee(u,n==null?void 0:n[0],n==null?void 0:n[1]);v&&e.isBefore(v,f)?y(!0):C&&y(!1)},[V,l,u]);const k=e=>u&&e.isBefore(u,"date")&&!ce("date",e,n)&&!De("date",e,n)?{disabled:!0}:{},S=e=>{const f=e.target.dataset.value;console.log(`click on ${f}`)};return a.jsxs(L,{children:[a.jsx(M,{...t,onClick:S,onActiveDateRangeEndValueChange:i,dateAttributes:k,onSelectedDateRangeValueChange:w,defaultViewModeValue:"dates",defaultDateValue:j(),onDateValueChange:D,onViewModeChange:d,prevButtonProps:{disabled:C}}),a.jsxs(z,{children:[a.jsx(R,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона дат"}),a.jsxs(R,{font:"Body/Body 2 Long",as:"div",children:["При необходимости можно блокировать для выбора даты, стоящие перед первым выбранным концом отрезка.",a.jsx("br",{}),a.jsx("br",{}),"В данном случае рекомендуется также блокировать стрелки на панели переключения месяцев/лет."]})]})]})};try{x.displayName="DateRangePickerCalendarBlockEarlierDatesTemplate",x.__docgenInfo={description:"",displayName:"DateRangePickerCalendarBlockEarlierDatesTemplate",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const ye=`import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { DateRangePickerCalendarProps } from '@admiral-ds/date-picker';
import { DateRangePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const DateRangePickerCalendarSimpleTemplate = (props: DateRangePickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return (
    <WrapperHorizontal>
      <DateRangePickerCalendar {...props} onClick={handleClick} />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор диапазона дат
        </T>
        <T font="Body/Body 2 Long" as="div">
          При первом клике на число оно выделяется синим. Далее ведем курсор ко второму числу, числа автоматически
          закрашиваются во всем диапазоне до даты под курсором.
          <br />
          При клике на второе число оно также выделяется синим. Диапазон дат выбран.
          <br />
          <br />
          Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год,
          либо нажав на месяц/год в шапке календаря.
          <br />
          <br />
          Стрелки влево-вправо позволяют менять год.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};
`,Ce=`import type { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';

import { T } from '@admiral-ds/react-ui';
import type { CalendarViewMode, DateRangePickerCalendarProps } from '@admiral-ds/date-picker';
import { DateRangePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { dateIsInRange, dateIsSelected } from '#src/components/utils.ts';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';

dayjs.extend(minMax);

const getUnitType = (mode: CalendarViewMode) => {
  switch (mode) {
    case 'years':
      return 'year';
    case 'months':
      return 'month';
    case 'dates':
    default:
      return 'date';
  }
};
const getPrevDate = (date: Dayjs, viewMode: CalendarViewMode) => {
  switch (viewMode) {
    case 'years':
      return date.subtract(YEARS_ON_SCREEN, 'year');
    case 'months':
      return date.subtract(1, 'year');
    case 'dates':
    default:
      return date.subtract(1, 'month');
  }
};

const getMinDate = (date1?: Dayjs, date2?: Dayjs, date3?: Dayjs) => {
  if (!date1 && !date2 && !date3) return undefined;
  const dates: Dayjs[] = [];
  if (date1) dates.push(date1);
  if (date2) dates.push(date2);
  if (date3) dates.push(date3);
  return dayjs.min(dates);
};

export const DateRangePickerCalendarBlockEarlierDatesTemplate = (props: DateRangePickerCalendarProps) => {
  const [viewMode, setViewMode] = useState<CalendarViewMode>('dates');
  const handleViewModeChange = (mode: CalendarViewMode) => {
    setViewMode(mode);
  };

  const [viewDate, setViewDate] = useState<Dayjs>(dayjs());
  const handleViewDateChange = (date: Dayjs) => {
    setViewDate(date);
  };

  const [activeDateRangeEnd, setActiveDateRangeEnd] = useState<Dayjs | undefined>();
  const handleActiveDateRangeEndChange = (date?: Dayjs) => {
    setActiveDateRangeEnd(date);
  };

  const [selectedDateRange, setSelectedDateRange] = useState<[Dayjs | undefined, Dayjs | undefined] | undefined>();
  const handleSelectedDateRangeChange = (dateRange: [Dayjs | undefined, Dayjs | undefined]) => {
    setSelectedDateRange(dateRange);
  };

  const [prevArrowDisabled, setPrevArrowDisabled] = useState<boolean>(false);
  useEffect(() => {
    const prevDate = getPrevDate(viewDate, viewMode);
    const unit = getUnitType(viewMode);
    const minDate = getMinDate(activeDateRangeEnd, selectedDateRange?.[0], selectedDateRange?.[1]);
    if (minDate && prevDate.isBefore(minDate, unit)) {
      setPrevArrowDisabled(true);
    } else {
      if (prevArrowDisabled) {
        setPrevArrowDisabled(false);
      }
    }
  }, [viewDate, viewMode, activeDateRangeEnd]);

  const dateAttrs = (date: Dayjs) => {
    if (activeDateRangeEnd && date.isBefore(activeDateRangeEnd, 'date')) {
      if (!dateIsInRange('date', date, selectedDateRange) && !dateIsSelected('date', date, selectedDateRange)) {
        return { disabled: true };
      }
    }
    return {};
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return (
    <WrapperHorizontal>
      <DateRangePickerCalendar
        {...props}
        onClick={handleClick}
        onActiveDateRangeEndValueChange={handleActiveDateRangeEndChange}
        dateAttributes={dateAttrs}
        onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
        defaultViewModeValue={'dates'}
        defaultDateValue={dayjs()}
        onDateValueChange={handleViewDateChange}
        onViewModeChange={handleViewModeChange}
        prevButtonProps={{ disabled: prevArrowDisabled }}
      />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор диапазона дат
        </T>
        <T font="Body/Body 2 Long" as="div">
          При необходимости можно блокировать для выбора даты, стоящие перед первым выбранным концом отрезка.
          <br />
          <br />В данном случае рекомендуется также блокировать стрелки на панели переключения месяцев/лет.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};
`,Oe={title:"Admiral-2.1/Range Picker/DateRangePickerCalendar",component:M,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},defaultDateValue:{control:{type:"text"}},onDateValueChange:{control:!1},locale:{control:!1}}},ve=t=>a.jsx(b,{...t}),A={render:ve,parameters:{docs:{source:{code:ye}}},name:"Выбор диапазона дат"},he=t=>a.jsx(x,{...t}),B={render:he,parameters:{docs:{source:{code:Ce}}},name:"Выбор диапазона дат только вперед"};var _,W,H;A.parameters={...A.parameters,docs:{...(_=A.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DateRangePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: DateRangePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона дат'
}`,...(H=(W=A.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var I,N,$;B.parameters={...B.parameters,docs:{...(I=B.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: DateRangePickerCalendarBlockEarlierDatesStory,
  parameters: {
    docs: {
      source: {
        code: DateRangePickerCalendarBlockEarlierDatesTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона дат только вперед'
}`,...($=(N=B.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};const Ge=["DateRangePickerCalendarSimple","DateRangePickerCalendarBlockEarierDates"];export{B as DateRangePickerCalendarBlockEarierDates,A as DateRangePickerCalendarSimple,Ge as __namedExportsOrder,Oe as default};

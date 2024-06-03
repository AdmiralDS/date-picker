import{j as a}from"./typography.es-CjQrIQMn.js";import{s as v}from"./index.es-Ch9jN6aC.js";import{W as S,a as M,T as g}from"./common-DpnS3vu6.js";import{c as H,g as W,r as c}from"./index-CDs2tPxN.js";import{d as E}from"./ru-lGojcqRe.js";import{d as I,j as L}from"./utils-B_ZJ_ERX.js";import{a as N}from"./constants-C6vCpwtL.js";import"./tslib.es6-CRos2fHm.js";import"./ChevronRightOutline-DIae5nKi.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-Dczk-0Um.js";const V=u=>{const n=d=>{const r=d.target.dataset.value;console.log(`click on ${r}`)};return a.jsxs(S,{children:[a.jsx(v,{...u,onClick:n}),a.jsxs(M,{children:[a.jsx(g,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона дат"}),a.jsxs(g,{font:"Body/Body 2 Long",as:"div",children:["При первом клике на число оно выделяется синим. Далее ведем курсор ко второму числу, числа автоматически закрашиваются во всем диапазоне до даты под курсором.",a.jsx("br",{}),"При клике на второе число оно также выделяется синим. Диапазон дат выбран.",a.jsx("br",{}),a.jsx("br",{}),"Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год, либо нажав на месяц/год в шапке календаря.",a.jsx("br",{}),a.jsx("br",{}),"Стрелки влево-вправо позволяют менять год."]})]})]})};try{V.displayName="DateRangePickerCalendarSimpleTemplate",V.__docgenInfo={description:"",displayName:"DateRangePickerCalendarSimpleTemplate",props:{onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}var b={exports:{}};(function(u,n){(function(d,r){u.exports=r()})(H,function(){return function(d,r,D){var p=function(s,e){if(!e||!e.length||e.length===1&&!e[0]||e.length===1&&Array.isArray(e[0])&&!e[0].length)return null;var o;e.length===1&&e[0].length>0&&(e=e[0]),o=(e=e.filter(function(l){return l}))[0];for(var i=1;i<e.length;i+=1)e[i].isValid()&&!e[i][s](o)||(o=e[i]);return o};D.max=function(){var s=[].slice.call(arguments,0);return p("isAfter",s)},D.min=function(){var s=[].slice.call(arguments,0);return p("isBefore",s)}}})})(b);var z=b.exports;const O=W(z);E.extend(O);const Y=u=>{switch(u){case"years":return"year";case"months":return"month";case"dates":default:return"date"}},$=(u,n)=>{switch(n){case"years":return u.subtract(N,"year");case"months":return u.subtract(1,"year");case"dates":default:return u.subtract(1,"month")}},G=(u,n,d)=>{if(!u&&!n&&!d)return;const r=[];return u&&r.push(u),n&&r.push(n),d&&r.push(d),E.min(r)},C=u=>{const[n,d]=c.useState("dates"),r=t=>{d(t)},[D,p]=c.useState(E()),s=t=>{p(t)},[e,o]=c.useState(),i=t=>{o(t)},[l,x]=c.useState(),q=t=>{x(t)},[A,B]=c.useState(!1);c.useEffect(()=>{const t=$(D,n),y=Y(n),h=G(e,l==null?void 0:l[0],l==null?void 0:l[1]);h&&t.isBefore(h,y)?B(!0):A&&B(!1)},[D,n,e]);const T=t=>e&&t.isBefore(e,"date")&&!I("date",t,l)&&!L("date",t,l)?{disabled:!0}:{},_=t=>{const y=t.target.dataset.value;console.log(`click on ${y}`)};return a.jsxs(S,{children:[a.jsx(v,{...u,onClick:_,onActiveDateRangeEndValueChange:i,dateAttributes:T,onSelectedDateRangeValueChange:q,defaultViewModeValue:"dates",defaultDateValue:E(),onDateValueChange:s,onViewModeChange:r,prevButtonProps:{disabled:A}}),a.jsxs(M,{children:[a.jsx(g,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона дат"}),a.jsxs(g,{font:"Body/Body 2 Long",as:"div",children:["При необходимости можно блокировать для выбора даты, стоящие перед первым выбранным концом отрезка.",a.jsx("br",{}),a.jsx("br",{}),"В данном случае рекомендуется также блокировать стрелки на панели переключения месяцев/лет."]})]})]})};try{C.displayName="DateRangePickerCalendarBlockEarlierDatesTemplate",C.__docgenInfo={description:"",displayName:"DateRangePickerCalendarBlockEarlierDatesTemplate",props:{onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const U=`import type { MouseEventHandler } from 'react';

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
`,K=`import type { MouseEventHandler } from 'react';
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
`,ie={title:"Admiral-2.1/Range Picker/DateRangePickerCalendar",component:v,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},defaultDateValue:{control:{type:"text"}},onDateValueChange:{control:!1},locale:{control:!1}}},J=u=>a.jsx(V,{...u}),m={render:J,parameters:{docs:{source:{code:U}}},name:"Выбор диапазона дат"},Z=u=>a.jsx(C,{...u}),f={render:Z,parameters:{docs:{source:{code:K}}},name:"Выбор диапазона дат только вперед"};var R,j,w;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: DateRangePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: DateRangePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона дат'
}`,...(w=(j=m.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,F,P;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: DateRangePickerCalendarBlockEarlierDatesStory,
  parameters: {
    docs: {
      source: {
        code: DateRangePickerCalendarBlockEarlierDatesTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона дат только вперед'
}`,...(P=(F=f.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const oe=["DateRangePickerCalendarSimple","DateRangePickerCalendarBlockEarierDates"];export{f as DateRangePickerCalendarBlockEarierDates,m as DateRangePickerCalendarSimple,oe as __namedExportsOrder,ie as default};

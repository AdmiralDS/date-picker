import{j as a}from"./tslib.es6-gXVSDp23.js";import{r as c,c as eu,g as au}from"./index-uubelm5h.js";import{g as tu,r as nu,d as j,m as ru,u as lu}from"./index-B-lRfg65.js";import{M as du}from"./index-BB6V8Vwr.js";import{S as su,C as iu,c as ou,M as Du,Y as cu,W as Y,d as $,T as w}from"./common-DvMQaCWA.js";import{Y as b}from"./index-MLNV-xYt.js";import"./index-D3dIwoLr.js";import"./typography.es-zceevOJ_.js";import"./ChevronRightOutline-DAmKuVUD.js";import"./index-Dei0BBcc.js";import"./DropdownProvider.es-CSByVTCf.js";import"./index-Dum229H0.js";import"./index-CEeWF_8x.js";import"./index--r0xEzHu.js";import"./index-DFy_Fcck.js";import"./index-KdvgB-i8.js";import"./index-kQ-c6TeZ.js";import"./index-BUlkrEmc.js";const v=({viewModeValue:t,defaultViewModeValue:l,onViewModeChange:d,dateValue:s,defaultDateValue:V,onDateValueChange:f,selectedDateRangeValue:p,defaultSelectedDateRangeValue:e,onSelectedDateRangeValueChange:D,onActiveDateRangeEndValueChange:o,cell:n,locale:m=nu,prevButtonProps:S,nextButtonProps:B,...C})=>{const[k,P]=c.useState(l||"dates"),u=t||k,E=r=>{P(r),d==null||d(r)},[A,O]=c.useState(V||tu(m==null?void 0:m.localeName)),i=s||A,g=r=>{O(r),f==null||f(r)},[G,U]=c.useState(e),y=p||G,K=r=>{U(r),D==null||D(r)},[M,J]=c.useState(),Z=r=>{J(r),o==null||o(r)},Q=r=>{const h=i.month(r.month());g(h),E("dates")},X=r=>{const h=i.year(r.year());g(h),E("dates")},uu=r=>{switch(r.target.dataset.panelTargetType){case"left":g(u==="dates"?i.subtract(1,"month"):u==="months"?i.subtract(1,"year"):i.subtract(b,"year"));break;case"right":g(u==="dates"?i.add(1,"month"):u==="months"?i.add(1,"year"):i.add(b,"year"));break;case"month":E(u==="months"?"dates":"months");break;case"year":E(u==="years"?"dates":"years");break}},T=(()=>{if(!(!M||!y)){if(y[0]&&M.isSame(y[0],"date"))return y[1];if(y[1]&&M.isSame(y[1],"date"))return y[0]}})();return a.jsxs(su,{children:[a.jsx(du,{date:i,viewMode:u,locale:m,onClick:uu,prevButtonProps:S,nextButtonProps:B}),a.jsxs(iu,{children:[a.jsx(ou,{...C,cell:n==null?void 0:n.dateCell,dateValue:i,selectedDateRangeValue:y,defaultSelectedDateRangeValue:e,onSelectedDateRangeValueChange:K,onActiveDateRangeEndValueChange:Z,locale:m,$isVisible:u==="dates"}),a.jsx(Du,{...C,cell:n==null?void 0:n.monthCell,dateValue:i,selectedDateValue:T,onSelectedDateValueChange:Q,locale:m,$isVisible:u==="months"}),a.jsx(cu,{...C,cell:n==null?void 0:n.yearCell,dateValue:i,selectedDateValue:T,onSelectedDateValueChange:X,locale:m,$isVisible:u==="years"})]})]})};try{v.displayName="DateRangePickerCalendar",v.__docgenInfo={description:"",displayName:"DateRangePickerCalendar",props:{onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const x=t=>{const l=d=>{const s=d.target.dataset.value;console.log(`click on ${s}`)};return a.jsxs(Y,{children:[a.jsx(v,{...t,onClick:l}),a.jsxs($,{children:[a.jsx(w,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона дат"}),a.jsxs(w,{font:"Body/Body 2 Long",as:"div",children:["При первом клике на число оно выделяется синим. Далее ведем курсор ко второму числу, числа автоматически закрашиваются во всем диапазоне до даты под курсором.",a.jsx("br",{}),"При клике на второе число оно также выделяется синим. Диапазон дат выбран.",a.jsx("br",{}),a.jsx("br",{}),"Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год, либо нажав на месяц/год в шапке календаря.",a.jsx("br",{}),a.jsx("br",{}),"Стрелки влево-вправо позволяют менять год."]})]})]})};try{x.displayName="DateRangePickerCalendarSimpleTemplate",x.__docgenInfo={description:"",displayName:"DateRangePickerCalendarSimpleTemplate",props:{onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}var z={exports:{}};(function(t,l){(function(d,s){t.exports=s()})(eu,function(){return function(d,s,V){var f=function(p,e){if(!e||!e.length||e.length===1&&!e[0]||e.length===1&&Array.isArray(e[0])&&!e[0].length)return null;var D;e.length===1&&e[0].length>0&&(e=e[0]),D=(e=e.filter(function(n){return n}))[0];for(var o=1;o<e.length;o+=1)e[o].isValid()&&!e[o][p](D)||(D=e[o]);return D};V.max=function(){var p=[].slice.call(arguments,0);return f("isAfter",p)},V.min=function(){var p=[].slice.call(arguments,0);return f("isBefore",p)}}})})(z);var pu=z.exports;const mu=au(pu);j.extend(mu);const fu=t=>{switch(t){case"years":return"year";case"months":return"month";case"dates":default:return"date"}},Eu=(t,l)=>{switch(l){case"years":return t.subtract(b,"year");case"months":return t.subtract(1,"year");case"dates":default:return t.subtract(1,"month")}},gu=(t,l,d)=>{if(!t&&!l&&!d)return;const s=[];return t&&s.push(t),l&&s.push(l),d&&s.push(d),j.min(s)},q=t=>{const[l,d]=c.useState("dates"),s=u=>{d(u)},[V,f]=c.useState(j()),p=u=>{f(u)},[e,D]=c.useState(),o=u=>{D(u)},[n,m]=c.useState(),S=u=>{m(u)},[B,C]=c.useState(!1);c.useEffect(()=>{const u=Eu(V,l),E=fu(l),A=gu(e,n==null?void 0:n[0],n==null?void 0:n[1]);A&&u.isBefore(A,E)?C(!0):B&&C(!1)},[V,l,e]);const k=u=>e&&u.isBefore(e,"date")&&!ru("date",u,n)&&!lu("date",u,n)?{disabled:!0}:{},P=u=>{const E=u.target.dataset.value;console.log(`click on ${E}`)};return a.jsxs(Y,{children:[a.jsx(v,{...t,onClick:P,onActiveDateRangeEndValueChange:o,dateAttributes:k,onSelectedDateRangeValueChange:S,defaultViewModeValue:"dates",defaultDateValue:j(),onDateValueChange:p,onViewModeChange:s,prevButtonProps:{disabled:B}}),a.jsxs($,{children:[a.jsx(w,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона дат"}),a.jsxs(w,{font:"Body/Body 2 Long",as:"div",children:["При необходимости можно блокировать для выбора даты, стоящие перед первым выбранным концом отрезка.",a.jsx("br",{}),a.jsx("br",{}),"В данном случае рекомендуется также блокировать стрелки на панели переключения месяцев/лет."]})]})]})};try{q.displayName="DateRangePickerCalendarBlockEarlierDatesTemplate",q.__docgenInfo={description:"",displayName:"DateRangePickerCalendarBlockEarlierDatesTemplate",props:{onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const yu=`import type { MouseEventHandler } from 'react';

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
`,Vu=`import type { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';

import { T } from '@admiral-ds/react-ui';
import type { CalendarViewMode, DateRangePickerCalendarProps } from '@admiral-ds/date-picker';
import { DateRangePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { dateIsInRange, dateIsSelected } from '#lib/utils.ts';
import { YEARS_ON_SCREEN } from '#lib/YearsOfTwentyYearsWidget/constants.ts';

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
`,Nu={title:"Admiral-2.1/Range Picker/DateRangePickerCalendar",component:v,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},defaultDateValue:{control:{type:"text"}},onDateValueChange:{control:!1},locale:{control:!1}}},Cu=t=>a.jsx(x,{...t}),R={render:Cu,parameters:{docs:{source:{code:yu}}},name:"Выбор диапазона дат"},vu=t=>a.jsx(q,{...t}),F={render:vu,parameters:{docs:{source:{code:Vu}}},name:"Выбор диапазона дат только вперед"};var _,W,H;R.parameters={...R.parameters,docs:{...(_=R.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DateRangePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: DateRangePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона дат'
}`,...(H=(W=R.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var I,N,L;F.parameters={...F.parameters,docs:{...(I=F.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: DateRangePickerCalendarBlockEarlierDatesStory,
  parameters: {
    docs: {
      source: {
        code: DateRangePickerCalendarBlockEarlierDatesTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона дат только вперед'
}`,...(L=(N=F.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};const Lu=["DateRangePickerCalendarSimple","DateRangePickerCalendarBlockEarierDates"];export{F as DateRangePickerCalendarBlockEarierDates,R as DateRangePickerCalendarSimple,Lu as __namedExportsOrder,Nu as default};

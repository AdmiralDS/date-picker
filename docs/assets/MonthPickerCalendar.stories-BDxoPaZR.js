import{j as e}from"./typography.es-CjQrIQMn.js";import{d as Y}from"./index.es-Shta5itu.js";import{r as m}from"./index-CDs2tPxN.js";import{g as L}from"./utils-B_ZJ_ERX.js";import{Y as O}from"./index-mi9ss2kq.js";import{S as R,C as z,M as $,Y as G}from"./calendarStyle-4FInB9Su.js";import{a as h}from"./constants-C6vCpwtL.js";import{r as K}from"./index-B0XozSxi.js";import{W as J,a as U,T as A}from"./common-DpnS3vu6.js";import"./tslib.es6-CRos2fHm.js";import"./ChevronRightOutline-BFEwPjnF.js";import"./ru-lGojcqRe.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-Dczk-0Um.js";import"./index-CB9F3xGI.js";import"./mixins-0kl9vljp.js";import"./index-C11fHoN7.js";import"./index-fVtI0-nO.js";import"./index-DEwUQJgp.js";import"./index-BqXkOSH9.js";const f=({viewModeValue:t,defaultViewModeValue:s,onViewModeChange:o,dateValue:c,defaultDateValue:P,onDateValueChange:p,selectedDateValue:S,defaultSelectedDateValue:k,onSelectedDateValueChange:D,cell:l,locale:r=K,prevButtonProps:x,nextButtonProps:g,...V})=>{const[j,q]=m.useState(s||"months"),n=t||j,y=u=>{q(u),o==null||o(u)},[w,T]=m.useState(P||L(r==null?void 0:r.localeName)),a=c||w,d=u=>{T(u),p==null||p(u)},[b,_]=m.useState(k),B=S||b,W=u=>{_(u),D==null||D(u)},H=u=>{W(u)},I=u=>{const C=a.year(u.year());d(C),y("months")},N=u=>{switch(u.target.dataset.panelTargetType){case"left":d(n==="months"?a.subtract(1,"year"):a.subtract(h,"year"));break;case"right":d(n==="months"?a.add(1,"year"):a.add(h,"year"));break;case"year":y(n==="years"?"months":"years");break}};return e.jsxs(R,{children:[e.jsx(O,{date:a,viewMode:n,locale:r,onClick:N,prevButtonProps:x,nextButtonProps:g}),e.jsxs(z,{children:[e.jsx($,{...V,cell:l==null?void 0:l.monthCell,dateValue:a,selectedDateValue:B,onSelectedDateValueChange:H,locale:r,$isVisible:n==="months"}),e.jsx(G,{...V,cell:l==null?void 0:l.yearCell,dateValue:a,selectedDateValue:B,onSelectedDateValueChange:I,locale:r,$isVisible:n==="years"})]})]})};try{f.displayName="MonthPickerCalendar",f.__docgenInfo={description:"",displayName:"MonthPickerCalendar",props:{defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const E=t=>{const s=o=>{const c=o.target.dataset.value;console.log(`click on ${c}`)};return e.jsxs(J,{children:[e.jsx(f,{...t,onClick:s}),e.jsxs(U,{children:[e.jsx(A,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор месяца"}),e.jsxs(A,{font:"Body/Body 2 Long",as:"div",children:["Клик на год открывает экран выбора года. Вернуться на экран выбора месяца можно выбрав год, либо нажав на год в шапке календаря.",e.jsx("br",{}),e.jsx("br",{}),"Стрелки влево-вправо позволяют менять год."]})]})]})};try{E.displayName="MonthPickerCalendarSimpleTemplate",E.__docgenInfo={description:"",displayName:"MonthPickerCalendarSimpleTemplate",props:{defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const Z=`import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { MonthPickerCalendarProps } from '@admiral-ds/date-picker';
import { MonthPickerCalendar } from '#src/components/MonthPickerCalendar';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const MonthPickerCalendarSimpleTemplate = (props: MonthPickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return (
    <WrapperHorizontal>
      <MonthPickerCalendar {...props} onClick={handleClick} />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор месяца
        </T>
        <T font="Body/Body 2 Long" as="div">
          Клик на год открывает экран выбора года. Вернуться на экран выбора месяца можно выбрав год, либо нажав на год
          в шапке календаря.
          <br />
          <br />
          Стрелки влево-вправо позволяют менять год.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};
`,B4={title:"Admiral-2.1/Date Picker/MonthPickerCalendar",component:Y,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},defaultDateValue:{control:{type:"text"}},onDateValueChange:{control:!1},locale:{control:!1}}},Q=t=>e.jsx(E,{...t}),i={render:Q,parameters:{docs:{source:{code:Z}}},name:"Выбор месяца"};var v,F,M;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: MonthPickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: MonthPickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор месяца'
}`,...(M=(F=i.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const C4=["MonthPickerCalendarSimple"];export{i as MonthPickerCalendarSimple,C4 as __namedExportsOrder,B4 as default};

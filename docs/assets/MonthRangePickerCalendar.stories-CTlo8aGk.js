import{j as u}from"./typography.es-CjQrIQMn.js";import{j as z,C as $,i as G,h as K}from"./index-DeaQ7tgM.js";import{r as o}from"./index-CDs2tPxN.js";import{g as O,r as J}from"./index-D7UWWCrG.js";import{Y as U}from"./index-NEYl-_FI.js";import{Y as A}from"./index-CEadLOe1.js";import{W as Z,a as Q,T as v}from"./common-DpnS3vu6.js";import"./tslib.es6-CRos2fHm.js";import"./index-BOqrSKSN.js";import"./index-5_C4kZbb.js";import"./ChevronRightOutline-w7Oo2fdL.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-C-Oh7jsZ.js";const D=({viewModeValue:n,defaultViewModeValue:p,onViewModeChange:i,dateValue:m,defaultDateValue:S,onDateValueChange:f,selectedDateRangeValue:M,defaultSelectedDateRangeValue:B,onSelectedDateRangeValueChange:E,cell:l,locale:r=J,prevButtonProps:P,nextButtonProps:k,...C})=>{const[x,q]=o.useState(p||"months"),d=n||x,g=e=>{q(e),i==null||i(e)},[b,w]=o.useState(S||O(r==null?void 0:r.localeName)),a=m||b,s=e=>{w(e),f==null||f(e)},[T,_]=o.useState(B),t=M||T,W=e=>{_(e),E==null||E(e)},[y,H]=o.useState(),N=e=>{H(e)},Y=e=>{const h=a.year(e.year());s(h),g("months")},L=e=>{switch(e.target.dataset.panelTargetType){case"left":s(d==="months"?a.subtract(1,"year"):a.subtract(A,"year"));break;case"right":s(d==="months"?a.add(1,"year"):a.add(A,"year"));break;case"year":g(d==="years"?"months":"years");break}},I=(()=>{if(!(!y||!t)){if(t[0]&&y.isSame(t[0],"month"))return t[1];if(t[1]&&y.isSame(t[1],"month"))return t[0]}})();return u.jsxs(z,{children:[u.jsx(U,{date:a,viewMode:d,locale:r,onClick:L,prevButtonProps:P,nextButtonProps:k}),u.jsxs($,{children:[u.jsx(G,{...C,cell:l==null?void 0:l.monthCell,dateValue:a,selectedDateRangeValue:t,defaultSelectedDateRangeValue:B,onSelectedDateRangeValueChange:W,onActiveDateRangeEndValueChange:N,locale:r,$isVisible:d==="months"}),u.jsx(K,{...C,cell:l==null?void 0:l.yearCell,dateValue:a,selectedDateValue:I,onSelectedDateValueChange:Y,locale:r,$isVisible:d==="years"})]})]})};try{D.displayName="MonthRangePickerCalendar",D.__docgenInfo={description:"",displayName:"MonthRangePickerCalendar",props:{dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"cellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const V=n=>{const p=i=>{const m=i.target.dataset.value;console.log(`click on ${m}`)};return u.jsxs(Z,{children:[u.jsx(D,{...n,onClick:p}),u.jsxs(Q,{children:[u.jsx(v,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона месяцев"}),u.jsxs(v,{font:"Body/Body 2 Long",as:"div",children:["При первом клике на месяц он выделяется синим. Далее ведем курсор ко второму месяцу, месяцы автоматически закрашиваются во всем диапазоне до месяца под курсором.",u.jsx("br",{}),"При клике на второй месяц он также выделяется синим. Диапазон месяцев выбран.",u.jsx("br",{}),u.jsx("br",{}),"Клик на год открывает экран выбора года. Вернуться на экран выбора месяца можно выбрав год, либо нажав на год в шапке календаря.",u.jsx("br",{}),u.jsx("br",{}),"Стрелки влево-вправо позволяют менять год."]})]})]})};try{V.displayName="MonthRangePickerCalendarSimpleTemplate",V.__docgenInfo={description:"",displayName:"MonthRangePickerCalendarSimpleTemplate",props:{dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"cellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const X=`import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { MonthRangePickerCalendarProps } from '@admiral-ds/date-picker';
import { MonthRangePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const MonthRangePickerCalendarSimpleTemplate = (props: MonthRangePickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return (
    <WrapperHorizontal>
      <MonthRangePickerCalendar {...props} onClick={handleClick} />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор диапазона месяцев
        </T>
        <T font="Body/Body 2 Long" as="div">
          При первом клике на месяц он выделяется синим. Далее ведем курсор ко второму месяцу, месяцы автоматически
          закрашиваются во всем диапазоне до месяца под курсором.
          <br />
          При клике на второй месяц он также выделяется синим. Диапазон месяцев выбран.
          <br />
          <br />
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
`,fu={title:"Admiral-2.1/Range Picker/MonthRangePickerCalendar",component:D,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},defaultDateValue:{control:{type:"text"}},onDateValueChange:{control:!1},locale:{control:!1}}},uu=n=>u.jsx(V,{...n}),c={render:uu,parameters:{docs:{source:{code:X}}},name:"Выбор диапазона месяцев"};var F,R,j;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: MonthRangePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: MonthRangePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона месяцев'
}`,...(j=(R=c.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const Eu=["MonthRangePickerCalendarSimple"];export{c as MonthRangePickerCalendarSimple,Eu as __namedExportsOrder,fu as default};

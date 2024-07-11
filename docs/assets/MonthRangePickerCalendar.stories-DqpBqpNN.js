import{j as u}from"./typography.es-DJ4WRfsu.js";import{S as z,C as $,k as G,Y as K}from"./index-DUrvFc95.js";import{r as s}from"./index-RYns6xqu.js";import{g as O,r as J}from"./index-DnXc0ZDD.js";import{Y as U}from"./index-rLJdUzAE.js";import{Y as h}from"./index-CMIGvJsC.js";import{W as Z,a as Q,T as v}from"./common-C0nfkXAM.js";import"./index-DisOlbzP.js";import"./index-DjVRa9xT.js";import"./ChevronRightOutline-4h1Amxbj.js";import"./index-BQaZqJLe.js";import"./DropdownProvider.es-DMHOw4-n.js";const D=({viewModeValue:n,defaultViewModeValue:p,onViewModeChange:i,dateValue:m,defaultDateValue:M,onDateValueChange:f,selectedDateRangeValue:k,defaultSelectedDateRangeValue:y,onSelectedDateRangeValueChange:E,cell:l,locale:r=J,prevButtonProps:P,nextButtonProps:x,...B})=>{const[q,j]=s.useState(p||"months"),d=n||q,C=e=>{j(e),i==null||i(e)},[b,w]=s.useState(M||O(r==null?void 0:r.localeName)),a=m||b,o=e=>{w(e),f==null||f(e)},[T,_]=s.useState(y),t=k||T,W=e=>{_(e),E==null||E(e)},[V,H]=s.useState(),N=e=>{H(e)},Y=e=>{const A=a.year(e.year());o(A),C("months")},L=e=>{switch(e.target.dataset.panelTargetType){case"left":o(d==="months"?a.subtract(1,"year"):a.subtract(h,"year"));break;case"right":o(d==="months"?a.add(1,"year"):a.add(h,"year"));break;case"year":C(d==="years"?"months":"years");break}},I=(()=>{if(!(!V||!t)){if(t[0]&&V.isSame(t[0],"month"))return t[1];if(t[1]&&V.isSame(t[1],"month"))return t[0]}})();return u.jsxs(z,{children:[u.jsx(U,{date:a,viewMode:d,locale:r,onClick:L,prevButtonProps:P,nextButtonProps:x}),u.jsxs($,{children:[u.jsx(G,{...B,cell:l==null?void 0:l.monthCell,dateValue:a,selectedDateRangeValue:t,defaultSelectedDateRangeValue:y,onSelectedDateRangeValueChange:W,onActiveDateRangeEndValueChange:N,locale:r,$isVisible:d==="months"}),u.jsx(K,{...B,cell:l==null?void 0:l.yearCell,dateValue:a,selectedDateValue:I,onSelectedDateValueChange:Y,locale:r,$isVisible:d==="years"})]})]})};try{D.displayName="MonthRangePickerCalendar",D.__docgenInfo={description:"",displayName:"MonthRangePickerCalendar",props:{locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"DateRange"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"DateRange"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: DateRange) => void)"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const g=n=>{const p=i=>{const m=i.target.dataset.value;console.log(`click on ${m}`)};return u.jsxs(Z,{children:[u.jsx(D,{...n,onClick:p}),u.jsxs(Q,{children:[u.jsx(v,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона месяцев"}),u.jsxs(v,{font:"Body/Body 2 Long",as:"div",children:["При первом клике на месяц он выделяется синим. Далее ведем курсор ко второму месяцу, месяцы автоматически закрашиваются во всем диапазоне до месяца под курсором.",u.jsx("br",{}),"При клике на второй месяц он также выделяется синим. Диапазон месяцев выбран.",u.jsx("br",{}),u.jsx("br",{}),"Клик на год открывает экран выбора года. Вернуться на экран выбора месяца можно выбрав год, либо нажав на год в шапке календаря.",u.jsx("br",{}),u.jsx("br",{}),"Стрелки влево-вправо позволяют менять год."]})]})]})};try{g.displayName="MonthRangePickerCalendarSimpleTemplate",g.__docgenInfo={description:"",displayName:"MonthRangePickerCalendarSimpleTemplate",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"DateRange"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"DateRange"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: DateRange) => void)"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const X=`import type { MouseEventHandler } from 'react';

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
`,mu={title:"Admiral-2.1/Range Picker/MonthRangePickerCalendar",component:D,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},defaultDateValue:{control:{type:"text"}},onDateValueChange:{control:!1},locale:{control:!1}}},uu=n=>u.jsx(g,{...n}),c={render:uu,parameters:{docs:{source:{code:X}}},name:"Выбор диапазона месяцев"};var F,R,S;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: MonthRangePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: MonthRangePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона месяцев'
}`,...(S=(R=c.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const fu=["MonthRangePickerCalendarSimple"];export{c as MonthRangePickerCalendarSimple,fu as __namedExportsOrder,mu as default};

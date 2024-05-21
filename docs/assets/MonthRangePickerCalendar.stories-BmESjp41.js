import{j as u}from"./styled-components.browser.esm-DrTmyIAt.js";import{r as d}from"./index-CDs2tPxN.js";import{N as G,o as I}from"./index-CaQ8XlvV.js";import{w as K}from"./index-DiSyl4Eb.js";import{_ as Z,S as J,u as O,D as U}from"./calendarStyle-D5URKbyB.js";import{A as E}from"./index-Be6cgLpj.js";import{W as Y,a as Q,T as B}from"./common-CDJ8tmOp.js";import"./tslib.es6-CRos2fHm.js";import"./ru-lGojcqRe.js";import"./typography.es-DSm7pTxC.js";import"./index.es-n1eWmiMq.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-BaHm9Kb7.js";import"./index-DDgR2ROP.js";import"./index-QWFBIMH2.js";import"./index-BcVcSavK.js";import"./index-Y8ituuGQ.js";import"./index-f_P1f7s3.js";import"./index-7NNlG1Bn.js";import"./index-nA2Ey_1t.js";import"./index-CSAbbKMT.js";const k=({viewModeValue:l,defaultViewModeValue:c,onViewModeChange:o,dateValue:p,defaultDateValue:j,onDateValueChange:V,selectedDateRangeValue:x,defaultSelectedDateRangeValue:g,onSelectedDateRangeValueChange:y,cell:i,locale:n=I,prevButtonProps:M,nextButtonProps:P,...h})=>{const[S,F]=d.useState(c||"months"),r=l||S,C=e=>{F(e),o==null||o(e)},[b,w]=d.useState(j||G(n==null?void 0:n.localeName)),a=p||b,m=e=>{w(e),V==null||V(e)},[T,q]=d.useState(g),t=x||T,_=e=>{q(e),y==null||y(e)},[D,W]=d.useState(),H=e=>{W(e)},$=e=>{const z=a.year(e.year());m(z),C("months")},L=e=>{switch(e.target.dataset.panelTargetType){case"left":m(r==="months"?a.subtract(1,"year"):a.subtract(E,"year"));break;case"right":m(r==="months"?a.add(1,"year"):a.add(E,"year"));break;case"year":C(r==="years"?"months":"years");break}},N=(()=>{if(!(!D||!t)){if(t[0]&&D.isSame(t[0],"month"))return t[1];if(t[1]&&D.isSame(t[1],"month"))return t[0]}})();return u.jsxs(Z,{children:[u.jsx(K,{date:a,viewMode:r,locale:n,onClick:L,prevButtonProps:M,nextButtonProps:P}),u.jsxs(J,{children:[u.jsx(O,{...h,cell:i==null?void 0:i.monthCell,dateValue:a,selectedDateRangeValue:t,defaultSelectedDateRangeValue:g,onSelectedDateRangeValueChange:_,onActiveDateRangeEndValueChange:H,locale:n,$isVisible:r==="months"}),u.jsx(U,{...h,cell:i==null?void 0:i.yearCell,dateValue:a,selectedDateValue:N,onSelectedDateValueChange:$,locale:n,$isVisible:r==="years"})]})]})},f=l=>{const c=o=>{const p=o.target.dataset.value;console.log(`click on ${p}`)};return u.jsxs(Y,{children:[u.jsx(k,{...l,onClick:c}),u.jsxs(Q,{children:[u.jsx(B,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона месяцев"}),u.jsxs(B,{font:"Body/Body 2 Long",as:"div",children:["При первом клике на месяц он выделяется синим. Далее ведем курсор ко второму месяцу, месяцы автоматически закрашиваются во всем диапазоне до месяца под курсором.",u.jsx("br",{}),"При клике на второй месяц он также выделяется синим. Диапазон месяцев выбран.",u.jsx("br",{}),u.jsx("br",{}),"Клик на год открывает экран выбора года. Вернуться на экран выбора месяца можно выбрав год, либо нажав на год в шапке календаря.",u.jsx("br",{}),u.jsx("br",{}),"Стрелки влево-вправо позволяют менять год."]})]})]})};try{f.displayName="MonthRangePickerCalendarSimpleTemplate",f.__docgenInfo={description:"",displayName:"MonthRangePickerCalendarSimpleTemplate",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const X=`import type { MouseEventHandler } from 'react';

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
`,Bu={title:"Admiral-2.1/Range Picker/MonthRangePickerCalendar",component:k,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},defaultDateValue:{control:{type:"text"}},onDateValueChange:{control:!1},locale:{control:!1}}},uu=l=>u.jsx(f,{...l}),s={render:uu,parameters:{docs:{source:{code:X}}},name:"Выбор диапазона месяцев"};var v,A,R;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: MonthRangePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: MonthRangePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона месяцев'
}`,...(R=(A=s.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const vu=["MonthRangePickerCalendarSimple"];export{s as MonthRangePickerCalendarSimple,vu as __namedExportsOrder,Bu as default};

import{j as e}from"./tslib.es6-gXVSDp23.js";import{r as f}from"./index-uubelm5h.js";import{g as Y,r as L}from"./index-B-lRfg65.js";import{Y as O}from"./index-BINliiCM.js";import{S as R,C as z,M as $,Y as G,W as K,d as J,T as h}from"./common-B4QALF2I.js";import{Y as A}from"./index-MLNV-xYt.js";import"./index-K5lteAgc.js";import"./typography.es-zceevOJ_.js";import"./ChevronRightOutline-DAmKuVUD.js";import"./index-Dei0BBcc.js";import"./DropdownProvider.es-CSByVTCf.js";import"./index-DecqpaNy.js";import"./index-CEeWF_8x.js";import"./index-ClXWm04v.js";import"./index-DFy_Fcck.js";import"./index-DECRG3v1.js";import"./index-DtnkVuXW.js";import"./index-DPFgU4GL.js";const s=({viewModeValue:t,defaultViewModeValue:c,onViewModeChange:d,dateValue:p,defaultDateValue:P,onDateValueChange:D,selectedDateValue:S,defaultSelectedDateValue:k,onSelectedDateValueChange:m,cell:l,locale:r=L,prevButtonProps:x,nextButtonProps:g,...V})=>{const[j,q]=f.useState(c||"months"),n=t||j,y=u=>{q(u),d==null||d(u)},[w,T]=f.useState(P||Y(r==null?void 0:r.localeName)),a=p||w,o=u=>{T(u),D==null||D(u)},[b,_]=f.useState(k),B=S||b,W=u=>{_(u),m==null||m(u)},H=u=>{W(u)},I=u=>{const C=a.year(u.year());o(C),y("months")},N=u=>{switch(u.target.dataset.panelTargetType){case"left":o(n==="months"?a.subtract(1,"year"):a.subtract(A,"year"));break;case"right":o(n==="months"?a.add(1,"year"):a.add(A,"year"));break;case"year":y(n==="years"?"months":"years");break}};return e.jsxs(R,{children:[e.jsx(O,{date:a,viewMode:n,locale:r,onClick:N,prevButtonProps:x,nextButtonProps:g}),e.jsxs(z,{children:[e.jsx($,{...V,cell:l==null?void 0:l.monthCell,dateValue:a,selectedDateValue:B,onSelectedDateValueChange:H,locale:r,$isVisible:n==="months"}),e.jsx(G,{...V,cell:l==null?void 0:l.yearCell,dateValue:a,selectedDateValue:B,onSelectedDateValueChange:I,locale:r,$isVisible:n==="years"})]})]})};try{s.displayName="MonthPickerCalendar",s.__docgenInfo={description:"",displayName:"MonthPickerCalendar",props:{dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const E=t=>{const c=d=>{const p=d.target.dataset.value;console.log(`click on ${p}`)};return e.jsxs(K,{children:[e.jsx(s,{...t,onClick:c}),e.jsxs(J,{children:[e.jsx(h,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор месяца"}),e.jsxs(h,{font:"Body/Body 2 Long",as:"div",children:["Клик на год открывает экран выбора года. Вернуться на экран выбора месяца можно выбрав год, либо нажав на год в шапке календаря.",e.jsx("br",{}),e.jsx("br",{}),"Стрелки влево-вправо позволяют менять год."]})]})]})};try{E.displayName="MonthPickerCalendarSimpleTemplate",E.__docgenInfo={description:"",displayName:"MonthPickerCalendarSimpleTemplate",props:{dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const U=`import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { MonthPickerCalendarProps } from '@admiral-ds/date-picker';
import { MonthPickerCalendar } from '#lib/MonthPickerCalendar';

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
`,E4={title:"Admiral-2.1/Date Picker/MonthPickerCalendar",component:s,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},defaultDateValue:{control:{type:"text"}},onDateValueChange:{control:!1},locale:{control:!1}}},Z=t=>e.jsx(E,{...t}),i={render:Z,parameters:{docs:{source:{code:U}}},name:"Выбор месяца"};var v,F,M;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: MonthPickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: MonthPickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор месяца'
}`,...(M=(F=i.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const V4=["MonthPickerCalendarSimple"];export{i as MonthPickerCalendarSimple,V4 as __namedExportsOrder,E4 as default};

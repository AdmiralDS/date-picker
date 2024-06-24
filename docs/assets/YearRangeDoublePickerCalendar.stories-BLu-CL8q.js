import{j as e}from"./tslib.es6-gXVSDp23.js";import{r as s}from"./index-uubelm5h.js";import{g as Q,x as S,r as X}from"./index-BmDKb8-G.js";import{T as R}from"./index-WHSI1cSm.js";import{Y as d}from"./index-CRcsup42.js";import{a as u4,b as k,C as P,f as x,W as e4,d as a4,T}from"./common-Bv7mrnSY.js";import"./index-CDFRDas0.js";import"./typography.es-zceevOJ_.js";import"./ChevronRightOutline-CZSof5K9.js";import"./index-Dei0BBcc.js";import"./DropdownProvider.es-CSByVTCf.js";import"./index-BK0VveLK.js";import"./index-BwEGqyV7.js";import"./index-DE_Uz_sS.js";import"./index-CnCv02sI.js";import"./index-XsyWP5nu.js";import"./index-EHZnHVT3.js";import"./index-BCJ8Ydv3.js";const D=({dateRangeValue:a,defaultDateRangeValue:n,onDateRangeValueChange:l,selectedDateRangeValue:p,defaultSelectedDateRangeValue:w,onSelectedDateRangeValueChange:m,activeDateValue:L,defaultActiveDateValue:W,onActiveDateValueChange:f,cell:o,locale:i=X,prevButtonProps:B,nextButtonProps:C,...A})=>{const[N,H]=s.useState((n==null?void 0:n[0])||Q(i==null?void 0:i.localeName)),t=(a==null?void 0:a[0])||N,y=u=>{H(u),l==null||l([u,r])},[M,I]=s.useState((n==null?void 0:n[1])||t.add(d,"year")),r=(a==null?void 0:a[1])||M,E=u=>{I(u),l==null||l([t,u])};s.useEffect(()=>{S(t,r,"year")&&E(t.add(d,"year"))},[t]),s.useEffect(()=>{S(r,t,"year")&&y(r.subtract(d,"year"))},[r]);const[z,$]=s.useState(W),v=L||z,j=u=>{$(u),f==null||f(u)},[G,O]=s.useState(w),F=p||G,V=u=>{O(u),m==null||m(u)},[b,Z]=s.useState(),h=u=>{Z(u)},K=u=>{switch(u.target.dataset.panelTargetType){case"left":y(t.subtract(d,"year"));break;case"right":y(t.add(d,"year"));break}},J=u=>{switch(u.target.dataset.panelTargetType){case"left":E(r.subtract(d,"year"));break;case"right":E(r.add(d,"year"));break}};return e.jsxs(u4,{children:[e.jsxs(k,{children:[e.jsx(R,{date:t,viewMode:"years",locale:i,onClick:K,prevButtonProps:B,nextButtonProps:C}),e.jsx(P,{children:e.jsx(x,{...A,cell:o==null?void 0:o.yearCell,dateValue:t,selectedDateRangeValue:F,onSelectedDateRangeValueChange:V,activeDateValue:v,onActiveDateValueChange:j,activeDateRangeEndValue:b,onActiveDateRangeEndValueChange:h,locale:i,$isVisible:!0})})]}),e.jsxs(k,{children:[e.jsx(R,{date:r,viewMode:"years",locale:i,onClick:J,prevButtonProps:B,nextButtonProps:C}),e.jsx(P,{children:e.jsx(x,{...A,cell:o==null?void 0:o.yearCell,dateValue:r,selectedDateRangeValue:F,onSelectedDateRangeValueChange:V,activeDateValue:v,onActiveDateValueChange:j,activeDateRangeEndValue:b,onActiveDateRangeEndValueChange:h,locale:i,$isVisible:!0})})]})]})};try{D.displayName="YearRangeDoublePickerCalendar",D.__docgenInfo={description:"",displayName:"YearRangeDoublePickerCalendar",props:{locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},dateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"dateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs]"}},defaultDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const g=a=>{const n=l=>{const p=l.target.dataset.value;console.log(`click on ${p}`)};return e.jsxs(e4,{children:[e.jsx(D,{...a,onClick:n}),e.jsxs(a4,{children:[e.jsx(T,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона лет"}),e.jsxs(T,{font:"Body/Body 2 Long",as:"div",children:["Части сдвоенного календаря ведут себя независимо, то есть при взаимодействии с одной его частью, вторая не меняется. Первый пункт работает до тех пор, пока левая часть «младше» правой.",e.jsx("br",{}),e.jsx("br",{}),"В случае, когда мы меняем правую часть так, что выбранный в ней диапазон лет «младше», чем в левой части, то левая часть подстраивается, отображая диапазон лет стоящий перед тем, который в правой. И наоборот."]})]})]})};try{g.displayName="YearRangeDoublePickerCalendarSimpleTemplate",g.__docgenInfo={description:"",displayName:"YearRangeDoublePickerCalendarSimpleTemplate",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},dateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"dateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs]"}},defaultDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const t4=`import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { YearRangeDoublePickerCalendarProps } from '@admiral-ds/date-picker';
import { YearRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const YearRangeDoublePickerCalendarSimpleTemplate = (props: YearRangeDoublePickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return (
    <WrapperHorizontal>
      <YearRangeDoublePickerCalendar
        {...props}
        onClick={handleClick}
        //defaultSelectedDateRangeValue={['2023-10-08T12:00:00Z', '2028-10-16T12:00:00Z']}
      />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор диапазона лет
        </T>
        <T font="Body/Body 2 Long" as="div">
          Части сдвоенного календаря ведут себя независимо, то есть при взаимодействии с одной его частью, вторая не
          меняется. Первый пункт работает до тех пор, пока левая часть «младше» правой.
          <br />
          <br />В случае, когда мы меняем правую часть так, что выбранный в ней диапазон лет «младше», чем в левой
          части, то левая часть подстраивается, отображая диапазон лет стоящий перед тем, который в правой. И наоборот.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};
`,j4={title:"Admiral-2.1/Double Range Picker/YearRangeDoublePickerCalendar",component:D,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},r4=a=>e.jsx(g,{...a}),c={render:r4,parameters:{docs:{source:{code:t4}}},name:"Сдвоенный календарь выбора лет"};var q,Y,_;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: YearRangeDoublePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearRangeDoublePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Сдвоенный календарь выбора лет'
}`,...(_=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};const F4=["YearRangeDoublePickerCalendarSimple"];export{c as YearRangeDoublePickerCalendarSimple,F4 as __namedExportsOrder,j4 as default};

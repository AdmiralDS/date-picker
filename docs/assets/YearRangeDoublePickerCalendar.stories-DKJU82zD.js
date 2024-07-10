import{j as e}from"./tslib.es6-gXVSDp23.js";import{r as s}from"./index-uubelm5h.js";import{g as Q,x as S,r as X}from"./index-Lg2VQURa.js";import{T as k}from"./index-lZSNM9iu.js";import{Y as d}from"./index-CQzR3wtX.js";import{c as u4,d as P,C as j,f as x,W as e4,b as a4,T}from"./common-y18Jnvfl.js";import"./index-CTEAhEde.js";import"./typography.es-zceevOJ_.js";import"./ChevronRightOutline-D_ms2TvK.js";import"./index-Dei0BBcc.js";import"./DropdownProvider.es-CSByVTCf.js";import"./index-Os4r39UD.js";import"./index-DH4-umzn.js";import"./index-BlQhhH40.js";import"./index-DuZs-Nu7.js";import"./index-DQmo8QVe.js";import"./index-BAqvSN_y.js";import"./index-Psa4Kny8.js";const D=({dateRangeValue:a,defaultDateRangeValue:n,onDateRangeValueChange:l,selectedDateRangeValue:p,defaultSelectedDateRangeValue:w,onSelectedDateRangeValueChange:m,activeDateValue:L,defaultActiveDateValue:W,onActiveDateValueChange:f,cell:o,locale:i=X,prevButtonProps:B,nextButtonProps:C,...A})=>{const[N,H]=s.useState((n==null?void 0:n[0])||Q(i==null?void 0:i.localeName)),t=(a==null?void 0:a[0])||N,E=u=>{H(u),l==null||l([u,r])},[M,I]=s.useState((n==null?void 0:n[1])||t.add(d,"year")),r=(a==null?void 0:a[1])||M,y=u=>{I(u),l==null||l([t,u])};s.useEffect(()=>{S(t,r,"year")&&y(t.add(d,"year"))},[t]),s.useEffect(()=>{S(r,t,"year")&&E(r.subtract(d,"year"))},[r]);const[z,$]=s.useState(W),v=L||z,F=u=>{$(u),f==null||f(u)},[G,O]=s.useState(w),V=p||G,R=u=>{O(u),m==null||m(u)},[b,Z]=s.useState(),h=u=>{Z(u)},K=u=>{switch(u.target.dataset.panelTargetType){case"left":E(t.subtract(d,"year"));break;case"right":E(t.add(d,"year"));break}},J=u=>{switch(u.target.dataset.panelTargetType){case"left":y(r.subtract(d,"year"));break;case"right":y(r.add(d,"year"));break}};return e.jsxs(u4,{children:[e.jsxs(P,{children:[e.jsx(k,{date:t,viewMode:"years",locale:i,onClick:K,prevButtonProps:B,nextButtonProps:C}),e.jsx(j,{children:e.jsx(x,{...A,cell:o==null?void 0:o.yearCell,dateValue:t,selectedDateRangeValue:V,onSelectedDateRangeValueChange:R,activeDateValue:v,onActiveDateValueChange:F,activeDateRangeEndValue:b,onActiveDateRangeEndValueChange:h,locale:i,$isVisible:!0})})]}),e.jsxs(P,{children:[e.jsx(k,{date:r,viewMode:"years",locale:i,onClick:J,prevButtonProps:B,nextButtonProps:C}),e.jsx(j,{children:e.jsx(x,{...A,cell:o==null?void 0:o.yearCell,dateValue:r,selectedDateRangeValue:V,onSelectedDateRangeValueChange:R,activeDateValue:v,onActiveDateValueChange:F,activeDateRangeEndValue:b,onActiveDateRangeEndValueChange:h,locale:i,$isVisible:!0})})]})]})};try{D.displayName="YearRangeDoublePickerCalendar",D.__docgenInfo={description:"",displayName:"YearRangeDoublePickerCalendar",props:{selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"DateRange"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"DateRange"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: DateRange) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"dateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs]"}},defaultDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const g=a=>{const n=l=>{const p=l.target.dataset.value;console.log(`click on ${p}`)};return e.jsxs(e4,{children:[e.jsx(D,{...a,onClick:n}),e.jsxs(a4,{children:[e.jsx(T,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона лет"}),e.jsxs(T,{font:"Body/Body 2 Long",as:"div",children:["Части сдвоенного календаря ведут себя независимо, то есть при взаимодействии с одной его частью, вторая не меняется. Первый пункт работает до тех пор, пока левая часть «младше» правой.",e.jsx("br",{}),e.jsx("br",{}),"В случае, когда мы меняем правую часть так, что выбранный в ней диапазон лет «младше», чем в левой части, то левая часть подстраивается, отображая диапазон лет стоящий перед тем, который в правой. И наоборот."]})]})]})};try{g.displayName="YearRangeDoublePickerCalendarSimpleTemplate",g.__docgenInfo={description:"",displayName:"YearRangeDoublePickerCalendarSimpleTemplate",props:{selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"DateRange"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"DateRange"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: DateRange) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"dateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs]"}},defaultDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const t4=`import type { MouseEventHandler } from 'react';

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
`,F4={title:"Admiral-2.1/Double Range Picker/YearRangeDoublePickerCalendar",component:D,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},r4=a=>e.jsx(g,{...a}),c={render:r4,parameters:{docs:{source:{code:t4}}},name:"Сдвоенный календарь выбора лет"};var q,Y,_;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: YearRangeDoublePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearRangeDoublePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Сдвоенный календарь выбора лет'
}`,...(_=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};const V4=["YearRangeDoublePickerCalendarSimple"];export{c as YearRangeDoublePickerCalendarSimple,V4 as __namedExportsOrder,F4 as default};

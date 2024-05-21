import{j as u}from"./styled-components.browser.esm-DrTmyIAt.js";import{r}from"./index-CDs2tPxN.js";import{N as Q,z as j,o as U}from"./index-CaQ8XlvV.js";import{j as k}from"./index--KAhwGws.js";import{A as n}from"./index-Be6cgLpj.js";import{v as X,x as P,S,I as x}from"./calendarStyle-D5URKbyB.js";import{W as ee,a as ue,T as F}from"./common-CDJ8tmOp.js";import"./tslib.es6-CRos2fHm.js";import"./ru-lGojcqRe.js";import"./typography.es-DSm7pTxC.js";import"./index.es-n1eWmiMq.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-BaHm9Kb7.js";import"./index-DDgR2ROP.js";import"./index-QWFBIMH2.js";import"./index-BcVcSavK.js";import"./index-Y8ituuGQ.js";import"./index-f_P1f7s3.js";import"./index-7NNlG1Bn.js";import"./index-nA2Ey_1t.js";import"./index-CSAbbKMT.js";const w=({dateRangeValue:t,defaultDateRangeValue:o,onDateRangeValueChange:i,selectedDateRangeValue:p,defaultSelectedDateRangeValue:_,onSelectedDateRangeValueChange:f,activeDateValue:H,defaultActiveDateValue:W,onActiveDateValueChange:V,cell:s,locale:d=U,prevButtonProps:y,nextButtonProps:C,...E})=>{const[$,z]=r.useState((o==null?void 0:o[0])||Q(d==null?void 0:d.localeName)),a=(t==null?void 0:t[0])||$,D=e=>{z(e),i==null||i([e,l])},[L,M]=r.useState((o==null?void 0:o[1])||a.add(n,"year")),l=(t==null?void 0:t[1])||L,m=e=>{M(e),i==null||i([a,e])};r.useEffect(()=>{j(a,l,"year")&&m(a.add(n,"year"))},[a]),r.useEffect(()=>{j(l,a,"year")&&D(l.subtract(n,"year"))},[l]);const[G,N]=r.useState(W),R=H||G,v=e=>{N(e),V==null||V(e)},[I,K]=r.useState(_),B=p||I,A=e=>{K(e),f==null||f(e)},[b,Z]=r.useState(),h=e=>{Z(e)},J=e=>{switch(e.target.dataset.panelTargetType){case"left":D(a.subtract(n,"year"));break;case"right":D(a.add(n,"year"));break}},O=e=>{switch(e.target.dataset.panelTargetType){case"left":m(l.subtract(n,"year"));break;case"right":m(l.add(n,"year"));break}};return u.jsxs(X,{children:[u.jsxs(P,{children:[u.jsx(k,{date:a,viewMode:"years",locale:d,onClick:J,prevButtonProps:y,nextButtonProps:C}),u.jsx(S,{children:u.jsx(x,{...E,cell:s==null?void 0:s.yearCell,dateValue:a,selectedDateRangeValue:B,onSelectedDateRangeValueChange:A,activeDateValue:R,onActiveDateValueChange:v,activeDateRangeEndValue:b,onActiveDateRangeEndValueChange:h,locale:d,$isVisible:!0})})]}),u.jsxs(P,{children:[u.jsx(k,{date:l,viewMode:"years",locale:d,onClick:O,prevButtonProps:y,nextButtonProps:C}),u.jsx(S,{children:u.jsx(x,{...E,cell:s==null?void 0:s.yearCell,dateValue:l,selectedDateRangeValue:B,onSelectedDateRangeValueChange:A,activeDateValue:R,onActiveDateValueChange:v,activeDateRangeEndValue:b,onActiveDateRangeEndValueChange:h,locale:d,$isVisible:!0})})]})]})},g=t=>{const o=i=>{const p=i.target.dataset.value;console.log(`click on ${p}`)};return u.jsxs(ee,{children:[u.jsx(w,{...t,onClick:o}),u.jsxs(ue,{children:[u.jsx(F,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона лет"}),u.jsxs(F,{font:"Body/Body 2 Long",as:"div",children:["Части сдвоенного календаря ведут себя независимо, то есть при взаимодействии с одной его частью, вторая не меняется. Первый пункт работает до тех пор, пока левая часть «младше» правой.",u.jsx("br",{}),u.jsx("br",{}),"В случае, когда мы меняем правую часть так, что выбранный в ней диапазон лет «младше», чем в левой части, то левая часть подстраивается, отображая диапазон лет стоящий перед тем, который в правой. И наоборот."]})]})]})};try{g.displayName="YearRangeDoublePickerCalendarSimpleTemplate",g.__docgenInfo={description:"",displayName:"YearRangeDoublePickerCalendarSimpleTemplate",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},dateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"dateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs]"}},defaultDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const ae=`import type { MouseEventHandler } from 'react';

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
`,be={title:"Admiral-2.1/Double Range Picker/YearRangeDoublePickerCalendar",component:w,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},te=t=>u.jsx(g,{...t}),c={render:te,parameters:{docs:{source:{code:ae}}},name:"Сдвоенный календарь выбора лет"};var T,Y,q;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: YearRangeDoublePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearRangeDoublePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Сдвоенный календарь выбора лет'
}`,...(q=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};const he=["YearRangeDoublePickerCalendarSimple"];export{c as YearRangeDoublePickerCalendarSimple,he as __namedExportsOrder,be as default};

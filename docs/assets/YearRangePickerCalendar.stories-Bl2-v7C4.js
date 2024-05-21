import{j as u}from"./styled-components.browser.esm-DrTmyIAt.js";import{r as m}from"./index-CDs2tPxN.js";import{N as x,o as F}from"./index-CaQ8XlvV.js";import{j as b}from"./index--KAhwGws.js";import{A as D}from"./index-Be6cgLpj.js";import{_ as T,S as Y,I as q}from"./calendarStyle-D5URKbyB.js";import{W as _,a as w,T as f}from"./common-CDJ8tmOp.js";import"./tslib.es6-CRos2fHm.js";import"./ru-lGojcqRe.js";import"./typography.es-DSm7pTxC.js";import"./index.es-n1eWmiMq.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-BaHm9Kb7.js";import"./index-DDgR2ROP.js";import"./index-QWFBIMH2.js";import"./index-BcVcSavK.js";import"./index-Y8ituuGQ.js";import"./index-f_P1f7s3.js";import"./index-7NNlG1Bn.js";import"./index-nA2Ey_1t.js";import"./index-CSAbbKMT.js";const E=({dateValue:a,defaultDateValue:o,onDateValueChange:r,selectedDateRangeValue:i,defaultSelectedDateRangeValue:V,onSelectedDateRangeValueChange:s,cell:c,locale:t=F,prevButtonProps:B,nextButtonProps:A,...k})=>{const[P,R]=m.useState(o||x(t==null?void 0:t.localeName)),l=a||P,p=e=>{R(e),r==null||r(e)},[j,v]=m.useState(V),S=i||j,h=e=>{v(e),s==null||s(e)};return u.jsxs(T,{children:[u.jsx(b,{date:l,viewMode:"years",locale:t,onClick:e=>{switch(e.target.dataset.panelTargetType){case"left":p(l.subtract(D,"year"));break;case"right":p(l.add(D,"year"));break}},prevButtonProps:B,nextButtonProps:A}),u.jsx(Y,{children:u.jsx(q,{...k,cell:c==null?void 0:c.yearCell,dateValue:l,selectedDateRangeValue:S,onSelectedDateRangeValueChange:h,locale:t,$isVisible:!0})})]})},d=a=>{const o=r=>{const i=r.target.dataset.value;console.log(`click on ${i}`)};return u.jsxs(_,{children:[u.jsx(E,{...a,onClick:o}),u.jsxs(w,{children:[u.jsx(f,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона лет"}),u.jsxs(f,{font:"Body/Body 2 Long",as:"div",children:["При первом клике на год он выделяется синим. Далее ведем курсор ко второму году, годы автоматически закрашиваются во всем диапазоне до года под курсором.",u.jsx("br",{}),"При клике на второй год он также выделяется синим. Диапазон лет выбран.",u.jsx("br",{}),u.jsx("br",{}),"Стрелки влево-вправо позволяют менять временной интервал."]})]})]})};try{d.displayName="YearRangePickerCalendarSimpleTemplate",d.__docgenInfo={description:"",displayName:"YearRangePickerCalendarSimpleTemplate",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const W=`import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { YearRangePickerCalendarProps } from '@admiral-ds/date-picker';
import { YearRangePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const YearRangePickerCalendarSimpleTemplate = (props: YearRangePickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return (
    <WrapperHorizontal>
      <YearRangePickerCalendar {...props} onClick={handleClick} />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор диапазона лет
        </T>
        <T font="Body/Body 2 Long" as="div">
          При первом клике на год он выделяется синим. Далее ведем курсор ко второму году, годы автоматически
          закрашиваются во всем диапазоне до года под курсором.
          <br />
          При клике на второй год он также выделяется синим. Диапазон лет выбран.
          <br />
          <br />
          Стрелки влево-вправо позволяют менять временной интервал.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};
`,ou={title:"Admiral-2.1/Range Picker/YearRangePickerCalendar",component:E,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},H=a=>u.jsx(d,{...a}),n={render:H,parameters:{docs:{source:{code:W}}},name:"Выбор диапазона лет"};var g,y,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: YearRangePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearRangePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона лет'
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const iu=["YearRangePickerCalendarSimple"];export{n as YearRangePickerCalendarSimple,iu as __namedExportsOrder,ou as default};

import{j as u}from"./typography.es-DJ4WRfsu.js";import{r as m}from"./index-RYns6xqu.js";import{g as T,r as j}from"./index-BdAXGuOE.js";import{T as q}from"./index-Clmvnrvz.js";import{Y as f}from"./index-9KIR3UVS.js";import{S as Y,C as b,f as _,W as w,b as W,T as E}from"./common-CJaXr_SW.js";import"./index-Cv72DKl5.js";import"./ChevronRightOutline-CjgoEkVb.js";import"./index-BQaZqJLe.js";import"./DropdownProvider.es-DMHOw4-n.js";import"./index-DDkwD5gS.js";import"./index--RnFdRoh.js";import"./index-BfQKxCpe.js";import"./index-bQnesnJw.js";import"./index-ti-zF8g1.js";import"./index-CmTVwR-P.js";import"./index-D9zx5Urx.js";const i=({dateValue:e,defaultDateValue:d,onDateValueChange:t,selectedDateRangeValue:s,defaultSelectedDateRangeValue:C,onSelectedDateRangeValueChange:o,cell:c,locale:r=j,prevButtonProps:V,nextButtonProps:A,...F})=>{const[R,v]=m.useState(d||T(r==null?void 0:r.localeName)),l=e||R,D=a=>{v(a),t==null||t(a)},[P,k]=m.useState(C),x=s||P,h=a=>{k(a),o==null||o(a)},S=a=>{switch(a.target.dataset.panelTargetType){case"left":D(l.subtract(f,"year"));break;case"right":D(l.add(f,"year"));break}};return u.jsxs(Y,{children:[u.jsx(q,{date:l,viewMode:"years",locale:r,onClick:S,prevButtonProps:V,nextButtonProps:A}),u.jsx(b,{children:u.jsx(_,{...F,cell:c==null?void 0:c.yearCell,dateValue:l,selectedDateRangeValue:x,onSelectedDateRangeValueChange:h,locale:r,$isVisible:!0})})]})};try{i.displayName="YearRangePickerCalendar",i.__docgenInfo={description:"",displayName:"YearRangePickerCalendar",props:{dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"DateRange"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"DateRange"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: DateRange) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const p=e=>{const d=t=>{const s=t.target.dataset.value;console.log(`click on ${s}`)};return u.jsxs(w,{children:[u.jsx(i,{...e,onClick:d}),u.jsxs(W,{children:[u.jsx(E,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона лет"}),u.jsxs(E,{font:"Body/Body 2 Long",as:"div",children:["При первом клике на год он выделяется синим. Далее ведем курсор ко второму году, годы автоматически закрашиваются во всем диапазоне до года под курсором.",u.jsx("br",{}),"При клике на второй год он также выделяется синим. Диапазон лет выбран.",u.jsx("br",{}),u.jsx("br",{}),"Стрелки влево-вправо позволяют менять временной интервал."]})]})]})};try{p.displayName="YearRangePickerCalendarSimpleTemplate",p.__docgenInfo={description:"",displayName:"YearRangePickerCalendarSimpleTemplate",props:{dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"DateRange"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"DateRange"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: DateRange) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const H=`import type { MouseEventHandler } from 'react';

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
`,l4={title:"Admiral-2.1/Range Picker/YearRangePickerCalendar",component:i,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},N=e=>u.jsx(p,{...e}),n={render:N,parameters:{docs:{source:{code:H}}},name:"Выбор диапазона лет"};var g,B,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: YearRangePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearRangePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона лет'
}`,...(y=(B=n.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};const n4=["YearRangePickerCalendarSimple"];export{n as YearRangePickerCalendarSimple,n4 as __namedExportsOrder,l4 as default};

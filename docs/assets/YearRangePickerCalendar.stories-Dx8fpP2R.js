import{j as u}from"./tslib.es6-gXVSDp23.js";import{r as m}from"./index-uubelm5h.js";import{g as S,r as T}from"./index-B-lRfg65.js";import{T as q}from"./index-DsyPLokG.js";import{Y as f}from"./index-MLNV-xYt.js";import{S as Y,C as b,f as _,W as w,d as W,T as E}from"./common-D_k6ocUl.js";import"./index-DdKkwQzq.js";import"./typography.es-zceevOJ_.js";import"./ChevronRightOutline-DAmKuVUD.js";import"./index-Dei0BBcc.js";import"./DropdownProvider.es-CSByVTCf.js";import"./index-CvEO7yq1.js";import"./index-CEeWF_8x.js";import"./index-C6nl3JsG.js";import"./index-DFy_Fcck.js";import"./index-DBOz1bEl.js";import"./index-gsbl81y6.js";import"./index-BC8IC5Jy.js";const i=({dateValue:e,defaultDateValue:d,onDateValueChange:t,selectedDateRangeValue:s,defaultSelectedDateRangeValue:C,onSelectedDateRangeValueChange:o,cell:p,locale:r=T,prevButtonProps:V,nextButtonProps:A,...F})=>{const[j,v]=m.useState(d||S(r==null?void 0:r.localeName)),n=e||j,D=a=>{v(a),t==null||t(a)},[P,R]=m.useState(C),k=s||P,x=a=>{R(a),o==null||o(a)},h=a=>{switch(a.target.dataset.panelTargetType){case"left":D(n.subtract(f,"year"));break;case"right":D(n.add(f,"year"));break}};return u.jsxs(Y,{children:[u.jsx(q,{date:n,viewMode:"years",locale:r,onClick:h,prevButtonProps:V,nextButtonProps:A}),u.jsx(b,{children:u.jsx(_,{...F,cell:p==null?void 0:p.yearCell,dateValue:n,selectedDateRangeValue:k,onSelectedDateRangeValueChange:x,locale:r,$isVisible:!0})})]})};try{i.displayName="YearRangePickerCalendar",i.__docgenInfo={description:"",displayName:"YearRangePickerCalendar",props:{defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const c=e=>{const d=t=>{const s=t.target.dataset.value;console.log(`click on ${s}`)};return u.jsxs(w,{children:[u.jsx(i,{...e,onClick:d}),u.jsxs(W,{children:[u.jsx(E,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона лет"}),u.jsxs(E,{font:"Body/Body 2 Long",as:"div",children:["При первом клике на год он выделяется синим. Далее ведем курсор ко второму году, годы автоматически закрашиваются во всем диапазоне до года под курсором.",u.jsx("br",{}),"При клике на второй год он также выделяется синим. Диапазон лет выбран.",u.jsx("br",{}),u.jsx("br",{}),"Стрелки влево-вправо позволяют менять временной интервал."]})]})]})};try{c.displayName="YearRangePickerCalendarSimpleTemplate",c.__docgenInfo={description:"",displayName:"YearRangePickerCalendarSimpleTemplate",props:{defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const H=`import type { MouseEventHandler } from 'react';

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
`,l4={title:"Admiral-2.1/Range Picker/YearRangePickerCalendar",component:i,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},N=e=>u.jsx(c,{...e}),l={render:N,parameters:{docs:{source:{code:H}}},name:"Выбор диапазона лет"};var y,B,g;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: YearRangePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearRangePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона лет'
}`,...(g=(B=l.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};const i4=["YearRangePickerCalendarSimple"];export{l as YearRangePickerCalendarSimple,i4 as __namedExportsOrder,l4 as default};

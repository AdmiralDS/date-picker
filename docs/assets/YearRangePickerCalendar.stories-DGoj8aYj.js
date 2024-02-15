import{j as u}from"./typography.es-y01boJtk.js";import{j as o}from"./index-BFF3TPkQ.js";import"./index-DmuP904s.js";import{W as c,a as m,T as t}from"./common-rE7tjdqG.js";import"./index-BBkUAzwr.js";import"./index-Br7a5yOA.js";import"./ChevronRightOutline-Cu42pdAX.js";import"./index-PqR-_bA4.js";import"./DropdownProvider.es-qCbMjVMC.js";import"./index-BwiDr1EV.js";import"./index-IJ8CtnyN.js";import"./index-kP9Ee9L1.js";import"./index-CoxCimnh.js";const r=e=>{const d=s=>{const p=s.target.dataset.value;console.log(`click on ${p}`)};return u.jsxs(c,{children:[u.jsx(o,{...e,onClick:d}),u.jsxs(m,{children:[u.jsx(t,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона лет"}),u.jsxs(t,{font:"Body/Body 2 Long",as:"div",children:["При первом клике на год он выделяется синим. Далее ведем курсор ко второму году, годы автоматически закрашиваются во всем диапазоне до года под курсором.",u.jsx("br",{}),"При клике на второй год он также выделяется синим. Диапазон лет выбран.",u.jsx("br",{}),u.jsx("br",{}),"Стрелки влево-вправо позволяют менять временной интервал."]})]})]})};try{r.displayName="YearRangePickerCalendarSimpleTemplate",r.__docgenInfo={description:"",displayName:"YearRangePickerCalendarSimpleTemplate",props:{dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"cellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const D=`import type { MouseEventHandler } from 'react';

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
`,S={title:"Admiral-2.1/Range Picker/YearRangePickerCalendar",component:o,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},f=e=>u.jsx(r,{...e}),a={render:f,parameters:{docs:{source:{code:D}}},name:"Выбор диапазона лет"};var l,n,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: YearRangePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearRangePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона лет'
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const h=["YearRangePickerCalendarSimple"];export{a as YearRangePickerCalendarSimple,h as __namedExportsOrder,S as default};

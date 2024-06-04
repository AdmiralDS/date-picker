import{j as u}from"./typography.es-CjQrIQMn.js";import{l as i}from"./index.es-De8x7dLl.js";import{W as c,a as D,T as t}from"./common-DpnS3vu6.js";import"./index-CDs2tPxN.js";import"./tslib.es6-CRos2fHm.js";import"./ChevronRightOutline-DIae5nKi.js";import"./ru-lGojcqRe.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-Dczk-0Um.js";const l=e=>{const d=s=>{const p=s.target.dataset.value;console.log(`click on ${p}`)};return u.jsxs(c,{children:[u.jsx(i,{...e,onClick:d}),u.jsxs(D,{children:[u.jsx(t,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона месяцев"}),u.jsxs(t,{font:"Body/Body 2 Long",as:"div",children:["Части сдвоенного календаря ведут себя независимо, то есть при взаимодействии с одной его частью, вторая не меняется. Первый пункт работает до тех пор, пока левая часть «младше» правой.",u.jsx("br",{}),u.jsx("br",{}),"В случае, когда мы меняем правую часть так, что выбранный в ней год «младше», чем в левой части, то левая часть подстраивается, отображая год, стоящий перед тем, который в правой. И наоборот."]})]})]})};try{l.displayName="MonthRangeDoublePickerCalendarSimpleTemplate",l.__docgenInfo={description:"",displayName:"MonthRangeDoublePickerCalendarSimpleTemplate",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},dateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"dateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs]"}},defaultDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const m=`import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { MonthRangeDoublePickerCalendarProps } from '@admiral-ds/date-picker';
import { MonthRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const MonthRangeDoublePickerCalendarSimpleTemplate = (props: MonthRangeDoublePickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return (
    <WrapperHorizontal>
      <MonthRangeDoublePickerCalendar
        {...props}
        onClick={handleClick}
        //defaultSelectedDateRangeValue={['2023-10-01T12:00:00Z', '2024-07-01T12:00:00Z']}
      />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор диапазона месяцев
        </T>
        <T font="Body/Body 2 Long" as="div">
          Части сдвоенного календаря ведут себя независимо, то есть при взаимодействии с одной его частью, вторая не
          меняется. Первый пункт работает до тех пор, пока левая часть «младше» правой.
          <br />
          <br />В случае, когда мы меняем правую часть так, что выбранный в ней год «младше», чем в левой части, то
          левая часть подстраивается, отображая год, стоящий перед тем, который в правой. И наоборот.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};
`,v={title:"Admiral-2.1/Double Range Picker/MonthRangeDoublePickerCalendar",component:i,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},f=e=>u.jsx(l,{...e}),a={render:f,parameters:{docs:{source:{code:m}}},name:"Сдвоенный календарь выбора месяцев"};var n,r,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: MonthRangeDoublePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: MonthRangeDoublePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Сдвоенный календарь выбора месяцев'
}`,...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const b=["MonthRangeDoublePickerCalendarSimple"];export{a as MonthRangeDoublePickerCalendarSimple,b as __namedExportsOrder,v as default};

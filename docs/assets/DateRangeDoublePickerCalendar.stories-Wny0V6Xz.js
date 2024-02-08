import{j as u}from"./styled-components.browser.esm-7zUEPxZV.js";import{D as o}from"./index-91mimT7-.js";import"./index-GEu7UUTq.js";import{W as c,a as p,T as t}from"./common-vH4ykEee.js";import"./index-DogsOklH.js";import"./index-iEjp33-N.js";import"./ChevronRightOutline-2Sr-EFPQ.js";import"./index-MroJ3egt.js";import"./DropdownProvider.es-vuRa4WZF.js";import"./index-ppHAGUN8.js";import"./index-ItCXVjST.js";import"./index-LrOJhR-V.js";import"./index-CppLjZWP.js";import"./index.es-8dT2HbVl.js";const l=e=>{const d=s=>{const D=s.target.dataset.value;console.log(`click on ${D}`)};return u.jsxs(c,{children:[u.jsx(o,{...e,onClick:d}),u.jsxs(p,{children:[u.jsx(t,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона дат"}),u.jsxs(t,{font:"Body/Body 2 Long",as:"div",children:["Части сдвоенного календаря ведут себя независимо, то есть при взаимодействии с одной его частью, вторая не меняется. Первый пункт работает до тех пор, пока левая часть «младше» правой.",u.jsx("br",{}),u.jsx("br",{}),"В случае, когда мы меняем правую часть так, что выбранный в ней месяц года «младше», чем в левой части, то левая часть подстраивается, отображая месяц стоящий перед тем, который в правой. И наоборот."]})]})]})};try{l.displayName="DateRangeDoublePickerCalendarSimpleTemplate",l.__docgenInfo={description:"",displayName:"DateRangeDoublePickerCalendarSimpleTemplate",props:{selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"dateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs]"}},defaultDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"cellProps"}}}}}catch{}const m=`import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { DateRangeDoublePickerCalendarProps } from '@admiral-ds/date-picker';
import { DateRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const DateRangeDoublePickerCalendarSimpleTemplate = (props: DateRangeDoublePickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return (
    <WrapperHorizontal>
      <DateRangeDoublePickerCalendar
        {...props}
        onClick={handleClick}
        //defaultSelectedDateRangeValue={['2023-10-01T12:00:00Z', '2024-07-01T12:00:00Z']}
      />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор диапазона дат
        </T>
        <T font="Body/Body 2 Long" as="div">
          Части сдвоенного календаря ведут себя независимо, то есть при взаимодействии с одной его частью, вторая не
          меняется. Первый пункт работает до тех пор, пока левая часть «младше» правой.
          <br />
          <br />В случае, когда мы меняем правую часть так, что выбранный в ней месяц года «младше», чем в левой части,
          то левая часть подстраивается, отображая месяц стоящий перед тем, который в правой. И наоборот.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};
`,S={title:"Admiral-2.1/Double Range Picker/DateRangeDoublePickerCalendar",component:o,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},f=e=>u.jsx(l,{...e}),a={render:f,parameters:{docs:{source:{code:m}}},name:"Сдвоенный календарь выбора дат"};var r,n,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: DateRangeDoublePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: DateRangeDoublePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Сдвоенный календарь выбора дат'
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const F=["DateRangeDoublePickerCalendarSimple"];export{a as DateRangeDoublePickerCalendarSimple,F as __namedExportsOrder,S as default};

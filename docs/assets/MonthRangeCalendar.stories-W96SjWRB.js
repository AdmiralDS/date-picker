import{j as r}from"./styled-components.browser.esm-7zUEPxZV.js";import{g as d}from"./index-91mimT7-.js";import"./index-GEu7UUTq.js";import"./index-DogsOklH.js";import"./index-iEjp33-N.js";import"./ChevronRightOutline-2Sr-EFPQ.js";import"./index-MroJ3egt.js";import"./DropdownProvider.es-vuRa4WZF.js";import"./index-ppHAGUN8.js";import"./index-ItCXVjST.js";import"./index-LrOJhR-V.js";import"./index-CppLjZWP.js";import"./index.es-8dT2HbVl.js";const a=u=>{const o=i=>{const s=i.target.dataset.value;console.log(`click on ${s}`)};return r.jsx(d,{...u,onClick:o})};try{a.displayName="MonthRangeCalendarSimpleTemplate",a.__docgenInfo={description:"",displayName:"MonthRangeCalendarSimpleTemplate",props:{activeDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат",name:"activeDateRangeEndValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат по умолчанию",name:"defaultActiveDateRangeEndValue",required:!1,type:{name:"Dayjs"}},onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const p=`import type { MouseEventHandler } from 'react';

import type { MonthRangeCalendarProps } from '@admiral-ds/date-picker';
import { MonthRangeCalendar } from '@admiral-ds/date-picker';

export const MonthRangeCalendarSimpleTemplate = (props: MonthRangeCalendarProps) => {

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return <MonthRangeCalendar {...props} onClick={handleClick} />;
};
`,S={title:"Admiral-2.1/Widgets/MonthRangeCalendar",component:d,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},c=u=>r.jsx(a,{...u}),e={render:c,parameters:{docs:{source:{code:p}}},name:"MonthRangeCalendarSimple"};var n,t,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: MonthRangeCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: MonthRangeCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'MonthRangeCalendarSimple'
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const j=["MonthRangeCalendarSimple"];export{e as MonthRangeCalendarSimple,j as __namedExportsOrder,S as default};

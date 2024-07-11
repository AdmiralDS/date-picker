import{j as r}from"./typography.es-DJ4WRfsu.js";import"./index-Btqlrfhk.js";import{M as d}from"./index-HQ-6P-XK.js";import"./index-RYns6xqu.js";import"./index-DRhuP2Fw.js";import"./index-C_itu0Qr.js";import"./index-BB_GbEMN.js";const a=u=>{const o=i=>{const s=i.target.dataset.value;console.log(`click on ${s}`)};return r.jsx(d,{...u,onClick:o})};try{a.displayName="MonthRangeCalendarSimpleTemplate",a.__docgenInfo={description:"",displayName:"MonthRangeCalendarSimpleTemplate",props:{dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},activeDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат",name:"activeDateRangeEndValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат по умолчанию",name:"defaultActiveDateRangeEndValue",required:!1,type:{name:"Dayjs"}},onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"DateRange"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"DateRange"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: DateRange) => void)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}}}}}catch{}const c=`import type { MouseEventHandler } from 'react';

import type { MonthRangeCalendarProps } from '@admiral-ds/date-picker';
import { MonthRangeCalendar } from '@admiral-ds/date-picker';

export const MonthRangeCalendarSimpleTemplate = (props: MonthRangeCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return <MonthRangeCalendar {...props} onClick={handleClick} />;
};
`,h={title:"Admiral-2.1/Widgets/MonthRangeCalendar",component:d,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},p=u=>r.jsx(a,{...u}),e={render:p,parameters:{docs:{source:{code:c}}},name:"MonthRangeCalendarSimple"};var n,t,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: MonthRangeCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: MonthRangeCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'MonthRangeCalendarSimple'
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const V=["MonthRangeCalendarSimple"];export{e as MonthRangeCalendarSimple,V as __namedExportsOrder,h as default};

import{j as n}from"./typography.es-DJ4WRfsu.js";import"./index-Cv72DKl5.js";import{Y as d}from"./index-ti-zF8g1.js";import"./index-RYns6xqu.js";import"./index-BdAXGuOE.js";import"./index--RnFdRoh.js";import"./index-9KIR3UVS.js";const a=e=>{const o=i=>{const s=i.target.dataset.value;console.log(`click on ${s}`)};return n.jsx(d,{...e,onClick:o})};try{a.displayName="YearCalendarSimpleTemplate",a.__docgenInfo={description:"",displayName:"YearCalendarSimpleTemplate",props:{cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const c=`import type { MouseEventHandler } from 'react';

import type { YearCalendarProps } from '@admiral-ds/date-picker';
import { YearCalendar } from '@admiral-ds/date-picker';

export const YearCalendarSimpleTemplate = (props: YearCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return <YearCalendar {...props} onClick={handleClick} />;
};
`,S={title:"Admiral-2.1/Widgets/YearCalendar",component:d,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},locale:{control:!1}}},p=e=>n.jsx(a,{...e}),u={render:p,parameters:{docs:{source:{code:c}}},name:"YearCalendarSimple"};var l,t,r;u.parameters={...u.parameters,docs:{...(l=u.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: YearCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'YearCalendarSimple'
}`,...(r=(t=u.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const A=["YearCalendarSimple"];export{u as YearCalendarSimple,A as __namedExportsOrder,S as default};

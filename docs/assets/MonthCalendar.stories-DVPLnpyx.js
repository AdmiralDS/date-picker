import{j as r}from"./typography.es-DJ4WRfsu.js";import{e as o}from"./index-DUrvFc95.js";import"./index-DnXc0ZDD.js";import"./index-RYns6xqu.js";import"./index-rLJdUzAE.js";import"./ChevronRightOutline-4h1Amxbj.js";import"./index-BQaZqJLe.js";import"./DropdownProvider.es-DMHOw4-n.js";import"./index-DisOlbzP.js";import"./index-DjVRa9xT.js";import"./index-CMIGvJsC.js";const a=e=>{const d=i=>{const s=i.target.dataset.value;console.log(`click on ${s}`)};return r.jsx(o,{...e,onClick:d})};try{a.displayName="MonthCalendarSimpleTemplate",a.__docgenInfo={description:"",displayName:"MonthCalendarSimpleTemplate",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}}}}}catch{}const p=`import type { MouseEventHandler } from 'react';

import type { MonthCalendarProps } from '@admiral-ds/date-picker';
import { MonthCalendar } from '@admiral-ds/date-picker';

export const MonthCalendarSimpleTemplate = (props: MonthCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return <MonthCalendar {...props} onClick={handleClick} />;
};
`,B={title:"Admiral-2.1/Widgets/MonthCalendar",component:o,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},locale:{control:!1}}},c=e=>r.jsx(a,{...e}),u={render:c,parameters:{docs:{source:{code:p}}},name:"MonthCalendarSimple"};var t,l,n;u.parameters={...u.parameters,docs:{...(t=u.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: MonthCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: MonthCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'MonthCalendarSimple'
}`,...(n=(l=u.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const g=["MonthCalendarSimple"];export{u as MonthCalendarSimple,g as __namedExportsOrder,B as default};

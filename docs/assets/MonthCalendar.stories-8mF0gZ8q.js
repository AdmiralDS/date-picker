import{j as r}from"./styled-components.browser.esm-7zUEPxZV.js";import{f as o}from"./index-91mimT7-.js";import"./index-GEu7UUTq.js";import"./index-DogsOklH.js";import"./index-iEjp33-N.js";import"./ChevronRightOutline-2Sr-EFPQ.js";import"./index-MroJ3egt.js";import"./DropdownProvider.es-vuRa4WZF.js";import"./index-ppHAGUN8.js";import"./index-ItCXVjST.js";import"./index-LrOJhR-V.js";import"./index-CppLjZWP.js";import"./index.es-8dT2HbVl.js";const a=e=>{const d=i=>{const s=i.target.dataset.value;console.log(`click on ${s}`)};return r.jsx(o,{...e,onClick:d})};try{a.displayName="MonthCalendarSimpleTemplate",a.__docgenInfo={description:"",displayName:"MonthCalendarSimpleTemplate",props:{cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}}}}}catch{}const p=`import type { MouseEventHandler } from 'react';

import type { MonthCalendarProps } from '@admiral-ds/date-picker';
import { MonthCalendar } from '@admiral-ds/date-picker';

export const MonthCalendarSimpleTemplate = (props: MonthCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return <MonthCalendar {...props} onClick={handleClick} />;
};
`,v={title:"Admiral-2.1/Widgets/MonthCalendar",component:o,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},locale:{control:!1}}},c=e=>r.jsx(a,{...e}),u={render:c,parameters:{docs:{source:{code:p}}},name:"MonthCalendarSimple"};var t,l,n;u.parameters={...u.parameters,docs:{...(t=u.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: MonthCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: MonthCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'MonthCalendarSimple'
}`,...(n=(l=u.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const j=["MonthCalendarSimple"];export{u as MonthCalendarSimple,j as __namedExportsOrder,v as default};

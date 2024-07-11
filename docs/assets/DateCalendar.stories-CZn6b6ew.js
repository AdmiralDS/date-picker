import{j as r}from"./typography.es-DJ4WRfsu.js";import{D as d}from"./index-DasWAY_w.js";import"./index-Btqlrfhk.js";import"./index-RYns6xqu.js";import"./index-DRhuP2Fw.js";import"./index-C_itu0Qr.js";const a=e=>{const o=i=>{const s=i.target.dataset.value;console.log(`click on ${s}`)};return r.jsx(d,{...e,onClick:o})};try{a.displayName="DateCalendarSimpleTemplate",a.__docgenInfo={description:"",displayName:"DateCalendarSimpleTemplate",props:{dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}}}}}catch{}const c=`import type { MouseEventHandler } from 'react';

import type { DateCalendarProps } from '@admiral-ds/date-picker';
import { DateCalendar } from '@admiral-ds/date-picker';

export const DateCalendarSimpleTemplate = (props: DateCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return <DateCalendar {...props} onClick={handleClick} />;
};
`,V={title:"Admiral-2.1/Widgets/DateCalendar",component:d,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},locale:{control:!1}}},p=e=>r.jsx(a,{...e}),u={render:p,parameters:{docs:{source:{code:c}}},name:"DateCalendarSimple"};var t,l,n;u.parameters={...u.parameters,docs:{...(t=u.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: DateCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: DateCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'DateCalendarSimple'
}`,...(n=(l=u.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const S=["DateCalendarSimple"];export{u as DateCalendarSimple,S as __namedExportsOrder,V as default};

import{j as r}from"./tslib.es6-gXVSDp23.js";import"./index-CTEAhEde.js";import{Y as d}from"./index-Psa4Kny8.js";import"./index-uubelm5h.js";import"./index-Lg2VQURa.js";import"./typography.es-zceevOJ_.js";import"./index-DH4-umzn.js";import"./index-CQzR3wtX.js";const a=u=>{const i=o=>{const s=o.target.dataset.value;console.log(`click on ${s}`)};return r.jsx(d,{...u,onClick:i})};try{a.displayName="YearRangeCalendarSimpleTemplate",a.__docgenInfo={description:"",displayName:"YearRangeCalendarSimpleTemplate",props:{activeDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат",name:"activeDateRangeEndValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат по умолчанию",name:"defaultActiveDateRangeEndValue",required:!1,type:{name:"Dayjs"}},onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"DateRange"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"DateRange"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: DateRange) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const c=`import type { MouseEventHandler } from 'react';

import type { YearRangeCalendarProps } from '@admiral-ds/date-picker';
import { YearRangeCalendar } from '#lib/YearRangeCalendar';

export const YearRangeCalendarSimpleTemplate = (props: YearRangeCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return <YearRangeCalendar {...props} onClick={handleClick} />;
};
`,y={title:"Admiral-2.1/Widgets/YearRangeCalendar",component:d,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},p=u=>r.jsx(a,{...u}),e={render:p,parameters:{docs:{source:{code:c}}},name:"YearRangeCalendarSimple"};var n,l,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: YearRangeCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearRangeCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'YearRangeCalendarSimple'
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const A=["YearRangeCalendarSimple"];export{e as YearRangeCalendarSimple,A as __namedExportsOrder,y as default};

import{j as r}from"./typography.es-DO68Qy5l.js";import{g as d}from"./index-CBuTa_tj.js";import"./index-CDs2tPxN.js";import"./index-ujbVYY4f.js";import"./index-DVjN3Tgn.js";import"./ChevronRightOutline-BkuwWOlR.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-D0cPpzFA.js";import"./index-DoivLSLw.js";import"./index-xh3kyrvP.js";import"./index-DS7TH43h.js";const a=u=>{const i=o=>{const s=o.target.dataset.value;console.log(`click on ${s}`)};return r.jsx(d,{...u,onClick:i})};try{a.displayName="YearRangeCalendarSimpleTemplate",a.__docgenInfo={description:"",displayName:"YearRangeCalendarSimpleTemplate",props:{selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},activeDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат",name:"activeDateRangeEndValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат по умолчанию",name:"defaultActiveDateRangeEndValue",required:!1,type:{name:"Dayjs"}},onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const c=`import type { MouseEventHandler } from 'react';

import type { YearRangeCalendarProps } from '@admiral-ds/date-picker';
import { YearRangeCalendar } from '#lib/YearRangeCalendar';

export const YearRangeCalendarSimpleTemplate = (props: YearRangeCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return <YearRangeCalendar {...props} onClick={handleClick} />;
};
`,Y={title:"Admiral-2.1/Widgets/YearRangeCalendar",component:d,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},p=u=>r.jsx(a,{...u}),e={render:p,parameters:{docs:{source:{code:c}}},name:"YearRangeCalendarSimple"};var n,l,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: YearRangeCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearRangeCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'YearRangeCalendarSimple'
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const S=["YearRangeCalendarSimple"];export{e as YearRangeCalendarSimple,S as __namedExportsOrder,Y as default};

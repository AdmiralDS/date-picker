import{D as r}from"./index-CDFRDas0.js";import{j as s}from"./tslib.es6-gXVSDp23.js";import"./index-BmDKb8-G.js";import"./index-uubelm5h.js";import"./index-BwEGqyV7.js";import"./typography.es-zceevOJ_.js";const e=a=>{const d=i=>{const D=i.target.dataset.value;console.log(`click on ${D}`)};return s.jsx(r,{...a,onClick:d})};try{e.displayName="DateRangeCalendarSimpleTemplate",e.__docgenInfo={description:"",displayName:"DateRangeCalendarSimpleTemplate",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},activeDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат",name:"activeDateRangeEndValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат по умолчанию",name:"defaultActiveDateRangeEndValue",required:!1,type:{name:"Dayjs"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}}}}}catch{}const o=`import type { MouseEventHandler } from 'react';

import type { DateRangeCalendarProps } from '@admiral-ds/date-picker';
import { DateRangeCalendar } from '@admiral-ds/date-picker';

export const DateRangeCalendarSimpleTemplate = (props: DateRangeCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  //return <Calendar {...props} defaultDateRange={['2023-10-08T12:00:00Z', '2023-10-16T12:00:00Z']} />;
  return <DateRangeCalendar {...props} onClick={handleClick} />;
};
`,C={title:"Admiral-2.1/Widgets/DateRangeCalendar",tags:["autodocs"],component:r},u={render:e,parameters:{docs:{source:{code:o}}},name:"DateRangeCalendarSimple"};var n,t,l;u.parameters={...u.parameters,docs:{...(n=u.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: DateRangeCalendarSimpleTemplate,
  parameters: {
    docs: {
      source: {
        code: DateRangeCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'DateRangeCalendarSimple'
}`,...(l=(t=u.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const y=["DateRangeCalendarSimple"];export{u as DateRangeCalendarSimple,y as __namedExportsOrder,C as default};

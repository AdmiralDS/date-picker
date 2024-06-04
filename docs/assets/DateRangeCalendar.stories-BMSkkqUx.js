import{D as o}from"./index--ynpHxz7.js";import{j as D}from"./typography.es-CjQrIQMn.js";import{k as s}from"./index.es-De8x7dLl.js";import"./index-CDs2tPxN.js";import"./ru-lGojcqRe.js";import"./utils-B_ZJ_ERX.js";import"./index-CcwE33ek.js";import"./mixins-0kl9vljp.js";import"./index-Bb5GWzc-.js";import"./tslib.es6-CRos2fHm.js";import"./ChevronRightOutline-DIae5nKi.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-Dczk-0Um.js";const e=a=>{const r=d=>{const i=d.target.dataset.value;console.log(`click on ${i}`)};return D.jsx(s,{...a,onClick:r})};try{e.displayName="DateRangeCalendarSimpleTemplate",e.__docgenInfo={description:"",displayName:"DateRangeCalendarSimpleTemplate",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},activeDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат",name:"activeDateRangeEndValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат по умолчанию",name:"defaultActiveDateRangeEndValue",required:!1,type:{name:"Dayjs"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}}}}}catch{}const p=`import type { MouseEventHandler } from 'react';

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
`,F={title:"Admiral-2.1/Widgets/DateRangeCalendar",tags:["autodocs"],component:o},u={render:e,parameters:{docs:{source:{code:p}}},name:"DateRangeCalendarSimple"};var t,n,l;u.parameters={...u.parameters,docs:{...(t=u.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: DateRangeCalendarSimpleTemplate,
  parameters: {
    docs: {
      source: {
        code: DateRangeCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'DateRangeCalendarSimple'
}`,...(l=(n=u.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const S=["DateRangeCalendarSimple"];export{u as DateRangeCalendarSimple,S as __namedExportsOrder,F as default};

import{j as r}from"./typography.es-CjQrIQMn.js";import{D as s}from"./index.es-De8x7dLl.js";import{Y as p}from"./index-BCbD6A3-.js";import"./index-CDs2tPxN.js";import"./tslib.es6-CRos2fHm.js";import"./ChevronRightOutline-DIae5nKi.js";import"./ru-lGojcqRe.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-Dczk-0Um.js";import"./utils-B_ZJ_ERX.js";import"./index-fVtI0-nO.js";import"./constants-C6vCpwtL.js";import"./index-B0XozSxi.js";import"./mixins-0kl9vljp.js";const a=u=>{const d=i=>{const o=i.target.dataset.value;console.log(`click on ${o}`)};return r.jsx(p,{...u,onClick:d})};try{a.displayName="YearRangeCalendarSimpleTemplate",a.__docgenInfo={description:"",displayName:"YearRangeCalendarSimpleTemplate",props:{cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},activeDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат",name:"activeDateRangeEndValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат по умолчанию",name:"defaultActiveDateRangeEndValue",required:!1,type:{name:"Dayjs"}},onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}}}}}catch{}const c=`import type { MouseEventHandler } from 'react';

import type { YearRangeCalendarProps } from '@admiral-ds/date-picker';
import { YearRangeCalendar } from '#src/components/YearRangeCalendar';

export const YearRangeCalendarSimpleTemplate = (props: YearRangeCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return <YearRangeCalendar {...props} onClick={handleClick} />;
};
`,F={title:"Admiral-2.1/Widgets/YearRangeCalendar",component:s,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},m=u=>r.jsx(a,{...u}),e={render:m,parameters:{docs:{source:{code:c}}},name:"YearRangeCalendarSimple"};var n,l,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: YearRangeCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearRangeCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'YearRangeCalendarSimple'
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const h=["YearRangeCalendarSimple"];export{e as YearRangeCalendarSimple,h as __namedExportsOrder,F as default};

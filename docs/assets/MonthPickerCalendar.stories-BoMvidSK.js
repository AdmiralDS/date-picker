import{j as u}from"./typography.es-y01boJtk.js";import{M as i}from"./index-BFF3TPkQ.js";import"./index-DmuP904s.js";import{W as c,a as m,T as l}from"./common-rE7tjdqG.js";import"./index-BBkUAzwr.js";import"./index-Br7a5yOA.js";import"./ChevronRightOutline-Cu42pdAX.js";import"./index-PqR-_bA4.js";import"./DropdownProvider.es-qCbMjVMC.js";import"./index-BwiDr1EV.js";import"./index-IJ8CtnyN.js";import"./index-kP9Ee9L1.js";import"./index-CoxCimnh.js";const t=e=>{const d=s=>{const p=s.target.dataset.value;console.log(`click on ${p}`)};return u.jsxs(c,{children:[u.jsx(i,{...e,onClick:d}),u.jsxs(m,{children:[u.jsx(l,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор месяца"}),u.jsxs(l,{font:"Body/Body 2 Long",as:"div",children:["Клик на год открывает экран выбора года. Вернуться на экран выбора месяца можно выбрав год, либо нажав на год в шапке календаря.",u.jsx("br",{}),u.jsx("br",{}),"Стрелки влево-вправо позволяют менять год."]})]})]})};try{t.displayName="MonthPickerCalendarSimpleTemplate",t.__docgenInfo={description:"",displayName:"MonthPickerCalendarSimpleTemplate",props:{selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"cellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const D=`import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { MonthPickerCalendarProps } from '@admiral-ds/date-picker';
import { MonthPickerCalendar } from '#src/components/MonthPickerCalendar';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const MonthPickerCalendarSimpleTemplate = (props: MonthPickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return (
    <WrapperHorizontal>
      <MonthPickerCalendar {...props} onClick={handleClick} />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор месяца
        </T>
        <T font="Body/Body 2 Long" as="div">
          Клик на год открывает экран выбора года. Вернуться на экран выбора месяца можно выбрав год, либо нажав на год
          в шапке календаря.
          <br />
          <br />
          Стрелки влево-вправо позволяют менять год.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};
`,g={title:"Admiral-2.1/Date Picker/MonthPickerCalendar",component:i,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},defaultDateValue:{control:{type:"text"}},onDateValueChange:{control:!1},locale:{control:!1}}},f=e=>u.jsx(t,{...e}),a={render:f,parameters:{docs:{source:{code:D}}},name:"Выбор месяца"};var r,n,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: MonthPickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: MonthPickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор месяца'
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const j=["MonthPickerCalendarSimple"];export{a as MonthPickerCalendarSimple,j as __namedExportsOrder,g as default};

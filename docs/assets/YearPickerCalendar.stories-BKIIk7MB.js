import{j as e,c as W}from"./typography.es-DJ4WRfsu.js";import{r as m}from"./index-RYns6xqu.js";import{g as I,r as R,E as N,Y as O,F as z,G,H as $,I as K,J as B,K as J}from"./index-BdAXGuOE.js";import{T as U}from"./index-Clmvnrvz.js";import{Y as A}from"./index-9KIR3UVS.js";import{S as Z,C as Q,Y as X,W as P,b as k,T as C}from"./common-CJaXr_SW.js";import"./index-Cv72DKl5.js";import"./ChevronRightOutline-CjgoEkVb.js";import"./index-BQaZqJLe.js";import"./DropdownProvider.es-DMHOw4-n.js";import"./index-DDkwD5gS.js";import"./index--RnFdRoh.js";import"./index-BfQKxCpe.js";import"./index-bQnesnJw.js";import"./index-ti-zF8g1.js";import"./index-CmTVwR-P.js";import"./index-D9zx5Urx.js";const o=({dateValue:u,defaultDateValue:t,onDateValueChange:a,selectedDateValue:l,defaultSelectedDateValue:n,onSelectedDateValueChange:i,cell:D,locale:s=R,prevButtonProps:g,nextButtonProps:S,...b})=>{const[j,T]=m.useState(t||I(s==null?void 0:s.localeName)),d=u||j,y=r=>{T(r),a==null||a(r)},[M,q]=m.useState(n),_=l||M,H=r=>{q(r),i==null||i(r)},L=r=>{H(r)},w=r=>{switch(r.target.dataset.panelTargetType){case"left":y(d.subtract(A,"year"));break;case"right":y(d.add(A,"year"));break}};return e.jsxs(Z,{children:[e.jsx(U,{date:d,viewMode:"years",locale:s,onClick:w,prevButtonProps:g,nextButtonProps:S}),e.jsx(Q,{children:e.jsx(X,{...b,cell:D==null?void 0:D.yearCell,dateValue:d,selectedDateValue:_,onSelectedDateValueChange:L,locale:s,$isVisible:!0})})]})};try{o.displayName="YearPickerCalendar",o.__docgenInfo={description:"",displayName:"YearPickerCalendar",props:{selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:{value:`{
  localeName: 'ru',
  localeText: {
    backwardText: 'Назад',
    forwardText: 'Вперед',
    nextMonthText: 'Следующий месяц',
    previousMonthText: 'Предыдущий месяц',
    returnText: 'Вернуться',
    selectYearText: 'Выбор года',
    selectMonthText: 'Выбор месяца',
  },
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const f=u=>{const t=a=>{const l=a.target.dataset.value;console.log(`click on ${l}`)};return e.jsxs(P,{children:[e.jsx(o,{...u,onClick:t}),e.jsxs(k,{children:[e.jsx(C,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор года"}),e.jsx(C,{font:"Body/Body 2 Long",as:"div",children:"Цифры в шапке календаря не активны и отображают текущий временной интервал. Стрелки влево-вправо позволяют менять отображаемый интервал на 20 лет назад/вперед."})]})]})};try{f.displayName="YearPickerCalendarSimpleTemplate",f.__docgenInfo={description:"",displayName:"YearPickerCalendarSimpleTemplate",props:{selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const uu=`import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { YearPickerCalendarProps } from '@admiral-ds/date-picker';
import { YearPickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const YearPickerCalendarSimpleTemplate = (props: YearPickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return (
    <WrapperHorizontal>
      <YearPickerCalendar {...props} onClick={handleClick} />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор года
        </T>
        <T font="Body/Body 2 Long" as="div">
          Цифры в шапке календаря не активны и отображают текущий временной интервал. Стрелки влево-вправо позволяют
          менять отображаемый интервал на 20 лет назад/вперед.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};
`,eu=(u,t,a,l,n)=>a?G:t?$:u?K:n?B:l?J:B,au=(u,t)=>({"data-is-current-year":u||void 0,"data-is-active-year":t||void 0}),tu=({isCurrent:u,isHoliday:t,...a})=>{const l=eu(a.selected,a.disabled,a.hidden,u,a.isActive),n=W(["",";color:",";"],l,i=>i.theme.color["Success/Success 50 Main"]);return e.jsx(N,{width:O,height:z,cellMixin:n,"data-cell-type":"yearCell",...au(!!u,a.isActive),...a})},lu=m.memo(tu),E=u=>{const t=a=>{const l=a.target.dataset.value;console.log(`click on ${l}`)};return e.jsxs(P,{children:[e.jsx(o,{...u,cell:{yearCell:lu},onClick:t}),e.jsx(k,{children:e.jsxs(C,{font:"Body/Body 2 Long",as:"div",children:["Календарь позволяет кастомизировать отображение ячеек при необходимости, например, изменять базовый цвет текста.",e.jsx("br",{}),e.jsx("br",{}),"Очень важно передавать подобные кастомизированные элементы, обернув их в React.memo, чтобы избежать лишних перерендеров при обновлении компонента."]})})]})};try{E.displayName="YearPickerCalendarCustomCellTemplate",E.__docgenInfo={description:"",displayName:"YearPickerCalendarCustomCellTemplate",props:{selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const ru=`import type { MouseEventHandler } from 'react';
import { memo } from 'react';
import { css } from 'styled-components';

import { T } from '@admiral-ds/react-ui';
import { DefaultCell, YearPickerCalendar } from '@admiral-ds/date-picker';
import type { YearPickerCalendarProps, DefaultCellProps } from '@admiral-ds/date-picker';
import { YEAR_CELL_HEIGHT, YEAR_CELL_WIDTH } from '#lib/DefaultCell/constants.ts';
import {
  baseYearCellMixin,
  currentYearCellMixin,
  disabledYearCellMixin,
  hiddenYearCellMixin,
  selectedYearCellMixin,
} from '#lib/DefaultCell/mixins.tsx';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

const getDefaultYearCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isCurrent?: boolean,
  isActive?: boolean,
) => {
  if (hidden) return hiddenYearCellMixin;
  if (disabled) return disabledYearCellMixin;
  if (selected) return selectedYearCellMixin;
  if (isActive) return baseYearCellMixin;
  if (isCurrent) return currentYearCellMixin;
  return baseYearCellMixin;
};

const getYearCellDataAttributes = (isCurrent?: boolean, isActive?: boolean): Record<string, any> => {
  return {
    'data-is-current-year': isCurrent ? isCurrent : undefined,
    'data-is-active-year': isActive ? isActive : undefined,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DefaultYearCell = ({ isCurrent, isHoliday, ...props }: DefaultCellProps) => {
  const yearCellMixin = getDefaultYearCellMixin(
    props.selected,
    props.disabled,
    props.hidden,
    isCurrent,
    props.isActive,
  );
  const cellMixin = css\`
    \${yearCellMixin};
    color: \${(p) => p.theme.color['Success/Success 50 Main']};
  \`;

  return (
    <DefaultCell
      width={YEAR_CELL_WIDTH}
      height={YEAR_CELL_HEIGHT}
      cellMixin={cellMixin}
      data-cell-type="yearCell"
      {...getYearCellDataAttributes(!!isCurrent, props.isActive)}
      {...props}
    />
  );
};
const MemoCell = memo(DefaultYearCell);

export const YearPickerCalendarCustomCellTemplate = (props: YearPickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return (
    <WrapperHorizontal>
      <YearPickerCalendar {...props} cell={{ yearCell: MemoCell }} onClick={handleClick} />
      <WrapperVertical>
        <T font="Body/Body 2 Long" as="div">
          Календарь позволяет кастомизировать отображение ячеек при необходимости, например, изменять базовый цвет
          текста.
          <br />
          <br />
          Очень важно передавать подобные кастомизированные элементы, обернув их в React.memo, чтобы избежать лишних
          перерендеров при обновлении компонента.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};
`,hu={title:"Admiral-2.1/Date Picker/YearPickerCalendar",component:o,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},defaultDateValue:{control:{type:"text"}},onDateValueChange:{control:!1},locale:{control:!1}}},nu=u=>e.jsx(f,{...u}),c={render:nu,parameters:{docs:{source:{code:uu}}},name:"Выбор года"},iu=u=>e.jsx(E,{...u}),p={render:iu,parameters:{docs:{source:{code:ru}}},name:"Кастомизация отображения"};var V,v,x;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: YearPickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearPickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор года'
}`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var Y,F,h;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: YearPickerCalendarCustomCellStory,
  parameters: {
    docs: {
      source: {
        code: YearPickerCalendarCustomCellTemplateRaw
      }
    }
  },
  name: 'Кастомизация отображения'
}`,...(h=(F=p.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};const Pu=["YearPickerCalendarSimple","YearPickerCalendarCustomCell"];export{p as YearPickerCalendarCustomCell,c as YearPickerCalendarSimple,Pu as __namedExportsOrder,hu as default};

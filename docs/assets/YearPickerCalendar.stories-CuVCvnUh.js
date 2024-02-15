import{j as e,a as Y}from"./typography.es-y01boJtk.js";import{k as c}from"./index-BFF3TPkQ.js";import{w as x,Y as k,x as v,z as P,A as h,B as F,E as p,F as g}from"./index-DmuP904s.js";import{W as A,a as B,T as o}from"./common-rE7tjdqG.js";import{r as M}from"./index-BBkUAzwr.js";import"./index-Br7a5yOA.js";import"./ChevronRightOutline-Cu42pdAX.js";import"./index-PqR-_bA4.js";import"./DropdownProvider.es-qCbMjVMC.js";import"./index-BwiDr1EV.js";import"./index-IJ8CtnyN.js";import"./index-kP9Ee9L1.js";import"./index-CoxCimnh.js";const s=u=>{const r=a=>{const l=a.target.dataset.value;console.log(`click on ${l}`)};return e.jsxs(A,{children:[e.jsx(c,{...u,onClick:r}),e.jsxs(B,{children:[e.jsx(o,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор года"}),e.jsx(o,{font:"Body/Body 2 Long",as:"div",children:"Цифры в шапке календаря не активны и отображают текущий временной интервал. Стрелки влево-вправо позволяют менять отображаемый интервал на 20 лет назад/вперед."})]})]})};try{s.displayName="YearPickerCalendarSimpleTemplate",s.__docgenInfo={description:"",displayName:"YearPickerCalendarSimpleTemplate",props:{selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"cellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const b=`import type { MouseEventHandler } from 'react';

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
`,j=(u,r,a,l,i)=>a?P:r?h:u?F:i?p:l?g:p,S=(u,r)=>({"data-is-current-year":u||void 0,"data-is-active-year":r||void 0}),T=({isCurrent:u,isHoliday:r,...a})=>{const l=j(a.selected,a.disabled,a.hidden,u,a.isActive),i=Y`
    ${l};
    color: ${V=>V.theme.color["Success/Success 50 Main"]};
  `;return e.jsx(x,{width:k,height:v,cellMixin:i,"data-cell-type":"yearCell",...S(!!u,a.isActive),...a})},_=M.memo(T),d=u=>{const r=a=>{const l=a.target.dataset.value;console.log(`click on ${l}`)};return e.jsxs(A,{children:[e.jsx(c,{...u,cell:_,onClick:r}),e.jsx(B,{children:e.jsxs(o,{font:"Body/Body 2 Long",as:"div",children:["Календарь позволяет кастомизировать отображение ячеек при необходимости, например, изменять базовый цвет текста.",e.jsx("br",{}),e.jsx("br",{}),"Очень важно передавать подобные кастомизированные элементы, обернув их в React.memo, чтобы избежать лишних перерендеров при обновлении компонента."]})})]})};try{d.displayName="YearPickerCalendarCustomCellTemplate",d.__docgenInfo={description:"",displayName:"YearPickerCalendarCustomCellTemplate",props:{selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"cellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const q=`import type { MouseEventHandler } from 'react';
import { memo } from 'react';
import { css } from 'styled-components';

import { T } from '@admiral-ds/react-ui';
import { DefaultCell, YearPickerCalendar } from '@admiral-ds/date-picker';
import type { YearPickerCalendarProps, DefaultCellProps } from '@admiral-ds/date-picker';
import { YEAR_CELL_HEIGHT, YEAR_CELL_WIDTH } from '#src/components/DefaultCell/constants.ts';
import {
  baseYearCellMixin,
  currentYearCellMixin,
  disabledYearCellMixin,
  hiddenYearCellMixin,
  selectedYearCellMixin,
} from '#src/components/DefaultCell/mixins.tsx';

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
      <YearPickerCalendar {...props} cell={MemoCell} onClick={handleClick} />
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
`,Q={title:"Admiral-2.1/Date Picker/YearPickerCalendar",component:c,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},defaultDateValue:{control:{type:"text"}},onDateValueChange:{control:!1},locale:{control:!1}}},H=u=>e.jsx(s,{...u}),t={render:H,parameters:{docs:{source:{code:b}}},name:"Выбор года"},L=u=>e.jsx(d,{...u}),n={render:L,parameters:{docs:{source:{code:q}}},name:"Кастомизация отображения"};var m,D,C;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: YearPickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearPickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор года'
}`,...(C=(D=t.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var f,E,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: YearPickerCalendarCustomCellStory,
  parameters: {
    docs: {
      source: {
        code: YearPickerCalendarCustomCellTemplateRaw
      }
    }
  },
  name: 'Кастомизация отображения'
}`,...(y=(E=n.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};const X=["YearPickerCalendarSimple","YearPickerCalendarCustomCell"];export{n as YearPickerCalendarCustomCell,t as YearPickerCalendarSimple,X as __namedExportsOrder,Q as default};

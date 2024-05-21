import{j as e,c as W}from"./styled-components.browser.esm-DrTmyIAt.js";import{r as p}from"./index-CDs2tPxN.js";import{N as w,o as R,M as I}from"./index-CaQ8XlvV.js";import{j as $}from"./index--KAhwGws.js";import{A as B}from"./index-Be6cgLpj.js";import{_ as z,S as N,D as G}from"./calendarStyle-D5URKbyB.js";import{W as P,a as g,T as m}from"./common-CDJ8tmOp.js";import{Y as O,c as K,A as J,B as U,C as Z,E as V,F as Q}from"./mixins-BYFRP_bt.js";import"./tslib.es6-CRos2fHm.js";import"./ru-lGojcqRe.js";import"./typography.es-DSm7pTxC.js";import"./index.es-n1eWmiMq.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-BaHm9Kb7.js";import"./index-DDgR2ROP.js";import"./index-QWFBIMH2.js";import"./index-BcVcSavK.js";import"./index-Y8ituuGQ.js";import"./index-f_P1f7s3.js";import"./index-7NNlG1Bn.js";import"./index-nA2Ey_1t.js";import"./index-CSAbbKMT.js";const f=({dateValue:u,defaultDateValue:l,onDateValueChange:a,selectedDateValue:r,defaultSelectedDateValue:n,onSelectedDateValueChange:i,cell:y,locale:o=R,prevButtonProps:F,nextButtonProps:b,...S})=>{const[j,M]=p.useState(l||w(o==null?void 0:o.localeName)),s=u||j,E=t=>{M(t),a==null||a(t)},[T,_]=p.useState(n),q=r||T,H=t=>{_(t),i==null||i(t)},L=t=>{H(t)};return e.jsxs(z,{children:[e.jsx($,{date:s,viewMode:"years",locale:o,onClick:t=>{switch(t.target.dataset.panelTargetType){case"left":E(s.subtract(B,"year"));break;case"right":E(s.add(B,"year"));break}},prevButtonProps:F,nextButtonProps:b}),e.jsx(N,{children:e.jsx(G,{...S,cell:y==null?void 0:y.yearCell,dateValue:s,selectedDateValue:q,onSelectedDateValueChange:L,locale:o,$isVisible:!0})})]})},D=u=>{const l=a=>{const r=a.target.dataset.value;console.log(`click on ${r}`)};return e.jsxs(P,{children:[e.jsx(f,{...u,onClick:l}),e.jsxs(g,{children:[e.jsx(m,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор года"}),e.jsx(m,{font:"Body/Body 2 Long",as:"div",children:"Цифры в шапке календаря не активны и отображают текущий временной интервал. Стрелки влево-вправо позволяют менять отображаемый интервал на 20 лет назад/вперед."})]})]})};try{D.displayName="YearPickerCalendarSimpleTemplate",D.__docgenInfo={description:"",displayName:"YearPickerCalendarSimpleTemplate",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const X=`import type { MouseEventHandler } from 'react';

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
`,uu=(u,l,a,r,n)=>a?J:l?U:u?Z:n?V:r?Q:V,eu=(u,l)=>({"data-is-current-year":u||void 0,"data-is-active-year":l||void 0}),au=({isCurrent:u,isHoliday:l,...a})=>{const r=uu(a.selected,a.disabled,a.hidden,u,a.isActive),n=W(["",";color:",";"],r,i=>i.theme.color["Success/Success 50 Main"]);return e.jsx(I,{width:O,height:K,cellMixin:n,"data-cell-type":"yearCell",...eu(!!u,a.isActive),...a})},lu=p.memo(au),C=u=>{const l=a=>{const r=a.target.dataset.value;console.log(`click on ${r}`)};return e.jsxs(P,{children:[e.jsx(f,{...u,cell:{yearCell:lu},onClick:l}),e.jsx(g,{children:e.jsxs(m,{font:"Body/Body 2 Long",as:"div",children:["Календарь позволяет кастомизировать отображение ячеек при необходимости, например, изменять базовый цвет текста.",e.jsx("br",{}),e.jsx("br",{}),"Очень важно передавать подобные кастомизированные элементы, обернув их в React.memo, чтобы избежать лишних перерендеров при обновлении компонента."]})})]})};try{C.displayName="YearPickerCalendarCustomCellTemplate",C.__docgenInfo={description:"",displayName:"YearPickerCalendarCustomCellTemplate",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const ru=`import type { MouseEventHandler } from 'react';
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
`,Fu={title:"Admiral-2.1/Date Picker/YearPickerCalendar",component:f,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},defaultDateValue:{control:{type:"text"}},onDateValueChange:{control:!1},locale:{control:!1}}},tu=u=>e.jsx(D,{...u}),d={render:tu,parameters:{docs:{source:{code:X}}},name:"Выбор года"},nu=u=>e.jsx(C,{...u}),c={render:nu,parameters:{docs:{source:{code:ru}}},name:"Кастомизация отображения"};var A,x,Y;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: YearPickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearPickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор года'
}`,...(Y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:Y.source}}};var v,h,k;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: YearPickerCalendarCustomCellStory,
  parameters: {
    docs: {
      source: {
        code: YearPickerCalendarCustomCellTemplateRaw
      }
    }
  },
  name: 'Кастомизация отображения'
}`,...(k=(h=c.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const bu=["YearPickerCalendarSimple","YearPickerCalendarCustomCell"];export{c as YearPickerCalendarCustomCell,d as YearPickerCalendarSimple,bu as __namedExportsOrder,Fu as default};

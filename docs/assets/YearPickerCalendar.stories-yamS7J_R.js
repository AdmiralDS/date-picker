import{j as u,a as k}from"./styled-components.browser.esm-7zUEPxZV.js";import{k as c}from"./index-91mimT7-.js";import{z as x,Y as B,A as v,B as h,E as g,F as P,G as p,H as M}from"./index-GEu7UUTq.js";import{W as V,a as A,T as o}from"./common-vH4ykEee.js";import{r as b}from"./index-DogsOklH.js";import"./index-iEjp33-N.js";import"./ChevronRightOutline-2Sr-EFPQ.js";import"./index-MroJ3egt.js";import"./DropdownProvider.es-vuRa4WZF.js";import"./index-ppHAGUN8.js";import"./index-ItCXVjST.js";import"./index-LrOJhR-V.js";import"./index-CppLjZWP.js";import"./index.es-8dT2HbVl.js";const s=e=>{const l=a=>{const r=a.target.dataset.value;console.log(`click on ${r}`)};return u.jsxs(V,{children:[u.jsx(c,{...e,onClick:l}),u.jsxs(A,{children:[u.jsx(o,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор года"}),u.jsx(o,{font:"Body/Body 2 Long",as:"div",children:"Цифры в шапке календаря не активны и отображают текущий временной интервал. Стрелки влево-вправо позволяют менять отображаемый интервал на 20 лет назад/вперед."})]})]})};try{s.displayName="YearPickerCalendarSimpleTemplate",s.__docgenInfo={description:"",displayName:"YearPickerCalendarSimpleTemplate",props:{selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const j=`import type { MouseEventHandler } from 'react';

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
`,S=(e,l,a,r,i)=>a?h:l?g:e?P:i?p:r?M:p,T=(e,l)=>({"data-is-current-year":e||void 0,"data-is-active-year":l||void 0}),_=({isCurrent:e,isHoliday:l,...a})=>{const r=S(a.selected,a.disabled,a.hidden,e,a.isActive),i=k`
    ${r};
    color: ${Y=>Y.theme.color["Success/Success 50 Main"]};
  `;return u.jsx(x,{width:B,height:v,cellMixin:i,"data-cell-type":"yearCell",...T(!!e,a.isActive),...a})},H=b.memo(_),d=e=>{const l=a=>{const r=a.target.dataset.value;console.log(`click on ${r}`)};return u.jsxs(V,{children:[u.jsx(c,{...e,cell:H,onClick:l}),u.jsx(A,{children:u.jsxs(o,{font:"Body/Body 2 Long",as:"div",children:["Календарь позволяет кастомизировать отображение ячеек при необходимости, например, изменять базовый цвет текста.",u.jsx("br",{}),u.jsx("br",{}),"Очень важно передавать подобные кастомизированные элементы, обернув их в React.memo, чтобы избежать лишних перерендеров при обновлении компонента."]})})]})};try{d.displayName="YearPickerCalendarCustomCellTemplate",d.__docgenInfo={description:"",displayName:"YearPickerCalendarCustomCellTemplate",props:{selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const F=`import type { MouseEventHandler } from 'react';
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
`,X={title:"Admiral-2.1/Date Picker/YearPickerCalendar",component:c,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},defaultDateValue:{control:{type:"text"}},onDateValueChange:{control:!1},locale:{control:!1}}},q=e=>u.jsx(s,{...e}),t={render:q,parameters:{docs:{source:{code:j}}},name:"Выбор года"},L=e=>u.jsx(d,{...e}),n={render:L,parameters:{docs:{source:{code:F}}},name:"Кастомизация отображения"};var m,D,C;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: YearPickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: YearPickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор года'
}`,...(C=(D=t.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var f,y,E;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: YearPickerCalendarCustomCellStory,
  parameters: {
    docs: {
      source: {
        code: YearPickerCalendarCustomCellTemplateRaw
      }
    }
  },
  name: 'Кастомизация отображения'
}`,...(E=(y=n.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const ee=["YearPickerCalendarSimple","YearPickerCalendarCustomCell"];export{n as YearPickerCalendarCustomCell,t as YearPickerCalendarSimple,ee as __namedExportsOrder,X as default};

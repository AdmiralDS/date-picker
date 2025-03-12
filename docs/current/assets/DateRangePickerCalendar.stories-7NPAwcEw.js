import{j as a}from"./jsx-runtime-C8_8iAox.js";import{D as R}from"./index-D7FT1OxJ.js";import"./index-BfVhewva.js";import{W as P,b as A,T as f}from"./common-D3B5b-gI.js";import{g as H,r as c}from"./index-Dkaqzkgy.js";import{d as h,m as I,v as _}from"./index-BiDA7qzR.js";import{Y as L}from"./index-BStNQ-dM.js";import"./index-Cy_66EjM.js";import"./JRhItxCR-CthsVowi.js";import"./ChevronRightOutline-SkXZ6AYn.js";import"./index-TIupm8Qa.js";import"./index-COq-NKRs.js";import"./DropdownProvider.es-CM2w3VWp.js";import"./index-BgiVB9ZQ.js";import"./index-Dxi5WBdw.js";import"./index-PMlMqZWJ.js";import"./index-YfrebGKR.js";import"./index-Qr37q1lf.js";import"./index-C8k7iIC0.js";import"./index-DleBbD4P.js";const z=()=>{const t=s=>{const d=s.target.dataset.value;console.log(`click on ${d}`)};return a.jsxs(P,{children:[a.jsx(R,{onClick:t}),a.jsxs(A,{children:[a.jsx(f,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона дат"}),a.jsxs(f,{font:"Body/Body 2 Long",as:"div",children:["При первом клике на число оно выделяется синим. Далее ведем курсор ко второму числу, числа автоматически закрашиваются во всем диапазоне до даты под курсором.",a.jsx("br",{}),"При клике на второе число оно также выделяется синим. Диапазон дат выбран.",a.jsx("br",{}),a.jsx("br",{}),"Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год, либо нажав на месяц/год в шапке календаря.",a.jsx("br",{}),a.jsx("br",{}),"Стрелки влево-вправо позволяют менять год."]})]})]})};var D={exports:{}},N=D.exports,x;function Y(){return x||(x=1,function(t,s){(function(d,o){t.exports=o()})(N,function(){return function(d,o,u){var m=function(i,e){if(!e||!e.length||e.length===1&&!e[0]||e.length===1&&Array.isArray(e[0])&&!e[0].length)return null;var l;e.length===1&&e[0].length>0&&(e=e[0]),l=(e=e.filter(function(v){return v}))[0];for(var n=1;n<e.length;n+=1)e[n].isValid()&&!e[n][i](l)||(l=e[n]);return l};u.max=function(){var i=[].slice.call(arguments,0);return m("isAfter",i)},u.min=function(){var i=[].slice.call(arguments,0);return m("isBefore",i)}}})}(D)),D.exports}var $=Y();const O=H($);h.extend(O);const U=t=>{switch(t){case"years":return"year";case"months":return"month";case"dates":default:return"date"}},G=(t,s)=>{switch(s){case"years":return t.subtract(L,"year");case"months":return t.subtract(1,"year");case"dates":default:return t.subtract(1,"month")}},q=(t,s,d)=>{if(!t&&!s&&!d)return;const o=[];return t&&o.push(t),s&&o.push(s),d&&o.push(d),h.min(o)},F=()=>{const[t,s]=c.useState("dates"),d=r=>{s(r)},[o,u]=c.useState(h()),m=r=>{u(r)},[i,e]=c.useState(),l=r=>{e(r)},[n,v]=c.useState(),T=r=>{v(r)},[y,k]=c.useState(!1);c.useEffect(()=>{const r=G(o,t),C=U(t),w=q(i,n==null?void 0:n[0],n==null?void 0:n[1]);w&&r.isBefore(w,C)?k(!0):y&&k(!1)},[o,t,i]);const B=r=>i&&r.isBefore(i,"date")&&!I("date",r,n)&&!_("date",r,n)?{disabled:!0}:{},W=r=>{const C=r.target.dataset.value;console.log(`click on ${C}`)};return a.jsxs(P,{children:[a.jsx(R,{onClick:W,onActiveDateRangeEndValueChange:l,dateAttributes:B,onSelectedDateRangeValueChange:T,defaultViewModeValue:"dates",defaultDateValue:h(),onDateValueChange:m,onViewModeChange:d,prevButtonProps:{disabled:y}}),a.jsxs(A,{children:[a.jsx(f,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона дат"}),a.jsxs(f,{font:"Body/Body 2 Long",as:"div",children:["При необходимости можно блокировать для выбора даты, стоящие перед первым выбранным концом отрезка.",a.jsx("br",{}),a.jsx("br",{}),"В данном случае рекомендуется также блокировать стрелки на панели переключения месяцев/лет."]})]})]})},K=`import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import { DateRangePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const DateRangePickerCalendarSimpleTemplate = () => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return (
    <WrapperHorizontal>
      <DateRangePickerCalendar onClick={handleClick} />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор диапазона дат
        </T>
        <T font="Body/Body 2 Long" as="div">
          При первом клике на число оно выделяется синим. Далее ведем курсор ко второму числу, числа автоматически
          закрашиваются во всем диапазоне до даты под курсором.
          <br />
          При клике на второе число оно также выделяется синим. Диапазон дат выбран.
          <br />
          <br />
          Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год,
          либо нажав на месяц/год в шапке календаря.
          <br />
          <br />
          Стрелки влево-вправо позволяют менять год.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};
`,J=`import type { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';

import { T } from '@admiral-ds/react-ui';
import type { CalendarViewMode } from '@admiral-ds/date-picker';
import { DateRangePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { dateIsInRange, dateIsSelected } from '#lib/utils.ts';
import { YEARS_ON_SCREEN } from '#lib/YearsOfTwentyYearsWidget/constants.ts';
import type { DateRange } from 'lib/types';

dayjs.extend(minMax);

const getUnitType = (mode: CalendarViewMode) => {
  switch (mode) {
    case 'years':
      return 'year';
    case 'months':
      return 'month';
    case 'dates':
    default:
      return 'date';
  }
};
const getPrevDate = (date: Dayjs, viewMode: CalendarViewMode) => {
  switch (viewMode) {
    case 'years':
      return date.subtract(YEARS_ON_SCREEN, 'year');
    case 'months':
      return date.subtract(1, 'year');
    case 'dates':
    default:
      return date.subtract(1, 'month');
  }
};

const getMinDate = (date1?: Dayjs, date2?: Dayjs, date3?: Dayjs) => {
  if (!date1 && !date2 && !date3) return undefined;
  const dates: Dayjs[] = [];
  if (date1) dates.push(date1);
  if (date2) dates.push(date2);
  if (date3) dates.push(date3);
  return dayjs.min(dates);
};

export const DateRangePickerCalendarBlockEarlierDatesTemplate = () => {
  const [viewMode, setViewMode] = useState<CalendarViewMode>('dates');
  const handleViewModeChange = (mode: CalendarViewMode) => {
    setViewMode(mode);
  };

  const [viewDate, setViewDate] = useState<Dayjs>(dayjs());
  const handleViewDateChange = (date: Dayjs) => {
    setViewDate(date);
  };

  const [activeDateRangeEnd, setActiveDateRangeEnd] = useState<Dayjs | undefined>();
  const handleActiveDateRangeEndChange = (date?: Dayjs) => {
    setActiveDateRangeEnd(date);
  };

  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>();
  const handleSelectedDateRangeChange = (dateRange: DateRange) => {
    setSelectedDateRange(dateRange);
  };

  const [prevArrowDisabled, setPrevArrowDisabled] = useState<boolean>(false);
  useEffect(() => {
    const prevDate = getPrevDate(viewDate, viewMode);
    const unit = getUnitType(viewMode);
    const minDate = getMinDate(activeDateRangeEnd, selectedDateRange?.[0], selectedDateRange?.[1]);
    if (minDate && prevDate.isBefore(minDate, unit)) {
      setPrevArrowDisabled(true);
    } else {
      if (prevArrowDisabled) {
        setPrevArrowDisabled(false);
      }
    }
  }, [viewDate, viewMode, activeDateRangeEnd]);

  const dateAttrs = (date: Dayjs) => {
    if (activeDateRangeEnd && date.isBefore(activeDateRangeEnd, 'date')) {
      if (!dateIsInRange('date', date, selectedDateRange) && !dateIsSelected('date', date, selectedDateRange)) {
        return { disabled: true };
      }
    }
    return {};
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return (
    <WrapperHorizontal>
      <DateRangePickerCalendar
        onClick={handleClick}
        onActiveDateRangeEndValueChange={handleActiveDateRangeEndChange}
        dateAttributes={dateAttrs}
        onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
        defaultViewModeValue={'dates'}
        defaultDateValue={dayjs()}
        onDateValueChange={handleViewDateChange}
        onViewModeChange={handleViewModeChange}
        prevButtonProps={{ disabled: prevArrowDisabled }}
      />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор диапазона дат
        </T>
        <T font="Body/Body 2 Long" as="div">
          При необходимости можно блокировать для выбора даты, стоящие перед первым выбранным концом отрезка.
          <br />
          <br />В данном случае рекомендуется также блокировать стрелки на панели переключения месяцев/лет.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};
`,Ce={title:"Admiral-2.1/Range Picker/DateRangePickerCalendar",component:R,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{dateValue:{control:{type:"text"}},defaultDateValue:{control:{type:"text"}},onDateValueChange:{control:!1},locale:{control:!1}}},Z=()=>a.jsx(z,{}),p={render:Z,parameters:{docs:{source:{code:K}}},name:"Выбор диапазона дат"},Q=()=>a.jsx(F,{}),g={render:Q,parameters:{docs:{source:{code:J}}},name:"Выбор диапазона дат только вперед"};var S,E,b;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: DateRangePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: DateRangePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона дат'
}`,...(b=(E=p.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var M,j,V;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: DateRangePickerCalendarBlockEarlierDatesStory,
  parameters: {
    docs: {
      source: {
        code: DateRangePickerCalendarBlockEarlierDatesTemplateRaw
      }
    }
  },
  name: 'Выбор диапазона дат только вперед'
}`,...(V=(j=g.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};const Re=["DateRangePickerCalendarSimple","DateRangePickerCalendarBlockEarierDates"];export{g as DateRangePickerCalendarBlockEarierDates,p as DateRangePickerCalendarSimple,Re as __namedExportsOrder,Ce as default};

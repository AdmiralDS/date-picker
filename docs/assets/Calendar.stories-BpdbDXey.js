import{p as g,j as d,t as ee}from"./typography.es-DJ4WRfsu.js";import"./index-DUrvFc95.js";import{D as te,v as ae,w as ne,c as ue,M as se,r as le,b as re,H as ie}from"./index-DnXc0ZDD.js";import{r as D}from"./index-RYns6xqu.js";import{b as oe,c as de}from"./index-DisOlbzP.js";import"./index-rLJdUzAE.js";import"./ChevronRightOutline-4h1Amxbj.js";import"./index-BQaZqJLe.js";import"./DropdownProvider.es-DMHOw4-n.js";import"./index-DjVRa9xT.js";import"./index-CMIGvJsC.js";const me=252,ce=g.div.withConfig({displayName:"Days__DayNamesWrapper",componentId:"sc-cf20c94f-0"})(["box-sizing:border-box;display:flex;margin-bottom:4px;"]),pe=g.div.withConfig({displayName:"Days__DayNameCell",componentId:"sc-cf20c94f-1"})(["box-sizing:border-box;width:","px;height:","px;text-align:center;",""],te,ae,e=>e.$dateCellMixin),w=({locale:e,dayNameCellState:t,...a})=>{const s=ne(e).map((r,i)=>{const{cellMixin:m,...c}=t(i);return d.jsx(pe,{"data-cell-type":"dayCell","data-value":r,...c,$dateCellMixin:m,children:ue(r)},r)});return d.jsx(ce,{...a,children:s})};try{w.displayName="Days",w.__docgenInfo={description:"",displayName:"Days",props:{locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"string"}},dayNameCellState:{defaultValue:null,description:"",name:"dayNameCellState",required:!0,type:{name:"(dayNumber: number) => CellStateProps"}}}}}catch{}function fe(e){const t=b(e),a=t.getDay()||7;return V(t.getTime(),-a+1)}function De(e){const t=b(e);return t.setDate(1),t}function b(e){const t=new Date(e);return t.setHours(0,0,0,0),t}function V(e,t){const a=b(e);return a.setHours(24*t),a}function R(e,t){const a=new Date(e),n=new Date(t);return a.getDate()===n.getDate()&&a.getMonth()===n.getMonth()&&a.getFullYear()===n.getFullYear()}function ge(e,t){const a=new Date(e),n=new Date(t);return a.getMonth()===n.getMonth()&&a.getFullYear()===n.getFullYear()}function _(e,t=2){return String(e).padStart(t,"0")}function Te(e,t="."){return _(e.getDate())+t+_(e.getMonth()+1)+t+_(e.getFullYear(),4)}function Ce(e){return Te(new Date(e))}const ye=g.div.withConfig({displayName:"Dates__DatesWrapper",componentId:"sc-ecbdb65c-0"})(["box-sizing:border-box;display:flex;flex-wrap:wrap;align-content:space-between;height:","px;"],oe);function be(e,t){const a=b(e).getTime();return Array.from(Array(de).keys()).map(n=>{const s=V(a,n);return{timestamp:s.getTime(),formattedDate:t(s.getTime()),dateOfMonth:s.getDate(),month:s.getMonth(),year:s.getFullYear(),dayOfTheWeek:s.getDay()}})}function he(){return{disabled:!1,hidden:!1,isHoliday:!1}}function x(e){const[t,a]=e.map(n=>b(n).getTime());return t>a?[a,t]:[t,a]}const F=({displayMonthTimestamp:e=Date.now(),selectedTimestamp:t,selectedRangeTimestamp:a,activeTimestamp:n,dateAttributes:s=he,cell:r=se,formatter:i=Ce,...m})=>{const f=D.useMemo(()=>{const l=De(e),u=fe(l.getTime());return be(u.getTime(),i)},[e,i]).map(({timestamp:l,formattedDate:u,dateOfMonth:o,dayOfTheWeek:L})=>{const{hidden:T,disabled:C,isHoliday:q}=s(l),H=R(l,Date.now()),O=n?R(l,n):!1,J=t?R(l,t):!1,W=o,v=!ge(l,e);if(a){const[B,I]=x(a),k=l>B&&l<I,E=l==B,M=l==I,K=n&&!C&&!T?k&&n==l:!1,Q=n&&!C&&!T?E&&n==l:!1,X=n&&!C&&!T?M&&n==l:!1;return{dateValue:l,formattedDate:u,key:u,cellContent:W,selected:E||M,isActive:O,isCurrent:H,isOutsideMonth:v,disabled:C,hidden:T||v,isHoliday:q,isInRange:k,isRangeStart:E,isRangeEnd:M,isInRangeSelecting:K,isRangeSelectingStart:Q,isRangeSelectingEnd:X,isStartOfRow:L===1,isEndOfRow:L===0}}return{dateValue:l,formattedDate:u,key:u,cellContent:W,selected:J,isCurrent:H,isActive:O,disabled:C,hidden:T||v,isHoliday:q}}).map(l=>D.createElement(r,l));return d.jsx(ye,{...m,"data-container-type":"datesWrapper",children:f})};try{x.displayName="normalizeTimestampRange",x.__docgenInfo={description:"Меняет местами концы отрезка, если они в не естественном порядке и приводит время к полночи в текущей временной зоне",displayName:"normalizeTimestampRange",props:{0:{defaultValue:null,description:"",name:"0",required:!0,type:{name:"number"}},1:{defaultValue:null,description:"",name:"1",required:!0,type:{name:"number"}},length:{defaultValue:null,description:"",name:"length",required:!0,type:{name:"2"}}}}}catch{}try{F.displayName="Dates",F.__docgenInfo={description:"",displayName:"Dates",props:{displayMonthTimestamp:{defaultValue:{value:"Date.now()"},description:"timestamp задает дату календаря для отображения месяца",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"Задает выбранную дату",name:"selectedTimestamp",required:!1,type:{name:"number"}},selectedRangeTimestamp:{defaultValue:null,description:"Задает выбранный интервал",name:"selectedRangeTimestamp",required:!1,type:{name:"DateRangeTimestamp"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((date: number) => DateAttributes)"}},cell:{defaultValue:{value:"memo(DefaultDateCell)"},description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},formatter:{defaultValue:null,description:"Форматтер в необходимое представление строки",name:"formatter",required:!1,type:{name:"((date: number) => string)"}}}}}catch{}const Se=g.div.withConfig({displayName:"Calendar__DatesOfMonthWrapper",componentId:"sc-9cd07ce1-0"})(["background-color:",";width:","px;margin:12px 16px 16px 16px;",""],({theme:e})=>e.color["Special/Elevated BG"],me,ee["Body/Body 2 Long"]),ve={cellMixin:re},Ee=()=>ve,y=({selectedTimestamp:e,selectedRangeTimestamp:t,activeTimestamp:a,dateAttributes:n,locale:s=le,cell:r,displayMonthTimestamp:i=Date.now(),...m})=>d.jsxs(Se,{...m,"data-container-type":"datesOfMonthWrapper",children:[d.jsx(w,{locale:s==null?void 0:s.localeName,dayNameCellState:Ee}),d.jsx(F,{displayMonthTimestamp:i,selectedTimestamp:e,selectedRangeTimestamp:t,activeTimestamp:a,dateAttributes:n,cell:r,"data-container-type":"datesWrapper"})]});try{y.displayName="Calendar",y.__docgenInfo={description:"",displayName:"Calendar",props:{displayMonthTimestamp:{defaultValue:{value:"Date.now()"},description:"timestamp задает дату календаря для отображения месяца, по умолчанию отображается текущий месяц",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"",name:"selectedTimestamp",required:!1,type:{name:"number"}},selectedRangeTimestamp:{defaultValue:null,description:"",name:"selectedRangeTimestamp",required:!1,type:{name:"DateRangeTimestamp"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDateTimestamp: number) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const Me=g.div.withConfig({displayName:"CalendarDateSelection.template__Wrapper",componentId:"sc-25ed333-0"})(["display:inline-flex;flex-direction:column;align-items:center;align-content:space-between;border:1px "," dashed;border-radius:8px;"],e=>e.theme.color["Neutral/Neutral 20"]);function P(e){const t=e.dataset.cellType==="dateCell",a=e.dataset.disabled==="true"||e.dataset.hiddenCell==="true",n=e.dataset.value,s=n?Number.parseInt(n):void 0,r=e.dataset.date;return{isDateCell:t,disabled:a,timestamp:s,dateString:r}}const N=({...e})=>{const[t,a]=D.useState(V(Date.now(),1).getTime()),[n,s]=D.useState(),r=c=>{const p=P(c.target);if(p.isDateCell&&!p.disabled){const f=p.timestamp;a(l=>l!==f?f:void 0)}},i=c=>{const p=P(c.target);s(p.timestamp)},m=()=>{s(void 0)};return d.jsx(Me,{children:d.jsx(y,{...e,selectedTimestamp:t,activeTimestamp:n,onClick:r,onMouseLeave:m,onMouseOver:i})})};try{N.displayName="CalendarDateSelectionTemplate",N.__docgenInfo={description:"",displayName:"CalendarDateSelectionTemplate",props:{displayMonthTimestamp:{defaultValue:null,description:"timestamp задает дату календаря для отображения месяца, по умолчанию отображается текущий месяц",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"",name:"selectedTimestamp",required:!1,type:{name:"number"}},selectedRangeTimestamp:{defaultValue:null,description:"",name:"selectedRangeTimestamp",required:!1,type:{name:"DateRangeTimestamp"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDateTimestamp: number) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const Re=`import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Calendar } from '@admiral-ds/date-picker';
import { addOrSubstractDays } from 'lib/dateUtils';

const Wrapper = styled.div\`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  border: 1px \${(p) => p.theme.color['Neutral/Neutral 20']} dashed;
  border-radius: 8px;
\`;

function getDateCellAttributeValues(element: HTMLElement) {
  const isDateCell = element.dataset['cellType'] === 'dateCell';
  const disabled = element.dataset['disabled'] === 'true' || element.dataset['hiddenCell'] === 'true';
  const timestampString = element.dataset['value'];
  const timestamp = timestampString ? Number.parseInt(timestampString) : undefined;
  const dateString = element.dataset['date'];

  return {
    isDateCell,
    disabled,
    timestamp,
    dateString,
  };
}
export const CalendarDateSelectionTemplate = ({ ...props }: ComponentPropsWithoutRef<typeof Calendar>) => {
  const [selectedTimestamp, setSelectedDate] = useState<number | undefined>(
    addOrSubstractDays(Date.now(), 1).getTime(),
  );

  const [activeTimestamp, setactiveTimestamp] = useState<number | undefined>();

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const cellData = getDateCellAttributeValues(e.target as HTMLElement);
    if (cellData.isDateCell && !cellData.disabled) {
      const newTimestamp = cellData.timestamp;
      setSelectedDate((timestamp) => (timestamp !== newTimestamp ? newTimestamp : undefined));
    }
  };

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const cellData = getDateCellAttributeValues(e.target as HTMLElement);
    setactiveTimestamp(cellData.timestamp);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setactiveTimestamp(undefined);
  };

  return (
    <Wrapper>
      <Calendar
        {...props}
        selectedTimestamp={selectedTimestamp}
        activeTimestamp={activeTimestamp}
        onClick={handleDateClick}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
      />
    </Wrapper>
  );
};
`,_e=g.div.withConfig({displayName:"CalendarRangeSelection.template__Wrapper",componentId:"sc-52cf2603-0"})(["display:inline-flex;flex-direction:column;align-items:center;align-content:space-between;border:1px "," dashed;border-radius:8px;"],e=>e.theme.color["Neutral/Neutral 20"]);function j(e){const t=e.dataset.cellType==="dateCell",a=e.dataset.disabled==="true"||e.dataset.hiddenCell==="true",n=e.dataset.value,s=n?Number.parseInt(n):void 0,r=e.dataset.date;return{isDateCell:t,disabled:a,timestamp:s,dateString:r}}const A=({...e})=>{const[t,a]=D.useState(),[n,s]=D.useState("none"),[r,i]=D.useState(),m=f=>{const l=j(f.target);if(l.isDateCell&&!l.disabled&&l.timestamp){const u=l.timestamp;n=="none"?t?(u>t[0]&&u<t[1]?a(void 0):u>=t[1]?(s("end"),a([t[0],u])):(s("start"),a([u,t[1]])),i(u)):(a([u,u]),s("end")):(n=="end"&&a(o=>o?[o[0],u]:[u,u]),n=="start"&&a(o=>o?[u,o[1]]:[u,u]),s("none"),i(void 0))}},c=f=>{const u=j(f.target).timestamp;if(i(u),u)switch(n){case"start":a(o=>o?[u,o[1]]:[u,u]);break;case"end":a(o=>o?[o[0],u]:[u,u]);break;case"none":t&&(u===t[0]||u===t[1])&&i(void 0)}},p=()=>{i(void 0)};return d.jsx(_e,{children:d.jsx(y,{...e,selectedRangeTimestamp:t,activeTimestamp:r,onClick:m,onMouseLeave:p,onMouseOver:c,cell:ie})})};try{A.displayName="CalendarRangeSelectionTemplate",A.__docgenInfo={description:"",displayName:"CalendarRangeSelectionTemplate",props:{displayMonthTimestamp:{defaultValue:null,description:"timestamp задает дату календаря для отображения месяца, по умолчанию отображается текущий месяц",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"",name:"selectedTimestamp",required:!1,type:{name:"number"}},selectedRangeTimestamp:{defaultValue:null,description:"",name:"selectedRangeTimestamp",required:!1,type:{name:"DateRangeTimestamp"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDateTimestamp: number) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const we=`import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import type { DateRangeTimestamp, Timestamp } from '@admiral-ds/date-picker';
import { Calendar, MemoDefaultDateRangeCell } from '@admiral-ds/date-picker';

const Wrapper = styled.div\`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  border: 1px \${(p) => p.theme.color['Neutral/Neutral 20']} dashed;
  border-radius: 8px;
\`;

function getDateCellAttributeValues(element: HTMLElement) {
  const isDateCell = element.dataset['cellType'] === 'dateCell';
  const disabled = element.dataset['disabled'] === 'true' || element.dataset['hiddenCell'] === 'true';
  const timestampString = element.dataset['value'];
  const timestamp = timestampString ? Number.parseInt(timestampString) : undefined;
  const dateString = element.dataset['date'];

  return {
    isDateCell,
    disabled,
    timestamp,
    dateString,
  };
}

export const CalendarRangeSelectionTemplate = ({ ...props }: ComponentPropsWithoutRef<typeof Calendar>) => {
  const [selectedRangeTimestamp, setSelectedRange] = useState<DateRangeTimestamp | undefined>();
  const [current, setCurrent] = useState<'start' | 'end' | 'none'>('none');
  const [activeTimestamp, setactiveTimestamp] = useState<Timestamp | undefined>();

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const cellData = getDateCellAttributeValues(e.target as HTMLElement);
    if (cellData.isDateCell && !cellData.disabled && cellData.timestamp) {
      const newTimestamp = cellData.timestamp;
      if (current == 'none') {
        if (!selectedRangeTimestamp) {
          setSelectedRange([newTimestamp, newTimestamp]);
          setCurrent('end');
        } else {
          if (newTimestamp > selectedRangeTimestamp[0] && newTimestamp < selectedRangeTimestamp[1]) {
            setSelectedRange(undefined);
          } else if (newTimestamp >= selectedRangeTimestamp[1]) {
            setCurrent('end');
            setSelectedRange([selectedRangeTimestamp[0], newTimestamp]);
          } else {
            setCurrent('start');
            setSelectedRange([newTimestamp, selectedRangeTimestamp[1]]);
          }
          setactiveTimestamp(newTimestamp);
        }
      } else {
        if (current == 'end') {
          setSelectedRange((range) => (range ? [range[0], newTimestamp] : [newTimestamp, newTimestamp]));
        }
        if (current == 'start') {
          setSelectedRange((range) => (range ? [newTimestamp, range[1]] : [newTimestamp, newTimestamp]));
        }
        setCurrent('none');
        setactiveTimestamp(undefined);
      }
    }
  };

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const cellData = getDateCellAttributeValues(e.target as HTMLElement);
    const newTimestamp = cellData.timestamp;
    setactiveTimestamp(newTimestamp);
    if (newTimestamp) {
      switch (current) {
        case 'start':
          setSelectedRange((range) => (range ? [newTimestamp, range[1]] : [newTimestamp, newTimestamp]));
          break;

        case 'end':
          setSelectedRange((range) => (range ? [range[0], newTimestamp] : [newTimestamp, newTimestamp]));
          break;

        case 'none':
          if (
            selectedRangeTimestamp &&
            (newTimestamp === selectedRangeTimestamp[0] || newTimestamp === selectedRangeTimestamp[1])
          ) {
            setactiveTimestamp(undefined);
          }
      }
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setactiveTimestamp(undefined);
  };

  return (
    <Wrapper>
      <Calendar
        {...props}
        selectedRangeTimestamp={selectedRangeTimestamp}
        activeTimestamp={activeTimestamp}
        onClick={handleDateClick}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        cell={MemoDefaultDateRangeCell}
      />
    </Wrapper>
  );
};
`,Pe={title:"Admiral-2.1/Widgets/Calendar",component:y,parameters:{docs:{source:{language:"tsx"}}},argTypes:{}},h={render:e=>d.jsx(N,{...e}),parameters:{docs:{source:{code:Re}}},name:"Calendar выбор даты"},S={render:e=>d.jsx(A,{...e}),parameters:{docs:{source:{code:we}}},name:"Calendar выбор отрезка времени"};var Y,z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: props => <CalendarDateSelectionTemplate {...props} />,
  parameters: {
    docs: {
      source: {
        code: CalendarDateSelectionTemplateRaw
      }
    }
  },
  name: 'Calendar выбор даты'
}`,...($=(z=h.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var G,U,Z;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: props => <CalendarRangeSelectionTemplate {...props} />,
  parameters: {
    docs: {
      source: {
        code: CalendarRangeSelectionTemplateRaw
      }
    }
  },
  name: 'Calendar выбор отрезка времени'
}`,...(Z=(U=S.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};const je=["CalendarDateSelectionStory","CalendarRangeSelectionStory"];export{h as CalendarDateSelectionStory,S as CalendarRangeSelectionStory,je as __namedExportsOrder,Pe as default};

import{j as s}from"./tslib.es6-gXVSDp23.js";import"./index-CTEAhEde.js";import{p as c,t as j}from"./typography.es-zceevOJ_.js";import{D as R,z as k,A as P,c as Y,d as z,a as G,r as w,b as $}from"./index-Lg2VQURa.js";import{r as g}from"./index-uubelm5h.js";import{b as U,c as Z}from"./index-DH4-umzn.js";const J=252,K=c.div.withConfig({displayName:"Days__DayNamesWrapper",componentId:"sc-cf20c94f-0"})(["box-sizing:border-box;display:flex;margin-bottom:4px;"]),Q=c.div.withConfig({displayName:"Days__DayNameCell",componentId:"sc-cf20c94f-1"})(["box-sizing:border-box;width:","px;height:","px;text-align:center;",""],R,k,e=>e.$dateCellMixin),h=({locale:e,dayNameCellState:t,...a})=>{const l=P(e).map((r,d)=>{const{cellMixin:i,...o}=t(d);return s.jsx(Q,{"data-cell-type":"dayCell","data-value":r,...o,$dateCellMixin:i,children:Y(r)},r)});return s.jsx(K,{...a,children:l})};try{h.displayName="Days",h.__docgenInfo={description:"",displayName:"Days",props:{locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"string"}},dayNameCellState:{defaultValue:null,description:"",name:"dayNameCellState",required:!0,type:{name:"(dayNumber: number) => CellStateProps"}}}}}catch{}function X(e){const t=v(e),a=t.getDay()||7;return M(t.getTime(),-a+1)}function ee(e){const t=v(e);return t.setDate(1),t}function v(e){const t=new Date(e);return t.setHours(0,0,0,0),t}function M(e,t){const a=v(e);return a.setHours(24*t),a}function T(e,t){const a=new Date(e),u=new Date(t);return a.getDate()===u.getDate()&&a.getMonth()===u.getMonth()&&a.getFullYear()===u.getFullYear()}function te(e,t){const a=new Date(e),u=new Date(t);return a.getMonth()===u.getMonth()&&a.getFullYear()===u.getFullYear()}function b(e,t=2){return String(e).padStart(t,"0")}function ae(e,t="."){return b(e.getDate())+t+b(e.getMonth()+1)+t+b(e.getFullYear(),4)}function ue(e){return ae(new Date(e))}const ne=c.div.withConfig({displayName:"Dates__DatesWrapper",componentId:"sc-febb216a-0"})(["box-sizing:border-box;display:flex;flex-wrap:wrap;align-content:space-between;height:","px;"],U);function re(e,t){return Array.from(Array(Z).keys()).map(a=>{const u=M(e,a);return{timestamp:u.getTime(),formattedDate:t(u.getTime()),dateOfMonth:u.getDate(),month:u.getMonth(),year:u.getFullYear()}})}function le(){return{disabled:!1,hidden:!1,isHoliday:!1}}const x=({displayMonthTimestamp:e=Date.now(),selectedTimestamp:t,activeTimestamp:a,activeRangeEnd:u,dateAttributes:l=le,cell:r=G,range:d,formatter:i=ue,...o})=>{const f=g.useMemo(()=>{const n=ee(e),D=X(n.getTime());return re(D.getTime(),i)},[e,i]).map(({timestamp:n,formattedDate:D,dateOfMonth:A})=>{const{hidden:V,disabled:L,isHoliday:q}=l(n),W=T(n,Date.now()),O=a?T(n,a):!1,H=t?T(n,t):!1,B=A,I=!te(n,e);return z(n),{dateValue:n,formattedDate:D,key:D,cellContent:B,selected:H,isCurrent:W,isActive:O,disabled:L,hidden:V||I,isHoliday:q}}).map(n=>g.createElement(r,n));return s.jsx(ne,{...o,"data-container-type":"datesWrapper",children:f})};try{x.displayName="Dates",x.__docgenInfo={description:"",displayName:"Dates",props:{displayMonthTimestamp:{defaultValue:{value:"Date.now()"},description:"timestamp задает дату календаря для отображения месяца",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"",name:"selectedTimestamp",required:!1,type:{name:"number"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDateTimestamp: number) => DateAttributes)"}},cell:{defaultValue:{value:"memo(DefaultDateCell)"},description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"boolean"}},formatter:{defaultValue:null,description:"Форматтер в необходимое представление строки",name:"formatter",required:!1,type:{name:"((timestamp: number) => string)"}}}}}catch{}const se=c.div.withConfig({displayName:"Calendar__DatesOfMonthWrapper",componentId:"sc-ee958413-0"})(["background-color:",";width:","px;margin:12px 16px 16px 16px;",""],({theme:e})=>e.color["Special/Elevated BG"],J,j["Body/Body 2 Long"]),ie={cellMixin:$},oe=()=>ie,C=({selectedTimestamp:e,activeTimestamp:t,activeRangeEnd:a,dateAttributes:u,locale:l=w,cell:r,range:d,displayMonthTimestamp:i=Date.now(),...o})=>s.jsxs(se,{...o,"data-container-type":"datesOfMonthWrapper",children:[s.jsx(h,{locale:l==null?void 0:l.localeName,dayNameCellState:oe}),s.jsx(x,{displayMonthTimestamp:i,selectedTimestamp:e,activeTimestamp:t,activeRangeEnd:a,dateAttributes:u,cell:r,"data-container-type":"datesWrapper",range:d})]});try{C.displayName="Calendar",C.__docgenInfo={description:"",displayName:"Calendar",props:{displayMonthTimestamp:{defaultValue:{value:"Date.now()"},description:"timestamp задает дату календаря для отображения месяца, по умолчанию отображается текущий месяц",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"",name:"selectedTimestamp",required:!1,type:{name:"number"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDateTimestamp: number) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"boolean"}}}}}catch{}const de=c.div.withConfig({displayName:"CalendarSimple.template__Wrapper",componentId:"sc-b0fa602e-0"})(["display:inline-flex;flex-direction:column;align-items:center;align-content:space-between;border:1px "," dashed;border-radius:8px;"],e=>e.theme.color["Neutral/Neutral 20"]);function _(e){const t=e.dataset.cellType==="dateCell",a=e.dataset.disabled==="true"||e.dataset.hiddenCell==="true",u=e.dataset.value,l=u?Number.parseInt(u):void 0,r=e.dataset.date;return{isDateCell:t,disabled:a,timestamp:l,dateString:r}}const E=({locale:e=w,...t})=>{const[a,u]=g.useState(M(Date.now(),1).getTime()),[l,r]=g.useState(),d=p=>{const m=_(p.target);if(m.isDateCell&&!m.disabled){const f=m.timestamp;u(n=>n!==f?f:void 0)}},i=p=>{const m=_(p.target);r(m.timestamp)},o=()=>{r(void 0)};return s.jsx(de,{children:s.jsx(C,{...t,selectedTimestamp:a,activeTimestamp:l,onClick:d,onMouseLeave:o,onMouseOver:i})})};try{E.displayName="CalendarSimpleTemplate",E.__docgenInfo={description:"",displayName:"CalendarSimpleTemplate",props:{displayMonthTimestamp:{defaultValue:null,description:"timestamp задает дату календаря для отображения месяца, по умолчанию отображается текущий месяц",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"",name:"selectedTimestamp",required:!1,type:{name:"number"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDateTimestamp: number) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"boolean"}}}}}catch{}const me=`import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Calendar } from '@admiral-ds/date-picker';
import { ruLocale } from '#lib/calendarConstants.ts';
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
export const CalendarSimpleTemplate = ({ locale = ruLocale, ...props }: ComponentPropsWithoutRef<typeof Calendar>) => {
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
`,Ce={title:"Admiral-2.1/Widgets/Calendar",component:C,parameters:{docs:{source:{language:"tsx"}}},argTypes:{}},y={render:e=>s.jsx(E,{...e}),parameters:{docs:{source:{code:me}}},name:"CalendarSimple"};var S,F,N;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <CalendarSimpleTemplate {...props} />,
  parameters: {
    docs: {
      source: {
        code: CalendarSimpleTemplateRaw
      }
    }
  },
  name: 'CalendarSimple'
}`,...(N=(F=y.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const Te=["DatesOfMonthWidgetSimple"];export{y as DatesOfMonthWidgetSimple,Te as __namedExportsOrder,Ce as default};

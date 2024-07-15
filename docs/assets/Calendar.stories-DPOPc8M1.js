import{p,j as i,t as me}from"./typography.es-DJ4WRfsu.js";import"./index-Cv72DKl5.js";import{D as pe,z as ge,A as fe,c as ye,a as Ce,r as he,b as De,M as Te}from"./index-BdAXGuOE.js";import{r as y}from"./index-RYns6xqu.js";import{b as xe,c as be}from"./index--RnFdRoh.js";const ve=252,we=p.div.withConfig({displayName:"Days__DayNamesWrapper",componentId:"sc-1420yof-0"})(["box-sizing:border-box;display:flex;margin-bottom:4px;"]),_e=p.div.withConfig({displayName:"Days__DayNameCell",componentId:"sc-1420yof-1"})(["box-sizing:border-box;width:","px;height:","px;text-align:center;",""],pe,ge,e=>e.$dateCellMixin),M=({locale:e,dayNameCellState:t,...n})=>{const l=fe(e).map((s,o)=>{const{cellMixin:d,...c}=t(o);return i.jsx(_e,{"data-cell-type":"dayCell","data-value":s,...c,$dateCellMixin:d,children:ye(s)},s)});return i.jsx(we,{...n,children:l})};try{M.displayName="Days",M.__docgenInfo={description:"",displayName:"Days",props:{locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"string"}},dayNameCellState:{defaultValue:null,description:"",name:"dayNameCellState",required:!0,type:{name:"(dayNumber: number) => CellStateProps"}}}}}catch{}function ae(e){const t=T(e),n=t.getDay()||7;return w(t.getTime(),-n+1)}function re(e){const t=T(e);return t.setDate(1),t}function T(e){const t=new Date(e);return t.setHours(0,0,0,0),t}function w(e,t){const n=T(e);return n.setHours(24*t),n}function R(e,t){const n=new Date(e),r=new Date(t);return n.getDate()===r.getDate()&&n.getMonth()===r.getMonth()&&n.getFullYear()===r.getFullYear()}function Se(e,t){const n=new Date(e),r=new Date(t);return n.getMonth()===r.getMonth()&&n.getFullYear()===r.getFullYear()}function k(e,t=2){return String(e).padStart(t,"0")}function Ne(e,t="."){return k(e.getDate())+t+k(e.getMonth()+1)+t+k(e.getFullYear(),4)}const Re=()=>navigator.languages&&navigator.languages.length&&navigator.languages[0]||navigator.language||"en";function ke(e=Re(),t="short"){const n=new Date,r=n.getDay(),l=new Intl.DateTimeFormat(e,{weekday:t});return Array.from(Array(7).keys()).map(o=>{const d=w(n.getTime(),o-r);return l.format(d)})}function le(e){return Ne(new Date(e))}const Me=p.div.withConfig({displayName:"Dates__DatesWrapper",componentId:"sc-13jyvtg-0"})(["box-sizing:border-box;display:flex;flex-wrap:wrap;align-content:space-between;height:","px;"],xe);function se(e,t){const n=re(e),r=ae(n.getTime()),s=T(r.getTime()).getTime();return Array.from(Array(be).keys()).map(o=>{const d=w(s,o);return{timestamp:d.getTime(),formattedDate:t(d.getTime()),dateOfMonth:d.getDate(),month:d.getMonth(),year:d.getFullYear(),dayOfTheWeek:d.getDay(),hidden:d.getMonth()!==n.getMonth()}})}function Ee(){return{disabled:!1,hidden:!1,isHoliday:!1}}function E(e){const[t,n]=e.map(r=>T(r).getTime());return t>n?[n,t]:[t,n]}const A=({displayMonthTimestamp:e=Date.now(),selectedTimestamp:t,selectedRangeTimestamp:n,activeTimestamp:r,dateAttributes:l=Ee,cell:s=Ce,formatter:o=le,...d})=>{const g=y.useMemo(()=>{const u=re(e),f=ae(u.getTime());return se(f.getTime(),o)},[e,o]).map(({timestamp:u,formattedDate:f,dateOfMonth:h,dayOfTheWeek:C})=>{const{hidden:a,disabled:m,isHoliday:W}=l(u),V=R(u,Date.now()),O=r?R(u,r):!1,ie=t?R(u,t):!1,H=h,_=!Se(u,e);if(n){const[P,q]=E(n),j=u>P&&u<q,S=u==P,N=u==q,ue=r&&!m&&!a?j&&r==u:!1,de=r&&!m&&!a?S&&r==u:!1,ce=r&&!m&&!a?N&&r==u:!1;return{dateValue:u,formattedDate:f,key:f,cellContent:H,selected:S||N,isActive:O,isCurrent:V,isOutsideMonth:_,disabled:m,hidden:a||_,isHoliday:W,isInRange:j,isRangeStart:S,isRangeEnd:N,isInRangeSelecting:ue,isRangeSelectingStart:de,isRangeSelectingEnd:ce,isStartOfRow:C===1,isEndOfRow:C===0}}return{dateValue:u,formattedDate:f,key:f,cellContent:H,selected:ie,isCurrent:V,isActive:O,disabled:m,hidden:a||_,isHoliday:W}});return i.jsx(Me,{...d,"data-container-type":"datesWrapper",children:g.map(u=>y.createElement(s,u))})};try{E.displayName="normalizeTimestampRange",E.__docgenInfo={description:"Меняет местами концы отрезка, если они в не естественном порядке и приводит время к полночи в текущей временной зоне",displayName:"normalizeTimestampRange",props:{0:{defaultValue:null,description:"",name:"0",required:!0,type:{name:"number"}},1:{defaultValue:null,description:"",name:"1",required:!0,type:{name:"number"}},length:{defaultValue:null,description:"",name:"length",required:!0,type:{name:"2"}}}}}catch{}try{A.displayName="Dates",A.__docgenInfo={description:"",displayName:"Dates",props:{displayMonthTimestamp:{defaultValue:{value:"Date.now()"},description:"timestamp задает дату календаря для отображения месяца",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"Задает выбранную дату",name:"selectedTimestamp",required:!1,type:{name:"number"}},selectedRangeTimestamp:{defaultValue:null,description:"Задает выбранный интервал",name:"selectedRangeTimestamp",required:!1,type:{name:"RangeTimestamp"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((date: number) => DateAttributes)"}},cell:{defaultValue:{value:"memo(DefaultDateCell)"},description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},formatter:{defaultValue:null,description:"Форматтер в необходимое представление строки",name:"formatter",required:!1,type:{name:"((date: number) => string)"}}}}}catch{}const Ae=p.div.withConfig({displayName:"Calendar__DatesOfMonthWrapper",componentId:"sc-1x6w0dl-0"})(["background-color:",";width:","px;margin:12px 16px 16px 16px;",""],({theme:e})=>e.color["Special/Elevated BG"],ve,me["Body/Body 2 Long"]),Le={cellMixin:De},Fe=()=>Le,D=({selectedTimestamp:e,selectedRangeTimestamp:t,activeTimestamp:n,dateAttributes:r,locale:l=he,cell:s,displayMonthTimestamp:o=Date.now(),...d})=>i.jsxs(Ae,{...d,"data-container-type":"datesOfMonthWrapper",children:[i.jsx(M,{locale:l==null?void 0:l.localeName,dayNameCellState:Fe}),i.jsx(A,{displayMonthTimestamp:o,selectedTimestamp:e,selectedRangeTimestamp:t,activeTimestamp:n,dateAttributes:r,cell:s,"data-container-type":"datesWrapper"})]});try{D.displayName="Calendar",D.__docgenInfo={description:"",displayName:"Calendar",props:{displayMonthTimestamp:{defaultValue:{value:"Date.now()"},description:"timestamp задает дату календаря для отображения месяца, по умолчанию отображается текущий месяц",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"",name:"selectedTimestamp",required:!1,type:{name:"number"}},selectedRangeTimestamp:{defaultValue:null,description:"",name:"selectedRangeTimestamp",required:!1,type:{name:"RangeTimestamp"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDateTimestamp: number) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const Be=p.div.withConfig({displayName:"CalendarDateSelectiontemplate__Wrapper",componentId:"sc-1869wkx-0"})(["display:inline-flex;flex-direction:column;align-items:center;align-content:space-between;border:1px "," dashed;border-radius:8px;"],e=>e.theme.color["Neutral/Neutral 20"]);function z(e){const t=e.dataset.cellType==="dateCell",n=e.dataset.disabled==="true"||e.dataset.hiddenCell==="true",r=e.dataset.value,l=r?Number.parseInt(r):void 0,s=e.dataset.date;return{isDateCell:t,disabled:n,timestamp:l,dateString:s}}const L=({...e})=>{const[t,n]=y.useState(w(Date.now(),1).getTime()),[r,l]=y.useState(),s=c=>{const g=z(c.target);if(g.isDateCell&&!g.disabled){const u=g.timestamp;n(f=>f!==u?u:void 0)}},o=c=>{const g=z(c.target);l(g.timestamp)},d=()=>{l(void 0)};return i.jsx(Be,{children:i.jsx(D,{...e,selectedTimestamp:t,activeTimestamp:r,onClick:s,onMouseLeave:d,onMouseOver:o})})};try{L.displayName="CalendarDateSelectionTemplate",L.__docgenInfo={description:"",displayName:"CalendarDateSelectionTemplate",props:{displayMonthTimestamp:{defaultValue:null,description:"timestamp задает дату календаря для отображения месяца, по умолчанию отображается текущий месяц",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"",name:"selectedTimestamp",required:!1,type:{name:"number"}},selectedRangeTimestamp:{defaultValue:null,description:"",name:"selectedRangeTimestamp",required:!1,type:{name:"RangeTimestamp"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDateTimestamp: number) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const Ie=`import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Calendar, addOrSubstractDays } from '@admiral-ds/date-picker';

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
`,We=p.div.withConfig({displayName:"CalendarRangeSelectiontemplate__Wrapper",componentId:"sc-fofady-0"})(["display:inline-flex;flex-direction:column;align-items:center;align-content:space-between;border:1px "," dashed;border-radius:8px;"],e=>e.theme.color["Neutral/Neutral 20"]);function $(e){const t=e.dataset.cellType==="dateCell",n=e.dataset.disabled==="true"||e.dataset.hiddenCell==="true",r=e.dataset.value,l=r?Number.parseInt(r):void 0,s=e.dataset.date;return{isDateCell:t,disabled:n,timestamp:l,dateString:s}}const F=({...e})=>{const[t,n]=y.useState(),[r,l]=y.useState(!0),[s,o]=y.useState("none"),[d,c]=y.useState(),g=h=>{const C=$(h.target);if(C.isDateCell&&!C.disabled&&C.timestamp){const a=C.timestamp;s=="none"?t?a==t[0]?(n([a,t[1]]),o("start"),l(!1),c(a)):a==t[1]?(n([t[0],a]),o("end"),l(!0),c(a)):a>t[1]?(n([t[0],a]),c(void 0)):a<t[0]?(n([a,t[1]]),c(void 0)):(n(r?[a,t[1]]:[t[0],a]),l(m=>!m),c(void 0)):(n([a,a]),o("end"),c(void 0)):(s=="end"&&n(m=>m?[m[0],a]:[a,a]),s=="start"&&n(m=>m?[a,m[1]]:[a,a]),o("none"),l(!0),c(void 0))}},u=h=>{const a=$(h.target).timestamp;if(c(a),a)switch(s){case"start":n(m=>m?[a,m[1]]:[a,a]);break;case"end":n(m=>m?[m[0],a]:[a,a]);break;case"none":t&&(a===t[0]||a===t[1])&&c(void 0)}},f=()=>{c(void 0)};return i.jsx(We,{children:i.jsx(D,{...e,selectedRangeTimestamp:t,activeTimestamp:d,onClick:g,onMouseLeave:f,onMouseOver:u,cell:Te})})};try{F.displayName="CalendarRangeSelectionTemplate",F.__docgenInfo={description:"",displayName:"CalendarRangeSelectionTemplate",props:{displayMonthTimestamp:{defaultValue:null,description:"timestamp задает дату календаря для отображения месяца, по умолчанию отображается текущий месяц",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"",name:"selectedTimestamp",required:!1,type:{name:"number"}},selectedRangeTimestamp:{defaultValue:null,description:"",name:"selectedRangeTimestamp",required:!1,type:{name:"RangeTimestamp"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDateTimestamp: number) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const Ve=`import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import type { RangeTimestamp, Timestamp } from '@admiral-ds/date-picker';
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
  const [selectedRange, setSelectedRange] = useState<RangeTimestamp | undefined>();
  const [togle, setTogle] = useState(true);
  const [current, setCurrent] = useState<'start' | 'end' | 'none'>('none');
  const [active, setActive] = useState<Timestamp | undefined>();

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const cellData = getDateCellAttributeValues(e.target as HTMLElement);
    if (cellData.isDateCell && !cellData.disabled && cellData.timestamp) {
      const newTimestamp = cellData.timestamp;
      if (current == 'none') {
        if (!selectedRange) {
          setSelectedRange([newTimestamp, newTimestamp]);
          setCurrent('end');
          setActive(undefined);
        } else {
          if (newTimestamp == selectedRange[0]) {
            setSelectedRange([newTimestamp, selectedRange[1]]);
            setCurrent('start');
            setTogle(false);
            setActive(newTimestamp);
          } else if (newTimestamp == selectedRange[1]) {
            setSelectedRange([selectedRange[0], newTimestamp]);
            setCurrent('end');
            setTogle(true);
            setActive(newTimestamp);
          } else if (newTimestamp > selectedRange[1]) {
            setSelectedRange([selectedRange[0], newTimestamp]);
            setActive(undefined);
          } else if (newTimestamp < selectedRange[0]) {
            setSelectedRange([newTimestamp, selectedRange[1]]);
            setActive(undefined);
          } else {
            if (togle) {
              setSelectedRange([newTimestamp, selectedRange[1]]);
            } else {
              setSelectedRange([selectedRange[0], newTimestamp]);
            }
            setTogle((c) => !c);
            setActive(undefined);
          }
        }
      } else {
        if (current == 'end') {
          setSelectedRange((range) => (range ? [range[0], newTimestamp] : [newTimestamp, newTimestamp]));
        }
        if (current == 'start') {
          setSelectedRange((range) => (range ? [newTimestamp, range[1]] : [newTimestamp, newTimestamp]));
        }
        setCurrent('none');
        setTogle(true);
        setActive(undefined);
      }
    }
  };

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const cellData = getDateCellAttributeValues(e.target as HTMLElement);
    const newTimestamp = cellData.timestamp;
    setActive(newTimestamp);
    if (newTimestamp) {
      switch (current) {
        case 'start':
          setSelectedRange((range) => (range ? [newTimestamp, range[1]] : [newTimestamp, newTimestamp]));
          break;

        case 'end':
          setSelectedRange((range) => (range ? [range[0], newTimestamp] : [newTimestamp, newTimestamp]));
          break;

        case 'none':
          if (selectedRange && (newTimestamp === selectedRange[0] || newTimestamp === selectedRange[1])) {
            setActive(undefined);
          }
      }
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setActive(undefined);
  };

  return (
    <Wrapper>
      <Calendar
        {...props}
        selectedRangeTimestamp={selectedRange}
        activeTimestamp={active}
        onClick={handleDateClick}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        cell={MemoDefaultDateRangeCell}
      />
    </Wrapper>
  );
};
`,Oe=p.div.withConfig({displayName:"CalendarCelltemplate__StoryComponentWrapper",componentId:"sc-1ychx7x-0"})(["display:inline-flex;flex-direction:column;align-items:center;align-content:space-between;border:1px "," dashed;border-radius:8px;"],e=>e.theme.color["Neutral/Neutral 20"]),He=p.div.withConfig({displayName:"CalendarCelltemplate__Calendar",componentId:"sc-1ychx7x-1"})(["background-color:#ffffff;width:252px;margin:12px 16px 16px 16px;font-family:var(--admiral-font-family,'VTB Group UI',sans-serif);font-style:normal;font-weight:var(--admiral-font-weight-Body_Body2Long,400);font-size:var(--admiral-font-size-Body_Body2Long,14px);line-height:var(--admiral-line-height-Body_Body2Long,20px);font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"]),Pe=p.div.withConfig({displayName:"CalendarCelltemplate__WeekdayNames",componentId:"sc-1ychx7x-2"})(["display:flex;pointer-events:none;"]),Y=p.div.withConfig({displayName:"CalendarCelltemplate__Week",componentId:"sc-1ychx7x-3"})(["display:flex;margin-block:4px;"]),G=p.div.withConfig({displayName:"CalendarCelltemplate__CalendarCell",componentId:"sc-1ychx7x-4"})(["position:relative;box-sizing:border-box;width:36px;height:36px;text-align:center;padding:7px 0;font-family:var(--admiral-font-family,'VTB Group UI',sans-serif);font-style:normal;font-weight:var(--admiral-font-weight-Body_Body2Long,400);font-size:var(--admiral-font-size-Body_Body2Long,14px);line-height:var(--admiral-line-height-Body_Body2Long,20px);font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;color:#23262d;background-color:#ffffff;cursor:default;&[data-hidden='true'] *{display:none;}& .calendar-cell-date_ring:not([data-type]){display:none;}& .calendar-cell-date_ring[data-type='ring-solid']{background-color:",";}& .calendar-cell-date_ring[data-type='ring-solid'] + .calendar-cell-text{color:",";}&:hover .calendar-cell-date_ring[data-type='ring-solid']{background-color:",";}& .calendar-cell-date_ring[data-type='ring-blue']{border:solid 1px ",";}& .calendar-cell-date_ring[data-type='ring-black']{border:solid 1px ",";}&:hover{cursor:pointer;}&[data-hidden='true'] + :not([data-hidden='true']) .calendar-cell-background-left,&:first-of-type .calendar-cell-background-left{border-top-left-radius:4px;border-bottom-left-radius:4px;}&:has(+ [data-hidden='true']) .calendar-cell-background-right,&:last-of-type .calendar-cell-background-right{border-top-right-radius:4px;border-bottom-right-radius:4px;}"],e=>e.theme.color["Primary/Primary 60 Main"],e=>e.theme.color["Special/Static White"],e=>e.theme.color["Primary/Primary 70"],e=>e.theme.color["Primary/Primary 60 Main"],e=>e.theme.color["Neutral/Neutral 90"]),qe=p.div.withConfig({displayName:"CalendarCelltemplate__Text",componentId:"sc-1ychx7x-5"})(["pointer-events:none;display:flex;justify-content:center;align-items:center;position:absolute;top:0;bottom:0;left:0;right:0;"]),je=p.div.withConfig({displayName:"CalendarCelltemplate__Ring",componentId:"sc-1ychx7x-6"})(["pointer-events:none;position:absolute;top:0;bottom:0;left:0;right:0;border-radius:50%;"]),ze=p.div.withConfig({displayName:"CalendarCelltemplate__LeftHalf",componentId:"sc-1ychx7x-7"})(["pointer-events:none;position:absolute;top:0;bottom:0;left:0;width:50%;background-color:",";"],e=>e.theme.color["Opacity/Focus"]),$e=p.div.withConfig({displayName:"CalendarCelltemplate__RightHalf",componentId:"sc-1ychx7x-8"})(["pointer-events:none;position:absolute;top:0;bottom:0;right:0;width:50%;background-color:",";"],e=>e.theme.color["Opacity/Focus"]),B=e=>e.charAt(0).toUpperCase()+e.substring(1).toLowerCase(),oe=new Date;oe.setMonth(7);const I=({...e})=>{const[t,...n]=ke().map(B),r=y.useMemo(()=>se(oe.getTime(),le).reduce((l,s,o)=>{const d=o%7,c=Math.floor(o/7);d===0&&(l[c]=[]);const g=l[c];return g[d]=s,l},[]),[]);return i.jsx(Oe,{children:i.jsxs(He,{className:"calendar-month",children:[i.jsx(Pe,{className:"calendar-weekday-names",children:[...n,t].map((l,s)=>i.jsx(G,{className:"calendar-cell-weekday-name",children:l},l+s))}),r.map((l,s)=>i.jsx(Y,{className:"calendar-week",children:l.map(o=>i.jsxs(G,{className:"calendar-cell-date","data-hidden":o.hidden,children:[i.jsx(ze,{className:"calendar-cell-background-left"}),i.jsx($e,{className:"calendar-cell-background-right"}),i.jsx(je,{className:"calendar-cell-date_ring","data-type":"ring-black"}),i.jsx(qe,{className:"calendar-cell-text",children:o.dateOfMonth})]},o.timestamp))},s)),i.jsx(Y,{})]})})};try{B.displayName="firstCapitalized",B.__docgenInfo={description:"",displayName:"firstCapitalized",props:{}}}catch{}try{I.displayName="CalendarCellStoryTemplate",I.__docgenInfo={description:"",displayName:"CalendarCellStoryTemplate",props:{locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"LocalesArgument"}},weekdayNamesFormat:{defaultValue:null,description:"",name:"weekdayNamesFormat",required:!1,type:{name:"enum",value:[{value:'"long"'},{value:'"short"'},{value:'"narrow"'}]}}}}}catch{}const Ye=`import { useMemo, type ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { firstDayOfTheMonth, mondayOfTheWeek, weekdayNameList } from '@admiral-ds/date-picker';
import type { CalendarDataCell } from '#lib/Calendar/Dates';
import { generateCalendarDataCellList } from '#lib/Calendar/Dates';
import { defaultTimestampFormatter } from '#lib/Calendar/defaultTimestampFormatter';

const StoryComponentWrapper = styled.div\`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  border: 1px \${(p) => p.theme.color['Neutral/Neutral 20']} dashed;
  border-radius: 8px;
\`;

const Calendar = styled.div\`
  background-color: #ffffff;
  width: 252px;
  margin: 12px 16px 16px 16px;
  font-family: var(--admiral-font-family, 'VTB Group UI', sans-serif);
  font-style: normal;
  font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
  font-size: var(--admiral-font-size-Body_Body2Long, 14px);
  line-height: var(--admiral-line-height-Body_Body2Long, 20px);
  font-feature-settings:
    'tnum' on,
    'lnum' on;
  text-rendering: geometricPrecision;
\`;

const WeekdayNames = styled.div\`
  display: flex;
  pointer-events: none;
\`;

const Week = styled.div\`
  display: flex;
  margin-block: 4px;
\`;

const CalendarCell = styled.div\`
  position: relative;
  box-sizing: border-box;
  width: 36px;
  height: 36px;
  text-align: center;
  padding: 7px 0;
  font-family: var(--admiral-font-family, 'VTB Group UI', sans-serif);
  font-style: normal;
  font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
  font-size: var(--admiral-font-size-Body_Body2Long, 14px);
  line-height: var(--admiral-line-height-Body_Body2Long, 20px);
  font-feature-settings:
    'tnum' on,
    'lnum' on;
  text-rendering: geometricPrecision;
  color: #23262d;
  background-color: #ffffff;
  cursor: default;

  &[data-hidden='true'] * {
    display: none;
  }

  & .calendar-cell-date_ring:not([data-type]) {
    display: none;
  }

  & .calendar-cell-date_ring[data-type='ring-solid'] {
    background-color: \${(p) => p.theme.color['Primary/Primary 60 Main']};
  }

  & .calendar-cell-date_ring[data-type='ring-solid'] + .calendar-cell-text {
    color: \${(p) => p.theme.color['Special/Static White']};
  }

  &:hover .calendar-cell-date_ring[data-type='ring-solid'] {
    background-color: \${(p) => p.theme.color['Primary/Primary 70']};
  }

  & .calendar-cell-date_ring[data-type='ring-blue'] {
    border: solid 1px \${(p) => p.theme.color['Primary/Primary 60 Main']};
  }

  & .calendar-cell-date_ring[data-type='ring-black'] {
    border: solid 1px \${(p) => p.theme.color['Neutral/Neutral 90']};
  }

  &:hover {
    cursor: pointer;
  }

  /* закругленные края у первого не скрытого числа месяца или первого в строке */
  &[data-hidden='true'] + :not([data-hidden='true']) .calendar-cell-background-left,
  &:first-of-type .calendar-cell-background-left {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  /* закругленные края у последнего не скрытого числа месяца или последнего в строке */
  &:has(+ [data-hidden='true']) .calendar-cell-background-right,
  &:last-of-type .calendar-cell-background-right {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
\`;

const Text = styled.div\`
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
\`;

const Ring = styled.div\`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
\`;

const LeftHalf = styled.div\`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  background-color: \${(p) => p.theme.color['Opacity/Focus']};
\`;

const RightHalf = styled.div\`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50%;
  background-color: \${(p) => p.theme.color['Opacity/Focus']};
\`;

export const firstCapitalized = (s: string) => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase();
type IntlProps = {
  locales?: Intl.LocalesArgument;
  weekdayNamesFormat?: 'long' | 'short' | 'narrow';
};

type CellProps = {
  ringType?: 'ring-blue' | 'ring-solid' | 'ring-black';
  backgroundType?: 'left' | 'right' | 'all';
};

const startDate = new Date();
startDate.setMonth(7);

export const CalendarCellStoryTemplate = ({ ...props }: ComponentPropsWithoutRef<typeof Calendar> & IntlProps) => {
  const [sunday, ...weekdayNames] = weekdayNameList().map(firstCapitalized);

  const cellDataList = useMemo<CalendarDataCell[][]>(() => {
    return generateCalendarDataCellList(startDate.getTime(), defaultTimestampFormatter).reduce((acc, val, index) => {
      const indexAtInnerArray = index % 7;
      const arrayIndex = Math.floor(index / 7);
      if (indexAtInnerArray === 0) {
        acc[arrayIndex] = [];
      }
      const innerArray = acc[arrayIndex];
      innerArray[indexAtInnerArray] = val;
      return acc;
    }, [] as CalendarDataCell[][]);
  }, []);

  return (
    <StoryComponentWrapper>
      <Calendar className="calendar-month">
        <WeekdayNames className="calendar-weekday-names">
          {[...weekdayNames, sunday].map((name, index) => (
            <CalendarCell className="calendar-cell-weekday-name" key={name + index}>
              {name}
            </CalendarCell>
          ))}
        </WeekdayNames>
        {cellDataList.map((weekArr, index) => (
          <Week className="calendar-week" key={index}>
            {weekArr.map((data) => (
              <CalendarCell className="calendar-cell-date" key={data.timestamp} data-hidden={data.hidden}>
                <LeftHalf className="calendar-cell-background-left" />
                <RightHalf className="calendar-cell-background-right" />
                <Ring className="calendar-cell-date_ring" data-type="ring-black" />
                <Text className="calendar-cell-text">{data.dateOfMonth}</Text>
              </CalendarCell>
            ))}
          </Week>
        ))}
        <Week></Week>
      </Calendar>
    </StoryComponentWrapper>
  );
};
`,et={title:"Admiral-2.1/Widgets/Calendar",component:D,parameters:{docs:{source:{language:"tsx"}}},argTypes:{}},x={render:e=>i.jsx(L,{...e}),parameters:{docs:{source:{code:Ie}}},name:"Calendar выбор даты"},b={render:e=>i.jsx(F,{...e}),parameters:{docs:{source:{code:Ve}}},name:"Calendar выбор отрезка времени"},v={render:e=>i.jsx(I,{...e}),parameters:{docs:{source:{code:Ye}}},name:"CalendarDateCell"};var U,Z,J;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <CalendarDateSelectionTemplate {...props} />,
  parameters: {
    docs: {
      source: {
        code: CalendarDateSelectionTemplateRaw
      }
    }
  },
  name: 'Calendar выбор даты'
}`,...(J=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,Q,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: props => <CalendarRangeSelectionTemplate {...props} />,
  parameters: {
    docs: {
      source: {
        code: CalendarRangeSelectionTemplateRaw
      }
    }
  },
  name: 'Calendar выбор отрезка времени'
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,te,ne;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: props => <CalendarCellStoryTemplate {...props} />,
  parameters: {
    docs: {
      source: {
        code: CalendarCellStoryTemplateRaw
      }
    }
  },
  name: 'CalendarDateCell'
}`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const tt=["CalendarDateSelectionStory","CalendarRangeSelectionStory","CalendarCellStory"];export{v as CalendarCellStory,x as CalendarDateSelectionStory,b as CalendarRangeSelectionStory,tt as __namedExportsOrder,et as default};

import{p as C,j as c,t as ee}from"./typography.es-DJ4WRfsu.js";import"./index-Btqlrfhk.js";import{D as te,z as ae,A as ne,c as ue,a as se,r as le,b as re,M as ie}from"./index-DRhuP2Fw.js";import{r as g}from"./index-RYns6xqu.js";import{b as oe,c as de}from"./index-C_itu0Qr.js";const ce=252,me=C.div.withConfig({displayName:"Days__DayNamesWrapper",componentId:"sc-cf20c94f-0"})(["box-sizing:border-box;display:flex;margin-bottom:4px;"]),pe=C.div.withConfig({displayName:"Days__DayNameCell",componentId:"sc-cf20c94f-1"})(["box-sizing:border-box;width:","px;height:","px;text-align:center;",""],te,ae,e=>e.$dateCellMixin),x=({locale:e,dayNameCellState:t,...a})=>{const s=ne(e).map((i,d)=>{const{cellMixin:p,...o}=t(d);return c.jsx(pe,{"data-cell-type":"dayCell","data-value":i,...o,$dateCellMixin:p,children:ue(i)},i)});return c.jsx(me,{...a,children:s})};try{x.displayName="Days",x.__docgenInfo={description:"",displayName:"Days",props:{locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"string"}},dayNameCellState:{defaultValue:null,description:"",name:"dayNameCellState",required:!0,type:{name:"(dayNumber: number) => CellStateProps"}}}}}catch{}function fe(e){const t=h(e),a=t.getDay()||7;return L(t.getTime(),-a+1)}function ge(e){const t=h(e);return t.setDate(1),t}function h(e){const t=new Date(e);return t.setHours(0,0,0,0),t}function L(e,t){const a=h(e);return a.setHours(24*t),a}function M(e,t){const a=new Date(e),u=new Date(t);return a.getDate()===u.getDate()&&a.getMonth()===u.getMonth()&&a.getFullYear()===u.getFullYear()}function De(e,t){const a=new Date(e),u=new Date(t);return a.getMonth()===u.getMonth()&&a.getFullYear()===u.getFullYear()}function _(e,t=2){return String(e).padStart(t,"0")}function Te(e,t="."){return _(e.getDate())+t+_(e.getMonth()+1)+t+_(e.getFullYear(),4)}function Ce(e){return Te(new Date(e))}const ye=C.div.withConfig({displayName:"Dates__DatesWrapper",componentId:"sc-8aad2b51-0"})(["box-sizing:border-box;display:flex;flex-wrap:wrap;align-content:space-between;height:","px;"],oe);function be(e,t){const a=h(e).getTime();return Array.from(Array(de).keys()).map(u=>{const s=L(a,u);return{timestamp:s.getTime(),formattedDate:t(s.getTime()),dateOfMonth:s.getDate(),month:s.getMonth(),year:s.getFullYear(),dayOfTheWeek:s.getDay()}})}function he(){return{disabled:!1,hidden:!1,isHoliday:!1}}function A(e){const[t,a]=e.map(u=>h(u).getTime());return t>a?[a,t]:[t,a]}const F=({displayMonthTimestamp:e=Date.now(),selectedTimestamp:t,selectedRangeTimestamp:a,activeTimestamp:u,dateAttributes:s=he,cell:i=se,formatter:d=Ce,...p})=>{const T=g.useMemo(()=>{const l=ge(e),m=fe(l.getTime());return be(m.getTime(),d)},[e,d]).map(({timestamp:l,formattedDate:m,dateOfMonth:D,dayOfTheWeek:n})=>{const{hidden:r,disabled:y,isHoliday:q}=s(l),H=M(l,Date.now()),O=u?M(l,u):!1,J=t?M(l,t):!1,W=D,R=!De(l,e);if(a){const[B,I]=A(a),k=l>B&&l<I,E=l==B,w=l==I,K=u&&!y&&!r?k&&u==l:!1,Q=u&&!y&&!r?E&&u==l:!1,X=u&&!y&&!r?w&&u==l:!1;return{dateValue:l,formattedDate:m,key:m,cellContent:W,selected:E||w,isActive:O,isCurrent:H,isOutsideMonth:R,disabled:y,hidden:r||R,isHoliday:q,isInRange:k,isRangeStart:E,isRangeEnd:w,isInRangeSelecting:K,isRangeSelectingStart:Q,isRangeSelectingEnd:X,isStartOfRow:n===1,isEndOfRow:n===0}}return{dateValue:l,formattedDate:m,key:m,cellContent:W,selected:J,isCurrent:H,isActive:O,disabled:y,hidden:r||R,isHoliday:q}}).map(l=>g.createElement(i,l));return c.jsx(ye,{...p,"data-container-type":"datesWrapper",children:T})};try{A.displayName="normalizeTimestampRange",A.__docgenInfo={description:"Меняет местами концы отрезка, если они в не естественном порядке и приводит время к полночи в текущей временной зоне",displayName:"normalizeTimestampRange",props:{0:{defaultValue:null,description:"",name:"0",required:!0,type:{name:"number"}},1:{defaultValue:null,description:"",name:"1",required:!0,type:{name:"number"}},length:{defaultValue:null,description:"",name:"length",required:!0,type:{name:"2"}}}}}catch{}try{F.displayName="Dates",F.__docgenInfo={description:"",displayName:"Dates",props:{displayMonthTimestamp:{defaultValue:{value:"Date.now()"},description:"timestamp задает дату календаря для отображения месяца",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"Задает выбранную дату",name:"selectedTimestamp",required:!1,type:{name:"number"}},selectedRangeTimestamp:{defaultValue:null,description:"Задает выбранный интервал",name:"selectedRangeTimestamp",required:!1,type:{name:"RangeTimestamp"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((date: number) => DateAttributes)"}},cell:{defaultValue:{value:"memo(DefaultDateCell)"},description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},formatter:{defaultValue:null,description:"Форматтер в необходимое представление строки",name:"formatter",required:!1,type:{name:"((date: number) => string)"}}}}}catch{}const Se=C.div.withConfig({displayName:"Calendar__DatesOfMonthWrapper",componentId:"sc-10cae732-0"})(["background-color:",";width:","px;margin:12px 16px 16px 16px;",""],({theme:e})=>e.color["Special/Elevated BG"],ce,ee["Body/Body 2 Long"]),ve={cellMixin:re},Re=()=>ve,b=({selectedTimestamp:e,selectedRangeTimestamp:t,activeTimestamp:a,dateAttributes:u,locale:s=le,cell:i,displayMonthTimestamp:d=Date.now(),...p})=>c.jsxs(Se,{...p,"data-container-type":"datesOfMonthWrapper",children:[c.jsx(x,{locale:s==null?void 0:s.localeName,dayNameCellState:Re}),c.jsx(F,{displayMonthTimestamp:d,selectedTimestamp:e,selectedRangeTimestamp:t,activeTimestamp:a,dateAttributes:u,cell:i,"data-container-type":"datesWrapper"})]});try{b.displayName="Calendar",b.__docgenInfo={description:"",displayName:"Calendar",props:{displayMonthTimestamp:{defaultValue:{value:"Date.now()"},description:"timestamp задает дату календаря для отображения месяца, по умолчанию отображается текущий месяц",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"",name:"selectedTimestamp",required:!1,type:{name:"number"}},selectedRangeTimestamp:{defaultValue:null,description:"",name:"selectedRangeTimestamp",required:!1,type:{name:"RangeTimestamp"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDateTimestamp: number) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const Ee=C.div.withConfig({displayName:"CalendarDateSelection.template__Wrapper",componentId:"sc-25ed333-0"})(["display:inline-flex;flex-direction:column;align-items:center;align-content:space-between;border:1px "," dashed;border-radius:8px;"],e=>e.theme.color["Neutral/Neutral 20"]);function P(e){const t=e.dataset.cellType==="dateCell",a=e.dataset.disabled==="true"||e.dataset.hiddenCell==="true",u=e.dataset.value,s=u?Number.parseInt(u):void 0,i=e.dataset.date;return{isDateCell:t,disabled:a,timestamp:s,dateString:i}}const N=({...e})=>{const[t,a]=g.useState(L(Date.now(),1).getTime()),[u,s]=g.useState(),i=o=>{const f=P(o.target);if(f.isDateCell&&!f.disabled){const T=f.timestamp;a(l=>l!==T?T:void 0)}},d=o=>{const f=P(o.target);s(f.timestamp)},p=()=>{s(void 0)};return c.jsx(Ee,{children:c.jsx(b,{...e,selectedTimestamp:t,activeTimestamp:u,onClick:i,onMouseLeave:p,onMouseOver:d})})};try{N.displayName="CalendarDateSelectionTemplate",N.__docgenInfo={description:"",displayName:"CalendarDateSelectionTemplate",props:{displayMonthTimestamp:{defaultValue:null,description:"timestamp задает дату календаря для отображения месяца, по умолчанию отображается текущий месяц",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"",name:"selectedTimestamp",required:!1,type:{name:"number"}},selectedRangeTimestamp:{defaultValue:null,description:"",name:"selectedRangeTimestamp",required:!1,type:{name:"RangeTimestamp"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDateTimestamp: number) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const we=`import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
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
`,Me=C.div.withConfig({displayName:"CalendarRangeSelection.template__Wrapper",componentId:"sc-9fa25ebf-0"})(["display:inline-flex;flex-direction:column;align-items:center;align-content:space-between;border:1px "," dashed;border-radius:8px;"],e=>e.theme.color["Neutral/Neutral 20"]);function j(e){const t=e.dataset.cellType==="dateCell",a=e.dataset.disabled==="true"||e.dataset.hiddenCell==="true",u=e.dataset.value,s=u?Number.parseInt(u):void 0,i=e.dataset.date;return{isDateCell:t,disabled:a,timestamp:s,dateString:i}}const V=({...e})=>{const[t,a]=g.useState(),[u,s]=g.useState(!0),[i,d]=g.useState("none"),[p,o]=g.useState(),f=m=>{const D=j(m.target);if(D.isDateCell&&!D.disabled&&D.timestamp){const n=D.timestamp;i=="none"?t?n==t[0]?(a([n,t[1]]),d("start"),s(!1),o(n)):n==t[1]?(a([t[0],n]),d("end"),s(!0),o(n)):n>t[1]?(a([t[0],n]),o(void 0)):n<t[0]?(a([n,t[1]]),o(void 0)):(a(u?[n,t[1]]:[t[0],n]),s(r=>!r),o(void 0)):(a([n,n]),d("end"),o(void 0)):(i=="end"&&a(r=>r?[r[0],n]:[n,n]),i=="start"&&a(r=>r?[n,r[1]]:[n,n]),d("none"),s(!0),o(void 0))}},T=m=>{const n=j(m.target).timestamp;if(o(n),n)switch(i){case"start":a(r=>r?[n,r[1]]:[n,n]);break;case"end":a(r=>r?[r[0],n]:[n,n]);break;case"none":t&&(n===t[0]||n===t[1])&&o(void 0)}},l=()=>{o(void 0)};return c.jsx(Me,{children:c.jsx(b,{...e,selectedRangeTimestamp:t,activeTimestamp:p,onClick:f,onMouseLeave:l,onMouseOver:T,cell:ie})})};try{V.displayName="CalendarRangeSelectionTemplate",V.__docgenInfo={description:"",displayName:"CalendarRangeSelectionTemplate",props:{displayMonthTimestamp:{defaultValue:null,description:"timestamp задает дату календаря для отображения месяца, по умолчанию отображается текущий месяц",name:"displayMonthTimestamp",required:!1,type:{name:"number"}},selectedTimestamp:{defaultValue:null,description:"",name:"selectedTimestamp",required:!1,type:{name:"number"}},selectedRangeTimestamp:{defaultValue:null,description:"",name:"selectedRangeTimestamp",required:!1,type:{name:"RangeTimestamp"}},activeTimestamp:{defaultValue:null,description:"",name:"activeTimestamp",required:!1,type:{name:"number"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDateTimestamp: number) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}const _e=`import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
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
`,He={title:"Admiral-2.1/Widgets/Calendar",component:b,parameters:{docs:{source:{language:"tsx"}}},argTypes:{}},S={render:e=>c.jsx(N,{...e}),parameters:{docs:{source:{code:we}}},name:"Calendar выбор даты"},v={render:e=>c.jsx(V,{...e}),parameters:{docs:{source:{code:_e}}},name:"Calendar выбор отрезка времени"};var Y,z,$;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: props => <CalendarDateSelectionTemplate {...props} />,
  parameters: {
    docs: {
      source: {
        code: CalendarDateSelectionTemplateRaw
      }
    }
  },
  name: 'Calendar выбор даты'
}`,...($=(z=S.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var G,U,Z;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: props => <CalendarRangeSelectionTemplate {...props} />,
  parameters: {
    docs: {
      source: {
        code: CalendarRangeSelectionTemplateRaw
      }
    }
  },
  name: 'Calendar выбор отрезка времени'
}`,...(Z=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};const Oe=["CalendarDateSelectionStory","CalendarRangeSelectionStory"];export{S as CalendarDateSelectionStory,v as CalendarRangeSelectionStory,Oe as __namedExportsOrder,He as default};

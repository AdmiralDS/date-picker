import{u as f,j as o}from"./styled-components.browser.esm-7zUEPxZV.js";import{D as B,w as P,x as k,c as H,s as $,a as A,j as z,k as G,l as Y,m as J,n as K,o as Q,p as U,q as X,u as Z,r as V,t as ee,g as ae}from"./index-GEu7UUTq.js";import{r as te}from"./index-DogsOklH.js";const ne=6*7,ue=252,se=236,re=f.div`
  box-sizing: border-box;
  display: flex;
  margin-bottom: 4px;
`,le=f.div`
  box-sizing: border-box;
  width: ${B}px;
  height: ${P}px;
  text-align: center;
  ${a=>a.$dateCellMixin}
`,_=({locale:a,dayNameCellState:l,...u})=>{const r=k(a).map((t,s)=>{const{cellMixin:i,...c}=l(s);return o.jsx(le,{"data-cell-type":"dayCell","data-value":t,...c,$dateCellMixin:i,children:H(t)},t)});return o.jsx(re,{...u,children:r})};try{_.displayName="Days",_.__docgenInfo={description:"",displayName:"Days",props:{locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"string"}},dayNameCellState:{defaultValue:null,description:"",name:"dayNameCellState",required:!0,type:{name:"(dayNumber: number) => CellStateProps"}}}}}catch{}const de=f.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: ${se}px;
`,oe=Array.from(Array(ne).keys()),h=({date:a,selected:l,active:u,activeRangeEnd:d,dateAttributes:r,cell:t,locale:s=V,range:i=!1,...c})=>{const D=$(a.locale(s==null?void 0:s.localeName).startOf("month").startOf("week")),g=oe.map(x=>{const e=D.add(x,"day"),p=e.toString(),n=r==null?void 0:r(e),m=!!(n!=null&&n.disabled),C=!!(n!=null&&n.isHoliday),E=e.isSame(A().locale(s.localeName),"date"),N=u?e.isSame(u,"date"):!1,T=e.date(),j=e.month()!==a.month(),b=n!=null&&n.hidden?n==null?void 0:n.hidden:j;if(i){const y=z(l),I=G("date",e,y),M=Y("date",e,y),O=J("date",e,y),F=K("date",e,u,d),w=Q("date",e,u,d,m),v=U("date",e,u,d,m),W=e.isSame(e.startOf("week"),"date")||e.isSame(e.startOf("month"),"date"),L=e.isSame(e.endOf("week"),"date")||e.isSame(e.endOf("month"),"date");return{dateValue:p,key:p,cellContent:T,selected:X("date",e,y),isActive:N,isCurrent:E,isOutsideMonth:j,disabled:m,hidden:b,isHoliday:C,isInRange:I,isRangeStart:M,isRangeEnd:O,isInRangeSelecting:F,isRangeSelectingStart:w,isRangeSelectingEnd:v,isStartOfRow:W,isEndOfRow:L}}const R=Z(l);return{dateValue:p,key:p,cellContent:T,selected:R?e.isSame(R,"date"):!1,isCurrent:E,isActive:N,disabled:m,hidden:b,isHoliday:C}}).map(x=>te.createElement(t,x));return o.jsx(de,{...c,"data-container-type":"datesWrapper",children:g})};try{h.displayName="Dates",h.__docgenInfo={description:"",displayName:"Dates",props:{date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},range:{defaultValue:{value:"false"},description:"",name:"range",required:!1,type:{name:"boolean"}}}}}catch{}const ie=f.div`
  background-color: ${({theme:a})=>a.color["Special/Elevated BG"]};
  width: ${ue}px;
  margin: 12px 16px 16px 16px;
  ${ee["Body/Body 2 Long"]}
`,q=({date:a,selected:l,active:u,activeRangeEnd:d,dateAttributes:r,locale:t=V,dayNamesProps:s,cell:i,range:c,...D})=>{const{dayNameCellState:S}=s,g=a||ae(t==null?void 0:t.localeName);return o.jsxs(ie,{...D,"data-container-type":"datesOfMonthWrapper",children:[o.jsx(_,{locale:t==null?void 0:t.localeName,dayNameCellState:S}),o.jsx(h,{date:g,selected:l,active:u,activeRangeEnd:d,dateAttributes:r,cell:i,"data-container-type":"datesWrapper",locale:t,range:c})]})};try{q.displayName="DatesOfMonthWidget",q.__docgenInfo={description:"",displayName:"DatesOfMonthWidget",props:{dayNamesProps:{defaultValue:null,description:"",name:"dayNamesProps",required:!0,type:{name:"DayNameCellProps"}},date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"boolean"}}}}}catch{}export{ue as D,q as a};

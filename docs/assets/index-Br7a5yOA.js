import{u as j,j as f,t as W}from"./typography.es-y01boJtk.js";import{y as M,s as k,d as P,t as L,g as C,i as $,j as H,k as G,l as z,m as U,n as J,o as K,p as Q,q as X,r as b}from"./index-DmuP904s.js";import{r as Z}from"./index-BBkUAzwr.js";const ee=240,ae=244,te=5,g=4,A=te*g,ue=j.div`
  height: ${ae}px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`,ne=Array.from(Array(A).keys()),x=({date:a,selected:r,active:t,activeRangeEnd:u,dateAttributes:o,cell:i,locale:n=b,range:c=!1,...p})=>{const{start:y}=M(a,A),q=k(P(`${y}-01-01T12:00:00`).locale((n==null?void 0:n.localeName)||"ru")),V=ne.map(m=>{const e=q.add(m,"year"),s=e.toString(),{disabled:l,isHoliday:D,hidden:E}=L(e,o),R=e.isSame(C(),"year"),S=t?e.isSame(t,"year"):!1,_=e.year();if(c){const d=$(r),I=H("year",e,d),h=G("year",e,d),F=z("year",e,d),w=U("year",e,t,u),v=J("year",e,t,u,l),B=K("year",e,t,u,l),N=(e.year()-1)%g===0,O=(e.year()-1)%g===3;return{dateValue:s,key:s,cellContent:_,selected:Q("year",e,d),isCurrent:R,isActive:S,disabled:l,isHoliday:D,hidden:E,isInRange:I,isRangeStart:h,isRangeEnd:F,isInRangeSelecting:w,isRangeSelectingStart:v,isRangeSelectingEnd:B,isStartOfRow:N,isEndOfRow:O}}const Y=X(r);return{dateValue:s,key:s,cellContent:_,selected:Y?e.isSame(Y,"year"):!1,isCurrent:R,isActive:S,disabled:l,isHoliday:D,hidden:E}}).map(m=>Z.createElement(i,m));return f.jsx(ue,{...p,children:V})};try{x.displayName="Years",x.__docgenInfo={description:"",displayName:"Years",props:{date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},range:{defaultValue:{value:"false"},description:"",name:"range",required:!1,type:{name:"boolean"}}}}}catch{}const re=j.div`
  background-color: ${({theme:a})=>a.color["Special/Elevated BG"]};
  width: ${ee}px;
  margin: 28px 22px 32px 22px;
  ${W["Body/Body 2 Long"]}
`,T=({date:a,selected:r,active:t,activeRangeEnd:u,dateAttributes:o,locale:i=b,cell:n,range:c=!1,...p})=>{const y=a||C();return f.jsx(re,{...p,"data-container-type":"yearsOfYearWrapper",children:f.jsx(x,{date:y,selected:r,active:t,activeRangeEnd:u,dateAttributes:o,cell:n,"data-container-type":"yearsWrapper",locale:i,range:c})})};try{T.displayName="YearsOfTwentyYearsWidget",T.__docgenInfo={description:"",displayName:"YearsOfTwentyYearsWidget",props:{date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},range:{defaultValue:{value:"false"},description:"",name:"range",required:!1,type:{name:"boolean"}}}}}catch{}export{A as Y,T as a,ee as b};

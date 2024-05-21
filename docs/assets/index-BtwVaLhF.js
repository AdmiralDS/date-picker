import{p as j,j as f}from"./styled-components.browser.esm-DrTmyIAt.js";import{d as B}from"./ru-lGojcqRe.js";import{y as M,s as k,a as P,g as C,b as L,d as H,c as G,e as z,f as U,h as $,i as J,j as K,k as Q}from"./utils-B_ZJ_ERX.js";import{r as X}from"./index-CDs2tPxN.js";import{Y as Z,a as b,b as S,c as ee}from"./constants-C6vCpwtL.js";import{r as h}from"./index-OutMbp73.js";import{t as ae}from"./typography.es-DSm7pTxC.js";const te=j.div.withConfig({displayName:"Years__YearsWrapper",componentId:"sc-9312f405-0"})(["height:","px;box-sizing:border-box;display:flex;flex-wrap:wrap;align-content:space-between;"],Z),ue=Array.from(Array(b).keys()),g=({date:a,selected:n,active:t,activeRangeEnd:u,dateAttributes:o,cell:i,locale:r=h,range:c=!1,...p})=>{const{start:y}=M(a,b),I=k(B(`${y}-01-01T12:00:00`).locale((r==null?void 0:r.localeName)||"ru")),A=ue.map(m=>{const e=I.add(m,"year"),s=e.toString(),{disabled:l,isHoliday:x,hidden:D}=P(e,o),Y=e.isSame(C(),"year"),E=t?e.isSame(t,"year"):!1,_=e.year();if(c){const d=L(n),V=H("year",e,d),q=G("year",e,d),w=z("year",e,d),F=U("year",e,t,u),N=$("year",e,t,u,l),W=J("year",e,t,u,l),v=(e.year()-1)%S===0,O=(e.year()-1)%S===3;return{dateValue:s,key:s,cellContent:_,selected:K("year",e,d),isCurrent:Y,isActive:E,disabled:l,isHoliday:x,hidden:D,isInRange:V,isRangeStart:q,isRangeEnd:w,isInRangeSelecting:F,isRangeSelectingStart:N,isRangeSelectingEnd:W,isStartOfRow:v,isEndOfRow:O}}const R=Q(n);return{dateValue:s,key:s,cellContent:_,selected:R?e.isSame(R,"year"):!1,isCurrent:Y,isActive:E,disabled:l,isHoliday:x,hidden:D}}).map(m=>X.createElement(i,m));return f.jsx(te,{...p,children:A})};try{g.displayName="Years",g.__docgenInfo={description:"",displayName:"Years",props:{date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},range:{defaultValue:{value:"false"},description:"",name:"range",required:!1,type:{name:"boolean"}}}}}catch{}const re=j.div.withConfig({displayName:"YearsOfTwentyYearsWidget__YearsOfYearWrapper",componentId:"sc-d2f11055-0"})(["background-color:",";width:","px;margin:28px 22px 32px 22px;",""],({theme:a})=>a.color["Special/Elevated BG"],ee,ae["Body/Body 2 Long"]),T=({date:a,selected:n,active:t,activeRangeEnd:u,dateAttributes:o,locale:i=h,cell:r,range:c=!1,...p})=>{const y=a||C();return f.jsx(re,{...p,"data-container-type":"yearsOfYearWrapper",children:f.jsx(g,{date:y,selected:n,active:t,activeRangeEnd:u,dateAttributes:o,cell:r,"data-container-type":"yearsWrapper",locale:i,range:c})})};try{T.displayName="YearsOfTwentyYearsWidget",T.__docgenInfo={description:"",displayName:"YearsOfTwentyYearsWidget",props:{date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},range:{defaultValue:{value:"false"},description:"",name:"range",required:!1,type:{name:"boolean"}}}}}catch{}export{T as Y};
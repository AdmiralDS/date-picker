import{p as j,j as m,t as B}from"./typography.es-DJ4WRfsu.js";import{y as M,s as k,d as P,h as L,g as C,i as H,j as G,k as z,l as U,m as $,n as J,o as K,p as Q,q as X,r as b}from"./index-DnXc0ZDD.js";import{r as Z}from"./index-RYns6xqu.js";const ee=240,ae=244,te=5,g=4,h=te*g,ue=j.div.withConfig({displayName:"Years__YearsWrapper",componentId:"sc-1cfb6a7-0"})(["height:","px;box-sizing:border-box;display:flex;flex-wrap:wrap;align-content:space-between;"],ae),ne=Array.from(Array(h).keys()),x=({date:a,selected:r,active:t,activeRangeEnd:u,dateAttributes:o,cell:i,locale:n=b,range:c=!1,...p})=>{const{start:y}=M(a,h),A=k(P(`${y}-01-01T12:00:00`).locale((n==null?void 0:n.localeName)||"ru")),I=ne.map(f=>{const e=A.add(f,"year"),s=e.toString(),{disabled:l,isHoliday:D,hidden:E}=L(e,o),R=e.isSame(C(),"year"),Y=t?e.isSame(t,"year"):!1,_=e.year();if(c){const d=H(r),q=G("year",e,d),V=z("year",e,d),w=U("year",e,d),F=$("year",e,t,u),W=J("year",e,t,u,l),N=K("year",e,t,u,l),O=(e.year()-1)%g===0,v=(e.year()-1)%g===3;return{dateValue:s,key:s,cellContent:_,selected:Q("year",e,d),isCurrent:R,isActive:Y,disabled:l,isHoliday:D,hidden:E,isInRange:q,isRangeStart:V,isRangeEnd:w,isInRangeSelecting:F,isRangeSelectingStart:W,isRangeSelectingEnd:N,isStartOfRow:O,isEndOfRow:v}}const S=X(r);return{dateValue:s,key:s,cellContent:_,selected:S?e.isSame(S,"year"):!1,isCurrent:R,isActive:Y,disabled:l,isHoliday:D,hidden:E}}).map(f=>Z.createElement(i,f));return m.jsx(ue,{...p,children:I})};try{x.displayName="Years",x.__docgenInfo={description:"",displayName:"Years",props:{date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},range:{defaultValue:{value:"false"},description:"",name:"range",required:!1,type:{name:"boolean"}}}}}catch{}const re=j.div.withConfig({displayName:"YearsOfTwentyYearsWidget__YearsOfYearWrapper",componentId:"sc-b822f222-0"})(["background-color:",";width:","px;margin:28px 22px 32px 22px;",""],({theme:a})=>a.color["Special/Elevated BG"],ee,B["Body/Body 2 Long"]),T=({date:a,selected:r,active:t,activeRangeEnd:u,dateAttributes:o,locale:i=b,cell:n,range:c=!1,...p})=>{const y=a||C();return m.jsx(re,{...p,"data-container-type":"yearsOfYearWrapper",children:m.jsx(x,{date:y,selected:r,active:t,activeRangeEnd:u,dateAttributes:o,cell:n,"data-container-type":"yearsWrapper",locale:i,range:c})})};try{T.displayName="YearsOfTwentyYearsWidget",T.__docgenInfo={description:"",displayName:"YearsOfTwentyYearsWidget",props:{date:{defaultValue:null,description:"Дата",name:"date",required:!0,type:{name:"Dayjs"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Dayjs | [Dayjs, Dayjs] | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"Dayjs"}},activeRangeEnd:{defaultValue:null,description:"",name:"activeRangeEnd",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"FunctionComponent<DateCellProps>"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},range:{defaultValue:{value:"false"},description:"",name:"range",required:!1,type:{name:"boolean"}}}}}catch{}export{h as Y,T as a,ee as b};

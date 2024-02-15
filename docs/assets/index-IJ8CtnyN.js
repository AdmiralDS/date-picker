import{u as s,t as x,j as t}from"./typography.es-y01boJtk.js";import{T as c,S as g,a as h,I as f}from"./ChevronRightOutline-Cu42pdAX.js";import{C as y,g as T,y as v,r as w}from"./index-DmuP904s.js";import{Y as N}from"./index-Br7a5yOA.js";const C=s.div`
  box-sizing: border-box;
  width: ${y}PX;
  height: 32px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
`,P=s.div`
  padding: 4px 8px;
  color: ${u=>u.theme.color["Neutral/Neutral 90"]};
  cursor: default;
  ${x["Subtitle/Subtitle 2"]}
`,a=c(f),r=({viewMode:u,date:n,locale:e=w,prevButtonProps:o,nextButtonProps:i,...d})=>{const p=(n==null?void 0:n.locale(e==null?void 0:e.localeName))||T(e==null?void 0:e.localeName),{start:l,end:m}=v(p,N);return t.jsxs(C,{...d,children:[t.jsx(a,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"left",renderContent:()=>e==null?void 0:e.localeText.backwardText,...o,children:t.jsx(g,{})}),t.jsx(P,{children:`${l}–${m}`}),t.jsx(a,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"right",renderContent:()=>e==null?void 0:e.localeText.forwardText,...i,children:t.jsx(h,{})})]})};try{r.displayName="TwentyYearsNavigationPanelWidget",r.__docgenInfo={description:"",displayName:"TwentyYearsNavigationPanelWidget",props:{viewMode:{defaultValue:null,description:"",name:"viewMode",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},date:{defaultValue:null,description:"Дата",name:"date",required:!1,type:{name:"Dayjs"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},prevButtonProps:{defaultValue:null,description:"",name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:"",name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}export{r as T};

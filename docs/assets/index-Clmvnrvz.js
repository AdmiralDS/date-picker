import{p as i,t as x,j as t}from"./typography.es-DJ4WRfsu.js";import{T as g,S as c,a as y,I as h}from"./ChevronRightOutline-CjgoEkVb.js";import{C as f,g as T,y as v,r as w}from"./index-BdAXGuOE.js";import{Y as N}from"./index-9KIR3UVS.js";const P=i.div.withConfig({displayName:"TwentyYearsNavigationPanelWidget__TwentyYearsNavigationPanelWrapper",componentId:"sc-f0rhxx-0"})(["box-sizing:border-box;width:","PX;height:32px;padding:0 12px;display:flex;justify-content:space-between;"],f),C=i.div.withConfig({displayName:"TwentyYearsNavigationPanelWidget__TwentyYearsWrapper",componentId:"sc-f0rhxx-1"})(["padding:4px 8px;color:",";cursor:default;",""],u=>u.theme.color["Neutral/Neutral 90"],x["Subtitle/Subtitle 2"]),a=g(h),r=({viewMode:u,date:n,locale:e=w,prevButtonProps:o,nextButtonProps:s,...p})=>{const d=(n==null?void 0:n.locale(e==null?void 0:e.localeName))||T(e==null?void 0:e.localeName),{start:l,end:m}=v(d,N);return t.jsxs(P,{...p,children:[t.jsx(a,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"left",renderContent:()=>e==null?void 0:e.localeText.backwardText,...o,children:t.jsx(c,{})}),t.jsx(C,{children:`${l}–${m}`}),t.jsx(a,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"right",renderContent:()=>e==null?void 0:e.localeText.forwardText,...s,children:t.jsx(y,{})})]})};try{r.displayName="TwentyYearsNavigationPanelWidget",r.__docgenInfo={description:"",displayName:"TwentyYearsNavigationPanelWidget",props:{viewMode:{defaultValue:null,description:"",name:"viewMode",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},date:{defaultValue:null,description:"Дата",name:"date",required:!1,type:{name:"Dayjs"}},locale:{defaultValue:{value:`{
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

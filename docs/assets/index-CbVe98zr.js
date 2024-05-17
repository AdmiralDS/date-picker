import{p as i,t as m,j as t}from"./typography.es-CjQrIQMn.js";import{T as g,S as x,a as y,I as h}from"./ChevronRightOutline-w7Oo2fdL.js";import{C as f,g as T,y as v,r as w}from"./index-D7UWWCrG.js";import{Y as N}from"./index-CEadLOe1.js";const P=i.div.withConfig({displayName:"TwentyYearsNavigationPanelWidget__TwentyYearsNavigationPanelWrapper",componentId:"sc-b015cadc-0"})(["box-sizing:border-box;width:","PX;height:32px;padding:0 12px;display:flex;justify-content:space-between;"],f),C=i.div.withConfig({displayName:"TwentyYearsNavigationPanelWidget__TwentyYearsWrapper",componentId:"sc-b015cadc-1"})(["padding:4px 8px;color:",";cursor:default;",""],a=>a.theme.color["Neutral/Neutral 90"],m["Subtitle/Subtitle 2"]),n=g(h),r=({viewMode:a,date:u,locale:e=w,prevButtonProps:o,nextButtonProps:s,...p})=>{const d=(u==null?void 0:u.locale(e==null?void 0:e.localeName))||T(e==null?void 0:e.localeName),{start:l,end:c}=v(d,N);return t.jsxs(P,{...p,children:[t.jsx(n,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"left",renderContent:()=>e==null?void 0:e.localeText.backwardText,...o,children:t.jsx(x,{})}),t.jsx(C,{children:`${l}–${c}`}),t.jsx(n,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"right",renderContent:()=>e==null?void 0:e.localeText.forwardText,...s,children:t.jsx(y,{})})]})};try{r.displayName="TwentyYearsNavigationPanelWidget",r.__docgenInfo={description:"",displayName:"TwentyYearsNavigationPanelWidget",props:{viewMode:{defaultValue:null,description:"",name:"viewMode",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},date:{defaultValue:null,description:"Дата",name:"date",required:!1,type:{name:"Dayjs"}},locale:{defaultValue:{value:`{
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

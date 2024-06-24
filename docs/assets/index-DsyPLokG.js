import{j as t}from"./tslib.es6-gXVSDp23.js";import{p as i,t as c}from"./typography.es-zceevOJ_.js";import{T as g,S as x,a as y,I as f}from"./ChevronRightOutline-DAmKuVUD.js";import{C as h,g as T,y as v,r as w}from"./index-B-lRfg65.js";import{Y as N}from"./index-MLNV-xYt.js";const P=i.div.withConfig({displayName:"TwentyYearsNavigationPanelWidget__TwentyYearsNavigationPanelWrapper",componentId:"sc-e57331c6-0"})(["box-sizing:border-box;width:","PX;height:32px;padding:0 12px;display:flex;justify-content:space-between;"],h),C=i.div.withConfig({displayName:"TwentyYearsNavigationPanelWidget__TwentyYearsWrapper",componentId:"sc-e57331c6-1"})(["padding:4px 8px;color:",";cursor:default;",""],u=>u.theme.color["Neutral/Neutral 90"],c["Subtitle/Subtitle 2"]),a=g(f),r=({viewMode:u,date:n,locale:e=w,prevButtonProps:o,nextButtonProps:s,...p})=>{const d=(n==null?void 0:n.locale(e==null?void 0:e.localeName))||T(e==null?void 0:e.localeName),{start:l,end:m}=v(d,N);return t.jsxs(P,{...p,children:[t.jsx(a,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"left",renderContent:()=>e==null?void 0:e.localeText.backwardText,...o,children:t.jsx(x,{})}),t.jsx(C,{children:`${l}–${m}`}),t.jsx(a,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"right",renderContent:()=>e==null?void 0:e.localeText.forwardText,...s,children:t.jsx(y,{})})]})};try{r.displayName="TwentyYearsNavigationPanelWidget",r.__docgenInfo={description:"",displayName:"TwentyYearsNavigationPanelWidget",props:{viewMode:{defaultValue:null,description:"",name:"viewMode",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},date:{defaultValue:null,description:"Дата",name:"date",required:!1,type:{name:"Dayjs"}},locale:{defaultValue:{value:`{
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

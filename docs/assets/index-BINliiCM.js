import{j as r}from"./tslib.es6-gXVSDp23.js";import{p as i,t as c}from"./typography.es-zceevOJ_.js";import{T as o,S as m,a as x,I as g}from"./ChevronRightOutline-DAmKuVUD.js";import{C as h,g as y,r as f}from"./index-B-lRfg65.js";const v=i.div.withConfig({displayName:"YearNavigationPanelWidget__YearNavigationPanelWrapper",componentId:"sc-94f7ec56-0"})(["box-sizing:border-box;width:","PX;height:32px;padding:0 12px;display:flex;justify-content:space-between;"],h),T=i.div.withConfig({displayName:"YearNavigationPanelWidget__TextWrapper",componentId:"sc-94f7ec56-1"})(["padding:4px 8px;border-radius:16px;cursor:pointer;color:",";"," background-color:",";&:hover{background-color:",";}"],t=>t.theme.color["Primary/Primary 60 Main"],c["Subtitle/Subtitle 2"],t=>t.$isActive?t.theme.color["Opacity/Focus"]:t.theme.color["Special/Elevated BG"],t=>t.theme.color["Opacity/Hover"]),u=o(g),P=o(T),n=({viewMode:t,date:a,locale:e=f,prevButtonProps:s,nextButtonProps:p,...d})=>{const l=(a==null?void 0:a.locale(e==null?void 0:e.localeName))||y(e==null?void 0:e.localeName);return r.jsxs(v,{...d,children:[r.jsx(u,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"left",renderContent:()=>e==null?void 0:e.localeText.backwardText,...s,children:r.jsx(m,{})}),r.jsx(P,{"data-panel-target-type":"year",$isActive:t==="years",renderContent:()=>t==="years"?e==null?void 0:e.localeText.returnText:e.localeText.selectYearText,children:l.year()}),r.jsx(u,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"right",renderContent:()=>e==null?void 0:e.localeText.forwardText,...p,children:r.jsx(x,{})})]})};try{n.displayName="YearNavigationPanelWidget",n.__docgenInfo={description:"",displayName:"YearNavigationPanelWidget",props:{viewMode:{defaultValue:null,description:"",name:"viewMode",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},date:{defaultValue:null,description:"Дата",name:"date",required:!1,type:{name:"Dayjs"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},prevButtonProps:{defaultValue:null,description:"",name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:"",name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}export{n as Y};
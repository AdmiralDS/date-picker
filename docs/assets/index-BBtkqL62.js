import{p as a,j as t}from"./styled-components.browser.esm-DrTmyIAt.js";import{l as x,a as h}from"./calendarStyle-D5URKbyB.js";import{e as m,N as g,g as u,o as v}from"./index-CaQ8XlvV.js";import{t as y}from"./typography.es-DSm7pTxC.js";import{T as c,I as T}from"./index.es-n1eWmiMq.js";const b=a.div.withConfig({displayName:"MonthNavigationPanelWidget__MonthNavigationPanelWrapper",componentId:"sc-a9d285bb-0"})(["box-sizing:border-box;width:","PX;height:32px;padding:0 12px;display:flex;justify-content:space-between;background-color:",";"],m,o=>o.theme.color["Special/Elevated BG"]),f=a.div.withConfig({displayName:"MonthNavigationPanelWidget__MonthYearWrapper",componentId:"sc-a9d285bb-1"})(["display:flex;"]),M=a.div.withConfig({displayName:"MonthNavigationPanelWidget__TextWrapper",componentId:"sc-a9d285bb-2"})(["padding:4px 8px;border-radius:16px;cursor:pointer;color:",";"," background-color:",";&:hover{background-color:",";}"],o=>o.theme.color["Primary/Primary 60 Main"],y["Subtitle/Subtitle 2"],o=>o.$isActive?o.theme.color["Opacity/Focus"]:o.theme.color["Special/Elevated BG"],o=>o.theme.color["Opacity/Hover"]),i=c(T),d=c(M),W=({viewMode:o,date:l,locale:e=v,prevButtonProps:s,nextButtonProps:p,...r})=>{const n=(l==null?void 0:l.locale(e.localeName))||g((e==null?void 0:e.localeName)||"ru");return t.jsxs(b,{...r,children:[t.jsx(i,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"left",renderContent:()=>o==="dates"?e==null?void 0:e.localeText.previousMonthText:e==null?void 0:e.localeText.backwardText,...s,children:t.jsx(x,{})}),t.jsxs(f,{...r,children:[t.jsx(d,{"data-panel-target-type":"month",$isActive:o==="months",renderContent:()=>o==="months"?e==null?void 0:e.localeText.returnText:e.localeText.selectMonthText,children:u(n.format("MMMM"))}),t.jsx(d,{"data-panel-target-type":"year",$isActive:o==="years",renderContent:()=>o==="years"?e==null?void 0:e.localeText.returnText:e.localeText.selectYearText,children:n.year()})]}),t.jsx(i,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"right",renderContent:()=>o==="dates"?e==null?void 0:e.localeText.nextMonthText:e==null?void 0:e.localeText.forwardText,...p,children:t.jsx(h,{})})]})};export{W as k};
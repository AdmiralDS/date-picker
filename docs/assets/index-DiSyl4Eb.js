import{p as l,j as a}from"./styled-components.browser.esm-DrTmyIAt.js";import{l as s,a as m}from"./calendarStyle-D5URKbyB.js";import{e as x,N as g,o as h}from"./index-CaQ8XlvV.js";import{t as u}from"./typography.es-DSm7pTxC.js";import{T as i,I as v}from"./index.es-n1eWmiMq.js";const y=l.div.withConfig({displayName:"YearNavigationPanelWidget__YearNavigationPanelWrapper",componentId:"sc-e8fced78-0"})(["box-sizing:border-box;width:","PX;height:32px;padding:0 12px;display:flex;justify-content:space-between;"],x),f=l.div.withConfig({displayName:"YearNavigationPanelWidget__TextWrapper",componentId:"sc-e8fced78-1"})(["padding:4px 8px;border-radius:16px;cursor:pointer;color:",";"," background-color:",";&:hover{background-color:",";}"],o=>o.theme.color["Primary/Primary 60 Main"],u["Subtitle/Subtitle 2"],o=>o.$isActive?o.theme.color["Opacity/Focus"]:o.theme.color["Special/Elevated BG"],o=>o.theme.color["Opacity/Hover"]),r=i(v),T=i(f),C=({viewMode:o,date:t,locale:e=h,prevButtonProps:n,nextButtonProps:c,...d})=>{const p=(t==null?void 0:t.locale(e==null?void 0:e.localeName))||g(e==null?void 0:e.localeName);return a.jsxs(y,{...d,children:[a.jsx(r,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"left",renderContent:()=>e==null?void 0:e.localeText.backwardText,...n,children:a.jsx(s,{})}),a.jsx(T,{"data-panel-target-type":"year",$isActive:o==="years",renderContent:()=>o==="years"?e==null?void 0:e.localeText.returnText:e.localeText.selectYearText,children:p.year()}),a.jsx(r,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"right",renderContent:()=>e==null?void 0:e.localeText.forwardText,...c,children:a.jsx(m,{})})]})};export{C as w};
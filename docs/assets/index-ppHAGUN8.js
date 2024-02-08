import{u as i,j as u}from"./styled-components.browser.esm-7zUEPxZV.js";import{T as o,S as p,a as l,I as c}from"./ChevronRightOutline-2Sr-EFPQ.js";import{C as x,t as m,g as h,r as g}from"./index-GEu7UUTq.js";const y=i.div`
  box-sizing: border-box;
  width: ${x}PX;
  height: 32px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
`,T=i.div`
  padding: 4px 8px;
  border-radius: 16px;
  cursor: pointer;
  color: ${t=>t.theme.color["Primary/Primary 60 Main"]};
  ${m["Subtitle/Subtitle 2"]}
  background-color: ${t=>t.$isActive?t.theme.color["Opacity/Focus"]:t.theme.color["Special/Elevated BG"]};
  &:hover {
    background-color: ${t=>t.theme.color["Opacity/Hover"]};
  }
`,a=o(c),v=o(T),n=({viewMode:t,date:r,locale:e=g,...s})=>{const d=(r==null?void 0:r.locale(e==null?void 0:e.localeName))||h(e==null?void 0:e.localeName);return u.jsxs(y,{...s,children:[u.jsx(a,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"left",renderContent:()=>e==null?void 0:e.localeText.backwardText,children:u.jsx(p,{})}),u.jsx(v,{"data-panel-target-type":"year",$isActive:t==="years",renderContent:()=>t==="years"?e==null?void 0:e.localeText.returnText:e.localeText.selectYearText,children:d.year()}),u.jsx(a,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"right",renderContent:()=>e==null?void 0:e.localeText.forwardText,children:u.jsx(l,{})})]})};try{n.displayName="YearNavigationPanelWidget",n.__docgenInfo={description:"",displayName:"YearNavigationPanelWidget",props:{viewMode:{defaultValue:null,description:"",name:"viewMode",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},date:{defaultValue:null,description:"Дата",name:"date",required:!1,type:{name:"Dayjs"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}export{n as Y};

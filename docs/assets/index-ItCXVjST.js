import{u as i,j as u}from"./styled-components.browser.esm-7zUEPxZV.js";import{T as p,S as x,a as m,I as c}from"./ChevronRightOutline-2Sr-EFPQ.js";import{C as g,t as h,g as y,y as T,r as f}from"./index-GEu7UUTq.js";import{Y as v}from"./index-iEjp33-N.js";const w=i.div`
  box-sizing: border-box;
  width: ${g}PX;
  height: 32px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
`,N=i.div`
  padding: 4px 8px;
  color: ${t=>t.theme.color["Neutral/Neutral 90"]};
  cursor: default;
  ${h["Subtitle/Subtitle 2"]}
`,n=p(c),r=({viewMode:t,date:a,locale:e=f,...s})=>{const o=(a==null?void 0:a.locale(e==null?void 0:e.localeName))||y(e==null?void 0:e.localeName),{start:d,end:l}=T(o,v);return u.jsxs(w,{...s,children:[u.jsx(n,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"left",renderContent:()=>e==null?void 0:e.localeText.backwardText,children:u.jsx(x,{})}),u.jsx(N,{children:`${d}–${l}`}),u.jsx(n,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"right",renderContent:()=>e==null?void 0:e.localeText.forwardText,children:u.jsx(m,{})})]})};try{r.displayName="TwentyYearsNavigationPanelWidget",r.__docgenInfo={description:"",displayName:"TwentyYearsNavigationPanelWidget",props:{viewMode:{defaultValue:null,description:"",name:"viewMode",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},date:{defaultValue:null,description:"Дата",name:"date",required:!1,type:{name:"Dayjs"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}export{r as T};

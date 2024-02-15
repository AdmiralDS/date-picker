import{u as o,t as c,j as u}from"./typography.es-y01boJtk.js";import{T as i,S as x,a as m,I as h}from"./ChevronRightOutline-Cu42pdAX.js";import{C as g,g as y,r as v}from"./index-DmuP904s.js";const T=o.div`
  box-sizing: border-box;
  width: ${g}PX;
  height: 32px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
`,f=o.div`
  padding: 4px 8px;
  border-radius: 16px;
  cursor: pointer;
  color: ${t=>t.theme.color["Primary/Primary 60 Main"]};
  ${c["Subtitle/Subtitle 2"]}
  background-color: ${t=>t.$isActive?t.theme.color["Opacity/Focus"]:t.theme.color["Special/Elevated BG"]};
  &:hover {
    background-color: ${t=>t.theme.color["Opacity/Hover"]};
  }
`,a=i(h),P=i(f),n=({viewMode:t,date:r,locale:e=v,prevButtonProps:s,nextButtonProps:p,...d})=>{const l=(r==null?void 0:r.locale(e==null?void 0:e.localeName))||y(e==null?void 0:e.localeName);return u.jsxs(T,{...d,children:[u.jsx(a,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"left",renderContent:()=>e==null?void 0:e.localeText.backwardText,...s,children:u.jsx(x,{})}),u.jsx(P,{"data-panel-target-type":"year",$isActive:t==="years",renderContent:()=>t==="years"?e==null?void 0:e.localeText.returnText:e.localeText.selectYearText,children:l.year()}),u.jsx(a,{dimension:"lSmall",highlightFocus:!1,"data-panel-target-type":"right",renderContent:()=>e==null?void 0:e.localeText.forwardText,...p,children:u.jsx(m,{})})]})};try{n.displayName="YearNavigationPanelWidget",n.__docgenInfo={description:"",displayName:"YearNavigationPanelWidget",props:{viewMode:{defaultValue:null,description:"",name:"viewMode",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},date:{defaultValue:null,description:"Дата",name:"date",required:!1,type:{name:"Dayjs"}},locale:{defaultValue:{value:`{
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

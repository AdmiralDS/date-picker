import{j as q}from"./tslib.es6-gXVSDp23.js";import{r as i}from"./index-uubelm5h.js";import{g as T,a as _,r as g,d as o}from"./index-B-lRfg65.js";import{M as I}from"./index-DFy_Fcck.js";const D=({selectedDateValue:r,defaultSelectedDateValue:c,onSelectedDateValueChange:n,dateAttributes:p,dateValue:m,activeDateValue:f,defaultActiveDateValue:y,onActiveDateValueChange:l,cell:E,locale:u=g,...C})=>{const B=m||T(u==null?void 0:u.localeName),[v,h]=i.useState(y),s=f||v,d=e=>{h(e),l==null||l(e)},A=e=>{const t=e.target.dataset;if(t.cellType!=="monthCell")return;const a=o(t.value).locale(u==null?void 0:u.localeName);!(t.disabledCell==="true"||t.hiddenCell==="true")&&!a.isSame(s)&&d(a)},M=()=>{d(void 0)},[V,x]=i.useState(c),F=r||V,b=e=>{x(e),n==null||n(e)},j=e=>{e.preventDefault();const t=e.target.dataset;if(t.cellType!=="monthCell")return;const a=o(t.value).locale(u==null?void 0:u.localeName);t.disabledCell==="true"||t.hiddenCell==="true"||b(a)};return q.jsx(I,{...C,date:B,selected:F,active:s,dateAttributes:p,locale:u,onMouseLeave:M,onMouseOver:A,onMouseDown:j,cell:E||_})};try{D.displayName="MonthCalendar",D.__docgenInfo={description:"",displayName:"MonthCalendar",props:{cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},selectedDateValue:{defaultValue:null,description:"Выбранное значение даты в формате ISO",name:"selectedDateValue",required:!1,type:{name:"Dayjs"}},defaultSelectedDateValue:{defaultValue:null,description:"Выбранное значение даты по умолчанию в формате ISO",name:"defaultSelectedDateValue",required:!1,type:{name:"Dayjs"}},onSelectedDateValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранной даты",name:"onSelectedDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}}}}}catch{}export{D as M};
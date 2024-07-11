import{j as s}from"./typography.es-DJ4WRfsu.js";import{r as o}from"./index-RYns6xqu.js";import{g as I,r as $}from"./index-DnXc0ZDD.js";import{M as L}from"./index-f2gF0HFA.js";import{S as W,C as H,a as O,M as z,Y as G}from"./index-DUrvFc95.js";import{Y as A}from"./index-CMIGvJsC.js";const C=({viewModeValue:V,defaultViewModeValue:h,onViewModeChange:D,dateValue:v,defaultDateValue:g,onDateValueChange:c,selectedDateRangeValue:F,defaultSelectedDateRangeValue:y,onSelectedDateRangeValueChange:m,onActiveDateRangeEndValueChange:p,cell:t,locale:l=$,prevButtonProps:S,nextButtonProps:R,...E})=>{const[x,q]=o.useState(h||"dates"),a=V||x,d=u=>{q(u),D==null||D(u)},[w,M]=o.useState(g||I(l==null?void 0:l.localeName)),e=v||w,n=u=>{M(u),c==null||c(u)},[j,b]=o.useState(y??[void 0,void 0]),r=F||j,P=u=>{b(u),m==null||m(u)},[f,k]=o.useState(),T=u=>{k(u),p==null||p(u)},_=u=>{const i=e.month(u.month());n(i),d("dates")},N=u=>{const i=e.year(u.year());n(i),d("dates")},Y=u=>{switch(u.target.dataset.panelTargetType){case"left":n(a==="dates"?e.subtract(1,"month"):a==="months"?e.subtract(1,"year"):e.subtract(A,"year"));break;case"right":n(a==="dates"?e.add(1,"month"):a==="months"?e.add(1,"year"):e.add(A,"year"));break;case"month":d(a==="months"?"dates":"months");break;case"year":d(a==="years"?"dates":"years");break}},B=(()=>{if(!(!f||!r)){if(r[0]&&f.isSame(r[0],"date"))return r[1];if(r[1]&&f.isSame(r[1],"date"))return r[0]}})();return s.jsxs(W,{children:[s.jsx(L,{date:e,viewMode:a,locale:l,onClick:Y,prevButtonProps:S,nextButtonProps:R}),s.jsxs(H,{children:[s.jsx(O,{...E,cell:t==null?void 0:t.dateCell,dateValue:e,selectedDateRangeValue:r,defaultSelectedDateRangeValue:y,onSelectedDateRangeValueChange:P,onActiveDateRangeEndValueChange:T,locale:l,$isVisible:a==="dates"}),s.jsx(z,{...E,cell:t==null?void 0:t.monthCell,dateValue:e,selectedDateValue:B,onSelectedDateValueChange:_,locale:l,$isVisible:a==="months"}),s.jsx(G,{...E,cell:t==null?void 0:t.yearCell,dateValue:e,selectedDateValue:B,onSelectedDateValueChange:N,locale:l,$isVisible:a==="years"})]})]})};try{C.displayName="DateRangePickerCalendar",C.__docgenInfo={description:"",displayName:"DateRangePickerCalendar",props:{locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},defaultDateValue:{defaultValue:null,description:"Дата для отображения на экране по умолчанию",name:"defaultDateValue",required:!1,type:{name:"Dayjs"}},onDateValueChange:{defaultValue:null,description:"Коллбэк на изменение даты отображения на экране",name:"onDateValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"DateRange"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"DateRange"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: DateRange) => void)"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}export{C as D};

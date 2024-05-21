import{j as Y}from"./styled-components.browser.esm-DrTmyIAt.js";import{r as o}from"./index-CDs2tPxN.js";import{d as v}from"./ru-lGojcqRe.js";import{g as z}from"./utils-B_ZJ_ERX.js";import{D as G}from"./index-3D6KMnSa.js";import{b as J}from"./mixins-CGQ4MruR.js";import{M as K,r as Q}from"./index-OutMbp73.js";const A=({selectedDateRangeValue:i,defaultSelectedDateRangeValue:d,onSelectedDateRangeValueChange:D,activeDateRangeEndValue:C,defaultActiveDateRangeEndValue:E,onActiveDateRangeEndValueChange:c,dateAttributes:F,dateValue:B,activeDateValue:j,defaultActiveDateValue:x,onActiveDateValueChange:m,cell:b,locale:r=Q,...h})=>{const g=B||z(r==null?void 0:r.localeName),[q,M]=o.useState(x),S=j||q,y=e=>{M(e),m==null||m(e)},N=e=>{const s=e.target.dataset;if(s.cellType!=="dateCell")return;const u=v(s.value).locale(r==null?void 0:r.localeName);s.disabledCell==="true"||s.hiddenCell==="true"||y(u)},T=()=>{y(void 0)},[_,I]=o.useState(d==null?void 0:d[0]),n=(i==null?void 0:i[0])||_,f=e=>{I(e)},[R,L]=o.useState(d==null?void 0:d[1]),t=(i==null?void 0:i[1])||R,p=e=>{L(e)},k=()=>{if(E)return E;if(n&&t)return t;if(n&&!t)return n;if(!n&&t)return t},[w,O]=o.useState(k()),l=C||w,P=e=>{O(e),c==null||c(e)},V=e=>{const s=e.target.dataset;if(s.cellType!=="dateCell")return;const u=v(s.value).locale(r==null?void 0:r.localeName);if(!(s.disabledCell==="true"||s.hiddenCell==="true")){const a=[void 0,void 0];l&&n&&t?(l.isSame(n,"date")&&(p(u),a[0]=n,a[1]=u),l.isSame(t,"date")&&(f(u),a[0]=u,a[1]=t)):n&&!t?(p(u),a[0]=n,a[1]=u):(f(u),a[0]=u,a[1]=t),P(u),D==null||D(a)}},H=e=>({cellMixin:J});return Y.jsx(G,{...h,date:g,selected:[n,t],active:S,activeRangeEnd:l,dateAttributes:F,locale:r,dayNamesProps:{dayNameCellState:H},onMouseLeave:T,onMouseOver:N,onClick:V,cell:b||K,range:!0})};try{A.displayName="DateRangeCalendar",A.__docgenInfo={description:"",displayName:"DateRangeCalendar",props:{activeDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат",name:"activeDateRangeEndValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат по умолчанию",name:"defaultActiveDateRangeEndValue",required:!1,type:{name:"Dayjs"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}}}}}catch{}export{A as D};
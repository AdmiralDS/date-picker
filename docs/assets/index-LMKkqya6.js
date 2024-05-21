import{j as H}from"./styled-components.browser.esm-DrTmyIAt.js";import{r as o}from"./index-CDs2tPxN.js";import{d as v}from"./ru-lGojcqRe.js";import{g as W}from"./utils-B_ZJ_ERX.js";import{Y as z}from"./index-BFYDntRL.js";import{M as G,r as J}from"./index-COKZno0_.js";const A=({selectedDateRangeValue:s,defaultSelectedDateRangeValue:d,onSelectedDateRangeValueChange:D,activeDateRangeEndValue:F,defaultActiveDateRangeEndValue:p,onActiveDateRangeEndValueChange:c,dateAttributes:C,dateValue:B,activeDateValue:j,defaultActiveDateValue:h,onActiveDateValueChange:E,locale:i=J,cell:x,...b})=>{const g=B||W(),[q,S]=o.useState(h),T=j||q,y=t=>{S(t),E==null||E(t)},M=t=>{const r=t.target.dataset;if(r.cellType!=="yearCell")return;const u=v(r.value).locale((i==null?void 0:i.localeName)||"ru");r.disabledCell==="true"||r.hiddenCell==="true"||y(u)},Y=()=>{y(void 0)},[_,I]=o.useState(d==null?void 0:d[0]),n=(s==null?void 0:s[0])||_,f=t=>{I(t)},[R,N]=o.useState(d==null?void 0:d[1]),e=(s==null?void 0:s[1])||R,m=t=>{N(t)},w=()=>{if(p)return p;if(n&&e)return e;if(n&&!e)return n;if(!n&&e)return e},[L,k]=o.useState(w()),l=F||L,O=t=>{k(t),c==null||c(t)},V=t=>{const r=t.target.dataset;if(r.cellType!=="yearCell")return;const u=v(r.value).locale((i==null?void 0:i.localeName)||"ru");if(!(r.disabledCell==="true"||r.hiddenCell==="true")){const a=[void 0,void 0];l&&n&&e?(l.isSame(n,"year")&&(m(u),a[0]=n,a[1]=u),l.isSame(e,"year")&&(f(u),a[0]=u,a[1]=e)):n&&!e?(m(u),a[0]=n,a[1]=u):(f(u),a[0]=u,a[1]=e),O(u),D==null||D(a)}};return H.jsx(z,{...b,date:g,selected:[n,e],active:T,activeRangeEnd:l,dateAttributes:C,locale:i,onMouseLeave:Y,onMouseOver:M,onClick:V,cell:x||G,range:!0})};try{A.displayName="YearRangeCalendar",A.__docgenInfo={description:"",displayName:"YearRangeCalendar",props:{locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},cell:{defaultValue:null,description:"",name:"cell",required:!1,type:{name:"FunctionComponent<DateCellProps>"}},activeDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат",name:"activeDateRangeEndValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateRangeEndValue:{defaultValue:null,description:"Значение активного конца диапазона дат по умолчанию",name:"defaultActiveDateRangeEndValue",required:!1,type:{name:"Dayjs"}},selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},onActiveDateRangeEndValueChange:{defaultValue:null,description:"Коллбэк на изменение значения активного конца диапазона дат",name:"onActiveDateRangeEndValueChange",required:!1,type:{name:"((date: Dayjs) => void)"}},dateValue:{defaultValue:null,description:"Дата для отображения на экране",name:"dateValue",required:!1,type:{name:"Dayjs"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}}}}}catch{}export{A as Y};

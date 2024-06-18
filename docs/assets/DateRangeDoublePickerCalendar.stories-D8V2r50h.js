import{j as e}from"./typography.es-DO68Qy5l.js";import{r as c}from"./index-CDs2tPxN.js";import{g as yu,u as _,r as Eu}from"./index-ujbVYY4f.js";import{M as L}from"./index-BskuFJa_.js";import{h as hu,i as W,C as N,j as H,M as I,Y as $}from"./index-CBuTa_tj.js";import{Y as A}from"./index-DS7TH43h.js";import{W as Cu,a as gu,T as Y}from"./common-DA2tSNTR.js";import"./ChevronRightOutline-BkuwWOlR.js";import"./index-B-yFm4aN.js";import"./DropdownProvider.es-D0cPpzFA.js";import"./index-DVjN3Tgn.js";import"./index-DoivLSLw.js";import"./index-xh3kyrvP.js";const F=({viewModeValue:m,defaultViewModeValue:g,onViewModeChange:p,dateRangeValue:f,defaultDateRangeValue:y,onDateRangeValueChange:E,selectedDateRangeValue:Z,defaultSelectedDateRangeValue:S,onSelectedDateRangeValueChange:j,activeDateValue:K,defaultActiveDateValue:J,onActiveDateValueChange:k,cell:t,locale:r=Eu,prevButtonProps:x,nextButtonProps:P,...h})=>{const[U,Q]=c.useState(g||"dates"),l=m||U,B=u=>{Q(u),p==null||p(u)},[X,uu]=c.useState(g||"dates"),s=m||X,V=u=>{uu(u),p==null||p(u)},[eu,au]=c.useState((y==null?void 0:y[0])||yu(r==null?void 0:r.localeName)),a=(f==null?void 0:f[0])||eu,d=u=>{au(u),E==null||E([u,n])},[tu,nu]=c.useState((y==null?void 0:y[1])||a.add(1,"month")),n=(f==null?void 0:f[1])||tu,i=u=>{nu(u),E==null||E([a,u])};c.useEffect(()=>{_(a,n,"month")&&i(a.add(1,"month"))},[a]),c.useEffect(()=>{_(n,a,"month")&&d(n.subtract(1,"month"))},[n]);const[ru,lu]=c.useState(J),q=K||ru,w=u=>{lu(u),k==null||k(u)},[su,du]=c.useState(S),o=Z||su,T=u=>{du(u),j==null||j(u)},[C,iu]=c.useState(),M=u=>{iu(u)},ou=u=>{const D=a.month(u.month());d(D),B("dates")},Du=u=>{const D=n.month(u.month());i(D),V("dates")},cu=u=>{const D=a.year(u.year());d(D),B("months")},mu=u=>{const D=n.year(u.year());i(D),V("months")},pu=u=>{switch(u.target.dataset.panelTargetType){case"left":d(l==="dates"?a.subtract(1,"month"):l==="months"?a.subtract(1,"year"):a.subtract(A,"year"));break;case"right":d(l==="dates"?a.add(1,"month"):l==="months"?a.add(1,"year"):a.add(A,"year"));break;case"month":B(l==="months"?"dates":"months");break;case"year":B(l==="years"?"dates":"years");break}},fu=u=>{switch(u.target.dataset.panelTargetType){case"left":i(s==="dates"?n.subtract(1,"month"):s==="months"?n.subtract(1,"year"):n.subtract(A,"year"));break;case"right":i(s==="dates"?n.add(1,"month"):s==="months"?n.add(1,"year"):n.add(A,"year"));break;case"month":V(s==="months"?"dates":"months");break;case"year":V(s==="years"?"dates":"years");break}},v=(()=>{if(!(!C||!o)){if(o[0]&&C.isSame(o[0],"date"))return o[1];if(o[1]&&C.isSame(o[1],"date"))return o[0]}})();return e.jsxs(hu,{children:[e.jsxs(W,{children:[e.jsx(L,{date:a,viewMode:l,locale:r,onClick:pu,prevButtonProps:x,nextButtonProps:P}),e.jsxs(N,{children:[e.jsx(H,{...h,cell:t==null?void 0:t.dateCell,dateValue:a,selectedDateRangeValue:o,defaultSelectedDateRangeValue:S,onSelectedDateRangeValueChange:T,activeDateRangeEndValue:C,onActiveDateRangeEndValueChange:M,activeDateValue:q,onActiveDateValueChange:w,locale:r,$isVisible:l==="dates"}),e.jsx(I,{...h,cell:t==null?void 0:t.monthCell,dateValue:a,selectedDateValue:v,onSelectedDateValueChange:ou,locale:r,$isVisible:l==="months"}),e.jsx($,{...h,cell:t==null?void 0:t.yearCell,dateValue:a,selectedDateValue:v,onSelectedDateValueChange:cu,locale:r,$isVisible:l==="years"})]})]}),e.jsxs(W,{children:[e.jsx(L,{date:n,viewMode:s,locale:r,onClick:fu,prevButtonProps:x,nextButtonProps:P}),e.jsxs(N,{children:[e.jsx(H,{...h,cell:t==null?void 0:t.dateCell,dateValue:n,selectedDateRangeValue:o,defaultSelectedDateRangeValue:S,onSelectedDateRangeValueChange:T,activeDateRangeEndValue:C,onActiveDateRangeEndValueChange:M,activeDateValue:q,onActiveDateValueChange:w,locale:r,$isVisible:s==="dates"}),e.jsx(I,{...h,cell:t==null?void 0:t.monthCell,dateValue:a,selectedDateValue:v,onSelectedDateValueChange:Du,locale:r,$isVisible:s==="months"}),e.jsx($,{...h,cell:t==null?void 0:t.yearCell,dateValue:n,selectedDateValue:v,onSelectedDateValueChange:mu,locale:r,$isVisible:s==="years"})]})]})]})};try{F.displayName="DateRangeDoublePickerCalendar",F.__docgenInfo={description:"",displayName:"DateRangeDoublePickerCalendar",props:{selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:{value:`{
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
}`},description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"dateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs]"}},defaultDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const R=m=>{const g=p=>{const f=p.target.dataset.value;console.log(`click on ${f}`)};return e.jsxs(Cu,{children:[e.jsx(F,{...m,onClick:g}),e.jsxs(gu,{children:[e.jsx(Y,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор диапазона дат"}),e.jsxs(Y,{font:"Body/Body 2 Long",as:"div",children:["Части сдвоенного календаря ведут себя независимо, то есть при взаимодействии с одной его частью, вторая не меняется. Первый пункт работает до тех пор, пока левая часть «младше» правой.",e.jsx("br",{}),e.jsx("br",{}),"В случае, когда мы меняем правую часть так, что выбранный в ней месяц года «младше», чем в левой части, то левая часть подстраивается, отображая месяц стоящий перед тем, который в правой. И наоборот."]})]})]})};try{R.displayName="DateRangeDoublePickerCalendarSimpleTemplate",R.__docgenInfo={description:"",displayName:"DateRangeDoublePickerCalendarSimpleTemplate",props:{selectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"selectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},defaultSelectedDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultSelectedDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onSelectedDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onSelectedDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},dateAttributes:{defaultValue:null,description:"Коллбэк на определение аттрибутов даты (disabled, isHoliday, hidden)",name:"dateAttributes",required:!1,type:{name:"((currentDate: Dayjs) => DateAttributes)"}},activeDateValue:{defaultValue:null,description:"Активная дата (hover)",name:"activeDateValue",required:!1,type:{name:"Dayjs"}},defaultActiveDateValue:{defaultValue:null,description:"Активная дата (hover) по умолчанию",name:"defaultActiveDateValue",required:!1,type:{name:"Dayjs"}},onActiveDateValueChange:{defaultValue:null,description:"Коллбэк на изменение активной даты",name:"onActiveDateValueChange",required:!1,type:{name:"((date?: Dayjs) => void)"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"CalendarLocaleProps"}},dateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат",name:"dateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs]"}},defaultDateRangeValue:{defaultValue:null,description:"Выбранное значение диапазона дат по умолчанию",name:"defaultDateRangeValue",required:!1,type:{name:"[Dayjs, Dayjs] | undefined"}},onDateRangeValueChange:{defaultValue:null,description:"Коллбэк на изменение выбранного диапазона дат",name:"onDateRangeValueChange",required:!1,type:{name:"((dateRange: [Dayjs, Dayjs]) => void) | undefined"}},viewModeValue:{defaultValue:null,description:"Экран выбора дат, месяцев, лет",name:"viewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},defaultViewModeValue:{defaultValue:null,description:"Режим отображения по умолчанию",name:"defaultViewModeValue",required:!1,type:{name:"enum",value:[{value:'"dates"'},{value:'"months"'},{value:'"years"'}]}},onViewModeChange:{defaultValue:null,description:"Коллбэк на переключение экрана",name:"onViewModeChange",required:!1,type:{name:"((mode: CalendarViewMode) => void)"}},cell:{defaultValue:null,description:"Кастомное отображение ячеек",name:"cell",required:!1,type:{name:"СellProps"}},prevButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Назад"',name:"prevButtonProps",required:!1,type:{name:"ArrowButtonProps"}},nextButtonProps:{defaultValue:null,description:'Параметры для кнопки панели "Вперед"',name:"nextButtonProps",required:!1,type:{name:"ArrowButtonProps"}}}}}catch{}const Bu=`import type { MouseEventHandler } from 'react';

import { T } from '@admiral-ds/react-ui';
import type { DateRangeDoublePickerCalendarProps } from '@admiral-ds/date-picker';
import { DateRangeDoublePickerCalendar } from '@admiral-ds/date-picker';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';

export const DateRangeDoublePickerCalendarSimpleTemplate = (props: DateRangeDoublePickerCalendarProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(\`click on \${clickedCell}\`);
  };

  return (
    <WrapperHorizontal>
      <DateRangeDoublePickerCalendar
        {...props}
        onClick={handleClick}
        //defaultSelectedDateRangeValue={['2023-10-01T12:00:00Z', '2024-07-01T12:00:00Z']}
      />
      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор диапазона дат
        </T>
        <T font="Body/Body 2 Long" as="div">
          Части сдвоенного календаря ведут себя независимо, то есть при взаимодействии с одной его частью, вторая не
          меняется. Первый пункт работает до тех пор, пока левая часть «младше» правой.
          <br />
          <br />В случае, когда мы меняем правую часть так, что выбранный в ней месяц года «младше», чем в левой части,
          то левая часть подстраивается, отображая месяц стоящий перед тем, который в правой. И наоборот.
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};
`,_u={title:"Admiral-2.1/Double Range Picker/DateRangeDoublePickerCalendar",component:F,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{locale:{control:!1}}},Vu=m=>e.jsx(R,{...m}),b={render:Vu,parameters:{docs:{source:{code:Bu}}},name:"Сдвоенный календарь выбора дат"};var z,G,O;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: DateRangeDoublePickerCalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: DateRangeDoublePickerCalendarSimpleTemplateRaw
      }
    }
  },
  name: 'Сдвоенный календарь выбора дат'
}`,...(O=(G=b.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};const Lu=["DateRangeDoublePickerCalendarSimple"];export{b as DateRangeDoublePickerCalendarSimple,Lu as __namedExportsOrder,_u as default};

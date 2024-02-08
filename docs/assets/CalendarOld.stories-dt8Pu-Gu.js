import{a as q,j as p,t as O,u as ne}from"./styled-components.browser.esm-7zUEPxZV.js";import{C as R,l as ae,m as te}from"./index-91mimT7-.js";import{a as C,I as V,J as m,d as re,K as de}from"./index-GEu7UUTq.js";import{r as c,c as se}from"./index-DogsOklH.js";import"./es-MdRB_EIy.js";import"./index-iEjp33-N.js";import"./ChevronRightOutline-2Sr-EFPQ.js";import"./index-MroJ3egt.js";import"./DropdownProvider.es-vuRa4WZF.js";import"./index-ppHAGUN8.js";import"./index-ItCXVjST.js";import"./index-LrOJhR-V.js";import"./index-CppLjZWP.js";import"./index.es-8dT2HbVl.js";const ie=q`
  color: ${u=>u.disabled?u.theme.color["Error/Error 30"]:u.theme.color["Error/Error 60 Main"]};
`,le=u=>{if(u.day()===0)return ie},j="ru",N=({rangePicker:u=!0,doubleView:i=!0,themeBorderKind:E,...d})=>{function h(a){return a.shape.borderRadiusKind=E||a.shape.borderRadiusKind,a}const[S,r]=c.useState("DATES"),[y,s]=c.useState(C()),[l,t]=c.useState(void 0),[o,D]=c.useState(void 0),f=()=>{s(C()),t(void 0),D(void 0)};c.useEffect(()=>{switch(d.pickerType){case"DATE_MONTH_YEAR":r("DATES");break;case"MONTH_YEAR":r("MONTHS");break;case"YEAR":r("YEARS");break}f()},[d.pickerType]),c.useEffect(()=>{f()},[u]);const T=a=>{const e=m(a,j);e&&(console.log(`click on ${e.format("DD MMM YYYY")}`),u?l?o?(t(e),D(void 0)):e.isAfter(l)&&D(e):t(e):s(e))},M=a=>{if(d.pickerType==="MONTH_YEAR"){const e=m(a,j);e&&(u?l?o?(t(e),D(void 0)):e.isAfter(l)&&D(e):t(e):s(e))}},g=a=>{if(d.pickerType==="YEAR"){const e=m(a,j);e&&s(e)}},I=a=>{if(d.pickerType==="YEAR"){const e=m(a,j);e&&(l?o?(t(e),D(void 0)):e.isAfter(l)&&D(e):t(e))}},A=a=>r(a);return p.jsx(O,{theme:h,children:p.jsx("div",{style:{display:"flex"},children:p.jsx(R,{doubleView:i,rangePicker:u,pickerType:d.pickerType,viewMode:{viewModeName:S,onViewModeNameChange:A},selectedDate:{selectedDateValue:V(y),onSelectDate:T,onSelectMonth:M,onSelectYear:u?I:g},startDate:l,endDate:o,highlightSpecialDay:le})})})};try{N.displayName="SimpleCalendarOldTemplate",N.__docgenInfo={description:"",displayName:"SimpleCalendarOldTemplate",props:{doubleView:{defaultValue:{value:"true"},description:"",name:"doubleView",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы, используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"CalendarLocaleOldProps"}},rangePicker:{defaultValue:{value:"true"},description:"Режим выбора диапазона дат",name:"rangePicker",required:!1,type:{name:"boolean"}},viewMode:{defaultValue:null,description:"Управление экраном выбора дат",name:"viewMode",required:!1,type:{name:"ViewModeProps"}},pickerType:{defaultValue:null,description:"Выбор только года, месяца или полной даты",name:"pickerType",required:!1,type:{name:"enum",value:[{value:'"DATE_MONTH_YEAR"'},{value:'"MONTH_YEAR"'},{value:'"YEAR"'}]}},viewDate:{defaultValue:null,description:'Дата для отображения на экране в формате "YYYY-MM-DDT12:00:00',name:"viewDate",required:!1,type:{name:"ViewDateProps"}},activeDate:{defaultValue:null,description:'Активная дата (hover) в формате "YYYY-MM-DDT12:00:00',name:"activeDate",required:!1,type:{name:"ActiveDateProps"}},selectedDate:{defaultValue:null,description:'Выбранное значение даты в формате "YYYY-MM-DDT12:00:00"',name:"selectedDate",required:!1,type:{name:"SelectedDateProps"}},startDate:{defaultValue:null,description:'Начальная дата диапазона в формате "YYYY-MM-DDT12:00:00"',name:"startDate",required:!1,type:{name:"Dayjs"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Dayjs"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Dayjs"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Dayjs"}},renderCell:{defaultValue:null,description:"Функции для кастомного отображения дат, месяцев и лет",name:"renderCell",required:!1,type:{name:"RenderCellsProp"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},disabledDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня,
то этот день будет задизейблен и его нельзя будет выбрать`,name:"disabledDate",required:!1,type:{name:"((date: string) => boolean)"}},isHiddenDate:{defaultValue:null,description:"Функция отображения даты на текущем экране",name:"isHiddenDate",required:!1,type:{name:"((date: string) => boolean)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Dayjs) => RuleSet<object>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}}}}}catch{}var oe={exports:{}};(function(u,i){(function(E,d){u.exports=d(re)})(se,function(E){function d(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var h=d(E),S={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function r(s,l,t){var o=S[t];return Array.isArray(o)&&(o=o[l?0:1]),o.replace("%d",s)}var y={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(s){return s+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r}};return h.default.locale(y,null,!0),y})})(oe);const ce=q`
  color: ${u=>u.disabled?u.theme.color["Error/Error 30"]:u.theme.color["Error/Error 60 Main"]};
`,De=u=>{if(u.day()===0)return ce},pe={firstDayOfWeek:1,badge:{amountAriaLabel:"Anzahl"},calendar:{backwardText:"Zurück",forwardText:"Vorwärts",nextMonthText:"Nächster Monat",previousMonthText:"Vorheriger Monat",returnText:"Zurück sein",selectYearText:"Wahl des Jahres",selectMonthText:"Monatsauswahl"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"In der Tabelle suchen"},hint:{closeButtonAriaLabel:"Tipp schließen"},modal:{closeButtonAriaLabel:"Modales Fenster schließen"},paginationOne:{itemsPerPageText:"Einträge pro Seite:",pageSelectLabel:(u,i)=>`Seite ${u} von ${i}`,pageSizeSelectLabel:(u,i)=>`Einträge ${u} von ${i}`,itemRangeText:(u,i,E)=>`${u}–${i} einträge von ${E}`,pageRangeText:u=>`von ${u} ${u===1?"Seite":"Seiten"}`,backwardText:"Vorherige Seite, auswählen",forwardText:"Nächste Seite, auswählen"},paginationTwo:{inputPlaceholder:"№ Seiten",itemRangeText:(u,i,E)=>`${u}–${i} einträge von ${E}`},progressStepper:{renderNextStepName:u=>`Weiter - ${u}`,stepName:["schritt","schritte"],progressText:(u,i,E)=>`${u} von ${i} ${E}`},select:{emptyMessage:"Keine Zufälle"},suggestInput:{emptyMessage:"Keine Zufälle"},table:{emptyMessage:"Keine Zufälle"}},F="de",x=({rangePicker:u=!1,doubleView:i=!1,themeBorderKind:E,...d})=>{function h(a){const e={...a,currentLocale:"de",locales:{...a.locales,de:pe}};return e.shape.borderRadiusKind=E||a.shape.borderRadiusKind,e}const[S,r]=c.useState("DATES"),[y,s]=c.useState(C()),[l,t]=c.useState(void 0),[o,D]=c.useState(void 0),f=()=>{s(C()),t(void 0),D(void 0)};c.useEffect(()=>{switch(d.pickerType){case"DATE_MONTH_YEAR":r("DATES");break;case"MONTH_YEAR":r("MONTHS");break;case"YEAR":r("YEARS");break}f()},[d.pickerType]),c.useEffect(()=>{f()},[u]);const T=a=>{const e=m(a,F);e&&(console.log(`click on ${e.format("DD MMM YYYY")}`),u?l?o?(t(e),D(void 0)):e.isAfter(l)&&D(e):t(e):s(e))},M=a=>{if(d.pickerType==="MONTH_YEAR"){const e=m(a,F);e&&(u?l?o?(t(e),D(void 0)):e.isAfter(l)&&D(e):t(e):s(e))}},g=a=>{if(d.pickerType==="YEAR"){const e=m(a,F);e&&s(e)}},I=a=>{if(d.pickerType==="YEAR"){const e=m(a,F);e&&(l?o?(t(e),D(void 0)):e.isAfter(l)&&D(e):t(e))}},A=a=>r(a);return p.jsx(O,{theme:h,children:p.jsx("div",{style:{display:"flex"},children:p.jsx(R,{doubleView:i,rangePicker:u,pickerType:d.pickerType,viewMode:{viewModeName:S,onViewModeNameChange:A},selectedDate:{selectedDateValue:V(y),onSelectDate:T,onSelectMonth:M,onSelectYear:u?I:g},startDate:l,endDate:o,highlightSpecialDay:De,locale:{localeName:F}})})})};try{x.displayName="CustomThemeLocaleCalendarOldTemplate",x.__docgenInfo={description:"",displayName:"CustomThemeLocaleCalendarOldTemplate",props:{doubleView:{defaultValue:{value:"false"},description:"",name:"doubleView",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы, используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"CalendarLocaleOldProps"}},rangePicker:{defaultValue:{value:"false"},description:"Режим выбора диапазона дат",name:"rangePicker",required:!1,type:{name:"boolean"}},viewMode:{defaultValue:null,description:"Управление экраном выбора дат",name:"viewMode",required:!1,type:{name:"ViewModeProps"}},pickerType:{defaultValue:null,description:"Выбор только года, месяца или полной даты",name:"pickerType",required:!1,type:{name:"enum",value:[{value:'"DATE_MONTH_YEAR"'},{value:'"MONTH_YEAR"'},{value:'"YEAR"'}]}},viewDate:{defaultValue:null,description:'Дата для отображения на экране в формате "YYYY-MM-DDT12:00:00',name:"viewDate",required:!1,type:{name:"ViewDateProps"}},activeDate:{defaultValue:null,description:'Активная дата (hover) в формате "YYYY-MM-DDT12:00:00',name:"activeDate",required:!1,type:{name:"ActiveDateProps"}},selectedDate:{defaultValue:null,description:'Выбранное значение даты в формате "YYYY-MM-DDT12:00:00"',name:"selectedDate",required:!1,type:{name:"SelectedDateProps"}},startDate:{defaultValue:null,description:'Начальная дата диапазона в формате "YYYY-MM-DDT12:00:00"',name:"startDate",required:!1,type:{name:"Dayjs"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Dayjs"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Dayjs"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Dayjs"}},renderCell:{defaultValue:null,description:"Функции для кастомного отображения дат, месяцев и лет",name:"renderCell",required:!1,type:{name:"RenderCellsProp"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},disabledDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня,
то этот день будет задизейблен и его нельзя будет выбрать`,name:"disabledDate",required:!1,type:{name:"((date: string) => boolean)"}},isHiddenDate:{defaultValue:null,description:"Функция отображения даты на текущем экране",name:"isHiddenDate",required:!1,type:{name:"((date: string) => boolean)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Dayjs) => RuleSet<object>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}}}}}catch{}const me=q`
  color: ${u=>u.disabled?u.theme.color["Error/Error 30"]:u.theme.color["Error/Error 60 Main"]};
`,Ee=u=>{if(u.day()===0)return me},b="es",L=({rangePicker:u=!1,doubleView:i=!1,themeBorderKind:E,...d})=>{function h(e){return e.shape.borderRadiusKind=E||e.shape.borderRadiusKind,e}const S={backwardText:"Atrás",forwardText:"Adelante",nextMonthText:"El mes que viene",previousMonthText:"El mes anterior",returnText:"Salir",selectYearText:"Seleccionar un año",selectMonthText:"Seleccionar un mes"},[r,y]=c.useState("DATES"),[s,l]=c.useState(C()),[t,o]=c.useState(void 0),[D,f]=c.useState(void 0),T=()=>{l(C()),o(void 0),f(void 0)};c.useEffect(()=>{switch(d.pickerType){case"DATE_MONTH_YEAR":y("DATES");break;case"MONTH_YEAR":y("MONTHS");break;case"YEAR":y("YEARS");break}T()},[d.pickerType]),c.useEffect(()=>{T()},[u]);const M=e=>{const n=m(e,b);n&&(console.log(`click on ${n.format("DD MMM YYYY")}`),u?t?D?(o(n),f(void 0)):n.isAfter(t)&&f(n):o(n):l(n))},g=e=>{if(d.pickerType==="MONTH_YEAR"){const n=m(e,b);n&&(u?t?D?(o(n),f(void 0)):n.isAfter(t)&&f(n):o(n):l(n))}},I=e=>{if(d.pickerType==="YEAR"){const n=m(e,b);n&&l(n)}},A=e=>{if(d.pickerType==="YEAR"){const n=m(e,b);n&&(t?D?(o(n),f(void 0)):n.isAfter(t)&&f(n):o(n))}},a=e=>y(e);return p.jsx(O,{theme:h,children:p.jsx("div",{style:{display:"flex"},children:p.jsx(R,{doubleView:i,rangePicker:u,pickerType:d.pickerType,viewMode:{viewModeName:r,onViewModeNameChange:a},selectedDate:{selectedDateValue:V(s),onSelectDate:M,onSelectMonth:g,onSelectYear:u?A:I},startDate:t,endDate:D,highlightSpecialDay:Ee,locale:{localeName:b,localeText:S}})})})};try{L.displayName="UserLocaleCalendarOldTemplate",L.__docgenInfo={description:"",displayName:"UserLocaleCalendarOldTemplate",props:{doubleView:{defaultValue:{value:"false"},description:"",name:"doubleView",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы, используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"CalendarLocaleOldProps"}},rangePicker:{defaultValue:{value:"false"},description:"Режим выбора диапазона дат",name:"rangePicker",required:!1,type:{name:"boolean"}},viewMode:{defaultValue:null,description:"Управление экраном выбора дат",name:"viewMode",required:!1,type:{name:"ViewModeProps"}},pickerType:{defaultValue:null,description:"Выбор только года, месяца или полной даты",name:"pickerType",required:!1,type:{name:"enum",value:[{value:'"DATE_MONTH_YEAR"'},{value:'"MONTH_YEAR"'},{value:'"YEAR"'}]}},viewDate:{defaultValue:null,description:'Дата для отображения на экране в формате "YYYY-MM-DDT12:00:00',name:"viewDate",required:!1,type:{name:"ViewDateProps"}},activeDate:{defaultValue:null,description:'Активная дата (hover) в формате "YYYY-MM-DDT12:00:00',name:"activeDate",required:!1,type:{name:"ActiveDateProps"}},selectedDate:{defaultValue:null,description:'Выбранное значение даты в формате "YYYY-MM-DDT12:00:00"',name:"selectedDate",required:!1,type:{name:"SelectedDateProps"}},startDate:{defaultValue:null,description:'Начальная дата диапазона в формате "YYYY-MM-DDT12:00:00"',name:"startDate",required:!1,type:{name:"Dayjs"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Dayjs"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Dayjs"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Dayjs"}},renderCell:{defaultValue:null,description:"Функции для кастомного отображения дат, месяцев и лет",name:"renderCell",required:!1,type:{name:"RenderCellsProp"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},disabledDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня,
то этот день будет задизейблен и его нельзя будет выбрать`,name:"disabledDate",required:!1,type:{name:"((date: string) => boolean)"}},isHiddenDate:{defaultValue:null,description:"Функция отображения даты на текущем экране",name:"isHiddenDate",required:!1,type:{name:"((date: string) => boolean)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Dayjs) => RuleSet<object>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}}}}}catch{}const fe=ne(ae)`
  color: ${u=>u.disabled?u.theme.color["Neutral/Neutral 10"]:u.theme.color["Error/Error 60 Main"]};
`,B="en",P=({themeBorderKind:u,...i})=>{function E(e){return e.shape.borderRadiusKind=u||e.shape.borderRadiusKind,e}const[d,h]=c.useState("DATES"),[S,r]=c.useState(C()),[y,s]=c.useState(S),[l,t]=c.useState(void 0);c.useEffect(()=>{switch(i.pickerType){case"DATE_MONTH_YEAR":h("DATES");break;case"MONTH_YEAR":h("MONTHS");break;case"YEAR":h("YEARS");break}},[i.pickerType]),c.useEffect(()=>{},[i.rangePicker]);const o=e=>{const n=m(e,B);return n&&n.date()<7},D=e=>{const n=m(e,B);n&&(console.log(`click on ${n.format("DD MMM YYYY")}`),r(n),s(n))},f=e=>{if(i.pickerType==="MONTH_YEAR"){const n=m(e,B);n&&(r(n),s(n))}},T=e=>{if(i.pickerType==="YEAR"){const n=m(e,B);n&&(r(n),s(n))}},M=(e,n)=>{t(e)},g=(e,n)=>{t(void 0)},I=e=>{const n=m(e,B);if(!n)return p.jsx(p.Fragment,{});const _=o(V(n));return p.jsx(fe,{today:n.isSame(C(),"date"),selected:n.isSame(S,"date"),disabled:_,outsideMonth:!n.isSame(y,"month"),onClick:()=>!_&&D(V(n)),isActiveDate:!!l&&n.isSame(l,"date"),isRangeStart:!1,isRangeEnd:!1,isRowStart:!1,isRowEnd:!1,onMouseEnter:ue=>!_&&M(n),onMouseLeave:ue=>!_&&g(),borderRadius:te,children:n.date()},n.valueOf())},A=e=>{s(C(e))},a=e=>h(e);return p.jsx(O,{theme:E,children:p.jsx("div",{style:{display:"flex"},children:p.jsx(R,{doubleView:i.doubleView,rangePicker:i.rangePicker,pickerType:i.pickerType,viewMode:{viewModeName:d,onViewModeNameChange:a},selectedDate:{selectedDateValue:V(S),onSelectDate:D,onSelectMonth:f,onSelectYear:T},renderCell:{renderDateCell:I},viewDate:{onViewDateChange:A},locale:{localeName:B}})})})};try{P.displayName="CustomCalendarOldTemplate",P.__docgenInfo={description:"",displayName:"CustomCalendarOldTemplate",props:{doubleView:{defaultValue:null,description:"",name:"doubleView",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы, используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"CalendarLocaleOldProps"}},rangePicker:{defaultValue:null,description:"Режим выбора диапазона дат",name:"rangePicker",required:!1,type:{name:"boolean"}},viewMode:{defaultValue:null,description:"Управление экраном выбора дат",name:"viewMode",required:!1,type:{name:"ViewModeProps"}},pickerType:{defaultValue:null,description:"Выбор только года, месяца или полной даты",name:"pickerType",required:!1,type:{name:"enum",value:[{value:'"DATE_MONTH_YEAR"'},{value:'"MONTH_YEAR"'},{value:'"YEAR"'}]}},viewDate:{defaultValue:null,description:'Дата для отображения на экране в формате "YYYY-MM-DDT12:00:00',name:"viewDate",required:!1,type:{name:"ViewDateProps"}},activeDate:{defaultValue:null,description:'Активная дата (hover) в формате "YYYY-MM-DDT12:00:00',name:"activeDate",required:!1,type:{name:"ActiveDateProps"}},selectedDate:{defaultValue:null,description:'Выбранное значение даты в формате "YYYY-MM-DDT12:00:00"',name:"selectedDate",required:!1,type:{name:"SelectedDateProps"}},startDate:{defaultValue:null,description:'Начальная дата диапазона в формате "YYYY-MM-DDT12:00:00"',name:"startDate",required:!1,type:{name:"Dayjs"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Dayjs"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Dayjs"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Dayjs"}},renderCell:{defaultValue:null,description:"Функции для кастомного отображения дат, месяцев и лет",name:"renderCell",required:!1,type:{name:"RenderCellsProp"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},disabledDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня,
то этот день будет задизейблен и его нельзя будет выбрать`,name:"disabledDate",required:!1,type:{name:"((date: string) => boolean)"}},isHiddenDate:{defaultValue:null,description:"Функция отображения даты на текущем экране",name:"isHiddenDate",required:!1,type:{name:"((date: string) => boolean)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Dayjs) => RuleSet<object>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}}}}}catch{}const ye=`import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { css, ThemeProvider } from 'styled-components';

import type { Theme, BorderRadiusType } from '@admiral-ds/react-ui';

import { CalendarOld } from '@admiral-ds/date-picker';
import type { CalendarOldProps, CalendarOldViewMode } from '@admiral-ds/date-picker';
import { dateStringToDayjs, dayjsDateToString } from '#src/components/utils';

const weekendMixin = css<{ disabled?: boolean }>\`
  color: \${(p) => (p.disabled ? p.theme.color['Error/Error 30'] : p.theme.color['Error/Error 60 Main'])};
\`;

const highlightSundays = (date: Dayjs) => {
  if (date.day() === 0) {
    return weekendMixin;
  }
  return undefined;
};

const simpleTemplateLocaleName = 'ru';

export const SimpleCalendarOldTemplate = ({
  rangePicker = true,
  doubleView = true,
  themeBorderKind,
  ...props
}: CalendarOldProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [viewModeInner, setViewModeInner] = useState<CalendarOldViewMode>('DATES');
  const [selectedInner, setSelectedInner] = useState<Dayjs>(dayjs());
  const [startDateInner, setStartDateInner] = useState<Dayjs | undefined>(undefined);
  const [endDateInner, setEndDateInner] = useState<Dayjs | undefined>(undefined);

  const resetDateStatesInner = () => {
    setSelectedInner(dayjs());
    setStartDateInner(undefined);
    setEndDateInner(undefined);
  };

  useEffect(() => {
    switch (props.pickerType) {
      case 'DATE_MONTH_YEAR':
        setViewModeInner('DATES');
        break;
      case 'MONTH_YEAR':
        setViewModeInner('MONTHS');
        break;
      case 'YEAR':
        setViewModeInner('YEARS');
        break;
    }
    resetDateStatesInner();
  }, [props.pickerType]);

  useEffect(() => {
    resetDateStatesInner();
  }, [rangePicker]);

  /*const filterDate = (dateString: string) => {
    const date = dateStringToDayjs(dateString, simpleTemplateLocaleName);
    return date && date.date() < 7;
  };*/

  const handleDayClickInner = (dateString: string) => {
    const date = dateStringToDayjs(dateString, simpleTemplateLocaleName);
    if (date) {
      console.log(\`click on \${date.format('DD MMM YYYY')}\`);
      if (rangePicker) {
        if (!startDateInner) {
          setStartDateInner(date);
        } else {
          if (!endDateInner) {
            if (date.isAfter(startDateInner)) {
              setEndDateInner(date);
            }
          } else {
            setStartDateInner(date);
            setEndDateInner(undefined);
          }
        }
      } else {
        setSelectedInner(date);
      }
    }
  };

  const handleMonthClickInner = (dateString: string) => {
    if (props.pickerType === 'MONTH_YEAR') {
      const date = dateStringToDayjs(dateString, simpleTemplateLocaleName);
      if (date) {
        if (rangePicker) {
          if (!startDateInner) {
            setStartDateInner(date);
          } else {
            if (!endDateInner) {
              if (date.isAfter(startDateInner)) {
                setEndDateInner(date);
              }
            } else {
              setStartDateInner(date);
              setEndDateInner(undefined);
            }
          }
        } else {
          setSelectedInner(date);
        }
      }
    }
  };

  const handleYearClickInner = (dateString: string) => {
    if (props.pickerType === 'YEAR') {
      const date = dateStringToDayjs(dateString, simpleTemplateLocaleName);
      if (date) {
        setSelectedInner(date);
      }
    }
  };
  const handleYearRangeClickInner = (dateString: string) => {
    if (props.pickerType === 'YEAR') {
      const date = dateStringToDayjs(dateString, simpleTemplateLocaleName);
      if (date) {
        if (!startDateInner) {
          setStartDateInner(date);
        } else {
          if (!endDateInner) {
            if (date.isAfter(startDateInner)) {
              setEndDateInner(date);
            }
          } else {
            setStartDateInner(date);
            setEndDateInner(undefined);
          }
        }
      }
    }
  };

  const handleViewModeChangeInner = (viewMode: CalendarOldViewMode) => setViewModeInner(viewMode);

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex' }}>
        <CalendarOld
          doubleView={doubleView}
          rangePicker={rangePicker}
          pickerType={props.pickerType}
          viewMode={{ viewModeName: viewModeInner, onViewModeNameChange: handleViewModeChangeInner }}
          selectedDate={{
            selectedDateValue: dayjsDateToString(selectedInner),
            onSelectDate: handleDayClickInner,
            onSelectMonth: handleMonthClickInner,
            onSelectYear: rangePicker ? handleYearRangeClickInner : handleYearClickInner,
          }}
          startDate={startDateInner}
          endDate={endDateInner}
          //disabledDate={filterDate}
          highlightSpecialDay={highlightSundays}
        />
      </div>
    </ThemeProvider>
  );
};
`,he=`import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { css, ThemeProvider } from 'styled-components';
import 'dayjs/locale/de';

import type { Locale, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

import { CalendarOld } from '@admiral-ds/date-picker';
import type { CalendarOldProps, CalendarOldViewMode } from '@admiral-ds/date-picker';
import { dateStringToDayjs, dayjsDateToString } from '#src/components/utils';

const weekendMixin = css<{ disabled?: boolean }>\`
  color: \${(p) => (p.disabled ? p.theme.color['Error/Error 30'] : p.theme.color['Error/Error 60 Main'])};
\`;

const highlightSundays = (date: Dayjs) => {
  if (date.day() === 0) {
    return weekendMixin;
  }
  return undefined;
};

const deLocale: Locale = {
  /** Число от 0 до 6, где 0 - это воскресенье */
  firstDayOfWeek: 1,
  badge: {
    amountAriaLabel: 'Anzahl',
  },
  calendar: {
    backwardText: 'Zurück',
    forwardText: 'Vorwärts',
    nextMonthText: 'Nächster Monat',
    previousMonthText: 'Vorheriger Monat',
    returnText: 'Zurück sein',
    selectYearText: 'Wahl des Jahres',
    selectMonthText: 'Monatsauswahl',
  },
  fileInput: {
    metricUnits: ['Kb', 'Mb', 'Gb'],
  },
  groupActionsPane: {
    inputPlaceholder: 'In der Tabelle suchen',
  },
  hint: {
    closeButtonAriaLabel: 'Tipp schließen',
  },
  modal: {
    closeButtonAriaLabel: 'Modales Fenster schließen',
  },
  paginationOne: {
    itemsPerPageText: 'Einträge pro Seite:',
    pageSelectLabel: (page: number, totalPages: number) => \`Seite \${page} von \${totalPages}\`,
    pageSizeSelectLabel: (pageSize: number, total: number) => \`Einträge \${pageSize} von \${total}\`,
    itemRangeText: (min: number, max: number, total: number) => \`\${min}–\${max} einträge von \${total}\`,
    pageRangeText: (total: number) => \`von \${total} \${total === 1 ? 'Seite' : 'Seiten'}\`,
    backwardText: 'Vorherige Seite, auswählen',
    forwardText: 'Nächste Seite, auswählen',
  },
  paginationTwo: {
    inputPlaceholder: '№ Seiten',
    itemRangeText: (min: number, max: number, total: number) => \`\${min}–\${max} einträge von \${total}\`,
  },
  progressStepper: {
    renderNextStepName: (stepName: string) => \`Weiter - \${stepName}\`,
    stepName: ['schritt', 'schritte'],
    progressText: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) =>
      \`\${activeStepNumber} von \${stepsAmount} \${stepNamePlural}\`,
  },
  select: {
    emptyMessage: 'Keine Zufälle',
  },
  suggestInput: {
    emptyMessage: 'Keine Zufälle',
  },
  table: {
    emptyMessage: 'Keine Zufälle',
  },
};

const customThemeLocaleName = 'de';

export const CustomThemeLocaleCalendarOldTemplate = ({
  rangePicker = false,
  doubleView = false,
  themeBorderKind,
  ...props
}: CalendarOldProps & { themeBorderKind?: BorderRadiusType }) => {
  function setDeLocale(theme: Theme): Theme {
    const newTheme = { ...theme, currentLocale: 'de', locales: { ...theme.locales, de: deLocale } };
    newTheme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return newTheme;
  }

  const [viewModeInner, setViewModeInner] = useState<CalendarOldViewMode>('DATES');
  const [selectedInner, setSelectedInner] = useState<Dayjs>(dayjs());
  const [startDateInner, setStartDateInner] = useState<Dayjs | undefined>(undefined);
  const [endDateInner, setEndDateInner] = useState<Dayjs | undefined>(undefined);

  const resetDateStatesInner = () => {
    setSelectedInner(dayjs());
    setStartDateInner(undefined);
    setEndDateInner(undefined);
  };

  useEffect(() => {
    switch (props.pickerType) {
      case 'DATE_MONTH_YEAR':
        setViewModeInner('DATES');
        break;
      case 'MONTH_YEAR':
        setViewModeInner('MONTHS');
        break;
      case 'YEAR':
        setViewModeInner('YEARS');
        break;
    }
    resetDateStatesInner();
  }, [props.pickerType]);

  useEffect(() => {
    resetDateStatesInner();
  }, [rangePicker]);

  /*const filterDate = (date: Dayjs) => {
    return date.date() < 7;
    //return date.isSame(dayjs(), 'date');
  };*/

  const handleDayClickInner = (dateString: string) => {
    const date = dateStringToDayjs(dateString, customThemeLocaleName);
    if (date) {
      console.log(\`click on \${date.format('DD MMM YYYY')}\`);
      if (rangePicker) {
        if (!startDateInner) {
          setStartDateInner(date);
        } else {
          if (!endDateInner) {
            if (date.isAfter(startDateInner)) {
              setEndDateInner(date);
            }
          } else {
            setStartDateInner(date);
            setEndDateInner(undefined);
          }
        }
      } else {
        setSelectedInner(date);
      }
    }
  };

  const handleMonthClickInner = (dateString: string) => {
    if (props.pickerType === 'MONTH_YEAR') {
      const date = dateStringToDayjs(dateString, customThemeLocaleName);
      if (date) {
        if (rangePicker) {
          if (!startDateInner) {
            setStartDateInner(date);
          } else {
            if (!endDateInner) {
              if (date.isAfter(startDateInner)) {
                setEndDateInner(date);
              }
            } else {
              setStartDateInner(date);
              setEndDateInner(undefined);
            }
          }
        } else {
          setSelectedInner(date);
        }
      }
    }
  };

  const handleYearClickInner = (dateString: string) => {
    if (props.pickerType === 'YEAR') {
      const date = dateStringToDayjs(dateString, customThemeLocaleName);
      if (date) {
        setSelectedInner(date);
      }
    }
  };
  const handleYearRangeClickInner = (dateString: string) => {
    if (props.pickerType === 'YEAR') {
      const date = dateStringToDayjs(dateString, customThemeLocaleName);
      if (date) {
        if (!startDateInner) {
          setStartDateInner(date);
        } else {
          if (!endDateInner) {
            if (date.isAfter(startDateInner)) {
              setEndDateInner(date);
            }
          } else {
            setStartDateInner(date);
            setEndDateInner(undefined);
          }
        }
      }
    }
  };

  const handleViewModeChangeInner = (viewMode: CalendarOldViewMode) => setViewModeInner(viewMode);

  return (
    <ThemeProvider theme={setDeLocale}>
      <div style={{ display: 'flex' }}>
        <CalendarOld
          doubleView={doubleView}
          rangePicker={rangePicker}
          pickerType={props.pickerType}
          viewMode={{ viewModeName: viewModeInner, onViewModeNameChange: handleViewModeChangeInner }}
          selectedDate={{
            selectedDateValue: dayjsDateToString(selectedInner),
            onSelectDate: handleDayClickInner,
            onSelectMonth: handleMonthClickInner,
            onSelectYear: rangePicker ? handleYearRangeClickInner : handleYearClickInner,
          }}
          startDate={startDateInner}
          endDate={endDateInner}
          highlightSpecialDay={highlightSundays}
          locale={{ localeName: customThemeLocaleName }}
        />
      </div>
    </ThemeProvider>
  );
};
`,Se=`import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { css, ThemeProvider } from 'styled-components';
import 'dayjs/locale/es';

import type { Theme, BorderRadiusType } from '@admiral-ds/react-ui';

import { CalendarOld } from '@admiral-ds/date-picker';
import type { CalendarOldProps, CalendarOldViewMode } from '@admiral-ds/date-picker';
import { dateStringToDayjs, dayjsDateToString } from '#src/components/utils';

const weekendMixin = css<{ disabled?: boolean }>\`
  color: \${(p) => (p.disabled ? p.theme.color['Error/Error 30'] : p.theme.color['Error/Error 60 Main'])};
\`;

const highlightSundays = (date: Dayjs) => {
  if (date.day() === 0) {
    return weekendMixin;
  }
  return undefined;
};

const userLocaleName = 'es';

export const UserLocaleCalendarOldTemplate = ({
  rangePicker = false,
  doubleView = false,
  themeBorderKind,
  ...props
}: CalendarOldProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const customLocale = {
    backwardText: 'Atrás',
    forwardText: 'Adelante',
    nextMonthText: 'El mes que viene',
    previousMonthText: 'El mes anterior',
    returnText: 'Salir',
    selectYearText: 'Seleccionar un año',
    selectMonthText: 'Seleccionar un mes',
  };

  const [viewModeInner, setViewModeInner] = useState<CalendarOldViewMode>('DATES');
  const [selectedInner, setSelectedInner] = useState<Dayjs>(dayjs());
  const [startDateInner, setStartDateInner] = useState<Dayjs | undefined>(undefined);
  const [endDateInner, setEndDateInner] = useState<Dayjs | undefined>(undefined);

  const resetDateStatesInner = () => {
    setSelectedInner(dayjs());
    setStartDateInner(undefined);
    setEndDateInner(undefined);
  };

  useEffect(() => {
    switch (props.pickerType) {
      case 'DATE_MONTH_YEAR':
        setViewModeInner('DATES');
        break;
      case 'MONTH_YEAR':
        setViewModeInner('MONTHS');
        break;
      case 'YEAR':
        setViewModeInner('YEARS');
        break;
    }
    resetDateStatesInner();
  }, [props.pickerType]);

  useEffect(() => {
    resetDateStatesInner();
  }, [rangePicker]);

  /*const filterDate = (date: Dayjs) => {
    return date.date() < 7;
    //return date.isSame(dayjs(), 'date');
  };*/

  const handleDayClickInner = (dateString: string) => {
    const date = dateStringToDayjs(dateString, userLocaleName);
    if (date) {
      console.log(\`click on \${date.format('DD MMM YYYY')}\`);
      if (rangePicker) {
        if (!startDateInner) {
          setStartDateInner(date);
        } else {
          if (!endDateInner) {
            if (date.isAfter(startDateInner)) {
              setEndDateInner(date);
            }
          } else {
            setStartDateInner(date);
            setEndDateInner(undefined);
          }
        }
      } else {
        setSelectedInner(date);
      }
    }
  };

  const handleMonthClickInner = (dateString: string) => {
    if (props.pickerType === 'MONTH_YEAR') {
      const date = dateStringToDayjs(dateString, userLocaleName);
      if (date) {
        if (rangePicker) {
          if (!startDateInner) {
            setStartDateInner(date);
          } else {
            if (!endDateInner) {
              if (date.isAfter(startDateInner)) {
                setEndDateInner(date);
              }
            } else {
              setStartDateInner(date);
              setEndDateInner(undefined);
            }
          }
        } else {
          setSelectedInner(date);
        }
      }
    }
  };

  const handleYearClickInner = (dateString: string) => {
    if (props.pickerType === 'YEAR') {
      const date = dateStringToDayjs(dateString, userLocaleName);
      if (date) {
        setSelectedInner(date);
      }
    }
  };
  const handleYearRangeClickInner = (dateString: string) => {
    if (props.pickerType === 'YEAR') {
      const date = dateStringToDayjs(dateString, userLocaleName);
      if (date) {
        if (!startDateInner) {
          setStartDateInner(date);
        } else {
          if (!endDateInner) {
            if (date.isAfter(startDateInner)) {
              setEndDateInner(date);
            }
          } else {
            setStartDateInner(date);
            setEndDateInner(undefined);
          }
        }
      }
    }
  };

  const handleViewModeChangeInner = (viewMode: CalendarOldViewMode) => setViewModeInner(viewMode);

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex' }}>
        <CalendarOld
          doubleView={doubleView}
          rangePicker={rangePicker}
          pickerType={props.pickerType}
          viewMode={{ viewModeName: viewModeInner, onViewModeNameChange: handleViewModeChangeInner }}
          selectedDate={{
            selectedDateValue: dayjsDateToString(selectedInner),
            onSelectDate: handleDayClickInner,
            onSelectMonth: handleMonthClickInner,
            onSelectYear: rangePicker ? handleYearRangeClickInner : handleYearClickInner,
          }}
          startDate={startDateInner}
          endDate={endDateInner}
          highlightSpecialDay={highlightSundays}
          locale={{ localeName: userLocaleName, localeText: customLocale }}
        />
      </div>
    </ThemeProvider>
  );
};
`,Ce=`import type { MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType, Theme } from '@admiral-ds/react-ui';

import { CalendarOld, DAY_BORDER_RADIUS, DayCellWrapper } from '@admiral-ds/date-picker';
import type { CalendarOldProps, CalendarOldViewMode } from '@admiral-ds/date-picker';
import { dateStringToDayjs, dayjsDateToString } from '#src/components/utils';

const StyledDay = styled(DayCellWrapper)\`
  color: \${(p) => (p.disabled ? p.theme.color['Neutral/Neutral 10'] : p.theme.color['Error/Error 60 Main'])};
\`;

const customCalendarTemplateLocale = 'en';

export const CustomCalendarOldTemplate = ({
  themeBorderKind,
  ...props
}: CalendarOldProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [viewModeInner, setViewModeInner] = useState<CalendarOldViewMode>('DATES');
  const [selectedInner, setSelectedInner] = useState<Dayjs>(dayjs());
  const [viewDateInner, setViewDateInner] = useState<Dayjs>(selectedInner);
  const [activeDateInner, setActiveDateInner] = useState<Dayjs | undefined>(undefined);

  /*const resetDateStatesInner = () => {
    setSelectedInner(dayjs());
    //setStartDateInner(undefined);
    //setEndDateInner(undefined);
  };*/
  useEffect(() => {
    switch (props.pickerType) {
      case 'DATE_MONTH_YEAR':
        setViewModeInner('DATES');
        break;
      case 'MONTH_YEAR':
        setViewModeInner('MONTHS');
        break;
      case 'YEAR':
        setViewModeInner('YEARS');
        break;
    }
    //resetDateStatesInner();
  }, [props.pickerType]);

  useEffect(() => {
    //resetDateStatesInner();
  }, [props.rangePicker]);

  const filterDate = (dateString: string) => {
    const date = dateStringToDayjs(dateString, customCalendarTemplateLocale);
    return date && date.date() < 7;
  };

  const handleDayClickInner = (dateString: string) => {
    const date = dateStringToDayjs(dateString, customCalendarTemplateLocale);
    if (date) {
      console.log(\`click on \${date.format('DD MMM YYYY')}\`);
      setSelectedInner(date);
      setViewDateInner(date);
    }
  };

  const handleMonthClickInner = (dateString: string) => {
    if (props.pickerType === 'MONTH_YEAR') {
      const date = dateStringToDayjs(dateString, customCalendarTemplateLocale);
      if (date) {
        setSelectedInner(date);
        setViewDateInner(date);
      }
    }
  };

  const handleYearClickInner = (dateString: string) => {
    if (props.pickerType === 'YEAR') {
      const date = dateStringToDayjs(dateString, customCalendarTemplateLocale);
      if (date) {
        setSelectedInner(date);
        setViewDateInner(date);
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDayMouseEnterInner = (date: Dayjs, _: MouseEvent) => {
    setActiveDateInner(date);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDayMouseLeaveInner = (_date: Dayjs, _: MouseEvent) => {
    setActiveDateInner(undefined);
  };

  const customRenderDay = (dateString: string) => {
    const date = dateStringToDayjs(dateString, customCalendarTemplateLocale);
    if (!date) return <></>;

    const disabled = filterDate(dayjsDateToString(date));
    /*// ранее выбранный диапазон
    const inRange = !!startDate && !!endDate && date.isBetween(startDate, endDate, 'date', '[]');
    const rangeStart = !!startDate && date.isSame(startDate, 'date');
    const rangeEnd = !!startDate && !!endDate && date.isSame(endDate, 'date');
    // диапазон в процессе выбора
    const inSelectingRange = isInSelectingRange(date, disabled, startDate, endDate, activeDate);
    const rangeSelectingStart = inSelectingRange && date.isSame(startDate, 'date');
    const rangeSelectingEnd = inSelectingRange && date.isSame(activeDate, 'date');

    const weekStart = date.isSame(date.startOf('week'), 'date');
    const weekEnd = date.isSame(date.endOf('week'), 'date');
    const start = rangeStart || rangeSelectingStart;
    const end = rangeEnd || rangeSelectingEnd;*/
    return (
      <StyledDay
        key={date.valueOf()}
        today={date.isSame(dayjs(), 'date')}
        selected={date.isSame(selectedInner, 'date')}
        disabled={disabled}
        outsideMonth={!date.isSame(viewDateInner, 'month')}
        onClick={() => !disabled && handleDayClickInner(dayjsDateToString(date))}
        isActiveDate={!!activeDateInner && date.isSame(activeDateInner, 'date')}
        isRangeStart={false}
        isRangeEnd={false}
        isRowStart={false}
        isRowEnd={false}
        onMouseEnter={(e: MouseEvent) => !disabled && handleDayMouseEnterInner(date, e)}
        onMouseLeave={(e: MouseEvent) => !disabled && handleDayMouseLeaveInner(date, e)}
        borderRadius={DAY_BORDER_RADIUS}
      >
        {date.date()}
      </StyledDay>
    );
  };

  const handleViewDateChangeInner = (date: string) => {
    setViewDateInner(dayjs(date));
  };

  const handleViewModeChangeInner = (viewMode: CalendarOldViewMode) => setViewModeInner(viewMode);

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex' }}>
        <CalendarOld
          doubleView={props.doubleView}
          rangePicker={props.rangePicker}
          pickerType={props.pickerType}
          viewMode={{ viewModeName: viewModeInner, onViewModeNameChange: handleViewModeChangeInner }}
          selectedDate={{
            selectedDateValue: dayjsDateToString(selectedInner),
            onSelectDate: handleDayClickInner,
            onSelectMonth: handleMonthClickInner,
            onSelectYear: handleYearClickInner,
          }}
          renderCell={{ renderDateCell: customRenderDay }}
          viewDate={{ onViewDateChange: handleViewDateChangeInner }}
          locale={{ localeName: customCalendarTemplateLocale }}
        />
      </div>
    </ThemeProvider>
  );
};
`,xe={title:"Admiral-2.1/CalendarOld",component:R,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{viewMode:{options:["DATES","MONTHS","YEARS"],control:{type:"radio"}},pickerType:{options:["DATE_MONTH_YEAR","MONTH_YEAR","YEAR"],control:{type:"radio"}},rangePicker:{control:{type:"boolean"}},doubleView:{control:{type:"boolean"}},validator:{control:!1},selected:{control:!1},minDate:{control:!1},maxDate:{control:!1},themeBorderKind:{options:de,control:{type:"radio"}}}},Te=u=>p.jsx(N,{...u}),v=Te.bind({});v.parameters={docs:{source:{code:ye}}};v.storyName="Simple.";const Me=u=>p.jsx(x,{...u}),w=Me.bind({});w.parameters={docs:{source:{code:he},description:{story:`Пользователь может использовать любую локаль, не ограничиваясь русской или английской. Для 
      этого в объект theme.locales добавляется соответсвующий ключ, значением которого является объект типа Locale.
      Данный объект содержит в себе перечисление текстовых констант для компонентов библиотеки, а также содержит
      свойство firstDayOfWeek. Свойство firstDayOfWeek (значение св-ва - число от 0 до 6) обозначает, 
      с какого дня начинается неделя для данной локали, где 0 - это воскресенье. Также необходимо прописать импорт 
      необходимой локали из библиотеки Dayjs (import 'dayjs/locale/[необходимая локаль]', 
      https://day.js.org/docs/en/i18n/loading-into-nodejs).`}}};w.storyName="Пример с немецкой локалью, заданной через theme.locales.";const ge=u=>p.jsx(L,{...u}),Y=ge.bind({});Y.parameters={docs:{source:{code:Se},description:{story:`В некоторых случаях может быть необходимо изменить значения текстовых констант только для данного компонента. 
        Для этого есть специальный параметр locale - объект, в котором можно задать альтернативные значения текстовых 
        констант, отличные от тех, что заданы в theme.locales. Текстовая константа, заданная через пропс locale компонента 
        имеет больший приоритет, чем та же константа, заданная в theme.locale. Также необходимо прописать импорт необходимой 
        локали из библиотеки Dayjs  (import 'dayjs/locale/[необходимая локаль]', 
        https://day.js.org/docs/en/i18n/loading-into-nodejs).`}}};Y.storyName="Пример с испанской локалью, заданной через props.locale.";const Ie=u=>p.jsx(P,{...u}),k=Ie.bind({});k.parameters={docs:{source:{code:Ce}}};k.storyName="Custom.";var H,$,K;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:"props => <SimpleCalendarOldTemplate {...props} />",...(K=($=v.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var U,J,W;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:"props => <CustomThemeLocaleCalendarOldTemplate {...props} />",...(W=(J=w.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var Z,z,G;Y.parameters={...Y.parameters,docs:{...(Z=Y.parameters)==null?void 0:Z.docs,source:{originalSource:"props => <UserLocaleCalendarOldTemplate {...props} />",...(G=(z=Y.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var Q,X,ee;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:"props => <CustomCalendarOldTemplate {...props} />",...(ee=(X=k.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};const Le=["SimpleCalendarOld","CustomThemeLocaleCalendarOld","UserLocaleCalendarOld","CustomCalendarOld"];export{k as CustomCalendarOld,w as CustomThemeLocaleCalendarOld,v as SimpleCalendarOld,Y as UserLocaleCalendarOld,Le as __namedExportsOrder,xe as default};

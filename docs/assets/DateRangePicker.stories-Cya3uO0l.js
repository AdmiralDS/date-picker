import{j as t}from"./tslib.es6-gXVSDp23.js";import"./index-CTEAhEde.js";import{r}from"./index-uubelm5h.js";import{p as Q}from"./typography.es-zceevOJ_.js";import{d as _}from"./index-Lg2VQURa.js";import{D as U}from"./index-BgKhxwYX.js";import{c as X,I as Z,a as ee,b as ue,S as ae,P as te,d as re,u as ne}from"./index.esm-CdR71rmj.js";import{r as x}from"./ChevronRightOutline-D_ms2TvK.js";import{W as oe,b as P,T as j}from"./common-y18Jnvfl.js";import"./index-DH4-umzn.js";import"./index-Bbf-x86c.js";import"./index-CQzR3wtX.js";import"./DropdownProvider.es-CSByVTCf.js";import"./index-Dei0BBcc.js";import"./index-Os4r39UD.js";import"./index-BlQhhH40.js";import"./index-DuZs-Nu7.js";import"./index-DQmo8QVe.js";import"./index-BAqvSN_y.js";import"./index-Psa4Kny8.js";const se=Q(U).withConfig({displayName:"DateRangePicker__Calendar",componentId:"sc-a8623061-0"})(["border:none;box-shadow:none;"]),ie=u=>u?u.format("DD.MM.YYYY"):"",le=u=>_(u,"DD.MM.YYYY"),c=r.forwardRef(({inputProps:u={},separator:s=" – ",format:p=ie,parce:d=le,...y},v)=>{const[n,m]=r.useState(u.value),[T,b]=r.useState(_()),[f,E]=r.useState(),[F,i]=r.useState(!1),[h,k]=r.useState(!1),R=r.useRef(null),o=r.useRef(null),[D,l]=r.useState(!1),[S,Y]=r.useState("dates"),w=e=>{e.preventDefault(),h&&l(a=>!a)},W=e=>{console.log(`handleSelectedDateValueChange: ${e}`);const[a,B]=e;if(S==="dates"){const J=`${p(a)}${s}${p(B)}`;m(J),i(!1),B&&l(!1)}},q=e=>{E(e?p(e):void 0),S==="dates"&&i(!!e)},O=e=>{Y(e),e!=="dates"&&(E(void 0),i(!1))},z=e=>{var a;l(!1),k(!1),i(!1),(a=u.onBlur)==null||a.call(u,e)},L=e=>{var a;l(!0),k(!0),(a=u.onFocus)==null||a.call(u,e)},N=e=>{var a;e.target===e.currentTarget&&e.preventDefault(),h||(a=o.current)==null||a.focus()},H=e=>{e.key==="Enter"&&D&&(e.preventDefault(),l(!1),F&&f&&(m(f),i(!1)))},$={...y,ref:x(R,v),onMouseDown:N};r.useEffect(()=>{const e=o.current;if(e){const{value:a}=e;n!==a&&X(o.current,{value:n})}},[n]),r.useEffect(()=>{if(D&&o.current){const e=o.current,{value:a}=e;m(a)}},[D]),r.useEffect(()=>{function e(){const{value:a}=this;i(!1),a!==n&&(m(a),l(!0))}if(o.current){const a=o.current;return a.addEventListener("input",e,!0),()=>{a.removeEventListener("input",e,!0)}}},[n]);const G=u.ref!==void 0?x(o,u.ref):o,K={...u,ref:G,onBlur:z,onFocus:L,tmpValue:F?f:void 0},C=n?n.split(s).map(d):[];return t.jsxs(Z,{...$,children:[t.jsx(ee,{...K,onKeyDown:H}),t.jsx(ue,{icon:ae,onMouseDown:w}),D&&t.jsx(te,{targetElement:R.current,alignSelf:"auto",onMouseDown:e=>e.preventDefault(),children:t.jsx(se,{onViewModeChange:O,dateValue:T,onDateValueChange:e=>b(e),selectedDateRangeValue:[C[0],C[1]],onSelectedDateRangeValueChange:W,activeDateValue:d(f),onActiveDateValueChange:q})})]})});c.displayName="DateRangePicker";try{c.displayName="DateRangePicker",c.__docgenInfo={description:"Компонент DateRangePicker",displayName:"DateRangePicker",props:{separator:{defaultValue:{value:"–"},description:"",name:"separator",required:!1,type:{name:"string"}},inputProps:{defaultValue:{value:"{}"},description:"Пропсы внутреннего инпута",name:"inputProps",required:!1,type:{name:"InputLineProps"}},format:{defaultValue:{value:"(date?: Dayjs) => (date ? date.format('DD.MM.YYYY') : '')"},description:"Функция для конвертации значение календаря в строку инпута",name:"format",required:!1,type:{name:"((date?: Dayjs) => string)"}},parce:{defaultValue:{value:"(date?: string) => dayjs(date, 'DD.MM.YYYY')"},description:"Функция для конвертации строки инпута в значение календаря",name:"parce",required:!1,type:{name:"((date?: string) => Dayjs) | undefined"}},"data-size":{defaultValue:null,description:"Размеры компонента",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"s"'},{value:'"xl"'}]}}}}}catch{}const V=({inputProps:u={},...s})=>{const[p,d]=r.useState(u.value),y=r.useMemo(()=>re({mode:"dd/mm/yyyy",rangeSeparator:s.separator}),[s.separator]),v=ne({options:y});return t.jsxs(oe,{children:[t.jsx(P,{children:t.jsx(c,{...s,inputProps:{...u,value:p,onInput:n=>d(n.currentTarget.value),ref:v}})}),t.jsxs(P,{children:[t.jsx(j,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор даты"}),t.jsxs(j,{font:"Body/Body 2 Long",as:"div",children:["Высота календаря постоянна и состоит из шести рядов чисел. Текущий месяц начинается с первого ряда и, если его даты не заходят на шестой ряд, то там ставятся пустые ячейки (Empty).",t.jsx("br",{}),t.jsx("br",{}),"Текущая дата выделяется обводкой в виде черного кружка. Ховер на дате подсвечивается обводкой синего цвета. Выбранная дата отмечается синим кружком.",t.jsx("br",{}),"При ховере на месяце, годе, стрелках вправо/влево появляются тултипы с подсказками.",t.jsx("br",{}),t.jsx("br",{}),"Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год, либо нажав на месяц/год в шапке календаря"]})]})]})};try{V.displayName="DateRangePickerSimpleTemplate",V.__docgenInfo={description:"",displayName:"DateRangePickerSimpleTemplate",props:{separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"string"}},inputProps:{defaultValue:{value:"{}"},description:"Пропсы внутреннего инпута",name:"inputProps",required:!1,type:{name:"InputLineProps"}},format:{defaultValue:null,description:"Функция для конвертации значение календаря в строку инпута",name:"format",required:!1,type:{name:"((date?: Dayjs) => string)"}},parce:{defaultValue:null,description:"Функция для конвертации строки инпута в значение календаря",name:"parce",required:!1,type:{name:"((date?: string) => Dayjs) | undefined"}},"data-size":{defaultValue:null,description:"Размеры компонента",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"s"'},{value:'"xl"'}]}}}}}catch{}const pe=`import { T } from '@admiral-ds/react-ui';
import { DateRangePicker } from '@admiral-ds/date-picker';
import { maskitoDateRangeOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { useState, useMemo, type ComponentPropsWithoutRef } from 'react';

export const DateRangePickerSimpleTemplate = ({
  inputProps = {},
  ...props
}: ComponentPropsWithoutRef<typeof DateRangePicker>) => {
  const [inputValue, setInputValue] = useState(inputProps.value);
  const dateOptions = useMemo(
    () => maskitoDateRangeOptionsGenerator({ mode: 'dd/mm/yyyy', rangeSeparator: props.separator }),
    [props.separator],
  );
  const maskedDateInputRef = useMaskito({ options: dateOptions });
  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <DateRangePicker
          {...props}
          inputProps={{
            ...inputProps,
            value: inputValue,
            onInput: (e) => setInputValue(e.currentTarget.value),
            ref: maskedDateInputRef,
          }}
        />
      </WrapperVertical>

      <WrapperVertical>
        <T font="Subtitle/Subtitle 2" as="div">
          Выбор даты
        </T>
        <T font="Body/Body 2 Long" as="div">
          Высота календаря постоянна и состоит из шести рядов чисел. Текущий месяц начинается с первого ряда и, если его
          даты не заходят на шестой ряд, то там ставятся пустые ячейки (Empty).
          <br />
          <br />
          Текущая дата выделяется обводкой в виде черного кружка. Ховер на дате подсвечивается обводкой синего цвета.
          Выбранная дата отмечается синим кружком.
          <br />
          При ховере на месяце, годе, стрелках вправо/влево появляются тултипы с подсказками.
          <br />
          <br />
          Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год,
          либо нажав на месяц/год в шапке календаря
        </T>
      </WrapperVertical>
    </WrapperHorizontal>
  );
};
`,Ie={title:"Admiral-2.1/Date Picker/DateRangePicker",component:c,parameters:{docs:{source:{language:"tsx"}}},argTypes:{}},g={render:u=>t.jsx(V,{...u}),parameters:{docs:{source:{code:pe}}},name:"Выбор даты",args:{inputProps:{placeholder:"Введите интервал дат",dataPlaceholder:"дд.мм.гггг – дд.мм.гггг",value:"11."},separator:" – "}};var I,A,M;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  // обязательно для правильной работы хуков внутри темплейта
  render: props => <DateRangePickerSimpleTemplate {...props} />,
  parameters: {
    docs: {
      source: {
        code: DateRangePickerSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор даты',
  args: {
    inputProps: {
      placeholder: 'Введите интервал дат',
      dataPlaceholder: 'дд.мм.гггг – дд.мм.гггг',
      value: '11.'
    },
    separator: ' – '
  }
}`,...(M=(A=g.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};const Ae=["DatePickerCalendarSimple"];export{g as DatePickerCalendarSimple,Ae as __namedExportsOrder,Ie as default};

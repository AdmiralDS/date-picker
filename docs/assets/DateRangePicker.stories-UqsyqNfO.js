import{p as Q,j as t}from"./typography.es-DJ4WRfsu.js";import"./index-Btqlrfhk.js";import{r}from"./index-RYns6xqu.js";import{d as _}from"./index-DRhuP2Fw.js";import{D as U}from"./index-B5DplVaH.js";import{c as X,I as Z,a as ee,b as ue,S as ae,P as te,d as re,u as ne}from"./index.esm-BaAWnnfM.js";import{r as j}from"./ChevronRightOutline-Co8RFQj6.js";import{W as oe,b as C,T as I}from"./common-BAZ6WN4c.js";import"./index-C_itu0Qr.js";import"./index-CMyXzVPU.js";import"./index-CGqvIBP2.js";import"./DropdownProvider.es-DMHOw4-n.js";import"./index-BQaZqJLe.js";import"./index-DasWAY_w.js";import"./index-C1y2u716.js";import"./index-BB_GbEMN.js";import"./index-zA77_DI9.js";import"./index-HQ-6P-XK.js";import"./index-CfQpmz-e.js";const se=Q(U).withConfig({displayName:"DateRangePicker__Calendar",componentId:"sc-a8623061-0"})(["border:none;box-shadow:none;"]),ie=u=>u?u.format("DD.MM.YYYY"):"",le=u=>_(u,"DD.MM.YYYY"),c=r.forwardRef(({inputProps:u={},separator:s=" – ",format:p=ie,parce:d=le,...y},v)=>{const[n,m]=r.useState(u.value),[T,b]=r.useState(_()),[f,h]=r.useState(),[k,i]=r.useState(!1),[R,S]=r.useState(!1),F=r.useRef(null),o=r.useRef(null),[D,l]=r.useState(!1),[x,Y]=r.useState("dates"),w=e=>{e.preventDefault(),R&&l(a=>!a)},W=e=>{console.log(`handleSelectedDateValueChange: ${e}`);const[a,P]=e;if(x==="dates"){const J=`${p(a)}${s}${p(P)}`;m(J),i(!1),P&&l(!1)}},q=e=>{h(e?p(e):void 0),x==="dates"&&i(!!e)},O=e=>{Y(e),e!=="dates"&&(h(void 0),i(!1))},z=e=>{var a;l(!1),S(!1),i(!1),(a=u.onBlur)==null||a.call(u,e)},L=e=>{var a;l(!0),S(!0),(a=u.onFocus)==null||a.call(u,e)},N=e=>{var a;e.target===e.currentTarget&&e.preventDefault(),R||(a=o.current)==null||a.focus()},H=e=>{e.key==="Enter"&&D&&(e.preventDefault(),l(!1),k&&f&&(m(f),i(!1)))},$={...y,ref:j(F,v),onMouseDown:N};r.useEffect(()=>{const e=o.current;if(e){const{value:a}=e;n!==a&&X(o.current,{value:n})}},[n]),r.useEffect(()=>{if(D&&o.current){const e=o.current,{value:a}=e;m(a)}},[D]),r.useEffect(()=>{function e(){const{value:a}=this;i(!1),a!==n&&(m(a),l(!0))}if(o.current){const a=o.current;return a.addEventListener("input",e,!0),()=>{a.removeEventListener("input",e,!0)}}},[n]);const G=u.ref!==void 0?j(o,u.ref):o,K={...u,ref:G,onBlur:z,onFocus:L,tmpValue:k?f:void 0},E=n?n.split(s).map(d):[];return t.jsxs(Z,{...$,children:[t.jsx(ee,{...K,onKeyDown:H}),t.jsx(ue,{icon:ae,onMouseDown:w}),D&&t.jsx(te,{targetElement:F.current,alignSelf:"auto",onMouseDown:e=>e.preventDefault(),children:t.jsx(se,{onViewModeChange:O,dateValue:T,onDateValueChange:e=>b(e),selectedDateRangeValue:[E[0],E[1]],onSelectedDateRangeValueChange:W,activeDateValue:d(f),onActiveDateValueChange:q})})]})});c.displayName="DateRangePicker";try{c.displayName="DateRangePicker",c.__docgenInfo={description:"Компонент DateRangePicker",displayName:"DateRangePicker",props:{separator:{defaultValue:{value:"–"},description:"",name:"separator",required:!1,type:{name:"string"}},inputProps:{defaultValue:{value:"{}"},description:"Пропсы внутреннего инпута",name:"inputProps",required:!1,type:{name:"InputLineProps"}},format:{defaultValue:{value:"(date?: Dayjs) => (date ? date.format('DD.MM.YYYY') : '')"},description:"Функция для конвертации значение календаря в строку инпута",name:"format",required:!1,type:{name:"((date?: Dayjs) => string)"}},parce:{defaultValue:{value:"(date?: string) => dayjs(date, 'DD.MM.YYYY')"},description:"Функция для конвертации строки инпута в значение календаря",name:"parce",required:!1,type:{name:"((date?: string) => Dayjs) | undefined"}},"data-size":{defaultValue:null,description:"Размеры компонента",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}}}}}catch{}const V=({inputProps:u={},...s})=>{const[p,d]=r.useState(u.value),y=r.useMemo(()=>re({mode:"dd/mm/yyyy",rangeSeparator:s.separator}),[s.separator]),v=ne({options:y});return t.jsxs(oe,{children:[t.jsx(C,{children:t.jsx(c,{...s,inputProps:{...u,value:p,onInput:n=>d(n.currentTarget.value),ref:v}})}),t.jsxs(C,{children:[t.jsx(I,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор даты"}),t.jsxs(I,{font:"Body/Body 2 Long",as:"div",children:["Высота календаря постоянна и состоит из шести рядов чисел. Текущий месяц начинается с первого ряда и, если его даты не заходят на шестой ряд, то там ставятся пустые ячейки (Empty).",t.jsx("br",{}),t.jsx("br",{}),"Текущая дата выделяется обводкой в виде черного кружка. Ховер на дате подсвечивается обводкой синего цвета. Выбранная дата отмечается синим кружком.",t.jsx("br",{}),"При ховере на месяце, годе, стрелках вправо/влево появляются тултипы с подсказками.",t.jsx("br",{}),t.jsx("br",{}),"Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год, либо нажав на месяц/год в шапке календаря"]})]})]})};try{V.displayName="DateRangePickerSimpleTemplate",V.__docgenInfo={description:"",displayName:"DateRangePickerSimpleTemplate",props:{separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"string"}},inputProps:{defaultValue:{value:"{}"},description:"Пропсы внутреннего инпута",name:"inputProps",required:!1,type:{name:"InputLineProps"}},format:{defaultValue:null,description:"Функция для конвертации значение календаря в строку инпута",name:"format",required:!1,type:{name:"((date?: Dayjs) => string)"}},parce:{defaultValue:null,description:"Функция для конвертации строки инпута в значение календаря",name:"parce",required:!1,type:{name:"((date?: string) => Dayjs) | undefined"}},"data-size":{defaultValue:null,description:"Размеры компонента",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}}}}}catch{}const pe=`import { T } from '@admiral-ds/react-ui';
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
`,Ie={title:"Admiral-2.1/Date Picker/DateRangePicker",component:c,parameters:{docs:{source:{language:"tsx"}}},argTypes:{}},g={render:u=>t.jsx(V,{...u}),parameters:{docs:{source:{code:pe}}},name:"Выбор даты",args:{inputProps:{placeholder:"Введите интервал дат",dataPlaceholder:"дд.мм.гггг – дд.мм.гггг",value:"11."},separator:" – "}};var B,M,A;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(M=g.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const Be=["DatePickerCalendarSimple"];export{g as DatePickerCalendarSimple,Be as __namedExportsOrder,Ie as default};

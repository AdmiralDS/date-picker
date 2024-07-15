import{p as ae,j as t}from"./typography.es-DJ4WRfsu.js";import"./index-Cv72DKl5.js";import{r}from"./index-RYns6xqu.js";import{d as _}from"./index-BdAXGuOE.js";import{D as te}from"./index-CLzSM287.js";import{c as re,I as ne,a as se,b as oe,S as ie,P as le,d as pe,u as ce}from"./index.esm-C0qL2bSl.js";import{r as j}from"./ChevronRightOutline-CjgoEkVb.js";import{W as de,b as C,T as I}from"./common-CJaXr_SW.js";import"./index--RnFdRoh.js";import"./index-B8KLrRBf.js";import"./index-9KIR3UVS.js";import"./DropdownProvider.es-DMHOw4-n.js";import"./index-BQaZqJLe.js";import"./index-DDkwD5gS.js";import"./index-BfQKxCpe.js";import"./index-bQnesnJw.js";import"./index-ti-zF8g1.js";import"./index-CmTVwR-P.js";import"./index-D9zx5Urx.js";const me=ae(te).withConfig({displayName:"DateRangePicker__Calendar",componentId:"sc-1dhjk2d-0"})(["border:none;box-shadow:none;"]),fe=u=>u?u.format("DD.MM.YYYY"):"",b=u=>_(u,"DD.MM.YYYY");function A(u,n=" – ",o=b){const[l,p]=u?u.split(n).map(o):[];return l&&l.isAfter(p)?[p,l]:[l,p]}const D=r.forwardRef(({inputProps:u={},separator:n=" – ",format:o=fe,parce:l=b,...p},R)=>{const[i,g]=r.useState(u.value),[Y,w]=r.useState(_()),[c,k]=r.useState(),[h,d]=r.useState(!1),[E,F]=r.useState(!1),x=r.useRef(null),s=r.useRef(null),[y,m]=r.useState(!1),[P,W]=r.useState("dates"),[f,q]=r.useState("start"),O=e=>{e.preventDefault(),E&&m(a=>!a)},z=e=>{const[a,v]=e;if(P==="dates"){const ue=`${o(a)}${n}${o(v)}`;g(ue),f==="start"?q("end"):f==="end"&&(d(!1),m(!1))}},L=e=>{const[a,v]=(c==null?void 0:c.split(n))??[];f==="start"?k(e?o(e)+(v?n+v:""):""):f==="end"&&k(e?a+n+o(e):""),P==="dates"&&d(!!e)},N=e=>{W(e),e!=="dates"&&(k(void 0),d(!1))},H=e=>{var a;m(!1),F(!1),d(!1),(a=u.onBlur)==null||a.call(u,e)},G=e=>{var a;m(!0),F(!0),(a=u.onFocus)==null||a.call(u,e)},$=e=>{var a;e.target===e.currentTarget&&e.preventDefault(),E||(a=s.current)==null||a.focus()},K=e=>{e.key==="Enter"&&y&&(e.preventDefault(),m(!1),h&&c&&(g(c),d(!1)))},J={...p,ref:j(x,R),onMouseDown:$};r.useEffect(()=>{const e=s.current;if(e){const{value:a}=e;i!==a&&re(s.current,{value:i})}},[i]),r.useEffect(()=>{if(y&&s.current){const e=s.current,{value:a}=e;g(a)}},[y]),r.useEffect(()=>{function e(){const{value:a}=this;d(!1),a!==i&&(g(a),m(!0))}if(s.current){const a=s.current;return a.addEventListener("input",e,!0),()=>{a.removeEventListener("input",e,!0)}}},[i]);const Q=u.ref!==void 0?j(s,u.ref):s,U={...u,ref:Q,onBlur:H,onFocus:G,tmpValue:h?c:void 0},X=A(i),[Z,ee]=A(c);return t.jsxs(ne,{...J,children:[t.jsx(se,{...U,onKeyDown:K}),t.jsx(oe,{icon:ie,onMouseDown:O}),y&&t.jsx(le,{targetElement:x.current,alignSelf:"auto",onMouseDown:e=>e.preventDefault(),children:t.jsx(me,{onViewModeChange:N,dateValue:Y,onDateValueChange:e=>w(e),selectedDateRangeValue:X,onSelectedDateRangeValueChange:z,activeDateValue:f==="start"?Z:ee,onActiveDateValueChange:L})})]})});D.displayName="DateRangePicker";try{D.displayName="DateRangePicker",D.__docgenInfo={description:"Компонент DateRangePicker",displayName:"DateRangePicker",props:{inputProps:{defaultValue:{value:"{}"},description:"Пропсы внутреннего инпута",name:"inputProps",required:!1,type:{name:"InputLineProps"}},separator:{defaultValue:{value:"–"},description:"",name:"separator",required:!1,type:{name:"string"}},format:{defaultValue:{value:"(date?: Dayjs) => (date ? date.format('DD.MM.YYYY') : '')"},description:"Функция для конвертации значение календаря в строку инпута",name:"format",required:!1,type:{name:"((date?: Dayjs) => string)"}},parce:{defaultValue:{value:"(date?: string) => dayjs(date, 'DD.MM.YYYY')"},description:"Функция для конвертации строки инпута в значение календаря",name:"parce",required:!1,type:{name:"((date?: string) => Dayjs) | undefined"}},"data-size":{defaultValue:null,description:"Размеры компонента",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}}}}}catch{}const S=({inputProps:u={},...n})=>{const[o,l]=r.useState(u.value),p=r.useMemo(()=>pe({mode:"dd/mm/yyyy",rangeSeparator:n.separator}),[n.separator]),R=ce({options:p});return t.jsxs(de,{children:[t.jsx(C,{children:t.jsx(D,{...n,inputProps:{...u,value:o,onInput:i=>l(i.currentTarget.value),ref:R}})}),t.jsxs(C,{children:[t.jsx(I,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор даты"}),t.jsxs(I,{font:"Body/Body 2 Long",as:"div",children:["Высота календаря постоянна и состоит из шести рядов чисел. Текущий месяц начинается с первого ряда и, если его даты не заходят на шестой ряд, то там ставятся пустые ячейки (Empty).",t.jsx("br",{}),t.jsx("br",{}),"Текущая дата выделяется обводкой в виде черного кружка. Ховер на дате подсвечивается обводкой синего цвета. Выбранная дата отмечается синим кружком.",t.jsx("br",{}),"При ховере на месяце, годе, стрелках вправо/влево появляются тултипы с подсказками.",t.jsx("br",{}),t.jsx("br",{}),"Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год, либо нажав на месяц/год в шапке календаря"]})]})]})};try{S.displayName="DateRangePickerSimpleTemplate",S.__docgenInfo={description:"",displayName:"DateRangePickerSimpleTemplate",props:{inputProps:{defaultValue:{value:"{}"},description:"Пропсы внутреннего инпута",name:"inputProps",required:!1,type:{name:"InputLineProps"}},separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"string"}},format:{defaultValue:null,description:"Функция для конвертации значение календаря в строку инпута",name:"format",required:!1,type:{name:"((date?: Dayjs) => string)"}},parce:{defaultValue:null,description:"Функция для конвертации строки инпута в значение календаря",name:"parce",required:!1,type:{name:"((date?: string) => Dayjs) | undefined"}},"data-size":{defaultValue:null,description:"Размеры компонента",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}}}}}catch{}const De=`import { T } from '@admiral-ds/react-ui';
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
`,_e={title:"Admiral-2.1/Date Picker/DateRangePicker",component:D,parameters:{docs:{source:{language:"tsx"}}},argTypes:{}},V={render:u=>t.jsx(S,{...u}),parameters:{docs:{source:{code:De}}},name:"Выбор даты",args:{inputProps:{placeholder:"Введите интервал дат",dataPlaceholder:"дд.мм.гггг – дд.мм.гггг",value:"11."},separator:" – "}};var B,M,T;V.parameters={...V.parameters,docs:{...(B=V.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(T=(M=V.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const be=["DatePickerCalendarSimple"];export{V as DatePickerCalendarSimple,be as __namedExportsOrder,_e as default};

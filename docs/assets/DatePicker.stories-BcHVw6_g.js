import{j as a}from"./tslib.es6-gXVSDp23.js";import"./index-CTEAhEde.js";import{r}from"./index-uubelm5h.js";import{p as K}from"./typography.es-zceevOJ_.js";import{d as E}from"./index-Lg2VQURa.js";import{D as J}from"./index-BLlJrBUf.js";import{c as Q,I as U,a as X,b as Z,S as $,P as uu,m as eu,u as tu}from"./index.esm-CdR71rmj.js";import{r as C}from"./ChevronRightOutline-D_ms2TvK.js";import{W as au,b as S,T as j}from"./common-y18Jnvfl.js";import"./index-DH4-umzn.js";import"./index-Bbf-x86c.js";import"./index-CQzR3wtX.js";import"./DropdownProvider.es-CSByVTCf.js";import"./index-Dei0BBcc.js";import"./index-Os4r39UD.js";import"./index-BlQhhH40.js";import"./index-DuZs-Nu7.js";import"./index-DQmo8QVe.js";import"./index-BAqvSN_y.js";import"./index-Psa4Kny8.js";const ru=K(J).withConfig({displayName:"DatePicker__Calendar",componentId:"sc-8082088-0"})(["border:none;box-shadow:none;"]),nu=t=>t.format("DD.MM.YYYY"),su=t=>E(t,"DD.MM.YYYY"),p=r.forwardRef(({inputProps:t={},format:c=nu,parce:l=su,...y},v)=>{const[n,d]=r.useState(t.value),[T,V]=r.useState(E()),[m,k]=r.useState(),[h,o]=r.useState(!1),[g,x]=r.useState(!1),B=r.useRef(null),s=r.useRef(null),[f,i]=r.useState(!1),[P,M]=r.useState("dates"),b=u=>{u.preventDefault(),g&&i(e=>!e)},Y=u=>{if(P==="dates"){const e=c(u);d(e),o(!1),i(!1)}},w=u=>{k(u?c(u):void 0),P==="dates"&&o(!!u)},R=u=>{M(u),u!=="dates"&&(k(void 0),o(!1))},W=u=>{var e;i(!1),x(!1),o(!1),(e=t.onBlur)==null||e.call(t,u)},O=u=>{var e;i(!0),x(!0),(e=t.onFocus)==null||e.call(t,u)},q=u=>{var e;u.target===u.currentTarget&&u.preventDefault(),g||(e=s.current)==null||e.focus()},z=u=>{u.key==="Enter"&&f&&(u.preventDefault(),i(!1),h&&m&&(d(m),o(!1)))},L={...y,ref:C(B,v),onMouseDown:q};r.useEffect(()=>{const u=s.current;if(u){const{value:e}=u;n!==e&&Q(s.current,{value:n})}},[n]),r.useEffect(()=>{if(f&&s.current){const u=s.current,{value:e}=u;d(e)}},[f]),r.useEffect(()=>{function u(){const{value:e}=this;o(!1),e!==n&&(d(e),i(!0))}if(s.current){const e=s.current;return e.addEventListener("input",u,!0),()=>{e.removeEventListener("input",u,!0)}}},[n]),r.useEffect(()=>{const u=l(n);u.isValid()?V(u):n||V(E())},[n]);const N=t.ref!==void 0?C(s,t.ref):s,H={...t,ref:N,onBlur:W,onFocus:O,tmpValue:h?m:void 0},G=l(n);return a.jsxs(U,{...L,children:[a.jsx(X,{...H,onKeyDown:z}),a.jsx(Z,{icon:$,onMouseDown:b}),f&&a.jsx(uu,{targetElement:B.current,alignSelf:"auto",children:a.jsx(ru,{onViewModeChange:R,dateValue:T,onDateValueChange:u=>V(u),selectedDateValue:G,onSelectedDateValueChange:Y,activeDateValue:l(m),onActiveDateValueChange:w})})]})});p.displayName="DatePicker";try{p.displayName="DatePicker",p.__docgenInfo={description:"Компонент DatePicker",displayName:"DatePicker",props:{inputProps:{defaultValue:{value:"{}"},description:"Пропсы внутреннего инпута",name:"inputProps",required:!1,type:{name:"InputLineProps"}},format:{defaultValue:{value:"(date: Dayjs) => date.format('DD.MM.YYYY')"},description:"Функция для конвертации значение календаря в строку инпута",name:"format",required:!1,type:{name:"((date: Dayjs) => string)"}},parce:{defaultValue:{value:"(date?: string) => dayjs(date, 'DD.MM.YYYY')"},description:"Функция для конвертации строки инпута в значение календаря",name:"parce",required:!1,type:{name:"((date?: string) => Dayjs)"}},"data-size":{defaultValue:null,description:"Размеры компонента",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"s"'},{value:'"xl"'}]}}}}}catch{}const ou=eu({mode:"dd/mm/yyyy"}),F=({inputProps:t={},...c})=>{const[l,y]=r.useState(t.value),v=tu({options:ou});return a.jsxs(au,{children:[a.jsx(S,{children:a.jsx(p,{...c,inputProps:{...t,value:l,onInput:n=>y(n.currentTarget.value),ref:v}})}),a.jsxs(S,{children:[a.jsx(j,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор даты"}),a.jsxs(j,{font:"Body/Body 2 Long",as:"div",children:["Высота календаря постоянна и состоит из шести рядов чисел. Текущий месяц начинается с первого ряда и, если его даты не заходят на шестой ряд, то там ставятся пустые ячейки (Empty).",a.jsx("br",{}),a.jsx("br",{}),"Текущая дата выделяется обводкой в виде черного кружка. Ховер на дате подсвечивается обводкой синего цвета. Выбранная дата отмечается синим кружком.",a.jsx("br",{}),"При ховере на месяце, годе, стрелках вправо/влево появляются тултипы с подсказками.",a.jsx("br",{}),a.jsx("br",{}),"Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год, либо нажав на месяц/год в шапке календаря"]})]})]})};try{F.displayName="DatePickerSimpleTemplate",F.__docgenInfo={description:"",displayName:"DatePickerSimpleTemplate",props:{inputProps:{defaultValue:{value:"{}"},description:"Пропсы внутреннего инпута",name:"inputProps",required:!1,type:{name:"InputLineProps"}},format:{defaultValue:null,description:"Функция для конвертации значение календаря в строку инпута",name:"format",required:!1,type:{name:"((date: Dayjs) => string)"}},parce:{defaultValue:null,description:"Функция для конвертации строки инпута в значение календаря",name:"parce",required:!1,type:{name:"((date?: string) => Dayjs)"}},"data-size":{defaultValue:null,description:"Размеры компонента",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"s"'},{value:'"xl"'}]}}}}}catch{}const iu=`import { T } from '@admiral-ds/react-ui';
import { DatePicker } from '@admiral-ds/date-picker';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { WrapperHorizontal, WrapperVertical } from '#src/stories/common.tsx';
import { useState, type ComponentPropsWithoutRef } from 'react';

const dateOptions = maskitoDateOptionsGenerator({ mode: 'dd/mm/yyyy' });

export const DatePickerSimpleTemplate = ({
  inputProps = {},
  ...props
}: ComponentPropsWithoutRef<typeof DatePicker>) => {
  const [inputValue, setInputValue] = useState(inputProps.value);
  const maskedDateInputRef = useMaskito({ options: dateOptions });
  return (
    <WrapperHorizontal>
      <WrapperVertical>
        <DatePicker
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
`,ju={title:"Admiral-2.1/Date Picker/DatePicker",component:p,parameters:{docs:{source:{language:"tsx"}}},argTypes:{}},D={render:t=>a.jsx(F,{...t}),parameters:{docs:{source:{code:iu}}},name:"Выбор даты",args:{inputProps:{placeholder:"Введите дату",dataPlaceholder:"дд.мм.гггг",value:"11."}}};var I,A,_;D.parameters={...D.parameters,docs:{...(I=D.parameters)==null?void 0:I.docs,source:{originalSource:`{
  // обязательно для правильной работы хуков внутри темплейта
  render: props => <DatePickerSimpleTemplate {...props} />,
  parameters: {
    docs: {
      source: {
        code: DatePickerSimpleTemplateRaw
      }
    }
  },
  name: 'Выбор даты',
  args: {
    inputProps: {
      placeholder: 'Введите дату',
      dataPlaceholder: 'дд.мм.гггг',
      value: '11.'
    }
  }
}`,...(_=(A=D.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const Iu=["DatePickerCalendarSimple"];export{D as DatePickerCalendarSimple,Iu as __namedExportsOrder,ju as default};

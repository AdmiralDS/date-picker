import{p as K,j as a}from"./typography.es-DJ4WRfsu.js";import"./index-DUrvFc95.js";import{d as k}from"./index-DnXc0ZDD.js";import{r}from"./index-RYns6xqu.js";import{D as J}from"./index-CqwljaRe.js";import{c as Q,I as U,a as X,b as Z,S as $,P as ee,m as ue,u as te}from"./index.esm-IeLQpd8b.js";import{r as j}from"./ChevronRightOutline-4h1Amxbj.js";import{W as ae,a as C,T as I}from"./common-C0nfkXAM.js";import"./index-rLJdUzAE.js";import"./index-DisOlbzP.js";import"./index-DjVRa9xT.js";import"./index-CMIGvJsC.js";import"./index-f2gF0HFA.js";import"./DropdownProvider.es-DMHOw4-n.js";import"./index-BQaZqJLe.js";const re=K(J).withConfig({displayName:"DatePicker__Calendar",componentId:"sc-8082088-0"})(["border:none;box-shadow:none;"]),ne=t=>t.format("DD.MM.YYYY"),se=t=>k(t,"DD.MM.YYYY"),p=r.forwardRef(({inputProps:t={},format:c=ne,parce:l=se,...y},v)=>{const[n,d]=r.useState(t.value),[T,V]=r.useState(k()),[m,g]=r.useState(),[F,o]=r.useState(!1),[x,E]=r.useState(!1),P=r.useRef(null),s=r.useRef(null),[f,i]=r.useState(!1),[S,M]=r.useState("dates"),b=e=>{e.preventDefault(),x&&i(u=>!u)},Y=e=>{if(S==="dates"){const u=c(e);d(u),o(!1),i(!1)}},w=e=>{g(e?c(e):void 0),S==="dates"&&o(!!e)},R=e=>{M(e),e!=="dates"&&(g(void 0),o(!1))},W=e=>{var u;i(!1),E(!1),o(!1),(u=t.onBlur)==null||u.call(t,e)},O=e=>{var u;i(!0),E(!0),(u=t.onFocus)==null||u.call(t,e)},q=e=>{var u;e.target===e.currentTarget&&e.preventDefault(),x||(u=s.current)==null||u.focus()},z=e=>{e.key==="Enter"&&f&&(e.preventDefault(),i(!1),F&&m&&(d(m),o(!1)))},L={...y,ref:j(P,v),onMouseDown:q};r.useEffect(()=>{const e=s.current;if(e){const{value:u}=e;n!==u&&Q(s.current,{value:n})}},[n]),r.useEffect(()=>{if(f&&s.current){const e=s.current,{value:u}=e;d(u)}},[f]),r.useEffect(()=>{function e(){const{value:u}=this;o(!1),u!==n&&(d(u),i(!0))}if(s.current){const u=s.current;return u.addEventListener("input",e,!0),()=>{u.removeEventListener("input",e,!0)}}},[n]),r.useEffect(()=>{const e=l(n);e.isValid()?V(e):n||V(k())},[n]);const N=t.ref!==void 0?j(s,t.ref):s,H={...t,ref:N,onBlur:W,onFocus:O,tmpValue:F?m:void 0},G=l(n);return a.jsxs(U,{...L,children:[a.jsx(X,{...H,onKeyDown:z}),a.jsx(Z,{icon:$,onMouseDown:b}),f&&a.jsx(ee,{targetElement:P.current,alignSelf:"auto",children:a.jsx(re,{onViewModeChange:R,dateValue:T,onDateValueChange:e=>V(e),selectedDateValue:G,onSelectedDateValueChange:Y,activeDateValue:l(m),onActiveDateValueChange:w})})]})});p.displayName="DatePicker";try{p.displayName="DatePicker",p.__docgenInfo={description:"Компонент DatePicker",displayName:"DatePicker",props:{inputProps:{defaultValue:{value:"{}"},description:"Пропсы внутреннего инпута",name:"inputProps",required:!1,type:{name:"InputLineProps"}},format:{defaultValue:{value:"(date: Dayjs) => date.format('DD.MM.YYYY')"},description:"Функция для конвертации значение календаря в строку инпута",name:"format",required:!1,type:{name:"((date: Dayjs) => string)"}},parce:{defaultValue:{value:"(date?: string) => dayjs(date, 'DD.MM.YYYY')"},description:"Функция для конвертации строки инпута в значение календаря",name:"parce",required:!1,type:{name:"((date?: string) => Dayjs)"}},"data-size":{defaultValue:null,description:"Размеры компонента",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}}}}}catch{}const oe=ue({mode:"dd/mm/yyyy"}),h=({inputProps:t={},...c})=>{const[l,y]=r.useState(t.value),v=te({options:oe});return a.jsxs(ae,{children:[a.jsx(C,{children:a.jsx(p,{...c,inputProps:{...t,value:l,onInput:n=>y(n.currentTarget.value),ref:v}})}),a.jsxs(C,{children:[a.jsx(I,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор даты"}),a.jsxs(I,{font:"Body/Body 2 Long",as:"div",children:["Высота календаря постоянна и состоит из шести рядов чисел. Текущий месяц начинается с первого ряда и, если его даты не заходят на шестой ряд, то там ставятся пустые ячейки (Empty).",a.jsx("br",{}),a.jsx("br",{}),"Текущая дата выделяется обводкой в виде черного кружка. Ховер на дате подсвечивается обводкой синего цвета. Выбранная дата отмечается синим кружком.",a.jsx("br",{}),"При ховере на месяце, годе, стрелках вправо/влево появляются тултипы с подсказками.",a.jsx("br",{}),a.jsx("br",{}),"Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год, либо нажав на месяц/год в шапке календаря"]})]})]})};try{h.displayName="DatePickerSimpleTemplate",h.__docgenInfo={description:"",displayName:"DatePickerSimpleTemplate",props:{inputProps:{defaultValue:{value:"{}"},description:"Пропсы внутреннего инпута",name:"inputProps",required:!1,type:{name:"InputLineProps"}},format:{defaultValue:null,description:"Функция для конвертации значение календаря в строку инпута",name:"format",required:!1,type:{name:"((date: Dayjs) => string)"}},parce:{defaultValue:null,description:"Функция для конвертации строки инпута в значение календаря",name:"parce",required:!1,type:{name:"((date?: string) => Dayjs)"}},"data-size":{defaultValue:null,description:"Размеры компонента",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}}}}}catch{}const ie=`import { T } from '@admiral-ds/react-ui';
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
`,Ee={title:"Admiral-2.1/Date Picker/DatePicker",component:p,parameters:{docs:{source:{language:"tsx"}}},argTypes:{}},D={render:t=>a.jsx(h,{...t}),parameters:{docs:{source:{code:ie}}},name:"Выбор даты",args:{inputProps:{placeholder:"Введите дату",dataPlaceholder:"дд.мм.гггг",value:"11."}}};var B,A,_;D.parameters={...D.parameters,docs:{...(B=D.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(_=(A=D.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const Pe=["DatePickerCalendarSimple"];export{D as DatePickerCalendarSimple,Pe as __namedExportsOrder,Ee as default};

import{j as m}from"./tslib.es6-gXVSDp23.js";import"./index-K5lteAgc.js";import{r as h}from"./index-uubelm5h.js";import{D as Se}from"./index-D4xOXAf0.js";import{p as D}from"./typography.es-zceevOJ_.js";import{P as Ee,r as P,p as we}from"./ChevronRightOutline-DAmKuVUD.js";import{u as De,D as be,a as _e}from"./DropdownProvider.es-CSByVTCf.js";import{B as Ie,d as X}from"./index-B-lRfg65.js";import{W as Ce,d as J,T as Q}from"./common-B4QALF2I.js";import"./index-CEeWF_8x.js";import"./index-BB6V8Vwr.js";import"./index-MLNV-xYt.js";import"./index-Dei0BBcc.js";import"./index-DecqpaNy.js";import"./index-ClXWm04v.js";import"./index-DFy_Fcck.js";import"./index-DECRG3v1.js";import"./index-DtnkVuXW.js";import"./index-DPFgU4GL.js";function Te(e,t){return e.value!==t.value||e.selectionStart!==t.selectionStart||e.selectionEnd!==t.selectionEnd}function ke(e,t){var r;const{value:s=e.value,selectionStart:n,selectionEnd:o}=t;if(Te(e,{value:s,selectionStart:n,selectionEnd:o})){const i=(r=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"value"))==null?void 0:r.set;let l;i==null||i.call(e,s),typeof n=="number"&&typeof o=="number"&&e.setSelectionRange(n,o),typeof Event=="function"?l=new Event("input",{bubbles:!0}):(l=document.createEvent("Event"),l.initEvent("input",!0,!0)),e.dispatchEvent(l)}}const Ve=(e,t)=>{const s=h.useCallback(n=>{e.every(o=>o.current&&!o.current.contains(n.target))&&t(n)},[t,e]);h.useEffect(()=>(document.addEventListener("mousedown",s,!0),document.addEventListener("touchstart",s),()=>{document.removeEventListener("mousedown",s,!0),document.removeEventListener("touchstart",s)}),[s])};function Ae(e,t){const s=h.useRef(null),n=h.useRef(e);return h.useEffect(()=>{n.current=e},[e]),h.useEffect(()=>(s.current=window.setInterval(()=>n.current(),t),()=>window.clearInterval(s.current||0)),[t]),s}const Ne=D.div`
  pointer-events: initial;
  margin: 8px 0;
  flex: 0 0 auto;
  ${e=>e.$alignSelf?`align-self: ${e.$alignSelf};`:""};
  max-width: calc(100vw - 32px);
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;

  &:focus-visible {
    border: 2px solid blue;
  }

  ${e=>e.$dropContainerCssMixin}
`,Le=D.div`
  pointer-events: none;
  height: 100%;
  flex: 0 0 auto;
`,Pe=D(Ee)`
  display: flex;
  flex-direction: ${e=>e.$reverse?"column-reverse":"column"};
  flex-wrap: nowrap;
`,ue=h.forwardRef(({targetRef:e,targetElement:t,onClickOutside:s=()=>null,className:n="",alignSelf:o,dropContainerCssMixin:r,...i},l)=>{const a=h.useRef(null),[c,u]=h.useState(!1),d=t??(e==null?void 0:e.current),{addDropdown:p,removeDropdown:g,dropdowns:E}=De(a),{rootRef:S}=h.useContext(be);Ve([a],v=>{_e(v,E)&&s(v)}),h.useLayoutEffect(()=>{var v;a.current!==document.activeElement&&((v=a==null?void 0:a.current)==null||v.focus())},[]);const x=h.useCallback(()=>{const v=a.current;if(v&&d){const b=v.getBoundingClientRect(),w=d.getBoundingClientRect(),I=window.innerHeight,C=window.innerWidth;if(I-b.bottom<0&&w.top>I-w.bottom?c||u(!0):(w.bottom+(w.top-b.top)<I-8||w.top<I-w.bottom)&&c&&u(!1),o&&o!=="auto")return;const f=b.right-b.left,y=C-w.left>=f,T=w.right-16>=f,K=f>w.width;if(T||y)v.style.transform="translateX(0)",T&&y?v.style.alignSelf="flex-end":K&&!T&&y?v.style.alignSelf="flex-start":K&&!y&&T&&(v.style.alignSelf="flex-end");else{v.style.alignSelf="center";const xe=(C-b.width)/2-(w.left-(f-w.width)/2);v.style.transform=`translateX(${xe}px)`}}},[c,e,t]);return Ae(x,100),h.useEffect(()=>{a.current&&(a.current.style.opacity="1")},[]),h.useLayoutEffect(()=>(p==null||p(a),()=>{g==null||g(a)}),[]),m.jsx(m.Fragment,{children:m.jsxs(Pe,{targetElement:d,$reverse:c,rootRef:S,children:[m.jsx(Le,{}),m.jsx(Ne,{ref:P(l,a),...i,className:n+" dropdown-container",$alignSelf:o,$dropContainerCssMixin:r})]})})});ue.displayName="DropdownContainer";const ce=D(ue)`
  box-shadow: var(--admiral-box-shadow-Shadow08, ${e=>we(e.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${e=>Ie(e.theme.shape)});
  overflow: hidden;
  width: max-content;
`;ce.displayName="StyledDropdownContainer";const B=D.div.withConfig({displayName:"InputBox__FocusBox",componentId:"sc-c70185ac-0"})(["cursor:text;display:inline-flex;overflow:hidden;flex-wrap:nowrap;flex-direction:row;align-items:stretch;height:40px;padding:0;padding-inline-start:16px;padding-inline-end:16px;& *{"," line-height:40px;}&[data-size='xl']{height:56px;& *{line-height:56px;}}&[data-size='s']{height:32px;padding-inline-start:12px;padding-inline-end:12px;& *{"," line-height:32px;}}box-sizing:border-box;border-radius:4px;background:transparent;transform:translate3d(0,0,0);box-shadow:0px 0px 0px 1px "," inset;&:hover:not(:focus-within){box-shadow:0px 0px 0px 1px "," inset;}&:focus-within{box-shadow:0px 0px 0px 2px "," inset;}transition:box-shadow 0.3s ease-in-out;"],e=>e.theme.typography["Body/Body 1 Long"],e=>e.theme.typography["Body/Body 2 Long"],e=>e.theme.color["Neutral/Neutral 40"],e=>e.theme.color["Neutral/Neutral 60"],e=>e.theme.color["Primary/Primary 60 Main"]),O=B;try{B.displayName="FocusBox",B.__docgenInfo={description:"",displayName:"FocusBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{O.displayName="InputBox",O.__docgenInfo={description:"",displayName:"InputBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const j=D.input.withConfig({displayName:"InputLine__StyledInputLine",componentId:"sc-2adeaa54-0"})(["border:none;outline:none;appearance:none;background-image:none;background-color:transparent;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;text-overflow:ellipsis;padding:0;color:",";::placeholder{color:",";}"],e=>e.$isTmpValue?e.theme.color["Neutral/Neutral 30"]:e.theme.color["Neutral/Neutral 90"],e=>e.theme.color["Neutral/Neutral 50"]),de=D.span.withConfig({displayName:"InputLine__Visible",componentId:"sc-2adeaa54-1"})(["color:",";transition:color 0.3s ease-in-out;"],e=>e.theme.color["Neutral/Neutral 30"]),Re=D.span.withConfig({displayName:"InputLine__Invisible",componentId:"sc-2adeaa54-2"})(["color:transparent;"]),Me=D.div.withConfig({displayName:"InputLine__InputLineContainer",componentId:"sc-2adeaa54-3"})(["position:relative;display:inline-block;&:focus-within ","{color:",";}"],de,e=>e.theme.color["Neutral/Neutral 50"]),Fe=D.div.withConfig({displayName:"InputLine__MaskBox",componentId:"sc-2adeaa54-4"})(["position:absolute;pointer-events:none;top:0;bottom:0;left:0;right:0;"]),W=h.forwardRef((e,t)=>{const{className:s,dataPlaceholder:n,tmpValue:o,...r}=e,i={className:s},l=e.placeholder,a=h.useRef(null),c=h.useRef(null),u=h.useRef(null);h.useEffect(()=>{const p=a.current,g=c.current,E=u.current;function S(){const{value:x}=this,v=x.length;g&&E&&(typeof l=="string"&&l.length>0&&x.length==0?(E.innerHTML="",g.innerHTML=""):(g.innerHTML=x,E.innerHTML=(n==null?void 0:n.substring(v))||""))}if(typeof n=="string"&&p&&g&&E)return S.apply(p),p.addEventListener("input",S),()=>p.removeEventListener("input",S)},[n,l,r.value,r.defaultValue,o]);const d=typeof o=="string";return m.jsxs(Me,{...i,children:[m.jsx(j,{ref:P(t,a),...r,$isTmpValue:d,value:d?o:r.value}),m.jsxs(Fe,{children:[m.jsx(Re,{ref:c}),m.jsx(de,{ref:u})]})]})});try{j.displayName="StyledInputLine",j.__docgenInfo={description:"",displayName:"StyledInputLine",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{W.displayName="InputLine",W.__docgenInfo={description:"",displayName:"InputLine",props:{dataPlaceholder:{defaultValue:null,description:"",name:"dataPlaceholder",required:!1,type:{name:"string"}},tmpValue:{defaultValue:null,description:"",name:"tmpValue",required:!1,type:{name:"string"}}}}}catch{}function H({icon:e,...t}){const s=e;return m.jsx(s,{...t})}const $=D(H).withConfig({displayName:"InputIconButton",componentId:"sc-9818fd62-0"})(["width:24px;[data-size='s'] &{width:20px;}& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral50,",");}[disabled] &&&{pointer-events:none;& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral30,",");}}&:hover{cursor:pointer;}&:hover *[fill^='#']{fill:var(--admiral-color-Primary_Primary70,",");}"],e=>e.theme.color["Neutral/Neutral 50"],e=>e.theme.color["Neutral/Neutral 30"],e=>e.theme.color["Primary/Primary 70"]);try{H.displayName="AnyIcon",H.__docgenInfo={description:"",displayName:"AnyIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}}}}}catch{}try{$.displayName="InputIconButton",$.__docgenInfo={description:"",displayName:"InputIconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Be=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",focusable:!1,...e},h.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M8.14 1.94c.35 0 .65.3.65.65v1.39h2.56V2.59c0-.35.29-.65.65-.65.35 0 .64.3.64.65v1.39h2.56V2.59c0-.35.29-.65.65-.65.35 0 .65.3.65.65v1.39h.5c1.64 0 3 1.34 3 3v10.13c0 1.67-1.34 3-3 3H7c-1.67 0-3-1.33-3-3V6.98c0-1.66 1.33-3 3-3h.48V2.59c0-.35.3-.65.66-.65m-.66 4.91V5.28H7c-.94 0-1.71.76-1.71 1.7v2.36H18.7V6.98c0-.94-.77-1.7-1.7-1.7h-.5v1.57c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65V5.28h-2.56v1.57c0 .36-.29.65-.64.65-.36 0-.65-.29-.65-.65V5.28H8.79v1.57a.655.655 0 0 1-1.31 0m11.22 3.8H5.29v6.46c0 .94.77 1.7 1.71 1.7h10c.93 0 1.7-.76 1.7-1.7zM7.52 13.99c0-.74.61-1.34 1.35-1.34h2.33c.74 0 1.34.6 1.34 1.34v1.32c0 .75-.6 1.36-1.34 1.36H8.87c-.74 0-1.35-.61-1.35-1.36zm1.32-.03c-.01.01-.01.02-.01.03v1.32c0 .02 0 .03.01.04s.02.01.03.01h2.33c.01 0 .02 0 .03-.01s.02-.02.02-.04v-1.32c0-.01-.01-.02-.02-.03s-.02-.01-.03-.01H8.87c-.01 0-.02 0-.03.01"})),q=ce;try{q.displayName="PopoverPanel",q.__docgenInfo={description:"",displayName:"PopoverPanel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Oe=D(Se).withConfig({displayName:"DatePicker__Calendar",componentId:"sc-4d9aa807-0"})(["border:none;box-shadow:none;"]),R=h.forwardRef(({inputProps:e={},...t},s)=>{const[n,o]=h.useState(e.value),[r,i]=h.useState(),[l,a]=h.useState(!1),c=h.useRef(null),u=h.useRef(null),[d,p]=h.useState(!1),g=f=>{f.preventDefault(),l&&p(y=>!y)},E=f=>{o(f.format("DD.MM.YYYY")),i(void 0),p(!1)},S=f=>{var y;p(!1),a(!1),i(void 0),(y=e.onBlur)==null||y.call(e,f)},x=f=>{var y;p(!0),a(!0),(y=e.onFocus)==null||y.call(e,f)},v=f=>{var y;f.target===f.currentTarget&&f.preventDefault(),l||(y=u.current)==null||y.focus()},b={...t,ref:P(c,s),onMouseDown:v};h.useEffect(()=>{u.current&&ke(u.current,{value:n})},[n]),h.useEffect(()=>{if(u.current){const f=u.current,{value:y}=f;o(y)}},[d]),h.useEffect(()=>{function f(){const{value:y}=this;o(y)}if(u.current){const y=u.current;y.addEventListener("input",f,!0);const{value:T}=y;return o(T),()=>{y.removeEventListener("input",f,!0)}}},[]);const w=e.ref!==void 0?P(u,e.ref):u,I={...e,ref:w,onBlur:S,onFocus:x,tmpValue:r},C=X(n,"DD.MM.YYYY");return m.jsxs(O,{...b,children:[m.jsx(W,{...I}),m.jsx($,{icon:Be,onMouseDown:g}),d&&m.jsx(q,{targetElement:c.current,alignSelf:"auto",children:m.jsx(Oe,{defaultDateValue:C.isValid()?C:void 0,selectedDateValue:C,onSelectedDateValueChange:E,activeDateValue:X(r,"DD.MM.YYYY"),onActiveDateValueChange:f=>i(f?f.format("DD.MM.YYYY"):void 0)})})]})});try{R.displayName="DatePicker",R.__docgenInfo={description:"",displayName:"DatePicker",props:{inputProps:{defaultValue:{value:"{}"},description:"Пропсы внутреннего инпута",name:"inputProps",required:!1,type:{name:"InputLineProps"}},"data-size":{defaultValue:null,description:"Размеры компонента",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"s"'},{value:'"xl"'}]}}}}}catch{}function ee(e){const{anchorOffset:t=0,focusOffset:s=0}=e.ownerDocument.getSelection()||{},n=Math.min(t,s),o=Math.max(t,s);return[n,o]}function je(e,[t,s]){var n,o;const r=e.ownerDocument,i=r.createRange();i.setStart(e.firstChild||e,Math.min(t,((n=e.textContent)===null||n===void 0?void 0:n.length)||0)),i.setEnd(e.lastChild||e,Math.min(s,((o=e.textContent)===null||o===void 0?void 0:o.length)||0));const l=r.getSelection();l&&(l.removeAllRanges(),l.addRange(i))}class We{constructor(t){this.element=t,this.maxLength=1/0}get value(){return this.element.innerText.replace(/\n\n$/,`
`)}set value(t){this.element.innerHTML=t.replace(/\n$/,`

`)}get selectionStart(){return ee(this.element)[0]}get selectionEnd(){return ee(this.element)[1]}setSelectionRange(t,s){je(this.element,[t||0,s||0])}select(){this.setSelectionRange(0,this.value.length)}}function He(e){const t=new We(e);return new Proxy(e,{get(s,n){if(n in t)return t[n];const o=s[n];return typeof o=="function"?o.bind(s):o},set(s,n,o,r){return Reflect.set(n in t?t:s,n,o,r)}})}const $e=e=>e.isContentEditable?He(e):e.querySelector("input,textarea")||e,U={mask:/^.*$/,preprocessors:[],postprocessors:[],plugins:[],overwriteMode:"shift"};class qe{constructor(){this.now=null,this.past=[],this.future=[]}undo(){const t=this.past.pop();t&&this.now&&(this.future.push(this.now),this.updateElement(t,"historyUndo"))}redo(){const t=this.future.pop();t&&this.now&&(this.past.push(this.now),this.updateElement(t,"historyRedo"))}updateHistory(t){if(!this.now){this.now=t;return}const s=this.now.value!==t.value,n=this.now.selection.some((o,r)=>o!==t.selection[r]);!s&&!n||(s&&(this.past.push(this.now),this.future=[]),this.now=t)}updateElement(t,s){this.now=t,this.updateElementState(t,{inputType:s,data:null})}}function Ye(e,...t){return t.every(({value:s})=>s===e.value)}function ze(e,...t){return t.every(({value:s,selection:n})=>s===e.value&&n[0]===e.selection[0]&&n[1]===e.selection[1])}function Ge({value:e,selection:t},s,n){const[o,r]=t,i=typeof n=="function"?n({value:e,selection:t}):n;return{value:e,selection:i==="replace"?[o,o+s.length]:[o,r]}}function F(e){return typeof e=="string"}function te(e,t,s,n){let o="";for(let r=t.length;r<e.length;r++){const i=e[r],l=(n==null?void 0:n.value[r])===i;if(!F(i)||i===s&&!l)return o;o+=i}return o}function pe(e,t){return Array.isArray(t)?e.length===t.length&&Array.from(e).every((s,n)=>{const o=t[n];return F(o)?s===o:s.match(o)}):t.test(e)}function Ue(e,t,s){let n=null,o=null;const r=Array.from(e.value).reduce((l,a,c)=>{const u=te(t,l,a,s),d=l+u,p=t[d.length];return F(p)?d+p:a.match(p)?(n===null&&c>=e.selection[0]&&(n=d.length),o===null&&c>=e.selection[1]&&(o=d.length),d+a):d},""),i=te(t,r,"",s);return{value:pe(r+i,t)?r+i:r,selection:[n??r.length,o??r.length]}}function Ze({value:e,selection:t},s){const[n,o]=t;let r=n,i=o;return{value:Array.from(e).reduce((a,c,u)=>{const d=a+c;return n===u&&(r=a.length),o===u&&(i=a.length),d.match(s)?d:a},""),selection:[r,i]}}function N(e,t,s=null){if(pe(e.value,t))return e;const{value:n,selection:o}=Array.isArray(t)?Ue(e,t,s):Ze(e,t);return{selection:o,value:Array.isArray(t)?n.slice(0,t.length):n}}function ne(e,t){if(!Array.isArray(t))return e;const[s,n]=e.selection,o=[],r=Array.from(e.value).reduce((i,l,a)=>{const c=t[a];return a===s&&o.push(i.length),a===n&&o.push(i.length),F(c)&&c===l?i:i+l},"");return o.length<2&&o.push(...new Array(2-o.length).fill(r.length)),{value:r,selection:[o[0],o[1]]}}class Y{constructor(t,s){this.initialElementState=t,this.maskOptions=s,this.value="",this.selection=[0,0];const{value:n,selection:o}=N(this.initialElementState,this.getMaskExpression(this.initialElementState));this.value=n,this.selection=o}addCharacters([t,s],n){const{value:o}=this,r=this.getMaskExpression({value:o.slice(0,t)+n+o.slice(s),selection:[t+n.length,t+n.length]}),i={value:o,selection:[t,s]},l=ne(i,r),[a,c]=Ge(l,n,this.maskOptions.overwriteMode).selection,u=l.value.slice(0,a)+n,d=u.length,p=N({value:u+l.value.slice(c),selection:[d,d]},r,i);if(o.slice(0,a)===N({value:u,selection:[d,d]},r,i).value||ze(this,p))throw new Error("Invalid mask value");this.value=p.value,this.selection=p.selection}deleteCharacters([t,s]){if(t===s||!s)return;const{value:n}=this,o=this.getMaskExpression({value:n.slice(0,t)+n.slice(s),selection:[t,t]}),r={value:n,selection:[t,s]},i=ne(r,o),[l,a]=i.selection,c=i.value.slice(0,l)+i.value.slice(a),u=N({value:c,selection:[l,l]},o,r);this.value=u.value,this.selection=u.selection}getMaskExpression(t){const{mask:s}=this.maskOptions;return typeof s=="function"?s(t):s}}class Ke{constructor(t){this.element=t,this.listeners=[]}listen(t,s,n){const o=s;this.element.addEventListener(t,o,n),this.listeners.push(()=>this.element.removeEventListener(t,o))}destroy(){this.listeners.forEach(t=>t())}}const _={CTRL:1,ALT:2,SHIFT:4,META:8},k={Y:89,Z:90};function V(e,t,s){return e.ctrlKey===!!(t&_.CTRL)&&e.altKey===!!(t&_.ALT)&&e.shiftKey===!!(t&_.SHIFT)&&e.metaKey===!!(t&_.META)&&e.keyCode===s}function Xe(e){return V(e,_.CTRL,k.Y)||V(e,_.CTRL|_.SHIFT,k.Z)||V(e,_.META|_.SHIFT,k.Z)}function Je(e){return V(e,_.CTRL,k.Z)||V(e,_.META,k.Z)}function Qe({value:e,selection:t},s){const[n,o]=t;if(n!==o)return[n,o];const r=s?e.slice(n).indexOf(`
`)+1||e.length:e.slice(0,o).lastIndexOf(`
`)+1;return[s?n:r,s?r:o]}function et({value:e,selection:t},s){const[n,o]=t;return n!==o?[n,o]:(s?[n,o+1]:[n-1,o]).map(i=>Math.min(Math.max(i,0),e.length))}const tt=/\s+$/g,nt=/^\s+/g,se=/\s/;function st({value:e,selection:t},s){const[n,o]=t;if(n!==o)return[n,o];if(s){const a=e.slice(n),[c]=a.match(nt)||[""],u=a.trimStart().search(se);return[n,u!==-1?n+c.length+u:e.length]}const r=e.slice(0,o),[i]=r.match(tt)||[""],l=r.trimEnd().split("").reverse().findIndex(a=>a.match(se));return[l!==-1?o-i.length-l:0,o]}function M(e=[]){return(t,...s)=>e.reduce((n,o)=>Object.assign(Object.assign({},n),o(n,...s)),t)}function ot(e,t){const s=Object.assign(Object.assign({},U),t),n=M(s.preprocessors),o=M(s.postprocessors),r=typeof e=="string"?{value:e,selection:[0,0]}:e,{elementState:i}=n({elementState:r,data:""},"validation"),l=new Y(i,s),{value:a,selection:c}=o(l,r);return typeof e=="string"?a:{value:a,selection:c}}class rt extends qe{constructor(t,s){super(),this.element=t,this.maskitoOptions=s,this.isTextArea=this.element.nodeName==="TEXTAREA",this.eventListener=new Ke(this.element),this.options=Object.assign(Object.assign({},U),this.maskitoOptions),this.preprocessor=M(this.options.preprocessors),this.postprocessor=M(this.options.postprocessors),this.teardowns=this.options.plugins.map(n=>n(this.element,this.options)),this.updateHistory(this.elementState),this.eventListener.listen("keydown",n=>{if(Xe(n))return n.preventDefault(),this.redo();if(Je(n))return n.preventDefault(),this.undo()}),this.eventListener.listen("beforeinput",n=>{var o;const r=n.inputType.includes("Forward");switch(this.updateHistory(this.elementState),n.inputType){case"historyUndo":return n.preventDefault(),this.undo();case"historyRedo":return n.preventDefault(),this.redo();case"deleteByCut":case"deleteContentBackward":case"deleteContentForward":return this.handleDelete({event:n,isForward:r,selection:et(this.elementState,r)});case"deleteWordForward":case"deleteWordBackward":return this.handleDelete({event:n,isForward:r,selection:st(this.elementState,r),force:!0});case"deleteSoftLineBackward":case"deleteSoftLineForward":case"deleteHardLineBackward":case"deleteHardLineForward":return this.handleDelete({event:n,isForward:r,selection:Qe(this.elementState,r),force:!0});case"insertCompositionText":return;case"insertLineBreak":case"insertParagraph":return this.handleEnter(n);case"insertFromPaste":case"insertText":case"insertFromDrop":default:return this.handleInsert(n,n.data||((o=n.dataTransfer)===null||o===void 0?void 0:o.getData("text/plain"))||"")}}),this.eventListener.listen("input",({inputType:n})=>{n!=="insertCompositionText"&&(this.ensureValueFitsMask(),this.updateHistory(this.elementState))}),this.eventListener.listen("compositionend",()=>{this.ensureValueFitsMask(),this.updateHistory(this.elementState)})}get elementState(){const{value:t,selectionStart:s,selectionEnd:n}=this.element;return{value:t,selection:[s||0,n||0]}}get maxLength(){const{maxLength:t}=this.element;return t===-1?1/0:t}destroy(){this.eventListener.destroy(),this.teardowns.forEach(t=>t==null?void 0:t())}updateElementState({value:t,selection:s},n={inputType:"insertText",data:null}){const o=this.elementState.value;this.updateValue(t),this.updateSelectionRange(s),o!==t&&this.dispatchInputEvent(n)}updateSelectionRange([t,s]){var n;const{element:o}=this;o.matches(":focus")&&(o.selectionStart!==t||o.selectionEnd!==s)&&((n=o.setSelectionRange)===null||n===void 0||n.call(o,t,s))}updateValue(t){this.element.value=t}ensureValueFitsMask(){this.updateElementState(ot(this.elementState,this.options))}dispatchInputEvent(t={inputType:"insertText",data:null}){globalThis.InputEvent&&this.element.dispatchEvent(new InputEvent("input",Object.assign(Object.assign({},t),{bubbles:!0,cancelable:!1})))}handleDelete({event:t,selection:s,isForward:n,force:o=!1}){const r={value:this.elementState.value,selection:s},[i,l]=r.selection,{elementState:a}=this.preprocessor({elementState:r,data:""},n?"deleteForward":"deleteBackward"),c=new Y(a,this.options),[u,d]=a.selection;c.deleteCharacters([u,d]);const p=this.postprocessor(c,r);if(!(r.value.slice(0,i)+r.value.slice(l)===p.value&&!o&&!this.element.isContentEditable)){if(t.preventDefault(),Ye(r,a,c,p))return this.updateSelectionRange(n?[d,d]:[u,u]);this.updateElementState(p,{inputType:t.inputType,data:null}),this.updateHistory(p)}}handleInsert(t,s){const n=this.elementState,{elementState:o,data:r=s}=this.preprocessor({data:s,elementState:n},"insert"),i=new Y(o,this.options);try{i.addCharacters(o.selection,r)}catch{return t.preventDefault()}const[l,a]=o.selection,c=n.value.slice(0,l)+s+n.value.slice(a),u=this.postprocessor(i,n);if(u.value.length>this.maxLength)return t.preventDefault();(c!==u.value||this.element.isContentEditable)&&(t.preventDefault(),this.updateElementState(u,{data:s,inputType:t.inputType}),this.updateHistory(u))}handleEnter(t){(this.isTextArea||this.element.isContentEditable)&&this.handleInsert(t,`
`)}}function it(e,t,s){const n=Math.min(Number(s),Math.max(Number(t),Number(e)));return e instanceof Date?new Date(n):n}function at(e){return e.replaceAll(/\W/g,"").length}const he=e=>{var t,s,n;return{day:((t=e.match(/d/g))===null||t===void 0?void 0:t.length)||0,month:((s=e.match(/m/g))===null||s===void 0?void 0:s.length)||0,year:((n=e.match(/y/g))===null||n===void 0?void 0:n.length)||0}};function lt(e){return{day:String(e.getDate()).padStart(2,"0"),month:String(e.getMonth()+1).padStart(2,"0"),year:String(e.getFullYear()).padStart(4,"0"),hours:String(e.getHours()).padStart(2,"0"),minutes:String(e.getMinutes()).padStart(2,"0"),seconds:String(e.getSeconds()).padStart(2,"0"),milliseconds:String(e.getMilliseconds()).padStart(3,"0")}}function ut(e,t){return e.length<t.length?!1:e.split(/\D/).every(s=>!s.match(/^0+$/))}function me(e,t,s){const n=at(t);return e.replace(s,"").match(new RegExp(`(\\D*\\d[^\\d\\s]*){1,${n}}`,"g"))||[]}function Z(e,t){const s=t.replaceAll(/[^dmy]/g,""),n=e.replaceAll(/\D+/g,""),o={day:n.slice(s.indexOf("d"),s.lastIndexOf("d")+1),month:n.slice(s.indexOf("m"),s.lastIndexOf("m")+1),year:n.slice(s.indexOf("y"),s.lastIndexOf("y")+1)};return Object.fromEntries(Object.entries(o).filter(([r,i])=>!!i).sort(([r],[i])=>t.toLowerCase().indexOf(r[0])>t.toLowerCase().indexOf(i[0])?1:-1))}function ct(e,t){var s,n,o,r,i,l,a;const c=((s=e.year)===null||s===void 0?void 0:s.length)===2?`20${e.year}`:e.year,u=new Date(Number(c??"0"),Number((n=e.month)!==null&&n!==void 0?n:"1")-1,Number((o=e.day)!==null&&o!==void 0?o:"1"),Number((r=void 0)!==null&&r!==void 0?r:"0"),Number((i=void 0)!==null&&i!==void 0?i:"0"),Number((l=void 0)!==null&&l!==void 0?l:"0"),Number((a=void 0)!==null&&a!==void 0?a:"0"));return u.setFullYear(Number(c??"0")),u}const fe=", ";function A({day:e,month:t,year:s,hours:n,minutes:o,seconds:r,milliseconds:i},{dateMode:l,dateTimeSeparator:a=fe,timeMode:c}){var u;const d=((u=l.match(/y/g))===null||u===void 0?void 0:u.length)===2?s==null?void 0:s.slice(-2):s;return(l+(c?a+c:"")).replaceAll(/d+/g,e??"").replaceAll(/m+/g,t??"").replaceAll(/y+/g,d??"").replaceAll(/H+/g,n??"").replaceAll("MSS",i??"").replaceAll(/M+/g,o??"").replaceAll(/S+/g,r??"").replaceAll(/^\D+/g,"").replaceAll(/\D+$/g,"")}const ge={day:31,month:12,year:9999},dt=new Date("0001-01-01"),pt=new Date("9999-12-31"),ht=[":","."];function mt({dateString:e,dateModeTemplate:t,offset:s,selection:[n,o]}){const r=Z(e,t),i=Object.entries(r),l={};for(const[u,d]of i){const p=A(l,{dateMode:t}),g=ge[u],E=p.length&&1,S=s+p.length+E+he(t)[u],x=S>=n&&S===o;if(x&&Number(d)>Number(g))return{validatedDateString:"",updatedSelection:[n,o]};if(x&&Number(d)<1)return{validatedDateString:"",updatedSelection:[n,o]};l[u]=d}const a=A(l,{dateMode:t}),c=a.length-e.length;return{validatedDateString:a,updatedSelection:[n+c,o+c]}}const ve=/[\\^$.*+?()[\]{}|]/g,ft=new RegExp(ve.source);function ye(e){return e&&ft.test(e)?e.replaceAll(ve,"\\$&"):e}function z(e,t,s=0){return Number(e.padEnd(t.length,"0"))<=Number(t)?{validatedSegmentValue:e,prefixedZeroesCount:s}:e.endsWith("0")?z(`0${e.slice(0,t.length-1)}`,t,s+1):z(`${e.slice(0,t.length-1)}0`,t,s)}function oe(e){return e.replaceAll(/[０-９]/g,t=>String.fromCharCode(t.charCodeAt(0)-65248))}function gt({dateModeTemplate:e,dateSegmentSeparator:t,splitFn:s,uniteFn:n}){return({value:o,selection:r})=>{var i;const[l,a]=r,{dateStrings:c,restPart:u=""}=s(o),d=[];let p=0;c.forEach(E=>{const S=Z(E,e),v=Object.entries(S).reduce((b,[w,I])=>{const{validatedSegmentValue:C,prefixedZeroesCount:f}=z(I,`${ge[w]}`);return p+=f,Object.assign(Object.assign({},b),{[w]:C})},{});d.push(A(v,{dateMode:e}))});const g=n(d,o)+(!((i=c[c.length-1])===null||i===void 0)&&i.endsWith(t)?t:"")+u;return p&&g[a+1]===t&&p++,{selection:[l+p,a+p],value:g}}}function vt(){return({elementState:e,data:t})=>{const{value:s,selection:n}=e;return{elementState:{selection:n,value:oe(s)},data:oe(t)}}}function yt(e,t){const s=he(t);return Object.fromEntries(Object.entries(e).map(([n,o])=>{const r=s[n];return[n,o.length===r&&o.match(/^0+$/)?"1".padStart(r,"0"):o]}))}function xt({dateModeTemplate:e,min:t=dt,max:s=pt,rangeSeparator:n="",dateSegmentSeparator:o="."}){return({value:r,selection:i})=>{const l=n&&r.endsWith(n),a=me(r,e,n);let c="";for(const u of a){c+=c?n:"";const d=Z(u,e);if(!ut(u,e)){const E=yt(d,e),S=A(E,{dateMode:e}),x=u.endsWith(o)?o:"";c+=S+x;continue}const p=ct(d),g=it(p,t,s);c+=A(lt(g),{dateMode:e})}return{selection:i,value:c+(l?n:"")}}}function St({dateModeTemplate:e,dateSegmentsSeparator:t,rangeSeparator:s="",dateTimeSeparator:n=fe}){return({elementState:o,data:r})=>{const i=s?new RegExp(`${s}|-`):n,l=r.split(i),a=r.includes(n)?[l[0]]:l;if(a.every(c=>c.trim().split(/\D/).filter(Boolean).length===e.split(t).length)){const c=a.map(u=>Et(u,e,t)).join(s);return{elementState:o,data:`${c}${r.includes(n)&&n+l[1]||""}`}}return{elementState:o,data:r}}}function Et(e,t,s){const n=e.split(/\D/).filter(Boolean),o=t.split(s);return n.map((i,l)=>l===o.length-1?i:i.padStart(o[l].length,"0")).join(s)}function wt({dateModeTemplate:e,dateSegmentsSeparator:t,rangeSeparator:s=""}){return({elementState:n,data:o})=>{const{value:r,selection:i}=n;if(o===t)return{elementState:n,data:i[0]===r.length?o:""};const l=o.replaceAll(new RegExp(`[^\\d${ye(t)}${s}]`,"g"),"");if(!l)return{elementState:n,data:""};const[a,c]=i;let u=c+o.length;const d=r.slice(0,a)+l+r.slice(u),p=me(d,e,s);let g="";const E=!!s&&d.includes(s);for(const x of p){const{validatedDateString:v,updatedSelection:b}=mt({dateString:x,dateModeTemplate:e,offset:g.length,selection:[a,u]});if(x&&!v)return{elementState:n,data:""};u=b[1],g+=E&&!g?v+s:v}const S=g.slice(a,u);return{elementState:{selection:i,value:g.slice(0,a)+S.split(t).map(x=>"0".repeat(x.length)).join(t)+g.slice(u)},data:S}}}function Dt(){return({elementState:e},t)=>{const{value:s,selection:n}=e;if(!s||bt(s,n))return{elementState:e};const[o,r]=n,i=s.slice(o,r).replaceAll(/\d/g,"0"),l=s.slice(0,o)+i+s.slice(r);return t==="validation"||t==="insert"&&o===r?{elementState:{selection:n,value:l}}:{elementState:{selection:t==="deleteBackward"||t==="insert"?[o,o]:[r,r],value:l}}}}function bt(e,[t,s]){return s===e.length}function _t({mode:e,separator:t=".",max:s,min:n}){const o=e.split("/").join(t);return Object.assign(Object.assign({},U),{mask:Array.from(o).map(r=>r===t?r:/\d/),overwriteMode:"replace",preprocessors:[vt(),Dt(),St({dateModeTemplate:o,dateSegmentsSeparator:t}),wt({dateModeTemplate:o,dateSegmentsSeparator:t})],postprocessors:[gt({dateModeTemplate:o,dateSegmentSeparator:t,splitFn:r=>({dateStrings:[r]}),uniteFn:([r])=>r}),xt({min:n,max:s,dateModeTemplate:o,dateSegmentSeparator:t})]})}new RegExp(`[${ht.map(ye).join("")}]$`);const re=typeof window<"u"?h.useLayoutEffect:h.useEffect;function It(e){return e&&typeof e=="object"&&"then"in e}const Ct=({options:e=null,elementPredicate:t=$e}={})=>{const[s,n]=h.useState(null),[o,r]=h.useState(null),i=h.useCallback(a=>{n(a)},[]),l=h.useRef(t);return l.current=t,re(()=>{if(!s)return;const a=t,c=a(s);It(c)?c.then(u=>{l.current===a&&r(u)}):r(c)},[s,t,l]),re(()=>{if(!o||!e)return;const a=new rt(o,e);return()=>{a.destroy()}},[e,o]),i},Tt=_t({mode:"dd/mm/yyyy"}),G=({inputProps:e={},...t})=>{const[s,n]=h.useState(e.value),o=Ct({options:Tt});return m.jsxs(Ce,{children:[m.jsx(J,{children:m.jsx(R,{...t,inputProps:{...e,value:s,onInput:r=>n(r.currentTarget.value),ref:o}})}),m.jsxs(J,{children:[m.jsx(Q,{font:"Subtitle/Subtitle 2",as:"div",children:"Выбор даты"}),m.jsxs(Q,{font:"Body/Body 2 Long",as:"div",children:["Высота календаря постоянна и состоит из шести рядов чисел. Текущий месяц начинается с первого ряда и, если его даты не заходят на шестой ряд, то там ставятся пустые ячейки (Empty).",m.jsx("br",{}),m.jsx("br",{}),"Текущая дата выделяется обводкой в виде черного кружка. Ховер на дате подсвечивается обводкой синего цвета. Выбранная дата отмечается синим кружком.",m.jsx("br",{}),"При ховере на месяце, годе, стрелках вправо/влево появляются тултипы с подсказками.",m.jsx("br",{}),m.jsx("br",{}),"Клик на месяц/год открывает экран выбора месяца/года. Вернуться на экран выбора даты можно выбрав месяц/год, либо нажав на месяц/год в шапке календаря"]})]})]})};try{G.displayName="DatePickerSimpleTemplate",G.__docgenInfo={description:"",displayName:"DatePickerSimpleTemplate",props:{inputProps:{defaultValue:{value:"{}"},description:"Пропсы внутреннего инпута",name:"inputProps",required:!1,type:{name:"InputLineProps"}},"data-size":{defaultValue:null,description:"Размеры компонента",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"s"'},{value:'"xl"'}]}}}}}catch{}const kt=`import { T } from '@admiral-ds/react-ui';
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
`,Zt={title:"Admiral-2.1/Date Picker/DatePicker",component:R,parameters:{docs:{source:{language:"tsx"}}},argTypes:{}},L={render:e=>m.jsx(G,{...e}),parameters:{docs:{source:{code:kt}}},name:"Выбор даты",args:{inputProps:{placeholder:"Введите дату",dataPlaceholder:"дд.мм.гггг",value:"11."}}};var ie,ae,le;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const Kt=["DatePickerCalendarSimple"];export{L as DatePickerCalendarSimple,Kt as __namedExportsOrder,Zt as default};

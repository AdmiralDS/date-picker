import{p as x}from"./typography.es-zceevOJ_.js";import{j as w}from"./tslib.es6-gXVSDp23.js";import{r as f}from"./index-uubelm5h.js";import{P as Ce,r as ie,p as Ie}from"./ChevronRightOutline-D_ms2TvK.js";import{u as Te,D as Ne,a as Re}from"./DropdownProvider.es-CSByVTCf.js";import{B as Le}from"./index-Lg2VQURa.js";function Ve(e,t){return e.value!==t.value||e.selectionStart!==t.selectionStart||e.selectionEnd!==t.selectionEnd}function Lt(e,t){var i;const{value:s=e.value,selectionStart:n,selectionEnd:o}=t;if(Ve(e,{value:s,selectionStart:n,selectionEnd:o})){const r=(i=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"value"))==null?void 0:i.set;let a;r==null||r.call(e,s),typeof n=="number"&&typeof o=="number"&&e.setSelectionRange(n,o),typeof Event=="function"?a=new Event("input",{bubbles:!0}):(a=document.createEvent("Event"),a.initEvent("input",!0,!0)),e.dispatchEvent(a)}}const ke=(e,t)=>{const s=f.useCallback(n=>{e.every(o=>o.current&&!o.current.contains(n.target))&&t(n)},[t,e]);f.useEffect(()=>(document.addEventListener("mousedown",s,!0),document.addEventListener("touchstart",s),()=>{document.removeEventListener("mousedown",s,!0),document.removeEventListener("touchstart",s)}),[s])};function Me(e,t){const s=f.useRef(null),n=f.useRef(e);return f.useEffect(()=>{n.current=e},[e]),f.useEffect(()=>(s.current=window.setInterval(()=>n.current(),t),()=>window.clearInterval(s.current||0)),[t]),s}const Oe=x.div`
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
`,Pe=x.div`
  pointer-events: none;
  height: 100%;
  flex: 0 0 auto;
`,Fe=x(Ce)`
  display: flex;
  flex-direction: ${e=>e.$reverse?"column-reverse":"column"};
  flex-wrap: nowrap;
`,re=f.forwardRef(({targetRef:e,targetElement:t,onClickOutside:s=()=>null,className:n="",alignSelf:o,dropContainerCssMixin:i,...r},a)=>{const l=f.useRef(null),[c,u]=f.useState(!1),d=t??(e==null?void 0:e.current),{addDropdown:p,removeDropdown:h,dropdowns:g}=Te(l),{rootRef:y}=f.useContext(Ne);ke([l],m=>{Re(m,g)&&s(m)}),f.useLayoutEffect(()=>{var m;l.current!==document.activeElement&&((m=l==null?void 0:l.current)==null||m.focus())},[]);const v=f.useCallback(()=>{const m=l.current;if(m&&d){const b=m.getBoundingClientRect(),E=d.getBoundingClientRect(),_=window.innerHeight,R=window.innerWidth;if(_-b.bottom<0&&E.top>_-E.bottom?c||u(!0):(E.bottom+(E.top-b.top)<_-8||E.top<_-E.bottom)&&c&&u(!1),o&&o!=="auto")return;const D=b.right-b.left,L=R-E.left>=D,V=E.right-16>=D,G=D>E.width;if(V||L)m.style.transform="translateX(0)",V&&L?m.style.alignSelf="flex-end":G&&!V&&L?m.style.alignSelf="flex-start":G&&!L&&V&&(m.style.alignSelf="flex-end");else{m.style.alignSelf="center";const Ae=(R-b.width)/2-(E.left-(D-E.width)/2);m.style.transform=`translateX(${Ae}px)`}}},[c,e,t]);return Me(v,100),f.useEffect(()=>{l.current&&(l.current.style.opacity="1")},[]),f.useLayoutEffect(()=>(p==null||p(l),()=>{h==null||h(l)}),[]),w.jsx(w.Fragment,{children:w.jsxs(Fe,{targetElement:d,$reverse:c,rootRef:y,children:[w.jsx(Pe,{}),w.jsx(Oe,{ref:ie(a,l),...r,className:n+" dropdown-container",$alignSelf:o,$dropContainerCssMixin:i})]})})});re.displayName="DropdownContainer";const le=x(re)`
  box-shadow: var(--admiral-box-shadow-Shadow08, ${e=>Ie(e.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${e=>Le(e.theme.shape)});
  overflow: hidden;
  width: max-content;
`;le.displayName="StyledDropdownContainer";const H=x.div.withConfig({displayName:"InputBox__FocusBox",componentId:"sc-c70185ac-0"})(["cursor:text;display:inline-flex;overflow:hidden;flex-wrap:nowrap;flex-direction:row;align-items:stretch;height:40px;padding:0;padding-inline-start:16px;padding-inline-end:16px;& *{"," line-height:40px;}&[data-size='xl']{height:56px;& *{line-height:56px;}}&[data-size='s']{height:32px;padding-inline-start:12px;padding-inline-end:12px;& *{"," line-height:32px;}}box-sizing:border-box;border-radius:4px;background:transparent;transform:translate3d(0,0,0);box-shadow:0px 0px 0px 1px "," inset;&:hover:not(:focus-within){box-shadow:0px 0px 0px 1px "," inset;}&:focus-within{box-shadow:0px 0px 0px 2px "," inset;}transition:box-shadow 0.3s ease-in-out;"],e=>e.theme.typography["Body/Body 1 Long"],e=>e.theme.typography["Body/Body 2 Long"],e=>e.theme.color["Neutral/Neutral 40"],e=>e.theme.color["Neutral/Neutral 60"],e=>e.theme.color["Primary/Primary 60 Main"]),z=H;try{H.displayName="FocusBox",H.__docgenInfo={description:"",displayName:"FocusBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{z.displayName="InputBox",z.__docgenInfo={description:"",displayName:"InputBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const j=x.input.withConfig({displayName:"InputLine__StyledInputLine",componentId:"sc-2adeaa54-0"})(["border:none;outline:none;appearance:none;background-image:none;background-color:transparent;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;text-overflow:ellipsis;padding:0;color:",";::placeholder{color:",";}"],e=>e.$isTmpValue?e.theme.color["Neutral/Neutral 30"]:e.theme.color["Neutral/Neutral 90"],e=>e.theme.color["Neutral/Neutral 50"]),ae=x.span.withConfig({displayName:"InputLine__Visible",componentId:"sc-2adeaa54-1"})(["color:",";transition:color 0.3s ease-in-out;"],e=>e.theme.color["Neutral/Neutral 30"]),He=x.span.withConfig({displayName:"InputLine__Invisible",componentId:"sc-2adeaa54-2"})(["color:transparent;"]),je=x.div.withConfig({displayName:"InputLine__InputLineContainer",componentId:"sc-2adeaa54-3"})(["position:relative;display:inline-block;&:focus-within ","{color:",";}"],ae,e=>e.theme.color["Neutral/Neutral 50"]),Be=x.div.withConfig({displayName:"InputLine__MaskBox",componentId:"sc-2adeaa54-4"})(["position:absolute;pointer-events:none;top:0;bottom:0;left:0;right:0;"]),Y=f.forwardRef((e,t)=>{const{className:s,dataPlaceholder:n,tmpValue:o,...i}=e,r={className:s},a=e.placeholder,l=f.useRef(null),c=f.useRef(null),u=f.useRef(null);f.useEffect(()=>{const p=l.current,h=c.current,g=u.current;function y(){const{value:v}=this,m=v.length;h&&g&&(typeof a=="string"&&a.length>0&&v.length==0?(g.innerHTML="",h.innerHTML=""):(h.innerHTML=v,g.innerHTML=(n==null?void 0:n.substring(m))||""))}if(typeof n=="string"&&p&&h&&g)return y.apply(p),p.addEventListener("input",y),()=>p.removeEventListener("input",y)},[n,a,i.value,i.defaultValue,o]);const d=typeof o=="string";return w.jsxs(je,{...r,children:[w.jsx(j,{ref:ie(t,l),...i,$isTmpValue:d,value:d?o:i.value}),w.jsxs(Be,{children:[w.jsx(He,{ref:c}),w.jsx(ae,{ref:u})]})]})});try{j.displayName="StyledInputLine",j.__docgenInfo={description:"",displayName:"StyledInputLine",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Y.displayName="InputLine",Y.__docgenInfo={description:"",displayName:"InputLine",props:{dataPlaceholder:{defaultValue:null,description:"",name:"dataPlaceholder",required:!1,type:{name:"string"}},tmpValue:{defaultValue:null,description:"",name:"tmpValue",required:!1,type:{name:"string"}}}}}catch{}function B({icon:e,...t}){const s=e;return w.jsx(s,{...t})}const K=x(B).withConfig({displayName:"InputIconButton",componentId:"sc-9818fd62-0"})(["width:24px;[data-size='s'] &{width:20px;}& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral50,",");}[disabled] &&&{pointer-events:none;& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral30,",");}}&:hover{cursor:pointer;}&:hover *[fill^='#']{fill:var(--admiral-color-Primary_Primary70,",");}"],e=>e.theme.color["Neutral/Neutral 50"],e=>e.theme.color["Neutral/Neutral 30"],e=>e.theme.color["Primary/Primary 70"]);try{B.displayName="AnyIcon",B.__docgenInfo={description:"",displayName:"AnyIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}}}}}catch{}try{K.displayName="InputIconButton",K.__docgenInfo={description:"",displayName:"InputIconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Vt=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",focusable:!1,...e},f.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M8.14 1.94c.35 0 .65.3.65.65v1.39h2.56V2.59c0-.35.29-.65.65-.65.35 0 .64.3.64.65v1.39h2.56V2.59c0-.35.29-.65.65-.65.35 0 .65.3.65.65v1.39h.5c1.64 0 3 1.34 3 3v10.13c0 1.67-1.34 3-3 3H7c-1.67 0-3-1.33-3-3V6.98c0-1.66 1.33-3 3-3h.48V2.59c0-.35.3-.65.66-.65m-.66 4.91V5.28H7c-.94 0-1.71.76-1.71 1.7v2.36H18.7V6.98c0-.94-.77-1.7-1.7-1.7h-.5v1.57c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65V5.28h-2.56v1.57c0 .36-.29.65-.64.65-.36 0-.65-.29-.65-.65V5.28H8.79v1.57a.655.655 0 0 1-1.31 0m11.22 3.8H5.29v6.46c0 .94.77 1.7 1.71 1.7h10c.93 0 1.7-.76 1.7-1.7zM7.52 13.99c0-.74.61-1.34 1.35-1.34h2.33c.74 0 1.34.6 1.34 1.34v1.32c0 .75-.6 1.36-1.34 1.36H8.87c-.74 0-1.35-.61-1.35-1.36zm1.32-.03c-.01.01-.01.02-.01.03v1.32c0 .02 0 .03.01.04s.02.01.03.01h2.33c.01 0 .02 0 .03-.01s.02-.02.02-.04v-1.32c0-.01-.01-.02-.02-.03s-.02-.01-.03-.01H8.87c-.01 0-.02 0-.03.01"})),Z=le;try{Z.displayName="PopoverPanel",Z.__docgenInfo={description:"",displayName:"PopoverPanel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function X(e){const{anchorOffset:t=0,focusOffset:s=0}=e.ownerDocument.getSelection()||{},n=Math.min(t,s),o=Math.max(t,s);return[n,o]}function $e(e,[t,s]){var n,o;const i=e.ownerDocument,r=i.createRange();r.setStart(e.firstChild||e,Math.min(t,((n=e.textContent)===null||n===void 0?void 0:n.length)||0)),r.setEnd(e.lastChild||e,Math.min(s,((o=e.textContent)===null||o===void 0?void 0:o.length)||0));const a=i.getSelection();a&&(a.removeAllRanges(),a.addRange(r))}class We{constructor(t){this.element=t,this.maxLength=1/0}get value(){return this.element.innerText.replace(/\n\n$/,`
`)}set value(t){this.element.innerHTML=t.replace(/\n$/,`

`)}get selectionStart(){return X(this.element)[0]}get selectionEnd(){return X(this.element)[1]}setSelectionRange(t,s){$e(this.element,[t||0,s||0])}select(){this.setSelectionRange(0,this.value.length)}}function qe(e){const t=new We(e);return new Proxy(e,{get(s,n){if(n in t)return t[n];const o=s[n];return typeof o=="function"?o.bind(s):o},set(s,n,o,i){return Reflect.set(n in t?t:s,n,o,i)}})}const Ue=e=>e.isContentEditable?qe(e):e.querySelector("input,textarea")||e,O={mask:/^.*$/,preprocessors:[],postprocessors:[],plugins:[],overwriteMode:"shift"};class Ge{constructor(){this.now=null,this.past=[],this.future=[]}undo(){const t=this.past.pop();t&&this.now&&(this.future.push(this.now),this.updateElement(t,"historyUndo"))}redo(){const t=this.future.pop();t&&this.now&&(this.past.push(this.now),this.updateElement(t,"historyRedo"))}updateHistory(t){if(!this.now){this.now=t;return}const s=this.now.value!==t.value,n=this.now.selection.some((o,i)=>o!==t.selection[i]);!s&&!n||(s&&(this.past.push(this.now),this.future=[]),this.now=t)}updateElement(t,s){this.now=t,this.updateElementState(t,{inputType:s,data:null})}}function ze(e,...t){return t.every(({value:s})=>s===e.value)}function Ye(e,...t){return t.every(({value:s,selection:n})=>s===e.value&&n[0]===e.selection[0]&&n[1]===e.selection[1])}function Ke({value:e,selection:t},s,n){const[o,i]=t,r=typeof n=="function"?n({value:e,selection:t}):n;return{value:e,selection:r==="replace"?[o,o+s.length]:[o,i]}}function P(e){return typeof e=="string"}function J(e,t,s,n){let o="";for(let i=t.length;i<e.length;i++){const r=e[i],a=(n==null?void 0:n.value[i])===r;if(!P(r)||r===s&&!a)return o;o+=r}return o}function ce(e,t){return Array.isArray(t)?e.length===t.length&&Array.from(e).every((s,n)=>{const o=t[n];return P(o)?s===o:s.match(o)}):t.test(e)}function Ze(e,t,s){let n=null,o=null;const i=Array.from(e.value).reduce((a,l,c)=>{const u=J(t,a,l,s),d=a+u,p=t[d.length];return P(p)?d+p:l.match(p)?(n===null&&c>=e.selection[0]&&(n=d.length),o===null&&c>=e.selection[1]&&(o=d.length),d+l):d},""),r=J(t,i,"",s);return{value:ce(i+r,t)?i+r:i,selection:[n??i.length,o??i.length]}}function Xe({value:e,selection:t},s){const[n,o]=t;let i=n,r=o;return{value:Array.from(e).reduce((l,c,u)=>{const d=l+c;return n===u&&(i=l.length),o===u&&(r=l.length),d.match(s)?d:l},""),selection:[i,r]}}function k(e,t,s=null){if(ce(e.value,t))return e;const{value:n,selection:o}=Array.isArray(t)?Ze(e,t,s):Xe(e,t);return{selection:o,value:Array.isArray(t)?n.slice(0,t.length):n}}function Q(e,t){if(!Array.isArray(t))return e;const[s,n]=e.selection,o=[],i=Array.from(e.value).reduce((r,a,l)=>{const c=t[l];return l===s&&o.push(r.length),l===n&&o.push(r.length),P(c)&&c===a?r:r+a},"");return o.length<2&&o.push(...new Array(2-o.length).fill(i.length)),{value:i,selection:[o[0],o[1]]}}class ${constructor(t,s){this.initialElementState=t,this.maskOptions=s,this.value="",this.selection=[0,0];const{value:n,selection:o}=k(this.initialElementState,this.getMaskExpression(this.initialElementState));this.value=n,this.selection=o}addCharacters([t,s],n){const{value:o}=this,i=this.getMaskExpression({value:o.slice(0,t)+n+o.slice(s),selection:[t+n.length,t+n.length]}),r={value:o,selection:[t,s]},a=Q(r,i),[l,c]=Ke(a,n,this.maskOptions.overwriteMode).selection,u=a.value.slice(0,l)+n,d=u.length,p=k({value:u+a.value.slice(c),selection:[d,d]},i,r);if(o.slice(0,l)===k({value:u,selection:[d,d]},i,r).value||Ye(this,p))throw new Error("Invalid mask value");this.value=p.value,this.selection=p.selection}deleteCharacters([t,s]){if(t===s||!s)return;const{value:n}=this,o=this.getMaskExpression({value:n.slice(0,t)+n.slice(s),selection:[t,t]}),i={value:n,selection:[t,s]},r=Q(i,o),[a,l]=r.selection,c=r.value.slice(0,a)+r.value.slice(l),u=k({value:c,selection:[a,a]},o,i);this.value=u.value,this.selection=u.selection}getMaskExpression(t){const{mask:s}=this.maskOptions;return typeof s=="function"?s(t):s}}class Je{constructor(t){this.element=t,this.listeners=[]}listen(t,s,n){const o=s;this.element.addEventListener(t,o,n),this.listeners.push(()=>this.element.removeEventListener(t,o))}destroy(){this.listeners.forEach(t=>t())}}const S={CTRL:1,ALT:2,SHIFT:4,META:8},C={Y:89,Z:90};function I(e,t,s){return e.ctrlKey===!!(t&S.CTRL)&&e.altKey===!!(t&S.ALT)&&e.shiftKey===!!(t&S.SHIFT)&&e.metaKey===!!(t&S.META)&&e.keyCode===s}function Qe(e){return I(e,S.CTRL,C.Y)||I(e,S.CTRL|S.SHIFT,C.Z)||I(e,S.META|S.SHIFT,C.Z)}function et(e){return I(e,S.CTRL,C.Z)||I(e,S.META,C.Z)}function tt({value:e,selection:t},s){const[n,o]=t;if(n!==o)return[n,o];const i=s?e.slice(n).indexOf(`
`)+1||e.length:e.slice(0,o).lastIndexOf(`
`)+1;return[s?n:i,s?i:o]}function nt({value:e,selection:t},s){const[n,o]=t;return n!==o?[n,o]:(s?[n,o+1]:[n-1,o]).map(r=>Math.min(Math.max(r,0),e.length))}const st=/\s+$/g,ot=/^\s+/g,ee=/\s/;function it({value:e,selection:t},s){const[n,o]=t;if(n!==o)return[n,o];if(s){const l=e.slice(n),[c]=l.match(ot)||[""],u=l.trimStart().search(ee);return[n,u!==-1?n+c.length+u:e.length]}const i=e.slice(0,o),[r]=i.match(st)||[""],a=i.trimEnd().split("").reverse().findIndex(l=>l.match(ee));return[a!==-1?o-r.length-a:0,o]}function M(e=[]){return(t,...s)=>e.reduce((n,o)=>Object.assign(Object.assign({},n),o(n,...s)),t)}function rt(e,t){const s=Object.assign(Object.assign({},O),t),n=M(s.preprocessors),o=M(s.postprocessors),i=typeof e=="string"?{value:e,selection:[0,0]}:e,{elementState:r}=n({elementState:i,data:""},"validation"),a=new $(r,s),{value:l,selection:c}=o(a,i);return typeof e=="string"?l:{value:l,selection:c}}class lt extends Ge{constructor(t,s){super(),this.element=t,this.maskitoOptions=s,this.isTextArea=this.element.nodeName==="TEXTAREA",this.eventListener=new Je(this.element),this.options=Object.assign(Object.assign({},O),this.maskitoOptions),this.preprocessor=M(this.options.preprocessors),this.postprocessor=M(this.options.postprocessors),this.teardowns=this.options.plugins.map(n=>n(this.element,this.options)),this.updateHistory(this.elementState),this.eventListener.listen("keydown",n=>{if(Qe(n))return n.preventDefault(),this.redo();if(et(n))return n.preventDefault(),this.undo()}),this.eventListener.listen("beforeinput",n=>{var o;const i=n.inputType.includes("Forward");switch(this.updateHistory(this.elementState),n.inputType){case"historyUndo":return n.preventDefault(),this.undo();case"historyRedo":return n.preventDefault(),this.redo();case"deleteByCut":case"deleteContentBackward":case"deleteContentForward":return this.handleDelete({event:n,isForward:i,selection:nt(this.elementState,i)});case"deleteWordForward":case"deleteWordBackward":return this.handleDelete({event:n,isForward:i,selection:it(this.elementState,i),force:!0});case"deleteSoftLineBackward":case"deleteSoftLineForward":case"deleteHardLineBackward":case"deleteHardLineForward":return this.handleDelete({event:n,isForward:i,selection:tt(this.elementState,i),force:!0});case"insertCompositionText":return;case"insertReplacementText":return;case"insertLineBreak":case"insertParagraph":return this.handleEnter(n);case"insertFromPaste":case"insertText":case"insertFromDrop":default:return this.handleInsert(n,n.data||((o=n.dataTransfer)===null||o===void 0?void 0:o.getData("text/plain"))||"")}}),this.eventListener.listen("input",({inputType:n})=>{n!=="insertCompositionText"&&(this.ensureValueFitsMask(),this.updateHistory(this.elementState))}),this.eventListener.listen("compositionend",()=>{this.ensureValueFitsMask(),this.updateHistory(this.elementState)})}get elementState(){const{value:t,selectionStart:s,selectionEnd:n}=this.element;return{value:t,selection:[s||0,n||0]}}get maxLength(){const{maxLength:t}=this.element;return t===-1?1/0:t}destroy(){this.eventListener.destroy(),this.teardowns.forEach(t=>t==null?void 0:t())}updateElementState({value:t,selection:s},n={inputType:"insertText",data:null}){const o=this.elementState.value;this.updateValue(t),this.updateSelectionRange(s),o!==t&&this.dispatchInputEvent(n)}updateSelectionRange([t,s]){var n;const{element:o}=this;o.matches(":focus")&&(o.selectionStart!==t||o.selectionEnd!==s)&&((n=o.setSelectionRange)===null||n===void 0||n.call(o,t,s))}updateValue(t){this.element.value=t}ensureValueFitsMask(){this.updateElementState(rt(this.elementState,this.options))}dispatchInputEvent(t={inputType:"insertText",data:null}){globalThis.InputEvent&&this.element.dispatchEvent(new InputEvent("input",Object.assign(Object.assign({},t),{bubbles:!0,cancelable:!1})))}handleDelete({event:t,selection:s,isForward:n,force:o=!1}){const i={value:this.elementState.value,selection:s},[r,a]=i.selection,{elementState:l}=this.preprocessor({elementState:i,data:""},n?"deleteForward":"deleteBackward"),c=new $(l,this.options),[u,d]=l.selection;c.deleteCharacters([u,d]);const p=this.postprocessor(c,i);if(!(i.value.slice(0,r)+i.value.slice(a)===p.value&&!o&&!this.element.isContentEditable)){if(t.preventDefault(),ze(i,l,c,p))return this.updateSelectionRange(n?[d,d]:[u,u]);this.updateElementState(p,{inputType:t.inputType,data:null}),this.updateHistory(p)}}handleInsert(t,s){const n=this.elementState,{elementState:o,data:i=s}=this.preprocessor({data:s,elementState:n},"insert"),r=new $(o,this.options);try{r.addCharacters(o.selection,i)}catch{return t.preventDefault()}const[a,l]=o.selection,c=n.value.slice(0,a)+s+n.value.slice(l),u=this.postprocessor(r,n);if(u.value.length>this.maxLength)return t.preventDefault();(c!==u.value||this.element.isContentEditable)&&(t.preventDefault(),this.updateElementState(u,{data:s,inputType:t.inputType}),this.updateHistory(u))}handleEnter(t){(this.isTextArea||this.element.isContentEditable)&&this.handleInsert(t,`
`)}}function ue(e,t,s){const n=Math.min(Number(s),Math.max(Number(t),Number(e)));return e instanceof Date?new Date(n):n}function de(e){return e.replaceAll(/\W/g,"").length}function te(e,{day:t,month:s,year:n}={}){const o=new Date(e);return t&&o.setDate(o.getDate()+t),s&&o.setMonth(o.getMonth()+s),n&&o.setFullYear(o.getFullYear()+n),o}const pe=e=>{var t,s,n;return{day:((t=e.match(/d/g))===null||t===void 0?void 0:t.length)||0,month:((s=e.match(/m/g))===null||s===void 0?void 0:s.length)||0,year:((n=e.match(/y/g))===null||n===void 0?void 0:n.length)||0}};function he(e){return{day:String(e.getDate()).padStart(2,"0"),month:String(e.getMonth()+1).padStart(2,"0"),year:String(e.getFullYear()).padStart(4,"0"),hours:String(e.getHours()).padStart(2,"0"),minutes:String(e.getMinutes()).padStart(2,"0"),seconds:String(e.getSeconds()).padStart(2,"0"),milliseconds:String(e.getMilliseconds()).padStart(3,"0")}}function at(e,t){const s=de(t),[n=""]=e.match(new RegExp(`(\\D*\\d){${s}}`))||[];return n}function q(e,t){return e.length<t.length?!1:e.split(/\D/).every(s=>!s.match(/^0+$/))}function T(e,t,s){const n=de(t);return e.replace(s,"").match(new RegExp(`(\\D*\\d[^\\d\\s]*){1,${n}}`,"g"))||[]}function N(e,t){const s=t.replaceAll(/[^dmy]/g,""),n=e.replaceAll(/\D+/g,""),o={day:n.slice(s.indexOf("d"),s.lastIndexOf("d")+1),month:n.slice(s.indexOf("m"),s.lastIndexOf("m")+1),year:n.slice(s.indexOf("y"),s.lastIndexOf("y")+1)};return Object.fromEntries(Object.entries(o).filter(([i,r])=>!!r).sort(([i],[r])=>t.toLowerCase().indexOf(i[0])>t.toLowerCase().indexOf(r[0])?1:-1))}function U(e,t){var s,n,o,i,r,a,l;const c=((s=e.year)===null||s===void 0?void 0:s.length)===2?`20${e.year}`:e.year,u=new Date(Number(c??"0"),Number((n=e.month)!==null&&n!==void 0?n:"1")-1,Number((o=e.day)!==null&&o!==void 0?o:"1"),Number((i=void 0)!==null&&i!==void 0?i:"0"),Number((r=void 0)!==null&&r!==void 0?r:"0"),Number((a=void 0)!==null&&a!==void 0?a:"0"),Number((l=void 0)!==null&&l!==void 0?l:"0"));return u.setFullYear(Number(c??"0")),u}const fe=", ";function A({day:e,month:t,year:s,hours:n,minutes:o,seconds:i,milliseconds:r},{dateMode:a,dateTimeSeparator:l=fe,timeMode:c}){var u;const d=((u=a.match(/y/g))===null||u===void 0?void 0:u.length)===2?s==null?void 0:s.slice(-2):s;return(a+(c?l+c:"")).replaceAll(/d+/g,e??"").replaceAll(/m+/g,t??"").replaceAll(/y+/g,d??"").replaceAll(/H+/g,n??"").replaceAll("MSS",r??"").replaceAll(/M+/g,o??"").replaceAll(/S+/g,i??"").replaceAll(/^\D+/g,"").replaceAll(/\D+$/g,"")}const me={day:31,month:12,year:9999},ct=new Date("0001-01-01"),ge=new Date("9999-12-31"),ut=[":","."],ne=" ",ve="–",dt="—",pt="-",ht="−",ft="ー";function mt({dateString:e,dateModeTemplate:t,dateSegmentsSeparator:s,offset:n,selection:[o,i]}){const r=N(e,t),a=Object.entries(r),l={};for(const[d,p]of a){const h=A(l,{dateMode:t}),g=me[d],y=h.length&&s.length,v=n+h.length+y+pe(t)[d],m=v>=o&&v===i;if(m&&Number(p)>Number(g))return{validatedDateString:"",updatedSelection:[o,i]};if(m&&Number(p)<1)return{validatedDateString:"",updatedSelection:[o,i]};l[d]=p}const c=A(l,{dateMode:t}),u=c.length-e.length;return{validatedDateString:c,updatedSelection:[o+u,i+u]}}const ye=/[\\^$.*+?()[\]{}|]/g,gt=new RegExp(ye.source);function Ee(e){return e&&gt.test(e)?e.replaceAll(ye,"\\$&"):e}function vt(e){return e}function F(e){return!e||typeof e=="object"&&Object.keys(e).length===0}function W(e,t,s=0){return Number(e.padEnd(t.length,"0"))<=Number(t)?{validatedSegmentValue:e,prefixedZeroesCount:s}:e.endsWith("0")?W(`0${e.slice(0,t.length-1)}`,t,s+1):W(`${e.slice(0,t.length-1)}0`,t,s)}function se(e){return e.replaceAll(/[０-９]/g,t=>String.fromCharCode(t.charCodeAt(0)-65248))}function we({dateModeTemplate:e,dateSegmentSeparator:t,splitFn:s,uniteFn:n}){return({value:o,selection:i})=>{var r;const[a,l]=i,{dateStrings:c,restPart:u=""}=s(o),d=[];let p=0;c.forEach(g=>{const y=N(g,e),m=Object.entries(y).reduce((b,[E,_])=>{const{validatedSegmentValue:R,prefixedZeroesCount:D}=W(_,`${me[E]}`);return p+=D,Object.assign(Object.assign({},b),{[E]:R})},{});d.push(A(m,{dateMode:e}))});const h=n(d,o)+(!((r=c[c.length-1])===null||r===void 0)&&r.endsWith(t)?t:"")+u;return p&&h.slice(l+p,l+p+t.length)===t&&(p+=t.length),{selection:[a+p,l+p],value:h}}}function yt({dateModeTemplate:e,firstDateEndSeparator:t,dateSegmentSeparator:s,pseudoFirstDateEndSeparators:n}){return({elementState:o,data:i})=>{const{value:r,selection:a}=o,l=at(r,e),c=n.filter(d=>!t.includes(d)&&d!==s),u=new RegExp(`[${c.join("")}]`,"gi");return{elementState:{selection:a,value:l&&r.length>l.length?l+r.slice(l.length).replace(/^[\D\s]*/,t):r},data:i.replace(u,t)}}}function Se(){return({elementState:e,data:t})=>{const{value:s,selection:n}=e;return{elementState:{selection:n,value:se(s)},data:se(t)}}}function Et(e,t){const s=pe(t);return Object.fromEntries(Object.entries(e).map(([n,o])=>{const i=s[n];return[n,o.length===i&&o.match(/^0+$/)?"1".padStart(i,"0"):o]}))}function xe({dateModeTemplate:e,min:t=ct,max:s=ge,rangeSeparator:n="",dateSegmentSeparator:o="."}){return({value:i,selection:r})=>{const a=n&&i.endsWith(n),l=T(i,e,n);let c="";for(const u of l){c+=c?n:"";const d=N(u,e);if(!q(u,e)){const g=Et(d,e),y=A(g,{dateMode:e}),v=u.endsWith(o)?o:"";c+=y+v;continue}const p=U(d),h=ue(p,t,s);c+=A(he(h),{dateMode:e})}return{selection:r,value:c+(a?n:"")}}}function be({dateModeTemplate:e,dateSegmentsSeparator:t,rangeSeparator:s="",dateTimeSeparator:n=fe}){return({elementState:o,data:i})=>{const r=s?new RegExp(`${s}|-`):n,a=i.split(r),l=i.includes(n)?[a[0]]:a;if(l.every(c=>c.trim().split(/\D/).filter(Boolean).length===e.split(t).length)){const c=l.map(u=>wt(u,e,t)).join(s);return{elementState:o,data:`${c}${i.includes(n)&&n+a[1]||""}`}}return{elementState:o,data:i}}}function wt(e,t,s){const n=e.split(/\D/).filter(Boolean),o=t.split(s);return n.map((r,a)=>a===o.length-1?r:r.padStart(o[a].length,"0")).join(s)}function _e({dateModeTemplate:e,dateSegmentsSeparator:t,rangeSeparator:s=""}){return({elementState:n,data:o})=>{const{value:i,selection:r}=n;if(o===t)return{elementState:n,data:r[0]===i.length?o:""};const a=o.replaceAll(new RegExp(`[^\\d${Ee(t)}${s}]`,"g"),"");if(!a)return{elementState:n,data:""};const[l,c]=r;let u=c+o.length;const d=i.slice(0,l)+a+i.slice(u),p=T(d,e,s);let h="";const g=!!s&&d.includes(s);for(const v of p){const{validatedDateString:m,updatedSelection:b}=mt({dateString:v,dateModeTemplate:e,dateSegmentsSeparator:t,offset:h.length,selection:[l,u]});if(v&&!m)return{elementState:n,data:""};u=b[1],h+=g&&!h?m+s:m}const y=h.slice(l,u);return{elementState:{selection:r,value:h.slice(0,l)+y.split(t).map(v=>"0".repeat(v.length)).join(t)+h.slice(u)},data:y}}}function De(){return({elementState:e},t)=>{const{value:s,selection:n}=e;if(!s||St(s,n))return{elementState:e};const[o,i]=n,r=s.slice(o,i).replaceAll(/\d/g,"0"),a=s.slice(0,o)+r+s.slice(i);return t==="validation"||t==="insert"&&o===i?{elementState:{selection:n,value:a}}:{elementState:{selection:t==="deleteBackward"||t==="insert"?[o,o]:[i,i],value:a}}}}function St(e,[t,s]){return s===e.length}function kt({mode:e,separator:t=".",max:s,min:n}){const o=e.split("/").join(t);return Object.assign(Object.assign({},O),{mask:Array.from(o).map(i=>t.includes(i)?i:/\d/),overwriteMode:"replace",preprocessors:[Se(),De(),be({dateModeTemplate:o,dateSegmentsSeparator:t}),_e({dateModeTemplate:o,dateSegmentsSeparator:t})],postprocessors:[we({dateModeTemplate:o,dateSegmentSeparator:t,splitFn:i=>({dateStrings:[i]}),uniteFn:([i])=>i}),xe({min:n,max:s,dateModeTemplate:o,dateSegmentSeparator:t})]})}const xt=[pt,ve,dt,ht,ft];function bt({dateModeTemplate:e,rangeSeparator:t,minLength:s,maxLength:n,max:o=ge}){return F(s)&&F(n)?vt:({value:i,selection:r})=>{const a=T(i,e,t);if(a.length!==2||a.some(g=>!q(g,e)))return{value:i,selection:r};const[l,c]=a.map(g=>U(N(g,e))),u=te(l,Object.assign(Object.assign({},s),{day:(s==null?void 0:s.day)&&s.day-1})),d=F(n)?o:te(l,Object.assign(Object.assign({},n),{day:(n==null?void 0:n.day)&&n.day-1})),p=ue(c,u,o),h=p>d?d:p;return{selection:r,value:a[0]+t+A(he(h),{dateMode:e})}}}function _t({dateModeTemplate:e,rangeSeparator:t}){return({value:s,selection:n})=>{const o=T(s,e,t),i=o.length===2&&o.every(p=>q(p,e)),[r,a]=n,l=r>=s.length,c=r===0&&a>=s.length;if(!(l||c)||!i)return{value:s,selection:n};const[u,d]=o.map(p=>U(N(p,e)));return{selection:n,value:u>d?o.reverse().join(t):s}}}function Mt({mode:e,min:t,max:s,minLength:n,maxLength:o,dateSeparator:i=".",rangeSeparator:r=`${ne}${ve}${ne}`}){const a=e.split("/").join(i),l=Array.from(a).map(c=>i.includes(c)?c:/\d/);return Object.assign(Object.assign({},O),{mask:[...l,...Array.from(r),...l],overwriteMode:"replace",preprocessors:[Se(),yt({dateModeTemplate:a,dateSegmentSeparator:i,firstDateEndSeparator:r,pseudoFirstDateEndSeparators:xt}),De(),be({dateModeTemplate:a,rangeSeparator:r,dateSegmentsSeparator:i}),_e({dateModeTemplate:a,rangeSeparator:r,dateSegmentsSeparator:i})],postprocessors:[we({dateModeTemplate:a,dateSegmentSeparator:i,splitFn:c=>({dateStrings:T(c,a,r)}),uniteFn:(c,u)=>c.reduce((d,p,h)=>d+p+(!h&&u.includes(r)?r:""),"")}),xe({min:t,max:s,dateModeTemplate:a,rangeSeparator:r,dateSegmentSeparator:i}),bt({dateModeTemplate:a,minLength:n,maxLength:o,max:s,rangeSeparator:r}),_t({dateModeTemplate:a,rangeSeparator:r})]})}new RegExp(`[${ut.map(Ee).join("")}]$`);const oe=typeof window<"u"?f.useLayoutEffect:f.useEffect;function Dt(e){return e&&typeof e=="object"&&"then"in e}const Ot=({options:e=null,elementPredicate:t=Ue}={})=>{const[s,n]=f.useState(null),[o,i]=f.useState(null),r=f.useCallback(l=>{n(l)},[]),a=f.useRef(t);return a.current=t,oe(()=>{if(!s)return;const l=t,c=l(s);Dt(c)?c.then(u=>{a.current===l&&i(u)}):i(c)},[s,t,a]),oe(()=>{if(!o||!e)return;const l=new lt(o,e);return()=>{l.destroy()}},[e,o]),r};export{z as I,Z as P,Vt as S,Y as a,K as b,Lt as c,Mt as d,kt as m,Ot as u};

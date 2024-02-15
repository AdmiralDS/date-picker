import{a as W,u as y,j as f,t as T}from"./typography.es-y01boJtk.js";import{r as a}from"./index-BBkUAzwr.js";import{G as j}from"./index-DmuP904s.js";import{r as F}from"./index-PqR-_bA4.js";import{D as N}from"./DropdownProvider.es-qCbMjVMC.js";var P;function C(){return C=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(t[l]=o[l])}return t},C.apply(this,arguments)}var D=function(t){return a.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},t),P||(P=a.createElement("path",{fill:"#717681",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 0 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};const M=24,A=20,q=16,G=6,_=4;function L(t){switch(t){case"lSmall":case"lBig":default:return M;case"mSmall":case"mBig":return A;case"s":return q}}function I(t){switch(t){case"lBig":case"mBig":default:return G;case"lSmall":case"mSmall":case"s":return _}}function k(t){return L(t)+2*I(t)}const z=W`
  & *[fill^='#'] {
    fill: ${t=>{switch(t.$iconColor){case"primary":return t.theme.color["Primary/Primary 60 Main"];case"secondary":return t.theme.color["Neutral/Neutral 50"];default:return t.$iconColor}}};
  }
`,U=y.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${z}

  & > svg {
    height: ${t=>L(t.$dimension)}px;
    width: ${t=>L(t.$dimension)}px;
  }
`,B=y.div`
  width: ${t=>k(t.$dimension)}px;
  height: ${t=>k(t.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,V=y.button`
  position: relative;
  padding: 0;
  margin: ${t=>I(t.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${t=>L(t.$dimension)}px;
  width: ${t=>L(t.$dimension)}px;
  border-radius: ${t=>j(t.theme.shape)};
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: default;
    pointer-events: none;
    & *[fill^='#'] {
      fill: ${({theme:t})=>t.color["Neutral/Neutral 30"]};
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: ${t=>t.theme.color["Primary/Primary 60 Main"]} solid 2px;
  }

  &:focus {
    > ${B} {
      background-color: ${t=>t.$highlightFocus?t.theme.color["Opacity/Focus"]:"transparent"};
    }
  }
  &:hover {
    > ${B} {
      background-color: ${({theme:t})=>t.color["Opacity/Hover"]};
    }
  }
  &:active {
    > ${B} {
      background-color: ${({theme:t})=>t.color["Opacity/Press"]};
    }
  }
  &:focus-visible {
    > ${B} {
      background-color: transparent;
    }
  }
`,Y=a.forwardRef(({type:t="button",dimension:i="lBig",disabled:o=!1,highlightFocus:l=!0,appearance:d,children:x,...p},c)=>{const m=typeof d=="object"?d.iconColor?d.iconColor:"secondary":d;return f.jsxs(V,{ref:c,type:t,$dimension:i,disabled:o,$highlightFocus:l,...p,children:[f.jsx(B,{$dimension:i,"aria-hidden":!0}),f.jsx(U,{$dimension:i,$iconColor:m,"aria-hidden":!0,children:x})]})});a.forwardRef(({className:t,...i},o)=>f.jsx(Y,{ref:o,className:`close-button ${t||""}`,...i,children:f.jsx(D,{"aria-hidden":!0})}));function H(...t){return i=>{t.forEach(o=>{o&&(typeof o=="function"?o(i):o.current=i)})}}const J=()=>{let t=0;const i=document.createElement("div");return i.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,i.style.overflow="scroll",i.style.fontSize="14px",i.style.height="50px",i.style.maxHeight="50px",i.style.width="100px",i.style.position="absolute",i.style.top="-100000px",i.style.left="-100000px",document.body.appendChild(i),t=i.offsetWidth-i.clientWidth,document.body.removeChild(i),t||16},K=["bottom","height","left","right","top","width"];function Q(t,i){const o={};return{observe(){o.rafId&&cancelAnimationFrame(o.rafId);const l=()=>{if(o.isObserving){const{bottom:d,height:x,left:p,right:c,top:m,width:h,x:e,y:n}=t.getBoundingClientRect(),r={bottom:d,height:x,left:p,right:c,top:m,width:h,x:e||p,y:n||m};((s={},u={})=>K.some($=>s[$]!==u[$]))(r,o.rect)&&(o.rect=r,i(o.rect)),o.rafId=requestAnimationFrame(l)}};o.rafId=requestAnimationFrame(l),o.isObserving=!0},unobserve(){o.rafId&&cancelAnimationFrame(o.rafId),o.isObserving&&(o.isObserving=!1)}}}const X=y.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: ${({theme:t})=>t.zIndex.dropdown};
`,Z=({targetRef:t,targetElement:i,rootRef:o,fullContainerWidth:l,...d})=>{const x=a.useRef(null);return a.useEffect(()=>{const p=x.current,c=i??(t==null?void 0:t.current);if(p&&c){const m=Q(c,h=>{if(h){const{x:e,y:n,height:r,width:s}=h,{style:u}=p;u.top=`${n}px`,u.left=l?"0px":`${e}px`,u.height=`${r}px`,u.width=l?"100%":`${s}px`}});return m.observe(),()=>{m.unobserve()}}},[t,i,l]),F.createPortal(f.jsx(X,{ref:x,...d}),(o==null?void 0:o.current)||document.body)},R=y.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,tt=y.div`
  box-sizing: border-box;
  background-color: ${({theme:t})=>t.color["Neutral/Neutral 80"]};
  ${t=>t.$dimension==="m"?T["Body/Body 2 Short"]:T["Caption/Caption 1"]}
  color: ${({theme:t})=>t.color["Neutral/Neutral 00"]};
  border-radius: ${t=>j(t.theme.shape)};
  ${t=>t.theme.shadow["Shadow 04"]}
  padding: ${t=>t.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,et=y.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,nt=y(Z)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:t})=>t?`flex-direction: ${t};`:""}
  z-index: ${({theme:t})=>t.zIndex.tooltip};
`,w=8;function ot(t,i,o,l){const d=t.getBoundingClientRect(),x=i.getBoundingClientRect(),p=Object.entries(function(h){return{bottom:{check:(e,n)=>{const r=window.innerHeight-e.bottom-h>w+n.height,s=e.left+e.width/2>n.width/2,u=window.innerWidth-e.right-h+e.width/2>n.width/2;return r&&s&&u}},top:{check:(e,n)=>{const r=e.top>w+n.height,s=e.left+e.width/2>n.width/2,u=window.innerWidth-e.right-h+e.width/2>n.width/2;return r&&s&&u}},left:{check:(e,n)=>{const r=e.left>w+n.width,s=e.top>(n.height-e.height)/2,u=window.innerHeight-e.bottom-h>(n.height-e.height)/2;return r&&u&&s}},right:{check:(e,n)=>{const r=window.innerWidth-e.right-h>w+n.width,s=e.top>(n.height-e.height)/2,u=window.innerHeight-e.bottom-h>(n.height-e.height)/2;return r&&u&&s}},bottomRight:{check:(e,n)=>{const r=window.innerHeight-e.bottom-h>w+n.height,s=window.innerWidth-e.left-h>n.width;return r&&s}},bottomLeft:{check:(e,n)=>{const r=window.innerHeight-e.bottom-h>w+n.height,s=e.right>n.width;return r&&s}},topRight:{check:(e,n)=>{const r=e.top>w+n.height,s=window.innerWidth-e.left-h>n.width;return r&&s}},topLeft:{check:(e,n)=>{const r=e.top>w+n.height,s=e.right>n.width;return r&&s}},leftBottom:{check:(e,n)=>{const r=e.left>w+n.width,s=window.innerHeight-e.top-h>n.height;return r&&s}},leftTop:{check:(e,n)=>{const r=e.left>w+n.width,s=e.bottom>n.height;return r&&s}},rightBottom:{check:(e,n)=>{const r=window.innerWidth-e.right-h>w+n.width,s=window.innerHeight-e.top-h>n.height;return r&&s}},rightTop:{check:(e,n)=>{const r=window.innerWidth-e.right-h>w+n.width,s=e.bottom>n.height;return r&&s}},bottomPageCenter:{check:(e,n)=>{const r=window.innerHeight-e.bottom-h>w+n.height,s=window.innerWidth-h>=n.width;return r&&s}},topPageCenter:{check:(e,n)=>{const r=e.top>w+n.height,s=window.innerWidth-h>=n.width;return r&&s}}}}(o)),c=l?p.filter(h=>h[0].includes(l)&&h[1].check(d,x)):p.filter(h=>h[1].check(d,x)),m=l||"bottom";return c.length?c[0][0]:m}const it=1500,S=a.forwardRef(({dimension:t="m",renderContent:i,targetRef:o,targetElement:l,tooltipPosition:d,...x},p)=>{const c=a.useRef(null),m=a.useRef(0),{rootRef:h}=a.useContext(N),e=a.useMemo(()=>!i()&&i()!==0,[i]),[n,r]=a.useState(""),[s,u]=a.useState(!1),[$,E]=a.useState({});return a.useEffect(()=>{(O=>{const v=l??(o==null?void 0:o.current);if(v&&c.current){const g=ot(v,c.current,O,d),b=c.current;switch(g){case"leftBottom":case"leftTop":case"left":r("row-reverse"),u(!1),b.style.margin="0 8px 0 0",b.style.alignSelf=g==="leftBottom"?"flex-start":g==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":r("row"),u(!1),b.style.margin="0 0 0 8px",b.style.alignSelf=g==="rightBottom"?"flex-start":g==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":r("column-reverse"),u(g==="topPageCenter"),b.style.margin="0 0 8px 0",b.style.alignSelf=g==="topLeft"?"flex-end":g==="topRight"?"flex-start":"center";break;default:r("column"),u(g==="bottomPageCenter"),b.style.margin="8px 0 0 0",b.style.alignSelf=g==="bottomLeft"?"flex-end":g==="bottomRight"?"flex-start":"center"}}})(J())},[i(),o,l,d,$]),a.useLayoutEffect(()=>{if(c.current&&!e){const O=new ResizeObserver(v=>{v.forEach(g=>{m.current===0?m.current=g.contentRect.height:E({})})});return O.observe(c.current),()=>{O.disconnect()}}},[e]),a.useEffect(()=>{c.current&&!e&&(c.current.style.opacity="1")},[e]),e?null:f.jsxs(nt,{targetElement:l??(o==null?void 0:o.current),rootRef:h,$flexDirection:n,fullContainerWidth:s,children:[f.jsx(et,{}),f.jsx(R,{ref:H(p,c),children:f.jsx(tt,{role:"tooltip",$dimension:t,...x,children:i()})})]})});S.displayName="Tooltip";function lt(t){const i=o=>{const{forwardedRef:l,renderContent:d,container:x,withDelay:p,tooltipRef:c,tooltipPosition:m,...h}=o,e=!d()&&d()!==0,n=a.useRef(null),[r,s]=a.useState(!1),[u,$]=a.useState(null),[E,O]=a.useState();return a.useEffect(()=>{function v(){O(window.setTimeout(()=>s(!0),p?it:0))}function g(){clearTimeout(E),s(!1)}if(u)return u.addEventListener("mouseenter",v),u.addEventListener("focus",v),u.addEventListener("mouseleave",g),u.addEventListener("blur",g),()=>{E&&clearTimeout(E),u.removeEventListener("mouseenter",v),u.removeEventListener("focus",v),u.removeEventListener("mouseleave",g),u.removeEventListener("blur",g)}},[u,O,s,E]),f.jsxs(f.Fragment,{children:[f.jsx(t,{...h,ref:H(l,n,$)}),r&&!e&&f.jsx(S,{targetElement:n.current,renderContent:d,container:x,tooltipPosition:m,ref:c})]})};return a.forwardRef((o,l)=>f.jsx(i,{forwardedRef:l,...o}))}const ct=t=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",focusable:!1,...t},a.createElement("path",{fill:"#717681",d:"M14.508 18.754c.18 0 .35-.07.48-.21.24-.27.22-.68-.04-.92l-6.369-5.74 6.41-5.55a.65.65 0 0 0 .04-.92.658.658 0 0 0-.92-.04l-6.9 5.99c-.31.28-.31.76 0 1.04l6.86 6.18c.13.12.28.17.44.17"})),dt=t=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",focusable:!1,...t},a.createElement("path",{fill:"#717681",d:"M9.474 18.754c-.18 0-.35-.07-.48-.21a.658.658 0 0 1 .04-.92l6.37-5.74-6.41-5.55a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l6.9 5.99c.31.28.31.76 0 1.04l-6.86 6.18c-.13.12-.28.17-.44.17"}));export{Y as I,ct as S,lt as T,dt as a};

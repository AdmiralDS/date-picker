import{c as H,p as y,j as m,t as B}from"./typography.es-CjQrIQMn.js";import{r as s}from"./index-CDs2tPxN.js";import{s as j}from"./ru-lGojcqRe.js";import{r as W}from"./index-B-yFm4aN.js";import{D as F}from"./DropdownProvider.es-Dczk-0Um.js";var L,T;function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var c in o)({}).hasOwnProperty.call(o,c)&&(e[c]=o[c])}return e},C.apply(null,arguments)}var M=function(e){return s.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),L||(L=s.createElement("defs",null,s.createElement("clipPath",{id:"CloseOutline_svg__a"},s.createElement("path",{fill:"#fff",fillOpacity:0,d:"M0 0h24v24H0z"})))),T||(T=s.createElement("g",{clipPath:"url(#CloseOutline_svg__a)"},s.createElement("path",{fill:"#717681",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"}))))};const D=24,A=20,z=16,q=6,G=4;function P(e){switch(e){case"lSmall":case"lBig":default:return D;case"mSmall":case"mBig":return A;case"s":return z}}function N(e){switch(e){case"lBig":case"mBig":default:return q;case"lSmall":case"mSmall":case"s":return G}}function k(e){return P(e)+2*N(e)}const U=H`
  & *[fill^='#'] {
    fill: ${e=>{switch(e.$iconColor){case"primary":return`var(--admiral-color-Primary_Primary60Main, ${e.theme.color["Primary/Primary 60 Main"]})`;case"secondary":return`var(--admiral-color-Neutral_Neutral50, ${e.theme.color["Neutral/Neutral 50"]})`;default:return e.$iconColor}}};
  }
`,V=y.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${U}

  & > svg {
    height: ${e=>P(e.$dimension)}px;
    width: ${e=>P(e.$dimension)}px;
  }
`,_=y.div`
  width: ${e=>k(e.$dimension)}px;
  height: ${e=>k(e.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,Y=H`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }

  &:focus {
    > ${_} {
      background-color: ${e=>e.$highlightFocus?`var(--admiral-color-Opacity_Focus, ${e.theme.color["Opacity/Focus"]})`:"transparent"};
    }
  }
  &:hover {
    > ${_} {
      background-color: var(--admiral-color-Opacity_Hover, ${e=>e.theme.color["Opacity/Hover"]});
    }
  }
  &:active {
    > ${_} {
      background-color: var(--admiral-color-Opacity_Press, ${e=>e.theme.color["Opacity/Press"]});
    }
  }
  &:focus-visible {
    > ${_} {
      background-color: transparent;
    }
  }
`,J=y.button`
  position: relative;
  padding: 0;
  margin: ${e=>N(e.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${e=>P(e.$dimension)}px;
  width: ${e=>P(e.$dimension)}px;
  border-radius: var(--admiral-border-radius-Small, ${e=>j(e.theme.shape)});
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
  &:not(:disabled) {
    ${Y}
  }
`,K=s.forwardRef(({type:e="button",dimension:n="lBig",disabled:o=!1,highlightFocus:c=!0,appearance:d,children:v,...f},u)=>{const p=typeof d=="object"?d.iconColor?d.iconColor:"secondary":d;return m.jsxs(J,{ref:u,type:e,$dimension:n,disabled:o,$highlightFocus:c,...f,children:[m.jsx(_,{$dimension:n,"aria-hidden":!0}),m.jsx(V,{$dimension:n,$iconColor:p,"aria-hidden":!0,children:v})]})});s.forwardRef(({className:e,...n},o)=>m.jsx(K,{ref:o,className:`close-button ${e||""}`,...n,children:m.jsx(M,{"aria-hidden":!0})}));function I(...e){return n=>{e.forEach(o=>{o&&(typeof o=="function"?o(n):o.current=n)})}}const Q=()=>{let e=0;const n=document.createElement("div");return n.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,n.style.overflow="scroll",n.style.fontSize="14px",n.style.height="50px",n.style.maxHeight="50px",n.style.width="100px",n.style.position="absolute",n.style.top="-100000px",n.style.left="-100000px",document.body.appendChild(n),e=n.offsetWidth-n.clientWidth,document.body.removeChild(n),e||16},X=["bottom","height","left","right","top","width"];function Z(e,n){const o={};return{observe(){o.rafId&&cancelAnimationFrame(o.rafId);const c=()=>{if(o.isObserving){const{bottom:d,height:v,left:f,right:u,top:p,width:l,x:t,y:i}=e.getBoundingClientRect(),r={bottom:d,height:v,left:f,right:u,top:p,width:l,x:t||f,y:i||p};((a={},h={})=>X.some($=>a[$]!==h[$]))(r,o.rect)&&(o.rect=r,n(o.rect)),o.rafId=requestAnimationFrame(c)}};o.rafId=requestAnimationFrame(c),o.isObserving=!0},unobserve(){o.rafId&&cancelAnimationFrame(o.rafId),o.isObserving&&(o.isObserving=!1)}}}const R=y.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({theme:e})=>e.zIndex.dropdown});
`,ee=({targetRef:e,targetElement:n,rootRef:o,fullContainerWidth:c,...d})=>{const v=s.useRef(null);return s.useEffect(()=>{const f=v.current,u=n??(e==null?void 0:e.current);if(f&&u){const p=Z(u,l=>{if(l){const{x:t,y:i,height:r,width:a}=l,{style:h}=f;h.top=`${i}px`,h.left=c?"0px":`${t}px`,h.height=`${r}px`,h.width=c?"100%":`${a}px`}});return p.observe(),()=>{p.unobserve()}}},[e,n,c]),W.createPortal(m.jsx(R,{ref:v,...d}),(o==null?void 0:o.current)||document.body)},te=e=>{let n=e;return n=n.replace("box-shadow: ",""),n=n.replace(";",""),n},ie=y.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,ne=y.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, ${e=>e.theme.color["Neutral/Neutral 80"]});
  ${e=>e.$dimension==="m"?B["Body/Body 2 Short"]:B["Caption/Caption 1"]}
  color: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});
  border-radius: var(--admiral-border-radius-Small, ${e=>j(e.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${e=>te(e.theme.shadow["Shadow 04"])});
  padding: ${e=>e.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,oe=y.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,re=y(ee)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:e})=>e?`flex-direction: ${e};`:""}
  z-index: var(--admiral-z-index-tooltip, ${({theme:e})=>e.zIndex.tooltip});
`,w=8;function se(e,n,o,c){const d=e.getBoundingClientRect(),v=n.getBoundingClientRect(),f=Object.entries(function(l){return{bottom:{check:(t,i)=>{const r=window.innerHeight-t.bottom-l>w+i.height,a=t.left+t.width/2>i.width/2,h=window.innerWidth-t.right-l+t.width/2>i.width/2;return r&&a&&h}},top:{check:(t,i)=>{const r=t.top>w+i.height,a=t.left+t.width/2>i.width/2,h=window.innerWidth-t.right-l+t.width/2>i.width/2;return r&&a&&h}},left:{check:(t,i)=>{const r=t.left>w+i.width,a=t.top>(i.height-t.height)/2,h=window.innerHeight-t.bottom-l>(i.height-t.height)/2;return r&&h&&a}},right:{check:(t,i)=>{const r=window.innerWidth-t.right-l>w+i.width,a=t.top>(i.height-t.height)/2,h=window.innerHeight-t.bottom-l>(i.height-t.height)/2;return r&&h&&a}},bottomRight:{check:(t,i)=>{const r=window.innerHeight-t.bottom-l>w+i.height,a=window.innerWidth-t.left-l>i.width;return r&&a}},bottomLeft:{check:(t,i)=>{const r=window.innerHeight-t.bottom-l>w+i.height,a=t.right>i.width;return r&&a}},topRight:{check:(t,i)=>{const r=t.top>w+i.height,a=window.innerWidth-t.left-l>i.width;return r&&a}},topLeft:{check:(t,i)=>{const r=t.top>w+i.height,a=t.right>i.width;return r&&a}},leftBottom:{check:(t,i)=>{const r=t.left>w+i.width,a=window.innerHeight-t.top-l>i.height;return r&&a}},leftTop:{check:(t,i)=>{const r=t.left>w+i.width,a=t.bottom>i.height;return r&&a}},rightBottom:{check:(t,i)=>{const r=window.innerWidth-t.right-l>w+i.width,a=window.innerHeight-t.top-l>i.height;return r&&a}},rightTop:{check:(t,i)=>{const r=window.innerWidth-t.right-l>w+i.width,a=t.bottom>i.height;return r&&a}},bottomPageCenter:{check:(t,i)=>{const r=window.innerHeight-t.bottom-l>w+i.height,a=window.innerWidth-l>=i.width;return r&&a}},topPageCenter:{check:(t,i)=>{const r=t.top>w+i.height,a=window.innerWidth-l>=i.width;return r&&a}}}}(o)),u=c?f.filter(l=>l[0].includes(c)&&l[1].check(d,v)):f.filter(l=>l[1].check(d,v)),p=c||"bottom";return u.length?u[0][0]:p}const ae=1500,S=s.forwardRef(({dimension:e="m",renderContent:n,targetRef:o,targetElement:c,tooltipPosition:d,...v},f)=>{const u=s.useRef(null),p=s.useRef(0),{rootRef:l}=s.useContext(F),t=s.useMemo(()=>!n()&&n()!==0,[n]),[i,r]=s.useState(""),[a,h]=s.useState(!1),[$,E]=s.useState({});return s.useEffect(()=>{(O=>{const x=c??(o==null?void 0:o.current);if(x&&u.current){const g=se(x,u.current,O,d),b=u.current;switch(g){case"leftBottom":case"leftTop":case"left":r("row-reverse"),h(!1),b.style.margin="0 8px 0 0",b.style.alignSelf=g==="leftBottom"?"flex-start":g==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":r("row"),h(!1),b.style.margin="0 0 0 8px",b.style.alignSelf=g==="rightBottom"?"flex-start":g==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":r("column-reverse"),h(g==="topPageCenter"),b.style.margin="0 0 8px 0",b.style.alignSelf=g==="topLeft"?"flex-end":g==="topRight"?"flex-start":"center";break;default:r("column"),h(g==="bottomPageCenter"),b.style.margin="8px 0 0 0",b.style.alignSelf=g==="bottomLeft"?"flex-end":g==="bottomRight"?"flex-start":"center"}}})(Q())},[n(),o,c,d,$]),s.useLayoutEffect(()=>{if(u.current&&!t){const O=new ResizeObserver(x=>{x.forEach(g=>{p.current===0?p.current=g.contentRect.height:E({})})});return O.observe(u.current),()=>{O.disconnect()}}},[t]),s.useEffect(()=>{u.current&&!t&&(u.current.style.opacity="1")},[t]),t?null:m.jsxs(re,{targetElement:c??(o==null?void 0:o.current),rootRef:l,$flexDirection:i,fullContainerWidth:a,children:[m.jsx(oe,{}),m.jsx(ie,{ref:I(f,u),children:m.jsx(ne,{role:"tooltip",$dimension:e,...v,children:n()})})]})});S.displayName="Tooltip";function ge(e){const n=o=>{const{forwardedRef:c,renderContent:d,container:v,withDelay:f,tooltipRef:u,tooltipPosition:p,...l}=o,t=!d()&&d()!==0,i=s.useRef(null),[r,a]=s.useState(!1),[h,$]=s.useState(null),[E,O]=s.useState();return s.useEffect(()=>{function x(){O(window.setTimeout(()=>a(!0),f?ae:0))}function g(){clearTimeout(E),a(!1)}if(h)return h.addEventListener("mouseenter",x),h.addEventListener("focus",x),h.addEventListener("mouseleave",g),h.addEventListener("blur",g),()=>{E&&clearTimeout(E),h.removeEventListener("mouseenter",x),h.removeEventListener("focus",x),h.removeEventListener("mouseleave",g),h.removeEventListener("blur",g)}},[h,O,a,E]),m.jsxs(m.Fragment,{children:[m.jsx(e,{...l,ref:I(c,i,$)}),r&&!t&&m.jsx(S,{targetElement:i.current,renderContent:d,container:v,tooltipPosition:p,ref:u})]})};return s.forwardRef((o,c)=>m.jsx(n,{forwardedRef:c,...o}))}const me=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",focusable:!1,...e},s.createElement("defs",null,s.createElement("clipPath",{id:"Chevron_Left_Outline_svg__a"},s.createElement("path",{fill:"#fff",fillOpacity:0,d:"M0 0h24v24H0z"}))),s.createElement("g",{clipPath:"url(#Chevron_Left_Outline_svg__a)"},s.createElement("path",{fill:"#717681",d:"M14.5 18.75c.18 0 .35-.07.48-.21.24-.27.22-.68-.04-.92l-6.37-5.74 6.41-5.55a.65.65 0 0 0 .04-.92.66.66 0 0 0-.92-.04l-6.9 5.99c-.31.28-.31.76 0 1.04l6.86 6.18c.13.12.28.17.44.17"}))),fe=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",focusable:!1,...e},s.createElement("defs",null,s.createElement("clipPath",{id:"Chevron_Right_Outline_svg__a"},s.createElement("path",{fill:"#fff",fillOpacity:0,d:"M0 0h24v24H0z"}))),s.createElement("g",{clipPath:"url(#Chevron_Right_Outline_svg__a)"},s.createElement("path",{fill:"#717681",d:"M9.47 18.75c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l6.37-5.74-6.41-5.55a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l6.9 5.99c.31.28.31.76 0 1.04l-6.86 6.18c-.13.12-.28.17-.44.17"})));export{K as I,ee as P,me as S,ge as T,fe as a,te as p,I as r};

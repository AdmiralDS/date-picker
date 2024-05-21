import{c as H,p as y,j as m}from"./styled-components.browser.esm-DrTmyIAt.js";import{r as h}from"./index-CDs2tPxN.js";import{s as N}from"./ru-lGojcqRe.js";import{r as W}from"./index-B-yFm4aN.js";import{t as T}from"./typography.es-DSm7pTxC.js";import{D as F}from"./DropdownProvider.es-BaHm9Kb7.js";var L,k;function B(){return B=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(t[d]=n[d])}return t},B.apply(this,arguments)}var M=function(t){return h.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},t),L||(L=h.createElement("defs",null,h.createElement("clipPath",{id:"CloseOutline_svg__a"},h.createElement("path",{fill:"#fff",fillOpacity:0,d:"M0 0h24v24H0z"})))),k||(k=h.createElement("g",{clipPath:"url(#CloseOutline_svg__a)"},h.createElement("path",{fill:"#717681",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"}))))};const D=24,A=20,q=16,z=6,G=4;function C(t){switch(t){case"lSmall":case"lBig":default:return D;case"mSmall":case"mBig":return A;case"s":return q}}function I(t){switch(t){case"lBig":case"mBig":default:return z;case"lSmall":case"mSmall":case"s":return G}}function j(t){return C(t)+2*I(t)}const U=H`
  & *[fill^='#'] {
    fill: ${t=>{switch(t.$iconColor){case"primary":return`var(--admiral-color-Primary_Primary60Main, ${t.theme.color["Primary/Primary 60 Main"]})`;case"secondary":return`var(--admiral-color-Neutral_Neutral50, ${t.theme.color["Neutral/Neutral 50"]})`;default:return t.$iconColor}}};
  }
`,V=y.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${U}

  & > svg {
    height: ${t=>C(t.$dimension)}px;
    width: ${t=>C(t.$dimension)}px;
  }
`,P=y.div`
  width: ${t=>j(t.$dimension)}px;
  height: ${t=>j(t.$dimension)}px;
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
    outline: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }

  &:focus {
    > ${P} {
      background-color: ${t=>t.$highlightFocus?`var(--admiral-color-Opacity_Focus, ${t.theme.color["Opacity/Focus"]})`:"transparent"};
    }
  }
  &:hover {
    > ${P} {
      background-color: var(--admiral-color-Opacity_Hover, ${t=>t.theme.color["Opacity/Hover"]});
    }
  }
  &:active {
    > ${P} {
      background-color: var(--admiral-color-Opacity_Press, ${t=>t.theme.color["Opacity/Press"]});
    }
  }
  &:focus-visible {
    > ${P} {
      background-color: transparent;
    }
  }
`,J=y.button`
  position: relative;
  padding: 0;
  margin: ${t=>I(t.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${t=>C(t.$dimension)}px;
  width: ${t=>C(t.$dimension)}px;
  border-radius: var(--admiral-border-radius-Small, ${t=>N(t.theme.shape)});
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    }
  }
  &:not(:disabled) {
    ${Y}
  }
`,K=h.forwardRef(({type:t="button",dimension:i="lBig",disabled:n=!1,highlightFocus:d=!0,appearance:c,children:x,...p},u)=>{const f=typeof c=="object"?c.iconColor?c.iconColor:"secondary":c;return m.jsxs(J,{ref:u,type:t,$dimension:i,disabled:n,$highlightFocus:d,...p,children:[m.jsx(P,{$dimension:i,"aria-hidden":!0}),m.jsx(V,{$dimension:i,$iconColor:f,"aria-hidden":!0,children:x})]})});h.forwardRef(({className:t,...i},n)=>m.jsx(K,{ref:n,className:`close-button ${t||""}`,...i,children:m.jsx(M,{"aria-hidden":!0})}));function _(...t){return i=>{t.forEach(n=>{n&&(typeof n=="function"?n(i):n.current=i)})}}const Q=()=>{let t=0;const i=document.createElement("div");return i.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,i.style.overflow="scroll",i.style.fontSize="14px",i.style.height="50px",i.style.maxHeight="50px",i.style.width="100px",i.style.position="absolute",i.style.top="-100000px",i.style.left="-100000px",document.body.appendChild(i),t=i.offsetWidth-i.clientWidth,document.body.removeChild(i),t||16},X=["bottom","height","left","right","top","width"];function Z(t,i){const n={};return{observe(){n.rafId&&cancelAnimationFrame(n.rafId);const d=()=>{if(n.isObserving){const{bottom:c,height:x,left:p,right:u,top:f,width:a,x:e,y:o}=t.getBoundingClientRect(),r={bottom:c,height:x,left:p,right:u,top:f,width:a,x:e||p,y:o||f};((s={},l={})=>X.some($=>s[$]!==l[$]))(r,n.rect)&&(n.rect=r,i(n.rect)),n.rafId=requestAnimationFrame(d)}};n.rafId=requestAnimationFrame(d),n.isObserving=!0},unobserve(){n.rafId&&cancelAnimationFrame(n.rafId),n.isObserving&&(n.isObserving=!1)}}}const R=y.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({theme:t})=>t.zIndex.dropdown});
`,tt=({targetRef:t,targetElement:i,rootRef:n,fullContainerWidth:d,...c})=>{const x=h.useRef(null);return h.useEffect(()=>{const p=x.current,u=i??(t==null?void 0:t.current);if(p&&u){const f=Z(u,a=>{if(a){const{x:e,y:o,height:r,width:s}=a,{style:l}=p;l.top=`${o}px`,l.left=d?"0px":`${e}px`,l.height=`${r}px`,l.width=d?"100%":`${s}px`}});return f.observe(),()=>{f.unobserve()}}},[t,i,d]),W.createPortal(m.jsx(R,{ref:x,...c}),(n==null?void 0:n.current)||document.body)},et=t=>{let i=t;return i=i.replace("box-shadow: ",""),i=i.replace(";",""),i},ot=y.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,it=y.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, ${t=>t.theme.color["Neutral/Neutral 80"]});
  ${t=>t.$dimension==="m"?T["Body/Body 2 Short"]:T["Caption/Caption 1"]}
  color: var(--admiral-color-Neutral_Neutral00, ${t=>t.theme.color["Neutral/Neutral 00"]});
  border-radius: var(--admiral-border-radius-Small, ${t=>N(t.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${t=>et(t.theme.shadow["Shadow 04"])});
  padding: ${t=>t.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,nt=y.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,rt=y(tt)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:t})=>t?`flex-direction: ${t};`:""}
  z-index: var(--admiral-z-index-tooltip, ${({theme:t})=>t.zIndex.tooltip});
`,w=8;function st(t,i,n,d){const c=t.getBoundingClientRect(),x=i.getBoundingClientRect(),p=Object.entries(function(a){return{bottom:{check:(e,o)=>{const r=window.innerHeight-e.bottom-a>w+o.height,s=e.left+e.width/2>o.width/2,l=window.innerWidth-e.right-a+e.width/2>o.width/2;return r&&s&&l}},top:{check:(e,o)=>{const r=e.top>w+o.height,s=e.left+e.width/2>o.width/2,l=window.innerWidth-e.right-a+e.width/2>o.width/2;return r&&s&&l}},left:{check:(e,o)=>{const r=e.left>w+o.width,s=e.top>(o.height-e.height)/2,l=window.innerHeight-e.bottom-a>(o.height-e.height)/2;return r&&l&&s}},right:{check:(e,o)=>{const r=window.innerWidth-e.right-a>w+o.width,s=e.top>(o.height-e.height)/2,l=window.innerHeight-e.bottom-a>(o.height-e.height)/2;return r&&l&&s}},bottomRight:{check:(e,o)=>{const r=window.innerHeight-e.bottom-a>w+o.height,s=window.innerWidth-e.left-a>o.width;return r&&s}},bottomLeft:{check:(e,o)=>{const r=window.innerHeight-e.bottom-a>w+o.height,s=e.right>o.width;return r&&s}},topRight:{check:(e,o)=>{const r=e.top>w+o.height,s=window.innerWidth-e.left-a>o.width;return r&&s}},topLeft:{check:(e,o)=>{const r=e.top>w+o.height,s=e.right>o.width;return r&&s}},leftBottom:{check:(e,o)=>{const r=e.left>w+o.width,s=window.innerHeight-e.top-a>o.height;return r&&s}},leftTop:{check:(e,o)=>{const r=e.left>w+o.width,s=e.bottom>o.height;return r&&s}},rightBottom:{check:(e,o)=>{const r=window.innerWidth-e.right-a>w+o.width,s=window.innerHeight-e.top-a>o.height;return r&&s}},rightTop:{check:(e,o)=>{const r=window.innerWidth-e.right-a>w+o.width,s=e.bottom>o.height;return r&&s}},bottomPageCenter:{check:(e,o)=>{const r=window.innerHeight-e.bottom-a>w+o.height,s=window.innerWidth-a>=o.width;return r&&s}},topPageCenter:{check:(e,o)=>{const r=e.top>w+o.height,s=window.innerWidth-a>=o.width;return r&&s}}}}(n)),u=d?p.filter(a=>a[0].includes(d)&&a[1].check(c,x)):p.filter(a=>a[1].check(c,x)),f=d||"bottom";return u.length?u[0][0]:f}const at=1500,S=h.forwardRef(({dimension:t="m",renderContent:i,targetRef:n,targetElement:d,tooltipPosition:c,...x},p)=>{const u=h.useRef(null),f=h.useRef(0),{rootRef:a}=h.useContext(F),e=h.useMemo(()=>!i()&&i()!==0,[i]),[o,r]=h.useState(""),[s,l]=h.useState(!1),[$,E]=h.useState({});return h.useEffect(()=>{(O=>{const v=d??(n==null?void 0:n.current);if(v&&u.current){const g=st(v,u.current,O,c),b=u.current;switch(g){case"leftBottom":case"leftTop":case"left":r("row-reverse"),l(!1),b.style.margin="0 8px 0 0",b.style.alignSelf=g==="leftBottom"?"flex-start":g==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":r("row"),l(!1),b.style.margin="0 0 0 8px",b.style.alignSelf=g==="rightBottom"?"flex-start":g==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":r("column-reverse"),l(g==="topPageCenter"),b.style.margin="0 0 8px 0",b.style.alignSelf=g==="topLeft"?"flex-end":g==="topRight"?"flex-start":"center";break;default:r("column"),l(g==="bottomPageCenter"),b.style.margin="8px 0 0 0",b.style.alignSelf=g==="bottomLeft"?"flex-end":g==="bottomRight"?"flex-start":"center"}}})(Q())},[i(),n,d,c,$]),h.useLayoutEffect(()=>{if(u.current&&!e){const O=new ResizeObserver(v=>{v.forEach(g=>{f.current===0?f.current=g.contentRect.height:E({})})});return O.observe(u.current),()=>{O.disconnect()}}},[e]),h.useEffect(()=>{u.current&&!e&&(u.current.style.opacity="1")},[e]),e?null:m.jsxs(rt,{targetElement:d??(n==null?void 0:n.current),rootRef:a,$flexDirection:o,fullContainerWidth:s,children:[m.jsx(nt,{}),m.jsx(ot,{ref:_(p,u),children:m.jsx(it,{role:"tooltip",$dimension:t,...x,children:i()})})]})});S.displayName="Tooltip";function mt(t){const i=n=>{const{forwardedRef:d,renderContent:c,container:x,withDelay:p,tooltipRef:u,tooltipPosition:f,...a}=n,e=!c()&&c()!==0,o=h.useRef(null),[r,s]=h.useState(!1),[l,$]=h.useState(null),[E,O]=h.useState();return h.useEffect(()=>{function v(){O(window.setTimeout(()=>s(!0),p?at:0))}function g(){clearTimeout(E),s(!1)}if(l)return l.addEventListener("mouseenter",v),l.addEventListener("focus",v),l.addEventListener("mouseleave",g),l.addEventListener("blur",g),()=>{E&&clearTimeout(E),l.removeEventListener("mouseenter",v),l.removeEventListener("focus",v),l.removeEventListener("mouseleave",g),l.removeEventListener("blur",g)}},[l,O,s,E]),m.jsxs(m.Fragment,{children:[m.jsx(t,{...a,ref:_(d,o,$)}),r&&!e&&m.jsx(S,{targetElement:o.current,renderContent:c,container:x,tooltipPosition:f,ref:u})]})};return h.forwardRef((n,d)=>m.jsx(i,{forwardedRef:d,...n}))}export{K as I,mt as T};

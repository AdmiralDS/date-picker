import{c as j,p as y,j as m,t as C}from"./typography.es-DO68Qy5l.js";import{r as h}from"./index-CDs2tPxN.js";import{L as N}from"./index-ujbVYY4f.js";import{r as W}from"./index-B-yFm4aN.js";import{D as F}from"./DropdownProvider.es-D0cPpzFA.js";var T;function B(){return B=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var u in n)({}).hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},B.apply(null,arguments)}var _=function(t){return h.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},t),T||(T=h.createElement("path",{fill:"#717681",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 0 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};const M=24,D=20,A=16,q=6,z=4;function P(t){switch(t){case"lSmall":case"lBig":default:return M;case"mSmall":case"mBig":return D;case"s":return A}}function H(t){switch(t){case"lBig":case"mBig":default:return q;case"lSmall":case"mSmall":case"s":return z}}function k(t){return P(t)+2*H(t)}const G=j`
  & *[fill^='#'] {
    fill: ${t=>{switch(t.$iconColor){case"primary":return`var(--admiral-color-Primary_Primary60Main, ${t.theme.color["Primary/Primary 60 Main"]})`;case"secondary":return`var(--admiral-color-Neutral_Neutral50, ${t.theme.color["Neutral/Neutral 50"]})`;default:return t.$iconColor}}};
  }
`,U=y.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${G}

  & > svg {
    height: ${t=>P(t.$dimension)}px;
    width: ${t=>P(t.$dimension)}px;
  }
`,L=y.div`
  width: ${t=>k(t.$dimension)}px;
  height: ${t=>k(t.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,V=j`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }

  &:focus {
    > ${L} {
      background-color: ${t=>t.$highlightFocus?`var(--admiral-color-Opacity_Focus, ${t.theme.color["Opacity/Focus"]})`:"transparent"};
    }
  }
  &:hover {
    > ${L} {
      background-color: var(--admiral-color-Opacity_Hover, ${t=>t.theme.color["Opacity/Hover"]});
    }
  }
  &:active {
    > ${L} {
      background-color: var(--admiral-color-Opacity_Press, ${t=>t.theme.color["Opacity/Press"]});
    }
  }
  &:focus-visible {
    > ${L} {
      background-color: transparent;
    }
  }
`,Y=y.button`
  position: relative;
  padding: 0;
  margin: ${t=>H(t.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${t=>P(t.$dimension)}px;
  width: ${t=>P(t.$dimension)}px;
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
    ${V}
  }
`,J=h.forwardRef(({type:t="button",dimension:i="lBig",disabled:n=!1,highlightFocus:u=!0,appearance:c,children:x,...p},d)=>{const f=typeof c=="object"?c.iconColor?c.iconColor:"secondary":c;return m.jsxs(Y,{ref:d,type:t,$dimension:i,disabled:n,$highlightFocus:u,...p,children:[m.jsx(L,{$dimension:i,"aria-hidden":!0}),m.jsx(U,{$dimension:i,$iconColor:f,"aria-hidden":!0,children:x})]})});h.forwardRef(({className:t,...i},n)=>m.jsx(J,{ref:n,className:`close-button ${t||""}`,...i,children:m.jsx(_,{"aria-hidden":!0})}));function I(...t){return i=>{t.forEach(n=>{n&&(typeof n=="function"?n(i):n.current=i)})}}const K=()=>{let t=0;const i=document.createElement("div");return i.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,i.style.overflow="scroll",i.style.fontSize="14px",i.style.height="50px",i.style.maxHeight="50px",i.style.width="100px",i.style.position="absolute",i.style.top="-100000px",i.style.left="-100000px",document.body.appendChild(i),t=i.offsetWidth-i.clientWidth,document.body.removeChild(i),t||16},Q=["bottom","height","left","right","top","width"];function X(t,i){const n={};return{observe(){n.rafId&&cancelAnimationFrame(n.rafId);const u=()=>{if(n.isObserving){const{bottom:c,height:x,left:p,right:d,top:f,width:a,x:e,y:o}=t.getBoundingClientRect(),r={bottom:c,height:x,left:p,right:d,top:f,width:a,x:e||p,y:o||f};((s={},l={})=>Q.some($=>s[$]!==l[$]))(r,n.rect)&&(n.rect=r,i(n.rect)),n.rafId=requestAnimationFrame(u)}};n.rafId=requestAnimationFrame(u),n.isObserving=!0},unobserve(){n.rafId&&cancelAnimationFrame(n.rafId),n.isObserving&&(n.isObserving=!1)}}}const Z=y.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({theme:t})=>t.zIndex.dropdown});
`,R=({targetRef:t,targetElement:i,rootRef:n,fullContainerWidth:u,...c})=>{const x=h.useRef(null);return h.useEffect(()=>{const p=x.current,d=i??(t==null?void 0:t.current);if(p&&d){const f=X(d,a=>{if(a){const{x:e,y:o,height:r,width:s}=a,{style:l}=p;l.top=`${o}px`,l.left=u?"0px":`${e}px`,l.height=`${r}px`,l.width=u?"100%":`${s}px`}});return f.observe(),()=>{f.unobserve()}}},[t,i,u]),W.createPortal(m.jsx(Z,{ref:x,...c}),(n==null?void 0:n.current)||document.body)},tt=t=>{let i=t;return i=i.replace("box-shadow: ",""),i=i.replace(";",""),i},et=y.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,ot=y.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, ${t=>t.theme.color["Neutral/Neutral 80"]});
  ${t=>t.$dimension==="m"?C["Body/Body 2 Short"]:C["Caption/Caption 1"]}
  color: var(--admiral-color-Neutral_Neutral00, ${t=>t.theme.color["Neutral/Neutral 00"]});
  border-radius: var(--admiral-border-radius-Small, ${t=>N(t.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${t=>tt(t.theme.shadow["Shadow 04"])});
  padding: ${t=>t.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,it=y.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,nt=y(R)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:t})=>t?`flex-direction: ${t};`:""}
  z-index: var(--admiral-z-index-tooltip, ${({theme:t})=>t.zIndex.tooltip});
`,w=8;function rt(t,i,n,u){const c=t.getBoundingClientRect(),x=i.getBoundingClientRect(),p=Object.entries(function(a){return{bottom:{check:(e,o)=>{const r=window.innerHeight-e.bottom-a>w+o.height,s=e.left+e.width/2>o.width/2,l=window.innerWidth-e.right-a+e.width/2>o.width/2;return r&&s&&l}},top:{check:(e,o)=>{const r=e.top>w+o.height,s=e.left+e.width/2>o.width/2,l=window.innerWidth-e.right-a+e.width/2>o.width/2;return r&&s&&l}},left:{check:(e,o)=>{const r=e.left>w+o.width,s=e.top>(o.height-e.height)/2,l=window.innerHeight-e.bottom-a>(o.height-e.height)/2;return r&&l&&s}},right:{check:(e,o)=>{const r=window.innerWidth-e.right-a>w+o.width,s=e.top>(o.height-e.height)/2,l=window.innerHeight-e.bottom-a>(o.height-e.height)/2;return r&&l&&s}},bottomRight:{check:(e,o)=>{const r=window.innerHeight-e.bottom-a>w+o.height,s=window.innerWidth-e.left-a>o.width;return r&&s}},bottomLeft:{check:(e,o)=>{const r=window.innerHeight-e.bottom-a>w+o.height,s=e.right>o.width;return r&&s}},topRight:{check:(e,o)=>{const r=e.top>w+o.height,s=window.innerWidth-e.left-a>o.width;return r&&s}},topLeft:{check:(e,o)=>{const r=e.top>w+o.height,s=e.right>o.width;return r&&s}},leftBottom:{check:(e,o)=>{const r=e.left>w+o.width,s=window.innerHeight-e.top-a>o.height;return r&&s}},leftTop:{check:(e,o)=>{const r=e.left>w+o.width,s=e.bottom>o.height;return r&&s}},rightBottom:{check:(e,o)=>{const r=window.innerWidth-e.right-a>w+o.width,s=window.innerHeight-e.top-a>o.height;return r&&s}},rightTop:{check:(e,o)=>{const r=window.innerWidth-e.right-a>w+o.width,s=e.bottom>o.height;return r&&s}},bottomPageCenter:{check:(e,o)=>{const r=window.innerHeight-e.bottom-a>w+o.height,s=window.innerWidth-a>=o.width;return r&&s}},topPageCenter:{check:(e,o)=>{const r=e.top>w+o.height,s=window.innerWidth-a>=o.width;return r&&s}}}}(n)),d=u?p.filter(a=>a[0].includes(u)&&a[1].check(c,x)):p.filter(a=>a[1].check(c,x)),f=u||"bottom";return d.length?d[0][0]:f}const st=1500,S=h.forwardRef(({dimension:t="m",renderContent:i,targetRef:n,targetElement:u,tooltipPosition:c,...x},p)=>{const d=h.useRef(null),f=h.useRef(0),{rootRef:a}=h.useContext(F),e=h.useMemo(()=>!i()&&i()!==0,[i]),[o,r]=h.useState(""),[s,l]=h.useState(!1),[$,E]=h.useState({});return h.useEffect(()=>{(O=>{const v=u??(n==null?void 0:n.current);if(v&&d.current){const g=rt(v,d.current,O,c),b=d.current;switch(g){case"leftBottom":case"leftTop":case"left":r("row-reverse"),l(!1),b.style.margin="0 8px 0 0",b.style.alignSelf=g==="leftBottom"?"flex-start":g==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":r("row"),l(!1),b.style.margin="0 0 0 8px",b.style.alignSelf=g==="rightBottom"?"flex-start":g==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":r("column-reverse"),l(g==="topPageCenter"),b.style.margin="0 0 8px 0",b.style.alignSelf=g==="topLeft"?"flex-end":g==="topRight"?"flex-start":"center";break;default:r("column"),l(g==="bottomPageCenter"),b.style.margin="8px 0 0 0",b.style.alignSelf=g==="bottomLeft"?"flex-end":g==="bottomRight"?"flex-start":"center"}}})(K())},[i(),n,u,c,$]),h.useLayoutEffect(()=>{if(d.current&&!e){const O=new ResizeObserver(v=>{v.forEach(g=>{f.current===0?f.current=g.contentRect.height:E({})})});return O.observe(d.current),()=>{O.disconnect()}}},[e]),h.useEffect(()=>{d.current&&!e&&(d.current.style.opacity="1")},[e]),e?null:m.jsxs(nt,{targetElement:u??(n==null?void 0:n.current),rootRef:a,$flexDirection:o,fullContainerWidth:s,children:[m.jsx(it,{}),m.jsx(et,{ref:I(p,d),children:m.jsx(ot,{role:"tooltip",$dimension:t,...x,children:i()})})]})});S.displayName="Tooltip";function ct(t){const i=n=>{const{forwardedRef:u,renderContent:c,container:x,withDelay:p,tooltipRef:d,tooltipPosition:f,...a}=n,e=!c()&&c()!==0,o=h.useRef(null),[r,s]=h.useState(!1),[l,$]=h.useState(null),[E,O]=h.useState();return h.useEffect(()=>{function v(){O(window.setTimeout(()=>s(!0),p?st:0))}function g(){clearTimeout(E),s(!1)}if(l)return l.addEventListener("mouseenter",v),l.addEventListener("focus",v),l.addEventListener("mouseleave",g),l.addEventListener("blur",g),()=>{E&&clearTimeout(E),l.removeEventListener("mouseenter",v),l.removeEventListener("focus",v),l.removeEventListener("mouseleave",g),l.removeEventListener("blur",g)}},[l,O,s,E]),m.jsxs(m.Fragment,{children:[m.jsx(t,{...a,ref:I(u,o,$)}),r&&!e&&m.jsx(S,{targetElement:o.current,renderContent:c,container:x,tooltipPosition:f,ref:d})]})};return h.forwardRef((n,u)=>m.jsx(i,{forwardedRef:u,...n}))}const gt=t=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",focusable:!1,...t},h.createElement("path",{fill:"#717681",d:"M14.5 18.75c.18 0 .35-.07.48-.21.24-.27.22-.68-.04-.92l-6.37-5.74 6.41-5.55a.65.65 0 0 0 .04-.92.66.66 0 0 0-.92-.04l-6.9 5.99c-.31.28-.31.76 0 1.04l6.86 6.18c.13.12.28.17.44.17"})),mt=t=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",focusable:!1,...t},h.createElement("path",{fill:"#717681",d:"M9.47 18.75c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l6.37-5.74-6.41-5.55a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l6.9 5.99c.31.28.31.76 0 1.04l-6.86 6.18c-.13.12-.28.17-.44.17"}));export{J as I,R as P,gt as S,ct as T,mt as a,tt as p,I as r};

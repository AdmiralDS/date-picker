import{j as m}from"./jsx-runtime-C8_8iAox.js";import{r as l}from"./index-Dkaqzkgy.js";import{d as w,l as L}from"./JRhItxCR-CthsVowi.js";import{r as I}from"./index-TIupm8Qa.js";import{t as E,D as F}from"./DropdownProvider.es-CM2w3VWp.js";function k(e){switch(e.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function se(e){switch(e.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}const W=e=>{let r=e;return r=r.replace("box-shadow: ",""),r=r.replace(";",""),r},S=(e,r)=>{return(i=e,Object.keys(i)).some(u=>e[u]!==r[u]);var i};function _(e,r){const i={};return{observe(){i.rafId&&cancelAnimationFrame(i.rafId);const u=()=>{if(i.isObserving){const{scrollHeight:g,scrollLeft:p,scrollTop:d,scrollWidth:f}=e,{bottom:v,height:a,left:t,right:o,top:n,width:s,x:h,y:$}=e.getBoundingClientRect(),x={bottom:v,height:a,left:t,right:o,top:n,width:s,x:h||t,y:$||n,scrollHeight:g,scrollLeft:p,scrollTop:d,scrollWidth:f};S(x,i.rect||{})&&(i.rect=x,r(x)),i.rafId=requestAnimationFrame(u)}};i.rafId=requestAnimationFrame(u),i.isObserving=!0},unobserve(){i.rafId&&cancelAnimationFrame(i.rafId),i.isObserving&&(i.isObserving=!1)}}}const M=w.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({theme:e})=>e.zIndex.dropdown});
`,D=({targetElement:e,rootRef:r,fullContainerWidth:i,...u})=>{const g=l.useRef(null);return l.useEffect(()=>{const p=g.current;if(p&&e){const d=_(e,f=>{if(f){const{x:v,y:a,height:t,width:o}=f,{style:n}=p;n.top=`${a}px`,n.left=i?"0px":`${v}px`,n.height=`${t}px`,n.width=i?"100%":`${o}px`}});return d.observe(),()=>{d.unobserve()}}},[e,i]),I.createPortal(m.jsx(M,{ref:g,...u}),(r==null?void 0:r.current)||document.body)};function j(...e){return r=>{e.forEach(i=>{i&&(typeof i=="function"?i(r):i.current=r)})}}function A(e){return l.forwardRef(e)}var P;function B(){return B=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var u in i)({}).hasOwnProperty.call(i,u)&&(e[u]=i[u])}return e},B.apply(null,arguments)}var q=function(e){return l.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),P||(P=l.createElement("path",{fill:"#717681",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};function T(e){switch(e){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function N(e){switch(e){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function C(e){return T(e)+2*N(e)}const G=L`
  & *[fill^='#'] {
    fill: ${e=>{switch(e.$iconColor){case"primary":return`var(--admiral-color-Primary_Primary60Main, ${e.theme.color["Primary/Primary 60 Main"]})`;case"secondary":return`var(--admiral-color-Neutral_Neutral50, ${e.theme.color["Neutral/Neutral 50"]})`;default:return e.$iconColor}}};
  }
`,K=w.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${G}

  & > svg {
    height: ${e=>T(e.$dimension)}px;
    width: ${e=>T(e.$dimension)}px;
  }
`,O=w.div`
  width: ${e=>C(e.$dimension)}px;
  height: ${e=>C(e.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,U=L`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }

  &:focus {
    > ${O} {
      background-color: ${e=>e.$highlightFocus?`var(--admiral-color-Opacity_Focus, ${e.theme.color["Opacity/Focus"]})`:"transparent"};
    }
  }
  &:hover {
    > ${O} {
      background-color: var(--admiral-color-Opacity_Hover, ${e=>e.theme.color["Opacity/Hover"]});
    }
  }
  &:active {
    > ${O} {
      background-color: var(--admiral-color-Opacity_Press, ${e=>e.theme.color["Opacity/Press"]});
    }
  }
  &:focus-visible {
    > ${O} {
      background-color: transparent;
    }
  }
`,V=w.button`
  position: relative;
  padding: 0;
  margin: ${e=>N(e.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${e=>T(e.$dimension)}px;
  width: ${e=>T(e.$dimension)}px;
  border-radius: var(--admiral-border-radius-Small, ${e=>k(e.theme.shape)});
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
    ${U}
  }
`,Y=l.forwardRef(({type:e="button",dimension:r="lBig",disabled:i=!1,highlightFocus:u=!0,appearance:g,children:p,...d},f)=>{const v=typeof g=="object"?g.iconColor?g.iconColor:"secondary":g;return m.jsxs(V,{ref:f,type:e,$dimension:r,disabled:i,$highlightFocus:u,...d,children:[m.jsx(O,{$dimension:r,"aria-hidden":!0}),m.jsx(K,{$dimension:r,$iconColor:v,"aria-hidden":!0,children:p})]})});l.forwardRef(({className:e,...r},i)=>m.jsx(Y,{ref:i,className:`close-button ${e||""}`,...r,children:m.jsx(q,{"aria-hidden":!0})}));const z=()=>{let e=0;const r=document.createElement("div");return r.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,r.style.overflow="scroll",r.style.fontSize="14px",r.style.height="50px",r.style.maxHeight="50px",r.style.width="100px",r.style.position="absolute",r.style.top="-100000px",r.style.left="-100000px",document.body.appendChild(r),e=r.offsetWidth-r.clientWidth,document.body.removeChild(r),e||16},J=w.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,Q=w.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, ${e=>e.theme.color["Neutral/Neutral 80"]});
  ${e=>e.$dimension==="m"?E["Body/Body 2 Short"]:E["Caption/Caption 1"]}
  color: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});
  border-radius: var(--admiral-border-radius-Small, ${e=>k(e.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${e=>W(e.theme.shadow["Shadow 04"])});
  padding: ${e=>e.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,X=w.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,Z=w(D)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:e})=>e?`flex-direction: ${e};`:""}
  z-index: var(--admiral-z-index-tooltip, ${({theme:e})=>e.zIndex.tooltip});
`;function R(e,r,i,u){const g=e.getBoundingClientRect(),p=r.getBoundingClientRect(),d=Object.entries(function(a){return{bottom:{check:(t,o)=>{const n=globalThis.innerHeight-t.bottom-a>8+o.height,s=t.left+t.width/2>o.width/2,h=globalThis.innerWidth-t.right-a+t.width/2>o.width/2;return n&&s&&h}},top:{check:(t,o)=>{const n=t.top>8+o.height,s=t.left+t.width/2>o.width/2,h=globalThis.innerWidth-t.right-a+t.width/2>o.width/2;return n&&s&&h}},left:{check:(t,o)=>{const n=t.left>8+o.width,s=t.top>(o.height-t.height)/2,h=globalThis.innerHeight-t.bottom-a>(o.height-t.height)/2;return n&&h&&s}},right:{check:(t,o)=>{const n=globalThis.innerWidth-t.right-a>8+o.width,s=t.top>(o.height-t.height)/2,h=globalThis.innerHeight-t.bottom-a>(o.height-t.height)/2;return n&&h&&s}},bottomRight:{check:(t,o)=>{const n=globalThis.innerHeight-t.bottom-a>8+o.height,s=globalThis.innerWidth-t.left-a>o.width;return n&&s}},bottomLeft:{check:(t,o)=>{const n=globalThis.innerHeight-t.bottom-a>8+o.height,s=t.right>o.width;return n&&s}},topRight:{check:(t,o)=>{const n=t.top>8+o.height,s=globalThis.innerWidth-t.left-a>o.width;return n&&s}},topLeft:{check:(t,o)=>{const n=t.top>8+o.height,s=t.right>o.width;return n&&s}},leftBottom:{check:(t,o)=>{const n=t.left>8+o.width,s=globalThis.innerHeight-t.top-a>o.height;return n&&s}},leftTop:{check:(t,o)=>{const n=t.left>8+o.width,s=t.bottom>o.height;return n&&s}},rightBottom:{check:(t,o)=>{const n=globalThis.innerWidth-t.right-a>8+o.width,s=globalThis.innerHeight-t.top-a>o.height;return n&&s}},rightTop:{check:(t,o)=>{const n=globalThis.innerWidth-t.right-a>8+o.width,s=t.bottom>o.height;return n&&s}},bottomPageCenter:{check:(t,o)=>{const n=globalThis.innerHeight-t.bottom-a>8+o.height,s=globalThis.innerWidth-a>=o.width;return n&&s}},topPageCenter:{check:(t,o)=>{const n=t.top>8+o.height,s=globalThis.innerWidth-a>=o.width;return n&&s}}}}(i)),f=u?d.filter(a=>a[0].includes(u)&&a[1].check(g,p)):d.filter(a=>a[1].check(g,p)),v=u||"bottom";return f.length?f[0][0]:v}const ee=1500,H=l.forwardRef(({dimension:e="m",renderContent:r,targetElement:i,tooltipPosition:u,...g},p)=>{const d=l.useRef(null),f=l.useRef(0),{rootRef:v}=l.useContext(F),a=l.useMemo(()=>!r()&&r()!==0,[r]),[t,o]=l.useState(),[n,s]=l.useState(!1),[h,$]=l.useState({});return l.useEffect(()=>{(x=>{const y=i;if(y&&d.current){const c=R(y,d.current,x,u),b=d.current;switch(c){case"leftBottom":case"leftTop":case"left":o("row-reverse"),s(!1),b.style.margin="0 8px 0 0",b.style.alignSelf=c==="leftBottom"?"flex-start":c==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":o("row"),s(!1),b.style.margin="0 0 0 8px",b.style.alignSelf=c==="rightBottom"?"flex-start":c==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":o("column-reverse"),s(c==="topPageCenter"),b.style.margin="0 0 8px 0",b.style.alignSelf=c==="topLeft"?"flex-end":c==="topRight"?"flex-start":"center";break;default:o("column"),s(c==="bottomPageCenter"),b.style.margin="8px 0 0 0",b.style.alignSelf=c==="bottomLeft"?"flex-end":c==="bottomRight"?"flex-start":"center"}}})(z())},[r(),i,u,h]),l.useLayoutEffect(()=>{if(d.current&&!a){const x=new ResizeObserver(y=>{y.forEach(c=>{f.current===0?f.current=c.contentRect.height:$({})})});return x.observe(d.current),()=>{x.disconnect()}}},[a]),l.useEffect(()=>{d.current&&!a&&(d.current.style.opacity="1")},[a]),a?null:m.jsxs(Z,{targetElement:i,rootRef:v,$flexDirection:t,fullContainerWidth:n,children:[m.jsx(X,{}),m.jsx(J,{ref:j(p,d),children:m.jsx(Q,{role:"tooltip",$dimension:e,...g,children:r()})})]})});H.displayName="Tooltip";function ae(e){return A((r,i)=>{const{renderContent:u,container:g,withDelay:p,tooltipRef:d,tooltipPosition:f,tooltipDimension:v,...a}=r,t=!u()&&u()!==0,o=l.useRef(null),[n,s]=l.useState(!1),[h,$]=l.useState(null),[x,y]=l.useState();return l.useEffect(()=>{function c(){y(setTimeout(()=>s(!0),p?ee:0))}function b(){clearTimeout(x),s(!1)}if(h)return h.addEventListener("mouseenter",c),h.addEventListener("focus",c),h.addEventListener("mouseleave",b),h.addEventListener("blur",b),()=>{x&&clearTimeout(x),h.removeEventListener("mouseenter",c),h.removeEventListener("focus",c),h.removeEventListener("mouseleave",b),h.removeEventListener("blur",b)}},[h,y,s,x]),m.jsxs(m.Fragment,{children:[m.jsx(e,{...a,ref:j(i,o,$)}),n&&!t&&m.jsx(H,{targetElement:o.current,renderContent:u,container:g,tooltipPosition:f,dimension:v,ref:d})]})})}const le=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",focusable:!1,...e},l.createElement("path",{fill:"#717681",d:"M14.5 18.75c.18 0 .35-.07.48-.21.24-.27.22-.68-.04-.92l-6.37-5.74 6.41-5.55a.65.65 0 0 0 .04-.92.66.66 0 0 0-.92-.04l-6.9 5.99c-.31.28-.31.76 0 1.04l6.86 6.18c.13.12.28.17.44.17"})),ue=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",focusable:!1,...e},l.createElement("path",{fill:"#717681",d:"M9.47 18.75c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l6.37-5.74-6.41-5.55a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l6.9 5.99c.31.28.31.76 0 1.04l-6.86 6.18c-.13.12-.28.17-.44.17"}));export{Y as I,D as P,le as S,ae as T,ue as a,A as f,se as m,W as p,j as r};

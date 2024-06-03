import{r as Bt,R}from"./index-CDs2tPxN.js";import{_ as K,a as P}from"./tslib.es6-CRos2fHm.js";var pe={exports:{}},Ct={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke=Bt,Je=Symbol.for("react.element"),Ze=Symbol.for("react.fragment"),Qe=Object.prototype.hasOwnProperty,Ve=Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tr={key:!0,ref:!0,__self:!0,__source:!0};function ge(t,e,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)Qe.call(e,n)&&!tr.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:Je,type:t,key:o,ref:a,props:i,_owner:Ve.current}}Ct.Fragment=Ze;Ct.jsx=ge;Ct.jsxs=ge;pe.exports=Ct;var on=pe.exports,S="-ms-",at="-moz-",y="-webkit-",ye="comm",$t="rule",Ut="decl",er="@import",ve="@keyframes",rr="@layer",Se=Math.abs,Kt=String.fromCharCode,jt=Object.assign;function nr(t,e){return z(t,0)^45?(((e<<2^z(t,0))<<2^z(t,1))<<2^z(t,2))<<2^z(t,3):0}function xe(t){return t.trim()}function O(t,e){return(t=e.exec(t))?t[0]:t}function c(t,e,r){return t.replace(e,r)}function gt(t,e,r){return t.indexOf(e,r)}function z(t,e){return t.charCodeAt(e)|0}function J(t,e,r){return t.slice(e,r)}function k(t){return t.length}function we(t){return t.length}function ot(t,e){return e.push(t),t}function ir(t,e){return t.map(e).join("")}function ne(t,e){return t.filter(function(r){return!O(r,e)})}var zt=1,Z=1,_e=0,E=0,C=0,tt="";function Pt(t,e,r,n,i,o,a,l){return{value:t,root:e,parent:r,type:n,props:i,children:o,line:zt,column:Z,length:a,return:"",siblings:l}}function j(t,e){return jt(Pt("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function q(t){for(;t.root;)t=j(t.root,{children:[t]});ot(t,t.siblings)}function or(){return C}function ar(){return C=E>0?z(tt,--E):0,Z--,C===10&&(Z=1,zt--),C}function F(){return C=E<_e?z(tt,E++):0,Z++,C===10&&(Z=1,zt++),C}function Y(){return z(tt,E)}function yt(){return E}function It(t,e){return J(tt,t,e)}function Dt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sr(t){return zt=Z=1,_e=k(tt=t),E=0,[]}function fr(t){return tt="",t}function Lt(t){return xe(It(E-1,Mt(t===91?t+2:t===40?t+1:t)))}function lr(t){for(;(C=Y())&&C<33;)F();return Dt(t)>2||Dt(C)>3?"":" "}function cr(t,e){for(;--e&&F()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return It(t,yt()+(e<6&&Y()==32&&F()==32))}function Mt(t){for(;F();)switch(C){case t:return E;case 34:case 39:t!==34&&t!==39&&Mt(C);break;case 40:t===41&&Mt(t);break;case 92:F();break}return E}function ur(t,e){for(;F()&&t+C!==57;)if(t+C===84&&Y()===47)break;return"/*"+It(e,E-1)+"*"+Kt(t===47?t:F())}function mr(t){for(;!Dt(Y());)F();return It(t,E)}function dr(t){return fr(vt("",null,null,null,[""],t=sr(t),0,[0],t))}function vt(t,e,r,n,i,o,a,l,s){for(var f=0,m=0,h=a,g=0,p=0,w=0,H=1,I=1,B=1,_=0,x="",b=i,$=o,v=n,d=x;I;)switch(w=_,_=F()){case 40:if(w!=108&&z(d,h-1)==58){gt(d+=c(Lt(_),"&","&\f"),"&\f",Se(f?l[f-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:d+=Lt(_);break;case 9:case 10:case 13:case 32:d+=lr(w);break;case 92:d+=cr(yt()-1,7);continue;case 47:switch(Y()){case 42:case 47:ot(hr(ur(F(),yt()),e,r,s),s);break;default:d+="/"}break;case 123*H:l[f++]=k(d)*B;case 125*H:case 59:case 0:switch(_){case 0:case 125:I=0;case 59+m:B==-1&&(d=c(d,/\f/g,"")),p>0&&k(d)-h&&ot(p>32?oe(d+";",n,r,h-1,s):oe(c(d," ","")+";",n,r,h-2,s),s);break;case 59:d+=";";default:if(ot(v=ie(d,e,r,f,m,i,l,x,b=[],$=[],h,o),o),_===123)if(m===0)vt(d,e,v,v,b,o,h,l,$);else switch(g===99&&z(d,3)===110?100:g){case 100:case 108:case 109:case 115:vt(t,v,v,n&&ot(ie(t,v,v,0,0,i,l,x,i,b=[],h,$),$),i,$,h,l,n?b:$);break;default:vt(d,v,v,v,[""],$,0,l,$)}}f=m=p=0,H=B=1,x=d="",h=a;break;case 58:h=1+k(d),p=w;default:if(H<1){if(_==123)--H;else if(_==125&&H++==0&&ar()==125)continue}switch(d+=Kt(_),_*H){case 38:B=m>0?1:(d+="\f",-1);break;case 44:l[f++]=(k(d)-1)*B,B=1;break;case 64:Y()===45&&(d+=Lt(F())),g=Y(),m=h=k(x=d+=mr(yt())),_++;break;case 45:w===45&&k(d)==2&&(H=0)}}return o}function ie(t,e,r,n,i,o,a,l,s,f,m,h){for(var g=i-1,p=i===0?o:[""],w=we(p),H=0,I=0,B=0;H<n;++H)for(var _=0,x=J(t,g+1,g=Se(I=a[H])),b=t;_<w;++_)(b=xe(I>0?p[_]+" "+x:c(x,/&\f/g,p[_])))&&(s[B++]=b);return Pt(t,e,r,i===0?$t:l,s,f,m,h)}function hr(t,e,r,n){return Pt(t,e,r,ye,Kt(or()),J(t,2,-2),0,n)}function oe(t,e,r,n,i){return Pt(t,e,r,Ut,J(t,0,n),J(t,n+1,-1),n,i)}function be(t,e,r){switch(nr(t,e)){case 5103:return y+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return y+t+t;case 4789:return at+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return y+t+at+t+S+t+t;case 5936:switch(z(t,e+11)){case 114:return y+t+S+c(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return y+t+S+c(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return y+t+S+c(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return y+t+S+t+t;case 6165:return y+t+S+"flex-"+t+t;case 5187:return y+t+c(t,/(\w+).+(:[^]+)/,y+"box-$1$2"+S+"flex-$1$2")+t;case 5443:return y+t+S+"flex-item-"+c(t,/flex-|-self/g,"")+(O(t,/flex-|baseline/)?"":S+"grid-row-"+c(t,/flex-|-self/g,""))+t;case 4675:return y+t+S+"flex-line-pack"+c(t,/align-content|flex-|-self/g,"")+t;case 5548:return y+t+S+c(t,"shrink","negative")+t;case 5292:return y+t+S+c(t,"basis","preferred-size")+t;case 6060:return y+"box-"+c(t,"-grow","")+y+t+S+c(t,"grow","positive")+t;case 4554:return y+c(t,/([^-])(transform)/g,"$1"+y+"$2")+t;case 6187:return c(c(c(t,/(zoom-|grab)/,y+"$1"),/(image-set)/,y+"$1"),t,"")+t;case 5495:case 3959:return c(t,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return c(c(t,/(.+:)(flex-)?(.*)/,y+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+y+t+t;case 4200:if(!O(t,/flex-|baseline/))return S+"grid-column-align"+J(t,e)+t;break;case 2592:case 3360:return S+c(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,i){return e=i,O(n.props,/grid-\w+-end/)})?~gt(t+(r=r[e].value),"span",0)?t:S+c(t,"-start","")+t+S+"grid-row-span:"+(~gt(r,"span",0)?O(r,/\d+/):+O(r,/\d+/)-+O(t,/\d+/))+";":S+c(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return O(n.props,/grid-\w+-start/)})?t:S+c(c(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return c(t,/(.+)-inline(.+)/,y+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(t)-1-e>6)switch(z(t,e+1)){case 109:if(z(t,e+4)!==45)break;case 102:return c(t,/(.+:)(.+)-([^]+)/,"$1"+y+"$2-$3$1"+at+(z(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~gt(t,"stretch",0)?be(c(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return c(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,o,a,l,s,f){return S+i+":"+o+f+(a?S+i+"-span:"+(l?s:+s-+o)+f:"")+t});case 4949:if(z(t,e+6)===121)return c(t,":",":"+y)+t;break;case 6444:switch(z(t,z(t,14)===45?18:11)){case 120:return c(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+y+(z(t,14)===45?"inline-":"")+"box$3$1"+y+"$2$3$1"+S+"$2box$3")+t;case 100:return c(t,":",":"+S)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return c(t,"scroll-","scroll-snap-")+t}return t}function wt(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function pr(t,e,r,n){switch(t.type){case rr:if(t.children.length)break;case er:case Ut:return t.return=t.return||t.value;case ye:return"";case ve:return t.return=t.value+"{"+wt(t.children,n)+"}";case $t:if(!k(t.value=t.props.join(",")))return""}return k(r=wt(t.children,n))?t.return=t.value+"{"+r+"}":""}function gr(t){var e=we(t);return function(r,n,i,o){for(var a="",l=0;l<e;l++)a+=t[l](r,n,i,o)||"";return a}}function yr(t){return function(e){e.root||(e=e.return)&&t(e)}}function vr(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case Ut:t.return=be(t.value,t.length,r);return;case ve:return wt([j(t,{value:c(t.value,"@","@"+y)})],n);case $t:if(t.length)return ir(r=t.props,function(i){switch(O(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":q(j(t,{props:[c(i,/:(read-\w+)/,":"+at+"$1")]})),q(j(t,{props:[i]})),jt(t,{props:ne(r,n)});break;case"::placeholder":q(j(t,{props:[c(i,/:(plac\w+)/,":"+y+"input-$1")]})),q(j(t,{props:[c(i,/:(plac\w+)/,":"+at+"$1")]})),q(j(t,{props:[c(i,/:(plac\w+)/,S+"input-$1")]})),q(j(t,{props:[i]})),jt(t,{props:ne(r,n)});break}return""})}}var Sr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},A={},Q=typeof process<"u"&&A!==void 0&&(A.REACT_APP_SC_ATTR||A.SC_ATTR)||"data-styled",He="active",Be="data-styled-version",At="6.1.11",Jt=`/*!sc*/
`,Zt=typeof window<"u"&&"HTMLElement"in window,xr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&A!==void 0&&A.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&A.REACT_APP_SC_DISABLE_SPEEDY!==""?A.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&A.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&A!==void 0&&A.SC_DISABLE_SPEEDY!==void 0&&A.SC_DISABLE_SPEEDY!==""&&A.SC_DISABLE_SPEEDY!=="false"&&A.SC_DISABLE_SPEEDY),wr={},Et=Object.freeze([]),V=Object.freeze({});function Ce(t,e,r){return r===void 0&&(r=V),t.theme!==r.theme&&t.theme||e||r.theme}var $e=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_r=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,br=/(^-|-$)/g;function ae(t){return t.replace(_r,"-").replace(br,"")}var Hr=/(a)(d)/gi,ht=52,se=function(t){return String.fromCharCode(t+(t>25?39:97))};function Gt(t){var e,r="";for(e=Math.abs(t);e>ht;e=e/ht|0)r=se(e%ht)+r;return(se(e%ht)+r).replace(Hr,"$1-$2")}var Ot,ze=5381,U=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Pe=function(t){return U(ze,t)};function Qt(t){return Gt(Pe(t)>>>0)}function Br(t){return t.displayName||t.name||"Component"}function Nt(t){return typeof t=="string"&&!0}var Ie=typeof Symbol=="function"&&Symbol.for,Ae=Ie?Symbol.for("react.memo"):60115,Cr=Ie?Symbol.for("react.forward_ref"):60112,$r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ee={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pr=((Ot={})[Cr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ot[Ae]=Ee,Ot);function fe(t){return("type"in(e=t)&&e.type.$$typeof)===Ae?Ee:"$$typeof"in t?Pr[t.$$typeof]:$r;var e}var Ir=Object.defineProperty,Ar=Object.getOwnPropertyNames,le=Object.getOwnPropertySymbols,Er=Object.getOwnPropertyDescriptor,Rr=Object.getPrototypeOf,ce=Object.prototype;function Re(t,e,r){if(typeof e!="string"){if(ce){var n=Rr(e);n&&n!==ce&&Re(t,n,r)}var i=Ar(e);le&&(i=i.concat(le(e)));for(var o=fe(t),a=fe(e),l=0;l<i.length;++l){var s=i[l];if(!(s in zr||r&&r[s]||a&&s in a||o&&s in o)){var f=Er(e,s);try{Ir(t,s,f)}catch{}}}}return t}function W(t){return typeof t=="function"}function Vt(t){return typeof t=="object"&&"styledComponentId"in t}function G(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function _t(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=t[n];return r}function st(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Yt(t,e,r){if(r===void 0&&(r=!1),!r&&!st(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=Yt(t[n],e[n]);else if(st(e))for(var n in e)t[n]=Yt(t[n],e[n]);return t}function te(t,e){Object.defineProperty(t,"toString",{value:e})}function X(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Fr=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,o=i;e>=o;)if((o<<=1)<0)throw X(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(e+1),s=(a=0,r.length);a<s;a++)this.tag.insertRule(l,r[a])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r;this.groupSizes[e]=0;for(var o=n;o<i;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],i=this.indexOfGroup(e),o=i+n,a=i;a<o;a++)r+="".concat(this.tag.getRule(a)).concat(Jt);return r},t}(),St=new Map,bt=new Map,xt=1,pt=function(t){if(St.has(t))return St.get(t);for(;bt.has(xt);)xt++;var e=xt++;return St.set(t,e),bt.set(e,t),e},kr=function(t,e){xt=e+1,St.set(t,e),bt.set(e,t)},Lr="style[".concat(Q,"][").concat(Be,'="').concat(At,'"]'),Or=new RegExp("^".concat(Q,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Nr=function(t,e,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&t.registerName(e,n)},Tr=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(Jt),i=[],o=0,a=n.length;o<a;o++){var l=n[o].trim();if(l){var s=l.match(Or);if(s){var f=0|parseInt(s[1],10),m=s[2];f!==0&&(kr(m,f),Nr(t,m,s[3]),t.getTag().insertRules(f,i)),i.length=0}else i.push(l)}}};function jr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Fe=function(t){var e=document.head,r=t||e,n=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Q,"]")));return s[s.length-1]}(r),o=i!==void 0?i.nextSibling:null;n.setAttribute(Q,He),n.setAttribute(Be,At);var a=jr();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},Dr=function(){function t(e){this.element=Fe(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,o=n.length;i<o;i++){var a=n[i];if(a.ownerNode===r)return a}throw X(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),Mr=function(){function t(e){this.element=Fe(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Gr=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ue=Zt,Yr={isServer:!Zt,useCSSOMInjection:!xr},Ht=function(){function t(e,r,n){e===void 0&&(e=V),r===void 0&&(r={});var i=this;this.options=P(P({},Yr),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Zt&&ue&&(ue=!1,function(o){for(var a=document.querySelectorAll(Lr),l=0,s=a.length;l<s;l++){var f=a[l];f&&f.getAttribute(Q)!==He&&(Tr(o,f),f.parentNode&&f.parentNode.removeChild(f))}}(this)),te(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",f=function(h){var g=function(B){return bt.get(B)}(h);if(g===void 0)return"continue";var p=o.names.get(g),w=a.getGroup(h);if(p===void 0||w.length===0)return"continue";var H="".concat(Q,".g").concat(h,'[id="').concat(g,'"]'),I="";p!==void 0&&p.forEach(function(B){B.length>0&&(I+="".concat(B,","))}),s+="".concat(w).concat(H,'{content:"').concat(I,'"}').concat(Jt)},m=0;m<l;m++)f(m);return s}(i)})}return t.registerId=function(e){return pt(e)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(P(P({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new Gr(i):n?new Dr(i):new Mr(i)}(this.options),new Fr(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(pt(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(pt(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(pt(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Wr=/&/g,Xr=/^\s*\/\/.*$/gm;function ke(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=ke(r.children,e)),r})}function qr(t){var e,r,n,i=V,o=i.options,a=o===void 0?V:o,l=i.plugins,s=l===void 0?Et:l,f=function(g,p,w){return w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(e):g},m=s.slice();m.push(function(g){g.type===$t&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Wr,r).replace(n,f))}),a.prefix&&m.push(vr),m.push(pr);var h=function(g,p,w,H){p===void 0&&(p=""),w===void 0&&(w=""),H===void 0&&(H="&"),e=H,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var I=g.replace(Xr,""),B=dr(w||p?"".concat(w," ").concat(p," { ").concat(I," }"):I);a.namespace&&(B=ke(B,a.namespace));var _=[];return wt(B,gr(m.concat(yr(function(x){return _.push(x)})))),_};return h.hash=s.length?s.reduce(function(g,p){return p.name||X(15),U(g,p.name)},ze).toString():"",h}var Ur=new Ht,Wt=qr(),Le=R.createContext({shouldForwardProp:void 0,styleSheet:Ur,stylis:Wt});Le.Consumer;R.createContext(void 0);function Xt(){return Bt.useContext(Le)}var Oe=function(){function t(e,r){var n=this;this.inject=function(i,o){o===void 0&&(o=Wt);var a=n.name+o.hash;i.hasNameForId(n.id,a)||i.insertRules(n.id,a,o(n.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,te(this,function(){throw X(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Wt),this.name+e.hash},t}(),Kr=function(t){return t>="A"&&t<="Z"};function me(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;Kr(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var Ne=function(t){return t==null||t===!1||t===""},Te=function(t){var e,r,n=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!Ne(o)&&(Array.isArray(o)&&o.isCss||W(o)?n.push("".concat(me(i),":"),o,";"):st(o)?n.push.apply(n,K(K(["".concat(i," {")],Te(o),!1),["}"],!1)):n.push("".concat(me(i),": ").concat((e=i,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in Sr||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function D(t,e,r,n){if(Ne(t))return[];if(Vt(t))return[".".concat(t.styledComponentId)];if(W(t)){if(!W(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return D(i,e,r,n)}var o;return t instanceof Oe?r?(t.inject(r,n),[t.getName(n)]):[t]:st(t)?Te(t):Array.isArray(t)?Array.prototype.concat.apply(Et,t.map(function(a){return D(a,e,r,n)})):[t.toString()]}function je(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(W(r)&&!Vt(r))return!1}return!0}var Jr=Pe(At),Zr=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&je(e),this.componentId=r,this.baseHash=U(Jr,r),this.baseStyle=n,Ht.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=G(i,this.staticRulesId);else{var o=_t(D(this.rules,e,r,n)),a=Gt(U(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,a)){var l=n(o,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,l)}i=G(i,a),this.staticRulesId=a}else{for(var s=U(this.baseHash,n.hash),f="",m=0;m<this.rules.length;m++){var h=this.rules[m];if(typeof h=="string")f+=h;else if(h){var g=_t(D(h,e,r,n));s=U(s,g+m),f+=g}}if(f){var p=Gt(s>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(f,".".concat(p),void 0,this.componentId)),i=G(i,p)}}return i},t}(),ft=R.createContext(void 0);ft.Consumer;function an(t){var e=R.useContext(ft),r=Bt.useMemo(function(){return function(n,i){if(!n)throw X(14);if(W(n)){var o=n(i);return o}if(Array.isArray(n)||typeof n!="object")throw X(8);return i?P(P({},i),n):n}(t.theme,e)},[t.theme,e]);return t.children?R.createElement(ft.Provider,{value:r},t.children):null}var Tt={};function Qr(t,e,r){var n=Vt(t),i=t,o=!Nt(t),a=e.attrs,l=a===void 0?Et:a,s=e.componentId,f=s===void 0?function(b,$){var v=typeof b!="string"?"sc":ae(b);Tt[v]=(Tt[v]||0)+1;var d="".concat(v,"-").concat(Qt(At+v+Tt[v]));return $?"".concat($,"-").concat(d):d}(e.displayName,e.parentComponentId):s,m=e.displayName,h=m===void 0?function(b){return Nt(b)?"styled.".concat(b):"Styled(".concat(Br(b),")")}(t):m,g=e.displayName&&e.componentId?"".concat(ae(e.displayName),"-").concat(e.componentId):e.componentId||f,p=n&&i.attrs?i.attrs.concat(l).filter(Boolean):l,w=e.shouldForwardProp;if(n&&i.shouldForwardProp){var H=i.shouldForwardProp;if(e.shouldForwardProp){var I=e.shouldForwardProp;w=function(b,$){return H(b,$)&&I(b,$)}}else w=H}var B=new Zr(r,g,n?i.componentStyle:void 0);function _(b,$){return function(v,d,et){var lt=v.attrs,Me=v.componentStyle,Ge=v.defaultProps,Ye=v.foldedComponentIds,We=v.styledComponentId,Xe=v.target,qe=R.useContext(ft),Ue=Xt(),Rt=v.shouldForwardProp||Ue.shouldForwardProp,ee=Ce(d,qe,Ge)||V,L=function(ut,nt,mt){for(var it,M=P(P({},nt),{className:void 0,theme:mt}),kt=0;kt<ut.length;kt+=1){var dt=W(it=ut[kt])?it(M):it;for(var T in dt)M[T]=T==="className"?G(M[T],dt[T]):T==="style"?P(P({},M[T]),dt[T]):dt[T]}return nt.className&&(M.className=G(M.className,nt.className)),M}(lt,d,ee),ct=L.as||Xe,rt={};for(var N in L)L[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&L.theme===ee||(N==="forwardedAs"?rt.as=L.forwardedAs:Rt&&!Rt(N,ct)||(rt[N]=L[N]));var re=function(ut,nt){var mt=Xt(),it=ut.generateAndInjectStyles(nt,mt.styleSheet,mt.stylis);return it}(Me,L),Ft=G(Ye,We);return re&&(Ft+=" "+re),L.className&&(Ft+=" "+L.className),rt[Nt(ct)&&!$e.has(ct)?"class":"className"]=Ft,rt.ref=et,Bt.createElement(ct,rt)}(x,b,$)}_.displayName=h;var x=R.forwardRef(_);return x.attrs=p,x.componentStyle=B,x.displayName=h,x.shouldForwardProp=w,x.foldedComponentIds=n?G(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=g,x.target=n?i.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=n?function($){for(var v=[],d=1;d<arguments.length;d++)v[d-1]=arguments[d];for(var et=0,lt=v;et<lt.length;et++)Yt($,lt[et],!0);return $}({},i.defaultProps,b):b}}),te(x,function(){return".".concat(x.styledComponentId)}),o&&Re(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function de(t,e){for(var r=[t[0]],n=0,i=e.length;n<i;n+=1)r.push(e[n],t[n+1]);return r}var he=function(t){return Object.assign(t,{isCss:!0})};function u(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(W(t)||st(t))return he(D(de(Et,K([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?D(n):he(D(de(n,e)))}function qt(t,e,r){if(r===void 0&&(r=V),!e)throw X(1,e);var n=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return t(e,r,u.apply(void 0,K([i],o,!1)))};return n.attrs=function(i){return qt(t,e,P(P({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return qt(t,e,P(P({},r),i))},n}var De=function(t){return qt(Qr,t)},Vr=De;$e.forEach(function(t){Vr[t]=De(t)});var tn=function(){function t(e,r){this.rules=e,this.componentId=r,this.isStatic=je(e),Ht.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,r,n,i){var o=i(_t(D(this.rules,r,n,i)),""),a=this.componentId+e;n.insertRules(a,a,o)},t.prototype.removeStyles=function(e,r){r.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,r,n,i){e>2&&Ht.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,r,n,i)},t}();function sn(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=u.apply(void 0,K([t],e,!1)),i="sc-global-".concat(Qt(JSON.stringify(n))),o=new tn(n,i),a=function(s){var f=Xt(),m=R.useContext(ft),h=R.useRef(f.styleSheet.allocateGSInstance(i)).current;return f.styleSheet.server&&l(h,s,f.styleSheet,m,f.stylis),R.useLayoutEffect(function(){if(!f.styleSheet.server)return l(h,s,f.styleSheet,m,f.stylis),function(){return o.removeStyles(h,f.styleSheet)}},[h,s,f.styleSheet,m,f.stylis]),null};function l(s,f,m,h,g){if(o.isStatic)o.renderStyles(s,wr,m,g);else{var p=P(P({},f),{theme:Ce(f,h,a.defaultProps)});o.renderStyles(s,p,m,g)}}return R.memo(a)}function fn(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=_t(u.apply(void 0,K([t],e,!1))),i=Qt(n);return new Oe(i,n)}const ln=en();function en(){return{"Main/XXL":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 42px);
      line-height: var(--admiral-line-height-Header_HL3, 52px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XL":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 36px);
      line-height: var(--admiral-line-height-Header_H1, 44px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/L":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 500);
      font-size: var(--admiral-font-size-Header_H2, 32px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/M":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/S":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS-bold":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L-bold":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/M":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S-bold":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 500);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/XS":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/M":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/S":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/XS":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL1":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL1, 550);
      font-size: var(--admiral-font-size-Header_HL1, 72px);
      line-height: var(--admiral-line-height-Header_HL1, 80px);
      /* or 111% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL2":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL2, 550);
      font-size: var(--admiral-font-size-Header_HL2, 56px);
      line-height: var(--admiral-line-height-Header_HL2, 64px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL3":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 48px);
      line-height: var(--admiral-line-height-Header_HL3, 56px);
      /* or 117% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H1":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 40px);
      line-height: var(--admiral-line-height-Header_H1, 48px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H2":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 550);
      font-size: var(--admiral-font-size-Header_H2, 34px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      /* or 118% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H3":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      /* or 129% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H4":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H4, 550);
      font-size: var(--admiral-font-size-Header_H4, 24px);
      line-height: var(--admiral-line-height-Header_H4, 32px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H5":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      /* or 140% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H6":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 1":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 2":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 3":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Long":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Short":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      /* or 125% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Long":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Short":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 1":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 2":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 1":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 2":u`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption2, 400);
      font-size: var(--admiral-font-size-Caption_Caption2, 10px);
      line-height: var(--admiral-line-height-Caption_Caption2, 12px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `}}export{u as c,fn as f,sn as h,on as j,an as n,Vr as p,ln as t};

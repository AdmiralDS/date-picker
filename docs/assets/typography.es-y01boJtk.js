import{r as Ct,R as k}from"./index-BBkUAzwr.js";var ge={exports:{}},_t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke=Ct,Je=Symbol.for("react.element"),Ze=Symbol.for("react.fragment"),Ve=Object.prototype.hasOwnProperty,Qe=Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tn={key:!0,ref:!0,__self:!0,__source:!0};function de(t,e,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Ve.call(e,r)&&!tn.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:Je,type:t,key:i,ref:s,props:o,_owner:Qe.current}}_t.Fragment=Ze;_t.jsx=de;_t.jsxs=de;ge.exports=_t;var or=ge.exports,E=function(){return E=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},E.apply(this,arguments)};function K(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}var w="-ms-",st="-moz-",y="-webkit-",ye="comm",It="rule",Ut="decl",en="@import",xe="@keyframes",nn="@layer",we=Math.abs,Kt=String.fromCharCode,Lt=Object.assign;function rn(t,e){return A(t,0)^45?(((e<<2^A(t,0))<<2^A(t,1))<<2^A(t,2))<<2^A(t,3):0}function ve(t){return t.trim()}function T(t,e){return(t=e.exec(t))?t[0]:t}function u(t,e,n){return t.replace(e,n)}function dt(t,e,n){return t.indexOf(e,n)}function A(t,e){return t.charCodeAt(e)|0}function J(t,e,n){return t.slice(e,n)}function N(t){return t.length}function Se(t){return t.length}function it(t,e){return e.push(t),t}function on(t,e){return t.map(e).join("")}function re(t,e){return t.filter(function(n){return!T(n,e)})}var At=1,Z=1,be=0,z=0,_=0,tt="";function Et(t,e,n,r,o,i,s,f){return{value:t,root:e,parent:n,type:r,props:o,children:i,line:At,column:Z,length:s,return:"",siblings:f}}function L(t,e){return Lt(Et("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function q(t){for(;t.root;)t=L(t.root,{children:[t]});it(t,t.siblings)}function sn(){return _}function an(){return _=z>0?A(tt,--z):0,Z--,_===10&&(Z=1,At--),_}function O(){return _=z<be?A(tt,z++):0,Z++,_===10&&(Z=1,At++),_}function Y(){return A(tt,z)}function yt(){return z}function Rt(t,e){return J(tt,t,e)}function Mt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cn(t){return At=Z=1,be=N(tt=t),z=0,[]}function fn(t){return tt="",t}function jt(t){return ve(Rt(z-1,Ht(t===91?t+2:t===40?t+1:t)))}function un(t){for(;(_=Y())&&_<33;)O();return Mt(t)>2||Mt(_)>3?"":" "}function ln(t,e){for(;--e&&O()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return Rt(t,yt()+(e<6&&Y()==32&&O()==32))}function Ht(t){for(;O();)switch(_){case t:return z;case 34:case 39:t!==34&&t!==39&&Ht(_);break;case 40:t===41&&Ht(t);break;case 92:O();break}return z}function hn(t,e){for(;O()&&t+_!==57;)if(t+_===84&&Y()===47)break;return"/*"+Rt(e,z-1)+"*"+Kt(t===47?t:O())}function pn(t){for(;!Mt(Y());)O();return Rt(t,z)}function mn(t){return fn(xt("",null,null,null,[""],t=cn(t),0,[0],t))}function xt(t,e,n,r,o,i,s,f,a){for(var c=0,h=0,m=s,d=0,g=0,S=0,$=1,R=1,C=1,b=0,v="",P=o,I=i,x=r,p=v;R;)switch(S=b,b=O()){case 40:if(S!=108&&A(p,m-1)==58){dt(p+=u(jt(b),"&","&\f"),"&\f",we(c?f[c-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:p+=jt(b);break;case 9:case 10:case 13:case 32:p+=un(S);break;case 92:p+=ln(yt()-1,7);continue;case 47:switch(Y()){case 42:case 47:it(gn(hn(O(),yt()),e,n,a),a);break;default:p+="/"}break;case 123*$:f[c++]=N(p)*C;case 125*$:case 59:case 0:switch(b){case 0:case 125:R=0;case 59+h:C==-1&&(p=u(p,/\f/g,"")),g>0&&N(p)-m&&it(g>32?ie(p+";",r,n,m-1,a):ie(u(p," ","")+";",r,n,m-2,a),a);break;case 59:p+=";";default:if(it(x=oe(p,e,n,c,h,o,f,v,P=[],I=[],m,i),i),b===123)if(h===0)xt(p,e,x,x,P,i,m,f,I);else switch(d===99&&A(p,3)===110?100:d){case 100:case 108:case 109:case 115:xt(t,x,x,r&&it(oe(t,x,x,0,0,o,f,v,o,P=[],m,I),I),o,I,m,f,r?P:I);break;default:xt(p,x,x,x,[""],I,0,f,I)}}c=h=g=0,$=C=1,v=p="",m=s;break;case 58:m=1+N(p),g=S;default:if($<1){if(b==123)--$;else if(b==125&&$++==0&&an()==125)continue}switch(p+=Kt(b),b*$){case 38:C=h>0?1:(p+="\f",-1);break;case 44:f[c++]=(N(p)-1)*C,C=1;break;case 64:Y()===45&&(p+=jt(O())),d=Y(),h=m=N(v=p+=pn(yt())),b++;break;case 45:S===45&&N(p)==2&&($=0)}}return i}function oe(t,e,n,r,o,i,s,f,a,c,h,m){for(var d=o-1,g=o===0?i:[""],S=Se(g),$=0,R=0,C=0;$<r;++$)for(var b=0,v=J(t,d+1,d=we(R=s[$])),P=t;b<S;++b)(P=ve(R>0?g[b]+" "+v:u(v,/&\f/g,g[b])))&&(a[C++]=P);return Et(t,e,n,o===0?It:f,a,c,h,m)}function gn(t,e,n,r){return Et(t,e,n,ye,Kt(sn()),J(t,2,-2),0,r)}function ie(t,e,n,r,o){return Et(t,e,n,Ut,J(t,0,r),J(t,r+1,-1),r,o)}function Pe(t,e,n){switch(rn(t,e)){case 5103:return y+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return y+t+t;case 4789:return st+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return y+t+st+t+w+t+t;case 5936:switch(A(t,e+11)){case 114:return y+t+w+u(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return y+t+w+u(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return y+t+w+u(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return y+t+w+t+t;case 6165:return y+t+w+"flex-"+t+t;case 5187:return y+t+u(t,/(\w+).+(:[^]+)/,y+"box-$1$2"+w+"flex-$1$2")+t;case 5443:return y+t+w+"flex-item-"+u(t,/flex-|-self/g,"")+(T(t,/flex-|baseline/)?"":w+"grid-row-"+u(t,/flex-|-self/g,""))+t;case 4675:return y+t+w+"flex-line-pack"+u(t,/align-content|flex-|-self/g,"")+t;case 5548:return y+t+w+u(t,"shrink","negative")+t;case 5292:return y+t+w+u(t,"basis","preferred-size")+t;case 6060:return y+"box-"+u(t,"-grow","")+y+t+w+u(t,"grow","positive")+t;case 4554:return y+u(t,/([^-])(transform)/g,"$1"+y+"$2")+t;case 6187:return u(u(u(t,/(zoom-|grab)/,y+"$1"),/(image-set)/,y+"$1"),t,"")+t;case 5495:case 3959:return u(t,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return u(u(t,/(.+:)(flex-)?(.*)/,y+"box-pack:$3"+w+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+y+t+t;case 4200:if(!T(t,/flex-|baseline/))return w+"grid-column-align"+J(t,e)+t;break;case 2592:case 3360:return w+u(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,o){return e=o,T(r.props,/grid-\w+-end/)})?~dt(t+(n=n[e].value),"span",0)?t:w+u(t,"-start","")+t+w+"grid-row-span:"+(~dt(n,"span",0)?T(n,/\d+/):+T(n,/\d+/)-+T(t,/\d+/))+";":w+u(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return T(r.props,/grid-\w+-start/)})?t:w+u(u(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return u(t,/(.+)-inline(.+)/,y+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(N(t)-1-e>6)switch(A(t,e+1)){case 109:if(A(t,e+4)!==45)break;case 102:return u(t,/(.+:)(.+)-([^]+)/,"$1"+y+"$2-$3$1"+st+(A(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~dt(t,"stretch",0)?Pe(u(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return u(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,f,a,c){return w+o+":"+i+c+(s?w+o+"-span:"+(f?a:+a-+i)+c:"")+t});case 4949:if(A(t,e+6)===121)return u(t,":",":"+y)+t;break;case 6444:switch(A(t,A(t,14)===45?18:11)){case 120:return u(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+y+(A(t,14)===45?"inline-":"")+"box$3$1"+y+"$2$3$1"+w+"$2box$3")+t;case 100:return u(t,":",":"+w)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return u(t,"scroll-","scroll-snap-")+t}return t}function St(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function dn(t,e,n,r){switch(t.type){case nn:if(t.children.length)break;case en:case Ut:return t.return=t.return||t.value;case ye:return"";case xe:return t.return=t.value+"{"+St(t.children,r)+"}";case It:if(!N(t.value=t.props.join(",")))return""}return N(n=St(t.children,r))?t.return=t.value+"{"+n+"}":""}function yn(t){var e=Se(t);return function(n,r,o,i){for(var s="",f=0;f<e;f++)s+=t[f](n,r,o,i)||"";return s}}function xn(t){return function(e){e.root||(e=e.return)&&t(e)}}function wn(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Ut:t.return=Pe(t.value,t.length,n);return;case xe:return St([L(t,{value:u(t.value,"@","@"+y)})],r);case It:if(t.length)return on(n=t.props,function(o){switch(T(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":q(L(t,{props:[u(o,/:(read-\w+)/,":"+st+"$1")]})),q(L(t,{props:[o]})),Lt(t,{props:re(n,r)});break;case"::placeholder":q(L(t,{props:[u(o,/:(plac\w+)/,":"+y+"input-$1")]})),q(L(t,{props:[u(o,/:(plac\w+)/,":"+st+"$1")]})),q(L(t,{props:[u(o,/:(plac\w+)/,w+"input-$1")]})),q(L(t,{props:[o]})),Lt(t,{props:re(n,r)});break}return""})}}var vn={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},F={},V=typeof process<"u"&&F!==void 0&&(F.REACT_APP_SC_ATTR||F.SC_ATTR)||"data-styled",$e="active",Ce="data-styled-version",Ft="6.1.8",Jt=`/*!sc*/
`,Zt=typeof window<"u"&&"HTMLElement"in window,Sn=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&F!==void 0&&F.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&F.REACT_APP_SC_DISABLE_SPEEDY!==""?F.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&F.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&F!==void 0&&F.SC_DISABLE_SPEEDY!==void 0&&F.SC_DISABLE_SPEEDY!==""&&F.SC_DISABLE_SPEEDY!=="false"&&F.SC_DISABLE_SPEEDY),bn={},zt=Object.freeze([]),Q=Object.freeze({});function _e(t,e,n){return n===void 0&&(n=Q),t.theme!==n.theme&&t.theme||e||n.theme}var Ie=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Pn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$n=/(^-|-$)/g;function se(t){return t.replace(Pn,"-").replace($n,"")}var Cn=/(a)(d)/gi,mt=52,ae=function(t){return String.fromCharCode(t+(t>25?39:97))};function Gt(t){var e,n="";for(e=Math.abs(t);e>mt;e=e/mt|0)n=ae(e%mt)+n;return(ae(e%mt)+n).replace(Cn,"$1-$2")}var Tt,Ae=5381,U=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Ee=function(t){return U(Ae,t)};function Vt(t){return Gt(Ee(t)>>>0)}function _n(t){return t.displayName||t.name||"Component"}function Dt(t){return typeof t=="string"&&!0}var Re=typeof Symbol=="function"&&Symbol.for,Fe=Re?Symbol.for("react.memo"):60115,In=Re?Symbol.for("react.forward_ref"):60112,An={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},En={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ze={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rn=((Tt={})[In]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tt[Fe]=ze,Tt);function ce(t){return("type"in(e=t)&&e.type.$$typeof)===Fe?ze:"$$typeof"in t?Rn[t.$$typeof]:An;var e}var Fn=Object.defineProperty,zn=Object.getOwnPropertyNames,fe=Object.getOwnPropertySymbols,kn=Object.getOwnPropertyDescriptor,On=Object.getPrototypeOf,ue=Object.prototype;function ke(t,e,n){if(typeof e!="string"){if(ue){var r=On(e);r&&r!==ue&&ke(t,r,n)}var o=zn(e);fe&&(o=o.concat(fe(e)));for(var i=ce(t),s=ce(e),f=0;f<o.length;++f){var a=o[f];if(!(a in En||n&&n[a]||s&&a in s||i&&a in i)){var c=kn(e,a);try{Fn(t,a,c)}catch{}}}}return t}function W(t){return typeof t=="function"}function Qt(t){return typeof t=="object"&&"styledComponentId"in t}function G(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function bt(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function at(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Yt(t,e,n){if(n===void 0&&(n=!1),!n&&!at(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Yt(t[r],e[r]);else if(at(e))for(var r in e)t[r]=Yt(t[r],e[r]);return t}function te(t,e){Object.defineProperty(t,"toString",{value:e})}function X(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Nn=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;e>=i;)if((i<<=1)<0)throw X(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var f=this.indexOfGroup(e+1),a=(s=0,n.length);s<a;s++)this.tag.insertRule(f,n[s])&&(this.groupSizes[e]++,f++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;this.groupSizes[e]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],o=this.indexOfGroup(e),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(Jt);return n},t}(),wt=new Map,Pt=new Map,vt=1,gt=function(t){if(wt.has(t))return wt.get(t);for(;Pt.has(vt);)vt++;var e=vt++;return wt.set(t,e),Pt.set(e,t),e},jn=function(t,e){vt=e+1,wt.set(t,e),Pt.set(e,t)},Tn="style[".concat(V,"][").concat(Ce,'="').concat(Ft,'"]'),Dn=new RegExp("^".concat(V,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Bn=function(t,e,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&t.registerName(e,r)},Ln=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Jt),o=[],i=0,s=r.length;i<s;i++){var f=r[i].trim();if(f){var a=f.match(Dn);if(a){var c=0|parseInt(a[1],10),h=a[2];c!==0&&(jn(h,c),Bn(t,h,a[3]),t.getTag().insertRules(c,o)),o.length=0}else o.push(f)}}};function Mn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Oe=function(t){var e=document.head,n=t||e,r=document.createElement("style"),o=function(f){var a=Array.from(f.querySelectorAll("style[".concat(V,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(V,$e),r.setAttribute(Ce,Ft);var s=Mn();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},Hn=function(){function t(e){this.element=Oe(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw X(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Gn=function(){function t(e){this.element=Oe(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Yn=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),le=Zt,Wn={isServer:!Zt,useCSSOMInjection:!Sn},$t=function(){function t(e,n,r){e===void 0&&(e=Q),n===void 0&&(n={});var o=this;this.options=E(E({},Wn),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Zt&&le&&(le=!1,function(i){for(var s=document.querySelectorAll(Tn),f=0,a=s.length;f<a;f++){var c=s[f];c&&c.getAttribute(V)!==$e&&(Ln(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),te(this,function(){return function(i){for(var s=i.getTag(),f=s.length,a="",c=function(m){var d=function(C){return Pt.get(C)}(m);if(d===void 0)return"continue";var g=i.names.get(d),S=s.getGroup(m);if(g===void 0||S.length===0)return"continue";var $="".concat(V,".g").concat(m,'[id="').concat(d,'"]'),R="";g!==void 0&&g.forEach(function(C){C.length>0&&(R+="".concat(C,","))}),a+="".concat(S).concat($,'{content:"').concat(R,'"}').concat(Jt)},h=0;h<f;h++)c(h);return a}(o)})}return t.registerId=function(e){return gt(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(E(E({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Yn(o):r?new Hn(o):new Gn(o)}(this.options),new Nn(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(gt(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(gt(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(gt(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Xn=/&/g,qn=/^\s*\/\/.*$/gm;function Ne(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ne(n.children,e)),n})}function Un(t){var e,n,r,o=t===void 0?Q:t,i=o.options,s=i===void 0?Q:i,f=o.plugins,a=f===void 0?zt:f,c=function(d,g,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(e):d},h=a.slice();h.push(function(d){d.type===It&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(Xn,n).replace(r,c))}),s.prefix&&h.push(wn),h.push(dn);var m=function(d,g,S,$){g===void 0&&(g=""),S===void 0&&(S=""),$===void 0&&($="&"),e=$,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var R=d.replace(qn,""),C=mn(S||g?"".concat(S," ").concat(g," { ").concat(R," }"):R);s.namespace&&(C=Ne(C,s.namespace));var b=[];return St(C,yn(h.concat(xn(function(v){return b.push(v)})))),b};return m.hash=a.length?a.reduce(function(d,g){return g.name||X(15),U(d,g.name)},Ae).toString():"",m}var Kn=new $t,Wt=Un(),je=k.createContext({shouldForwardProp:void 0,styleSheet:Kn,stylis:Wt});je.Consumer;k.createContext(void 0);function Xt(){return Ct.useContext(je)}var Te=function(){function t(e,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Wt);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,te(this,function(){throw X(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Wt),this.name+e.hash},t}(),Jn=function(t){return t>="A"&&t<="Z"};function he(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Jn(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var De=function(t){return t==null||t===!1||t===""},Be=function(t){var e,n,r=[];for(var o in t){var i=t[o];t.hasOwnProperty(o)&&!De(i)&&(Array.isArray(i)&&i.isCss||W(i)?r.push("".concat(he(o),":"),i,";"):at(i)?r.push.apply(r,K(K(["".concat(o," {")],Be(i),!1),["}"],!1)):r.push("".concat(he(o),": ").concat((e=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in vn||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function M(t,e,n,r){if(De(t))return[];if(Qt(t))return[".".concat(t.styledComponentId)];if(W(t)){if(!W(i=t)||i.prototype&&i.prototype.isReactComponent||!e)return[t];var o=t(e);return M(o,e,n,r)}var i;return t instanceof Te?n?(t.inject(n,r),[t.getName(r)]):[t]:at(t)?Be(t):Array.isArray(t)?Array.prototype.concat.apply(zt,t.map(function(s){return M(s,e,n,r)})):[t.toString()]}function Le(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(W(n)&&!Qt(n))return!1}return!0}var Zn=Ee(Ft),Vn=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Le(e),this.componentId=n,this.baseHash=U(Zn,n),this.baseStyle=r,$t.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=G(o,this.staticRulesId);else{var i=bt(M(this.rules,e,n,r)),s=Gt(U(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var f=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,f)}o=G(o,s),this.staticRulesId=s}else{for(var a=U(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var m=this.rules[h];if(typeof m=="string")c+=m;else if(m){var d=bt(M(m,e,n,r));a=U(a,d+h),c+=d}}if(c){var g=Gt(a>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),o=G(o,g)}}return o},t}(),ct=k.createContext(void 0);ct.Consumer;function ir(t){var e=k.useContext(ct),n=Ct.useMemo(function(){return function(r,o){if(!r)throw X(14);if(W(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw X(8);return o?E(E({},o),r):r}(t.theme,e)},[t.theme,e]);return t.children?k.createElement(ct.Provider,{value:n},t.children):null}var Bt={};function Qn(t,e,n){var r=Qt(t),o=t,i=!Dt(t),s=e.attrs,f=s===void 0?zt:s,a=e.componentId,c=a===void 0?function(P,I){var x=typeof P!="string"?"sc":se(P);Bt[x]=(Bt[x]||0)+1;var p="".concat(x,"-").concat(Vt(Ft+x+Bt[x]));return I?"".concat(I,"-").concat(p):p}(e.displayName,e.parentComponentId):a,h=e.displayName,m=h===void 0?function(P){return Dt(P)?"styled.".concat(P):"Styled(".concat(_n(P),")")}(t):h,d=e.displayName&&e.componentId?"".concat(se(e.displayName),"-").concat(e.componentId):e.componentId||c,g=r&&o.attrs?o.attrs.concat(f).filter(Boolean):f,S=e.shouldForwardProp;if(r&&o.shouldForwardProp){var $=o.shouldForwardProp;if(e.shouldForwardProp){var R=e.shouldForwardProp;S=function(P,I){return $(P,I)&&R(P,I)}}else S=$}var C=new Vn(n,d,r?o.componentStyle:void 0);function b(P,I){return function(x,p,et){var ft=x.attrs,He=x.componentStyle,Ge=x.defaultProps,Ye=x.foldedComponentIds,We=x.styledComponentId,Xe=x.target,qe=k.useContext(ct),Ue=Xt(),kt=x.shouldForwardProp||Ue.shouldForwardProp,ee=_e(p,qe,Ge)||Q,j=function(lt,rt,ht){for(var ot,H=E(E({},rt),{className:void 0,theme:ht}),Nt=0;Nt<lt.length;Nt+=1){var pt=W(ot=lt[Nt])?ot(H):ot;for(var B in pt)H[B]=B==="className"?G(H[B],pt[B]):B==="style"?E(E({},H[B]),pt[B]):pt[B]}return rt.className&&(H.className=G(H.className,rt.className)),H}(ft,p,ee),ut=j.as||Xe,nt={};for(var D in j)j[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&j.theme===ee||(D==="forwardedAs"?nt.as=j.forwardedAs:kt&&!kt(D,ut)||(nt[D]=j[D]));var ne=function(lt,rt){var ht=Xt(),ot=lt.generateAndInjectStyles(rt,ht.styleSheet,ht.stylis);return ot}(He,j),Ot=G(Ye,We);return ne&&(Ot+=" "+ne),j.className&&(Ot+=" "+j.className),nt[Dt(ut)&&!Ie.has(ut)?"class":"className"]=Ot,nt.ref=et,Ct.createElement(ut,nt)}(v,P,I)}b.displayName=m;var v=k.forwardRef(b);return v.attrs=g,v.componentStyle=C,v.displayName=m,v.shouldForwardProp=S,v.foldedComponentIds=r?G(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=d,v.target=r?o.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=r?function(I){for(var x=[],p=1;p<arguments.length;p++)x[p-1]=arguments[p];for(var et=0,ft=x;et<ft.length;et++)Yt(I,ft[et],!0);return I}({},o.defaultProps,P):P}}),te(v,function(){return".".concat(v.styledComponentId)}),i&&ke(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function pe(t,e){for(var n=[t[0]],r=0,o=e.length;r<o;r+=1)n.push(e[r],t[r+1]);return n}var me=function(t){return Object.assign(t,{isCss:!0})};function l(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(W(t)||at(t))return me(M(pe(zt,K([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?M(r):me(M(pe(r,e)))}function qt(t,e,n){if(n===void 0&&(n=Q),!e)throw X(1,e);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return t(e,n,l.apply(void 0,K([o],i,!1)))};return r.attrs=function(o){return qt(t,e,E(E({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return qt(t,e,E(E({},n),o))},r}var Me=function(t){return qt(Qn,t)},tr=Me;Ie.forEach(function(t){tr[t]=Me(t)});var er=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=Le(e),$t.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,o){var i=o(bt(M(this.rules,n,r,o)),""),s=this.componentId+e;r.insertRules(s,s,i)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,o){e>2&&$t.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,o)},t}();function sr(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=l.apply(void 0,K([t],e,!1)),o="sc-global-".concat(Vt(JSON.stringify(r))),i=new er(r,o),s=function(a){var c=Xt(),h=k.useContext(ct),m=k.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&f(m,a,c.styleSheet,h,c.stylis),k.useLayoutEffect(function(){if(!c.styleSheet.server)return f(m,a,c.styleSheet,h,c.stylis),function(){return i.removeStyles(m,c.styleSheet)}},[m,a,c.styleSheet,h,c.stylis]),null};function f(a,c,h,m,d){if(i.isStatic)i.renderStyles(a,bn,h,d);else{var g=E(E({},c),{theme:_e(c,m,s.defaultProps)});i.renderStyles(a,g,h,d)}}return k.memo(s)}function ar(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=bt(l.apply(void 0,K([t],e,!1))),o=Vt(r);return new Te(o,r)}const cr=nr();function nr(){return{"Main/XXL":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 42px;
      line-height: 52px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XL":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 36px;
      line-height: 44px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/L":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 40px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/M":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 28px;
      line-height: 36px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/S":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 20px;
      line-height: 28px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS-bold":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 18px;
      line-height: 24px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L-bold":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 16px;
      line-height: 24px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/M":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S-bold":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/XS":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/M":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/S":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      /* or 143% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/XS":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      /* identical to box height, or 133% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL1":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 72px;
      line-height: 80px;
      /* or 111% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL2":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 56px;
      line-height: 64px;
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL3":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 48px;
      line-height: 56px;
      /* or 117% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H1":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 40px;
      line-height: 48px;
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H2":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 34px;
      line-height: 40px;
      /* or 118% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H3":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 28px;
      line-height: 36px;
      /* or 129% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H4":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 24px;
      line-height: 32px;
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H5":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 20px;
      line-height: 28px;
      /* or 140% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H6":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 18px;
      line-height: 24px;
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 1":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 2":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 3":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 14px;
      line-height: 20px;
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Long":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Short":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      /* or 125% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Long":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Short":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 1":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 2":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 1":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      /* identical to box height, or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 2":l`
      font-family: ${t=>t.theme.fontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `}}export{l as a,ir as b,sr as d,ar as h,or as j,cr as t,tr as u};

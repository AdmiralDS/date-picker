import{r as ct,R as O}from"./index-DogsOklH.js";var ge={exports:{}},It={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je=ct,Ze=Symbol.for("react.element"),Ve=Symbol.for("react.fragment"),Xe=Object.prototype.hasOwnProperty,Qe=Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tr={key:!0,ref:!0,__self:!0,__source:!0};function me(t,e,r){var n,s={},o=null,i=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(i=e.ref);for(n in e)Xe.call(e,n)&&!tr.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:Ze,type:t,key:o,ref:i,props:s,_owner:Qe.current}}It.Fragment=Ve;It.jsx=me;It.jsxs=me;ge.exports=It;var rn=ge.exports,R=function(){return R=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},R.apply(this,arguments)};function K(t,e,r){if(r||arguments.length===2)for(var n=0,s=e.length,o;n<s;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}var v="-ms-",it="-moz-",m="-webkit-",ye="comm",At="rule",Ut="decl",er="@import",ve="@keyframes",rr="@layer",Se=Math.abs,Kt=String.fromCharCode,Gt=Object.assign;function nr(t,e){return E(t,0)^45?(((e<<2^E(t,0))<<2^E(t,1))<<2^E(t,2))<<2^E(t,3):0}function be(t){return t.trim()}function D(t,e){return(t=e.exec(t))?t[0]:t}function f(t,e,r){return t.replace(e,r)}function mt(t,e,r){return t.indexOf(e,r)}function E(t,e){return t.charCodeAt(e)|0}function J(t,e,r){return t.slice(e,r)}function j(t){return t.length}function we(t){return t.length}function ot(t,e){return e.push(t),t}function sr(t,e){return t.map(e).join("")}function ne(t,e){return t.filter(function(r){return!D(r,e)})}var Et=1,Z=1,xe=0,k=0,I=0,tt="";function Rt(t,e,r,n,s,o,i,u){return{value:t,root:e,parent:r,type:n,props:s,children:o,line:Et,column:Z,length:i,return:"",siblings:u}}function G(t,e){return Gt(Rt("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function H(t){for(;t.root;)t=G(t.root,{children:[t]});ot(t,t.siblings)}function or(){return I}function ir(){return I=k>0?E(tt,--k):0,Z--,I===10&&(Z=1,Et--),I}function N(){return I=k<xe?E(tt,k++):0,Z++,I===10&&(Z=1,Et++),I}function W(){return E(tt,k)}function yt(){return k}function Pt(t,e){return J(tt,t,e)}function Lt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ar(t){return Et=Z=1,xe=j(tt=t),k=0,[]}function cr(t){return tt="",t}function Tt(t){return be(Pt(k-1,Bt(t===91?t+2:t===40?t+1:t)))}function ur(t){for(;(I=W())&&I<33;)N();return Lt(t)>2||Lt(I)>3?"":" "}function fr(t,e){for(;--e&&N()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return Pt(t,yt()+(e<6&&W()==32&&N()==32))}function Bt(t){for(;N();)switch(I){case t:return k;case 34:case 39:t!==34&&t!==39&&Bt(I);break;case 40:t===41&&Bt(t);break;case 92:N();break}return k}function pr(t,e){for(;N()&&t+I!==57;)if(t+I===84&&W()===47)break;return"/*"+Pt(e,k-1)+"*"+Kt(t===47?t:N())}function hr(t){for(;!Lt(W());)N();return Pt(t,k)}function lr(t){return cr(vt("",null,null,null,[""],t=ar(t),0,[0],t))}function vt(t,e,r,n,s,o,i,u,a){for(var c=0,p=0,l=i,g=0,d=0,b=0,_=1,P=1,C=1,w=0,S="",x=s,A=o,y=n,h=S;P;)switch(b=w,w=N()){case 40:if(b!=108&&E(h,l-1)==58){mt(h+=f(Tt(w),"&","&\f"),"&\f",Se(c?u[c-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:h+=Tt(w);break;case 9:case 10:case 13:case 32:h+=ur(b);break;case 92:h+=fr(yt()-1,7);continue;case 47:switch(W()){case 42:case 47:ot(dr(pr(N(),yt()),e,r,a),a);break;default:h+="/"}break;case 123*_:u[c++]=j(h)*C;case 125*_:case 59:case 0:switch(w){case 0:case 125:P=0;case 59+p:C==-1&&(h=f(h,/\f/g,"")),d>0&&j(h)-l&&ot(d>32?oe(h+";",n,r,l-1,a):oe(f(h," ","")+";",n,r,l-2,a),a);break;case 59:h+=";";default:if(ot(y=se(h,e,r,c,p,s,u,S,x=[],A=[],l,o),o),w===123)if(p===0)vt(h,e,y,y,x,o,l,u,A);else switch(g===99&&E(h,3)===110?100:g){case 100:case 108:case 109:case 115:vt(t,y,y,n&&ot(se(t,y,y,0,0,s,u,S,s,x=[],l,A),A),s,A,l,u,n?x:A);break;default:vt(h,y,y,y,[""],A,0,u,A)}}c=p=d=0,_=C=1,S=h="",l=i;break;case 58:l=1+j(h),d=b;default:if(_<1){if(w==123)--_;else if(w==125&&_++==0&&ir()==125)continue}switch(h+=Kt(w),w*_){case 38:C=p>0?1:(h+="\f",-1);break;case 44:u[c++]=(j(h)-1)*C,C=1;break;case 64:W()===45&&(h+=Tt(N())),g=W(),p=l=j(S=h+=hr(yt())),w++;break;case 45:b===45&&j(h)==2&&(_=0)}}return o}function se(t,e,r,n,s,o,i,u,a,c,p,l){for(var g=s-1,d=s===0?o:[""],b=we(d),_=0,P=0,C=0;_<n;++_)for(var w=0,S=J(t,g+1,g=Se(P=i[_])),x=t;w<b;++w)(x=be(P>0?d[w]+" "+S:f(S,/&\f/g,d[w])))&&(a[C++]=x);return Rt(t,e,r,s===0?At:u,a,c,p,l)}function dr(t,e,r,n){return Rt(t,e,r,ye,Kt(or()),J(t,2,-2),0,n)}function oe(t,e,r,n,s){return Rt(t,e,r,Ut,J(t,0,n),J(t,n+1,-1),n,s)}function _e(t,e,r){switch(nr(t,e)){case 5103:return m+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return m+t+t;case 4789:return it+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return m+t+it+t+v+t+t;case 5936:switch(E(t,e+11)){case 114:return m+t+v+f(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return m+t+v+f(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return m+t+v+f(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return m+t+v+t+t;case 6165:return m+t+v+"flex-"+t+t;case 5187:return m+t+f(t,/(\w+).+(:[^]+)/,m+"box-$1$2"+v+"flex-$1$2")+t;case 5443:return m+t+v+"flex-item-"+f(t,/flex-|-self/g,"")+(D(t,/flex-|baseline/)?"":v+"grid-row-"+f(t,/flex-|-self/g,""))+t;case 4675:return m+t+v+"flex-line-pack"+f(t,/align-content|flex-|-self/g,"")+t;case 5548:return m+t+v+f(t,"shrink","negative")+t;case 5292:return m+t+v+f(t,"basis","preferred-size")+t;case 6060:return m+"box-"+f(t,"-grow","")+m+t+v+f(t,"grow","positive")+t;case 4554:return m+f(t,/([^-])(transform)/g,"$1"+m+"$2")+t;case 6187:return f(f(f(t,/(zoom-|grab)/,m+"$1"),/(image-set)/,m+"$1"),t,"")+t;case 5495:case 3959:return f(t,/(image-set\([^]*)/,m+"$1$`$1");case 4968:return f(f(t,/(.+:)(flex-)?(.*)/,m+"box-pack:$3"+v+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+m+t+t;case 4200:if(!D(t,/flex-|baseline/))return v+"grid-column-align"+J(t,e)+t;break;case 2592:case 3360:return v+f(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,s){return e=s,D(n.props,/grid-\w+-end/)})?~mt(t+(r=r[e].value),"span",0)?t:v+f(t,"-start","")+t+v+"grid-row-span:"+(~mt(r,"span",0)?D(r,/\d+/):+D(r,/\d+/)-+D(t,/\d+/))+";":v+f(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return D(n.props,/grid-\w+-start/)})?t:v+f(f(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return f(t,/(.+)-inline(.+)/,m+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(j(t)-1-e>6)switch(E(t,e+1)){case 109:if(E(t,e+4)!==45)break;case 102:return f(t,/(.+:)(.+)-([^]+)/,"$1"+m+"$2-$3$1"+it+(E(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~mt(t,"stretch",0)?_e(f(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return f(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,o,i,u,a,c){return v+s+":"+o+c+(i?v+s+"-span:"+(u?a:+a-+o)+c:"")+t});case 4949:if(E(t,e+6)===121)return f(t,":",":"+m)+t;break;case 6444:switch(E(t,E(t,14)===45?18:11)){case 120:return f(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+m+(E(t,14)===45?"inline-":"")+"box$3$1"+m+"$2$3$1"+v+"$2box$3")+t;case 100:return f(t,":",":"+v)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return f(t,"scroll-","scroll-snap-")+t}return t}function wt(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function gr(t,e,r,n){switch(t.type){case rr:if(t.children.length)break;case er:case Ut:return t.return=t.return||t.value;case ye:return"";case ve:return t.return=t.value+"{"+wt(t.children,n)+"}";case At:if(!j(t.value=t.props.join(",")))return""}return j(r=wt(t.children,n))?t.return=t.value+"{"+r+"}":""}function mr(t){var e=we(t);return function(r,n,s,o){for(var i="",u=0;u<e;u++)i+=t[u](r,n,s,o)||"";return i}}function yr(t){return function(e){e.root||(e=e.return)&&t(e)}}function vr(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case Ut:t.return=_e(t.value,t.length,r);return;case ve:return wt([G(t,{value:f(t.value,"@","@"+m)})],n);case At:if(t.length)return sr(r=t.props,function(s){switch(D(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":H(G(t,{props:[f(s,/:(read-\w+)/,":"+it+"$1")]})),H(G(t,{props:[s]})),Gt(t,{props:ne(r,n)});break;case"::placeholder":H(G(t,{props:[f(s,/:(plac\w+)/,":"+m+"input-$1")]})),H(G(t,{props:[f(s,/:(plac\w+)/,":"+it+"$1")]})),H(G(t,{props:[f(s,/:(plac\w+)/,v+"input-$1")]})),H(G(t,{props:[s]})),Gt(t,{props:ne(r,n)});break}return""})}}var Sr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$={},V=typeof process<"u"&&$!==void 0&&($.REACT_APP_SC_ATTR||$.SC_ATTR)||"data-styled",Ce="active",Ie="data-styled-version",$t="6.1.8",Jt=`/*!sc*/
`,Zt=typeof window<"u"&&"HTMLElement"in window,br=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$!==void 0&&$.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$.REACT_APP_SC_DISABLE_SPEEDY!==""?$.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$!==void 0&&$.SC_DISABLE_SPEEDY!==void 0&&$.SC_DISABLE_SPEEDY!==""&&$.SC_DISABLE_SPEEDY!=="false"&&$.SC_DISABLE_SPEEDY),wr={},kt=Object.freeze([]),X=Object.freeze({});function Ae(t,e,r){return r===void 0&&(r=X),t.theme!==r.theme&&t.theme||e||r.theme}var Ee=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_r=/(^-|-$)/g;function ie(t){return t.replace(xr,"-").replace(_r,"")}var Cr=/(a)(d)/gi,dt=52,ae=function(t){return String.fromCharCode(t+(t>25?39:97))};function Mt(t){var e,r="";for(e=Math.abs(t);e>dt;e=e/dt|0)r=ae(e%dt)+r;return(ae(e%dt)+r).replace(Cr,"$1-$2")}var Dt,Re=5381,U=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Pe=function(t){return U(Re,t)};function Vt(t){return Mt(Pe(t)>>>0)}function Ir(t){return t.displayName||t.name||"Component"}function Ft(t){return typeof t=="string"&&!0}var $e=typeof Symbol=="function"&&Symbol.for,ke=$e?Symbol.for("react.memo"):60115,Ar=$e?Symbol.for("react.forward_ref"):60112,Er={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Oe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pr=((Dt={})[Ar]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Dt[ke]=Oe,Dt);function ce(t){return("type"in(e=t)&&e.type.$$typeof)===ke?Oe:"$$typeof"in t?Pr[t.$$typeof]:Er;var e}var $r=Object.defineProperty,kr=Object.getOwnPropertyNames,ue=Object.getOwnPropertySymbols,Or=Object.getOwnPropertyDescriptor,Nr=Object.getPrototypeOf,fe=Object.prototype;function Ne(t,e,r){if(typeof e!="string"){if(fe){var n=Nr(e);n&&n!==fe&&Ne(t,n,r)}var s=kr(e);ue&&(s=s.concat(ue(e)));for(var o=ce(t),i=ce(e),u=0;u<s.length;++u){var a=s[u];if(!(a in Rr||r&&r[a]||i&&a in i||o&&a in o)){var c=Or(e,a);try{$r(t,a,c)}catch{}}}}return t}function q(t){return typeof t=="function"}function Xt(t){return typeof t=="object"&&"styledComponentId"in t}function Y(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function xt(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=e?e+t[n]:t[n];return r}function at(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Yt(t,e,r){if(r===void 0&&(r=!1),!r&&!at(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=Yt(t[n],e[n]);else if(at(e))for(var n in e)t[n]=Yt(t[n],e[n]);return t}function Qt(t,e){Object.defineProperty(t,"toString",{value:e})}function B(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var jr=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,o=s;e>=o;)if((o<<=1)<0)throw B(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=s;i<o;i++)this.groupSizes[i]=0}for(var u=this.indexOfGroup(e+1),a=(i=0,r.length);i<a;i++)this.tag.insertRule(u,r[i])&&(this.groupSizes[e]++,u++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),s=n+r;this.groupSizes[e]=0;for(var o=n;o<s;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],s=this.indexOfGroup(e),o=s+n,i=s;i<o;i++)r+="".concat(this.tag.getRule(i)).concat(Jt);return r},t}(),St=new Map,_t=new Map,bt=1,gt=function(t){if(St.has(t))return St.get(t);for(;_t.has(bt);)bt++;var e=bt++;return St.set(t,e),_t.set(e,t),e},Tr=function(t,e){bt=e+1,St.set(t,e),_t.set(e,t)},Dr="style[".concat(V,"][").concat(Ie,'="').concat($t,'"]'),Fr=new RegExp("^".concat(V,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),zr=function(t,e,r){for(var n,s=r.split(","),o=0,i=s.length;o<i;o++)(n=s[o])&&t.registerName(e,n)},Gr=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(Jt),s=[],o=0,i=n.length;o<i;o++){var u=n[o].trim();if(u){var a=u.match(Fr);if(a){var c=0|parseInt(a[1],10),p=a[2];c!==0&&(Tr(p,c),zr(t,p,a[3]),t.getTag().insertRules(c,s)),s.length=0}else s.push(u)}}};function Lr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var je=function(t){var e=document.head,r=t||e,n=document.createElement("style"),s=function(u){var a=Array.from(u.querySelectorAll("style[".concat(V,"]")));return a[a.length-1]}(r),o=s!==void 0?s.nextSibling:null;n.setAttribute(V,Ce),n.setAttribute(Ie,$t);var i=Lr();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},Br=function(){function t(e){this.element=je(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,o=n.length;s<o;s++){var i=n[s];if(i.ownerNode===r)return i}throw B(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),Mr=function(){function t(e){this.element=je(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Yr=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),pe=Zt,Wr={isServer:!Zt,useCSSOMInjection:!br},Ct=function(){function t(e,r,n){e===void 0&&(e=X),r===void 0&&(r={});var s=this;this.options=R(R({},Wr),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Zt&&pe&&(pe=!1,function(o){for(var i=document.querySelectorAll(Dr),u=0,a=i.length;u<a;u++){var c=i[u];c&&c.getAttribute(V)!==Ce&&(Gr(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Qt(this,function(){return function(o){for(var i=o.getTag(),u=i.length,a="",c=function(l){var g=function(C){return _t.get(C)}(l);if(g===void 0)return"continue";var d=o.names.get(g),b=i.getGroup(l);if(d===void 0||b.length===0)return"continue";var _="".concat(V,".g").concat(l,'[id="').concat(g,'"]'),P="";d!==void 0&&d.forEach(function(C){C.length>0&&(P+="".concat(C,","))}),a+="".concat(b).concat(_,'{content:"').concat(P,'"}').concat(Jt)},p=0;p<u;p++)c(p);return a}(s)})}return t.registerId=function(e){return gt(e)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(R(R({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new Yr(s):n?new Br(s):new Mr(s)}(this.options),new jr(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(gt(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(gt(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(gt(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),qr=/&/g,Hr=/^\s*\/\/.*$/gm;function Te(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Te(r.children,e)),r})}function Ur(t){var e,r,n,s=t===void 0?X:t,o=s.options,i=o===void 0?X:o,u=s.plugins,a=u===void 0?kt:u,c=function(g,d,b){return b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?".".concat(e):g},p=a.slice();p.push(function(g){g.type===At&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(qr,r).replace(n,c))}),i.prefix&&p.push(vr),p.push(gr);var l=function(g,d,b,_){d===void 0&&(d=""),b===void 0&&(b=""),_===void 0&&(_="&"),e=_,r=d,n=new RegExp("\\".concat(r,"\\b"),"g");var P=g.replace(Hr,""),C=lr(b||d?"".concat(b," ").concat(d," { ").concat(P," }"):P);i.namespace&&(C=Te(C,i.namespace));var w=[];return wt(C,mr(p.concat(yr(function(S){return w.push(S)})))),w};return l.hash=a.length?a.reduce(function(g,d){return d.name||B(15),U(g,d.name)},Re).toString():"",l}var Kr=new Ct,Wt=Ur(),De=O.createContext({shouldForwardProp:void 0,styleSheet:Kr,stylis:Wt});De.Consumer;O.createContext(void 0);function qt(){return ct.useContext(De)}var Fe=function(){function t(e,r){var n=this;this.inject=function(s,o){o===void 0&&(o=Wt);var i=n.name+o.hash;s.hasNameForId(n.id,i)||s.insertRules(n.id,i,o(n.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,Qt(this,function(){throw B(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Wt),this.name+e.hash},t}(),Jr=function(t){return t>="A"&&t<="Z"};function he(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;Jr(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var ze=function(t){return t==null||t===!1||t===""},Ge=function(t){var e,r,n=[];for(var s in t){var o=t[s];t.hasOwnProperty(s)&&!ze(o)&&(Array.isArray(o)&&o.isCss||q(o)?n.push("".concat(he(s),":"),o,";"):at(o)?n.push.apply(n,K(K(["".concat(s," {")],Ge(o),!1),["}"],!1)):n.push("".concat(he(s),": ").concat((e=s,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in Sr||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function L(t,e,r,n){if(ze(t))return[];if(Xt(t))return[".".concat(t.styledComponentId)];if(q(t)){if(!q(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var s=t(e);return L(s,e,r,n)}var o;return t instanceof Fe?r?(t.inject(r,n),[t.getName(n)]):[t]:at(t)?Ge(t):Array.isArray(t)?Array.prototype.concat.apply(kt,t.map(function(i){return L(i,e,r,n)})):[t.toString()]}function Le(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(q(r)&&!Xt(r))return!1}return!0}var Zr=Pe($t),Vr=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Le(e),this.componentId=r,this.baseHash=U(Zr,r),this.baseStyle=n,Ct.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=Y(s,this.staticRulesId);else{var o=xt(L(this.rules,e,r,n)),i=Mt(U(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,i)){var u=n(o,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,u)}s=Y(s,i),this.staticRulesId=i}else{for(var a=U(this.baseHash,n.hash),c="",p=0;p<this.rules.length;p++){var l=this.rules[p];if(typeof l=="string")c+=l;else if(l){var g=xt(L(l,e,r,n));a=U(a,g+p),c+=g}}if(c){var d=Mt(a>>>0);r.hasNameForId(this.componentId,d)||r.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),s=Y(s,d)}}return s},t}(),Q=O.createContext(void 0);Q.Consumer;function nn(){var t=ct.useContext(Q);if(!t)throw B(18);return t}function sn(t){var e=O.useContext(Q),r=ct.useMemo(function(){return function(n,s){if(!n)throw B(14);if(q(n)){var o=n(s);return o}if(Array.isArray(n)||typeof n!="object")throw B(8);return s?R(R({},s),n):n}(t.theme,e)},[t.theme,e]);return t.children?O.createElement(Q.Provider,{value:r},t.children):null}var zt={};function Xr(t,e,r){var n=Xt(t),s=t,o=!Ft(t),i=e.attrs,u=i===void 0?kt:i,a=e.componentId,c=a===void 0?function(x,A){var y=typeof x!="string"?"sc":ie(x);zt[y]=(zt[y]||0)+1;var h="".concat(y,"-").concat(Vt($t+y+zt[y]));return A?"".concat(A,"-").concat(h):h}(e.displayName,e.parentComponentId):a,p=e.displayName,l=p===void 0?function(x){return Ft(x)?"styled.".concat(x):"Styled(".concat(Ir(x),")")}(t):p,g=e.displayName&&e.componentId?"".concat(ie(e.displayName),"-").concat(e.componentId):e.componentId||c,d=n&&s.attrs?s.attrs.concat(u).filter(Boolean):u,b=e.shouldForwardProp;if(n&&s.shouldForwardProp){var _=s.shouldForwardProp;if(e.shouldForwardProp){var P=e.shouldForwardProp;b=function(x,A){return _(x,A)&&P(x,A)}}else b=_}var C=new Vr(r,g,n?s.componentStyle:void 0);function w(x,A){return function(y,h,et){var ut=y.attrs,Me=y.componentStyle,Ye=y.defaultProps,We=y.foldedComponentIds,qe=y.styledComponentId,He=y.target,Ue=O.useContext(Q),Ke=qt(),Ot=y.shouldForwardProp||Ke.shouldForwardProp,ee=Ae(h,Ue,Ye)||X,T=function(pt,nt,ht){for(var st,M=R(R({},nt),{className:void 0,theme:ht}),jt=0;jt<pt.length;jt+=1){var lt=q(st=pt[jt])?st(M):st;for(var z in lt)M[z]=z==="className"?Y(M[z],lt[z]):z==="style"?R(R({},M[z]),lt[z]):lt[z]}return nt.className&&(M.className=Y(M.className,nt.className)),M}(ut,h,ee),ft=T.as||He,rt={};for(var F in T)T[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&T.theme===ee||(F==="forwardedAs"?rt.as=T.forwardedAs:Ot&&!Ot(F,ft)||(rt[F]=T[F]));var re=function(pt,nt){var ht=qt(),st=pt.generateAndInjectStyles(nt,ht.styleSheet,ht.stylis);return st}(Me,T),Nt=Y(We,qe);return re&&(Nt+=" "+re),T.className&&(Nt+=" "+T.className),rt[Ft(ft)&&!Ee.has(ft)?"class":"className"]=Nt,rt.ref=et,ct.createElement(ft,rt)}(S,x,A)}w.displayName=l;var S=O.forwardRef(w);return S.attrs=d,S.componentStyle=C,S.displayName=l,S.shouldForwardProp=b,S.foldedComponentIds=n?Y(s.foldedComponentIds,s.styledComponentId):"",S.styledComponentId=g,S.target=n?s.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=n?function(A){for(var y=[],h=1;h<arguments.length;h++)y[h-1]=arguments[h];for(var et=0,ut=y;et<ut.length;et++)Yt(A,ut[et],!0);return A}({},s.defaultProps,x):x}}),Qt(S,function(){return".".concat(S.styledComponentId)}),o&&Ne(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function le(t,e){for(var r=[t[0]],n=0,s=e.length;n<s;n+=1)r.push(e[n],t[n+1]);return r}var de=function(t){return Object.assign(t,{isCss:!0})};function te(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(q(t)||at(t))return de(L(le(kt,K([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?L(n):de(L(le(n,e)))}function Ht(t,e,r){if(r===void 0&&(r=X),!e)throw B(1,e);var n=function(s){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return t(e,r,te.apply(void 0,K([s],o,!1)))};return n.attrs=function(s){return Ht(t,e,R(R({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return Ht(t,e,R(R({},r),s))},n}var Be=function(t){return Ht(Xr,t)},Qr=Be;Ee.forEach(function(t){Qr[t]=Be(t)});var tn=function(){function t(e,r){this.rules=e,this.componentId=r,this.isStatic=Le(e),Ct.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,r,n,s){var o=s(xt(L(this.rules,r,n,s)),""),i=this.componentId+e;n.insertRules(i,i,o)},t.prototype.removeStyles=function(e,r){r.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,r,n,s){e>2&&Ct.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,r,n,s)},t}();function on(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=te.apply(void 0,K([t],e,!1)),s="sc-global-".concat(Vt(JSON.stringify(n))),o=new tn(n,s),i=function(a){var c=qt(),p=O.useContext(Q),l=O.useRef(c.styleSheet.allocateGSInstance(s)).current;return c.styleSheet.server&&u(l,a,c.styleSheet,p,c.stylis),O.useLayoutEffect(function(){if(!c.styleSheet.server)return u(l,a,c.styleSheet,p,c.stylis),function(){return o.removeStyles(l,c.styleSheet)}},[l,a,c.styleSheet,p,c.stylis]),null};function u(a,c,p,l,g){if(o.isStatic)o.renderStyles(a,wr,p,g);else{var d=R(R({},c),{theme:Ae(c,l,i.defaultProps)});o.renderStyles(a,d,p,g)}}return O.memo(i)}function an(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=xt(te.apply(void 0,K([t],e,!1))),s=Vt(n);return new Fe(s,n)}export{te as a,on as d,nn as e,an as h,rn as j,sn as t,Qr as u};

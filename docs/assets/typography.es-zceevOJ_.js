import{_ as U,a as $}from"./tslib.es6-gXVSDp23.js";import{R as F,r as Xt}from"./index-uubelm5h.js";var S="-ms-",at="-moz-",y="-webkit-",he="comm",Bt="rule",qt="decl",Xe="@import",ge="@keyframes",qe="@layer",pe=Math.abs,Kt=String.fromCharCode,Ot=Object.assign;function Ke(t,e){return P(t,0)^45?(((e<<2^P(t,0))<<2^P(t,1))<<2^P(t,2))<<2^P(t,3):0}function ye(t){return t.trim()}function N(t,e){return(t=e.exec(t))?t[0]:t}function c(t,e,n){return t.replace(e,n)}function pt(t,e,n){return t.indexOf(e,n)}function P(t,e){return t.charCodeAt(e)|0}function Z(t,e,n){return t.slice(e,n)}function L(t){return t.length}function ve(t){return t.length}function ot(t,e){return e.push(t),t}function Ue(t,e){return t.map(e).join("")}function ne(t,e){return t.filter(function(n){return!N(n,e)})}var zt=1,J=1,Se=0,E=0,z=0,tt="";function Ct(t,e,n,r,i,o,a,l){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:zt,column:J,length:a,return:"",siblings:l}}function D(t,e){return Ot(Ct("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function q(t){for(;t.root;)t=D(t.root,{children:[t]});ot(t,t.siblings)}function Ze(){return z}function Je(){return z=E>0?P(tt,--E):0,J--,z===10&&(J=1,zt--),z}function R(){return z=E<Se?P(tt,E++):0,J++,z===10&&(J=1,zt++),z}function Y(){return P(tt,E)}function yt(){return E}function Pt(t,e){return Z(tt,t,e)}function Tt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Qe(t){return zt=J=1,Se=L(tt=t),E=0,[]}function Ve(t){return tt="",t}function Rt(t){return ye(Pt(E-1,Dt(t===91?t+2:t===40?t+1:t)))}function tn(t){for(;(z=Y())&&z<33;)R();return Tt(t)>2||Tt(z)>3?"":" "}function en(t,e){for(;--e&&R()&&!(z<48||z>102||z>57&&z<65||z>70&&z<97););return Pt(t,yt()+(e<6&&Y()==32&&R()==32))}function Dt(t){for(;R();)switch(z){case t:return E;case 34:case 39:t!==34&&t!==39&&Dt(z);break;case 40:t===41&&Dt(t);break;case 92:R();break}return E}function nn(t,e){for(;R()&&t+z!==57;)if(t+z===84&&Y()===47)break;return"/*"+Pt(e,E-1)+"*"+Kt(t===47?t:R())}function rn(t){for(;!Tt(Y());)R();return Pt(t,E)}function on(t){return Ve(vt("",null,null,null,[""],t=Qe(t),0,[0],t))}function vt(t,e,n,r,i,o,a,l,s){for(var f=0,m=0,h=a,p=0,g=0,x=0,H=1,I=1,B=1,_=0,w="",b=i,C=o,v=r,d=w;I;)switch(x=_,_=R()){case 40:if(x!=108&&P(d,h-1)==58){pt(d+=c(Rt(_),"&","&\f"),"&\f",pe(f?l[f-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:d+=Rt(_);break;case 9:case 10:case 13:case 32:d+=tn(x);break;case 92:d+=en(yt()-1,7);continue;case 47:switch(Y()){case 42:case 47:ot(an(nn(R(),yt()),e,n,s),s);break;default:d+="/"}break;case 123*H:l[f++]=L(d)*B;case 125*H:case 59:case 0:switch(_){case 0:case 125:I=0;case 59+m:B==-1&&(d=c(d,/\f/g,"")),g>0&&L(d)-h&&ot(g>32?ie(d+";",r,n,h-1,s):ie(c(d," ","")+";",r,n,h-2,s),s);break;case 59:d+=";";default:if(ot(v=re(d,e,n,f,m,i,l,w,b=[],C=[],h,o),o),_===123)if(m===0)vt(d,e,v,v,b,o,h,l,C);else switch(p===99&&P(d,3)===110?100:p){case 100:case 108:case 109:case 115:vt(t,v,v,r&&ot(re(t,v,v,0,0,i,l,w,i,b=[],h,C),C),i,C,h,l,r?b:C);break;default:vt(d,v,v,v,[""],C,0,l,C)}}f=m=g=0,H=B=1,w=d="",h=a;break;case 58:h=1+L(d),g=x;default:if(H<1){if(_==123)--H;else if(_==125&&H++==0&&Je()==125)continue}switch(d+=Kt(_),_*H){case 38:B=m>0?1:(d+="\f",-1);break;case 44:l[f++]=(L(d)-1)*B,B=1;break;case 64:Y()===45&&(d+=Rt(R())),p=Y(),m=h=L(w=d+=rn(yt())),_++;break;case 45:x===45&&L(d)==2&&(H=0)}}return o}function re(t,e,n,r,i,o,a,l,s,f,m,h){for(var p=i-1,g=i===0?o:[""],x=ve(g),H=0,I=0,B=0;H<r;++H)for(var _=0,w=Z(t,p+1,p=pe(I=a[H])),b=t;_<x;++_)(b=ye(I>0?g[_]+" "+w:c(w,/&\f/g,g[_])))&&(s[B++]=b);return Ct(t,e,n,i===0?Bt:l,s,f,m,h)}function an(t,e,n,r){return Ct(t,e,n,he,Kt(Ze()),Z(t,2,-2),0,r)}function ie(t,e,n,r,i){return Ct(t,e,n,qt,Z(t,0,r),Z(t,r+1,-1),r,i)}function we(t,e,n){switch(Ke(t,e)){case 5103:return y+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return y+t+t;case 4789:return at+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return y+t+at+t+S+t+t;case 5936:switch(P(t,e+11)){case 114:return y+t+S+c(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return y+t+S+c(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return y+t+S+c(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return y+t+S+t+t;case 6165:return y+t+S+"flex-"+t+t;case 5187:return y+t+c(t,/(\w+).+(:[^]+)/,y+"box-$1$2"+S+"flex-$1$2")+t;case 5443:return y+t+S+"flex-item-"+c(t,/flex-|-self/g,"")+(N(t,/flex-|baseline/)?"":S+"grid-row-"+c(t,/flex-|-self/g,""))+t;case 4675:return y+t+S+"flex-line-pack"+c(t,/align-content|flex-|-self/g,"")+t;case 5548:return y+t+S+c(t,"shrink","negative")+t;case 5292:return y+t+S+c(t,"basis","preferred-size")+t;case 6060:return y+"box-"+c(t,"-grow","")+y+t+S+c(t,"grow","positive")+t;case 4554:return y+c(t,/([^-])(transform)/g,"$1"+y+"$2")+t;case 6187:return c(c(c(t,/(zoom-|grab)/,y+"$1"),/(image-set)/,y+"$1"),t,"")+t;case 5495:case 3959:return c(t,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return c(c(t,/(.+:)(flex-)?(.*)/,y+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+y+t+t;case 4200:if(!N(t,/flex-|baseline/))return S+"grid-column-align"+Z(t,e)+t;break;case 2592:case 3360:return S+c(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,N(r.props,/grid-\w+-end/)})?~pt(t+(n=n[e].value),"span",0)?t:S+c(t,"-start","")+t+S+"grid-row-span:"+(~pt(n,"span",0)?N(n,/\d+/):+N(n,/\d+/)-+N(t,/\d+/))+";":S+c(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return N(r.props,/grid-\w+-start/)})?t:S+c(c(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return c(t,/(.+)-inline(.+)/,y+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(L(t)-1-e>6)switch(P(t,e+1)){case 109:if(P(t,e+4)!==45)break;case 102:return c(t,/(.+:)(.+)-([^]+)/,"$1"+y+"$2-$3$1"+at+(P(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~pt(t,"stretch",0)?we(c(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return c(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,f){return S+i+":"+o+f+(a?S+i+"-span:"+(l?s:+s-+o)+f:"")+t});case 4949:if(P(t,e+6)===121)return c(t,":",":"+y)+t;break;case 6444:switch(P(t,P(t,14)===45?18:11)){case 120:return c(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+y+(P(t,14)===45?"inline-":"")+"box$3$1"+y+"$2$3$1"+S+"$2box$3")+t;case 100:return c(t,":",":"+S)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return c(t,"scroll-","scroll-snap-")+t}return t}function xt(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function sn(t,e,n,r){switch(t.type){case qe:if(t.children.length)break;case Xe:case qt:return t.return=t.return||t.value;case he:return"";case ge:return t.return=t.value+"{"+xt(t.children,r)+"}";case Bt:if(!L(t.value=t.props.join(",")))return""}return L(n=xt(t.children,r))?t.return=t.value+"{"+n+"}":""}function fn(t){var e=ve(t);return function(n,r,i,o){for(var a="",l=0;l<e;l++)a+=t[l](n,r,i,o)||"";return a}}function ln(t){return function(e){e.root||(e=e.return)&&t(e)}}function cn(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case qt:t.return=we(t.value,t.length,n);return;case ge:return xt([D(t,{value:c(t.value,"@","@"+y)})],r);case Bt:if(t.length)return Ue(n=t.props,function(i){switch(N(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":q(D(t,{props:[c(i,/:(read-\w+)/,":"+at+"$1")]})),q(D(t,{props:[i]})),Ot(t,{props:ne(n,r)});break;case"::placeholder":q(D(t,{props:[c(i,/:(plac\w+)/,":"+y+"input-$1")]})),q(D(t,{props:[c(i,/:(plac\w+)/,":"+at+"$1")]})),q(D(t,{props:[c(i,/:(plac\w+)/,S+"input-$1")]})),q(D(t,{props:[i]})),Ot(t,{props:ne(n,r)});break}return""})}}var un={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},A={},Q=typeof process<"u"&&A!==void 0&&(A.REACT_APP_SC_ATTR||A.SC_ATTR)||"data-styled",xe="active",_e="data-styled-version",$t="6.1.11",Ut=`/*!sc*/
`,Zt=typeof window<"u"&&"HTMLElement"in window,mn=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&A!==void 0&&A.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&A.REACT_APP_SC_DISABLE_SPEEDY!==""?A.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&A.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&A!==void 0&&A.SC_DISABLE_SPEEDY!==void 0&&A.SC_DISABLE_SPEEDY!==""&&A.SC_DISABLE_SPEEDY!=="false"&&A.SC_DISABLE_SPEEDY),dn={},It=Object.freeze([]),V=Object.freeze({});function be(t,e,n){return n===void 0&&(n=V),t.theme!==n.theme&&t.theme||e||n.theme}var He=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gn=/(^-|-$)/g;function oe(t){return t.replace(hn,"-").replace(gn,"")}var pn=/(a)(d)/gi,ht=52,ae=function(t){return String.fromCharCode(t+(t>25?39:97))};function jt(t){var e,n="";for(e=Math.abs(t);e>ht;e=e/ht|0)n=ae(e%ht)+n;return(ae(e%ht)+n).replace(pn,"$1-$2")}var Lt,Be=5381,K=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},ze=function(t){return K(Be,t)};function Jt(t){return jt(ze(t)>>>0)}function yn(t){return t.displayName||t.name||"Component"}function kt(t){return typeof t=="string"&&!0}var Ce=typeof Symbol=="function"&&Symbol.for,Pe=Ce?Symbol.for("react.memo"):60115,vn=Ce?Symbol.for("react.forward_ref"):60112,Sn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$e={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xn=((Lt={})[vn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lt[Pe]=$e,Lt);function se(t){return("type"in(e=t)&&e.type.$$typeof)===Pe?$e:"$$typeof"in t?xn[t.$$typeof]:Sn;var e}var _n=Object.defineProperty,bn=Object.getOwnPropertyNames,fe=Object.getOwnPropertySymbols,Hn=Object.getOwnPropertyDescriptor,Bn=Object.getPrototypeOf,le=Object.prototype;function Ie(t,e,n){if(typeof e!="string"){if(le){var r=Bn(e);r&&r!==le&&Ie(t,r,n)}var i=bn(e);fe&&(i=i.concat(fe(e)));for(var o=se(t),a=se(e),l=0;l<i.length;++l){var s=i[l];if(!(s in wn||n&&n[s]||a&&s in a||o&&s in o)){var f=Hn(e,s);try{_n(t,s,f)}catch{}}}}return t}function W(t){return typeof t=="function"}function Qt(t){return typeof t=="object"&&"styledComponentId"in t}function G(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function _t(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function st(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Mt(t,e,n){if(n===void 0&&(n=!1),!n&&!st(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Mt(t[r],e[r]);else if(st(e))for(var r in e)t[r]=Mt(t[r],e[r]);return t}function Vt(t,e){Object.defineProperty(t,"toString",{value:e})}function X(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var zn=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw X(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(e+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(Ut);return n},t}(),St=new Map,bt=new Map,wt=1,gt=function(t){if(St.has(t))return St.get(t);for(;bt.has(wt);)wt++;var e=wt++;return St.set(t,e),bt.set(e,t),e},Cn=function(t,e){wt=e+1,St.set(t,e),bt.set(e,t)},Pn="style[".concat(Q,"][").concat(_e,'="').concat($t,'"]'),$n=new RegExp("^".concat(Q,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),In=function(t,e,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&t.registerName(e,r)},An=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Ut),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match($n);if(s){var f=0|parseInt(s[1],10),m=s[2];f!==0&&(Cn(m,f),In(t,m,s[3]),t.getTag().insertRules(f,i)),i.length=0}else i.push(l)}}};function En(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ae=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Q,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Q,xe),r.setAttribute(_e,$t);var a=En();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Fn=function(){function t(e){this.element=Ae(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw X(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Rn=function(){function t(e){this.element=Ae(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Ln=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ce=Zt,kn={isServer:!Zt,useCSSOMInjection:!mn},Ht=function(){function t(e,n,r){e===void 0&&(e=V),n===void 0&&(n={});var i=this;this.options=$($({},kn),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Zt&&ce&&(ce=!1,function(o){for(var a=document.querySelectorAll(Pn),l=0,s=a.length;l<s;l++){var f=a[l];f&&f.getAttribute(Q)!==xe&&(An(o,f),f.parentNode&&f.parentNode.removeChild(f))}}(this)),Vt(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",f=function(h){var p=function(B){return bt.get(B)}(h);if(p===void 0)return"continue";var g=o.names.get(p),x=a.getGroup(h);if(g===void 0||x.length===0)return"continue";var H="".concat(Q,".g").concat(h,'[id="').concat(p,'"]'),I="";g!==void 0&&g.forEach(function(B){B.length>0&&(I+="".concat(B,","))}),s+="".concat(x).concat(H,'{content:"').concat(I,'"}').concat(Ut)},m=0;m<l;m++)f(m);return s}(i)})}return t.registerId=function(e){return gt(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t($($({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ln(i):r?new Fn(i):new Rn(i)}(this.options),new zn(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(gt(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(gt(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(gt(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Nn=/&/g,On=/^\s*\/\/.*$/gm;function Ee(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ee(n.children,e)),n})}function Tn(t){var e,n,r,i=V,o=i.options,a=o===void 0?V:o,l=i.plugins,s=l===void 0?It:l,f=function(p,g,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(e):p},m=s.slice();m.push(function(p){p.type===Bt&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Nn,n).replace(r,f))}),a.prefix&&m.push(cn),m.push(sn);var h=function(p,g,x,H){g===void 0&&(g=""),x===void 0&&(x=""),H===void 0&&(H="&"),e=H,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var I=p.replace(On,""),B=on(x||g?"".concat(x," ").concat(g," { ").concat(I," }"):I);a.namespace&&(B=Ee(B,a.namespace));var _=[];return xt(B,fn(m.concat(ln(function(w){return _.push(w)})))),_};return h.hash=s.length?s.reduce(function(p,g){return g.name||X(15),K(p,g.name)},Be).toString():"",h}var Dn=new Ht,Gt=Tn(),Fe=F.createContext({shouldForwardProp:void 0,styleSheet:Dn,stylis:Gt});Fe.Consumer;F.createContext(void 0);function Yt(){return Xt.useContext(Fe)}var Re=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Gt);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Vt(this,function(){throw X(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Gt),this.name+e.hash},t}(),jn=function(t){return t>="A"&&t<="Z"};function ue(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;jn(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Le=function(t){return t==null||t===!1||t===""},ke=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!Le(o)&&(Array.isArray(o)&&o.isCss||W(o)?r.push("".concat(ue(i),":"),o,";"):st(o)?r.push.apply(r,U(U(["".concat(i," {")],ke(o),!1),["}"],!1)):r.push("".concat(ue(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in un||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function j(t,e,n,r){if(Le(t))return[];if(Qt(t))return[".".concat(t.styledComponentId)];if(W(t)){if(!W(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return j(i,e,n,r)}var o;return t instanceof Re?n?(t.inject(n,r),[t.getName(r)]):[t]:st(t)?ke(t):Array.isArray(t)?Array.prototype.concat.apply(It,t.map(function(a){return j(a,e,n,r)})):[t.toString()]}function Ne(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(W(n)&&!Qt(n))return!1}return!0}var Mn=ze($t),Gn=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ne(e),this.componentId=n,this.baseHash=K(Mn,n),this.baseStyle=r,Ht.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=G(i,this.staticRulesId);else{var o=_t(j(this.rules,e,n,r)),a=jt(K(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=G(i,a),this.staticRulesId=a}else{for(var s=K(this.baseHash,r.hash),f="",m=0;m<this.rules.length;m++){var h=this.rules[m];if(typeof h=="string")f+=h;else if(h){var p=_t(j(h,e,n,r));s=K(s,p+m),f+=p}}if(f){var g=jt(s>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(f,".".concat(g),void 0,this.componentId)),i=G(i,g)}}return i},t}(),ft=F.createContext(void 0);ft.Consumer;function Zn(t){var e=F.useContext(ft),n=Xt.useMemo(function(){return function(r,i){if(!r)throw X(14);if(W(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw X(8);return i?$($({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?F.createElement(ft.Provider,{value:n},t.children):null}var Nt={};function Yn(t,e,n){var r=Qt(t),i=t,o=!kt(t),a=e.attrs,l=a===void 0?It:a,s=e.componentId,f=s===void 0?function(b,C){var v=typeof b!="string"?"sc":oe(b);Nt[v]=(Nt[v]||0)+1;var d="".concat(v,"-").concat(Jt($t+v+Nt[v]));return C?"".concat(C,"-").concat(d):d}(e.displayName,e.parentComponentId):s,m=e.displayName,h=m===void 0?function(b){return kt(b)?"styled.".concat(b):"Styled(".concat(yn(b),")")}(t):m,p=e.displayName&&e.componentId?"".concat(oe(e.displayName),"-").concat(e.componentId):e.componentId||f,g=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,x=e.shouldForwardProp;if(r&&i.shouldForwardProp){var H=i.shouldForwardProp;if(e.shouldForwardProp){var I=e.shouldForwardProp;x=function(b,C){return H(b,C)&&I(b,C)}}else x=H}var B=new Gn(n,p,r?i.componentStyle:void 0);function _(b,C){return function(v,d,et){var lt=v.attrs,Te=v.componentStyle,De=v.defaultProps,je=v.foldedComponentIds,Me=v.styledComponentId,Ge=v.target,Ye=F.useContext(ft),We=Yt(),At=v.shouldForwardProp||We.shouldForwardProp,te=be(d,Ye,De)||V,k=function(ut,rt,mt){for(var it,M=$($({},rt),{className:void 0,theme:mt}),Ft=0;Ft<ut.length;Ft+=1){var dt=W(it=ut[Ft])?it(M):it;for(var T in dt)M[T]=T==="className"?G(M[T],dt[T]):T==="style"?$($({},M[T]),dt[T]):dt[T]}return rt.className&&(M.className=G(M.className,rt.className)),M}(lt,d,te),ct=k.as||Ge,nt={};for(var O in k)k[O]===void 0||O[0]==="$"||O==="as"||O==="theme"&&k.theme===te||(O==="forwardedAs"?nt.as=k.forwardedAs:At&&!At(O,ct)||(nt[O]=k[O]));var ee=function(ut,rt){var mt=Yt(),it=ut.generateAndInjectStyles(rt,mt.styleSheet,mt.stylis);return it}(Te,k),Et=G(je,Me);return ee&&(Et+=" "+ee),k.className&&(Et+=" "+k.className),nt[kt(ct)&&!He.has(ct)?"class":"className"]=Et,nt.ref=et,Xt.createElement(ct,nt)}(w,b,C)}_.displayName=h;var w=F.forwardRef(_);return w.attrs=g,w.componentStyle=B,w.displayName=h,w.shouldForwardProp=x,w.foldedComponentIds=r?G(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=p,w.target=r?i.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(C){for(var v=[],d=1;d<arguments.length;d++)v[d-1]=arguments[d];for(var et=0,lt=v;et<lt.length;et++)Mt(C,lt[et],!0);return C}({},i.defaultProps,b):b}}),Vt(w,function(){return".".concat(w.styledComponentId)}),o&&Ie(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function me(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var de=function(t){return Object.assign(t,{isCss:!0})};function u(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(W(t)||st(t))return de(j(me(It,U([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?j(r):de(j(me(r,e)))}function Wt(t,e,n){if(n===void 0&&(n=V),!e)throw X(1,e);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return t(e,n,u.apply(void 0,U([i],o,!1)))};return r.attrs=function(i){return Wt(t,e,$($({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Wt(t,e,$($({},n),i))},r}var Oe=function(t){return Wt(Yn,t)},Wn=Oe;He.forEach(function(t){Wn[t]=Oe(t)});var Xn=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=Ne(e),Ht.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var o=i(_t(j(this.rules,n,r,i)),""),a=this.componentId+e;r.insertRules(a,a,o)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Ht.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function Jn(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=u.apply(void 0,U([t],e,!1)),i="sc-global-".concat(Jt(JSON.stringify(r))),o=new Xn(r,i),a=function(s){var f=Yt(),m=F.useContext(ft),h=F.useRef(f.styleSheet.allocateGSInstance(i)).current;return f.styleSheet.server&&l(h,s,f.styleSheet,m,f.stylis),F.useLayoutEffect(function(){if(!f.styleSheet.server)return l(h,s,f.styleSheet,m,f.stylis),function(){return o.removeStyles(h,f.styleSheet)}},[h,s,f.styleSheet,m,f.stylis]),null};function l(s,f,m,h,p){if(o.isStatic)o.renderStyles(s,dn,m,p);else{var g=$($({},f),{theme:be(f,h,a.defaultProps)});o.renderStyles(s,g,m,p)}}return F.memo(a)}function Qn(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=_t(u.apply(void 0,U([t],e,!1))),i=Jt(r);return new Re(i,r)}const Vn=qn();function qn(){return{"Main/XXL":u`
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
    `}}export{u as c,Qn as f,Jn as h,Zn as n,Wn as p,Vn as t};

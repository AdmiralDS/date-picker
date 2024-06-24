import{r as c}from"./index-uubelm5h.js";var l={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=c,i=Symbol.for("react.element"),_=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,v=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,o){var r,n={},p=null,a=null;o!==void 0&&(p=""+o),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)O.call(e,r)&&!m.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:i,type:t,key:p,ref:a,props:n,_owner:v.current}}s.Fragment=_;s.jsx=u;s.jsxs=u;l.exports=s;var b=l.exports,f=function(){return f=Object.assign||function(e){for(var o,r=1,n=arguments.length;r<n;r++){o=arguments[r];for(var p in o)Object.prototype.hasOwnProperty.call(o,p)&&(e[p]=o[p])}return e},f.apply(this,arguments)};function g(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]]);return o}function x(t,e,o){if(o||arguments.length===2)for(var r=0,n=e.length,p;r<n;r++)(p||!(r in e))&&(p||(p=Array.prototype.slice.call(e,0,r)),p[r]=e[r]);return t.concat(p||Array.prototype.slice.call(e))}export{x as _,f as a,g as b,b as j};

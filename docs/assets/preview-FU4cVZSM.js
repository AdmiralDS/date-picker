const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-ha4NyB5o.js","./chunk-HLWAVYOI-BZauk0RV.js","./iframe-B81PY8li.js","./index-CDs2tPxN.js","./react-18-Bn-wYQhd.js","./index-B-yFm4aN.js","./_getPrototype-Dh5RzkEz.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-B81PY8li.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-ha4NyB5o.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};

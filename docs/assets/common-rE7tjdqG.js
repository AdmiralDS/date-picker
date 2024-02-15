import{a as n,h as c,u as t,j as u}from"./typography.es-y01boJtk.js";import{r as p}from"./index-BBkUAzwr.js";const m="Neutral/Neutral 90",f=e=>c`
  0% {
    background-color: ${e.theme.color["Neutral/Neutral 10"]};
    border-color: ${e.theme.color["Neutral/Neutral 10"]};
  }
  50% {
    background-color: ${e.theme.color["Neutral/Neutral 20"]};
    border-color: ${e.theme.color["Neutral/Neutral 20"]};
  }
  100% {
    background-color: ${e.theme.color["Neutral/Neutral 10"]};
    border-color: ${e.theme.color["Neutral/Neutral 10"]};
  }
`,x=n`
  animation: ${e=>f(e)} 2s ease infinite;
`,y=n`
  ${x};
  pointer-events: none;
`,N=t.span`
  color: ${({$color:e,theme:a,$skeleton:r})=>r?"transparent":e?a.color[e]?a.color[e]:e:a.color[m]};
  ${e=>e.theme.typography[e.$font]};
  ${e=>e.$cssMixin?e.$cssMixin:""}
  ${e=>e.$skeleton&&y}
`,h=p.forwardRef(({font:e,color:a,cssMixin:r,skeleton:i,...s},d)=>u.jsx(N,{ref:d,...s,$font:e,$color:a,$cssMixin:r,$skeleton:i}));h.displayName="T";const o=t.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`,l=t.div`
  //width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;try{o.displayName="WrapperVertical",o.__docgenInfo={description:"",displayName:"WrapperVertical",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="WrapperHorizontal",l.__docgenInfo={description:"",displayName:"WrapperHorizontal",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{h as T,l as W,o as a,x as s};

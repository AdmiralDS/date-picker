import{a as n,h as c,u as t,j as u}from"./styled-components.browser.esm-7zUEPxZV.js";import{r as p}from"./index-DogsOklH.js";import{t as m}from"./index-GEu7UUTq.js";const f="Neutral/Neutral 90",x=e=>c`
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
`,y=n`
  animation: ${e=>x(e)} 2s ease infinite;
`,N=n`
  ${y};
  pointer-events: none;
`,h=t.span`
  color: ${({$color:e,theme:a,$skeleton:r})=>r?"transparent":e?a.color[e]?a.color[e]:e:a.color[f]};
  ${e=>m[e.$font]};
  ${e=>e.$cssMixin?e.$cssMixin:""}
  ${e=>e.$skeleton&&N}
`,$=p.forwardRef(({font:e,color:a,cssMixin:r,skeleton:i,...s},d)=>u.jsx(h,{ref:d,...s,$font:e,$color:a,$cssMixin:r,$skeleton:i}));$.displayName="T";const o=t.div`
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
`;try{o.displayName="WrapperVertical",o.__docgenInfo={description:"",displayName:"WrapperVertical",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="WrapperHorizontal",l.__docgenInfo={description:"",displayName:"WrapperHorizontal",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{$ as T,l as W,o as a,y as s};

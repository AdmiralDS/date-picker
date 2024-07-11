import{c as i,f as d,p as l,j as u}from"./typography.es-DJ4WRfsu.js";import{r as p}from"./index-RYns6xqu.js";const m="Neutral/Neutral 90",f=e=>d`
  0% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${e.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${e.theme.color["Neutral/Neutral 10"]});
  }
  50% {
    background-color: var(--admiral-color-Neutral_Neutral20, ${e.theme.color["Neutral/Neutral 20"]});
    border-color: var(--admiral-color-Neutral_Neutral20, ${e.theme.color["Neutral/Neutral 20"]});
  }
  100% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${e.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${e.theme.color["Neutral/Neutral 10"]});
  }
`,N=i`
  animation: ${e=>f(e)} 2s ease infinite;
`,_=i`
  ${N};
  pointer-events: none;
`,y=l.span`
  color: ${({$color:e,theme:a,$skeleton:r})=>{const t=`--admiral-color-${e==null?void 0:e.replace("/","_").replaceAll(" ","")}`;return r?"transparent":e?a.color[e]?`var(${t}, ${a.color[e]})`:e:`var(--admiral-color-Neutral_Neutral90, ${a.color[m]})`}};
  ${e=>e.theme.typography[e.$font]};
  ${e=>e.$cssMixin?e.$cssMixin:""}
  ${e=>e.$skeleton&&_}
`,x=p.forwardRef(({font:e,color:a,cssMixin:r,skeleton:t,...s},c)=>u.jsx(y,{ref:c,...s,$font:e,$color:a,$cssMixin:r,$skeleton:t}));x.displayName="T";const o=l.div.withConfig({displayName:"common__WrapperVertical",componentId:"sc-5458c68c-0"})(["width:500px;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;gap:20px;"]),n=l.div.withConfig({displayName:"common__WrapperHorizontal",componentId:"sc-5458c68c-1"})(["display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;gap:20px;"]);try{o.displayName="WrapperVertical",o.__docgenInfo={description:"",displayName:"WrapperVertical",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="WrapperHorizontal",n.__docgenInfo={description:"",displayName:"WrapperHorizontal",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{x as T,n as W,o as a,N as s};

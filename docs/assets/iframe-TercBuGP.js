import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const O="modulepreload",p=function(o,s){return new URL(o,s).href},u={},e=function(s,n,a){let r=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link");r=Promise.all(n.map(i=>{if(i=p(i,a),i in u)return;u[i]=!0;const c=i.endsWith(".css"),E=c?'[rel="stylesheet"]':"";if(!!a)for(let l=t.length-1;l>=0;l--){const d=t[l];if(d.href===i&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${E}`))return;const _=document.createElement("link");if(_.rel=c?"stylesheet":O,c||(_.as="script",_.crossOrigin=""),_.href=i,document.head.appendChild(_),c)return new Promise((l,d)=>{_.addEventListener("load",l),_.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>s()).catch(t=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=t,window.dispatchEvent(i),!i.defaultPrevented)throw t})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,m=R({page:"preview"});P.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const T={"./src/stories/calendarOldStories/CalendarOld.stories.tsx":async()=>e(()=>import("./CalendarOld.stories-dt8Pu-Gu.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url),"./src/stories/datePickerCalendarStories/DatePickerCalendar.stories.tsx":async()=>e(()=>import("./DatePickerCalendar.stories-j_8esTvQ.js"),__vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11,12,13,16,14]),import.meta.url),"./src/stories/dateRangeDoublePickerCalendarStories/DateRangeDoublePickerCalendar.stories.tsx":async()=>e(()=>import("./DateRangeDoublePickerCalendar.stories-Wny0V6Xz.js"),__vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11,12,13,16]),import.meta.url),"./src/stories/dateRangePickerCalendarStories/DateRangePickerCalendar.stories.tsx":async()=>e(()=>import("./DateRangePickerCalendar.stories-6rL1g9qx.js"),__vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11,12,13,16]),import.meta.url),"./src/stories/monthPickerCalendarStories/MonthPickerCalendar.stories.tsx":async()=>e(()=>import("./MonthPickerCalendar.stories-zSQFJlpE.js"),__vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11,12,13,16]),import.meta.url),"./src/stories/monthRangeDoublePickerCalendarStories/MonthRangeDoublePickerCalendar.stories.tsx":async()=>e(()=>import("./MonthRangeDoublePickerCalendar.stories-HnwXNPyB.js"),__vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12,13,16]),import.meta.url),"./src/stories/monthRangePickerCalendarStories/MonthRangePickerCalendar.stories.tsx":async()=>e(()=>import("./MonthRangePickerCalendar.stories-Ark99eYU.js"),__vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12,13,16]),import.meta.url),"./src/stories/widgetsStories/DateCalendar.stories.tsx":async()=>e(()=>import("./DateCalendar.stories-e3Hej3Na.js"),__vite__mapDeps([22,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),"./src/stories/widgetsStories/DateRangeCalendar.stories.tsx":async()=>e(()=>import("./DateRangeCalendar.stories-lgZSzBOn.js"),__vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),"./src/stories/widgetsStories/DatesOfMonthWidget.stories.tsx":async()=>e(()=>import("./DatesOfMonthWidget.stories-j2wgQWvo.js"),__vite__mapDeps([24,1,2,11,4]),import.meta.url),"./src/stories/widgetsStories/MonthCalendar.stories.tsx":async()=>e(()=>import("./MonthCalendar.stories-8mF0gZ8q.js"),__vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),"./src/stories/widgetsStories/MonthOfYearWidget.stories.tsx":async()=>e(()=>import("./MonthOfYearWidget.stories-3K_LWLxd.js"),__vite__mapDeps([26,1,2,12,4]),import.meta.url),"./src/stories/widgetsStories/MonthRangeCalendar.stories.tsx":async()=>e(()=>import("./MonthRangeCalendar.stories-W96SjWRB.js"),__vite__mapDeps([27,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),"./src/stories/widgetsStories/TwentyYearsNavigationPanelWidget.stories.tsx":async()=>e(()=>import("./TwentyYearsNavigationPanelWidget.stories-cXmg0PVG.js"),__vite__mapDeps([28,1,2,10,6,4,7,8,5]),import.meta.url),"./src/stories/widgetsStories/YearCalendar.stories.tsx":async()=>e(()=>import("./YearCalendar.stories-AOp1ESTE.js"),__vite__mapDeps([29,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),"./src/stories/widgetsStories/YearNavigationPanelWidget.stories.tsx":async()=>e(()=>import("./YearNavigationPanelWidget.stories-nzIDDaUT.js"),__vite__mapDeps([30,1,2,9,6,4,7,8,12]),import.meta.url),"./src/stories/widgetsStories/YearRangeCalendar.stories.tsx":async()=>e(()=>import("./YearRangeCalendar.stories-6ki25uHx.js"),__vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),"./src/stories/widgetsStories/YearsOfTwentyYearsWidget.stories.tsx":async()=>e(()=>import("./YearsOfTwentyYearsWidget.stories-lgSdcC6R.js"),__vite__mapDeps([32,1,2,5,4]),import.meta.url),"./src/stories/yearPickerCalendarStories/YearPickerCalendar.stories.tsx":async()=>e(()=>import("./YearPickerCalendar.stories-yamS7J_R.js"),__vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11,12,13,16]),import.meta.url),"./src/stories/yearRangeDoublePickerCalendarStories/YearRangeDoublePickerCalendar.stories.tsx":async()=>e(()=>import("./YearRangeDoublePickerCalendar.stories-1ueGHHyV.js"),__vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11,12,13,16]),import.meta.url),"./src/stories/yearRangePickerCalendarStories/YearRangePickerCalendar.stories.tsx":async()=>e(()=>import("./YearRangePickerCalendar.stories-HvSBPuzg.js"),__vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12,13,16]),import.meta.url)};async function w(o){return T[o]()}const{composeConfigs:g,PreviewWeb:S,ClientApi:f}=__STORYBOOK_MODULE_PREVIEW_API__,D=async()=>{const o=await Promise.all([e(()=>import("./entry-preview-2FNvS3aK.js"),__vite__mapDeps([36,2,37,7]),import.meta.url),e(()=>import("./entry-preview-docs-lgywlkD6.js"),__vite__mapDeps([38,39,40,2,41,42]),import.meta.url),e(()=>import("./preview-NTSsQ37X.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([43,41]),import.meta.url),e(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([44,41]),import.meta.url),e(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([45,41]),import.meta.url),e(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-u74pX3JX.js"),__vite__mapDeps([46,1,2,40,47,42,41,8,13]),import.meta.url)]);return g(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new S;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new f({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:D});export{e as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./CalendarOld.stories-dt8Pu-Gu.js","./styled-components.browser.esm-7zUEPxZV.js","./index-DogsOklH.js","./index-91mimT7-.js","./index-GEu7UUTq.js","./index-iEjp33-N.js","./ChevronRightOutline-2Sr-EFPQ.js","./index-MroJ3egt.js","./DropdownProvider.es-vuRa4WZF.js","./index-ppHAGUN8.js","./index-ItCXVjST.js","./index-LrOJhR-V.js","./index-CppLjZWP.js","./index.es-8dT2HbVl.js","./es-MdRB_EIy.js","./DatePickerCalendar.stories-j_8esTvQ.js","./common-vH4ykEee.js","./DateRangeDoublePickerCalendar.stories-Wny0V6Xz.js","./DateRangePickerCalendar.stories-6rL1g9qx.js","./MonthPickerCalendar.stories-zSQFJlpE.js","./MonthRangeDoublePickerCalendar.stories-HnwXNPyB.js","./MonthRangePickerCalendar.stories-Ark99eYU.js","./DateCalendar.stories-e3Hej3Na.js","./DateRangeCalendar.stories-lgZSzBOn.js","./DatesOfMonthWidget.stories-j2wgQWvo.js","./MonthCalendar.stories-8mF0gZ8q.js","./MonthOfYearWidget.stories-3K_LWLxd.js","./MonthRangeCalendar.stories-W96SjWRB.js","./TwentyYearsNavigationPanelWidget.stories-cXmg0PVG.js","./YearCalendar.stories-AOp1ESTE.js","./YearNavigationPanelWidget.stories-nzIDDaUT.js","./YearRangeCalendar.stories-6ki25uHx.js","./YearsOfTwentyYearsWidget.stories-lgSdcC6R.js","./YearPickerCalendar.stories-yamS7J_R.js","./YearRangeDoublePickerCalendar.stories-1ueGHHyV.js","./YearRangePickerCalendar.stories-HvSBPuzg.js","./entry-preview-2FNvS3aK.js","./react-18-Zjprz-m4.js","./entry-preview-docs-lgywlkD6.js","./index-7ygRC3rY.js","./_getPrototype-ja5tOjfl.js","./index-PPLHz8o0.js","./isPlainObject-nKwG4V0S.js","./preview-OnO0tzRj.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js","./preview-u74pX3JX.js","./_basePickBy-ruPBrEf-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

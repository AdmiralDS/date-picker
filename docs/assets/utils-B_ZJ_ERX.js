import{l as m,c as y,a as S,u as h,i as I,b,e as p,f as w,g as l,d as c}from"./ru-lGojcqRe.js";[m,y,S,h,I,b,p,w].forEach(s=>l.extend(s));const A=s=>s.isLeapYear()?366:365,x=s=>s?u(c().locale(s)):u(c()).locale("ru"),u=s=>s.hour(12).minute(0).second(0),F=s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),O=s=>{const t=c().locale(s).localeData(),a=t.weekdaysMin(),r=t.firstDayOfWeek();return a.map((n,e,o)=>o[(r+e)%7])},Y=(s,t)=>{const a=Math.ceil(s.year()/t)*t;return{start:a-(t-1),end:a}},i=(s,t,a)=>{const r=s.isBefore(t,a)?s:t,n=r.isSame(s,a)?t:s;return[r,n]},B=(s,t,a)=>{if(!t||!a)return!1;if(a[0]&&a[1]){const r=i(a[0],a[1],s);return t.isBetween(r[0],r[1],s,"()")}return!1},H=(s,t,a)=>{if(!t||!a)return!1;const r=a[0]?t.isSame(a[0],s):!1,n=a[1]?t.isSame(a[1],s):!1;return r||n},M=(s,t,a)=>{if(!t||!a||!a[0]||!a[1])return!1;const r=i(a[0],a[1],s);return t.isSame(r[0],s)},g=(s,t,a)=>{if(!t||!a||!a[0]||!a[1])return!1;const r=i(a[0],a[1],s);return t.isSame(r[1],s)},k=(s,t,a,r)=>{if(!t||!a||!r)return!1;const n=i(r,a,s);return t.isBetween(n[0],n[1],s,"()")},U=(s,t,a,r,n,e)=>{if(t&&a&&r&&!n&&!e){const o=i(r,a,s);return t.isSame(o[0],s)}return!1},z=(s,t,a,r,n,e)=>{if(t&&a&&r&&!n&&!e){const o=i(r,a,s);return t.isSame(o[1],s)}return!1};function L(s,t){switch(t){case"month":return s.endOf("month").date();case"year":return A(s);default:return 0}}function d(s,t,a){if(!a)return{};const r={},n=L(s,t),e=s.startOf(t);let o=0;for(;!(r.disabled===!1&&r.isHoliday===!1&&r.hidden===!1)&&o<n;){const f=a(e.add(o,"day"));r.disabled!==!1&&(r.disabled=f.disabled),r.isHoliday!==!1&&(r.isHoliday=f.isHoliday),r.hidden!==!1&&(r.hidden=f.hidden),o++}return r}function N(s,t){return d(s,"month",t)}function _(s,t){return d(s,"year",t)}const E=s=>l.isDayjs(s)?s:void 0,P=s=>l.isDayjs(s)?void 0:s;export{_ as a,P as b,M as c,B as d,g as e,k as f,x as g,U as h,z as i,H as j,E as k,F as l,N as m,O as n,u as s,Y as y};

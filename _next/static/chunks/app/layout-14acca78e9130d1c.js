(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{6470:function(e,t,n){Promise.resolve().then(n.bind(n,9512))},9512:function(e,t,n){"use strict";n.d(t,{F:function(){return m},ThemeProvider:function(){return d}});var r=n(2265),s=(e,t,n,r,s,o,a,l)=>{let i=document.documentElement,c=["light","dark"];function m(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&o?s.map(e=>o[e]||e):s;n?(i.classList.remove(...r),i.classList.add(t)):i.setAttribute(e,t)}),l&&c.includes(t)&&(i.style.colorScheme=t)}if(r)m(r);else try{let e=localStorage.getItem(t)||n,r=a&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;m(r)}catch(e){}},o=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=r.createContext(void 0),c={setTheme:e=>{},themes:[]},m=()=>{var e;return null!=(e=r.useContext(i))?e:c},d=e=>r.useContext(i)?r.createElement(r.Fragment,null,e.children):r.createElement(h,{...e}),u=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:s=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:m=u,defaultTheme:d=s?"system":"light",attribute:h="data-theme",value:g,children:v,nonce:w,scriptProps:E}=e,[S,k]=r.useState(()=>y(c,d)),[C,T]=r.useState(()=>y(c)),L=g?Object.values(g):m,A=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=b());let r=g?g[t]:t,a=n?p(w):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(...L),r&&i.classList.add(r)):e.startsWith("data-")&&(r?i.setAttribute(e,r):i.removeAttribute(e))};if(Array.isArray(h)?h.forEach(c):c(h),l){let e=o.includes(d)?d:null,n=o.includes(t)?t:e;i.style.colorScheme=n}null==a||a()},[w]),_=r.useCallback(e=>{let t="function"==typeof e?e(S):e;k(t);try{localStorage.setItem(c,t)}catch(e){}},[S]),P=r.useCallback(e=>{T(b(e)),"system"===S&&s&&!t&&A("system")},[S,t]);r.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),r.useEffect(()=>{let e=e=>{e.key===c&&_(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[_]),r.useEffect(()=>{A(null!=t?t:S)},[t,S]);let M=r.useMemo(()=>({theme:S,setTheme:_,forcedTheme:t,resolvedTheme:"system"===S?C:S,themes:s?[...m,"system"]:m,systemTheme:s?C:void 0}),[S,_,t,C,s,m]);return r.createElement(i.Provider,{value:M},r.createElement(f,{forcedTheme:t,storageKey:c,attribute:h,enableSystem:s,enableColorScheme:l,defaultTheme:d,value:g,themes:m,nonce:w,scriptProps:E}),v)},f=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:o,enableSystem:a,enableColorScheme:l,defaultTheme:i,value:c,themes:m,nonce:d,scriptProps:u}=e,h=JSON.stringify([o,n,i,t,m,c,a,l]).slice(1,-1);return r.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:"(".concat(s.toString(),")(").concat(h,")")}})}),y=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},b=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}},function(e){e.O(0,[2971,7023,1744],function(){return e(e.s=6470)}),_N_E=e.O()}]);
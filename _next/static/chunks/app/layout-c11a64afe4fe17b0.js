(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{82477:function(e,t,r){Promise.resolve().then(r.bind(r,79512)),Promise.resolve().then(r.bind(r,61494))},61494:function(e,t,r){"use strict";r.d(t,{Toaster:function(){return ea}});var n=r(57437),o=r(86763),s=r(2265),a=r(54887),i=r(78149),l=r(1584),d=r(76402),u=r(98324),c=r(53938),f=r(56935),p=r(31383),m=r(25171),v=r(75137),w=r(91715),h=r(1336),y=r(31725),x="ToastProvider",[g,T,E]=(0,d.B)("Toast"),[b,S]=(0,u.b)("Toast",[E]),[C,N]=b(x),j=e=>{let{__scopeToast:t,label:r="Notification",duration:o=5e3,swipeDirection:a="right",swipeThreshold:i=50,children:l}=e,[d,u]=s.useState(null),[c,f]=s.useState(0),p=s.useRef(!1),m=s.useRef(!1);return r.trim()||console.error("Invalid prop `label` supplied to `".concat(x,"`. Expected non-empty `string`.")),(0,n.jsx)(g.Provider,{scope:t,children:(0,n.jsx)(C,{scope:t,label:r,duration:o,swipeDirection:a,swipeThreshold:i,toastCount:c,viewport:d,onViewportChange:u,onToastAdd:s.useCallback(()=>f(e=>e+1),[]),onToastRemove:s.useCallback(()=>f(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:m,children:l})})};j.displayName=x;var P="ToastViewport",R=["F8"],A="toast.viewportPause",k="toast.viewportResume",M=s.forwardRef((e,t)=>{let{__scopeToast:r,hotkey:o=R,label:a="Notifications ({hotkey})",...i}=e,d=N(P,r),u=T(r),f=s.useRef(null),p=s.useRef(null),v=s.useRef(null),w=s.useRef(null),h=(0,l.e)(t,w,d.onViewportChange),y=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),x=d.toastCount>0;s.useEffect(()=>{let e=e=>{var t;0!==o.length&&o.every(t=>e[t]||e.code===t)&&(null===(t=w.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[o]),s.useEffect(()=>{let e=f.current,t=w.current;if(x&&e&&t){let r=()=>{if(!d.isClosePausedRef.current){let e=new CustomEvent(A);t.dispatchEvent(e),d.isClosePausedRef.current=!0}},n=()=>{if(d.isClosePausedRef.current){let e=new CustomEvent(k);t.dispatchEvent(e),d.isClosePausedRef.current=!1}},o=t=>{e.contains(t.relatedTarget)||n()},s=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",o),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",s),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",s),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[x,d.isClosePausedRef]);let E=s.useCallback(e=>{let{tabbingDirection:t}=e,r=u().map(e=>{let r=e.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===t?n:n.reverse()});return("forwards"===t?r.reverse():r).flat()},[u]);return s.useEffect(()=>{let e=w.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,o,s;let r=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(n=p.current)||void 0===n||n.focus();return}let i=E({tabbingDirection:a?"backwards":"forwards"}),l=i.findIndex(e=>e===r);J(i.slice(l+1))?t.preventDefault():a?null===(o=p.current)||void 0===o||o.focus():null===(s=v.current)||void 0===s||s.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[u,E]),(0,n.jsxs)(c.I0,{ref:f,role:"region","aria-label":a.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:x?void 0:"none"},children:[x&&(0,n.jsx)(I,{ref:p,onFocusFromOutsideViewport:()=>{J(E({tabbingDirection:"forwards"}))}}),(0,n.jsx)(g.Slot,{scope:r,children:(0,n.jsx)(m.WV.ol,{tabIndex:-1,...i,ref:h})}),x&&(0,n.jsx)(I,{ref:v,onFocusFromOutsideViewport:()=>{J(E({tabbingDirection:"backwards"}))}})]})});M.displayName=P;var L="ToastFocusProxy",I=s.forwardRef((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:o,...s}=e,a=N(L,r);return(0,n.jsx)(y.T,{"aria-hidden":!0,tabIndex:0,...s,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;(null===(t=a.viewport)||void 0===t?void 0:t.contains(r))||o()}})});I.displayName=L;var D="Toast",F=s.forwardRef((e,t)=>{let{forceMount:r,open:o,defaultOpen:s,onOpenChange:a,...l}=e,[d=!0,u]=(0,w.T)({prop:o,defaultProp:s,onChange:a});return(0,n.jsx)(p.z,{present:r||d,children:(0,n.jsx)(V,{open:d,...l,ref:t,onClose:()=>u(!1),onPause:(0,v.W)(e.onPause),onResume:(0,v.W)(e.onResume),onSwipeStart:(0,i.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,i.M)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(r,"px"))}),onSwipeCancel:(0,i.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,i.M)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(r,"px")),u(!1)})})})});F.displayName=D;var[O,_]=b(D,{onClose(){}}),V=s.forwardRef((e,t)=>{let{__scopeToast:r,type:o="foreground",duration:d,open:u,onClose:f,onEscapeKeyDown:p,onPause:w,onResume:h,onSwipeStart:y,onSwipeMove:x,onSwipeCancel:T,onSwipeEnd:E,...b}=e,S=N(D,r),[C,j]=s.useState(null),P=(0,l.e)(t,e=>j(e)),R=s.useRef(null),M=s.useRef(null),L=d||S.duration,I=s.useRef(0),F=s.useRef(L),_=s.useRef(0),{onToastAdd:V,onToastRemove:K}=S,H=(0,v.W)(()=>{var e;(null==C?void 0:C.contains(document.activeElement))&&(null===(e=S.viewport)||void 0===e||e.focus()),f()}),U=s.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(_.current),I.current=new Date().getTime(),_.current=window.setTimeout(H,e))},[H]);s.useEffect(()=>{let e=S.viewport;if(e){let t=()=>{U(F.current),null==h||h()},r=()=>{let e=new Date().getTime()-I.current;F.current=F.current-e,window.clearTimeout(_.current),null==w||w()};return e.addEventListener(A,r),e.addEventListener(k,t),()=>{e.removeEventListener(A,r),e.removeEventListener(k,t)}}},[S.viewport,L,w,h,U]),s.useEffect(()=>{u&&!S.isClosePausedRef.current&&U(L)},[u,L,S.isClosePausedRef,U]),s.useEffect(()=>(V(),()=>K()),[V,K]);let X=s.useMemo(()=>C?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!n){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(C):null,[C]);return S.viewport?(0,n.jsxs)(n.Fragment,{children:[X&&(0,n.jsx)(W,{__scopeToast:r,role:"status","aria-live":"foreground"===o?"assertive":"polite","aria-atomic":!0,children:X}),(0,n.jsx)(O,{scope:r,onClose:H,children:a.createPortal((0,n.jsx)(g.ItemSlot,{scope:r,children:(0,n.jsx)(c.fC,{asChild:!0,onEscapeKeyDown:(0,i.M)(p,()=>{S.isFocusedToastEscapeKeyDownRef.current||H(),S.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,n.jsx)(m.WV.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":u?"open":"closed","data-swipe-direction":S.swipeDirection,...b,ref:P,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,i.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==p||p(e.nativeEvent),e.nativeEvent.defaultPrevented||(S.isFocusedToastEscapeKeyDownRef.current=!0,H()))}),onPointerDown:(0,i.M)(e.onPointerDown,e=>{0===e.button&&(R.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,i.M)(e.onPointerMove,e=>{if(!R.current)return;let t=e.clientX-R.current.x,r=e.clientY-R.current.y,n=!!M.current,o=["left","right"].includes(S.swipeDirection),s=["left","up"].includes(S.swipeDirection)?Math.min:Math.max,a=o?s(0,t):0,i=o?0:s(0,r),l="touch"===e.pointerType?10:2,d={x:a,y:i},u={originalEvent:e,delta:d};n?(M.current=d,B("toast.swipeMove",x,u,{discrete:!1})):G(d,S.swipeDirection,l)?(M.current=d,B("toast.swipeStart",y,u,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(r)>l)&&(R.current=null)}),onPointerUp:(0,i.M)(e.onPointerUp,e=>{let t=M.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),M.current=null,R.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};G(t,S.swipeDirection,S.swipeThreshold)?B("toast.swipeEnd",E,n,{discrete:!0}):B("toast.swipeCancel",T,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),S.viewport)})]}):null}),W=e=>{let{__scopeToast:t,children:r,...o}=e,a=N(D,t),[i,l]=s.useState(!1),[d,u]=s.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=(0,v.W)(e);(0,h.b)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>l(!0)),s.useEffect(()=>{let e=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(e)},[]),d?null:(0,n.jsx)(f.h,{asChild:!0,children:(0,n.jsx)(y.T,{...o,children:i&&(0,n.jsxs)(n.Fragment,{children:[a.label," ",r]})})})},K=s.forwardRef((e,t)=>{let{__scopeToast:r,...o}=e;return(0,n.jsx)(m.WV.div,{...o,ref:t})});K.displayName="ToastTitle";var H=s.forwardRef((e,t)=>{let{__scopeToast:r,...o}=e;return(0,n.jsx)(m.WV.div,{...o,ref:t})});H.displayName="ToastDescription";var U="ToastAction",X=s.forwardRef((e,t)=>{let{altText:r,...o}=e;return r.trim()?(0,n.jsx)(Y,{altText:r,asChild:!0,children:(0,n.jsx)(q,{...o,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(U,"`. Expected non-empty `string`.")),null)});X.displayName=U;var z="ToastClose",q=s.forwardRef((e,t)=>{let{__scopeToast:r,...o}=e,s=_(z,r);return(0,n.jsx)(Y,{asChild:!0,children:(0,n.jsx)(m.WV.button,{type:"button",...o,ref:t,onClick:(0,i.M)(e.onClick,s.onClose)})})});q.displayName=z;var Y=s.forwardRef((e,t)=>{let{__scopeToast:r,altText:o,...s}=e;return(0,n.jsx)(m.WV.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":o||void 0,...s,ref:t})});function B(e,t,r,n){let{discrete:o}=n,s=r.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&s.addEventListener(e,t,{once:!0}),o?(0,m.jH)(s,a):s.dispatchEvent(a)}var G=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=Math.abs(e.x),o=Math.abs(e.y),s=n>o;return"left"===t||"right"===t?s&&n>r:!s&&o>r};function J(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var Z=r(13027);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let Q=(0,r(78030).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var $=r(49354);let ee=s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(M,{ref:t,className:(0,$.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",r),...o})});ee.displayName=M.displayName;let et=(0,Z.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),er=s.forwardRef((e,t)=>{let{className:r,variant:o,...s}=e;return(0,n.jsx)(F,{ref:t,className:(0,$.cn)(et({variant:o}),r),...s})});er.displayName=F.displayName,s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(X,{ref:t,className:(0,$.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",r),...o})}).displayName=X.displayName;let en=s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(q,{ref:t,className:(0,$.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",r),"toast-close":"",...o,children:(0,n.jsx)(Q,{className:"h-4 w-4"})})});en.displayName=q.displayName;let eo=s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(K,{ref:t,className:(0,$.cn)("text-sm font-semibold [&+div]:text-xs",r),...o})});eo.displayName=K.displayName;let es=s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(H,{ref:t,className:(0,$.cn)("text-sm opacity-90",r),...o})});function ea(){let{toasts:e}=(0,o.pm)();return(0,n.jsxs)(j,{children:[e.map(function(e){let{id:t,title:r,description:o,action:s,...a}=e;return(0,n.jsxs)(er,{...a,children:[(0,n.jsxs)("div",{className:"grid gap-1",children:[r&&(0,n.jsx)(eo,{children:r}),o&&(0,n.jsx)(es,{children:o})]}),s,(0,n.jsx)(en,{})]},t)}),(0,n.jsx)(ee,{})]})}es.displayName=H.displayName},86763:function(e,t,r){"use strict";r.d(t,{pm:function(){return f}});var n=r(2265);let o=0,s=new Map,a=e=>{if(s.has(e))return;let t=setTimeout(()=>{s.delete(e),u({type:"REMOVE_TOAST",toastId:e})},1e6);s.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?a(r):e.toasts.forEach(e=>{a(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function u(e){d=i(d,e),l.forEach(e=>{e(d)})}function c(e){let{...t}=e,r=(o=(o+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>u({type:"DISMISS_TOAST",toastId:r});return u({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||n()}}}),{id:r,dismiss:n,update:e=>u({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=n.useState(d);return n.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:c,dismiss:e=>u({type:"DISMISS_TOAST",toastId:e})}}},49354:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}}),r(2265);var n=r(44839),o=r(78077);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m)((0,n.W)(t))}r(25566)},31725:function(e,t,r){"use strict";r.d(t,{T:function(){return a},f:function(){return i}});var n=r(2265),o=r(25171),s=r(57437),a=n.forwardRef((e,t)=>(0,s.jsx)(o.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));a.displayName="VisuallyHidden";var i=a},13027:function(e,t,r){"use strict";r.d(t,{j:function(){return a}});var n=r(44839);let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=n.W,a=(e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return s(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:a,defaultVariants:i}=t,l=Object.keys(a).map(e=>{let t=null==r?void 0:r[e],n=null==i?void 0:i[e];if(null===t)return null;let s=o(t)||o(n);return a[e][s]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return s(e,l,null==t?void 0:null===(n=t.compoundVariants)||void 0===n?void 0:n.reduce((e,t)=>{let{class:r,className:n,...o}=t;return Object.entries(o).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...i,...d}[t]):({...i,...d})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},79512:function(e,t,r){"use strict";r.d(t,{F:function(){return u},ThemeProvider:function(){return c}});var n=r(2265),o=(e,t,r,n,o,s,a,i)=>{let l=document.documentElement,d=["light","dark"];function u(t){(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&s?o.map(e=>s[e]||e):o;r?(l.classList.remove(...n),l.classList.add(t)):l.setAttribute(e,t)}),i&&d.includes(t)&&(l.style.colorScheme=t)}if(n)u(n);else try{let e=localStorage.getItem(t)||r,n=a&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;u(n)}catch(e){}},s=["light","dark"],a="(prefers-color-scheme: dark)",i="undefined"==typeof window,l=n.createContext(void 0),d={setTheme:e=>{},themes:[]},u=()=>{var e;return null!=(e=n.useContext(l))?e:d},c=e=>n.useContext(l)?n.createElement(n.Fragment,null,e.children):n.createElement(p,{...e}),f=["light","dark"],p=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:o=!0,enableColorScheme:i=!0,storageKey:d="theme",themes:u=f,defaultTheme:c=o?"system":"light",attribute:p="data-theme",value:y,children:x,nonce:g,scriptProps:T}=e,[E,b]=n.useState(()=>v(d,c)),[S,C]=n.useState(()=>v(d)),N=y?Object.values(y):u,j=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=h());let n=y?y[t]:t,a=r?w(g):null,l=document.documentElement,d=e=>{"class"===e?(l.classList.remove(...N),n&&l.classList.add(n)):e.startsWith("data-")&&(n?l.setAttribute(e,n):l.removeAttribute(e))};if(Array.isArray(p)?p.forEach(d):d(p),i){let e=s.includes(c)?c:null,r=s.includes(t)?t:e;l.style.colorScheme=r}null==a||a()},[g]),P=n.useCallback(e=>{let t="function"==typeof e?e(E):e;b(t);try{localStorage.setItem(d,t)}catch(e){}},[E]),R=n.useCallback(e=>{C(h(e)),"system"===E&&o&&!t&&j("system")},[E,t]);n.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(R),R(e),()=>e.removeListener(R)},[R]),n.useEffect(()=>{let e=e=>{e.key===d&&P(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[P]),n.useEffect(()=>{j(null!=t?t:E)},[t,E]);let A=n.useMemo(()=>({theme:E,setTheme:P,forcedTheme:t,resolvedTheme:"system"===E?S:E,themes:o?[...u,"system"]:u,systemTheme:o?S:void 0}),[E,P,t,S,o,u]);return n.createElement(l.Provider,{value:A},n.createElement(m,{forcedTheme:t,storageKey:d,attribute:p,enableSystem:o,enableColorScheme:i,defaultTheme:c,value:y,themes:u,nonce:g,scriptProps:T}),x)},m=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:s,enableSystem:a,enableColorScheme:i,defaultTheme:l,value:d,themes:u,nonce:c,scriptProps:f}=e,p=JSON.stringify([s,r,l,t,u,d,a,i]).slice(1,-1);return n.createElement("script",{...f,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?c:"",dangerouslySetInnerHTML:{__html:"(".concat(o.toString(),")(").concat(p,")")}})}),v=(e,t)=>{let r;if(!i){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},w=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},h=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}},function(e){e.O(0,[9499,2971,7023,1744],function(){return e(e.s=82477)}),_N_E=e.O()}]);
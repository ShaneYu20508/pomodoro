import{u as j}from"./list-52c82124.js";import{u as W}from"./settings-86d6bcea.js";import{g as B,o as D,a as x,n as F,u as E,b as U,r as C,w as R,c as _,s as A,d as q,e as H,f as b,V as $,h as g,i as I,t as P,j as O}from"./index-a40d7cd1.js";import{V,a as z}from"./VRow-3e047c94.js";function k(e){return B()?(D(e),!0):!1}function T(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const r=()=>t(o);return k(r),{off:r}},off:t,trigger:(...o)=>Promise.all(Array.from(e).map(r=>r(...o)))}}function G(e){return typeof e=="function"?e():E(e)}const J=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const K=Object.prototype.toString,Q=e=>K.call(e)==="[object Object]",X=()=>{};function Y(e){return e||U()}function Z(e,t=!0,n){const i=Y(n);i?x(e,i):t?e():F(e)}function ee(e){var t;const n=G(e);return(t=n==null?void 0:n.$el)!=null?t:n}const L=J?window:void 0;function te(...e){let t,n,i,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,i,o]=e,t=L):[t,n,i,o]=e,!t)return X;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],a=()=>{r.forEach(u=>u()),r.length=0},v=(u,s,l,c)=>(u.addEventListener(s,l,c),()=>u.removeEventListener(s,l,c)),S=R(()=>[ee(t),G(o)],([u,s])=>{if(a(),!u)return;const l=Q(s)?{...s}:s;r.push(...n.flatMap(c=>i.map(m=>v(u,c,m,l))))},{immediate:!0,flush:"post"}),p=()=>{S(),a()};return k(p),p}function ne(){const e=C(!1);return U()&&x(()=>{e.value=!0}),e}function oe(e){const t=ne();return _(()=>(t.value,!!e()))}function ie(e={}){const{window:t=L,requestPermissions:n=!0}=e,i=e,o=oe(()=>!!t&&"Notification"in t),r=C(o.value&&"permission"in Notification&&Notification.permission==="granted"),a=C(null),v=async()=>{if(o.value)return!r.value&&Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(r.value=!0),r.value},{on:S,trigger:p}=T(),{on:u,trigger:s}=T(),{on:l,trigger:c}=T(),{on:m,trigger:N}=T(),y=async d=>{if(!o.value||!r.value)return;const f=Object.assign({},i,d);return a.value=new Notification(f.title||"",f),a.value.onclick=p,a.value.onshow=s,a.value.onerror=c,a.value.onclose=N,a.value},h=()=>{a.value&&a.value.close(),a.value=null};if(n&&Z(v),k(h),o.value&&t){const d=t.document;te(d,"visibilitychange",f=>{f.preventDefault(),d.visibilityState==="visible"&&h()})}return{isSupported:o,notification:a,ensurePermissions:v,permissionGranted:r,show:y,close:h,onClick:S,onShow:u,onError:l,onClose:m}}const ue={__name:"HomeView",setup(e){const t=j(),{currentItem:n,items:i,timeleft:o}=A(t),{setCurrentItem:r,countdown:a,setFinishedItem:v}=t,S=W(),{selectedAlarmFile:p,notify:u}=A(S),s={STOP:0,COUNTING:1,PAUSE:2},l=C(s.STOP);let c=0;const m=()=>{l.value===s.STOP&&i.value.length>0&&r(),l.value=s.COUNTING,c=setInterval(()=>{a(),o.value===0&&y()},1e3)},N=()=>{l.value=s.PAUSE,clearInterval(c)},y=()=>{clearInterval(c),l.value=s.STOP;const f=new Audio;if(f.src=p.value,f.play(),u.value){const{show:w,isSupported:M}=ie({title:"事項完成",body:n.value,icon:new URL(""+new URL("tomato-fe6b03eb.png",import.meta.url).href,self.location).href});M.value&&w()}v(),i.value.length>0&&m()},h=_(()=>n.value.length>0?n.value:i.value.length>0?"點擊開始":"沒有事項"),d=_(()=>{const f=Math.floor(o.value/60).toString().padStart(2,"0"),w=(o.value%60).toString().padStart(2,"0");return f+":"+w});return(f,w)=>(q(),H($,null,{default:b(()=>[g(z,null,{default:b(()=>[g(V,{cols:"12"},{default:b(()=>[I("h1",null,P(h.value),1),I("h1",null,P(d.value),1)]),_:1}),g(V,{cols:"12"},{default:b(()=>[g(O,{variant:"text",icon:"mdi-play",disabled:l.value===s.COUNTING,onClick:m},null,8,["disabled"]),g(O,{variant:"text",icon:"mdi-pause",disabled:l.value!==s.COUNTING,onClick:N},null,8,["disabled"]),g(O,{variant:"text",icon:"mdi-skip-next",disabled:E(n).length===0,onClick:y},null,8,["disabled"])]),_:1})]),_:1})]),_:1}))}};export{ue as default};
import{r as v,R as Y,P as $,c as w,V as Ce,j as n,B as b,e as y,W as ke,z as Pe,X as se,Y as re,b as C,Z as Se,_ as Ne,$ as oe,a0 as U,v as L,a1 as Te,a2 as ae,a3 as O,a4 as le,a5 as H,a6 as q,a7 as $e,a8 as Ae,u as K,a9 as Be,aa as Oe,ab as Le,g as ce,C as ie,ac as De,m as Z,a as Fe,ad as Re,ae as Me,af as Ee,ag as Ie}from"./index-ce8b21b5.js";import{C as ze}from"./chevron-down-8deb15d5.js";import{F as Ue,p as He,A as qe,I as Ke}from"./Fab-2e22ba4c.js";import{R as We,T as Ye}from"./TextFilter-bbc0fe04.js";import{f as Ze}from"./index-7b45744f.js";import{R as Ge}from"./rotate-cw-52f5d800.js";import{S as Ve,T as G}from"./Select-14c3db72.js";import"./debounce-c1ba2006.js";function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},z.apply(this,arguments)}function Xe(e,t){if(e==null)return{};var s=Je(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function Je(e,t){if(e==null)return{};var s={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(s[o]=e[o]);return s}var W=v.forwardRef(function(e,t){var s=e.color,r=s===void 0?"currentColor":s,o=e.size,a=o===void 0?24:o,l=Xe(e,["color","size"]);return Y.createElement("svg",z({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),Y.createElement("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}))});W.propTypes={color:$.string,size:$.oneOfType([$.string,$.number])};W.displayName="Zap";const V=W;function ue(e){const t=e.size||24,s=w({[Ce.animate]:e.animate});return n.jsx("svg",{className:s,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}const Qe="_FlexCenter_1380a_1",et={FlexCenter:Qe};function tt({children:e}){return n.jsx("div",{className:et.FlexCenter,children:e})}const{useRef:X,useEffect:nt}=y;function st({onClickPrimaryButton:e,onClickSecondaryButton:t}){const s=X(null),r=X(null);nt(()=>{s.current.focus()},[]);const o=a=>{a.code==="ArrowRight"?r.current.focus():a.code==="ArrowLeft"&&s.current.focus()};return n.jsxs("div",{onKeyDown:o,children:[n.jsx("h2",{children:"Close Connections?"}),n.jsx("p",{children:"Click [Yes] to close those connections that are still using the old selected proxy in this group"}),n.jsx("div",{style:{height:30}}),n.jsxs(tt,{children:[n.jsx(b,{onClick:e,ref:s,children:"Yes"}),n.jsx("div",{style:{width:20}}),n.jsx(b,{onClick:t,ref:r,children:"No"})]})]})}const rt="_header_1y9js_1",ot="_arrow_1y9js_8",at="_isOpen_1y9js_13",lt="_btn_1y9js_20",ct="_qty_1y9js_25",k={header:rt,arrow:ot,isOpen:at,btn:lt,qty:ct};function de({name:e,type:t,toggle:s,isOpen:r,qty:o}){const a=v.useCallback(l=>{l.preventDefault(),(l.key==="Enter"||l.key===" ")&&s()},[s]);return n.jsxs("div",{className:k.header,onClick:s,style:{cursor:"pointer"},tabIndex:0,onKeyDown:a,role:"button",children:[n.jsx("div",{children:n.jsx(ke,{name:e,type:t})}),typeof o=="number"?n.jsx("span",{className:k.qty,children:o}):null,n.jsx(b,{kind:"minimal",onClick:s,className:k.btn,title:"Toggle collapsible section",children:n.jsx("span",{className:w(k.arrow,{[k.isOpen]:r}),children:n.jsx(ze,{size:20})})})]})}const{useMemo:it}=y;function ut(e,t){return e.filter(s=>{const r=t[s];return r===void 0?!0:!("number"in r&&r.number===0)})}const A=(e,t)=>{if(e&&"number"in e&&e.number>0)return e.number;const s=t&&t.type;return s&&re.indexOf(s)>-1?-1:999999},dt={Natural:e=>e,LatencyAsc:(e,t,s)=>e.sort((r,o)=>{const a=A(t[r],s&&s[r]),l=A(t[o],s&&s[o]);return a-l}),LatencyDesc:(e,t,s)=>e.sort((r,o)=>{const a=A(t[r],s&&s[r]);return A(t[o],s&&s[o])-a}),NameAsc:e=>e.sort(),NameDesc:e=>e.sort((t,s)=>t>s?-1:t<s?1:0)};function xt(e,t){const s=t.toLowerCase().split(" ").map(r=>r.trim()).filter(r=>!!r);return s.length===0?e:e.filter(r=>{let o=0;for(;o<s.length;o++){const a=s[o];if(r.toLowerCase().indexOf(a)>-1)return!0}return!1})}function pt(e,t,s,r,o,a){let l=[...e];return s&&(l=ut(e,t)),typeof r=="string"&&r!==""&&(l=xt(l,r)),dt[o](l,t,a)}function xe(e,t,s,r,o){const[a]=Pe(se);return it(()=>pt(e,t,s,a,r,o),[e,t,s,a,r,o])}const ht="_header_5pmv2_1",ft="_groupHead_5pmv2_5",mt="_action_5pmv2_11",R={header:ht,groupHead:ft,action:mt},yt="_proxy_123h4_1",jt="_now_123h4_23",_t="_error_123h4_27",gt="_selectable_123h4_30",vt="_proxyType_123h4_38",bt="_row_123h4_49",wt="_proxyName_123h4_55",Ct="_proxySmall_123h4_63",h={proxy:yt,now:jt,error:_t,selectable:gt,proxyType:vt,row:bt,proxyName:wt,proxySmall:Ct},kt="_proxyLatency_pw0sa_1",Pt={proxyLatency:kt};function St({latency:e,color:t}){let s=" ";if(e)switch(e.kind){case"Error":case"Testing":s="- ms";break;case"Result":s=(e.number!==0?e.number:"-")+" ms";break}return n.jsx("span",{className:Pt.proxyLatency,style:{color:t},children:s})}const{useMemo:S}=y,g={good:"#67c23a",normal:"#d4b75c",warn:"#e67f3c",bad:"#f35e5e",na:"#909399"};function pe(e){if(!e||e.kind!=="Result")return g.na;const t=e.number;return t===0?g.na:t<200?g.good:t<400?g.normal:t<600?g.warn:typeof t=="number"?g.bad:g.na}function Nt(e,t){return re.indexOf(t)>-1?{border:"1px dotted #777"}:{background:pe(e)}}function Tt({now:e,name:t,proxy:s,latency:r,isSelectable:o,onClick:a}){const l=S(()=>Nt(r,s.type),[r,s]),c=S(()=>{let d=t;return r&&r.kind==="Result"&&typeof r.number=="number"&&(d+=" "+r.number+" ms"),d},[t,r]),i=v.useCallback(()=>{o&&a&&a(t)},[t,a,o]),u=S(()=>w(h.proxySmall,{[h.now]:e,[h.selectable]:o}),[o,e]),x=v.useCallback(d=>{d.key==="Enter"&&i()},[i]);return n.jsx("div",{title:c,className:u,style:l,onClick:i,onKeyDown:x,role:o?"menuitem":""})}function $t(e){return e==="Shadowsocks"?"SS":e}const At=e=>({left:e.left+window.scrollX-5,top:e.top+window.scrollY-38});function Bt({children:e,label:t,"aria-label":s}){const[r,o]=Se();return n.jsxs(n.Fragment,{children:[v.cloneElement(e,r),n.jsx(Ne,{...o,label:t,"aria-label":s,position:At})]})}function Ot({now:e,name:t,proxy:s,latency:r,isSelectable:o,onClick:a}){const l=S(()=>pe(r),[r]),c=v.useCallback(()=>{o&&a&&a(t)},[t,a,o]),i=v.useCallback(x=>{x.key==="Enter"&&c()},[c]),u=S(()=>w(h.proxy,{[h.now]:e,[h.selectable]:o}),[o,e]);return n.jsxs("div",{tabIndex:0,className:u,onClick:c,onKeyDown:i,role:o?"menuitem":"",children:[n.jsx("div",{className:h.proxyName,children:n.jsx(Bt,{label:t,"aria-label":"proxy name: "+t,children:n.jsx("span",{children:t})})}),n.jsx("div",{className:h.row,children:n.jsxs("div",{className:h.row,children:[n.jsx("span",{className:h.proxyType,style:{padding:"2px 2px",paddingRight:2,paddingLeft:2,opacity:.7,color:"#fff",backgroundColor:l,borderRadius:2,fontWeight:"",fontSize:"10px",textTransform:"",fontStyle:""},children:$t(s.type)}),n.jsx("span",{className:h.proxyType,style:{padding:"2px 2px",paddingRight:2,paddingLeft:2,opacity:.7,backgroundColor:l,borderRadius:2,fontWeight:"bold",fontSize:"10px",textTransform:"",fontStyle:""},children:n.jsx(St,{latency:r,color:"#fff"})})]})})]})}const he=(e,{name:t})=>{const s=oe(e),r=U(e);return{proxy:s[t]||{name:t,type:"Unknown",history:[]},latency:r[t]}},Lt=C(he)(Ot),Dt=C(he)(Tt),Ft="_list_jv8rm_1",Rt="_listSummaryView_jv8rm_18",fe={list:Ft,listSummaryView:Rt};function me({all:e,now:t,isSelectable:s,itemOnTapCallback:r}){const o=e;return n.jsx("div",{className:fe.list,children:o.map(a=>n.jsx(Lt,{onClick:r,isSelectable:s,name:a,now:a===t},a))})}function ye({all:e,now:t,isSelectable:s,itemOnTapCallback:r}){return n.jsx("div",{className:fe.listSummaryView,children:e.map(o=>n.jsx(Dt,{onClick:r,isSelectable:s,name:o,now:o===t},o))})}const{createElement:Mt,useCallback:M,useMemo:Et}=y;function It({name:e,all:t,delay:s,hideUnavailableProxies:r,proxySortBy:o,proxies:a,type:l,now:c,isOpen:i,apiConfig:u,dispatch:x}){const d=xe(t,s,r,o,a),p=Et(()=>l==="Selector",[l]),{app:{updateCollapsibleIsOpen:j},proxies:{requestDelayForProxies:f}}=L(),N=M(()=>{j("proxyGroup",e,!i)},[i,j,e]),D=M(T=>{p&&x(Te(u,e,T))},[u,x,e,p]),_=ae(!1),F=M(async()=>{if(!_.value){_.set(!0);try{await f(u,d)}catch{}_.set(!1)}},[d,u,f,_]);return n.jsxs("div",{className:R.group,children:[n.jsxs("div",{className:R.groupHead,children:[n.jsx(de,{name:e,type:l,toggle:N,qty:d.length,isOpen:i}),n.jsx("div",{className:R.action,children:n.jsx(O,{label:"Test latency",children:n.jsx(b,{kind:"circular",onClick:F,children:n.jsx(ue,{animate:_.value,size:16})})})})]}),Mt(i?me:ye,{all:d,now:c,isSelectable:p,itemOnTapCallback:D})]})}const zt=C((e,{name:t,delay:s})=>{const r=oe(e),o=le(e),a=H(e),l=q(e),c=r[t],{all:i,type:u,now:x}=c;return{all:i,delay:s,hideUnavailableProxies:l,proxySortBy:a,proxies:r,type:u,now:x,isOpen:o[`proxyGroup:${t}`]}})(It),{useCallback:je,useState:Ut}=y;function Ht({dispatch:e,apiConfig:t,name:s}){return je(()=>e($e(t,s)),[t,e,s])}function qt({dispatch:e,apiConfig:t,names:s}){const[r,o]=Ut(!1);return[je(async()=>{if(!r){o(!0);try{await e(Ae(t,s))}catch{}o(!1)}},[t,e,s,r]),r]}const{useState:Kt,useCallback:Wt}=y;function Yt({isLoading:e}){return e?n.jsx(Ke,{children:n.jsx(V,{width:16,height:16})}):n.jsx(V,{width:16,height:16})}function Zt({dispatch:e,apiConfig:t}){const[s,r]=Kt(!1);return[Wt(()=>{s||(r(!0),e(Be(t)).then(()=>r(!1),()=>r(!1)))},[t,e,s]),s]}function Gt({dispatch:e,apiConfig:t,proxyProviders:s}){const{t:r}=K(),[o,a]=Zt({dispatch:e,apiConfig:t}),[l,c]=qt({apiConfig:t,dispatch:e,names:s.map(i=>i.name)});return n.jsx(Ue,{icon:n.jsx(Yt,{isLoading:a}),onClick:o,text:r("Test Latency"),style:He,children:s.length>0?n.jsx(qe,{text:r("update_all_proxy_provider"),onClick:l,children:n.jsx(We,{isRotating:c})}):null})}const Vt="_updatedAt_919yi_1",Xt="_main_919yi_8",Jt="_head_919yi_17",Qt="_action_919yi_23",en="_refresh_919yi_31",P={updatedAt:Vt,main:Xt,head:Jt,action:Qt,refresh:en},{useCallback:J}=y;function tn({name:e,proxies:t,delay:s,hideUnavailableProxies:r,proxySortBy:o,vehicleType:a,updatedAt:l,subscriptionInfo:c,isOpen:i,dispatch:u,apiConfig:x}){const d=xe(t,s,r,o),p=ae(!1),j=Ht({dispatch:u,apiConfig:x,name:e}),f=J(()=>{if(p.value)return;p.set(!0);const m=()=>p.set(!1);u(Oe(x,e)).then(m,m)},[x,u,e,p]),{app:{updateCollapsibleIsOpen:N}}=L(),D=J(()=>{N("proxyProvider",e,!i)},[i,N,e]),_=Ze(new Date(l),new Date),F=c?Q(c.Total):0,T=c?Q(c.Download+c.Upload):0,_e=c?((c.Download+c.Upload)/c.Total*100).toFixed(2):0,ge=()=>{if(c.Expire===0)return"Null";const m=new Date(c.Expire*1e3),ve=m.getFullYear()+"-",be=(m.getMonth()+1<10?"0"+(m.getMonth()+1):m.getMonth()+1)+"-",we=(m.getDate()<10?"0"+m.getDate():m.getDate())+" ";return ve+be+we};return n.jsxs("div",{className:P.main,children:[n.jsxs("div",{className:P.head,children:[n.jsx(de,{name:e,toggle:D,type:a,isOpen:i,qty:d.length}),n.jsxs("div",{className:P.action,children:[n.jsx(O,{label:"Update",children:n.jsx(b,{kind:"circular",onClick:j,children:n.jsx(rn,{})})}),n.jsx(O,{label:"Health Check",children:n.jsx(b,{kind:"circular",onClick:f,children:n.jsx(ue,{animate:p.value,size:16})})})]})]}),n.jsxs("div",{className:P.updatedAt,children:[c&&n.jsxs("small",{children:[T," / ",F," ( ",_e,"% )    Expire: ",ge()," "]}),n.jsx("br",{}),n.jsxs("small",{children:["Updated ",_," ago"]})]}),i?n.jsx(me,{all:d}):n.jsx(ye,{all:d})]})}const nn={rest:{scale:1},pressed:{scale:.95}},sn={rest:{rotate:0},hover:{rotate:360,transition:{duration:.3}}};function Q(e,t=2){if(!+e)return"0 Bytes";const s=1024,r=t<0?0:t,o=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],a=Math.floor(Math.log(e)/Math.log(s));return`${parseFloat((e/Math.pow(s,a)).toFixed(r))} ${o[a]}`}function rn(){const t=Le.read().motion;return n.jsx(t.div,{className:P.refresh,variants:nn,initial:"rest",whileHover:"hover",whileTap:"pressed",children:n.jsx(t.div,{className:"flexCenter",variants:sn,children:n.jsx(Ge,{size:16})})})}const on=(e,{proxies:t,name:s})=>{const r=q(e),o=U(e),a=le(e),l=ce(e),c=H(e);return{apiConfig:l,proxies:t,delay:o,hideUnavailableProxies:r,proxySortBy:c,isOpen:a[`proxyProvider:${s}`]}},an=C(on)(tn);function ln({items:e}){return e.length===0?null:n.jsxs(n.Fragment,{children:[n.jsx(ie,{title:"Proxy Provider"}),n.jsx("div",{children:e.map(t=>n.jsx(an,{name:t.name,proxies:t.proxies,type:t.type,vehicleType:t.vehicleType,updatedAt:t.updatedAt,subscriptionInfo:t.subscriptionInfo},t.name))})]})}const cn="_labeledInput_cmki0_1",E={labeledInput:cn},un=[["Natural","order_natural"],["LatencyAsc","order_latency_asc"],["LatencyDesc","order_latency_desc"],["NameAsc","order_name_asc"],["NameDesc","order_name_desc"]],{useCallback:ee}=y;function dn({appConfig:e}){const{app:{updateAppConfig:t}}=L(),s=ee(a=>{t("proxySortBy",a.target.value)},[t]),r=ee(a=>{t("hideUnavailableProxies",a)},[t]),{t:o}=K();return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:E.labeledInput,children:[n.jsx("span",{children:o("sort_in_grp")}),n.jsx("div",{children:n.jsx(Ve,{options:un.map(a=>[a[0],o(a[1])]),selected:e.proxySortBy,onChange:s})})]}),n.jsx("hr",{}),n.jsxs("div",{className:E.labeledInput,children:[n.jsx("label",{htmlFor:"hideUnavailableProxies",children:o("hide_unavail_proxies")}),n.jsx("div",{children:n.jsx(G,{id:"hideUnavailableProxies",checked:e.hideUnavailableProxies,onChange:r})})]}),n.jsxs("div",{className:E.labeledInput,children:[n.jsx("label",{htmlFor:"autoCloseOldConns",children:o("auto_close_conns")}),n.jsx("div",{children:n.jsx(G,{id:"autoCloseOldConns",checked:e.autoCloseOldConns,onChange:a=>t("autoCloseOldConns",a)})})]})]})}const xn=e=>{const t=H(e),s=q(e),r=De(e);return{appConfig:{proxySortBy:t,hideUnavailableProxies:s,autoCloseOldConns:r}}},pn=C(xn)(dn),hn="_overlay_uuk3b_1",fn="_cnt_uuk3b_5",mn="_afterOpen_uuk3b_16",I={overlay:hn,cnt:fn,afterOpen:mn},{useMemo:yn}=y;function te({isOpen:e,onRequestClose:t,children:s}){const r=yn(()=>({base:w(Z.content,I.cnt),afterOpen:I.afterOpen,beforeClose:""}),[]);return n.jsx(Fe,{isOpen:e,onRequestClose:t,className:r,overlayClassName:w(Z.overlay,I.overlay),children:s})}function jn({color:e="currentColor",size:t=24}){return n.jsxs("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:t,height:t,stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M2 6h9M18.5 6H22"}),n.jsx("circle",{cx:"16",cy:"6",r:"2"}),n.jsx("path",{d:"M22 18h-9M6 18H2"}),n.jsx("circle",{r:"2",transform:"matrix(-1 0 0 1 8 18)"})]})}const _n="_topBar_16fpp_1",gn="_topBarRight_16fpp_13",vn="_textFilterContainer_16fpp_22",bn="_group_16fpp_29",B={topBar:_n,topBarRight:gn,textFilterContainer:vn,group:bn},{useState:wn,useEffect:Cn,useCallback:ne,useRef:kn}=y;function Pn({dispatch:e,groupNames:t,delay:s,proxyProviders:r,apiConfig:o,showModalClosePrevConns:a}){const l=kn({}),c=ne(()=>{l.current.startAt=Date.now(),e(Re(o)).then(()=>{l.current.completeAt=Date.now()})},[o,e]);Cn(()=>{c();const f=()=>{l.current.startAt&&Date.now()-l.current.startAt>3e4&&c()};return window.addEventListener("focus",f,!1),()=>window.removeEventListener("focus",f,!1)},[c]);const[i,u]=wn(!1),x=ne(()=>{u(!1)},[]),{proxies:{closeModalClosePrevConns:d,closePrevConnsAndTheModal:p}}=L(),{t:j}=K();return n.jsxs(n.Fragment,{children:[n.jsx(te,{isOpen:i,onRequestClose:x,children:n.jsx(pn,{})}),n.jsxs("div",{className:B.topBar,children:[n.jsx(ie,{title:j("Proxies")}),n.jsxs("div",{className:B.topBarRight,children:[n.jsx("div",{className:B.textFilterContainer,children:n.jsx(Ye,{textAtom:se})}),n.jsx(O,{label:j("settings"),children:n.jsx(b,{kind:"minimal",onClick:()=>u(!0),children:n.jsx(jn,{size:16})})})]})]}),n.jsx("div",{children:t.map(f=>n.jsx("div",{className:B.group,children:n.jsx(zt,{name:f,delay:s,apiConfig:o,dispatch:e})},f))}),n.jsx(ln,{items:r}),n.jsx("div",{style:{height:60}}),n.jsx(Gt,{dispatch:e,apiConfig:o,proxyProviders:r}),n.jsx(te,{isOpen:a,onRequestClose:d,children:n.jsx(st,{onClickPrimaryButton:()=>p(o),onClickSecondaryButton:d})})]})}const Sn=e=>({apiConfig:ce(e),groupNames:Me(e),proxyProviders:Ee(e),delay:U(e),showModalClosePrevConns:Ie(e)}),Fn=C(Sn)(Pn);export{Fn as default};

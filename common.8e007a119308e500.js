"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{2093:(x,y,a)=>{a.d(y,{c:()=>h});var g=a(2361),p=a(2335),l=a(1363);const h=(d,t)=>{let o,e;const n=(r,c,v)=>{if("undefined"==typeof document)return;const E=document.elementFromPoint(r,c);E&&t(E)?E!==o&&(i(),s(E,v)):i()},s=(r,c)=>{o=r,e||(e=o);const v=o;(0,g.c)(()=>v.classList.add("ion-activated")),c()},i=(r=!1)=>{if(!o)return;const c=o;(0,g.c)(()=>c.classList.remove("ion-activated")),r&&e!==o&&o.click(),o=void 0};return(0,l.createGesture)({el:d,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>n(r.currentX,r.currentY,p.a),onMove:r=>n(r.currentX,r.currentY,p.b),onEnd:()=>{i(!0),(0,p.h)(),e=void 0}})}},7438:(x,y,a)=>{a.d(y,{g:()=>g});const g=(t,o,e,n,s)=>l(t[1],o[1],e[1],n[1],s).map(i=>p(t[0],o[0],e[0],n[0],i)),p=(t,o,e,n,s)=>s*(3*o*Math.pow(s-1,2)+s*(-3*e*s+3*e+n*s))-t*Math.pow(s-1,3),l=(t,o,e,n,s)=>d((n-=s)-3*(e-=s)+3*(o-=s)-(t-=s),3*e-6*o+3*t,3*o-3*t,t).filter(r=>r>=0&&r<=1),d=(t,o,e,n)=>{if(0===t)return((t,o,e)=>{const n=o*o-4*t*e;return n<0?[]:[(-o+Math.sqrt(n))/(2*t),(-o-Math.sqrt(n))/(2*t)]})(o,e,n);const s=(3*(e/=t)-(o/=t)*o)/3,i=(2*o*o*o-9*o*e+27*(n/=t))/27;if(0===s)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-s),-Math.sqrt(-s)];const r=Math.pow(i/2,2)+Math.pow(s/3,3);if(0===r)return[Math.pow(i/2,.5)-o/3];if(r>0)return[Math.pow(-i/2+Math.sqrt(r),1/3)-Math.pow(i/2+Math.sqrt(r),1/3)-o/3];const c=Math.sqrt(Math.pow(-s/3,3)),v=Math.acos(-i/(2*Math.sqrt(Math.pow(-s/3,3)))),E=2*Math.pow(c,1/3);return[E*Math.cos(v/3)-o/3,E*Math.cos((v+2*Math.PI)/3)-o/3,E*Math.cos((v+4*Math.PI)/3)-o/3]}},5062:(x,y,a)=>{a.d(y,{i:()=>g});const g=p=>p&&""!==p.dir?"rtl"===p.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},4560:(x,y,a)=>{a.r(y),a.d(y,{startFocusVisible:()=>h});const g="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],h=d=>{let t=[],o=!0;const e=d?d.shadowRoot:document,n=d||document.body,s=w=>{t.forEach(_=>_.classList.remove(g)),w.forEach(_=>_.classList.add(g)),t=w},i=()=>{o=!1,s([])},r=w=>{o=l.includes(w.key),o||s([])},c=w=>{if(o&&w.composedPath){const _=w.composedPath().filter(D=>!!D.classList&&D.classList.contains("ion-focusable"));s(_)}},v=()=>{e.activeElement===n&&s([])};return e.addEventListener("keydown",r),e.addEventListener("focusin",c),e.addEventListener("focusout",v),e.addEventListener("touchstart",i),e.addEventListener("mousedown",i),{destroy:()=>{e.removeEventListener("keydown",r),e.removeEventListener("focusin",c),e.removeEventListener("focusout",v),e.removeEventListener("touchstart",i),e.removeEventListener("mousedown",i)},setFocus:s}}},2407:(x,y,a)=>{a.d(y,{C:()=>d,a:()=>l,d:()=>h});var g=a(5861),p=a(206);const l=function(){var t=(0,g.Z)(function*(o,e,n,s,i,r){if(o)return o.attachViewToDom(e,n,i,s);if(!(r||"string"==typeof n||n instanceof HTMLElement))throw new Error("framework delegate is missing");const c="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return s&&s.forEach(v=>c.classList.add(v)),i&&Object.assign(c,i),e.appendChild(c),yield new Promise(v=>(0,p.c)(c,v)),c});return function(e,n,s,i,r,c){return t.apply(this,arguments)}}(),h=(t,o)=>{if(o){if(t)return t.removeViewFromDom(o.parentElement,o);o.remove()}return Promise.resolve()},d=()=>{let t,o;return{attachViewToDom:function(){var s=(0,g.Z)(function*(i,r,c={},v=[]){if(t=i,r){const w="string"==typeof r?t.ownerDocument&&t.ownerDocument.createElement(r):r;v.forEach(_=>w.classList.add(_)),Object.assign(w,c),t.appendChild(w),yield new Promise(_=>(0,p.c)(w,_))}else if(t.children.length>0){const w=t.ownerDocument&&t.ownerDocument.createElement("div");v.forEach(_=>w.classList.add(_)),w.append(...t.children),t.appendChild(w)}const E=document.querySelector("ion-app")||document.body;return o=document.createComment("ionic teleport"),t.parentNode.insertBefore(o,t),E.appendChild(t),t});return function(r,c){return s.apply(this,arguments)}}(),removeViewFromDom:()=>(t&&o&&(o.parentNode.insertBefore(t,o),o.remove()),Promise.resolve())}}},2335:(x,y,a)=>{a.d(y,{a:()=>l,b:()=>h,c:()=>p,d:()=>t,h:()=>d});const g={getEngine(){const o=window;return o.TapticEngine||o.Capacitor&&o.Capacitor.isPluginAvailable("Haptics")&&o.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(o){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?o.style.toUpperCase():o.style;e.impact({style:n})},notification(o){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?o.style.toUpperCase():o.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const o=this.getEngine();!o||(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();!o||(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();!o||(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},p=()=>{g.selection()},l=()=>{g.selectionStart()},h=()=>{g.selectionChanged()},d=()=>{g.selectionEnd()},t=o=>{g.impact(o)}},6665:(x,y,a)=>{a.d(y,{s:()=>g});const g=e=>{try{if(e instanceof class o{constructor(n){this.value=n}})return e.value;if(!h()||"string"!=typeof e||""===e)return e;const n=document.createDocumentFragment(),s=document.createElement("div");n.appendChild(s),s.innerHTML=e,t.forEach(v=>{const E=n.querySelectorAll(v);for(let w=E.length-1;w>=0;w--){const _=E[w];_.parentNode?_.parentNode.removeChild(_):n.removeChild(_);const D=l(_);for(let u=0;u<D.length;u++)p(D[u])}});const i=l(n);for(let v=0;v<i.length;v++)p(i[v]);const r=document.createElement("div");r.appendChild(n);const c=r.querySelector("div");return null!==c?c.innerHTML:r.innerHTML}catch(n){return console.error(n),""}},p=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let s=e.attributes.length-1;s>=0;s--){const i=e.attributes.item(s),r=i.name;if(!d.includes(r.toLowerCase())){e.removeAttribute(r);continue}const c=i.value;null!=c&&c.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}const n=l(e);for(let s=0;s<n.length;s++)p(n[s])},l=e=>null!=e.children?e.children:e.childNodes,h=()=>{const e=window,n=e&&e.Ionic&&e.Ionic.config;return!n||(n.get?n.get("sanitizerEnabled",!0):!0===n.sanitizerEnabled||void 0===n.sanitizerEnabled)},d=["class","id","href","src","name","slot"],t=["script","style","iframe","meta","link","object","embed"]},8117:(x,y,a)=>{a.d(y,{a:()=>g,b:()=>i,c:()=>t,d:()=>r,e:()=>u,f:()=>l,g:()=>p,h:()=>_,i:()=>o,j:()=>n,k:()=>c,l:()=>e,m:()=>d,n:()=>h,o:()=>s,p:()=>v,q:()=>E,r:()=>w,s:()=>D});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},410:(x,y,a)=>{a.r(y),a.d(y,{KEYBOARD_DID_CLOSE:()=>p,KEYBOARD_DID_OPEN:()=>g,copyVisualViewport:()=>D,keyboardDidClose:()=>v,keyboardDidOpen:()=>r,keyboardDidResize:()=>c,resetKeyboardAssist:()=>o,setKeyboardClose:()=>i,setKeyboardOpen:()=>s,startKeyboardAssist:()=>e,trackViewportChanges:()=>_});const g="ionKeyboardDidShow",p="ionKeyboardDidHide";let h={},d={},t=!1;const o=()=>{h={},d={},t=!1},e=u=>{n(u),u.visualViewport&&(d=D(u.visualViewport),u.visualViewport.onresize=()=>{_(u),r()||c(u)?s(u):v(u)&&i(u)})},n=u=>{u.addEventListener("keyboardDidShow",f=>s(u,f)),u.addEventListener("keyboardDidHide",()=>i(u))},s=(u,f)=>{E(u,f),t=!0},i=u=>{w(u),t=!1},r=()=>!t&&h.width===d.width&&(h.height-d.height)*d.scale>150,c=u=>t&&!v(u),v=u=>t&&d.height===u.innerHeight,E=(u,f)=>{const m=new CustomEvent(g,{detail:{keyboardHeight:f?f.keyboardHeight:u.innerHeight-d.height}});u.dispatchEvent(m)},w=u=>{const f=new CustomEvent(p);u.dispatchEvent(f)},_=u=>{h=Object.assign({},d),d=D(u.visualViewport)},D=u=>({width:Math.round(u.width),height:Math.round(u.height),offsetTop:u.offsetTop,offsetLeft:u.offsetLeft,pageTop:u.pageTop,pageLeft:u.pageLeft,scale:u.scale})},9955:(x,y,a)=>{a.d(y,{S:()=>p});const p={bubbles:{dur:1e3,circles:9,fn:(l,h,d)=>{const t=l*h/d-l+"ms",o=2*Math.PI*h/d;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:(l,h,d)=>{const t=h/d,o=l*t-l+"ms",e=2*Math.PI*t;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,h)=>({r:6,style:{left:9-9*h+"px","animation-delay":-110*h+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,h,d)=>({y1:14,y2:26,style:{transform:`rotate(${360/d*h+(h<d/2?180:-180)}deg)`,"animation-delay":l*h/d-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,h,d)=>({y1:12,y2:20,style:{transform:`rotate(${360/d*h+(h<d/2?180:-180)}deg)`,"animation-delay":l*h/d-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,h,d)=>({y1:17,y2:29,style:{transform:`rotate(${30*h+(h<6?180:-180)}deg)`,"animation-delay":l*h/d-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,h,d)=>({y1:12,y2:20,style:{transform:`rotate(${30*h+(h<6?180:-180)}deg)`,"animation-delay":l*h/d-l+"ms"}})}}},5732:(x,y,a)=>{a.r(y),a.d(y,{createSwipeBackGesture:()=>d});var g=a(206),p=a(5062),l=a(1363);a(2733);const d=(t,o,e,n,s)=>{const i=t.ownerDocument.defaultView,r=(0,p.i)(t),v=u=>r?-u.deltaX:u.deltaX;return(0,l.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:u=>(u=>{const{startX:M}=u;return r?M>=i.innerWidth-50:M<=50})(u)&&o(),onStart:e,onMove:u=>{const M=v(u)/i.innerWidth;n(M)},onEnd:u=>{const f=v(u),M=i.innerWidth,m=f/M,C=(u=>r?-u.velocityX:u.velocityX)(u),A=C>=0&&(C>.2||f>M/2),S=(A?1-m:m)*M;let P=0;if(S>5){const O=S/Math.abs(C);P=Math.min(O,540)}s(A,m<=0?.01:(0,g.k)(0,m,.9999),P)}})}},7300:(x,y,a)=>{a.d(y,{c:()=>l,g:()=>d,h:()=>p,o:()=>o});var g=a(5861);const p=(e,n)=>null!==n.closest(e),l=(e,n)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},n):n,d=e=>{const n={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(e).forEach(s=>n[s]=!0),n},t=/^[a-z][a-z0-9+\-.]*:/,o=function(){var e=(0,g.Z)(function*(n,s,i,r){if(null!=n&&"#"!==n[0]&&!t.test(n)){const c=document.querySelector("ion-router");if(c)return null!=s&&s.preventDefault(),c.push(n,i,r)}return!1});return function(s,i,r,c){return e.apply(this,arguments)}}()},1314:(x,y,a)=>{a.r(y),a.d(y,{AddressPageModule:()=>u});var g=a(9808),p=a(4182),l=a(7110),h=a(1143),d=a(655),t=a(9863),o=a(7020),e=a(7172),n=a(8081);function s(f,M){1&f&&(t.TgZ(0,"div",8),t._UZ(1,"ion-spinner",9),t.qZA())}function i(f,M){if(1&f&&t._UZ(0,"app-empty-screen",10),2&f){const m=t.oxw();t.Q6J("model",m.model)}}function r(f,M){if(1&f){const m=t.EpF();t.TgZ(0,"ion-item",13),t._UZ(1,"ion-icon",14),t.TgZ(2,"ion-label")(3,"ion-label",15),t._uU(4),t.qZA(),t.TgZ(5,"ion-text",16)(6,"p",17),t._uU(7),t.qZA()(),t.TgZ(8,"ion-row")(9,"ion-button",18),t.NdJ("click",function(){const A=t.CHM(m).$implicit;return t.oxw(2).editAddress(A)}),t._uU(10,"EDIT"),t.qZA(),t.TgZ(11,"ion-button",18),t.NdJ("click",function(){const A=t.CHM(m).$implicit;return t.oxw(2).deleteAddress(A)}),t._uU(12,"DELETE"),t.qZA()()()()}if(2&f){const m=M.$implicit,C=t.oxw(2);t.xp6(1),t.Q6J("name",C.getIcon(null==m?null:m.title)),t.xp6(3),t.Oqu(null==m?null:m.title),t.xp6(3),t.lnq(" ",null==m?null:m.house," ",null==m?null:m.landmark," ",null==m?null:m.address," ")}}function c(f,M){if(1&f&&(t.TgZ(0,"ion-list")(1,"ion-item-divider"),t._uU(2,"SAVED ADDRESSES"),t.qZA(),t.TgZ(3,"ion-item-group",11),t.YNc(4,r,13,5,"ion-item",12),t.qZA()()),2&f){const m=t.oxw();t.xp6(4),t.Q6J("ngForOf",m.addresses)}}const v=function(){return["/","tabs","address","edit-address"]},w=[{path:"",component:(()=>{class f{constructor(m,C,b){this.global=m,this.addressService=C,this.router=b,this.addresses=[],this.model={title:"No Addresses added yet",icon:"location-outline"}}ngOnInit(){this.addressesSub=this.addressService.addresses.subscribe(m=>{console.log("addresses: ",m),this.addresses=m}),this.getAddresses()}ionViewDidEnter(){console.log("ionViewDidEnter AddressPage"),this.global.customStatusbar()}getAddresses(){return(0,d.mG)(this,void 0,void 0,function*(){try{this.isLoading=!0,this.global.showLoader(),yield this.addressService.getAddresses(),console.log(this.addresses),this.isLoading=!1,this.global.hideLoader()}catch(m){console.log(m),this.isLoading=!1,this.global.hideLoader(),this.global.errorToast()}})}getIcon(m){return this.global.getIcon(m)}editAddress(m){console.log(m);const C={queryParams:{data:JSON.stringify(m)}};this.router.navigate([this.router.url,"edit-address"],C)}deleteAddress(m){console.log("address: ",m),this.global.showAlert("Are you sure you want to delete this address?","Confirm",[{text:"No",role:"cancel",handler:()=>{console.log("cancel")}},{text:"Yes",handler:()=>(0,d.mG)(this,void 0,void 0,function*(){this.global.showLoader(),yield this.addressService.deleteAddress(m),this.global.hideLoader()})}])}ngOnDestroy(){this.addressesSub&&this.addressesSub.unsubscribe()}}return f.\u0275fac=function(m){return new(m||f)(t.Y36(o.U),t.Y36(e.D),t.Y36(h.F0))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-address"]],decls:15,vars:5,consts:[["color","dark"],["slot","start"],["defaultHref","/tabs/account"],["color","light"],["class","ion-text-center alignSpinner",4,"ngIf"],[3,"model",4,"ngIf"],[4,"ngIf"],["fill","outline","color","success","expand","block",1,"ion-margin-horizontal",3,"routerLink"],[1,"ion-text-center","alignSpinner"],["color","primary"],[3,"model"],[1,"ion-padding"],["lines","full","class","ion-no-padding",4,"ngFor","ngForOf"],["lines","full",1,"ion-no-padding"],["color","medium","slot","start",3,"name"],[1,"ion-padding-bottom"],["color","medium",1,"ion-text-justify"],[1,"ion-text-wrap"],["fill","clear","color","primary",3,"click"]],template:function(m,C){1&m&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title")(3,"ion-label",0),t._uU(4,"MANAGE ADDRESSES"),t.qZA()(),t.TgZ(5,"ion-buttons",1),t._UZ(6,"ion-back-button",2),t.qZA()()(),t.TgZ(7,"ion-content",3),t.YNc(8,s,2,0,"div",4),t.YNc(9,i,1,1,"app-empty-screen",5),t.YNc(10,c,5,1,"ion-list",6),t.qZA(),t.TgZ(11,"ion-footer")(12,"ion-toolbar",3)(13,"ion-button",7),t._uU(14," ADD NEW ADDRESS "),t.qZA()()()),2&m&&(t.xp6(8),t.Q6J("ngIf",C.isLoading),t.xp6(1),t.Q6J("ngIf",!C.isLoading&&0==(null==C.addresses?null:C.addresses.length)),t.xp6(1),t.Q6J("ngIf",!C.isLoading&&(null==C.addresses?null:C.addresses.length)>0),t.xp6(3),t.Q6J("routerLink",t.DdM(4,v)))},directives:[l.Gu,l.sr,l.wd,l.Q$,l.Sm,l.oU,l.cs,l.W2,g.O5,l.PQ,n.s,l.q_,l.rH,l.Ub,g.sg,l.Ie,l.gu,l.yW,l.Nd,l.YG,l.fr,l.YI,h.rH],styles:["ion-icon[_ngcontent-%COMP%]{align-self:start}.ios[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]{font-size:.8rem;padding:2vh;background-color:var(--ion-color-light)}"]}),f})()},{path:"edit-address",loadChildren:()=>a.e(6773).then(a.bind(a,6773)).then(f=>f.EditAddressPageModule)}];let _=(()=>{class f{}return f.\u0275fac=function(m){return new(m||f)},f.\u0275mod=t.oAB({type:f}),f.\u0275inj=t.cJS({imports:[[h.Bz.forChild(w)],h.Bz]}),f})();var D=a(5642);let u=(()=>{class f{}return f.\u0275fac=function(m){return new(m||f)},f.\u0275mod=t.oAB({type:f}),f.\u0275inj=t.cJS({imports:[[g.ez,p.u5,l.Pc,_,D.K]]}),f})()},2178:(x,y,a)=>{a.d(y,{Q:()=>d});var g=a(655);class p{constructor(o,e,n,s){this.banner=o,this.status=e,this.id=n,this.res_id=s}}var l=a(9863),h=a(5593);let d=(()=>{class t{constructor(e){this.api=e}addBanner(e){return(0,g.mG)(this,void 0,void 0,function*(){try{const n=new p(e.banner,e.status);let s=Object.assign({},n);return delete s.res_id,delete s.id,yield this.api.addDocument("banners",s),!0}catch(n){throw console.log(n),n}})}getBanners(){return(0,g.mG)(this,void 0,void 0,function*(){try{const n=yield(yield this.api.getDocs("banners")).docs.map(s=>{let i=s.data();return i.id=s.id,i});return console.log(n),n}catch(e){throw e}})}}return t.\u0275fac=function(e){return new(e||t)(l.LFG(h.s))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},1479:(x,y,a)=>{a.d(y,{N:()=>o});var g=a(655),p=a(591),l=a(9863),h=a(2998),d=a(7020),t=a(1143);let o=(()=>{class e{constructor(s,i,r){this.storage=s,this.global=i,this.router=r,this.model={},this.deliveryCharge=20,this._cart=new p.X(null)}get cart(){return this._cart.asObservable()}getCart(){return this.storage.getStorage("cart")}getCartData(s){return(0,g.mG)(this,void 0,void 0,function*(){let i=yield this.getCart();console.log("data: ",i),(null==i?void 0:i.value)&&(this.model=yield JSON.parse(i.value),console.log("model: ",this.model),yield this.calculate(),s||this._cart.next(this.model))})}alertClearCart(s,i,r,c){this.global.showAlert(c?"Would you like to reset your cart before re-ordering from this restaurant?":"Your cart contain items from a different restaurant. Would you like to reset your cart before browsing the restaurant?","Items already in Cart",[{text:"No",role:"cancel",handler:()=>{}},{text:"Yes",handler:()=>{this.clear(s,i,r,c)}}])}clear(s,i,r,c){return(0,g.mG)(this,void 0,void 0,function*(){yield this.clearCart(),this.model={},c?this.orderToCart(c):this.quantityPlus(s,i,r)})}orderToCart(s){return(0,g.mG)(this,void 0,void 0,function*(){console.log("order: ",s),this.model={restaurant:s.restaurant,items:s.order},yield this.calculate(),this.saveCart(),console.log("model: ",this.model),this._cart.next(this.model),this.router.navigate(["/","tabs","restaurants",s.restaurant_id])})}quantityPlus(s,i,r){return(0,g.mG)(this,void 0,void 0,function*(){try{return i&&(console.log("model: ",this.model),this.model.items=[...i],this.model.from&&(this.model.from="")),r&&(this.model.restaurant=r),console.log("q plus: ",this.model.items[s]),this.model.items[s].quantity&&0!=this.model.items[s].quantity?this.model.items[s].quantity+=1:this.model.items[s].quantity=1,console.log("check cart: ",this.model.items),yield this.calculate(),this._cart.next(this.model),this.model}catch(c){throw console.log(c),c}})}quantityMinus(s,i){return(0,g.mG)(this,void 0,void 0,function*(){try{return i?(console.log("model: ",this.model),this.model.items=[...i],this.model.from&&(this.model.from="")):this.model.from="cart",console.log("item: ",this.model.items[s]),this.model.items[s].quantity&&0!==this.model.items[s].quantity?this.model.items[s].quantity-=1:this.model.items[s].quantity=0,yield this.calculate(),this._cart.next(this.model),this.model}catch(r){throw console.log(r),r}})}calculate(){return(0,g.mG)(this,void 0,void 0,function*(){let s=this.model.items.filter(i=>i.quantity>0);console.log("model check qty: ",s),this.model.items=s,this.model.totalPrice=0,this.model.totalItem=0,this.model.deliveryCharge=0,this.model.grandTotal=0,s.forEach(i=>{this.model.totalItem+=i.quantity,this.model.totalPrice+=i.price*i.quantity}),this.model.deliveryCharge=this.deliveryCharge,this.model.grandTotal=this.model.totalPrice+this.model.deliveryCharge,0==this.model.totalItem&&(this.model.totalItem=0,this.model.totalPrice=0,this.model.grandTotal=0,yield this.clearCart(),this.model={}),console.log("cart: ",this.model)})}clearCart(){return(0,g.mG)(this,void 0,void 0,function*(){this.global.showLoader(),yield this.storage.removeStorage("cart"),this._cart.next(null),this.global.hideLoader()})}saveCart(s){s&&(this.model=s),this.storage.setStorage("cart",JSON.stringify(this.model))}deg2rad(s){return s*(Math.PI/180)}getDistanceFromLatLngInKm(s,i,r,c){let E=this.deg2rad(r-s),w=this.deg2rad(c-i),_=Math.sin(E/2)*Math.sin(E/2)+Math.cos(this.deg2rad(s))*Math.cos(this.deg2rad(r))*Math.sin(w/2)*Math.sin(w/2);var u=2*Math.atan2(Math.sqrt(_),Math.sqrt(1-_))*6371;return console.log(u),u}checkCart(s,i,r){var c;return(0,g.mG)(this,void 0,void 0,function*(){let v;return yield this.getCartData(1),!!(null===(c=this.model)||void 0===c?void 0:c.restaurant)&&(v=this.getDistanceFromLatLngInKm(s,i,this.model.restaurant.g.geopoint.latitude,this.model.restaurant.g.geopoint.longitude),console.log("distance: ",v),v>r)})}}return e.\u0275fac=function(s){return new(s||e)(l.LFG(h.V),l.LFG(d.U),l.LFG(t.F0))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},162:(x,y,a)=>{a.d(y,{H:()=>d});var g=a(655);class p{constructor(o,e,n){this.name=o,this.uid=e,this.id=n}}var l=a(9863),h=a(5593);let d=(()=>{class t{constructor(e){this.api=e}getRestaurantCategories(e){return(0,g.mG)(this,void 0,void 0,function*(){try{const n=this.api.whereQuery("uid","==",e),i=yield(yield this.api.getDocs("categories",n)).docs.map(r=>{let c=r.data();return c.id=r.id,c});return console.log(i),i}catch(n){throw n}})}addCategories(e,n){return(0,g.mG)(this,void 0,void 0,function*(){try{return e.forEach(s=>(0,g.mG)(this,void 0,void 0,function*(){const i=new p(s,n);delete i.id,yield this.api.addDocument("categories",Object.assign({},i))})),!0}catch(s){throw s}})}}return t.\u0275fac=function(e){return new(e||t)(l.LFG(h.s))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},3668:(x,y,a)=>{a.d(y,{h:()=>d});var g=a(655);class p{constructor(o,e,n,s,i,r,c,v,E,w,_,D){this.id=o,this.uid=e,this.category_id=n,this.cover=s,this.name=i,this.desc=r,this.price=c,this.veg=v,this.status=E,this.variation=w,this.rating=_,this.quantity=D}}var l=a(9863),h=a(5593);let d=(()=>{class t{constructor(e){this.api=e}addMenuItem(e){return(0,g.mG)(this,void 0,void 0,function*(){try{const n=this.api.randomString(),s=new p(n,e.restaurant_id,this.api.document(`categories/${e.category_id}`),e.cover,e.name,e.description,e.price,e.veg,e.status,!1,0);let i=Object.assign({},s);return delete i.quantity,console.log(i),yield this.api.setDocument(`menu/${e.restaurant_id}/allItems/${n}`,i),!0}catch(n){throw n}})}getRestaurantMenu(e){return(0,g.mG)(this,void 0,void 0,function*(){try{const n=this.api.whereQuery("status","==",!0),i=yield(yield this.api.getDocs(`menu/${e}/allItems`,n)).docs.map(r=>{let c=r.data();return c.id=r.id,this.api.getDocByReference(c.category_id).then(v=>{if(!(null==v?void 0:v.exists()))throw"No such document exist";c.category_id=v.data()}),c});return console.log(i),i}catch(n){throw n}})}}return t.\u0275fac=function(e){return new(e||t)(l.LFG(h.s))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},3587:(x,y,a)=>{a.d(y,{T:()=>h});var g=a(655),p=a(9863),l=a(5593);let h=(()=>{class d{constructor(o){this.api=o}addRestaurant(o,e){return(0,g.mG)(this,void 0,void 0,function*(){try{let n=Object.assign({},o);return delete n.g,delete n.distance,console.log(n),yield this.api.geoCollection("restaurants").doc(e).set(n)}catch(n){throw n}})}getRestaurants(){return(0,g.mG)(this,void 0,void 0,function*(){try{const e=yield(yield this.api.getDocs("restaurants")).docs.map(n=>n.data());return console.log(e),e}catch(o){throw o}})}getRestaurantById(o){return(0,g.mG)(this,void 0,void 0,function*(){try{let e;const n=yield this.api.getDocById(`restaurants/${o}`);if(!(null==n?void 0:n.exists()))throw"No such document exists!";return e=n.data(),console.log(e),e}catch(e){throw e}})}getNearbyRestaurants(o,e){return(0,g.mG)(this,void 0,void 0,function*(){try{const n=yield this.api.getGeoPoint(o,e),s=this.api.radius;return yield(yield this.api.geoCollection("restaurants").near({center:n,radius:s}).get()).docs.sort((r,c)=>r.distance-c.distance).map(r=>{let c=r.data();return c.id=r.id,c.distance=r.distance,c})}catch(n){throw n}})}}return d.\u0275fac=function(o){return new(o||d)(p.LFG(l.s))},d.\u0275prov=p.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);
var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function f(){return a("")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}let $;function g(t){$=t}function x(){const t=function(){if(!$)throw new Error("Function called outside component initialization");return $}();return(e,n,{cancelable:o=!1}={})=>{const c=t.$$.callbacks[e];if(c){const r=function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,o,e),c}(e,n,{cancelable:o});return c.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}const v=[],y=[];let b=[];const k=[],w=Promise.resolve();let _=!1;function E(){_||(_=!0,w.then(I))}function C(t){b.push(t)}const A=new Set;let F=0;function I(){if(0!==F)return;const t=$;do{try{for(;F<v.length;){const t=v[F];F++,g(t),M(t.$$)}}catch(t){throw v.length=0,F=0,t}for(g(null),v.length=0,F=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];A.has(e)||(A.add(e),e())}b.length=0}while(v.length);for(;k.length;)k.pop()();_=!1,A.clear(),g(t)}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const S=new Set;let N;function O(){N={r:0,c:[],p:N}}function j(){N.r||o(N.c),N=N.p}function L(t,e){t&&t.i&&(S.delete(t),t.i(e))}function q(t,e,n,o){if(t&&t.o){if(S.has(t))return;S.add(t),N.c.push((()=>{S.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function P(t,e){q(t,1,1,(()=>{e.delete(t.key)}))}function T(t){t&&t.c()}function z(t,n,r,l){const{fragment:i,after_update:s}=t.$$;i&&i.m(n,r),l||C((()=>{const n=t.$$.on_mount.map(e).filter(c);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(C)}function B(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];b.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),b=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,c,r,l,i,u,a,d=[-1]){const f=$;g(e);const p=e.$$={fragment:null,ctx:[],props:u,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:c.target||f.$$.root};a&&a(p.root);let m=!1;if(p.ctx=r?r(e,c.props||{},((t,n,...o)=>{const c=o.length?o[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=c)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](c),m&&function(t,e){-1===t.$$.dirty[0]&&(v.push(t),E(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!l&&l(p.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);p.fragment&&p.fragment.l(t),t.forEach(s)}else p.fragment&&p.fragment.c();c.intro&&L(e.$$.fragment),z(e,c.target,c.anchor,c.customElement),I()}g(f)}class D{$destroy(){B(this,1),this.$destroy=t}$on(e,n){if(!c(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(e){let n,o,c,r,a,f;return{c(){n=u("header"),o=u("h1"),o.textContent="todos",c=d(),r=u("input"),m(r,"class","new-todo"),m(r,"placeholder","What needs to be done?"),r.autofocus=!0,m(n,"class","header")},m(t,s){i(t,n,s),l(n,o),l(n,c),l(n,r),r.focus(),a||(f=p(r,"keydown",e[0]),a=!0)},p:t,i:t,o:t,d(t){t&&s(n),a=!1,f()}}}function H(t){const e=x();return[function(t){"Enter"===t.key&&(e("addItem",{text:t.target.value}),t.target.value="")}]}class J extends D{constructor(t){super(),W(this,t,H,G,r,{})}}function K(e){let n,o,c;return{c(){n=u("button"),n.textContent="Clear completed",m(n,"class","clear-completed")},m(t,r){i(t,n,r),o||(c=p(n,"click",e[3]),o=!0)},p:t,d(t){t&&s(n),o=!1,c()}}}function Q(e){let n,o,c,r,f,p,$,g,x,v,y,b,k,w,_,E,C,A,F,I,M,S,N,O,j=1===e[0]?"item":"items",L=e[2]&&K(e);return{c(){n=u("footer"),o=u("span"),c=u("strong"),r=a(e[0]),f=d(),p=a(j),$=a(" left"),g=d(),x=u("ul"),v=u("li"),y=u("a"),b=a("All"),w=d(),_=u("li"),E=u("a"),C=a("Active"),F=d(),I=u("li"),M=u("a"),S=a("Completed"),O=d(),L&&L.c(),m(o,"class","todo-count"),m(y,"class",k="all"===e[1]?"selected":""),m(y,"href","#/"),m(E,"class",A="active"===e[1]?"selected":""),m(E,"href","#/active"),m(M,"class",N="completed"===e[1]?"selected":""),m(M,"href","#/completed"),m(x,"class","filters"),m(n,"class","footer")},m(t,e){i(t,n,e),l(n,o),l(o,c),l(c,r),l(o,f),l(o,p),l(o,$),l(n,g),l(n,x),l(x,v),l(v,y),l(y,b),l(x,w),l(x,_),l(_,E),l(E,C),l(x,F),l(x,I),l(I,M),l(M,S),l(n,O),L&&L.m(n,null)},p(t,[e]){1&e&&h(r,t[0]),1&e&&j!==(j=1===t[0]?"item":"items")&&h(p,j),2&e&&k!==(k="all"===t[1]?"selected":"")&&m(y,"class",k),2&e&&A!==(A="active"===t[1]?"selected":"")&&m(E,"class",A),2&e&&N!==(N="completed"===t[1]?"selected":"")&&m(M,"class",N),t[2]?L?L.p(t,e):(L=K(t),L.c(),L.m(n,null)):L&&(L.d(1),L=null)},i:t,o:t,d(t){t&&s(n),L&&L.d()}}}function R(t,e,n){let{numActive:o}=e,{currentFilter:c}=e,{numCompleted:r}=e;const l=x();return t.$$set=t=>{"numActive"in t&&n(0,o=t.numActive),"currentFilter"in t&&n(1,c=t.currentFilter),"numCompleted"in t&&n(2,r=t.numCompleted)},[o,c,r,function(t){l("removeCompletedItems")}]}class U extends D{constructor(t){super(),W(this,t,R,Q,r,{numActive:0,currentFilter:1,numCompleted:2})}}function V(e){let n,r,a,f,h,$,g;return{c(){n=u("div"),r=u("input"),f=d(),h=u("label"),h.textContent="Edit Todo Input",r.value=a=e[0].description,m(r,"id","edit-todo-input"),m(r,"class","edit"),m(h,"class","visually-hidden"),m(h,"for","edit-todo-input"),m(n,"class","input-container")},m(o,s){var u;i(o,n,s),l(n,r),l(n,f),l(n,h),$||(g=[p(r,"keydown",e[4]),p(r,"blur",e[5]),(u=e[6].call(null,r),u&&c(u.destroy)?u.destroy:t)],$=!0)},p(t,e){1&e&&a!==(a=t[0].description)&&r.value!==a&&(r.value=a)},d(t){t&&s(n),$=!1,o(g)}}}function X(e){let n,c,r,f,$,g,x,v,y,b,k,w,_,E=e[0].description+"",C=e[1]&&V(e);return{c(){n=u("li"),c=u("div"),r=u("input"),$=d(),g=u("label"),x=a(E),v=d(),y=u("button"),b=d(),C&&C.c(),m(r,"class","toggle"),m(r,"type","checkbox"),r.checked=f=e[0].completed,m(y,"class","destroy"),m(c,"class","view"),m(n,"class",k=(e[0].completed?"completed":"")+" "+(e[1]?"editing":""))},m(t,o){i(t,n,o),l(n,c),l(c,r),l(c,$),l(c,g),l(g,x),l(c,v),l(c,y),l(n,b),C&&C.m(n,null),w||(_=[p(r,"change",e[7]),p(g,"dblclick",e[3]),p(y,"click",e[2])],w=!0)},p(t,[e]){1&e&&f!==(f=t[0].completed)&&(r.checked=f),1&e&&E!==(E=t[0].description+"")&&h(x,E),t[1]?C?C.p(t,e):(C=V(t),C.c(),C.m(n,null)):C&&(C.d(1),C=null),3&e&&k!==(k=(t[0].completed?"completed":"")+" "+(t[1]?"editing":""))&&m(n,"class",k)},i:t,o:t,d(t){t&&s(n),C&&C.d(),w=!1,o(_)}}}function Y(t,e,n){let{item:o}=e,c=!1;const r=x();function l(){r("removeItem")}return t.$$set=t=>{"item"in t&&n(0,o=t.item)},[o,c,l,function(){n(1,c=!0)},function(t){"Enter"===t.key?t.target.blur():"Escape"===t.key&&n(1,c=!1)},function(t){if(!c)return;const{value:e}=t.target;e.length?n(0,o.description=e,o):l(),n(1,c=!1)},async function(t){await(E(),w),t.focus()},t=>n(0,o.completed=t.target.checked,o)]}class Z extends D{constructor(t){super(),W(this,t,Y,X,r,{item:0})}}function tt(t,e,n){const o=t.slice();return o[11]=e[n],o[12]=e,o[13]=n,o}function et(t){let e,n,c,r,a,f,h,$,g,x,v,y,b=[],k=new Map,w=t[4];const _=t=>t[11].id;for(let e=0;e<w.length;e+=1){let n=tt(t,w,e),o=_(n);k.set(o,b[e]=nt(o,n))}return g=new U({props:{numActive:t[3],currentFilter:t[0],numCompleted:t[2]}}),g.$on("removeCompletedItems",t[8]),{c(){e=u("section"),n=u("input"),r=d(),a=u("label"),a.textContent="Mark all as complete",f=d(),h=u("ul");for(let t=0;t<b.length;t+=1)b[t].c();$=d(),T(g.$$.fragment),m(n,"id","toggle-all"),m(n,"class","toggle-all"),m(n,"type","checkbox"),n.checked=c=t[2]===t[1].length,m(a,"for","toggle-all"),m(h,"class","todo-list"),m(e,"class","main")},m(o,c){i(o,e,c),l(e,n),l(e,r),l(e,a),l(e,f),l(e,h);for(let t=0;t<b.length;t+=1)b[t]&&b[t].m(h,null);l(e,$),z(g,e,null),x=!0,v||(y=p(n,"change",t[7]),v=!0)},p(t,e){(!x||6&e&&c!==(c=t[2]===t[1].length))&&(n.checked=c),80&e&&(w=t[4],O(),b=function(t,e,n,c,r,l,i,s,u,a,d,f){let p=t.length,m=l.length,h=p;const $={};for(;h--;)$[t[h].key]=h;const g=[],x=new Map,v=new Map,y=[];for(h=m;h--;){const t=f(r,l,h),o=n(t);let s=i.get(o);s?c&&y.push((()=>s.p(t,e))):(s=a(o,t),s.c()),x.set(o,g[h]=s),o in $&&v.set(o,Math.abs(h-$[o]))}const b=new Set,k=new Set;function w(t){L(t,1),t.m(s,d),i.set(t.key,t),d=t.first,m--}for(;p&&m;){const e=g[m-1],n=t[p-1],o=e.key,c=n.key;e===n?(d=e.first,p--,m--):x.has(c)?!i.has(o)||b.has(o)?w(e):k.has(c)?p--:v.get(o)>v.get(c)?(k.add(o),w(e)):(b.add(c),p--):(u(n,i),p--)}for(;p--;){const e=t[p];x.has(e.key)||u(e,i)}for(;m;)w(g[m-1]);return o(y),g}(b,e,_,1,t,w,k,h,P,nt,null,tt),j());const r={};8&e&&(r.numActive=t[3]),1&e&&(r.currentFilter=t[0]),4&e&&(r.numCompleted=t[2]),g.$set(r)},i(t){if(!x){for(let t=0;t<w.length;t+=1)L(b[t]);L(g.$$.fragment,t),x=!0}},o(t){for(let t=0;t<b.length;t+=1)q(b[t]);q(g.$$.fragment,t),x=!1},d(t){t&&s(e);for(let t=0;t<b.length;t+=1)b[t].d();B(g),v=!1,y()}}}function nt(t,e){let n,o,c,r;function l(t){e[9](t,e[11],e[12],e[13])}let u={editing:ct};return void 0!==e[11]&&(u.item=e[11]),o=new Z({props:u}),y.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(o,"item",l))),o.$on("removeItem",(function(){return e[10](e[13])})),{key:t,first:null,c(){n=f(),T(o.$$.fragment),this.first=n},m(t,e){i(t,n,e),z(o,t,e),r=!0},p(t,n){e=t;const r={};var l;!c&&16&n&&(c=!0,r.item=e[11],l=()=>c=!1,k.push(l)),o.$set(r)},i(t){r||(L(o.$$.fragment,t),r=!0)},o(t){q(o.$$.fragment,t),r=!1},d(t){t&&s(n),B(o,t)}}}function ot(t){let e,n,o,c;e=new J({}),e.$on("addItem",t[5]);let r=t[1].length>0&&et(t);return{c(){T(e.$$.fragment),n=d(),r&&r.c(),o=f()},m(t,l){z(e,t,l),i(t,n,l),r&&r.m(t,l),i(t,o,l),c=!0},p(t,[e]){t[1].length>0?r?(r.p(t,e),2&e&&L(r,1)):(r=et(t),r.c(),L(r,1),r.m(o.parentNode,o)):r&&(O(),q(r,1,1,(()=>{r=null})),j())},i(t){c||(L(e.$$.fragment,t),L(r),c=!0)},o(t){q(e.$$.fragment,t),q(r),c=!1},d(t){B(e,t),t&&s(n),r&&r.d(t),t&&s(o)}}}let ct=null;function rt(t,e,n){let o,c,r,l="all",i=[];function s(t){i.splice(t,1),n(1,i)}(function(t){let e="all";function n(){switch(window.location.hash){case"#/active":e="active";break;case"#/completed":e="completed";break;default:e="all"}t(e)}return{init:function(){window.addEventListener("hashchange",n)}}})((t=>n(0,l=t))).init();return t.$$.update=()=>{3&t.$$.dirty&&n(4,o="all"===l?i:"completed"===l?i.filter((t=>t.completed)):i.filter((t=>!t.completed))),2&t.$$.dirty&&n(3,c=i.filter((t=>!t.completed)).length),2&t.$$.dirty&&n(2,r=i.filter((t=>t.completed)).length)},[l,i,r,c,o,function(t){i.push({id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})),description:t.detail.text,completed:!1}),n(1,i)},s,function(t){const e=t.target.checked;n(1,i=i.map((t=>({...t,completed:e}))))},function(){n(1,i=i.filter((t=>!t.completed)))},function(t,e,c,r){c[r]=t,n(4,o),n(0,l),n(1,i)},t=>s(t)]}const lt=new class extends D{constructor(t){super(),W(this,t,rt,ot,r,{})}}({target:document.querySelector(".todo-area")});return console.log("svelte app created"),lt}();
//# sourceMappingURL=app.js.map

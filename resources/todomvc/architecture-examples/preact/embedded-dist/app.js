!function(){"use strict";var e,t,n,_,o,l,r,i={},u=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(e,t){for(var n in t)e[n]=t[n];return e}function a(e){var t=e.parentNode;t&&t.removeChild(e)}function f(t,n,_){var o,l,r,i={};for(r in n)"key"==r?o=n[r]:"ref"==r?l=n[r]:i[r]=n[r];if(arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):_),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return d(t,i,o,l,null)}function d(e,_,o,l,r){var i={type:e,props:_,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++n:r};return null==r&&null!=t.vnode&&t.vnode(i),i}function p(e){return e.children}function h(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?v(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function g(e){(!e.__d&&(e.__d=!0)&&_.push(e)&&!y.__r++||o!==t.debounceRendering)&&((o=t.debounceRendering)||l)(y)}function y(){var e,t,n,o,l,i,u,c;for(_.sort(r);e=_.shift();)e.__d&&(t=_.length,o=void 0,l=void 0,u=(i=(n=e).__v).__e,(c=n.__P)&&(o=[],(l=s({},i)).__v=i.__v+1,N(c,i,l,n.__n,void 0!==c.ownerSVGElement,null!=i.__h?[u]:null,o,null==u?v(i):u,i.__h),T(o,i),i.__e!=u&&m(i)),_.length>t&&_.sort(r));y.__r=0}function k(e,t,n,_,o,l,r,c,s,a){var f,h,m,g,y,k,w,E=_&&_.__k||u,x=E.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(g=n.__k[f]=null==(g=t[f])||"boolean"==typeof g||"function"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?d(null,g,null,null,g):Array.isArray(g)?d(p,{children:g},null,null,null):g.__b>0?d(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(m=E[f])||m&&g.key==m.key&&g.type===m.type)E[f]=void 0;else for(h=0;h<x;h++){if((m=E[h])&&g.key==m.key&&g.type===m.type){E[h]=void 0;break}m=null}N(e,g,m=m||i,o,l,r,c,s,a),y=g.__e,(h=g.ref)&&m.ref!=h&&(w||(w=[]),m.ref&&w.push(m.ref,null,g),w.push(h,g.__c||y,g)),null!=y?(null==k&&(k=y),"function"==typeof g.type&&g.__k===m.__k?g.__d=s=b(g,s,e):s=C(e,g,m,E,y,s),"function"==typeof n.type&&(n.__d=s)):s&&m.__e==s&&s.parentNode!=e&&(s=v(m))}for(n.__e=k,f=x;f--;)null!=E[f]&&("function"==typeof n.type&&null!=E[f].__e&&E[f].__e==n.__d&&(n.__d=S(_).nextSibling),P(E[f],E[f]));if(w)for(f=0;f<w.length;f++)D(w[f],w[++f],w[++f])}function b(e,t,n){for(var _,o=e.__k,l=0;o&&l<o.length;l++)(_=o[l])&&(_.__=e,t="function"==typeof _.type?b(_,t,n):C(n,_,_,o,_.__e,t));return t}function C(e,t,n,_,o,l){var r,i,u;if(void 0!==t.__d)r=t.__d,t.__d=void 0;else if(null==n||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),r=null;else{for(i=l,u=0;(i=i.nextSibling)&&u<_.length;u+=1)if(i==o)break e;e.insertBefore(o,l),r=l}return void 0!==r?r:o.nextSibling}function S(e){var t,n,_;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(_=S(n)))return _;return null}function w(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||c.test(t)?n:n+"px"}function E(e,t,n,_,o){var l;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||w(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||w(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=n,n?_||e.addEventListener(t,l?H:x,l):e.removeEventListener(t,l?H:x,l);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function x(e){return this.l[e.type+!1](t.event?t.event(e):e)}function H(e){return this.l[e.type+!0](t.event?t.event(e):e)}function N(e,n,_,o,l,r,i,u,c){var a,f,d,v,m,g,y,b,C,S,w,E,x,H,N,T=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(c=_.__h,u=n.__e=_.__e,n.__h=null,r=[u]),(a=t.__b)&&a(n);try{e:if("function"==typeof T){if(b=n.props,C=(a=T.contextType)&&o[a.__c],S=a?C?C.props.value:a.__:o,_.__c?y=(f=n.__c=_.__c).__=f.__E:("prototype"in T&&T.prototype.render?n.__c=f=new T(b,S):(n.__c=f=new h(b,S),f.constructor=T,f.render=U),C&&C.sub(f),f.props=b,f.state||(f.state={}),f.context=S,f.__n=o,d=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=T.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=s({},f.__s)),s(f.__s,T.getDerivedStateFromProps(b,f.__s))),v=f.props,m=f.state,f.__v=n,d)null==T.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==T.getDerivedStateFromProps&&b!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,S),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,S)||n.__v===_.__v){for(n.__v!==_.__v&&(f.props=b,f.state=f.__s,f.__d=!1),f.__e=!1,n.__e=_.__e,n.__k=_.__k,n.__k.forEach((function(e){e&&(e.__=n)})),w=0;w<f._sb.length;w++)f.__h.push(f._sb[w]);f._sb=[],f.__h.length&&i.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,S),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,m,g)}))}if(f.context=S,f.props=b,f.__P=e,E=t.__r,x=0,"prototype"in T&&T.prototype.render){for(f.state=f.__s,f.__d=!1,E&&E(n),a=f.render(f.props,f.state,f.context),H=0;H<f._sb.length;H++)f.__h.push(f._sb[H]);f._sb=[]}else do{f.__d=!1,E&&E(n),a=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++x<25);f.state=f.__s,null!=f.getChildContext&&(o=s(s({},o),f.getChildContext())),d||null==f.getSnapshotBeforeUpdate||(g=f.getSnapshotBeforeUpdate(v,m)),N=null!=a&&a.type===p&&null==a.key?a.props.children:a,k(e,Array.isArray(N)?N:[N],n,_,o,l,r,i,u,c),f.base=n.__e,n.__h=null,f.__h.length&&i.push(f),y&&(f.__E=f.__=null),f.__e=!1}else null==r&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=A(_.__e,n,_,o,l,r,i,c);(a=t.diffed)&&a(n)}catch(e){n.__v=null,(c||null!=r)&&(n.__e=u,n.__h=!!c,r[r.indexOf(u)]=null),t.__e(e,n,_)}}function T(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function A(t,n,_,o,l,r,u,c){var s,f,d,p=_.props,h=n.props,m=n.type,g=0;if("svg"===m&&(l=!0),null!=r)for(;g<r.length;g++)if((s=r[g])&&"setAttribute"in s==!!m&&(m?s.localName===m:3===s.nodeType)){t=s,r[g]=null;break}if(null==t){if(null===m)return document.createTextNode(h);t=l?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,h.is&&h),r=null,c=!1}if(null===m)p===h||c&&t.data===h||(t.data=h);else{if(r=r&&e.call(t.childNodes),f=(p=_.props||i).dangerouslySetInnerHTML,d=h.dangerouslySetInnerHTML,!c){if(null!=r)for(p={},g=0;g<t.attributes.length;g++)p[t.attributes[g].name]=t.attributes[g].value;(d||f)&&(d&&(f&&d.__html==f.__html||d.__html===t.innerHTML)||(t.innerHTML=d&&d.__html||""))}if(function(e,t,n,_,o){var l;for(l in n)"children"===l||"key"===l||l in t||E(e,l,null,n[l],_);for(l in t)o&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||E(e,l,t[l],n[l],_)}(t,h,p,l,c),d)n.__k=[];else if(g=n.props.children,k(t,Array.isArray(g)?g:[g],n,_,o,l&&"foreignObject"!==m,r,u,r?r[0]:_.__k&&v(_,0),c),null!=r)for(g=r.length;g--;)null!=r[g]&&a(r[g]);c||("value"in h&&void 0!==(g=h.value)&&(g!==t.value||"progress"===m&&!g||"option"===m&&g!==p.value)&&E(t,"value",g,p.value,!1),"checked"in h&&void 0!==(g=h.checked)&&g!==t.checked&&E(t,"checked",g,p.checked,!1))}return t}function D(e,n,_){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,_)}}function P(e,n,_){var o,l;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||D(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&P(o[l],n,_||"function"!=typeof e.type);_||null==e.__e||a(e.__e),e.__=e.__e=e.__d=void 0}function U(e,t,n){return this.constructor(e,n)}e=u.slice,t={__e:function(e,t,n,_){for(var o,l,r;t=t.__;)if((o=t.__c)&&!o.__)try{if((l=o.constructor)&&null!=l.getDerivedStateFromError&&(o.setState(l.getDerivedStateFromError(e)),r=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,_||{}),r=o.__d),r)return o.__E=o}catch(t){e=t}throw e}},n=0,h.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(s({},n),this.props)),e&&s(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),g(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},h.prototype.render=p,_=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=function(e,t){return e.__v.__b-t.__v.__b},y.__r=0;var F,I,W,L,M=0,V=[],R=[],O=t.__b,q=t.__r,$=t.diffed,j=t.__c,B=t.unmount;function K(e,n){t.__h&&t.__h(I,e,M||n),M=0;var _=I.__H||(I.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({__V:R}),_.__[e]}function G(e){return M=1,function(e,t,n){var _=K(F++,2);if(_.t=e,!_.__c&&(_.__=[n?n(t):ne(void 0,t),function(e){var t=_.__N?_.__N[0]:_.__[0],n=_.t(t,e);t!==n&&(_.__N=[n,_.__[1]],_.__c.setState({}))}],_.__c=I,!I.u)){var o=function(e,t,n){if(!_.__c.__H)return!0;var o=_.__c.__H.__.filter((function(e){return e.__c}));if(o.every((function(e){return!e.__N})))return!l||l.call(this,e,t,n);var r=!1;return o.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(r=!0)}})),!(!r&&_.__c.props===e)&&(!l||l.call(this,e,t,n))};I.u=!0;var l=I.shouldComponentUpdate,r=I.componentWillUpdate;I.componentWillUpdate=function(e,t,n){if(this.__e){var _=l;l=void 0,o(e,t,n),l=_}r&&r.call(this,e,t,n)},I.shouldComponentUpdate=o}return _.__N||_.__}(ne,e)}function z(e,n){var _=K(F++,3);!t.__s&&te(_.__H,n)&&(_.__=e,_.i=n,I.__H.__h.push(_))}function J(e){return M=5,function(e,t){var n=K(F++,7);return te(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}((function(){return{current:e}}),[])}function Q(){for(var e;e=V.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Z),e.__H.__h.forEach(ee),e.__H.__h=[]}catch(n){e.__H.__h=[],t.__e(n,e.__v)}}t.__b=function(e){I=null,O&&O(e)},t.__r=function(e){q&&q(e),F=0;var t=(I=e.__c).__H;t&&(W===I?(t.__h=[],I.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=R,e.__N=e.i=void 0}))):(t.__h.forEach(Z),t.__h.forEach(ee),t.__h=[])),W=I},t.diffed=function(e){$&&$(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==V.push(n)&&L===t.requestAnimationFrame||((L=t.requestAnimationFrame)||Y)(Q)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==R&&(e.__=e.__V),e.i=void 0,e.__V=R}))),W=I=null},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(Z),e.__h=e.__h.filter((function(e){return!e.__||ee(e)}))}catch(_){n.some((function(e){e.__h&&(e.__h=[])})),n=[],t.__e(_,e.__v)}})),j&&j(e,n)},t.unmount=function(e){B&&B(e);var n,_=e.__c;_&&_.__H&&(_.__H.__.forEach((function(e){try{Z(e)}catch(e){n=e}})),_.__H=void 0,n&&t.__e(n,_.__v))};var X="function"==typeof requestAnimationFrame;function Y(e){var t,n=function(){clearTimeout(_),X&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);X&&(t=requestAnimationFrame(n))}function Z(e){var t=I,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),I=t}function ee(e){var t=I;e.__c=e.__(),I=t}function te(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function ne(e,t){return"function"==typeof t?t(e):t}function _e(){let e="";for(let t=0;t<32;t++){let n=16*Math.random()|0;8!==t&&12!==t&&16!==t&&20!==t||(e+="-"),e+=(12===t?4:16===t?3&n|8:n).toString(16)}return e}let oe=[];function le(e){let{onKeyDown:t}=e;return f("header",{class:"header"},f("h1",null,"todos"),f("input",{class:"new-todo",placeholder:"What needs to be done?",onKeyDown:t,autoFocus:!0}))}var re,ie={},ue={get exports(){return ie},set exports(e){ie=e}};
/*!
    	Copyright (c) 2018 Jed Watson.
    	Licensed under the MIT License (MIT), see
    	http://jedwatson.github.io/classnames
    */
re=ue,function(){var e={}.hasOwnProperty;function t(){for(var n=[],_=0;_<arguments.length;_++){var o=arguments[_];if(o){var l=typeof o;if("string"===l||"number"===l)n.push(o);else if(Array.isArray(o)){if(o.length){var r=t.apply(null,o);r&&n.push(r)}}else if("object"===l){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var i in o)e.call(o,i)&&o[i]&&n.push(i)}}}return n.join(" ")}re.exports?(t.default=t,re.exports=t):window.classNames=t}();var ce=ie;function se(e){let{onSave:t,onRemove:n,onToggle:_,todo:o}=e;const[l,r]=G(!1),i=J(null);function u(e){const _=e.target.value.trim();_?(t(o,_),r(!1)):n(o)}return z((()=>{i.current&&(i.current.focus(),i.current.setSelectionRange(i.current.value.length,i.current.value.length))}),[l]),f("li",{class:ce({completed:o.completed,editing:l})},f("div",{class:"view"},f("input",{class:"toggle",type:"checkbox",checked:o.completed,onChange:function(e){_(o),e.preventDefault()}}),f("label",{onDblClick:function(){r(!0)}},o.title),f("button",{class:"destroy",onClick:function(){n(o)}})),l?f("div",{class:"input-container"},f("input",{class:"edit",id:"edit-todo-input",ref:i,onBlur:u,onKeyDown:function(e){"Escape"===e.key?r(!1):"Enter"===e.key&&u(e)},defaultValue:o.title}),f("label",{class:"visually-hidden",htmlFor:"edit-todo-input"},"Edit Todo Input"," ")):null)}const ae={all:e=>!0,active:e=>!e.completed,completed:e=>e.completed};function fe(e){let{onChange:t,onToggle:n,onRemove:_,onSave:o,todos:l,route:r}=e;const i=l.filter(ae[r]);return f("section",{class:"main"},f("div",{class:"toggle-all-container"},f("input",{class:"toggle-all",type:"checkbox",checked:0===l.filter(ae.active).length,onChange:t}),f("label",{class:"toggle-all-label",htmlFor:"toggle-all"},"Toggle All Input")),f("ul",{class:"todo-list"},i.map((e=>f(se,{key:e.id,todo:e,onToggle:n,onRemove:_,onSave:o})))))}function de(e){let{todos:t,route:n,onClearCompleted:_}=e;const o=t.filter((e=>!e.completed)).length,l=t.length-o;return f("footer",{class:"footer"},f("span",{class:"todo-count"},`${o} ${1===o?"item":"items"} left!`),f("ul",{class:"filters"},f("li",null,f("a",{href:"#/",class:ce({selected:"all"===n})},"All"))," ",f("li",null,f("a",{href:"#/active",class:ce({selected:"active"===n})},"Active"))," ",f("li",null,f("a",{href:"#/completed",class:ce({selected:"completed"===n})},"Completed"))),l>0&&f("button",{class:"clear-completed",onClick:_},"Clear completed"))}const pe=()=>{let e=String(location.hash||"").split("/").pop();return ae[e]||(e="all"),e};const he=document.createElement("div");he.className="todoholder",function(n,_,o){var l,r,u;t.__&&t.__(n,_),r=(l="function"==typeof o)?null:o&&o.__k||_.__k,u=[],N(_,n=(!l&&o||_).__k=f(p,null,[n]),r||i,i,void 0!==_.ownerSVGElement,!l&&o?[o]:r?null:_.firstChild?e.call(_.childNodes):null,u,!l&&o?o:r?r.__e:_.firstChild,l),T(u,n)}(f(p,null,f("section",{className:"todoapp",id:"root"},f((function(){const[,e]=G(Date.now()),[t,n]=G("all"),_=function(e){const t=[e];function n(){t.forEach((e=>e()))}return{addItem:function(e){oe=oe.concat({id:_e(),title:e,completed:!1}),n()},toggleAll:function(e){oe=oe.map((t=>({...t,completed:e}))),n()},toggleItem:function(e){oe=oe.map((t=>t!==e?t:{...t,completed:!t.completed})),n()},removeItem:function(e){oe=oe.filter((t=>t!==e)),n()},updateItem:function(e,t){oe=oe.map((n=>n!==e?n:{...n,title:t})),n()},clearCompleted:function(){oe=oe.filter((e=>!e.completed)),n()},getTodos:function(){return[...oe]}}}((function(){e(Date.now())}));return z((()=>{function e(){n(pe())}addEventListener("hashchange",e),e()}),[]),f("div",null,f(le,{onKeyDown:function(e){if("Enter"===e.key){const t=e.target.value.trim();t&&(_.addItem(t),e.target.value="")}}}),_.getTodos().length>0?f("div",null,f(fe,{todos:_.getTodos(),route:t,onChange:function(e){_.toggleAll(e.target.checked)},onToggle:_.toggleItem,onRemove:_.removeItem,onSave:_.updateItem}),f(de,{todos:_.getTodos(),route:t,onClearCompleted:_.clearCompleted})):null)}),null)),f("footer",{className:"info"},f("p",null,"Click on input field to write your todo."),f("p",null,"At least two characters are needed to be a valid entry."),f("p",null,"Press 'enter' to add the todo."),f("p",null,"Double-click to edit a todo"))),he);document.querySelector(".todo-area").appendChild(he)}();
//# sourceMappingURL=app.js.map

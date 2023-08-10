function t(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new n(i,t,o)},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,a=globalThis,d=a.trustedTypes,h=d?d.emptyScript:"",c=a.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u},f="finalized";class m extends HTMLElement{static addInitializer(t){this.finalize(),(this.i??=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];for(const[e,i]of this.elementProperties){const o=this._$El(e,i);void 0!==o&&(this._$Eh.set(o,e),t.push(o))}return t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.i&&(this.i=[...t.i]),this.elementProperties=new Map(t.elementProperties),this._$Eh=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$El(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this.v()}v(){this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),this.constructor.i?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){const t=this.constructor.elementProperties;for(const e of t.keys())this.hasOwnProperty(e)&&(this._$Ep.set(e,this[e]),delete this[e])}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of o){const o=document.createElement("style"),s=e.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){const o=this.constructor._$El(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:p).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:p;this._$Em=o,this[o]=s.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;this.hasUpdated,this._$Ep&&=this._$Ep.forEach(((t,e)=>this[e]=t));let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC&&=this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$Ek()}updated(t){}firstUpdated(t){}}m[f]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},c?.({ReactiveElement:m}),(a.reactiveElementVersions??=[]).push("2.0.0-pre.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,b=void 0,v=$.trustedTypes,y=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,_="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,A="?"+x,w=`<${A}>`,E=document,C=()=>E.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,L=t=>S(t)||"function"==typeof t?.[Symbol.iterator],T="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,U=/>/g,H=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,O=/"/g,M=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),j=new WeakMap,B=E.createTreeWalker(E,129),F=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":"",r=P;for(let e=0;e<i;e++){const i=t[e];let l,a,d=-1,h=0;for(;h<i.length&&(r.lastIndex=h,a=r.exec(i),null!==a);)h=r.lastIndex,r===P?"!--"===a[1]?r=N:void 0!==a[1]?r=U:void 0!==a[2]?(M.test(a[2])&&(s=RegExp("</"+a[2],"g")),r=H):void 0!==a[3]&&(r=H):r===H?">"===a[0]?(r=s??P,d=-1):void 0===a[1]?d=-2:(d=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?H:'"'===a[3]?O:D):r===O||r===D?r=H:r===N||r===U?r=P:(r=H,s=void 0);const c=r===H&&t[e+1].startsWith("/>")?" ":"";n+=r===P?i+w:d>=0?(o.push(l),i.slice(0,d)+_+i.slice(d)+x+c):i+x+(-2===d?e:c)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(l):l,o]};class V{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const r=t.length-1,l=this.parts,[a,d]=F(t,e);if(this.el=V.createElement(a,i),B.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=B.nextNode())&&l.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(_)){const e=d[n++],i=o.getAttribute(t).split(x),r=/([.?@])?(.*)/.exec(e);l.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?Z:"?"===r[1]?Q:"@"===r[1]?G:J}),o.removeAttribute(t)}else t.startsWith(x)&&(l.push({type:6,index:s}),o.removeAttribute(t));if(M.test(o.tagName)){const t=o.textContent.split(x),e=t.length-1;if(e>0){o.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],C()),B.nextNode(),l.push({type:2,index:++s});o.append(t[e],C())}}}else if(8===o.nodeType)if(o.data===A)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(x,t+1));)l.push({type:7,index:s}),t+=x.length-1}s++}b?.({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:t})}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,o){if(e===z)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const n=k(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=W(t,s._$AS(t,e.values),s,o)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??E).importNode(e,!0);B.currentNode=o;let s=B.nextNode(),n=0,r=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new K(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new X(s,this,t)),this._$AV.push(e),l=i[++r]}n!==l?.index&&(s=B.nextNode(),n++)}return o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(b?.({kind:"set part",part:i,value:t[e],valueIndex:e,values:t,templateInstance:this}),void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),k(t)?t===I||null==t||""===t?(this._$AH!==I&&(b?.({kind:"commit nothing to child",start:this._$AA,end:this._$AB,parent:this._$AM,options:this.options}),this._$AR()),this._$AH=I):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):L(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),b?.({kind:"commit node",start:this._$AA,parent:this._$AM,value:t,options:this.options}),this._$AH=this.k(t))}_(t){if(this._$AH!==I&&k(this._$AH)){const e=this._$AA.nextSibling;b?.({kind:"commit text",node:e,value:t,options:this.options}),e.data=t}else this.$(E.createTextNode(t)),b?.({kind:"commit text",node:this._$AA.nextSibling,value:t,options:this.options});this._$AH=t}g(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=V.createElement(i.h,this.options)),i);if(this._$AH?._$AD===o)b?.({kind:"template updating",template:o,instance:this._$AH,parts:this._$AH._$AV,options:this.options,values:e}),this._$AH.p(e);else{const t=new q(o,this),i=t.u(this.options);b?.({kind:"template instantiated",template:o,instance:t,parts:t._$AV,options:this.options,fragment:i,values:e}),t.p(e),b?.({kind:"template instantiated and updated",template:o,instance:t,parts:t._$AV,options:this.options,fragment:i,values:e}),this.$(i),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new V(t)),e}T(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new K(this.k(C()),this.k(C()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=W(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{const o=t;let r,l;for(t=s[0],r=0;r<s.length-1;r++)l=W(this,o[i+r],e,r),l===z&&(l=this._$AH[r]),n||=!k(l)||l!==this._$AH[r],l===I?t=I:t!==I&&(t+=(l??"")+s[r+1]),this._$AH[r]=l}n&&!o&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):(b?.({kind:"commit attribute",element:this.element,name:this.name,value:t,options:this.options}),this.element.setAttribute(this.name,t??""))}}class Z extends J{constructor(){super(...arguments),this.type=3}j(t){b?.({kind:"commit property",element:this.element,name:this.name,value:t,options:this.options}),this.element[this.name]=t===I?void 0:t}}class Q extends J{constructor(){super(...arguments),this.type=4}j(t){b?.({kind:"commit boolean attribute",element:this.element,name:this.name,value:!(!t||t===I),options:this.options}),this.element.toggleAttribute(this.name,!!t&&t!==I)}}class G extends J{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=W(this,t,e,0)??I)===z)return;const i=this._$AH,o=t===I&&i!==I||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==I&&(i===I||o);b?.({kind:"commit event listener",element:this.element,name:this.name,value:t,options:this.options,removeListener:o,addListener:s,oldListener:i}),o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){b?.({kind:"commit to element binding",element:this.element,value:t,options:this.options}),W(this,t)}}const Y={S:_,A:x,P:A,M:1,C:F,L:q,V:L,D:W,R:K,I:J,H:Q,N:G,U:Z,B:X},tt=$.litHtmlPolyfillSupport;tt?.(V,K),($.litHtmlVersions??=[]).push("3.0.0-pre.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class et extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(b?.({kind:"begin render",id:0,value:t,container:e,options:i,part:s}),void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new K(e.insertBefore(C(),t),t,void 0,i??{})}return s._$AI(t),b?.({kind:"end render",id:0,value:t,container:e,options:i,part:s}),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}}et.finalized=!0,et._$litElement$=!0,globalThis.litElementHydrateSupport?.({LitElement:et});const it=globalThis.litElementPolyfillSupport;it?.({LitElement:et}),(globalThis.litElementVersions??=[]).push("4.0.0-pre.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=1,st=2,nt=t=>(...e)=>({_$litDirective$:t,values:e});class rt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=nt(class extends rt{constructor(t){if(super(t),t.type!==ot||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.it)t in e||(i.remove(t),this.it.delete(t));for(const t in e){const o=!!e[t];o===this.it.has(t)||this.st?.has(t)||(o?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return z}}),at=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},ht=(t,e,i)=>{e.constructor.createProperty(i,t)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t){return(e,i)=>void 0!==i?ht(t,e,i):dt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function pt(t){return ct({...t,state:!0})}const ut=r`button{margin:0;padding:0;border:0;background:0 0;font-size:100%;vertical-align:baseline;font-family:inherit;font-weight:inherit;color:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle-all:focus+label,.toggle:focus+label,:focus{box-shadow:0 0 2px 2px #cf7d7d;outline:0}.edit,.new-todo{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.new-todo{padding:16px 16px 16px 60px;border:none;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03)}@media screen and (-webkit-min-device-pixel-ratio:0){.toggle-all,li .toggle{background:0 0}li .toggle{height:40px}}@media (max-width:430px){.footer{height:50px}.filters{bottom:10px}}`;function gt(t=21){let e="",i=t;for(;i--;)e+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0];return e}const ft=["all","active","completed"];class mt extends EventTarget{#t=[];#e=this.#i();get all(){return this.#t}get active(){return this.#t.filter((t=>!t.completed))}get completed(){return this.#t.filter((t=>t.completed))}get allCompleted(){return this.#t.every((t=>t.completed))}connect(){window.addEventListener("hashchange",this.#o)}disconnect(){window.removeEventListener("hashchange",this.#o)}filtered(){switch(this.#e){case"active":return this.active;case"completed":return this.completed}return this.all}#s(){this.dispatchEvent(new Event("change"))}add(t){this.#t.push({text:t,completed:!1,id:gt()}),this.#s()}delete(t){const e=this.#t.findIndex((e=>e.id===t));this.#t.splice(e>>>0,1),this.#s()}update(t){const e=this.#t.find((e=>e.id===t.id));void 0!==e&&(Object.assign(e,t),this.#s())}toggle(t){const e=this.#t.find((e=>e.id===t));void 0!==e&&(e.completed=!e.completed,this.#s())}toggleAll(){const t=this.#t.every((t=>t.completed));this.#t=this.#t.map((e=>({...e,completed:!t}))),this.#s()}clearCompleted(){this.#t=this.active,this.#s()}get filter(){return this.#e}set filter(t){this.#e=t,this.#s()}#o=()=>{this.filter=this.#i()};#i(){let t=/#\/(.*)/.exec(window.location.hash)?.[1];return e=t,ft.includes(e)?t:"all";var e}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{R:$t}=Y,bt=()=>document.createComment(""),vt=(t,e,i)=>{const o=t._$AA.parentNode,s=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=o.insertBefore(bt(),s),n=o.insertBefore(bt(),s);i=new $t(e,n,t,t.options)}else{const e=i._$AB.nextSibling,n=i._$AM,r=n!==t;if(r){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==n._$AU&&i._$AP(e)}if(e!==s||r){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;o.insertBefore(t,s),t=e}}}return i},yt=(t,e,i=t)=>(t._$AI(e,i),t),_t={},xt=(t,e=_t)=>t._$AH=e,At=t=>{t._$AP?.(!1,!0);let e=t._$AA;const i=t._$AB.nextSibling;for(;e!==i;){const t=e.nextSibling;e.remove(),e=t}},wt=(t,e,i)=>{const o=new Map;for(let s=e;s<=i;s++)o.set(t[s],s);return o},Et=nt(class extends rt{constructor(t){if(super(t),t.type!==st)throw Error("repeat() can only be used in text expressions")}ht(t,e,i){let o;void 0===i?i=e:void 0!==e&&(o=e);const s=[],n=[];let r=0;for(const e of t)s[r]=o?o(e,r):r,n[r]=i(e,r),r++;return{values:n,keys:s}}render(t,e,i){return this.ht(t,e,i).values}update(t,[e,i,o]){const s=(t=>t._$AH)(t),{values:n,keys:r}=this.ht(e,i,o);if(!Array.isArray(s))return this.dt=r,n;const l=this.dt??=[],a=[];let d,h,c=0,p=s.length-1,u=0,g=n.length-1;for(;c<=p&&u<=g;)if(null===s[c])c++;else if(null===s[p])p--;else if(l[c]===r[u])a[u]=yt(s[c],n[u]),c++,u++;else if(l[p]===r[g])a[g]=yt(s[p],n[g]),p--,g--;else if(l[c]===r[g])a[g]=yt(s[c],n[g]),vt(t,a[g+1],s[c]),c++,g--;else if(l[p]===r[u])a[u]=yt(s[p],n[u]),vt(t,s[c],s[p]),p--,u++;else if(void 0===d&&(d=wt(r,u,g),h=wt(l,c,p)),d.has(l[c]))if(d.has(l[p])){const e=h.get(r[u]),i=void 0!==e?s[e]:null;if(null===i){const e=vt(t,s[c]);yt(e,n[u]),a[u]=e}else a[u]=yt(i,n[u]),vt(t,s[c],i),s[e]=null;u++}else At(s[p]),p--;else At(s[c]),c++;for(;u<=g;){const e=vt(t,a[g+1]);yt(e,n[u]),a[u++]=e}for(;c<=p;){const t=s[c++];null!==t&&At(t)}return this.dt=r,xt(t,a),z}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ct extends Event{static{this.eventName="todo-add"}constructor(t){super(Ct.eventName,{bubbles:!0,composed:!0}),this.text=t}}class kt extends Event{static{this.eventName="todo-delete"}constructor(t){super(kt.eventName,{bubbles:!0,composed:!0}),this.id=t}}class St extends Event{static{this.eventName="todo-edit"}constructor(t){super(St.eventName,{bubbles:!0,composed:!0}),this.edit=t}}class Lt extends Event{static{this.eventName="todo-toggle-all"}constructor(){super(Lt.eventName,{bubbles:!0,composed:!0})}}class Tt extends Event{static{this.eventName="clear-completed"}constructor(){super(Tt.eventName,{bubbles:!0,composed:!0})}}const Pt=window.extraCssToAdopt;let Nt=class extends et{constructor(){super(...arguments),this.todoId="",this.text="",this.completed=!1,this.isEditing=!1}static{this.styles=[ut,r`:host{display:block}li{position:relative;font-size:24px}.editing{border-bottom:none;padding:0}.editing .edit{display:block;width:calc(100% - 43px);padding:12px 16px;margin:0 0 0 43px}.editing .view{display:none}.toggle{text-align:center;width:40px;height:auto;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;appearance:none}.toggle{opacity:0}.toggle+label{background-image:url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E);background-repeat:no-repeat;background-position:center left}.toggle:checked+label{background-image:url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E)}label{word-break:break-all;padding:15px 15px 15px 60px;display:block;line-height:1.2;transition:color .4s;font-weight:400;color:#484848}.completed label{color:#949494;text-decoration:line-through}.destroy{display:none;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:30px;color:#949494;transition:color .2s ease-out}.destroy:focus,.destroy:hover{color:#c18585}.destroy:after{content:"×";display:block;height:100%;line-height:1.1}li:hover .destroy{display:block}.edit{display:none}.editing:last-child{margin-bottom:-1px}`]}connectedCallback(){super.connectedCallback(),Pt?(console.log("Adopting extra css"),this.shadowRoot?.adoptedStyleSheets.push(Pt)):console.log("No extra css to adopt")}render(){const t={todo:!0,completed:this.completed??!1,editing:this.isEditing};return R`<li class="${lt(t)}"><div class="view"><input class="toggle" type="checkbox" .checked="${this.completed??!1}" @change="${this.#n}"> <label @dblclick="${this.#r}">${this.text}</label> <button @click="${this.#l}" class="destroy"></button></div><input class="edit" type="text" @change="${this.#a}" @keyup="${this.#d}" @blur="${this.#h}" .value="${this.text??""}"></li>`}#n(){this.dispatchEvent(new St({id:this.todoId,completed:!this.completed}))}#l(){this.dispatchEvent(new kt(this.todoId))}#r(){this.isEditing=!0}#a(t){const e=t.target.value;this.dispatchEvent(new St({id:this.todoId,text:e})),this.isEditing=!1}#d(t){"escape"===t.key&&this.#h(t)}#h(t){t.target.value=this.text??""}};t([ct()],Nt.prototype,"todoId",void 0),t([ct()],Nt.prototype,"text",void 0),t([ct({type:Boolean})],Nt.prototype,"completed",void 0),t([pt()],Nt.prototype,"isEditing",void 0),Nt=t([at("todo-item")],Nt);const Ut=t=>(e,i)=>{const o=Object.getOwnPropertyDescriptor(e,i),{get:s,set:n}=o,r={...o,set(e){const i=this.__updateOnEventListener??=()=>this.requestUpdate(),o=s.call(this);return o?.removeEventListener?.(t,i),e?.addEventListener?.(t,i),n.call(this,e)}};Object.defineProperty(e,i,r)},Ht=window.extraTodoListCssToAdopt;let Dt=class extends et{static{this.styles=[ut,r`:host{display:block}:focus{box-shadow:none!important}.todo-list{margin:0;padding:0;list-style:none}.toggle-all{width:1px;height:1px;border:none;opacity:0;position:absolute;right:100%;bottom:100%}.toggle-all+label{display:flex;align-items:center;justify-content:center;width:45px;height:65px;font-size:0;position:absolute;top:-65px;left:0}.toggle-all+label:before{content:"❯";display:inline-block;font-size:22px;color:#949494;padding:10px 27px 10px 27px;transform:rotate(90deg)}.toggle-all:checked+label:before{color:#484848}todo-item{border-bottom:1px solid #ededed}todo-item:last-child{border-bottom:none}`]}connectedCallback(){super.connectedCallback(),Ht?(console.log("Todolist: Adopting extra css"),this.shadowRoot?.adoptedStyleSheets.push(Ht)):console.log("TodoList: No extra css to adopt")}render(){return R`${(this.todoList?.all.length??0)>0?R`<input @change="${this.#c}" id="toggle-all" type="checkbox" class="toggle-all" .checked="${this.todoList?.allCompleted??!1}"> <label for="toggle-all">Mark all as complete</label>`:I}<ul class="todo-list">${Et(this.todoList?.filtered()??[],(t=>t.id),((t,e)=>R`<todo-item data-priority="${4-e%5}" .todoId="${t.id}" .text="${t.text}" .completed="${t.completed}"></todo-item>`))}</ul>`}#c(){this.dispatchEvent(new Lt)}};t([Ut("change"),ct({attribute:!1})],Dt.prototype,"todoList",void 0),Dt=t([at("todo-list")],Dt);let Ot=class extends et{static{this.styles=[ut,r`:host{display:block}input::-webkit-input-placeholder{font-style:italic;font-weight:400;color:rgba(0,0,0,.4)}input::-moz-placeholder{font-style:italic;font-weight:400;color:rgba(0,0,0,.4)}input::input-placeholder{font-style:italic;font-weight:400;color:rgba(0,0,0,.4)}`]}render(){return R`<input @change="${this.#p}" @keydown="${this.#u}" class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?">`}#p(){const{value:t}=this.newTodoInput;t.length>0&&this.dispatchEvent(new Ct(t)),this.newTodoInput.value=""}#u(t){"Enter"===t.key&&this.#p()}};t([Ut("change"),ct({attribute:!1})],Ot.prototype,"todoList",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,e){return(({finisher:t,descriptor:e})=>(i,o)=>{if(void 0===o){const o=i.originalKey??i.key,s=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(s.finisher=function(e){t(e,o)}),s}{const s=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),t?.(s,o)}})({descriptor:i=>{const o={get(){return this.renderRoot?.querySelector(t)??null},enumerable:!0,configurable:!0};if(e){const e=Symbol();o.get=function(){return void 0===this[e]&&(this[e]=this.renderRoot?.querySelector(t)??null),this[e]}}return o}})}("input",!0)],Ot.prototype,"newTodoInput",void 0),Ot=t([at("todo-form")],Ot);let Mt=class extends et{static{this.styles=[ut,r`:host{display:block;padding:10px 15px;height:20px;text-align:center;font-size:15px;border-top:1px solid #e6e6e6}:host:before{content:"";position:absolute;right:0;bottom:0;left:0;height:50px;overflow:hidden;box-shadow:0 1px 1px rgba(0,0,0,.2),0 8px 0 -3px #f6f6f6,0 9px 1px -3px rgba(0,0,0,.2),0 16px 0 -6px #f6f6f6,0 17px 2px -6px rgba(0,0,0,.2)}.todo-count{float:left;text-align:left}.todo-count strong{font-weight:300}.filters{margin:0;padding:0;list-style:none;position:absolute;right:0;left:0}li{display:inline}li a{color:inherit;margin:3px;padding:3px 7px;text-decoration:none;border:1px solid transparent;border-radius:3px}a:hover{border-color:#db7676}a.selected{border-color:#ce4646}.clear-completed,:host .clear-completed:active{float:right;position:relative;line-height:19px;text-decoration:none;cursor:pointer}.clear-completed:hover{text-decoration:underline}`]}render(){if(void 0===this.todoList||0===this.todoList.all.length)return I;const t=Rt({text:"All",filter:"all",selectedFilter:this.todoList?.filter}),e=Rt({text:"Active",filter:"active",selectedFilter:this.todoList?.filter}),i=Rt({text:"Completed",filter:"completed",selectedFilter:this.todoList?.filter});return R`<span class="todo-count"><strong>${this.todoList?.active.length}</strong> items left</span><ul class="filters"><li>${t}</li><li>${e}</li><li>${i}</li></ul>${(this.todoList?.completed.length??0)>0?R`<button @click="${this.#g}" class="clear-completed">Clear Completed</button>`:I}`}#g(){this.dispatchEvent(new Tt)}};function Rt({text:t,filter:e,selectedFilter:i}){return R`<a class="${lt({selected:e===i})}" href="#/${e}">${t}</a>`}t([Ut("change"),ct({attribute:!1})],Mt.prototype,"todoList",void 0),Mt=t([at("todo-footer")],Mt);let zt=class extends et{static{this.styles=[ut,r`:host{display:block;background:#fff;margin:130px 0 40px 0;position:relative;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}h1{position:absolute;top:-140px;width:100%;font-size:80px;font-weight:200;text-align:center;color:#b83f45;-webkit-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;text-rendering:optimizeLegibility}main{position:relative;z-index:2;border-top:1px solid #e6e6e6}.hidden{display:none}:focus{box-shadow:none!important}`]}constructor(){super(),this.todoList=new mt,this.#f=t=>{this.todoList.add(t.text)},this.#m=t=>{this.todoList.delete(t.id)},this.#$=t=>{this.todoList.update(t.edit)},this.#b=t=>{this.todoList.toggleAll()},this.#v=t=>{this.todoList.clearCompleted()},this.addEventListener(Ct.eventName,this.#f),this.addEventListener(kt.eventName,this.#m),this.addEventListener(St.eventName,this.#$),this.addEventListener(Lt.eventName,this.#b),this.addEventListener(Tt.eventName,this.#v)}connectedCallback(){super.connectedCallback(),this.todoList.connect()}disconnectedCallback(){super.disconnectedCallback(),this.todoList.disconnect()}render(){return R`<section><header class="header"><h1>todos</h1><todo-form .todoList="${this.todoList}"></todo-form></header><main class="main"><todo-list class="show-priority" .todoList="${this.todoList}"></todo-list></main><todo-footer class="${lt({hidden:0===this.todoList.all.length})}" .todoList="${this.todoList}"></todo-footer></section>`}#f;#m;#$;#b;#v};t([Ut("change"),pt()],zt.prototype,"todoList",void 0),zt=t([at("todo-app")],zt);export{zt as TodoApp};

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ar(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function cr(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ce(s)?Cu(s):cr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ce(t))return t;if(ee(t))return t}}const mu=/;(?![^(]*\))/g,yu=/:([^]+)/,vu=/\/\*.*?\*\//gs;function Cu(t){const e={};return t.replace(vu,"").split(mu).forEach(n=>{if(n){const s=n.split(yu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ur(t){let e="";if(ce(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const s=ur(t[n]);s&&(e+=s+" ")}else if(ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Eu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bu=ar(Eu);function Wl(t){return!!t||t===""}const ss=t=>ce(t)?t:t==null?"":D(t)||ee(t)&&(t.toString===Kl||!k(t.toString))?JSON.stringify(t,$l,2):String(t),$l=(t,e)=>e&&e.__v_isRef?$l(t,e.value):Yt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:jl(e)?{[`Set(${e.size})`]:[...e.values()]}:ee(e)&&!D(e)&&!zl(e)?String(e):e,J={},Gt=[],We=()=>{},wu=()=>!1,Iu=/^on[^a-z]/,Us=t=>Iu.test(t),hr=t=>t.startsWith("onUpdate:"),ve=Object.assign,fr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Tu=Object.prototype.hasOwnProperty,$=(t,e)=>Tu.call(t,e),D=Array.isArray,Yt=t=>Hs(t)==="[object Map]",jl=t=>Hs(t)==="[object Set]",k=t=>typeof t=="function",ce=t=>typeof t=="string",dr=t=>typeof t=="symbol",ee=t=>t!==null&&typeof t=="object",Vl=t=>ee(t)&&k(t.then)&&k(t.catch),Kl=Object.prototype.toString,Hs=t=>Kl.call(t),Su=t=>Hs(t).slice(8,-1),zl=t=>Hs(t)==="[object Object]",pr=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fs=ar(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ws=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xu=/-(\w)/g,sn=Ws(t=>t.replace(xu,(e,n)=>n?n.toUpperCase():"")),Nu=/\B([A-Z])/g,hn=Ws(t=>t.replace(Nu,"-$1").toLowerCase()),ql=Ws(t=>t.charAt(0).toUpperCase()+t.slice(1)),ai=Ws(t=>t?`on${ql(t)}`:""),On=(t,e)=>!Object.is(t,e),ds=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ys=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ni=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vo;const Ru=()=>vo||(vo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Me;class Au{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Pu(t,e=Me){e&&e.active&&e.effects.push(t)}function Ou(){return Me}const _r=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Gl=t=>(t.w&gt)>0,Yl=t=>(t.n&gt)>0,Du=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gt},Mu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Gl(i)&&!Yl(i)?i.delete(t):e[n++]=i,i.w&=~gt,i.n&=~gt}e.length=n}},Ri=new WeakMap;let Tn=0,gt=1;const Ai=30;let Fe;const Dt=Symbol(""),Pi=Symbol("");class gr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pu(this,s)}run(){if(!this.active)return this.fn();let e=Fe,n=ut;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Fe,Fe=this,ut=!0,gt=1<<++Tn,Tn<=Ai?Du(this):Co(this),this.fn()}finally{Tn<=Ai&&Mu(this),gt=1<<--Tn,Fe=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Fe===this?this.deferStop=!0:this.active&&(Co(this),this.onStop&&this.onStop(),this.active=!1)}}function Co(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ut=!0;const Ql=[];function fn(){Ql.push(ut),ut=!1}function dn(){const t=Ql.pop();ut=t===void 0?!0:t}function Se(t,e,n){if(ut&&Fe){let s=Ri.get(t);s||Ri.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=_r()),Xl(i)}}function Xl(t,e){let n=!1;Tn<=Ai?Yl(t)||(t.n|=gt,n=!Gl(t)):n=!t.has(Fe),n&&(t.add(Fe),Fe.deps.push(t))}function tt(t,e,n,s,i,r){const o=Ri.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&D(t)){const a=Number(s);o.forEach((c,h)=>{(h==="length"||h>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":D(t)?pr(n)&&l.push(o.get("length")):(l.push(o.get(Dt)),Yt(t)&&l.push(o.get(Pi)));break;case"delete":D(t)||(l.push(o.get(Dt)),Yt(t)&&l.push(o.get(Pi)));break;case"set":Yt(t)&&l.push(o.get(Dt));break}if(l.length===1)l[0]&&Oi(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Oi(_r(a))}}function Oi(t,e){const n=D(t)?t:[...t];for(const s of n)s.computed&&Eo(s);for(const s of n)s.computed||Eo(s)}function Eo(t,e){(t!==Fe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ku=ar("__proto__,__v_isRef,__isVue"),Jl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(dr)),Fu=mr(),Lu=mr(!1,!0),Bu=mr(!0),bo=Uu();function Uu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=j(this);for(let r=0,o=this.length;r<o;r++)Se(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(j)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fn();const s=j(this)[e].apply(this,n);return dn(),s}}),t}function Hu(t){const e=j(this);return Se(e,"has",t),e.hasOwnProperty(t)}function mr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?nh:sa:e?na:ta).get(s))return s;const o=D(s);if(!t){if(o&&$(bo,i))return Reflect.get(bo,i,r);if(i==="hasOwnProperty")return Hu}const l=Reflect.get(s,i,r);return(dr(i)?Jl.has(i):ku(i))||(t||Se(s,"get",i),e)?l:ye(l)?o&&pr(i)?l:l.value:ee(l)?t?ia(l):Cr(l):l}}const Wu=Zl(),$u=Zl(!0);function Zl(t=!1){return function(n,s,i,r){let o=n[s];if(rn(o)&&ye(o)&&!ye(i))return!1;if(!t&&(!vs(i)&&!rn(i)&&(o=j(o),i=j(i)),!D(n)&&ye(o)&&!ye(i)))return o.value=i,!0;const l=D(n)&&pr(s)?Number(s)<n.length:$(n,s),a=Reflect.set(n,s,i,r);return n===j(r)&&(l?On(i,o)&&tt(n,"set",s,i):tt(n,"add",s,i)),a}}function ju(t,e){const n=$(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&tt(t,"delete",e,void 0),s}function Vu(t,e){const n=Reflect.has(t,e);return(!dr(e)||!Jl.has(e))&&Se(t,"has",e),n}function Ku(t){return Se(t,"iterate",D(t)?"length":Dt),Reflect.ownKeys(t)}const ea={get:Fu,set:Wu,deleteProperty:ju,has:Vu,ownKeys:Ku},zu={get:Bu,set(t,e){return!0},deleteProperty(t,e){return!0}},qu=ve({},ea,{get:Lu,set:$u}),yr=t=>t,$s=t=>Reflect.getPrototypeOf(t);function is(t,e,n=!1,s=!1){t=t.__v_raw;const i=j(t),r=j(e);n||(e!==r&&Se(i,"get",e),Se(i,"get",r));const{has:o}=$s(i),l=s?yr:n?br:Dn;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function rs(t,e=!1){const n=this.__v_raw,s=j(n),i=j(t);return e||(t!==i&&Se(s,"has",t),Se(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function os(t,e=!1){return t=t.__v_raw,!e&&Se(j(t),"iterate",Dt),Reflect.get(t,"size",t)}function wo(t){t=j(t);const e=j(this);return $s(e).has.call(e,t)||(e.add(t),tt(e,"add",t,t)),this}function Io(t,e){e=j(e);const n=j(this),{has:s,get:i}=$s(n);let r=s.call(n,t);r||(t=j(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?On(e,o)&&tt(n,"set",t,e):tt(n,"add",t,e),this}function To(t){const e=j(this),{has:n,get:s}=$s(e);let i=n.call(e,t);i||(t=j(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&tt(e,"delete",t,void 0),r}function So(){const t=j(this),e=t.size!==0,n=t.clear();return e&&tt(t,"clear",void 0,void 0),n}function ls(t,e){return function(s,i){const r=this,o=r.__v_raw,l=j(o),a=e?yr:t?br:Dn;return!t&&Se(l,"iterate",Dt),o.forEach((c,h)=>s.call(i,a(c),a(h),r))}}function as(t,e,n){return function(...s){const i=this.__v_raw,r=j(i),o=Yt(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),h=n?yr:e?br:Dn;return!e&&Se(r,"iterate",a?Pi:Dt),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:l?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return t==="delete"?!1:this}}function Gu(){const t={get(r){return is(this,r)},get size(){return os(this)},has:rs,add:wo,set:Io,delete:To,clear:So,forEach:ls(!1,!1)},e={get(r){return is(this,r,!1,!0)},get size(){return os(this)},has:rs,add:wo,set:Io,delete:To,clear:So,forEach:ls(!1,!0)},n={get(r){return is(this,r,!0)},get size(){return os(this,!0)},has(r){return rs.call(this,r,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:ls(!0,!1)},s={get(r){return is(this,r,!0,!0)},get size(){return os(this,!0)},has(r){return rs.call(this,r,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:ls(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=as(r,!1,!1),n[r]=as(r,!0,!1),e[r]=as(r,!1,!0),s[r]=as(r,!0,!0)}),[t,n,e,s]}const[Yu,Qu,Xu,Ju]=Gu();function vr(t,e){const n=e?t?Ju:Xu:t?Qu:Yu;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get($(n,i)&&i in s?n:s,i,r)}const Zu={get:vr(!1,!1)},eh={get:vr(!1,!0)},th={get:vr(!0,!1)},ta=new WeakMap,na=new WeakMap,sa=new WeakMap,nh=new WeakMap;function sh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ih(t){return t.__v_skip||!Object.isExtensible(t)?0:sh(Su(t))}function Cr(t){return rn(t)?t:Er(t,!1,ea,Zu,ta)}function rh(t){return Er(t,!1,qu,eh,na)}function ia(t){return Er(t,!0,zu,th,sa)}function Er(t,e,n,s,i){if(!ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=ih(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Qt(t){return rn(t)?Qt(t.__v_raw):!!(t&&t.__v_isReactive)}function rn(t){return!!(t&&t.__v_isReadonly)}function vs(t){return!!(t&&t.__v_isShallow)}function ra(t){return Qt(t)||rn(t)}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function oa(t){return ys(t,"__v_skip",!0),t}const Dn=t=>ee(t)?Cr(t):t,br=t=>ee(t)?ia(t):t;function la(t){ut&&Fe&&(t=j(t),Xl(t.dep||(t.dep=_r())))}function aa(t,e){t=j(t);const n=t.dep;n&&Oi(n)}function ye(t){return!!(t&&t.__v_isRef===!0)}function Cn(t){return oh(t,!1)}function oh(t,e){return ye(t)?t:new lh(t,e)}class lh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:j(e),this._value=n?e:Dn(e)}get value(){return la(this),this._value}set value(e){const n=this.__v_isShallow||vs(e)||rn(e);e=n?e:j(e),On(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Dn(e),aa(this))}}function ah(t){return ye(t)?t.value:t}const ch={get:(t,e,n)=>ah(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ye(i)&&!ye(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ca(t){return Qt(t)?t:new Proxy(t,ch)}var ua;class uh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ua]=!1,this._dirty=!0,this.effect=new gr(e,()=>{this._dirty||(this._dirty=!0,aa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=j(this);return la(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ua="__v_isReadonly";function hh(t,e,n=!1){let s,i;const r=k(t);return r?(s=t,i=We):(s=t.get,i=t.set),new uh(s,i,r||!i,n)}function ht(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){js(r,e,n)}return i}function Oe(t,e,n,s){if(k(t)){const r=ht(t,e,n,s);return r&&Vl(r)&&r.catch(o=>{js(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Oe(t[r],e,n,s));return i}function js(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){ht(a,null,10,[t,o,l]);return}}fh(t,n,i,s)}function fh(t,e,n,s=!0){console.error(t)}let Mn=!1,Di=!1;const me=[];let Ge=0;const Xt=[];let Xe=null,xt=0;const ha=Promise.resolve();let wr=null;function fa(t){const e=wr||ha;return t?e.then(this?t.bind(this):t):e}function dh(t){let e=Ge+1,n=me.length;for(;e<n;){const s=e+n>>>1;kn(me[s])<t?e=s+1:n=s}return e}function Ir(t){(!me.length||!me.includes(t,Mn&&t.allowRecurse?Ge+1:Ge))&&(t.id==null?me.push(t):me.splice(dh(t.id),0,t),da())}function da(){!Mn&&!Di&&(Di=!0,wr=ha.then(_a))}function ph(t){const e=me.indexOf(t);e>Ge&&me.splice(e,1)}function _h(t){D(t)?Xt.push(...t):(!Xe||!Xe.includes(t,t.allowRecurse?xt+1:xt))&&Xt.push(t),da()}function xo(t,e=Mn?Ge+1:0){for(;e<me.length;e++){const n=me[e];n&&n.pre&&(me.splice(e,1),e--,n())}}function pa(t){if(Xt.length){const e=[...new Set(Xt)];if(Xt.length=0,Xe){Xe.push(...e);return}for(Xe=e,Xe.sort((n,s)=>kn(n)-kn(s)),xt=0;xt<Xe.length;xt++)Xe[xt]();Xe=null,xt=0}}const kn=t=>t.id==null?1/0:t.id,gh=(t,e)=>{const n=kn(t)-kn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function _a(t){Di=!1,Mn=!0,me.sort(gh);const e=We;try{for(Ge=0;Ge<me.length;Ge++){const n=me[Ge];n&&n.active!==!1&&ht(n,null,14)}}finally{Ge=0,me.length=0,pa(),Mn=!1,wr=null,(me.length||Xt.length)&&_a()}}function mh(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||J;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:d}=s[h]||J;d&&(i=n.map(g=>ce(g)?g.trim():g)),u&&(i=n.map(Ni))}let l,a=s[l=ai(e)]||s[l=ai(sn(e))];!a&&r&&(a=s[l=ai(hn(e))]),a&&Oe(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Oe(c,t,6,i)}}function ga(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!k(t)){const a=c=>{const h=ga(c,e,!0);h&&(l=!0,ve(o,h))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ee(t)&&s.set(t,null),null):(D(r)?r.forEach(a=>o[a]=null):ve(o,r),ee(t)&&s.set(t,o),o)}function Vs(t,e){return!t||!Us(e)?!1:(e=e.slice(2).replace(/Once$/,""),$(t,e[0].toLowerCase()+e.slice(1))||$(t,hn(e))||$(t,e))}let Pe=null,ma=null;function Cs(t){const e=Pe;return Pe=t,ma=t&&t.type.__scopeId||null,e}function yh(t,e=Pe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Lo(-1);const r=Cs(e);let o;try{o=t(...i)}finally{Cs(r),s._d&&Lo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ci(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:h,renderCache:u,data:d,setupState:g,ctx:C,inheritAttrs:I}=t;let M,W;const oe=Cs(t);try{if(n.shapeFlag&4){const Z=i||s;M=qe(h.call(Z,Z,u,r,g,d,C)),W=a}else{const Z=e;M=qe(Z.length>1?Z(r,{attrs:a,slots:l,emit:c}):Z(r,null)),W=e.props?a:vh(a)}}catch(Z){xn.length=0,js(Z,t,1),M=ft(Ze)}let P=M;if(W&&I!==!1){const Z=Object.keys(W),{shapeFlag:_e}=P;Z.length&&_e&7&&(o&&Z.some(hr)&&(W=Ch(W,o)),P=mt(P,W))}return n.dirs&&(P=mt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),M=P,Cs(oe),M}const vh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Us(n))&&((e||(e={}))[n]=t[n]);return e},Ch=(t,e)=>{const n={};for(const s in t)(!hr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Eh(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?No(s,o,c):!!o;if(a&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==s[d]&&!Vs(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?No(s,o,c):!0:!!o;return!1}function No(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Vs(n,r))return!0}return!1}function bh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const wh=t=>t.__isSuspense;function Ih(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):_h(t)}function Th(t,e){if(re){let n=re.provides;const s=re.parent&&re.parent.provides;s===n&&(n=re.provides=Object.create(s)),n[t]=e}}function ps(t,e,n=!1){const s=re||Pe;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&k(e)?e.call(s.proxy):e}}function Sh(t,e){return Tr(t,null,e)}const cs={};function ui(t,e,n){return Tr(t,e,n)}function Tr(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=J){const l=Ou()===(re==null?void 0:re.scope)?re:null;let a,c=!1,h=!1;if(ye(t)?(a=()=>t.value,c=vs(t)):Qt(t)?(a=()=>t,s=!0):D(t)?(h=!0,c=t.some(P=>Qt(P)||vs(P)),a=()=>t.map(P=>{if(ye(P))return P.value;if(Qt(P))return At(P);if(k(P))return ht(P,l,2)})):k(t)?e?a=()=>ht(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return u&&u(),Oe(t,l,3,[d])}:a=We,e&&s){const P=a;a=()=>At(P())}let u,d=P=>{u=W.onStop=()=>{ht(P,l,4)}},g;if(Ln)if(d=We,e?n&&Oe(e,l,3,[a(),h?[]:void 0,d]):a(),i==="sync"){const P=Tf();g=P.__watcherHandles||(P.__watcherHandles=[])}else return We;let C=h?new Array(t.length).fill(cs):cs;const I=()=>{if(W.active)if(e){const P=W.run();(s||c||(h?P.some((Z,_e)=>On(Z,C[_e])):On(P,C)))&&(u&&u(),Oe(e,l,3,[P,C===cs?void 0:h&&C[0]===cs?[]:C,d]),C=P)}else W.run()};I.allowRecurse=!!e;let M;i==="sync"?M=I:i==="post"?M=()=>be(I,l&&l.suspense):(I.pre=!0,l&&(I.id=l.uid),M=()=>Ir(I));const W=new gr(a,M);e?n?I():C=W.run():i==="post"?be(W.run.bind(W),l&&l.suspense):W.run();const oe=()=>{W.stop(),l&&l.scope&&fr(l.scope.effects,W)};return g&&g.push(oe),oe}function xh(t,e,n){const s=this.proxy,i=ce(t)?t.includes(".")?ya(s,t):()=>s[t]:t.bind(s,s);let r;k(e)?r=e:(r=e.handler,n=e);const o=re;on(this);const l=Tr(i,r.bind(s),n);return o?on(o):Mt(),l}function ya(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function At(t,e){if(!ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ye(t))At(t.value,e);else if(D(t))for(let n=0;n<t.length;n++)At(t[n],e);else if(jl(t)||Yt(t))t.forEach(n=>{At(n,e)});else if(zl(t))for(const n in t)At(t[n],e);return t}function Nh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ba(()=>{t.isMounted=!0}),wa(()=>{t.isUnmounting=!0}),t}const Ae=[Function,Array],Rh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ae,onEnter:Ae,onAfterEnter:Ae,onEnterCancelled:Ae,onBeforeLeave:Ae,onLeave:Ae,onAfterLeave:Ae,onLeaveCancelled:Ae,onBeforeAppear:Ae,onAppear:Ae,onAfterAppear:Ae,onAppearCancelled:Ae},setup(t,{slots:e}){const n=mf(),s=Nh();let i;return()=>{const r=e.default&&Ca(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const I of r)if(I.type!==Ze){o=I;break}}const l=j(t),{mode:a}=l;if(s.isLeaving)return hi(o);const c=Ro(o);if(!c)return hi(o);const h=Mi(c,l,s,n);ki(c,h);const u=n.subTree,d=u&&Ro(u);let g=!1;const{getTransitionKey:C}=c.type;if(C){const I=C();i===void 0?i=I:I!==i&&(i=I,g=!0)}if(d&&d.type!==Ze&&(!Nt(c,d)||g)){const I=Mi(d,l,s,n);if(ki(d,I),a==="out-in")return s.isLeaving=!0,I.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},hi(o);a==="in-out"&&c.type!==Ze&&(I.delayLeave=(M,W,oe)=>{const P=va(s,d);P[String(d.key)]=d,M._leaveCb=()=>{W(),M._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=oe})}return o}}},Ah=Rh;function va(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Mi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:u,onLeave:d,onAfterLeave:g,onLeaveCancelled:C,onBeforeAppear:I,onAppear:M,onAfterAppear:W,onAppearCancelled:oe}=e,P=String(t.key),Z=va(n,t),_e=(U,ue)=>{U&&Oe(U,s,9,ue)},$t=(U,ue)=>{const te=ue[1];_e(U,ue),D(U)?U.every(Ne=>Ne.length<=1)&&te():U.length<=1&&te()},lt={mode:r,persisted:o,beforeEnter(U){let ue=l;if(!n.isMounted)if(i)ue=I||l;else return;U._leaveCb&&U._leaveCb(!0);const te=Z[P];te&&Nt(t,te)&&te.el._leaveCb&&te.el._leaveCb(),_e(ue,[U])},enter(U){let ue=a,te=c,Ne=h;if(!n.isMounted)if(i)ue=M||a,te=W||c,Ne=oe||h;else return;let je=!1;const Ye=U._enterCb=yn=>{je||(je=!0,yn?_e(Ne,[U]):_e(te,[U]),lt.delayedLeave&&lt.delayedLeave(),U._enterCb=void 0)};ue?$t(ue,[U,Ye]):Ye()},leave(U,ue){const te=String(t.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return ue();_e(u,[U]);let Ne=!1;const je=U._leaveCb=Ye=>{Ne||(Ne=!0,ue(),Ye?_e(C,[U]):_e(g,[U]),U._leaveCb=void 0,Z[te]===t&&delete Z[te])};Z[te]=t,d?$t(d,[U,je]):je()},clone(U){return Mi(U,e,n,s)}};return lt}function hi(t){if(Ks(t))return t=mt(t),t.children=null,t}function Ro(t){return Ks(t)?t.children?t.children[0]:void 0:t}function ki(t,e){t.shapeFlag&6&&t.component?ki(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ca(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ke?(o.patchFlag&128&&i++,s=s.concat(Ca(o.children,e,l))):(e||o.type!==Ze)&&s.push(l!=null?mt(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const _s=t=>!!t.type.__asyncLoader,Ks=t=>t.type.__isKeepAlive;function Ph(t,e){Ea(t,"a",e)}function Oh(t,e){Ea(t,"da",e)}function Ea(t,e,n=re){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(zs(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ks(i.parent.vnode)&&Dh(s,e,n,i),i=i.parent}}function Dh(t,e,n,s){const i=zs(e,t,s,!0);Ia(()=>{fr(s[e],i)},n)}function zs(t,e,n=re,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;fn(),on(n);const l=Oe(e,n,t,o);return Mt(),dn(),l});return s?i.unshift(r):i.push(r),r}}const it=t=>(e,n=re)=>(!Ln||t==="sp")&&zs(t,(...s)=>e(...s),n),Mh=it("bm"),ba=it("m"),kh=it("bu"),Fh=it("u"),wa=it("bum"),Ia=it("um"),Lh=it("sp"),Bh=it("rtg"),Uh=it("rtc");function Hh(t,e=re){zs("ec",t,e)}function Ao(t,e){const n=Pe;if(n===null)return t;const s=Ys(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=J]=e[r];o&&(k(o)&&(o={mounted:o,updated:o}),o.deep&&At(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function bt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(fn(),Oe(a,n,8,[t.el,l,t,e]),dn())}}const Wh=Symbol();function $h(t,e,n,s){let i;const r=n&&n[s];if(D(t)||ce(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Fi=t=>t?ka(t)?Ys(t)||t.proxy:Fi(t.parent):null,Sn=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fi(t.parent),$root:t=>Fi(t.root),$emit:t=>t.emit,$options:t=>Sr(t),$forceUpdate:t=>t.f||(t.f=()=>Ir(t.update)),$nextTick:t=>t.n||(t.n=fa.bind(t.proxy)),$watch:t=>xh.bind(t)}),fi=(t,e)=>t!==J&&!t.__isScriptSetup&&$(t,e),jh={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(fi(s,e))return o[e]=1,s[e];if(i!==J&&$(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&$(c,e))return o[e]=3,r[e];if(n!==J&&$(n,e))return o[e]=4,n[e];Li&&(o[e]=0)}}const h=Sn[e];let u,d;if(h)return e==="$attrs"&&Se(t,"get",e),h(t);if((u=l.__cssModules)&&(u=u[e]))return u;if(n!==J&&$(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,$(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return fi(i,e)?(i[e]=n,!0):s!==J&&$(s,e)?(s[e]=n,!0):$(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==J&&$(t,o)||fi(e,o)||(l=r[0])&&$(l,o)||$(s,o)||$(Sn,o)||$(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:$(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Li=!0;function Vh(t){const e=Sr(t),n=t.proxy,s=t.ctx;Li=!1,e.beforeCreate&&Po(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:g,updated:C,activated:I,deactivated:M,beforeDestroy:W,beforeUnmount:oe,destroyed:P,unmounted:Z,render:_e,renderTracked:$t,renderTriggered:lt,errorCaptured:U,serverPrefetch:ue,expose:te,inheritAttrs:Ne,components:je,directives:Ye,filters:yn}=e;if(c&&Kh(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ne in o){const q=o[ne];k(q)&&(s[ne]=q.bind(n))}if(i){const ne=i.call(n,n);ee(ne)&&(t.data=Cr(ne))}if(Li=!0,r)for(const ne in r){const q=r[ne],Ct=k(q)?q.bind(n,n):k(q.get)?q.get.bind(n,n):We,ts=!k(q)&&k(q.set)?q.set.bind(n):We,Et=wf({get:Ct,set:ts});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>Et.value,set:Ve=>Et.value=Ve})}if(l)for(const ne in l)Ta(l[ne],s,n,ne);if(a){const ne=k(a)?a.call(n):a;Reflect.ownKeys(ne).forEach(q=>{Th(q,ne[q])})}h&&Po(h,t,"c");function Ce(ne,q){D(q)?q.forEach(Ct=>ne(Ct.bind(n))):q&&ne(q.bind(n))}if(Ce(Mh,u),Ce(ba,d),Ce(kh,g),Ce(Fh,C),Ce(Ph,I),Ce(Oh,M),Ce(Hh,U),Ce(Uh,$t),Ce(Bh,lt),Ce(wa,oe),Ce(Ia,Z),Ce(Lh,ue),D(te))if(te.length){const ne=t.exposed||(t.exposed={});te.forEach(q=>{Object.defineProperty(ne,q,{get:()=>n[q],set:Ct=>n[q]=Ct})})}else t.exposed||(t.exposed={});_e&&t.render===We&&(t.render=_e),Ne!=null&&(t.inheritAttrs=Ne),je&&(t.components=je),Ye&&(t.directives=Ye)}function Kh(t,e,n=We,s=!1){D(t)&&(t=Bi(t));for(const i in t){const r=t[i];let o;ee(r)?"default"in r?o=ps(r.from||i,r.default,!0):o=ps(r.from||i):o=ps(r),ye(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Po(t,e,n){Oe(D(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ta(t,e,n,s){const i=s.includes(".")?ya(n,s):()=>n[s];if(ce(t)){const r=e[t];k(r)&&ui(i,r)}else if(k(t))ui(i,t.bind(n));else if(ee(t))if(D(t))t.forEach(r=>Ta(r,e,n,s));else{const r=k(t.handler)?t.handler.bind(n):e[t.handler];k(r)&&ui(i,r,t)}}function Sr(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Es(a,c,o,!0)),Es(a,e,o)),ee(e)&&r.set(e,a),a}function Es(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Es(t,r,n,!0),i&&i.forEach(o=>Es(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=zh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const zh={data:Oo,props:It,emits:It,methods:It,computed:It,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:It,directives:It,watch:Gh,provide:Oo,inject:qh};function Oo(t,e){return e?t?function(){return ve(k(t)?t.call(this,this):t,k(e)?e.call(this,this):e)}:e:t}function qh(t,e){return It(Bi(t),Bi(e))}function Bi(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ee(t,e){return t?[...new Set([].concat(t,e))]:e}function It(t,e){return t?ve(ve(Object.create(null),t),e):e}function Gh(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const s in e)n[s]=Ee(t[s],e[s]);return n}function Yh(t,e,n,s=!1){const i={},r={};ys(r,Gs,1),t.propsDefaults=Object.create(null),Sa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:rh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Qh(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=j(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Vs(t.emitsOptions,d))continue;const g=e[d];if(a)if($(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const C=sn(d);i[C]=Ui(a,l,C,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Sa(t,e,i,r)&&(c=!0);let h;for(const u in l)(!e||!$(e,u)&&((h=hn(u))===u||!$(e,h)))&&(a?n&&(n[u]!==void 0||n[h]!==void 0)&&(i[u]=Ui(a,l,u,void 0,t,!0)):delete i[u]);if(r!==l)for(const u in r)(!e||!$(e,u))&&(delete r[u],c=!0)}c&&tt(t,"set","$attrs")}function Sa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(fs(a))continue;const c=e[a];let h;i&&$(i,h=sn(a))?!r||!r.includes(h)?n[h]=c:(l||(l={}))[h]=c:Vs(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=j(n),c=l||J;for(let h=0;h<r.length;h++){const u=r[h];n[u]=Ui(i,a,u,c[u],t,!$(c,u))}}return o}function Ui(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=$(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&k(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(on(i),s=c[n]=a.call(null,e),Mt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===hn(n))&&(s=!0))}return s}function xa(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!k(t)){const h=u=>{a=!0;const[d,g]=xa(u,e,!0);ve(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!a)return ee(t)&&s.set(t,Gt),Gt;if(D(r))for(let h=0;h<r.length;h++){const u=sn(r[h]);Do(u)&&(o[u]=J)}else if(r)for(const h in r){const u=sn(h);if(Do(u)){const d=r[h],g=o[u]=D(d)||k(d)?{type:d}:Object.assign({},d);if(g){const C=Fo(Boolean,g.type),I=Fo(String,g.type);g[0]=C>-1,g[1]=I<0||C<I,(C>-1||$(g,"default"))&&l.push(u)}}}const c=[o,l];return ee(t)&&s.set(t,c),c}function Do(t){return t[0]!=="$"}function Mo(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ko(t,e){return Mo(t)===Mo(e)}function Fo(t,e){return D(e)?e.findIndex(n=>ko(n,t)):k(e)&&ko(e,t)?0:-1}const Na=t=>t[0]==="_"||t==="$stable",xr=t=>D(t)?t.map(qe):[qe(t)],Xh=(t,e,n)=>{if(e._n)return e;const s=yh((...i)=>xr(e(...i)),n);return s._c=!1,s},Ra=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Na(i))continue;const r=t[i];if(k(r))e[i]=Xh(i,r,s);else if(r!=null){const o=xr(r);e[i]=()=>o}}},Aa=(t,e)=>{const n=xr(e);t.slots.default=()=>n},Jh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=j(e),ys(e,"_",n)):Ra(e,t.slots={})}else t.slots={},e&&Aa(t,e);ys(t.slots,Gs,1)},Zh=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=J;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ve(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Ra(e,i)),o=e}else e&&(Aa(t,e),o={default:1});if(r)for(const l in i)!Na(l)&&!(l in o)&&delete i[l]};function Pa(){return{app:null,config:{isNativeTag:wu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ef=0;function tf(t,e){return function(s,i=null){k(s)||(s=Object.assign({},s)),i!=null&&!ee(i)&&(i=null);const r=Pa(),o=new Set;let l=!1;const a=r.app={_uid:ef++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Sf,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&k(c.install)?(o.add(c),c.install(a,...h)):k(c)&&(o.add(c),c(a,...h))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,h){return h?(r.components[c]=h,a):r.components[c]},directive(c,h){return h?(r.directives[c]=h,a):r.directives[c]},mount(c,h,u){if(!l){const d=ft(s,i);return d.appContext=r,h&&e?e(d,c):t(d,c,u),l=!0,a._container=c,c.__vue_app__=a,Ys(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,h){return r.provides[c]=h,a}};return a}}function Hi(t,e,n,s,i=!1){if(D(t)){t.forEach((d,g)=>Hi(d,e&&(D(e)?e[g]:e),n,s,i));return}if(_s(s)&&!i)return;const r=s.shapeFlag&4?Ys(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,h=l.refs===J?l.refs={}:l.refs,u=l.setupState;if(c!=null&&c!==a&&(ce(c)?(h[c]=null,$(u,c)&&(u[c]=null)):ye(c)&&(c.value=null)),k(a))ht(a,l,12,[o,h]);else{const d=ce(a),g=ye(a);if(d||g){const C=()=>{if(t.f){const I=d?$(u,a)?u[a]:h[a]:a.value;i?D(I)&&fr(I,r):D(I)?I.includes(r)||I.push(r):d?(h[a]=[r],$(u,a)&&(u[a]=h[a])):(a.value=[r],t.k&&(h[t.k]=a.value))}else d?(h[a]=o,$(u,a)&&(u[a]=o)):g&&(a.value=o,t.k&&(h[t.k]=o))};o?(C.id=-1,be(C,n)):C()}}}const be=Ih;function nf(t){return sf(t)}function sf(t,e){const n=Ru();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:g=We,insertStaticContent:C}=t,I=(f,p,_,y=null,m=null,w=null,S=!1,b=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Nt(f,p)&&(y=ns(f),Ve(f,m,w,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:v,ref:N,shapeFlag:x}=p;switch(v){case qs:M(f,p,_,y);break;case Ze:W(f,p,_,y);break;case di:f==null&&oe(p,_,y,S);break;case ke:je(f,p,_,y,m,w,S,b,T);break;default:x&1?_e(f,p,_,y,m,w,S,b,T):x&6?Ye(f,p,_,y,m,w,S,b,T):(x&64||x&128)&&v.process(f,p,_,y,m,w,S,b,T,jt)}N!=null&&m&&Hi(N,f&&f.ref,w,p||f,!p)},M=(f,p,_,y)=>{if(f==null)s(p.el=l(p.children),_,y);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},W=(f,p,_,y)=>{f==null?s(p.el=a(p.children||""),_,y):p.el=f.el},oe=(f,p,_,y)=>{[f.el,f.anchor]=C(f.children,p,_,y,f.el,f.anchor)},P=({el:f,anchor:p},_,y)=>{let m;for(;f&&f!==p;)m=d(f),s(f,_,y),f=m;s(p,_,y)},Z=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},_e=(f,p,_,y,m,w,S,b,T)=>{S=S||p.type==="svg",f==null?$t(p,_,y,m,w,S,b,T):ue(f,p,m,w,S,b,T)},$t=(f,p,_,y,m,w,S,b)=>{let T,v;const{type:N,props:x,shapeFlag:R,transition:O,dirs:H}=f;if(T=f.el=o(f.type,w,x&&x.is,x),R&8?h(T,f.children):R&16&&U(f.children,T,null,y,m,w&&N!=="foreignObject",S,b),H&&bt(f,null,y,"created"),lt(T,f,f.scopeId,S,y),x){for(const K in x)K!=="value"&&!fs(K)&&r(T,K,null,x[K],w,f.children,y,m,Qe);"value"in x&&r(T,"value",null,x.value),(v=x.onVnodeBeforeMount)&&ze(v,y,f)}H&&bt(f,null,y,"beforeMount");const G=(!m||m&&!m.pendingBranch)&&O&&!O.persisted;G&&O.beforeEnter(T),s(T,p,_),((v=x&&x.onVnodeMounted)||G||H)&&be(()=>{v&&ze(v,y,f),G&&O.enter(T),H&&bt(f,null,y,"mounted")},m)},lt=(f,p,_,y,m)=>{if(_&&g(f,_),y)for(let w=0;w<y.length;w++)g(f,y[w]);if(m){let w=m.subTree;if(p===w){const S=m.vnode;lt(f,S,S.scopeId,S.slotScopeIds,m.parent)}}},U=(f,p,_,y,m,w,S,b,T=0)=>{for(let v=T;v<f.length;v++){const N=f[v]=b?ct(f[v]):qe(f[v]);I(null,N,p,_,y,m,w,S,b)}},ue=(f,p,_,y,m,w,S)=>{const b=p.el=f.el;let{patchFlag:T,dynamicChildren:v,dirs:N}=p;T|=f.patchFlag&16;const x=f.props||J,R=p.props||J;let O;_&&wt(_,!1),(O=R.onVnodeBeforeUpdate)&&ze(O,_,p,f),N&&bt(p,f,_,"beforeUpdate"),_&&wt(_,!0);const H=m&&p.type!=="foreignObject";if(v?te(f.dynamicChildren,v,b,_,y,H,w):S||q(f,p,b,null,_,y,H,w,!1),T>0){if(T&16)Ne(b,p,x,R,_,y,m);else if(T&2&&x.class!==R.class&&r(b,"class",null,R.class,m),T&4&&r(b,"style",x.style,R.style,m),T&8){const G=p.dynamicProps;for(let K=0;K<G.length;K++){const ie=G[K],De=x[ie],Vt=R[ie];(Vt!==De||ie==="value")&&r(b,ie,De,Vt,m,f.children,_,y,Qe)}}T&1&&f.children!==p.children&&h(b,p.children)}else!S&&v==null&&Ne(b,p,x,R,_,y,m);((O=R.onVnodeUpdated)||N)&&be(()=>{O&&ze(O,_,p,f),N&&bt(p,f,_,"updated")},y)},te=(f,p,_,y,m,w,S)=>{for(let b=0;b<p.length;b++){const T=f[b],v=p[b],N=T.el&&(T.type===ke||!Nt(T,v)||T.shapeFlag&70)?u(T.el):_;I(T,v,N,null,y,m,w,S,!0)}},Ne=(f,p,_,y,m,w,S)=>{if(_!==y){if(_!==J)for(const b in _)!fs(b)&&!(b in y)&&r(f,b,_[b],null,S,p.children,m,w,Qe);for(const b in y){if(fs(b))continue;const T=y[b],v=_[b];T!==v&&b!=="value"&&r(f,b,v,T,S,p.children,m,w,Qe)}"value"in y&&r(f,"value",_.value,y.value)}},je=(f,p,_,y,m,w,S,b,T)=>{const v=p.el=f?f.el:l(""),N=p.anchor=f?f.anchor:l("");let{patchFlag:x,dynamicChildren:R,slotScopeIds:O}=p;O&&(b=b?b.concat(O):O),f==null?(s(v,_,y),s(N,_,y),U(p.children,_,N,m,w,S,b,T)):x>0&&x&64&&R&&f.dynamicChildren?(te(f.dynamicChildren,R,_,m,w,S,b),(p.key!=null||m&&p===m.subTree)&&Oa(f,p,!0)):q(f,p,_,N,m,w,S,b,T)},Ye=(f,p,_,y,m,w,S,b,T)=>{p.slotScopeIds=b,f==null?p.shapeFlag&512?m.ctx.activate(p,_,y,S,T):yn(p,_,y,m,w,S,T):fo(f,p,T)},yn=(f,p,_,y,m,w,S)=>{const b=f.component=gf(f,y,m);if(Ks(f)&&(b.ctx.renderer=jt),yf(b),b.asyncDep){if(m&&m.registerDep(b,Ce),!f.el){const T=b.subTree=ft(Ze);W(null,T,p,_)}return}Ce(b,f,p,_,m,w,S)},fo=(f,p,_)=>{const y=p.component=f.component;if(Eh(f,p,_))if(y.asyncDep&&!y.asyncResolved){ne(y,p,_);return}else y.next=p,ph(y.update),y.update();else p.el=f.el,y.vnode=p},Ce=(f,p,_,y,m,w,S)=>{const b=()=>{if(f.isMounted){let{next:N,bu:x,u:R,parent:O,vnode:H}=f,G=N,K;wt(f,!1),N?(N.el=H.el,ne(f,N,S)):N=H,x&&ds(x),(K=N.props&&N.props.onVnodeBeforeUpdate)&&ze(K,O,N,H),wt(f,!0);const ie=ci(f),De=f.subTree;f.subTree=ie,I(De,ie,u(De.el),ns(De),f,m,w),N.el=ie.el,G===null&&bh(f,ie.el),R&&be(R,m),(K=N.props&&N.props.onVnodeUpdated)&&be(()=>ze(K,O,N,H),m)}else{let N;const{el:x,props:R}=p,{bm:O,m:H,parent:G}=f,K=_s(p);if(wt(f,!1),O&&ds(O),!K&&(N=R&&R.onVnodeBeforeMount)&&ze(N,G,p),wt(f,!0),x&&li){const ie=()=>{f.subTree=ci(f),li(x,f.subTree,f,m,null)};K?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ie()):ie()}else{const ie=f.subTree=ci(f);I(null,ie,_,y,f,m,w),p.el=ie.el}if(H&&be(H,m),!K&&(N=R&&R.onVnodeMounted)){const ie=p;be(()=>ze(N,G,ie),m)}(p.shapeFlag&256||G&&_s(G.vnode)&&G.vnode.shapeFlag&256)&&f.a&&be(f.a,m),f.isMounted=!0,p=_=y=null}},T=f.effect=new gr(b,()=>Ir(v),f.scope),v=f.update=()=>T.run();v.id=f.uid,wt(f,!0),v()},ne=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Qh(f,p.props,y,_),Zh(f,p.children,_),fn(),xo(),dn()},q=(f,p,_,y,m,w,S,b,T=!1)=>{const v=f&&f.children,N=f?f.shapeFlag:0,x=p.children,{patchFlag:R,shapeFlag:O}=p;if(R>0){if(R&128){ts(v,x,_,y,m,w,S,b,T);return}else if(R&256){Ct(v,x,_,y,m,w,S,b,T);return}}O&8?(N&16&&Qe(v,m,w),x!==v&&h(_,x)):N&16?O&16?ts(v,x,_,y,m,w,S,b,T):Qe(v,m,w,!0):(N&8&&h(_,""),O&16&&U(x,_,y,m,w,S,b,T))},Ct=(f,p,_,y,m,w,S,b,T)=>{f=f||Gt,p=p||Gt;const v=f.length,N=p.length,x=Math.min(v,N);let R;for(R=0;R<x;R++){const O=p[R]=T?ct(p[R]):qe(p[R]);I(f[R],O,_,null,m,w,S,b,T)}v>N?Qe(f,m,w,!0,!1,x):U(p,_,y,m,w,S,b,T,x)},ts=(f,p,_,y,m,w,S,b,T)=>{let v=0;const N=p.length;let x=f.length-1,R=N-1;for(;v<=x&&v<=R;){const O=f[v],H=p[v]=T?ct(p[v]):qe(p[v]);if(Nt(O,H))I(O,H,_,null,m,w,S,b,T);else break;v++}for(;v<=x&&v<=R;){const O=f[x],H=p[R]=T?ct(p[R]):qe(p[R]);if(Nt(O,H))I(O,H,_,null,m,w,S,b,T);else break;x--,R--}if(v>x){if(v<=R){const O=R+1,H=O<N?p[O].el:y;for(;v<=R;)I(null,p[v]=T?ct(p[v]):qe(p[v]),_,H,m,w,S,b,T),v++}}else if(v>R)for(;v<=x;)Ve(f[v],m,w,!0),v++;else{const O=v,H=v,G=new Map;for(v=H;v<=R;v++){const Re=p[v]=T?ct(p[v]):qe(p[v]);Re.key!=null&&G.set(Re.key,v)}let K,ie=0;const De=R-H+1;let Vt=!1,go=0;const vn=new Array(De);for(v=0;v<De;v++)vn[v]=0;for(v=O;v<=x;v++){const Re=f[v];if(ie>=De){Ve(Re,m,w,!0);continue}let Ke;if(Re.key!=null)Ke=G.get(Re.key);else for(K=H;K<=R;K++)if(vn[K-H]===0&&Nt(Re,p[K])){Ke=K;break}Ke===void 0?Ve(Re,m,w,!0):(vn[Ke-H]=v+1,Ke>=go?go=Ke:Vt=!0,I(Re,p[Ke],_,null,m,w,S,b,T),ie++)}const mo=Vt?rf(vn):Gt;for(K=mo.length-1,v=De-1;v>=0;v--){const Re=H+v,Ke=p[Re],yo=Re+1<N?p[Re+1].el:y;vn[v]===0?I(null,Ke,_,yo,m,w,S,b,T):Vt&&(K<0||v!==mo[K]?Et(Ke,_,yo,2):K--)}}},Et=(f,p,_,y,m=null)=>{const{el:w,type:S,transition:b,children:T,shapeFlag:v}=f;if(v&6){Et(f.component.subTree,p,_,y);return}if(v&128){f.suspense.move(p,_,y);return}if(v&64){S.move(f,p,_,jt);return}if(S===ke){s(w,p,_);for(let x=0;x<T.length;x++)Et(T[x],p,_,y);s(f.anchor,p,_);return}if(S===di){P(f,p,_);return}if(y!==2&&v&1&&b)if(y===0)b.beforeEnter(w),s(w,p,_),be(()=>b.enter(w),m);else{const{leave:x,delayLeave:R,afterLeave:O}=b,H=()=>s(w,p,_),G=()=>{x(w,()=>{H(),O&&O()})};R?R(w,H,G):G()}else s(w,p,_)},Ve=(f,p,_,y=!1,m=!1)=>{const{type:w,props:S,ref:b,children:T,dynamicChildren:v,shapeFlag:N,patchFlag:x,dirs:R}=f;if(b!=null&&Hi(b,null,_,f,!0),N&256){p.ctx.deactivate(f);return}const O=N&1&&R,H=!_s(f);let G;if(H&&(G=S&&S.onVnodeBeforeUnmount)&&ze(G,p,f),N&6)gu(f.component,_,y);else{if(N&128){f.suspense.unmount(_,y);return}O&&bt(f,null,p,"beforeUnmount"),N&64?f.type.remove(f,p,_,m,jt,y):v&&(w!==ke||x>0&&x&64)?Qe(v,p,_,!1,!0):(w===ke&&x&384||!m&&N&16)&&Qe(T,p,_),y&&po(f)}(H&&(G=S&&S.onVnodeUnmounted)||O)&&be(()=>{G&&ze(G,p,f),O&&bt(f,null,p,"unmounted")},_)},po=f=>{const{type:p,el:_,anchor:y,transition:m}=f;if(p===ke){_u(_,y);return}if(p===di){Z(f);return}const w=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:b}=m,T=()=>S(_,w);b?b(f.el,w,T):T()}else w()},_u=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},gu=(f,p,_)=>{const{bum:y,scope:m,update:w,subTree:S,um:b}=f;y&&ds(y),m.stop(),w&&(w.active=!1,Ve(S,f,p,_)),b&&be(b,p),be(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Qe=(f,p,_,y=!1,m=!1,w=0)=>{for(let S=w;S<f.length;S++)Ve(f[S],p,_,y,m)},ns=f=>f.shapeFlag&6?ns(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),_o=(f,p,_)=>{f==null?p._vnode&&Ve(p._vnode,null,null,!0):I(p._vnode||null,f,p,null,null,null,_),xo(),pa(),p._vnode=f},jt={p:I,um:Ve,m:Et,r:po,mt:yn,mc:U,pc:q,pbc:te,n:ns,o:t};let oi,li;return e&&([oi,li]=e(jt)),{render:_o,hydrate:oi,createApp:tf(_o,oi)}}function wt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Oa(t,e,n=!1){const s=t.children,i=e.children;if(D(s)&&D(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=ct(i[r]),l.el=o.el),n||Oa(o,l)),l.type===qs&&(l.el=o.el)}}function rf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const of=t=>t.__isTeleport,ke=Symbol(void 0),qs=Symbol(void 0),Ze=Symbol(void 0),di=Symbol(void 0),xn=[];let Be=null;function gs(t=!1){xn.push(Be=t?null:[])}function lf(){xn.pop(),Be=xn[xn.length-1]||null}let Fn=1;function Lo(t){Fn+=t}function Da(t){return t.dynamicChildren=Fn>0?Be||Gt:null,lf(),Fn>0&&Be&&Be.push(t),t}function pi(t,e,n,s,i,r){return Da(le(t,e,n,s,i,r,!0))}function af(t,e,n,s,i){return Da(ft(t,e,n,s,i,!0))}function cf(t){return t?t.__v_isVNode===!0:!1}function Nt(t,e){return t.type===e.type&&t.key===e.key}const Gs="__vInternal",Ma=({key:t})=>t??null,ms=({ref:t,ref_key:e,ref_for:n})=>t!=null?ce(t)||ye(t)||k(t)?{i:Pe,r:t,k:e,f:!!n}:t:null;function le(t,e=null,n=null,s=0,i=null,r=t===ke?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ma(e),ref:e&&ms(e),scopeId:ma,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Pe};return l?(Nr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ce(n)?8:16),Fn>0&&!o&&Be&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Be.push(a),a}const ft=uf;function uf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Wh)&&(t=Ze),cf(t)){const l=mt(t,e,!0);return n&&Nr(l,n),Fn>0&&!r&&Be&&(l.shapeFlag&6?Be[Be.indexOf(t)]=l:Be.push(l)),l.patchFlag|=-2,l}if(bf(t)&&(t=t.__vccOpts),e){e=hf(e);let{class:l,style:a}=e;l&&!ce(l)&&(e.class=ur(l)),ee(a)&&(ra(a)&&!D(a)&&(a=ve({},a)),e.style=cr(a))}const o=ce(t)?1:wh(t)?128:of(t)?64:ee(t)?4:k(t)?2:0;return le(t,e,n,s,i,o,r,!0)}function hf(t){return t?ra(t)||Gs in t?ve({},t):t:null}function mt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?df(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ma(l),ref:e&&e.ref?n&&i?D(i)?i.concat(ms(e)):[i,ms(e)]:ms(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mt(t.ssContent),ssFallback:t.ssFallback&&mt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ff(t=" ",e=0){return ft(qs,null,t,e)}function qe(t){return t==null||typeof t=="boolean"?ft(Ze):D(t)?ft(ke,null,t.slice()):typeof t=="object"?ct(t):ft(qs,null,String(t))}function ct(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mt(t)}function Nr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Nr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Gs in e)?e._ctx=Pe:i===3&&Pe&&(Pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else k(e)?(e={default:e,_ctx:Pe},n=32):(e=String(e),s&64?(n=16,e=[ff(e)]):n=8);t.children=e,t.shapeFlag|=n}function df(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ur([e.class,s.class]));else if(i==="style")e.style=cr([e.style,s.style]);else if(Us(i)){const r=e[i],o=s[i];o&&r!==o&&!(D(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ze(t,e,n,s=null){Oe(t,e,7,[n,s])}const pf=Pa();let _f=0;function gf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||pf,r={uid:_f++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Au(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xa(s,i),emitsOptions:ga(s,i),emit:null,emitted:null,propsDefaults:J,inheritAttrs:s.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=mh.bind(null,r),t.ce&&t.ce(r),r}let re=null;const mf=()=>re||Pe,on=t=>{re=t,t.scope.on()},Mt=()=>{re&&re.scope.off(),re=null};function ka(t){return t.vnode.shapeFlag&4}let Ln=!1;function yf(t,e=!1){Ln=e;const{props:n,children:s}=t.vnode,i=ka(t);Yh(t,n,i,e),Jh(t,s);const r=i?vf(t,e):void 0;return Ln=!1,r}function vf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=oa(new Proxy(t.ctx,jh));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Ef(t):null;on(t),fn();const r=ht(s,t,0,[t.props,i]);if(dn(),Mt(),Vl(r)){if(r.then(Mt,Mt),e)return r.then(o=>{Bo(t,o,e)}).catch(o=>{js(o,t,0)});t.asyncDep=r}else Bo(t,r,e)}else Fa(t,e)}function Bo(t,e,n){k(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ee(e)&&(t.setupState=ca(e)),Fa(t,n)}let Uo;function Fa(t,e,n){const s=t.type;if(!t.render){if(!e&&Uo&&!s.render){const i=s.template||Sr(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=ve(ve({isCustomElement:r,delimiters:l},o),a);s.render=Uo(i,c)}}t.render=s.render||We}on(t),fn(),Vh(t),dn(),Mt()}function Cf(t){return new Proxy(t.attrs,{get(e,n){return Se(t,"get","$attrs"),e[n]}})}function Ef(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Cf(t))},slots:t.slots,emit:t.emit,expose:e}}function Ys(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ca(oa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Sn)return Sn[n](t)},has(e,n){return n in e||n in Sn}}))}function bf(t){return k(t)&&"__vccOpts"in t}const wf=(t,e)=>hh(t,e,Ln),If=Symbol(""),Tf=()=>ps(If),Sf="3.2.47",xf="http://www.w3.org/2000/svg",Rt=typeof document<"u"?document:null,Ho=Rt&&Rt.createElement("template"),Nf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Rt.createElementNS(xf,t):Rt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Rt.createTextNode(t),createComment:t=>Rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ho.innerHTML=s?`<svg>${t}</svg>`:t;const l=Ho.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Rf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Af(t,e,n){const s=t.style,i=ce(n);if(n&&!i){if(e&&!ce(e))for(const r in e)n[r]==null&&Wi(s,r,"");for(const r in n)Wi(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Wo=/\s*!important$/;function Wi(t,e,n){if(D(n))n.forEach(s=>Wi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Pf(t,e);Wo.test(n)?t.setProperty(hn(s),n.replace(Wo,""),"important"):t[s]=n}}const $o=["Webkit","Moz","ms"],_i={};function Pf(t,e){const n=_i[e];if(n)return n;let s=sn(e);if(s!=="filter"&&s in t)return _i[e]=s;s=ql(s);for(let i=0;i<$o.length;i++){const r=$o[i]+s;if(r in t)return _i[e]=r}return e}const jo="http://www.w3.org/1999/xlink";function Of(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(jo,e.slice(6,e.length)):t.setAttributeNS(jo,e,n);else{const r=bu(e);n==null||r&&!Wl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Df(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n??"";(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Wl(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function zt(t,e,n,s){t.addEventListener(e,n,s)}function Mf(t,e,n,s){t.removeEventListener(e,n,s)}function kf(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Ff(e);if(s){const c=r[e]=Uf(s,i);zt(t,l,c,a)}else o&&(Mf(t,l,o,a),r[e]=void 0)}}const Vo=/(?:Once|Passive|Capture)$/;function Ff(t){let e;if(Vo.test(t)){e={};let s;for(;s=t.match(Vo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hn(t.slice(2)),e]}let gi=0;const Lf=Promise.resolve(),Bf=()=>gi||(Lf.then(()=>gi=0),gi=Date.now());function Uf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Oe(Hf(s,n.value),e,5,[s])};return n.value=t,n.attached=Bf(),n}function Hf(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ko=/^on[a-z]/,Wf=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Rf(t,s,i):e==="style"?Af(t,n,s):Us(e)?hr(e)||kf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$f(t,e,s,i))?Df(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Of(t,e,s,i))};function $f(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ko.test(e)&&k(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ko.test(e)&&ce(n)?!1:e in t}const jf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ah.props;const zo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?n=>ds(e,n):e};function Vf(t){t.target.composing=!0}function qo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Go={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=zo(i);const r=s||i.props&&i.props.type==="number";zt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Ni(l)),t._assign(l)}),n&&zt(t,"change",()=>{t.value=t.value.trim()}),e||(zt(t,"compositionstart",Vf),zt(t,"compositionend",qo),zt(t,"change",qo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=zo(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ni(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Kf=["ctrl","shift","alt","meta"],zf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Kf.some(n=>t[`${n}Key`]&&!e.includes(n))},Yo=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=zf[e[i]];if(r&&r(n,e))return}return t(n,...s)},qf=ve({patchProp:Wf},Nf);let Qo;function Gf(){return Qo||(Qo=nf(qf))}const Yf=(...t)=>{const e=Gf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Qf(s);if(!i)return;const r=e._component;!k(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Qf(t){return ce(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw pn(e)},pn=function(t){return new Error("Firebase Database ("+La.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Rr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,h=r>>2,u=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),s.push(n[h],n[u],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ba(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||u==null)throw Error();const d=r<<2|l>>4;if(s.push(d),c!==64){const g=l<<4&240|c>>2;if(s.push(g),u!==64){const C=c<<6&192|u;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ua=function(t){const e=Ba(t);return Rr.encodeByteArray(e,!0)},bs=function(t){return Ua(t).replace(/\./g,"")},$i=function(t){try{return Rr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t){return Ha(void 0,t)}function Ha(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Zf(n)||(t[n]=Ha(t[n],e[n]));return t}function Zf(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=()=>ed().__FIREBASE_DEFAULTS__,nd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$i(t[1]);return e&&JSON.parse(e)},Wa=()=>{try{return td()||nd()||sd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},id=t=>{var e,n;return(n=(e=Wa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rd=t=>{const e=id(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},od=()=>{var t;return(t=Wa())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[bs(JSON.stringify(n)),bs(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $a(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ad())}function cd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ja(){return La.NODE_ADMIN===!0}function ud(){try{return typeof indexedDB=="object"}catch{return!1}}function hd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="FirebaseError";class Gn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=fd,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Va.prototype.create)}}class Va{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?dd(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Gn(i,l,s)}}function dd(t,e){return t.replace(pd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const pd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t){return JSON.parse(t)}function de(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Bn($i(r[0])||""),n=Bn($i(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},_d=function(t){const e=Ka(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},gd=function(t){const e=Ka(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ln(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Xo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ws(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ji(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Jo(r)&&Jo(o)){if(!ji(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Jo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=l^r&(o^l),h=1518500249):(c=r^o^l,h=1859775393):u<60?(c=r&o|l&(r|o),h=2400959708):(c=r^o^l,h=3395469782);const d=(i<<5|i>>>27)+c+a+h+s[u]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ar(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xs=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t){return t&&t._delegate?t._delegate:t}class Un{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Qs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bd(e))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tt){return this.instances.has(e)}getOptions(e=Tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ed(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Tt){return this.component?this.component.multipleInstances?e:Tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ed(t){return t===Tt?void 0:t}function bd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Id={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Td=Y.INFO,Sd={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},xd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Sd[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class za{constructor(e){this.name=e,this._logLevel=Td,this._logHandler=xd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Id[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Nd=(t,e)=>e.some(n=>t instanceof n);let Zo,el;function Rd(){return Zo||(Zo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ad(){return el||(el=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qa=new WeakMap,Vi=new WeakMap,Ga=new WeakMap,mi=new WeakMap,Pr=new WeakMap;function Pd(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(dt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qa.set(n,t)}).catch(()=>{}),Pr.set(e,t),e}function Od(t){if(Vi.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Vi.set(t,e)}let Ki={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ga.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dd(t){Ki=t(Ki)}function Md(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(yi(this),e,...n);return Ga.set(s,e.sort?e.sort():[e]),dt(s)}:Ad().includes(t)?function(...e){return t.apply(yi(this),e),dt(qa.get(this))}:function(...e){return dt(t.apply(yi(this),e))}}function kd(t){return typeof t=="function"?Md(t):(t instanceof IDBTransaction&&Od(t),Nd(t,Rd())?new Proxy(t,Ki):t)}function dt(t){if(t instanceof IDBRequest)return Pd(t);if(mi.has(t))return mi.get(t);const e=kd(t);return e!==t&&(mi.set(t,e),Pr.set(e,t)),e}const yi=t=>Pr.get(t);function Fd(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=dt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(dt(o.result),a.oldVersion,a.newVersion,dt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Ld=["get","getKey","getAll","getAllKeys","count"],Bd=["put","add","delete","clear"],vi=new Map;function tl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vi.get(e))return vi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Bd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ld.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return vi.set(e,r),r}Dd(t=>({...t,get:(e,n,s)=>tl(e,n)||t.get(e,n,s),has:(e,n)=>!!tl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Hd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zi="@firebase/app",nl="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new za("@firebase/app"),Wd="@firebase/app-compat",$d="@firebase/analytics-compat",jd="@firebase/analytics",Vd="@firebase/app-check-compat",Kd="@firebase/app-check",zd="@firebase/auth",qd="@firebase/auth-compat",Gd="@firebase/database",Yd="@firebase/database-compat",Qd="@firebase/functions",Xd="@firebase/functions-compat",Jd="@firebase/installations",Zd="@firebase/installations-compat",ep="@firebase/messaging",tp="@firebase/messaging-compat",np="@firebase/performance",sp="@firebase/performance-compat",ip="@firebase/remote-config",rp="@firebase/remote-config-compat",op="@firebase/storage",lp="@firebase/storage-compat",ap="@firebase/firestore",cp="@firebase/firestore-compat",up="firebase",hp="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="[DEFAULT]",fp={[zi]:"fire-core",[Wd]:"fire-core-compat",[jd]:"fire-analytics",[$d]:"fire-analytics-compat",[Kd]:"fire-app-check",[Vd]:"fire-app-check-compat",[zd]:"fire-auth",[qd]:"fire-auth-compat",[Gd]:"fire-rtdb",[Yd]:"fire-rtdb-compat",[Qd]:"fire-fn",[Xd]:"fire-fn-compat",[Jd]:"fire-iid",[Zd]:"fire-iid-compat",[ep]:"fire-fcm",[tp]:"fire-fcm-compat",[np]:"fire-perf",[sp]:"fire-perf-compat",[ip]:"fire-rc",[rp]:"fire-rc-compat",[op]:"fire-gcs",[lp]:"fire-gcs-compat",[ap]:"fire-fst",[cp]:"fire-fst-compat","fire-js":"fire-js",[up]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Map,Gi=new Map;function dp(t,e){try{t.container.addComponent(e)}catch(n){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ts(t){const e=t.name;if(Gi.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;Gi.set(e,t);for(const n of Is.values())dp(n,t);return!0}function pp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pt=new Va("app","Firebase",_p);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=hp;function Ya(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:qi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw pt.create("bad-app-name",{appName:String(i)});if(n||(n=od()),!n)throw pt.create("no-options");const r=Is.get(i);if(r){if(ji(n,r.options)&&ji(s,r.config))return r;throw pt.create("duplicate-app",{appName:i})}const o=new wd(i);for(const a of Gi.values())o.addComponent(a);const l=new gp(n,s,o);return Is.set(i,l),l}function yp(t=qi){const e=Is.get(t);if(!e&&t===qi)return Ya();if(!e)throw pt.create("no-app",{appName:t});return e}function Jt(t,e,n){var s;let i=(s=fp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(l.join(" "));return}Ts(new Un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="firebase-heartbeat-database",Cp=1,Hn="firebase-heartbeat-store";let Ci=null;function Qa(){return Ci||(Ci=Fd(vp,Cp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hn)}}}).catch(t=>{throw pt.create("idb-open",{originalErrorMessage:t.message})})),Ci}async function Ep(t){try{return(await Qa()).transaction(Hn).objectStore(Hn).get(Xa(t))}catch(e){if(e instanceof Gn)Ft.warn(e.message);else{const n=pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(n.message)}}}async function sl(t,e){try{const s=(await Qa()).transaction(Hn,"readwrite");return await s.objectStore(Hn).put(e,Xa(t)),s.done}catch(n){if(n instanceof Gn)Ft.warn(n.message);else{const s=pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ft.warn(s.message)}}}function Xa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=1024,wp=30*24*60*60*1e3;class Ip{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=il();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=wp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=il(),{heartbeatsToSend:n,unsentEntries:s}=Tp(this._heartbeatsCache.heartbeats),i=bs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function il(){return new Date().toISOString().substring(0,10)}function Tp(t,e=bp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),rl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Sp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ud()?hd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ep(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rl(t){return bs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t){Ts(new Un("platform-logger",e=>new Ud(e),"PRIVATE")),Ts(new Un("heartbeat",e=>new Ip(e),"PRIVATE")),Jt(zi,nl,t),Jt(zi,nl,"esm2017"),Jt("fire-js","")}xp("");var Np="firebase",Rp="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(Np,Rp,"app");const ol="@firebase/database",ll="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja="";function Ap(t){Ja=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Pp(e)}}catch{}return new Op},Pt=Za("localStorage"),Yi=Za("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new za("@firebase/database"),Dp=function(){let t=1;return function(){return t++}}(),ec=function(t){const e=vd(t),n=new yd;n.update(e);const s=n.digest();return Rr.encodeByteArray(s)},Qn=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Qn.apply(null,s):typeof s=="object"?e+=de(s):e+=s,e+=" "}return e};let kt=null,al=!0;const Mp=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Zt.logLevel=Y.VERBOSE,kt=Zt.log.bind(Zt),e&&Yi.set("logging_enabled",!0)):typeof t=="function"?kt=t:(kt=null,Yi.remove("logging_enabled"))},ge=function(...t){if(al===!0&&(al=!1,kt===null&&Yi.get("logging_enabled")===!0&&Mp(!0)),kt){const e=Qn.apply(null,t);kt(e)}},Xn=function(t){return function(...e){ge(t,...e)}},Qi=function(...t){const e="FIREBASE INTERNAL ERROR: "+Qn(...t);Zt.error(e)},nt=function(...t){const e=`FIREBASE FATAL ERROR: ${Qn(...t)}`;throw Zt.error(e),new Error(e)},Te=function(...t){const e="FIREBASE WARNING: "+Qn(...t);Zt.warn(e)},kp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Te("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Fp=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},an="[MIN_NAME]",Lt="[MAX_NAME]",_n=function(t,e){if(t===e)return 0;if(t===an||e===Lt)return-1;if(e===an||t===Lt)return 1;{const n=cl(t),s=cl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Lp=function(t,e){return t===e?0:t<e?-1:1},En=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+de(e))},Or=function(t){if(typeof t!="object"||t===null)return de(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=de(e[s]),n+=":",n+=Or(t[e[s]]);return n+="}",n},nc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const sc=function(t){E(!tc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(a=0;a<64;a+=8){let d=parseInt(h.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Bp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Up=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Wp=new RegExp("^-?(0*)\\d{1,10}$"),$p=-2147483648,jp=2147483647,cl=function(t){if(Wp.test(t)){const e=Number(t);if(e>=$p&&e<=jp)return e}return null},gn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Te("Exception was thrown by user callback.",n),e},Math.floor(0))}},Vp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Te(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Te(e)}}class en{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}en.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="5",ic="v",rc="s",oc="r",lc="f",ac=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cc="ls",uc="p",Xi="ac",hc="websocket",fc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function qp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function pc(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===hc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qp(t)&&(n.ns=t.namespace);const i=[];return xe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.counters_={}}incrementCounter(e,n=1){rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Jf(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei={},bi={};function Mr(t){const e=t.toString();return Ei[e]||(Ei[e]=new Gp),Ei[e]}function Yp(t,e){const n=t.toString();return bi[n]||(bi[n]=e()),bi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&gn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="start",Xp="close",Jp="pLPCommand",Zp="pRTLPCB",_c="id",gc="pw",mc="ser",e_="cb",t_="seg",n_="ts",s_="d",i_="dframe",yc=1870,vc=30,r_=yc-vc,o_=25e3,l_=3e4;class qt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xn(e),this.stats_=Mr(n),this.urlFn=a=>(this.appCheckToken&&(a[Xi]=this.appCheckToken),pc(n,fc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Qp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(l_)),Fp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kr((...r)=>{const[o,l,a,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ul)this.id=l,this.password=a;else if(o===Xp)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ul]="t",s[mc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[e_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ic]=Dr,this.transportSessionId&&(s[rc]=this.transportSessionId),this.lastSessionId&&(s[cc]=this.lastSessionId),this.applicationId&&(s[uc]=this.applicationId),this.appCheckToken&&(s[Xi]=this.appCheckToken),typeof location<"u"&&location.hostname&&ac.test(location.hostname)&&(s[oc]=lc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qt.forceAllow_=!0}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){return qt.forceAllow_?!0:!qt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Bp()&&!Up()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ua(n),i=nc(s,r_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[i_]="t",s[_c]=e,s[gc]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=de(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class kr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Dp(),window[Jp+this.uniqueCallbackIdentifier]=e,window[Zp+this.uniqueCallbackIdentifier]=n,this.myIFrame=kr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ge("frame writing exception"),l.stack&&ge(l.stack),ge(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ge("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_c]=this.myID,e[gc]=this.myPW,e[mc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vc+s.length<=yc;){const o=this.pendingSegs.shift();s=s+"&"+t_+i+"="+o.seg+"&"+n_+i+"="+o.ts+"&"+s_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(o_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=16384,c_=45e3;let Ss=null;typeof MozWebSocket<"u"?Ss=MozWebSocket:typeof WebSocket<"u"&&(Ss=WebSocket);class Le{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xn(this.connId),this.stats_=Mr(n),this.connURL=Le.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[ic]=Dr,typeof location<"u"&&location.hostname&&ac.test(location.hostname)&&(o[oc]=lc),n&&(o[rc]=n),s&&(o[cc]=s),i&&(o[Xi]=i),r&&(o[uc]=r),pc(e,hc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pt.set("previous_websocket_failure",!0);try{let s;ja(),this.mySock=new Ss(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ss!==null&&!Le.forceDisallow_}static previouslyFailed(){return Pt.isInMemoryStorage||Pt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Bn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=nc(n,a_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(c_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Le.responsesRequiredToBeHealthy=2;Le.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[qt,Le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Le&&Le.isAvailable();let s=n&&!Le.previouslyFailed();if(e.webSocketOnly&&(n||Te("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Le];else{const i=this.transports_=[];for(const r of Wn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Wn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=6e4,h_=5e3,f_=10*1024,d_=100*1024,wi="t",hl="d",p_="s",fl="r",__="e",dl="o",pl="a",_l="n",gl="p",g_="h";class m_{constructor(e,n,s,i,r,o,l,a,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xn("c:"+this.id+":"),this.transportManager_=new Wn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Nn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>d_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>f_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wi in e){const n=e[wi];n===pl?this.upgradeIfSecondaryHealthy_():n===fl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=En("t",e),s=En("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_l,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=En("t",e),s=En("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=En(wi,e);if(hl in e){const s=e[hl];if(n===g_){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===_l){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===p_?this.onConnectionShutdown_(s):n===fl?this.onReset_(s):n===__?Qi("Server Error: "+s):n===dl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dr!==s&&Te("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Nn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(u_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(h_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends Ec{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$a()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xs}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=32,yl=768;class z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new z("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function yt(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new z(t.pieces_,e)}function bc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function y_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function wc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ic(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new z(e,0)}function ae(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new z(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function we(t,e){const n=F(t),s=F(e);if(n===null)return e;if(n===s)return we(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Fr(t,e){if(yt(t)!==yt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ue(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(yt(t)>yt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class v_{constructor(e,n){this.errorPrefix_=n,this.parts_=wc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Xs(this.parts_[s]);Tc(this)}}function C_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Xs(e),Tc(t)}function E_(t){const e=t.parts_.pop();t.byteLength_-=Xs(e),t.parts_.length>0&&(t.byteLength_-=1)}function Tc(t){if(t.byteLength_>yl)throw new Error(t.errorPrefix_+"has a key path longer than "+yl+" bytes ("+t.byteLength_+").");if(t.parts_.length>ml)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ml+") or object contains a cycle "+St(t))}function St(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Ec{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Lr}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=1e3,b_=60*5*1e3,vl=30*1e3,w_=1.3,I_=3e4,T_="server_kill",Cl=3;class et extends Cc{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=et.nextPersistentConnectionId_++,this.log_=Xn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bn,this.maxReconnectDelay_=b_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ja())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(de(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Qs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;et.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rt(e,"w")){const s=ln(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Te(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_d(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qi("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>I_&&(this.reconnectDelay_=bn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*w_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+et.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(u){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ge("getToken() completed but was canceled"):(ge("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,l=new m_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Te(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(T_)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Te(u),a())}}}interrupt(e){ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xo(this.interruptReasons_)&&(this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Or(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cl&&(this.reconnectDelay_=vl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ja.replace(/\./g,"-")]=1,$a()?e["framework.cordova"]=1:cd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xs.getInstance().currentlyOnline();return Xo(this.interruptReasons_)&&e}}et.nextPersistentConnectionId_=0;et.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new L(an,e),i=new L(an,n);return this.compare(s,i)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us;class Sc extends Js{static get __EMPTY_NODE(){return us}static set __EMPTY_NODE(e){us=e}compare(e,n){return _n(e.name,n.name)}isDefinedOn(e){throw pn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(Lt,us)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,us)}toString(){return".key"}}const tn=new Sc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??fe.RED,this.left=i??Ie.EMPTY_NODE,this.right=r??Ie.EMPTY_NODE}copy(e,n,s,i,r){return new fe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ie.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ie.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class S_{copy(e,n,s,i,r){return this}insert(e,n,s){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ie{constructor(e,n=Ie.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ie(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Ie(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new hs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new hs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new hs(this.root_,null,this.comparator_,!0,e)}}Ie.EMPTY_NODE=new S_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t,e){return _n(t.name,e.name)}function Br(t,e){return _n(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji;function N_(t){Ji=t}const xc=function(t){return typeof t=="number"?"number:"+sc(t):"string:"+t},Nc=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rt(e,".sv"),"Priority must be a string or number.")}else E(t===Ji||t.isEmpty(),"priority of unexpected type.");E(t===Ji||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El;class he{constructor(e,n=he.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Nc(this.priorityNode_)}static set __childrenNodeConstructor(e){El=e}static get __childrenNodeConstructor(){return El}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new he(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:F(e)===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:he.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=F(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||yt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,he.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=sc(this.value_):e+=this.value_,this.lazyHash_=ec(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===he.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof he.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=he.VALUE_TYPE_ORDER.indexOf(n),r=he.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}he.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc,Ac;function R_(t){Rc=t}function A_(t){Ac=t}class P_ extends Js{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?_n(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Lt,new he("[PRIORITY-POST]",Ac))}makePost(e,n){const s=Rc(e);return new L(n,new he("[PRIORITY-POST]",s))}toString(){return".priority"}}const se=new P_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=Math.log(2);class D_{constructor(e){const n=r=>parseInt(Math.log(r)/O_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ns=function(t,e,n,s){t.sort(e);const i=function(a,c){const h=c-a;let u,d;if(h===0)return null;if(h===1)return u=t[a],d=n?n(u):u,new fe(d,u.node,fe.BLACK,null,null);{const g=parseInt(h/2,10)+a,C=i(a,g),I=i(g+1,c);return u=t[g],d=n?n(u):u,new fe(d,u.node,fe.BLACK,C,I)}},r=function(a){let c=null,h=null,u=t.length;const d=function(C,I){const M=u-C,W=u;u-=C;const oe=i(M+1,W),P=t[M],Z=n?n(P):P;g(new fe(Z,P.node,I,null,oe))},g=function(C){c?(c.left=C,c=C):(h=C,c=C)};for(let C=0;C<a.count;++C){const I=a.nextBitIsOne(),M=Math.pow(2,a.count-(C+1));I?d(M,fe.BLACK):(d(M,fe.BLACK),d(M,fe.RED))}return h},o=new D_(t.length),l=r(o);return new Ie(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii;const Kt={};class Je{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(Kt&&se,"ChildrenNode.ts has not been loaded"),Ii=Ii||new Je({".priority":Kt},{".priority":se}),Ii}get(e){const n=ln(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ie?n:null}hasIndex(e){return rt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==tn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(L.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ns(s,e.getCompare()):l=Kt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Je(h,c)}addToIndexes(e,n){const s=ws(this.indexes_,(i,r)=>{const o=ln(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===Kt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ns(l,o.getCompare())}else return Kt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new Je(s,this.indexSet_)}removeFromIndexes(e,n){const s=ws(this.indexes_,i=>{if(i===Kt)return i;{const r=n.get(e.name);return r?i.remove(new L(e.name,r)):i}});return new Je(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wn;class A{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Nc(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wn||(wn=new A(new Ie(Br),null,Je.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wn}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?wn:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new L(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?wn:this.priorityNode_;return new A(i,o,r)}}updateChild(e,n){const s=F(e);if(s===null)return n;{E(F(e)!==".priority"||yt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Q(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(se,(o,l)=>{n[o]=l.val(e),s++,r&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xc(this.getPriority().val())+":"),this.forEachChild(se,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ec(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new L(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jn?-1:0}withIndex(e){if(e===tn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===tn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(se),i=n.getIterator(se);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===tn?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class M_ extends A{constructor(){super(new Ie(Br),A.EMPTY_NODE,Je.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Jn=new M_;Object.defineProperties(L,{MIN:{value:new L(an,A.EMPTY_NODE)},MAX:{value:new L(Lt,Jn)}});Sc.__EMPTY_NODE=A.EMPTY_NODE;he.__childrenNodeConstructor=A;N_(Jn);A_(Jn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=!0;function pe(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new he(n,pe(e))}if(!(t instanceof Array)&&k_){const n=[];let s=!1;if(xe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=pe(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return A.EMPTY_NODE;const r=Ns(n,x_,o=>o.name,Br);if(s){const o=Ns(n,se.getCompare());return new A(r,pe(e),new Je({".priority":o},{".priority":se}))}else return new A(r,pe(e),Je.Default)}else{let n=A.EMPTY_NODE;return xe(t,(s,i)=>{if(rt(t,s)&&s.substring(0,1)!=="."){const r=pe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(pe(e))}}R_(pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_ extends Js{constructor(e){super(),this.indexPath_=e,E(!B(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?_n(e.name,n.name):r}makePost(e,n){const s=pe(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,s);return new L(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Jn);return new L(Lt,e)}toString(){return wc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_ extends Js{compare(e,n){const s=e.node.compareTo(n.node);return s===0?_n(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const s=pe(e);return new L(n,s)}toString(){return".value"}}const B_=new L_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t){return{type:"value",snapshotNode:t}}function cn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function $n(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function jn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function U_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange($n(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(cn(n,s)):o.trackChildChange(jn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(se,(i,r)=>{n.hasChild(i)||s.trackChildChange($n(i,r))}),n.isLeafNode()||n.forEachChild(se,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(jn(i,r,o))}else s.trackChildChange(cn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.indexedFilter_=new Ur(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Vn.getStartPost_(e),this.endPost_=Vn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new L(n,s))||(s=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const r=this;return n.forEachChild(se,(o,l)=>{r.matches(new L(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Vn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new L(n,s))||(s=A.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,g)=>u(g,d)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new L(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(h&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(jn(n,s,u)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange($n(n,u));const I=l.updateImmediateChild(n,A.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(cn(d.name,d.node)),I.updateImmediateChild(d.name,d.node)):I}}else return s.isEmpty()?e:h&&o(c,a)>=0?(r!=null&&(r.trackChildChange($n(c.name,c.node)),r.trackChildChange(cn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:an}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Lt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new Hr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function W_(t){return t.loadsAllData()?new Ur(t.getIndex()):t.hasLimit()?new H_(t):new Vn(t)}function bl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===se?n="$priority":t.index_===B_?n="$value":t.index_===tn?n="$key":(E(t.index_ instanceof F_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=de(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=de(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+de(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=de(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+de(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function wl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Cc{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Xn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Rs.getListenId_(e,s),l={};this.listens_[o]=l;const a=bl(e._queryParams);this.restRequest_(r+".json",a,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),ln(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Rs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=bl(e._queryParams),s=e._path.toString(),i=new Qs;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+md(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Bn(l.responseText)}catch{Te("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Te("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(){return{value:null,children:new Map}}function Oc(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=F(e);t.children.has(s)||t.children.set(s,As());const i=t.children.get(s);e=Q(e),Oc(i,e,n)}}function Zi(t,e,n){t.value!==null?n(e,t.value):j_(t,(s,i)=>{const r=new z(e.toString()+"/"+s);Zi(i,r,n)})}function j_(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&xe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=10*1e3,K_=30*1e3,z_=5*60*1e3;class q_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new V_(e);const s=Il+(K_-Il)*Math.random();Nn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;xe(e,(i,r)=>{r>0&&rt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Nn(this.reportStats_.bind(this),Math.floor(Math.random()*2*z_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(He||(He={}));function Dc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Wr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $r(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=He.ACK_USER_WRITE,this.source=Dc()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new z(e));return new Ps(V(),n,this.revert)}}else return E(F(this.path)===e,"operationForChild called for unrelated child."),new Ps(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){this.source=e,this.path=n,this.type=He.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new Kn(this.source,V()):new Kn(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=He.OVERWRITE}operationForChild(e){return B(this.path)?new Bt(this.source,V(),this.snap.getImmediateChild(e)):new Bt(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=He.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new z(e));return n.isEmpty()?null:n.value?new Bt(this.source,V(),n.value):new zn(this.source,V(),n)}else return E(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new zn(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Y_(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(U_(o.childName,o.snapshotNode))}),In(t,i,"child_removed",e,s,n),In(t,i,"child_added",e,s,n),In(t,i,"child_moved",r,s,n),In(t,i,"child_changed",e,s,n),In(t,i,"value",e,s,n),i}function In(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>X_(t,l,a)),o.forEach(l=>{const a=Q_(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Q_(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function X_(t,e,n){if(e.childName==null||n.childName==null)throw pn("Should only compare child_ events.");const s=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t,e){return{eventCache:t,serverCache:e}}function Rn(t,e,n,s){return Zs(new Ut(e,n,s),t.serverCache)}function Mc(t,e,n,s){return Zs(t.eventCache,new Ut(e,n,s))}function er(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ht(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;const J_=()=>(Ti||(Ti=new Ie(Lp)),Ti);class X{constructor(e,n=J_()){this.value=e,this.children=n}static fromObject(e){let n=new X(null);return xe(e,(s,i)=>{n=n.set(new z(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(B(e))return null;{const s=F(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Q(e),n);return r!=null?{path:ae(new z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=F(e),s=this.children.get(n);return s!==null?s.subtree(Q(e)):new X(null)}}set(e,n){if(B(e))return new X(n,this.children);{const s=F(e),r=(this.children.get(s)||new X(null)).set(Q(e),n),o=this.children.insert(s,r);return new X(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=F(e),s=this.children.get(n);if(s){const i=s.remove(Q(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new X(null):new X(this.value,r)}else return this}}get(e){if(B(e))return this.value;{const n=F(e),s=this.children.get(n);return s?s.get(Q(e)):null}}setTree(e,n){if(B(e))return n;{const s=F(e),r=(this.children.get(s)||new X(null)).setTree(Q(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new X(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ae(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(B(e))return null;{const r=F(e),o=this.children.get(r);return o?o.findOnPath_(Q(e),ae(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,s){if(B(e))return this;{this.value&&s(n,this.value);const i=F(e),r=this.children.get(i);return r?r.foreachOnPath_(Q(e),ae(n,i),s):new X(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ae(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.writeTree_=e}static empty(){return new $e(new X(null))}}function An(t,e,n){if(B(e))return new $e(new X(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=we(i,e);return r=r.updateChild(o,n),new $e(t.writeTree_.set(i,r))}else{const i=new X(n),r=t.writeTree_.setTree(e,i);return new $e(r)}}}function Tl(t,e,n){let s=t;return xe(n,(i,r)=>{s=An(s,ae(e,i),r)}),s}function Sl(t,e){if(B(e))return $e.empty();{const n=t.writeTree_.setTree(e,new X(null));return new $e(n)}}function tr(t,e){return Wt(t,e)!=null}function Wt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(we(n.path,e)):null}function xl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(s,i)=>{e.push(new L(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new L(s,i.value))}),e}function _t(t,e){if(B(e))return t;{const n=Wt(t,e);return n!=null?new $e(new X(n)):new $e(t.writeTree_.subtree(e))}}function nr(t){return t.writeTree_.isEmpty()}function un(t,e){return kc(V(),t.writeTree_,e)}function kc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=kc(ae(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ae(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t,e){return Uc(e,t)}function Z_(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=An(t.visibleWrites,e,n)),t.lastWriteId=s}function eg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function tg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&ng(l,s.path)?i=!1:Ue(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return sg(t),!0;if(s.snap)t.visibleWrites=Sl(t.visibleWrites,s.path);else{const l=s.children;xe(l,a=>{t.visibleWrites=Sl(t.visibleWrites,ae(s.path,a))})}return!0}else return!1}function ng(t,e){if(t.snap)return Ue(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ue(ae(t.path,n),e))return!0;return!1}function sg(t){t.visibleWrites=Fc(t.allWrites,ig,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ig(t){return t.visible}function Fc(t,e,n){let s=$e.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ue(n,o)?(l=we(n,o),s=An(s,l,r.snap)):Ue(o,n)&&(l=we(o,n),s=An(s,V(),r.snap.getChild(l)));else if(r.children){if(Ue(n,o))l=we(n,o),s=Tl(s,l,r.children);else if(Ue(o,n))if(l=we(o,n),B(l))s=Tl(s,V(),r.children);else{const a=ln(r.children,F(l));if(a){const c=a.getChild(Q(l));s=An(s,V(),c)}}}else throw pn("WriteRecord should have .snap or .children")}}return s}function Lc(t,e,n,s,i){if(!s&&!i){const r=Wt(t.visibleWrites,e);if(r!=null)return r;{const o=_t(t.visibleWrites,e);if(nr(o))return n;if(n==null&&!tr(o,V()))return null;{const l=n||A.EMPTY_NODE;return un(o,l)}}}else{const r=_t(t.visibleWrites,e);if(!i&&nr(r))return n;if(!i&&n==null&&!tr(r,V()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ue(c.path,e)||Ue(e,c.path))},l=Fc(t.allWrites,o,e),a=n||A.EMPTY_NODE;return un(l,a)}}}function rg(t,e,n){let s=A.EMPTY_NODE;const i=Wt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(se,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=_t(t.visibleWrites,e);return n.forEachChild(se,(o,l)=>{const a=un(_t(r,new z(o)),l);s=s.updateImmediateChild(o,a)}),xl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=_t(t.visibleWrites,e);return xl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function og(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ae(e,n);if(tr(t.visibleWrites,r))return null;{const o=_t(t.visibleWrites,r);return nr(o)?i.getChild(n):un(o,i.getChild(n))}}function lg(t,e,n,s){const i=ae(e,n),r=Wt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=_t(t.visibleWrites,i);return un(o,s.getNode().getImmediateChild(n))}else return null}function ag(t,e){return Wt(t.visibleWrites,e)}function cg(t,e,n,s,i,r,o){let l;const a=_t(t.visibleWrites,e),c=Wt(a,V());if(c!=null)l=c;else if(n!=null)l=un(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&h.length<i;)u(g,s)!==0&&h.push(g),g=d.getNext();return h}else return[]}function ug(){return{visibleWrites:$e.empty(),allWrites:[],lastWriteId:-1}}function Os(t,e,n,s){return Lc(t.writeTree,t.treePath,e,n,s)}function Vr(t,e){return rg(t.writeTree,t.treePath,e)}function Nl(t,e,n,s){return og(t.writeTree,t.treePath,e,n,s)}function Ds(t,e){return ag(t.writeTree,ae(t.treePath,e))}function hg(t,e,n,s,i,r){return cg(t.writeTree,t.treePath,e,n,s,i,r)}function Kr(t,e,n){return lg(t.writeTree,t.treePath,e,n)}function Bc(t,e){return Uc(ae(t.treePath,e),t.writeTree)}function Uc(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,jn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,$n(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,cn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,jn(s,e.snapshotNode,i.oldSnap));else throw pn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Hc=new dg;class zr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ut(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ht(this.viewCache_),r=hg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t){return{filter:t}}function _g(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gg(t,e,n,s,i){const r=new fg;let o,l;if(n.type===He.OVERWRITE){const c=n;c.source.fromUser?o=sr(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=Ms(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===He.MERGE){const c=n;c.source.fromUser?o=yg(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=ir(t,e,c.path,c.children,s,i,l,r))}else if(n.type===He.ACK_USER_WRITE){const c=n;c.revert?o=Eg(t,e,c.path,s,i,r):o=vg(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===He.LISTEN_COMPLETE)o=Cg(t,e,n.path,s,r);else throw pn("Unknown operation type: "+n.type);const a=r.getChanges();return mg(e,o,a),{viewCache:o,changes:a}}function mg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=er(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Pc(er(e)))}}function Wc(t,e,n,s,i,r){const o=e.eventCache;if(Ds(s,n)!=null)return e;{let l,a;if(B(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ht(e),h=c instanceof A?c:A.EMPTY_NODE,u=Vr(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Os(s,Ht(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=F(n);if(c===".priority"){E(yt(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const u=Nl(s,n,h,a);u!=null?l=t.filter.updatePriority(h,u):l=o.getNode()}else{const h=Q(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Nl(s,n,o.getNode(),a);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Kr(s,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,h,i,r):l=o.getNode()}}return Rn(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function Ms(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(B(n))c=h.updateFullNode(a.getNode(),s,null);else if(h.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=h.updateFullNode(a.getNode(),g,null)}else{const g=F(n);if(!a.isCompleteForPath(n)&&yt(n)>1)return e;const C=Q(n),M=a.getNode().getImmediateChild(g).updateChild(C,s);g===".priority"?c=h.updatePriority(a.getNode(),M):c=h.updateChild(a.getNode(),g,M,C,Hc,null)}const u=Mc(e,c,a.isFullyInitialized()||B(n),h.filtersNodes()),d=new zr(i,u,r);return Wc(t,u,n,i,d,l)}function sr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const h=new zr(i,e,r);if(B(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Rn(e,c,!0,t.filter.filtersNodes());else{const u=F(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Rn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=Q(n),g=l.getNode().getImmediateChild(u);let C;if(B(d))C=s;else{const I=h.getCompleteChild(u);I!=null?bc(d)===".priority"&&I.getChild(Ic(d)).isEmpty()?C=I:C=I.updateChild(d,s):C=A.EMPTY_NODE}if(g.equals(C))a=e;else{const I=t.filter.updateChild(l.getNode(),u,C,d,h,o);a=Rn(e,I,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Rl(t,e){return t.eventCache.isCompleteForChild(e)}function yg(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const h=ae(n,a);Rl(e,F(h))&&(l=sr(t,l,h,c,i,r,o))}),s.foreach((a,c)=>{const h=ae(n,a);Rl(e,F(h))||(l=sr(t,l,h,c,i,r,o))}),l}function Al(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ir(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;B(n)?c=s:c=new X(null).setTree(n,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),C=Al(t,g,d);a=Ms(t,a,new z(u),C,i,r,o,l)}}),c.children.inorderTraversal((u,d)=>{const g=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!g){const C=e.serverCache.getNode().getImmediateChild(u),I=Al(t,C,d);a=Ms(t,a,new z(u),I,i,r,o,l)}}),a}function vg(t,e,n,s,i,r,o){if(Ds(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ms(t,e,n,a.getNode().getChild(n),i,r,l,o);if(B(n)){let c=new X(null);return a.getNode().forEachChild(tn,(h,u)=>{c=c.set(new z(h),u)}),ir(t,e,n,c,i,r,l,o)}else return e}else{let c=new X(null);return s.foreach((h,u)=>{const d=ae(n,h);a.isCompleteForPath(d)&&(c=c.set(h,a.getNode().getChild(d)))}),ir(t,e,n,c,i,r,l,o)}}function Cg(t,e,n,s,i){const r=e.serverCache,o=Mc(e,r.getNode(),r.isFullyInitialized()||B(n),r.isFiltered());return Wc(t,o,n,s,Hc,i)}function Eg(t,e,n,s,i,r){let o;if(Ds(s,n)!=null)return e;{const l=new zr(s,e,i),a=e.eventCache.getNode();let c;if(B(n)||F(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Os(s,Ht(e));else{const u=e.serverCache.getNode();E(u instanceof A,"serverChildren would be complete if leaf node"),h=Vr(s,u)}h=h,c=t.filter.updateFullNode(a,h,r)}else{const h=F(n);let u=Kr(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=a.getImmediateChild(h)),u!=null?c=t.filter.updateChild(a,h,u,Q(n),l,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(a,h,A.EMPTY_NODE,Q(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Os(s,Ht(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ds(s,V())!=null,Rn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ur(s.getIndex()),r=W_(s);this.processor_=pg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(A.EMPTY_NODE,l.getNode(),null),h=new Ut(a,o.isFullyInitialized(),i.filtersNodes()),u=new Ut(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Zs(u,h),this.eventGenerator_=new G_(this.query_)}get query(){return this.query_}}function wg(t){return t.viewCache_.serverCache.getNode()}function Ig(t,e){const n=Ht(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Pl(t){return t.eventRegistrations_.length===0}function Tg(t,e){t.eventRegistrations_.push(e)}function Ol(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Dl(t,e,n,s){e.type===He.MERGE&&e.source.queryId!==null&&(E(Ht(t.viewCache_),"We should always have a full cache before handling merges"),E(er(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=gg(t.processor_,i,e,n,s);return _g(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,$c(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Sg(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(r,o)=>{s.push(cn(r,o))}),n.isFullyInitialized()&&s.push(Pc(n.getNode())),$c(t,s,n.getNode(),e)}function $c(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Y_(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks;class xg{constructor(){this.views=new Map}}function Ng(t){E(!ks,"__referenceConstructor has already been defined"),ks=t}function Rg(){return E(ks,"Reference.ts has not been loaded"),ks}function Ag(t){return t.views.size===0}function qr(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),Dl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Dl(o,e,n,s));return r}}function Pg(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Os(n,i?s:null),a=!1;l?a=!0:s instanceof A?(l=Vr(n,s),a=!1):(l=A.EMPTY_NODE,a=!1);const c=Zs(new Ut(l,a,!1),new Ut(s,i,!1));return new bg(e,c)}return o}function Og(t,e,n,s,i,r){const o=Pg(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Tg(o,n),Sg(o,n)}function Dg(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=vt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Ol(c,n,s)),Pl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Ol(a,n,s)),Pl(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!vt(t)&&r.push(new(Rg())(e._repo,e._path)),{removed:r,events:o}}function jc(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function nn(t,e){let n=null;for(const s of t.views.values())n=n||Ig(s,e);return n}function Vc(t,e){if(e._queryParams.loadsAllData())return ei(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Kc(t,e){return Vc(t,e)!=null}function vt(t){return ei(t)!=null}function ei(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;function Mg(t){E(!Fs,"__referenceConstructor has already been defined"),Fs=t}function kg(){return E(Fs,"Reference.ts has not been loaded"),Fs}let Fg=1;class Ml{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=ug(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zc(t,e,n,s,i){return Z_(t.pendingWriteTree_,e,n,s,i),i?Zn(t,new Bt(Dc(),e,n)):[]}function Ot(t,e,n=!1){const s=eg(t.pendingWriteTree_,e);if(tg(t.pendingWriteTree_,e)){let r=new X(null);return s.snap!=null?r=r.set(V(),!0):xe(s.children,o=>{r=r.set(new z(o),!0)}),Zn(t,new Ps(s.path,r,n))}else return[]}function ti(t,e,n){return Zn(t,new Bt(Wr(),e,n))}function Lg(t,e,n){const s=X.fromObject(n);return Zn(t,new zn(Wr(),e,s))}function Bg(t,e){return Zn(t,new Kn(Wr(),e))}function Ug(t,e,n){const s=Yr(t,n);if(s){const i=Qr(s),r=i.path,o=i.queryId,l=we(r,e),a=new Kn($r(o),l);return Xr(t,r,a)}else return[]}function rr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Kc(o,e))){const a=Dg(o,e,n,s);Ag(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,g)=>vt(g));if(h&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=$g(d);for(let C=0;C<g.length;++C){const I=g[C],M=I.query,W=Yc(t,I);t.listenProvider_.startListening(Pn(M),Ls(t,M),W.hashFn,W.onComplete)}}}!u&&c.length>0&&!s&&(h?t.listenProvider_.stopListening(Pn(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(ni(d));t.listenProvider_.stopListening(Pn(d),g)}))}jg(t,c)}return l}function Hg(t,e,n,s){const i=Yr(t,s);if(i!=null){const r=Qr(i),o=r.path,l=r.queryId,a=we(o,e),c=new Bt($r(l),a,n);return Xr(t,o,c)}else return[]}function Wg(t,e,n,s){const i=Yr(t,s);if(i){const r=Qr(i),o=r.path,l=r.queryId,a=we(o,e),c=X.fromObject(n),h=new zn($r(l),a,c);return Xr(t,o,h)}else return[]}function kl(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const C=we(d,i);r=r||nn(g,C),o=o||vt(g)});let l=t.syncPointTree_.get(i);l?(o=o||vt(l),r=r||nn(l,V())):(l=new xg,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,C)=>{const I=nn(C,V());I&&(r=r.updateImmediateChild(g,I))}));const c=Kc(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=ni(e);E(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=Vg();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const h=jr(t.pendingWriteTree_,i);let u=Og(l,e,n,h,r,a);if(!c&&!o&&!s){const d=Vc(l,e);u=u.concat(Kg(t,e,d))}return u}function Gr(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=we(o,e),c=nn(l,a);if(c)return c});return Lc(i,e,r,n,!0)}function Zn(t,e){return qc(e,t.syncPointTree_,null,jr(t.pendingWriteTree_,V()))}function qc(t,e,n,s){if(B(t.path))return Gc(t,e,n,s);{const i=e.get(V());n==null&&i!=null&&(n=nn(i,V()));let r=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,h=Bc(s,o);r=r.concat(qc(l,a,c,h))}return i&&(r=r.concat(qr(i,t,s,n))),r}}function Gc(t,e,n,s){const i=e.get(V());n==null&&i!=null&&(n=nn(i,V()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Bc(s,o),h=t.operationForChild(o);h&&(r=r.concat(Gc(h,l,a,c)))}),i&&(r=r.concat(qr(i,t,s,n))),r}function Yc(t,e){const n=e.query,s=Ls(t,n);return{hashFn:()=>(wg(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ug(t,n._path,s):Bg(t,n._path);{const r=Hp(i,n);return rr(t,n,null,r)}}}}function Ls(t,e){const n=ni(e);return t.queryToTagMap.get(n)}function ni(t){return t._path.toString()+"$"+t._queryIdentifier}function Yr(t,e){return t.tagToQueryMap.get(e)}function Qr(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new z(t.substr(0,e))}}function Xr(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=jr(t.pendingWriteTree_,e);return qr(s,n,i,null)}function $g(t){return t.fold((e,n,s)=>{if(n&&vt(n))return[ei(n)];{let i=[];return n&&(i=jc(n)),xe(s,(r,o)=>{i=i.concat(o)}),i}})}function Pn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(kg())(t._repo,t._path):t}function jg(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ni(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Vg(){return Fg++}function Kg(t,e,n){const s=e._path,i=Ls(t,e),r=Yc(t,n),o=t.listenProvider_.startListening(Pn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!vt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,u)=>{if(!B(c)&&h&&vt(h))return[ei(h).query];{let d=[];return h&&(d=d.concat(jc(h).map(g=>g.query))),xe(u,(g,C)=>{d=d.concat(C)}),d}});for(let c=0;c<a.length;++c){const h=a[c];t.listenProvider_.stopListening(Pn(h),Ls(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jr(n)}node(){return this.node_}}class Zr{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new Zr(this.syncTree_,n)}node(){return Gr(this.syncTree_,this.path_)}}const zg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fl=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return qg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Gg(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},qg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Gg=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Yg=function(t,e,n,s){return eo(e,new Zr(n,t),s)},Qc=function(t,e,n){return eo(t,new Jr(e),n)};function eo(t,e,n){const s=t.getPriority().val(),i=Fl(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Fl(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new he(l,pe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new he(i))),o.forEachChild(se,(l,a)=>{const c=eo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function no(t,e){let n=e instanceof z?e:new z(e),s=t,i=F(n);for(;i!==null;){const r=ln(s.node.children,i)||{children:{},childCount:0};s=new to(i,s,r),n=Q(n),i=F(n)}return s}function mn(t){return t.node.value}function Xc(t,e){t.node.value=e,or(t)}function Jc(t){return t.node.childCount>0}function Qg(t){return mn(t)===void 0&&!Jc(t)}function si(t,e){xe(t.node.children,(n,s)=>{e(new to(n,t,s))})}function Zc(t,e,n,s){n&&!s&&e(t),si(t,i=>{Zc(i,e,!0,s)}),n&&s&&e(t)}function Xg(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function es(t){return new z(t.parent===null?t.name:es(t.parent)+"/"+t.name)}function or(t){t.parent!==null&&Jg(t.parent,t.name,t)}function Jg(t,e,n){const s=Qg(n),i=rt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,or(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,or(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=/[\[\].#$\/\u0000-\u001F\u007F]/,em=/[\[\].#$\u0000-\u001F\u007F]/,Si=10*1024*1024,eu=function(t){return typeof t=="string"&&t.length!==0&&!Zg.test(t)},tu=function(t){return typeof t=="string"&&t.length!==0&&!em.test(t)},tm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tu(t)},nm=function(t,e,n,s){s&&e===void 0||so(Ar(t,"value"),e,n)},so=function(t,e,n){const s=n instanceof z?new v_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+St(s));if(typeof e=="function")throw new Error(t+"contains a function "+St(s)+" with contents = "+e.toString());if(tc(e))throw new Error(t+"contains "+e.toString()+" "+St(s));if(typeof e=="string"&&e.length>Si/3&&Xs(e)>Si)throw new Error(t+"contains a string greater than "+Si+" utf8 bytes "+St(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(xe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!eu(o)))throw new Error(t+" contains an invalid key ("+o+") "+St(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);C_(s,o),so(t,l,s),E_(s)}),i&&r)throw new Error(t+' contains ".value" child '+St(s)+" in addition to actual children.")}},nu=function(t,e,n,s){if(!(s&&n===void 0)&&!tu(n))throw new Error(Ar(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),nu(t,e,n,s)},im=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},rm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!eu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!tm(n))throw new Error(Ar(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function io(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Fr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function su(t,e,n){io(t,n),iu(t,s=>Fr(s,e))}function st(t,e,n){io(t,n),iu(t,s=>Ue(s,e)||Ue(e,s))}function iu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(lm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();kt&&ge("event: "+n.toString()),gn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="repo_interrupt",cm=25;class um{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new om,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=As(),this.transactionQueueTree_=new to,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hm(t,e,n){if(t.stats_=Mr(t.repoInfo_),t.forceRestClient_||Vp())t.server_=new Rs(t.repoInfo_,(s,i,r,o)=>{Ll(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Bl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new et(t.repoInfo_,e,(s,i,r,o)=>{Ll(t,s,i,r,o)},s=>{Bl(t,s)},s=>{dm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Yp(t.repoInfo_,()=>new q_(t.stats_,t.server_)),t.infoData_=new $_,t.infoSyncTree_=new Ml({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=ti(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),oo(t,"connected",!1),t.serverSyncTree_=new Ml({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);st(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function fm(t){const n=t.infoData_.getNode(new z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ro(t){return zg({timestamp:fm(t)})}function Ll(t,e,n,s,i){t.dataUpdateCount++;const r=new z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=ws(n,c=>pe(c));o=Wg(t.serverSyncTree_,r,a,i)}else{const a=pe(n);o=Hg(t.serverSyncTree_,r,a,i)}else if(s){const a=ws(n,c=>pe(c));o=Lg(t.serverSyncTree_,r,a)}else{const a=pe(n);o=ti(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ii(t,r)),st(t.eventQueue_,l,o)}function Bl(t,e){oo(t,"connected",e),e===!1&&_m(t)}function dm(t,e){xe(e,(n,s)=>{oo(t,n,s)})}function oo(t,e,n){const s=new z("/.info/"+e),i=pe(n);t.infoData_.updateSnapshot(s,i);const r=ti(t.infoSyncTree_,s,i);st(t.eventQueue_,s,r)}function ru(t){return t.nextWriteId_++}function pm(t,e,n,s,i){lo(t,"set",{path:e.toString(),value:n,priority:s});const r=ro(t),o=pe(n,s),l=Gr(t.serverSyncTree_,e),a=Qc(o,l,r),c=ru(t),h=zc(t.serverSyncTree_,e,a,c,!0);io(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const C=d==="ok";C||Te("set at "+e+" failed: "+d);const I=Ot(t.serverSyncTree_,c,!C);st(t.eventQueue_,e,I),ym(t,i,d,g)});const u=uu(t,e);ii(t,u),st(t.eventQueue_,u,[])}function _m(t){lo(t,"onDisconnectEvents");const e=ro(t),n=As();Zi(t.onDisconnect_,V(),(i,r)=>{const o=Yg(i,r,t.serverSyncTree_,e);Oc(n,i,o)});let s=[];Zi(n,V(),(i,r)=>{s=s.concat(ti(t.serverSyncTree_,i,r));const o=uu(t,i);ii(t,o)}),t.onDisconnect_=As(),st(t.eventQueue_,V(),s)}function gm(t,e,n){let s;F(e._path)===".info"?s=kl(t.infoSyncTree_,e,n):s=kl(t.serverSyncTree_,e,n),su(t.eventQueue_,e._path,s)}function Ul(t,e,n){let s;F(e._path)===".info"?s=rr(t.infoSyncTree_,e,n):s=rr(t.serverSyncTree_,e,n),su(t.eventQueue_,e._path,s)}function mm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(am)}function lo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ge(n,...e)}function ym(t,e,n,s){e&&gn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ou(t,e,n){return Gr(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function ao(t,e=t.transactionQueueTree_){if(e||ri(t,e),mn(e)){const n=au(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&vm(t,es(e),n)}else Jc(e)&&si(e,n=>{ao(t,n)})}function vm(t,e,n){const s=n.map(c=>c.currentWriteId),i=ou(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];E(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=we(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{lo(t,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(Ot(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ri(t,no(t.transactionQueueTree_,e)),ao(t,t.transactionQueueTree_),st(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)gn(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Te("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}ii(t,e)}},o)}function ii(t,e){const n=lu(t,e),s=es(n),i=au(t,n);return Cm(t,i,s),s}function Cm(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=we(n,a.path);let h=!1,u;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,u=a.abortReason,i=i.concat(Ot(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=cm)h=!0,u="maxretry",i=i.concat(Ot(t.serverSyncTree_,a.currentWriteId,!0));else{const d=ou(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){so("transaction failed: Data returned ",g,a.path);let C=pe(g);typeof g=="object"&&g!=null&&rt(g,".priority")||(C=C.updatePriority(d.getPriority()));const M=a.currentWriteId,W=ro(t),oe=Qc(C,d,W);a.currentOutputSnapshotRaw=C,a.currentOutputSnapshotResolved=oe,a.currentWriteId=ru(t),o.splice(o.indexOf(M),1),i=i.concat(zc(t.serverSyncTree_,a.path,oe,a.currentWriteId,a.applyLocally)),i=i.concat(Ot(t.serverSyncTree_,M,!0))}else h=!0,u="nodata",i=i.concat(Ot(t.serverSyncTree_,a.currentWriteId,!0))}st(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(u),!1,null))))}ri(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)gn(s[l]);ao(t,t.transactionQueueTree_)}function lu(t,e){let n,s=t.transactionQueueTree_;for(n=F(e);n!==null&&mn(s)===void 0;)s=no(s,n),e=Q(e),n=F(e);return s}function au(t,e){const n=[];return cu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function cu(t,e,n){const s=mn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);si(e,i=>{cu(t,i,n)})}function ri(t,e){const n=mn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Xc(e,n.length>0?n:void 0)}si(e,s=>{ri(t,s)})}function uu(t,e){const n=es(lu(t,e)),s=no(t.transactionQueueTree_,e);return Xg(s,i=>{xi(t,i)}),xi(t,s),Zc(s,i=>{xi(t,i)}),n}function xi(t,e){const n=mn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ot(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Xc(e,void 0):n.length=r+1,st(t.eventQueue_,es(e),i);for(let o=0;o<s.length;o++)gn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function bm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Te(`Invalid query segment '${n}' in query '${t}'`)}return e}const Hl=function(t,e){const n=wm(t),s=n.namespace;n.domain==="firebase.com"&&nt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kp();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new dc(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new z(n.pathString)}},wm=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=Em(t.substring(h,u)));const d=bm(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),n=e.substring(C+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class fu{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return B(this._path)?null:bc(this._path)}get ref(){return new ot(this._repo,this._path)}get _queryIdentifier(){const e=wl(this._queryParams),n=Or(e);return n==="{}"?"default":n}get _queryObject(){return wl(this._queryParams)}isEqual(e){if(e=Yn(e),!(e instanceof co))return!1;const n=this._repo===e._repo,s=Fr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+y_(this._path)}}class ot extends co{constructor(e,n){super(e,n,new Hr,!1)}get parent(){const e=Ic(this._path);return e===null?null:new ot(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new z(e),s=Bs(this.ref,e);return new qn(this._node.getChild(n),s,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new qn(i,Bs(this.ref,s),se)))}hasChild(e){const n=new z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function du(t,e){return t=Yn(t),t._checkNotDeleted("ref"),e!==void 0?Bs(t._root,e):t._root}function Bs(t,e){return t=Yn(t),F(t._path)===null?sm("child","path",e,!1):nu("child","path",e,!1),new ot(t._repo,ae(t._path,e))}function Tm(t,e){t=Yn(t),im("set",t._path),nm("set",e,t._path,!1);const n=new Qs;return pm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class uo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new hu("value",this,new qn(e.snapshotNode,new ot(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new fu(this,e,n):null}matches(e){return e instanceof uo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ho{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new fu(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const s=Bs(new ot(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new hu(e.type,this,new qn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ho?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Sm(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(h,u)=>{Ul(t._repo,t,l),a(h,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Im(n,r||void 0),l=e==="value"?new uo(o):new ho(e,o);return gm(t._repo,t,l),()=>Ul(t._repo,t,l)}function xm(t,e,n,s){return Sm(t,"value",e,n,s)}Ng(ot);Mg(ot);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="FIREBASE_DATABASE_EMULATOR_HOST",lr={};let Rm=!1;function Am(t,e,n,s){t.repoInfo_=new dc(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Pm(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ge("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Hl(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[Nm]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Hl(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new en(en.OWNER):new zp(t.name,t.options,e);rm("Invalid Firebase Database URL",o),B(o.path)||nt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Dm(l,t,h,new Kp(t.name,n));return new Mm(u,t)}function Om(t,e){const n=lr[e];(!n||n[t.key]!==t)&&nt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mm(t),delete n[t.key]}function Dm(t,e,n,s){let i=lr[e.name];i||(i={},lr[e.name]=i);let r=i[t.toURLString()];return r&&nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new um(t,Rm,n,s),i[t.toURLString()]=r,r}class Mm{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ot(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Om(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nt("Cannot call "+e+" on a deleted database.")}}function km(t=yp(),e){const n=pp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=rd("database");s&&Fm(n,...s)}return n}function Fm(t,e,n,s={}){t=Yn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&nt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&nt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new en(en.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:ld(s.mockUserToken,t.app.options.projectId);r=new en(o)}Am(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t){Ap(mp),Ts(new Un("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Pm(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Jt(ol,ll,t),Jt(ol,ll,"esm2017")}et.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};et.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Lm();const Bm={apiKey:"AIzaSyDIY1INg7k-gwxK7qxm2CLqZMMRx05krhQ",authDomain:"fir-vue-realtime-chatroo-ed0e3.firebaseapp.com",databaseURL:"https://fir-vue-realtime-chatroo-ed0e3-default-rtdb.firebaseio.com",projectId:"fir-vue-realtime-chatroo-ed0e3",storageBucket:"fir-vue-realtime-chatroo-ed0e3.appspot.com",messagingSenderId:"96546249534",appId:"1:96546249534:web:b4cbd0f11ef818b8c5ea6f",measurementId:"G-8PQM6H2MLF"},Um=Ya(Bm),pu=km(Um);function Hm(t,e,n){Tm(du(pu,`messages/${t}`),{userName:e,msg:n})}async function Wm(t){xm(du(pu,"messages"),e=>{t.value=e.val()})}const $m={class:"container mx-auto py-4"},jm={class:"grid grid-cols-3 gap-4"},Vm={class:"col-span-2 rounded border p-3"},Km=["onSubmit"],zm=["disabled"],qm=["disabled"],Gm={class:"flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-2xl font-extrabold text-gray-500"},Ym={class:"ml-3 flex-auto"},Qm={class:"mb-2 flex items-end"},Xm={class:"text-xl font-bold"},Jm={class:"mb-1 ml-2 text-sm text-gray-500"},Zm={class:"rounded bg-gray-100 p-2"},ey={class:"rounded border p-3"},ty=["onSubmit"],ny=le("label",{for:"userName",class:"mb-2"},"輸入使用者名稱",-1),sy=le("p",{class:"mb-2 text-sm text-gray-500"},"請輸入個人姓名開始使用聊天室",-1),iy=["disabled"],ry={__name:"Chatroom",setup(t){const e=Cn(""),n=Cn(""),s=Cn(!1),i=Cn([]),r=Cn(null);Sh(()=>{e.value===""&&(s.value=!1)});const o=()=>{s.value=!0,fa(()=>{r.value.focus()})},l=()=>{if(n.value==="")return;const u=Date.now();Hm(u,e.value,n.value),n.value=""},a=u=>u.substr(0,1),c=u=>{const d=new Date(parseInt(u)),g=d.getFullYear(),C=h(d.getMonth()+1),I=h(d.getDate()),M=d.getHours()>12?"下午":"上午",W=d.getHours()>12?h(d.getHours()-12):h(d.getHours()),oe=h(d.getMinutes()),P=h(d.getSeconds());return`${g}/${C}/${I} ${M} ${W}:${oe}:${P}`},h=u=>u<10?`0${u}`:u;return Wm(i),(u,d)=>(gs(),pi("div",$m,[le("div",jm,[le("div",Vm,[le("form",{class:"flex",onSubmit:Yo(l,["prevent"])},[Ao(le("input",{type:"text","onUpdate:modelValue":d[0]||(d[0]=g=>n.value=g),class:"-mr-px flex-auto rounded-l border-gray-300 disabled:bg-gray-200",disabled:!s.value,ref_key:"refMsg",ref:r},null,8,zm),[[Go,n.value,void 0,{trim:!0}]]),le("button",{type:"submit",class:"rounded-r border border-gray-300 p-2 text-gray-500 transition-colors hover:bg-gray-500 hover:text-white focus:outline-0 focus:ring-4 focus:ring-gray-200 disabled:cursor-not-allowed disabled:bg-gray-100/95 disabled:hover:text-gray-500",disabled:!s.value}," 送出 ",8,qm)],40,Km),(gs(!0),pi(ke,null,$h(i.value,({userName:g,msg:C},I)=>(gs(),pi("div",{class:"mt-4 flex",key:I},[le("div",Gm,ss(a(g)),1),le("div",Ym,[le("div",Qm,[le("h3",Xm,ss(g),1),le("span",Jm,ss(c(I)),1)]),le("p",Zm,ss(C),1)])]))),128))]),le("div",ey,[le("form",{onSubmit:Yo(o,["prevent"]),class:"flex flex-col"},[ny,Ao(le("input",{type:"text",id:"userName","onUpdate:modelValue":d[1]||(d[1]=g=>e.value=g),class:"mb-2 rounded border-gray-300"},null,512),[[Go,e.value,void 0,{trim:!0}]]),sy,le("button",{type:"submit",class:"rounded border border-blue-500 p-2 text-blue-500 transition-colors hover:bg-blue-500 hover:text-white focus:outline-0 focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100/95 disabled:text-gray-500 disabled:hover:text-gray-500",disabled:!e.value}," 開始使用 ",8,iy)],40,ty)])])]))}};const oy=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ly={__name:"App",setup(t){return(e,n)=>(gs(),af(ry))}},ay=oy(ly,[["__scopeId","data-v-1404d563"]]);Yf(ay).mount("#app");

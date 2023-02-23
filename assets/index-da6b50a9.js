(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ur(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function hr(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ce(s)?Iu(s):hr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ce(t))return t;if(ee(t))return t}}const bu=/;(?![^(]*\))/g,Eu=/:([^]+)/,wu=/\/\*.*?\*\//gs;function Iu(t){const e={};return t.replace(wu,"").split(bu).forEach(n=>{if(n){const s=n.split(Eu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ut(t){let e="";if(ce(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const s=ut(t[n]);s&&(e+=s+" ")}else if(ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Tu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Su=ur(Tu);function jl(t){return!!t||t===""}const rs=t=>ce(t)?t:t==null?"":D(t)||ee(t)&&(t.toString===ql||!k(t.toString))?JSON.stringify(t,Vl,2):String(t),Vl=(t,e)=>e&&e.__v_isRef?Vl(t,e.value):Xt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Kl(e)?{[`Set(${e.size})`]:[...e.values()]}:ee(e)&&!D(e)&&!Gl(e)?String(e):e,Z={},Qt=[],We=()=>{},xu=()=>!1,Nu=/^on[^a-z]/,Ws=t=>Nu.test(t),fr=t=>t.startsWith("onUpdate:"),ve=Object.assign,dr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ru=Object.prototype.hasOwnProperty,$=(t,e)=>Ru.call(t,e),D=Array.isArray,Xt=t=>$s(t)==="[object Map]",Kl=t=>$s(t)==="[object Set]",k=t=>typeof t=="function",ce=t=>typeof t=="string",pr=t=>typeof t=="symbol",ee=t=>t!==null&&typeof t=="object",zl=t=>ee(t)&&k(t.then)&&k(t.catch),ql=Object.prototype.toString,$s=t=>ql.call(t),Au=t=>$s(t).slice(8,-1),Gl=t=>$s(t)==="[object Object]",_r=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ps=ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),js=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pu=/-(\w)/g,on=js(t=>t.replace(Pu,(e,n)=>n?n.toUpperCase():"")),Ou=/\B([A-Z])/g,dn=js(t=>t.replace(Ou,"-$1").toLowerCase()),Yl=js(t=>t.charAt(0).toUpperCase()+t.slice(1)),ui=js(t=>t?`on${Yl(t)}`:""),kn=(t,e)=>!Object.is(t,e),_s=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ri=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Co;const Du=()=>Co||(Co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Me;class Mu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ku(t,e=Me){e&&e.active&&e.effects.push(t)}function Fu(){return Me}const gr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ql=t=>(t.w&mt)>0,Xl=t=>(t.n&mt)>0,Lu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=mt},Bu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ql(i)&&!Xl(i)?i.delete(t):e[n++]=i,i.w&=~mt,i.n&=~mt}e.length=n}},Ai=new WeakMap;let Nn=0,mt=1;const Pi=30;let Fe;const Mt=Symbol(""),Oi=Symbol("");class mr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ku(this,s)}run(){if(!this.active)return this.fn();let e=Fe,n=ht;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Fe,Fe=this,ht=!0,mt=1<<++Nn,Nn<=Pi?Lu(this):bo(this),this.fn()}finally{Nn<=Pi&&Bu(this),mt=1<<--Nn,Fe=this.parent,ht=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Fe===this?this.deferStop=!0:this.active&&(bo(this),this.onStop&&this.onStop(),this.active=!1)}}function bo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ht=!0;const Jl=[];function pn(){Jl.push(ht),ht=!1}function _n(){const t=Jl.pop();ht=t===void 0?!0:t}function Se(t,e,n){if(ht&&Fe){let s=Ai.get(t);s||Ai.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=gr()),Zl(i)}}function Zl(t,e){let n=!1;Nn<=Pi?Xl(t)||(t.n|=mt,n=!Ql(t)):n=!t.has(Fe),n&&(t.add(Fe),Fe.deps.push(t))}function tt(t,e,n,s,i,r){const o=Ai.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&D(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":D(t)?_r(n)&&l.push(o.get("length")):(l.push(o.get(Mt)),Xt(t)&&l.push(o.get(Oi)));break;case"delete":D(t)||(l.push(o.get(Mt)),Xt(t)&&l.push(o.get(Oi)));break;case"set":Xt(t)&&l.push(o.get(Mt));break}if(l.length===1)l[0]&&Di(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Di(gr(a))}}function Di(t,e){const n=D(t)?t:[...t];for(const s of n)s.computed&&Eo(s);for(const s of n)s.computed||Eo(s)}function Eo(t,e){(t!==Fe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Uu=ur("__proto__,__v_isRef,__isVue"),ea=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pr)),Hu=yr(),Wu=yr(!1,!0),$u=yr(!0),wo=ju();function ju(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=j(this);for(let r=0,o=this.length;r<o;r++)Se(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(j)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pn();const s=j(this)[e].apply(this,n);return _n(),s}}),t}function Vu(t){const e=j(this);return Se(e,"has",t),e.hasOwnProperty(t)}function yr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?oh:ra:e?ia:sa).get(s))return s;const o=D(s);if(!t){if(o&&$(wo,i))return Reflect.get(wo,i,r);if(i==="hasOwnProperty")return Vu}const l=Reflect.get(s,i,r);return(pr(i)?ea.has(i):Uu(i))||(t||Se(s,"get",i),e)?l:ye(l)?o&&_r(i)?l:l.value:ee(l)?t?oa(l):br(l):l}}const Ku=ta(),zu=ta(!0);function ta(t=!1){return function(n,s,i,r){let o=n[s];if(ln(o)&&ye(o)&&!ye(i))return!1;if(!t&&(!Es(i)&&!ln(i)&&(o=j(o),i=j(i)),!D(n)&&ye(o)&&!ye(i)))return o.value=i,!0;const l=D(n)&&_r(s)?Number(s)<n.length:$(n,s),a=Reflect.set(n,s,i,r);return n===j(r)&&(l?kn(i,o)&&tt(n,"set",s,i):tt(n,"add",s,i)),a}}function qu(t,e){const n=$(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&tt(t,"delete",e,void 0),s}function Gu(t,e){const n=Reflect.has(t,e);return(!pr(e)||!ea.has(e))&&Se(t,"has",e),n}function Yu(t){return Se(t,"iterate",D(t)?"length":Mt),Reflect.ownKeys(t)}const na={get:Hu,set:Ku,deleteProperty:qu,has:Gu,ownKeys:Yu},Qu={get:$u,set(t,e){return!0},deleteProperty(t,e){return!0}},Xu=ve({},na,{get:Wu,set:zu}),vr=t=>t,Vs=t=>Reflect.getPrototypeOf(t);function os(t,e,n=!1,s=!1){t=t.__v_raw;const i=j(t),r=j(e);n||(e!==r&&Se(i,"get",e),Se(i,"get",r));const{has:o}=Vs(i),l=s?vr:n?wr:Fn;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function ls(t,e=!1){const n=this.__v_raw,s=j(n),i=j(t);return e||(t!==i&&Se(s,"has",t),Se(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function as(t,e=!1){return t=t.__v_raw,!e&&Se(j(t),"iterate",Mt),Reflect.get(t,"size",t)}function Io(t){t=j(t);const e=j(this);return Vs(e).has.call(e,t)||(e.add(t),tt(e,"add",t,t)),this}function To(t,e){e=j(e);const n=j(this),{has:s,get:i}=Vs(n);let r=s.call(n,t);r||(t=j(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?kn(e,o)&&tt(n,"set",t,e):tt(n,"add",t,e),this}function So(t){const e=j(this),{has:n,get:s}=Vs(e);let i=n.call(e,t);i||(t=j(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&tt(e,"delete",t,void 0),r}function xo(){const t=j(this),e=t.size!==0,n=t.clear();return e&&tt(t,"clear",void 0,void 0),n}function cs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=j(o),a=e?vr:t?wr:Fn;return!t&&Se(l,"iterate",Mt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function us(t,e,n){return function(...s){const i=this.__v_raw,r=j(i),o=Xt(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?vr:e?wr:Fn;return!e&&Se(r,"iterate",a?Oi:Mt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return t==="delete"?!1:this}}function Ju(){const t={get(r){return os(this,r)},get size(){return as(this)},has:ls,add:Io,set:To,delete:So,clear:xo,forEach:cs(!1,!1)},e={get(r){return os(this,r,!1,!0)},get size(){return as(this)},has:ls,add:Io,set:To,delete:So,clear:xo,forEach:cs(!1,!0)},n={get(r){return os(this,r,!0)},get size(){return as(this,!0)},has(r){return ls.call(this,r,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:cs(!0,!1)},s={get(r){return os(this,r,!0,!0)},get size(){return as(this,!0)},has(r){return ls.call(this,r,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:cs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=us(r,!1,!1),n[r]=us(r,!0,!1),e[r]=us(r,!1,!0),s[r]=us(r,!0,!0)}),[t,n,e,s]}const[Zu,eh,th,nh]=Ju();function Cr(t,e){const n=e?t?nh:th:t?eh:Zu;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get($(n,i)&&i in s?n:s,i,r)}const sh={get:Cr(!1,!1)},ih={get:Cr(!1,!0)},rh={get:Cr(!0,!1)},sa=new WeakMap,ia=new WeakMap,ra=new WeakMap,oh=new WeakMap;function lh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ah(t){return t.__v_skip||!Object.isExtensible(t)?0:lh(Au(t))}function br(t){return ln(t)?t:Er(t,!1,na,sh,sa)}function ch(t){return Er(t,!1,Xu,ih,ia)}function oa(t){return Er(t,!0,Qu,rh,ra)}function Er(t,e,n,s,i){if(!ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=ah(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Jt(t){return ln(t)?Jt(t.__v_raw):!!(t&&t.__v_isReactive)}function ln(t){return!!(t&&t.__v_isReadonly)}function Es(t){return!!(t&&t.__v_isShallow)}function la(t){return Jt(t)||ln(t)}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function aa(t){return bs(t,"__v_skip",!0),t}const Fn=t=>ee(t)?br(t):t,wr=t=>ee(t)?oa(t):t;function ca(t){ht&&Fe&&(t=j(t),Zl(t.dep||(t.dep=gr())))}function ua(t,e){t=j(t);const n=t.dep;n&&Di(n)}function ye(t){return!!(t&&t.__v_isRef===!0)}function wn(t){return uh(t,!1)}function uh(t,e){return ye(t)?t:new hh(t,e)}class hh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:j(e),this._value=n?e:Fn(e)}get value(){return ca(this),this._value}set value(e){const n=this.__v_isShallow||Es(e)||ln(e);e=n?e:j(e),kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Fn(e),ua(this))}}function fh(t){return ye(t)?t.value:t}const dh={get:(t,e,n)=>fh(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ye(i)&&!ye(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ha(t){return Jt(t)?t:new Proxy(t,dh)}var fa;class ph{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[fa]=!1,this._dirty=!0,this.effect=new mr(e,()=>{this._dirty||(this._dirty=!0,ua(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=j(this);return ca(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}fa="__v_isReadonly";function _h(t,e,n=!1){let s,i;const r=k(t);return r?(s=t,i=We):(s=t.get,i=t.set),new ph(s,i,r||!i,n)}function ft(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ks(r,e,n)}return i}function Oe(t,e,n,s){if(k(t)){const r=ft(t,e,n,s);return r&&zl(r)&&r.catch(o=>{Ks(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Oe(t[r],e,n,s));return i}function Ks(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){ft(a,null,10,[t,o,l]);return}}gh(t,n,i,s)}function gh(t,e,n,s=!0){console.error(t)}let Ln=!1,Mi=!1;const me=[];let Ge=0;const Zt=[];let Xe=null,Nt=0;const da=Promise.resolve();let Ir=null;function pa(t){const e=Ir||da;return t?e.then(this?t.bind(this):t):e}function mh(t){let e=Ge+1,n=me.length;for(;e<n;){const s=e+n>>>1;Bn(me[s])<t?e=s+1:n=s}return e}function Tr(t){(!me.length||!me.includes(t,Ln&&t.allowRecurse?Ge+1:Ge))&&(t.id==null?me.push(t):me.splice(mh(t.id),0,t),_a())}function _a(){!Ln&&!Mi&&(Mi=!0,Ir=da.then(ma))}function yh(t){const e=me.indexOf(t);e>Ge&&me.splice(e,1)}function vh(t){D(t)?Zt.push(...t):(!Xe||!Xe.includes(t,t.allowRecurse?Nt+1:Nt))&&Zt.push(t),_a()}function No(t,e=Ln?Ge+1:0){for(;e<me.length;e++){const n=me[e];n&&n.pre&&(me.splice(e,1),e--,n())}}function ga(t){if(Zt.length){const e=[...new Set(Zt)];if(Zt.length=0,Xe){Xe.push(...e);return}for(Xe=e,Xe.sort((n,s)=>Bn(n)-Bn(s)),Nt=0;Nt<Xe.length;Nt++)Xe[Nt]();Xe=null,Nt=0}}const Bn=t=>t.id==null?1/0:t.id,Ch=(t,e)=>{const n=Bn(t)-Bn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ma(t){Mi=!1,Ln=!0,me.sort(Ch);const e=We;try{for(Ge=0;Ge<me.length;Ge++){const n=me[Ge];n&&n.active!==!1&&ft(n,null,14)}}finally{Ge=0,me.length=0,ga(),Ln=!1,Ir=null,(me.length||Zt.length)&&ma()}}function bh(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Z;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Z;d&&(i=n.map(_=>ce(_)?_.trim():_)),h&&(i=n.map(Ri))}let l,a=s[l=ui(e)]||s[l=ui(on(e))];!a&&r&&(a=s[l=ui(dn(e))]),a&&Oe(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Oe(c,t,6,i)}}function ya(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!k(t)){const a=c=>{const u=ya(c,e,!0);u&&(l=!0,ve(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ee(t)&&s.set(t,null),null):(D(r)?r.forEach(a=>o[a]=null):ve(o,r),ee(t)&&s.set(t,o),o)}function zs(t,e){return!t||!Ws(e)?!1:(e=e.slice(2).replace(/Once$/,""),$(t,e[0].toLowerCase()+e.slice(1))||$(t,dn(e))||$(t,e))}let Pe=null,va=null;function ws(t){const e=Pe;return Pe=t,va=t&&t.type.__scopeId||null,e}function Eh(t,e=Pe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Bo(-1);const r=ws(e);let o;try{o=t(...i)}finally{ws(r),s._d&&Bo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function hi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:_,ctx:v,inheritAttrs:I}=t;let M,W;const oe=ws(t);try{if(n.shapeFlag&4){const q=i||s;M=qe(u.call(q,q,h,r,_,d,v)),W=a}else{const q=e;M=qe(q.length>1?q(r,{attrs:a,slots:l,emit:c}):q(r,null)),W=e.props?a:wh(a)}}catch(q){An.length=0,Ks(q,t,1),M=dt(Ze)}let P=M;if(W&&I!==!1){const q=Object.keys(W),{shapeFlag:_e}=P;q.length&&_e&7&&(o&&q.some(fr)&&(W=Ih(W,o)),P=yt(P,W))}return n.dirs&&(P=yt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),M=P,ws(oe),M}const wh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ws(n))&&((e||(e={}))[n]=t[n]);return e},Ih=(t,e)=>{const n={};for(const s in t)(!fr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Th(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Ro(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!zs(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Ro(s,o,c):!0:!!o;return!1}function Ro(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!zs(n,r))return!0}return!1}function Sh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xh=t=>t.__isSuspense;function Nh(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):vh(t)}function Rh(t,e){if(re){let n=re.provides;const s=re.parent&&re.parent.provides;s===n&&(n=re.provides=Object.create(s)),n[t]=e}}function gs(t,e,n=!1){const s=re||Pe;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&k(e)?e.call(s.proxy):e}}const hs={};function ms(t,e,n){return Ca(t,e,n)}function Ca(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Z){const l=Fu()===(re==null?void 0:re.scope)?re:null;let a,c=!1,u=!1;if(ye(t)?(a=()=>t.value,c=Es(t)):Jt(t)?(a=()=>t,s=!0):D(t)?(u=!0,c=t.some(P=>Jt(P)||Es(P)),a=()=>t.map(P=>{if(ye(P))return P.value;if(Jt(P))return Pt(P);if(k(P))return ft(P,l,2)})):k(t)?e?a=()=>ft(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),Oe(t,l,3,[d])}:a=We,e&&s){const P=a;a=()=>Pt(P())}let h,d=P=>{h=W.onStop=()=>{ft(P,l,4)}},_;if(Hn)if(d=We,e?n&&Oe(e,l,3,[a(),u?[]:void 0,d]):a(),i==="sync"){const P=Nf();_=P.__watcherHandles||(P.__watcherHandles=[])}else return We;let v=u?new Array(t.length).fill(hs):hs;const I=()=>{if(W.active)if(e){const P=W.run();(s||c||(u?P.some((q,_e)=>kn(q,v[_e])):kn(P,v)))&&(h&&h(),Oe(e,l,3,[P,v===hs?void 0:u&&v[0]===hs?[]:v,d]),v=P)}else W.run()};I.allowRecurse=!!e;let M;i==="sync"?M=I:i==="post"?M=()=>Ee(I,l&&l.suspense):(I.pre=!0,l&&(I.id=l.uid),M=()=>Tr(I));const W=new mr(a,M);e?n?I():v=W.run():i==="post"?Ee(W.run.bind(W),l&&l.suspense):W.run();const oe=()=>{W.stop(),l&&l.scope&&dr(l.scope.effects,W)};return _&&_.push(oe),oe}function Ah(t,e,n){const s=this.proxy,i=ce(t)?t.includes(".")?ba(s,t):()=>s[t]:t.bind(s,s);let r;k(e)?r=e:(r=e.handler,n=e);const o=re;an(this);const l=Ca(i,r.bind(s),n);return o?an(o):kt(),l}function ba(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Pt(t,e){if(!ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ye(t))Pt(t.value,e);else if(D(t))for(let n=0;n<t.length;n++)Pt(t[n],e);else if(Kl(t)||Xt(t))t.forEach(n=>{Pt(n,e)});else if(Gl(t))for(const n in t)Pt(t[n],e);return t}function Ph(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Sr(()=>{t.isMounted=!0}),Ta(()=>{t.isUnmounting=!0}),t}const Ae=[Function,Array],Oh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ae,onEnter:Ae,onAfterEnter:Ae,onEnterCancelled:Ae,onBeforeLeave:Ae,onLeave:Ae,onAfterLeave:Ae,onLeaveCancelled:Ae,onBeforeAppear:Ae,onAppear:Ae,onAfterAppear:Ae,onAppearCancelled:Ae},setup(t,{slots:e}){const n=Cf(),s=Ph();let i;return()=>{const r=e.default&&wa(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const I of r)if(I.type!==Ze){o=I;break}}const l=j(t),{mode:a}=l;if(s.isLeaving)return fi(o);const c=Ao(o);if(!c)return fi(o);const u=ki(c,l,s,n);Fi(c,u);const h=n.subTree,d=h&&Ao(h);let _=!1;const{getTransitionKey:v}=c.type;if(v){const I=v();i===void 0?i=I:I!==i&&(i=I,_=!0)}if(d&&d.type!==Ze&&(!Rt(c,d)||_)){const I=ki(d,l,s,n);if(Fi(d,I),a==="out-in")return s.isLeaving=!0,I.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},fi(o);a==="in-out"&&c.type!==Ze&&(I.delayLeave=(M,W,oe)=>{const P=Ea(s,d);P[String(d.key)]=d,M._leaveCb=()=>{W(),M._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=oe})}return o}}},Dh=Oh;function Ea(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ki(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:v,onBeforeAppear:I,onAppear:M,onAfterAppear:W,onAppearCancelled:oe}=e,P=String(t.key),q=Ea(n,t),_e=(U,ue)=>{U&&Oe(U,s,9,ue)},Vt=(U,ue)=>{const te=ue[1];_e(U,ue),D(U)?U.every(Ne=>Ne.length<=1)&&te():U.length<=1&&te()},lt={mode:r,persisted:o,beforeEnter(U){let ue=l;if(!n.isMounted)if(i)ue=I||l;else return;U._leaveCb&&U._leaveCb(!0);const te=q[P];te&&Rt(t,te)&&te.el._leaveCb&&te.el._leaveCb(),_e(ue,[U])},enter(U){let ue=a,te=c,Ne=u;if(!n.isMounted)if(i)ue=M||a,te=W||c,Ne=oe||u;else return;let je=!1;const Ye=U._enterCb=bn=>{je||(je=!0,bn?_e(Ne,[U]):_e(te,[U]),lt.delayedLeave&&lt.delayedLeave(),U._enterCb=void 0)};ue?Vt(ue,[U,Ye]):Ye()},leave(U,ue){const te=String(t.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return ue();_e(h,[U]);let Ne=!1;const je=U._leaveCb=Ye=>{Ne||(Ne=!0,ue(),Ye?_e(v,[U]):_e(_,[U]),U._leaveCb=void 0,q[te]===t&&delete q[te])};q[te]=t,d?Vt(d,[U,je]):je()},clone(U){return ki(U,e,n,s)}};return lt}function fi(t){if(qs(t))return t=yt(t),t.children=null,t}function Ao(t){return qs(t)?t.children?t.children[0]:void 0:t}function Fi(t,e){t.shapeFlag&6&&t.component?Fi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wa(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ke?(o.patchFlag&128&&i++,s=s.concat(wa(o.children,e,l))):(e||o.type!==Ze)&&s.push(l!=null?yt(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const ys=t=>!!t.type.__asyncLoader,qs=t=>t.type.__isKeepAlive;function Mh(t,e){Ia(t,"a",e)}function kh(t,e){Ia(t,"da",e)}function Ia(t,e,n=re){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Gs(e,s,n),n){let i=n.parent;for(;i&&i.parent;)qs(i.parent.vnode)&&Fh(s,e,n,i),i=i.parent}}function Fh(t,e,n,s){const i=Gs(e,t,s,!0);Sa(()=>{dr(s[e],i)},n)}function Gs(t,e,n=re,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pn(),an(n);const l=Oe(e,n,t,o);return kt(),_n(),l});return s?i.unshift(r):i.push(r),r}}const it=t=>(e,n=re)=>(!Hn||t==="sp")&&Gs(t,(...s)=>e(...s),n),Lh=it("bm"),Sr=it("m"),Bh=it("bu"),Uh=it("u"),Ta=it("bum"),Sa=it("um"),Hh=it("sp"),Wh=it("rtg"),$h=it("rtc");function jh(t,e=re){Gs("ec",t,e)}function Po(t,e){const n=Pe;if(n===null)return t;const s=Xs(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=Z]=e[r];o&&(k(o)&&(o={mounted:o,updated:o}),o.deep&&Pt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function wt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(pn(),Oe(a,n,8,[t.el,l,t,e]),_n())}}const Vh=Symbol();function Kh(t,e,n,s){let i;const r=n&&n[s];if(D(t)||ce(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Li=t=>t?La(t)?Xs(t)||t.proxy:Li(t.parent):null,Rn=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Li(t.parent),$root:t=>Li(t.root),$emit:t=>t.emit,$options:t=>xr(t),$forceUpdate:t=>t.f||(t.f=()=>Tr(t.update)),$nextTick:t=>t.n||(t.n=pa.bind(t.proxy)),$watch:t=>Ah.bind(t)}),di=(t,e)=>t!==Z&&!t.__isScriptSetup&&$(t,e),zh={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(di(s,e))return o[e]=1,s[e];if(i!==Z&&$(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&$(c,e))return o[e]=3,r[e];if(n!==Z&&$(n,e))return o[e]=4,n[e];Bi&&(o[e]=0)}}const u=Rn[e];let h,d;if(u)return e==="$attrs"&&Se(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==Z&&$(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,$(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return di(i,e)?(i[e]=n,!0):s!==Z&&$(s,e)?(s[e]=n,!0):$(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==Z&&$(t,o)||di(e,o)||(l=r[0])&&$(l,o)||$(s,o)||$(Rn,o)||$(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:$(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Bi=!0;function qh(t){const e=xr(t),n=t.proxy,s=t.ctx;Bi=!1,e.beforeCreate&&Oo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:v,activated:I,deactivated:M,beforeDestroy:W,beforeUnmount:oe,destroyed:P,unmounted:q,render:_e,renderTracked:Vt,renderTriggered:lt,errorCaptured:U,serverPrefetch:ue,expose:te,inheritAttrs:Ne,components:je,directives:Ye,filters:bn}=e;if(c&&Gh(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ne in o){const G=o[ne];k(G)&&(s[ne]=G.bind(n))}if(i){const ne=i.call(n,n);ee(ne)&&(t.data=br(ne))}if(Bi=!0,r)for(const ne in r){const G=r[ne],bt=k(G)?G.bind(n,n):k(G.get)?G.get.bind(n,n):We,ss=!k(G)&&k(G.set)?G.set.bind(n):We,Et=Sf({get:bt,set:ss});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>Et.value,set:Ve=>Et.value=Ve})}if(l)for(const ne in l)xa(l[ne],s,n,ne);if(a){const ne=k(a)?a.call(n):a;Reflect.ownKeys(ne).forEach(G=>{Rh(G,ne[G])})}u&&Oo(u,t,"c");function Ce(ne,G){D(G)?G.forEach(bt=>ne(bt.bind(n))):G&&ne(G.bind(n))}if(Ce(Lh,h),Ce(Sr,d),Ce(Bh,_),Ce(Uh,v),Ce(Mh,I),Ce(kh,M),Ce(jh,U),Ce($h,Vt),Ce(Wh,lt),Ce(Ta,oe),Ce(Sa,q),Ce(Hh,ue),D(te))if(te.length){const ne=t.exposed||(t.exposed={});te.forEach(G=>{Object.defineProperty(ne,G,{get:()=>n[G],set:bt=>n[G]=bt})})}else t.exposed||(t.exposed={});_e&&t.render===We&&(t.render=_e),Ne!=null&&(t.inheritAttrs=Ne),je&&(t.components=je),Ye&&(t.directives=Ye)}function Gh(t,e,n=We,s=!1){D(t)&&(t=Ui(t));for(const i in t){const r=t[i];let o;ee(r)?"default"in r?o=gs(r.from||i,r.default,!0):o=gs(r.from||i):o=gs(r),ye(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Oo(t,e,n){Oe(D(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xa(t,e,n,s){const i=s.includes(".")?ba(n,s):()=>n[s];if(ce(t)){const r=e[t];k(r)&&ms(i,r)}else if(k(t))ms(i,t.bind(n));else if(ee(t))if(D(t))t.forEach(r=>xa(r,e,n,s));else{const r=k(t.handler)?t.handler.bind(n):e[t.handler];k(r)&&ms(i,r,t)}}function xr(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Is(a,c,o,!0)),Is(a,e,o)),ee(e)&&r.set(e,a),a}function Is(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Is(t,r,n,!0),i&&i.forEach(o=>Is(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Yh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Yh={data:Do,props:Tt,emits:Tt,methods:Tt,computed:Tt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Tt,directives:Tt,watch:Xh,provide:Do,inject:Qh};function Do(t,e){return e?t?function(){return ve(k(t)?t.call(this,this):t,k(e)?e.call(this,this):e)}:e:t}function Qh(t,e){return Tt(Ui(t),Ui(e))}function Ui(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function be(t,e){return t?[...new Set([].concat(t,e))]:e}function Tt(t,e){return t?ve(ve(Object.create(null),t),e):e}function Xh(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const s in e)n[s]=be(t[s],e[s]);return n}function Jh(t,e,n,s=!1){const i={},r={};bs(r,Qs,1),t.propsDefaults=Object.create(null),Na(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:ch(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Zh(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=j(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(zs(t.emitsOptions,d))continue;const _=e[d];if(a)if($(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const v=on(d);i[v]=Hi(a,l,v,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{Na(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!$(e,h)&&((u=dn(h))===h||!$(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Hi(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!$(e,h))&&(delete r[h],c=!0)}c&&tt(t,"set","$attrs")}function Na(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ps(a))continue;const c=e[a];let u;i&&$(i,u=on(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:zs(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=j(n),c=l||Z;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Hi(i,a,h,c[h],t,!$(c,h))}}return o}function Hi(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=$(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&k(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(an(i),s=c[n]=a.call(null,e),kt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===dn(n))&&(s=!0))}return s}function Ra(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!k(t)){const u=h=>{a=!0;const[d,_]=Ra(h,e,!0);ve(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return ee(t)&&s.set(t,Qt),Qt;if(D(r))for(let u=0;u<r.length;u++){const h=on(r[u]);Mo(h)&&(o[h]=Z)}else if(r)for(const u in r){const h=on(u);if(Mo(h)){const d=r[u],_=o[h]=D(d)||k(d)?{type:d}:Object.assign({},d);if(_){const v=Lo(Boolean,_.type),I=Lo(String,_.type);_[0]=v>-1,_[1]=I<0||v<I,(v>-1||$(_,"default"))&&l.push(h)}}}const c=[o,l];return ee(t)&&s.set(t,c),c}function Mo(t){return t[0]!=="$"}function ko(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Fo(t,e){return ko(t)===ko(e)}function Lo(t,e){return D(e)?e.findIndex(n=>Fo(n,t)):k(e)&&Fo(e,t)?0:-1}const Aa=t=>t[0]==="_"||t==="$stable",Nr=t=>D(t)?t.map(qe):[qe(t)],ef=(t,e,n)=>{if(e._n)return e;const s=Eh((...i)=>Nr(e(...i)),n);return s._c=!1,s},Pa=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Aa(i))continue;const r=t[i];if(k(r))e[i]=ef(i,r,s);else if(r!=null){const o=Nr(r);e[i]=()=>o}}},Oa=(t,e)=>{const n=Nr(e);t.slots.default=()=>n},tf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=j(e),bs(e,"_",n)):Pa(e,t.slots={})}else t.slots={},e&&Oa(t,e);bs(t.slots,Qs,1)},nf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Z;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ve(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Pa(e,i)),o=e}else e&&(Oa(t,e),o={default:1});if(r)for(const l in i)!Aa(l)&&!(l in o)&&delete i[l]};function Da(){return{app:null,config:{isNativeTag:xu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sf=0;function rf(t,e){return function(s,i=null){k(s)||(s=Object.assign({},s)),i!=null&&!ee(i)&&(i=null);const r=Da(),o=new Set;let l=!1;const a=r.app={_uid:sf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Rf,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&k(c.install)?(o.add(c),c.install(a,...u)):k(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=dt(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Xs(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function Wi(t,e,n,s,i=!1){if(D(t)){t.forEach((d,_)=>Wi(d,e&&(D(e)?e[_]:e),n,s,i));return}if(ys(s)&&!i)return;const r=s.shapeFlag&4?Xs(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===Z?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(ce(c)?(u[c]=null,$(h,c)&&(h[c]=null)):ye(c)&&(c.value=null)),k(a))ft(a,l,12,[o,u]);else{const d=ce(a),_=ye(a);if(d||_){const v=()=>{if(t.f){const I=d?$(h,a)?h[a]:u[a]:a.value;i?D(I)&&dr(I,r):D(I)?I.includes(r)||I.push(r):d?(u[a]=[r],$(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,$(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Ee(v,n)):v()}}}const Ee=Nh;function of(t){return lf(t)}function lf(t,e){const n=Du();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=We,insertStaticContent:v}=t,I=(f,p,g,y=null,m=null,w=null,S=!1,E=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Rt(f,p)&&(y=is(f),Ve(f,m,w,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:C,ref:N,shapeFlag:x}=p;switch(C){case Ys:M(f,p,g,y);break;case Ze:W(f,p,g,y);break;case pi:f==null&&oe(p,g,y,S);break;case ke:je(f,p,g,y,m,w,S,E,T);break;default:x&1?_e(f,p,g,y,m,w,S,E,T):x&6?Ye(f,p,g,y,m,w,S,E,T):(x&64||x&128)&&C.process(f,p,g,y,m,w,S,E,T,Kt)}N!=null&&m&&Wi(N,f&&f.ref,w,p||f,!p)},M=(f,p,g,y)=>{if(f==null)s(p.el=l(p.children),g,y);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},W=(f,p,g,y)=>{f==null?s(p.el=a(p.children||""),g,y):p.el=f.el},oe=(f,p,g,y)=>{[f.el,f.anchor]=v(f.children,p,g,y,f.el,f.anchor)},P=({el:f,anchor:p},g,y)=>{let m;for(;f&&f!==p;)m=d(f),s(f,g,y),f=m;s(p,g,y)},q=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},_e=(f,p,g,y,m,w,S,E,T)=>{S=S||p.type==="svg",f==null?Vt(p,g,y,m,w,S,E,T):ue(f,p,m,w,S,E,T)},Vt=(f,p,g,y,m,w,S,E)=>{let T,C;const{type:N,props:x,shapeFlag:R,transition:O,dirs:H}=f;if(T=f.el=o(f.type,w,x&&x.is,x),R&8?u(T,f.children):R&16&&U(f.children,T,null,y,m,w&&N!=="foreignObject",S,E),H&&wt(f,null,y,"created"),lt(T,f,f.scopeId,S,y),x){for(const K in x)K!=="value"&&!ps(K)&&r(T,K,null,x[K],w,f.children,y,m,Qe);"value"in x&&r(T,"value",null,x.value),(C=x.onVnodeBeforeMount)&&ze(C,y,f)}H&&wt(f,null,y,"beforeMount");const Y=(!m||m&&!m.pendingBranch)&&O&&!O.persisted;Y&&O.beforeEnter(T),s(T,p,g),((C=x&&x.onVnodeMounted)||Y||H)&&Ee(()=>{C&&ze(C,y,f),Y&&O.enter(T),H&&wt(f,null,y,"mounted")},m)},lt=(f,p,g,y,m)=>{if(g&&_(f,g),y)for(let w=0;w<y.length;w++)_(f,y[w]);if(m){let w=m.subTree;if(p===w){const S=m.vnode;lt(f,S,S.scopeId,S.slotScopeIds,m.parent)}}},U=(f,p,g,y,m,w,S,E,T=0)=>{for(let C=T;C<f.length;C++){const N=f[C]=E?ct(f[C]):qe(f[C]);I(null,N,p,g,y,m,w,S,E)}},ue=(f,p,g,y,m,w,S)=>{const E=p.el=f.el;let{patchFlag:T,dynamicChildren:C,dirs:N}=p;T|=f.patchFlag&16;const x=f.props||Z,R=p.props||Z;let O;g&&It(g,!1),(O=R.onVnodeBeforeUpdate)&&ze(O,g,p,f),N&&wt(p,f,g,"beforeUpdate"),g&&It(g,!0);const H=m&&p.type!=="foreignObject";if(C?te(f.dynamicChildren,C,E,g,y,H,w):S||G(f,p,E,null,g,y,H,w,!1),T>0){if(T&16)Ne(E,p,x,R,g,y,m);else if(T&2&&x.class!==R.class&&r(E,"class",null,R.class,m),T&4&&r(E,"style",x.style,R.style,m),T&8){const Y=p.dynamicProps;for(let K=0;K<Y.length;K++){const ie=Y[K],De=x[ie],zt=R[ie];(zt!==De||ie==="value")&&r(E,ie,De,zt,m,f.children,g,y,Qe)}}T&1&&f.children!==p.children&&u(E,p.children)}else!S&&C==null&&Ne(E,p,x,R,g,y,m);((O=R.onVnodeUpdated)||N)&&Ee(()=>{O&&ze(O,g,p,f),N&&wt(p,f,g,"updated")},y)},te=(f,p,g,y,m,w,S)=>{for(let E=0;E<p.length;E++){const T=f[E],C=p[E],N=T.el&&(T.type===ke||!Rt(T,C)||T.shapeFlag&70)?h(T.el):g;I(T,C,N,null,y,m,w,S,!0)}},Ne=(f,p,g,y,m,w,S)=>{if(g!==y){if(g!==Z)for(const E in g)!ps(E)&&!(E in y)&&r(f,E,g[E],null,S,p.children,m,w,Qe);for(const E in y){if(ps(E))continue;const T=y[E],C=g[E];T!==C&&E!=="value"&&r(f,E,C,T,S,p.children,m,w,Qe)}"value"in y&&r(f,"value",g.value,y.value)}},je=(f,p,g,y,m,w,S,E,T)=>{const C=p.el=f?f.el:l(""),N=p.anchor=f?f.anchor:l("");let{patchFlag:x,dynamicChildren:R,slotScopeIds:O}=p;O&&(E=E?E.concat(O):O),f==null?(s(C,g,y),s(N,g,y),U(p.children,g,N,m,w,S,E,T)):x>0&&x&64&&R&&f.dynamicChildren?(te(f.dynamicChildren,R,g,m,w,S,E),(p.key!=null||m&&p===m.subTree)&&Ma(f,p,!0)):G(f,p,g,N,m,w,S,E,T)},Ye=(f,p,g,y,m,w,S,E,T)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?m.ctx.activate(p,g,y,S,T):bn(p,g,y,m,w,S,T):po(f,p,T)},bn=(f,p,g,y,m,w,S)=>{const E=f.component=vf(f,y,m);if(qs(f)&&(E.ctx.renderer=Kt),bf(E),E.asyncDep){if(m&&m.registerDep(E,Ce),!f.el){const T=E.subTree=dt(Ze);W(null,T,p,g)}return}Ce(E,f,p,g,m,w,S)},po=(f,p,g)=>{const y=p.component=f.component;if(Th(f,p,g))if(y.asyncDep&&!y.asyncResolved){ne(y,p,g);return}else y.next=p,yh(y.update),y.update();else p.el=f.el,y.vnode=p},Ce=(f,p,g,y,m,w,S)=>{const E=()=>{if(f.isMounted){let{next:N,bu:x,u:R,parent:O,vnode:H}=f,Y=N,K;It(f,!1),N?(N.el=H.el,ne(f,N,S)):N=H,x&&_s(x),(K=N.props&&N.props.onVnodeBeforeUpdate)&&ze(K,O,N,H),It(f,!0);const ie=hi(f),De=f.subTree;f.subTree=ie,I(De,ie,h(De.el),is(De),f,m,w),N.el=ie.el,Y===null&&Sh(f,ie.el),R&&Ee(R,m),(K=N.props&&N.props.onVnodeUpdated)&&Ee(()=>ze(K,O,N,H),m)}else{let N;const{el:x,props:R}=p,{bm:O,m:H,parent:Y}=f,K=ys(p);if(It(f,!1),O&&_s(O),!K&&(N=R&&R.onVnodeBeforeMount)&&ze(N,Y,p),It(f,!0),x&&ci){const ie=()=>{f.subTree=hi(f),ci(x,f.subTree,f,m,null)};K?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ie()):ie()}else{const ie=f.subTree=hi(f);I(null,ie,g,y,f,m,w),p.el=ie.el}if(H&&Ee(H,m),!K&&(N=R&&R.onVnodeMounted)){const ie=p;Ee(()=>ze(N,Y,ie),m)}(p.shapeFlag&256||Y&&ys(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&Ee(f.a,m),f.isMounted=!0,p=g=y=null}},T=f.effect=new mr(E,()=>Tr(C),f.scope),C=f.update=()=>T.run();C.id=f.uid,It(f,!0),C()},ne=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Zh(f,p.props,y,g),nf(f,p.children,g),pn(),No(),_n()},G=(f,p,g,y,m,w,S,E,T=!1)=>{const C=f&&f.children,N=f?f.shapeFlag:0,x=p.children,{patchFlag:R,shapeFlag:O}=p;if(R>0){if(R&128){ss(C,x,g,y,m,w,S,E,T);return}else if(R&256){bt(C,x,g,y,m,w,S,E,T);return}}O&8?(N&16&&Qe(C,m,w),x!==C&&u(g,x)):N&16?O&16?ss(C,x,g,y,m,w,S,E,T):Qe(C,m,w,!0):(N&8&&u(g,""),O&16&&U(x,g,y,m,w,S,E,T))},bt=(f,p,g,y,m,w,S,E,T)=>{f=f||Qt,p=p||Qt;const C=f.length,N=p.length,x=Math.min(C,N);let R;for(R=0;R<x;R++){const O=p[R]=T?ct(p[R]):qe(p[R]);I(f[R],O,g,null,m,w,S,E,T)}C>N?Qe(f,m,w,!0,!1,x):U(p,g,y,m,w,S,E,T,x)},ss=(f,p,g,y,m,w,S,E,T)=>{let C=0;const N=p.length;let x=f.length-1,R=N-1;for(;C<=x&&C<=R;){const O=f[C],H=p[C]=T?ct(p[C]):qe(p[C]);if(Rt(O,H))I(O,H,g,null,m,w,S,E,T);else break;C++}for(;C<=x&&C<=R;){const O=f[x],H=p[R]=T?ct(p[R]):qe(p[R]);if(Rt(O,H))I(O,H,g,null,m,w,S,E,T);else break;x--,R--}if(C>x){if(C<=R){const O=R+1,H=O<N?p[O].el:y;for(;C<=R;)I(null,p[C]=T?ct(p[C]):qe(p[C]),g,H,m,w,S,E,T),C++}}else if(C>R)for(;C<=x;)Ve(f[C],m,w,!0),C++;else{const O=C,H=C,Y=new Map;for(C=H;C<=R;C++){const Re=p[C]=T?ct(p[C]):qe(p[C]);Re.key!=null&&Y.set(Re.key,C)}let K,ie=0;const De=R-H+1;let zt=!1,mo=0;const En=new Array(De);for(C=0;C<De;C++)En[C]=0;for(C=O;C<=x;C++){const Re=f[C];if(ie>=De){Ve(Re,m,w,!0);continue}let Ke;if(Re.key!=null)Ke=Y.get(Re.key);else for(K=H;K<=R;K++)if(En[K-H]===0&&Rt(Re,p[K])){Ke=K;break}Ke===void 0?Ve(Re,m,w,!0):(En[Ke-H]=C+1,Ke>=mo?mo=Ke:zt=!0,I(Re,p[Ke],g,null,m,w,S,E,T),ie++)}const yo=zt?af(En):Qt;for(K=yo.length-1,C=De-1;C>=0;C--){const Re=H+C,Ke=p[Re],vo=Re+1<N?p[Re+1].el:y;En[C]===0?I(null,Ke,g,vo,m,w,S,E,T):zt&&(K<0||C!==yo[K]?Et(Ke,g,vo,2):K--)}}},Et=(f,p,g,y,m=null)=>{const{el:w,type:S,transition:E,children:T,shapeFlag:C}=f;if(C&6){Et(f.component.subTree,p,g,y);return}if(C&128){f.suspense.move(p,g,y);return}if(C&64){S.move(f,p,g,Kt);return}if(S===ke){s(w,p,g);for(let x=0;x<T.length;x++)Et(T[x],p,g,y);s(f.anchor,p,g);return}if(S===pi){P(f,p,g);return}if(y!==2&&C&1&&E)if(y===0)E.beforeEnter(w),s(w,p,g),Ee(()=>E.enter(w),m);else{const{leave:x,delayLeave:R,afterLeave:O}=E,H=()=>s(w,p,g),Y=()=>{x(w,()=>{H(),O&&O()})};R?R(w,H,Y):Y()}else s(w,p,g)},Ve=(f,p,g,y=!1,m=!1)=>{const{type:w,props:S,ref:E,children:T,dynamicChildren:C,shapeFlag:N,patchFlag:x,dirs:R}=f;if(E!=null&&Wi(E,null,g,f,!0),N&256){p.ctx.deactivate(f);return}const O=N&1&&R,H=!ys(f);let Y;if(H&&(Y=S&&S.onVnodeBeforeUnmount)&&ze(Y,p,f),N&6)Cu(f.component,g,y);else{if(N&128){f.suspense.unmount(g,y);return}O&&wt(f,null,p,"beforeUnmount"),N&64?f.type.remove(f,p,g,m,Kt,y):C&&(w!==ke||x>0&&x&64)?Qe(C,p,g,!1,!0):(w===ke&&x&384||!m&&N&16)&&Qe(T,p,g),y&&_o(f)}(H&&(Y=S&&S.onVnodeUnmounted)||O)&&Ee(()=>{Y&&ze(Y,p,f),O&&wt(f,null,p,"unmounted")},g)},_o=f=>{const{type:p,el:g,anchor:y,transition:m}=f;if(p===ke){vu(g,y);return}if(p===pi){q(f);return}const w=()=>{i(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:E}=m,T=()=>S(g,w);E?E(f.el,w,T):T()}else w()},vu=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Cu=(f,p,g)=>{const{bum:y,scope:m,update:w,subTree:S,um:E}=f;y&&_s(y),m.stop(),w&&(w.active=!1,Ve(S,f,p,g)),E&&Ee(E,p),Ee(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Qe=(f,p,g,y=!1,m=!1,w=0)=>{for(let S=w;S<f.length;S++)Ve(f[S],p,g,y,m)},is=f=>f.shapeFlag&6?is(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),go=(f,p,g)=>{f==null?p._vnode&&Ve(p._vnode,null,null,!0):I(p._vnode||null,f,p,null,null,null,g),No(),ga(),p._vnode=f},Kt={p:I,um:Ve,m:Et,r:_o,mt:bn,mc:U,pc:G,pbc:te,n:is,o:t};let ai,ci;return e&&([ai,ci]=e(Kt)),{render:go,hydrate:ai,createApp:rf(go,ai)}}function It({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ma(t,e,n=!1){const s=t.children,i=e.children;if(D(s)&&D(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=ct(i[r]),l.el=o.el),n||Ma(o,l)),l.type===Ys&&(l.el=o.el)}}function af(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const cf=t=>t.__isTeleport,ke=Symbol(void 0),Ys=Symbol(void 0),Ze=Symbol(void 0),pi=Symbol(void 0),An=[];let Be=null;function vs(t=!1){An.push(Be=t?null:[])}function uf(){An.pop(),Be=An[An.length-1]||null}let Un=1;function Bo(t){Un+=t}function ka(t){return t.dynamicChildren=Un>0?Be||Qt:null,uf(),Un>0&&Be&&Be.push(t),t}function _i(t,e,n,s,i,r){return ka(le(t,e,n,s,i,r,!0))}function hf(t,e,n,s,i){return ka(dt(t,e,n,s,i,!0))}function ff(t){return t?t.__v_isVNode===!0:!1}function Rt(t,e){return t.type===e.type&&t.key===e.key}const Qs="__vInternal",Fa=({key:t})=>t??null,Cs=({ref:t,ref_key:e,ref_for:n})=>t!=null?ce(t)||ye(t)||k(t)?{i:Pe,r:t,k:e,f:!!n}:t:null;function le(t,e=null,n=null,s=0,i=null,r=t===ke?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fa(e),ref:e&&Cs(e),scopeId:va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Pe};return l?(Rr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ce(n)?8:16),Un>0&&!o&&Be&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Be.push(a),a}const dt=df;function df(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Vh)&&(t=Ze),ff(t)){const l=yt(t,e,!0);return n&&Rr(l,n),Un>0&&!r&&Be&&(l.shapeFlag&6?Be[Be.indexOf(t)]=l:Be.push(l)),l.patchFlag|=-2,l}if(Tf(t)&&(t=t.__vccOpts),e){e=pf(e);let{class:l,style:a}=e;l&&!ce(l)&&(e.class=ut(l)),ee(a)&&(la(a)&&!D(a)&&(a=ve({},a)),e.style=hr(a))}const o=ce(t)?1:xh(t)?128:cf(t)?64:ee(t)?4:k(t)?2:0;return le(t,e,n,s,i,o,r,!0)}function pf(t){return t?la(t)||Qs in t?ve({},t):t:null}function yt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?gf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Fa(l),ref:e&&e.ref?n&&i?D(i)?i.concat(Cs(e)):[i,Cs(e)]:Cs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yt(t.ssContent),ssFallback:t.ssFallback&&yt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function _f(t=" ",e=0){return dt(Ys,null,t,e)}function qe(t){return t==null||typeof t=="boolean"?dt(Ze):D(t)?dt(ke,null,t.slice()):typeof t=="object"?ct(t):dt(Ys,null,String(t))}function ct(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yt(t)}function Rr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Rr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Qs in e)?e._ctx=Pe:i===3&&Pe&&(Pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else k(e)?(e={default:e,_ctx:Pe},n=32):(e=String(e),s&64?(n=16,e=[_f(e)]):n=8);t.children=e,t.shapeFlag|=n}function gf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ut([e.class,s.class]));else if(i==="style")e.style=hr([e.style,s.style]);else if(Ws(i)){const r=e[i],o=s[i];o&&r!==o&&!(D(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ze(t,e,n,s=null){Oe(t,e,7,[n,s])}const mf=Da();let yf=0;function vf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||mf,r={uid:yf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ra(s,i),emitsOptions:ya(s,i),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:s.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=bh.bind(null,r),t.ce&&t.ce(r),r}let re=null;const Cf=()=>re||Pe,an=t=>{re=t,t.scope.on()},kt=()=>{re&&re.scope.off(),re=null};function La(t){return t.vnode.shapeFlag&4}let Hn=!1;function bf(t,e=!1){Hn=e;const{props:n,children:s}=t.vnode,i=La(t);Jh(t,n,i,e),tf(t,s);const r=i?Ef(t,e):void 0;return Hn=!1,r}function Ef(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=aa(new Proxy(t.ctx,zh));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?If(t):null;an(t),pn();const r=ft(s,t,0,[t.props,i]);if(_n(),kt(),zl(r)){if(r.then(kt,kt),e)return r.then(o=>{Uo(t,o,e)}).catch(o=>{Ks(o,t,0)});t.asyncDep=r}else Uo(t,r,e)}else Ba(t,e)}function Uo(t,e,n){k(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ee(e)&&(t.setupState=ha(e)),Ba(t,n)}let Ho;function Ba(t,e,n){const s=t.type;if(!t.render){if(!e&&Ho&&!s.render){const i=s.template||xr(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=ve(ve({isCustomElement:r,delimiters:l},o),a);s.render=Ho(i,c)}}t.render=s.render||We}an(t),pn(),qh(t),_n(),kt()}function wf(t){return new Proxy(t.attrs,{get(e,n){return Se(t,"get","$attrs"),e[n]}})}function If(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=wf(t))},slots:t.slots,emit:t.emit,expose:e}}function Xs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ha(aa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}}))}function Tf(t){return k(t)&&"__vccOpts"in t}const Sf=(t,e)=>_h(t,e,Hn),xf=Symbol(""),Nf=()=>gs(xf),Rf="3.2.47",Af="http://www.w3.org/2000/svg",At=typeof document<"u"?document:null,Wo=At&&At.createElement("template"),Pf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?At.createElementNS(Af,t):At.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>At.createTextNode(t),createComment:t=>At.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>At.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Wo.innerHTML=s?`<svg>${t}</svg>`:t;const l=Wo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Of(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Df(t,e,n){const s=t.style,i=ce(n);if(n&&!i){if(e&&!ce(e))for(const r in e)n[r]==null&&$i(s,r,"");for(const r in n)$i(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const $o=/\s*!important$/;function $i(t,e,n){if(D(n))n.forEach(s=>$i(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Mf(t,e);$o.test(n)?t.setProperty(dn(s),n.replace($o,""),"important"):t[s]=n}}const jo=["Webkit","Moz","ms"],gi={};function Mf(t,e){const n=gi[e];if(n)return n;let s=on(e);if(s!=="filter"&&s in t)return gi[e]=s;s=Yl(s);for(let i=0;i<jo.length;i++){const r=jo[i]+s;if(r in t)return gi[e]=r}return e}const Vo="http://www.w3.org/1999/xlink";function kf(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Vo,e.slice(6,e.length)):t.setAttributeNS(Vo,e,n);else{const r=Su(e);n==null||r&&!jl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Ff(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n??"";(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=jl(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Gt(t,e,n,s){t.addEventListener(e,n,s)}function Lf(t,e,n,s){t.removeEventListener(e,n,s)}function Bf(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Uf(e);if(s){const c=r[e]=$f(s,i);Gt(t,l,c,a)}else o&&(Lf(t,l,o,a),r[e]=void 0)}}const Ko=/(?:Once|Passive|Capture)$/;function Uf(t){let e;if(Ko.test(t)){e={};let s;for(;s=t.match(Ko);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):dn(t.slice(2)),e]}let mi=0;const Hf=Promise.resolve(),Wf=()=>mi||(Hf.then(()=>mi=0),mi=Date.now());function $f(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Oe(jf(s,n.value),e,5,[s])};return n.value=t,n.attached=Wf(),n}function jf(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const zo=/^on[a-z]/,Vf=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Of(t,s,i):e==="style"?Df(t,n,s):Ws(e)?fr(e)||Bf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Kf(t,e,s,i))?Ff(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),kf(t,e,s,i))};function Kf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&zo.test(e)&&k(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||zo.test(e)&&ce(n)?!1:e in t}const zf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Dh.props;const qo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?n=>_s(e,n):e};function qf(t){t.target.composing=!0}function Go(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yo={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=qo(i);const r=s||i.props&&i.props.type==="number";Gt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Ri(l)),t._assign(l)}),n&&Gt(t,"change",()=>{t.value=t.value.trim()}),e||(Gt(t,"compositionstart",qf),Gt(t,"compositionend",Go),Gt(t,"change",Go))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=qo(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ri(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Gf=["ctrl","shift","alt","meta"],Yf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Gf.some(n=>t[`${n}Key`]&&!e.includes(n))},Qo=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Yf[e[i]];if(r&&r(n,e))return}return t(n,...s)},Qf=ve({patchProp:Vf},Pf);let Xo;function Xf(){return Xo||(Xo=of(Qf))}const Jf=(...t)=>{const e=Xf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Zf(s);if(!i)return;const r=e._component;!k(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Zf(t){return ce(t)?document.querySelector(t):t}/**
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
 */const Ua={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(t,e){if(!t)throw gn(e)},gn=function(t){return new Error("Firebase Database ("+Ua.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ha=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ed=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ar={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ha(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ed(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const v=c<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Wa=function(t){const e=Ha(t);return Ar.encodeByteArray(e,!0)},Ts=function(t){return Wa(t).replace(/\./g,"")},ji=function(t){try{return Ar.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function td(t){return $a(void 0,t)}function $a(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!nd(n)||(t[n]=$a(t[n],e[n]));return t}function nd(t){return t!=="__proto__"}/**
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
 */function sd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const id=()=>sd().__FIREBASE_DEFAULTS__,rd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},od=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ji(t[1]);return e&&JSON.parse(e)},ja=()=>{try{return id()||rd()||od()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ld=t=>{var e,n;return(n=(e=ja())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ad=t=>{const e=ld(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},cd=()=>{var t;return(t=ja())===null||t===void 0?void 0:t.config};/**
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
 */class Js{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ud(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Ts(JSON.stringify(n)),Ts(JSON.stringify(o)),l].join(".")}/**
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
 */function hd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Va(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hd())}function fd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ka(){return Ua.NODE_ADMIN===!0}function dd(){try{return typeof indexedDB=="object"}catch{return!1}}function pd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const _d="FirebaseError";class Xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_d,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,za.prototype.create)}}class za{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?gd(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Xn(i,l,s)}}function gd(t,e){return t.replace(md,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const md=/\{\$([^}]+)}/g;/**
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
 */function Wn(t){return JSON.parse(t)}function de(t){return JSON.stringify(t)}/**
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
 */const qa=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Wn(ji(r[0])||""),n=Wn(ji(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},yd=function(t){const e=qa(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vd=function(t){const e=qa(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function cn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Jo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ss(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Vi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Zo(r)&&Zo(o)){if(!Vi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Zo(t){return t!==null&&typeof t=="object"}/**
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
 */function Cd(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class bd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Pr(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Ed=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zs=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function mn(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const St="[DEFAULT]";/**
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
 */class wd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Js;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Td(e))try{this.getOrInitializeService({instanceIdentifier:St})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=St){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=St){return this.instances.has(e)}getOptions(e=St){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Id(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=St){return this.component?this.component.multipleInstances?e:St:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Id(t){return t===St?void 0:t}function Td(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const xd={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Nd=Q.INFO,Rd={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Ad=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Rd[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ga{constructor(e){this.name=e,this._logLevel=Nd,this._logHandler=Ad,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Pd=(t,e)=>e.some(n=>t instanceof n);let el,tl;function Od(){return el||(el=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dd(){return tl||(tl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ya=new WeakMap,Ki=new WeakMap,Qa=new WeakMap,yi=new WeakMap,Or=new WeakMap;function Md(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(pt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ya.set(n,t)}).catch(()=>{}),Or.set(e,t),e}function kd(t){if(Ki.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ki.set(t,e)}let zi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ki.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fd(t){zi=t(zi)}function Ld(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(vi(this),e,...n);return Qa.set(s,e.sort?e.sort():[e]),pt(s)}:Dd().includes(t)?function(...e){return t.apply(vi(this),e),pt(Ya.get(this))}:function(...e){return pt(t.apply(vi(this),e))}}function Bd(t){return typeof t=="function"?Ld(t):(t instanceof IDBTransaction&&kd(t),Pd(t,Od())?new Proxy(t,zi):t)}function pt(t){if(t instanceof IDBRequest)return Md(t);if(yi.has(t))return yi.get(t);const e=Bd(t);return e!==t&&(yi.set(t,e),Or.set(e,t)),e}const vi=t=>Or.get(t);function Ud(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=pt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(pt(o.result),a.oldVersion,a.newVersion,pt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Hd=["get","getKey","getAll","getAllKeys","count"],Wd=["put","add","delete","clear"],Ci=new Map;function nl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ci.get(e))return Ci.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Wd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Hd.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ci.set(e,r),r}Fd(t=>({...t,get:(e,n,s)=>nl(e,n)||t.get(e,n,s),has:(e,n)=>!!nl(e,n)||t.has(e,n)}));/**
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
 */class $d{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function jd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qi="@firebase/app",sl="0.9.3";/**
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
 */const Lt=new Ga("@firebase/app"),Vd="@firebase/app-compat",Kd="@firebase/analytics-compat",zd="@firebase/analytics",qd="@firebase/app-check-compat",Gd="@firebase/app-check",Yd="@firebase/auth",Qd="@firebase/auth-compat",Xd="@firebase/database",Jd="@firebase/database-compat",Zd="@firebase/functions",ep="@firebase/functions-compat",tp="@firebase/installations",np="@firebase/installations-compat",sp="@firebase/messaging",ip="@firebase/messaging-compat",rp="@firebase/performance",op="@firebase/performance-compat",lp="@firebase/remote-config",ap="@firebase/remote-config-compat",cp="@firebase/storage",up="@firebase/storage-compat",hp="@firebase/firestore",fp="@firebase/firestore-compat",dp="firebase",pp="9.17.1";/**
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
 */const Gi="[DEFAULT]",_p={[qi]:"fire-core",[Vd]:"fire-core-compat",[zd]:"fire-analytics",[Kd]:"fire-analytics-compat",[Gd]:"fire-app-check",[qd]:"fire-app-check-compat",[Yd]:"fire-auth",[Qd]:"fire-auth-compat",[Xd]:"fire-rtdb",[Jd]:"fire-rtdb-compat",[Zd]:"fire-fn",[ep]:"fire-fn-compat",[tp]:"fire-iid",[np]:"fire-iid-compat",[sp]:"fire-fcm",[ip]:"fire-fcm-compat",[rp]:"fire-perf",[op]:"fire-perf-compat",[lp]:"fire-rc",[ap]:"fire-rc-compat",[cp]:"fire-gcs",[up]:"fire-gcs-compat",[hp]:"fire-fst",[fp]:"fire-fst-compat","fire-js":"fire-js",[dp]:"fire-js-all"};/**
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
 */const xs=new Map,Yi=new Map;function gp(t,e){try{t.container.addComponent(e)}catch(n){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ns(t){const e=t.name;if(Yi.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;Yi.set(e,t);for(const n of xs.values())gp(n,t);return!0}function mp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const yp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_t=new za("app","Firebase",yp);/**
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
 */class vp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}/**
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
 */const Cp=pp;function Xa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Gi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw _t.create("bad-app-name",{appName:String(i)});if(n||(n=cd()),!n)throw _t.create("no-options");const r=xs.get(i);if(r){if(Vi(n,r.options)&&Vi(s,r.config))return r;throw _t.create("duplicate-app",{appName:i})}const o=new Sd(i);for(const a of Yi.values())o.addComponent(a);const l=new vp(n,s,o);return xs.set(i,l),l}function bp(t=Gi){const e=xs.get(t);if(!e&&t===Gi)return Xa();if(!e)throw _t.create("no-app",{appName:t});return e}function en(t,e,n){var s;let i=(s=_p[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(l.join(" "));return}Ns(new $n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ep="firebase-heartbeat-database",wp=1,jn="firebase-heartbeat-store";let bi=null;function Ja(){return bi||(bi=Ud(Ep,wp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(jn)}}}).catch(t=>{throw _t.create("idb-open",{originalErrorMessage:t.message})})),bi}async function Ip(t){try{return(await Ja()).transaction(jn).objectStore(jn).get(Za(t))}catch(e){if(e instanceof Xn)Lt.warn(e.message);else{const n=_t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(n.message)}}}async function il(t,e){try{const s=(await Ja()).transaction(jn,"readwrite");return await s.objectStore(jn).put(e,Za(t)),s.done}catch(n){if(n instanceof Xn)Lt.warn(n.message);else{const s=_t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lt.warn(s.message)}}}function Za(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Tp=1024,Sp=30*24*60*60*1e3;class xp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=rl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Sp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=rl(),{heartbeatsToSend:n,unsentEntries:s}=Np(this._heartbeatsCache.heartbeats),i=Ts(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function rl(){return new Date().toISOString().substring(0,10)}function Np(t,e=Tp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ol(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ol(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Rp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dd()?pd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ip(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return il(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return il(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ol(t){return Ts(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ap(t){Ns(new $n("platform-logger",e=>new $d(e),"PRIVATE")),Ns(new $n("heartbeat",e=>new xp(e),"PRIVATE")),en(qi,sl,t),en(qi,sl,"esm2017"),en("fire-js","")}Ap("");var Pp="firebase",Op="9.17.1";/**
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
 */en(Pp,Op,"app");const ll="@firebase/database",al="0.14.3";/**
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
 */let ec="";function Dp(t){ec=t}/**
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
 */class Mp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Wn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class kp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const tc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Mp(e)}}catch{}return new kp},Ot=tc("localStorage"),Qi=tc("sessionStorage");/**
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
 */const tn=new Ga("@firebase/database"),Fp=function(){let t=1;return function(){return t++}}(),nc=function(t){const e=Ed(t),n=new bd;n.update(e);const s=n.digest();return Ar.encodeByteArray(s)},Jn=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Jn.apply(null,s):typeof s=="object"?e+=de(s):e+=s,e+=" "}return e};let Ft=null,cl=!0;const Lp=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(tn.logLevel=Q.VERBOSE,Ft=tn.log.bind(tn),e&&Qi.set("logging_enabled",!0)):typeof t=="function"?Ft=t:(Ft=null,Qi.remove("logging_enabled"))},ge=function(...t){if(cl===!0&&(cl=!1,Ft===null&&Qi.get("logging_enabled")===!0&&Lp(!0)),Ft){const e=Jn.apply(null,t);Ft(e)}},Zn=function(t){return function(...e){ge(t,...e)}},Xi=function(...t){const e="FIREBASE INTERNAL ERROR: "+Jn(...t);tn.error(e)},nt=function(...t){const e=`FIREBASE FATAL ERROR: ${Jn(...t)}`;throw tn.error(e),new Error(e)},Te=function(...t){const e="FIREBASE WARNING: "+Jn(...t);tn.warn(e)},Bp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Te("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Up=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},un="[MIN_NAME]",Bt="[MAX_NAME]",yn=function(t,e){if(t===e)return 0;if(t===un||e===Bt)return-1;if(e===un||t===Bt)return 1;{const n=ul(t),s=ul(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Hp=function(t,e){return t===e?0:t<e?-1:1},In=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+de(e))},Dr=function(t){if(typeof t!="object"||t===null)return de(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=de(e[s]),n+=":",n+=Dr(t[e[s]]);return n+="}",n},ic=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const rc=function(t){b(!sc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Wp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$p=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Vp=new RegExp("^-?(0*)\\d{1,10}$"),Kp=-2147483648,zp=2147483647,ul=function(t){if(Vp.test(t)){const e=Number(t);if(e>=Kp&&e<=zp)return e}return null},vn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Te("Exception was thrown by user callback.",n),e},Math.floor(0))}},qp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Gp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Te(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Yp{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Te(e)}}class nn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nn.OWNER="owner";/**
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
 */const Mr="5",oc="v",lc="s",ac="r",cc="f",uc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hc="ls",fc="p",Ji="ac",dc="websocket",pc="long_polling";/**
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
 */class _c{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ot.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ot.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Qp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function gc(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===dc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===pc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Qp(t)&&(n.ns=t.namespace);const i=[];return xe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Xp{constructor(){this.counters_={}}incrementCounter(e,n=1){rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return td(this.counters_)}}/**
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
 */const Ei={},wi={};function kr(t){const e=t.toString();return Ei[e]||(Ei[e]=new Xp),Ei[e]}function Jp(t,e){const n=t.toString();return wi[n]||(wi[n]=e()),wi[n]}/**
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
 */class Zp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&vn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hl="start",e_="close",t_="pLPCommand",n_="pRTLPCB",mc="id",yc="pw",vc="ser",s_="cb",i_="seg",r_="ts",o_="d",l_="dframe",Cc=1870,bc=30,a_=Cc-bc,c_=25e3,u_=3e4;class Yt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zn(e),this.stats_=kr(n),this.urlFn=a=>(this.appCheckToken&&(a[Ji]=this.appCheckToken),gc(n,pc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Zp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(u_)),Up(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hl)this.id=l,this.password=a;else if(o===e_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[hl]="t",s[vc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[s_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[oc]=Mr,this.transportSessionId&&(s[lc]=this.transportSessionId),this.lastSessionId&&(s[hc]=this.lastSessionId),this.applicationId&&(s[fc]=this.applicationId),this.appCheckToken&&(s[Ji]=this.appCheckToken),typeof location<"u"&&location.hostname&&uc.test(location.hostname)&&(s[ac]=cc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yt.forceAllow_=!0}static forceDisallow(){Yt.forceDisallow_=!0}static isAvailable(){return Yt.forceAllow_?!0:!Yt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Wp()&&!$p()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Wa(n),i=ic(s,a_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[l_]="t",s[mc]=e,s[yc]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=de(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Fp(),window[t_+this.uniqueCallbackIdentifier]=e,window[n_+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ge("frame writing exception"),l.stack&&ge(l.stack),ge(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ge("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[mc]=this.myID,e[yc]=this.myPW,e[vc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+bc+s.length<=Cc;){const o=this.pendingSegs.shift();s=s+"&"+i_+i+"="+o.seg+"&"+r_+i+"="+o.ts+"&"+o_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(c_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const h_=16384,f_=45e3;let Rs=null;typeof MozWebSocket<"u"?Rs=MozWebSocket:typeof WebSocket<"u"&&(Rs=WebSocket);class Le{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zn(this.connId),this.stats_=kr(n),this.connURL=Le.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[oc]=Mr,typeof location<"u"&&location.hostname&&uc.test(location.hostname)&&(o[ac]=cc),n&&(o[lc]=n),s&&(o[hc]=s),i&&(o[Ji]=i),r&&(o[fc]=r),gc(e,dc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ot.set("previous_websocket_failure",!0);try{let s;Ka(),this.mySock=new Rs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Rs!==null&&!Le.forceDisallow_}static previouslyFailed(){return Ot.isInMemoryStorage||Ot.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ot.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Wn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ic(n,h_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(f_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Le.responsesRequiredToBeHealthy=2;Le.healthyTimeout=3e4;/**
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
 */class Vn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Yt,Le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Le&&Le.isAvailable();let s=n&&!Le.previouslyFailed();if(e.webSocketOnly&&(n||Te("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Le];else{const i=this.transports_=[];for(const r of Vn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Vn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vn.globalTransportInitialized_=!1;/**
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
 */const d_=6e4,p_=5e3,__=10*1024,g_=100*1024,Ii="t",fl="d",m_="s",dl="r",y_="e",pl="o",_l="a",gl="n",ml="p",v_="h";class C_{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zn("c:"+this.id+":"),this.transportManager_=new Vn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>g_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>__?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ii in e){const n=e[Ii];n===_l?this.upgradeIfSecondaryHealthy_():n===dl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===pl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=In("t",e),s=In("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ml,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_l,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=In("t",e),s=In("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=In(Ii,e);if(fl in e){const s=e[fl];if(n===v_){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===gl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===m_?this.onConnectionShutdown_(s):n===dl?this.onReset_(s):n===y_?Xi("Server Error: "+s):n===pl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Mr!==s&&Te("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Pn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(d_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(p_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ml,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ot.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ec{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class wc{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class As extends wc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Va()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new As}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const yl=32,vl=768;class z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new z("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vt(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new z(t.pieces_,e)}function Ic(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function b_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Tc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Sc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new z(e,0)}function ae(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new z(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function we(t,e){const n=F(t),s=F(e);if(n===null)return e;if(n===s)return we(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Lr(t,e){if(vt(t)!==vt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ue(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(vt(t)>vt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class E_{constructor(e,n){this.errorPrefix_=n,this.parts_=Tc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Zs(this.parts_[s]);xc(this)}}function w_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Zs(e),xc(t)}function I_(t){const e=t.parts_.pop();t.byteLength_-=Zs(e),t.parts_.length>0&&(t.byteLength_-=1)}function xc(t){if(t.byteLength_>vl)throw new Error(t.errorPrefix_+"has a key path longer than "+vl+" bytes ("+t.byteLength_+").");if(t.parts_.length>yl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yl+") or object contains a cycle "+xt(t))}function xt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Br extends wc{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Br}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Tn=1e3,T_=60*5*1e3,Cl=30*1e3,S_=1.3,x_=3e4,N_="server_kill",bl=3;class et extends Ec{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=et.nextPersistentConnectionId_++,this.log_=Zn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Tn,this.maxReconnectDelay_=T_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ka())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Br.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&As.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(de(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Js,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;et.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rt(e,"w")){const s=cn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Te(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xi("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Tn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Tn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>x_&&(this.reconnectDelay_=Tn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*S_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+et.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ge("getToken() completed but was canceled"):(ge("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new C_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Te(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(N_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Te(h),a())}}}interrupt(e){ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jo(this.interruptReasons_)&&(this.reconnectDelay_=Tn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Dr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bl&&(this.reconnectDelay_=Cl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ec.replace(/\./g,"-")]=1,Va()?e["framework.cordova"]=1:fd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=As.getInstance().currentlyOnline();return Jo(this.interruptReasons_)&&e}}et.nextPersistentConnectionId_=0;et.nextConnectionId_=0;/**
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
 */class ei{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new L(un,e),i=new L(un,n);return this.compare(s,i)!==0}minPost(){return L.MIN}}/**
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
 */let fs;class Nc extends ei{static get __EMPTY_NODE(){return fs}static set __EMPTY_NODE(e){fs=e}compare(e,n){return yn(e.name,n.name)}isDefinedOn(e){throw gn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(Bt,fs)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,fs)}toString(){return".key"}}const sn=new Nc;/**
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
 */class ds{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??fe.RED,this.left=i??Ie.EMPTY_NODE,this.right=r??Ie.EMPTY_NODE}copy(e,n,s,i,r){return new fe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ie.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ie.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class R_{copy(e,n,s,i,r){return this}insert(e,n,s){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ie{constructor(e,n=Ie.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ie(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Ie(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ds(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ds(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ds(this.root_,null,this.comparator_,!0,e)}}Ie.EMPTY_NODE=new R_;/**
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
 */function A_(t,e){return yn(t.name,e.name)}function Ur(t,e){return yn(t,e)}/**
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
 */let Zi;function P_(t){Zi=t}const Rc=function(t){return typeof t=="number"?"number:"+rc(t):"string:"+t},Ac=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rt(e,".sv"),"Priority must be a string or number.")}else b(t===Zi||t.isEmpty(),"priority of unexpected type.");b(t===Zi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let El;class he{constructor(e,n=he.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ac(this.priorityNode_)}static set __childrenNodeConstructor(e){El=e}static get __childrenNodeConstructor(){return El}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new he(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:F(e)===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:he.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=F(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||vt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,he.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Rc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=rc(this.value_):e+=this.value_,this.lazyHash_=nc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===he.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof he.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=he.VALUE_TYPE_ORDER.indexOf(n),r=he.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}he.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Pc,Oc;function O_(t){Pc=t}function D_(t){Oc=t}class M_ extends ei{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?yn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Bt,new he("[PRIORITY-POST]",Oc))}makePost(e,n){const s=Pc(e);return new L(n,new he("[PRIORITY-POST]",s))}toString(){return".priority"}}const se=new M_;/**
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
 */const k_=Math.log(2);class F_{constructor(e){const n=r=>parseInt(Math.log(r)/k_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ps=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new fe(d,h.node,fe.BLACK,null,null);{const _=parseInt(u/2,10)+a,v=i(a,_),I=i(_+1,c);return h=t[_],d=n?n(h):h,new fe(d,h.node,fe.BLACK,v,I)}},r=function(a){let c=null,u=null,h=t.length;const d=function(v,I){const M=h-v,W=h;h-=v;const oe=i(M+1,W),P=t[M],q=n?n(P):P;_(new fe(q,P.node,I,null,oe))},_=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<a.count;++v){const I=a.nextBitIsOne(),M=Math.pow(2,a.count-(v+1));I?d(M,fe.BLACK):(d(M,fe.BLACK),d(M,fe.RED))}return u},o=new F_(t.length),l=r(o);return new Ie(s||e,l)};/**
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
 */let Ti;const qt={};class Je{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(qt&&se,"ChildrenNode.ts has not been loaded"),Ti=Ti||new Je({".priority":qt},{".priority":se}),Ti}get(e){const n=cn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ie?n:null}hasIndex(e){return rt(this.indexSet_,e.toString())}addIndex(e,n){b(e!==sn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(L.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ps(s,e.getCompare()):l=qt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Je(u,c)}addToIndexes(e,n){const s=Ss(this.indexes_,(i,r)=>{const o=cn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===qt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ps(l,o.getCompare())}else return qt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new Je(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ss(this.indexes_,i=>{if(i===qt)return i;{const r=n.get(e.name);return r?i.remove(new L(e.name,r)):i}});return new Je(s,this.indexSet_)}}/**
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
 */let Sn;class A{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ac(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Sn||(Sn=new A(new Ie(Ur),null,Je.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Sn}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Sn:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new L(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Sn:this.priorityNode_;return new A(i,o,r)}}updateChild(e,n){const s=F(e);if(s===null)return n;{b(F(e)!==".priority"||vt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(X(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(se,(o,l)=>{n[o]=l.val(e),s++,r&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Rc(this.getPriority().val())+":"),this.forEachChild(se,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":nc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new L(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===es?-1:0}withIndex(e){if(e===sn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===sn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(se),i=n.getIterator(se);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===sn?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class L_ extends A{constructor(){super(new Ie(Ur),A.EMPTY_NODE,Je.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const es=new L_;Object.defineProperties(L,{MIN:{value:new L(un,A.EMPTY_NODE)},MAX:{value:new L(Bt,es)}});Nc.__EMPTY_NODE=A.EMPTY_NODE;he.__childrenNodeConstructor=A;P_(es);D_(es);/**
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
 */const B_=!0;function pe(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new he(n,pe(e))}if(!(t instanceof Array)&&B_){const n=[];let s=!1;if(xe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=pe(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return A.EMPTY_NODE;const r=Ps(n,A_,o=>o.name,Ur);if(s){const o=Ps(n,se.getCompare());return new A(r,pe(e),new Je({".priority":o},{".priority":se}))}else return new A(r,pe(e),Je.Default)}else{let n=A.EMPTY_NODE;return xe(t,(s,i)=>{if(rt(t,s)&&s.substring(0,1)!=="."){const r=pe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(pe(e))}}O_(pe);/**
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
 */class U_ extends ei{constructor(e){super(),this.indexPath_=e,b(!B(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?yn(e.name,n.name):r}makePost(e,n){const s=pe(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,s);return new L(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,es);return new L(Bt,e)}toString(){return Tc(this.indexPath_,0).join("/")}}/**
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
 */class H_ extends ei{compare(e,n){const s=e.node.compareTo(n.node);return s===0?yn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const s=pe(e);return new L(n,s)}toString(){return".value"}}const W_=new H_;/**
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
 */function Dc(t){return{type:"value",snapshotNode:t}}function hn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Kn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function $_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Hr{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Kn(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(hn(n,s)):o.trackChildChange(zn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(se,(i,r)=>{n.hasChild(i)||s.trackChildChange(Kn(i,r))}),n.isLeafNode()||n.forEachChild(se,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(zn(i,r,o))}else s.trackChildChange(hn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class qn{constructor(e){this.indexedFilter_=new Hr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=qn.getStartPost_(e),this.endPost_=qn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new L(n,s))||(s=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const r=this;return n.forEachChild(se,(o,l)=>{r.matches(new L(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class j_{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new qn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new L(n,s))||(s=A.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new L(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(zn(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Kn(n,h));const I=l.updateImmediateChild(n,A.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(hn(d.name,d.node)),I.updateImmediateChild(d.name,d.node)):I}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Kn(c.name,c.node)),r.trackChildChange(hn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
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
 */class Wr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:un}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new Wr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function V_(t){return t.loadsAllData()?new Hr(t.getIndex()):t.hasLimit()?new j_(t):new qn(t)}function wl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===se?n="$priority":t.index_===W_?n="$value":t.index_===sn?n="$key":(b(t.index_ instanceof U_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=de(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=de(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+de(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=de(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+de(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Il(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
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
 */class Os extends Ec{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Zn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Os.getListenId_(e,s),l={};this.listens_[o]=l;const a=wl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),cn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Os.getListenId_(e,n);delete this.listens_[s]}get(e){const n=wl(e._queryParams),s=e._path.toString(),i=new Js;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cd(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Wn(l.responseText)}catch{Te("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Te("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class K_{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ds(){return{value:null,children:new Map}}function Mc(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=F(e);t.children.has(s)||t.children.set(s,Ds());const i=t.children.get(s);e=X(e),Mc(i,e,n)}}function er(t,e,n){t.value!==null?n(e,t.value):z_(t,(s,i)=>{const r=new z(e.toString()+"/"+s);er(i,r,n)})}function z_(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class q_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&xe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Tl=10*1e3,G_=30*1e3,Y_=5*60*1e3;class Q_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new q_(e);const s=Tl+(G_-Tl)*Math.random();Pn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;xe(e,(i,r)=>{r>0&&rt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Pn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Y_))}}/**
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
 */var He;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(He||(He={}));function kc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $r(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ms{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=He.ACK_USER_WRITE,this.source=kc()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new z(e));return new Ms(V(),n,this.revert)}}else return b(F(this.path)===e,"operationForChild called for unrelated child."),new Ms(X(this.path),this.affectedTree,this.revert)}}/**
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
 */class Gn{constructor(e,n){this.source=e,this.path=n,this.type=He.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new Gn(this.source,V()):new Gn(this.source,X(this.path))}}/**
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
 */class Ut{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=He.OVERWRITE}operationForChild(e){return B(this.path)?new Ut(this.source,V(),this.snap.getImmediateChild(e)):new Ut(this.source,X(this.path),this.snap)}}/**
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
 */class Yn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=He.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new z(e));return n.isEmpty()?null:n.value?new Ut(this.source,V(),n.value):new Yn(this.source,V(),n)}else return b(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yn(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ht{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class X_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function J_(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push($_(o.childName,o.snapshotNode))}),xn(t,i,"child_removed",e,s,n),xn(t,i,"child_added",e,s,n),xn(t,i,"child_moved",r,s,n),xn(t,i,"child_changed",e,s,n),xn(t,i,"value",e,s,n),i}function xn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>eg(t,l,a)),o.forEach(l=>{const a=Z_(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Z_(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function eg(t,e,n){if(e.childName==null||n.childName==null)throw gn("Should only compare child_ events.");const s=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function ti(t,e){return{eventCache:t,serverCache:e}}function On(t,e,n,s){return ti(new Ht(e,n,s),t.serverCache)}function Fc(t,e,n,s){return ti(t.eventCache,new Ht(e,n,s))}function tr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Wt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Si;const tg=()=>(Si||(Si=new Ie(Hp)),Si);class J{constructor(e,n=tg()){this.value=e,this.children=n}static fromObject(e){let n=new J(null);return xe(e,(s,i)=>{n=n.set(new z(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(B(e))return null;{const s=F(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(X(e),n);return r!=null?{path:ae(new z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=F(e),s=this.children.get(n);return s!==null?s.subtree(X(e)):new J(null)}}set(e,n){if(B(e))return new J(n,this.children);{const s=F(e),r=(this.children.get(s)||new J(null)).set(X(e),n),o=this.children.insert(s,r);return new J(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=F(e),s=this.children.get(n);if(s){const i=s.remove(X(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new J(null):new J(this.value,r)}else return this}}get(e){if(B(e))return this.value;{const n=F(e),s=this.children.get(n);return s?s.get(X(e)):null}}setTree(e,n){if(B(e))return n;{const s=F(e),r=(this.children.get(s)||new J(null)).setTree(X(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new J(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ae(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(B(e))return null;{const r=F(e),o=this.children.get(r);return o?o.findOnPath_(X(e),ae(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,s){if(B(e))return this;{this.value&&s(n,this.value);const i=F(e),r=this.children.get(i);return r?r.foreachOnPath_(X(e),ae(n,i),s):new J(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ae(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class $e{constructor(e){this.writeTree_=e}static empty(){return new $e(new J(null))}}function Dn(t,e,n){if(B(e))return new $e(new J(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=we(i,e);return r=r.updateChild(o,n),new $e(t.writeTree_.set(i,r))}else{const i=new J(n),r=t.writeTree_.setTree(e,i);return new $e(r)}}}function Sl(t,e,n){let s=t;return xe(n,(i,r)=>{s=Dn(s,ae(e,i),r)}),s}function xl(t,e){if(B(e))return $e.empty();{const n=t.writeTree_.setTree(e,new J(null));return new $e(n)}}function nr(t,e){return jt(t,e)!=null}function jt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(we(n.path,e)):null}function Nl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(s,i)=>{e.push(new L(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new L(s,i.value))}),e}function gt(t,e){if(B(e))return t;{const n=jt(t,e);return n!=null?new $e(new J(n)):new $e(t.writeTree_.subtree(e))}}function sr(t){return t.writeTree_.isEmpty()}function fn(t,e){return Lc(V(),t.writeTree_,e)}function Lc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Lc(ae(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ae(t,".priority"),s)),n}}/**
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
 */function Vr(t,e){return Wc(e,t)}function ng(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Dn(t.visibleWrites,e,n)),t.lastWriteId=s}function sg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function ig(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&rg(l,s.path)?i=!1:Ue(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return og(t),!0;if(s.snap)t.visibleWrites=xl(t.visibleWrites,s.path);else{const l=s.children;xe(l,a=>{t.visibleWrites=xl(t.visibleWrites,ae(s.path,a))})}return!0}else return!1}function rg(t,e){if(t.snap)return Ue(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ue(ae(t.path,n),e))return!0;return!1}function og(t){t.visibleWrites=Bc(t.allWrites,lg,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function lg(t){return t.visible}function Bc(t,e,n){let s=$e.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ue(n,o)?(l=we(n,o),s=Dn(s,l,r.snap)):Ue(o,n)&&(l=we(o,n),s=Dn(s,V(),r.snap.getChild(l)));else if(r.children){if(Ue(n,o))l=we(n,o),s=Sl(s,l,r.children);else if(Ue(o,n))if(l=we(o,n),B(l))s=Sl(s,V(),r.children);else{const a=cn(r.children,F(l));if(a){const c=a.getChild(X(l));s=Dn(s,V(),c)}}}else throw gn("WriteRecord should have .snap or .children")}}return s}function Uc(t,e,n,s,i){if(!s&&!i){const r=jt(t.visibleWrites,e);if(r!=null)return r;{const o=gt(t.visibleWrites,e);if(sr(o))return n;if(n==null&&!nr(o,V()))return null;{const l=n||A.EMPTY_NODE;return fn(o,l)}}}else{const r=gt(t.visibleWrites,e);if(!i&&sr(r))return n;if(!i&&n==null&&!nr(r,V()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ue(c.path,e)||Ue(e,c.path))},l=Bc(t.allWrites,o,e),a=n||A.EMPTY_NODE;return fn(l,a)}}}function ag(t,e,n){let s=A.EMPTY_NODE;const i=jt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(se,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=gt(t.visibleWrites,e);return n.forEachChild(se,(o,l)=>{const a=fn(gt(r,new z(o)),l);s=s.updateImmediateChild(o,a)}),Nl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=gt(t.visibleWrites,e);return Nl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function cg(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ae(e,n);if(nr(t.visibleWrites,r))return null;{const o=gt(t.visibleWrites,r);return sr(o)?i.getChild(n):fn(o,i.getChild(n))}}function ug(t,e,n,s){const i=ae(e,n),r=jt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=gt(t.visibleWrites,i);return fn(o,s.getNode().getImmediateChild(n))}else return null}function hg(t,e){return jt(t.visibleWrites,e)}function fg(t,e,n,s,i,r,o){let l;const a=gt(t.visibleWrites,e),c=jt(a,V());if(c!=null)l=c;else if(n!=null)l=fn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function dg(){return{visibleWrites:$e.empty(),allWrites:[],lastWriteId:-1}}function ks(t,e,n,s){return Uc(t.writeTree,t.treePath,e,n,s)}function Kr(t,e){return ag(t.writeTree,t.treePath,e)}function Rl(t,e,n,s){return cg(t.writeTree,t.treePath,e,n,s)}function Fs(t,e){return hg(t.writeTree,ae(t.treePath,e))}function pg(t,e,n,s,i,r){return fg(t.writeTree,t.treePath,e,n,s,i,r)}function zr(t,e,n){return ug(t.writeTree,t.treePath,e,n)}function Hc(t,e){return Wc(ae(t.treePath,e),t.writeTree)}function Wc(t,e){return{treePath:t,writeTree:e}}/**
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
 */class _g{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,zn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Kn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,hn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,zn(s,e.snapshotNode,i.oldSnap));else throw gn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class gg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const $c=new gg;class qr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ht(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Wt(this.viewCache_),r=pg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function mg(t){return{filter:t}}function yg(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vg(t,e,n,s,i){const r=new _g;let o,l;if(n.type===He.OVERWRITE){const c=n;c.source.fromUser?o=ir(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=Ls(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===He.MERGE){const c=n;c.source.fromUser?o=bg(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=rr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===He.ACK_USER_WRITE){const c=n;c.revert?o=Ig(t,e,c.path,s,i,r):o=Eg(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===He.LISTEN_COMPLETE)o=wg(t,e,n.path,s,r);else throw gn("Unknown operation type: "+n.type);const a=r.getChanges();return Cg(e,o,a),{viewCache:o,changes:a}}function Cg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=tr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Dc(tr(e)))}}function jc(t,e,n,s,i,r){const o=e.eventCache;if(Fs(s,n)!=null)return e;{let l,a;if(B(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Wt(e),u=c instanceof A?c:A.EMPTY_NODE,h=Kr(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ks(s,Wt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=F(n);if(c===".priority"){b(vt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Rl(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=X(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Rl(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=zr(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return On(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function Ls(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(B(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=F(n);if(!a.isCompleteForPath(n)&&vt(n)>1)return e;const v=X(n),M=a.getNode().getImmediateChild(_).updateChild(v,s);_===".priority"?c=u.updatePriority(a.getNode(),M):c=u.updateChild(a.getNode(),_,M,v,$c,null)}const h=Fc(e,c,a.isFullyInitialized()||B(n),u.filtersNodes()),d=new qr(i,h,r);return jc(t,h,n,i,d,l)}function ir(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new qr(i,e,r);if(B(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=On(e,c,!0,t.filter.filtersNodes());else{const h=F(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=On(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=X(n),_=l.getNode().getImmediateChild(h);let v;if(B(d))v=s;else{const I=u.getCompleteChild(h);I!=null?Ic(d)===".priority"&&I.getChild(Sc(d)).isEmpty()?v=I:v=I.updateChild(d,s):v=A.EMPTY_NODE}if(_.equals(v))a=e;else{const I=t.filter.updateChild(l.getNode(),h,v,d,u,o);a=On(e,I,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Al(t,e){return t.eventCache.isCompleteForChild(e)}function bg(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=ae(n,a);Al(e,F(u))&&(l=ir(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=ae(n,a);Al(e,F(u))||(l=ir(t,l,u,c,i,r,o))}),l}function Pl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function rr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;B(n)?c=s:c=new J(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),v=Pl(t,_,d);a=Ls(t,a,new z(h),v,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const v=e.serverCache.getNode().getImmediateChild(h),I=Pl(t,v,d);a=Ls(t,a,new z(h),I,i,r,o,l)}}),a}function Eg(t,e,n,s,i,r,o){if(Fs(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ls(t,e,n,a.getNode().getChild(n),i,r,l,o);if(B(n)){let c=new J(null);return a.getNode().forEachChild(sn,(u,h)=>{c=c.set(new z(u),h)}),rr(t,e,n,c,i,r,l,o)}else return e}else{let c=new J(null);return s.foreach((u,h)=>{const d=ae(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),rr(t,e,n,c,i,r,l,o)}}function wg(t,e,n,s,i){const r=e.serverCache,o=Fc(e,r.getNode(),r.isFullyInitialized()||B(n),r.isFiltered());return jc(t,o,n,s,$c,i)}function Ig(t,e,n,s,i,r){let o;if(Fs(s,n)!=null)return e;{const l=new qr(s,e,i),a=e.eventCache.getNode();let c;if(B(n)||F(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ks(s,Wt(e));else{const h=e.serverCache.getNode();b(h instanceof A,"serverChildren would be complete if leaf node"),u=Kr(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=F(n);let h=zr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,X(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,A.EMPTY_NODE,X(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ks(s,Wt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Fs(s,V())!=null,On(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Tg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Hr(s.getIndex()),r=V_(s);this.processor_=mg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(A.EMPTY_NODE,l.getNode(),null),u=new Ht(a,o.isFullyInitialized(),i.filtersNodes()),h=new Ht(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ti(h,u),this.eventGenerator_=new X_(this.query_)}get query(){return this.query_}}function Sg(t){return t.viewCache_.serverCache.getNode()}function xg(t,e){const n=Wt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Ol(t){return t.eventRegistrations_.length===0}function Ng(t,e){t.eventRegistrations_.push(e)}function Dl(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ml(t,e,n,s){e.type===He.MERGE&&e.source.queryId!==null&&(b(Wt(t.viewCache_),"We should always have a full cache before handling merges"),b(tr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=vg(t.processor_,i,e,n,s);return yg(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Vc(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Rg(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(r,o)=>{s.push(hn(r,o))}),n.isFullyInitialized()&&s.push(Dc(n.getNode())),Vc(t,s,n.getNode(),e)}function Vc(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return J_(t.eventGenerator_,e,n,i)}/**
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
 */let Bs;class Ag{constructor(){this.views=new Map}}function Pg(t){b(!Bs,"__referenceConstructor has already been defined"),Bs=t}function Og(){return b(Bs,"Reference.ts has not been loaded"),Bs}function Dg(t){return t.views.size===0}function Gr(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Ml(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ml(o,e,n,s));return r}}function Mg(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ks(n,i?s:null),a=!1;l?a=!0:s instanceof A?(l=Kr(n,s),a=!1):(l=A.EMPTY_NODE,a=!1);const c=ti(new Ht(l,a,!1),new Ht(s,i,!1));return new Tg(e,c)}return o}function kg(t,e,n,s,i,r){const o=Mg(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ng(o,n),Rg(o,n)}function Fg(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ct(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Dl(c,n,s)),Ol(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Dl(a,n,s)),Ol(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ct(t)&&r.push(new(Og())(e._repo,e._path)),{removed:r,events:o}}function Kc(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function rn(t,e){let n=null;for(const s of t.views.values())n=n||xg(s,e);return n}function zc(t,e){if(e._queryParams.loadsAllData())return ni(t);{const s=e._queryIdentifier;return t.views.get(s)}}function qc(t,e){return zc(t,e)!=null}function Ct(t){return ni(t)!=null}function ni(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Us;function Lg(t){b(!Us,"__referenceConstructor has already been defined"),Us=t}function Bg(){return b(Us,"Reference.ts has not been loaded"),Us}let Ug=1;class kl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=dg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gc(t,e,n,s,i){return ng(t.pendingWriteTree_,e,n,s,i),i?ts(t,new Ut(kc(),e,n)):[]}function Dt(t,e,n=!1){const s=sg(t.pendingWriteTree_,e);if(ig(t.pendingWriteTree_,e)){let r=new J(null);return s.snap!=null?r=r.set(V(),!0):xe(s.children,o=>{r=r.set(new z(o),!0)}),ts(t,new Ms(s.path,r,n))}else return[]}function si(t,e,n){return ts(t,new Ut($r(),e,n))}function Hg(t,e,n){const s=J.fromObject(n);return ts(t,new Yn($r(),e,s))}function Wg(t,e){return ts(t,new Gn($r(),e))}function $g(t,e,n){const s=Qr(t,n);if(s){const i=Xr(s),r=i.path,o=i.queryId,l=we(r,e),a=new Gn(jr(o),l);return Jr(t,r,a)}else return[]}function or(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||qc(o,e))){const a=Fg(o,e,n,s);Dg(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Ct(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=Kg(d);for(let v=0;v<_.length;++v){const I=_[v],M=I.query,W=Xc(t,I);t.listenProvider_.startListening(Mn(M),Hs(t,M),W.hashFn,W.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Mn(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(ii(d));t.listenProvider_.stopListening(Mn(d),_)}))}zg(t,c)}return l}function jg(t,e,n,s){const i=Qr(t,s);if(i!=null){const r=Xr(i),o=r.path,l=r.queryId,a=we(o,e),c=new Ut(jr(l),a,n);return Jr(t,o,c)}else return[]}function Vg(t,e,n,s){const i=Qr(t,s);if(i){const r=Xr(i),o=r.path,l=r.queryId,a=we(o,e),c=J.fromObject(n),u=new Yn(jr(l),a,c);return Jr(t,o,u)}else return[]}function Fl(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const v=we(d,i);r=r||rn(_,v),o=o||Ct(_)});let l=t.syncPointTree_.get(i);l?(o=o||Ct(l),r=r||rn(l,V())):(l=new Ag,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const I=rn(v,V());I&&(r=r.updateImmediateChild(_,I))}));const c=qc(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=ii(e);b(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=qg();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Vr(t.pendingWriteTree_,i);let h=kg(l,e,n,u,r,a);if(!c&&!o&&!s){const d=zc(l,e);h=h.concat(Gg(t,e,d))}return h}function Yr(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=we(o,e),c=rn(l,a);if(c)return c});return Uc(i,e,r,n,!0)}function ts(t,e){return Yc(e,t.syncPointTree_,null,Vr(t.pendingWriteTree_,V()))}function Yc(t,e,n,s){if(B(t.path))return Qc(t,e,n,s);{const i=e.get(V());n==null&&i!=null&&(n=rn(i,V()));let r=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Hc(s,o);r=r.concat(Yc(l,a,c,u))}return i&&(r=r.concat(Gr(i,t,s,n))),r}}function Qc(t,e,n,s){const i=e.get(V());n==null&&i!=null&&(n=rn(i,V()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Hc(s,o),u=t.operationForChild(o);u&&(r=r.concat(Qc(u,l,a,c)))}),i&&(r=r.concat(Gr(i,t,s,n))),r}function Xc(t,e){const n=e.query,s=Hs(t,n);return{hashFn:()=>(Sg(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?$g(t,n._path,s):Wg(t,n._path);{const r=jp(i,n);return or(t,n,null,r)}}}}function Hs(t,e){const n=ii(e);return t.queryToTagMap.get(n)}function ii(t){return t._path.toString()+"$"+t._queryIdentifier}function Qr(t,e){return t.tagToQueryMap.get(e)}function Xr(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new z(t.substr(0,e))}}function Jr(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=Vr(t.pendingWriteTree_,e);return Gr(s,n,i,null)}function Kg(t){return t.fold((e,n,s)=>{if(n&&Ct(n))return[ni(n)];{let i=[];return n&&(i=Kc(n)),xe(s,(r,o)=>{i=i.concat(o)}),i}})}function Mn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Bg())(t._repo,t._path):t}function zg(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ii(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function qg(){return Ug++}function Gg(t,e,n){const s=e._path,i=Hs(t,e),r=Xc(t,n),o=t.listenProvider_.startListening(Mn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!Ct(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!B(c)&&u&&Ct(u))return[ni(u).query];{let d=[];return u&&(d=d.concat(Kc(u).map(_=>_.query))),xe(h,(_,v)=>{d=d.concat(v)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Mn(u),Hs(t,u))}}return o}/**
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
 */class Zr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zr(n)}node(){return this.node_}}class eo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new eo(this.syncTree_,n)}node(){return Yr(this.syncTree_,this.path_)}}const Yg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ll=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Qg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Xg(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Qg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Xg=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Jg=function(t,e,n,s){return to(e,new eo(n,t),s)},Jc=function(t,e,n){return to(t,new Zr(e),n)};function to(t,e,n){const s=t.getPriority().val(),i=Ll(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ll(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new he(l,pe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new he(i))),o.forEachChild(se,(l,a)=>{const c=to(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class no{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function so(t,e){let n=e instanceof z?e:new z(e),s=t,i=F(n);for(;i!==null;){const r=cn(s.node.children,i)||{children:{},childCount:0};s=new no(i,s,r),n=X(n),i=F(n)}return s}function Cn(t){return t.node.value}function Zc(t,e){t.node.value=e,lr(t)}function eu(t){return t.node.childCount>0}function Zg(t){return Cn(t)===void 0&&!eu(t)}function ri(t,e){xe(t.node.children,(n,s)=>{e(new no(n,t,s))})}function tu(t,e,n,s){n&&!s&&e(t),ri(t,i=>{tu(i,e,!0,s)}),n&&s&&e(t)}function em(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ns(t){return new z(t.parent===null?t.name:ns(t.parent)+"/"+t.name)}function lr(t){t.parent!==null&&tm(t.parent,t.name,t)}function tm(t,e,n){const s=Zg(n),i=rt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,lr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,lr(t))}/**
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
 */const nm=/[\[\].#$\/\u0000-\u001F\u007F]/,sm=/[\[\].#$\u0000-\u001F\u007F]/,xi=10*1024*1024,nu=function(t){return typeof t=="string"&&t.length!==0&&!nm.test(t)},su=function(t){return typeof t=="string"&&t.length!==0&&!sm.test(t)},im=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),su(t)},iu=function(t,e,n,s){s&&e===void 0||io(Pr(t,"value"),e,n)},io=function(t,e,n){const s=n instanceof z?new E_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xt(s));if(typeof e=="function")throw new Error(t+"contains a function "+xt(s)+" with contents = "+e.toString());if(sc(e))throw new Error(t+"contains "+e.toString()+" "+xt(s));if(typeof e=="string"&&e.length>xi/3&&Zs(e)>xi)throw new Error(t+"contains a string greater than "+xi+" utf8 bytes "+xt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(xe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!nu(o)))throw new Error(t+" contains an invalid key ("+o+") "+xt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);w_(s,o),io(t,l,s),I_(s)}),i&&r)throw new Error(t+' contains ".value" child '+xt(s)+" in addition to actual children.")}},ru=function(t,e,n,s){if(!(s&&n===void 0)&&!su(n))throw new Error(Pr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ru(t,e,n,s)},ou=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},om=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!im(n))throw new Error(Pr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class lm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ro(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Lr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function lu(t,e,n){ro(t,n),au(t,s=>Lr(s,e))}function st(t,e,n){ro(t,n),au(t,s=>Ue(s,e)||Ue(e,s))}function au(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(am(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function am(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ft&&ge("event: "+n.toString()),vn(s)}}}/**
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
 */const cm="repo_interrupt",um=25;class hm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ds(),this.transactionQueueTree_=new no,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fm(t,e,n){if(t.stats_=kr(t.repoInfo_),t.forceRestClient_||qp())t.server_=new Os(t.repoInfo_,(s,i,r,o)=>{Bl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ul(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new et(t.repoInfo_,e,(s,i,r,o)=>{Bl(t,s,i,r,o)},s=>{Ul(t,s)},s=>{dm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Jp(t.repoInfo_,()=>new Q_(t.stats_,t.server_)),t.infoData_=new K_,t.infoSyncTree_=new kl({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=si(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),lo(t,"connected",!1),t.serverSyncTree_=new kl({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);st(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function cu(t){const n=t.infoData_.getNode(new z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function oo(t){return Yg({timestamp:cu(t)})}function Bl(t,e,n,s,i){t.dataUpdateCount++;const r=new z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Ss(n,c=>pe(c));o=Vg(t.serverSyncTree_,r,a,i)}else{const a=pe(n);o=jg(t.serverSyncTree_,r,a,i)}else if(s){const a=Ss(n,c=>pe(c));o=Hg(t.serverSyncTree_,r,a)}else{const a=pe(n);o=si(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=oi(t,r)),st(t.eventQueue_,l,o)}function Ul(t,e){lo(t,"connected",e),e===!1&&_m(t)}function dm(t,e){xe(e,(n,s)=>{lo(t,n,s)})}function lo(t,e,n){const s=new z("/.info/"+e),i=pe(n);t.infoData_.updateSnapshot(s,i);const r=si(t.infoSyncTree_,s,i);st(t.eventQueue_,s,r)}function uu(t){return t.nextWriteId_++}function pm(t,e,n,s,i){ao(t,"set",{path:e.toString(),value:n,priority:s});const r=oo(t),o=pe(n,s),l=Yr(t.serverSyncTree_,e),a=Jc(o,l,r),c=uu(t),u=Gc(t.serverSyncTree_,e,a,c,!0);ro(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const v=d==="ok";v||Te("set at "+e+" failed: "+d);const I=Dt(t.serverSyncTree_,c,!v);st(t.eventQueue_,e,I),ym(t,i,d,_)});const h=_u(t,e);oi(t,h),st(t.eventQueue_,h,[])}function _m(t){ao(t,"onDisconnectEvents");const e=oo(t),n=Ds();er(t.onDisconnect_,V(),(i,r)=>{const o=Jg(i,r,t.serverSyncTree_,e);Mc(n,i,o)});let s=[];er(n,V(),(i,r)=>{s=s.concat(si(t.serverSyncTree_,i,r));const o=_u(t,i);oi(t,o)}),t.onDisconnect_=Ds(),st(t.eventQueue_,V(),s)}function gm(t,e,n){let s;F(e._path)===".info"?s=Fl(t.infoSyncTree_,e,n):s=Fl(t.serverSyncTree_,e,n),lu(t.eventQueue_,e._path,s)}function Hl(t,e,n){let s;F(e._path)===".info"?s=or(t.infoSyncTree_,e,n):s=or(t.serverSyncTree_,e,n),lu(t.eventQueue_,e._path,s)}function mm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cm)}function ao(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ge(n,...e)}function ym(t,e,n,s){e&&vn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function hu(t,e,n){return Yr(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function co(t,e=t.transactionQueueTree_){if(e||li(t,e),Cn(e)){const n=du(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&vm(t,ns(e),n)}else eu(e)&&ri(e,n=>{co(t,n)})}function vm(t,e,n){const s=n.map(c=>c.currentWriteId),i=hu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=we(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{ao(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Dt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();li(t,so(t.transactionQueueTree_,e)),co(t,t.transactionQueueTree_),st(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)vn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Te("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}oi(t,e)}},o)}function oi(t,e){const n=fu(t,e),s=ns(n),i=du(t,n);return Cm(t,i,s),s}function Cm(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=we(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Dt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=um)u=!0,h="maxretry",i=i.concat(Dt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=hu(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){io("transaction failed: Data returned ",_,a.path);let v=pe(_);typeof _=="object"&&_!=null&&rt(_,".priority")||(v=v.updatePriority(d.getPriority()));const M=a.currentWriteId,W=oo(t),oe=Jc(v,d,W);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=oe,a.currentWriteId=uu(t),o.splice(o.indexOf(M),1),i=i.concat(Gc(t.serverSyncTree_,a.path,oe,a.currentWriteId,a.applyLocally)),i=i.concat(Dt(t.serverSyncTree_,M,!0))}else u=!0,h="nodata",i=i.concat(Dt(t.serverSyncTree_,a.currentWriteId,!0))}st(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}li(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)vn(s[l]);co(t,t.transactionQueueTree_)}function fu(t,e){let n,s=t.transactionQueueTree_;for(n=F(e);n!==null&&Cn(s)===void 0;)s=so(s,n),e=X(e),n=F(e);return s}function du(t,e){const n=[];return pu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function pu(t,e,n){const s=Cn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ri(e,i=>{pu(t,i,n)})}function li(t,e){const n=Cn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Zc(e,n.length>0?n:void 0)}ri(e,s=>{li(t,s)})}function _u(t,e){const n=ns(fu(t,e)),s=so(t.transactionQueueTree_,e);return em(s,i=>{Ni(t,i)}),Ni(t,s),tu(s,i=>{Ni(t,i)}),n}function Ni(t,e){const n=Cn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Dt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Zc(e,void 0):n.length=r+1,st(t.eventQueue_,ns(e),i);for(let o=0;o<s.length;o++)vn(s[o])}}/**
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
 */function bm(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Em(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Te(`Invalid query segment '${n}' in query '${t}'`)}return e}const Wl=function(t,e){const n=wm(t),s=n.namespace;n.domain==="firebase.com"&&nt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Bp();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _c(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new z(n.pathString)}},wm=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=bm(t.substring(u,h)));const d=Em(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */const $l="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Im=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=$l.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=$l.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class gu{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class mu{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Tm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class uo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return B(this._path)?null:Ic(this._path)}get ref(){return new ot(this._repo,this._path)}get _queryIdentifier(){const e=Il(this._queryParams),n=Dr(e);return n==="{}"?"default":n}get _queryObject(){return Il(this._queryParams)}isEqual(e){if(e=mn(e),!(e instanceof uo))return!1;const n=this._repo===e._repo,s=Lr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+b_(this._path)}}class ot extends uo{constructor(e,n){super(e,n,new Wr,!1)}get parent(){const e=Sc(this._path);return e===null?null:new ot(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Qn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new z(e),s=$t(this.ref,e);return new Qn(this._node.getChild(n),s,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Qn(i,$t(this.ref,s),se)))}hasChild(e){const n=new z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Sm(t,e){return t=mn(t),t._checkNotDeleted("ref"),e!==void 0?$t(t._root,e):t._root}function $t(t,e){return t=mn(t),F(t._path)===null?rm("child","path",e,!1):ru("child","path",e,!1),new ot(t._repo,ae(t._path,e))}function xm(t,e){t=mn(t),ou("push",t._path),iu("push",e,t._path,!0);const n=cu(t._repo),s=Im(n),i=$t(t,s),r=$t(t,s);let o;return e!=null?o=yu(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function yu(t,e){t=mn(t),ou("set",t._path),iu("set",e,t._path,!1);const n=new Js;return pm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class ho{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new gu("value",this,new Qn(e.snapshotNode,new ot(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new mu(this,e,n):null}matches(e){return e instanceof ho?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class fo{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new mu(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const s=$t(new ot(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new gu(e.type,this,new Qn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof fo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Nm(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{Hl(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Tm(n,r||void 0),l=e==="value"?new ho(o):new fo(e,o);return gm(t._repo,t,l),()=>Hl(t._repo,t,l)}function Rm(t,e,n,s){return Nm(t,"value",e,n,s)}Pg(ot);Lg(ot);/**
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
 */const Am="FIREBASE_DATABASE_EMULATOR_HOST",ar={};let Pm=!1;function Om(t,e,n,s){t.repoInfo_=new _c(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Dm(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ge("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Wl(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[Am]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Wl(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new nn(nn.OWNER):new Yp(t.name,t.options,e);om("Invalid Firebase Database URL",o),B(o.path)||nt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=km(l,t,u,new Gp(t.name,n));return new Fm(h,t)}function Mm(t,e){const n=ar[e];(!n||n[t.key]!==t)&&nt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mm(t),delete n[t.key]}function km(t,e,n,s){let i=ar[e.name];i||(i={},ar[e.name]=i);let r=i[t.toURLString()];return r&&nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hm(t,Pm,n,s),i[t.toURLString()]=r,r}class Fm{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ot(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Mm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nt("Cannot call "+e+" on a deleted database.")}}function Lm(t=bp(),e){const n=mp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=ad("database");s&&Bm(n,...s)}return n}function Bm(t,e,n,s={}){t=mn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&nt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&nt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new nn(nn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:ud(s.mockUserToken,t.app.options.projectId);r=new nn(o)}Om(i,e,n,r)}/**
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
 */function Um(t){Dp(Cp),Ns(new $n("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Dm(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),en(ll,al,t),en(ll,al,"esm2017")}et.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};et.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Um();const Hm={apiKey:"AIzaSyDIY1INg7k-gwxK7qxm2CLqZMMRx05krhQ",authDomain:"fir-vue-realtime-chatroo-ed0e3.firebaseapp.com",databaseURL:"https://fir-vue-realtime-chatroo-ed0e3-default-rtdb.firebaseio.com",projectId:"fir-vue-realtime-chatroo-ed0e3",storageBucket:"fir-vue-realtime-chatroo-ed0e3.appspot.com",messagingSenderId:"96546249534",appId:"1:96546249534:web:b4cbd0f11ef818b8c5ea6f",measurementId:"G-8PQM6H2MLF"},Wm=Xa(Hm),$m=Lm(Wm),cr=Sm($m,"chatroom");function jm(t,e,n){const{key:s}=xm(cr);yu($t(cr,s),{key:s,userName:t,msg:e,time:n})}async function Vm(t){Rm(cr,e=>{t.value=e.val()})}const Km={class:"container mx-auto py-4"},zm={class:"grid grid-cols-3 gap-4"},qm={class:"col-span-2 max-h-[calc(100vh-2rem)] overflow-y-auto rounded border p-3"},Gm=["onSubmit"],Ym=["disabled"],Qm=["disabled"],Xm={class:"flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-2xl font-extrabold text-gray-500"},Jm={class:"text-xl font-bold"},Zm={class:"self-start rounded border p-3"},ey=["onSubmit"],ty=le("label",{for:"userName",class:"mb-2"},"輸入使用者名稱",-1),ny=le("p",{class:"mb-2 text-sm text-gray-500"},"請輸入個人姓名開始使用聊天室",-1),sy=["disabled"],iy={__name:"Chatroom",setup(t){const e=wn(""),n=wn(""),s=wn(!1),i=wn([]),r=wn(null);ms(e,()=>{s.value=!1});const o=()=>{s.value=!0,pa(()=>{r.value.focus()})},l=()=>{if(n.value==="")return;const d=Date.now();jm(e.value,n.value,d),n.value=""},a=d=>d.substr(0,1),c=d=>{const _=new Date(parseInt(d)),v=_.getFullYear(),I=u(_.getMonth()+1),M=u(_.getDate()),W=_.getHours()>12?"下午":"上午",oe=_.getHours()>12?u(_.getHours()-12):u(_.getHours()),P=u(_.getMinutes()),q=u(_.getSeconds());return`${v}/${I}/${M} ${W} ${oe}:${P}:${q}`},u=d=>d<10?`0${d}`:d,h=d=>d===e.value&&s.value;return Sr(()=>{Vm(i)}),(d,_)=>(vs(),_i("div",Km,[le("div",zm,[le("div",qm,[le("form",{class:"flex",onSubmit:Qo(l,["prevent"])},[Po(le("input",{type:"text","onUpdate:modelValue":_[0]||(_[0]=v=>n.value=v),class:"-mr-px flex-auto rounded-l border-gray-300 disabled:bg-gray-200",disabled:!s.value,ref_key:"refMsg",ref:r},null,8,Ym),[[Yo,n.value,void 0,{trim:!0}]]),le("button",{type:"submit",class:"rounded-r border border-gray-300 p-2 text-gray-500 transition-colors hover:bg-gray-500 hover:text-white focus:outline-0 focus:ring-4 focus:ring-gray-200 disabled:cursor-not-allowed disabled:bg-gray-100/95 disabled:hover:text-gray-500",disabled:!s.value}," 送出 ",8,Qm)],40,Gm),(vs(!0),_i(ke,null,Kh(i.value,(v,I)=>(vs(),_i("div",{class:ut(["mt-4 flex",{"flex-row-reverse":h(v.userName)}]),key:I},[le("div",Xm,rs(a(v.userName)),1),le("div",{class:ut(["flex flex-auto flex-col",[h(v.userName)?"mr-3 items-end":"ml-3"]])},[le("div",{class:ut(["mb-2 flex items-end",{"flex-row-reverse":h(v.userName)}])},[le("h3",Jm,rs(v.userName),1),le("span",{class:ut(["mb-1 text-sm text-gray-500",[h(v.userName)?"mr-2":"ml-2"]])},rs(c(v.time)),3)],2),le("p",{class:ut(["w-3/4 rounded p-2",[h(v.userName)?"bg-blue-400 text-white":"bg-gray-100",{"text-right":h(v.userName)}]])},rs(v.msg),3)],2)],2))),128))]),le("div",Zm,[le("form",{onSubmit:Qo(o,["prevent"]),class:"flex flex-col"},[ty,Po(le("input",{type:"text",id:"userName","onUpdate:modelValue":_[1]||(_[1]=v=>e.value=v),class:"mb-2 rounded border-gray-300"},null,512),[[Yo,e.value,void 0,{trim:!0}]]),ny,le("button",{type:"submit",class:"rounded border border-blue-500 p-2 text-blue-500 transition-colors hover:bg-blue-500 hover:text-white focus:outline-0 focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100/95 disabled:text-gray-500 disabled:hover:text-gray-500",disabled:!e.value}," 開始使用 ",8,sy)],40,ey)])])]))}};const ry=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},oy={__name:"App",setup(t){return(e,n)=>(vs(),hf(iy))}},ly=ry(oy,[["__scopeId","data-v-1404d563"]]);Jf(ly).mount("#app");

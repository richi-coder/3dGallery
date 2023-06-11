var Lw=Object.defineProperty;var Iw=(t,e,n)=>e in t?Lw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Le=(t,e,n)=>(Iw(t,typeof e!="symbol"?e+"":e,n),n);function Dw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(t,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var xf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ex={exports:{}},Nc={},Mx={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qs=Symbol.for("react.element"),Ow=Symbol.for("react.portal"),Nw=Symbol.for("react.fragment"),Uw=Symbol.for("react.strict_mode"),Fw=Symbol.for("react.profiler"),kw=Symbol.for("react.provider"),zw=Symbol.for("react.context"),Bw=Symbol.for("react.forward_ref"),Hw=Symbol.for("react.suspense"),Gw=Symbol.for("react.memo"),Vw=Symbol.for("react.lazy"),Bv=Symbol.iterator;function Ww(t){return t===null||typeof t!="object"?null:(t=Bv&&t[Bv]||t["@@iterator"],typeof t=="function"?t:null)}var wx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tx=Object.assign,bx={};function Ao(t,e,n){this.props=t,this.context=e,this.refs=bx,this.updater=n||wx}Ao.prototype.isReactComponent={};Ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ax(){}Ax.prototype=Ao.prototype;function Np(t,e,n){this.props=t,this.context=e,this.refs=bx,this.updater=n||wx}var Up=Np.prototype=new Ax;Up.constructor=Np;Tx(Up,Ao.prototype);Up.isPureReactComponent=!0;var Hv=Array.isArray,Cx=Object.prototype.hasOwnProperty,Fp={current:null},Rx={key:!0,ref:!0,__self:!0,__source:!0};function Px(t,e,n){var r,i={},a=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)Cx.call(e,r)&&!Rx.hasOwnProperty(r)&&(i[r]=e[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in s=t.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Qs,type:t,key:a,ref:o,props:i,_owner:Fp.current}}function $w(t,e){return{$$typeof:Qs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qs}function jw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gv=/\/+/g;function Sf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jw(""+t.key):e.toString(36)}function Lu(t,e,n,r,i){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qs:case Ow:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sf(o,0):r,Hv(i)?(n="",t!=null&&(n=t.replace(Gv,"$&/")+"/"),Lu(i,e,n,"",function(u){return u})):i!=null&&(kp(i)&&(i=$w(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Hv(t))for(var s=0;s<t.length;s++){a=t[s];var l=r+Sf(a,s);o+=Lu(a,e,n,l,i)}else if(l=Ww(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=r+Sf(a,s++),o+=Lu(a,e,n,l,i);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xl(t,e,n){if(t==null)return t;var r=[],i=0;return Lu(t,r,"","",function(a){return e.call(n,a,i++)}),r}function Xw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},Iu={transition:null},Yw={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:Iu,ReactCurrentOwner:Fp};We.Children={map:xl,forEach:function(t,e,n){xl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xl(t,function(){e++}),e},toArray:function(t){return xl(t,function(e){return e})||[]},only:function(t){if(!kp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Ao;We.Fragment=Nw;We.Profiler=Fw;We.PureComponent=Np;We.StrictMode=Uw;We.Suspense=Hw;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yw;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Tx({},t.props),i=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=Fp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)Cx.call(e,l)&&!Rx.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Qs,type:t.type,key:i,ref:a,props:r,_owner:o}};We.createContext=function(t){return t={$$typeof:zw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kw,_context:t},t.Consumer=t};We.createElement=Px;We.createFactory=function(t){var e=Px.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:Bw,render:t}};We.isValidElement=kp;We.lazy=function(t){return{$$typeof:Vw,_payload:{_status:-1,_result:t},_init:Xw}};We.memo=function(t,e){return{$$typeof:Gw,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Iu.transition;Iu.transition={};try{t()}finally{Iu.transition=e}};We.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};We.useCallback=function(t,e){return en.current.useCallback(t,e)};We.useContext=function(t){return en.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return en.current.useDeferredValue(t)};We.useEffect=function(t,e){return en.current.useEffect(t,e)};We.useId=function(){return en.current.useId()};We.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return en.current.useMemo(t,e)};We.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};We.useRef=function(t){return en.current.useRef(t)};We.useState=function(t){return en.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return en.current.useTransition()};We.version="18.2.0";Mx.exports=We;var de=Mx.exports;const zp=Sx(de),Vv=Dw({__proto__:null,default:zp},[de]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qw=de,Kw=Symbol.for("react.element"),Zw=Symbol.for("react.fragment"),Qw=Object.prototype.hasOwnProperty,Jw=qw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eT={key:!0,ref:!0,__self:!0,__source:!0};function Lx(t,e,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Qw.call(e,r)&&!eT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Kw,type:t,key:a,ref:o,props:i,_owner:Jw.current}}Nc.Fragment=Zw;Nc.jsx=Lx;Nc.jsxs=Lx;Ex.exports=Nc;var q=Ex.exports,th={},Ix={exports:{}},En={},Dx={exports:{}},Ox={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,B){var U=I.length;I.push(B);e:for(;0<U;){var te=U-1>>>1,L=I[te];if(0<i(L,B))I[te]=B,I[U]=L,U=te;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var B=I[0],U=I.pop();if(U!==B){I[0]=U;e:for(var te=0,L=I.length,Z=L>>>1;te<Z;){var K=2*(te+1)-1,ie=I[K],se=K+1,ve=I[se];if(0>i(ie,U))se<L&&0>i(ve,ie)?(I[te]=ve,I[se]=U,te=se):(I[te]=ie,I[K]=U,te=K);else if(se<L&&0>i(ve,U))I[te]=ve,I[se]=U,te=se;else break e}}return B}function i(I,B){var U=I.sortIndex-B.sortIndex;return U!==0?U:I.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,f=null,h=3,p=!1,y=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=I)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function x(I){if(_=!1,g(I),!y)if(n(l)!==null)y=!0,Q(M);else{var B=n(u);B!==null&&$(x,B.startTime-I)}}function M(I,B){y=!1,_&&(_=!1,d(R),R=-1),p=!0;var U=h;try{for(g(B),f=n(l);f!==null&&(!(f.expirationTime>B)||I&&!X());){var te=f.callback;if(typeof te=="function"){f.callback=null,h=f.priorityLevel;var L=te(f.expirationTime<=B);B=t.unstable_now(),typeof L=="function"?f.callback=L:f===n(l)&&r(l),g(B)}else r(l);f=n(l)}if(f!==null)var Z=!0;else{var K=n(u);K!==null&&$(x,K.startTime-B),Z=!1}return Z}finally{f=null,h=U,p=!1}}var b=!1,C=null,R=-1,S=5,T=-1;function X(){return!(t.unstable_now()-T<S)}function J(){if(C!==null){var I=t.unstable_now();T=I;var B=!0;try{B=C(!0,I)}finally{B?F():(b=!1,C=null)}}else b=!1}var F;if(typeof v=="function")F=function(){v(J)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,G=H.port2;H.port1.onmessage=J,F=function(){G.postMessage(null)}}else F=function(){m(J,0)};function Q(I){C=I,b||(b=!0,F())}function $(I,B){R=m(function(){I(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,Q(M))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var U=h;h=B;try{return I()}finally{h=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,B){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var U=h;h=I;try{return B()}finally{h=U}},t.unstable_scheduleCallback=function(I,B,U){var te=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?te+U:te):U=te,I){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=U+L,I={id:c++,callback:B,priorityLevel:I,startTime:U,expirationTime:L,sortIndex:-1},U>te?(I.sortIndex=U,e(u,I),n(l)===null&&I===n(u)&&(_?(d(R),R=-1):_=!0,$(x,U-te))):(I.sortIndex=L,e(l,I),y||p||(y=!0,Q(M))),I},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(I){var B=h;return function(){var U=h;h=B;try{return I.apply(this,arguments)}finally{h=U}}}})(Ox);Dx.exports=Ox;var tT=Dx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nx=de,Sn=tT;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ux=new Set,ws={};function ma(t,e){po(t,e),po(t+"Capture",e)}function po(t,e){for(ws[t]=e,t=0;t<e.length;t++)Ux.add(e[t])}var Fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nh=Object.prototype.hasOwnProperty,nT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wv={},$v={};function rT(t){return nh.call($v,t)?!0:nh.call(Wv,t)?!1:nT.test(t)?$v[t]=!0:(Wv[t]=!0,!1)}function iT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function aT(t,e,n,r){if(e===null||typeof e>"u"||iT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,r,i,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bp=/[\-:]([a-z])/g;function Hp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bp,Hp);zt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bp,Hp);zt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bp,Hp);zt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gp(t,e,n,r){var i=zt.hasOwnProperty(e)?zt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aT(e,n,i,r)&&(n=null),r||i===null?rT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $r=Nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sl=Symbol.for("react.element"),Ba=Symbol.for("react.portal"),Ha=Symbol.for("react.fragment"),Vp=Symbol.for("react.strict_mode"),rh=Symbol.for("react.profiler"),Fx=Symbol.for("react.provider"),kx=Symbol.for("react.context"),Wp=Symbol.for("react.forward_ref"),ih=Symbol.for("react.suspense"),ah=Symbol.for("react.suspense_list"),$p=Symbol.for("react.memo"),ti=Symbol.for("react.lazy"),zx=Symbol.for("react.offscreen"),jv=Symbol.iterator;function Go(t){return t===null||typeof t!="object"?null:(t=jv&&t[jv]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,Ef;function os(t){if(Ef===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ef=e&&e[1]||""}return`
`+Ef+t}var Mf=!1;function wf(t,e){if(!t||Mf)return"";Mf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{Mf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?os(t):""}function oT(t){switch(t.tag){case 5:return os(t.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 2:case 15:return t=wf(t.type,!1),t;case 11:return t=wf(t.type.render,!1),t;case 1:return t=wf(t.type,!0),t;default:return""}}function oh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ha:return"Fragment";case Ba:return"Portal";case rh:return"Profiler";case Vp:return"StrictMode";case ih:return"Suspense";case ah:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kx:return(t.displayName||"Context")+".Consumer";case Fx:return(t._context.displayName||"Context")+".Provider";case Wp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $p:return e=t.displayName||null,e!==null?e:oh(t.type)||"Memo";case ti:e=t._payload,t=t._init;try{return oh(t(e))}catch{}}return null}function sT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oh(e);case 8:return e===Vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ei(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lT(t){var e=Bx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function El(t){t._valueTracker||(t._valueTracker=lT(t))}function Hx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bx(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ju(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sh(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gx(t,e){e=e.checked,e!=null&&Gp(t,"checked",e,!1)}function lh(t,e){Gx(t,e);var n=Ei(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&uh(t,e.type,Ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uh(t,e,n){(e!=="number"||Ju(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ss=Array.isArray;function ro(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ei(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(ss(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ei(n)}}function Vx(t,e){var n=Ei(e.value),r=Ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Kv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ml,$x=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ts(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uT=["Webkit","ms","Moz","O"];Object.keys(ds).forEach(function(t){uT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ds[e]=ds[t]})});function jx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ds.hasOwnProperty(t)&&ds[t]?(""+e).trim():e+"px"}function Xx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jx(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cT=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dh(t,e){if(e){if(cT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function hh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ph=null;function jp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mh=null,io=null,ao=null;function Zv(t){if(t=tl(t)){if(typeof mh!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Bc(e),mh(t.stateNode,t.type,e))}}function Yx(t){io?ao?ao.push(t):ao=[t]:io=t}function qx(){if(io){var t=io,e=ao;if(ao=io=null,Zv(t),e)for(t=0;t<e.length;t++)Zv(e[t])}}function Kx(t,e){return t(e)}function Zx(){}var Tf=!1;function Qx(t,e,n){if(Tf)return t(e,n);Tf=!0;try{return Kx(t,e,n)}finally{Tf=!1,(io!==null||ao!==null)&&(Zx(),qx())}}function bs(t,e){var n=t.stateNode;if(n===null)return null;var r=Bc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var vh=!1;if(Fr)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){vh=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{vh=!1}function fT(t,e,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var hs=!1,ec=null,tc=!1,gh=null,dT={onError:function(t){hs=!0,ec=t}};function hT(t,e,n,r,i,a,o,s,l){hs=!1,ec=null,fT.apply(dT,arguments)}function pT(t,e,n,r,i,a,o,s,l){if(hT.apply(this,arguments),hs){if(hs){var u=ec;hs=!1,ec=null}else throw Error(ee(198));tc||(tc=!0,gh=u)}}function va(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qv(t){if(va(t)!==t)throw Error(ee(188))}function mT(t){var e=t.alternate;if(!e){if(e=va(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Qv(i),t;if(a===r)return Qv(i),e;a=a.sibling}throw Error(ee(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==r)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function eS(t){return t=mT(t),t!==null?tS(t):null}function tS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tS(t);if(e!==null)return e;t=t.sibling}return null}var nS=Sn.unstable_scheduleCallback,Jv=Sn.unstable_cancelCallback,vT=Sn.unstable_shouldYield,gT=Sn.unstable_requestPaint,mt=Sn.unstable_now,_T=Sn.unstable_getCurrentPriorityLevel,Xp=Sn.unstable_ImmediatePriority,rS=Sn.unstable_UserBlockingPriority,nc=Sn.unstable_NormalPriority,yT=Sn.unstable_LowPriority,iS=Sn.unstable_IdlePriority,Uc=null,pr=null;function xT(t){if(pr&&typeof pr.onCommitFiberRoot=="function")try{pr.onCommitFiberRoot(Uc,t,void 0,(t.current.flags&128)===128)}catch{}}var er=Math.clz32?Math.clz32:MT,ST=Math.log,ET=Math.LN2;function MT(t){return t>>>=0,t===0?32:31-(ST(t)/ET|0)|0}var wl=64,Tl=4194304;function ls(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,a=t.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=ls(s):(a&=o,a!==0&&(r=ls(a)))}else o=n&~i,o!==0?r=ls(o):a!==0&&(r=ls(a));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,a=e&-e,i>=a||i===16&&(a&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-er(e),i=1<<n,r|=t[n],e&=~i;return r}function wT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-er(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=wT(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function _h(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function aS(){var t=wl;return wl<<=1,!(wl&4194240)&&(wl=64),t}function bf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Js(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-er(e),t[e]=n}function bT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-er(n),a=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~a}}function Yp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-er(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ye=0;function oS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sS,qp,lS,uS,cS,yh=!1,bl=[],di=null,hi=null,pi=null,As=new Map,Cs=new Map,ii=[],AT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eg(t,e){switch(t){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":hi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":As.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cs.delete(e.pointerId)}}function Wo(t,e,n,r,i,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},e!==null&&(e=tl(e),e!==null&&qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function CT(t,e,n,r,i){switch(e){case"focusin":return di=Wo(di,t,e,n,r,i),!0;case"dragenter":return hi=Wo(hi,t,e,n,r,i),!0;case"mouseover":return pi=Wo(pi,t,e,n,r,i),!0;case"pointerover":var a=i.pointerId;return As.set(a,Wo(As.get(a)||null,t,e,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Cs.set(a,Wo(Cs.get(a)||null,t,e,n,r,i)),!0}return!1}function fS(t){var e=$i(t.target);if(e!==null){var n=va(e);if(n!==null){if(e=n.tag,e===13){if(e=Jx(n),e!==null){t.blockedOn=e,cS(t.priority,function(){lS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Du(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ph=r,n.target.dispatchEvent(r),ph=null}else return e=tl(n),e!==null&&qp(e),t.blockedOn=n,!1;e.shift()}return!0}function tg(t,e,n){Du(t)&&n.delete(e)}function RT(){yh=!1,di!==null&&Du(di)&&(di=null),hi!==null&&Du(hi)&&(hi=null),pi!==null&&Du(pi)&&(pi=null),As.forEach(tg),Cs.forEach(tg)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,yh||(yh=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,RT)))}function Rs(t){function e(i){return $o(i,t)}if(0<bl.length){$o(bl[0],t);for(var n=1;n<bl.length;n++){var r=bl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(di!==null&&$o(di,t),hi!==null&&$o(hi,t),pi!==null&&$o(pi,t),As.forEach(e),Cs.forEach(e),n=0;n<ii.length;n++)r=ii[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ii.length&&(n=ii[0],n.blockedOn===null);)fS(n),n.blockedOn===null&&ii.shift()}var oo=$r.ReactCurrentBatchConfig,ic=!0;function PT(t,e,n,r){var i=Ye,a=oo.transition;oo.transition=null;try{Ye=1,Kp(t,e,n,r)}finally{Ye=i,oo.transition=a}}function LT(t,e,n,r){var i=Ye,a=oo.transition;oo.transition=null;try{Ye=4,Kp(t,e,n,r)}finally{Ye=i,oo.transition=a}}function Kp(t,e,n,r){if(ic){var i=xh(t,e,n,r);if(i===null)Uf(t,e,r,ac,n),eg(t,r);else if(CT(i,t,e,n,r))r.stopPropagation();else if(eg(t,r),e&4&&-1<AT.indexOf(t)){for(;i!==null;){var a=tl(i);if(a!==null&&sS(a),a=xh(t,e,n,r),a===null&&Uf(t,e,r,ac,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Uf(t,e,r,null,n)}}var ac=null;function xh(t,e,n,r){if(ac=null,t=jp(r),t=$i(t),t!==null)if(e=va(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ac=t,null}function dS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_T()){case Xp:return 1;case rS:return 4;case nc:case yT:return 16;case iS:return 536870912;default:return 16}default:return 16}}var oi=null,Zp=null,Ou=null;function hS(){if(Ou)return Ou;var t,e=Zp,n=e.length,r,i="value"in oi?oi.value:oi.textContent,a=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[a-r];r++);return Ou=i.slice(t,1<r?1-r:void 0)}function Nu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Al(){return!0}function ng(){return!1}function Mn(t){function e(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Al:ng,this.isPropagationStopped=ng,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),e}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qp=Mn(Co),el=ut({},Co,{view:0,detail:0}),IT=Mn(el),Af,Cf,jo,Fc=ut({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?(Af=t.screenX-jo.screenX,Cf=t.screenY-jo.screenY):Cf=Af=0,jo=t),Af)},movementY:function(t){return"movementY"in t?t.movementY:Cf}}),rg=Mn(Fc),DT=ut({},Fc,{dataTransfer:0}),OT=Mn(DT),NT=ut({},el,{relatedTarget:0}),Rf=Mn(NT),UT=ut({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),FT=Mn(UT),kT=ut({},Co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zT=Mn(kT),BT=ut({},Co,{data:0}),ig=Mn(BT),HT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VT[t])?!!e[t]:!1}function Jp(){return WT}var $T=ut({},el,{key:function(t){if(t.key){var e=HT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jp,charCode:function(t){return t.type==="keypress"?Nu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jT=Mn($T),XT=ut({},Fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ag=Mn(XT),YT=ut({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jp}),qT=Mn(YT),KT=ut({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZT=Mn(KT),QT=ut({},Fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),JT=Mn(QT),eb=[9,13,27,32],em=Fr&&"CompositionEvent"in window,ps=null;Fr&&"documentMode"in document&&(ps=document.documentMode);var tb=Fr&&"TextEvent"in window&&!ps,pS=Fr&&(!em||ps&&8<ps&&11>=ps),og=String.fromCharCode(32),sg=!1;function mS(t,e){switch(t){case"keyup":return eb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ga=!1;function nb(t,e){switch(t){case"compositionend":return vS(e);case"keypress":return e.which!==32?null:(sg=!0,og);case"textInput":return t=e.data,t===og&&sg?null:t;default:return null}}function rb(t,e){if(Ga)return t==="compositionend"||!em&&mS(t,e)?(t=hS(),Ou=Zp=oi=null,Ga=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pS&&e.locale!=="ko"?null:e.data;default:return null}}var ib={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ib[t.type]:e==="textarea"}function gS(t,e,n,r){Yx(r),e=oc(e,"onChange"),0<e.length&&(n=new Qp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ms=null,Ps=null;function ab(t){CS(t,0)}function kc(t){var e=$a(t);if(Hx(e))return t}function ob(t,e){if(t==="change")return e}var _S=!1;if(Fr){var Pf;if(Fr){var Lf="oninput"in document;if(!Lf){var ug=document.createElement("div");ug.setAttribute("oninput","return;"),Lf=typeof ug.oninput=="function"}Pf=Lf}else Pf=!1;_S=Pf&&(!document.documentMode||9<document.documentMode)}function cg(){ms&&(ms.detachEvent("onpropertychange",yS),Ps=ms=null)}function yS(t){if(t.propertyName==="value"&&kc(Ps)){var e=[];gS(e,Ps,t,jp(t)),Qx(ab,e)}}function sb(t,e,n){t==="focusin"?(cg(),ms=e,Ps=n,ms.attachEvent("onpropertychange",yS)):t==="focusout"&&cg()}function lb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kc(Ps)}function ub(t,e){if(t==="click")return kc(e)}function cb(t,e){if(t==="input"||t==="change")return kc(e)}function fb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nr=typeof Object.is=="function"?Object.is:fb;function Ls(t,e){if(nr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nh.call(e,i)||!nr(t[i],e[i]))return!1}return!0}function fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dg(t,e){var n=fg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fg(n)}}function xS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function SS(){for(var t=window,e=Ju();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ju(t.document)}return e}function tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function db(t){var e=SS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xS(n.ownerDocument.documentElement,n)){if(r!==null&&tm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!t.extend&&a>r&&(i=r,r=a,a=i),i=dg(n,a);var o=dg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),a>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hb=Fr&&"documentMode"in document&&11>=document.documentMode,Va=null,Sh=null,vs=null,Eh=!1;function hg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eh||Va==null||Va!==Ju(r)||(r=Va,"selectionStart"in r&&tm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vs&&Ls(vs,r)||(vs=r,r=oc(Sh,"onSelect"),0<r.length&&(e=new Qp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Va)))}function Cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wa={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},If={},ES={};Fr&&(ES=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function zc(t){if(If[t])return If[t];if(!Wa[t])return t;var e=Wa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ES)return If[t]=e[n];return t}var MS=zc("animationend"),wS=zc("animationiteration"),TS=zc("animationstart"),bS=zc("transitionend"),AS=new Map,pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(t,e){AS.set(t,e),ma(e,[t])}for(var Df=0;Df<pg.length;Df++){var Of=pg[Df],pb=Of.toLowerCase(),mb=Of[0].toUpperCase()+Of.slice(1);Ri(pb,"on"+mb)}Ri(MS,"onAnimationEnd");Ri(wS,"onAnimationIteration");Ri(TS,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(bS,"onTransitionEnd");po("onMouseEnter",["mouseout","mouseover"]);po("onMouseLeave",["mouseout","mouseover"]);po("onPointerEnter",["pointerout","pointerover"]);po("onPointerLeave",["pointerout","pointerover"]);ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ma("onBeforeInput",["compositionend","keypress","textInput","paste"]);ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vb=new Set("cancel close invalid load scroll toggle".split(" ").concat(us));function mg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pT(r,e,void 0,t),t.currentTarget=null}function CS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var a=void 0;if(e)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;mg(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;mg(i,s,u),a=l}}}if(tc)throw t=gh,tc=!1,gh=null,t}function tt(t,e){var n=e[Ah];n===void 0&&(n=e[Ah]=new Set);var r=t+"__bubble";n.has(r)||(RS(e,t,2,!1),n.add(r))}function Nf(t,e,n){var r=0;e&&(r|=4),RS(n,t,r,e)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function Is(t){if(!t[Rl]){t[Rl]=!0,Ux.forEach(function(n){n!=="selectionchange"&&(vb.has(n)||Nf(n,!1,t),Nf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Rl]||(e[Rl]=!0,Nf("selectionchange",!1,e))}}function RS(t,e,n,r){switch(dS(e)){case 1:var i=PT;break;case 4:i=LT;break;default:i=Kp}n=i.bind(null,e,n,t),i=void 0,!vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Uf(t,e,n,r,i){var a=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=$i(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Qx(function(){var u=a,c=jp(n),f=[];e:{var h=AS.get(t);if(h!==void 0){var p=Qp,y=t;switch(t){case"keypress":if(Nu(n)===0)break e;case"keydown":case"keyup":p=jT;break;case"focusin":y="focus",p=Rf;break;case"focusout":y="blur",p=Rf;break;case"beforeblur":case"afterblur":p=Rf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=OT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=qT;break;case MS:case wS:case TS:p=FT;break;case bS:p=ZT;break;case"scroll":p=IT;break;case"wheel":p=JT;break;case"copy":case"cut":case"paste":p=zT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ag}var _=(e&4)!==0,m=!_&&t==="scroll",d=_?h!==null?h+"Capture":null:h;_=[];for(var v=u,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,d!==null&&(x=bs(v,d),x!=null&&_.push(Ds(v,x,g)))),m)break;v=v.return}0<_.length&&(h=new p(h,y,null,n,c),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==ph&&(y=n.relatedTarget||n.fromElement)&&($i(y)||y[kr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?$i(y):null,y!==null&&(m=va(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(_=rg,x="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=ag,x="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:$a(p),g=y==null?h:$a(y),h=new _(x,v+"leave",p,n,c),h.target=m,h.relatedTarget=g,x=null,$i(c)===u&&(_=new _(d,v+"enter",y,n,c),_.target=g,_.relatedTarget=m,x=_),m=x,p&&y)t:{for(_=p,d=y,v=0,g=_;g;g=ya(g))v++;for(g=0,x=d;x;x=ya(x))g++;for(;0<v-g;)_=ya(_),v--;for(;0<g-v;)d=ya(d),g--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=ya(_),d=ya(d)}_=null}else _=null;p!==null&&vg(f,h,p,_,!1),y!==null&&m!==null&&vg(f,m,y,_,!0)}}e:{if(h=u?$a(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var M=ob;else if(lg(h))if(_S)M=cb;else{M=lb;var b=sb}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=ub);if(M&&(M=M(t,u))){gS(f,M,n,c);break e}b&&b(t,h,u),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&uh(h,"number",h.value)}switch(b=u?$a(u):window,t){case"focusin":(lg(b)||b.contentEditable==="true")&&(Va=b,Sh=u,vs=null);break;case"focusout":vs=Sh=Va=null;break;case"mousedown":Eh=!0;break;case"contextmenu":case"mouseup":case"dragend":Eh=!1,hg(f,n,c);break;case"selectionchange":if(hb)break;case"keydown":case"keyup":hg(f,n,c)}var C;if(em)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ga?mS(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(pS&&n.locale!=="ko"&&(Ga||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ga&&(C=hS()):(oi=c,Zp="value"in oi?oi.value:oi.textContent,Ga=!0)),b=oc(u,R),0<b.length&&(R=new ig(R,t,null,n,c),f.push({event:R,listeners:b}),C?R.data=C:(C=vS(n),C!==null&&(R.data=C)))),(C=tb?nb(t,n):rb(t,n))&&(u=oc(u,"onBeforeInput"),0<u.length&&(c=new ig("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=C))}CS(f,e)})}function Ds(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=bs(t,n),a!=null&&r.unshift(Ds(t,a,i)),a=bs(t,e),a!=null&&r.push(Ds(t,a,i))),t=t.return}return r}function ya(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vg(t,e,n,r,i){for(var a=e._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=bs(n,a),l!=null&&o.unshift(Ds(n,l,s))):i||(l=bs(n,a),l!=null&&o.push(Ds(n,l,s)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gb=/\r\n?/g,_b=/\u0000|\uFFFD/g;function gg(t){return(typeof t=="string"?t:""+t).replace(gb,`
`).replace(_b,"")}function Pl(t,e,n){if(e=gg(e),gg(t)!==e&&n)throw Error(ee(425))}function sc(){}var Mh=null,wh=null;function Th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bh=typeof setTimeout=="function"?setTimeout:void 0,yb=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,xb=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(t){return _g.resolve(null).then(t).catch(Sb)}:bh;function Sb(t){setTimeout(function(){throw t})}function Ff(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Rs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Rs(e)}function mi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),dr="__reactFiber$"+Ro,Os="__reactProps$"+Ro,kr="__reactContainer$"+Ro,Ah="__reactEvents$"+Ro,Eb="__reactListeners$"+Ro,Mb="__reactHandles$"+Ro;function $i(t){var e=t[dr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kr]||n[dr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yg(t);t!==null;){if(n=t[dr])return n;t=yg(t)}return e}t=n,n=t.parentNode}return null}function tl(t){return t=t[dr]||t[kr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $a(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Bc(t){return t[Os]||null}var Ch=[],ja=-1;function Pi(t){return{current:t}}function it(t){0>ja||(t.current=Ch[ja],Ch[ja]=null,ja--)}function Qe(t,e){ja++,Ch[ja]=t.current,t.current=e}var Mi={},Xt=Pi(Mi),ln=Pi(!1),ia=Mi;function mo(t,e){var n=t.type.contextTypes;if(!n)return Mi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=e[a];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function un(t){return t=t.childContextTypes,t!=null}function lc(){it(ln),it(Xt)}function xg(t,e,n){if(Xt.current!==Mi)throw Error(ee(168));Qe(Xt,e),Qe(ln,n)}function PS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(ee(108,sT(t)||"Unknown",i));return ut({},n,r)}function uc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mi,ia=Xt.current,Qe(Xt,t),Qe(ln,ln.current),!0}function Sg(t,e,n){var r=t.stateNode;if(!r)throw Error(ee(169));n?(t=PS(t,e,ia),r.__reactInternalMemoizedMergedChildContext=t,it(ln),it(Xt),Qe(Xt,t)):it(ln),Qe(ln,n)}var Rr=null,Hc=!1,kf=!1;function LS(t){Rr===null?Rr=[t]:Rr.push(t)}function wb(t){Hc=!0,LS(t)}function Li(){if(!kf&&Rr!==null){kf=!0;var t=0,e=Ye;try{var n=Rr;for(Ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rr=null,Hc=!1}catch(i){throw Rr!==null&&(Rr=Rr.slice(t+1)),nS(Xp,Li),i}finally{Ye=e,kf=!1}}return null}var Xa=[],Ya=0,cc=null,fc=0,Rn=[],Pn=0,aa=null,Ir=1,Dr="";function zi(t,e){Xa[Ya++]=fc,Xa[Ya++]=cc,cc=t,fc=e}function IS(t,e,n){Rn[Pn++]=Ir,Rn[Pn++]=Dr,Rn[Pn++]=aa,aa=t;var r=Ir;t=Dr;var i=32-er(r)-1;r&=~(1<<i),n+=1;var a=32-er(e)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ir=1<<32-er(e)+i|n<<i|r,Dr=a+t}else Ir=1<<a|n<<i|r,Dr=t}function nm(t){t.return!==null&&(zi(t,1),IS(t,1,0))}function rm(t){for(;t===cc;)cc=Xa[--Ya],Xa[Ya]=null,fc=Xa[--Ya],Xa[Ya]=null;for(;t===aa;)aa=Rn[--Pn],Rn[Pn]=null,Dr=Rn[--Pn],Rn[Pn]=null,Ir=Rn[--Pn],Rn[Pn]=null}var yn=null,_n=null,ot=!1,Yn=null;function DS(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,_n=mi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=aa!==null?{id:Ir,overflow:Dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,_n=null,!0):!1;default:return!1}}function Rh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ph(t){if(ot){var e=_n;if(e){var n=e;if(!Eg(t,e)){if(Rh(t))throw Error(ee(418));e=mi(n.nextSibling);var r=yn;e&&Eg(t,e)?DS(r,n):(t.flags=t.flags&-4097|2,ot=!1,yn=t)}}else{if(Rh(t))throw Error(ee(418));t.flags=t.flags&-4097|2,ot=!1,yn=t}}}function Mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function Ll(t){if(t!==yn)return!1;if(!ot)return Mg(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Th(t.type,t.memoizedProps)),e&&(e=_n)){if(Rh(t))throw OS(),Error(ee(418));for(;e;)DS(t,e),e=mi(e.nextSibling)}if(Mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=mi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=yn?mi(t.stateNode.nextSibling):null;return!0}function OS(){for(var t=_n;t;)t=mi(t.nextSibling)}function vo(){_n=yn=null,ot=!1}function im(t){Yn===null?Yn=[t]:Yn.push(t)}var Tb=$r.ReactCurrentBatchConfig;function jn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var dc=Pi(null),hc=null,qa=null,am=null;function om(){am=qa=hc=null}function sm(t){var e=dc.current;it(dc),t._currentValue=e}function Lh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function so(t,e){hc=t,am=qa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(am!==t)if(t={context:t,memoizedValue:e,next:null},qa===null){if(hc===null)throw Error(ee(308));qa=t,hc.dependencies={lanes:0,firstContext:t}}else qa=qa.next=t;return e}var ji=null;function lm(t){ji===null?ji=[t]:ji.push(t)}function NS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lm(e)):(n.next=i.next,i.next=n),e.interleaved=n,zr(t,r)}function zr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ni=!1;function um(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function US(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,je&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zr(t,n)}return i=r.interleaved,i===null?(e.next=e,lm(r)):(e.next=i.next,i.next=e),r.interleaved=e,zr(t,n)}function Uu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yp(t,n)}}function wg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=e:a=a.next=e}else i=a=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pc(t,e,n,r){var i=t.updateQueue;ni=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,c=u=l=null,s=a;do{var h=s.lane,p=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=t,_=s;switch(h=e,p=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){f=y.call(p,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(p,f,h):y,h==null)break e;f=ut({},f,h);break e;case 2:ni=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else p={eventTime:p,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else a===null&&(i.shared.lanes=0);sa|=o,t.lanes=o,t.memoizedState=f}}function Tg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ee(191,i));i.call(r)}}}var FS=new Nx.Component().refs;function Ih(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gc={isMounted:function(t){return(t=t._reactInternals)?va(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Jt(),i=_i(t),a=Nr(r,i);a.payload=e,n!=null&&(a.callback=n),e=vi(t,a,i),e!==null&&(tr(e,t,i,r),Uu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Jt(),i=_i(t),a=Nr(r,i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=vi(t,a,i),e!==null&&(tr(e,t,i,r),Uu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),r=_i(t),i=Nr(n,r);i.tag=2,e!=null&&(i.callback=e),e=vi(t,i,r),e!==null&&(tr(e,t,r,n),Uu(e,t,r))}};function bg(t,e,n,r,i,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,o):e.prototype&&e.prototype.isPureReactComponent?!Ls(n,r)||!Ls(i,a):!0}function kS(t,e,n){var r=!1,i=Mi,a=e.contextType;return typeof a=="object"&&a!==null?a=Nn(a):(i=un(e)?ia:Xt.current,r=e.contextTypes,a=(r=r!=null)?mo(t,i):Mi),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=a),e}function Ag(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gc.enqueueReplaceState(e,e.state,null)}function Dh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=FS,um(t);var a=e.contextType;typeof a=="object"&&a!==null?i.context=Nn(a):(a=un(e)?ia:Xt.current,i.context=mo(t,a)),i.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Ih(t,e,a,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Gc.enqueueReplaceState(i,i.state,null),pc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var r=n.stateNode}if(!r)throw Error(ee(147,t));var i=r,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=i.refs;s===FS&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function Il(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cg(t){var e=t._init;return e(t._payload)}function zS(t){function e(d,v){if(t){var g=d.deletions;g===null?(d.deletions=[v],d.flags|=16):g.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function r(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function i(d,v){return d=yi(d,v),d.index=0,d.sibling=null,d}function a(d,v,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<v?(d.flags|=2,v):g):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function s(d,v,g,x){return v===null||v.tag!==6?(v=$f(g,d.mode,x),v.return=d,v):(v=i(v,g),v.return=d,v)}function l(d,v,g,x){var M=g.type;return M===Ha?c(d,v,g.props.children,x,g.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ti&&Cg(M)===v.type)?(x=i(v,g.props),x.ref=Xo(d,v,g),x.return=d,x):(x=Gu(g.type,g.key,g.props,null,d.mode,x),x.ref=Xo(d,v,g),x.return=d,x)}function u(d,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=jf(g,d.mode,x),v.return=d,v):(v=i(v,g.children||[]),v.return=d,v)}function c(d,v,g,x,M){return v===null||v.tag!==7?(v=Zi(g,d.mode,x,M),v.return=d,v):(v=i(v,g),v.return=d,v)}function f(d,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=$f(""+v,d.mode,g),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sl:return g=Gu(v.type,v.key,v.props,null,d.mode,g),g.ref=Xo(d,null,v),g.return=d,g;case Ba:return v=jf(v,d.mode,g),v.return=d,v;case ti:var x=v._init;return f(d,x(v._payload),g)}if(ss(v)||Go(v))return v=Zi(v,d.mode,g,null),v.return=d,v;Il(d,v)}return null}function h(d,v,g,x){var M=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return M!==null?null:s(d,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Sl:return g.key===M?l(d,v,g,x):null;case Ba:return g.key===M?u(d,v,g,x):null;case ti:return M=g._init,h(d,v,M(g._payload),x)}if(ss(g)||Go(g))return M!==null?null:c(d,v,g,x,null);Il(d,g)}return null}function p(d,v,g,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(g)||null,s(v,d,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sl:return d=d.get(x.key===null?g:x.key)||null,l(v,d,x,M);case Ba:return d=d.get(x.key===null?g:x.key)||null,u(v,d,x,M);case ti:var b=x._init;return p(d,v,g,b(x._payload),M)}if(ss(x)||Go(x))return d=d.get(g)||null,c(v,d,x,M,null);Il(v,x)}return null}function y(d,v,g,x){for(var M=null,b=null,C=v,R=v=0,S=null;C!==null&&R<g.length;R++){C.index>R?(S=C,C=null):S=C.sibling;var T=h(d,C,g[R],x);if(T===null){C===null&&(C=S);break}t&&C&&T.alternate===null&&e(d,C),v=a(T,v,R),b===null?M=T:b.sibling=T,b=T,C=S}if(R===g.length)return n(d,C),ot&&zi(d,R),M;if(C===null){for(;R<g.length;R++)C=f(d,g[R],x),C!==null&&(v=a(C,v,R),b===null?M=C:b.sibling=C,b=C);return ot&&zi(d,R),M}for(C=r(d,C);R<g.length;R++)S=p(C,d,R,g[R],x),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?R:S.key),v=a(S,v,R),b===null?M=S:b.sibling=S,b=S);return t&&C.forEach(function(X){return e(d,X)}),ot&&zi(d,R),M}function _(d,v,g,x){var M=Go(g);if(typeof M!="function")throw Error(ee(150));if(g=M.call(g),g==null)throw Error(ee(151));for(var b=M=null,C=v,R=v=0,S=null,T=g.next();C!==null&&!T.done;R++,T=g.next()){C.index>R?(S=C,C=null):S=C.sibling;var X=h(d,C,T.value,x);if(X===null){C===null&&(C=S);break}t&&C&&X.alternate===null&&e(d,C),v=a(X,v,R),b===null?M=X:b.sibling=X,b=X,C=S}if(T.done)return n(d,C),ot&&zi(d,R),M;if(C===null){for(;!T.done;R++,T=g.next())T=f(d,T.value,x),T!==null&&(v=a(T,v,R),b===null?M=T:b.sibling=T,b=T);return ot&&zi(d,R),M}for(C=r(d,C);!T.done;R++,T=g.next())T=p(C,d,R,T.value,x),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?R:T.key),v=a(T,v,R),b===null?M=T:b.sibling=T,b=T);return t&&C.forEach(function(J){return e(d,J)}),ot&&zi(d,R),M}function m(d,v,g,x){if(typeof g=="object"&&g!==null&&g.type===Ha&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Sl:e:{for(var M=g.key,b=v;b!==null;){if(b.key===M){if(M=g.type,M===Ha){if(b.tag===7){n(d,b.sibling),v=i(b,g.props.children),v.return=d,d=v;break e}}else if(b.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ti&&Cg(M)===b.type){n(d,b.sibling),v=i(b,g.props),v.ref=Xo(d,b,g),v.return=d,d=v;break e}n(d,b);break}else e(d,b);b=b.sibling}g.type===Ha?(v=Zi(g.props.children,d.mode,x,g.key),v.return=d,d=v):(x=Gu(g.type,g.key,g.props,null,d.mode,x),x.ref=Xo(d,v,g),x.return=d,d=x)}return o(d);case Ba:e:{for(b=g.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(d,v.sibling),v=i(v,g.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=jf(g,d.mode,x),v.return=d,d=v}return o(d);case ti:return b=g._init,m(d,v,b(g._payload),x)}if(ss(g))return y(d,v,g,x);if(Go(g))return _(d,v,g,x);Il(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(d,v.sibling),v=i(v,g),v.return=d,d=v):(n(d,v),v=$f(g,d.mode,x),v.return=d,d=v),o(d)):n(d,v)}return m}var go=zS(!0),BS=zS(!1),nl={},mr=Pi(nl),Ns=Pi(nl),Us=Pi(nl);function Xi(t){if(t===nl)throw Error(ee(174));return t}function cm(t,e){switch(Qe(Us,e),Qe(Ns,t),Qe(mr,nl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fh(e,t)}it(mr),Qe(mr,e)}function _o(){it(mr),it(Ns),it(Us)}function HS(t){Xi(Us.current);var e=Xi(mr.current),n=fh(e,t.type);e!==n&&(Qe(Ns,t),Qe(mr,n))}function fm(t){Ns.current===t&&(it(mr),it(Ns))}var st=Pi(0);function mc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zf=[];function dm(){for(var t=0;t<zf.length;t++)zf[t]._workInProgressVersionPrimary=null;zf.length=0}var Fu=$r.ReactCurrentDispatcher,Bf=$r.ReactCurrentBatchConfig,oa=0,lt=null,St=null,Pt=null,vc=!1,gs=!1,Fs=0,bb=0;function Gt(){throw Error(ee(321))}function hm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nr(t[n],e[n]))return!1;return!0}function pm(t,e,n,r,i,a){if(oa=a,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fu.current=t===null||t.memoizedState===null?Pb:Lb,t=n(r,i),gs){a=0;do{if(gs=!1,Fs=0,25<=a)throw Error(ee(301));a+=1,Pt=St=null,e.updateQueue=null,Fu.current=Ib,t=n(r,i)}while(gs)}if(Fu.current=gc,e=St!==null&&St.next!==null,oa=0,Pt=St=lt=null,vc=!1,e)throw Error(ee(300));return t}function mm(){var t=Fs!==0;return Fs=0,t}function lr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?lt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Un(){if(St===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Pt===null?lt.memoizedState:Pt.next;if(e!==null)Pt=e,St=t;else{if(t===null)throw Error(ee(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Pt===null?lt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function ks(t,e){return typeof e=="function"?e(t):e}function Hf(t){var e=Un(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var r=St,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((oa&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,lt.lanes|=c,sa|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,nr(r,e.memoizedState)||(sn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do a=i.lane,lt.lanes|=a,sa|=a,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gf(t){var e=Un(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,a=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=t(a,o.action),o=o.next;while(o!==i);nr(a,e.memoizedState)||(sn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,r]}function GS(){}function VS(t,e){var n=lt,r=Un(),i=e(),a=!nr(r.memoizedState,i);if(a&&(r.memoizedState=i,sn=!0),r=r.queue,vm(jS.bind(null,n,r,t),[t]),r.getSnapshot!==e||a||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,zs(9,$S.bind(null,n,r,i,e),void 0,null),Lt===null)throw Error(ee(349));oa&30||WS(n,e,i)}return i}function WS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $S(t,e,n,r){e.value=n,e.getSnapshot=r,XS(e)&&YS(t)}function jS(t,e,n){return n(function(){XS(e)&&YS(t)})}function XS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nr(t,n)}catch{return!0}}function YS(t){var e=zr(t,1);e!==null&&tr(e,t,1,-1)}function Rg(t){var e=lr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},e.queue=t,t=t.dispatch=Rb.bind(null,lt,t),[e.memoizedState,t]}function zs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qS(){return Un().memoizedState}function ku(t,e,n,r){var i=lr();lt.flags|=t,i.memoizedState=zs(1|e,n,void 0,r===void 0?null:r)}function Vc(t,e,n,r){var i=Un();r=r===void 0?null:r;var a=void 0;if(St!==null){var o=St.memoizedState;if(a=o.destroy,r!==null&&hm(r,o.deps)){i.memoizedState=zs(e,n,a,r);return}}lt.flags|=t,i.memoizedState=zs(1|e,n,a,r)}function Pg(t,e){return ku(8390656,8,t,e)}function vm(t,e){return Vc(2048,8,t,e)}function KS(t,e){return Vc(4,2,t,e)}function ZS(t,e){return Vc(4,4,t,e)}function QS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function JS(t,e,n){return n=n!=null?n.concat([t]):null,Vc(4,4,QS.bind(null,e,t),n)}function gm(){}function eE(t,e){var n=Un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function tE(t,e){var n=Un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function nE(t,e,n){return oa&21?(nr(n,e)||(n=aS(),lt.lanes|=n,sa|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function Ab(t,e){var n=Ye;Ye=n!==0&&4>n?n:4,t(!0);var r=Bf.transition;Bf.transition={};try{t(!1),e()}finally{Ye=n,Bf.transition=r}}function rE(){return Un().memoizedState}function Cb(t,e,n){var r=_i(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iE(t))aE(e,n);else if(n=NS(t,e,n,r),n!==null){var i=Jt();tr(n,t,r,i),oE(n,e,r)}}function Rb(t,e,n){var r=_i(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iE(t))aE(e,i);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,nr(s,o)){var l=e.interleaved;l===null?(i.next=i,lm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=NS(t,e,i,r),n!==null&&(i=Jt(),tr(n,t,r,i),oE(n,e,r))}}function iE(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function aE(t,e){gs=vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function oE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yp(t,n)}}var gc={readContext:Nn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},Pb={readContext:Nn,useCallback:function(t,e){return lr().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:Pg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ku(4194308,4,QS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ku(4194308,4,t,e)},useInsertionEffect:function(t,e){return ku(4,2,t,e)},useMemo:function(t,e){var n=lr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=lr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Cb.bind(null,lt,t),[r.memoizedState,t]},useRef:function(t){var e=lr();return t={current:t},e.memoizedState=t},useState:Rg,useDebugValue:gm,useDeferredValue:function(t){return lr().memoizedState=t},useTransition:function(){var t=Rg(!1),e=t[0];return t=Ab.bind(null,t[1]),lr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=lt,i=lr();if(ot){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Lt===null)throw Error(ee(349));oa&30||WS(r,e,n)}i.memoizedState=n;var a={value:n,getSnapshot:e};return i.queue=a,Pg(jS.bind(null,r,a,t),[t]),r.flags|=2048,zs(9,$S.bind(null,r,a,n,e),void 0,null),n},useId:function(){var t=lr(),e=Lt.identifierPrefix;if(ot){var n=Dr,r=Ir;n=(r&~(1<<32-er(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lb={readContext:Nn,useCallback:eE,useContext:Nn,useEffect:vm,useImperativeHandle:JS,useInsertionEffect:KS,useLayoutEffect:ZS,useMemo:tE,useReducer:Hf,useRef:qS,useState:function(){return Hf(ks)},useDebugValue:gm,useDeferredValue:function(t){var e=Un();return nE(e,St.memoizedState,t)},useTransition:function(){var t=Hf(ks)[0],e=Un().memoizedState;return[t,e]},useMutableSource:GS,useSyncExternalStore:VS,useId:rE,unstable_isNewReconciler:!1},Ib={readContext:Nn,useCallback:eE,useContext:Nn,useEffect:vm,useImperativeHandle:JS,useInsertionEffect:KS,useLayoutEffect:ZS,useMemo:tE,useReducer:Gf,useRef:qS,useState:function(){return Gf(ks)},useDebugValue:gm,useDeferredValue:function(t){var e=Un();return St===null?e.memoizedState=t:nE(e,St.memoizedState,t)},useTransition:function(){var t=Gf(ks)[0],e=Un().memoizedState;return[t,e]},useMutableSource:GS,useSyncExternalStore:VS,useId:rE,unstable_isNewReconciler:!1};function yo(t,e){try{var n="",r=e;do n+=oT(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:i,digest:null}}function Vf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Oh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Db=typeof WeakMap=="function"?WeakMap:Map;function sE(t,e,n){n=Nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){yc||(yc=!0,Wh=r),Oh(t,e)},n}function lE(t,e,n){n=Nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Oh(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Oh(t,e),typeof r!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Db;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Xb.bind(null,t,e,n),e.then(t,t))}function Ig(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nr(-1,1),e.tag=2,vi(n,e,1))),n.lanes|=1),t)}var Ob=$r.ReactCurrentOwner,sn=!1;function Zt(t,e,n,r){e.child=t===null?BS(e,null,n,r):go(e,t.child,n,r)}function Og(t,e,n,r,i){n=n.render;var a=e.ref;return so(e,i),r=pm(t,e,n,r,a,i),n=mm(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(ot&&n&&nm(e),e.flags|=1,Zt(t,e,r,i),e.child)}function Ng(t,e,n,r,i){if(t===null){var a=n.type;return typeof a=="function"&&!Tm(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,uE(t,e,a,r,i)):(t=Gu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ls,n(o,r)&&t.ref===e.ref)return Br(t,e,i)}return e.flags|=1,t=yi(a,r),t.ref=e.ref,t.return=e,e.child=t}function uE(t,e,n,r,i){if(t!==null){var a=t.memoizedProps;if(Ls(a,r)&&t.ref===e.ref)if(sn=!1,e.pendingProps=r=a,(t.lanes&i)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Br(t,e,i)}return Nh(t,e,n,r,i)}function cE(t,e,n){var r=e.pendingProps,i=r.children,a=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(Za,gn),gn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Qe(Za,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Qe(Za,gn),gn|=r}else a!==null?(r=a.baseLanes|n,e.memoizedState=null):r=n,Qe(Za,gn),gn|=r;return Zt(t,e,i,n),e.child}function fE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nh(t,e,n,r,i){var a=un(n)?ia:Xt.current;return a=mo(e,a),so(e,i),n=pm(t,e,n,r,a,i),r=mm(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(ot&&r&&nm(e),e.flags|=1,Zt(t,e,n,i),e.child)}function Ug(t,e,n,r,i){if(un(n)){var a=!0;uc(e)}else a=!1;if(so(e,i),e.stateNode===null)zu(t,e),kS(e,n,r),Dh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=un(n)?ia:Xt.current,u=mo(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Ag(e,o,r,u),ni=!1;var h=e.memoizedState;o.state=h,pc(e,r,o,i),l=e.memoizedState,s!==r||h!==l||ln.current||ni?(typeof c=="function"&&(Ih(e,n,c,r),l=e.memoizedState),(s=ni||bg(e,n,s,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,US(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:jn(e.type,s),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=un(n)?ia:Xt.current,l=mo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||h!==l)&&Ag(e,o,r,l),ni=!1,h=e.memoizedState,o.state=h,pc(e,r,o,i);var y=e.memoizedState;s!==f||h!==y||ln.current||ni?(typeof p=="function"&&(Ih(e,n,p,r),y=e.memoizedState),(u=ni||bg(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Uh(t,e,n,r,a,i)}function Uh(t,e,n,r,i,a){fE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Sg(e,n,!1),Br(t,e,a);r=e.stateNode,Ob.current=e;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=go(e,t.child,null,a),e.child=go(e,null,s,a)):Zt(t,e,s,a),e.memoizedState=r.state,i&&Sg(e,n,!0),e.child}function dE(t){var e=t.stateNode;e.pendingContext?xg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xg(t,e.context,!1),cm(t,e.containerInfo)}function Fg(t,e,n,r,i){return vo(),im(i),e.flags|=256,Zt(t,e,n,r),e.child}var Fh={dehydrated:null,treeContext:null,retryLane:0};function kh(t){return{baseLanes:t,cachePool:null,transitions:null}}function hE(t,e,n){var r=e.pendingProps,i=st.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(i&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Qe(st,i&1),t===null)return Ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,a?(r=e.mode,a=e.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=jc(o,r,0,null),t=Zi(t,r,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=kh(n),e.memoizedState=Fh,t):_m(e,o));if(i=t.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Nb(t,e,o,r,s,i,n);if(a){a=r.fallback,o=e.mode,i=t.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=yi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=yi(s,a):(a=Zi(a,o,n,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,o=t.child.memoizedState,o=o===null?kh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~n,e.memoizedState=Fh,r}return a=t.child,t=a.sibling,r=yi(a,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _m(t,e){return e=jc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Dl(t,e,n,r){return r!==null&&im(r),go(e,t.child,null,n),t=_m(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Nb(t,e,n,r,i,a,o){if(n)return e.flags&256?(e.flags&=-257,r=Vf(Error(ee(422))),Dl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=r.fallback,i=e.mode,r=jc({mode:"visible",children:r.children},i,0,null),a=Zi(a,i,o,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,e.mode&1&&go(e,t.child,null,o),e.child.memoizedState=kh(o),e.memoizedState=Fh,a);if(!(e.mode&1))return Dl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(ee(419)),r=Vf(a,r,void 0),Dl(t,e,o,r)}if(s=(o&t.childLanes)!==0,sn||s){if(r=Lt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,zr(t,i),tr(r,t,i,-1))}return wm(),r=Vf(Error(ee(421))),Dl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Yb.bind(null,t),i._reactRetry=e,null):(t=a.treeContext,_n=mi(i.nextSibling),yn=e,ot=!0,Yn=null,t!==null&&(Rn[Pn++]=Ir,Rn[Pn++]=Dr,Rn[Pn++]=aa,Ir=t.id,Dr=t.overflow,aa=e),e=_m(e,r.children),e.flags|=4096,e)}function kg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lh(t.return,e,n)}function Wf(t,e,n,r,i){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function pE(t,e,n){var r=e.pendingProps,i=r.revealOrder,a=r.tail;if(Zt(t,e,r.children,n),r=st.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kg(t,n,e);else if(t.tag===19)kg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Qe(st,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wf(e,!1,i,n,a);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wf(e,!0,n,null,a);break;case"together":Wf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),sa|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ub(t,e,n){switch(e.tag){case 3:dE(e),vo();break;case 5:HS(e);break;case 1:un(e.type)&&uc(e);break;case 4:cm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Qe(dc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Qe(st,st.current&1),e.flags|=128,null):n&e.child.childLanes?hE(t,e,n):(Qe(st,st.current&1),t=Br(t,e,n),t!==null?t.sibling:null);Qe(st,st.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return pE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Qe(st,st.current),r)break;return null;case 22:case 23:return e.lanes=0,cE(t,e,n)}return Br(t,e,n)}var mE,zh,vE,gE;mE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zh=function(){};vE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xi(mr.current);var a=null;switch(n){case"input":i=sh(t,i),r=sh(t,r),a=[];break;case"select":i=ut({},i,{value:void 0}),r=ut({},r,{value:void 0}),a=[];break;case"textarea":i=ch(t,i),r=ch(t,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=sc)}dh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ws.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ws.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&tt("scroll",t),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};gE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Yo(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Fb(t,e,n){var r=e.pendingProps;switch(rm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return un(e.type)&&lc(),Vt(e),null;case 3:return r=e.stateNode,_o(),it(ln),it(Xt),dm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Xh(Yn),Yn=null))),zh(t,e),Vt(e),null;case 5:fm(e);var i=Xi(Us.current);if(n=e.type,t!==null&&e.stateNode!=null)vE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(ee(166));return Vt(e),null}if(t=Xi(mr.current),Ll(e)){r=e.stateNode,n=e.type;var a=e.memoizedProps;switch(r[dr]=e,r[Os]=a,t=(e.mode&1)!==0,n){case"dialog":tt("cancel",r),tt("close",r);break;case"iframe":case"object":case"embed":tt("load",r);break;case"video":case"audio":for(i=0;i<us.length;i++)tt(us[i],r);break;case"source":tt("error",r);break;case"img":case"image":case"link":tt("error",r),tt("load",r);break;case"details":tt("toggle",r);break;case"input":Xv(r,a),tt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},tt("invalid",r);break;case"textarea":qv(r,a),tt("invalid",r)}dh(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Pl(r.textContent,s,t),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Pl(r.textContent,s,t),i=["children",""+s]):ws.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&tt("scroll",r)}switch(n){case"input":El(r),Yv(r,a,!0);break;case"textarea":El(r),Kv(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=sc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dr]=e,t[Os]=r,mE(t,e,!1,!1),e.stateNode=t;e:{switch(o=hh(n,r),n){case"dialog":tt("cancel",t),tt("close",t),i=r;break;case"iframe":case"object":case"embed":tt("load",t),i=r;break;case"video":case"audio":for(i=0;i<us.length;i++)tt(us[i],t);i=r;break;case"source":tt("error",t),i=r;break;case"img":case"image":case"link":tt("error",t),tt("load",t),i=r;break;case"details":tt("toggle",t),i=r;break;case"input":Xv(t,r),i=sh(t,r),tt("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ut({},r,{value:void 0}),tt("invalid",t);break;case"textarea":qv(t,r),i=ch(t,r),tt("invalid",t);break;default:i=r}dh(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Xx(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$x(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ts(t,l):typeof l=="number"&&Ts(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ws.hasOwnProperty(a)?l!=null&&a==="onScroll"&&tt("scroll",t):l!=null&&Gp(t,a,l,o))}switch(n){case"input":El(t),Yv(t,r,!1);break;case"textarea":El(t),Kv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ei(r.value));break;case"select":t.multiple=!!r.multiple,a=r.value,a!=null?ro(t,!!r.multiple,a,!1):r.defaultValue!=null&&ro(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=sc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)gE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Xi(Us.current),Xi(mr.current),Ll(e)){if(r=e.stateNode,n=e.memoizedProps,r[dr]=e,(a=r.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:Pl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pl(r.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dr]=e,e.stateNode=r}return Vt(e),null;case 13:if(it(st),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&_n!==null&&e.mode&1&&!(e.flags&128))OS(),vo(),e.flags|=98560,a=!1;else if(a=Ll(e),r!==null&&r.dehydrated!==null){if(t===null){if(!a)throw Error(ee(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ee(317));a[dr]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),a=!1}else Yn!==null&&(Xh(Yn),Yn=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||st.current&1?Et===0&&(Et=3):wm())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return _o(),zh(t,e),t===null&&Is(e.stateNode.containerInfo),Vt(e),null;case 10:return sm(e.type._context),Vt(e),null;case 17:return un(e.type)&&lc(),Vt(e),null;case 19:if(it(st),a=e.memoizedState,a===null)return Vt(e),null;if(r=(e.flags&128)!==0,o=a.rendering,o===null)if(r)Yo(a,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mc(t),o!==null){for(e.flags|=128,Yo(a,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)a=n,t=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Qe(st,st.current&1|2),e.child}t=t.sibling}a.tail!==null&&mt()>xo&&(e.flags|=128,r=!0,Yo(a,!1),e.lanes=4194304)}else{if(!r)if(t=mc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Yo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ot)return Vt(e),null}else 2*mt()-a.renderingStartTime>xo&&n!==1073741824&&(e.flags|=128,r=!0,Yo(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(n=a.last,n!==null?n.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=mt(),e.sibling=null,n=st.current,Qe(st,r?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Mm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?gn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function kb(t,e){switch(rm(e),e.tag){case 1:return un(e.type)&&lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _o(),it(ln),it(Xt),dm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fm(e),null;case 13:if(it(st),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(st),null;case 4:return _o(),null;case 10:return sm(e.type._context),null;case 22:case 23:return Mm(),null;case 24:return null;default:return null}}var Ol=!1,jt=!1,zb=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Ka(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){dt(t,e,r)}else n.current=null}function Bh(t,e,n){try{n()}catch(r){dt(t,e,r)}}var zg=!1;function Bb(t,e){if(Mh=ic,t=SS(),tm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===i&&(s=o),h===a&&++c===r&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wh={focusedElem:t,selectionRange:n},ic=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,m=y.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:jn(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(x){dt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return y=zg,zg=!1,y}function _s(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var a=i.destroy;i.destroy=void 0,a!==void 0&&Bh(e,n,a)}i=i.next}while(i!==r)}}function Wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _E(t){var e=t.alternate;e!==null&&(t.alternate=null,_E(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dr],delete e[Os],delete e[Ah],delete e[Eb],delete e[Mb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yE(t){return t.tag===5||t.tag===3||t.tag===4}function Bg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sc));else if(r!==4&&(t=t.child,t!==null))for(Gh(t,e,n),t=t.sibling;t!==null;)Gh(t,e,n),t=t.sibling}function Vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Vh(t,e,n),t=t.sibling;t!==null;)Vh(t,e,n),t=t.sibling}var Nt=null,Xn=!1;function Yr(t,e,n){for(n=n.child;n!==null;)xE(t,e,n),n=n.sibling}function xE(t,e,n){if(pr&&typeof pr.onCommitFiberUnmount=="function")try{pr.onCommitFiberUnmount(Uc,n)}catch{}switch(n.tag){case 5:jt||Ka(n,e);case 6:var r=Nt,i=Xn;Nt=null,Yr(t,e,n),Nt=r,Xn=i,Nt!==null&&(Xn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Xn?(t=Nt,n=n.stateNode,t.nodeType===8?Ff(t.parentNode,n):t.nodeType===1&&Ff(t,n),Rs(t)):Ff(Nt,n.stateNode));break;case 4:r=Nt,i=Xn,Nt=n.stateNode.containerInfo,Xn=!0,Yr(t,e,n),Nt=r,Xn=i;break;case 0:case 11:case 14:case 15:if(!jt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Bh(n,e,o),i=i.next}while(i!==r)}Yr(t,e,n);break;case 1:if(!jt&&(Ka(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){dt(n,e,s)}Yr(t,e,n);break;case 21:Yr(t,e,n);break;case 22:n.mode&1?(jt=(r=jt)||n.memoizedState!==null,Yr(t,e,n),jt=r):Yr(t,e,n);break;default:Yr(t,e,n)}}function Hg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zb),e.forEach(function(r){var i=qb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:Nt=s.stateNode,Xn=!1;break e;case 3:Nt=s.stateNode.containerInfo,Xn=!0;break e;case 4:Nt=s.stateNode.containerInfo,Xn=!0;break e}s=s.return}if(Nt===null)throw Error(ee(160));xE(a,o,i),Nt=null,Xn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){dt(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)SE(e,t),e=e.sibling}function SE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),or(t),r&4){try{_s(3,t,t.return),Wc(3,t)}catch(_){dt(t,t.return,_)}try{_s(5,t,t.return)}catch(_){dt(t,t.return,_)}}break;case 1:Hn(e,t),or(t),r&512&&n!==null&&Ka(n,n.return);break;case 5:if(Hn(e,t),or(t),r&512&&n!==null&&Ka(n,n.return),t.flags&32){var i=t.stateNode;try{Ts(i,"")}catch(_){dt(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var a=t.memoizedProps,o=n!==null?n.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Gx(i,a),hh(s,o);var u=hh(s,a);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Xx(i,f):c==="dangerouslySetInnerHTML"?$x(i,f):c==="children"?Ts(i,f):Gp(i,c,f,u)}switch(s){case"input":lh(i,a);break;case"textarea":Vx(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?ro(i,!!a.multiple,p,!1):h!==!!a.multiple&&(a.defaultValue!=null?ro(i,!!a.multiple,a.defaultValue,!0):ro(i,!!a.multiple,a.multiple?[]:"",!1))}i[Os]=a}catch(_){dt(t,t.return,_)}}break;case 6:if(Hn(e,t),or(t),r&4){if(t.stateNode===null)throw Error(ee(162));i=t.stateNode,a=t.memoizedProps;try{i.nodeValue=a}catch(_){dt(t,t.return,_)}}break;case 3:if(Hn(e,t),or(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rs(e.containerInfo)}catch(_){dt(t,t.return,_)}break;case 4:Hn(e,t),or(t);break;case 13:Hn(e,t),or(t),i=t.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Sm=mt())),r&4&&Hg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||c,Hn(e,t),jt=u):Hn(e,t),or(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(pe=t,c=t.child;c!==null;){for(f=pe=c;pe!==null;){switch(h=pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:_s(4,h,h.return);break;case 1:Ka(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){dt(r,n,_)}}break;case 5:Ka(h,h.return);break;case 22:if(h.memoizedState!==null){Vg(f);continue}}p!==null?(p.return=h,pe=p):Vg(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=jx("display",o))}catch(_){dt(t,t.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){dt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Hn(e,t),or(t),r&4&&Hg(t);break;case 21:break;default:Hn(e,t),or(t)}}function or(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yE(n)){var r=n;break e}n=n.return}throw Error(ee(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ts(i,""),r.flags&=-33);var a=Bg(t);Vh(t,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Bg(t);Gh(t,s,o);break;default:throw Error(ee(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hb(t,e,n){pe=t,EE(t)}function EE(t,e,n){for(var r=(t.mode&1)!==0;pe!==null;){var i=pe,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ol;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||jt;s=Ol;var u=jt;if(Ol=o,(jt=l)&&!u)for(pe=i;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?Wg(i):l!==null?(l.return=o,pe=l):Wg(i);for(;a!==null;)pe=a,EE(a),a=a.sibling;pe=i,Ol=s,jt=u}Gg(t)}else i.subtreeFlags&8772&&a!==null?(a.return=i,pe=a):Gg(t)}}function Gg(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Wc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!jt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Tg(e,a,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tg(e,o,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Rs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}jt||e.flags&512&&Hh(e)}catch(h){dt(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Vg(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Wg(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wc(4,e)}catch(l){dt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){dt(e,i,l)}}var a=e.return;try{Hh(e)}catch(l){dt(e,a,l)}break;case 5:var o=e.return;try{Hh(e)}catch(l){dt(e,o,l)}}}catch(l){dt(e,e.return,l)}if(e===t){pe=null;break}var s=e.sibling;if(s!==null){s.return=e.return,pe=s;break}pe=e.return}}var Gb=Math.ceil,_c=$r.ReactCurrentDispatcher,ym=$r.ReactCurrentOwner,On=$r.ReactCurrentBatchConfig,je=0,Lt=null,xt=null,Ft=0,gn=0,Za=Pi(0),Et=0,Bs=null,sa=0,$c=0,xm=0,ys=null,rn=null,Sm=0,xo=1/0,Cr=null,yc=!1,Wh=null,gi=null,Nl=!1,si=null,xc=0,xs=0,$h=null,Bu=-1,Hu=0;function Jt(){return je&6?mt():Bu!==-1?Bu:Bu=mt()}function _i(t){return t.mode&1?je&2&&Ft!==0?Ft&-Ft:Tb.transition!==null?(Hu===0&&(Hu=aS()),Hu):(t=Ye,t!==0||(t=window.event,t=t===void 0?16:dS(t.type)),t):1}function tr(t,e,n,r){if(50<xs)throw xs=0,$h=null,Error(ee(185));Js(t,n,r),(!(je&2)||t!==Lt)&&(t===Lt&&(!(je&2)&&($c|=n),Et===4&&ai(t,Ft)),cn(t,r),n===1&&je===0&&!(e.mode&1)&&(xo=mt()+500,Hc&&Li()))}function cn(t,e){var n=t.callbackNode;TT(t,e);var r=rc(t,t===Lt?Ft:0);if(r===0)n!==null&&Jv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jv(n),e===1)t.tag===0?wb($g.bind(null,t)):LS($g.bind(null,t)),xb(function(){!(je&6)&&Li()}),n=null;else{switch(oS(r)){case 1:n=Xp;break;case 4:n=rS;break;case 16:n=nc;break;case 536870912:n=iS;break;default:n=nc}n=PE(n,ME.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ME(t,e){if(Bu=-1,Hu=0,je&6)throw Error(ee(327));var n=t.callbackNode;if(lo()&&t.callbackNode!==n)return null;var r=rc(t,t===Lt?Ft:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sc(t,r);else{e=r;var i=je;je|=2;var a=TE();(Lt!==t||Ft!==e)&&(Cr=null,xo=mt()+500,Ki(t,e));do try{$b();break}catch(s){wE(t,s)}while(1);om(),_c.current=a,je=i,xt!==null?e=0:(Lt=null,Ft=0,e=Et)}if(e!==0){if(e===2&&(i=_h(t),i!==0&&(r=i,e=jh(t,i))),e===1)throw n=Bs,Ki(t,0),ai(t,r),cn(t,mt()),n;if(e===6)ai(t,r);else{if(i=t.current.alternate,!(r&30)&&!Vb(i)&&(e=Sc(t,r),e===2&&(a=_h(t),a!==0&&(r=a,e=jh(t,a))),e===1))throw n=Bs,Ki(t,0),ai(t,r),cn(t,mt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(ee(345));case 2:Bi(t,rn,Cr);break;case 3:if(ai(t,r),(r&130023424)===r&&(e=Sm+500-mt(),10<e)){if(rc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bh(Bi.bind(null,t,rn,Cr),e);break}Bi(t,rn,Cr);break;case 4:if(ai(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-er(r);a=1<<o,o=e[o],o>i&&(i=o),r&=~a}if(r=i,r=mt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gb(r/1960))-r,10<r){t.timeoutHandle=bh(Bi.bind(null,t,rn,Cr),r);break}Bi(t,rn,Cr);break;case 5:Bi(t,rn,Cr);break;default:throw Error(ee(329))}}}return cn(t,mt()),t.callbackNode===n?ME.bind(null,t):null}function jh(t,e){var n=ys;return t.current.memoizedState.isDehydrated&&(Ki(t,e).flags|=256),t=Sc(t,e),t!==2&&(e=rn,rn=n,e!==null&&Xh(e)),t}function Xh(t){rn===null?rn=t:rn.push.apply(rn,t)}function Vb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!nr(a(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ai(t,e){for(e&=~xm,e&=~$c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-er(e),r=1<<n;t[n]=-1,e&=~r}}function $g(t){if(je&6)throw Error(ee(327));lo();var e=rc(t,0);if(!(e&1))return cn(t,mt()),null;var n=Sc(t,e);if(t.tag!==0&&n===2){var r=_h(t);r!==0&&(e=r,n=jh(t,r))}if(n===1)throw n=Bs,Ki(t,0),ai(t,e),cn(t,mt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bi(t,rn,Cr),cn(t,mt()),null}function Em(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(xo=mt()+500,Hc&&Li())}}function la(t){si!==null&&si.tag===0&&!(je&6)&&lo();var e=je;je|=1;var n=On.transition,r=Ye;try{if(On.transition=null,Ye=1,t)return t()}finally{Ye=r,On.transition=n,je=e,!(je&6)&&Li()}}function Mm(){gn=Za.current,it(Za)}function Ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yb(n)),xt!==null)for(n=xt.return;n!==null;){var r=n;switch(rm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lc();break;case 3:_o(),it(ln),it(Xt),dm();break;case 5:fm(r);break;case 4:_o();break;case 13:it(st);break;case 19:it(st);break;case 10:sm(r.type._context);break;case 22:case 23:Mm()}n=n.return}if(Lt=t,xt=t=yi(t.current,null),Ft=gn=e,Et=0,Bs=null,xm=$c=sa=0,rn=ys=null,ji!==null){for(e=0;e<ji.length;e++)if(n=ji[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}ji=null}return t}function wE(t,e){do{var n=xt;try{if(om(),Fu.current=gc,vc){for(var r=lt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vc=!1}if(oa=0,Pt=St=lt=null,gs=!1,Fs=0,ym.current=null,n===null||n.return===null){Et=1,Bs=e,xt=null;break}e:{var a=t,o=n.return,s=n,l=e;if(e=Ft,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Ig(o);if(p!==null){p.flags&=-257,Dg(p,o,s,a,e),p.mode&1&&Lg(a,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Lg(a,u,e),wm();break e}l=Error(ee(426))}}else if(ot&&s.mode&1){var m=Ig(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Dg(m,o,s,a,e),im(yo(l,s));break e}}a=l=yo(l,s),Et!==4&&(Et=2),ys===null?ys=[a]:ys.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var d=sE(a,l,e);wg(a,d);break e;case 1:s=l;var v=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(gi===null||!gi.has(g)))){a.flags|=65536,e&=-e,a.lanes|=e;var x=lE(a,s,e);wg(a,x);break e}}a=a.return}while(a!==null)}AE(n)}catch(M){e=M,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(1)}function TE(){var t=_c.current;return _c.current=gc,t===null?gc:t}function wm(){(Et===0||Et===3||Et===2)&&(Et=4),Lt===null||!(sa&268435455)&&!($c&268435455)||ai(Lt,Ft)}function Sc(t,e){var n=je;je|=2;var r=TE();(Lt!==t||Ft!==e)&&(Cr=null,Ki(t,e));do try{Wb();break}catch(i){wE(t,i)}while(1);if(om(),je=n,_c.current=r,xt!==null)throw Error(ee(261));return Lt=null,Ft=0,Et}function Wb(){for(;xt!==null;)bE(xt)}function $b(){for(;xt!==null&&!vT();)bE(xt)}function bE(t){var e=RE(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?AE(t):xt=e,ym.current=null}function AE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kb(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,xt=null;return}}else if(n=Fb(n,e,gn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Et===0&&(Et=5)}function Bi(t,e,n){var r=Ye,i=On.transition;try{On.transition=null,Ye=1,jb(t,e,n,r)}finally{On.transition=i,Ye=r}return null}function jb(t,e,n,r){do lo();while(si!==null);if(je&6)throw Error(ee(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(bT(t,a),t===Lt&&(xt=Lt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nl||(Nl=!0,PE(nc,function(){return lo(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=On.transition,On.transition=null;var o=Ye;Ye=1;var s=je;je|=4,ym.current=null,Bb(t,n),SE(n,t),db(wh),ic=!!Mh,wh=Mh=null,t.current=n,Hb(n),gT(),je=s,Ye=o,On.transition=a}else t.current=n;if(Nl&&(Nl=!1,si=t,xc=i),a=t.pendingLanes,a===0&&(gi=null),xT(n.stateNode),cn(t,mt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yc)throw yc=!1,t=Wh,Wh=null,t;return xc&1&&t.tag!==0&&lo(),a=t.pendingLanes,a&1?t===$h?xs++:(xs=0,$h=t):xs=0,Li(),null}function lo(){if(si!==null){var t=oS(xc),e=On.transition,n=Ye;try{if(On.transition=null,Ye=16>t?16:t,si===null)var r=!1;else{if(t=si,si=null,xc=0,je&6)throw Error(ee(331));var i=je;for(je|=4,pe=t.current;pe!==null;){var a=pe,o=a.child;if(pe.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(pe=u;pe!==null;){var c=pe;switch(c.tag){case 0:case 11:case 15:_s(8,c,a)}var f=c.child;if(f!==null)f.return=c,pe=f;else for(;pe!==null;){c=pe;var h=c.sibling,p=c.return;if(_E(c),c===u){pe=null;break}if(h!==null){h.return=p,pe=h;break}pe=p}}}var y=a.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}pe=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,pe=o;else e:for(;pe!==null;){if(a=pe,a.flags&2048)switch(a.tag){case 0:case 11:case 15:_s(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,pe=d;break e}pe=a.return}}var v=t.current;for(pe=v;pe!==null;){o=pe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,pe=g;else e:for(o=v;pe!==null;){if(s=pe,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wc(9,s)}}catch(M){dt(s,s.return,M)}if(s===o){pe=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,pe=x;break e}pe=s.return}}if(je=i,Li(),pr&&typeof pr.onPostCommitFiberRoot=="function")try{pr.onPostCommitFiberRoot(Uc,t)}catch{}r=!0}return r}finally{Ye=n,On.transition=e}}return!1}function jg(t,e,n){e=yo(n,e),e=sE(t,e,1),t=vi(t,e,1),e=Jt(),t!==null&&(Js(t,1,e),cn(t,e))}function dt(t,e,n){if(t.tag===3)jg(t,t,n);else for(;e!==null;){if(e.tag===3){jg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gi===null||!gi.has(r))){t=yo(n,t),t=lE(e,t,1),e=vi(e,t,1),t=Jt(),e!==null&&(Js(e,1,t),cn(e,t));break}}e=e.return}}function Xb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ft&n)===n&&(Et===4||Et===3&&(Ft&130023424)===Ft&&500>mt()-Sm?Ki(t,0):xm|=n),cn(t,e)}function CE(t,e){e===0&&(t.mode&1?(e=Tl,Tl<<=1,!(Tl&130023424)&&(Tl=4194304)):e=1);var n=Jt();t=zr(t,e),t!==null&&(Js(t,e,n),cn(t,n))}function Yb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),CE(t,n)}function qb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(ee(314))}r!==null&&r.delete(e),CE(t,n)}var RE;RE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,Ub(t,e,n);sn=!!(t.flags&131072)}else sn=!1,ot&&e.flags&1048576&&IS(e,fc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zu(t,e),t=e.pendingProps;var i=mo(e,Xt.current);so(e,n),i=pm(null,e,r,t,i,n);var a=mm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(r)?(a=!0,uc(e)):a=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,um(e),i.updater=Gc,e.stateNode=i,i._reactInternals=e,Dh(e,r,t,n),e=Uh(null,e,r,!0,a,n)):(e.tag=0,ot&&a&&nm(e),Zt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Zb(r),t=jn(r,t),i){case 0:e=Nh(null,e,r,t,n);break e;case 1:e=Ug(null,e,r,t,n);break e;case 11:e=Og(null,e,r,t,n);break e;case 14:e=Ng(null,e,r,jn(r.type,t),n);break e}throw Error(ee(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),Nh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),Ug(t,e,r,i,n);case 3:e:{if(dE(e),t===null)throw Error(ee(387));r=e.pendingProps,a=e.memoizedState,i=a.element,US(t,e),pc(e,r,null,n);var o=e.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){i=yo(Error(ee(423)),e),e=Fg(t,e,r,n,i);break e}else if(r!==i){i=yo(Error(ee(424)),e),e=Fg(t,e,r,n,i);break e}else for(_n=mi(e.stateNode.containerInfo.firstChild),yn=e,ot=!0,Yn=null,n=BS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),r===i){e=Br(t,e,n);break e}Zt(t,e,r,n)}e=e.child}return e;case 5:return HS(e),t===null&&Ph(e),r=e.type,i=e.pendingProps,a=t!==null?t.memoizedProps:null,o=i.children,Th(r,i)?o=null:a!==null&&Th(r,a)&&(e.flags|=32),fE(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&Ph(e),null;case 13:return hE(t,e,n);case 4:return cm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=go(e,null,r,n):Zt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),Og(t,e,r,i,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,a=e.memoizedProps,o=i.value,Qe(dc,r._currentValue),r._currentValue=o,a!==null)if(nr(a.value,o)){if(a.children===i.children&&!ln.current){e=Br(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Nr(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Lh(a.return,n,e),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(ee(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Lh(o,n,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Zt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,so(e,n),i=Nn(i),r=r(i),e.flags|=1,Zt(t,e,r,n),e.child;case 14:return r=e.type,i=jn(r,e.pendingProps),i=jn(r.type,i),Ng(t,e,r,i,n);case 15:return uE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),zu(t,e),e.tag=1,un(r)?(t=!0,uc(e)):t=!1,so(e,n),kS(e,r,i),Dh(e,r,i,n),Uh(null,e,r,!0,t,n);case 19:return pE(t,e,n);case 22:return cE(t,e,n)}throw Error(ee(156,e.tag))};function PE(t,e){return nS(t,e)}function Kb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,r){return new Kb(t,e,n,r)}function Tm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zb(t){if(typeof t=="function")return Tm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wp)return 11;if(t===$p)return 14}return 2}function yi(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gu(t,e,n,r,i,a){var o=2;if(r=t,typeof t=="function")Tm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ha:return Zi(n.children,i,a,e);case Vp:o=8,i|=8;break;case rh:return t=Dn(12,n,e,i|2),t.elementType=rh,t.lanes=a,t;case ih:return t=Dn(13,n,e,i),t.elementType=ih,t.lanes=a,t;case ah:return t=Dn(19,n,e,i),t.elementType=ah,t.lanes=a,t;case zx:return jc(n,i,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fx:o=10;break e;case kx:o=9;break e;case Wp:o=11;break e;case $p:o=14;break e;case ti:o=16,r=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Dn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=a,e}function Zi(t,e,n,r){return t=Dn(7,t,r,e),t.lanes=n,t}function jc(t,e,n,r){return t=Dn(22,t,r,e),t.elementType=zx,t.lanes=n,t.stateNode={isHidden:!1},t}function $f(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function jf(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Qb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bf(0),this.expirationTimes=bf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bm(t,e,n,r,i,a,o,s,l){return t=new Qb(t,e,n,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Dn(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},um(a),t}function Jb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ba,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function LE(t){if(!t)return Mi;t=t._reactInternals;e:{if(va(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(un(n))return PS(t,n,e)}return e}function IE(t,e,n,r,i,a,o,s,l){return t=bm(n,r,!0,t,i,a,o,s,l),t.context=LE(null),n=t.current,r=Jt(),i=_i(n),a=Nr(r,i),a.callback=e??null,vi(n,a,i),t.current.lanes=i,Js(t,i,r),cn(t,r),t}function Xc(t,e,n,r){var i=e.current,a=Jt(),o=_i(i);return n=LE(n),e.context===null?e.context=n:e.pendingContext=n,e=Nr(a,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vi(i,e,o),t!==null&&(tr(t,i,o,a),Uu(t,i,o)),o}function Ec(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Am(t,e){Xg(t,e),(t=t.alternate)&&Xg(t,e)}function eA(){return null}var DE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cm(t){this._internalRoot=t}Yc.prototype.render=Cm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Xc(t,e,null,null)};Yc.prototype.unmount=Cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;la(function(){Xc(null,t,null,null)}),e[kr]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=uS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ii.length&&e!==0&&e<ii[n].priority;n++);ii.splice(n,0,t),n===0&&fS(t)}};function Rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function tA(t,e,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Ec(o);a.call(u)}}var o=IE(e,r,t,0,null,!1,!1,"",Yg);return t._reactRootContainer=o,t[kr]=o.current,Is(t.nodeType===8?t.parentNode:t),la(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Ec(l);s.call(u)}}var l=bm(t,0,!1,null,null,!1,!1,"",Yg);return t._reactRootContainer=l,t[kr]=l.current,Is(t.nodeType===8?t.parentNode:t),la(function(){Xc(e,l,n,r)}),l}function Kc(t,e,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=Ec(o);s.call(l)}}Xc(e,o,t,i)}else o=tA(n,e,t,i,r);return Ec(o)}sS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ls(e.pendingLanes);n!==0&&(Yp(e,n|1),cn(e,mt()),!(je&6)&&(xo=mt()+500,Li()))}break;case 13:la(function(){var r=zr(t,1);if(r!==null){var i=Jt();tr(r,t,1,i)}}),Am(t,1)}};qp=function(t){if(t.tag===13){var e=zr(t,134217728);if(e!==null){var n=Jt();tr(e,t,134217728,n)}Am(t,134217728)}};lS=function(t){if(t.tag===13){var e=_i(t),n=zr(t,e);if(n!==null){var r=Jt();tr(n,t,e,r)}Am(t,e)}};uS=function(){return Ye};cS=function(t,e){var n=Ye;try{return Ye=t,e()}finally{Ye=n}};mh=function(t,e,n){switch(e){case"input":if(lh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bc(r);if(!i)throw Error(ee(90));Hx(r),lh(r,i)}}}break;case"textarea":Vx(t,n);break;case"select":e=n.value,e!=null&&ro(t,!!n.multiple,e,!1)}};Kx=Em;Zx=la;var nA={usingClientEntryPoint:!1,Events:[tl,$a,Bc,Yx,qx,Em]},qo={findFiberByHostInstance:$i,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rA={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=eS(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||eA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{Uc=Ul.inject(rA),pr=Ul}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nA;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rm(e))throw Error(ee(200));return Jb(t,e,null,n)};En.createRoot=function(t,e){if(!Rm(t))throw Error(ee(299));var n=!1,r="",i=DE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bm(t,1,!1,null,null,n,!1,r,i),t[kr]=e.current,Is(t.nodeType===8?t.parentNode:t),new Cm(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=eS(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return la(t)};En.hydrate=function(t,e,n){if(!qc(e))throw Error(ee(200));return Kc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Rm(t))throw Error(ee(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=DE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=IE(e,null,t,1,n??null,i,!1,a,o),t[kr]=e.current,Is(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yc(e)};En.render=function(t,e,n){if(!qc(e))throw Error(ee(200));return Kc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!qc(t))throw Error(ee(40));return t._reactRootContainer?(la(function(){Kc(null,null,t,!1,function(){t._reactRootContainer=null,t[kr]=null})}),!0):!1};En.unstable_batchedUpdates=Em;En.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!qc(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Kc(t,e,n,!1,r)};En.version="18.2.0-next-9e3b772b8-20220608";function OE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(OE)}catch(t){console.error(t)}}OE(),Ix.exports=En;var iA=Ix.exports,qg=iA;th.createRoot=qg.createRoot,th.hydrateRoot=qg.hydrateRoot;/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hs(){return Hs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hs.apply(this,arguments)}var li;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(li||(li={}));const Kg="popstate";function aA(t){t===void 0&&(t={});function e(r,i){let{pathname:a,search:o,hash:s}=r.location;return Yh("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:NE(i)}return sA(e,n,null,t)}function Mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Pm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oA(){return Math.random().toString(36).substr(2,8)}function Zg(t,e){return{usr:t.state,key:t.key,idx:e}}function Yh(t,e,n,r){return n===void 0&&(n=null),Hs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Po(e):e,{state:n,key:e&&e.key||r||oA()})}function NE(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Po(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function sA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=li.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Hs({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){s=li.Pop;let m=c(),d=m==null?null:m-u;u=m,l&&l({action:s,location:_.location,delta:d})}function h(m,d){s=li.Push;let v=Yh(_.location,m,d);n&&n(v,m),u=c()+1;let g=Zg(v,u),x=_.createHref(v);try{o.pushState(g,"",x)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(x)}a&&l&&l({action:s,location:_.location,delta:1})}function p(m,d){s=li.Replace;let v=Yh(_.location,m,d);n&&n(v,m),u=c();let g=Zg(v,u),x=_.createHref(v);o.replaceState(g,"",x),a&&l&&l({action:s,location:_.location,delta:0})}function y(m){let d=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof m=="string"?m:NE(m);return Mt(d,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,d)}let _={get action(){return s},get location(){return t(i,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Kg,f),l=m,()=>{i.removeEventListener(Kg,f),l=null}},createHref(m){return e(i,m)},createURL:y,encodeLocation(m){let d=y(m);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:p,go(m){return o.go(m)}};return _}var Qg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Qg||(Qg={}));function lA(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Po(e):e,i=kE(r.pathname||"/",n);if(i==null)return null;let a=UE(t);uA(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=_A(a[s],SA(i));return o}function UE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(Mt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Qi([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(Mt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),UE(a.children,e,c,u)),!(a.path==null&&!a.index)&&e.push({path:u,score:vA(u,a.index),routesMeta:c})};return t.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of FE(a.path))i(a,o,l)}),e}function FE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=FE(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function uA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cA=/^:\w+$/,fA=3,dA=2,hA=1,pA=10,mA=-2,Jg=t=>t==="*";function vA(t,e){let n=t.split("/"),r=n.length;return n.some(Jg)&&(r+=mA),e&&(r+=dA),n.filter(i=>!Jg(i)).reduce((i,a)=>i+(cA.test(a)?fA:a===""?hA:pA),r)}function gA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _A(t,e){let{routesMeta:n}=t,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=yA({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;a.push({params:r,pathname:Qi([i,c.pathname]),pathnameBase:AA(Qi([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Qi([i,c.pathnameBase]))}return a}function yA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=xA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=s[f]||"";o=a.slice(0,a.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=EA(s[f]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:t}}function xA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Pm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(r.push(s),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function SA(t){try{return decodeURI(t)}catch(e){return Pm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function EA(t,e){try{return decodeURIComponent(t)}catch(n){return Pm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function kE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function MA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Po(t):t;return{pathname:n?n.startsWith("/")?n:wA(n,e):e,search:CA(r),hash:RA(i)}}function wA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function TA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function bA(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Po(t):(i=Hs({},t),Mt(!i.pathname||!i.pathname.includes("?"),Xf("?","pathname","search",i)),Mt(!i.pathname||!i.pathname.includes("#"),Xf("#","pathname","hash",i)),Mt(!i.search||!i.search.includes("#"),Xf("#","search","hash",i)));let a=t===""||i.pathname==="",o=a?"/":i.pathname,s;if(r||o==null)s=n;else{let f=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}s=f>=0?e[f]:"/"}let l=MA(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Qi=t=>t.join("/").replace(/\/\/+/g,"/"),AA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),CA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,RA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function PA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const zE=["post","put","patch","delete"];new Set(zE);const LA=["get",...zE];new Set(LA);/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mc(){return Mc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mc.apply(this,arguments)}const Lm=de.createContext(null),IA=de.createContext(null),Zc=de.createContext(null),Qc=de.createContext(null),Lo=de.createContext({outlet:null,matches:[],isDataRoute:!1}),BE=de.createContext(null);function Jc(){return de.useContext(Qc)!=null}function Im(){return Jc()||Mt(!1),de.useContext(Qc).location}function HE(t){de.useContext(Zc).static||de.useLayoutEffect(t)}function Dm(){let{isDataRoute:t}=de.useContext(Lo);return t?$A():DA()}function DA(){Jc()||Mt(!1);let t=de.useContext(Lm),{basename:e,navigator:n}=de.useContext(Zc),{matches:r}=de.useContext(Lo),{pathname:i}=Im(),a=JSON.stringify(TA(r).map(l=>l.pathnameBase)),o=de.useRef(!1);return HE(()=>{o.current=!0}),de.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=bA(l,JSON.parse(a),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Qi([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,a,i,t])}function OA(t,e){return NA(t,e)}function NA(t,e,n){Jc()||Mt(!1);let{navigator:r}=de.useContext(Zc),{matches:i}=de.useContext(Lo),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let l=Im(),u;if(e){var c;let _=typeof e=="string"?Po(e):e;s==="/"||(c=_.pathname)!=null&&c.startsWith(s)||Mt(!1),u=_}else u=l;let f=u.pathname||"/",h=s==="/"?f:f.slice(s.length)||"/",p=lA(t,{pathname:h}),y=BA(p&&p.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Qi([s,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?s:Qi([s,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?de.createElement(Qc.Provider,{value:{location:Mc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:li.Pop}},y):y}function UA(){let t=WA(),e=PA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),n?de.createElement("pre",{style:i},n):null,a)}const FA=de.createElement(UA,null);class kA extends de.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?de.createElement(Lo.Provider,{value:this.props.routeContext},de.createElement(BE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zA(t){let{routeContext:e,match:n,children:r}=t,i=de.useContext(Lm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),de.createElement(Lo.Provider,{value:e},r)}function BA(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let s=a.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));s>=0||Mt(!1),a=a.slice(0,Math.min(a.length,s+1))}return a.reduceRight((s,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||FA);let h=e.concat(a.slice(0,u+1)),p=()=>{let y;return c?y=f:l.route.Component?y=de.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=s,de.createElement(zA,{match:l,routeContext:{outlet:s,matches:h,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?de.createElement(kA,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var qh;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(qh||(qh={}));var Gs;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Gs||(Gs={}));function HA(t){let e=de.useContext(Lm);return e||Mt(!1),e}function GA(t){let e=de.useContext(IA);return e||Mt(!1),e}function VA(t){let e=de.useContext(Lo);return e||Mt(!1),e}function GE(t){let e=VA(),n=e.matches[e.matches.length-1];return n.route.id||Mt(!1),n.route.id}function WA(){var t;let e=de.useContext(BE),n=GA(Gs.UseRouteError),r=GE(Gs.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function $A(){let{router:t}=HA(qh.UseNavigateStable),e=GE(Gs.UseNavigateStable),n=de.useRef(!1);return HE(()=>{n.current=!0}),de.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Mc({fromRouteId:e},a)))},[t,e])}function Om(t){Mt(!1)}function jA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=li.Pop,navigator:a,static:o=!1}=t;Jc()&&Mt(!1);let s=e.replace(/^\/*/,"/"),l=de.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=Po(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:p="default"}=r,y=de.useMemo(()=>{let _=kE(u,s);return _==null?null:{location:{pathname:_,search:c,hash:f,state:h,key:p},navigationType:i}},[s,u,c,f,h,p,i]);return y==null?null:de.createElement(Zc.Provider,{value:l},de.createElement(Qc.Provider,{children:n,value:y}))}function VE(t){let{children:e,location:n}=t;return OA(Kh(e),n)}var e0;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(e0||(e0={}));new Promise(()=>{});function Kh(t,e){e===void 0&&(e=[]);let n=[];return de.Children.forEach(t,(r,i)=>{if(!de.isValidElement(r))return;let a=[...e,i];if(r.type===de.Fragment){n.push.apply(n,Kh(r.props.children,a));return}r.type!==Om&&Mt(!1),!r.props.index||!r.props.children||Mt(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Kh(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const t0="startTransition";function XA(t){let{basename:e,children:n,window:r}=t,i=de.useRef();i.current==null&&(i.current=aA({window:r,v5Compat:!0}));let a=i.current,[o,s]=de.useState({action:a.action,location:a.location}),l=de.useCallback(u=>{t0 in Vv?Vv[t0](()=>s(u)):s(u)},[s]);return de.useLayoutEffect(()=>a.listen(l),[a,l]),de.createElement(jA,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a})}var n0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(n0||(n0={}));var r0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(r0||(r0={}));/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Zh=function(t,e){return Zh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},Zh(t,e)};function YA(t,e){Zh(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var vr=function(){return vr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},vr.apply(this,arguments)};function Vi(t,e,n,r){var i=arguments.length,a=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a}function qA(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var a=arguments[e],o=0,s=a.length;o<s;o++,i++)r[i]=a[o];return r}var Bt=function(t){try{return!!t()}catch{return!0}},KA=Bt,Nm=!KA(function(){var t=function(){}.bind();return typeof t!="function"||t.hasOwnProperty("prototype")}),WE=Nm,$E=Function.prototype,Qh=$E.call,ZA=WE&&$E.bind.bind(Qh,Qh),At=WE?ZA:function(t){return function(){return Qh.apply(t,arguments)}},jE=At,QA=jE({}.toString),JA=jE("".slice),Io=function(t){return JA(QA(t),8,-1)},e2=At,t2=Bt,n2=Io,Yf=Object,r2=e2("".split),Um=t2(function(){return!Yf("z").propertyIsEnumerable(0)})?function(t){return n2(t)=="String"?r2(t,""):Yf(t)}:Yf,Do=function(t){return t==null},i2=Do,a2=TypeError,Fm=function(t){if(i2(t))throw a2("Can't call method on "+t);return t},o2=Um,s2=Fm,Oo=function(t){return o2(s2(t))},Fl=function(t){return t&&t.Math==Math&&t},wn=Fl(typeof globalThis=="object"&&globalThis)||Fl(typeof window=="object"&&window)||Fl(typeof self=="object"&&self)||Fl(typeof xf=="object"&&xf)||function(){return this}()||xf||Function("return this")(),XE={exports:{}},i0=wn,l2=Object.defineProperty,km=function(t,e){try{l2(i0,t,{value:e,configurable:!0,writable:!0})}catch{i0[t]=e}return e},u2=wn,c2=km,a0="__core-js_shared__",f2=u2[a0]||c2(a0,{}),zm=f2,o0=zm;(XE.exports=function(t,e){return o0[t]||(o0[t]=e!==void 0?e:{})})("versions",[]).push({version:"3.30.2",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"});var YE=XE.exports,d2=Fm,h2=Object,rl=function(t){return h2(d2(t))},p2=At,m2=rl,v2=p2({}.hasOwnProperty),rr=Object.hasOwn||function(e,n){return v2(m2(e),n)},g2=At,_2=0,y2=Math.random(),x2=g2(1 .toString),Bm=function(t){return"Symbol("+(t===void 0?"":t)+")_"+x2(++_2+y2,36)},S2=typeof navigator<"u"&&String(navigator.userAgent)||"",qE=wn,qf=S2,s0=qE.process,l0=qE.Deno,u0=s0&&s0.versions||l0&&l0.version,c0=u0&&u0.v8,qn,wc;c0&&(qn=c0.split("."),wc=qn[0]>0&&qn[0]<4?1:+(qn[0]+qn[1]));!wc&&qf&&(qn=qf.match(/Edge\/(\d+)/),(!qn||qn[1]>=74)&&(qn=qf.match(/Chrome\/(\d+)/),qn&&(wc=+qn[1])));var E2=wc,f0=E2,M2=Bt,w2=wn,T2=w2.String,KE=!!Object.getOwnPropertySymbols&&!M2(function(){var t=Symbol();return!T2(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&f0&&f0<41}),b2=KE,ZE=b2&&!Symbol.sham&&typeof Symbol.iterator=="symbol",A2=wn,C2=YE,d0=rr,R2=Bm,P2=KE,L2=ZE,Qa=A2.Symbol,Kf=C2("wks"),I2=L2?Qa.for||Qa:Qa&&Qa.withoutSetter||R2,kn=function(t){return d0(Kf,t)||(Kf[t]=P2&&d0(Qa,t)?Qa[t]:I2("Symbol."+t)),Kf[t]},Jh=typeof document=="object"&&document.all,D2=typeof Jh>"u"&&Jh!==void 0,QE={all:Jh,IS_HTMLDDA:D2},JE=QE,O2=JE.all,It=JE.IS_HTMLDDA?function(t){return typeof t=="function"||t===O2}:function(t){return typeof t=="function"},h0=It,e1=QE,N2=e1.all,Tn=e1.IS_HTMLDDA?function(t){return typeof t=="object"?t!==null:h0(t)||t===N2}:function(t){return typeof t=="object"?t!==null:h0(t)},U2=Tn,F2=String,k2=TypeError,yr=function(t){if(U2(t))return t;throw k2(F2(t)+" is not an object")},t1={},z2=Bt,zn=!z2(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),B2=zn,H2=Bt,n1=B2&&H2(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),ir={},G2=wn,p0=Tn,ep=G2.document,V2=p0(ep)&&p0(ep.createElement),r1=function(t){return V2?ep.createElement(t):{}},W2=zn,$2=Bt,j2=r1,i1=!W2&&!$2(function(){return Object.defineProperty(j2("div"),"a",{get:function(){return 7}}).a!=7}),X2=Nm,kl=Function.prototype.call,jr=X2?kl.bind(kl):function(){return kl.apply(kl,arguments)},Zf=wn,Y2=It,q2=function(t){return Y2(t)?t:void 0},il=function(t,e){return arguments.length<2?q2(Zf[t]):Zf[t]&&Zf[t][e]},K2=At,Hm=K2({}.isPrototypeOf),Z2=il,Q2=It,J2=Hm,eC=ZE,tC=Object,a1=eC?function(t){return typeof t=="symbol"}:function(t){var e=Z2("Symbol");return Q2(e)&&J2(e.prototype,tC(t))},nC=String,Gm=function(t){try{return nC(t)}catch{return"Object"}},rC=It,iC=Gm,aC=TypeError,ef=function(t){if(rC(t))return t;throw aC(iC(t)+" is not a function")},oC=ef,sC=Do,Vm=function(t,e){var n=t[e];return sC(n)?void 0:oC(n)},Qf=jr,Jf=It,ed=Tn,lC=TypeError,uC=function(t,e){var n,r;if(e==="string"&&Jf(n=t.toString)&&!ed(r=Qf(n,t))||Jf(n=t.valueOf)&&!ed(r=Qf(n,t))||e!=="string"&&Jf(n=t.toString)&&!ed(r=Qf(n,t)))return r;throw lC("Can't convert object to primitive value")},cC=jr,m0=Tn,v0=a1,fC=Vm,dC=uC,hC=kn,pC=TypeError,mC=hC("toPrimitive"),vC=function(t,e){if(!m0(t)||v0(t))return t;var n=fC(t,mC),r;if(n){if(e===void 0&&(e="default"),r=cC(n,t,e),!m0(r)||v0(r))return r;throw pC("Can't convert object to primitive value")}return e===void 0&&(e="number"),dC(t,e)},gC=vC,_C=a1,Wm=function(t){var e=gC(t,"string");return _C(e)?e:e+""},yC=zn,xC=i1,SC=n1,zl=yr,g0=Wm,EC=TypeError,td=Object.defineProperty,MC=Object.getOwnPropertyDescriptor,nd="enumerable",rd="configurable",id="writable";ir.f=yC?SC?function(e,n,r){if(zl(e),n=g0(n),zl(r),typeof e=="function"&&n==="prototype"&&"value"in r&&id in r&&!r[id]){var i=MC(e,n);i&&i[id]&&(e[n]=r.value,r={configurable:rd in r?r[rd]:i[rd],enumerable:nd in r?r[nd]:i[nd],writable:!1})}return td(e,n,r)}:td:function(e,n,r){if(zl(e),n=g0(n),zl(r),xC)try{return td(e,n,r)}catch{}if("get"in r||"set"in r)throw EC("Accessors not supported");return"value"in r&&(e[n]=r.value),e};var wC=Math.ceil,TC=Math.floor,bC=Math.trunc||function(e){var n=+e;return(n>0?TC:wC)(n)},AC=bC,$m=function(t){var e=+t;return e!==e||e===0?0:AC(e)},CC=$m,RC=Math.max,PC=Math.min,o1=function(t,e){var n=CC(t);return n<0?RC(n+e,0):PC(n,e)},LC=$m,IC=Math.min,DC=function(t){return t>0?IC(LC(t),9007199254740991):0},OC=DC,al=function(t){return OC(t.length)},NC=Oo,UC=o1,FC=al,_0=function(t){return function(e,n,r){var i=NC(e),a=FC(i),o=UC(r,a),s;if(t&&n!=n){for(;a>o;)if(s=i[o++],s!=s)return!0}else for(;a>o;o++)if((t||o in i)&&i[o]===n)return t||o||0;return!t&&-1}},kC={includes:_0(!0),indexOf:_0(!1)},tf={},zC=At,ad=rr,BC=Oo,HC=kC.indexOf,GC=tf,y0=zC([].push),s1=function(t,e){var n=BC(t),r=0,i=[],a;for(a in n)!ad(GC,a)&&ad(n,a)&&y0(i,a);for(;e.length>r;)ad(n,a=e[r++])&&(~HC(i,a)||y0(i,a));return i},jm=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],VC=s1,WC=jm,l1=Object.keys||function(e){return VC(e,WC)},$C=zn,jC=n1,XC=ir,YC=yr,qC=Oo,KC=l1;t1.f=$C&&!jC?Object.defineProperties:function(e,n){YC(e);for(var r=qC(n),i=KC(n),a=i.length,o=0,s;a>o;)XC.f(e,s=i[o++],r[s]);return e};var ZC=il,QC=ZC("document","documentElement"),JC=YE,eR=Bm,x0=JC("keys"),Xm=function(t){return x0[t]||(x0[t]=eR(t))},tR=yr,nR=t1,S0=jm,rR=tf,iR=QC,aR=r1,oR=Xm,E0=">",M0="<",tp="prototype",np="script",u1=oR("IE_PROTO"),od=function(){},c1=function(t){return M0+np+E0+t+M0+"/"+np+E0},w0=function(t){t.write(c1("")),t.close();var e=t.parentWindow.Object;return t=null,e},sR=function(){var t=aR("iframe"),e="java"+np+":",n;return t.style.display="none",iR.appendChild(t),t.src=String(e),n=t.contentWindow.document,n.open(),n.write(c1("document.F=Object")),n.close(),n.F},Bl,Vu=function(){try{Bl=new ActiveXObject("htmlfile")}catch{}Vu=typeof document<"u"?document.domain&&Bl?w0(Bl):sR():w0(Bl);for(var t=S0.length;t--;)delete Vu[tp][S0[t]];return Vu()};rR[u1]=!0;var Ym=Object.create||function(e,n){var r;return e!==null?(od[tp]=tR(e),r=new od,od[tp]=null,r[u1]=e):r=Vu(),n===void 0?r:nR.f(r,n)},lR=kn,uR=Ym,cR=ir.f,rp=lR("unscopables"),ip=Array.prototype;ip[rp]==null&&cR(ip,rp,{configurable:!0,value:uR(null)});var fR=function(t){ip[rp][t]=!0},ol={},dR=wn,hR=It,T0=dR.WeakMap,f1=hR(T0)&&/native code/.test(String(T0)),nf=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}},pR=zn,mR=ir,vR=nf,qm=pR?function(t,e,n){return mR.f(t,e,vR(1,n))}:function(t,e,n){return t[e]=n,t},gR=f1,d1=wn,_R=Tn,yR=qm,sd=rr,ld=zm,xR=Xm,SR=tf,b0="Object already initialized",ap=d1.TypeError,ER=d1.WeakMap,Tc,Vs,bc,MR=function(t){return bc(t)?Vs(t):Tc(t,{})},wR=function(t){return function(e){var n;if(!_R(e)||(n=Vs(e)).type!==t)throw ap("Incompatible receiver, "+t+" required");return n}};if(gR||ld.state){var sr=ld.state||(ld.state=new ER);sr.get=sr.get,sr.has=sr.has,sr.set=sr.set,Tc=function(t,e){if(sr.has(t))throw ap(b0);return e.facade=t,sr.set(t,e),e},Vs=function(t){return sr.get(t)||{}},bc=function(t){return sr.has(t)}}else{var xa=xR("state");SR[xa]=!0,Tc=function(t,e){if(sd(t,xa))throw ap(b0);return e.facade=t,yR(t,xa,e),e},Vs=function(t){return sd(t,xa)?t[xa]:{}},bc=function(t){return sd(t,xa)}}var No={set:Tc,get:Vs,has:bc,enforce:MR,getterFor:wR},Km={},Zm={},h1={}.propertyIsEnumerable,p1=Object.getOwnPropertyDescriptor,TR=p1&&!h1.call({1:2},1);Zm.f=TR?function(e){var n=p1(this,e);return!!n&&n.enumerable}:h1;var bR=zn,AR=jr,CR=Zm,RR=nf,PR=Oo,LR=Wm,IR=rr,DR=i1,A0=Object.getOwnPropertyDescriptor;Km.f=bR?A0:function(e,n){if(e=PR(e),n=LR(n),DR)try{return A0(e,n)}catch{}if(IR(e,n))return RR(!AR(CR.f,e,n),e[n])};var m1={exports:{}},op=zn,OR=rr,v1=Function.prototype,NR=op&&Object.getOwnPropertyDescriptor,Qm=OR(v1,"name"),UR=Qm&&function(){}.name==="something",FR=Qm&&(!op||op&&NR(v1,"name").configurable),g1={EXISTS:Qm,PROPER:UR,CONFIGURABLE:FR},kR=At,zR=It,sp=zm,BR=kR(Function.toString);zR(sp.inspectSource)||(sp.inspectSource=function(t){return BR(t)});var _1=sp.inspectSource,Jm=At,HR=Bt,GR=It,Hl=rr,lp=zn,VR=g1.CONFIGURABLE,WR=_1,y1=No,$R=y1.enforce,jR=y1.get,C0=String,Wu=Object.defineProperty,XR=Jm("".slice),YR=Jm("".replace),qR=Jm([].join),KR=lp&&!HR(function(){return Wu(function(){},"length",{value:8}).length!==8}),ZR=String(String).split("String"),QR=m1.exports=function(t,e,n){XR(C0(e),0,7)==="Symbol("&&(e="["+YR(C0(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!Hl(t,"name")||VR&&t.name!==e)&&(lp?Wu(t,"name",{value:e,configurable:!0}):t.name=e),KR&&n&&Hl(n,"arity")&&t.length!==n.arity&&Wu(t,"length",{value:n.arity});try{n&&Hl(n,"constructor")&&n.constructor?lp&&Wu(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch{}var r=$R(t);return Hl(r,"source")||(r.source=qR(ZR,typeof e=="string"?e:"")),t};Function.prototype.toString=QR(function(){return GR(this)&&jR(this).source||WR(this)},"toString");var x1=m1.exports,JR=It,eP=ir,tP=x1,nP=km,Uo=function(t,e,n,r){r||(r={});var i=r.enumerable,a=r.name!==void 0?r.name:e;if(JR(n)&&tP(n,a,r),r.global)i?t[e]=n:nP(e,n);else{try{r.unsafe?t[e]&&(i=!0):delete t[e]}catch{}i?t[e]=n:eP.f(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t},rf={},rP=s1,iP=jm,aP=iP.concat("length","prototype");rf.f=Object.getOwnPropertyNames||function(e){return rP(e,aP)};var ev={};ev.f=Object.getOwnPropertySymbols;var oP=il,sP=At,lP=rf,uP=ev,cP=yr,fP=sP([].concat),dP=oP("Reflect","ownKeys")||function(e){var n=lP.f(cP(e)),r=uP.f;return r?fP(n,r(e)):n},R0=rr,hP=dP,pP=Km,mP=ir,vP=function(t,e,n){for(var r=hP(e),i=mP.f,a=pP.f,o=0;o<r.length;o++){var s=r[o];!R0(t,s)&&!(n&&R0(n,s))&&i(t,s,a(e,s))}},gP=Bt,_P=It,yP=/#|\.prototype\./,sl=function(t,e){var n=SP[xP(t)];return n==MP?!0:n==EP?!1:_P(e)?gP(e):!!e},xP=sl.normalize=function(t){return String(t).replace(yP,".").toLowerCase()},SP=sl.data={},EP=sl.NATIVE="N",MP=sl.POLYFILL="P",S1=sl,ud=wn,wP=Km.f,TP=qm,bP=Uo,AP=km,CP=vP,RP=S1,ll=function(t,e){var n=t.target,r=t.global,i=t.stat,a,o,s,l,u,c;if(r?o=ud:i?o=ud[n]||AP(n,{}):o=(ud[n]||{}).prototype,o)for(s in e){if(u=e[s],t.dontCallGetSet?(c=wP(o,s),l=c&&c.value):l=o[s],a=RP(r?s:n+(i?".":"#")+s,t.forced),!a&&l!==void 0){if(typeof u==typeof l)continue;CP(u,l)}(t.sham||l&&l.sham)&&TP(u,"sham",!0),bP(o,s,u,t)}},PP=Bt,LP=!PP(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),IP=rr,DP=It,OP=rl,NP=Xm,UP=LP,P0=NP("IE_PROTO"),up=Object,FP=up.prototype,E1=UP?up.getPrototypeOf:function(t){var e=OP(t);if(IP(e,P0))return e[P0];var n=e.constructor;return DP(n)&&e instanceof n?n.prototype:e instanceof up?FP:null},kP=Bt,zP=It,BP=Tn,L0=E1,HP=Uo,GP=kn,cp=GP("iterator"),M1=!1,ua,cd,fd;[].keys&&(fd=[].keys(),"next"in fd?(cd=L0(L0(fd)),cd!==Object.prototype&&(ua=cd)):M1=!0);var VP=!BP(ua)||kP(function(){var t={};return ua[cp].call(t)!==t});VP&&(ua={});zP(ua[cp])||HP(ua,cp,function(){return this});var w1={IteratorPrototype:ua,BUGGY_SAFARI_ITERATORS:M1},WP=ir.f,$P=rr,jP=kn,I0=jP("toStringTag"),tv=function(t,e,n){t&&!n&&(t=t.prototype),t&&!$P(t,I0)&&WP(t,I0,{configurable:!0,value:e})},XP=w1.IteratorPrototype,YP=Ym,qP=nf,KP=tv,ZP=ol,QP=function(){return this},JP=function(t,e,n,r){var i=e+" Iterator";return t.prototype=YP(XP,{next:qP(+!r,n)}),KP(t,i,!1),ZP[i]=QP,t},eL=At,tL=ef,nL=function(t,e,n){try{return eL(tL(Object.getOwnPropertyDescriptor(t,e)[n]))}catch{}},rL=It,iL=String,aL=TypeError,oL=function(t){if(typeof t=="object"||rL(t))return t;throw aL("Can't set "+iL(t)+" as a prototype")},sL=nL,lL=yr,uL=oL,T1=Object.setPrototypeOf||("__proto__"in{}?function(){var t=!1,e={},n;try{n=sL(Object.prototype,"__proto__","set"),n(e,[]),t=e instanceof Array}catch{}return function(i,a){return lL(i),uL(a),t?n(i,a):i.__proto__=a,i}}():void 0),cL=ll,fL=jr,b1=g1,dL=It,hL=JP,D0=E1,O0=T1,pL=tv,mL=qm,dd=Uo,vL=kn,gL=ol,A1=w1,_L=b1.PROPER,yL=b1.CONFIGURABLE,N0=A1.IteratorPrototype,Gl=A1.BUGGY_SAFARI_ITERATORS,Ko=vL("iterator"),U0="keys",Zo="values",F0="entries",xL=function(){return this},nv=function(t,e,n,r,i,a,o){hL(n,e,r);var s=function(d){if(d===i&&h)return h;if(!Gl&&d in c)return c[d];switch(d){case U0:return function(){return new n(this,d)};case Zo:return function(){return new n(this,d)};case F0:return function(){return new n(this,d)}}return function(){return new n(this)}},l=e+" Iterator",u=!1,c=t.prototype,f=c[Ko]||c["@@iterator"]||i&&c[i],h=!Gl&&f||s(i),p=e=="Array"&&c.entries||f,y,_,m;if(p&&(y=D0(p.call(new t)),y!==Object.prototype&&y.next&&(D0(y)!==N0&&(O0?O0(y,N0):dL(y[Ko])||dd(y,Ko,xL)),pL(y,l,!0))),_L&&i==Zo&&f&&f.name!==Zo&&(yL?mL(c,"name",Zo):(u=!0,h=function(){return fL(f,this)})),i)if(_={values:s(Zo),keys:a?h:s(U0),entries:s(F0)},o)for(m in _)(Gl||u||!(m in c))&&dd(c,m,_[m]);else cL({target:e,proto:!0,forced:Gl||u},_);return c[Ko]!==h&&dd(c,Ko,h,{name:i}),gL[e]=h,_},rv=function(t,e){return{value:t,done:e}},SL=Oo,iv=fR,k0=ol,C1=No,EL=ir.f,ML=nv,Vl=rv,wL=zn,R1="Array Iterator",TL=C1.set,bL=C1.getterFor(R1);ML(Array,"Array",function(t,e){TL(this,{type:R1,target:SL(t),index:0,kind:e})},function(){var t=bL(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,Vl(void 0,!0)):n=="keys"?Vl(r,!1):n=="values"?Vl(e[r],!1):Vl([r,e[r]],!1)},"values");var z0=k0.Arguments=k0.Array;iv("keys");iv("values");iv("entries");if(wL&&z0.name!=="values")try{EL(z0,"name",{value:"values"})}catch{}var P1={exports:{}},L1={},AL=Wm,CL=ir,RL=nf,I1=function(t,e,n){var r=AL(e);r in t?CL.f(t,r,RL(0,n)):t[r]=n},B0=o1,PL=al,LL=I1,IL=Array,DL=Math.max,OL=function(t,e,n){for(var r=PL(t),i=B0(e,r),a=B0(n===void 0?r:n,r),o=IL(DL(a-i,0)),s=0;i<a;i++,s++)LL(o,s,t[i]);return o.length=s,o},NL=Io,UL=Oo,D1=rf.f,FL=OL,O1=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],kL=function(t){try{return D1(t)}catch{return FL(O1)}};L1.f=function(e){return O1&&NL(e)=="Window"?kL(e):D1(UL(e))};var zL=Bt,BL=zL(function(){if(typeof ArrayBuffer=="function"){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}),HL=Bt,GL=Tn,VL=Io,H0=BL,$u=Object.isExtensible,WL=HL(function(){$u(1)}),$L=WL||H0?function(e){return!GL(e)||H0&&VL(e)=="ArrayBuffer"?!1:$u?$u(e):!0}:$u,jL=Bt,N1=!jL(function(){return Object.isExtensible(Object.preventExtensions({}))}),XL=ll,YL=At,qL=tf,KL=Tn,av=rr,ZL=ir.f,G0=rf,QL=L1,ov=$L,JL=Bm,eI=N1,U1=!1,Hr=JL("meta"),tI=0,sv=function(t){ZL(t,Hr,{value:{objectID:"O"+tI++,weakData:{}}})},nI=function(t,e){if(!KL(t))return typeof t=="symbol"?t:(typeof t=="string"?"S":"P")+t;if(!av(t,Hr)){if(!ov(t))return"F";if(!e)return"E";sv(t)}return t[Hr].objectID},rI=function(t,e){if(!av(t,Hr)){if(!ov(t))return!0;if(!e)return!1;sv(t)}return t[Hr].weakData},iI=function(t){return eI&&U1&&ov(t)&&!av(t,Hr)&&sv(t),t},aI=function(){oI.enable=function(){},U1=!0;var t=G0.f,e=YL([].splice),n={};n[Hr]=1,t(n).length&&(G0.f=function(r){for(var i=t(r),a=0,o=i.length;a<o;a++)if(i[a]===Hr){e(i,a,1);break}return i},XL({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:QL.f}))},oI=P1.exports={enable:aI,fastKey:nI,getWeakData:rI,onFreeze:iI};qL[Hr]=!0;var af=P1.exports,sI=Io,lI=At,uI=function(t){if(sI(t)==="Function")return lI(t)},V0=uI,cI=ef,fI=Nm,dI=V0(V0.bind),of=function(t,e){return cI(t),e===void 0?t:fI?dI(t,e):function(){return t.apply(e,arguments)}},hI=kn,pI=ol,mI=hI("iterator"),vI=Array.prototype,F1=function(t){return t!==void 0&&(pI.Array===t||vI[mI]===t)},gI=kn,_I=gI("toStringTag"),k1={};k1[_I]="z";var lv=String(k1)==="[object z]",yI=lv,xI=It,ju=Io,SI=kn,EI=SI("toStringTag"),MI=Object,wI=ju(function(){return arguments}())=="Arguments",TI=function(t,e){try{return t[e]}catch{}},sf=yI?ju:function(t){var e,n,r;return t===void 0?"Undefined":t===null?"Null":typeof(n=TI(e=MI(t),EI))=="string"?n:wI?ju(e):(r=ju(e))=="Object"&&xI(e.callee)?"Arguments":r},bI=sf,W0=Vm,AI=Do,CI=ol,RI=kn,PI=RI("iterator"),uv=function(t){if(!AI(t))return W0(t,PI)||W0(t,"@@iterator")||CI[bI(t)]},LI=jr,II=ef,DI=yr,OI=Gm,NI=uv,UI=TypeError,z1=function(t,e){var n=arguments.length<2?NI(t):e;if(II(n))return DI(LI(n,t));throw UI(OI(t)+" is not iterable")},FI=jr,$0=yr,kI=Vm,B1=function(t,e,n){var r,i;$0(t);try{if(r=kI(t,"return"),!r){if(e==="throw")throw n;return n}r=FI(r,t)}catch(a){i=!0,r=a}if(e==="throw")throw n;if(i)throw r;return $0(r),n},zI=of,BI=jr,HI=yr,GI=Gm,VI=F1,WI=al,j0=Hm,$I=z1,jI=uv,X0=B1,XI=TypeError,Xu=function(t,e){this.stopped=t,this.result=e},Y0=Xu.prototype,cv=function(t,e,n){var r=n&&n.that,i=!!(n&&n.AS_ENTRIES),a=!!(n&&n.IS_RECORD),o=!!(n&&n.IS_ITERATOR),s=!!(n&&n.INTERRUPTED),l=zI(e,r),u,c,f,h,p,y,_,m=function(v){return u&&X0(u,"normal",v),new Xu(!0,v)},d=function(v){return i?(HI(v),s?l(v[0],v[1],m):l(v[0],v[1])):s?l(v,m):l(v)};if(a)u=t.iterator;else if(o)u=t;else{if(c=jI(t),!c)throw XI(GI(t)+" is not iterable");if(VI(c)){for(f=0,h=WI(t);h>f;f++)if(p=d(t[f]),p&&j0(Y0,p))return p;return new Xu(!1)}u=$I(t,c)}for(y=a?t.next:u.next;!(_=BI(y,u)).done;){try{p=d(_.value)}catch(v){X0(u,"throw",v)}if(typeof p=="object"&&p&&j0(Y0,p))return p}return new Xu(!1)},YI=Hm,qI=TypeError,fv=function(t,e){if(YI(e,t))return t;throw qI("Incorrect invocation")},KI=kn,H1=KI("iterator"),G1=!1;try{var ZI=0,q0={next:function(){return{done:!!ZI++}},return:function(){G1=!0}};q0[H1]=function(){return this},Array.from(q0,function(){throw 2})}catch{}var V1=function(t,e){if(!e&&!G1)return!1;var n=!1;try{var r={};r[H1]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch{}return n},QI=It,JI=Tn,K0=T1,e3=function(t,e,n){var r,i;return K0&&QI(r=e.constructor)&&r!==n&&JI(i=r.prototype)&&i!==n.prototype&&K0(t,i),t},t3=ll,n3=wn,r3=At,Z0=S1,i3=Uo,a3=af,o3=cv,s3=fv,l3=It,u3=Do,hd=Tn,pd=Bt,c3=V1,f3=tv,d3=e3,dv=function(t,e,n){var r=t.indexOf("Map")!==-1,i=t.indexOf("Weak")!==-1,a=r?"set":"add",o=n3[t],s=o&&o.prototype,l=o,u={},c=function(d){var v=r3(s[d]);i3(s,d,d=="add"?function(x){return v(this,x===0?0:x),this}:d=="delete"?function(g){return i&&!hd(g)?!1:v(this,g===0?0:g)}:d=="get"?function(x){return i&&!hd(x)?void 0:v(this,x===0?0:x)}:d=="has"?function(x){return i&&!hd(x)?!1:v(this,x===0?0:x)}:function(x,M){return v(this,x===0?0:x,M),this})},f=Z0(t,!l3(o)||!(i||s.forEach&&!pd(function(){new o().entries().next()})));if(f)l=n.getConstructor(e,t,r,a),a3.enable();else if(Z0(t,!0)){var h=new l,p=h[a](i?{}:-0,1)!=h,y=pd(function(){h.has(1)}),_=c3(function(d){new o(d)}),m=!i&&pd(function(){for(var d=new o,v=5;v--;)d[a](v,v);return!d.has(-0)});_||(l=e(function(d,v){s3(d,s);var g=d3(new o,d,l);return u3(v)||o3(v,g[a],{that:g,AS_ENTRIES:r}),g}),l.prototype=s,s.constructor=l),(y||m)&&(c("delete"),c("has"),r&&c("get")),(m||p)&&c(a),i&&s.clear&&delete s.clear}return u[t]=l,t3({global:!0,constructor:!0,forced:l!=o},u),f3(l,t),i||n.setStrong(l,t,r),l},Q0=x1,h3=ir,W1=function(t,e,n){return n.get&&Q0(n.get,e,{getter:!0}),n.set&&Q0(n.set,e,{setter:!0}),h3.f(t,e,n)},p3=Uo,hv=function(t,e,n){for(var r in e)p3(t,r,e[r],n);return t},m3=il,v3=W1,g3=kn,_3=zn,J0=g3("species"),y3=function(t){var e=m3(t);_3&&e&&!e[J0]&&v3(e,J0,{configurable:!0,get:function(){return this}})},x3=Ym,S3=W1,e_=hv,E3=of,M3=fv,w3=Do,T3=cv,b3=nv,Wl=rv,A3=y3,Qo=zn,t_=af.fastKey,$1=No,n_=$1.set,md=$1.getterFor,j1={getConstructor:function(t,e,n,r){var i=t(function(u,c){M3(u,a),n_(u,{type:e,index:x3(null),first:void 0,last:void 0,size:0}),Qo||(u.size=0),w3(c)||T3(c,u[r],{that:u,AS_ENTRIES:n})}),a=i.prototype,o=md(e),s=function(u,c,f){var h=o(u),p=l(u,c),y,_;return p?p.value=f:(h.last=p={index:_=t_(c,!0),key:c,value:f,previous:y=h.last,next:void 0,removed:!1},h.first||(h.first=p),y&&(y.next=p),Qo?h.size++:u.size++,_!=="F"&&(h.index[_]=p)),u},l=function(u,c){var f=o(u),h=t_(c),p;if(h!=="F")return f.index[h];for(p=f.first;p;p=p.next)if(p.key==c)return p};return e_(a,{clear:function(){for(var c=this,f=o(c),h=f.index,p=f.first;p;)p.removed=!0,p.previous&&(p.previous=p.previous.next=void 0),delete h[p.index],p=p.next;f.first=f.last=void 0,Qo?f.size=0:c.size=0},delete:function(u){var c=this,f=o(c),h=l(c,u);if(h){var p=h.next,y=h.previous;delete f.index[h.index],h.removed=!0,y&&(y.next=p),p&&(p.previous=y),f.first==h&&(f.first=p),f.last==h&&(f.last=y),Qo?f.size--:c.size--}return!!h},forEach:function(c){for(var f=o(this),h=E3(c,arguments.length>1?arguments[1]:void 0),p;p=p?p.next:f.first;)for(h(p.value,p.key,this);p&&p.removed;)p=p.previous},has:function(c){return!!l(this,c)}}),e_(a,n?{get:function(c){var f=l(this,c);return f&&f.value},set:function(c,f){return s(this,c===0?0:c,f)}}:{add:function(c){return s(this,c=c===0?0:c,c)}}),Qo&&S3(a,"size",{configurable:!0,get:function(){return o(this).size}}),i},setStrong:function(t,e,n){var r=e+" Iterator",i=md(e),a=md(r);b3(t,e,function(o,s){n_(this,{type:r,target:o,state:i(o),kind:s,last:void 0})},function(){for(var o=a(this),s=o.kind,l=o.last;l&&l.removed;)l=l.previous;return!o.target||!(o.last=l=l?l.next:o.state.first)?(o.target=void 0,Wl(void 0,!0)):s=="keys"?Wl(l.key,!1):s=="values"?Wl(l.value,!1):Wl([l.key,l.value],!1)},n?"entries":"values",!n,!0),A3(e)}},C3=dv,R3=j1;C3("Map",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},R3);var P3=lv,L3=sf,I3=P3?{}.toString:function(){return"[object "+L3(this)+"]"},D3=lv,O3=Uo,N3=I3;D3||O3(Object.prototype,"toString",N3,{unsafe:!0});var U3=sf,F3=String,X1=function(t){if(U3(t)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return F3(t)},pv=At,k3=$m,z3=X1,B3=Fm,H3=pv("".charAt),r_=pv("".charCodeAt),G3=pv("".slice),i_=function(t){return function(e,n){var r=z3(B3(e)),i=k3(n),a=r.length,o,s;return i<0||i>=a?t?"":void 0:(o=r_(r,i),o<55296||o>56319||i+1===a||(s=r_(r,i+1))<56320||s>57343?t?H3(r,i):o:t?G3(r,i,i+2):(o-55296<<10)+(s-56320)+65536)}},V3={codeAt:i_(!1),charAt:i_(!0)},W3=V3.charAt,$3=X1,Y1=No,j3=nv,a_=rv,q1="String Iterator",X3=Y1.set,Y3=Y1.getterFor(q1);j3(String,"String",function(t){X3(this,{type:q1,string:$3(t),index:0})},function(){var e=Y3(this),n=e.string,r=e.index,i;return r>=n.length?a_(void 0,!0):(i=W3(n,r),e.index+=i.length,a_(i,!1))});var q3=wn,ul=q3,K3=ul;K3.Map;var Z3=dv,Q3=j1;Z3("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},Q3);var J3=ul;J3.Set;var eD=Io,tD=Array.isArray||function(e){return eD(e)=="Array"},nD=At,rD=Bt,K1=It,iD=sf,aD=il,oD=_1,Z1=function(){},sD=[],Q1=aD("Reflect","construct"),mv=/^\s*(?:class|function)\b/,lD=nD(mv.exec),uD=!mv.exec(Z1),Jo=function(e){if(!K1(e))return!1;try{return Q1(Z1,sD,e),!0}catch{return!1}},J1=function(e){if(!K1(e))return!1;switch(iD(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return uD||!!lD(mv,oD(e))}catch{return!0}};J1.sham=!0;var eM=!Q1||rD(function(){var t;return Jo(Jo.call)||!Jo(Object)||!Jo(function(){t=!0})||t})?J1:Jo,o_=tD,cD=eM,fD=Tn,dD=kn,hD=dD("species"),s_=Array,pD=function(t){var e;return o_(t)&&(e=t.constructor,cD(e)&&(e===s_||o_(e.prototype))?e=void 0:fD(e)&&(e=e[hD],e===null&&(e=void 0))),e===void 0?s_:e},mD=pD,vD=function(t,e){return new(mD(t))(e===0?0:e)},gD=of,_D=At,yD=Um,xD=rl,SD=al,ED=vD,l_=_D([].push),qr=function(t){var e=t==1,n=t==2,r=t==3,i=t==4,a=t==6,o=t==7,s=t==5||a;return function(l,u,c,f){for(var h=xD(l),p=yD(h),y=gD(u,c),_=SD(p),m=0,d=f||ED,v=e?d(l,_):n||o?d(l,0):void 0,g,x;_>m;m++)if((s||m in p)&&(g=p[m],x=y(g,m,h),t))if(e)v[m]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return m;case 2:l_(v,g)}else switch(t){case 4:return!1;case 7:l_(v,g)}return a?-1:r||i?i:v}},MD={forEach:qr(0),map:qr(1),filter:qr(2),some:qr(3),every:qr(4),find:qr(5),findIndex:qr(6),filterReject:qr(7)},wD=At,u_=hv,$l=af.getWeakData,TD=fv,bD=yr,AD=Do,vd=Tn,CD=cv,tM=MD,c_=rr,nM=No,RD=nM.set,PD=nM.getterFor,LD=tM.find,ID=tM.findIndex,DD=wD([].splice),OD=0,jl=function(t){return t.frozen||(t.frozen=new rM)},rM=function(){this.entries=[]},gd=function(t,e){return LD(t.entries,function(n){return n[0]===e})};rM.prototype={get:function(t){var e=gd(this,t);if(e)return e[1]},has:function(t){return!!gd(this,t)},set:function(t,e){var n=gd(this,t);n?n[1]=e:this.entries.push([t,e])},delete:function(t){var e=ID(this.entries,function(n){return n[0]===t});return~e&&DD(this.entries,e,1),!!~e}};var ND={getConstructor:function(t,e,n,r){var i=t(function(l,u){TD(l,a),RD(l,{type:e,id:OD++,frozen:void 0}),AD(u)||CD(u,l[r],{that:l,AS_ENTRIES:n})}),a=i.prototype,o=PD(e),s=function(l,u,c){var f=o(l),h=$l(bD(u),!0);return h===!0?jl(f).set(u,c):h[f.id]=c,l};return u_(a,{delete:function(l){var u=o(this);if(!vd(l))return!1;var c=$l(l);return c===!0?jl(u).delete(l):c&&c_(c,u.id)&&delete c[u.id]},has:function(u){var c=o(this);if(!vd(u))return!1;var f=$l(u);return f===!0?jl(c).has(u):f&&c_(f,c.id)}}),u_(a,n?{get:function(u){var c=o(this);if(vd(u)){var f=$l(u);return f===!0?jl(c).get(u):f?f[c.id]:void 0}},set:function(u,c){return s(this,u,c)}}:{add:function(u){return s(this,u,!0)}}),i}},UD=N1,f_=wn,Yu=At,d_=hv,FD=af,kD=dv,iM=ND,Xl=Tn,Yl=No.enforce,zD=Bt,BD=f1,cl=Object,HD=Array.isArray,ql=cl.isExtensible,aM=cl.isFrozen,GD=cl.isSealed,oM=cl.freeze,VD=cl.seal,h_={},p_={},WD=!f_.ActiveXObject&&"ActiveXObject"in f_,es,sM=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},lM=kD("WeakMap",sM,iM),ka=lM.prototype,qu=Yu(ka.set),$D=function(){return UD&&zD(function(){var t=oM([]);return qu(new lM,t,1),!aM(t)})};if(BD)if(WD){es=iM.getConstructor(sM,"WeakMap",!0),FD.enable();var m_=Yu(ka.delete),Kl=Yu(ka.has),v_=Yu(ka.get);d_(ka,{delete:function(t){if(Xl(t)&&!ql(t)){var e=Yl(this);return e.frozen||(e.frozen=new es),m_(this,t)||e.frozen.delete(t)}return m_(this,t)},has:function(e){if(Xl(e)&&!ql(e)){var n=Yl(this);return n.frozen||(n.frozen=new es),Kl(this,e)||n.frozen.has(e)}return Kl(this,e)},get:function(e){if(Xl(e)&&!ql(e)){var n=Yl(this);return n.frozen||(n.frozen=new es),Kl(this,e)?v_(this,e):n.frozen.get(e)}return v_(this,e)},set:function(e,n){if(Xl(e)&&!ql(e)){var r=Yl(this);r.frozen||(r.frozen=new es),Kl(this,e)?qu(this,e,n):r.frozen.set(e,n)}else qu(this,e,n);return this}})}else $D()&&d_(ka,{set:function(e,n){var r;return HD(e)&&(aM(e)?r=h_:GD(e)&&(r=p_)),qu(this,e,n),r==h_&&oM(e),r==p_&&VD(e),this}});var jD=ul;jD.WeakMap;var XD=yr,YD=B1,qD=function(t,e,n,r){try{return r?e(XD(n)[0],n[1]):e(n)}catch(i){YD(t,"throw",i)}},KD=of,ZD=jr,QD=rl,JD=qD,eO=F1,tO=eM,nO=al,g_=I1,rO=z1,iO=uv,__=Array,aO=function(e){var n=QD(e),r=tO(this),i=arguments.length,a=i>1?arguments[1]:void 0,o=a!==void 0;o&&(a=KD(a,i>2?arguments[2]:void 0));var s=iO(n),l=0,u,c,f,h,p,y;if(s&&!(this===__&&eO(s)))for(h=rO(n,s),p=h.next,c=r?new this:[];!(f=ZD(p,h)).done;l++)y=o?JD(h,a,[f.value,l],!0):f.value,g_(c,l,y);else for(u=nO(n),c=r?new this(u):__(u);u>l;l++)y=o?a(n[l],l):n[l],g_(c,l,y);return c.length=l,c},oO=ll,sO=aO,lO=V1,uO=!lO(function(t){Array.from(t)});oO({target:"Array",stat:!0,forced:uO},{from:sO});var cO=ul;cO.Array.from;var y_=zn,fO=At,dO=jr,hO=Bt,_d=l1,pO=ev,mO=Zm,vO=rl,gO=Um,Sa=Object.assign,x_=Object.defineProperty,_O=fO([].concat),yO=!Sa||hO(function(){if(y_&&Sa({b:1},Sa(x_({},"a",{enumerable:!0,get:function(){x_(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(i){e[i]=i}),Sa({},t)[n]!=7||_d(Sa({},e)).join("")!=r})?function(e,n){for(var r=vO(e),i=arguments.length,a=1,o=pO.f,s=mO.f;i>a;)for(var l=gO(arguments[a++]),u=o?_O(_d(l),o(l)):_d(l),c=u.length,f=0,h;c>f;)h=u[f++],(!y_||dO(s,l,h))&&(r[h]=l[h]);return r}:Sa,xO=ll,S_=yO;xO({target:"Object",stat:!0,arity:2,forced:Object.assign!==S_},{assign:S_});var SO=ul;SO.Object.assign;var Zl,Ac=new WeakMap;function uM(){if(Zl!==void 0)return Zl;var t=!1;try{var e=function(){},n=Object.defineProperty({},"passive",{enumerable:!0,get:function(){return t=!0,!0}});window.addEventListener("testPassive",e,n),window.removeEventListener("testPassive",e,n)}catch{}return Zl=t?{passive:!1}:!1,Zl}function Fo(t){var e=Ac.get(t)||[];return Ac.set(t,e),function(r,i,a){function o(s){s.defaultPrevented||a(s)}i.split(/\s+/g).forEach(function(s){e.push({elem:r,eventName:s,handler:o}),r.addEventListener(s,o,uM())})}}function EO(t){var e=Ac.get(t);e&&(e.forEach(function(n){var r=n.elem,i=n.eventName,a=n.handler;r.removeEventListener(i,a,uM())}),Ac.delete(t))}function MO(t){return t.touches?t.touches[t.touches.length-1]:t}function uo(t){var e=MO(t);return{x:e.clientX,y:e.clientY}}function Ql(t,e){return e===void 0&&(e=[]),e.some(function(n){return t===n})}var cM=["webkit","moz","ms","o"],wO=new RegExp("^-(?!(?:"+cM.join("|")+")-)");function TO(t){var e={};return Object.keys(t).forEach(function(n){if(!wO.test(n)){e[n]=t[n];return}var r=t[n];n=n.replace(/^-/,""),e[n]=r,cM.forEach(function(i){e["-"+i+"-"+n]=r})}),e}function ca(t,e){e=TO(e),Object.keys(e).forEach(function(n){var r=n.replace(/^-/,"").replace(/-([a-z])/g,function(i,a){return a.toUpperCase()});t.style[r]=e[n]})}var bO=function(){function t(e){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=uo(e)}return t.prototype.update=function(e){var n=this,r=n.velocity,i=n.updateTime,a=n.lastPosition,o=Date.now(),s=uo(e),l={x:-(s.x-a.x),y:-(s.y-a.y)},u=o-i||16.7,c=l.x/u*16.7,f=l.y/u*16.7;r.x=c*this.velocityMultiplier,r.y=f*this.velocityMultiplier,this.delta=l,this.updateTime=o,this.lastPosition=s},t}(),AO=function(){function t(){this._touchList={}}return Object.defineProperty(t.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),t.prototype.isActive=function(){return this._activeTouchID!==void 0},t.prototype.getDelta=function(){var e=this._getActiveTracker();return e?vr({},e.delta):this._primitiveValue},t.prototype.getVelocity=function(){var e=this._getActiveTracker();return e?vr({},e.velocity):this._primitiveValue},t.prototype.getEasingDistance=function(e){var n=1-e,r={x:0,y:0},i=this.getVelocity();return Object.keys(i).forEach(function(a){for(var o=Math.abs(i[a])<=10?0:i[a];o!==0;)r[a]+=o,o=o*n|0}),r},t.prototype.track=function(e){var n=this,r=e.targetTouches;return Array.from(r).forEach(function(i){n._add(i)}),this._touchList},t.prototype.update=function(e){var n=this,r=e.touches,i=e.changedTouches;return Array.from(r).forEach(function(a){n._renew(a)}),this._setActiveID(i),this._touchList},t.prototype.release=function(e){var n=this;delete this._activeTouchID,Array.from(e.changedTouches).forEach(function(r){n._delete(r)})},t.prototype._add=function(e){this._has(e)&&this._delete(e);var n=new bO(e);this._touchList[e.identifier]=n},t.prototype._renew=function(e){if(this._has(e)){var n=this._touchList[e.identifier];n.update(e)}},t.prototype._delete=function(e){delete this._touchList[e.identifier]},t.prototype._has=function(e){return this._touchList.hasOwnProperty(e.identifier)},t.prototype._setActiveID=function(e){this._activeTouchID=e[e.length-1].identifier},t.prototype._getActiveTracker=function(){var e=this,n=e._touchList,r=e._activeTouchID;return n[r]},t}();function Fn(t,e,n){return Math.max(e,Math.min(n,t))}function fM(t,e,n){e===void 0&&(e=0);var r,i=-1/0;return function(){for(var o=this,s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];if(n){var u=Date.now(),c=u-i;i=u,c>=e&&t.apply(this,s)}clearTimeout(r),r=setTimeout(function(){t.apply(o,s)},e)}}function E_(t,e){return t===void 0&&(t=-1/0),e===void 0&&(e=1/0),function(n,r){var i="_"+r;Object.defineProperty(n,r,{get:function(){return this[i]},set:function(a){Object.defineProperty(this,i,{value:Fn(a,t,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function yd(t,e){var n="_"+e;Object.defineProperty(t,e,{get:function(){return this[n]},set:function(r){Object.defineProperty(this,n,{value:!!r,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}function dM(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n,r,i){var a=i.value;return{get:function(){return this.hasOwnProperty(r)||Object.defineProperty(this,r,{value:fM.apply(void 0,qA([a],t))}),this[r]}}}}var CO=function(){function t(e){var n=this;e===void 0&&(e={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(e).forEach(function(r){n[r]=e[r]})}return Object.defineProperty(t.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(e){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=e},enumerable:!0,configurable:!0}),Vi([E_(0,1)],t.prototype,"damping",void 0),Vi([E_(0,1/0)],t.prototype,"thumbMinSize",void 0),Vi([yd],t.prototype,"renderByPixels",void 0),Vi([yd],t.prototype,"alwaysShowTracks",void 0),Vi([yd],t.prototype,"continuousScrolling",void 0),t}(),So;(function(t){t.X="x",t.Y="y"})(So||(So={}));var RO=function(){function t(e,n){n===void 0&&(n=0),this._direction=e,this._minSize=n,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+e}return t.prototype.attachTo=function(e){e.appendChild(this.element)},t.prototype.update=function(e,n,r){this.realSize=Math.min(n/r,1)*n,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=e/r*(n+(this.realSize-this.displaySize)),ca(this.element,this._getStyle())},t.prototype._getStyle=function(){switch(this._direction){case So.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case So.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},t}(),M_=function(){function t(e,n){n===void 0&&(n=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+e,this.thumb=new RO(e,n),this.thumb.attachTo(this.element)}return t.prototype.attachTo=function(e){e.appendChild(this.element)},t.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},t.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},t.prototype.update=function(e,n,r){ca(this.element,{display:r<=n?"none":"block"}),this.thumb.update(e,n,r)},t}(),PO=function(){function t(e){this._scrollbar=e;var n=e.options.thumbMinSize;this.xAxis=new M_(So.X,n),this.yAxis=new M_(So.Y,n),this.xAxis.attachTo(e.containerEl),this.yAxis.attachTo(e.containerEl),e.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return t.prototype.update=function(){var e=this._scrollbar,n=e.size,r=e.offset;this.xAxis.update(r.x,n.container.width,n.content.width),this.yAxis.update(r.y,n.container.height,n.content.height)},t.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},Vi([dM(300)],t.prototype,"autoHideOnIdle",null),t}();function LO(t){var e=t.containerEl,n=t.contentEl,r=getComputedStyle(e),i=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map(function(s){return r[s]?parseFloat(r[s]):0}),a=i[0]+i[1],o=i[2]+i[3];return{container:{width:e.clientWidth,height:e.clientHeight},content:{width:n.offsetWidth-n.clientWidth+n.scrollWidth+o,height:n.offsetHeight-n.clientHeight+n.scrollHeight+a}}}function IO(t,e){var n=t.bounding,r=e.getBoundingClientRect(),i=Math.max(n.top,r.top),a=Math.max(n.left,r.left),o=Math.min(n.right,r.right),s=Math.min(n.bottom,r.bottom);return i<s&&a<o}function DO(t){var e=t.getSize(),n={x:Math.max(e.content.width-e.container.width,0),y:Math.max(e.content.height-e.container.height,0)},r=t.containerEl.getBoundingClientRect(),i={top:Math.max(r.top,0),right:Math.min(r.right,window.innerWidth),bottom:Math.min(r.bottom,window.innerHeight),left:Math.max(r.left,0)};t.size=e,t.limit=n,t.bounding=i,t.track.update(),t.setPosition()}function OO(t,e,n){var r=t.options,i=t.offset,a=t.limit,o=t.track,s=t.contentEl;return r.renderByPixels&&(e=Math.round(e),n=Math.round(n)),e=Fn(e,0,a.x),n=Fn(n,0,a.y),e!==i.x&&o.xAxis.show(),n!==i.y&&o.yAxis.show(),r.alwaysShowTracks||o.autoHideOnIdle(),e===i.x&&n===i.y?null:(i.x=e,i.y=n,ca(s,{"-transform":"translate3d("+-e+"px, "+-n+"px, 0)"}),o.update(),{offset:vr({},i),limit:vr({},a)})}var w_=new WeakMap;function NO(t,e,n,r,i){r===void 0&&(r=0);var a=i===void 0?{}:i,o=a.easing,s=o===void 0?UO:o,l=a.callback,u=t.options,c=t.offset,f=t.limit;u.renderByPixels&&(e=Math.round(e),n=Math.round(n));var h=c.x,p=c.y,y=Fn(e,0,f.x)-h,_=Fn(n,0,f.y)-p,m=Date.now();function d(){var v=Date.now()-m,g=r?s(Math.min(v/r,1)):1;if(t.setPosition(h+y*g,p+_*g),v>=r)typeof l=="function"&&l.call(t);else{var x=requestAnimationFrame(d);w_.set(t,x)}}cancelAnimationFrame(w_.get(t)),d()}function UO(t){return Math.pow(t-1,3)+1}function FO(t,e,n){var r=n===void 0?{}:n,i=r.alignToTop,a=i===void 0?!0:i,o=r.onlyScrollIfNeeded,s=o===void 0?!1:o,l=r.offsetTop,u=l===void 0?0:l,c=r.offsetLeft,f=c===void 0?0:c,h=r.offsetBottom,p=h===void 0?0:h,y=t.containerEl,_=t.bounding,m=t.offset,d=t.limit;if(!(!e||!y.contains(e))){var v=e.getBoundingClientRect();if(!(s&&t.isVisible(e))){var g=a?v.top-_.top-u:v.bottom-_.bottom+p;t.setMomentum(v.left-_.left-f,Fn(g,-m.y,d.y-m.y))}}}var kO=function(){function t(e,n){var r=this.constructor;this.scrollbar=e,this.name=r.pluginName,this.options=vr(vr({},r.defaultOptions),n)}return t.prototype.onInit=function(){},t.prototype.onDestroy=function(){},t.prototype.onUpdate=function(){},t.prototype.onRender=function(e){},t.prototype.transformDelta=function(e,n){return vr({},e)},t.pluginName="",t.defaultOptions={},t}(),Cc={order:new Set,constructors:{}};function zO(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.forEach(function(n){var r=n.pluginName;if(!r)throw new TypeError("plugin name is required");Cc.order.add(r),Cc.constructors[r]=n})}function BO(t,e){return Array.from(Cc.order).filter(function(n){return e[n]!==!1}).map(function(n){var r=Cc.constructors[n],i=new r(t,e[n]);return e[n]=i.options,i})}var Cn;(function(t){t[t.TAB=9]="TAB",t[t.SPACE=32]="SPACE",t[t.PAGE_UP=33]="PAGE_UP",t[t.PAGE_DOWN=34]="PAGE_DOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.LEFT=37]="LEFT",t[t.UP=38]="UP",t[t.RIGHT=39]="RIGHT",t[t.DOWN=40]="DOWN"})(Cn||(Cn={}));function HO(t){var e=Fo(t),n=t.containerEl;e(n,"keydown",function(r){var i=document.activeElement;if(!(i!==n&&!n.contains(i))&&!WO(i)){var a=GO(t,r.keyCode||r.which);if(a){var o=a[0],s=a[1];t.addTransformableMomentum(o,s,r,function(l){l?r.preventDefault():(t.containerEl.blur(),t.parent&&t.parent.containerEl.focus())})}}})}function GO(t,e){var n=t.size,r=t.limit,i=t.offset;switch(e){case Cn.TAB:return VO(t);case Cn.SPACE:return[0,200];case Cn.PAGE_UP:return[0,-n.container.height+40];case Cn.PAGE_DOWN:return[0,n.container.height-40];case Cn.END:return[0,r.y-i.y];case Cn.HOME:return[0,-i.y];case Cn.LEFT:return[-40,0];case Cn.UP:return[0,-40];case Cn.RIGHT:return[40,0];case Cn.DOWN:return[0,40];default:return null}}function VO(t){requestAnimationFrame(function(){t.scrollIntoView(document.activeElement,{offsetTop:t.size.container.height/2,offsetLeft:t.size.container.width/2,onlyScrollIfNeeded:!0})})}function WO(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"||t.isContentEditable?!t.disabled:!1}var ur;(function(t){t[t.X=0]="X",t[t.Y=1]="Y"})(ur||(ur={}));function $O(t){var e=Fo(t),n=t.containerEl,r=t.track,i=r.xAxis,a=r.yAxis;function o(p,y){var _=t.size,m=t.limit,d=t.offset;if(p===ur.X){var v=_.container.width+(i.thumb.realSize-i.thumb.displaySize);return Fn(y/v*_.content.width,0,m.x)-d.x}if(p===ur.Y){var g=_.container.height+(a.thumb.realSize-a.thumb.displaySize);return Fn(y/g*_.content.height,0,m.y)-d.y}return 0}function s(p){if(Ql(p,[i.element,i.thumb.element]))return ur.X;if(Ql(p,[a.element,a.thumb.element]))return ur.Y}var l,u,c,f,h;e(n,"click",function(p){if(!(u||!Ql(p.target,[i.element,a.element]))){var y=p.target,_=s(y),m=y.getBoundingClientRect(),d=uo(p);if(_===ur.X){var v=d.x-m.left-i.thumb.displaySize/2;t.setMomentum(o(_,v),0)}if(_===ur.Y){var v=d.y-m.top-a.thumb.displaySize/2;t.setMomentum(0,o(_,v))}}}),e(n,"mousedown",function(p){if(Ql(p.target,[i.thumb.element,a.thumb.element])){l=!0;var y=p.target,_=uo(p),m=y.getBoundingClientRect();f=s(y),c={x:_.x-m.left,y:_.y-m.top},h=n.getBoundingClientRect(),ca(t.containerEl,{"-user-select":"none"})}}),e(window,"mousemove",function(p){if(l){u=!0;var y=uo(p);if(f===ur.X){var _=y.x-c.x-h.left;t.setMomentum(o(f,_),0)}if(f===ur.Y){var _=y.y-c.y-h.top;t.setMomentum(0,o(f,_))}}}),e(window,"mouseup blur",function(){l=u=!1,ca(t.containerEl,{"-user-select":""})})}function jO(t){var e=Fo(t);e(window,"resize",fM(t.update.bind(t),300))}function XO(t){var e=Fo(t),n=t.containerEl,r=t.contentEl,i=!1,a=!1,o;function s(l){var u=l.x,c=l.y;if(!(!u&&!c)){var f=t.offset,h=t.limit;t.setMomentum(Fn(f.x+u,0,h.x)-f.x,Fn(f.y+c,0,h.y)-f.y),o=requestAnimationFrame(function(){s({x:u,y:c})})}}e(window,"mousemove",function(l){if(i){cancelAnimationFrame(o);var u=YO(t,l);s(u)}}),e(r,"contextmenu",function(){a=!0,cancelAnimationFrame(o),i=!1}),e(r,"mousedown",function(){a=!1}),e(r,"selectstart",function(){a||(cancelAnimationFrame(o),i=!0)}),e(window,"mouseup blur",function(){cancelAnimationFrame(o),i=!1,a=!1}),e(n,"scroll",function(l){l.preventDefault(),n.scrollTop=n.scrollLeft=0})}function YO(t,e){var n=t.bounding,r=n.top,i=n.right,a=n.bottom,o=n.left,s=uo(e),l=s.x,u=s.y,c={x:0,y:0},f=20;return l===0&&u===0||(l>i-f?c.x=l-i+f:l<o+f&&(c.x=l-o-f),u>a-f?c.y=u-a+f:u<r+f&&(c.y=u-r-f),c.x*=2,c.y*=2),c}var Jl;function qO(t){var e=t.options.delegateTo||t.containerEl,n=new AO,r=Fo(t),i,a=0;r(e,"touchstart",function(o){n.track(o),t.setMomentum(0,0),a===0&&(i=t.options.damping,t.options.damping=Math.max(i,.5)),a++}),r(e,"touchmove",function(o){if(!(Jl&&Jl!==t)){n.update(o);var s=n.getDelta(),l=s.x,u=s.y;t.addTransformableMomentum(l,u,o,function(c){c&&o.cancelable&&(o.preventDefault(),Jl=t)})}}),r(e,"touchcancel touchend",function(o){var s=n.getEasingDistance(i);t.addTransformableMomentum(s.x,s.y,o),a--,a===0&&(t.options.damping=i),n.release(o),Jl=null})}function KO(t){var e=Fo(t),n=t.options.delegateTo||t.containerEl,r="onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel";e(n,r,function(i){var a=QO(i),o=a.x,s=a.y;t.addTransformableMomentum(o,s,i,function(l){l&&i.preventDefault()})})}var ts={STANDARD:1,OTHERS:-3},T_=[1,28,500],ZO=function(t){return T_[t]||T_[0]};function QO(t){if("deltaX"in t){var e=ZO(t.deltaMode);return{x:t.deltaX/ts.STANDARD*e,y:t.deltaY/ts.STANDARD*e}}return"wheelDeltaX"in t?{x:t.wheelDeltaX/ts.OTHERS,y:t.wheelDeltaY/ts.OTHERS}:{x:0,y:t.wheelDelta/ts.OTHERS}}const b_=Object.freeze(Object.defineProperty({__proto__:null,keyboardHandler:HO,mouseHandler:$O,resizeHandler:jO,selectHandler:XO,touchHandler:qO,wheelHandler:KO},Symbol.toStringTag,{value:"Module"}));var cr=new Map,A_=function(){function t(e,n){var r=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=e;var i=this.contentEl=document.createElement("div");this.options=new CO(n),e.setAttribute("data-scrollbar","true"),e.setAttribute("tabindex","-1"),ca(e,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(e.style.msTouchAction="none"),i.className="scroll-content",Array.from(e.childNodes).forEach(function(l){i.appendChild(l)}),e.appendChild(i),this.track=new PO(this),this.size=this.getSize(),this._plugins=BO(this,this.options.plugins);var a=e.scrollLeft,o=e.scrollTop;e.scrollLeft=e.scrollTop=0,this.setPosition(a,o,{withoutCallbacks:!0});var s=window.ResizeObserver;typeof s=="function"&&(this._observer=new s(function(){r.update()}),this._observer.observe(i)),cr.set(e,this),requestAnimationFrame(function(){r._init()})}return Object.defineProperty(t.prototype,"parent",{get:function(){for(var e=this.containerEl.parentElement;e;){var n=cr.get(e);if(n)return n;e=e.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(e){this.setPosition(this.scrollLeft,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(e){this.setPosition(e,this.scrollTop)},enumerable:!0,configurable:!0}),t.prototype.getSize=function(){return LO(this)},t.prototype.update=function(){DO(this),this._plugins.forEach(function(e){e.onUpdate()})},t.prototype.isVisible=function(e){return IO(this,e)},t.prototype.setPosition=function(e,n,r){var i=this;e===void 0&&(e=this.offset.x),n===void 0&&(n=this.offset.y),r===void 0&&(r={});var a=OO(this,e,n);!a||r.withoutCallbacks||this._listeners.forEach(function(o){o.call(i,a)})},t.prototype.scrollTo=function(e,n,r,i){e===void 0&&(e=this.offset.x),n===void 0&&(n=this.offset.y),r===void 0&&(r=0),i===void 0&&(i={}),NO(this,e,n,r,i)},t.prototype.scrollIntoView=function(e,n){n===void 0&&(n={}),FO(this,e,n)},t.prototype.addListener=function(e){if(typeof e!="function")throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(e)},t.prototype.removeListener=function(e){this._listeners.delete(e)},t.prototype.addTransformableMomentum=function(e,n,r,i){this._updateDebounced();var a=this._plugins.reduce(function(s,l){return l.transformDelta(s,r)||s},{x:e,y:n}),o=!this._shouldPropagateMomentum(a.x,a.y);o&&this.addMomentum(a.x,a.y),i&&i.call(this,o)},t.prototype.addMomentum=function(e,n){this.setMomentum(this._momentum.x+e,this._momentum.y+n)},t.prototype.setMomentum=function(e,n){this.limit.x===0&&(e=0),this.limit.y===0&&(n=0),this.options.renderByPixels&&(e=Math.round(e),n=Math.round(n)),this._momentum.x=e,this._momentum.y=n},t.prototype.updatePluginOptions=function(e,n){this._plugins.forEach(function(r){r.name===e&&Object.assign(r.options,n)})},t.prototype.destroy=function(){var e=this,n=e.containerEl,r=e.contentEl;EO(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),cr.delete(this.containerEl);for(var i=Array.from(r.childNodes);n.firstChild;)n.removeChild(n.firstChild);i.forEach(function(a){n.appendChild(a)}),ca(n,{overflow:""}),n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,this._plugins.forEach(function(a){a.onDestroy()}),this._plugins.length=0},t.prototype._init=function(){var e=this;this.update(),Object.keys(b_).forEach(function(n){b_[n](e)}),this._plugins.forEach(function(n){n.onInit()}),this._render()},t.prototype._updateDebounced=function(){this.update()},t.prototype._shouldPropagateMomentum=function(e,n){e===void 0&&(e=0),n===void 0&&(n=0);var r=this,i=r.options,a=r.offset,o=r.limit;if(!i.continuousScrolling)return!1;o.x===0&&o.y===0&&this._updateDebounced();var s=Fn(e+a.x,0,o.x),l=Fn(n+a.y,0,o.y),u=!0;return u=u&&s===a.x,u=u&&l===a.y,u=u&&(a.x===o.x||a.x===0||a.y===o.y||a.y===0),u},t.prototype._render=function(){var e=this._momentum;if(e.x||e.y){var n=this._nextTick("x"),r=this._nextTick("y");e.x=n.momentum,e.y=r.momentum,this.setPosition(n.position,r.position)}var i=vr({},this._momentum);this._plugins.forEach(function(a){a.onRender(i)}),this._renderID=requestAnimationFrame(this._render.bind(this))},t.prototype._nextTick=function(e){var n=this,r=n.options,i=n.offset,a=n._momentum,o=i[e],s=a[e];if(Math.abs(s)<=.1)return{momentum:0,position:o+s};var l=s*(1-r.damping);return r.renderByPixels&&(l|=0),{momentum:l,position:o+s-l}},Vi([dM(100,!0)],t.prototype,"_updateDebounced",null),t}(),JO="rgba(222, 222, 222, .75)",eN="rgba(0, 0, 0, .5)",tN=`
[data-scrollbar] {
  display: block;
  position: relative;
}

.scroll-content {
  display: flow-root;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

.scrollbar-track {
  position: absolute;
  opacity: 0;
  z-index: 1;
  background: `+JO+`;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: opacity 0.5s 0.5s ease-out;
          transition: opacity 0.5s 0.5s ease-out;
}
.scrollbar-track.show,
.scrollbar-track:hover {
  opacity: 1;
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
}

.scrollbar-track-x {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
}
.scrollbar-track-y {
  top: 0;
  right: 0;
  width: 8px;
  height: 100%;
}
.scrollbar-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: `+eN+`;
  border-radius: 4px;
}
`,hM="smooth-scrollbar-style",Rc=!1;function C_(){if(!(Rc||typeof window>"u")){var t=document.createElement("style");t.id=hM,t.textContent=tN,document.head&&document.head.appendChild(t),Rc=!0}}function nN(){if(!(!Rc||typeof window>"u")){var t=document.getElementById(hM);!t||!t.parentNode||(t.parentNode.removeChild(t),Rc=!1)}}var rN=function(t){YA(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.init=function(n,r){if(!n||n.nodeType!==1)throw new TypeError("expect element to be DOM Element, but got "+n);return C_(),cr.has(n)?cr.get(n):new A_(n,r)},e.initAll=function(n){return Array.from(document.querySelectorAll("[data-scrollbar]"),function(r){return e.init(r,n)})},e.has=function(n){return cr.has(n)},e.get=function(n){return cr.get(n)},e.getAll=function(){return Array.from(cr.values())},e.destroy=function(n){var r=cr.get(n);r&&r.destroy()},e.destroyAll=function(){cr.forEach(function(n){n.destroy()})},e.use=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return zO.apply(void 0,n)},e.attachStyle=function(){return C_()},e.detachStyle=function(){return nN()},e.version="8.8.4",e.ScrollbarPlugin=kO,e}(A_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vv="153",iN=0,R_=1,aN=2,pM=1,oN=2,Ar=3,wi=0,fn=1,Lr=2,xi=0,co=1,P_=2,L_=3,I_=4,sN=5,za=100,lN=101,uN=102,D_=103,O_=104,cN=200,fN=201,dN=202,hN=203,mM=204,vM=205,pN=206,mN=207,vN=208,gN=209,_N=210,yN=0,xN=1,SN=2,fp=3,EN=4,MN=5,wN=6,TN=7,gM=0,bN=1,AN=2,Ur=0,CN=1,RN=2,PN=3,LN=4,IN=5,_M=300,Eo=301,Mo=302,dp=303,hp=304,lf=306,pp=1e3,Zn=1001,mp=1002,Qt=1003,N_=1004,xd=1005,Ln=1006,DN=1007,Ws=1008,Si=1009,ON=1010,NN=1011,gv=1012,yM=1013,ui=1014,ci=1015,$s=1016,xM=1017,SM=1018,Ji=1020,UN=1021,Qn=1023,FN=1024,kN=1025,ea=1026,wo=1027,zN=1028,EM=1029,BN=1030,MM=1031,wM=1033,Sd=33776,Ed=33777,Md=33778,wd=33779,U_=35840,F_=35841,k_=35842,z_=35843,HN=36196,B_=37492,H_=37496,G_=37808,V_=37809,W_=37810,$_=37811,j_=37812,X_=37813,Y_=37814,q_=37815,K_=37816,Z_=37817,Q_=37818,J_=37819,ey=37820,ty=37821,Td=36492,GN=36283,ny=36284,ry=36285,iy=36286,TM=3e3,ta=3001,VN=3200,WN=3201,$N=0,jN=1,na="",Ne="srgb",_r="srgb-linear",bM="display-p3",bd=7680,XN=519,YN=512,qN=513,KN=514,ZN=515,QN=516,JN=517,eU=518,tU=519,ay=35044,oy="300 es",vp=1035,Or=2e3,Pc=2001;class ko{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let a=0,o=i.length;a<o;a++)i[a].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ad=Math.PI/180,gp=180/Math.PI;function fl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[r&255]+Wt[r>>8&255]+Wt[r>>16&255]+Wt[r>>24&255]).toLowerCase()}function an(t,e,n){return Math.max(e,Math.min(n,t))}function nU(t,e){return(t%e+e)%e}function Cd(t,e,n){return(1-n)*t+n*e}function sy(t){return(t&t-1)===0&&t!==0}function _p(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function eu(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(an(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),a=this.x-e.x,o=this.y-e.y;return this.x=a*r-o*i+e.x,this.y=a*i+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,r,i,a,o,s,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,a,o,s,l,u)}set(e,n,r,i,a,o,s,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=s,c[3]=n,c[4]=a,c[5]=l,c[6]=r,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,a=this.elements,o=r[0],s=r[3],l=r[6],u=r[1],c=r[4],f=r[7],h=r[2],p=r[5],y=r[8],_=i[0],m=i[3],d=i[6],v=i[1],g=i[4],x=i[7],M=i[2],b=i[5],C=i[8];return a[0]=o*_+s*v+l*M,a[3]=o*m+s*g+l*b,a[6]=o*d+s*x+l*C,a[1]=u*_+c*v+f*M,a[4]=u*m+c*g+f*b,a[7]=u*d+c*x+f*C,a[2]=h*_+p*v+y*M,a[5]=h*m+p*g+y*b,a[8]=h*d+p*x+y*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*s*u-r*a*c+r*s*l+i*a*u-i*o*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8],f=c*o-s*u,h=s*l-c*a,p=u*a-o*l,y=n*f+r*h+i*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=f*_,e[1]=(i*u-c*r)*_,e[2]=(s*r-i*o)*_,e[3]=h*_,e[4]=(c*n-i*l)*_,e[5]=(i*a-s*n)*_,e[6]=p*_,e[7]=(r*l-u*n)*_,e[8]=(o*n-r*a)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,a,o,s){const l=Math.cos(a),u=Math.sin(a);return this.set(r*l,r*u,-r*(l*o+u*s)+o+e,-i*u,i*l,-i*(-u*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(Rd.makeScale(e,n)),this}rotate(e){return this.premultiply(Rd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Rd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rd=new Fe;function AM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function js(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const ly={};function Ss(t){t in ly||(ly[t]=!0,console.warn(t))}function fo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Pd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const rU=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),iU=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function aU(t){return t.convertSRGBToLinear().applyMatrix3(iU)}function oU(t){return t.applyMatrix3(rU).convertLinearToSRGB()}const sU={[_r]:t=>t,[Ne]:t=>t.convertSRGBToLinear(),[bM]:aU},lU={[_r]:t=>t,[Ne]:t=>t.convertLinearToSRGB(),[bM]:oU},Gn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return _r},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=sU[e],i=lU[n];if(r===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return i(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Ea;class CM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ea===void 0&&(Ea=js("canvas")),Ea.width=e.width,Ea.height=e.height;const r=Ea.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ea}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=js("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let o=0;o<a.length;o++)a[o]=fo(a[o]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(fo(n[r]/255)*255):n[r]=fo(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uU=0;class RM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uU++}),this.uuid=fl(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?a.push(Ld(i[o].image)):a.push(Ld(i[o]))}else a=Ld(i);r.url=a}return n||(e.images[this.uuid]=r),r}}function Ld(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?CM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cU=0;class dn extends ko{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,r=Zn,i=Zn,a=Ln,o=Ws,s=Qn,l=Si,u=dn.DEFAULT_ANISOTROPY,c=na){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cU++}),this.uuid=fl(),this.name="",this.source=new RM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ta?Ne:na),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_M)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pp:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case mp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pp:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case mp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?ta:TM}set encoding(e){Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ta?Ne:na}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=_M;dn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,r=0,i=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,a=this.w,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i+o[12]*a,this.y=o[1]*n+o[5]*r+o[9]*i+o[13]*a,this.z=o[2]*n+o[6]*r+o[10]*i+o[14]*a,this.w=o[3]*n+o[7]*r+o[11]*i+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,a;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],y=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(y+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,x=(p+1)/2,M=(d+1)/2,b=(c+h)/4,C=(f+_)/4,R=(y+m)/4;return g>x&&g>M?g<.01?(r=0,i=.707106781,a=.707106781):(r=Math.sqrt(g),i=b/r,a=C/r):x>M?x<.01?(r=.707106781,i=0,a=.707106781):(i=Math.sqrt(x),r=b/i,a=R/i):M<.01?(r=.707106781,i=.707106781,a=0):(a=Math.sqrt(M),r=C/a,i=R/a),this.set(r,i,a,n),this}let v=Math.sqrt((m-y)*(m-y)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(f-_)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fa extends ko{constructor(e=1,n=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const i={width:e,height:n,depth:1};r.encoding!==void 0&&(Ss("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===ta?Ne:na),this.texture=new dn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Ln,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new RM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class PM extends dn{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fU extends dn{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,a,o,s){let l=r[i+0],u=r[i+1],c=r[i+2],f=r[i+3];const h=a[o+0],p=a[o+1],y=a[o+2],_=a[o+3];if(s===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(s===1){e[n+0]=h,e[n+1]=p,e[n+2]=y,e[n+3]=_;return}if(f!==_||l!==h||u!==p||c!==y){let m=1-s;const d=l*h+u*p+c*y+f*_,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const M=Math.sqrt(g),b=Math.atan2(M,d*v);m=Math.sin(m*b)/M,s=Math.sin(s*b)/M}const x=s*v;if(l=l*m+h*x,u=u*m+p*x,c=c*m+y*x,f=f*m+_*x,m===1-s){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,r,i,a,o){const s=r[i],l=r[i+1],u=r[i+2],c=r[i+3],f=a[o],h=a[o+1],p=a[o+2],y=a[o+3];return e[n]=s*y+c*f+l*p-u*h,e[n+1]=l*y+c*h+u*f-s*p,e[n+2]=u*y+c*p+s*h-l*f,e[n+3]=c*y-s*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const r=e._x,i=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,u=s(r/2),c=s(i/2),f=s(a/2),h=l(r/2),p=l(i/2),y=l(a/2);switch(o){case"XYZ":this._x=h*c*f+u*p*y,this._y=u*p*f-h*c*y,this._z=u*c*y+h*p*f,this._w=u*c*f-h*p*y;break;case"YXZ":this._x=h*c*f+u*p*y,this._y=u*p*f-h*c*y,this._z=u*c*y-h*p*f,this._w=u*c*f+h*p*y;break;case"ZXY":this._x=h*c*f-u*p*y,this._y=u*p*f+h*c*y,this._z=u*c*y+h*p*f,this._w=u*c*f-h*p*y;break;case"ZYX":this._x=h*c*f-u*p*y,this._y=u*p*f+h*c*y,this._z=u*c*y-h*p*f,this._w=u*c*f+h*p*y;break;case"YZX":this._x=h*c*f+u*p*y,this._y=u*p*f+h*c*y,this._z=u*c*y-h*p*f,this._w=u*c*f-h*p*y;break;case"XZY":this._x=h*c*f-u*p*y,this._y=u*p*f-h*c*y,this._z=u*c*y+h*p*f,this._w=u*c*f+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],a=n[8],o=n[1],s=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=r+s+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(a-u)*p,this._z=(o-i)*p}else if(r>s&&r>f){const p=2*Math.sqrt(1+r-s-f);this._w=(c-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(a+u)/p}else if(s>f){const p=2*Math.sqrt(1+s-r-f);this._w=(a-u)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-r-s);this._w=(o-i)/p,this._x=(a+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,a=e._z,o=e._w,s=n._x,l=n._y,u=n._z,c=n._w;return this._x=r*c+o*s+i*u-a*l,this._y=i*c+o*l+a*s-r*u,this._z=a*c+o*u+r*l-i*s,this._w=o*c-r*s-i*l-a*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,a=this._z,o=this._w;let s=o*e._w+r*e._x+i*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=i,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*r+n*this._x,this._y=p*i+n*this._y,this._z=p*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,s),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*f+this._w*h,this._x=r*f+this._x*h,this._y=i*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(i),r*Math.sin(a),r*Math.cos(a),n*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,r=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(uy.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(uy.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6]*i,this.y=a[1]*n+a[4]*r+a[7]*i,this.z=a[2]*n+a[5]*r+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,a=e.elements,o=1/(a[3]*n+a[7]*r+a[11]*i+a[15]);return this.x=(a[0]*n+a[4]*r+a[8]*i+a[12])*o,this.y=(a[1]*n+a[5]*r+a[9]*i+a[13])*o,this.z=(a[2]*n+a[6]*r+a[10]*i+a[14])*o,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,a=e.x,o=e.y,s=e.z,l=e.w,u=l*n+o*i-s*r,c=l*r+s*n-a*i,f=l*i+a*r-o*n,h=-a*n-o*r-s*i;return this.x=u*l+h*-a+c*-s-f*-o,this.y=c*l+h*-o+f*-a-u*-s,this.z=f*l+h*-s+u*-o-c*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*i,this.y=a[1]*n+a[5]*r+a[9]*i,this.z=a[2]*n+a[6]*r+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,a=e.z,o=n.x,s=n.y,l=n.z;return this.x=i*l-a*s,this.y=a*o-r*l,this.z=r*s-i*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Id.copy(this).projectOnVector(e),this.sub(Id)}reflect(e){return this.sub(Id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(an(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Id=new k,uy=new dl;class hl{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Er.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Er.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Er.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox),Ma.applyMatrix4(e.matrixWorld),this.union(Ma);else{const i=e.geometry;if(i!==void 0)if(n&&i.attributes!==void 0&&i.attributes.position!==void 0){const a=i.attributes.position;for(let o=0,s=a.count;o<s;o++)Er.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Er)}else i.boundingBox===null&&i.computeBoundingBox(),Ma.copy(i.boundingBox),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}const r=e.children;for(let i=0,a=r.length;i<a;i++)this.expandByObject(r[i],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Er),Er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),tu.subVectors(this.max,ns),wa.subVectors(e.a,ns),Ta.subVectors(e.b,ns),ba.subVectors(e.c,ns),Kr.subVectors(Ta,wa),Zr.subVectors(ba,Ta),Ni.subVectors(wa,ba);let n=[0,-Kr.z,Kr.y,0,-Zr.z,Zr.y,0,-Ni.z,Ni.y,Kr.z,0,-Kr.x,Zr.z,0,-Zr.x,Ni.z,0,-Ni.x,-Kr.y,Kr.x,0,-Zr.y,Zr.x,0,-Ni.y,Ni.x,0];return!Dd(n,wa,Ta,ba,tu)||(n=[1,0,0,0,1,0,0,0,1],!Dd(n,wa,Ta,ba,tu))?!1:(nu.crossVectors(Kr,Zr),n=[nu.x,nu.y,nu.z],Dd(n,wa,Ta,ba,tu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sr=[new k,new k,new k,new k,new k,new k,new k,new k],Er=new k,Ma=new hl,wa=new k,Ta=new k,ba=new k,Kr=new k,Zr=new k,Ni=new k,ns=new k,tu=new k,nu=new k,Ui=new k;function Dd(t,e,n,r,i){for(let a=0,o=t.length-3;a<=o;a+=3){Ui.fromArray(t,a);const s=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),l=e.dot(Ui),u=n.dot(Ui),c=r.dot(Ui);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}const dU=new hl,rs=new k,Od=new k;class _v{constructor(e=new k,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):dU.setFromPoints(e).getCenter(r);let i=0;for(let a=0,o=e.length;a<o;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rs.subVectors(e,this.center);const n=rs.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(rs,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rs.copy(e.center).add(Od)),this.expandByPoint(rs.copy(e.center).sub(Od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mr=new k,Nd=new k,ru=new k,Qr=new k,Ud=new k,iu=new k,Fd=new k;class LM{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,n),Mr.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){Nd.copy(e).add(n).multiplyScalar(.5),ru.copy(n).sub(e).normalize(),Qr.copy(this.origin).sub(Nd);const a=e.distanceTo(n)*.5,o=-this.direction.dot(ru),s=Qr.dot(this.direction),l=-Qr.dot(ru),u=Qr.lengthSq(),c=Math.abs(1-o*o);let f,h,p,y;if(c>0)if(f=o*l-s,h=o*s-l,y=a*c,f>=0)if(h>=-y)if(h<=y){const _=1/c;f*=_,h*=_,p=f*(f+o*h+2*s)+h*(o*f+h+2*l)+u}else h=a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+u;else h=-a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+u;else h<=-y?(f=Math.max(0,-(-o*a+s)),h=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+u):h<=y?(f=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+u):(f=Math.max(0,-(o*a+s)),h=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+u);else h=o>0?-a:a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+u;return r&&r.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Nd).addScaledVector(ru,h),p}intersectSphere(e,n){Mr.subVectors(e.center,this.origin);const r=Mr.dot(this.direction),i=Mr.dot(Mr)-r*r,a=e.radius*e.radius;if(i>a)return null;const o=Math.sqrt(a-i),s=r-o,l=r+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,a,o,s,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(r=(e.min.x-h.x)*u,i=(e.max.x-h.x)*u):(r=(e.max.x-h.x)*u,i=(e.min.x-h.x)*u),c>=0?(a=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(a=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),r>o||a>i||((a>r||isNaN(r))&&(r=a),(o<i||isNaN(i))&&(i=o),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),r>l||s>i)||((s>r||r!==r)&&(r=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,n,r,i,a){Ud.subVectors(n,e),iu.subVectors(r,e),Fd.crossVectors(Ud,iu);let o=this.direction.dot(Fd),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Qr.subVectors(this.origin,e);const l=s*this.direction.dot(iu.crossVectors(Qr,iu));if(l<0)return null;const u=s*this.direction.dot(Ud.cross(Qr));if(u<0||l+u>o)return null;const c=-s*Qr.dot(Fd);return c<0?null:this.at(c/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,n,r,i,a,o,s,l,u,c,f,h,p,y,_,m){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,a,o,s,l,u,c,f,h,p,y,_,m)}set(e,n,r,i,a,o,s,l,u,c,f,h,p,y,_,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=r,d[12]=i,d[1]=a,d[5]=o,d[9]=s,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=y,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/Aa.setFromMatrixColumn(e,0).length(),a=1/Aa.setFromMatrixColumn(e,1).length(),o=1/Aa.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*a,n[5]=r[5]*a,n[6]=r[6]*a,n[7]=0,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,a=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(i),u=Math.sin(i),c=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=o*c,p=o*f,y=s*c,_=s*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+y*u,n[5]=h-_*u,n[9]=-s*l,n[2]=_-h*u,n[6]=y+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,y=u*c,_=u*f;n[0]=h+_*s,n[4]=y*s-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-s,n[2]=p*s-y,n[6]=_+h*s,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,y=u*c,_=u*f;n[0]=h-_*s,n[4]=-o*f,n[8]=y+p*s,n[1]=p+y*s,n[5]=o*c,n[9]=_-h*s,n[2]=-o*u,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,y=s*c,_=s*f;n[0]=l*c,n[4]=y*u-p,n[8]=h*u+_,n[1]=l*f,n[5]=_*u+h,n[9]=p*u-y,n[2]=-u,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,y=s*l,_=s*u;n[0]=l*c,n[4]=_-h*f,n[8]=y*f+p,n[1]=f,n[5]=o*c,n[9]=-s*c,n[2]=-u*c,n[6]=p*f+y,n[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*u,y=s*l,_=s*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+_,n[5]=o*c,n[9]=p*f-y,n[2]=y*f-p,n[6]=s*c,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hU,e,pU)}lookAt(e,n,r){const i=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Jr.crossVectors(r,mn),Jr.lengthSq()===0&&(Math.abs(r.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Jr.crossVectors(r,mn)),Jr.normalize(),au.crossVectors(mn,Jr),i[0]=Jr.x,i[4]=au.x,i[8]=mn.x,i[1]=Jr.y,i[5]=au.y,i[9]=mn.y,i[2]=Jr.z,i[6]=au.z,i[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,a=this.elements,o=r[0],s=r[4],l=r[8],u=r[12],c=r[1],f=r[5],h=r[9],p=r[13],y=r[2],_=r[6],m=r[10],d=r[14],v=r[3],g=r[7],x=r[11],M=r[15],b=i[0],C=i[4],R=i[8],S=i[12],T=i[1],X=i[5],J=i[9],F=i[13],H=i[2],G=i[6],Q=i[10],$=i[14],I=i[3],B=i[7],U=i[11],te=i[15];return a[0]=o*b+s*T+l*H+u*I,a[4]=o*C+s*X+l*G+u*B,a[8]=o*R+s*J+l*Q+u*U,a[12]=o*S+s*F+l*$+u*te,a[1]=c*b+f*T+h*H+p*I,a[5]=c*C+f*X+h*G+p*B,a[9]=c*R+f*J+h*Q+p*U,a[13]=c*S+f*F+h*$+p*te,a[2]=y*b+_*T+m*H+d*I,a[6]=y*C+_*X+m*G+d*B,a[10]=y*R+_*J+m*Q+d*U,a[14]=y*S+_*F+m*$+d*te,a[3]=v*b+g*T+x*H+M*I,a[7]=v*C+g*X+x*G+M*B,a[11]=v*R+g*J+x*Q+M*U,a[15]=v*S+g*F+x*$+M*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],a=e[12],o=e[1],s=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],y=e[3],_=e[7],m=e[11],d=e[15];return y*(+a*l*f-i*u*f-a*s*h+r*u*h+i*s*p-r*l*p)+_*(+n*l*p-n*u*h+a*o*h-i*o*p+i*u*c-a*l*c)+m*(+n*u*f-n*s*p-a*o*f+r*o*p+a*s*c-r*u*c)+d*(-i*s*c-n*l*f+n*s*h+i*o*f-r*o*h+r*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],y=e[12],_=e[13],m=e[14],d=e[15],v=f*m*u-_*h*u+_*l*p-s*m*p-f*l*d+s*h*d,g=y*h*u-c*m*u-y*l*p+o*m*p+c*l*d-o*h*d,x=c*_*u-y*f*u+y*s*p-o*_*p-c*s*d+o*f*d,M=y*f*l-c*_*l-y*s*h+o*_*h+c*s*m-o*f*m,b=n*v+r*g+i*x+a*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(_*h*a-f*m*a-_*i*p+r*m*p+f*i*d-r*h*d)*C,e[2]=(s*m*a-_*l*a+_*i*u-r*m*u-s*i*d+r*l*d)*C,e[3]=(f*l*a-s*h*a-f*i*u+r*h*u+s*i*p-r*l*p)*C,e[4]=g*C,e[5]=(c*m*a-y*h*a+y*i*p-n*m*p-c*i*d+n*h*d)*C,e[6]=(y*l*a-o*m*a-y*i*u+n*m*u+o*i*d-n*l*d)*C,e[7]=(o*h*a-c*l*a+c*i*u-n*h*u-o*i*p+n*l*p)*C,e[8]=x*C,e[9]=(y*f*a-c*_*a-y*r*p+n*_*p+c*r*d-n*f*d)*C,e[10]=(o*_*a-y*s*a+y*r*u-n*_*u-o*r*d+n*s*d)*C,e[11]=(c*s*a-o*f*a-c*r*u+n*f*u+o*r*p-n*s*p)*C,e[12]=M*C,e[13]=(c*_*i-y*f*i+y*r*h-n*_*h-c*r*m+n*f*m)*C,e[14]=(y*s*i-o*_*i-y*r*l+n*_*l+o*r*m-n*s*m)*C,e[15]=(o*f*i-c*s*i+c*r*l-n*f*l-o*r*h+n*s*h)*C,this}scale(e){const n=this.elements,r=e.x,i=e.y,a=e.z;return n[0]*=r,n[4]*=i,n[8]*=a,n[1]*=r,n[5]*=i,n[9]*=a,n[2]*=r,n[6]*=i,n[10]*=a,n[3]*=r,n[7]*=i,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),a=1-r,o=e.x,s=e.y,l=e.z,u=a*o,c=a*s;return this.set(u*o+r,u*s-i*l,u*l+i*s,0,u*s+i*l,c*s+r,c*l-i*o,0,u*l-i*s,c*l+i*o,a*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,a,o){return this.set(1,r,a,0,e,1,o,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,u=a+a,c=o+o,f=s+s,h=a*u,p=a*c,y=a*f,_=o*c,m=o*f,d=s*f,v=l*u,g=l*c,x=l*f,M=r.x,b=r.y,C=r.z;return i[0]=(1-(_+d))*M,i[1]=(p+x)*M,i[2]=(y-g)*M,i[3]=0,i[4]=(p-x)*b,i[5]=(1-(h+d))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(y+g)*C,i[9]=(m-v)*C,i[10]=(1-(h+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let a=Aa.set(i[0],i[1],i[2]).length();const o=Aa.set(i[4],i[5],i[6]).length(),s=Aa.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Vn.copy(this);const u=1/a,c=1/o,f=1/s;return Vn.elements[0]*=u,Vn.elements[1]*=u,Vn.elements[2]*=u,Vn.elements[4]*=c,Vn.elements[5]*=c,Vn.elements[6]*=c,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,n.setFromRotationMatrix(Vn),r.x=a,r.y=o,r.z=s,this}makePerspective(e,n,r,i,a,o,s=Or){const l=this.elements,u=2*a/(n-e),c=2*a/(r-i),f=(n+e)/(n-e),h=(r+i)/(r-i);let p,y;if(s===Or)p=-(o+a)/(o-a),y=-2*o*a/(o-a);else if(s===Pc)p=-o/(o-a),y=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,i,a,o,s=Or){const l=this.elements,u=1/(n-e),c=1/(r-i),f=1/(o-a),h=(n+e)*u,p=(r+i)*c;let y,_;if(s===Or)y=(o+a)*f,_=-2*f;else if(s===Pc)y=a*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Aa=new k,Vn=new kt,hU=new k(0,0,0),pU=new k(1,1,1),Jr=new k,au=new k,mn=new k,cy=new kt,fy=new dl;class uf{constructor(e=0,n=0,r=0,i=uf.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,a=i[0],o=i[4],s=i[8],l=i[1],u=i[5],c=i[9],f=i[2],h=i[6],p=i[10];switch(n){case"XYZ":this._y=Math.asin(an(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-an(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-an(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return cy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cy,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fy.setFromEuler(this),this.setFromQuaternion(fy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}uf.DEFAULT_ORDER="XYZ";let yv=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mU=0;const dy=new k,Ca=new dl,wr=new kt,ou=new k,is=new k,vU=new k,gU=new dl,hy=new k(1,0,0),py=new k(0,1,0),my=new k(0,0,1),_U={type:"added"},vy={type:"removed"};class xn extends ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mU++}),this.uuid=fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new k,n=new uf,r=new dl,i=new k(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new Fe}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new yv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ca.setFromAxisAngle(e,n),this.quaternion.multiply(Ca),this}rotateOnWorldAxis(e,n){return Ca.setFromAxisAngle(e,n),this.quaternion.premultiply(Ca),this}rotateX(e){return this.rotateOnAxis(hy,e)}rotateY(e){return this.rotateOnAxis(py,e)}rotateZ(e){return this.rotateOnAxis(my,e)}translateOnAxis(e,n){return dy.copy(e).applyQuaternion(this.quaternion),this.position.add(dy.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hy,e)}translateY(e){return this.translateOnAxis(py,e)}translateZ(e){return this.translateOnAxis(my,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ou.copy(e):ou.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wr.lookAt(is,ou,this.up):wr.lookAt(ou,is,this.up),this.quaternion.setFromRotationMatrix(wr),i&&(wr.extractRotation(i.matrixWorld),Ca.setFromRotationMatrix(wr),this.quaternion.premultiply(Ca.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_U)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(vy)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(vy)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(wr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const o=this.children[r].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let r=[];this[e]===n&&r.push(this);for(let i=0,a=this.children.length;i<a;i++){const o=this.children[i].getObjectsByProperty(e,n);o.length>0&&(r=r.concat(o))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,vU),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,gU,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++){const a=n[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const i=this.children;for(let a=0,o=i.length;a<o;a++){const s=i[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(a(e.materials,this.material[l]));i.material=s}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(a(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),y=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),c.length>0&&(r.images=c),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),p.length>0&&(r.animations=p),y.length>0&&(r.nodes=y)}return r.object=i,r;function o(s){const l=[];for(const u in s){const c=s[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}xn.DEFAULT_UP=new k(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new k,Tr=new k,kd=new k,br=new k,Ra=new k,Pa=new k,gy=new k,zd=new k,Bd=new k,Hd=new k;let su=!1;class Kn{constructor(e=new k,n=new k,r=new k){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),Wn.subVectors(e,n),i.cross(Wn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,n,r,i,a){Wn.subVectors(i,n),Tr.subVectors(r,n),kd.subVectors(e,n);const o=Wn.dot(Wn),s=Wn.dot(Tr),l=Wn.dot(kd),u=Tr.dot(Tr),c=Tr.dot(kd),f=o*u-s*s;if(f===0)return a.set(-2,-1,-1);const h=1/f,p=(u*l-s*c)*h,y=(o*c-s*l)*h;return a.set(1-p-y,y,p)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,br),br.x>=0&&br.y>=0&&br.x+br.y<=1}static getUV(e,n,r,i,a,o,s,l){return su===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),su=!0),this.getInterpolation(e,n,r,i,a,o,s,l)}static getInterpolation(e,n,r,i,a,o,s,l){return this.getBarycoord(e,n,r,i,br),l.setScalar(0),l.addScaledVector(a,br.x),l.addScaledVector(o,br.y),l.addScaledVector(s,br.z),l}static isFrontFacing(e,n,r,i){return Wn.subVectors(r,n),Tr.subVectors(e,n),Wn.cross(Tr).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Tr.subVectors(this.a,this.b),Wn.cross(Tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,i,a){return su===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),su=!0),Kn.getInterpolation(e,this.a,this.b,this.c,n,r,i,a)}getInterpolation(e,n,r,i,a){return Kn.getInterpolation(e,this.a,this.b,this.c,n,r,i,a)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,a=this.c;let o,s;Ra.subVectors(i,r),Pa.subVectors(a,r),zd.subVectors(e,r);const l=Ra.dot(zd),u=Pa.dot(zd);if(l<=0&&u<=0)return n.copy(r);Bd.subVectors(e,i);const c=Ra.dot(Bd),f=Pa.dot(Bd);if(c>=0&&f<=c)return n.copy(i);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(r).addScaledVector(Ra,o);Hd.subVectors(e,a);const p=Ra.dot(Hd),y=Pa.dot(Hd);if(y>=0&&p<=y)return n.copy(a);const _=p*u-l*y;if(_<=0&&u>=0&&y<=0)return s=u/(u-y),n.copy(r).addScaledVector(Pa,s);const m=c*y-p*f;if(m<=0&&f-c>=0&&p-y>=0)return gy.subVectors(a,i),s=(f-c)/(f-c+(p-y)),n.copy(i).addScaledVector(gy,s);const d=1/(m+_+h);return o=_*d,s=h*d,n.copy(r).addScaledVector(Ra,o).addScaledVector(Pa,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let yU=0;class cf extends ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yU++}),this.uuid=fl(),this.name="",this.type="Material",this.blending=co,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=mM,this.blendDst=vM,this.blendEquation=za,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fp,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=XN,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bd,this.stencilZFail=bd,this.stencilZPass=bd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(r.blending=this.blending),this.side!==wi&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(n){const a=i(e.textures),o=i(e.images);a.length>0&&(r.textures=a),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=n[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const IM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},lu={h:0,s:0,l:0};function Gd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ne){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gn.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=Gn.workingColorSpace){return this.r=e,this.g=n,this.b=r,Gn.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=Gn.workingColorSpace){if(e=nU(e,1),n=an(n,0,1),r=an(r,0,1),n===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+n):r+n-r*n,o=2*r-a;this.r=Gd(o,a,e+1/3),this.g=Gd(o,a,e),this.b=Gd(o,a,e-1/3)}return Gn.toWorkingColorSpace(this,i),this}setStyle(e,n=Ne){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ne){const r=IM[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}copyLinearToSRGB(e){return this.r=Pd(e.r),this.g=Pd(e.g),this.b=Pd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ne){return Gn.fromWorkingColorSpace($t.copy(this),e),Math.round(an($t.r*255,0,255))*65536+Math.round(an($t.g*255,0,255))*256+Math.round(an($t.b*255,0,255))}getHexString(e=Ne){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Gn.workingColorSpace){Gn.fromWorkingColorSpace($t.copy(this),n);const r=$t.r,i=$t.g,a=$t.b,o=Math.max(r,i,a),s=Math.min(r,i,a);let l,u;const c=(s+o)/2;if(s===o)l=0,u=0;else{const f=o-s;switch(u=c<=.5?f/(o+s):f/(2-o-s),o){case r:l=(i-a)/f+(i<a?6:0);break;case i:l=(a-r)/f+2;break;case a:l=(r-i)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Gn.workingColorSpace){return Gn.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Ne){Gn.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,r=$t.g,i=$t.b;return e!==Ne?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL($n),$n.h+=e,$n.s+=n,$n.l+=r,this.setHSL($n.h,$n.s,$n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL($n),e.getHSL(lu);const r=Cd($n.h,lu.h,n),i=Cd($n.s,lu.s,n),a=Cd($n.l,lu.l,n);return this.setHSL(r,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,a=e.elements;return this.r=a[0]*n+a[3]*r+a[6]*i,this.g=a[1]*n+a[4]*r+a[7]*i,this.b=a[2]*n+a[5]*r+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new rt;rt.NAMES=IM;class ri extends cf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new k,uu=new qe;class gr{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=ay,this.updateRange={offset:0,count:-1},this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)uu.fromBufferAttribute(this,n),uu.applyMatrix3(e),this.setXY(n,uu.x,uu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=eu(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=eu(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=eu(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=eu(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),r=pn(r,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,a){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),r=pn(r,this.array),i=pn(i,this.array),a=pn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ay&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class DM extends gr{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class OM extends gr{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ra extends gr{constructor(e,n,r){super(new Float32Array(e),n,r)}}let xU=0;const An=new kt,Vd=new xn,La=new k,vn=new hl,as=new hl,Rt=new k;class ga extends ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xU++}),this.uuid=fl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AM(e)?OM:DM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Fe().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,r){return An.makeTranslation(e,n,r),this.applyMatrix4(An),this}scale(e,n,r){return An.makeScale(e,n,r),this.applyMatrix4(An),this}lookAt(e){return Vd.lookAt(e),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(La).negate(),this.translate(La.x,La.y,La.z),this}setFromPoints(e){const n=[];for(let r=0,i=e.length;r<i;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ra(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const a=n[r];vn.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _v);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const r=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const s=n[a];as.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(vn.min,as.min),vn.expandByPoint(Rt),Rt.addVectors(vn.max,as.max),vn.expandByPoint(Rt)):(vn.expandByPoint(as.min),vn.expandByPoint(as.max))}vn.getCenter(r);let i=0;for(let a=0,o=e.count;a<o;a++)Rt.fromBufferAttribute(e,a),i=Math.max(i,r.distanceToSquared(Rt));if(n)for(let a=0,o=n.length;a<o;a++){const s=n[a],l=this.morphTargetsRelative;for(let u=0,c=s.count;u<c;u++)Rt.fromBufferAttribute(s,u),l&&(La.fromBufferAttribute(e,u),Rt.add(La)),i=Math.max(i,r.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,i=n.position.array,a=n.normal.array,o=n.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gr(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let T=0;T<s;T++)u[T]=new k,c[T]=new k;const f=new k,h=new k,p=new k,y=new qe,_=new qe,m=new qe,d=new k,v=new k;function g(T,X,J){f.fromArray(i,T*3),h.fromArray(i,X*3),p.fromArray(i,J*3),y.fromArray(o,T*2),_.fromArray(o,X*2),m.fromArray(o,J*2),h.sub(f),p.sub(f),_.sub(y),m.sub(y);const F=1/(_.x*m.y-m.x*_.y);isFinite(F)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(F),v.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(F),u[T].add(d),u[X].add(d),u[J].add(d),c[T].add(v),c[X].add(v),c[J].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:r.length}]);for(let T=0,X=x.length;T<X;++T){const J=x[T],F=J.start,H=J.count;for(let G=F,Q=F+H;G<Q;G+=3)g(r[G+0],r[G+1],r[G+2])}const M=new k,b=new k,C=new k,R=new k;function S(T){C.fromArray(a,T*3),R.copy(C);const X=u[T];M.copy(X),M.sub(C.multiplyScalar(C.dot(X))).normalize(),b.crossVectors(R,X);const F=b.dot(c[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=F}for(let T=0,X=x.length;T<X;++T){const J=x[T],F=J.start,H=J.count;for(let G=F,Q=F+H;G<Q;G+=3)S(r[G+0]),S(r[G+1]),S(r[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new gr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let h=0,p=r.count;h<p;h++)r.setXYZ(h,0,0,0);const i=new k,a=new k,o=new k,s=new k,l=new k,u=new k,c=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const y=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(n,y),a.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),c.subVectors(o,a),f.subVectors(i,a),c.cross(f),s.fromBufferAttribute(r,y),l.fromBufferAttribute(r,_),u.fromBufferAttribute(r,m),s.add(c),l.add(c),u.add(c),r.setXYZ(y,s.x,s.y,s.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)i.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,a),f.subVectors(i,a),c.cross(f),r.setXYZ(h+0,c.x,c.y,c.z),r.setXYZ(h+1,c.x,c.y,c.z),r.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(s,l){const u=s.array,c=s.itemSize,f=s.normalized,h=new u.constructor(l.length*c);let p=0,y=0;for(let _=0,m=l.length;_<m;_++){s.isInterleavedBufferAttribute?p=l[_]*s.data.stride+s.offset:p=l[_]*c;for(let d=0;d<c;d++)h[y++]=u[p++]}return new gr(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ga,r=this.index.array,i=this.attributes;for(const s in i){const l=i[s],u=e(l,r);n.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const l=[],u=a[s];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,r);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const u=o[s];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const u=r[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(i[l]=c,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(n))}const a=e.morphAttributes;for(const u in a){const c=[],f=a[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _y=new kt,Fi=new LM,cu=new _v,yy=new k,Ia=new k,Da=new k,Oa=new k,Wd=new k,fu=new k,du=new qe,hu=new qe,pu=new qe,xy=new k,Sy=new k,Ey=new k,mu=new k,vu=new k;class on extends xn{constructor(e=new ga,n=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=i.length;a<o;a++){const s=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,o=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(a&&s){fu.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const c=s[l],f=a[l];c!==0&&(Wd.fromBufferAttribute(f,e),o?fu.addScaledVector(Wd,c):fu.addScaledVector(Wd.sub(n),c))}n.add(fu)}return n}raycast(e,n){const r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cu.copy(r.boundingSphere),cu.applyMatrix4(a),Fi.copy(e.ray).recast(e.near),!(cu.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(cu,yy)===null||Fi.origin.distanceToSquared(yy)>(e.far-e.near)**2))&&(_y.copy(a).invert(),Fi.copy(e.ray).applyMatrix4(_y),!(r.boundingBox!==null&&Fi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Fi)))}_computeIntersections(e,n,r){let i;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,u=a.attributes.uv,c=a.attributes.uv1,f=a.attributes.normal,h=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const m=h[y],d=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,M=g;x<M;x+=3){const b=s.getX(x),C=s.getX(x+1),R=s.getX(x+2);i=gu(this,d,e,r,u,c,f,b,C,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const y=Math.max(0,p.start),_=Math.min(s.count,p.start+p.count);for(let m=y,d=_;m<d;m+=3){const v=s.getX(m),g=s.getX(m+1),x=s.getX(m+2);i=gu(this,o,e,r,u,c,f,v,g,x),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const m=h[y],d=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,M=g;x<M;x+=3){const b=x,C=x+1,R=x+2;i=gu(this,d,e,r,u,c,f,b,C,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const y=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=y,d=_;m<d;m+=3){const v=m,g=m+1,x=m+2;i=gu(this,o,e,r,u,c,f,v,g,x),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}}}function SU(t,e,n,r,i,a,o,s){let l;if(e.side===fn?l=r.intersectTriangle(o,a,i,!0,s):l=r.intersectTriangle(i,a,o,e.side===wi,s),l===null)return null;vu.copy(s),vu.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(vu);return u<n.near||u>n.far?null:{distance:u,point:vu.clone(),object:t}}function gu(t,e,n,r,i,a,o,s,l,u){t.getVertexPosition(s,Ia),t.getVertexPosition(l,Da),t.getVertexPosition(u,Oa);const c=SU(t,e,n,r,Ia,Da,Oa,mu);if(c){i&&(du.fromBufferAttribute(i,s),hu.fromBufferAttribute(i,l),pu.fromBufferAttribute(i,u),c.uv=Kn.getInterpolation(mu,Ia,Da,Oa,du,hu,pu,new qe)),a&&(du.fromBufferAttribute(a,s),hu.fromBufferAttribute(a,l),pu.fromBufferAttribute(a,u),c.uv1=Kn.getInterpolation(mu,Ia,Da,Oa,du,hu,pu,new qe),c.uv2=c.uv1),o&&(xy.fromBufferAttribute(o,s),Sy.fromBufferAttribute(o,l),Ey.fromBufferAttribute(o,u),c.normal=Kn.getInterpolation(mu,Ia,Da,Oa,xy,Sy,Ey,new k),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));const f={a:s,b:l,c:u,normal:new k,materialIndex:0};Kn.getNormal(Ia,Da,Oa,f.normal),c.face=f}return c}class pl extends ga{constructor(e=1,n=1,r=1,i=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:a,depthSegments:o};const s=this;i=Math.floor(i),a=Math.floor(a),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;y("z","y","x",-1,-1,r,n,e,o,a,0),y("z","y","x",1,-1,r,n,-e,o,a,1),y("x","z","y",1,1,e,r,n,i,o,2),y("x","z","y",1,-1,e,r,-n,i,o,3),y("x","y","z",1,-1,e,n,r,i,a,4),y("x","y","z",-1,-1,e,n,-r,i,a,5),this.setIndex(l),this.setAttribute("position",new ra(u,3)),this.setAttribute("normal",new ra(c,3)),this.setAttribute("uv",new ra(f,2));function y(_,m,d,v,g,x,M,b,C,R,S){const T=x/C,X=M/R,J=x/2,F=M/2,H=b/2,G=C+1,Q=R+1;let $=0,I=0;const B=new k;for(let U=0;U<Q;U++){const te=U*X-F;for(let L=0;L<G;L++){const Z=L*T-J;B[_]=Z*v,B[m]=te*g,B[d]=H,u.push(B.x,B.y,B.z),B[_]=0,B[m]=0,B[d]=b>0?1:-1,c.push(B.x,B.y,B.z),f.push(L/C),f.push(1-U/R),$+=1}}for(let U=0;U<R;U++)for(let te=0;te<C;te++){const L=h+te+G*U,Z=h+te+G*(U+1),K=h+(te+1)+G*(U+1),ie=h+(te+1)+G*U;l.push(L,Z,ie),l.push(Z,K,ie),I+=6}s.addGroup(p,I,S),p+=I,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const r=To(t[n]);for(const i in r)e[i]=r[i]}return e}function EU(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function NM(t){return t.getRenderTarget()===null?t.outputColorSpace:_r}const MU={clone:To,merge:Kt};var wU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends cf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wU,this.fragmentShader=TU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=EU(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?n.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[i]={type:"m4",value:o.toArray()}:n.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class UM extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Or}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends UM{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=gp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ad*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gp*2*Math.atan(Math.tan(Ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,i,a,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ad*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,a=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;a+=o.offsetX*i/l,n-=o.offsetY*r/u,i*=o.width/l,r*=o.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Na=-90,Ua=1;class bU extends xn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null;const i=new In(Na,Ua,e,n);i.layers=this.layers,this.add(i);const a=new In(Na,Ua,e,n);a.layers=this.layers,this.add(a);const o=new In(Na,Ua,e,n);o.layers=this.layers,this.add(o);const s=new In(Na,Ua,e,n);s.layers=this.layers,this.add(s);const l=new In(Na,Ua,e,n);l.layers=this.layers,this.add(l);const u=new In(Na,Ua,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,a,o,s,l]=n;for(const u of n)this.remove(u);if(e===Or)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pc)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,o,s,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Ur,e.xr.enabled=!1;const p=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(n,i),e.setRenderTarget(r,1),e.render(n,a),e.setRenderTarget(r,2),e.render(n,o),e.setRenderTarget(r,3),e.render(n,s),e.setRenderTarget(r,4),e.render(n,l),r.texture.generateMipmaps=p,e.setRenderTarget(r,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=h,r.texture.needsPMREMUpdate=!0}}class FM extends dn{constructor(e,n,r,i,a,o,s,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Eo,super(e,n,r,i,a,o,s,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AU extends fa{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];n.encoding!==void 0&&(Ss("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ta?Ne:na),this.texture=new FM(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new pl(5,5,5),a=new da({name:"CubemapFromEquirect",uniforms:To(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:fn,blending:xi});a.uniforms.tEquirect.value=n;const o=new on(i,a),s=n.minFilter;return n.minFilter===Ws&&(n.minFilter=Ln),new bU(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,r,i){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,r,i);e.setRenderTarget(a)}}const $d=new k,CU=new k,RU=new Fe;class Hi{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=$d.subVectors(r,n).cross(CU.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta($d),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||RU.getNormalMatrix(e),i=this.coplanarPoint($d).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new _v,_u=new k;class kM{constructor(e=new Hi,n=new Hi,r=new Hi,i=new Hi,a=new Hi,o=new Hi){this.planes=[e,n,r,i,a,o]}set(e,n,r,i,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(r),s[3].copy(i),s[4].copy(a),s[5].copy(o),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Or){const r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],l=i[3],u=i[4],c=i[5],f=i[6],h=i[7],p=i[8],y=i[9],_=i[10],m=i[11],d=i[12],v=i[13],g=i[14],x=i[15];if(r[0].setComponents(l-a,h-u,m-p,x-d).normalize(),r[1].setComponents(l+a,h+u,m+p,x+d).normalize(),r[2].setComponents(l+o,h+c,m+y,x+v).normalize(),r[3].setComponents(l-o,h-c,m-y,x-v).normalize(),r[4].setComponents(l-s,h-f,m-_,x-g).normalize(),n===Or)r[5].setComponents(l+s,h+f,m+_,x+g).normalize();else if(n===Pc)r[5].setComponents(s,f,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ki.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(_u.x=i.normal.x>0?e.max.x:e.min.x,_u.y=i.normal.y>0?e.max.y:e.min.y,_u.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_u)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zM(){let t=null,e=!1,n=null,r=null;function i(a,o){n(a,o),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function PU(t,e){const n=e.isWebGL2,r=new WeakMap;function i(u,c){const f=u.array,h=u.usage,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,f,h),u.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function a(u,c,f){const h=c.array,p=c.updateRange;t.bindBuffer(f,u),p.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),r.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=r.get(u);c&&(t.deleteBuffer(c.buffer),r.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=r.get(u);(!h||h.version<u.version)&&r.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=r.get(u);f===void 0?r.set(u,i(u,c)):f.version<u.version&&(a(f.buffer,u,c),f.version=u.version)}return{get:o,remove:s,update:l}}class Pr extends ga{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const a=e/2,o=n/2,s=Math.floor(r),l=Math.floor(i),u=s+1,c=l+1,f=e/s,h=n/l,p=[],y=[],_=[],m=[];for(let d=0;d<c;d++){const v=d*h-o;for(let g=0;g<u;g++){const x=g*f-a;y.push(x,-v,0),_.push(0,0,1),m.push(g/s),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<s;v++){const g=v+u*d,x=v+u*(d+1),M=v+1+u*(d+1),b=v+1+u*d;p.push(g,x,b),p.push(x,M,b)}this.setIndex(p),this.setAttribute("position",new ra(y,3)),this.setAttribute("normal",new ra(_,3)),this.setAttribute("uv",new ra(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.widthSegments,e.heightSegments)}}var LU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DU=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,OU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NU=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FU="vec3 transformed = vec3( position );",kU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zU=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BU=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HU=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GU=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,VU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$U=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qU=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,KU=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZU=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QU=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rF="gl_FragColor = linearToOutputTexel( gl_FragColor );",iF=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sF=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pF=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mF=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_F=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yF=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xF=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EF=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MF=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wF=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TF=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,bF=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AF=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CF=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RF=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,PF=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LF=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IF=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,DF=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,OF=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,NF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FF=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zF=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BF=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HF=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,GF=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,VF=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,WF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,$F=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YF=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qF=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ZF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ek=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tk=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nk=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rk=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ik=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ak=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ok=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sk=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lk=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,uk=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ck=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fk=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dk=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hk=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,pk=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mk=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vk=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gk=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_k=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yk=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xk=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sk=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ek=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mk=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wk=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tk=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bk=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ak=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ck=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rk=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lk=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ik=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dk=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ok=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nk=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fk=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kk=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zk=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bk=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hk=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gk=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vk=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wk=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$k=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jk=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xk=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yk=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qk=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kk=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zk=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qk=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jk=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,t4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n4=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,i4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:LU,alphamap_pars_fragment:IU,alphatest_fragment:DU,alphatest_pars_fragment:OU,aomap_fragment:NU,aomap_pars_fragment:UU,begin_vertex:FU,beginnormal_vertex:kU,bsdfs:zU,iridescence_fragment:BU,bumpmap_pars_fragment:HU,clipping_planes_fragment:GU,clipping_planes_pars_fragment:VU,clipping_planes_pars_vertex:WU,clipping_planes_vertex:$U,color_fragment:jU,color_pars_fragment:XU,color_pars_vertex:YU,color_vertex:qU,common:KU,cube_uv_reflection_fragment:ZU,defaultnormal_vertex:QU,displacementmap_pars_vertex:JU,displacementmap_vertex:eF,emissivemap_fragment:tF,emissivemap_pars_fragment:nF,encodings_fragment:rF,encodings_pars_fragment:iF,envmap_fragment:aF,envmap_common_pars_fragment:oF,envmap_pars_fragment:sF,envmap_pars_vertex:lF,envmap_physical_pars_fragment:xF,envmap_vertex:uF,fog_vertex:cF,fog_pars_vertex:fF,fog_fragment:dF,fog_pars_fragment:hF,gradientmap_pars_fragment:pF,lightmap_fragment:mF,lightmap_pars_fragment:vF,lights_lambert_fragment:gF,lights_lambert_pars_fragment:_F,lights_pars_begin:yF,lights_toon_fragment:SF,lights_toon_pars_fragment:EF,lights_phong_fragment:MF,lights_phong_pars_fragment:wF,lights_physical_fragment:TF,lights_physical_pars_fragment:bF,lights_fragment_begin:AF,lights_fragment_maps:CF,lights_fragment_end:RF,logdepthbuf_fragment:PF,logdepthbuf_pars_fragment:LF,logdepthbuf_pars_vertex:IF,logdepthbuf_vertex:DF,map_fragment:OF,map_pars_fragment:NF,map_particle_fragment:UF,map_particle_pars_fragment:FF,metalnessmap_fragment:kF,metalnessmap_pars_fragment:zF,morphcolor_vertex:BF,morphnormal_vertex:HF,morphtarget_pars_vertex:GF,morphtarget_vertex:VF,normal_fragment_begin:WF,normal_fragment_maps:$F,normal_pars_fragment:jF,normal_pars_vertex:XF,normal_vertex:YF,normalmap_pars_fragment:qF,clearcoat_normal_fragment_begin:KF,clearcoat_normal_fragment_maps:ZF,clearcoat_pars_fragment:QF,iridescence_pars_fragment:JF,output_fragment:ek,packing:tk,premultiplied_alpha_fragment:nk,project_vertex:rk,dithering_fragment:ik,dithering_pars_fragment:ak,roughnessmap_fragment:ok,roughnessmap_pars_fragment:sk,shadowmap_pars_fragment:lk,shadowmap_pars_vertex:uk,shadowmap_vertex:ck,shadowmask_pars_fragment:fk,skinbase_vertex:dk,skinning_pars_vertex:hk,skinning_vertex:pk,skinnormal_vertex:mk,specularmap_fragment:vk,specularmap_pars_fragment:gk,tonemapping_fragment:_k,tonemapping_pars_fragment:yk,transmission_fragment:xk,transmission_pars_fragment:Sk,uv_pars_fragment:Ek,uv_pars_vertex:Mk,uv_vertex:wk,worldpos_vertex:Tk,background_vert:bk,background_frag:Ak,backgroundCube_vert:Ck,backgroundCube_frag:Rk,cube_vert:Pk,cube_frag:Lk,depth_vert:Ik,depth_frag:Dk,distanceRGBA_vert:Ok,distanceRGBA_frag:Nk,equirect_vert:Uk,equirect_frag:Fk,linedashed_vert:kk,linedashed_frag:zk,meshbasic_vert:Bk,meshbasic_frag:Hk,meshlambert_vert:Gk,meshlambert_frag:Vk,meshmatcap_vert:Wk,meshmatcap_frag:$k,meshnormal_vert:jk,meshnormal_frag:Xk,meshphong_vert:Yk,meshphong_frag:qk,meshphysical_vert:Kk,meshphysical_frag:Zk,meshtoon_vert:Qk,meshtoon_frag:Jk,points_vert:e4,points_frag:t4,shadow_vert:n4,shadow_frag:r4,sprite_vert:i4,sprite_frag:a4},oe={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},fr={basic:{uniforms:Kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Kt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Kt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Kt([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Kt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Kt([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Kt([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Kt([oe.common,oe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Kt([oe.lights,oe.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};fr.physical={uniforms:Kt([fr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const yu={r:0,b:0,g:0};function o4(t,e,n,r,i,a,o){const s=new rt(0);let l=a===!0?0:1,u,c,f=null,h=0,p=null;function y(m,d){let v=!1,g=d.isScene===!0?d.background:null;switch(g&&g.isTexture&&(g=(d.backgroundBlurriness>0?n:e).get(g)),g===null?_(s,l):g&&g.isColor&&(_(g,1),v=!0),t.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":r.buffers.color.setClear(0,0,0,1,o),v=!0;break;case"alpha-blend":r.buffers.color.setClear(0,0,0,0,o),v=!0;break}(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===lf)?(c===void 0&&(c=new on(new pl(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:To(fr.backgroundCube.uniforms),vertexShader:fr.backgroundCube.vertexShader,fragmentShader:fr.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=g.colorSpace!==Ne,(f!==g||h!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new on(new Pr(2,2),new da({name:"BackgroundMaterial",uniforms:To(fr.background.uniforms),vertexShader:fr.background.vertexShader,fragmentShader:fr.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=g.colorSpace!==Ne,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,d){m.getRGB(yu,NM(t)),r.buffers.color.setClear(yu.r,yu.g,yu.b,d,o)}return{getClearColor:function(){return s},setClearColor:function(m,d=1){s.set(m),l=d,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(s,l)},render:y}}function s4(t,e,n,r){const i=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||a!==null,s={},l=m(null);let u=l,c=!1;function f(H,G,Q,$,I){let B=!1;if(o){const U=_($,Q,G);u!==U&&(u=U,p(u.object)),B=d(H,$,Q,I),B&&v(H,$,Q,I)}else{const U=G.wireframe===!0;(u.geometry!==$.id||u.program!==Q.id||u.wireframe!==U)&&(u.geometry=$.id,u.program=Q.id,u.wireframe=U,B=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,R(H,G,Q,$),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function h(){return r.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function p(H){return r.isWebGL2?t.bindVertexArray(H):a.bindVertexArrayOES(H)}function y(H){return r.isWebGL2?t.deleteVertexArray(H):a.deleteVertexArrayOES(H)}function _(H,G,Q){const $=Q.wireframe===!0;let I=s[H.id];I===void 0&&(I={},s[H.id]=I);let B=I[G.id];B===void 0&&(B={},I[G.id]=B);let U=B[$];return U===void 0&&(U=m(h()),B[$]=U),U}function m(H){const G=[],Q=[],$=[];for(let I=0;I<i;I++)G[I]=0,Q[I]=0,$[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:$,object:H,attributes:{},index:null}}function d(H,G,Q,$){const I=u.attributes,B=G.attributes;let U=0;const te=Q.getAttributes();for(const L in te)if(te[L].location>=0){const K=I[L];let ie=B[L];if(ie===void 0&&(L==="instanceMatrix"&&H.instanceMatrix&&(ie=H.instanceMatrix),L==="instanceColor"&&H.instanceColor&&(ie=H.instanceColor)),K===void 0||K.attribute!==ie||ie&&K.data!==ie.data)return!0;U++}return u.attributesNum!==U||u.index!==$}function v(H,G,Q,$){const I={},B=G.attributes;let U=0;const te=Q.getAttributes();for(const L in te)if(te[L].location>=0){let K=B[L];K===void 0&&(L==="instanceMatrix"&&H.instanceMatrix&&(K=H.instanceMatrix),L==="instanceColor"&&H.instanceColor&&(K=H.instanceColor));const ie={};ie.attribute=K,K&&K.data&&(ie.data=K.data),I[L]=ie,U++}u.attributes=I,u.attributesNum=U,u.index=$}function g(){const H=u.newAttributes;for(let G=0,Q=H.length;G<Q;G++)H[G]=0}function x(H){M(H,0)}function M(H,G){const Q=u.newAttributes,$=u.enabledAttributes,I=u.attributeDivisors;Q[H]=1,$[H]===0&&(t.enableVertexAttribArray(H),$[H]=1),I[H]!==G&&((r.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,G),I[H]=G)}function b(){const H=u.newAttributes,G=u.enabledAttributes;for(let Q=0,$=G.length;Q<$;Q++)G[Q]!==H[Q]&&(t.disableVertexAttribArray(Q),G[Q]=0)}function C(H,G,Q,$,I,B,U){U===!0?t.vertexAttribIPointer(H,G,Q,I,B):t.vertexAttribPointer(H,G,Q,$,I,B)}function R(H,G,Q,$){if(r.isWebGL2===!1&&(H.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const I=$.attributes,B=Q.getAttributes(),U=G.defaultAttributeValues;for(const te in B){const L=B[te];if(L.location>=0){let Z=I[te];if(Z===void 0&&(te==="instanceMatrix"&&H.instanceMatrix&&(Z=H.instanceMatrix),te==="instanceColor"&&H.instanceColor&&(Z=H.instanceColor)),Z!==void 0){const K=Z.normalized,ie=Z.itemSize,se=n.get(Z);if(se===void 0)continue;const ve=se.buffer,Ie=se.type,be=se.bytesPerElement,vt=r.isWebGL2===!0&&(Ie===t.INT||Ie===t.UNSIGNED_INT||Z.gpuType===yM);if(Z.isInterleavedBufferAttribute){const Ge=Z.data,O=Ge.stride,Dt=Z.offset;if(Ge.isInstancedInterleavedBuffer){for(let Te=0;Te<L.locationSize;Te++)M(L.location+Te,Ge.meshPerAttribute);H.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let Te=0;Te<L.locationSize;Te++)x(L.location+Te);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Te=0;Te<L.locationSize;Te++)C(L.location+Te,ie/L.locationSize,Ie,K,O*be,(Dt+ie/L.locationSize*Te)*be,vt)}else{if(Z.isInstancedBufferAttribute){for(let Ge=0;Ge<L.locationSize;Ge++)M(L.location+Ge,Z.meshPerAttribute);H.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ge=0;Ge<L.locationSize;Ge++)x(L.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Ge=0;Ge<L.locationSize;Ge++)C(L.location+Ge,ie/L.locationSize,Ie,K,ie*be,ie/L.locationSize*Ge*be,vt)}}else if(U!==void 0){const K=U[te];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(L.location,K);break;case 3:t.vertexAttrib3fv(L.location,K);break;case 4:t.vertexAttrib4fv(L.location,K);break;default:t.vertexAttrib1fv(L.location,K)}}}}b()}function S(){J();for(const H in s){const G=s[H];for(const Q in G){const $=G[Q];for(const I in $)y($[I].object),delete $[I];delete G[Q]}delete s[H]}}function T(H){if(s[H.id]===void 0)return;const G=s[H.id];for(const Q in G){const $=G[Q];for(const I in $)y($[I].object),delete $[I];delete G[Q]}delete s[H.id]}function X(H){for(const G in s){const Q=s[G];if(Q[H.id]===void 0)continue;const $=Q[H.id];for(const I in $)y($[I].object),delete $[I];delete Q[H.id]}}function J(){F(),c=!0,u!==l&&(u=l,p(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:J,resetDefaultState:F,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:X,initAttributes:g,enableAttribute:x,disableUnusedAttributes:b}}function l4(t,e,n,r){const i=r.isWebGL2;let a;function o(u){a=u}function s(u,c){t.drawArrays(a,u,c),n.update(c,a,1)}function l(u,c,f){if(f===0)return;let h,p;if(i)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](a,u,c,f),n.update(c,a,f)}this.setMode=o,this.render=s,this.renderInstances=l}function u4(t,e,n){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let s=n.precision!==void 0?n.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,x=o||e.has("OES_texture_float"),M=g&&x,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:b}}function c4(t){const e=this;let n=null,r=0,i=!1,a=!1;const o=new Hi,s=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||r!==0||i;return i=h,r=f.length,p},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,p){const y=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!i||y===null||y.length===0||a&&!m)a?c(null):u();else{const v=a?0:r,g=v*4;let x=d.clippingState||null;l.value=x,x=c(y,h,g,p);for(let M=0;M!==g;++M)x[M]=n[M];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function c(f,h,p,y){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,y!==!0||m===null){const d=p+_*4,v=h.matrixWorldInverse;s.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,x=p;g!==_;++g,x+=4)o.copy(f[g]).applyMatrix4(v,s),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function f4(t){let e=new WeakMap;function n(o,s){return s===dp?o.mapping=Eo:s===hp&&(o.mapping=Mo),o}function r(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===dp||s===hp)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new AU(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",i),n(u.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class d4 extends UM{constructor(e=-1,n=1,r=1,i=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=r-e,o=r+e,s=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ja=4,My=[.125,.215,.35,.446,.526,.582],Wi=20,jd=new d4,wy=new rt;let Xd=null;const Gi=(1+Math.sqrt(5))/2,Fa=1/Gi,Ty=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Gi,Fa),new k(0,Gi,-Fa),new k(Fa,0,Gi),new k(-Fa,0,Gi),new k(Gi,Fa,0),new k(-Gi,Fa,0)];class by{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){Xd=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ry(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd),e.scissorTest=!1,xu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Eo||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:$s,format:Qn,colorSpace:_r,depthBuffer:!1},i=Ay(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ay(e,n,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h4(a)),this._blurMaterial=p4(a,e,n)}return i}_compileMaterial(e){const n=new on(this._lodPlanes[0],e);this._renderer.compile(n,jd)}_sceneToCubeUV(e,n,r,i){const s=new In(90,1,n,r),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(wy),c.toneMapping=Ur,c.autoClear=!1;const p=new ri({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),y=new on(new pl,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(wy),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(s.up.set(0,l[d],0),s.lookAt(u[d],0,0)):v===1?(s.up.set(0,0,l[d]),s.lookAt(0,u[d],0)):(s.up.set(0,l[d],0),s.lookAt(0,0,u[d]));const g=this._cubeSize;xu(i,v*g,d>2?g:0,g,g),c.setRenderTarget(i),_&&c.render(y,s),c.render(e,s)}y.geometry.dispose(),y.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===Eo||e.mapping===Mo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ry()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cy());const a=i?this._cubemapMaterial:this._equirectMaterial,o=new on(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;xu(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(o,jd)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ty[(i-1)%Ty.length];this._blur(e,i-1,i,a,o)}n.autoClear=r}_blur(e,n,r,i,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,r,i,"latitudinal",a),this._halfBlur(o,e,r,r,i,"longitudinal",a)}_halfBlur(e,n,r,i,a,o,s){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new on(this._lodPlanes[i],u),h=u.uniforms,p=this._sizeLods[r]-1,y=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Wi-1),_=a/y,m=isFinite(a)?1+Math.floor(c*_):Wi;m>Wi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const d=[];let v=0;for(let C=0;C<Wi;++C){const R=C/_,S=Math.exp(-R*R/2);d.push(S),C===0?v+=S:C<m&&(v+=2*S)}for(let C=0;C<d.length;C++)d[C]=d[C]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:g}=this;h.dTheta.value=y,h.mipInt.value=g-r;const x=this._sizeLods[i],M=3*x*(i>g-Ja?i-g+Ja:0),b=4*(this._cubeSize-x);xu(n,M,b,3*x,2*x),l.setRenderTarget(n),l.render(f,jd)}}function h4(t){const e=[],n=[],r=[];let i=t;const a=t-Ja+1+My.length;for(let o=0;o<a;o++){const s=Math.pow(2,i);n.push(s);let l=1/s;o>t-Ja?l=My[o-t+Ja-1]:o===0&&(l=0),r.push(l);const u=1/(s-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,y=6,_=3,m=2,d=1,v=new Float32Array(_*y*p),g=new Float32Array(m*y*p),x=new Float32Array(d*y*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,R=b>2?0:-1,S=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];v.set(S,_*y*b),g.set(h,m*y*b);const T=[b,b,b,b,b,b];x.set(T,d*y*b)}const M=new ga;M.setAttribute("position",new gr(v,_)),M.setAttribute("uv",new gr(g,m)),M.setAttribute("faceIndex",new gr(x,d)),e.push(M),i>Ja&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Ay(t,e,n){const r=new fa(t,e,n);return r.texture.mapping=lf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xu(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function p4(t,e,n){const r=new Float32Array(Wi),i=new k(0,1,0);return new da({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Cy(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ry(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function xv(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function m4(t){let e=new WeakMap,n=null;function r(s){if(s&&s.isTexture){const l=s.mapping,u=l===dp||l===hp,c=l===Eo||l===Mo;if(u||c)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return n===null&&(n=new by(t)),f=u?n.fromEquirectangular(s,f):n.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(u&&f&&f.height>0||c&&f&&i(f)){n===null&&(n=new by(t));const h=u?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",a),h.texture}else return null}}}return s}function i(s){let l=0;const u=6;for(let c=0;c<u;c++)s[c]!==void 0&&l++;return l===u}function a(s){const l=s.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function v4(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const i=n(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function g4(t,e,n,r){const i={},a=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const _=h.morphAttributes[y];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete i[h.id];const p=a.get(h);p&&(e.remove(p),a.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function s(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const y in p){const _=p[y];for(let m=0,d=_.length;m<d;m++)e.update(_[m],t.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,y=f.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let g=0,x=v.length;g<x;g+=3){const M=v[g+0],b=v[g+1],C=v[g+2];h.push(M,b,b,C,C,M)}}else{const v=y.array;_=y.version;for(let g=0,x=v.length/3-1;g<x;g+=3){const M=g+0,b=g+1,C=g+2;h.push(M,b,b,C,C,M)}}const m=new(AM(h)?OM:DM)(h,1);m.version=_;const d=a.get(f);d&&e.remove(d),a.set(f,m)}function c(f){const h=a.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:c}}function _4(t,e,n,r){const i=r.isWebGL2;let a;function o(h){a=h}let s,l;function u(h){s=h.type,l=h.bytesPerElement}function c(h,p){t.drawElements(a,p,s,h*l),n.update(p,a,1)}function f(h,p,y){if(y===0)return;let _,m;if(i)_=t,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](a,p,s,h*l,y),n.update(p,a,y)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function y4(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,o,s){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=s*(a/3);break;case t.LINES:n.lines+=s*(a/2);break;case t.LINE_STRIP:n.lines+=s*(a-1);break;case t.LINE_LOOP:n.lines+=s*a;break;case t.POINTS:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function x4(t,e){return t[0]-e[0]}function S4(t,e){return Math.abs(e[1])-Math.abs(t[1])}function E4(t,e,n){const r={},i=new Float32Array(8),a=new WeakMap,o=new Ut,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=y!==void 0?y.length:0;let m=a.get(c);if(m===void 0||m.count!==_){let G=function(){F.dispose(),a.delete(c),c.removeEventListener("dispose",G)};var p=G;m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),M===!0&&(S=3);let T=c.attributes.position.count*S,X=1;T>e.maxTextureSize&&(X=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const J=new Float32Array(T*X*4*_),F=new PM(J,T,X,_);F.type=ci,F.needsUpdate=!0;const H=S*4;for(let Q=0;Q<_;Q++){const $=b[Q],I=C[Q],B=R[Q],U=T*X*4*Q;for(let te=0;te<$.count;te++){const L=te*H;g===!0&&(o.fromBufferAttribute($,te),J[U+L+0]=o.x,J[U+L+1]=o.y,J[U+L+2]=o.z,J[U+L+3]=0),x===!0&&(o.fromBufferAttribute(I,te),J[U+L+4]=o.x,J[U+L+5]=o.y,J[U+L+6]=o.z,J[U+L+7]=0),M===!0&&(o.fromBufferAttribute(B,te),J[U+L+8]=o.x,J[U+L+9]=o.y,J[U+L+10]=o.z,J[U+L+11]=B.itemSize===4?o.w:1)}}m={count:_,texture:F,size:new qe(T,X)},a.set(c,m),c.addEventListener("dispose",G)}let d=0;for(let g=0;g<h.length;g++)d+=h[g];const v=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const y=h===void 0?0:h.length;let _=r[c.id];if(_===void 0||_.length!==y){_=[];for(let x=0;x<y;x++)_[x]=[x,0];r[c.id]=_}for(let x=0;x<y;x++){const M=_[x];M[0]=x,M[1]=h[x]}_.sort(S4);for(let x=0;x<8;x++)x<y&&_[x][1]?(s[x][0]=_[x][0],s[x][1]=_[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(x4);const m=c.morphAttributes.position,d=c.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const M=s[x],b=M[0],C=M[1];b!==Number.MAX_SAFE_INTEGER&&C?(m&&c.getAttribute("morphTarget"+x)!==m[b]&&c.setAttribute("morphTarget"+x,m[b]),d&&c.getAttribute("morphNormal"+x)!==d[b]&&c.setAttribute("morphNormal"+x,d[b]),i[x]=C,v+=C):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),d&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),i[x]=0)}const g=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",i)}}return{update:l}}function M4(t,e,n,r){let i=new WeakMap;function a(l){const u=r.render.frame,c=l.geometry,f=e.get(l,c);return i.get(f)!==u&&(e.update(f),i.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),f}function o(){i=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const BM=new dn,HM=new PM,GM=new fU,VM=new FM,Py=[],Ly=[],Iy=new Float32Array(16),Dy=new Float32Array(9),Oy=new Float32Array(4);function zo(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let a=Py[i];if(a===void 0&&(a=new Float32Array(i),Py[i]=a),e!==0){r.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function ff(t,e){let n=Ly[e];n===void 0&&(n=new Int32Array(e),Ly[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function w4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function T4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function b4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function A4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function C4(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,r))return;Oy.set(r),t.uniformMatrix2fv(this.addr,!1,Oy),Tt(n,r)}}function R4(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,r))return;Dy.set(r),t.uniformMatrix3fv(this.addr,!1,Dy),Tt(n,r)}}function P4(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,r))return;Iy.set(r),t.uniformMatrix4fv(this.addr,!1,Iy),Tt(n,r)}}function L4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function I4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function D4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function O4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function N4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function U4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function F4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function k4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function z4(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2D(e||BM,i)}function B4(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||GM,i)}function H4(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||VM,i)}function G4(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||HM,i)}function V4(t){switch(t){case 5126:return w4;case 35664:return T4;case 35665:return b4;case 35666:return A4;case 35674:return C4;case 35675:return R4;case 35676:return P4;case 5124:case 35670:return L4;case 35667:case 35671:return I4;case 35668:case 35672:return D4;case 35669:case 35673:return O4;case 5125:return N4;case 36294:return U4;case 36295:return F4;case 36296:return k4;case 35678:case 36198:case 36298:case 36306:case 35682:return z4;case 35679:case 36299:case 36307:return B4;case 35680:case 36300:case 36308:case 36293:return H4;case 36289:case 36303:case 36311:case 36292:return G4}}function W4(t,e){t.uniform1fv(this.addr,e)}function $4(t,e){const n=zo(e,this.size,2);t.uniform2fv(this.addr,n)}function j4(t,e){const n=zo(e,this.size,3);t.uniform3fv(this.addr,n)}function X4(t,e){const n=zo(e,this.size,4);t.uniform4fv(this.addr,n)}function Y4(t,e){const n=zo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function q4(t,e){const n=zo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function K4(t,e){const n=zo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Z4(t,e){t.uniform1iv(this.addr,e)}function Q4(t,e){t.uniform2iv(this.addr,e)}function J4(t,e){t.uniform3iv(this.addr,e)}function ez(t,e){t.uniform4iv(this.addr,e)}function tz(t,e){t.uniform1uiv(this.addr,e)}function nz(t,e){t.uniform2uiv(this.addr,e)}function rz(t,e){t.uniform3uiv(this.addr,e)}function iz(t,e){t.uniform4uiv(this.addr,e)}function az(t,e,n){const r=this.cache,i=e.length,a=ff(n,i);wt(r,a)||(t.uniform1iv(this.addr,a),Tt(r,a));for(let o=0;o!==i;++o)n.setTexture2D(e[o]||BM,a[o])}function oz(t,e,n){const r=this.cache,i=e.length,a=ff(n,i);wt(r,a)||(t.uniform1iv(this.addr,a),Tt(r,a));for(let o=0;o!==i;++o)n.setTexture3D(e[o]||GM,a[o])}function sz(t,e,n){const r=this.cache,i=e.length,a=ff(n,i);wt(r,a)||(t.uniform1iv(this.addr,a),Tt(r,a));for(let o=0;o!==i;++o)n.setTextureCube(e[o]||VM,a[o])}function lz(t,e,n){const r=this.cache,i=e.length,a=ff(n,i);wt(r,a)||(t.uniform1iv(this.addr,a),Tt(r,a));for(let o=0;o!==i;++o)n.setTexture2DArray(e[o]||HM,a[o])}function uz(t){switch(t){case 5126:return W4;case 35664:return $4;case 35665:return j4;case 35666:return X4;case 35674:return Y4;case 35675:return q4;case 35676:return K4;case 5124:case 35670:return Z4;case 35667:case 35671:return Q4;case 35668:case 35672:return J4;case 35669:case 35673:return ez;case 5125:return tz;case 36294:return nz;case 36295:return rz;case 36296:return iz;case 35678:case 36198:case 36298:case 36306:case 35682:return az;case 35679:case 36299:case 36307:return oz;case 35680:case 36300:case 36308:case 36293:return sz;case 36289:case 36303:case 36311:case 36292:return lz}}class cz{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.setValue=V4(n.type)}}class fz{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.size=n.size,this.setValue=uz(n.type)}}class dz{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let a=0,o=i.length;a!==o;++a){const s=i[a];s.setValue(e,n[s.id],r)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function Ny(t,e){t.seq.push(e),t.map[e.id]=e}function hz(t,e,n){const r=t.name,i=r.length;for(Yd.lastIndex=0;;){const a=Yd.exec(r),o=Yd.lastIndex;let s=a[1];const l=a[2]==="]",u=a[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===i){Ny(n,u===void 0?new cz(s,t,e):new fz(s,t,e));break}else{let f=n.map[s];f===void 0&&(f=new dz(s),Ny(n,f)),n=f}}}class Ku{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const a=e.getActiveUniform(n,i),o=e.getUniformLocation(n,a.name);hz(a,o,this)}}setValue(e,n,r,i){const a=this.map[n];a!==void 0&&a.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,a=e.length;i!==a;++i){const o=e[i];o.id in n&&r.push(o)}return r}}function Uy(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}let pz=0;function mz(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let o=i;o<a;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return r.join(`
`)}function vz(t){switch(t){case _r:return["Linear","( value )"];case Ne:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Fy(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+mz(t.getShaderSource(e),o)}else return i}function gz(t,e){const n=vz(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function _z(t,e){let n;switch(e){case CN:n="Linear";break;case RN:n="Reinhard";break;case PN:n="OptimizedCineon";break;case LN:n="ACESFilmic";break;case IN:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function yz(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cs).join(`
`)}function xz(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function Sz(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const a=t.getActiveAttrib(e,i),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),n[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function cs(t){return t!==""}function ky(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zy(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ez=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(t){return t.replace(Ez,Mz)}function Mz(t,e){const n=Ue[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return yp(n)}const wz=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function By(t){return t.replace(wz,Tz)}function Tz(t,e,n,r){let i="";for(let a=parseInt(e);a<parseInt(n);a++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Hy(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bz(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===pM?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===oN?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ar&&(e="SHADOWMAP_TYPE_VSM"),e}function Az(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Eo:case Mo:e="ENVMAP_TYPE_CUBE";break;case lf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cz(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Mo:e="ENVMAP_MODE_REFRACTION";break}return e}function Rz(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case gM:e="ENVMAP_BLENDING_MULTIPLY";break;case bN:e="ENVMAP_BLENDING_MIX";break;case AN:e="ENVMAP_BLENDING_ADD";break}return e}function Pz(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function Lz(t,e,n,r){const i=t.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=bz(n),u=Az(n),c=Cz(n),f=Rz(n),h=Pz(n),p=n.isWebGL2?"":yz(n),y=xz(a),_=i.createProgram();let m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(cs).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(cs).join(`
`),d.length>0&&(d+=`
`)):(m=[Hy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),d=[p,Hy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ur?"#define TONE_MAPPING":"",n.toneMapping!==Ur?Ue.tonemapping_pars_fragment:"",n.toneMapping!==Ur?_z("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,gz("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cs).join(`
`)),o=yp(o),o=ky(o,n),o=zy(o,n),s=yp(s),s=ky(s,n),s=zy(s,n),o=By(o),s=By(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===oy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===oy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=v+m+o,x=v+d+s,M=Uy(i,i.VERTEX_SHADER,g),b=Uy(i,i.FRAGMENT_SHADER,x);if(i.attachShader(_,M),i.attachShader(_,b),n.index0AttributeName!==void 0?i.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),t.debug.checkShaderErrors){const S=i.getProgramInfoLog(_).trim(),T=i.getShaderInfoLog(M).trim(),X=i.getShaderInfoLog(b).trim();let J=!0,F=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,_,M,b);else{const H=Fy(i,M,"vertex"),G=Fy(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+H+`
`+G)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||X==="")&&(F=!1);F&&(this.diagnostics={runnable:J,programLog:S,vertexShader:{log:T,prefix:m},fragmentShader:{log:X,prefix:d}})}i.deleteShader(M),i.deleteShader(b);let C;this.getUniforms=function(){return C===void 0&&(C=new Ku(i,_)),C};let R;return this.getAttributes=function(){return R===void 0&&(R=Sz(i,_)),R},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pz++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}let Iz=0;class Dz{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),a=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new Oz(e),n.set(e,r)),r}}class Oz{constructor(e){this.id=Iz++,this.code=e,this.usedTimes=0}}function Nz(t,e,n,r,i,a,o){const s=new yv,l=new Dz,u=[],c=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,T,X,J,F){const H=J.fog,G=F.geometry,Q=S.isMeshStandardMaterial?J.environment:null,$=(S.isMeshStandardMaterial?n:e).get(S.envMap||Q),I=$&&$.mapping===lf?$.image.height:null,B=y[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const U=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,te=U!==void 0?U.length:0;let L=0;G.morphAttributes.position!==void 0&&(L=1),G.morphAttributes.normal!==void 0&&(L=2),G.morphAttributes.color!==void 0&&(L=3);let Z,K,ie,se;if(B){const gt=fr[B];Z=gt.vertexShader,K=gt.fragmentShader}else Z=S.vertexShader,K=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),se=l.getFragmentShaderID(S);const ve=t.getRenderTarget(),Ie=F.isInstancedMesh===!0,be=!!S.map,vt=!!S.matcap,Ge=!!$,O=!!S.aoMap,Dt=!!S.lightMap,Te=!!S.bumpMap,ke=!!S.normalMap,Ce=!!S.displacementMap,Je=!!S.emissiveMap,Ve=!!S.metalnessMap,De=!!S.roughnessMap,Ke=S.anisotropy>0,Ot=S.clearcoat>0,Ht=S.iridescence>0,A=S.sheen>0,E=S.transmission>0,W=Ke&&!!S.anisotropyMap,ne=Ot&&!!S.clearcoatMap,re=Ot&&!!S.clearcoatNormalMap,ue=Ot&&!!S.clearcoatRoughnessMap,xe=Ht&&!!S.iridescenceMap,ce=Ht&&!!S.iridescenceThicknessMap,Y=A&&!!S.sheenColorMap,Se=A&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,we=!!S.specularColorMap,ge=!!S.specularIntensityMap,_e=E&&!!S.transmissionMap,ze=E&&!!S.thicknessMap,Ze=!!S.gradientMap,P=!!S.alphaMap,le=S.alphaTest>0,z=!!S.extensions,ae=!!G.attributes.uv1,fe=!!G.attributes.uv2,Xe=!!G.attributes.uv3;return{isWebGL2:c,shaderID:B,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:K,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:_r,map:be,matcap:vt,envMap:Ge,envMapMode:Ge&&$.mapping,envMapCubeUVHeight:I,aoMap:O,lightMap:Dt,bumpMap:Te,normalMap:ke,displacementMap:h&&Ce,emissiveMap:Je,normalMapObjectSpace:ke&&S.normalMapType===jN,normalMapTangentSpace:ke&&S.normalMapType===$N,metalnessMap:Ve,roughnessMap:De,anisotropy:Ke,anisotropyMap:W,clearcoat:Ot,clearcoatMap:ne,clearcoatNormalMap:re,clearcoatRoughnessMap:ue,iridescence:Ht,iridescenceMap:xe,iridescenceThicknessMap:ce,sheen:A,sheenColorMap:Y,sheenRoughnessMap:Se,specularMap:Ee,specularColorMap:we,specularIntensityMap:ge,transmission:E,transmissionMap:_e,thicknessMap:ze,gradientMap:Ze,opaque:S.transparent===!1&&S.blending===co,alphaMap:P,alphaTest:le,combine:S.combine,mapUv:be&&_(S.map.channel),aoMapUv:O&&_(S.aoMap.channel),lightMapUv:Dt&&_(S.lightMap.channel),bumpMapUv:Te&&_(S.bumpMap.channel),normalMapUv:ke&&_(S.normalMap.channel),displacementMapUv:Ce&&_(S.displacementMap.channel),emissiveMapUv:Je&&_(S.emissiveMap.channel),metalnessMapUv:Ve&&_(S.metalnessMap.channel),roughnessMapUv:De&&_(S.roughnessMap.channel),anisotropyMapUv:W&&_(S.anisotropyMap.channel),clearcoatMapUv:ne&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(S.sheenRoughnessMap.channel),specularMapUv:Ee&&_(S.specularMap.channel),specularColorMapUv:we&&_(S.specularColorMap.channel),specularIntensityMapUv:ge&&_(S.specularIntensityMap.channel),transmissionMapUv:_e&&_(S.transmissionMap.channel),thicknessMapUv:ze&&_(S.thicknessMap.channel),alphaMapUv:P&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ke||Ke),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:fe,vertexUv3s:Xe,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(be||P),fog:!!H,useFog:S.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:L,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:Ur,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Lr,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:z&&S.extensions.derivatives===!0,extensionFragDepth:z&&S.extensions.fragDepth===!0,extensionDrawBuffers:z&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:z&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||r.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const X in S.defines)T.push(X),T.push(S.defines[X]);return S.isRawShaderMaterial===!1&&(v(T,S),g(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function v(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function g(S,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),T.anisotropy&&s.enable(17),S.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),S.push(s.mask)}function x(S){const T=y[S.type];let X;if(T){const J=fr[T];X=MU.clone(J.uniforms)}else X=S.uniforms;return X}function M(S,T){let X;for(let J=0,F=u.length;J<F;J++){const H=u[J];if(H.cacheKey===T){X=H,++X.usedTimes;break}}return X===void 0&&(X=new Lz(t,T,S,a),u.push(X)),X}function b(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:M,releaseProgram:b,releaseShaderCache:C,programs:u,dispose:R}}function Uz(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function r(a,o,s){t.get(a)[o]=s}function i(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:i}}function Fz(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Vy(){const t=[];let e=0;const n=[],r=[],i=[];function a(){e=0,n.length=0,r.length=0,i.length=0}function o(f,h,p,y,_,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:y,renderOrder:f.renderOrder,z:_,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=y,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function s(f,h,p,y,_,m){const d=o(f,h,p,y,_,m);p.transmission>0?r.push(d):p.transparent===!0?i.push(d):n.push(d)}function l(f,h,p,y,_,m){const d=o(f,h,p,y,_,m);p.transmission>0?r.unshift(d):p.transparent===!0?i.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||Fz),r.length>1&&r.sort(h||Gy),i.length>1&&i.sort(h||Gy)}function c(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:l,finish:c,sort:u}}function kz(){let t=new WeakMap;function e(r,i){const a=t.get(r);let o;return a===void 0?(o=new Vy,t.set(r,[o])):i>=a.length?(o=new Vy,a.push(o)):o=a[i],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function zz(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new rt};break;case"SpotLight":n={position:new k,direction:new k,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function Bz(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Hz=0;function Gz(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Vz(t,e){const n=new zz,r=Bz(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new k);const a=new k,o=new kt,s=new kt;function l(c,f){let h=0,p=0,y=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let _=0,m=0,d=0,v=0,g=0,x=0,M=0,b=0,C=0,R=0;c.sort(Gz);const S=f===!0?Math.PI:1;for(let X=0,J=c.length;X<J;X++){const F=c[X],H=F.color,G=F.intensity,Q=F.distance,$=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=H.r*G*S,p+=H.g*G*S,y+=H.b*G*S;else if(F.isLightProbe)for(let I=0;I<9;I++)i.probe[I].addScaledVector(F.sh.coefficients[I],G);else if(F.isDirectionalLight){const I=n.get(F);if(I.color.copy(F.color).multiplyScalar(F.intensity*S),F.castShadow){const B=F.shadow,U=r.get(F);U.shadowBias=B.bias,U.shadowNormalBias=B.normalBias,U.shadowRadius=B.radius,U.shadowMapSize=B.mapSize,i.directionalShadow[_]=U,i.directionalShadowMap[_]=$,i.directionalShadowMatrix[_]=F.shadow.matrix,x++}i.directional[_]=I,_++}else if(F.isSpotLight){const I=n.get(F);I.position.setFromMatrixPosition(F.matrixWorld),I.color.copy(H).multiplyScalar(G*S),I.distance=Q,I.coneCos=Math.cos(F.angle),I.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),I.decay=F.decay,i.spot[d]=I;const B=F.shadow;if(F.map&&(i.spotLightMap[C]=F.map,C++,B.updateMatrices(F),F.castShadow&&R++),i.spotLightMatrix[d]=B.matrix,F.castShadow){const U=r.get(F);U.shadowBias=B.bias,U.shadowNormalBias=B.normalBias,U.shadowRadius=B.radius,U.shadowMapSize=B.mapSize,i.spotShadow[d]=U,i.spotShadowMap[d]=$,b++}d++}else if(F.isRectAreaLight){const I=n.get(F);I.color.copy(H).multiplyScalar(G),I.halfWidth.set(F.width*.5,0,0),I.halfHeight.set(0,F.height*.5,0),i.rectArea[v]=I,v++}else if(F.isPointLight){const I=n.get(F);if(I.color.copy(F.color).multiplyScalar(F.intensity*S),I.distance=F.distance,I.decay=F.decay,F.castShadow){const B=F.shadow,U=r.get(F);U.shadowBias=B.bias,U.shadowNormalBias=B.normalBias,U.shadowRadius=B.radius,U.shadowMapSize=B.mapSize,U.shadowCameraNear=B.camera.near,U.shadowCameraFar=B.camera.far,i.pointShadow[m]=U,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=F.shadow.matrix,M++}i.point[m]=I,m++}else if(F.isHemisphereLight){const I=n.get(F);I.skyColor.copy(F.color).multiplyScalar(G*S),I.groundColor.copy(F.groundColor).multiplyScalar(G*S),i.hemi[g]=I,g++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=y;const T=i.hash;(T.directionalLength!==_||T.pointLength!==m||T.spotLength!==d||T.rectAreaLength!==v||T.hemiLength!==g||T.numDirectionalShadows!==x||T.numPointShadows!==M||T.numSpotShadows!==b||T.numSpotMaps!==C)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=v,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,T.directionalLength=_,T.pointLength=m,T.spotLength=d,T.rectAreaLength=v,T.hemiLength=g,T.numDirectionalShadows=x,T.numPointShadows=M,T.numSpotShadows=b,T.numSpotMaps=C,i.version=Hz++)}function u(c,f){let h=0,p=0,y=0,_=0,m=0;const d=f.matrixWorldInverse;for(let v=0,g=c.length;v<g;v++){const x=c[v];if(x.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(d),h++}else if(x.isSpotLight){const M=i.spot[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(d),y++}else if(x.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),s.identity(),o.copy(x.matrixWorld),o.premultiply(d),s.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),_++}else if(x.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:i}}function Wy(t,e){const n=new Vz(t,e),r=[],i=[];function a(){r.length=0,i.length=0}function o(f){r.push(f)}function s(f){i.push(f)}function l(f){n.setup(r,f)}function u(f){n.setupView(r,f)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s}}function Wz(t,e){let n=new WeakMap;function r(a,o=0){const s=n.get(a);let l;return s===void 0?(l=new Wy(t,e),n.set(a,[l])):o>=s.length?(l=new Wy(t,e),s.push(l)):l=s[o],l}function i(){n=new WeakMap}return{get:r,dispose:i}}class $z extends cf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VN,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jz extends cf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xz=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yz=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qz(t,e,n){let r=new kM;const i=new qe,a=new qe,o=new Ut,s=new $z({depthPacking:WN}),l=new jz,u={},c=n.maxTextureSize,f={[wi]:fn,[fn]:wi,[Lr]:Lr},h=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Xz,fragmentShader:Yz}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new ga;y.setAttribute("position",new gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new on(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pM;let d=this.type;this.render=function(M,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const R=t.getRenderTarget(),S=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),X=t.state;X.setBlending(xi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const J=d!==Ar&&this.type===Ar,F=d===Ar&&this.type!==Ar;for(let H=0,G=M.length;H<G;H++){const Q=M[H],$=Q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const I=$.getFrameExtents();if(i.multiply(I),a.copy($.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(a.x=Math.floor(c/I.x),i.x=a.x*I.x,$.mapSize.x=a.x),i.y>c&&(a.y=Math.floor(c/I.y),i.y=a.y*I.y,$.mapSize.y=a.y)),$.map===null||J===!0||F===!0){const U=this.type!==Ar?{minFilter:Qt,magFilter:Qt}:{};$.map!==null&&$.map.dispose(),$.map=new fa(i.x,i.y,U),$.map.texture.name=Q.name+".shadowMap",$.camera.updateProjectionMatrix()}t.setRenderTarget($.map),t.clear();const B=$.getViewportCount();for(let U=0;U<B;U++){const te=$.getViewport(U);o.set(a.x*te.x,a.y*te.y,a.x*te.z,a.y*te.w),X.viewport(o),$.updateMatrices(Q,U),r=$.getFrustum(),x(b,C,$.camera,Q,this.type)}$.isPointLightShadow!==!0&&this.type===Ar&&v($,C),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(R,S,T)};function v(M,b){const C=e.update(_);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new fa(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(b,null,C,h,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(b,null,C,p,_,null)}function g(M,b,C,R){let S=null;const T=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)S=T;else if(S=C.isPointLight===!0?l:s,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const X=S.uuid,J=b.uuid;let F=u[X];F===void 0&&(F={},u[X]=F);let H=F[J];H===void 0&&(H=S.clone(),F[J]=H),S=H}if(S.visible=b.visible,S.wireframe=b.wireframe,R===Ar?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:f[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=t.properties.get(S);X.light=C}return S}function x(M,b,C,R,S){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Ar)&&(!M.frustumCulled||r.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const J=e.update(M),F=M.material;if(Array.isArray(F)){const H=J.groups;for(let G=0,Q=H.length;G<Q;G++){const $=H[G],I=F[$.materialIndex];if(I&&I.visible){const B=g(M,I,R,S);t.renderBufferDirect(C,null,J,B,M,$)}}}else if(F.visible){const H=g(M,F,R,S);t.renderBufferDirect(C,null,J,H,M,null)}}const X=M.children;for(let J=0,F=X.length;J<F;J++)x(X[J],b,C,R,S)}}function Kz(t,e,n){const r=n.isWebGL2;function i(){let P=!1;const le=new Ut;let z=null;const ae=new Ut(0,0,0,0);return{setMask:function(fe){z!==fe&&!P&&(t.colorMask(fe,fe,fe,fe),z=fe)},setLocked:function(fe){P=fe},setClear:function(fe,Xe,ct,gt,Ii){Ii===!0&&(fe*=gt,Xe*=gt,ct*=gt),le.set(fe,Xe,ct,gt),ae.equals(le)===!1&&(t.clearColor(fe,Xe,ct,gt),ae.copy(le))},reset:function(){P=!1,z=null,ae.set(-1,0,0,0)}}}function a(){let P=!1,le=null,z=null,ae=null;return{setTest:function(fe){fe?ve(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(fe){le!==fe&&!P&&(t.depthMask(fe),le=fe)},setFunc:function(fe){if(z!==fe){switch(fe){case yN:t.depthFunc(t.NEVER);break;case xN:t.depthFunc(t.ALWAYS);break;case SN:t.depthFunc(t.LESS);break;case fp:t.depthFunc(t.LEQUAL);break;case EN:t.depthFunc(t.EQUAL);break;case MN:t.depthFunc(t.GEQUAL);break;case wN:t.depthFunc(t.GREATER);break;case TN:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}z=fe}},setLocked:function(fe){P=fe},setClear:function(fe){ae!==fe&&(t.clearDepth(fe),ae=fe)},reset:function(){P=!1,le=null,z=null,ae=null}}}function o(){let P=!1,le=null,z=null,ae=null,fe=null,Xe=null,ct=null,gt=null,Ii=null;return{setTest:function(ft){P||(ft?ve(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(ft){le!==ft&&!P&&(t.stencilMask(ft),le=ft)},setFunc:function(ft,ar,Yt){(z!==ft||ae!==ar||fe!==Yt)&&(t.stencilFunc(ft,ar,Yt),z=ft,ae=ar,fe=Yt)},setOp:function(ft,ar,Yt){(Xe!==ft||ct!==ar||gt!==Yt)&&(t.stencilOp(ft,ar,Yt),Xe=ft,ct=ar,gt=Yt)},setLocked:function(ft){P=ft},setClear:function(ft){Ii!==ft&&(t.clearStencil(ft),Ii=ft)},reset:function(){P=!1,le=null,z=null,ae=null,fe=null,Xe=null,ct=null,gt=null,Ii=null}}}const s=new i,l=new a,u=new o,c=new WeakMap,f=new WeakMap;let h={},p={},y=new WeakMap,_=[],m=null,d=!1,v=null,g=null,x=null,M=null,b=null,C=null,R=null,S=!1,T=null,X=null,J=null,F=null,H=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,$=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(I)[1]),Q=$>=1):I.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Q=$>=2);let B=null,U={};const te=t.getParameter(t.SCISSOR_BOX),L=t.getParameter(t.VIEWPORT),Z=new Ut().fromArray(te),K=new Ut().fromArray(L);function ie(P,le,z,ae){const fe=new Uint8Array(4),Xe=t.createTexture();t.bindTexture(P,Xe),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ct=0;ct<z;ct++)r&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(le+ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return Xe}const se={};se[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(se[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ve(t.DEPTH_TEST),l.setFunc(fp),Ce(!1),Je(R_),ve(t.CULL_FACE),Te(xi);function ve(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function Ie(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function be(P,le){return p[P]!==le?(t.bindFramebuffer(P,le),p[P]=le,r&&(P===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=le),P===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function vt(P,le){let z=_,ae=!1;if(P)if(z=y.get(le),z===void 0&&(z=[],y.set(le,z)),P.isWebGLMultipleRenderTargets){const fe=P.texture;if(z.length!==fe.length||z[0]!==t.COLOR_ATTACHMENT0){for(let Xe=0,ct=fe.length;Xe<ct;Xe++)z[Xe]=t.COLOR_ATTACHMENT0+Xe;z.length=fe.length,ae=!0}}else z[0]!==t.COLOR_ATTACHMENT0&&(z[0]=t.COLOR_ATTACHMENT0,ae=!0);else z[0]!==t.BACK&&(z[0]=t.BACK,ae=!0);ae&&(n.isWebGL2?t.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))}function Ge(P){return m!==P?(t.useProgram(P),m=P,!0):!1}const O={[za]:t.FUNC_ADD,[lN]:t.FUNC_SUBTRACT,[uN]:t.FUNC_REVERSE_SUBTRACT};if(r)O[D_]=t.MIN,O[O_]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(O[D_]=P.MIN_EXT,O[O_]=P.MAX_EXT)}const Dt={[cN]:t.ZERO,[fN]:t.ONE,[dN]:t.SRC_COLOR,[mM]:t.SRC_ALPHA,[_N]:t.SRC_ALPHA_SATURATE,[vN]:t.DST_COLOR,[pN]:t.DST_ALPHA,[hN]:t.ONE_MINUS_SRC_COLOR,[vM]:t.ONE_MINUS_SRC_ALPHA,[gN]:t.ONE_MINUS_DST_COLOR,[mN]:t.ONE_MINUS_DST_ALPHA};function Te(P,le,z,ae,fe,Xe,ct,gt){if(P===xi){d===!0&&(Ie(t.BLEND),d=!1);return}if(d===!1&&(ve(t.BLEND),d=!0),P!==sN){if(P!==v||gt!==S){if((g!==za||b!==za)&&(t.blendEquation(t.FUNC_ADD),g=za,b=za),gt)switch(P){case co:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case P_:t.blendFunc(t.ONE,t.ONE);break;case L_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case I_:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case co:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case P_:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case L_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case I_:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,M=null,C=null,R=null,v=P,S=gt}return}fe=fe||le,Xe=Xe||z,ct=ct||ae,(le!==g||fe!==b)&&(t.blendEquationSeparate(O[le],O[fe]),g=le,b=fe),(z!==x||ae!==M||Xe!==C||ct!==R)&&(t.blendFuncSeparate(Dt[z],Dt[ae],Dt[Xe],Dt[ct]),x=z,M=ae,C=Xe,R=ct),v=P,S=!1}function ke(P,le){P.side===Lr?Ie(t.CULL_FACE):ve(t.CULL_FACE);let z=P.side===fn;le&&(z=!z),Ce(z),P.blending===co&&P.transparent===!1?Te(xi):Te(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);const ae=P.stencilWrite;u.setTest(ae),ae&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),De(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(P){T!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),T=P)}function Je(P){P!==iN?(ve(t.CULL_FACE),P!==X&&(P===R_?t.cullFace(t.BACK):P===aN?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),X=P}function Ve(P){P!==J&&(Q&&t.lineWidth(P),J=P)}function De(P,le,z){P?(ve(t.POLYGON_OFFSET_FILL),(F!==le||H!==z)&&(t.polygonOffset(le,z),F=le,H=z)):Ie(t.POLYGON_OFFSET_FILL)}function Ke(P){P?ve(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function Ot(P){P===void 0&&(P=t.TEXTURE0+G-1),B!==P&&(t.activeTexture(P),B=P)}function Ht(P,le,z){z===void 0&&(B===null?z=t.TEXTURE0+G-1:z=B);let ae=U[z];ae===void 0&&(ae={type:void 0,texture:void 0},U[z]=ae),(ae.type!==P||ae.texture!==le)&&(B!==z&&(t.activeTexture(z),B=z),t.bindTexture(P,le||se[P]),ae.type=P,ae.texture=le)}function A(){const P=U[B];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function E(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(P){Z.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function ge(P){K.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),K.copy(P))}function _e(P,le){let z=f.get(le);z===void 0&&(z=new WeakMap,f.set(le,z));let ae=z.get(P);ae===void 0&&(ae=t.getUniformBlockIndex(le,P.name),z.set(P,ae))}function ze(P,le){const ae=f.get(le).get(P);c.get(le)!==ae&&(t.uniformBlockBinding(le,ae,P.__bindingPointIndex),c.set(le,ae))}function Ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),r===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},B=null,U={},p={},y=new WeakMap,_=[],m=null,d=!1,v=null,g=null,x=null,M=null,b=null,C=null,R=null,S=!1,T=null,X=null,J=null,F=null,H=null,Z.set(0,0,t.canvas.width,t.canvas.height),K.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:ve,disable:Ie,bindFramebuffer:be,drawBuffers:vt,useProgram:Ge,setBlending:Te,setMaterial:ke,setFlipSided:Ce,setCullFace:Je,setLineWidth:Ve,setPolygonOffset:De,setScissorTest:Ke,activeTexture:Ot,bindTexture:Ht,unbindTexture:A,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:Se,texImage3D:Ee,updateUBOMapping:_e,uniformBlockBinding:ze,texStorage2D:ce,texStorage3D:Y,texSubImage2D:ne,texSubImage3D:re,compressedTexSubImage2D:ue,compressedTexSubImage3D:xe,scissor:we,viewport:ge,reset:Ze}}function Zz(t,e,n,r,i,a,o){const s=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,c=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,E){return d?new OffscreenCanvas(A,E):js("canvas")}function g(A,E,W,ne){let re=1;if((A.width>ne||A.height>ne)&&(re=ne/Math.max(A.width,A.height)),re<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ue=E?_p:Math.floor,xe=ue(re*A.width),ce=ue(re*A.height);_===void 0&&(_=v(xe,ce));const Y=W?v(xe,ce):_;return Y.width=xe,Y.height=ce,Y.getContext("2d").drawImage(A,0,0,xe,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xe+"x"+ce+")."),Y}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return sy(A.width)&&sy(A.height)}function M(A){return s?!1:A.wrapS!==Zn||A.wrapT!==Zn||A.minFilter!==Qt&&A.minFilter!==Ln}function b(A,E){return A.generateMipmaps&&E&&A.minFilter!==Qt&&A.minFilter!==Ln}function C(A){t.generateMipmap(A)}function R(A,E,W,ne,re=!1){if(s===!1)return E;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue=E;return E===t.RED&&(W===t.FLOAT&&(ue=t.R32F),W===t.HALF_FLOAT&&(ue=t.R16F),W===t.UNSIGNED_BYTE&&(ue=t.R8)),E===t.RG&&(W===t.FLOAT&&(ue=t.RG32F),W===t.HALF_FLOAT&&(ue=t.RG16F),W===t.UNSIGNED_BYTE&&(ue=t.RG8)),E===t.RGBA&&(W===t.FLOAT&&(ue=t.RGBA32F),W===t.HALF_FLOAT&&(ue=t.RGBA16F),W===t.UNSIGNED_BYTE&&(ue=ne===Ne&&re===!1?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)),(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function S(A,E,W){return b(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==Qt&&A.minFilter!==Ln?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function T(A){return A===Qt||A===N_||A===xd?t.NEAREST:t.LINEAR}function X(A){const E=A.target;E.removeEventListener("dispose",X),F(E),E.isVideoTexture&&y.delete(E)}function J(A){const E=A.target;E.removeEventListener("dispose",J),G(E)}function F(A){const E=r.get(A);if(E.__webglInit===void 0)return;const W=A.source,ne=m.get(W);if(ne){const re=ne[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&H(A),Object.keys(ne).length===0&&m.delete(W)}r.remove(A)}function H(A){const E=r.get(A);t.deleteTexture(E.__webglTexture);const W=A.source,ne=m.get(W);delete ne[E.__cacheKey],o.memory.textures--}function G(A){const E=A.texture,W=r.get(A),ne=r.get(E);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)t.deleteFramebuffer(W.__webglFramebuffer[re]),W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer[re]);else{if(t.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&t.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let re=0;re<W.__webglColorRenderbuffer.length;re++)W.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(W.__webglColorRenderbuffer[re]);W.__webglDepthRenderbuffer&&t.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let re=0,ue=E.length;re<ue;re++){const xe=r.get(E[re]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),r.remove(E[re])}r.remove(E),r.remove(A)}let Q=0;function $(){Q=0}function I(){const A=Q;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Q+=1,A}function B(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function U(A,E){const W=r.get(A);if(A.isVideoTexture&&Ot(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(W,A,E);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+E)}function te(A,E){const W=r.get(A);if(A.version>0&&W.__version!==A.version){be(W,A,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+E)}function L(A,E){const W=r.get(A);if(A.version>0&&W.__version!==A.version){be(W,A,E);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+E)}function Z(A,E){const W=r.get(A);if(A.version>0&&W.__version!==A.version){vt(W,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+E)}const K={[pp]:t.REPEAT,[Zn]:t.CLAMP_TO_EDGE,[mp]:t.MIRRORED_REPEAT},ie={[Qt]:t.NEAREST,[N_]:t.NEAREST_MIPMAP_NEAREST,[xd]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[DN]:t.LINEAR_MIPMAP_NEAREST,[Ws]:t.LINEAR_MIPMAP_LINEAR},se={[YN]:t.NEVER,[tU]:t.ALWAYS,[qN]:t.LESS,[ZN]:t.LEQUAL,[KN]:t.EQUAL,[eU]:t.GEQUAL,[QN]:t.GREATER,[JN]:t.NOTEQUAL};function ve(A,E,W){if(W?(t.texParameteri(A,t.TEXTURE_WRAP_S,K[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,K[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,K[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ie[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ie[E.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Zn||E.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,T(E.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==Qt&&E.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Qt||E.minFilter!==xd&&E.minFilter!==Ws||E.type===ci&&e.has("OES_texture_float_linear")===!1||s===!1&&E.type===$s&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||r.get(E).__currentAnisotropy)&&(t.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy)}}function Ie(A,E){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",X));const ne=E.source;let re=m.get(ne);re===void 0&&(re={},m.set(ne,re));const ue=B(E);if(ue!==A.__cacheKey){re[ue]===void 0&&(re[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),re[ue].usedTimes++;const xe=re[A.__cacheKey];xe!==void 0&&(re[A.__cacheKey].usedTimes--,xe.usedTimes===0&&H(E)),A.__cacheKey=ue,A.__webglTexture=re[ue].texture}return W}function be(A,E,W){let ne=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=t.TEXTURE_3D);const re=Ie(A,E),ue=E.source;n.bindTexture(ne,A.__webglTexture,t.TEXTURE0+W);const xe=r.get(ue);if(ue.version!==xe.__version||re===!0){n.activeTexture(t.TEXTURE0+W),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ce=M(E)&&x(E.image)===!1;let Y=g(E.image,ce,!1,c);Y=Ht(E,Y);const Se=x(Y)||s,Ee=a.convert(E.format,E.colorSpace);let we=a.convert(E.type),ge=R(E.internalFormat,Ee,we,E.colorSpace);ve(ne,E,Se);let _e;const ze=E.mipmaps,Ze=s&&E.isVideoTexture!==!0,P=xe.__version===void 0||re===!0,le=S(E,Y,Se);if(E.isDepthTexture)ge=t.DEPTH_COMPONENT,s?E.type===ci?ge=t.DEPTH_COMPONENT32F:E.type===ui?ge=t.DEPTH_COMPONENT24:E.type===Ji?ge=t.DEPTH24_STENCIL8:ge=t.DEPTH_COMPONENT16:E.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ea&&ge===t.DEPTH_COMPONENT&&E.type!==gv&&E.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ui,we=a.convert(E.type)),E.format===wo&&ge===t.DEPTH_COMPONENT&&(ge=t.DEPTH_STENCIL,E.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ji,we=a.convert(E.type))),P&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,ge,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,ge,Y.width,Y.height,0,Ee,we,null));else if(E.isDataTexture)if(ze.length>0&&Se){Ze&&P&&n.texStorage2D(t.TEXTURE_2D,le,ge,ze[0].width,ze[0].height);for(let z=0,ae=ze.length;z<ae;z++)_e=ze[z],Ze?n.texSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,Ee,we,_e.data):n.texImage2D(t.TEXTURE_2D,z,ge,_e.width,_e.height,0,Ee,we,_e.data);E.generateMipmaps=!1}else Ze?(P&&n.texStorage2D(t.TEXTURE_2D,le,ge,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,Ee,we,Y.data)):n.texImage2D(t.TEXTURE_2D,0,ge,Y.width,Y.height,0,Ee,we,Y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ze&&P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,ge,ze[0].width,ze[0].height,Y.depth);for(let z=0,ae=ze.length;z<ae;z++)_e=ze[z],E.format!==Qn?Ee!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,_e.width,_e.height,Y.depth,Ee,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,ge,_e.width,_e.height,Y.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,_e.width,_e.height,Y.depth,Ee,we,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,ge,_e.width,_e.height,Y.depth,0,Ee,we,_e.data)}else{Ze&&P&&n.texStorage2D(t.TEXTURE_2D,le,ge,ze[0].width,ze[0].height);for(let z=0,ae=ze.length;z<ae;z++)_e=ze[z],E.format!==Qn?Ee!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,Ee,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,z,ge,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,Ee,we,_e.data):n.texImage2D(t.TEXTURE_2D,z,ge,_e.width,_e.height,0,Ee,we,_e.data)}else if(E.isDataArrayTexture)Ze?(P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,ge,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Ee,we,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,Y.width,Y.height,Y.depth,0,Ee,we,Y.data);else if(E.isData3DTexture)Ze?(P&&n.texStorage3D(t.TEXTURE_3D,le,ge,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Ee,we,Y.data)):n.texImage3D(t.TEXTURE_3D,0,ge,Y.width,Y.height,Y.depth,0,Ee,we,Y.data);else if(E.isFramebufferTexture){if(P)if(Ze)n.texStorage2D(t.TEXTURE_2D,le,ge,Y.width,Y.height);else{let z=Y.width,ae=Y.height;for(let fe=0;fe<le;fe++)n.texImage2D(t.TEXTURE_2D,fe,ge,z,ae,0,Ee,we,null),z>>=1,ae>>=1}}else if(ze.length>0&&Se){Ze&&P&&n.texStorage2D(t.TEXTURE_2D,le,ge,ze[0].width,ze[0].height);for(let z=0,ae=ze.length;z<ae;z++)_e=ze[z],Ze?n.texSubImage2D(t.TEXTURE_2D,z,0,0,Ee,we,_e):n.texImage2D(t.TEXTURE_2D,z,ge,Ee,we,_e);E.generateMipmaps=!1}else Ze?(P&&n.texStorage2D(t.TEXTURE_2D,le,ge,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,we,Y)):n.texImage2D(t.TEXTURE_2D,0,ge,Ee,we,Y);b(E,Se)&&C(ne),xe.__version=ue.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function vt(A,E,W){if(E.image.length!==6)return;const ne=Ie(A,E),re=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+W);const ue=r.get(re);if(re.version!==ue.__version||ne===!0){n.activeTexture(t.TEXTURE0+W),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const xe=E.isCompressedTexture||E.image[0].isCompressedTexture,ce=E.image[0]&&E.image[0].isDataTexture,Y=[];for(let z=0;z<6;z++)!xe&&!ce?Y[z]=g(E.image[z],!1,!0,u):Y[z]=ce?E.image[z].image:E.image[z],Y[z]=Ht(E,Y[z]);const Se=Y[0],Ee=x(Se)||s,we=a.convert(E.format,E.colorSpace),ge=a.convert(E.type),_e=R(E.internalFormat,we,ge,E.colorSpace),ze=s&&E.isVideoTexture!==!0,Ze=ue.__version===void 0||ne===!0;let P=S(E,Se,Ee);ve(t.TEXTURE_CUBE_MAP,E,Ee);let le;if(xe){ze&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,P,_e,Se.width,Se.height);for(let z=0;z<6;z++){le=Y[z].mipmaps;for(let ae=0;ae<le.length;ae++){const fe=le[ae];E.format!==Qn?we!==null?ze?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae,0,0,fe.width,fe.height,we,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae,0,0,fe.width,fe.height,we,ge,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae,_e,fe.width,fe.height,0,we,ge,fe.data)}}}else{le=E.mipmaps,ze&&Ze&&(le.length>0&&P++,n.texStorage2D(t.TEXTURE_CUBE_MAP,P,_e,Y[0].width,Y[0].height));for(let z=0;z<6;z++)if(ce){ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Y[z].width,Y[z].height,we,ge,Y[z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,_e,Y[z].width,Y[z].height,0,we,ge,Y[z].data);for(let ae=0;ae<le.length;ae++){const Xe=le[ae].image[z].image;ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae+1,0,0,Xe.width,Xe.height,we,ge,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae+1,_e,Xe.width,Xe.height,0,we,ge,Xe.data)}}else{ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,we,ge,Y[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,_e,we,ge,Y[z]);for(let ae=0;ae<le.length;ae++){const fe=le[ae];ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae+1,0,0,we,ge,fe.image[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae+1,_e,we,ge,fe.image[z])}}}b(E,Ee)&&C(t.TEXTURE_CUBE_MAP),ue.__version=re.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ge(A,E,W,ne,re){const ue=a.convert(W.format,W.colorSpace),xe=a.convert(W.type),ce=R(W.internalFormat,ue,xe,W.colorSpace);r.get(E).__hasExternalTextures||(re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,0,ce,E.width,E.height,E.depth,0,ue,xe,null):n.texImage2D(re,0,ce,E.width,E.height,0,ue,xe,null)),n.bindFramebuffer(t.FRAMEBUFFER,A),Ke(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,re,r.get(W).__webglTexture,0,De(E)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,re,r.get(W).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function O(A,E,W){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let ne=t.DEPTH_COMPONENT16;if(W||Ke(E)){const re=E.depthTexture;re&&re.isDepthTexture&&(re.type===ci?ne=t.DEPTH_COMPONENT32F:re.type===ui&&(ne=t.DEPTH_COMPONENT24));const ue=De(E);Ke(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ne,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ne,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const ne=De(E);W&&Ke(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,E.width,E.height):Ke(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let re=0;re<ne.length;re++){const ue=ne[re],xe=a.convert(ue.format,ue.colorSpace),ce=a.convert(ue.type),Y=R(ue.internalFormat,xe,ce,ue.colorSpace),Se=De(E);W&&Ke(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,Y,E.width,E.height):Ke(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,Y,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Y,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Dt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),U(E.depthTexture,0);const ne=r.get(E.depthTexture).__webglTexture,re=De(E);if(E.depthTexture.format===ea)Ke(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(E.depthTexture.format===wo)Ke(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Te(A){const E=r.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Dt(E.__webglFramebuffer,A)}else if(W){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=t.createRenderbuffer(),O(E.__webglDepthbuffer[ne],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),O(E.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(A,E,W){const ne=r.get(A);E!==void 0&&Ge(ne.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),W!==void 0&&Te(A)}function Ce(A){const E=A.texture,W=r.get(A),ne=r.get(E);A.addEventListener("dispose",J),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=E.version,o.memory.textures++);const re=A.isWebGLCubeRenderTarget===!0,ue=A.isWebGLMultipleRenderTargets===!0,xe=x(A)||s;if(re){W.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)W.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(W.__webglFramebuffer=t.createFramebuffer(),ue)if(i.drawBuffers){const ce=A.texture;for(let Y=0,Se=ce.length;Y<Se;Y++){const Ee=r.get(ce[Y]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&A.samples>0&&Ke(A)===!1){const ce=ue?E:[E];W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Y=0;Y<ce.length;Y++){const Se=ce[Y];W.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[Y]);const Ee=a.convert(Se.format,Se.colorSpace),we=a.convert(Se.type),ge=R(Se.internalFormat,Ee,we,Se.colorSpace,A.isXRRenderTarget===!0),_e=De(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,ge,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,W.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),O(W.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),ve(t.TEXTURE_CUBE_MAP,E,xe);for(let ce=0;ce<6;ce++)Ge(W.__webglFramebuffer[ce],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce);b(E,xe)&&C(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){const ce=A.texture;for(let Y=0,Se=ce.length;Y<Se;Y++){const Ee=ce[Y],we=r.get(Ee);n.bindTexture(t.TEXTURE_2D,we.__webglTexture),ve(t.TEXTURE_2D,Ee,xe),Ge(W.__webglFramebuffer,A,Ee,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D),b(Ee,xe)&&C(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(s?ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,ne.__webglTexture),ve(ce,E,xe),Ge(W.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,ce),b(E,xe)&&C(ce),n.unbindTexture()}A.depthBuffer&&Te(A)}function Je(A){const E=x(A)||s,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,re=W.length;ne<re;ne++){const ue=W[ne];if(b(ue,E)){const xe=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ce=r.get(ue).__webglTexture;n.bindTexture(xe,ce),C(xe),n.unbindTexture()}}}function Ve(A){if(s&&A.samples>0&&Ke(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,ne=A.height;let re=t.COLOR_BUFFER_BIT;const ue=[],xe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=r.get(A),Y=A.isWebGLMultipleRenderTargets===!0;if(Y)for(let Se=0;Se<E.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){ue.push(t.COLOR_ATTACHMENT0+Se),A.depthBuffer&&ue.push(xe);const Ee=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Ee===!1&&(A.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Se]),Ee===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[xe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[xe])),Y){const we=r.get(E[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,W,ne,0,0,W,ne,re,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let Se=0;Se<E.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Se]);const Ee=r.get(E[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function De(A){return Math.min(f,A.samples)}function Ke(A){const E=r.get(A);return s&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ot(A){const E=o.render.frame;y.get(A)!==E&&(y.set(A,E),A.update())}function Ht(A,E){const W=A.colorSpace,ne=A.format,re=A.type;return A.isCompressedTexture===!0||A.format===vp||W!==_r&&W!==na&&(W===Ne?s===!1?e.has("EXT_sRGB")===!0&&ne===Qn?(A.format=vp,A.minFilter=Ln,A.generateMipmaps=!1):E=CM.sRGBToLinear(E):(ne!==Qn||re!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}this.allocateTextureUnit=I,this.resetTextureUnits=$,this.setTexture2D=U,this.setTexture2DArray=te,this.setTexture3D=L,this.setTextureCube=Z,this.rebindTextures=ke,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=Ke}function Qz(t,e,n){const r=n.isWebGL2;function i(a,o=na){let s;if(a===Si)return t.UNSIGNED_BYTE;if(a===xM)return t.UNSIGNED_SHORT_4_4_4_4;if(a===SM)return t.UNSIGNED_SHORT_5_5_5_1;if(a===ON)return t.BYTE;if(a===NN)return t.SHORT;if(a===gv)return t.UNSIGNED_SHORT;if(a===yM)return t.INT;if(a===ui)return t.UNSIGNED_INT;if(a===ci)return t.FLOAT;if(a===$s)return r?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===UN)return t.ALPHA;if(a===Qn)return t.RGBA;if(a===FN)return t.LUMINANCE;if(a===kN)return t.LUMINANCE_ALPHA;if(a===ea)return t.DEPTH_COMPONENT;if(a===wo)return t.DEPTH_STENCIL;if(a===vp)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===zN)return t.RED;if(a===EM)return t.RED_INTEGER;if(a===BN)return t.RG;if(a===MM)return t.RG_INTEGER;if(a===wM)return t.RGBA_INTEGER;if(a===Sd||a===Ed||a===Md||a===wd)if(o===Ne)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Sd)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ed)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Md)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===wd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Sd)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ed)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Md)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===wd)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===U_||a===F_||a===k_||a===z_)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===U_)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===F_)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===k_)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===z_)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===HN)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===B_||a===H_)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===B_)return o===Ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===H_)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===G_||a===V_||a===W_||a===$_||a===j_||a===X_||a===Y_||a===q_||a===K_||a===Z_||a===Q_||a===J_||a===ey||a===ty)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===G_)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===V_)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===W_)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===$_)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===j_)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===X_)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Y_)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===q_)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===K_)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Z_)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Q_)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===J_)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ey)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ty)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Td)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Td)return o===Ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===GN||a===ny||a===ry||a===iy)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Td)return s.COMPRESSED_RED_RGTC1_EXT;if(a===ny)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ry)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===iy)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ji?r?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:i}}class Jz extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Su extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eB={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Su,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Su,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Su,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,a=null,o=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,r),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,y=.005;u.inputState.pinching&&h>p+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(eB)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Su;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class tB extends dn{constructor(e,n,r,i,a,o,s,l,u,c){if(c=c!==void 0?c:ea,c!==ea&&c!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&c===ea&&(r=ui),r===void 0&&c===wo&&(r=Ji),super(null,i,a,o,s,l,c,r,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class nB extends ko{constructor(e,n){super();const r=this;let i=null,a=1,o=null,s="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,y=null;const _=n.getContextAttributes();let m=null,d=null;const v=[],g=[];let x=null;const M=new In;M.layers.enable(1),M.viewport=new Ut;const b=new In;b.layers.enable(2),b.viewport=new Ut;const C=[M,b],R=new Jz;R.layers.enable(1),R.layers.enable(2);let S=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(L){x=L},this.getController=function(L){let Z=v[L];return Z===void 0&&(Z=new qd,v[L]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(L){let Z=v[L];return Z===void 0&&(Z=new qd,v[L]=Z),Z.getGripSpace()},this.getHand=function(L){let Z=v[L];return Z===void 0&&(Z=new qd,v[L]=Z),Z.getHandSpace()};function X(L){const Z=g.indexOf(L.inputSource);if(Z===-1)return;const K=v[Z];K!==void 0&&(K.update(L.inputSource,L.frame,u||o),K.dispatchEvent({type:L.type,data:L.inputSource}))}function J(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",F);for(let L=0;L<v.length;L++){const Z=g[L];Z!==null&&(g[L]=null,v[L].disconnect(Z))}S=null,T=null,e.setRenderTarget(m),p=null,h=null,f=null,i=null,d=null,te.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){a=L,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){s=L,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(L){u=L},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",J),i.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await n.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,n,Z),i.updateRenderState({baseLayer:p}),d=new fa(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,K=null,ie=null;_.depth&&(ie=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=_.stencil?wo:ea,K=_.stencil?Ji:ui);const se={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:a};f=new XRWebGLBinding(i,n),h=f.createProjectionLayer(se),i.updateRenderState({layers:[h]}),d=new fa(h.textureWidth,h.textureHeight,{format:Qn,type:Si,depthTexture:new tB(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ve=e.properties.get(d);ve.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(s),te.setContext(i),te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(L){for(let Z=0;Z<L.removed.length;Z++){const K=L.removed[Z],ie=g.indexOf(K);ie>=0&&(g[ie]=null,v[ie].disconnect(K))}for(let Z=0;Z<L.added.length;Z++){const K=L.added[Z];let ie=g.indexOf(K);if(ie===-1){for(let ve=0;ve<v.length;ve++)if(ve>=g.length){g.push(K),ie=ve;break}else if(g[ve]===null){g[ve]=K,ie=ve;break}if(ie===-1)break}const se=v[ie];se&&se.connect(K)}}const H=new k,G=new k;function Q(L,Z,K){H.setFromMatrixPosition(Z.matrixWorld),G.setFromMatrixPosition(K.matrixWorld);const ie=H.distanceTo(G),se=Z.projectionMatrix.elements,ve=K.projectionMatrix.elements,Ie=se[14]/(se[10]-1),be=se[14]/(se[10]+1),vt=(se[9]+1)/se[5],Ge=(se[9]-1)/se[5],O=(se[8]-1)/se[0],Dt=(ve[8]+1)/ve[0],Te=Ie*O,ke=Ie*Dt,Ce=ie/(-O+Dt),Je=Ce*-O;Z.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Je),L.translateZ(Ce),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const Ve=Ie+Ce,De=be+Ce,Ke=Te-Je,Ot=ke+(ie-Je),Ht=vt*be/De*Ve,A=Ge*be/De*Ve;L.projectionMatrix.makePerspective(Ke,Ot,Ht,A,Ve,De),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function $(L,Z){Z===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(Z.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCameraXR=function(L){if(i===null)return L;x&&(L=x),R.near=b.near=M.near=L.near,R.far=b.far=M.far=L.far,(S!==R.near||T!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),S=R.near,T=R.far);const Z=L.parent,K=R.cameras;$(R,Z);for(let ie=0;ie<K.length;ie++)$(K[ie],Z);return K.length===2?Q(R,M,b):R.projectionMatrix.copy(M.projectionMatrix),x&&I(R,Z),R};function I(L,Z){const K=x;Z===null?K.matrix.copy(L.matrixWorld):(K.matrix.copy(Z.matrixWorld),K.matrix.invert(),K.matrix.multiply(L.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0);const ie=K.children;for(let se=0,ve=ie.length;se<ve;se++)ie[se].updateMatrixWorld(!0);K.projectionMatrix.copy(L.projectionMatrix),K.projectionMatrixInverse.copy(L.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=gp*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(L){l=L,h!==null&&(h.fixedFoveation=L),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=L)};let B=null;function U(L,Z){if(c=Z.getViewerPose(u||o),y=Z,c!==null){const K=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ie=!1;K.length!==R.cameras.length&&(R.cameras.length=0,ie=!0);for(let se=0;se<K.length;se++){const ve=K[se];let Ie=null;if(p!==null)Ie=p.getViewport(ve);else{const vt=f.getViewSubImage(h,ve);Ie=vt.viewport,se===0&&(e.setRenderTargetTextures(d,vt.colorTexture,h.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(d))}let be=C[se];be===void 0&&(be=new In,be.layers.enable(se),be.viewport=new Ut,C[se]=be),be.matrix.fromArray(ve.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(ve.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),se===0&&(R.matrix.copy(be.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ie===!0&&R.cameras.push(be)}}for(let K=0;K<v.length;K++){const ie=g[K],se=v[K];ie!==null&&se!==void 0&&se.update(ie,Z,u||o)}B&&B(L,Z),Z.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Z}),y=null}const te=new zM;te.setAnimationLoop(U),this.setAnimationLoop=function(L){B=L},this.dispose=function(){}}}function rB(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,NM(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,v,g,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),f(m,d)):d.isMeshPhongMaterial?(a(m,d),c(m,d)):d.isMeshStandardMaterial?(a(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(a(m,d),y(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),_(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&s(m,d)):d.isPointsMaterial?l(m,d,v,g):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===fn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===fn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const g=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*g,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function s(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=g*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function iB(t,e,n,r){let i={},a={},o=[];const s=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const x=g.program;r.uniformBlockBinding(v,x)}function u(v,g){let x=i[v.id];x===void 0&&(y(v),x=c(v),i[v.id]=x,v.addEventListener("dispose",m));const M=g.program;r.updateUBOMapping(v,M);const b=e.render.frame;a[v.id]!==b&&(h(v),a[v.id]=b)}function c(v){const g=f();v.__bindingPointIndex=g;const x=t.createBuffer(),M=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,M,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function f(){for(let v=0;v<s;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=i[v.id],x=v.uniforms,M=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let b=0,C=x.length;b<C;b++){const R=x[b];if(p(R,b,M)===!0){const S=R.__offset,T=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let J=0;J<T.length;J++){const F=T[J],H=_(F);typeof F=="number"?(R.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,S+X,R.__data)):F.isMatrix3?(R.__data[0]=F.elements[0],R.__data[1]=F.elements[1],R.__data[2]=F.elements[2],R.__data[3]=F.elements[0],R.__data[4]=F.elements[3],R.__data[5]=F.elements[4],R.__data[6]=F.elements[5],R.__data[7]=F.elements[0],R.__data[8]=F.elements[6],R.__data[9]=F.elements[7],R.__data[10]=F.elements[8],R.__data[11]=F.elements[0]):(F.toArray(R.__data,X),X+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,R.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,x){const M=v.value;if(x[g]===void 0){if(typeof M=="number")x[g]=M;else{const b=Array.isArray(M)?M:[M],C=[];for(let R=0;R<b.length;R++)C.push(b[R].clone());x[g]=C}return!0}else if(typeof M=="number"){if(x[g]!==M)return x[g]=M,!0}else{const b=Array.isArray(x[g])?x[g]:[x[g]],C=Array.isArray(M)?M:[M];for(let R=0;R<b.length;R++){const S=b[R];if(S.equals(C[R])===!1)return S.copy(C[R]),!0}}return!1}function y(v){const g=v.uniforms;let x=0;const M=16;let b=0;for(let C=0,R=g.length;C<R;C++){const S=g[C],T={boundary:0,storage:0},X=Array.isArray(S.value)?S.value:[S.value];for(let J=0,F=X.length;J<F;J++){const H=X[J],G=_(H);T.boundary+=G.boundary,T.storage+=G.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,C>0){b=x%M;const J=M-b;b!==0&&J-T.boundary<0&&(x+=M-b,S.__offset=x)}x+=T.storage}return b=x%M,b>0&&(x+=M-b),v.__size=x,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(i[g.id]),delete i[g.id],delete a[g.id]}function d(){for(const v in i)t.deleteBuffer(i[v]);o=[],i={},a={}}return{bind:l,update:u,dispose:d}}function aB(){const t=js("canvas");return t.style.display="block",t}class WM{constructor(e={}){const{canvas:n=aB(),context:r=null,depth:i=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;r!==null?h=r.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),y=new Int32Array(4);let _=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ne,this.useLegacyLights=!0,this.toneMapping=Ur,this.toneMappingExposure=1;const g=this;let x=!1,M=0,b=0,C=null,R=-1,S=null;const T=new Ut,X=new Ut;let J=null;const F=new rt(0);let H=0,G=n.width,Q=n.height,$=1,I=null,B=null;const U=new Ut(0,0,G,Q),te=new Ut(0,0,G,Q);let L=!1;const Z=new kM;let K=!1,ie=!1,se=null;const ve=new kt,Ie=new qe,be=new k,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return C===null?$:1}let O=r;function Dt(w,N){for(let V=0;V<w.length;V++){const D=w[V],j=n.getContext(D,N);if(j!==null)return j}return null}try{const w={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vv}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",z,!1),n.addEventListener("webglcontextcreationerror",ae,!1),O===null){const N=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&N.shift(),O=Dt(N,w),O===null)throw Dt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Te,ke,Ce,Je,Ve,De,Ke,Ot,Ht,A,E,W,ne,re,ue,xe,ce,Y,Se,Ee,we,ge,_e,ze;function Ze(){Te=new v4(O),ke=new u4(O,Te,e),Te.init(ke),ge=new Qz(O,Te,ke),Ce=new Kz(O,Te,ke),Je=new y4(O),Ve=new Uz,De=new Zz(O,Te,Ce,Ve,ke,ge,Je),Ke=new f4(g),Ot=new m4(g),Ht=new PU(O,ke),_e=new s4(O,Te,Ht,ke),A=new g4(O,Ht,Je,_e),E=new M4(O,A,Ht,Je),Se=new E4(O,ke,De),xe=new c4(Ve),W=new Nz(g,Ke,Ot,Te,ke,_e,xe),ne=new rB(g,Ve),re=new kz,ue=new Wz(Te,ke),Y=new o4(g,Ke,Ot,Ce,E,h,l),ce=new qz(g,E,ke),ze=new iB(O,Je,ke,Ce),Ee=new l4(O,Te,Je,ke),we=new _4(O,Te,Je,ke),Je.programs=W.programs,g.capabilities=ke,g.extensions=Te,g.properties=Ve,g.renderLists=re,g.shadowMap=ce,g.state=Ce,g.info=Je}Ze();const P=new nB(g,O);this.xr=P,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(G,Q,!1))},this.getSize=function(w){return w.set(G,Q)},this.setSize=function(w,N,V=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,Q=N,n.width=Math.floor(w*$),n.height=Math.floor(N*$),V===!0&&(n.style.width=w+"px",n.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(G*$,Q*$).floor()},this.setDrawingBufferSize=function(w,N,V){G=w,Q=N,$=V,n.width=Math.floor(w*V),n.height=Math.floor(N*V),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(U)},this.setViewport=function(w,N,V,D){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,N,V,D),Ce.viewport(T.copy(U).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,N,V,D){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,N,V,D),Ce.scissor(X.copy(te).multiplyScalar($).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(w){Ce.setScissorTest(L=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(w=!0,N=!0,V=!0){let D=0;if(w){let j=!1;if(C!==null){const me=C.texture.format;j=me===wM||me===MM||me===EM}if(j){const me=C.texture.type,Me=me===Si||me===ui||me===gv||me===Ji||me===xM||me===SM,Ae=Y.getClearColor(),Re=Y.getClearAlpha(),Be=Ae.r,Pe=Ae.g,Oe=Ae.b,et=Ve.get(C).__webglFramebuffer;Me?(p[0]=Be,p[1]=Pe,p[2]=Oe,p[3]=Re,O.clearBufferuiv(O.COLOR,et,p)):(y[0]=Be,y[1]=Pe,y[2]=Oe,y[3]=Re,O.clearBufferiv(O.COLOR,et,y))}else D|=O.COLOR_BUFFER_BIT}N&&(D|=O.DEPTH_BUFFER_BIT),V&&(D|=O.STENCIL_BUFFER_BIT),O.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",z,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),re.dispose(),ue.dispose(),Ve.dispose(),Ke.dispose(),Ot.dispose(),E.dispose(),_e.dispose(),ze.dispose(),W.dispose(),P.dispose(),P.removeEventListener("sessionstart",ft),P.removeEventListener("sessionend",ar),se&&(se.dispose(),se=null),Yt.stop()};function le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=Je.autoReset,N=ce.enabled,V=ce.autoUpdate,D=ce.needsUpdate,j=ce.type;Ze(),Je.autoReset=w,ce.enabled=N,ce.autoUpdate=V,ce.needsUpdate=D,ce.type=j}function ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fe(w){const N=w.target;N.removeEventListener("dispose",fe),Xe(N)}function Xe(w){ct(w),Ve.remove(w)}function ct(w){const N=Ve.get(w).programs;N!==void 0&&(N.forEach(function(V){W.releaseProgram(V)}),w.isShaderMaterial&&W.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,V,D,j,me){N===null&&(N=vt);const Me=j.isMesh&&j.matrixWorld.determinant()<0,Ae=Aw(w,N,V,D,j);Ce.setMaterial(D,Me);let Re=V.index,Be=1;D.wireframe===!0&&(Re=A.getWireframeAttribute(V),Be=2);const Pe=V.drawRange,Oe=V.attributes.position;let et=Pe.start*Be,pt=(Pe.start+Pe.count)*Be;me!==null&&(et=Math.max(et,me.start*Be),pt=Math.min(pt,(me.start+me.count)*Be)),Re!==null?(et=Math.max(et,0),pt=Math.min(pt,Re.count)):Oe!=null&&(et=Math.max(et,0),pt=Math.min(pt,Oe.count));const Bn=pt-et;if(Bn<0||Bn===1/0)return;_e.setup(j,D,Ae,V,Re);let xr,_t=Ee;if(Re!==null&&(xr=Ht.get(Re),_t=we,_t.setIndex(xr)),j.isMesh)D.wireframe===!0?(Ce.setLineWidth(D.wireframeLinewidth*Ge()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(j.isLine){let $e=D.linewidth;$e===void 0&&($e=1),Ce.setLineWidth($e*Ge()),j.isLineSegments?_t.setMode(O.LINES):j.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else j.isPoints?_t.setMode(O.POINTS):j.isSprite&&_t.setMode(O.TRIANGLES);if(j.isInstancedMesh)_t.renderInstances(et,Bn,j.count);else if(V.isInstancedBufferGeometry){const $e=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,vf=Math.min(V.instanceCount,$e);_t.renderInstances(et,Bn,vf)}else _t.render(et,Bn)},this.compile=function(w,N){function V(D,j,me){D.transparent===!0&&D.side===Lr&&D.forceSinglePass===!1?(D.side=fn,D.needsUpdate=!0,yl(D,j,me),D.side=wi,D.needsUpdate=!0,yl(D,j,me),D.side=Lr):yl(D,j,me)}m=ue.get(w),m.init(),v.push(m),w.traverseVisible(function(D){D.isLight&&D.layers.test(N.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights(g.useLegacyLights),w.traverse(function(D){const j=D.material;if(j)if(Array.isArray(j))for(let me=0;me<j.length;me++){const Me=j[me];V(Me,w,D)}else V(j,w,D)}),v.pop(),m=null};let gt=null;function Ii(w){gt&&gt(w)}function ft(){Yt.stop()}function ar(){Yt.start()}const Yt=new zM;Yt.setAnimationLoop(Ii),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(w){gt=w,P.setAnimationLoop(w),w===null?Yt.stop():Yt.start()},P.addEventListener("sessionstart",ft),P.addEventListener("sessionend",ar),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(N=P.updateCameraXR(N)),w.isScene===!0&&w.onBeforeRender(g,w,N,C),m=ue.get(w,v.length),m.init(),v.push(m),ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(ve),ie=this.localClippingEnabled,K=xe.init(this.clippingPlanes,ie),_=re.get(w,d.length),_.init(),d.push(_),Ov(w,N,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(I,B),K===!0&&xe.beginShadows();const V=m.state.shadowsArray;if(ce.render(V,w,N),K===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,Y.render(_,w),m.setupLights(g.useLegacyLights),N.isArrayCamera){const D=N.cameras;for(let j=0,me=D.length;j<me;j++){const Me=D[j];Nv(_,w,Me,Me.viewport)}}else Nv(_,w,N);C!==null&&(De.updateMultisampleRenderTarget(C),De.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(g,w,N),_e.resetDefaultState(),R=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Ov(w,N,V,D){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){D&&be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);const Me=E.update(w),Ae=w.material;Ae.visible&&_.push(w,Me,Ae,V,be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){w.isSkinnedMesh&&w.skeleton.frame!==Je.render.frame&&(w.skeleton.update(),w.skeleton.frame=Je.render.frame);const Me=E.update(w),Ae=w.material;if(D&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),be.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),be.copy(Me.boundingSphere.center)),be.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(Ae)){const Re=Me.groups;for(let Be=0,Pe=Re.length;Be<Pe;Be++){const Oe=Re[Be],et=Ae[Oe.materialIndex];et&&et.visible&&_.push(w,Me,et,V,be.z,Oe)}}else Ae.visible&&_.push(w,Me,Ae,V,be.z,null)}}const me=w.children;for(let Me=0,Ae=me.length;Me<Ae;Me++)Ov(me[Me],N,V,D)}function Nv(w,N,V,D){const j=w.opaque,me=w.transmissive,Me=w.transparent;m.setupLightsView(V),K===!0&&xe.setGlobalState(g.clippingPlanes,V),me.length>0&&bw(j,me,N,V),D&&Ce.viewport(T.copy(D)),j.length>0&&_l(j,N,V),me.length>0&&_l(me,N,V),Me.length>0&&_l(Me,N,V),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function bw(w,N,V,D){const j=ke.isWebGL2;se===null&&(se=new fa(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?$s:Si,minFilter:Ws,samples:j&&s===!0?4:0})),g.getDrawingBufferSize(Ie),j?se.setSize(Ie.x,Ie.y):se.setSize(_p(Ie.x),_p(Ie.y));const me=g.getRenderTarget();g.setRenderTarget(se),g.getClearColor(F),H=g.getClearAlpha(),H<1&&g.setClearColor(16777215,.5),g.clear();const Me=g.toneMapping;g.toneMapping=Ur,_l(w,V,D),De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se);let Ae=!1;for(let Re=0,Be=N.length;Re<Be;Re++){const Pe=N[Re],Oe=Pe.object,et=Pe.geometry,pt=Pe.material,Bn=Pe.group;if(pt.side===Lr&&Oe.layers.test(D.layers)){const xr=pt.side;pt.side=fn,pt.needsUpdate=!0,Uv(Oe,V,D,et,pt,Bn),pt.side=xr,pt.needsUpdate=!0,Ae=!0}}Ae===!0&&(De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se)),g.setRenderTarget(me),g.setClearColor(F,H),g.toneMapping=Me}function _l(w,N,V){const D=N.isScene===!0?N.overrideMaterial:null;for(let j=0,me=w.length;j<me;j++){const Me=w[j],Ae=Me.object,Re=Me.geometry,Be=D===null?Me.material:D,Pe=Me.group;Ae.layers.test(V.layers)&&Uv(Ae,N,V,Re,Be,Pe)}}function Uv(w,N,V,D,j,me){w.onBeforeRender(g,N,V,D,j,me),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(g,N,V,D,w,me),j.transparent===!0&&j.side===Lr&&j.forceSinglePass===!1?(j.side=fn,j.needsUpdate=!0,g.renderBufferDirect(V,N,D,j,w,me),j.side=wi,j.needsUpdate=!0,g.renderBufferDirect(V,N,D,j,w,me),j.side=Lr):g.renderBufferDirect(V,N,D,j,w,me),w.onAfterRender(g,N,V,D,j,me)}function yl(w,N,V){N.isScene!==!0&&(N=vt);const D=Ve.get(w),j=m.state.lights,me=m.state.shadowsArray,Me=j.state.version,Ae=W.getParameters(w,j.state,me,N,V),Re=W.getProgramCacheKey(Ae);let Be=D.programs;D.environment=w.isMeshStandardMaterial?N.environment:null,D.fog=N.fog,D.envMap=(w.isMeshStandardMaterial?Ot:Ke).get(w.envMap||D.environment),Be===void 0&&(w.addEventListener("dispose",fe),Be=new Map,D.programs=Be);let Pe=Be.get(Re);if(Pe!==void 0){if(D.currentProgram===Pe&&D.lightsStateVersion===Me)return Fv(w,Ae),Pe}else Ae.uniforms=W.getUniforms(w),w.onBuild(V,Ae,g),w.onBeforeCompile(Ae,g),Pe=W.acquireProgram(Ae,Re),Be.set(Re,Pe),D.uniforms=Ae.uniforms;const Oe=D.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=xe.uniform),Fv(w,Ae),D.needsLights=Rw(w),D.lightsStateVersion=Me,D.needsLights&&(Oe.ambientLightColor.value=j.state.ambient,Oe.lightProbe.value=j.state.probe,Oe.directionalLights.value=j.state.directional,Oe.directionalLightShadows.value=j.state.directionalShadow,Oe.spotLights.value=j.state.spot,Oe.spotLightShadows.value=j.state.spotShadow,Oe.rectAreaLights.value=j.state.rectArea,Oe.ltc_1.value=j.state.rectAreaLTC1,Oe.ltc_2.value=j.state.rectAreaLTC2,Oe.pointLights.value=j.state.point,Oe.pointLightShadows.value=j.state.pointShadow,Oe.hemisphereLights.value=j.state.hemi,Oe.directionalShadowMap.value=j.state.directionalShadowMap,Oe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Oe.spotShadowMap.value=j.state.spotShadowMap,Oe.spotLightMatrix.value=j.state.spotLightMatrix,Oe.spotLightMap.value=j.state.spotLightMap,Oe.pointShadowMap.value=j.state.pointShadowMap,Oe.pointShadowMatrix.value=j.state.pointShadowMatrix);const et=Pe.getUniforms(),pt=Ku.seqWithValue(et.seq,Oe);return D.currentProgram=Pe,D.uniformsList=pt,Pe}function Fv(w,N){const V=Ve.get(w);V.outputColorSpace=N.outputColorSpace,V.instancing=N.instancing,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Aw(w,N,V,D,j){N.isScene!==!0&&(N=vt),De.resetTextureUnits();const me=N.fog,Me=D.isMeshStandardMaterial?N.environment:null,Ae=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_r,Re=(D.isMeshStandardMaterial?Ot:Ke).get(D.envMap||Me),Be=D.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pe=!!V.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Oe=!!V.morphAttributes.position,et=!!V.morphAttributes.normal,pt=!!V.morphAttributes.color,Bn=D.toneMapped?g.toneMapping:Ur,xr=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=xr!==void 0?xr.length:0,$e=Ve.get(D),vf=m.state.lights;if(K===!0&&(ie===!0||w!==S)){const hn=w===S&&D.id===R;xe.setState(D,w,hn)}let Ct=!1;D.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==vf.state.version||$e.outputColorSpace!==Ae||j.isInstancedMesh&&$e.instancing===!1||!j.isInstancedMesh&&$e.instancing===!0||j.isSkinnedMesh&&$e.skinning===!1||!j.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Re||D.fog===!0&&$e.fog!==me||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==xe.numPlanes||$e.numIntersection!==xe.numIntersection)||$e.vertexAlphas!==Be||$e.vertexTangents!==Pe||$e.morphTargets!==Oe||$e.morphNormals!==et||$e.morphColors!==pt||$e.toneMapping!==Bn||ke.isWebGL2===!0&&$e.morphTargetsCount!==_t)&&(Ct=!0):(Ct=!0,$e.__version=D.version);let Di=$e.currentProgram;Ct===!0&&(Di=yl(D,N,j));let kv=!1,Ho=!1,gf=!1;const qt=Di.getUniforms(),Oi=$e.uniforms;if(Ce.useProgram(Di.program)&&(kv=!0,Ho=!0,gf=!0),D.id!==R&&(R=D.id,Ho=!0),kv||S!==w){if(qt.setValue(O,"projectionMatrix",w.projectionMatrix),ke.logarithmicDepthBuffer&&qt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),S!==w&&(S=w,Ho=!0,gf=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const hn=qt.map.cameraPosition;hn!==void 0&&hn.setValue(O,be.setFromMatrixPosition(w.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&qt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||j.isSkinnedMesh)&&qt.setValue(O,"viewMatrix",w.matrixWorldInverse)}if(j.isSkinnedMesh){qt.setOptional(O,j,"bindMatrix"),qt.setOptional(O,j,"bindMatrixInverse");const hn=j.skeleton;hn&&(ke.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),qt.setValue(O,"boneTexture",hn.boneTexture,De),qt.setValue(O,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const _f=V.morphAttributes;if((_f.position!==void 0||_f.normal!==void 0||_f.color!==void 0&&ke.isWebGL2===!0)&&Se.update(j,V,Di),(Ho||$e.receiveShadow!==j.receiveShadow)&&($e.receiveShadow=j.receiveShadow,qt.setValue(O,"receiveShadow",j.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Oi.envMap.value=Re,Oi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Ho&&(qt.setValue(O,"toneMappingExposure",g.toneMappingExposure),$e.needsLights&&Cw(Oi,gf),me&&D.fog===!0&&ne.refreshFogUniforms(Oi,me),ne.refreshMaterialUniforms(Oi,D,$,Q,se),Ku.upload(O,$e.uniformsList,Oi,De)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Ku.upload(O,$e.uniformsList,Oi,De),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&qt.setValue(O,"center",j.center),qt.setValue(O,"modelViewMatrix",j.modelViewMatrix),qt.setValue(O,"normalMatrix",j.normalMatrix),qt.setValue(O,"modelMatrix",j.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const hn=D.uniformsGroups;for(let yf=0,Pw=hn.length;yf<Pw;yf++)if(ke.isWebGL2){const zv=hn[yf];ze.update(zv,Di),ze.bind(zv,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function Cw(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Rw(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,N,V){Ve.get(w.texture).__webglTexture=N,Ve.get(w.depthTexture).__webglTexture=V;const D=Ve.get(w);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=V===void 0,D.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,N){const V=Ve.get(w);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,V=0){C=w,M=N,b=V;let D=!0,j=null,me=!1,Me=!1;if(w){const Re=Ve.get(w);Re.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(O.FRAMEBUFFER,null),D=!1):Re.__webglFramebuffer===void 0?De.setupRenderTarget(w):Re.__hasExternalTextures&&De.rebindTextures(w,Ve.get(w.texture).__webglTexture,Ve.get(w.depthTexture).__webglTexture);const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Me=!0);const Pe=Ve.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(j=Pe[N],me=!0):ke.isWebGL2&&w.samples>0&&De.useMultisampledRTT(w)===!1?j=Ve.get(w).__webglMultisampledFramebuffer:j=Pe,T.copy(w.viewport),X.copy(w.scissor),J=w.scissorTest}else T.copy(U).multiplyScalar($).floor(),X.copy(te).multiplyScalar($).floor(),J=L;if(Ce.bindFramebuffer(O.FRAMEBUFFER,j)&&ke.drawBuffers&&D&&Ce.drawBuffers(w,j),Ce.viewport(T),Ce.scissor(X),Ce.setScissorTest(J),me){const Re=Ve.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,V)}else if(Me){const Re=Ve.get(w.texture),Be=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,V||0,Be)}R=-1},this.readRenderTargetPixels=function(w,N,V,D,j,me,Me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){Ce.bindFramebuffer(O.FRAMEBUFFER,Ae);try{const Re=w.texture,Be=Re.format,Pe=Re.type;if(Be!==Qn&&ge.convert(Be)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Pe===$s&&(Te.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Pe!==Si&&ge.convert(Pe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===ci&&(ke.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-D&&V>=0&&V<=w.height-j&&O.readPixels(N,V,D,j,ge.convert(Be),ge.convert(Pe),me)}finally{const Re=C!==null?Ve.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(w,N,V=0){const D=Math.pow(2,-V),j=Math.floor(N.image.width*D),me=Math.floor(N.image.height*D);De.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,w.x,w.y,j,me),Ce.unbindTexture()},this.copyTextureToTexture=function(w,N,V,D=0){const j=N.image.width,me=N.image.height,Me=ge.convert(V.format),Ae=ge.convert(V.type);De.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,D,w.x,w.y,j,me,Me,Ae,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,D,w.x,w.y,N.mipmaps[0].width,N.mipmaps[0].height,Me,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,D,w.x,w.y,Me,Ae,N.image),D===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,N,V,D,j=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=w.max.x-w.min.x+1,Me=w.max.y-w.min.y+1,Ae=w.max.z-w.min.z+1,Re=ge.convert(D.format),Be=ge.convert(D.type);let Pe;if(D.isData3DTexture)De.setTexture3D(D,0),Pe=O.TEXTURE_3D;else if(D.isDataArrayTexture)De.setTexture2DArray(D,0),Pe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);const Oe=O.getParameter(O.UNPACK_ROW_LENGTH),et=O.getParameter(O.UNPACK_IMAGE_HEIGHT),pt=O.getParameter(O.UNPACK_SKIP_PIXELS),Bn=O.getParameter(O.UNPACK_SKIP_ROWS),xr=O.getParameter(O.UNPACK_SKIP_IMAGES),_t=V.isCompressedTexture?V.mipmaps[0]:V.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,_t.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,w.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,w.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?O.texSubImage3D(Pe,j,N.x,N.y,N.z,me,Me,Ae,Re,Be,_t.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Pe,j,N.x,N.y,N.z,me,Me,Ae,Re,_t.data)):O.texSubImage3D(Pe,j,N.x,N.y,N.z,me,Me,Ae,Re,Be,_t),O.pixelStorei(O.UNPACK_ROW_LENGTH,Oe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,et),O.pixelStorei(O.UNPACK_SKIP_PIXELS,pt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,xr),j===0&&D.generateMipmaps&&O.generateMipmap(Pe),Ce.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?De.setTextureCube(w,0):w.isData3DTexture?De.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?De.setTexture2DArray(w,0):De.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){M=0,b=0,C=null,Ce.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Or}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?ta:TM}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ta?Ne:_r}}class oB extends WM{}oB.prototype.isWebGL1Renderer=!0;class sB extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const $y={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class lB{constructor(e,n,r){const i=this;let a=!1,o=0,s=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(c){s++,a===!1&&i.onStart!==void 0&&i.onStart(c,o,s),a=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,s),o===s&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],y=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return y}return null}}}const uB=new lB;class $M{constructor(e){this.manager=e!==void 0?e:uB,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(i,a){r.load(e,i,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class cB extends $M{constructor(e){super(e)}load(e,n,r,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=$y.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){n&&n(o),a.manager.itemEnd(e)},0),o;const s=js("img");function l(){c(),$y.add(e,this),n&&n(this),a.manager.itemEnd(e)}function u(f){c(),i&&i(f),a.manager.itemError(e),a.manager.itemEnd(e)}function c(){s.removeEventListener("load",l,!1),s.removeEventListener("error",u,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class fB extends $M{constructor(e){super(e)}load(e,n,r,i){const a=new dn,o=new cB(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,n!==void 0&&n(a)},r,i),a}}class dB{constructor(e,n,r=0,i=1/0){this.ray=new LM(e,n),this.near=r,this.far=i,this.camera=null,this.layers=new yv,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,r=[]){return xp(e,this,r,n),r.sort(jy),r}intersectObjects(e,n=!0,r=[]){for(let i=0,a=e.length;i<a;i++)xp(e[i],this,r,n);return r.sort(jy),r}}function jy(t,e){return t.distance-e.distance}function xp(t,e,n,r){if(t.layers.test(e.layers)&&t.raycast(e,n),r===!0){const i=t.children;for(let a=0,o=i.length;a<o;a++)xp(i[a],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vv}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vv);var Xy=class{constructor(t,e){Le(this,"target");Le(this,"name");Le(this,"intersected");Le(this,"wasIntersected",!1);Le(this,"distance");this.target=t,this.name=e,this.intersected=!1,this.distance=0}},nn=class{constructor(t,e=null){Le(this,"type");Le(this,"cancelBubble");Le(this,"originalEvent");Le(this,"coords",new qe(0,0));Le(this,"distance",0);Le(this,"intersected",!1);this.cancelBubble=!1,this.type=t,this.originalEvent=e}stopPropagation(){this.cancelBubble=!0}},hB=class{constructor(t,e,n,r){Le(this,"renderer");Le(this,"camera");Le(this,"domElement");Le(this,"bindEventsOnBodyElement");Le(this,"autoAdd");Le(this,"scene");Le(this,"mouse");Le(this,"supportsPointerEvents");Le(this,"interactiveObjects");Le(this,"closestObject");Le(this,"raycaster");Le(this,"treatTouchEventsAsMouseEvents");Le(this,"dispose",()=>{this.domElement.removeEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("pointermove",this.onDocumentPointerMove):this.domElement.removeEventListener("pointermove",this.onDocumentPointerMove),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("mousemove",this.onDocumentMouseMove):this.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),this.domElement.removeEventListener("mousedown",this.onMouseDown),this.domElement.removeEventListener("mouseup",this.onMouseUp),this.domElement.removeEventListener("touchstart",this.onTouchStart),this.domElement.removeEventListener("touchmove",this.onTouchMove),this.domElement.removeEventListener("touchend",this.onTouchEnd)});Le(this,"add",(t,e=[])=>{if(t&&!this.interactiveObjects.find(n=>n.target===t))if(e.length>0)e.forEach(n=>{let r=t.getObjectByName(n);if(r){let i=new Xy(r,n);this.interactiveObjects.push(i)}});else{let n=new Xy(t,t.name);this.interactiveObjects.push(n)}});Le(this,"remove",(t,e=[])=>{!t||(e.length>0?e.forEach(n=>{let r=t.getObjectByName(n);r&&(this.interactiveObjects=this.interactiveObjects.filter(i=>i.target!==r))}):this.interactiveObjects=this.interactiveObjects.filter(n=>n.target!==t))});Le(this,"update",()=>{this.raycaster.setFromCamera(this.mouse,this.camera),this.interactiveObjects.forEach(r=>{r.target&&this.checkIntersection(r)}),this.interactiveObjects.sort(function(r,i){return r.distance-i.distance});let t=this.interactiveObjects.find(r=>r.intersected)??null;if(t!=this.closestObject){if(this.closestObject){let r=new nn("mouseout");this.dispatch(this.closestObject,r)}if(t){let r=new nn("mouseover");this.dispatch(t,r)}this.closestObject=t}let e;this.interactiveObjects.forEach(r=>{!r.intersected&&r.wasIntersected&&(e||(e=new nn("mouseleave")),this.dispatch(r,e))});let n;this.interactiveObjects.forEach(r=>{r.intersected&&!r.wasIntersected&&(n||(n=new nn("mouseenter")),this.dispatch(r,n))})});Le(this,"checkIntersection",t=>{let e=this.raycaster.intersectObjects([t.target],!0);if(t.wasIntersected=t.intersected,e.length>0){let n=e[0].distance;e.forEach(r=>{r.distance<n&&(n=r.distance)}),t.intersected=!0,t.distance=n}else t.intersected=!1});Le(this,"onDocumentMouseMove",t=>{this.mapPositionToPoint(this.mouse,t.clientX,t.clientY);let e=new nn("mousemove",t);this.interactiveObjects.forEach(n=>{this.dispatch(n,e)})});Le(this,"onDocumentPointerMove",t=>{this.mapPositionToPoint(this.mouse,t.clientX,t.clientY);let e=new nn("pointermove",t);this.interactiveObjects.forEach(n=>{this.dispatch(n,e)})});Le(this,"onTouchMove",t=>{t.touches.length>0&&this.mapPositionToPoint(this.mouse,t.touches[0].clientX,t.touches[0].clientY);let e=new nn(this.treatTouchEventsAsMouseEvents?"mousemove":"touchmove",t);this.interactiveObjects.forEach(n=>{this.dispatch(n,e)})});Le(this,"onMouseClick",t=>{this.update();let e=new nn("click",t);this.interactiveObjects.forEach(n=>{n.intersected&&this.dispatch(n,e)})});Le(this,"onMouseDown",t=>{this.mapPositionToPoint(this.mouse,t.clientX,t.clientY),this.update();let e=new nn("mousedown",t);this.interactiveObjects.forEach(n=>{n.intersected&&this.dispatch(n,e)})});Le(this,"onPointerDown",t=>{this.mapPositionToPoint(this.mouse,t.clientX,t.clientY),this.update();let e=new nn("pointerdown",t);this.interactiveObjects.forEach(n=>{n.intersected&&this.dispatch(n,e)})});Le(this,"onTouchStart",t=>{t.touches.length>0&&this.mapPositionToPoint(this.mouse,t.touches[0].clientX,t.touches[0].clientY),this.update();let e=new nn(this.treatTouchEventsAsMouseEvents?"mousedown":"touchstart",t);this.interactiveObjects.forEach(n=>{n.intersected&&this.dispatch(n,e)})});Le(this,"onMouseUp",t=>{let e=new nn("mouseup",t);this.interactiveObjects.forEach(n=>{this.dispatch(n,e)})});Le(this,"onPointerUp",t=>{let e=new nn("pointerup",t);this.interactiveObjects.forEach(n=>{this.dispatch(n,e)})});Le(this,"onTouchEnd",t=>{t.touches.length>0&&this.mapPositionToPoint(this.mouse,t.touches[0].clientX,t.touches[0].clientY),this.update();let e=new nn(this.treatTouchEventsAsMouseEvents?"mouseup":"touchend",t);this.interactiveObjects.forEach(n=>{this.dispatch(n,e)})});Le(this,"dispatch",(t,e)=>{t.target&&!e.cancelBubble&&(e.coords=this.mouse,e.distance=t.distance,e.intersected=t.intersected,t.target.dispatchEvent(e))});Le(this,"mapPositionToPoint",(t,e,n)=>{let r=this.renderer.domElement.getBoundingClientRect();t.x=(e-r.left)/r.width*2-1,t.y=-((n-r.top)/r.height)*2+1});this.renderer=t,this.camera=e,this.domElement=n,this.bindEventsOnBodyElement=r&&typeof r.bindEventsOnBodyElement<"u"?r.bindEventsOnBodyElement:!0,this.scene=r&&typeof r.scene<"u"?r.scene:null,this.scene&&(this.scene.onBeforeRender=()=>{this.autoAdd&&this.scene!==null&&this.scene.traverse(i=>{this.add(i),i.addEventListener("removed",a=>{this.remove(a.target)})}),this.update()}),this.autoAdd=r&&typeof r.autoAdd<"u"?r.autoAdd:!1,this.autoAdd&&this.scene===null&&console.error("Attention: Options.scene needs to be set when using options.autoAdd"),this.mouse=new qe(-1,1),this.supportsPointerEvents=!!window.PointerEvent,this.interactiveObjects=[],this.closestObject=null,this.raycaster=new dB,n.addEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?n.ownerDocument.addEventListener("pointermove",this.onDocumentPointerMove):n.addEventListener("pointermove",this.onDocumentPointerMove),n.addEventListener("pointerdown",this.onPointerDown),n.addEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?n.ownerDocument.addEventListener("mousemove",this.onDocumentMouseMove):n.addEventListener("mousemove",this.onDocumentMouseMove),n.addEventListener("mousedown",this.onMouseDown),n.addEventListener("mouseup",this.onMouseUp),n.addEventListener("touchstart",this.onTouchStart,{passive:!0}),n.addEventListener("touchmove",this.onTouchMove,{passive:!0}),n.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.treatTouchEventsAsMouseEvents=!0}};function pB(t,e,n){let r;window.innerWidth<720?r=130:r=100;let i;window.innerWidth<1e3?i=.05:i=.1;let a=document.querySelector("#header"),o=document.querySelector("#three-canvas"),s=document.querySelector("#layer"),l=document.querySelector("#presentation"),u=new rN.init(document.body,{renderByPixels:!0,continuousScrolling:!0,damping:i});u.limit.x=0,setTimeout(()=>{u.scrollTo(0,5,10)},7e3);let c=0,f,h=!1,p=0;const y=new sB,_=new In(r,window.innerWidth/window.innerHeight,.1,100),m=new WM;m.setSize(window.innerWidth,window.innerHeight,!1),document.querySelector("#three-canvas").appendChild(m.domElement);let d=t.state.data;const v="rgb(255,174,66)",g=e*.85,x=new fB,M=5,b=M*2,C=new on(new Pr(M,M,b,b),new ri({color:v,wireframe:!0})),R=new on(new Pr(g,5,g*2,b),new ri({color:v,wireframe:!0})),S=new on(new Pr(g,5,g*2,b),new ri({color:v,wireframe:!0})),T=new on(new Pr(g,5,g*2,b),new ri({color:v,wireframe:!0})),X=new on(new Pr(g,5,g*2,b),new ri({color:v,wireframe:!0}));y.add(C,R,S,T,X);const J=new hB(m,_,m.domElement);let F=[],H=-1;d.forEach((U,te)=>{const L=U.width/U.height;let Z,K;L>=1?(K=1,Z=L):(Z=1,K=1/L);let ie=new on(new Pr(Z,K,Z,K),new ri({map:x.load(U.urls.regular)})),se=Math.round(Math.random()),ve=Math.round(Math.random()),Ie=[Math.random()/3,-Math.random()/3];const be=Ie[se],vt=Ie[ve],Ge=-1*te/5+H;ie.position.set(vt,be,Ge),F.push({...ie,initX:ie.position.x,initY:ie.position.y}),y.add(ie),J.add(ie),ie.addEventListener("click",O=>{O.stopPropagation(),t.updateState("layer",!0),n(`/3dGallery/${U.id}`)}),ie.addEventListener("mouseover",()=>{document.body.style.cursor="pointer"}),ie.addEventListener("mouseout",()=>{document.body.style.cursor="default"})}),_.position.set(0,0,0),_.lookAt(C.position),C.position.set(0,0,-g/2),R.position.set(2.5,0,0),R.rotation.y=-90*(2*3.14/360),S.position.set(-2.5,0,0),S.rotation.y=90*(2*3.14/360),T.position.set(0,2.5,0),T.rotation.x=90*(2*3.14/360),T.rotation.z=90*(2*3.14/360),X.position.set(0,-2.5,0),X.rotation.x=90*(2*3.14/360),X.rotation.z=90*(2*3.14/360),B();function G(){requestAnimationFrame(G),Q(),h&&B(),J.update()}G();function Q(){_.lookAt(C.position),_.position.z=-c/e,f=_.position.z,$(f)}function $(U){let te=1;F.forEach(L=>{const{x:Z,y:K,z:ie}=L.position,se=U-ie;if(se<=te&&se>0){const ve=2*(te-se);L.position.x=L.initX>=0?L.initX+ve:L.initX-ve,L.position.y=L.initY>=0?L.initY+ve:L.initY-ve}})}u.addListener(U=>{h=!0,c=u.offset.y/(u.size.content.height-document.documentElement.clientHeight)*100,Math.abs(c.toFixed(4)-p.toFixed(4))<=.01&&(h=!1),c==0&&(h=!1),c==100&&(h=!1);const te=U.offset;a.style.top=te.y+"px",o.style.top=te.y+"px",s.style.top=te.y+"px",l.style.top=te.y+"px",p=c}),window.addEventListener("resize",I,!1);function I(){_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight),B()}function B(){m.render(y,_)}}const mB=async()=>{const e=await(await fetch("https://unsplash-api-richi-coder.vercel.app/api/3dgallery?query=paintings")).json();return console.log(e,"check"),e},jM=de.createContext(),_a=()=>de.useContext(jM),vB=async()=>await mB();function gB({children:t}){const[e,n]=de.useState({layer:!1,menu:!1,connectWallet:!1,data:[],currentSquare:0});de.useEffect(()=>{vB().then(o=>{n({...e,data:o})})},[]);const a={state:e,updateState:(o,s)=>{n({...e,layer:!1,menu:!1,connectWallet:!1,[o]:s})},updateKeys:o=>{n({...e,...o})}};return q.jsx(jM.Provider,{value:a,children:t})}function _B(){const t=_a(),e=Dm(),n=t.state.data.length,r=i=>{e(i)};return de.useEffect(()=>{n!=0&&pB(t,n,r)},[t.state.data]),q.jsx("div",{id:"three-canvas",className:"w-fit h-fit fixed top-0 left-0 bg-black",children:q.jsx(q.Fragment,{children:n==0?q.jsx("div",{className:"text-7xl text-white w-screen h-screen flex flex-col items-center justify-center",children:q.jsx("span",{className:"loader"})}):null})})}function Yy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function he(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yy(Object(n),!0).forEach(function(r){bt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Lc(t){"@babel/helpers - typeof";return Lc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lc(t)}function yB(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function qy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function xB(t,e,n){return e&&qy(t.prototype,e),n&&qy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function bt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Sv(t,e){return EB(t)||wB(t,e)||XM(t,e)||bB()}function ml(t){return SB(t)||MB(t)||XM(t)||TB()}function SB(t){if(Array.isArray(t))return Sp(t)}function EB(t){if(Array.isArray(t))return t}function MB(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wB(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function XM(t,e){if(t){if(typeof t=="string")return Sp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sp(t,e)}}function Sp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function TB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ky=function(){},Ev={},YM={},qM=null,KM={mark:Ky,measure:Ky};try{typeof window<"u"&&(Ev=window),typeof document<"u"&&(YM=document),typeof MutationObserver<"u"&&(qM=MutationObserver),typeof performance<"u"&&(KM=performance)}catch{}var AB=Ev.navigator||{},Zy=AB.userAgent,Qy=Zy===void 0?"":Zy,Ti=Ev,at=YM,Jy=qM,Eu=KM;Ti.document;var Xr=!!at.documentElement&&!!at.head&&typeof at.addEventListener=="function"&&typeof at.createElement=="function",ZM=~Qy.indexOf("MSIE")||~Qy.indexOf("Trident/"),Mu,wu,Tu,bu,Au,Gr="___FONT_AWESOME___",Ep=16,QM="fa",JM="svg-inline--fa",ha="data-fa-i2svg",Mp="data-fa-pseudo-element",CB="data-fa-pseudo-element-pending",Mv="data-prefix",wv="data-icon",ex="fontawesome-i2svg",RB="async",PB=["HTML","HEAD","STYLE","SCRIPT"],ew=function(){try{return!0}catch{return!1}}(),nt="classic",ht="sharp",Tv=[nt,ht];function vl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[nt]}})}var Xs=vl((Mu={},bt(Mu,nt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),bt(Mu,ht,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Mu)),Ys=vl((wu={},bt(wu,nt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),bt(wu,ht,{solid:"fass",regular:"fasr",light:"fasl"}),wu)),qs=vl((Tu={},bt(Tu,nt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),bt(Tu,ht,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Tu)),LB=vl((bu={},bt(bu,nt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),bt(bu,ht,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),bu)),IB=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,tw="fa-layers-text",DB=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,OB=vl((Au={},bt(Au,nt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),bt(Au,ht,{900:"fass",400:"fasr",300:"fasl"}),Au)),nw=[1,2,3,4,5,6,7,8,9,10],NB=nw.concat([11,12,13,14,15,16,17,18,19,20]),UB=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ks=new Set;Object.keys(Ys[nt]).map(Ks.add.bind(Ks));Object.keys(Ys[ht]).map(Ks.add.bind(Ks));var FB=[].concat(Tv,ml(Ks),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yi.GROUP,Yi.SWAP_OPACITY,Yi.PRIMARY,Yi.SECONDARY]).concat(nw.map(function(t){return"".concat(t,"x")})).concat(NB.map(function(t){return"w-".concat(t)})),Es=Ti.FontAwesomeConfig||{};function kB(t){var e=at.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function zB(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(at&&typeof at.querySelector=="function"){var BB=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];BB.forEach(function(t){var e=Sv(t,2),n=e[0],r=e[1],i=zB(kB(n));i!=null&&(Es[r]=i)})}var rw={styleDefault:"solid",familyDefault:"classic",cssPrefix:QM,replacementClass:JM,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Es.familyPrefix&&(Es.cssPrefix=Es.familyPrefix);var bo=he(he({},rw),Es);bo.autoReplaceSvg||(bo.observeMutations=!1);var ye={};Object.keys(rw).forEach(function(t){Object.defineProperty(ye,t,{enumerable:!0,set:function(n){bo[t]=n,Ms.forEach(function(r){return r(ye)})},get:function(){return bo[t]}})});Object.defineProperty(ye,"familyPrefix",{enumerable:!0,set:function(e){bo.cssPrefix=e,Ms.forEach(function(n){return n(ye)})},get:function(){return bo.cssPrefix}});Ti.FontAwesomeConfig=ye;var Ms=[];function HB(t){return Ms.push(t),function(){Ms.splice(Ms.indexOf(t),1)}}var ei=Ep,hr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function GB(t){if(!(!t||!Xr)){var e=at.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=at.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return at.head.insertBefore(e,r),t}}var VB="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zs(){for(var t=12,e="";t-- >0;)e+=VB[Math.random()*62|0];return e}function Bo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function bv(t){return t.classList?Bo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function iw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function WB(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(iw(t[n]),'" ')},"").trim()}function df(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Av(t){return t.size!==hr.size||t.x!==hr.x||t.y!==hr.y||t.rotate!==hr.rotate||t.flipX||t.flipY}function $B(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function jB(t){var e=t.transform,n=t.width,r=n===void 0?Ep:n,i=t.height,a=i===void 0?Ep:i,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&ZM?l+="translate(".concat(e.x/ei-r/2,"em, ").concat(e.y/ei-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/ei,"em), calc(-50% + ").concat(e.y/ei,"em)) "):l+="translate(".concat(e.x/ei,"em, ").concat(e.y/ei,"em) "),l+="scale(".concat(e.size/ei*(e.flipX?-1:1),", ").concat(e.size/ei*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var XB=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function aw(){var t=QM,e=JM,n=ye.cssPrefix,r=ye.replacementClass,i=XB;if(n!==t||r!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var tx=!1;function Kd(){ye.autoAddCss&&!tx&&(GB(aw()),tx=!0)}var YB={mixout:function(){return{dom:{css:aw,insertCss:Kd}}},hooks:function(){return{beforeDOMElementCreation:function(){Kd()},beforeI2svg:function(){Kd()}}}},Vr=Ti||{};Vr[Gr]||(Vr[Gr]={});Vr[Gr].styles||(Vr[Gr].styles={});Vr[Gr].hooks||(Vr[Gr].hooks={});Vr[Gr].shims||(Vr[Gr].shims=[]);var Jn=Vr[Gr],ow=[],qB=function t(){at.removeEventListener("DOMContentLoaded",t),Ic=1,ow.map(function(e){return e()})},Ic=!1;Xr&&(Ic=(at.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(at.readyState),Ic||at.addEventListener("DOMContentLoaded",qB));function KB(t){Xr&&(Ic?setTimeout(t,0):ow.push(t))}function gl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,a=i===void 0?[]:i;return typeof t=="string"?iw(t):"<".concat(e," ").concat(WB(r),">").concat(a.map(gl).join(""),"</").concat(e,">")}function nx(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ZB=function(e,n){return function(r,i,a,o){return e.call(n,r,i,a,o)}},Zd=function(e,n,r,i){var a=Object.keys(e),o=a.length,s=i!==void 0?ZB(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,e[u],u,e);return c};function QB(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((i&1023)<<10)+(a&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function wp(t){var e=QB(t);return e.length===1?e[0].toString(16):null}function JB(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function rx(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Tp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=rx(e);typeof Jn.hooks.addPack=="function"&&!i?Jn.hooks.addPack(t,rx(e)):Jn.styles[t]=he(he({},Jn.styles[t]||{}),a),t==="fas"&&Tp("fa",e)}var Cu,Ru,Pu,eo=Jn.styles,e5=Jn.shims,t5=(Cu={},bt(Cu,nt,Object.values(qs[nt])),bt(Cu,ht,Object.values(qs[ht])),Cu),Cv=null,sw={},lw={},uw={},cw={},fw={},n5=(Ru={},bt(Ru,nt,Object.keys(Xs[nt])),bt(Ru,ht,Object.keys(Xs[ht])),Ru);function r5(t){return~FB.indexOf(t)}function i5(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!r5(i)?i:null}var dw=function(){var e=function(a){return Zd(eo,function(o,s,l){return o[l]=Zd(s,a,{}),o},{})};sw=e(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),lw=e(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),fw=e(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in eo||ye.autoFetchSvg,r=Zd(e5,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});uw=r.names,cw=r.unicodes,Cv=hf(ye.styleDefault,{family:ye.familyDefault})};HB(function(t){Cv=hf(t.styleDefault,{family:ye.familyDefault})});dw();function Rv(t,e){return(sw[t]||{})[e]}function a5(t,e){return(lw[t]||{})[e]}function qi(t,e){return(fw[t]||{})[e]}function hw(t){return uw[t]||{prefix:null,iconName:null}}function o5(t){var e=cw[t],n=Rv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function bi(){return Cv}var Pv=function(){return{prefix:null,iconName:null,rest:[]}};function hf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?nt:n,i=Xs[r][t],a=Ys[r][t]||Ys[r][i],o=t in Jn.styles?t:null;return a||o||null}var ix=(Pu={},bt(Pu,nt,Object.keys(qs[nt])),bt(Pu,ht,Object.keys(qs[ht])),Pu);function pf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(e={},bt(e,nt,"".concat(ye.cssPrefix,"-").concat(nt)),bt(e,ht,"".concat(ye.cssPrefix,"-").concat(ht)),e),o=null,s=nt;(t.includes(a[nt])||t.some(function(u){return ix[nt].includes(u)}))&&(s=nt),(t.includes(a[ht])||t.some(function(u){return ix[ht].includes(u)}))&&(s=ht);var l=t.reduce(function(u,c){var f=i5(ye.cssPrefix,c);if(eo[c]?(c=t5[s].includes(c)?LB[s][c]:c,o=c,u.prefix=c):n5[s].indexOf(c)>-1?(o=c,u.prefix=hf(c,{family:s})):f?u.iconName=f:c!==ye.replacementClass&&c!==a[nt]&&c!==a[ht]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?hw(u.iconName):{},p=qi(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||p||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!eo.far&&eo.fas&&!ye.autoFetchSvg&&(u.prefix="fas")}return u},Pv());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ht&&(eo.fass||ye.autoFetchSvg)&&(l.prefix="fass",l.iconName=qi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=bi()||"fas"),l}var s5=function(){function t(){yB(this,t),this.definitions={}}return xB(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=he(he({},n.definitions[s]||{}),o[s]),Tp(s,o[s]);var l=qs[nt][s];l&&Tp(l,o[s]),dw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),t}(),ax=[],to={},ho={},l5=Object.keys(ho);function u5(t,e){var n=e.mixoutsTo;return ax=t,to={},Object.keys(ho).forEach(function(r){l5.indexOf(r)===-1&&delete ho[r]}),ax.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Lc(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){to[o]||(to[o]=[]),to[o].push(a[o])})}r.provides&&r.provides(ho)}),n}function bp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=to[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function pa(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=to[t]||[];i.forEach(function(a){a.apply(null,n)})}function Wr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ho[t]?ho[t].apply(null,e):void 0}function Ap(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||bi();if(e)return e=qi(n,e)||e,nx(pw.definitions,n,e)||nx(Jn.styles,n,e)}var pw=new s5,c5=function(){ye.autoReplaceSvg=!1,ye.observeMutations=!1,pa("noAuto")},f5={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xr?(pa("beforeI2svg",e),Wr("pseudoElements2svg",e),Wr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;ye.autoReplaceSvg===!1&&(ye.autoReplaceSvg=!0),ye.observeMutations=!0,KB(function(){h5({autoReplaceSvgRoot:n}),pa("watch",e)})}},d5={icon:function(e){if(e===null)return null;if(Lc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:qi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=hf(e[0]);return{prefix:r,iconName:qi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(ye.cssPrefix,"-"))>-1||e.match(IB))){var i=pf(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||bi(),iconName:qi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var a=bi();return{prefix:a,iconName:qi(a,e)||e}}}},bn={noAuto:c5,config:ye,dom:f5,parse:d5,library:pw,findIconDefinition:Ap,toHtml:gl},h5=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?at:n;(Object.keys(Jn.styles).length>0||ye.autoFetchSvg)&&Xr&&ye.autoReplaceSvg&&bn.dom.i2svg({node:r})};function mf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return gl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Xr){var r=at.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function p5(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,a=t.styles,o=t.transform;if(Av(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=df(he(he({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function m5(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(ye.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:he(he({},i),{},{id:o}),children:r}]}]}function Lv(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,h=t.watchable,p=h===void 0?!1:h,y=r.found?r:n,_=y.width,m=y.height,d=i==="fak",v=[ye.replacementClass,a?"".concat(ye.cssPrefix,"-").concat(a):""].filter(function(S){return f.classes.indexOf(S)===-1}).filter(function(S){return S!==""||!!S}).concat(f.classes).join(" "),g={children:[],attributes:he(he({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:v,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(m)})},x=d&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/m*16*.0625,"em")}:{};p&&(g.attributes[ha]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Zs())},children:[l]}),delete g.attributes.title);var M=he(he({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:he(he({},x),f.styles)}),b=r.found&&n.found?Wr("generateAbstractMask",M)||{children:[],attributes:{}}:Wr("generateAbstractIcon",M)||{children:[],attributes:{}},C=b.children,R=b.attributes;return M.children=C,M.attributes=R,s?m5(M):p5(M)}function ox(t){var e=t.content,n=t.width,r=t.height,i=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,u=he(he(he({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[ha]="");var c=he({},o.styles);Av(i)&&(c.transform=jB({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=df(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function v5(t){var e=t.content,n=t.title,r=t.extra,i=he(he(he({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=df(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Qd=Jn.styles;function Cp(t){var e=t[0],n=t[1],r=t.slice(4),i=Sv(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(ye.cssPrefix,"-").concat(Yi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ye.cssPrefix,"-").concat(Yi.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(ye.cssPrefix,"-").concat(Yi.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var g5={found:!1,width:512,height:512};function _5(t,e){!ew&&!ye.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Rp(t,e){var n=e;return e==="fa"&&ye.styleDefault!==null&&(e=bi()),new Promise(function(r,i){if(Wr("missingIconAbstract"),n==="fa"){var a=hw(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&Qd[e]&&Qd[e][t]){var o=Qd[e][t];return r(Cp(o))}_5(t,e),r(he(he({},g5),{},{icon:ye.showMissingIcons&&t?Wr("missingIconAbstract")||{}:{}}))})}var sx=function(){},Pp=ye.measurePerformance&&Eu&&Eu.mark&&Eu.measure?Eu:{mark:sx,measure:sx},fs='FA "6.4.0"',y5=function(e){return Pp.mark("".concat(fs," ").concat(e," begins")),function(){return mw(e)}},mw=function(e){Pp.mark("".concat(fs," ").concat(e," ends")),Pp.measure("".concat(fs," ").concat(e),"".concat(fs," ").concat(e," begins"),"".concat(fs," ").concat(e," ends"))},Iv={begin:y5,end:mw},Zu=function(){};function lx(t){var e=t.getAttribute?t.getAttribute(ha):null;return typeof e=="string"}function x5(t){var e=t.getAttribute?t.getAttribute(Mv):null,n=t.getAttribute?t.getAttribute(wv):null;return e&&n}function S5(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ye.replacementClass)}function E5(){if(ye.autoReplaceSvg===!0)return Qu.replace;var t=Qu[ye.autoReplaceSvg];return t||Qu.replace}function M5(t){return at.createElementNS("http://www.w3.org/2000/svg",t)}function w5(t){return at.createElement(t)}function vw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?M5:w5:n;if(typeof t=="string")return at.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){i.appendChild(vw(o,{ceFn:r}))}),i}function T5(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Qu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(vw(i),n)}),n.getAttribute(ha)===null&&ye.keepOriginalSource){var r=at.createComment(T5(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~bv(n).indexOf(ye.replacementClass))return Qu.replace(e);var i=new RegExp("".concat(ye.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===ye.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return gl(s)}).join(`
`);n.setAttribute(ha,""),n.innerHTML=o}};function ux(t){t()}function gw(t,e){var n=typeof e=="function"?e:Zu;if(t.length===0)n();else{var r=ux;ye.mutateApproach===RB&&(r=Ti.requestAnimationFrame||ux),r(function(){var i=E5(),a=Iv.begin("mutate");t.map(i),a(),n()})}}var Dv=!1;function _w(){Dv=!0}function Lp(){Dv=!1}var Dc=null;function cx(t){if(Jy&&ye.observeMutations){var e=t.treeCallback,n=e===void 0?Zu:e,r=t.nodeCallback,i=r===void 0?Zu:r,a=t.pseudoElementsCallback,o=a===void 0?Zu:a,s=t.observeMutationsRoot,l=s===void 0?at:s;Dc=new Jy(function(u){if(!Dv){var c=bi();Bo(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!lx(f.addedNodes[0])&&(ye.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&ye.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&lx(f.target)&&~UB.indexOf(f.attributeName))if(f.attributeName==="class"&&x5(f.target)){var h=pf(bv(f.target)),p=h.prefix,y=h.iconName;f.target.setAttribute(Mv,p||c),y&&f.target.setAttribute(wv,y)}else S5(f.target)&&i(f.target)})}}),Xr&&Dc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function b5(){Dc&&Dc.disconnect()}function A5(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function C5(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=pf(bv(t));return i.prefix||(i.prefix=bi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=a5(i.prefix,t.innerText)||Rv(i.prefix,wp(t.innerText))),!i.iconName&&ye.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function R5(t){var e=Bo(t.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ye.autoA11y&&(n?e["aria-labelledby"]="".concat(ye.replacementClass,"-title-").concat(r||Zs()):(e["aria-hidden"]="true",e.focusable="false")),e}function P5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:hr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=C5(t),r=n.iconName,i=n.prefix,a=n.rest,o=R5(t),s=bp("parseNodeAttributes",{},t),l=e.styleParser?A5(t):[];return he({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:hr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var L5=Jn.styles;function yw(t){var e=ye.autoReplaceSvg==="nest"?fx(t,{styleParser:!1}):fx(t);return~e.extra.classes.indexOf(tw)?Wr("generateLayersText",t,e):Wr("generateSvgReplacementMutation",t,e)}var Ai=new Set;Tv.map(function(t){Ai.add("fa-".concat(t))});Object.keys(Xs[nt]).map(Ai.add.bind(Ai));Object.keys(Xs[ht]).map(Ai.add.bind(Ai));Ai=ml(Ai);function dx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xr)return Promise.resolve();var n=at.documentElement.classList,r=function(f){return n.add("".concat(ex,"-").concat(f))},i=function(f){return n.remove("".concat(ex,"-").concat(f))},a=ye.autoFetchSvg?Ai:Tv.map(function(c){return"fa-".concat(c)}).concat(Object.keys(L5));a.includes("fa")||a.push("fa");var o=[".".concat(tw,":not([").concat(ha,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(ha,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Bo(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Iv.begin("onTree"),u=s.reduce(function(c,f){try{var h=yw(f);h&&c.push(h)}catch(p){ew||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){gw(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),f(h)})})}function I5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;yw(t).then(function(n){n&&gw([n],e)})}function D5(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Ap(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ap(i||{})),t(r,he(he({},n),{},{mask:i}))}}var O5=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?hr:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,p=n.titleId,y=p===void 0?null:p,_=n.classes,m=_===void 0?[]:_,d=n.attributes,v=d===void 0?{}:d,g=n.styles,x=g===void 0?{}:g;if(e){var M=e.prefix,b=e.iconName,C=e.icon;return mf(he({type:"icon"},e),function(){return pa("beforeDOMElementCreation",{iconDefinition:e,params:n}),ye.autoA11y&&(h?v["aria-labelledby"]="".concat(ye.replacementClass,"-title-").concat(y||Zs()):(v["aria-hidden"]="true",v.focusable="false")),Lv({icons:{main:Cp(C),mask:l?Cp(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:b,transform:he(he({},hr),i),symbol:o,title:h,maskId:c,titleId:y,extra:{attributes:v,styles:x,classes:m}})})}},N5={mixout:function(){return{icon:D5(O5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=dx,n.nodeCallback=I5,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?at:r,a=n.callback,o=a===void 0?function(){}:a;return dx(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(p,y){Promise.all([Rp(i,s),c.iconName?Rp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var m=Sv(_,2),d=m[0],v=m[1];p([n,Lv({icons:{main:d,mask:v},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:a,titleId:o,extra:h,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=df(s);l.length>0&&(i.style=l);var u;return Av(o)&&(u=Wr("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},U5={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return mf({type:"layer"},function(){pa("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ye.cssPrefix,"-layers")].concat(ml(a)).join(" ")},children:o}]})}}}},F5={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return mf({type:"counter",content:n},function(){return pa("beforeDOMElementCreation",{content:n,params:r}),v5({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(ye.cssPrefix,"-layers-counter")].concat(ml(s))}})})}}}},k5={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?hr:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,p=h===void 0?{}:h;return mf({type:"text",content:n},function(){return pa("beforeDOMElementCreation",{content:n,params:r}),ox({content:n,transform:he(he({},hr),a),title:s,extra:{attributes:f,styles:p,classes:["".concat(ye.cssPrefix,"-layers-text")].concat(ml(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(ZM){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return ye.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ox({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},z5=new RegExp('"',"ug"),hx=[1105920,1112319];function B5(t){var e=t.replace(z5,""),n=JB(e,0),r=n>=hx[0]&&n<=hx[1],i=e.length===2?e[0]===e[1]:!1;return{value:wp(i?e[0]:e),isSecondary:r||i}}function px(t,e){var n="".concat(CB).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var a=Bo(t.children),o=a.filter(function(C){return C.getAttribute(Mp)===e})[0],s=Ti.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(DB),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ht:nt,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ys[h][l[2].toLowerCase()]:OB[h][u],y=B5(f),_=y.value,m=y.isSecondary,d=l[0].startsWith("FontAwesome"),v=Rv(p,_),g=v;if(d){var x=o5(_);x.iconName&&x.prefix&&(v=x.iconName,p=x.prefix)}if(v&&!m&&(!o||o.getAttribute(Mv)!==p||o.getAttribute(wv)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var M=P5(),b=M.extra;b.attributes[Mp]=e,Rp(v,p).then(function(C){var R=Lv(he(he({},M),{},{icons:{main:C,mask:Pv()},prefix:p,iconName:g,extra:b,watchable:!0})),S=at.createElement("svg");e==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=R.map(function(T){return gl(T)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function H5(t){return Promise.all([px(t,"::before"),px(t,"::after")])}function G5(t){return t.parentNode!==document.head&&!~PB.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Mp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function mx(t){if(Xr)return new Promise(function(e,n){var r=Bo(t.querySelectorAll("*")).filter(G5).map(H5),i=Iv.begin("searchPseudoElements");_w(),Promise.all(r).then(function(){i(),Lp(),e()}).catch(function(){i(),Lp(),n()})})}var V5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=mx,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?at:r;ye.searchPseudoElements&&mx(i)}}},vx=!1,W5={mixout:function(){return{dom:{unwatch:function(){_w(),vx=!0}}}},hooks:function(){return{bootstrap:function(){cx(bp("mutationObserverCallbacks",{}))},noAuto:function(){b5()},watch:function(n){var r=n.observeMutationsRoot;vx?Lp():cx(bp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},gx=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},$5={mixout:function(){return{parse:{transform:function(n){return gx(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=gx(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:f,path:h};return{tag:"g",attributes:he({},p.outer),children:[{tag:"g",attributes:he({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:he(he({},r.icon.attributes),p.path)}]}]}}}},Jd={x:0,y:0,width:"100%",height:"100%"};function _x(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function j5(t){return t.tag==="g"?t.children:[t]}var X5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?pf(i.split(" ").map(function(o){return o.trim()})):Pv();return a.prefix||(a.prefix=bi()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,f=o.width,h=o.icon,p=$B({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:he(he({},Jd),{},{fill:"white"})},_=c.children?{children:c.children.map(_x)}:{},m={tag:"g",attributes:he({},p.inner),children:[_x(he({tag:c.tag,attributes:he(he({},c.attributes),p.path)},_))]},d={tag:"g",attributes:he({},p.outer),children:[m]},v="mask-".concat(s||Zs()),g="clip-".concat(s||Zs()),x={tag:"mask",attributes:he(he({},Jd),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,d]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:j5(h)},x]};return r.push(M,{tag:"rect",attributes:he({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(v,")")},Jd)}),{children:r,attributes:i}}}},Y5={provides:function(e){var n=!1;Ti.matchMedia&&(n=Ti.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:he(he({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=he(he({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:he(he({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:he(he({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:he(he({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:he(he({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:he(he({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:he(he({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:he(he({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},q5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},K5=[YB,N5,U5,F5,k5,V5,W5,$5,X5,Y5,q5];u5(K5,{mixoutsTo:bn});bn.noAuto;bn.config;bn.library;bn.dom;var Ip=bn.parse;bn.findIconDefinition;bn.toHtml;var Z5=bn.icon;bn.layer;bn.text;bn.counter;var xw={exports:{}},Q5="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",J5=Q5,eH=J5;function Sw(){}function Ew(){}Ew.resetWarningCache=Sw;var tH=function(){function t(r,i,a,o,s,l){if(l!==eH){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ew,resetWarningCache:Sw};return n.PropTypes=n,n};xw.exports=tH();var nH=xw.exports;const He=Sx(nH);function yx(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function fi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yx(Object(n),!0).forEach(function(r){no(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yx(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Oc(t){"@babel/helpers - typeof";return Oc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oc(t)}function no(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rH(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function iH(t,e){if(t==null)return{};var n=rH(t,e),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Dp(t){return aH(t)||oH(t)||sH(t)||lH()}function aH(t){if(Array.isArray(t))return Op(t)}function oH(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function sH(t,e){if(t){if(typeof t=="string")return Op(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Op(t,e)}}function Op(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function lH(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uH(t){var e,n=t.beat,r=t.fade,i=t.beatFade,a=t.bounce,o=t.shake,s=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,h=t.fixedWidth,p=t.inverse,y=t.border,_=t.listItem,m=t.flip,d=t.size,v=t.rotation,g=t.pull,x=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":p,"fa-border":y,"fa-li":_,"fa-flip":m===!0,"fa-flip-horizontal":m==="horizontal"||m==="both","fa-flip-vertical":m==="vertical"||m==="both"},no(e,"fa-".concat(d),typeof d<"u"&&d!==null),no(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),no(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),no(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(x).map(function(M){return x[M]?M:null}).filter(function(M){return M})}function cH(t){return t=t-0,t===t}function Mw(t){return cH(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var fH=["style"];function dH(t){return t.charAt(0).toUpperCase()+t.slice(1)}function hH(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Mw(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?e[dH(i)]=a:e[i]=a,e},{})}function ww(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ww(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=hH(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Mw(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=iH(n,fH);return i.attrs.style=fi(fi({},i.attrs.style),o),t.apply(void 0,[e.tag,fi(fi({},i.attrs),s)].concat(Dp(r)))}var Tw=!1;try{Tw=!0}catch{}function pH(){if(!Tw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function xx(t){if(t&&Oc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ip.icon)return Ip.icon(t);if(t===null)return null;if(t&&Oc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function eh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?no({},t,e):{}}var Ci=zp.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,a=t.className,o=t.title,s=t.titleId,l=t.maskId,u=xx(n),c=eh("classes",[].concat(Dp(uH(t)),Dp(a.split(" ")))),f=eh("transform",typeof t.transform=="string"?Ip.transform(t.transform):t.transform),h=eh("mask",xx(r)),p=Z5(u,fi(fi(fi(fi({},c),f),h),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!p)return pH("Could not find icon",u),null;var y=p.abstract,_={ref:e};return Object.keys(t).forEach(function(m){Ci.defaultProps.hasOwnProperty(m)||(_[m]=t[m])}),mH(y[0],_)});Ci.displayName="FontAwesomeIcon";Ci.propTypes={beat:He.bool,border:He.bool,beatFade:He.bool,bounce:He.bool,className:He.string,fade:He.bool,flash:He.bool,mask:He.oneOfType([He.object,He.array,He.string]),maskId:He.string,fixedWidth:He.bool,inverse:He.bool,flip:He.oneOf([!0,!1,"horizontal","vertical","both"]),icon:He.oneOfType([He.object,He.array,He.string]),listItem:He.bool,pull:He.oneOf(["right","left"]),pulse:He.bool,rotation:He.oneOf([0,90,180,270]),shake:He.bool,size:He.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:He.bool,spinPulse:He.bool,spinReverse:He.bool,symbol:He.oneOfType([He.bool,He.string]),title:He.string,titleId:He.string,transform:He.oneOfType([He.string,He.object]),swapOpacity:He.bool};Ci.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var mH=ww.bind(null,zp.createElement),vH={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},gH={prefix:"fas",iconName:"left-long",icon:[512,512,["long-arrow-alt-left"],"f30a","M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z"]},_H={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]};function yH(){const t=_a(),e=t.state.connectWallet?"-translate-x-[125%] md:-translate-x-[110%]":"translate-x-0",n=()=>{t.updateState("connectWallet",!1)};return q.jsxs("div",{className:`w-2/3 h-fit md:w-96 md:h-96 bg-black text-white fixed top-32 left-[100vw] md:top-32 md:left-[100vw] transition-transform duration-1000 ${e} flex flex-col items-start gap-y-7 px-10 py-10 rounded-2xl border-yellow-500 border`,children:[q.jsx("h3",{className:"font-bold",children:"CONNECT YOUR WALLET"}),q.jsx("p",{className:"text-sm",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad mollitia asperiores inventore dolore id adipisci consectetur, dignissimos suscipit cumque, quibusdam illo quis et nihil provident minus fugit, placeat nam!"}),q.jsx("button",{className:"absolute top-5 right-5",onClick:n,children:q.jsx(Ci,{icon:_H})}),q.jsx("button",{onClick:()=>alert("This is a demo by richiCoder!"),className:"bg-white text-black px-5 py-3 rounded-md md:hover:bg-yellow-500 duration-200",children:"CONNECT NOW"})]})}function xH(){const t=_a(),e=()=>{t.updateState("menu",!t.state.menu)},n=()=>{t.updateState("connectWallet",!0)};return q.jsxs("div",{className:"w-full h-full flex flex-row items-center justify-between py-2 px-3 md:px-10",children:[q.jsx("button",{className:"text-2xl",onClick:e,children:q.jsx(Ci,{icon:vH})}),q.jsx("div",{className:"logo text-xl md:text-2xl",children:"3dGallery"}),q.jsx("button",{className:"bg-white px-2 md:px-3 rounded-md h-full text-black text-xs md:text-sm sm:hover:bg-yellow-500 duration-200",onClick:n,children:"CONNECT TO WALLET"})]})}function SH(){const e=_a().state.menu?"translate-x-0":"-translate-x-full md:-translate-x-[300%]";return q.jsxs("div",{className:`w-screen h-screen md:w-1/2 md:h-[80vh] bg-black fixed top-0 left-0 md:top-20 md:left-10 transition-transform duration-1000 ${e} text-sm flex flex-col items-center justify-end pb-24 md:pb-10 gap-y-10 pl-10 rounded-2xl md:border-yellow-500 md:border -z-10`,children:[q.jsx("h2",{className:"text-3xl text-left w-full",children:"Art Auctions"}),q.jsx("h3",{className:"text-left w-full",children:"THE NEXT 100 YEARS"}),q.jsxs("ul",{className:"text-white flex flex-col items-start w-full",children:[q.jsx("li",{children:q.jsx("a",{children:"ARTISTS"})}),q.jsx("li",{children:q.jsx("a",{children:"FAQ"})}),q.jsx("li",{children:q.jsx("a",{children:"TIPS"})}),q.jsx("li",{children:q.jsx("a",{children:"ABOUT THIS"})})]}),q.jsxs("ul",{className:"text-gray-500 flex flex-col items-start w-full",children:[q.jsx("li",{children:q.jsx("a",{children:"JOIN US"})}),q.jsx("li",{children:q.jsx("a",{children:"VISIT US"})}),q.jsx("li",{children:q.jsx("a",{children:"TERMS OF SERVICE"})}),q.jsx("li",{children:q.jsx("a",{children:"PRIVACY POLICY"})})]}),q.jsx("div",{className:"w-full",children:q.jsx("hr",{className:"w-[100%] border-gray-500"})}),q.jsxs("div",{className:"flex flex-row items-center justify-start gap-x-5 text-xs self-start",children:[q.jsx("p",{children:"IN PARTNERSHIP WITH RICHICODER"}),q.jsx("div",{children:"LOGO"})]})]})}function EH(){return q.jsxs("div",{id:"header",className:"fixed top-0 left-0 w-screen h-[50px] text-2xl text-white z-50 backdrop-blur bg-[rgba(0,0,0,0.7)] overflow-x-clip",children:[q.jsx(xH,{}),q.jsx(SH,{}),q.jsx(yH,{})]})}var MH={prefix:"far",iconName:"share-from-square",icon:[576,512,[61509,"share-square"],"f14d","M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"]},wH=MH;function TH(){const t=Dm(),e=_a(),n=Im().pathname.split("/"),r=n[n.length-1],i=e.state.data,a=i.filter(c=>c.id===r),o=a[a.length-1],s=o!=null?o.alt_description.toUpperCase():"No title available",l=o&&o.user&&o.user.first_name?o.user.first_name.toUpperCase():"",u=o&&o.user&&o.user.last_name?o.user.last_name.toUpperCase():"";return de.useEffect(()=>{r!==""&&setTimeout(()=>{e.updateKeys({layer:!0}),t(`/3dGallery/${r}`)},1e3)},[]),q.jsx(q.Fragment,{children:i.length<1?null:o?q.jsxs(q.Fragment,{children:[q.jsx("div",{id:"square-picture",className:"w-full md:w-1/2 h-1/3 md:h-full bg-black",children:q.jsx("img",{className:"w-full h-full object-cover",src:o.urls.regular,alt:o.description})}),q.jsx("div",{id:"square-info",className:"flex flex-col w-full md:w-1/2 h-2/3 md:h-full bg-white text-black text-3xl pt-10 md:pt-24",children:q.jsxs("div",{className:"flex flex-col items-start px-10 text-xl overflow-auto",children:[q.jsx("h2",{className:"text-5xl italic",children:s}),q.jsxs("div",{className:"flex flex-row items-center gap-x-3 text-sm mt-5",children:[q.jsxs("h3",{className:"border-b border-black",children:[l," ",u]}),q.jsxs("span",{children:["@",o.user.instagram_username]})]}),q.jsx("p",{className:"text-lg mt-10",children:o.description}),q.jsxs("ul",{className:"grid grid-cols-2 md:grid-cols-2 gap-x-6 md:gap-x-16 content-center text-sm mt-10",children:[q.jsxs("li",{children:["Creation date: ",o.created_at]}),q.jsxs("li",{children:["Likes: ",o.likes]}),q.jsxs("li",{children:["Width: ",o.width]}),q.jsxs("li",{children:["Height: ",o.height]})]}),q.jsx("hr",{className:"w-[100%] border-gray-500 my-10"}),q.jsxs("div",{className:"w-full",children:[q.jsxs("p",{className:"font-bold text-2xl text-gray-700",children:[o.likes," LIKECOIN"]}),q.jsxs("div",{className:"flex flex-row w-full items-center justify-between text-sm",children:[q.jsx("p",{className:"text-gray-700",children:"STARTING PRICE"}),q.jsx("p",{className:"text-gray-400",children:"NO BIDDING HISTORY"})]}),q.jsx("br",{}),q.jsxs("form",{onSubmit:c=>{c.preventDefault(),alert("This is a demo by richiCoder!")},className:"flex flex-row w-full text-sm gap-x-5",children:[q.jsx("input",{type:"text",className:"border px-2 py-3 w-2/3",placeholder:o.likes}),q.jsx("button",{className:"bg-black px-2 py-3 text-white w-1/3",children:"PLACE BID"})]})]})]})})]}):null})}function bH(){const t=_a(),e=Dm(),[n,r]=de.useState("-z-[60] hidden"),[i,a]=de.useState("-translate-x-full");de.useEffect(()=>{t.state.layer?(r("z-[60] block"),setTimeout(()=>{a("translate-x-0")},100)):(a("-translate-x-full"),setTimeout(()=>{r("-z-[60] hidden")},500))},[t.state.layer]);const o=()=>{t.updateState("layer",!1),e("/3dGallery/")};return q.jsx("div",{id:"layer",className:`fixed top-0 mt-[50px] left-0 w-screen h-[95vh] text-white ${n}`,children:q.jsxs("div",{className:`w-full h-full bg-white text-white transition-transform duration-500 ${i} flex flex-row-reverse flex-wrap relative`,children:[q.jsxs("div",{className:"w-full md:w-1/2 bg-white py-2 md:py-4 text-gray-700 text-md absolute top-0 left-0",children:[q.jsxs("button",{className:"float-left ms-5",onClick:o,children:[q.jsx(Ci,{icon:gH}),"  GO BACK"]}),q.jsxs("button",{className:"float-right me-5",children:["SHARE  ",q.jsx(Ci,{icon:wH})]})]}),q.jsx(VE,{children:q.jsx(Om,{path:"*",element:q.jsx(TH,{})})})]})})}function AH({children:t}){return q.jsx("div",{id:"scroller",className:"fixed h-[20000px]",children:t})}function CH(){return q.jsx(XA,{children:q.jsx(VE,{children:q.jsx(Om,{path:"/3dGallery/*",element:q.jsxs(q.Fragment,{children:[q.jsx(EH,{}),q.jsx(AH,{}),q.jsx(bH,{}),q.jsx(_B,{})]})})})})}function RH(){const t=_a(),[e,n]=de.useState("z-[100] block bg-black text-white"),[r,i]=de.useState("translate-y-[100%] opacity-0"),[a,o]=de.useState("opacity-0");return de.useEffect(()=>{t.state.data.length==0&&setTimeout(()=>{i("translate-y-[0%] opacity-100"),setTimeout(()=>{o("opacity-100"),n("z-[100] block bg-yellow-500 text-black")},1500)},500),setTimeout(()=>{t.state.data.length>0&&(i("-translate-y-[200%] opacity-0"),setTimeout(()=>{n("-z-[100] hidden opacity-0")},1500))},5e3)},[t.state.data[0]]),q.jsxs("div",{id:"presentation",className:`fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-end transition-all duration-500 ${e} gap-y-[45vh]`,children:[q.jsxs("div",{className:"flex flex-col items-center gap-y-5 md:gap-y-10 w-screen md:w-fit",children:[q.jsxs("div",{id:"presentation-content",className:`flex flex-row items-center justify-center gap-x-[5vw] md:gap-x-10 text-xl md:text-3xl w-full md:w-fit h-fit ${r} transition-all duration-1000 ease-in-out`,children:[q.jsx("div",{className:"logo",children:"3dGallery"}),q.jsx("div",{children:"|"}),q.jsxs("h1",{className:"text-center p-0 m-0 richi-logo",children:["richi",q.jsx("span",{className:"text-gradient",children:"Coder"})]})]}),q.jsxs("div",{className:`text-sm md:text-xl italic duration-1000 delay-500 ease-in-out ${r}`,children:["For ",q.jsx("strong",{children:"Facundo Meire's"})," requirement"]})]}),q.jsx("span",{className:`loaderPresentation justify-self-end duration-500 ${a}`})]})}th.createRoot(document.getElementById("root")).render(q.jsxs(gB,{children:[q.jsx(RH,{}),q.jsx(CH,{})]}));

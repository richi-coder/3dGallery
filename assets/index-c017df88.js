var X1=Object.defineProperty;var Y1=(t,e,n)=>e in t?X1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Pe=(t,e,n)=>(Y1(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $y(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jy={exports:{}},Ac={},Xy={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws=Symbol.for("react.element"),q1=Symbol.for("react.portal"),K1=Symbol.for("react.fragment"),Z1=Symbol.for("react.strict_mode"),Q1=Symbol.for("react.profiler"),J1=Symbol.for("react.provider"),ew=Symbol.for("react.context"),tw=Symbol.for("react.forward_ref"),nw=Symbol.for("react.suspense"),rw=Symbol.for("react.memo"),iw=Symbol.for("react.lazy"),yv=Symbol.iterator;function aw(t){return t===null||typeof t!="object"?null:(t=yv&&t[yv]||t["@@iterator"],typeof t=="function"?t:null)}var Yy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qy=Object.assign,Ky={};function Mo(t,e,n){this.props=t,this.context=e,this.refs=Ky,this.updater=n||Yy}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zy(){}Zy.prototype=Mo.prototype;function xp(t,e,n){this.props=t,this.context=e,this.refs=Ky,this.updater=n||Yy}var Sp=xp.prototype=new Zy;Sp.constructor=xp;qy(Sp,Mo.prototype);Sp.isPureReactComponent=!0;var xv=Array.isArray,Qy=Object.prototype.hasOwnProperty,Ep={current:null},Jy={key:!0,ref:!0,__self:!0,__source:!0};function ex(t,e,n){var r,i={},a=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)Qy.call(e,r)&&!Jy.hasOwnProperty(r)&&(i[r]=e[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in s=t.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ws,type:t,key:a,ref:o,props:i,_owner:Ep.current}}function ow(t,e){return{$$typeof:Ws,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ws}function sw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sv=/\/+/g;function cf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sw(""+t.key):e.toString(36)}function wu(t,e,n,r,i){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ws:case q1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cf(o,0):r,xv(i)?(n="",t!=null&&(n=t.replace(Sv,"$&/")+"/"),wu(i,e,n,"",function(u){return u})):i!=null&&(Mp(i)&&(i=ow(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",xv(t))for(var s=0;s<t.length;s++){a=t[s];var l=r+cf(a,s);o+=wu(a,e,n,l,i)}else if(l=aw(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=r+cf(a,s++),o+=wu(a,e,n,l,i);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function hl(t,e,n){if(t==null)return t;var r=[],i=0;return wu(t,r,"","",function(a){return e.call(n,a,i++)}),r}function lw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Tu={transition:null},uw={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Tu,ReactCurrentOwner:Ep};Ge.Children={map:hl,forEach:function(t,e,n){hl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hl(t,function(){e++}),e},toArray:function(t){return hl(t,function(e){return e})||[]},only:function(t){if(!Mp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Mo;Ge.Fragment=K1;Ge.Profiler=Q1;Ge.PureComponent=xp;Ge.StrictMode=Z1;Ge.Suspense=nw;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uw;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qy({},t.props),i=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=Ep.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)Qy.call(e,l)&&!Jy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ws,type:t.type,key:i,ref:a,props:r,_owner:o}};Ge.createContext=function(t){return t={$$typeof:ew,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:J1,_context:t},t.Consumer=t};Ge.createElement=ex;Ge.createFactory=function(t){var e=ex.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:tw,render:t}};Ge.isValidElement=Mp;Ge.lazy=function(t){return{$$typeof:iw,_payload:{_status:-1,_result:t},_init:lw}};Ge.memo=function(t,e){return{$$typeof:rw,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=Tu.transition;Tu.transition={};try{t()}finally{Tu.transition=e}};Ge.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ge.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Ge.useContext=function(t){return Qt.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Ge.useId=function(){return Qt.current.useId()};Ge.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Ge.useRef=function(t){return Qt.current.useRef(t)};Ge.useState=function(t){return Qt.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return Qt.current.useTransition()};Ge.version="18.2.0";Xy.exports=Ge;var dr=Xy.exports;const tx=$y(dr);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cw=dr,fw=Symbol.for("react.element"),dw=Symbol.for("react.fragment"),hw=Object.prototype.hasOwnProperty,pw=cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mw={key:!0,ref:!0,__self:!0,__source:!0};function nx(t,e,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hw.call(e,r)&&!mw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fw,type:t,key:a,ref:o,props:i,_owner:pw.current}}Ac.Fragment=dw;Ac.jsx=nx;Ac.jsxs=nx;jy.exports=Ac;var pe=jy.exports,Vd={},rx={exports:{}},xn={},ix={exports:{}},ax={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,B){var k=L.length;L.push(B);e:for(;0<k;){var ie=k-1>>>1,I=L[ie];if(0<i(I,B))L[ie]=B,L[k]=I,k=ie;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var B=L[0],k=L.pop();if(k!==B){L[0]=k;e:for(var ie=0,I=L.length,Q=I>>>1;ie<Q;){var Z=2*(ie+1)-1,ce=L[Z],ue=Z+1,_e=L[ue];if(0>i(ce,k))ue<I&&0>i(_e,ce)?(L[ie]=_e,L[ue]=k,ie=ue):(L[ie]=ce,L[Z]=k,ie=Z);else if(ue<I&&0>i(_e,k))L[ie]=_e,L[ue]=k,ie=ue;else break e}}return B}function i(L,B){var k=L.sortIndex-B.sortIndex;return k!==0?k:L.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,f=null,h=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=L)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function x(L){if(y=!1,g(L),!_)if(n(l)!==null)_=!0,K(M);else{var B=n(u);B!==null&&V(x,B.startTime-L)}}function M(L,B){_=!1,y&&(y=!1,d(P),P=-1),p=!0;var k=h;try{for(g(B),f=n(l);f!==null&&(!(f.expirationTime>B)||L&&!X());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,h=f.priorityLevel;var I=ie(f.expirationTime<=B);B=t.unstable_now(),typeof I=="function"?f.callback=I:f===n(l)&&r(l),g(B)}else r(l);f=n(l)}if(f!==null)var Q=!0;else{var Z=n(u);Z!==null&&V(x,Z.startTime-B),Q=!1}return Q}finally{f=null,h=k,p=!1}}var A=!1,R=null,P=-1,S=5,T=-1;function X(){return!(t.unstable_now()-T<S)}function q(){if(R!==null){var L=t.unstable_now();T=L;var B=!0;try{B=R(!0,L)}finally{B?O():(A=!1,R=null)}}else A=!1}var O;if(typeof v=="function")O=function(){v(q)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,G=F.port2;F.port1.onmessage=q,O=function(){G.postMessage(null)}}else O=function(){m(q,0)};function K(L){R=L,A||(A=!0,O())}function V(L,B){P=m(function(){L(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,K(M))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var k=h;h=B;try{return L()}finally{h=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var k=h;h=L;try{return B()}finally{h=k}},t.unstable_scheduleCallback=function(L,B,k){var ie=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?ie+k:ie):k=ie,L){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=k+I,L={id:c++,callback:B,priorityLevel:L,startTime:k,expirationTime:I,sortIndex:-1},k>ie?(L.sortIndex=k,e(u,L),n(l)===null&&L===n(u)&&(y?(d(P),P=-1):y=!0,V(x,k-ie))):(L.sortIndex=I,e(l,L),_||p||(_=!0,K(M))),L},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(L){var B=h;return function(){var k=h;h=B;try{return L.apply(this,arguments)}finally{h=k}}}})(ax);ix.exports=ax;var vw=ix.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox=dr,yn=vw;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sx=new Set,_s={};function da(t,e){uo(t,e),uo(t+"Capture",e)}function uo(t,e){for(_s[t]=e,t=0;t<e.length;t++)sx.add(e[t])}var Ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wd=Object.prototype.hasOwnProperty,gw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ev={},Mv={};function _w(t){return Wd.call(Mv,t)?!0:Wd.call(Ev,t)?!1:gw.test(t)?Mv[t]=!0:(Ev[t]=!0,!1)}function yw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xw(t,e,n,r){if(e===null||typeof e>"u"||yw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,r,i,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wp=/[\-:]([a-z])/g;function Tp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wp,Tp);Ft[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wp,Tp);Ft[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wp,Tp);Ft[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function bp(t,e,n,r){var i=Ft.hasOwnProperty(e)?Ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xw(e,n,i,r)&&(n=null),r||i===null?_w(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wr=ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Ua=Symbol.for("react.portal"),Fa=Symbol.for("react.fragment"),Ap=Symbol.for("react.strict_mode"),$d=Symbol.for("react.profiler"),lx=Symbol.for("react.provider"),ux=Symbol.for("react.context"),Rp=Symbol.for("react.forward_ref"),jd=Symbol.for("react.suspense"),Xd=Symbol.for("react.suspense_list"),Cp=Symbol.for("react.memo"),ei=Symbol.for("react.lazy"),cx=Symbol.for("react.offscreen"),wv=Symbol.iterator;function Uo(t){return t===null||typeof t!="object"?null:(t=wv&&t[wv]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Object.assign,ff;function es(t){if(ff===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ff=e&&e[1]||""}return`
`+ff+t}var df=!1;function hf(t,e){if(!t||df)return"";df=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{df=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?es(t):""}function Sw(t){switch(t.tag){case 5:return es(t.type);case 16:return es("Lazy");case 13:return es("Suspense");case 19:return es("SuspenseList");case 0:case 2:case 15:return t=hf(t.type,!1),t;case 11:return t=hf(t.type.render,!1),t;case 1:return t=hf(t.type,!0),t;default:return""}}function Yd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fa:return"Fragment";case Ua:return"Portal";case $d:return"Profiler";case Ap:return"StrictMode";case jd:return"Suspense";case Xd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ux:return(t.displayName||"Context")+".Consumer";case lx:return(t._context.displayName||"Context")+".Provider";case Rp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cp:return e=t.displayName||null,e!==null?e:Yd(t.type)||"Memo";case ei:e=t._payload,t=t._init;try{return Yd(t(e))}catch{}}return null}function Ew(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yd(e);case 8:return e===Ap?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mw(t){var e=fx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ml(t){t._valueTracker||(t._valueTracker=Mw(t))}function dx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=fx(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ju(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qd(t,e){var n=e.checked;return lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hx(t,e){e=e.checked,e!=null&&bp(t,"checked",e,!1)}function Kd(t,e){hx(t,e);var n=xi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zd(t,e.type,xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zd(t,e,n){(e!=="number"||ju(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ts=Array.isArray;function Ja(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Av(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(ts(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xi(n)}}function px(t,e){var n=xi(e.value),r=xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Rv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vl,vx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vl=vl||document.createElement("div"),vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ww=["Webkit","ms","Moz","O"];Object.keys(os).forEach(function(t){ww.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),os[e]=os[t]})});function gx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||os.hasOwnProperty(t)&&os[t]?(""+e).trim():e+"px"}function _x(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gx(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Tw=lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eh(t,e){if(e){if(Tw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function th(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nh=null;function Pp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rh=null,eo=null,to=null;function Cv(t){if(t=Xs(t)){if(typeof rh!="function")throw Error(J(280));var e=t.stateNode;e&&(e=Ic(e),rh(t.stateNode,t.type,e))}}function yx(t){eo?to?to.push(t):to=[t]:eo=t}function xx(){if(eo){var t=eo,e=to;if(to=eo=null,Cv(t),e)for(t=0;t<e.length;t++)Cv(e[t])}}function Sx(t,e){return t(e)}function Ex(){}var pf=!1;function Mx(t,e,n){if(pf)return t(e,n);pf=!0;try{return Sx(t,e,n)}finally{pf=!1,(eo!==null||to!==null)&&(Ex(),xx())}}function xs(t,e){var n=t.stateNode;if(n===null)return null;var r=Ic(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var ih=!1;if(Ur)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){ih=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{ih=!1}function bw(t,e,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ss=!1,Xu=null,Yu=!1,ah=null,Aw={onError:function(t){ss=!0,Xu=t}};function Rw(t,e,n,r,i,a,o,s,l){ss=!1,Xu=null,bw.apply(Aw,arguments)}function Cw(t,e,n,r,i,a,o,s,l){if(Rw.apply(this,arguments),ss){if(ss){var u=Xu;ss=!1,Xu=null}else throw Error(J(198));Yu||(Yu=!0,ah=u)}}function ha(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pv(t){if(ha(t)!==t)throw Error(J(188))}function Pw(t){var e=t.alternate;if(!e){if(e=ha(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Pv(i),t;if(a===r)return Pv(i),e;a=a.sibling}throw Error(J(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==r)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function Tx(t){return t=Pw(t),t!==null?bx(t):null}function bx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bx(t);if(e!==null)return e;t=t.sibling}return null}var Ax=yn.unstable_scheduleCallback,Lv=yn.unstable_cancelCallback,Lw=yn.unstable_shouldYield,Iw=yn.unstable_requestPaint,pt=yn.unstable_now,Dw=yn.unstable_getCurrentPriorityLevel,Lp=yn.unstable_ImmediatePriority,Rx=yn.unstable_UserBlockingPriority,qu=yn.unstable_NormalPriority,Ow=yn.unstable_LowPriority,Cx=yn.unstable_IdlePriority,Rc=null,hr=null;function Nw(t){if(hr&&typeof hr.onCommitFiberRoot=="function")try{hr.onCommitFiberRoot(Rc,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:kw,Uw=Math.log,Fw=Math.LN2;function kw(t){return t>>>=0,t===0?32:31-(Uw(t)/Fw|0)|0}var gl=64,_l=4194304;function ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ku(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,a=t.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=ns(s):(a&=o,a!==0&&(r=ns(a)))}else o=n&~i,o!==0?r=ns(o):a!==0&&(r=ns(a));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,a=e&-e,i>=a||i===16&&(a&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qn(e),i=1<<n,r|=t[n],e&=~i;return r}function zw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-Qn(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=zw(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Px(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function mf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $s(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function Hw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qn(n),a=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~a}}function Ip(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Xe=0;function Lx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ix,Dp,Dx,Ox,Nx,sh=!1,yl=[],ci=null,fi=null,di=null,Ss=new Map,Es=new Map,ri=[],Gw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Iv(t,e){switch(t){case"focusin":case"focusout":ci=null;break;case"dragenter":case"dragleave":fi=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":Ss.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(e.pointerId)}}function ko(t,e,n,r,i,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},e!==null&&(e=Xs(e),e!==null&&Dp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Vw(t,e,n,r,i){switch(e){case"focusin":return ci=ko(ci,t,e,n,r,i),!0;case"dragenter":return fi=ko(fi,t,e,n,r,i),!0;case"mouseover":return di=ko(di,t,e,n,r,i),!0;case"pointerover":var a=i.pointerId;return Ss.set(a,ko(Ss.get(a)||null,t,e,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Es.set(a,ko(Es.get(a)||null,t,e,n,r,i)),!0}return!1}function Ux(t){var e=Vi(t.target);if(e!==null){var n=ha(e);if(n!==null){if(e=n.tag,e===13){if(e=wx(n),e!==null){t.blockedOn=e,Nx(t.priority,function(){Dx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nh=r,n.target.dispatchEvent(r),nh=null}else return e=Xs(n),e!==null&&Dp(e),t.blockedOn=n,!1;e.shift()}return!0}function Dv(t,e,n){bu(t)&&n.delete(e)}function Ww(){sh=!1,ci!==null&&bu(ci)&&(ci=null),fi!==null&&bu(fi)&&(fi=null),di!==null&&bu(di)&&(di=null),Ss.forEach(Dv),Es.forEach(Dv)}function zo(t,e){t.blockedOn===e&&(t.blockedOn=null,sh||(sh=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,Ww)))}function Ms(t){function e(i){return zo(i,t)}if(0<yl.length){zo(yl[0],t);for(var n=1;n<yl.length;n++){var r=yl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ci!==null&&zo(ci,t),fi!==null&&zo(fi,t),di!==null&&zo(di,t),Ss.forEach(e),Es.forEach(e),n=0;n<ri.length;n++)r=ri[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ri.length&&(n=ri[0],n.blockedOn===null);)Ux(n),n.blockedOn===null&&ri.shift()}var no=Wr.ReactCurrentBatchConfig,Zu=!0;function $w(t,e,n,r){var i=Xe,a=no.transition;no.transition=null;try{Xe=1,Op(t,e,n,r)}finally{Xe=i,no.transition=a}}function jw(t,e,n,r){var i=Xe,a=no.transition;no.transition=null;try{Xe=4,Op(t,e,n,r)}finally{Xe=i,no.transition=a}}function Op(t,e,n,r){if(Zu){var i=lh(t,e,n,r);if(i===null)Tf(t,e,r,Qu,n),Iv(t,r);else if(Vw(i,t,e,n,r))r.stopPropagation();else if(Iv(t,r),e&4&&-1<Gw.indexOf(t)){for(;i!==null;){var a=Xs(i);if(a!==null&&Ix(a),a=lh(t,e,n,r),a===null&&Tf(t,e,r,Qu,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Tf(t,e,r,null,n)}}var Qu=null;function lh(t,e,n,r){if(Qu=null,t=Pp(r),t=Vi(t),t!==null)if(e=ha(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qu=t,null}function Fx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dw()){case Lp:return 1;case Rx:return 4;case qu:case Ow:return 16;case Cx:return 536870912;default:return 16}default:return 16}}var ai=null,Np=null,Au=null;function kx(){if(Au)return Au;var t,e=Np,n=e.length,r,i="value"in ai?ai.value:ai.textContent,a=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[a-r];r++);return Au=i.slice(t,1<r?1-r:void 0)}function Ru(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function Ov(){return!1}function Sn(t){function e(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?xl:Ov,this.isPropagationStopped=Ov,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Up=Sn(wo),js=lt({},wo,{view:0,detail:0}),Xw=Sn(js),vf,gf,Bo,Cc=lt({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bo&&(Bo&&t.type==="mousemove"?(vf=t.screenX-Bo.screenX,gf=t.screenY-Bo.screenY):gf=vf=0,Bo=t),vf)},movementY:function(t){return"movementY"in t?t.movementY:gf}}),Nv=Sn(Cc),Yw=lt({},Cc,{dataTransfer:0}),qw=Sn(Yw),Kw=lt({},js,{relatedTarget:0}),_f=Sn(Kw),Zw=lt({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),Qw=Sn(Zw),Jw=lt({},wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eT=Sn(Jw),tT=lt({},wo,{data:0}),Uv=Sn(tT),nT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iT[t])?!!e[t]:!1}function Fp(){return aT}var oT=lt({},js,{key:function(t){if(t.key){var e=nT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ru(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fp,charCode:function(t){return t.type==="keypress"?Ru(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ru(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sT=Sn(oT),lT=lt({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fv=Sn(lT),uT=lt({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fp}),cT=Sn(uT),fT=lt({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),dT=Sn(fT),hT=lt({},Cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pT=Sn(hT),mT=[9,13,27,32],kp=Ur&&"CompositionEvent"in window,ls=null;Ur&&"documentMode"in document&&(ls=document.documentMode);var vT=Ur&&"TextEvent"in window&&!ls,zx=Ur&&(!kp||ls&&8<ls&&11>=ls),kv=String.fromCharCode(32),zv=!1;function Bx(t,e){switch(t){case"keyup":return mT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ka=!1;function gT(t,e){switch(t){case"compositionend":return Hx(e);case"keypress":return e.which!==32?null:(zv=!0,kv);case"textInput":return t=e.data,t===kv&&zv?null:t;default:return null}}function _T(t,e){if(ka)return t==="compositionend"||!kp&&Bx(t,e)?(t=kx(),Au=Np=ai=null,ka=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zx&&e.locale!=="ko"?null:e.data;default:return null}}var yT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yT[t.type]:e==="textarea"}function Gx(t,e,n,r){yx(r),e=Ju(e,"onChange"),0<e.length&&(n=new Up("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var us=null,ws=null;function xT(t){Jx(t,0)}function Pc(t){var e=Ha(t);if(dx(e))return t}function ST(t,e){if(t==="change")return e}var Vx=!1;if(Ur){var yf;if(Ur){var xf="oninput"in document;if(!xf){var Hv=document.createElement("div");Hv.setAttribute("oninput","return;"),xf=typeof Hv.oninput=="function"}yf=xf}else yf=!1;Vx=yf&&(!document.documentMode||9<document.documentMode)}function Gv(){us&&(us.detachEvent("onpropertychange",Wx),ws=us=null)}function Wx(t){if(t.propertyName==="value"&&Pc(ws)){var e=[];Gx(e,ws,t,Pp(t)),Mx(xT,e)}}function ET(t,e,n){t==="focusin"?(Gv(),us=e,ws=n,us.attachEvent("onpropertychange",Wx)):t==="focusout"&&Gv()}function MT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pc(ws)}function wT(t,e){if(t==="click")return Pc(e)}function TT(t,e){if(t==="input"||t==="change")return Pc(e)}function bT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var er=typeof Object.is=="function"?Object.is:bT;function Ts(t,e){if(er(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wd.call(e,i)||!er(t[i],e[i]))return!1}return!0}function Vv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wv(t,e){var n=Vv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vv(n)}}function $x(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$x(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jx(){for(var t=window,e=ju();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ju(t.document)}return e}function zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function AT(t){var e=jx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$x(n.ownerDocument.documentElement,n)){if(r!==null&&zp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!t.extend&&a>r&&(i=r,r=a,a=i),i=Wv(n,a);var o=Wv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),a>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var RT=Ur&&"documentMode"in document&&11>=document.documentMode,za=null,uh=null,cs=null,ch=!1;function $v(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ch||za==null||za!==ju(r)||(r=za,"selectionStart"in r&&zp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cs&&Ts(cs,r)||(cs=r,r=Ju(uh,"onSelect"),0<r.length&&(e=new Up("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=za)))}function Sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ba={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Sf={},Xx={};Ur&&(Xx=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function Lc(t){if(Sf[t])return Sf[t];if(!Ba[t])return t;var e=Ba[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xx)return Sf[t]=e[n];return t}var Yx=Lc("animationend"),qx=Lc("animationiteration"),Kx=Lc("animationstart"),Zx=Lc("transitionend"),Qx=new Map,jv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ai(t,e){Qx.set(t,e),da(e,[t])}for(var Ef=0;Ef<jv.length;Ef++){var Mf=jv[Ef],CT=Mf.toLowerCase(),PT=Mf[0].toUpperCase()+Mf.slice(1);Ai(CT,"on"+PT)}Ai(Yx,"onAnimationEnd");Ai(qx,"onAnimationIteration");Ai(Kx,"onAnimationStart");Ai("dblclick","onDoubleClick");Ai("focusin","onFocus");Ai("focusout","onBlur");Ai(Zx,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LT=new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));function Xv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Cw(r,e,void 0,t),t.currentTarget=null}function Jx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var a=void 0;if(e)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Xv(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Xv(i,s,u),a=l}}}if(Yu)throw t=ah,Yu=!1,ah=null,t}function et(t,e){var n=e[mh];n===void 0&&(n=e[mh]=new Set);var r=t+"__bubble";n.has(r)||(eS(e,t,2,!1),n.add(r))}function wf(t,e,n){var r=0;e&&(r|=4),eS(n,t,r,e)}var El="_reactListening"+Math.random().toString(36).slice(2);function bs(t){if(!t[El]){t[El]=!0,sx.forEach(function(n){n!=="selectionchange"&&(LT.has(n)||wf(n,!1,t),wf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[El]||(e[El]=!0,wf("selectionchange",!1,e))}}function eS(t,e,n,r){switch(Fx(e)){case 1:var i=$w;break;case 4:i=jw;break;default:i=Op}n=i.bind(null,e,n,t),i=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Tf(t,e,n,r,i){var a=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Vi(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Mx(function(){var u=a,c=Pp(n),f=[];e:{var h=Qx.get(t);if(h!==void 0){var p=Up,_=t;switch(t){case"keypress":if(Ru(n)===0)break e;case"keydown":case"keyup":p=sT;break;case"focusin":_="focus",p=_f;break;case"focusout":_="blur",p=_f;break;case"beforeblur":case"afterblur":p=_f;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Nv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=qw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=cT;break;case Yx:case qx:case Kx:p=Qw;break;case Zx:p=dT;break;case"scroll":p=Xw;break;case"wheel":p=pT;break;case"copy":case"cut":case"paste":p=eT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Fv}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var v=u,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,d!==null&&(x=xs(v,d),x!=null&&y.push(As(v,x,g)))),m)break;v=v.return}0<y.length&&(h=new p(h,_,null,n,c),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==nh&&(_=n.relatedTarget||n.fromElement)&&(Vi(_)||_[Fr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Vi(_):null,_!==null&&(m=ha(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=Nv,x="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Fv,x="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:Ha(p),g=_==null?h:Ha(_),h=new y(x,v+"leave",p,n,c),h.target=m,h.relatedTarget=g,x=null,Vi(c)===u&&(y=new y(d,v+"enter",_,n,c),y.target=g,y.relatedTarget=m,x=y),m=x,p&&_)t:{for(y=p,d=_,v=0,g=y;g;g=ma(g))v++;for(g=0,x=d;x;x=ma(x))g++;for(;0<v-g;)y=ma(y),v--;for(;0<g-v;)d=ma(d),g--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=ma(y),d=ma(d)}y=null}else y=null;p!==null&&Yv(f,h,p,y,!1),_!==null&&m!==null&&Yv(f,m,_,y,!0)}}e:{if(h=u?Ha(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var M=ST;else if(Bv(h))if(Vx)M=TT;else{M=MT;var A=ET}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=wT);if(M&&(M=M(t,u))){Gx(f,M,n,c);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Zd(h,"number",h.value)}switch(A=u?Ha(u):window,t){case"focusin":(Bv(A)||A.contentEditable==="true")&&(za=A,uh=u,cs=null);break;case"focusout":cs=uh=za=null;break;case"mousedown":ch=!0;break;case"contextmenu":case"mouseup":case"dragend":ch=!1,$v(f,n,c);break;case"selectionchange":if(RT)break;case"keydown":case"keyup":$v(f,n,c)}var R;if(kp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ka?Bx(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(zx&&n.locale!=="ko"&&(ka||P!=="onCompositionStart"?P==="onCompositionEnd"&&ka&&(R=kx()):(ai=c,Np="value"in ai?ai.value:ai.textContent,ka=!0)),A=Ju(u,P),0<A.length&&(P=new Uv(P,t,null,n,c),f.push({event:P,listeners:A}),R?P.data=R:(R=Hx(n),R!==null&&(P.data=R)))),(R=vT?gT(t,n):_T(t,n))&&(u=Ju(u,"onBeforeInput"),0<u.length&&(c=new Uv("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=R))}Jx(f,e)})}function As(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ju(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=xs(t,n),a!=null&&r.unshift(As(t,a,i)),a=xs(t,e),a!=null&&r.push(As(t,a,i))),t=t.return}return r}function ma(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yv(t,e,n,r,i){for(var a=e._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=xs(n,a),l!=null&&o.unshift(As(n,l,s))):i||(l=xs(n,a),l!=null&&o.push(As(n,l,s)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var IT=/\r\n?/g,DT=/\u0000|\uFFFD/g;function qv(t){return(typeof t=="string"?t:""+t).replace(IT,`
`).replace(DT,"")}function Ml(t,e,n){if(e=qv(e),qv(t)!==e&&n)throw Error(J(425))}function ec(){}var fh=null,dh=null;function hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,OT=typeof clearTimeout=="function"?clearTimeout:void 0,Kv=typeof Promise=="function"?Promise:void 0,NT=typeof queueMicrotask=="function"?queueMicrotask:typeof Kv<"u"?function(t){return Kv.resolve(null).then(t).catch(UT)}:ph;function UT(t){setTimeout(function(){throw t})}function bf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ms(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ms(e)}function hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var To=Math.random().toString(36).slice(2),cr="__reactFiber$"+To,Rs="__reactProps$"+To,Fr="__reactContainer$"+To,mh="__reactEvents$"+To,FT="__reactListeners$"+To,kT="__reactHandles$"+To;function Vi(t){var e=t[cr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fr]||n[cr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zv(t);t!==null;){if(n=t[cr])return n;t=Zv(t)}return e}t=n,n=t.parentNode}return null}function Xs(t){return t=t[cr]||t[Fr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ha(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function Ic(t){return t[Rs]||null}var vh=[],Ga=-1;function Ri(t){return{current:t}}function rt(t){0>Ga||(t.current=vh[Ga],vh[Ga]=null,Ga--)}function Ze(t,e){Ga++,vh[Ga]=t.current,t.current=e}var Si={},$t=Ri(Si),on=Ri(!1),ta=Si;function co(t,e){var n=t.type.contextTypes;if(!n)return Si;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=e[a];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function sn(t){return t=t.childContextTypes,t!=null}function tc(){rt(on),rt($t)}function Qv(t,e,n){if($t.current!==Si)throw Error(J(168));Ze($t,e),Ze(on,n)}function tS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(J(108,Ew(t)||"Unknown",i));return lt({},n,r)}function nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Si,ta=$t.current,Ze($t,t),Ze(on,on.current),!0}function Jv(t,e,n){var r=t.stateNode;if(!r)throw Error(J(169));n?(t=tS(t,e,ta),r.__reactInternalMemoizedMergedChildContext=t,rt(on),rt($t),Ze($t,t)):rt(on),Ze(on,n)}var Rr=null,Dc=!1,Af=!1;function nS(t){Rr===null?Rr=[t]:Rr.push(t)}function zT(t){Dc=!0,nS(t)}function Ci(){if(!Af&&Rr!==null){Af=!0;var t=0,e=Xe;try{var n=Rr;for(Xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rr=null,Dc=!1}catch(i){throw Rr!==null&&(Rr=Rr.slice(t+1)),Ax(Lp,Ci),i}finally{Xe=e,Af=!1}}return null}var Va=[],Wa=0,rc=null,ic=0,An=[],Rn=0,na=null,Lr=1,Ir="";function Fi(t,e){Va[Wa++]=ic,Va[Wa++]=rc,rc=t,ic=e}function rS(t,e,n){An[Rn++]=Lr,An[Rn++]=Ir,An[Rn++]=na,na=t;var r=Lr;t=Ir;var i=32-Qn(r)-1;r&=~(1<<i),n+=1;var a=32-Qn(e)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Lr=1<<32-Qn(e)+i|n<<i|r,Ir=a+t}else Lr=1<<a|n<<i|r,Ir=t}function Bp(t){t.return!==null&&(Fi(t,1),rS(t,1,0))}function Hp(t){for(;t===rc;)rc=Va[--Wa],Va[Wa]=null,ic=Va[--Wa],Va[Wa]=null;for(;t===na;)na=An[--Rn],An[Rn]=null,Ir=An[--Rn],An[Rn]=null,Lr=An[--Rn],An[Rn]=null}var gn=null,vn=null,at=!1,jn=null;function iS(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function eg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,vn=hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=na!==null?{id:Lr,overflow:Ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,vn=null,!0):!1;default:return!1}}function gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _h(t){if(at){var e=vn;if(e){var n=e;if(!eg(t,e)){if(gh(t))throw Error(J(418));e=hi(n.nextSibling);var r=gn;e&&eg(t,e)?iS(r,n):(t.flags=t.flags&-4097|2,at=!1,gn=t)}}else{if(gh(t))throw Error(J(418));t.flags=t.flags&-4097|2,at=!1,gn=t}}}function tg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function wl(t){if(t!==gn)return!1;if(!at)return tg(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hh(t.type,t.memoizedProps)),e&&(e=vn)){if(gh(t))throw aS(),Error(J(418));for(;e;)iS(t,e),e=hi(e.nextSibling)}if(tg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=gn?hi(t.stateNode.nextSibling):null;return!0}function aS(){for(var t=vn;t;)t=hi(t.nextSibling)}function fo(){vn=gn=null,at=!1}function Gp(t){jn===null?jn=[t]:jn.push(t)}var BT=Wr.ReactCurrentBatchConfig;function Wn(t,e){if(t&&t.defaultProps){e=lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ac=Ri(null),oc=null,$a=null,Vp=null;function Wp(){Vp=$a=oc=null}function $p(t){var e=ac.current;rt(ac),t._currentValue=e}function yh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ro(t,e){oc=t,Vp=$a=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(Vp!==t)if(t={context:t,memoizedValue:e,next:null},$a===null){if(oc===null)throw Error(J(308));$a=t,oc.dependencies={lanes:0,firstContext:t}}else $a=$a.next=t;return e}var Wi=null;function jp(t){Wi===null?Wi=[t]:Wi.push(t)}function oS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,jp(e)):(n.next=i.next,i.next=n),e.interleaved=n,kr(t,r)}function kr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ti=!1;function Xp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Or(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$e&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kr(t,n)}return i=r.interleaved,i===null?(e.next=e,jp(r)):(e.next=i.next,i.next=e),r.interleaved=e,kr(t,n)}function Cu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ip(t,n)}}function ng(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=e:a=a.next=e}else i=a=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sc(t,e,n,r){var i=t.updateQueue;ti=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,c=u=l=null,s=a;do{var h=s.lane,p=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=t,y=s;switch(h=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=lt({},f,h);break e;case 2:ti=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else p={eventTime:p,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else a===null&&(i.shared.lanes=0);ia|=o,t.lanes=o,t.memoizedState=f}}function rg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(J(191,i));i.call(r)}}}var lS=new ox.Component().refs;function xh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Oc={isMounted:function(t){return(t=t._reactInternals)?ha(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Zt(),i=vi(t),a=Or(r,i);a.payload=e,n!=null&&(a.callback=n),e=pi(t,a,i),e!==null&&(Jn(e,t,i,r),Cu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Zt(),i=vi(t),a=Or(r,i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=pi(t,a,i),e!==null&&(Jn(e,t,i,r),Cu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),r=vi(t),i=Or(n,r);i.tag=2,e!=null&&(i.callback=e),e=pi(t,i,r),e!==null&&(Jn(e,t,r,n),Cu(e,t,r))}};function ig(t,e,n,r,i,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,o):e.prototype&&e.prototype.isPureReactComponent?!Ts(n,r)||!Ts(i,a):!0}function uS(t,e,n){var r=!1,i=Si,a=e.contextType;return typeof a=="object"&&a!==null?a=Dn(a):(i=sn(e)?ta:$t.current,r=e.contextTypes,a=(r=r!=null)?co(t,i):Si),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Oc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=a),e}function ag(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Oc.enqueueReplaceState(e,e.state,null)}function Sh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=lS,Xp(t);var a=e.contextType;typeof a=="object"&&a!==null?i.context=Dn(a):(a=sn(e)?ta:$t.current,i.context=co(t,a)),i.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(xh(t,e,a,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Oc.enqueueReplaceState(i,i.state,null),sc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var r=n.stateNode}if(!r)throw Error(J(147,t));var i=r,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=i.refs;s===lS&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function Tl(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function og(t){var e=t._init;return e(t._payload)}function cS(t){function e(d,v){if(t){var g=d.deletions;g===null?(d.deletions=[v],d.flags|=16):g.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function r(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function i(d,v){return d=gi(d,v),d.index=0,d.sibling=null,d}function a(d,v,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<v?(d.flags|=2,v):g):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function s(d,v,g,x){return v===null||v.tag!==6?(v=Of(g,d.mode,x),v.return=d,v):(v=i(v,g),v.return=d,v)}function l(d,v,g,x){var M=g.type;return M===Fa?c(d,v,g.props.children,x,g.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ei&&og(M)===v.type)?(x=i(v,g.props),x.ref=Ho(d,v,g),x.return=d,x):(x=Nu(g.type,g.key,g.props,null,d.mode,x),x.ref=Ho(d,v,g),x.return=d,x)}function u(d,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Nf(g,d.mode,x),v.return=d,v):(v=i(v,g.children||[]),v.return=d,v)}function c(d,v,g,x,M){return v===null||v.tag!==7?(v=qi(g,d.mode,x,M),v.return=d,v):(v=i(v,g),v.return=d,v)}function f(d,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Of(""+v,d.mode,g),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pl:return g=Nu(v.type,v.key,v.props,null,d.mode,g),g.ref=Ho(d,null,v),g.return=d,g;case Ua:return v=Nf(v,d.mode,g),v.return=d,v;case ei:var x=v._init;return f(d,x(v._payload),g)}if(ts(v)||Uo(v))return v=qi(v,d.mode,g,null),v.return=d,v;Tl(d,v)}return null}function h(d,v,g,x){var M=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return M!==null?null:s(d,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pl:return g.key===M?l(d,v,g,x):null;case Ua:return g.key===M?u(d,v,g,x):null;case ei:return M=g._init,h(d,v,M(g._payload),x)}if(ts(g)||Uo(g))return M!==null?null:c(d,v,g,x,null);Tl(d,g)}return null}function p(d,v,g,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(g)||null,s(v,d,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pl:return d=d.get(x.key===null?g:x.key)||null,l(v,d,x,M);case Ua:return d=d.get(x.key===null?g:x.key)||null,u(v,d,x,M);case ei:var A=x._init;return p(d,v,g,A(x._payload),M)}if(ts(x)||Uo(x))return d=d.get(g)||null,c(v,d,x,M,null);Tl(v,x)}return null}function _(d,v,g,x){for(var M=null,A=null,R=v,P=v=0,S=null;R!==null&&P<g.length;P++){R.index>P?(S=R,R=null):S=R.sibling;var T=h(d,R,g[P],x);if(T===null){R===null&&(R=S);break}t&&R&&T.alternate===null&&e(d,R),v=a(T,v,P),A===null?M=T:A.sibling=T,A=T,R=S}if(P===g.length)return n(d,R),at&&Fi(d,P),M;if(R===null){for(;P<g.length;P++)R=f(d,g[P],x),R!==null&&(v=a(R,v,P),A===null?M=R:A.sibling=R,A=R);return at&&Fi(d,P),M}for(R=r(d,R);P<g.length;P++)S=p(R,d,P,g[P],x),S!==null&&(t&&S.alternate!==null&&R.delete(S.key===null?P:S.key),v=a(S,v,P),A===null?M=S:A.sibling=S,A=S);return t&&R.forEach(function(X){return e(d,X)}),at&&Fi(d,P),M}function y(d,v,g,x){var M=Uo(g);if(typeof M!="function")throw Error(J(150));if(g=M.call(g),g==null)throw Error(J(151));for(var A=M=null,R=v,P=v=0,S=null,T=g.next();R!==null&&!T.done;P++,T=g.next()){R.index>P?(S=R,R=null):S=R.sibling;var X=h(d,R,T.value,x);if(X===null){R===null&&(R=S);break}t&&R&&X.alternate===null&&e(d,R),v=a(X,v,P),A===null?M=X:A.sibling=X,A=X,R=S}if(T.done)return n(d,R),at&&Fi(d,P),M;if(R===null){for(;!T.done;P++,T=g.next())T=f(d,T.value,x),T!==null&&(v=a(T,v,P),A===null?M=T:A.sibling=T,A=T);return at&&Fi(d,P),M}for(R=r(d,R);!T.done;P++,T=g.next())T=p(R,d,P,T.value,x),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?P:T.key),v=a(T,v,P),A===null?M=T:A.sibling=T,A=T);return t&&R.forEach(function(q){return e(d,q)}),at&&Fi(d,P),M}function m(d,v,g,x){if(typeof g=="object"&&g!==null&&g.type===Fa&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case pl:e:{for(var M=g.key,A=v;A!==null;){if(A.key===M){if(M=g.type,M===Fa){if(A.tag===7){n(d,A.sibling),v=i(A,g.props.children),v.return=d,d=v;break e}}else if(A.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ei&&og(M)===A.type){n(d,A.sibling),v=i(A,g.props),v.ref=Ho(d,A,g),v.return=d,d=v;break e}n(d,A);break}else e(d,A);A=A.sibling}g.type===Fa?(v=qi(g.props.children,d.mode,x,g.key),v.return=d,d=v):(x=Nu(g.type,g.key,g.props,null,d.mode,x),x.ref=Ho(d,v,g),x.return=d,d=x)}return o(d);case Ua:e:{for(A=g.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(d,v.sibling),v=i(v,g.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Nf(g,d.mode,x),v.return=d,d=v}return o(d);case ei:return A=g._init,m(d,v,A(g._payload),x)}if(ts(g))return _(d,v,g,x);if(Uo(g))return y(d,v,g,x);Tl(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(d,v.sibling),v=i(v,g),v.return=d,d=v):(n(d,v),v=Of(g,d.mode,x),v.return=d,d=v),o(d)):n(d,v)}return m}var ho=cS(!0),fS=cS(!1),Ys={},pr=Ri(Ys),Cs=Ri(Ys),Ps=Ri(Ys);function $i(t){if(t===Ys)throw Error(J(174));return t}function Yp(t,e){switch(Ze(Ps,e),Ze(Cs,t),Ze(pr,Ys),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jd(e,t)}rt(pr),Ze(pr,e)}function po(){rt(pr),rt(Cs),rt(Ps)}function dS(t){$i(Ps.current);var e=$i(pr.current),n=Jd(e,t.type);e!==n&&(Ze(Cs,t),Ze(pr,n))}function qp(t){Cs.current===t&&(rt(pr),rt(Cs))}var ot=Ri(0);function lc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rf=[];function Kp(){for(var t=0;t<Rf.length;t++)Rf[t]._workInProgressVersionPrimary=null;Rf.length=0}var Pu=Wr.ReactCurrentDispatcher,Cf=Wr.ReactCurrentBatchConfig,ra=0,st=null,yt=null,Rt=null,uc=!1,fs=!1,Ls=0,HT=0;function Bt(){throw Error(J(321))}function Zp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!er(t[n],e[n]))return!1;return!0}function Qp(t,e,n,r,i,a){if(ra=a,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pu.current=t===null||t.memoizedState===null?$T:jT,t=n(r,i),fs){a=0;do{if(fs=!1,Ls=0,25<=a)throw Error(J(301));a+=1,Rt=yt=null,e.updateQueue=null,Pu.current=XT,t=n(r,i)}while(fs)}if(Pu.current=cc,e=yt!==null&&yt.next!==null,ra=0,Rt=yt=st=null,uc=!1,e)throw Error(J(300));return t}function Jp(){var t=Ls!==0;return Ls=0,t}function or(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?st.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function On(){if(yt===null){var t=st.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=Rt===null?st.memoizedState:Rt.next;if(e!==null)Rt=e,yt=t;else{if(t===null)throw Error(J(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Rt===null?st.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Is(t,e){return typeof e=="function"?e(t):e}function Pf(t){var e=On(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var r=yt,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((ra&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,st.lanes|=c,ia|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,er(r,e.memoizedState)||(an=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do a=i.lane,st.lanes|=a,ia|=a,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lf(t){var e=On(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,a=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=t(a,o.action),o=o.next;while(o!==i);er(a,e.memoizedState)||(an=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,r]}function hS(){}function pS(t,e){var n=st,r=On(),i=e(),a=!er(r.memoizedState,i);if(a&&(r.memoizedState=i,an=!0),r=r.queue,em(gS.bind(null,n,r,t),[t]),r.getSnapshot!==e||a||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Ds(9,vS.bind(null,n,r,i,e),void 0,null),Ct===null)throw Error(J(349));ra&30||mS(n,e,i)}return i}function mS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vS(t,e,n,r){e.value=n,e.getSnapshot=r,_S(e)&&yS(t)}function gS(t,e,n){return n(function(){_S(e)&&yS(t)})}function _S(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!er(t,n)}catch{return!0}}function yS(t){var e=kr(t,1);e!==null&&Jn(e,t,1,-1)}function sg(t){var e=or();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},e.queue=t,t=t.dispatch=WT.bind(null,st,t),[e.memoizedState,t]}function Ds(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function xS(){return On().memoizedState}function Lu(t,e,n,r){var i=or();st.flags|=t,i.memoizedState=Ds(1|e,n,void 0,r===void 0?null:r)}function Nc(t,e,n,r){var i=On();r=r===void 0?null:r;var a=void 0;if(yt!==null){var o=yt.memoizedState;if(a=o.destroy,r!==null&&Zp(r,o.deps)){i.memoizedState=Ds(e,n,a,r);return}}st.flags|=t,i.memoizedState=Ds(1|e,n,a,r)}function lg(t,e){return Lu(8390656,8,t,e)}function em(t,e){return Nc(2048,8,t,e)}function SS(t,e){return Nc(4,2,t,e)}function ES(t,e){return Nc(4,4,t,e)}function MS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wS(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,MS.bind(null,e,t),n)}function tm(){}function TS(t,e){var n=On();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function bS(t,e){var n=On();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function AS(t,e,n){return ra&21?(er(n,e)||(n=Px(),st.lanes|=n,ia|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function GT(t,e){var n=Xe;Xe=n!==0&&4>n?n:4,t(!0);var r=Cf.transition;Cf.transition={};try{t(!1),e()}finally{Xe=n,Cf.transition=r}}function RS(){return On().memoizedState}function VT(t,e,n){var r=vi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},CS(t))PS(e,n);else if(n=oS(t,e,n,r),n!==null){var i=Zt();Jn(n,t,r,i),LS(n,e,r)}}function WT(t,e,n){var r=vi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(CS(t))PS(e,i);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,er(s,o)){var l=e.interleaved;l===null?(i.next=i,jp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=oS(t,e,i,r),n!==null&&(i=Zt(),Jn(n,t,r,i),LS(n,e,r))}}function CS(t){var e=t.alternate;return t===st||e!==null&&e===st}function PS(t,e){fs=uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function LS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ip(t,n)}}var cc={readContext:Dn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},$T={readContext:Dn,useCallback:function(t,e){return or().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:lg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lu(4194308,4,MS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lu(4,2,t,e)},useMemo:function(t,e){var n=or();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=or();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=VT.bind(null,st,t),[r.memoizedState,t]},useRef:function(t){var e=or();return t={current:t},e.memoizedState=t},useState:sg,useDebugValue:tm,useDeferredValue:function(t){return or().memoizedState=t},useTransition:function(){var t=sg(!1),e=t[0];return t=GT.bind(null,t[1]),or().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=st,i=or();if(at){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),Ct===null)throw Error(J(349));ra&30||mS(r,e,n)}i.memoizedState=n;var a={value:n,getSnapshot:e};return i.queue=a,lg(gS.bind(null,r,a,t),[t]),r.flags|=2048,Ds(9,vS.bind(null,r,a,n,e),void 0,null),n},useId:function(){var t=or(),e=Ct.identifierPrefix;if(at){var n=Ir,r=Lr;n=(r&~(1<<32-Qn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ls++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=HT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jT={readContext:Dn,useCallback:TS,useContext:Dn,useEffect:em,useImperativeHandle:wS,useInsertionEffect:SS,useLayoutEffect:ES,useMemo:bS,useReducer:Pf,useRef:xS,useState:function(){return Pf(Is)},useDebugValue:tm,useDeferredValue:function(t){var e=On();return AS(e,yt.memoizedState,t)},useTransition:function(){var t=Pf(Is)[0],e=On().memoizedState;return[t,e]},useMutableSource:hS,useSyncExternalStore:pS,useId:RS,unstable_isNewReconciler:!1},XT={readContext:Dn,useCallback:TS,useContext:Dn,useEffect:em,useImperativeHandle:wS,useInsertionEffect:SS,useLayoutEffect:ES,useMemo:bS,useReducer:Lf,useRef:xS,useState:function(){return Lf(Is)},useDebugValue:tm,useDeferredValue:function(t){var e=On();return yt===null?e.memoizedState=t:AS(e,yt.memoizedState,t)},useTransition:function(){var t=Lf(Is)[0],e=On().memoizedState;return[t,e]},useMutableSource:hS,useSyncExternalStore:pS,useId:RS,unstable_isNewReconciler:!1};function mo(t,e){try{var n="",r=e;do n+=Sw(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:i,digest:null}}function If(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Eh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var YT=typeof WeakMap=="function"?WeakMap:Map;function IS(t,e,n){n=Or(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){dc||(dc=!0,Ih=r),Eh(t,e)},n}function DS(t,e,n){n=Or(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Eh(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Eh(t,e),typeof r!="function"&&(mi===null?mi=new Set([this]):mi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ug(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new YT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lb.bind(null,t,e,n),e.then(t,t))}function cg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Or(-1,1),e.tag=2,pi(n,e,1))),n.lanes|=1),t)}var qT=Wr.ReactCurrentOwner,an=!1;function qt(t,e,n,r){e.child=t===null?fS(e,null,n,r):ho(e,t.child,n,r)}function dg(t,e,n,r,i){n=n.render;var a=e.ref;return ro(e,i),r=Qp(t,e,n,r,a,i),n=Jp(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zr(t,e,i)):(at&&n&&Bp(e),e.flags|=1,qt(t,e,r,i),e.child)}function hg(t,e,n,r,i){if(t===null){var a=n.type;return typeof a=="function"&&!um(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,OS(t,e,a,r,i)):(t=Nu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ts,n(o,r)&&t.ref===e.ref)return zr(t,e,i)}return e.flags|=1,t=gi(a,r),t.ref=e.ref,t.return=e,e.child=t}function OS(t,e,n,r,i){if(t!==null){var a=t.memoizedProps;if(Ts(a,r)&&t.ref===e.ref)if(an=!1,e.pendingProps=r=a,(t.lanes&i)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,zr(t,e,i)}return Mh(t,e,n,r,i)}function NS(t,e,n){var r=e.pendingProps,i=r.children,a=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(Xa,mn),mn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ze(Xa,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Ze(Xa,mn),mn|=r}else a!==null?(r=a.baseLanes|n,e.memoizedState=null):r=n,Ze(Xa,mn),mn|=r;return qt(t,e,i,n),e.child}function US(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mh(t,e,n,r,i){var a=sn(n)?ta:$t.current;return a=co(e,a),ro(e,i),n=Qp(t,e,n,r,a,i),r=Jp(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zr(t,e,i)):(at&&r&&Bp(e),e.flags|=1,qt(t,e,n,i),e.child)}function pg(t,e,n,r,i){if(sn(n)){var a=!0;nc(e)}else a=!1;if(ro(e,i),e.stateNode===null)Iu(t,e),uS(e,n,r),Sh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dn(u):(u=sn(n)?ta:$t.current,u=co(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&ag(e,o,r,u),ti=!1;var h=e.memoizedState;o.state=h,sc(e,r,o,i),l=e.memoizedState,s!==r||h!==l||on.current||ti?(typeof c=="function"&&(xh(e,n,c,r),l=e.memoizedState),(s=ti||ig(e,n,s,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sS(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:Wn(e.type,s),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=sn(n)?ta:$t.current,l=co(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||h!==l)&&ag(e,o,r,l),ti=!1,h=e.memoizedState,o.state=h,sc(e,r,o,i);var _=e.memoizedState;s!==f||h!==_||on.current||ti?(typeof p=="function"&&(xh(e,n,p,r),_=e.memoizedState),(u=ti||ig(e,n,u,r,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return wh(t,e,n,r,a,i)}function wh(t,e,n,r,i,a){US(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jv(e,n,!1),zr(t,e,a);r=e.stateNode,qT.current=e;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ho(e,t.child,null,a),e.child=ho(e,null,s,a)):qt(t,e,s,a),e.memoizedState=r.state,i&&Jv(e,n,!0),e.child}function FS(t){var e=t.stateNode;e.pendingContext?Qv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qv(t,e.context,!1),Yp(t,e.containerInfo)}function mg(t,e,n,r,i){return fo(),Gp(i),e.flags|=256,qt(t,e,n,r),e.child}var Th={dehydrated:null,treeContext:null,retryLane:0};function bh(t){return{baseLanes:t,cachePool:null,transitions:null}}function kS(t,e,n){var r=e.pendingProps,i=ot.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(i&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ze(ot,i&1),t===null)return _h(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,a?(r=e.mode,a=e.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=kc(o,r,0,null),t=qi(t,r,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=bh(n),e.memoizedState=Th,t):nm(e,o));if(i=t.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return KT(t,e,o,r,s,i,n);if(a){a=r.fallback,o=e.mode,i=t.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=gi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=gi(s,a):(a=qi(a,o,n,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,o=t.child.memoizedState,o=o===null?bh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~n,e.memoizedState=Th,r}return a=t.child,t=a.sibling,r=gi(a,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function nm(t,e){return e=kc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bl(t,e,n,r){return r!==null&&Gp(r),ho(e,t.child,null,n),t=nm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function KT(t,e,n,r,i,a,o){if(n)return e.flags&256?(e.flags&=-257,r=If(Error(J(422))),bl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=r.fallback,i=e.mode,r=kc({mode:"visible",children:r.children},i,0,null),a=qi(a,i,o,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,e.mode&1&&ho(e,t.child,null,o),e.child.memoizedState=bh(o),e.memoizedState=Th,a);if(!(e.mode&1))return bl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(J(419)),r=If(a,r,void 0),bl(t,e,o,r)}if(s=(o&t.childLanes)!==0,an||s){if(r=Ct,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,kr(t,i),Jn(r,t,i,-1))}return lm(),r=If(Error(J(421))),bl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ub.bind(null,t),i._reactRetry=e,null):(t=a.treeContext,vn=hi(i.nextSibling),gn=e,at=!0,jn=null,t!==null&&(An[Rn++]=Lr,An[Rn++]=Ir,An[Rn++]=na,Lr=t.id,Ir=t.overflow,na=e),e=nm(e,r.children),e.flags|=4096,e)}function vg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yh(t.return,e,n)}function Df(t,e,n,r,i){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function zS(t,e,n){var r=e.pendingProps,i=r.revealOrder,a=r.tail;if(qt(t,e,r.children,n),r=ot.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vg(t,n,e);else if(t.tag===19)vg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ze(ot,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&lc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Df(e,!1,i,n,a);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&lc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Df(e,!0,n,null,a);break;case"together":Df(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Iu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ia|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ZT(t,e,n){switch(e.tag){case 3:FS(e),fo();break;case 5:dS(e);break;case 1:sn(e.type)&&nc(e);break;case 4:Yp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ze(ac,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ze(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?kS(t,e,n):(Ze(ot,ot.current&1),t=zr(t,e,n),t!==null?t.sibling:null);Ze(ot,ot.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return zS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ze(ot,ot.current),r)break;return null;case 22:case 23:return e.lanes=0,NS(t,e,n)}return zr(t,e,n)}var BS,Ah,HS,GS;BS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ah=function(){};HS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$i(pr.current);var a=null;switch(n){case"input":i=qd(t,i),r=qd(t,r),a=[];break;case"select":i=lt({},i,{value:void 0}),r=lt({},r,{value:void 0}),a=[];break;case"textarea":i=Qd(t,i),r=Qd(t,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ec)}eh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_s.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_s.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&et("scroll",t),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};GS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Go(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function QT(t,e,n){var r=e.pendingProps;switch(Hp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return sn(e.type)&&tc(),Ht(e),null;case 3:return r=e.stateNode,po(),rt(on),rt($t),Kp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Nh(jn),jn=null))),Ah(t,e),Ht(e),null;case 5:qp(e);var i=$i(Ps.current);if(n=e.type,t!==null&&e.stateNode!=null)HS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(J(166));return Ht(e),null}if(t=$i(pr.current),wl(e)){r=e.stateNode,n=e.type;var a=e.memoizedProps;switch(r[cr]=e,r[Rs]=a,t=(e.mode&1)!==0,n){case"dialog":et("cancel",r),et("close",r);break;case"iframe":case"object":case"embed":et("load",r);break;case"video":case"audio":for(i=0;i<rs.length;i++)et(rs[i],r);break;case"source":et("error",r);break;case"img":case"image":case"link":et("error",r),et("load",r);break;case"details":et("toggle",r);break;case"input":Tv(r,a),et("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},et("invalid",r);break;case"textarea":Av(r,a),et("invalid",r)}eh(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Ml(r.textContent,s,t),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Ml(r.textContent,s,t),i=["children",""+s]):_s.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&et("scroll",r)}switch(n){case"input":ml(r),bv(r,a,!0);break;case"textarea":ml(r),Rv(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ec)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cr]=e,t[Rs]=r,BS(t,e,!1,!1),e.stateNode=t;e:{switch(o=th(n,r),n){case"dialog":et("cancel",t),et("close",t),i=r;break;case"iframe":case"object":case"embed":et("load",t),i=r;break;case"video":case"audio":for(i=0;i<rs.length;i++)et(rs[i],t);i=r;break;case"source":et("error",t),i=r;break;case"img":case"image":case"link":et("error",t),et("load",t),i=r;break;case"details":et("toggle",t),i=r;break;case"input":Tv(t,r),i=qd(t,r),et("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=lt({},r,{value:void 0}),et("invalid",t);break;case"textarea":Av(t,r),i=Qd(t,r),et("invalid",t);break;default:i=r}eh(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?_x(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vx(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ys(t,l):typeof l=="number"&&ys(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(_s.hasOwnProperty(a)?l!=null&&a==="onScroll"&&et("scroll",t):l!=null&&bp(t,a,l,o))}switch(n){case"input":ml(t),bv(t,r,!1);break;case"textarea":ml(t),Rv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xi(r.value));break;case"select":t.multiple=!!r.multiple,a=r.value,a!=null?Ja(t,!!r.multiple,a,!1):r.defaultValue!=null&&Ja(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ec)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)GS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(J(166));if(n=$i(Ps.current),$i(pr.current),wl(e)){if(r=e.stateNode,n=e.memoizedProps,r[cr]=e,(a=r.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Ml(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ml(r.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cr]=e,e.stateNode=r}return Ht(e),null;case 13:if(rt(ot),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&vn!==null&&e.mode&1&&!(e.flags&128))aS(),fo(),e.flags|=98560,a=!1;else if(a=wl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!a)throw Error(J(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(J(317));a[cr]=e}else fo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),a=!1}else jn!==null&&(Nh(jn),jn=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?xt===0&&(xt=3):lm())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return po(),Ah(t,e),t===null&&bs(e.stateNode.containerInfo),Ht(e),null;case 10:return $p(e.type._context),Ht(e),null;case 17:return sn(e.type)&&tc(),Ht(e),null;case 19:if(rt(ot),a=e.memoizedState,a===null)return Ht(e),null;if(r=(e.flags&128)!==0,o=a.rendering,o===null)if(r)Go(a,!1);else{if(xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=lc(t),o!==null){for(e.flags|=128,Go(a,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)a=n,t=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ze(ot,ot.current&1|2),e.child}t=t.sibling}a.tail!==null&&pt()>vo&&(e.flags|=128,r=!0,Go(a,!1),e.lanes=4194304)}else{if(!r)if(t=lc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Go(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!at)return Ht(e),null}else 2*pt()-a.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,r=!0,Go(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(n=a.last,n!==null?n.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=pt(),e.sibling=null,n=ot.current,Ze(ot,r?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return sm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function JT(t,e){switch(Hp(e),e.tag){case 1:return sn(e.type)&&tc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return po(),rt(on),rt($t),Kp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qp(e),null;case 13:if(rt(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(ot),null;case 4:return po(),null;case 10:return $p(e.type._context),null;case 22:case 23:return sm(),null;case 24:return null;default:return null}}var Al=!1,Wt=!1,eb=typeof WeakSet=="function"?WeakSet:Set,de=null;function ja(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ft(t,e,r)}else n.current=null}function Rh(t,e,n){try{n()}catch(r){ft(t,e,r)}}var gg=!1;function tb(t,e){if(fh=Zu,t=jx(),zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===i&&(s=o),h===a&&++c===r&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dh={focusedElem:t,selectionRange:n},Zu=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Wn(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(x){ft(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return _=gg,gg=!1,_}function ds(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var a=i.destroy;i.destroy=void 0,a!==void 0&&Rh(e,n,a)}i=i.next}while(i!==r)}}function Uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function VS(t){var e=t.alternate;e!==null&&(t.alternate=null,VS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cr],delete e[Rs],delete e[mh],delete e[FT],delete e[kT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function WS(t){return t.tag===5||t.tag===3||t.tag===4}function _g(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||WS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ec));else if(r!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}function Lh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lh(t,e,n),t=t.sibling;t!==null;)Lh(t,e,n),t=t.sibling}var Dt=null,$n=!1;function Xr(t,e,n){for(n=n.child;n!==null;)$S(t,e,n),n=n.sibling}function $S(t,e,n){if(hr&&typeof hr.onCommitFiberUnmount=="function")try{hr.onCommitFiberUnmount(Rc,n)}catch{}switch(n.tag){case 5:Wt||ja(n,e);case 6:var r=Dt,i=$n;Dt=null,Xr(t,e,n),Dt=r,$n=i,Dt!==null&&($n?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&($n?(t=Dt,n=n.stateNode,t.nodeType===8?bf(t.parentNode,n):t.nodeType===1&&bf(t,n),Ms(t)):bf(Dt,n.stateNode));break;case 4:r=Dt,i=$n,Dt=n.stateNode.containerInfo,$n=!0,Xr(t,e,n),Dt=r,$n=i;break;case 0:case 11:case 14:case 15:if(!Wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Rh(n,e,o),i=i.next}while(i!==r)}Xr(t,e,n);break;case 1:if(!Wt&&(ja(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ft(n,e,s)}Xr(t,e,n);break;case 21:Xr(t,e,n);break;case 22:n.mode&1?(Wt=(r=Wt)||n.memoizedState!==null,Xr(t,e,n),Wt=r):Xr(t,e,n);break;default:Xr(t,e,n)}}function yg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eb),e.forEach(function(r){var i=cb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:Dt=s.stateNode,$n=!1;break e;case 3:Dt=s.stateNode.containerInfo,$n=!0;break e;case 4:Dt=s.stateNode.containerInfo,$n=!0;break e}s=s.return}if(Dt===null)throw Error(J(160));$S(a,o,i),Dt=null,$n=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ft(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jS(e,t),e=e.sibling}function jS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ir(t),r&4){try{ds(3,t,t.return),Uc(3,t)}catch(y){ft(t,t.return,y)}try{ds(5,t,t.return)}catch(y){ft(t,t.return,y)}}break;case 1:zn(e,t),ir(t),r&512&&n!==null&&ja(n,n.return);break;case 5:if(zn(e,t),ir(t),r&512&&n!==null&&ja(n,n.return),t.flags&32){var i=t.stateNode;try{ys(i,"")}catch(y){ft(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var a=t.memoizedProps,o=n!==null?n.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&hx(i,a),th(s,o);var u=th(s,a);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?_x(i,f):c==="dangerouslySetInnerHTML"?vx(i,f):c==="children"?ys(i,f):bp(i,c,f,u)}switch(s){case"input":Kd(i,a);break;case"textarea":px(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?Ja(i,!!a.multiple,p,!1):h!==!!a.multiple&&(a.defaultValue!=null?Ja(i,!!a.multiple,a.defaultValue,!0):Ja(i,!!a.multiple,a.multiple?[]:"",!1))}i[Rs]=a}catch(y){ft(t,t.return,y)}}break;case 6:if(zn(e,t),ir(t),r&4){if(t.stateNode===null)throw Error(J(162));i=t.stateNode,a=t.memoizedProps;try{i.nodeValue=a}catch(y){ft(t,t.return,y)}}break;case 3:if(zn(e,t),ir(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ms(e.containerInfo)}catch(y){ft(t,t.return,y)}break;case 4:zn(e,t),ir(t);break;case 13:zn(e,t),ir(t),i=t.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(am=pt())),r&4&&yg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(u=Wt)||c,zn(e,t),Wt=u):zn(e,t),ir(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(de=t,c=t.child;c!==null;){for(f=de=c;de!==null;){switch(h=de,p=h.child,h.tag){case 0:case 11:case 14:case 15:ds(4,h,h.return);break;case 1:ja(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ft(r,n,y)}}break;case 5:ja(h,h.return);break;case 22:if(h.memoizedState!==null){Sg(f);continue}}p!==null?(p.return=h,de=p):Sg(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=gx("display",o))}catch(y){ft(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ft(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:zn(e,t),ir(t),r&4&&yg(t);break;case 21:break;default:zn(e,t),ir(t)}}function ir(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(WS(n)){var r=n;break e}n=n.return}throw Error(J(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ys(i,""),r.flags&=-33);var a=_g(t);Lh(t,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=_g(t);Ph(t,s,o);break;default:throw Error(J(161))}}catch(l){ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nb(t,e,n){de=t,XS(t)}function XS(t,e,n){for(var r=(t.mode&1)!==0;de!==null;){var i=de,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Al;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Wt;s=Al;var u=Wt;if(Al=o,(Wt=l)&&!u)for(de=i;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Eg(i):l!==null?(l.return=o,de=l):Eg(i);for(;a!==null;)de=a,XS(a),a=a.sibling;de=i,Al=s,Wt=u}xg(t)}else i.subtreeFlags&8772&&a!==null?(a.return=i,de=a):xg(t)}}function xg(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||Uc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&rg(e,a,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rg(e,o,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ms(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Wt||e.flags&512&&Ch(e)}catch(h){ft(e,e.return,h)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function Sg(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Eg(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uc(4,e)}catch(l){ft(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ft(e,i,l)}}var a=e.return;try{Ch(e)}catch(l){ft(e,a,l)}break;case 5:var o=e.return;try{Ch(e)}catch(l){ft(e,o,l)}}}catch(l){ft(e,e.return,l)}if(e===t){de=null;break}var s=e.sibling;if(s!==null){s.return=e.return,de=s;break}de=e.return}}var rb=Math.ceil,fc=Wr.ReactCurrentDispatcher,rm=Wr.ReactCurrentOwner,In=Wr.ReactCurrentBatchConfig,$e=0,Ct=null,_t=null,Nt=0,mn=0,Xa=Ri(0),xt=0,Os=null,ia=0,Fc=0,im=0,hs=null,tn=null,am=0,vo=1/0,Ar=null,dc=!1,Ih=null,mi=null,Rl=!1,oi=null,hc=0,ps=0,Dh=null,Du=-1,Ou=0;function Zt(){return $e&6?pt():Du!==-1?Du:Du=pt()}function vi(t){return t.mode&1?$e&2&&Nt!==0?Nt&-Nt:BT.transition!==null?(Ou===0&&(Ou=Px()),Ou):(t=Xe,t!==0||(t=window.event,t=t===void 0?16:Fx(t.type)),t):1}function Jn(t,e,n,r){if(50<ps)throw ps=0,Dh=null,Error(J(185));$s(t,n,r),(!($e&2)||t!==Ct)&&(t===Ct&&(!($e&2)&&(Fc|=n),xt===4&&ii(t,Nt)),ln(t,r),n===1&&$e===0&&!(e.mode&1)&&(vo=pt()+500,Dc&&Ci()))}function ln(t,e){var n=t.callbackNode;Bw(t,e);var r=Ku(t,t===Ct?Nt:0);if(r===0)n!==null&&Lv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lv(n),e===1)t.tag===0?zT(Mg.bind(null,t)):nS(Mg.bind(null,t)),NT(function(){!($e&6)&&Ci()}),n=null;else{switch(Lx(r)){case 1:n=Lp;break;case 4:n=Rx;break;case 16:n=qu;break;case 536870912:n=Cx;break;default:n=qu}n=tE(n,YS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function YS(t,e){if(Du=-1,Ou=0,$e&6)throw Error(J(327));var n=t.callbackNode;if(io()&&t.callbackNode!==n)return null;var r=Ku(t,t===Ct?Nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=pc(t,r);else{e=r;var i=$e;$e|=2;var a=KS();(Ct!==t||Nt!==e)&&(Ar=null,vo=pt()+500,Yi(t,e));do try{ob();break}catch(s){qS(t,s)}while(1);Wp(),fc.current=a,$e=i,_t!==null?e=0:(Ct=null,Nt=0,e=xt)}if(e!==0){if(e===2&&(i=oh(t),i!==0&&(r=i,e=Oh(t,i))),e===1)throw n=Os,Yi(t,0),ii(t,r),ln(t,pt()),n;if(e===6)ii(t,r);else{if(i=t.current.alternate,!(r&30)&&!ib(i)&&(e=pc(t,r),e===2&&(a=oh(t),a!==0&&(r=a,e=Oh(t,a))),e===1))throw n=Os,Yi(t,0),ii(t,r),ln(t,pt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(J(345));case 2:ki(t,tn,Ar);break;case 3:if(ii(t,r),(r&130023424)===r&&(e=am+500-pt(),10<e)){if(Ku(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Zt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ph(ki.bind(null,t,tn,Ar),e);break}ki(t,tn,Ar);break;case 4:if(ii(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qn(r);a=1<<o,o=e[o],o>i&&(i=o),r&=~a}if(r=i,r=pt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rb(r/1960))-r,10<r){t.timeoutHandle=ph(ki.bind(null,t,tn,Ar),r);break}ki(t,tn,Ar);break;case 5:ki(t,tn,Ar);break;default:throw Error(J(329))}}}return ln(t,pt()),t.callbackNode===n?YS.bind(null,t):null}function Oh(t,e){var n=hs;return t.current.memoizedState.isDehydrated&&(Yi(t,e).flags|=256),t=pc(t,e),t!==2&&(e=tn,tn=n,e!==null&&Nh(e)),t}function Nh(t){tn===null?tn=t:tn.push.apply(tn,t)}function ib(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!er(a(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ii(t,e){for(e&=~im,e&=~Fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),r=1<<n;t[n]=-1,e&=~r}}function Mg(t){if($e&6)throw Error(J(327));io();var e=Ku(t,0);if(!(e&1))return ln(t,pt()),null;var n=pc(t,e);if(t.tag!==0&&n===2){var r=oh(t);r!==0&&(e=r,n=Oh(t,r))}if(n===1)throw n=Os,Yi(t,0),ii(t,e),ln(t,pt()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ki(t,tn,Ar),ln(t,pt()),null}function om(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(vo=pt()+500,Dc&&Ci())}}function aa(t){oi!==null&&oi.tag===0&&!($e&6)&&io();var e=$e;$e|=1;var n=In.transition,r=Xe;try{if(In.transition=null,Xe=1,t)return t()}finally{Xe=r,In.transition=n,$e=e,!($e&6)&&Ci()}}function sm(){mn=Xa.current,rt(Xa)}function Yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,OT(n)),_t!==null)for(n=_t.return;n!==null;){var r=n;switch(Hp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tc();break;case 3:po(),rt(on),rt($t),Kp();break;case 5:qp(r);break;case 4:po();break;case 13:rt(ot);break;case 19:rt(ot);break;case 10:$p(r.type._context);break;case 22:case 23:sm()}n=n.return}if(Ct=t,_t=t=gi(t.current,null),Nt=mn=e,xt=0,Os=null,im=Fc=ia=0,tn=hs=null,Wi!==null){for(e=0;e<Wi.length;e++)if(n=Wi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Wi=null}return t}function qS(t,e){do{var n=_t;try{if(Wp(),Pu.current=cc,uc){for(var r=st.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}uc=!1}if(ra=0,Rt=yt=st=null,fs=!1,Ls=0,rm.current=null,n===null||n.return===null){xt=1,Os=e,_t=null;break}e:{var a=t,o=n.return,s=n,l=e;if(e=Nt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=cg(o);if(p!==null){p.flags&=-257,fg(p,o,s,a,e),p.mode&1&&ug(a,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){ug(a,u,e),lm();break e}l=Error(J(426))}}else if(at&&s.mode&1){var m=cg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),fg(m,o,s,a,e),Gp(mo(l,s));break e}}a=l=mo(l,s),xt!==4&&(xt=2),hs===null?hs=[a]:hs.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var d=IS(a,l,e);ng(a,d);break e;case 1:s=l;var v=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(mi===null||!mi.has(g)))){a.flags|=65536,e&=-e,a.lanes|=e;var x=DS(a,s,e);ng(a,x);break e}}a=a.return}while(a!==null)}QS(n)}catch(M){e=M,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(1)}function KS(){var t=fc.current;return fc.current=cc,t===null?cc:t}function lm(){(xt===0||xt===3||xt===2)&&(xt=4),Ct===null||!(ia&268435455)&&!(Fc&268435455)||ii(Ct,Nt)}function pc(t,e){var n=$e;$e|=2;var r=KS();(Ct!==t||Nt!==e)&&(Ar=null,Yi(t,e));do try{ab();break}catch(i){qS(t,i)}while(1);if(Wp(),$e=n,fc.current=r,_t!==null)throw Error(J(261));return Ct=null,Nt=0,xt}function ab(){for(;_t!==null;)ZS(_t)}function ob(){for(;_t!==null&&!Lw();)ZS(_t)}function ZS(t){var e=eE(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?QS(t):_t=e,rm.current=null}function QS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=JT(n,e),n!==null){n.flags&=32767,_t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xt=6,_t=null;return}}else if(n=QT(n,e,mn),n!==null){_t=n;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);xt===0&&(xt=5)}function ki(t,e,n){var r=Xe,i=In.transition;try{In.transition=null,Xe=1,sb(t,e,n,r)}finally{In.transition=i,Xe=r}return null}function sb(t,e,n,r){do io();while(oi!==null);if($e&6)throw Error(J(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(Hw(t,a),t===Ct&&(_t=Ct=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rl||(Rl=!0,tE(qu,function(){return io(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=In.transition,In.transition=null;var o=Xe;Xe=1;var s=$e;$e|=4,rm.current=null,tb(t,n),jS(n,t),AT(dh),Zu=!!fh,dh=fh=null,t.current=n,nb(n),Iw(),$e=s,Xe=o,In.transition=a}else t.current=n;if(Rl&&(Rl=!1,oi=t,hc=i),a=t.pendingLanes,a===0&&(mi=null),Nw(n.stateNode),ln(t,pt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(dc)throw dc=!1,t=Ih,Ih=null,t;return hc&1&&t.tag!==0&&io(),a=t.pendingLanes,a&1?t===Dh?ps++:(ps=0,Dh=t):ps=0,Ci(),null}function io(){if(oi!==null){var t=Lx(hc),e=In.transition,n=Xe;try{if(In.transition=null,Xe=16>t?16:t,oi===null)var r=!1;else{if(t=oi,oi=null,hc=0,$e&6)throw Error(J(331));var i=$e;for($e|=4,de=t.current;de!==null;){var a=de,o=a.child;if(de.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(de=u;de!==null;){var c=de;switch(c.tag){case 0:case 11:case 15:ds(8,c,a)}var f=c.child;if(f!==null)f.return=c,de=f;else for(;de!==null;){c=de;var h=c.sibling,p=c.return;if(VS(c),c===u){de=null;break}if(h!==null){h.return=p,de=h;break}de=p}}}var _=a.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}de=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,de=o;else e:for(;de!==null;){if(a=de,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ds(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,de=d;break e}de=a.return}}var v=t.current;for(de=v;de!==null;){o=de;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,de=g;else e:for(o=v;de!==null;){if(s=de,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Uc(9,s)}}catch(M){ft(s,s.return,M)}if(s===o){de=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,de=x;break e}de=s.return}}if($e=i,Ci(),hr&&typeof hr.onPostCommitFiberRoot=="function")try{hr.onPostCommitFiberRoot(Rc,t)}catch{}r=!0}return r}finally{Xe=n,In.transition=e}}return!1}function wg(t,e,n){e=mo(n,e),e=IS(t,e,1),t=pi(t,e,1),e=Zt(),t!==null&&($s(t,1,e),ln(t,e))}function ft(t,e,n){if(t.tag===3)wg(t,t,n);else for(;e!==null;){if(e.tag===3){wg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mi===null||!mi.has(r))){t=mo(n,t),t=DS(e,t,1),e=pi(e,t,1),t=Zt(),e!==null&&($s(e,1,t),ln(e,t));break}}e=e.return}}function lb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(Nt&n)===n&&(xt===4||xt===3&&(Nt&130023424)===Nt&&500>pt()-am?Yi(t,0):im|=n),ln(t,e)}function JS(t,e){e===0&&(t.mode&1?(e=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):e=1);var n=Zt();t=kr(t,e),t!==null&&($s(t,e,n),ln(t,n))}function ub(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),JS(t,n)}function cb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(J(314))}r!==null&&r.delete(e),JS(t,n)}var eE;eE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,ZT(t,e,n);an=!!(t.flags&131072)}else an=!1,at&&e.flags&1048576&&rS(e,ic,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Iu(t,e),t=e.pendingProps;var i=co(e,$t.current);ro(e,n),i=Qp(null,e,r,t,i,n);var a=Jp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(r)?(a=!0,nc(e)):a=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xp(e),i.updater=Oc,e.stateNode=i,i._reactInternals=e,Sh(e,r,t,n),e=wh(null,e,r,!0,a,n)):(e.tag=0,at&&a&&Bp(e),qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Iu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=db(r),t=Wn(r,t),i){case 0:e=Mh(null,e,r,t,n);break e;case 1:e=pg(null,e,r,t,n);break e;case 11:e=dg(null,e,r,t,n);break e;case 14:e=hg(null,e,r,Wn(r.type,t),n);break e}throw Error(J(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wn(r,i),Mh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wn(r,i),pg(t,e,r,i,n);case 3:e:{if(FS(e),t===null)throw Error(J(387));r=e.pendingProps,a=e.memoizedState,i=a.element,sS(t,e),sc(e,r,null,n);var o=e.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){i=mo(Error(J(423)),e),e=mg(t,e,r,n,i);break e}else if(r!==i){i=mo(Error(J(424)),e),e=mg(t,e,r,n,i);break e}else for(vn=hi(e.stateNode.containerInfo.firstChild),gn=e,at=!0,jn=null,n=fS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fo(),r===i){e=zr(t,e,n);break e}qt(t,e,r,n)}e=e.child}return e;case 5:return dS(e),t===null&&_h(e),r=e.type,i=e.pendingProps,a=t!==null?t.memoizedProps:null,o=i.children,hh(r,i)?o=null:a!==null&&hh(r,a)&&(e.flags|=32),US(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&_h(e),null;case 13:return kS(t,e,n);case 4:return Yp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ho(e,null,r,n):qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wn(r,i),dg(t,e,r,i,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,a=e.memoizedProps,o=i.value,Ze(ac,r._currentValue),r._currentValue=o,a!==null)if(er(a.value,o)){if(a.children===i.children&&!on.current){e=zr(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Or(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),yh(a.return,n,e),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(J(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),yh(o,n,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ro(e,n),i=Dn(i),r=r(i),e.flags|=1,qt(t,e,r,n),e.child;case 14:return r=e.type,i=Wn(r,e.pendingProps),i=Wn(r.type,i),hg(t,e,r,i,n);case 15:return OS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wn(r,i),Iu(t,e),e.tag=1,sn(r)?(t=!0,nc(e)):t=!1,ro(e,n),uS(e,r,i),Sh(e,r,i,n),wh(null,e,r,!0,t,n);case 19:return zS(t,e,n);case 22:return NS(t,e,n)}throw Error(J(156,e.tag))};function tE(t,e){return Ax(t,e)}function fb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,r){return new fb(t,e,n,r)}function um(t){return t=t.prototype,!(!t||!t.isReactComponent)}function db(t){if(typeof t=="function")return um(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rp)return 11;if(t===Cp)return 14}return 2}function gi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nu(t,e,n,r,i,a){var o=2;if(r=t,typeof t=="function")um(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fa:return qi(n.children,i,a,e);case Ap:o=8,i|=8;break;case $d:return t=Ln(12,n,e,i|2),t.elementType=$d,t.lanes=a,t;case jd:return t=Ln(13,n,e,i),t.elementType=jd,t.lanes=a,t;case Xd:return t=Ln(19,n,e,i),t.elementType=Xd,t.lanes=a,t;case cx:return kc(n,i,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lx:o=10;break e;case ux:o=9;break e;case Rp:o=11;break e;case Cp:o=14;break e;case ei:o=16,r=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,i),e.elementType=t,e.type=r,e.lanes=a,e}function qi(t,e,n,r){return t=Ln(7,t,r,e),t.lanes=n,t}function kc(t,e,n,r){return t=Ln(22,t,r,e),t.elementType=cx,t.lanes=n,t.stateNode={isHidden:!1},t}function Of(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Nf(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mf(0),this.expirationTimes=mf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cm(t,e,n,r,i,a,o,s,l){return t=new hb(t,e,n,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Ln(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xp(a),t}function pb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ua,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nE(t){if(!t)return Si;t=t._reactInternals;e:{if(ha(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(sn(n))return tS(t,n,e)}return e}function rE(t,e,n,r,i,a,o,s,l){return t=cm(n,r,!0,t,i,a,o,s,l),t.context=nE(null),n=t.current,r=Zt(),i=vi(n),a=Or(r,i),a.callback=e??null,pi(n,a,i),t.current.lanes=i,$s(t,i,r),ln(t,r),t}function zc(t,e,n,r){var i=e.current,a=Zt(),o=vi(i);return n=nE(n),e.context===null?e.context=n:e.pendingContext=n,e=Or(a,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pi(i,e,o),t!==null&&(Jn(t,i,o,a),Cu(t,i,o)),o}function mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fm(t,e){Tg(t,e),(t=t.alternate)&&Tg(t,e)}function mb(){return null}var iE=typeof reportError=="function"?reportError:function(t){console.error(t)};function dm(t){this._internalRoot=t}Bc.prototype.render=dm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));zc(t,e,null,null)};Bc.prototype.unmount=dm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;aa(function(){zc(null,t,null,null)}),e[Fr]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ox();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ri.length&&e!==0&&e<ri[n].priority;n++);ri.splice(n,0,t),n===0&&Ux(t)}};function hm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bg(){}function vb(t,e,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=mc(o);a.call(u)}}var o=rE(e,r,t,0,null,!1,!1,"",bg);return t._reactRootContainer=o,t[Fr]=o.current,bs(t.nodeType===8?t.parentNode:t),aa(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=mc(l);s.call(u)}}var l=cm(t,0,!1,null,null,!1,!1,"",bg);return t._reactRootContainer=l,t[Fr]=l.current,bs(t.nodeType===8?t.parentNode:t),aa(function(){zc(e,l,n,r)}),l}function Gc(t,e,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=mc(o);s.call(l)}}zc(e,o,t,i)}else o=vb(n,e,t,i,r);return mc(o)}Ix=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ns(e.pendingLanes);n!==0&&(Ip(e,n|1),ln(e,pt()),!($e&6)&&(vo=pt()+500,Ci()))}break;case 13:aa(function(){var r=kr(t,1);if(r!==null){var i=Zt();Jn(r,t,1,i)}}),fm(t,1)}};Dp=function(t){if(t.tag===13){var e=kr(t,134217728);if(e!==null){var n=Zt();Jn(e,t,134217728,n)}fm(t,134217728)}};Dx=function(t){if(t.tag===13){var e=vi(t),n=kr(t,e);if(n!==null){var r=Zt();Jn(n,t,e,r)}fm(t,e)}};Ox=function(){return Xe};Nx=function(t,e){var n=Xe;try{return Xe=t,e()}finally{Xe=n}};rh=function(t,e,n){switch(e){case"input":if(Kd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ic(r);if(!i)throw Error(J(90));dx(r),Kd(r,i)}}}break;case"textarea":px(t,n);break;case"select":e=n.value,e!=null&&Ja(t,!!n.multiple,e,!1)}};Sx=om;Ex=aa;var gb={usingClientEntryPoint:!1,Events:[Xs,Ha,Ic,yx,xx,om]},Vo={findFiberByHostInstance:Vi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_b={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tx(t),t===null?null:t.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||mb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Rc=Cl.inject(_b),hr=Cl}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gb;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hm(e))throw Error(J(200));return pb(t,e,null,n)};xn.createRoot=function(t,e){if(!hm(t))throw Error(J(299));var n=!1,r="",i=iE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=cm(t,1,!1,null,null,n,!1,r,i),t[Fr]=e.current,bs(t.nodeType===8?t.parentNode:t),new dm(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=Tx(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return aa(t)};xn.hydrate=function(t,e,n){if(!Hc(e))throw Error(J(200));return Gc(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!hm(t))throw Error(J(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=iE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rE(e,null,t,1,n??null,i,!1,a,o),t[Fr]=e.current,bs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bc(e)};xn.render=function(t,e,n){if(!Hc(e))throw Error(J(200));return Gc(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!Hc(t))throw Error(J(40));return t._reactRootContainer?(aa(function(){Gc(null,null,t,!1,function(){t._reactRootContainer=null,t[Fr]=null})}),!0):!1};xn.unstable_batchedUpdates=om;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hc(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return Gc(t,e,n,!1,r)};xn.version="18.2.0-next-9e3b772b8-20220608";function aE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aE)}catch(t){console.error(t)}}aE(),rx.exports=xn;var yb=rx.exports,Ag=yb;Vd.createRoot=Ag.createRoot,Vd.hydrateRoot=Ag.hydrateRoot;/*! *****************************************************************************
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
***************************************************************************** */var Uh=function(t,e){return Uh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},Uh(t,e)};function xb(t,e){Uh(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var mr=function(){return mr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},mr.apply(this,arguments)};function Hi(t,e,n,r){var i=arguments.length,a=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a}function Sb(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var a=arguments[e],o=0,s=a.length;o<s;o++,i++)r[i]=a[o];return r}var kt=function(t){try{return!!t()}catch{return!0}},Eb=kt,pm=!Eb(function(){var t=function(){}.bind();return typeof t!="function"||t.hasOwnProperty("prototype")}),oE=pm,sE=Function.prototype,Fh=sE.call,Mb=oE&&sE.bind.bind(Fh,Fh),wt=oE?Mb:function(t){return function(){return Fh.apply(t,arguments)}},lE=wt,wb=lE({}.toString),Tb=lE("".slice),bo=function(t){return Tb(wb(t),8,-1)},bb=wt,Ab=kt,Rb=bo,Uf=Object,Cb=bb("".split),mm=Ab(function(){return!Uf("z").propertyIsEnumerable(0)})?function(t){return Rb(t)=="String"?Cb(t,""):Uf(t)}:Uf,Ao=function(t){return t==null},Pb=Ao,Lb=TypeError,vm=function(t){if(Pb(t))throw Lb("Can't call method on "+t);return t},Ib=mm,Db=vm,Ro=function(t){return Ib(Db(t))},Pl=function(t){return t&&t.Math==Math&&t},En=Pl(typeof globalThis=="object"&&globalThis)||Pl(typeof window=="object"&&window)||Pl(typeof self=="object"&&self)||Pl(typeof uf=="object"&&uf)||function(){return this}()||uf||Function("return this")(),uE={exports:{}},Rg=En,Ob=Object.defineProperty,gm=function(t,e){try{Ob(Rg,t,{value:e,configurable:!0,writable:!0})}catch{Rg[t]=e}return e},Nb=En,Ub=gm,Cg="__core-js_shared__",Fb=Nb[Cg]||Ub(Cg,{}),_m=Fb,Pg=_m;(uE.exports=function(t,e){return Pg[t]||(Pg[t]=e!==void 0?e:{})})("versions",[]).push({version:"3.30.2",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"});var cE=uE.exports,kb=vm,zb=Object,qs=function(t){return zb(kb(t))},Bb=wt,Hb=qs,Gb=Bb({}.hasOwnProperty),tr=Object.hasOwn||function(e,n){return Gb(Hb(e),n)},Vb=wt,Wb=0,$b=Math.random(),jb=Vb(1 .toString),ym=function(t){return"Symbol("+(t===void 0?"":t)+")_"+jb(++Wb+$b,36)},Xb=typeof navigator<"u"&&String(navigator.userAgent)||"",fE=En,Ff=Xb,Lg=fE.process,Ig=fE.Deno,Dg=Lg&&Lg.versions||Ig&&Ig.version,Og=Dg&&Dg.v8,Xn,vc;Og&&(Xn=Og.split("."),vc=Xn[0]>0&&Xn[0]<4?1:+(Xn[0]+Xn[1]));!vc&&Ff&&(Xn=Ff.match(/Edge\/(\d+)/),(!Xn||Xn[1]>=74)&&(Xn=Ff.match(/Chrome\/(\d+)/),Xn&&(vc=+Xn[1])));var Yb=vc,Ng=Yb,qb=kt,Kb=En,Zb=Kb.String,dE=!!Object.getOwnPropertySymbols&&!qb(function(){var t=Symbol();return!Zb(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&Ng&&Ng<41}),Qb=dE,hE=Qb&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Jb=En,eA=cE,Ug=tr,tA=ym,nA=dE,rA=hE,Ya=Jb.Symbol,kf=eA("wks"),iA=rA?Ya.for||Ya:Ya&&Ya.withoutSetter||tA,Un=function(t){return Ug(kf,t)||(kf[t]=nA&&Ug(Ya,t)?Ya[t]:iA("Symbol."+t)),kf[t]},kh=typeof document=="object"&&document.all,aA=typeof kh>"u"&&kh!==void 0,pE={all:kh,IS_HTMLDDA:aA},mE=pE,oA=mE.all,Pt=mE.IS_HTMLDDA?function(t){return typeof t=="function"||t===oA}:function(t){return typeof t=="function"},Fg=Pt,vE=pE,sA=vE.all,Mn=vE.IS_HTMLDDA?function(t){return typeof t=="object"?t!==null:Fg(t)||t===sA}:function(t){return typeof t=="object"?t!==null:Fg(t)},lA=Mn,uA=String,cA=TypeError,_r=function(t){if(lA(t))return t;throw cA(uA(t)+" is not an object")},gE={},fA=kt,Fn=!fA(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),dA=Fn,hA=kt,_E=dA&&hA(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),nr={},pA=En,kg=Mn,zh=pA.document,mA=kg(zh)&&kg(zh.createElement),yE=function(t){return mA?zh.createElement(t):{}},vA=Fn,gA=kt,_A=yE,xE=!vA&&!gA(function(){return Object.defineProperty(_A("div"),"a",{get:function(){return 7}}).a!=7}),yA=pm,Ll=Function.prototype.call,$r=yA?Ll.bind(Ll):function(){return Ll.apply(Ll,arguments)},zf=En,xA=Pt,SA=function(t){return xA(t)?t:void 0},Ks=function(t,e){return arguments.length<2?SA(zf[t]):zf[t]&&zf[t][e]},EA=wt,xm=EA({}.isPrototypeOf),MA=Ks,wA=Pt,TA=xm,bA=hE,AA=Object,SE=bA?function(t){return typeof t=="symbol"}:function(t){var e=MA("Symbol");return wA(e)&&TA(e.prototype,AA(t))},RA=String,Sm=function(t){try{return RA(t)}catch{return"Object"}},CA=Pt,PA=Sm,LA=TypeError,Vc=function(t){if(CA(t))return t;throw LA(PA(t)+" is not a function")},IA=Vc,DA=Ao,Em=function(t,e){var n=t[e];return DA(n)?void 0:IA(n)},Bf=$r,Hf=Pt,Gf=Mn,OA=TypeError,NA=function(t,e){var n,r;if(e==="string"&&Hf(n=t.toString)&&!Gf(r=Bf(n,t))||Hf(n=t.valueOf)&&!Gf(r=Bf(n,t))||e!=="string"&&Hf(n=t.toString)&&!Gf(r=Bf(n,t)))return r;throw OA("Can't convert object to primitive value")},UA=$r,zg=Mn,Bg=SE,FA=Em,kA=NA,zA=Un,BA=TypeError,HA=zA("toPrimitive"),GA=function(t,e){if(!zg(t)||Bg(t))return t;var n=FA(t,HA),r;if(n){if(e===void 0&&(e="default"),r=UA(n,t,e),!zg(r)||Bg(r))return r;throw BA("Can't convert object to primitive value")}return e===void 0&&(e="number"),kA(t,e)},VA=GA,WA=SE,Mm=function(t){var e=VA(t,"string");return WA(e)?e:e+""},$A=Fn,jA=xE,XA=_E,Il=_r,Hg=Mm,YA=TypeError,Vf=Object.defineProperty,qA=Object.getOwnPropertyDescriptor,Wf="enumerable",$f="configurable",jf="writable";nr.f=$A?XA?function(e,n,r){if(Il(e),n=Hg(n),Il(r),typeof e=="function"&&n==="prototype"&&"value"in r&&jf in r&&!r[jf]){var i=qA(e,n);i&&i[jf]&&(e[n]=r.value,r={configurable:$f in r?r[$f]:i[$f],enumerable:Wf in r?r[Wf]:i[Wf],writable:!1})}return Vf(e,n,r)}:Vf:function(e,n,r){if(Il(e),n=Hg(n),Il(r),jA)try{return Vf(e,n,r)}catch{}if("get"in r||"set"in r)throw YA("Accessors not supported");return"value"in r&&(e[n]=r.value),e};var KA=Math.ceil,ZA=Math.floor,QA=Math.trunc||function(e){var n=+e;return(n>0?ZA:KA)(n)},JA=QA,wm=function(t){var e=+t;return e!==e||e===0?0:JA(e)},e2=wm,t2=Math.max,n2=Math.min,EE=function(t,e){var n=e2(t);return n<0?t2(n+e,0):n2(n,e)},r2=wm,i2=Math.min,a2=function(t){return t>0?i2(r2(t),9007199254740991):0},o2=a2,Zs=function(t){return o2(t.length)},s2=Ro,l2=EE,u2=Zs,Gg=function(t){return function(e,n,r){var i=s2(e),a=u2(i),o=l2(r,a),s;if(t&&n!=n){for(;a>o;)if(s=i[o++],s!=s)return!0}else for(;a>o;o++)if((t||o in i)&&i[o]===n)return t||o||0;return!t&&-1}},c2={includes:Gg(!0),indexOf:Gg(!1)},Wc={},f2=wt,Xf=tr,d2=Ro,h2=c2.indexOf,p2=Wc,Vg=f2([].push),ME=function(t,e){var n=d2(t),r=0,i=[],a;for(a in n)!Xf(p2,a)&&Xf(n,a)&&Vg(i,a);for(;e.length>r;)Xf(n,a=e[r++])&&(~h2(i,a)||Vg(i,a));return i},Tm=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],m2=ME,v2=Tm,wE=Object.keys||function(e){return m2(e,v2)},g2=Fn,_2=_E,y2=nr,x2=_r,S2=Ro,E2=wE;gE.f=g2&&!_2?Object.defineProperties:function(e,n){x2(e);for(var r=S2(n),i=E2(n),a=i.length,o=0,s;a>o;)y2.f(e,s=i[o++],r[s]);return e};var M2=Ks,w2=M2("document","documentElement"),T2=cE,b2=ym,Wg=T2("keys"),bm=function(t){return Wg[t]||(Wg[t]=b2(t))},A2=_r,R2=gE,$g=Tm,C2=Wc,P2=w2,L2=yE,I2=bm,jg=">",Xg="<",Bh="prototype",Hh="script",TE=I2("IE_PROTO"),Yf=function(){},bE=function(t){return Xg+Hh+jg+t+Xg+"/"+Hh+jg},Yg=function(t){t.write(bE("")),t.close();var e=t.parentWindow.Object;return t=null,e},D2=function(){var t=L2("iframe"),e="java"+Hh+":",n;return t.style.display="none",P2.appendChild(t),t.src=String(e),n=t.contentWindow.document,n.open(),n.write(bE("document.F=Object")),n.close(),n.F},Dl,Uu=function(){try{Dl=new ActiveXObject("htmlfile")}catch{}Uu=typeof document<"u"?document.domain&&Dl?Yg(Dl):D2():Yg(Dl);for(var t=$g.length;t--;)delete Uu[Bh][$g[t]];return Uu()};C2[TE]=!0;var Am=Object.create||function(e,n){var r;return e!==null?(Yf[Bh]=A2(e),r=new Yf,Yf[Bh]=null,r[TE]=e):r=Uu(),n===void 0?r:R2.f(r,n)},O2=Un,N2=Am,U2=nr.f,Gh=O2("unscopables"),Vh=Array.prototype;Vh[Gh]==null&&U2(Vh,Gh,{configurable:!0,value:N2(null)});var F2=function(t){Vh[Gh][t]=!0},Qs={},k2=En,z2=Pt,qg=k2.WeakMap,AE=z2(qg)&&/native code/.test(String(qg)),$c=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}},B2=Fn,H2=nr,G2=$c,Rm=B2?function(t,e,n){return H2.f(t,e,G2(1,n))}:function(t,e,n){return t[e]=n,t},V2=AE,RE=En,W2=Mn,$2=Rm,qf=tr,Kf=_m,j2=bm,X2=Wc,Kg="Object already initialized",Wh=RE.TypeError,Y2=RE.WeakMap,gc,Ns,_c,q2=function(t){return _c(t)?Ns(t):gc(t,{})},K2=function(t){return function(e){var n;if(!W2(e)||(n=Ns(e)).type!==t)throw Wh("Incompatible receiver, "+t+" required");return n}};if(V2||Kf.state){var ar=Kf.state||(Kf.state=new Y2);ar.get=ar.get,ar.has=ar.has,ar.set=ar.set,gc=function(t,e){if(ar.has(t))throw Wh(Kg);return e.facade=t,ar.set(t,e),e},Ns=function(t){return ar.get(t)||{}},_c=function(t){return ar.has(t)}}else{var va=j2("state");X2[va]=!0,gc=function(t,e){if(qf(t,va))throw Wh(Kg);return e.facade=t,$2(t,va,e),e},Ns=function(t){return qf(t,va)?t[va]:{}},_c=function(t){return qf(t,va)}}var Co={set:gc,get:Ns,has:_c,enforce:q2,getterFor:K2},Cm={},Pm={},CE={}.propertyIsEnumerable,PE=Object.getOwnPropertyDescriptor,Z2=PE&&!CE.call({1:2},1);Pm.f=Z2?function(e){var n=PE(this,e);return!!n&&n.enumerable}:CE;var Q2=Fn,J2=$r,eR=Pm,tR=$c,nR=Ro,rR=Mm,iR=tr,aR=xE,Zg=Object.getOwnPropertyDescriptor;Cm.f=Q2?Zg:function(e,n){if(e=nR(e),n=rR(n),aR)try{return Zg(e,n)}catch{}if(iR(e,n))return tR(!J2(eR.f,e,n),e[n])};var LE={exports:{}},$h=Fn,oR=tr,IE=Function.prototype,sR=$h&&Object.getOwnPropertyDescriptor,Lm=oR(IE,"name"),lR=Lm&&function(){}.name==="something",uR=Lm&&(!$h||$h&&sR(IE,"name").configurable),DE={EXISTS:Lm,PROPER:lR,CONFIGURABLE:uR},cR=wt,fR=Pt,jh=_m,dR=cR(Function.toString);fR(jh.inspectSource)||(jh.inspectSource=function(t){return dR(t)});var OE=jh.inspectSource,Im=wt,hR=kt,pR=Pt,Ol=tr,Xh=Fn,mR=DE.CONFIGURABLE,vR=OE,NE=Co,gR=NE.enforce,_R=NE.get,Qg=String,Fu=Object.defineProperty,yR=Im("".slice),xR=Im("".replace),SR=Im([].join),ER=Xh&&!hR(function(){return Fu(function(){},"length",{value:8}).length!==8}),MR=String(String).split("String"),wR=LE.exports=function(t,e,n){yR(Qg(e),0,7)==="Symbol("&&(e="["+xR(Qg(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!Ol(t,"name")||mR&&t.name!==e)&&(Xh?Fu(t,"name",{value:e,configurable:!0}):t.name=e),ER&&n&&Ol(n,"arity")&&t.length!==n.arity&&Fu(t,"length",{value:n.arity});try{n&&Ol(n,"constructor")&&n.constructor?Xh&&Fu(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch{}var r=gR(t);return Ol(r,"source")||(r.source=SR(MR,typeof e=="string"?e:"")),t};Function.prototype.toString=wR(function(){return pR(this)&&_R(this).source||vR(this)},"toString");var UE=LE.exports,TR=Pt,bR=nr,AR=UE,RR=gm,Po=function(t,e,n,r){r||(r={});var i=r.enumerable,a=r.name!==void 0?r.name:e;if(TR(n)&&AR(n,a,r),r.global)i?t[e]=n:RR(e,n);else{try{r.unsafe?t[e]&&(i=!0):delete t[e]}catch{}i?t[e]=n:bR.f(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t},jc={},CR=ME,PR=Tm,LR=PR.concat("length","prototype");jc.f=Object.getOwnPropertyNames||function(e){return CR(e,LR)};var Dm={};Dm.f=Object.getOwnPropertySymbols;var IR=Ks,DR=wt,OR=jc,NR=Dm,UR=_r,FR=DR([].concat),kR=IR("Reflect","ownKeys")||function(e){var n=OR.f(UR(e)),r=NR.f;return r?FR(n,r(e)):n},Jg=tr,zR=kR,BR=Cm,HR=nr,GR=function(t,e,n){for(var r=zR(e),i=HR.f,a=BR.f,o=0;o<r.length;o++){var s=r[o];!Jg(t,s)&&!(n&&Jg(n,s))&&i(t,s,a(e,s))}},VR=kt,WR=Pt,$R=/#|\.prototype\./,Js=function(t,e){var n=XR[jR(t)];return n==qR?!0:n==YR?!1:WR(e)?VR(e):!!e},jR=Js.normalize=function(t){return String(t).replace($R,".").toLowerCase()},XR=Js.data={},YR=Js.NATIVE="N",qR=Js.POLYFILL="P",FE=Js,Zf=En,KR=Cm.f,ZR=Rm,QR=Po,JR=gm,eC=GR,tC=FE,el=function(t,e){var n=t.target,r=t.global,i=t.stat,a,o,s,l,u,c;if(r?o=Zf:i?o=Zf[n]||JR(n,{}):o=(Zf[n]||{}).prototype,o)for(s in e){if(u=e[s],t.dontCallGetSet?(c=KR(o,s),l=c&&c.value):l=o[s],a=tC(r?s:n+(i?".":"#")+s,t.forced),!a&&l!==void 0){if(typeof u==typeof l)continue;eC(u,l)}(t.sham||l&&l.sham)&&ZR(u,"sham",!0),QR(o,s,u,t)}},nC=kt,rC=!nC(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),iC=tr,aC=Pt,oC=qs,sC=bm,lC=rC,e0=sC("IE_PROTO"),Yh=Object,uC=Yh.prototype,kE=lC?Yh.getPrototypeOf:function(t){var e=oC(t);if(iC(e,e0))return e[e0];var n=e.constructor;return aC(n)&&e instanceof n?n.prototype:e instanceof Yh?uC:null},cC=kt,fC=Pt,dC=Mn,t0=kE,hC=Po,pC=Un,qh=pC("iterator"),zE=!1,oa,Qf,Jf;[].keys&&(Jf=[].keys(),"next"in Jf?(Qf=t0(t0(Jf)),Qf!==Object.prototype&&(oa=Qf)):zE=!0);var mC=!dC(oa)||cC(function(){var t={};return oa[qh].call(t)!==t});mC&&(oa={});fC(oa[qh])||hC(oa,qh,function(){return this});var BE={IteratorPrototype:oa,BUGGY_SAFARI_ITERATORS:zE},vC=nr.f,gC=tr,_C=Un,n0=_C("toStringTag"),Om=function(t,e,n){t&&!n&&(t=t.prototype),t&&!gC(t,n0)&&vC(t,n0,{configurable:!0,value:e})},yC=BE.IteratorPrototype,xC=Am,SC=$c,EC=Om,MC=Qs,wC=function(){return this},TC=function(t,e,n,r){var i=e+" Iterator";return t.prototype=xC(yC,{next:SC(+!r,n)}),EC(t,i,!1),MC[i]=wC,t},bC=wt,AC=Vc,RC=function(t,e,n){try{return bC(AC(Object.getOwnPropertyDescriptor(t,e)[n]))}catch{}},CC=Pt,PC=String,LC=TypeError,IC=function(t){if(typeof t=="object"||CC(t))return t;throw LC("Can't set "+PC(t)+" as a prototype")},DC=RC,OC=_r,NC=IC,HE=Object.setPrototypeOf||("__proto__"in{}?function(){var t=!1,e={},n;try{n=DC(Object.prototype,"__proto__","set"),n(e,[]),t=e instanceof Array}catch{}return function(i,a){return OC(i),NC(a),t?n(i,a):i.__proto__=a,i}}():void 0),UC=el,FC=$r,GE=DE,kC=Pt,zC=TC,r0=kE,i0=HE,BC=Om,HC=Rm,ed=Po,GC=Un,VC=Qs,VE=BE,WC=GE.PROPER,$C=GE.CONFIGURABLE,a0=VE.IteratorPrototype,Nl=VE.BUGGY_SAFARI_ITERATORS,Wo=GC("iterator"),o0="keys",$o="values",s0="entries",jC=function(){return this},Nm=function(t,e,n,r,i,a,o){zC(n,e,r);var s=function(d){if(d===i&&h)return h;if(!Nl&&d in c)return c[d];switch(d){case o0:return function(){return new n(this,d)};case $o:return function(){return new n(this,d)};case s0:return function(){return new n(this,d)}}return function(){return new n(this)}},l=e+" Iterator",u=!1,c=t.prototype,f=c[Wo]||c["@@iterator"]||i&&c[i],h=!Nl&&f||s(i),p=e=="Array"&&c.entries||f,_,y,m;if(p&&(_=r0(p.call(new t)),_!==Object.prototype&&_.next&&(r0(_)!==a0&&(i0?i0(_,a0):kC(_[Wo])||ed(_,Wo,jC)),BC(_,l,!0))),WC&&i==$o&&f&&f.name!==$o&&($C?HC(c,"name",$o):(u=!0,h=function(){return FC(f,this)})),i)if(y={values:s($o),keys:a?h:s(o0),entries:s(s0)},o)for(m in y)(Nl||u||!(m in c))&&ed(c,m,y[m]);else UC({target:e,proto:!0,forced:Nl||u},y);return c[Wo]!==h&&ed(c,Wo,h,{name:i}),VC[e]=h,y},Um=function(t,e){return{value:t,done:e}},XC=Ro,Fm=F2,l0=Qs,WE=Co,YC=nr.f,qC=Nm,Ul=Um,KC=Fn,$E="Array Iterator",ZC=WE.set,QC=WE.getterFor($E);qC(Array,"Array",function(t,e){ZC(this,{type:$E,target:XC(t),index:0,kind:e})},function(){var t=QC(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,Ul(void 0,!0)):n=="keys"?Ul(r,!1):n=="values"?Ul(e[r],!1):Ul([r,e[r]],!1)},"values");var u0=l0.Arguments=l0.Array;Fm("keys");Fm("values");Fm("entries");if(KC&&u0.name!=="values")try{YC(u0,"name",{value:"values"})}catch{}var jE={exports:{}},XE={},JC=Mm,eP=nr,tP=$c,YE=function(t,e,n){var r=JC(e);r in t?eP.f(t,r,tP(0,n)):t[r]=n},c0=EE,nP=Zs,rP=YE,iP=Array,aP=Math.max,oP=function(t,e,n){for(var r=nP(t),i=c0(e,r),a=c0(n===void 0?r:n,r),o=iP(aP(a-i,0)),s=0;i<a;i++,s++)rP(o,s,t[i]);return o.length=s,o},sP=bo,lP=Ro,qE=jc.f,uP=oP,KE=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],cP=function(t){try{return qE(t)}catch{return uP(KE)}};XE.f=function(e){return KE&&sP(e)=="Window"?cP(e):qE(lP(e))};var fP=kt,dP=fP(function(){if(typeof ArrayBuffer=="function"){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}),hP=kt,pP=Mn,mP=bo,f0=dP,ku=Object.isExtensible,vP=hP(function(){ku(1)}),gP=vP||f0?function(e){return!pP(e)||f0&&mP(e)=="ArrayBuffer"?!1:ku?ku(e):!0}:ku,_P=kt,ZE=!_P(function(){return Object.isExtensible(Object.preventExtensions({}))}),yP=el,xP=wt,SP=Wc,EP=Mn,km=tr,MP=nr.f,d0=jc,wP=XE,zm=gP,TP=ym,bP=ZE,QE=!1,Br=TP("meta"),AP=0,Bm=function(t){MP(t,Br,{value:{objectID:"O"+AP++,weakData:{}}})},RP=function(t,e){if(!EP(t))return typeof t=="symbol"?t:(typeof t=="string"?"S":"P")+t;if(!km(t,Br)){if(!zm(t))return"F";if(!e)return"E";Bm(t)}return t[Br].objectID},CP=function(t,e){if(!km(t,Br)){if(!zm(t))return!0;if(!e)return!1;Bm(t)}return t[Br].weakData},PP=function(t){return bP&&QE&&zm(t)&&!km(t,Br)&&Bm(t),t},LP=function(){IP.enable=function(){},QE=!0;var t=d0.f,e=xP([].splice),n={};n[Br]=1,t(n).length&&(d0.f=function(r){for(var i=t(r),a=0,o=i.length;a<o;a++)if(i[a]===Br){e(i,a,1);break}return i},yP({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:wP.f}))},IP=jE.exports={enable:LP,fastKey:RP,getWeakData:CP,onFreeze:PP};SP[Br]=!0;var Xc=jE.exports,DP=bo,OP=wt,NP=function(t){if(DP(t)==="Function")return OP(t)},h0=NP,UP=Vc,FP=pm,kP=h0(h0.bind),Yc=function(t,e){return UP(t),e===void 0?t:FP?kP(t,e):function(){return t.apply(e,arguments)}},zP=Un,BP=Qs,HP=zP("iterator"),GP=Array.prototype,JE=function(t){return t!==void 0&&(BP.Array===t||GP[HP]===t)},VP=Un,WP=VP("toStringTag"),eM={};eM[WP]="z";var Hm=String(eM)==="[object z]",$P=Hm,jP=Pt,zu=bo,XP=Un,YP=XP("toStringTag"),qP=Object,KP=zu(function(){return arguments}())=="Arguments",ZP=function(t,e){try{return t[e]}catch{}},qc=$P?zu:function(t){var e,n,r;return t===void 0?"Undefined":t===null?"Null":typeof(n=ZP(e=qP(t),YP))=="string"?n:KP?zu(e):(r=zu(e))=="Object"&&jP(e.callee)?"Arguments":r},QP=qc,p0=Em,JP=Ao,eL=Qs,tL=Un,nL=tL("iterator"),Gm=function(t){if(!JP(t))return p0(t,nL)||p0(t,"@@iterator")||eL[QP(t)]},rL=$r,iL=Vc,aL=_r,oL=Sm,sL=Gm,lL=TypeError,tM=function(t,e){var n=arguments.length<2?sL(t):e;if(iL(n))return aL(rL(n,t));throw lL(oL(t)+" is not iterable")},uL=$r,m0=_r,cL=Em,nM=function(t,e,n){var r,i;m0(t);try{if(r=cL(t,"return"),!r){if(e==="throw")throw n;return n}r=uL(r,t)}catch(a){i=!0,r=a}if(e==="throw")throw n;if(i)throw r;return m0(r),n},fL=Yc,dL=$r,hL=_r,pL=Sm,mL=JE,vL=Zs,v0=xm,gL=tM,_L=Gm,g0=nM,yL=TypeError,Bu=function(t,e){this.stopped=t,this.result=e},_0=Bu.prototype,Vm=function(t,e,n){var r=n&&n.that,i=!!(n&&n.AS_ENTRIES),a=!!(n&&n.IS_RECORD),o=!!(n&&n.IS_ITERATOR),s=!!(n&&n.INTERRUPTED),l=fL(e,r),u,c,f,h,p,_,y,m=function(v){return u&&g0(u,"normal",v),new Bu(!0,v)},d=function(v){return i?(hL(v),s?l(v[0],v[1],m):l(v[0],v[1])):s?l(v,m):l(v)};if(a)u=t.iterator;else if(o)u=t;else{if(c=_L(t),!c)throw yL(pL(t)+" is not iterable");if(mL(c)){for(f=0,h=vL(t);h>f;f++)if(p=d(t[f]),p&&v0(_0,p))return p;return new Bu(!1)}u=gL(t,c)}for(_=a?t.next:u.next;!(y=dL(_,u)).done;){try{p=d(y.value)}catch(v){g0(u,"throw",v)}if(typeof p=="object"&&p&&v0(_0,p))return p}return new Bu(!1)},xL=xm,SL=TypeError,Wm=function(t,e){if(xL(e,t))return t;throw SL("Incorrect invocation")},EL=Un,rM=EL("iterator"),iM=!1;try{var ML=0,y0={next:function(){return{done:!!ML++}},return:function(){iM=!0}};y0[rM]=function(){return this},Array.from(y0,function(){throw 2})}catch{}var aM=function(t,e){if(!e&&!iM)return!1;var n=!1;try{var r={};r[rM]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch{}return n},wL=Pt,TL=Mn,x0=HE,bL=function(t,e,n){var r,i;return x0&&wL(r=e.constructor)&&r!==n&&TL(i=r.prototype)&&i!==n.prototype&&x0(t,i),t},AL=el,RL=En,CL=wt,S0=FE,PL=Po,LL=Xc,IL=Vm,DL=Wm,OL=Pt,NL=Ao,td=Mn,nd=kt,UL=aM,FL=Om,kL=bL,$m=function(t,e,n){var r=t.indexOf("Map")!==-1,i=t.indexOf("Weak")!==-1,a=r?"set":"add",o=RL[t],s=o&&o.prototype,l=o,u={},c=function(d){var v=CL(s[d]);PL(s,d,d=="add"?function(x){return v(this,x===0?0:x),this}:d=="delete"?function(g){return i&&!td(g)?!1:v(this,g===0?0:g)}:d=="get"?function(x){return i&&!td(x)?void 0:v(this,x===0?0:x)}:d=="has"?function(x){return i&&!td(x)?!1:v(this,x===0?0:x)}:function(x,M){return v(this,x===0?0:x,M),this})},f=S0(t,!OL(o)||!(i||s.forEach&&!nd(function(){new o().entries().next()})));if(f)l=n.getConstructor(e,t,r,a),LL.enable();else if(S0(t,!0)){var h=new l,p=h[a](i?{}:-0,1)!=h,_=nd(function(){h.has(1)}),y=UL(function(d){new o(d)}),m=!i&&nd(function(){for(var d=new o,v=5;v--;)d[a](v,v);return!d.has(-0)});y||(l=e(function(d,v){DL(d,s);var g=kL(new o,d,l);return NL(v)||IL(v,g[a],{that:g,AS_ENTRIES:r}),g}),l.prototype=s,s.constructor=l),(_||m)&&(c("delete"),c("has"),r&&c("get")),(m||p)&&c(a),i&&s.clear&&delete s.clear}return u[t]=l,AL({global:!0,constructor:!0,forced:l!=o},u),FL(l,t),i||n.setStrong(l,t,r),l},E0=UE,zL=nr,oM=function(t,e,n){return n.get&&E0(n.get,e,{getter:!0}),n.set&&E0(n.set,e,{setter:!0}),zL.f(t,e,n)},BL=Po,jm=function(t,e,n){for(var r in e)BL(t,r,e[r],n);return t},HL=Ks,GL=oM,VL=Un,WL=Fn,M0=VL("species"),$L=function(t){var e=HL(t);WL&&e&&!e[M0]&&GL(e,M0,{configurable:!0,get:function(){return this}})},jL=Am,XL=oM,w0=jm,YL=Yc,qL=Wm,KL=Ao,ZL=Vm,QL=Nm,Fl=Um,JL=$L,jo=Fn,T0=Xc.fastKey,sM=Co,b0=sM.set,rd=sM.getterFor,lM={getConstructor:function(t,e,n,r){var i=t(function(u,c){qL(u,a),b0(u,{type:e,index:jL(null),first:void 0,last:void 0,size:0}),jo||(u.size=0),KL(c)||ZL(c,u[r],{that:u,AS_ENTRIES:n})}),a=i.prototype,o=rd(e),s=function(u,c,f){var h=o(u),p=l(u,c),_,y;return p?p.value=f:(h.last=p={index:y=T0(c,!0),key:c,value:f,previous:_=h.last,next:void 0,removed:!1},h.first||(h.first=p),_&&(_.next=p),jo?h.size++:u.size++,y!=="F"&&(h.index[y]=p)),u},l=function(u,c){var f=o(u),h=T0(c),p;if(h!=="F")return f.index[h];for(p=f.first;p;p=p.next)if(p.key==c)return p};return w0(a,{clear:function(){for(var c=this,f=o(c),h=f.index,p=f.first;p;)p.removed=!0,p.previous&&(p.previous=p.previous.next=void 0),delete h[p.index],p=p.next;f.first=f.last=void 0,jo?f.size=0:c.size=0},delete:function(u){var c=this,f=o(c),h=l(c,u);if(h){var p=h.next,_=h.previous;delete f.index[h.index],h.removed=!0,_&&(_.next=p),p&&(p.previous=_),f.first==h&&(f.first=p),f.last==h&&(f.last=_),jo?f.size--:c.size--}return!!h},forEach:function(c){for(var f=o(this),h=YL(c,arguments.length>1?arguments[1]:void 0),p;p=p?p.next:f.first;)for(h(p.value,p.key,this);p&&p.removed;)p=p.previous},has:function(c){return!!l(this,c)}}),w0(a,n?{get:function(c){var f=l(this,c);return f&&f.value},set:function(c,f){return s(this,c===0?0:c,f)}}:{add:function(c){return s(this,c=c===0?0:c,c)}}),jo&&XL(a,"size",{configurable:!0,get:function(){return o(this).size}}),i},setStrong:function(t,e,n){var r=e+" Iterator",i=rd(e),a=rd(r);QL(t,e,function(o,s){b0(this,{type:r,target:o,state:i(o),kind:s,last:void 0})},function(){for(var o=a(this),s=o.kind,l=o.last;l&&l.removed;)l=l.previous;return!o.target||!(o.last=l=l?l.next:o.state.first)?(o.target=void 0,Fl(void 0,!0)):s=="keys"?Fl(l.key,!1):s=="values"?Fl(l.value,!1):Fl([l.key,l.value],!1)},n?"entries":"values",!n,!0),JL(e)}},eI=$m,tI=lM;eI("Map",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},tI);var nI=Hm,rI=qc,iI=nI?{}.toString:function(){return"[object "+rI(this)+"]"},aI=Hm,oI=Po,sI=iI;aI||oI(Object.prototype,"toString",sI,{unsafe:!0});var lI=qc,uI=String,uM=function(t){if(lI(t)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return uI(t)},Xm=wt,cI=wm,fI=uM,dI=vm,hI=Xm("".charAt),A0=Xm("".charCodeAt),pI=Xm("".slice),R0=function(t){return function(e,n){var r=fI(dI(e)),i=cI(n),a=r.length,o,s;return i<0||i>=a?t?"":void 0:(o=A0(r,i),o<55296||o>56319||i+1===a||(s=A0(r,i+1))<56320||s>57343?t?hI(r,i):o:t?pI(r,i,i+2):(o-55296<<10)+(s-56320)+65536)}},mI={codeAt:R0(!1),charAt:R0(!0)},vI=mI.charAt,gI=uM,cM=Co,_I=Nm,C0=Um,fM="String Iterator",yI=cM.set,xI=cM.getterFor(fM);_I(String,"String",function(t){yI(this,{type:fM,string:gI(t),index:0})},function(){var e=xI(this),n=e.string,r=e.index,i;return r>=n.length?C0(void 0,!0):(i=vI(n,r),e.index+=i.length,C0(i,!1))});var SI=En,tl=SI,EI=tl;EI.Map;var MI=$m,wI=lM;MI("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},wI);var TI=tl;TI.Set;var bI=bo,AI=Array.isArray||function(e){return bI(e)=="Array"},RI=wt,CI=kt,dM=Pt,PI=qc,LI=Ks,II=OE,hM=function(){},DI=[],pM=LI("Reflect","construct"),Ym=/^\s*(?:class|function)\b/,OI=RI(Ym.exec),NI=!Ym.exec(hM),Xo=function(e){if(!dM(e))return!1;try{return pM(hM,DI,e),!0}catch{return!1}},mM=function(e){if(!dM(e))return!1;switch(PI(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return NI||!!OI(Ym,II(e))}catch{return!0}};mM.sham=!0;var vM=!pM||CI(function(){var t;return Xo(Xo.call)||!Xo(Object)||!Xo(function(){t=!0})||t})?mM:Xo,P0=AI,UI=vM,FI=Mn,kI=Un,zI=kI("species"),L0=Array,BI=function(t){var e;return P0(t)&&(e=t.constructor,UI(e)&&(e===L0||P0(e.prototype))?e=void 0:FI(e)&&(e=e[zI],e===null&&(e=void 0))),e===void 0?L0:e},HI=BI,GI=function(t,e){return new(HI(t))(e===0?0:e)},VI=Yc,WI=wt,$I=mm,jI=qs,XI=Zs,YI=GI,I0=WI([].push),Yr=function(t){var e=t==1,n=t==2,r=t==3,i=t==4,a=t==6,o=t==7,s=t==5||a;return function(l,u,c,f){for(var h=jI(l),p=$I(h),_=VI(u,c),y=XI(p),m=0,d=f||YI,v=e?d(l,y):n||o?d(l,0):void 0,g,x;y>m;m++)if((s||m in p)&&(g=p[m],x=_(g,m,h),t))if(e)v[m]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return m;case 2:I0(v,g)}else switch(t){case 4:return!1;case 7:I0(v,g)}return a?-1:r||i?i:v}},qI={forEach:Yr(0),map:Yr(1),filter:Yr(2),some:Yr(3),every:Yr(4),find:Yr(5),findIndex:Yr(6),filterReject:Yr(7)},KI=wt,D0=jm,kl=Xc.getWeakData,ZI=Wm,QI=_r,JI=Ao,id=Mn,e3=Vm,gM=qI,O0=tr,_M=Co,t3=_M.set,n3=_M.getterFor,r3=gM.find,i3=gM.findIndex,a3=KI([].splice),o3=0,zl=function(t){return t.frozen||(t.frozen=new yM)},yM=function(){this.entries=[]},ad=function(t,e){return r3(t.entries,function(n){return n[0]===e})};yM.prototype={get:function(t){var e=ad(this,t);if(e)return e[1]},has:function(t){return!!ad(this,t)},set:function(t,e){var n=ad(this,t);n?n[1]=e:this.entries.push([t,e])},delete:function(t){var e=i3(this.entries,function(n){return n[0]===t});return~e&&a3(this.entries,e,1),!!~e}};var s3={getConstructor:function(t,e,n,r){var i=t(function(l,u){ZI(l,a),t3(l,{type:e,id:o3++,frozen:void 0}),JI(u)||e3(u,l[r],{that:l,AS_ENTRIES:n})}),a=i.prototype,o=n3(e),s=function(l,u,c){var f=o(l),h=kl(QI(u),!0);return h===!0?zl(f).set(u,c):h[f.id]=c,l};return D0(a,{delete:function(l){var u=o(this);if(!id(l))return!1;var c=kl(l);return c===!0?zl(u).delete(l):c&&O0(c,u.id)&&delete c[u.id]},has:function(u){var c=o(this);if(!id(u))return!1;var f=kl(u);return f===!0?zl(c).has(u):f&&O0(f,c.id)}}),D0(a,n?{get:function(u){var c=o(this);if(id(u)){var f=kl(u);return f===!0?zl(c).get(u):f?f[c.id]:void 0}},set:function(u,c){return s(this,u,c)}}:{add:function(u){return s(this,u,!0)}}),i}},l3=ZE,N0=En,Hu=wt,U0=jm,u3=Xc,c3=$m,xM=s3,Bl=Mn,Hl=Co.enforce,f3=kt,d3=AE,nl=Object,h3=Array.isArray,Gl=nl.isExtensible,SM=nl.isFrozen,p3=nl.isSealed,EM=nl.freeze,m3=nl.seal,F0={},k0={},v3=!N0.ActiveXObject&&"ActiveXObject"in N0,Yo,MM=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},wM=c3("WeakMap",MM,xM),Oa=wM.prototype,Gu=Hu(Oa.set),g3=function(){return l3&&f3(function(){var t=EM([]);return Gu(new wM,t,1),!SM(t)})};if(d3)if(v3){Yo=xM.getConstructor(MM,"WeakMap",!0),u3.enable();var z0=Hu(Oa.delete),Vl=Hu(Oa.has),B0=Hu(Oa.get);U0(Oa,{delete:function(t){if(Bl(t)&&!Gl(t)){var e=Hl(this);return e.frozen||(e.frozen=new Yo),z0(this,t)||e.frozen.delete(t)}return z0(this,t)},has:function(e){if(Bl(e)&&!Gl(e)){var n=Hl(this);return n.frozen||(n.frozen=new Yo),Vl(this,e)||n.frozen.has(e)}return Vl(this,e)},get:function(e){if(Bl(e)&&!Gl(e)){var n=Hl(this);return n.frozen||(n.frozen=new Yo),Vl(this,e)?B0(this,e):n.frozen.get(e)}return B0(this,e)},set:function(e,n){if(Bl(e)&&!Gl(e)){var r=Hl(this);r.frozen||(r.frozen=new Yo),Vl(this,e)?Gu(this,e,n):r.frozen.set(e,n)}else Gu(this,e,n);return this}})}else g3()&&U0(Oa,{set:function(e,n){var r;return h3(e)&&(SM(e)?r=F0:p3(e)&&(r=k0)),Gu(this,e,n),r==F0&&EM(e),r==k0&&m3(e),this}});var _3=tl;_3.WeakMap;var y3=_r,x3=nM,S3=function(t,e,n,r){try{return r?e(y3(n)[0],n[1]):e(n)}catch(i){x3(t,"throw",i)}},E3=Yc,M3=$r,w3=qs,T3=S3,b3=JE,A3=vM,R3=Zs,H0=YE,C3=tM,P3=Gm,G0=Array,L3=function(e){var n=w3(e),r=A3(this),i=arguments.length,a=i>1?arguments[1]:void 0,o=a!==void 0;o&&(a=E3(a,i>2?arguments[2]:void 0));var s=P3(n),l=0,u,c,f,h,p,_;if(s&&!(this===G0&&b3(s)))for(h=C3(n,s),p=h.next,c=r?new this:[];!(f=M3(p,h)).done;l++)_=o?T3(h,a,[f.value,l],!0):f.value,H0(c,l,_);else for(u=R3(n),c=r?new this(u):G0(u);u>l;l++)_=o?a(n[l],l):n[l],H0(c,l,_);return c.length=l,c},I3=el,D3=L3,O3=aM,N3=!O3(function(t){Array.from(t)});I3({target:"Array",stat:!0,forced:N3},{from:D3});var U3=tl;U3.Array.from;var V0=Fn,F3=wt,k3=$r,z3=kt,od=wE,B3=Dm,H3=Pm,G3=qs,V3=mm,ga=Object.assign,W0=Object.defineProperty,W3=F3([].concat),$3=!ga||z3(function(){if(V0&&ga({b:1},ga(W0({},"a",{enumerable:!0,get:function(){W0(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(i){e[i]=i}),ga({},t)[n]!=7||od(ga({},e)).join("")!=r})?function(e,n){for(var r=G3(e),i=arguments.length,a=1,o=B3.f,s=H3.f;i>a;)for(var l=V3(arguments[a++]),u=o?W3(od(l),o(l)):od(l),c=u.length,f=0,h;c>f;)h=u[f++],(!V0||k3(s,l,h))&&(r[h]=l[h]);return r}:ga,j3=el,$0=$3;j3({target:"Object",stat:!0,arity:2,forced:Object.assign!==$0},{assign:$0});var X3=tl;X3.Object.assign;var Wl,yc=new WeakMap;function TM(){if(Wl!==void 0)return Wl;var t=!1;try{var e=function(){},n=Object.defineProperty({},"passive",{enumerable:!0,get:function(){return t=!0,!0}});window.addEventListener("testPassive",e,n),window.removeEventListener("testPassive",e,n)}catch{}return Wl=t?{passive:!1}:!1,Wl}function Lo(t){var e=yc.get(t)||[];return yc.set(t,e),function(r,i,a){function o(s){s.defaultPrevented||a(s)}i.split(/\s+/g).forEach(function(s){e.push({elem:r,eventName:s,handler:o}),r.addEventListener(s,o,TM())})}}function Y3(t){var e=yc.get(t);e&&(e.forEach(function(n){var r=n.elem,i=n.eventName,a=n.handler;r.removeEventListener(i,a,TM())}),yc.delete(t))}function q3(t){return t.touches?t.touches[t.touches.length-1]:t}function ao(t){var e=q3(t);return{x:e.clientX,y:e.clientY}}function $l(t,e){return e===void 0&&(e=[]),e.some(function(n){return t===n})}var bM=["webkit","moz","ms","o"],K3=new RegExp("^-(?!(?:"+bM.join("|")+")-)");function Z3(t){var e={};return Object.keys(t).forEach(function(n){if(!K3.test(n)){e[n]=t[n];return}var r=t[n];n=n.replace(/^-/,""),e[n]=r,bM.forEach(function(i){e["-"+i+"-"+n]=r})}),e}function sa(t,e){e=Z3(e),Object.keys(e).forEach(function(n){var r=n.replace(/^-/,"").replace(/-([a-z])/g,function(i,a){return a.toUpperCase()});t.style[r]=e[n]})}var Q3=function(){function t(e){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=ao(e)}return t.prototype.update=function(e){var n=this,r=n.velocity,i=n.updateTime,a=n.lastPosition,o=Date.now(),s=ao(e),l={x:-(s.x-a.x),y:-(s.y-a.y)},u=o-i||16.7,c=l.x/u*16.7,f=l.y/u*16.7;r.x=c*this.velocityMultiplier,r.y=f*this.velocityMultiplier,this.delta=l,this.updateTime=o,this.lastPosition=s},t}(),J3=function(){function t(){this._touchList={}}return Object.defineProperty(t.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),t.prototype.isActive=function(){return this._activeTouchID!==void 0},t.prototype.getDelta=function(){var e=this._getActiveTracker();return e?mr({},e.delta):this._primitiveValue},t.prototype.getVelocity=function(){var e=this._getActiveTracker();return e?mr({},e.velocity):this._primitiveValue},t.prototype.getEasingDistance=function(e){var n=1-e,r={x:0,y:0},i=this.getVelocity();return Object.keys(i).forEach(function(a){for(var o=Math.abs(i[a])<=10?0:i[a];o!==0;)r[a]+=o,o=o*n|0}),r},t.prototype.track=function(e){var n=this,r=e.targetTouches;return Array.from(r).forEach(function(i){n._add(i)}),this._touchList},t.prototype.update=function(e){var n=this,r=e.touches,i=e.changedTouches;return Array.from(r).forEach(function(a){n._renew(a)}),this._setActiveID(i),this._touchList},t.prototype.release=function(e){var n=this;delete this._activeTouchID,Array.from(e.changedTouches).forEach(function(r){n._delete(r)})},t.prototype._add=function(e){this._has(e)&&this._delete(e);var n=new Q3(e);this._touchList[e.identifier]=n},t.prototype._renew=function(e){if(this._has(e)){var n=this._touchList[e.identifier];n.update(e)}},t.prototype._delete=function(e){delete this._touchList[e.identifier]},t.prototype._has=function(e){return this._touchList.hasOwnProperty(e.identifier)},t.prototype._setActiveID=function(e){this._activeTouchID=e[e.length-1].identifier},t.prototype._getActiveTracker=function(){var e=this,n=e._touchList,r=e._activeTouchID;return n[r]},t}();function Nn(t,e,n){return Math.max(e,Math.min(n,t))}function AM(t,e,n){e===void 0&&(e=0);var r,i=-1/0;return function(){for(var o=this,s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];if(n){var u=Date.now(),c=u-i;i=u,c>=e&&t.apply(this,s)}clearTimeout(r),r=setTimeout(function(){t.apply(o,s)},e)}}function j0(t,e){return t===void 0&&(t=-1/0),e===void 0&&(e=1/0),function(n,r){var i="_"+r;Object.defineProperty(n,r,{get:function(){return this[i]},set:function(a){Object.defineProperty(this,i,{value:Nn(a,t,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function sd(t,e){var n="_"+e;Object.defineProperty(t,e,{get:function(){return this[n]},set:function(r){Object.defineProperty(this,n,{value:!!r,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}function RM(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n,r,i){var a=i.value;return{get:function(){return this.hasOwnProperty(r)||Object.defineProperty(this,r,{value:AM.apply(void 0,Sb([a],t))}),this[r]}}}}var eD=function(){function t(e){var n=this;e===void 0&&(e={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(e).forEach(function(r){n[r]=e[r]})}return Object.defineProperty(t.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(e){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=e},enumerable:!0,configurable:!0}),Hi([j0(0,1)],t.prototype,"damping",void 0),Hi([j0(0,1/0)],t.prototype,"thumbMinSize",void 0),Hi([sd],t.prototype,"renderByPixels",void 0),Hi([sd],t.prototype,"alwaysShowTracks",void 0),Hi([sd],t.prototype,"continuousScrolling",void 0),t}(),go;(function(t){t.X="x",t.Y="y"})(go||(go={}));var tD=function(){function t(e,n){n===void 0&&(n=0),this._direction=e,this._minSize=n,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+e}return t.prototype.attachTo=function(e){e.appendChild(this.element)},t.prototype.update=function(e,n,r){this.realSize=Math.min(n/r,1)*n,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=e/r*(n+(this.realSize-this.displaySize)),sa(this.element,this._getStyle())},t.prototype._getStyle=function(){switch(this._direction){case go.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case go.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},t}(),X0=function(){function t(e,n){n===void 0&&(n=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+e,this.thumb=new tD(e,n),this.thumb.attachTo(this.element)}return t.prototype.attachTo=function(e){e.appendChild(this.element)},t.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},t.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},t.prototype.update=function(e,n,r){sa(this.element,{display:r<=n?"none":"block"}),this.thumb.update(e,n,r)},t}(),nD=function(){function t(e){this._scrollbar=e;var n=e.options.thumbMinSize;this.xAxis=new X0(go.X,n),this.yAxis=new X0(go.Y,n),this.xAxis.attachTo(e.containerEl),this.yAxis.attachTo(e.containerEl),e.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return t.prototype.update=function(){var e=this._scrollbar,n=e.size,r=e.offset;this.xAxis.update(r.x,n.container.width,n.content.width),this.yAxis.update(r.y,n.container.height,n.content.height)},t.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},Hi([RM(300)],t.prototype,"autoHideOnIdle",null),t}();function rD(t){var e=t.containerEl,n=t.contentEl,r=getComputedStyle(e),i=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map(function(s){return r[s]?parseFloat(r[s]):0}),a=i[0]+i[1],o=i[2]+i[3];return{container:{width:e.clientWidth,height:e.clientHeight},content:{width:n.offsetWidth-n.clientWidth+n.scrollWidth+o,height:n.offsetHeight-n.clientHeight+n.scrollHeight+a}}}function iD(t,e){var n=t.bounding,r=e.getBoundingClientRect(),i=Math.max(n.top,r.top),a=Math.max(n.left,r.left),o=Math.min(n.right,r.right),s=Math.min(n.bottom,r.bottom);return i<s&&a<o}function aD(t){var e=t.getSize(),n={x:Math.max(e.content.width-e.container.width,0),y:Math.max(e.content.height-e.container.height,0)},r=t.containerEl.getBoundingClientRect(),i={top:Math.max(r.top,0),right:Math.min(r.right,window.innerWidth),bottom:Math.min(r.bottom,window.innerHeight),left:Math.max(r.left,0)};t.size=e,t.limit=n,t.bounding=i,t.track.update(),t.setPosition()}function oD(t,e,n){var r=t.options,i=t.offset,a=t.limit,o=t.track,s=t.contentEl;return r.renderByPixels&&(e=Math.round(e),n=Math.round(n)),e=Nn(e,0,a.x),n=Nn(n,0,a.y),e!==i.x&&o.xAxis.show(),n!==i.y&&o.yAxis.show(),r.alwaysShowTracks||o.autoHideOnIdle(),e===i.x&&n===i.y?null:(i.x=e,i.y=n,sa(s,{"-transform":"translate3d("+-e+"px, "+-n+"px, 0)"}),o.update(),{offset:mr({},i),limit:mr({},a)})}var Y0=new WeakMap;function sD(t,e,n,r,i){r===void 0&&(r=0);var a=i===void 0?{}:i,o=a.easing,s=o===void 0?lD:o,l=a.callback,u=t.options,c=t.offset,f=t.limit;u.renderByPixels&&(e=Math.round(e),n=Math.round(n));var h=c.x,p=c.y,_=Nn(e,0,f.x)-h,y=Nn(n,0,f.y)-p,m=Date.now();function d(){var v=Date.now()-m,g=r?s(Math.min(v/r,1)):1;if(t.setPosition(h+_*g,p+y*g),v>=r)typeof l=="function"&&l.call(t);else{var x=requestAnimationFrame(d);Y0.set(t,x)}}cancelAnimationFrame(Y0.get(t)),d()}function lD(t){return Math.pow(t-1,3)+1}function uD(t,e,n){var r=n===void 0?{}:n,i=r.alignToTop,a=i===void 0?!0:i,o=r.onlyScrollIfNeeded,s=o===void 0?!1:o,l=r.offsetTop,u=l===void 0?0:l,c=r.offsetLeft,f=c===void 0?0:c,h=r.offsetBottom,p=h===void 0?0:h,_=t.containerEl,y=t.bounding,m=t.offset,d=t.limit;if(!(!e||!_.contains(e))){var v=e.getBoundingClientRect();if(!(s&&t.isVisible(e))){var g=a?v.top-y.top-u:v.bottom-y.bottom+p;t.setMomentum(v.left-y.left-f,Nn(g,-m.y,d.y-m.y))}}}var cD=function(){function t(e,n){var r=this.constructor;this.scrollbar=e,this.name=r.pluginName,this.options=mr(mr({},r.defaultOptions),n)}return t.prototype.onInit=function(){},t.prototype.onDestroy=function(){},t.prototype.onUpdate=function(){},t.prototype.onRender=function(e){},t.prototype.transformDelta=function(e,n){return mr({},e)},t.pluginName="",t.defaultOptions={},t}(),xc={order:new Set,constructors:{}};function fD(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.forEach(function(n){var r=n.pluginName;if(!r)throw new TypeError("plugin name is required");xc.order.add(r),xc.constructors[r]=n})}function dD(t,e){return Array.from(xc.order).filter(function(n){return e[n]!==!1}).map(function(n){var r=xc.constructors[n],i=new r(t,e[n]);return e[n]=i.options,i})}var bn;(function(t){t[t.TAB=9]="TAB",t[t.SPACE=32]="SPACE",t[t.PAGE_UP=33]="PAGE_UP",t[t.PAGE_DOWN=34]="PAGE_DOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.LEFT=37]="LEFT",t[t.UP=38]="UP",t[t.RIGHT=39]="RIGHT",t[t.DOWN=40]="DOWN"})(bn||(bn={}));function hD(t){var e=Lo(t),n=t.containerEl;e(n,"keydown",function(r){var i=document.activeElement;if(!(i!==n&&!n.contains(i))&&!vD(i)){var a=pD(t,r.keyCode||r.which);if(a){var o=a[0],s=a[1];t.addTransformableMomentum(o,s,r,function(l){l?r.preventDefault():(t.containerEl.blur(),t.parent&&t.parent.containerEl.focus())})}}})}function pD(t,e){var n=t.size,r=t.limit,i=t.offset;switch(e){case bn.TAB:return mD(t);case bn.SPACE:return[0,200];case bn.PAGE_UP:return[0,-n.container.height+40];case bn.PAGE_DOWN:return[0,n.container.height-40];case bn.END:return[0,r.y-i.y];case bn.HOME:return[0,-i.y];case bn.LEFT:return[-40,0];case bn.UP:return[0,-40];case bn.RIGHT:return[40,0];case bn.DOWN:return[0,40];default:return null}}function mD(t){requestAnimationFrame(function(){t.scrollIntoView(document.activeElement,{offsetTop:t.size.container.height/2,offsetLeft:t.size.container.width/2,onlyScrollIfNeeded:!0})})}function vD(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"||t.isContentEditable?!t.disabled:!1}var sr;(function(t){t[t.X=0]="X",t[t.Y=1]="Y"})(sr||(sr={}));function gD(t){var e=Lo(t),n=t.containerEl,r=t.track,i=r.xAxis,a=r.yAxis;function o(p,_){var y=t.size,m=t.limit,d=t.offset;if(p===sr.X){var v=y.container.width+(i.thumb.realSize-i.thumb.displaySize);return Nn(_/v*y.content.width,0,m.x)-d.x}if(p===sr.Y){var g=y.container.height+(a.thumb.realSize-a.thumb.displaySize);return Nn(_/g*y.content.height,0,m.y)-d.y}return 0}function s(p){if($l(p,[i.element,i.thumb.element]))return sr.X;if($l(p,[a.element,a.thumb.element]))return sr.Y}var l,u,c,f,h;e(n,"click",function(p){if(!(u||!$l(p.target,[i.element,a.element]))){var _=p.target,y=s(_),m=_.getBoundingClientRect(),d=ao(p);if(y===sr.X){var v=d.x-m.left-i.thumb.displaySize/2;t.setMomentum(o(y,v),0)}if(y===sr.Y){var v=d.y-m.top-a.thumb.displaySize/2;t.setMomentum(0,o(y,v))}}}),e(n,"mousedown",function(p){if($l(p.target,[i.thumb.element,a.thumb.element])){l=!0;var _=p.target,y=ao(p),m=_.getBoundingClientRect();f=s(_),c={x:y.x-m.left,y:y.y-m.top},h=n.getBoundingClientRect(),sa(t.containerEl,{"-user-select":"none"})}}),e(window,"mousemove",function(p){if(l){u=!0;var _=ao(p);if(f===sr.X){var y=_.x-c.x-h.left;t.setMomentum(o(f,y),0)}if(f===sr.Y){var y=_.y-c.y-h.top;t.setMomentum(0,o(f,y))}}}),e(window,"mouseup blur",function(){l=u=!1,sa(t.containerEl,{"-user-select":""})})}function _D(t){var e=Lo(t);e(window,"resize",AM(t.update.bind(t),300))}function yD(t){var e=Lo(t),n=t.containerEl,r=t.contentEl,i=!1,a=!1,o;function s(l){var u=l.x,c=l.y;if(!(!u&&!c)){var f=t.offset,h=t.limit;t.setMomentum(Nn(f.x+u,0,h.x)-f.x,Nn(f.y+c,0,h.y)-f.y),o=requestAnimationFrame(function(){s({x:u,y:c})})}}e(window,"mousemove",function(l){if(i){cancelAnimationFrame(o);var u=xD(t,l);s(u)}}),e(r,"contextmenu",function(){a=!0,cancelAnimationFrame(o),i=!1}),e(r,"mousedown",function(){a=!1}),e(r,"selectstart",function(){a||(cancelAnimationFrame(o),i=!0)}),e(window,"mouseup blur",function(){cancelAnimationFrame(o),i=!1,a=!1}),e(n,"scroll",function(l){l.preventDefault(),n.scrollTop=n.scrollLeft=0})}function xD(t,e){var n=t.bounding,r=n.top,i=n.right,a=n.bottom,o=n.left,s=ao(e),l=s.x,u=s.y,c={x:0,y:0},f=20;return l===0&&u===0||(l>i-f?c.x=l-i+f:l<o+f&&(c.x=l-o-f),u>a-f?c.y=u-a+f:u<r+f&&(c.y=u-r-f),c.x*=2,c.y*=2),c}var jl;function SD(t){var e=t.options.delegateTo||t.containerEl,n=new J3,r=Lo(t),i,a=0;r(e,"touchstart",function(o){n.track(o),t.setMomentum(0,0),a===0&&(i=t.options.damping,t.options.damping=Math.max(i,.5)),a++}),r(e,"touchmove",function(o){if(!(jl&&jl!==t)){n.update(o);var s=n.getDelta(),l=s.x,u=s.y;t.addTransformableMomentum(l,u,o,function(c){c&&o.cancelable&&(o.preventDefault(),jl=t)})}}),r(e,"touchcancel touchend",function(o){var s=n.getEasingDistance(i);t.addTransformableMomentum(s.x,s.y,o),a--,a===0&&(t.options.damping=i),n.release(o),jl=null})}function ED(t){var e=Lo(t),n=t.options.delegateTo||t.containerEl,r="onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel";e(n,r,function(i){var a=wD(i),o=a.x,s=a.y;t.addTransformableMomentum(o,s,i,function(l){l&&i.preventDefault()})})}var qo={STANDARD:1,OTHERS:-3},q0=[1,28,500],MD=function(t){return q0[t]||q0[0]};function wD(t){if("deltaX"in t){var e=MD(t.deltaMode);return{x:t.deltaX/qo.STANDARD*e,y:t.deltaY/qo.STANDARD*e}}return"wheelDeltaX"in t?{x:t.wheelDeltaX/qo.OTHERS,y:t.wheelDeltaY/qo.OTHERS}:{x:0,y:t.wheelDelta/qo.OTHERS}}const K0=Object.freeze(Object.defineProperty({__proto__:null,keyboardHandler:hD,mouseHandler:gD,resizeHandler:_D,selectHandler:yD,touchHandler:SD,wheelHandler:ED},Symbol.toStringTag,{value:"Module"}));var lr=new Map,Z0=function(){function t(e,n){var r=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=e;var i=this.contentEl=document.createElement("div");this.options=new eD(n),e.setAttribute("data-scrollbar","true"),e.setAttribute("tabindex","-1"),sa(e,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(e.style.msTouchAction="none"),i.className="scroll-content",Array.from(e.childNodes).forEach(function(l){i.appendChild(l)}),e.appendChild(i),this.track=new nD(this),this.size=this.getSize(),this._plugins=dD(this,this.options.plugins);var a=e.scrollLeft,o=e.scrollTop;e.scrollLeft=e.scrollTop=0,this.setPosition(a,o,{withoutCallbacks:!0});var s=window.ResizeObserver;typeof s=="function"&&(this._observer=new s(function(){r.update()}),this._observer.observe(i)),lr.set(e,this),requestAnimationFrame(function(){r._init()})}return Object.defineProperty(t.prototype,"parent",{get:function(){for(var e=this.containerEl.parentElement;e;){var n=lr.get(e);if(n)return n;e=e.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(e){this.setPosition(this.scrollLeft,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(e){this.setPosition(e,this.scrollTop)},enumerable:!0,configurable:!0}),t.prototype.getSize=function(){return rD(this)},t.prototype.update=function(){aD(this),this._plugins.forEach(function(e){e.onUpdate()})},t.prototype.isVisible=function(e){return iD(this,e)},t.prototype.setPosition=function(e,n,r){var i=this;e===void 0&&(e=this.offset.x),n===void 0&&(n=this.offset.y),r===void 0&&(r={});var a=oD(this,e,n);!a||r.withoutCallbacks||this._listeners.forEach(function(o){o.call(i,a)})},t.prototype.scrollTo=function(e,n,r,i){e===void 0&&(e=this.offset.x),n===void 0&&(n=this.offset.y),r===void 0&&(r=0),i===void 0&&(i={}),sD(this,e,n,r,i)},t.prototype.scrollIntoView=function(e,n){n===void 0&&(n={}),uD(this,e,n)},t.prototype.addListener=function(e){if(typeof e!="function")throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(e)},t.prototype.removeListener=function(e){this._listeners.delete(e)},t.prototype.addTransformableMomentum=function(e,n,r,i){this._updateDebounced();var a=this._plugins.reduce(function(s,l){return l.transformDelta(s,r)||s},{x:e,y:n}),o=!this._shouldPropagateMomentum(a.x,a.y);o&&this.addMomentum(a.x,a.y),i&&i.call(this,o)},t.prototype.addMomentum=function(e,n){this.setMomentum(this._momentum.x+e,this._momentum.y+n)},t.prototype.setMomentum=function(e,n){this.limit.x===0&&(e=0),this.limit.y===0&&(n=0),this.options.renderByPixels&&(e=Math.round(e),n=Math.round(n)),this._momentum.x=e,this._momentum.y=n},t.prototype.updatePluginOptions=function(e,n){this._plugins.forEach(function(r){r.name===e&&Object.assign(r.options,n)})},t.prototype.destroy=function(){var e=this,n=e.containerEl,r=e.contentEl;Y3(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),lr.delete(this.containerEl);for(var i=Array.from(r.childNodes);n.firstChild;)n.removeChild(n.firstChild);i.forEach(function(a){n.appendChild(a)}),sa(n,{overflow:""}),n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,this._plugins.forEach(function(a){a.onDestroy()}),this._plugins.length=0},t.prototype._init=function(){var e=this;this.update(),Object.keys(K0).forEach(function(n){K0[n](e)}),this._plugins.forEach(function(n){n.onInit()}),this._render()},t.prototype._updateDebounced=function(){this.update()},t.prototype._shouldPropagateMomentum=function(e,n){e===void 0&&(e=0),n===void 0&&(n=0);var r=this,i=r.options,a=r.offset,o=r.limit;if(!i.continuousScrolling)return!1;o.x===0&&o.y===0&&this._updateDebounced();var s=Nn(e+a.x,0,o.x),l=Nn(n+a.y,0,o.y),u=!0;return u=u&&s===a.x,u=u&&l===a.y,u=u&&(a.x===o.x||a.x===0||a.y===o.y||a.y===0),u},t.prototype._render=function(){var e=this._momentum;if(e.x||e.y){var n=this._nextTick("x"),r=this._nextTick("y");e.x=n.momentum,e.y=r.momentum,this.setPosition(n.position,r.position)}var i=mr({},this._momentum);this._plugins.forEach(function(a){a.onRender(i)}),this._renderID=requestAnimationFrame(this._render.bind(this))},t.prototype._nextTick=function(e){var n=this,r=n.options,i=n.offset,a=n._momentum,o=i[e],s=a[e];if(Math.abs(s)<=.1)return{momentum:0,position:o+s};var l=s*(1-r.damping);return r.renderByPixels&&(l|=0),{momentum:l,position:o+s-l}},Hi([RM(100,!0)],t.prototype,"_updateDebounced",null),t}(),TD="rgba(222, 222, 222, .75)",bD="rgba(0, 0, 0, .5)",AD=`
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
  background: `+TD+`;
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
  background: `+bD+`;
  border-radius: 4px;
}
`,CM="smooth-scrollbar-style",Sc=!1;function Q0(){if(!(Sc||typeof window>"u")){var t=document.createElement("style");t.id=CM,t.textContent=AD,document.head&&document.head.appendChild(t),Sc=!0}}function RD(){if(!(!Sc||typeof window>"u")){var t=document.getElementById(CM);!t||!t.parentNode||(t.parentNode.removeChild(t),Sc=!1)}}var CD=function(t){xb(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.init=function(n,r){if(!n||n.nodeType!==1)throw new TypeError("expect element to be DOM Element, but got "+n);return Q0(),lr.has(n)?lr.get(n):new Z0(n,r)},e.initAll=function(n){return Array.from(document.querySelectorAll("[data-scrollbar]"),function(r){return e.init(r,n)})},e.has=function(n){return lr.has(n)},e.get=function(n){return lr.get(n)},e.getAll=function(){return Array.from(lr.values())},e.destroy=function(n){var r=lr.get(n);r&&r.destroy()},e.destroyAll=function(){lr.forEach(function(n){n.destroy()})},e.use=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return fD.apply(void 0,n)},e.attachStyle=function(){return Q0()},e.detachStyle=function(){return RD()},e.version="8.8.4",e.ScrollbarPlugin=cD,e}(Z0);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qm="153",PD=0,J0=1,LD=2,PM=1,ID=2,br=3,Ei=0,un=1,Pr=2,_i=0,oo=1,e_=2,t_=3,n_=4,DD=5,Na=100,OD=101,ND=102,r_=103,i_=104,UD=200,FD=201,kD=202,zD=203,LM=204,IM=205,BD=206,HD=207,GD=208,VD=209,WD=210,$D=0,jD=1,XD=2,Kh=3,YD=4,qD=5,KD=6,ZD=7,DM=0,QD=1,JD=2,Nr=0,eO=1,tO=2,nO=3,rO=4,iO=5,OM=300,_o=301,yo=302,Zh=303,Qh=304,Kc=306,Jh=1e3,qn=1001,ep=1002,Kt=1003,a_=1004,ld=1005,Cn=1006,aO=1007,Us=1008,yi=1009,oO=1010,sO=1011,Km=1012,NM=1013,si=1014,li=1015,Fs=1016,UM=1017,FM=1018,Ki=1020,lO=1021,Kn=1023,uO=1024,cO=1025,Zi=1026,xo=1027,fO=1028,kM=1029,dO=1030,zM=1031,BM=1033,ud=33776,cd=33777,fd=33778,dd=33779,o_=35840,s_=35841,l_=35842,u_=35843,hO=36196,c_=37492,f_=37496,d_=37808,h_=37809,p_=37810,m_=37811,v_=37812,g_=37813,__=37814,y_=37815,x_=37816,S_=37817,E_=37818,M_=37819,w_=37820,T_=37821,hd=36492,pO=36283,b_=36284,A_=36285,R_=36286,HM=3e3,Qi=3001,mO=3200,vO=3201,gO=0,_O=1,Ji="",De="srgb",gr="srgb-linear",GM="display-p3",pd=7680,yO=519,xO=512,SO=513,EO=514,MO=515,wO=516,TO=517,bO=518,AO=519,C_=35044,P_="300 es",tp=1035,Dr=2e3,Ec=2001;class Io{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let a=0,o=i.length;a<o;a++)i[a].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],md=Math.PI/180,np=180/Math.PI;function rl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[r&255]+Gt[r>>8&255]+Gt[r>>16&255]+Gt[r>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function RO(t,e){return(t%e+e)%e}function vd(t,e,n){return(1-n)*t+n*e}function L_(t){return(t&t-1)===0&&t!==0}function rp(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Xl(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),a=this.x-e.x,o=this.y-e.y;return this.x=a*r-o*i+e.x,this.y=a*i+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,n,r,i,a,o,s,l,u){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,a,o,s,l,u)}set(e,n,r,i,a,o,s,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=s,c[3]=n,c[4]=a,c[5]=l,c[6]=r,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,a=this.elements,o=r[0],s=r[3],l=r[6],u=r[1],c=r[4],f=r[7],h=r[2],p=r[5],_=r[8],y=i[0],m=i[3],d=i[6],v=i[1],g=i[4],x=i[7],M=i[2],A=i[5],R=i[8];return a[0]=o*y+s*v+l*M,a[3]=o*m+s*g+l*A,a[6]=o*d+s*x+l*R,a[1]=u*y+c*v+f*M,a[4]=u*m+c*g+f*A,a[7]=u*d+c*x+f*R,a[2]=h*y+p*v+_*M,a[5]=h*m+p*g+_*A,a[8]=h*d+p*x+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*s*u-r*a*c+r*s*l+i*a*u-i*o*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8],f=c*o-s*u,h=s*l-c*a,p=u*a-o*l,_=n*f+r*h+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(i*u-c*r)*y,e[2]=(s*r-i*o)*y,e[3]=h*y,e[4]=(c*n-i*l)*y,e[5]=(i*a-s*n)*y,e[6]=p*y,e[7]=(r*l-u*n)*y,e[8]=(o*n-r*a)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,a,o,s){const l=Math.cos(a),u=Math.sin(a);return this.set(r*l,r*u,-r*(l*o+u*s)+o+e,-i*u,i*l,-i*(-u*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(gd.makeScale(e,n)),this}rotate(e){return this.premultiply(gd.makeRotation(-e)),this}translate(e,n){return this.premultiply(gd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gd=new Ne;function VM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ks(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const I_={};function ms(t){t in I_||(I_[t]=!0,console.warn(t))}function so(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _d(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const CO=new Ne().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),PO=new Ne().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function LO(t){return t.convertSRGBToLinear().applyMatrix3(PO)}function IO(t){return t.applyMatrix3(CO).convertLinearToSRGB()}const DO={[gr]:t=>t,[De]:t=>t.convertSRGBToLinear(),[GM]:LO},OO={[gr]:t=>t,[De]:t=>t.convertLinearToSRGB(),[GM]:IO},Bn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return gr},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=DO[e],i=OO[n];if(r===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return i(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let _a;class WM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_a===void 0&&(_a=ks("canvas")),_a.width=e.width,_a.height=e.height;const r=_a.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=_a}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ks("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let o=0;o<a.length;o++)a[o]=so(a[o]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(so(n[r]/255)*255):n[r]=so(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NO=0;class $M{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NO++}),this.uuid=rl(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?a.push(yd(i[o].image)):a.push(yd(i[o]))}else a=yd(i);r.url=a}return n||(e.images[this.uuid]=r),r}}function yd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?WM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UO=0;class cn extends Io{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,r=qn,i=qn,a=Cn,o=Us,s=Kn,l=yi,u=cn.DEFAULT_ANISOTROPY,c=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UO++}),this.uuid=rl(),this.name="",this.source=new $M(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Qi?De:Ji),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==OM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jh:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case ep:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jh:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case ep:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?Qi:HM}set encoding(e){ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qi?De:Ji}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=OM;cn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,r=0,i=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,a=this.w,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i+o[12]*a,this.y=o[1]*n+o[5]*r+o[9]*i+o[13]*a,this.z=o[2]*n+o[6]*r+o[10]*i+o[14]*a,this.w=o[3]*n+o[7]*r+o[11]*i+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,a;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,x=(p+1)/2,M=(d+1)/2,A=(c+h)/4,R=(f+y)/4,P=(_+m)/4;return g>x&&g>M?g<.01?(r=0,i=.707106781,a=.707106781):(r=Math.sqrt(g),i=A/r,a=R/r):x>M?x<.01?(r=.707106781,i=0,a=.707106781):(i=Math.sqrt(x),r=A/i,a=P/i):M<.01?(r=.707106781,i=.707106781,a=0):(a=Math.sqrt(M),r=R/a,i=P/a),this.set(r,i,a,n),this}let v=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-y)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class la extends Io{constructor(e=1,n=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const i={width:e,height:n,depth:1};r.encoding!==void 0&&(ms("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Qi?De:Ji),this.texture=new cn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Cn,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $M(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jM extends cn{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class FO extends cn{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,a,o,s){let l=r[i+0],u=r[i+1],c=r[i+2],f=r[i+3];const h=a[o+0],p=a[o+1],_=a[o+2],y=a[o+3];if(s===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(s===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||u!==p||c!==_){let m=1-s;const d=l*h+u*p+c*_+f*y,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const M=Math.sqrt(g),A=Math.atan2(M,d*v);m=Math.sin(m*A)/M,s=Math.sin(s*A)/M}const x=s*v;if(l=l*m+h*x,u=u*m+p*x,c=c*m+_*x,f=f*m+y*x,m===1-s){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,r,i,a,o){const s=r[i],l=r[i+1],u=r[i+2],c=r[i+3],f=a[o],h=a[o+1],p=a[o+2],_=a[o+3];return e[n]=s*_+c*f+l*p-u*h,e[n+1]=l*_+c*h+u*f-s*p,e[n+2]=u*_+c*p+s*h-l*f,e[n+3]=c*_-s*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const r=e._x,i=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,u=s(r/2),c=s(i/2),f=s(a/2),h=l(r/2),p=l(i/2),_=l(a/2);switch(o){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],a=n[8],o=n[1],s=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=r+s+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(a-u)*p,this._z=(o-i)*p}else if(r>s&&r>f){const p=2*Math.sqrt(1+r-s-f);this._w=(c-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(a+u)/p}else if(s>f){const p=2*Math.sqrt(1+s-r-f);this._w=(a-u)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-r-s);this._w=(o-i)/p,this._x=(a+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,a=e._z,o=e._w,s=n._x,l=n._y,u=n._z,c=n._w;return this._x=r*c+o*s+i*u-a*l,this._y=i*c+o*l+a*s-r*u,this._z=a*c+o*u+r*l-i*s,this._w=o*c-r*s-i*l-a*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,a=this._z,o=this._w;let s=o*e._w+r*e._x+i*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=i,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*r+n*this._x,this._y=p*i+n*this._y,this._z=p*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,s),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*f+this._w*h,this._x=r*f+this._x*h,this._y=i*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(i),r*Math.sin(a),r*Math.cos(a),n*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,r=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(D_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(D_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6]*i,this.y=a[1]*n+a[4]*r+a[7]*i,this.z=a[2]*n+a[5]*r+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,a=e.elements,o=1/(a[3]*n+a[7]*r+a[11]*i+a[15]);return this.x=(a[0]*n+a[4]*r+a[8]*i+a[12])*o,this.y=(a[1]*n+a[5]*r+a[9]*i+a[13])*o,this.z=(a[2]*n+a[6]*r+a[10]*i+a[14])*o,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,a=e.x,o=e.y,s=e.z,l=e.w,u=l*n+o*i-s*r,c=l*r+s*n-a*i,f=l*i+a*r-o*n,h=-a*n-o*r-s*i;return this.x=u*l+h*-a+c*-s-f*-o,this.y=c*l+h*-o+f*-a-u*-s,this.z=f*l+h*-s+u*-o-c*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*i,this.y=a[1]*n+a[5]*r+a[9]*i,this.z=a[2]*n+a[6]*r+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,a=e.z,o=n.x,s=n.y,l=n.z;return this.x=i*l-a*s,this.y=a*o-r*l,this.z=r*s-i*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xd=new z,D_=new il;class al{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Sr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Sr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Sr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox),ya.applyMatrix4(e.matrixWorld),this.union(ya);else{const i=e.geometry;if(i!==void 0)if(n&&i.attributes!==void 0&&i.attributes.position!==void 0){const a=i.attributes.position;for(let o=0,s=a.count;o<s;o++)Sr.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Sr)}else i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const r=e.children;for(let i=0,a=r.length;i<a;i++)this.expandByObject(r[i],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sr),Sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Yl.subVectors(this.max,Ko),xa.subVectors(e.a,Ko),Sa.subVectors(e.b,Ko),Ea.subVectors(e.c,Ko),qr.subVectors(Sa,xa),Kr.subVectors(Ea,Sa),Di.subVectors(xa,Ea);let n=[0,-qr.z,qr.y,0,-Kr.z,Kr.y,0,-Di.z,Di.y,qr.z,0,-qr.x,Kr.z,0,-Kr.x,Di.z,0,-Di.x,-qr.y,qr.x,0,-Kr.y,Kr.x,0,-Di.y,Di.x,0];return!Sd(n,xa,Sa,Ea,Yl)||(n=[1,0,0,0,1,0,0,0,1],!Sd(n,xa,Sa,Ea,Yl))?!1:(ql.crossVectors(qr,Kr),n=[ql.x,ql.y,ql.z],Sd(n,xa,Sa,Ea,Yl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xr=[new z,new z,new z,new z,new z,new z,new z,new z],Sr=new z,ya=new al,xa=new z,Sa=new z,Ea=new z,qr=new z,Kr=new z,Di=new z,Ko=new z,Yl=new z,ql=new z,Oi=new z;function Sd(t,e,n,r,i){for(let a=0,o=t.length-3;a<=o;a+=3){Oi.fromArray(t,a);const s=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=e.dot(Oi),u=n.dot(Oi),c=r.dot(Oi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}const kO=new al,Zo=new z,Ed=new z;class Zm{constructor(e=new z,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):kO.setFromPoints(e).getCenter(r);let i=0;for(let a=0,o=e.length;a<o;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const n=Zo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(Zo,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(Ed)),this.expandByPoint(Zo.copy(e.center).sub(Ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Er=new z,Md=new z,Kl=new z,Zr=new z,wd=new z,Zl=new z,Td=new z;class XM{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Er.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,n),Er.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){Md.copy(e).add(n).multiplyScalar(.5),Kl.copy(n).sub(e).normalize(),Zr.copy(this.origin).sub(Md);const a=e.distanceTo(n)*.5,o=-this.direction.dot(Kl),s=Zr.dot(this.direction),l=-Zr.dot(Kl),u=Zr.lengthSq(),c=Math.abs(1-o*o);let f,h,p,_;if(c>0)if(f=o*l-s,h=o*s-l,_=a*c,f>=0)if(h>=-_)if(h<=_){const y=1/c;f*=y,h*=y,p=f*(f+o*h+2*s)+h*(o*f+h+2*l)+u}else h=a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+u;else h=-a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*a+s)),h=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+u):(f=Math.max(0,-(o*a+s)),h=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+u);else h=o>0?-a:a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+u;return r&&r.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Md).addScaledVector(Kl,h),p}intersectSphere(e,n){Er.subVectors(e.center,this.origin);const r=Er.dot(this.direction),i=Er.dot(Er)-r*r,a=e.radius*e.radius;if(i>a)return null;const o=Math.sqrt(a-i),s=r-o,l=r+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,a,o,s,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(r=(e.min.x-h.x)*u,i=(e.max.x-h.x)*u):(r=(e.max.x-h.x)*u,i=(e.min.x-h.x)*u),c>=0?(a=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(a=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),r>o||a>i||((a>r||isNaN(r))&&(r=a),(o<i||isNaN(i))&&(i=o),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),r>l||s>i)||((s>r||r!==r)&&(r=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,n,r,i,a){wd.subVectors(n,e),Zl.subVectors(r,e),Td.crossVectors(wd,Zl);let o=this.direction.dot(Td),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Zr.subVectors(this.origin,e);const l=s*this.direction.dot(Zl.crossVectors(Zr,Zl));if(l<0)return null;const u=s*this.direction.dot(wd.cross(Zr));if(u<0||l+u>o)return null;const c=-s*Zr.dot(Td);return c<0?null:this.at(c/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,n,r,i,a,o,s,l,u,c,f,h,p,_,y,m){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,a,o,s,l,u,c,f,h,p,_,y,m)}set(e,n,r,i,a,o,s,l,u,c,f,h,p,_,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=r,d[12]=i,d[1]=a,d[5]=o,d[9]=s,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/Ma.setFromMatrixColumn(e,0).length(),a=1/Ma.setFromMatrixColumn(e,1).length(),o=1/Ma.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*a,n[5]=r[5]*a,n[6]=r[6]*a,n[7]=0,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,a=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(i),u=Math.sin(i),c=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=o*c,p=o*f,_=s*c,y=s*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+_*u,n[5]=h-y*u,n[9]=-s*l,n[2]=y-h*u,n[6]=_+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,_=u*c,y=u*f;n[0]=h+y*s,n[4]=_*s-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-s,n[2]=p*s-_,n[6]=y+h*s,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,_=u*c,y=u*f;n[0]=h-y*s,n[4]=-o*f,n[8]=_+p*s,n[1]=p+_*s,n[5]=o*c,n[9]=y-h*s,n[2]=-o*u,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,_=s*c,y=s*f;n[0]=l*c,n[4]=_*u-p,n[8]=h*u+y,n[1]=l*f,n[5]=y*u+h,n[9]=p*u-_,n[2]=-u,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=s*l,y=s*u;n[0]=l*c,n[4]=y-h*f,n[8]=_*f+p,n[1]=f,n[5]=o*c,n[9]=-s*c,n[2]=-u*c,n[6]=p*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,p=o*u,_=s*l,y=s*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+y,n[5]=o*c,n[9]=p*f-_,n[2]=_*f-p,n[6]=s*c,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zO,e,BO)}lookAt(e,n,r){const i=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Qr.crossVectors(r,hn),Qr.lengthSq()===0&&(Math.abs(r.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Qr.crossVectors(r,hn)),Qr.normalize(),Ql.crossVectors(hn,Qr),i[0]=Qr.x,i[4]=Ql.x,i[8]=hn.x,i[1]=Qr.y,i[5]=Ql.y,i[9]=hn.y,i[2]=Qr.z,i[6]=Ql.z,i[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,a=this.elements,o=r[0],s=r[4],l=r[8],u=r[12],c=r[1],f=r[5],h=r[9],p=r[13],_=r[2],y=r[6],m=r[10],d=r[14],v=r[3],g=r[7],x=r[11],M=r[15],A=i[0],R=i[4],P=i[8],S=i[12],T=i[1],X=i[5],q=i[9],O=i[13],F=i[2],G=i[6],K=i[10],V=i[14],L=i[3],B=i[7],k=i[11],ie=i[15];return a[0]=o*A+s*T+l*F+u*L,a[4]=o*R+s*X+l*G+u*B,a[8]=o*P+s*q+l*K+u*k,a[12]=o*S+s*O+l*V+u*ie,a[1]=c*A+f*T+h*F+p*L,a[5]=c*R+f*X+h*G+p*B,a[9]=c*P+f*q+h*K+p*k,a[13]=c*S+f*O+h*V+p*ie,a[2]=_*A+y*T+m*F+d*L,a[6]=_*R+y*X+m*G+d*B,a[10]=_*P+y*q+m*K+d*k,a[14]=_*S+y*O+m*V+d*ie,a[3]=v*A+g*T+x*F+M*L,a[7]=v*R+g*X+x*G+M*B,a[11]=v*P+g*q+x*K+M*k,a[15]=v*S+g*O+x*V+M*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],a=e[12],o=e[1],s=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],_=e[3],y=e[7],m=e[11],d=e[15];return _*(+a*l*f-i*u*f-a*s*h+r*u*h+i*s*p-r*l*p)+y*(+n*l*p-n*u*h+a*o*h-i*o*p+i*u*c-a*l*c)+m*(+n*u*f-n*s*p-a*o*f+r*o*p+a*s*c-r*u*c)+d*(-i*s*c-n*l*f+n*s*h+i*o*f-r*o*h+r*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],_=e[12],y=e[13],m=e[14],d=e[15],v=f*m*u-y*h*u+y*l*p-s*m*p-f*l*d+s*h*d,g=_*h*u-c*m*u-_*l*p+o*m*p+c*l*d-o*h*d,x=c*y*u-_*f*u+_*s*p-o*y*p-c*s*d+o*f*d,M=_*f*l-c*y*l-_*s*h+o*y*h+c*s*m-o*f*m,A=n*v+r*g+i*x+a*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(y*h*a-f*m*a-y*i*p+r*m*p+f*i*d-r*h*d)*R,e[2]=(s*m*a-y*l*a+y*i*u-r*m*u-s*i*d+r*l*d)*R,e[3]=(f*l*a-s*h*a-f*i*u+r*h*u+s*i*p-r*l*p)*R,e[4]=g*R,e[5]=(c*m*a-_*h*a+_*i*p-n*m*p-c*i*d+n*h*d)*R,e[6]=(_*l*a-o*m*a-_*i*u+n*m*u+o*i*d-n*l*d)*R,e[7]=(o*h*a-c*l*a+c*i*u-n*h*u-o*i*p+n*l*p)*R,e[8]=x*R,e[9]=(_*f*a-c*y*a-_*r*p+n*y*p+c*r*d-n*f*d)*R,e[10]=(o*y*a-_*s*a+_*r*u-n*y*u-o*r*d+n*s*d)*R,e[11]=(c*s*a-o*f*a-c*r*u+n*f*u+o*r*p-n*s*p)*R,e[12]=M*R,e[13]=(c*y*i-_*f*i+_*r*h-n*y*h-c*r*m+n*f*m)*R,e[14]=(_*s*i-o*y*i-_*r*l+n*y*l+o*r*m-n*s*m)*R,e[15]=(o*f*i-c*s*i+c*r*l-n*f*l-o*r*h+n*s*h)*R,this}scale(e){const n=this.elements,r=e.x,i=e.y,a=e.z;return n[0]*=r,n[4]*=i,n[8]*=a,n[1]*=r,n[5]*=i,n[9]*=a,n[2]*=r,n[6]*=i,n[10]*=a,n[3]*=r,n[7]*=i,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),a=1-r,o=e.x,s=e.y,l=e.z,u=a*o,c=a*s;return this.set(u*o+r,u*s-i*l,u*l+i*s,0,u*s+i*l,c*s+r,c*l-i*o,0,u*l-i*s,c*l+i*o,a*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,a,o){return this.set(1,r,a,0,e,1,o,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,u=a+a,c=o+o,f=s+s,h=a*u,p=a*c,_=a*f,y=o*c,m=o*f,d=s*f,v=l*u,g=l*c,x=l*f,M=r.x,A=r.y,R=r.z;return i[0]=(1-(y+d))*M,i[1]=(p+x)*M,i[2]=(_-g)*M,i[3]=0,i[4]=(p-x)*A,i[5]=(1-(h+d))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(_+g)*R,i[9]=(m-v)*R,i[10]=(1-(h+y))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let a=Ma.set(i[0],i[1],i[2]).length();const o=Ma.set(i[4],i[5],i[6]).length(),s=Ma.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Hn.copy(this);const u=1/a,c=1/o,f=1/s;return Hn.elements[0]*=u,Hn.elements[1]*=u,Hn.elements[2]*=u,Hn.elements[4]*=c,Hn.elements[5]*=c,Hn.elements[6]*=c,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,n.setFromRotationMatrix(Hn),r.x=a,r.y=o,r.z=s,this}makePerspective(e,n,r,i,a,o,s=Dr){const l=this.elements,u=2*a/(n-e),c=2*a/(r-i),f=(n+e)/(n-e),h=(r+i)/(r-i);let p,_;if(s===Dr)p=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===Ec)p=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,i,a,o,s=Dr){const l=this.elements,u=1/(n-e),c=1/(r-i),f=1/(o-a),h=(n+e)*u,p=(r+i)*c;let _,y;if(s===Dr)_=(o+a)*f,y=-2*f;else if(s===Ec)_=a*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ma=new z,Hn=new Ut,zO=new z(0,0,0),BO=new z(1,1,1),Qr=new z,Ql=new z,hn=new z,O_=new Ut,N_=new il;class Zc{constructor(e=0,n=0,r=0,i=Zc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,a=i[0],o=i[4],s=i[8],l=i[1],u=i[5],c=i[9],f=i[2],h=i[6],p=i[10];switch(n){case"XYZ":this._y=Math.asin(nn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return O_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(O_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return N_.setFromEuler(this),this.setFromQuaternion(N_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zc.DEFAULT_ORDER="XYZ";let Qm=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},HO=0;const U_=new z,wa=new il,Mr=new Ut,Jl=new z,Qo=new z,GO=new z,VO=new il,F_=new z(1,0,0),k_=new z(0,1,0),z_=new z(0,0,1),WO={type:"added"},B_={type:"removed"};class _n extends Io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HO++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new z,n=new Zc,r=new il,i=new z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ne}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Qm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return wa.setFromAxisAngle(e,n),this.quaternion.multiply(wa),this}rotateOnWorldAxis(e,n){return wa.setFromAxisAngle(e,n),this.quaternion.premultiply(wa),this}rotateX(e){return this.rotateOnAxis(F_,e)}rotateY(e){return this.rotateOnAxis(k_,e)}rotateZ(e){return this.rotateOnAxis(z_,e)}translateOnAxis(e,n){return U_.copy(e).applyQuaternion(this.quaternion),this.position.add(U_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(F_,e)}translateY(e){return this.translateOnAxis(k_,e)}translateZ(e){return this.translateOnAxis(z_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Jl.copy(e):Jl.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(Qo,Jl,this.up):Mr.lookAt(Jl,Qo,this.up),this.quaternion.setFromRotationMatrix(Mr),i&&(Mr.extractRotation(i.matrixWorld),wa.setFromRotationMatrix(Mr),this.quaternion.premultiply(wa.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(WO)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(B_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(B_)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const o=this.children[r].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let r=[];this[e]===n&&r.push(this);for(let i=0,a=this.children.length;i<a;i++){const o=this.children[i].getObjectsByProperty(e,n);o.length>0&&(r=r.concat(o))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,GO),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,VO,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++){const a=n[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const i=this.children;for(let a=0,o=i.length;a<o;a++){const s=i[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(a(e.materials,this.material[l]));i.material=s}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(a(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),c.length>0&&(r.images=c),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),p.length>0&&(r.animations=p),_.length>0&&(r.nodes=_)}return r.object=i,r;function o(s){const l=[];for(const u in s){const c=s[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}_n.DEFAULT_UP=new z(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new z,wr=new z,bd=new z,Tr=new z,Ta=new z,ba=new z,H_=new z,Ad=new z,Rd=new z,Cd=new z;let eu=!1;class Yn{constructor(e=new z,n=new z,r=new z){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),Gn.subVectors(e,n),i.cross(Gn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,n,r,i,a){Gn.subVectors(i,n),wr.subVectors(r,n),bd.subVectors(e,n);const o=Gn.dot(Gn),s=Gn.dot(wr),l=Gn.dot(bd),u=wr.dot(wr),c=wr.dot(bd),f=o*u-s*s;if(f===0)return a.set(-2,-1,-1);const h=1/f,p=(u*l-s*c)*h,_=(o*c-s*l)*h;return a.set(1-p-_,_,p)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,Tr),Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getUV(e,n,r,i,a,o,s,l){return eu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eu=!0),this.getInterpolation(e,n,r,i,a,o,s,l)}static getInterpolation(e,n,r,i,a,o,s,l){return this.getBarycoord(e,n,r,i,Tr),l.setScalar(0),l.addScaledVector(a,Tr.x),l.addScaledVector(o,Tr.y),l.addScaledVector(s,Tr.z),l}static isFrontFacing(e,n,r,i){return Gn.subVectors(r,n),wr.subVectors(e,n),Gn.cross(wr).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),Gn.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,i,a){return eu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eu=!0),Yn.getInterpolation(e,this.a,this.b,this.c,n,r,i,a)}getInterpolation(e,n,r,i,a){return Yn.getInterpolation(e,this.a,this.b,this.c,n,r,i,a)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,a=this.c;let o,s;Ta.subVectors(i,r),ba.subVectors(a,r),Ad.subVectors(e,r);const l=Ta.dot(Ad),u=ba.dot(Ad);if(l<=0&&u<=0)return n.copy(r);Rd.subVectors(e,i);const c=Ta.dot(Rd),f=ba.dot(Rd);if(c>=0&&f<=c)return n.copy(i);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(r).addScaledVector(Ta,o);Cd.subVectors(e,a);const p=Ta.dot(Cd),_=ba.dot(Cd);if(_>=0&&p<=_)return n.copy(a);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return s=u/(u-_),n.copy(r).addScaledVector(ba,s);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return H_.subVectors(a,i),s=(f-c)/(f-c+(p-_)),n.copy(i).addScaledVector(H_,s);const d=1/(m+y+h);return o=y*d,s=h*d,n.copy(r).addScaledVector(Ta,o).addScaledVector(ba,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let $O=0;class Qc extends Io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$O++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=oo,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=LM,this.blendDst=IM,this.blendEquation=Na,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Kh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yO,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pd,this.stencilZFail=pd,this.stencilZPass=pd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(r.blending=this.blending),this.side!==Ei&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(n){const a=i(e.textures),o=i(e.images);a.length>0&&(r.textures=a),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=n[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const YM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},tu={h:0,s:0,l:0};function Pd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=De){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bn.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=Bn.workingColorSpace){return this.r=e,this.g=n,this.b=r,Bn.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=Bn.workingColorSpace){if(e=RO(e,1),n=nn(n,0,1),r=nn(r,0,1),n===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+n):r+n-r*n,o=2*r-a;this.r=Pd(o,a,e+1/3),this.g=Pd(o,a,e),this.b=Pd(o,a,e-1/3)}return Bn.toWorkingColorSpace(this,i),this}setStyle(e,n=De){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=De){const r=YM[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}copyLinearToSRGB(e){return this.r=_d(e.r),this.g=_d(e.g),this.b=_d(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=De){return Bn.fromWorkingColorSpace(Vt.copy(this),e),Math.round(nn(Vt.r*255,0,255))*65536+Math.round(nn(Vt.g*255,0,255))*256+Math.round(nn(Vt.b*255,0,255))}getHexString(e=De){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Bn.workingColorSpace){Bn.fromWorkingColorSpace(Vt.copy(this),n);const r=Vt.r,i=Vt.g,a=Vt.b,o=Math.max(r,i,a),s=Math.min(r,i,a);let l,u;const c=(s+o)/2;if(s===o)l=0,u=0;else{const f=o-s;switch(u=c<=.5?f/(o+s):f/(2-o-s),o){case r:l=(i-a)/f+(i<a?6:0);break;case i:l=(a-r)/f+2;break;case a:l=(r-i)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Bn.workingColorSpace){return Bn.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=De){Bn.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,r=Vt.g,i=Vt.b;return e!==De?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(Vn),Vn.h+=e,Vn.s+=n,Vn.l+=r,this.setHSL(Vn.h,Vn.s,Vn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Vn),e.getHSL(tu);const r=vd(Vn.h,tu.h,n),i=vd(Vn.s,tu.s,n),a=vd(Vn.l,tu.l,n);return this.setHSL(r,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,a=e.elements;return this.r=a[0]*n+a[3]*r+a[6]*i,this.g=a[1]*n+a[4]*r+a[7]*i,this.b=a[2]*n+a[5]*r+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new nt;nt.NAMES=YM;class ni extends Qc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=DM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new z,nu=new Ye;class vr{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=C_,this.updateRange={offset:0,count:-1},this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)nu.fromBufferAttribute(this,n),nu.applyMatrix3(e),this.setXY(n,nu.x,nu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix3(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix4(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)gt.fromBufferAttribute(this,n),gt.applyNormalMatrix(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)gt.fromBufferAttribute(this,n),gt.transformDirection(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Xl(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Xl(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Xl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Xl(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),r=dn(r,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,a){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),r=dn(r,this.array),i=dn(i,this.array),a=dn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==C_&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class qM extends vr{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class KM extends vr{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ea extends vr{constructor(e,n,r){super(new Float32Array(e),n,r)}}let jO=0;const Tn=new Ut,Ld=new _n,Aa=new z,pn=new al,Jo=new al,At=new z;class pa extends Io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jO++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(VM(e)?KM:qM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Ne().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,r){return Tn.makeTranslation(e,n,r),this.applyMatrix4(Tn),this}scale(e,n,r){return Tn.makeScale(e,n,r),this.applyMatrix4(Tn),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Aa).negate(),this.translate(Aa.x,Aa.y,Aa.z),this}setFromPoints(e){const n=[];for(let r=0,i=e.length;r<i;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ea(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const a=n[r];pn.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const r=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const s=n[a];Jo.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(pn.min,Jo.min),pn.expandByPoint(At),At.addVectors(pn.max,Jo.max),pn.expandByPoint(At)):(pn.expandByPoint(Jo.min),pn.expandByPoint(Jo.max))}pn.getCenter(r);let i=0;for(let a=0,o=e.count;a<o;a++)At.fromBufferAttribute(e,a),i=Math.max(i,r.distanceToSquared(At));if(n)for(let a=0,o=n.length;a<o;a++){const s=n[a],l=this.morphTargetsRelative;for(let u=0,c=s.count;u<c;u++)At.fromBufferAttribute(s,u),l&&(Aa.fromBufferAttribute(e,u),At.add(Aa)),i=Math.max(i,r.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,i=n.position.array,a=n.normal.array,o=n.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vr(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let T=0;T<s;T++)u[T]=new z,c[T]=new z;const f=new z,h=new z,p=new z,_=new Ye,y=new Ye,m=new Ye,d=new z,v=new z;function g(T,X,q){f.fromArray(i,T*3),h.fromArray(i,X*3),p.fromArray(i,q*3),_.fromArray(o,T*2),y.fromArray(o,X*2),m.fromArray(o,q*2),h.sub(f),p.sub(f),y.sub(_),m.sub(_);const O=1/(y.x*m.y-m.x*y.y);isFinite(O)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(O),v.copy(p).multiplyScalar(y.x).addScaledVector(h,-m.x).multiplyScalar(O),u[T].add(d),u[X].add(d),u[q].add(d),c[T].add(v),c[X].add(v),c[q].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:r.length}]);for(let T=0,X=x.length;T<X;++T){const q=x[T],O=q.start,F=q.count;for(let G=O,K=O+F;G<K;G+=3)g(r[G+0],r[G+1],r[G+2])}const M=new z,A=new z,R=new z,P=new z;function S(T){R.fromArray(a,T*3),P.copy(R);const X=u[T];M.copy(X),M.sub(R.multiplyScalar(R.dot(X))).normalize(),A.crossVectors(P,X);const O=A.dot(c[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=O}for(let T=0,X=x.length;T<X;++T){const q=x[T],O=q.start,F=q.count;for(let G=O,K=O+F;G<K;G+=3)S(r[G+0]),S(r[G+1]),S(r[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let h=0,p=r.count;h<p;h++)r.setXYZ(h,0,0,0);const i=new z,a=new z,o=new z,s=new z,l=new z,u=new z,c=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(n,_),a.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,a),f.subVectors(i,a),c.cross(f),s.fromBufferAttribute(r,_),l.fromBufferAttribute(r,y),u.fromBufferAttribute(r,m),s.add(c),l.add(c),u.add(c),r.setXYZ(_,s.x,s.y,s.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)i.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,a),f.subVectors(i,a),c.cross(f),r.setXYZ(h+0,c.x,c.y,c.z),r.setXYZ(h+1,c.x,c.y,c.z),r.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(s,l){const u=s.array,c=s.itemSize,f=s.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){s.isInterleavedBufferAttribute?p=l[y]*s.data.stride+s.offset:p=l[y]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new vr(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pa,r=this.index.array,i=this.attributes;for(const s in i){const l=i[s],u=e(l,r);n.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const l=[],u=a[s];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,r);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const u=o[s];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const u=r[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(i[l]=c,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(n))}const a=e.morphAttributes;for(const u in a){const c=[],f=a[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const G_=new Ut,Ni=new XM,ru=new Zm,V_=new z,Ra=new z,Ca=new z,Pa=new z,Id=new z,iu=new z,au=new Ye,ou=new Ye,su=new Ye,W_=new z,$_=new z,j_=new z,lu=new z,uu=new z;class rn extends _n{constructor(e=new pa,n=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=i.length;a<o;a++){const s=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,o=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(a&&s){iu.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const c=s[l],f=a[l];c!==0&&(Id.fromBufferAttribute(f,e),o?iu.addScaledVector(Id,c):iu.addScaledVector(Id.sub(n),c))}n.add(iu)}return n}raycast(e,n){const r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(a),Ni.copy(e.ray).recast(e.near),!(ru.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(ru,V_)===null||Ni.origin.distanceToSquared(V_)>(e.far-e.near)**2))&&(G_.copy(a).invert(),Ni.copy(e.ray).applyMatrix4(G_),!(r.boundingBox!==null&&Ni.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ni)))}_computeIntersections(e,n,r){let i;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,u=a.attributes.uv,c=a.attributes.uv1,f=a.attributes.normal,h=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const m=h[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,M=g;x<M;x+=3){const A=s.getX(x),R=s.getX(x+1),P=s.getX(x+2);i=cu(this,d,e,r,u,c,f,A,R,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const _=Math.max(0,p.start),y=Math.min(s.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){const v=s.getX(m),g=s.getX(m+1),x=s.getX(m+2);i=cu(this,o,e,r,u,c,f,v,g,x),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const m=h[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,M=g;x<M;x+=3){const A=x,R=x+1,P=x+2;i=cu(this,d,e,r,u,c,f,A,R,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){const v=m,g=m+1,x=m+2;i=cu(this,o,e,r,u,c,f,v,g,x),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}}}function XO(t,e,n,r,i,a,o,s){let l;if(e.side===un?l=r.intersectTriangle(o,a,i,!0,s):l=r.intersectTriangle(i,a,o,e.side===Ei,s),l===null)return null;uu.copy(s),uu.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(uu);return u<n.near||u>n.far?null:{distance:u,point:uu.clone(),object:t}}function cu(t,e,n,r,i,a,o,s,l,u){t.getVertexPosition(s,Ra),t.getVertexPosition(l,Ca),t.getVertexPosition(u,Pa);const c=XO(t,e,n,r,Ra,Ca,Pa,lu);if(c){i&&(au.fromBufferAttribute(i,s),ou.fromBufferAttribute(i,l),su.fromBufferAttribute(i,u),c.uv=Yn.getInterpolation(lu,Ra,Ca,Pa,au,ou,su,new Ye)),a&&(au.fromBufferAttribute(a,s),ou.fromBufferAttribute(a,l),su.fromBufferAttribute(a,u),c.uv1=Yn.getInterpolation(lu,Ra,Ca,Pa,au,ou,su,new Ye),c.uv2=c.uv1),o&&(W_.fromBufferAttribute(o,s),$_.fromBufferAttribute(o,l),j_.fromBufferAttribute(o,u),c.normal=Yn.getInterpolation(lu,Ra,Ca,Pa,W_,$_,j_,new z),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));const f={a:s,b:l,c:u,normal:new z,materialIndex:0};Yn.getNormal(Ra,Ca,Pa,f.normal),c.face=f}return c}class ol extends pa{constructor(e=1,n=1,r=1,i=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:a,depthSegments:o};const s=this;i=Math.floor(i),a=Math.floor(a),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,r,n,e,o,a,0),_("z","y","x",1,-1,r,n,-e,o,a,1),_("x","z","y",1,1,e,r,n,i,o,2),_("x","z","y",1,-1,e,r,-n,i,o,3),_("x","y","z",1,-1,e,n,r,i,a,4),_("x","y","z",-1,-1,e,n,-r,i,a,5),this.setIndex(l),this.setAttribute("position",new ea(u,3)),this.setAttribute("normal",new ea(c,3)),this.setAttribute("uv",new ea(f,2));function _(y,m,d,v,g,x,M,A,R,P,S){const T=x/R,X=M/P,q=x/2,O=M/2,F=A/2,G=R+1,K=P+1;let V=0,L=0;const B=new z;for(let k=0;k<K;k++){const ie=k*X-O;for(let I=0;I<G;I++){const Q=I*T-q;B[y]=Q*v,B[m]=ie*g,B[d]=F,u.push(B.x,B.y,B.z),B[y]=0,B[m]=0,B[d]=A>0?1:-1,c.push(B.x,B.y,B.z),f.push(I/R),f.push(1-k/P),V+=1}}for(let k=0;k<P;k++)for(let ie=0;ie<R;ie++){const I=h+ie+G*k,Q=h+ie+G*(k+1),Z=h+(ie+1)+G*(k+1),ce=h+(ie+1)+G*k;l.push(I,Q,ce),l.push(Q,Z,ce),L+=6}s.addGroup(p,L,S),p+=L,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function So(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const r=So(t[n]);for(const i in r)e[i]=r[i]}return e}function YO(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ZM(t){return t.getRenderTarget()===null?t.outputColorSpace:gr}const qO={clone:So,merge:Yt};var KO=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZO=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends Qc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KO,this.fragmentShader=ZO,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=YO(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?n.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[i]={type:"m4",value:o.toArray()}:n.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class QM extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Dr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends QM{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(md*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(md*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,i,a,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(md*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,a=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;a+=o.offsetX*i/l,n-=o.offsetY*r/u,i*=o.width/l,r*=o.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const La=-90,Ia=1;class QO extends _n{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null;const i=new Pn(La,Ia,e,n);i.layers=this.layers,this.add(i);const a=new Pn(La,Ia,e,n);a.layers=this.layers,this.add(a);const o=new Pn(La,Ia,e,n);o.layers=this.layers,this.add(o);const s=new Pn(La,Ia,e,n);s.layers=this.layers,this.add(s);const l=new Pn(La,Ia,e,n);l.layers=this.layers,this.add(l);const u=new Pn(La,Ia,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,a,o,s,l]=n;for(const u of n)this.remove(u);if(e===Dr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,o,s,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Nr,e.xr.enabled=!1;const p=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(n,i),e.setRenderTarget(r,1),e.render(n,a),e.setRenderTarget(r,2),e.render(n,o),e.setRenderTarget(r,3),e.render(n,s),e.setRenderTarget(r,4),e.render(n,l),r.texture.generateMipmaps=p,e.setRenderTarget(r,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=h,r.texture.needsPMREMUpdate=!0}}class JM extends cn{constructor(e,n,r,i,a,o,s,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:_o,super(e,n,r,i,a,o,s,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JO extends la{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];n.encoding!==void 0&&(ms("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Qi?De:Ji),this.texture=new JM(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ol(5,5,5),a=new ua({name:"CubemapFromEquirect",uniforms:So(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:un,blending:_i});a.uniforms.tEquirect.value=n;const o=new rn(i,a),s=n.minFilter;return n.minFilter===Us&&(n.minFilter=Cn),new QO(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,r,i){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,r,i);e.setRenderTarget(a)}}const Dd=new z,eN=new z,tN=new Ne;class zi{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=Dd.subVectors(r,n).cross(eN.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Dd),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||tN.getNormalMatrix(e),i=this.coplanarPoint(Dd).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Zm,fu=new z;class e1{constructor(e=new zi,n=new zi,r=new zi,i=new zi,a=new zi,o=new zi){this.planes=[e,n,r,i,a,o]}set(e,n,r,i,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(r),s[3].copy(i),s[4].copy(a),s[5].copy(o),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Dr){const r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],l=i[3],u=i[4],c=i[5],f=i[6],h=i[7],p=i[8],_=i[9],y=i[10],m=i[11],d=i[12],v=i[13],g=i[14],x=i[15];if(r[0].setComponents(l-a,h-u,m-p,x-d).normalize(),r[1].setComponents(l+a,h+u,m+p,x+d).normalize(),r[2].setComponents(l+o,h+c,m+_,x+v).normalize(),r[3].setComponents(l-o,h-c,m-_,x-v).normalize(),r[4].setComponents(l-s,h-f,m-y,x-g).normalize(),n===Dr)r[5].setComponents(l+s,h+f,m+y,x+g).normalize();else if(n===Ec)r[5].setComponents(s,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ui.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(fu.x=i.normal.x>0?e.max.x:e.min.x,fu.y=i.normal.y>0?e.max.y:e.min.y,fu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function t1(){let t=null,e=!1,n=null,r=null;function i(a,o){n(a,o),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function nN(t,e){const n=e.isWebGL2,r=new WeakMap;function i(u,c){const f=u.array,h=u.usage,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,f,h),u.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function a(u,c,f){const h=c.array,p=c.updateRange;t.bindBuffer(f,u),p.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),r.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=r.get(u);c&&(t.deleteBuffer(c.buffer),r.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=r.get(u);(!h||h.version<u.version)&&r.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=r.get(u);f===void 0?r.set(u,i(u,c)):f.version<u.version&&(a(f.buffer,u,c),f.version=u.version)}return{get:o,remove:s,update:l}}class Cr extends pa{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const a=e/2,o=n/2,s=Math.floor(r),l=Math.floor(i),u=s+1,c=l+1,f=e/s,h=n/l,p=[],_=[],y=[],m=[];for(let d=0;d<c;d++){const v=d*h-o;for(let g=0;g<u;g++){const x=g*f-a;_.push(x,-v,0),y.push(0,0,1),m.push(g/s),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<s;v++){const g=v+u*d,x=v+u*(d+1),M=v+1+u*(d+1),A=v+1+u*d;p.push(g,x,A),p.push(x,M,A)}this.setIndex(p),this.setAttribute("position",new ea(_,3)),this.setAttribute("normal",new ea(y,3)),this.setAttribute("uv",new ea(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.widthSegments,e.heightSegments)}}var rN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aN=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,oN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sN=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lN=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uN="vec3 transformed = vec3( position );",cN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fN=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dN=`#ifdef USE_IRIDESCENCE
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
#endif`,hN=`#ifdef USE_BUMPMAP
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
#endif`,pN=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_N=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,SN=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,EN=`#define PI 3.141592653589793
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
} // validated`,MN=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wN=`vec3 transformedNormal = objectNormal;
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
#endif`,TN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CN="gl_FragColor = linearToOutputTexel( gl_FragColor );",PN=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LN=`#ifdef USE_ENVMAP
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
#endif`,IN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DN=`#ifdef USE_ENVMAP
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
#endif`,ON=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NN=`#ifdef USE_ENVMAP
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
#endif`,UN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BN=`#ifdef USE_GRADIENTMAP
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
}`,HN=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,GN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$N=`uniform bool receiveShadow;
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
#endif`,jN=`#ifdef USE_ENVMAP
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
#endif`,XN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZN=`PhysicalMaterial material;
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
#endif`,QN=`struct PhysicalMaterial {
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
}`,JN=`
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
#endif`,eU=`#if defined( RE_IndirectDiffuse )
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
#endif`,tU=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,aU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,oU=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,sU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uU=`#if defined( USE_POINTS_UV )
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
#endif`,cU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fU=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dU=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hU=`#ifdef USE_MORPHNORMALS
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
#endif`,pU=`#ifdef USE_MORPHTARGETS
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
#endif`,mU=`#ifdef USE_MORPHTARGETS
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
#endif`,vU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,gU=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_U=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SU=`#ifdef USE_NORMALMAP
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
#endif`,EU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,MU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AU=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FU=`float getShadowMask() {
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
}`,kU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zU=`#ifdef USE_SKINNING
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
#endif`,BU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HU=`#ifdef USE_SKINNING
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
#endif`,GU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$U=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jU=`#ifdef USE_TRANSMISSION
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
#endif`,XU=`#ifdef USE_TRANSMISSION
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
#endif`,YU=`#ifdef USE_UV
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
#endif`,qU=`#ifdef USE_UV
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
#endif`,KU=`#ifdef USE_UV
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
#endif`,ZU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JU=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tF=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,iF=`#include <common>
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
}`,aF=`#if DEPTH_PACKING == 3200
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
}`,oF=`#define DISTANCE
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
}`,sF=`#define DISTANCE
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
}`,lF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cF=`uniform float scale;
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
}`,fF=`uniform vec3 diffuse;
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
}`,dF=`#include <common>
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
}`,hF=`uniform vec3 diffuse;
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
}`,pF=`#define LAMBERT
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
}`,mF=`#define LAMBERT
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
}`,vF=`#define MATCAP
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
}`,gF=`#define MATCAP
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
}`,_F=`#define NORMAL
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
}`,yF=`#define NORMAL
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
}`,xF=`#define PHONG
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
}`,SF=`#define PHONG
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
}`,EF=`#define STANDARD
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
}`,MF=`#define STANDARD
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
}`,wF=`#define TOON
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
}`,TF=`#define TOON
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
}`,bF=`uniform float size;
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
}`,AF=`uniform vec3 diffuse;
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
}`,RF=`#include <common>
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
}`,CF=`uniform vec3 color;
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
}`,PF=`uniform float rotation;
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
}`,LF=`uniform vec3 diffuse;
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
}`,Oe={alphamap_fragment:rN,alphamap_pars_fragment:iN,alphatest_fragment:aN,alphatest_pars_fragment:oN,aomap_fragment:sN,aomap_pars_fragment:lN,begin_vertex:uN,beginnormal_vertex:cN,bsdfs:fN,iridescence_fragment:dN,bumpmap_pars_fragment:hN,clipping_planes_fragment:pN,clipping_planes_pars_fragment:mN,clipping_planes_pars_vertex:vN,clipping_planes_vertex:gN,color_fragment:_N,color_pars_fragment:yN,color_pars_vertex:xN,color_vertex:SN,common:EN,cube_uv_reflection_fragment:MN,defaultnormal_vertex:wN,displacementmap_pars_vertex:TN,displacementmap_vertex:bN,emissivemap_fragment:AN,emissivemap_pars_fragment:RN,encodings_fragment:CN,encodings_pars_fragment:PN,envmap_fragment:LN,envmap_common_pars_fragment:IN,envmap_pars_fragment:DN,envmap_pars_vertex:ON,envmap_physical_pars_fragment:jN,envmap_vertex:NN,fog_vertex:UN,fog_pars_vertex:FN,fog_fragment:kN,fog_pars_fragment:zN,gradientmap_pars_fragment:BN,lightmap_fragment:HN,lightmap_pars_fragment:GN,lights_lambert_fragment:VN,lights_lambert_pars_fragment:WN,lights_pars_begin:$N,lights_toon_fragment:XN,lights_toon_pars_fragment:YN,lights_phong_fragment:qN,lights_phong_pars_fragment:KN,lights_physical_fragment:ZN,lights_physical_pars_fragment:QN,lights_fragment_begin:JN,lights_fragment_maps:eU,lights_fragment_end:tU,logdepthbuf_fragment:nU,logdepthbuf_pars_fragment:rU,logdepthbuf_pars_vertex:iU,logdepthbuf_vertex:aU,map_fragment:oU,map_pars_fragment:sU,map_particle_fragment:lU,map_particle_pars_fragment:uU,metalnessmap_fragment:cU,metalnessmap_pars_fragment:fU,morphcolor_vertex:dU,morphnormal_vertex:hU,morphtarget_pars_vertex:pU,morphtarget_vertex:mU,normal_fragment_begin:vU,normal_fragment_maps:gU,normal_pars_fragment:_U,normal_pars_vertex:yU,normal_vertex:xU,normalmap_pars_fragment:SU,clearcoat_normal_fragment_begin:EU,clearcoat_normal_fragment_maps:MU,clearcoat_pars_fragment:wU,iridescence_pars_fragment:TU,output_fragment:bU,packing:AU,premultiplied_alpha_fragment:RU,project_vertex:CU,dithering_fragment:PU,dithering_pars_fragment:LU,roughnessmap_fragment:IU,roughnessmap_pars_fragment:DU,shadowmap_pars_fragment:OU,shadowmap_pars_vertex:NU,shadowmap_vertex:UU,shadowmask_pars_fragment:FU,skinbase_vertex:kU,skinning_pars_vertex:zU,skinning_vertex:BU,skinnormal_vertex:HU,specularmap_fragment:GU,specularmap_pars_fragment:VU,tonemapping_fragment:WU,tonemapping_pars_fragment:$U,transmission_fragment:jU,transmission_pars_fragment:XU,uv_pars_fragment:YU,uv_pars_vertex:qU,uv_vertex:KU,worldpos_vertex:ZU,background_vert:QU,background_frag:JU,backgroundCube_vert:eF,backgroundCube_frag:tF,cube_vert:nF,cube_frag:rF,depth_vert:iF,depth_frag:aF,distanceRGBA_vert:oF,distanceRGBA_frag:sF,equirect_vert:lF,equirect_frag:uF,linedashed_vert:cF,linedashed_frag:fF,meshbasic_vert:dF,meshbasic_frag:hF,meshlambert_vert:pF,meshlambert_frag:mF,meshmatcap_vert:vF,meshmatcap_frag:gF,meshnormal_vert:_F,meshnormal_frag:yF,meshphong_vert:xF,meshphong_frag:SF,meshphysical_vert:EF,meshphysical_frag:MF,meshtoon_vert:wF,meshtoon_frag:TF,points_vert:bF,points_frag:AF,shadow_vert:RF,shadow_frag:CF,sprite_vert:PF,sprite_frag:LF},re={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},ur={basic:{uniforms:Yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new nt(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Yt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Yt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new nt(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Yt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Yt([re.points,re.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Yt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Yt([re.common,re.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Yt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Yt([re.sprite,re.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Yt([re.common,re.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Yt([re.lights,re.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ur.physical={uniforms:Yt([ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const du={r:0,b:0,g:0};function IF(t,e,n,r,i,a,o){const s=new nt(0);let l=a===!0?0:1,u,c,f=null,h=0,p=null;function _(m,d){let v=!1,g=d.isScene===!0?d.background:null;switch(g&&g.isTexture&&(g=(d.backgroundBlurriness>0?n:e).get(g)),g===null?y(s,l):g&&g.isColor&&(y(g,1),v=!0),t.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":r.buffers.color.setClear(0,0,0,1,o),v=!0;break;case"alpha-blend":r.buffers.color.setClear(0,0,0,0,o),v=!0;break}(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Kc)?(c===void 0&&(c=new rn(new ol(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:So(ur.backgroundCube.uniforms),vertexShader:ur.backgroundCube.vertexShader,fragmentShader:ur.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=g.colorSpace!==De,(f!==g||h!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new rn(new Cr(2,2),new ua({name:"BackgroundMaterial",uniforms:So(ur.background.uniforms),vertexShader:ur.background.vertexShader,fragmentShader:ur.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=g.colorSpace!==De,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,d){m.getRGB(du,ZM(t)),r.buffers.color.setClear(du.r,du.g,du.b,d,o)}return{getClearColor:function(){return s},setClearColor:function(m,d=1){s.set(m),l=d,y(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(s,l)},render:_}}function DF(t,e,n,r){const i=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||a!==null,s={},l=m(null);let u=l,c=!1;function f(F,G,K,V,L){let B=!1;if(o){const k=y(V,K,G);u!==k&&(u=k,p(u.object)),B=d(F,V,K,L),B&&v(F,V,K,L)}else{const k=G.wireframe===!0;(u.geometry!==V.id||u.program!==K.id||u.wireframe!==k)&&(u.geometry=V.id,u.program=K.id,u.wireframe=k,B=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,P(F,G,K,V),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function h(){return r.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function p(F){return r.isWebGL2?t.bindVertexArray(F):a.bindVertexArrayOES(F)}function _(F){return r.isWebGL2?t.deleteVertexArray(F):a.deleteVertexArrayOES(F)}function y(F,G,K){const V=K.wireframe===!0;let L=s[F.id];L===void 0&&(L={},s[F.id]=L);let B=L[G.id];B===void 0&&(B={},L[G.id]=B);let k=B[V];return k===void 0&&(k=m(h()),B[V]=k),k}function m(F){const G=[],K=[],V=[];for(let L=0;L<i;L++)G[L]=0,K[L]=0,V[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:V,object:F,attributes:{},index:null}}function d(F,G,K,V){const L=u.attributes,B=G.attributes;let k=0;const ie=K.getAttributes();for(const I in ie)if(ie[I].location>=0){const Z=L[I];let ce=B[I];if(ce===void 0&&(I==="instanceMatrix"&&F.instanceMatrix&&(ce=F.instanceMatrix),I==="instanceColor"&&F.instanceColor&&(ce=F.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;k++}return u.attributesNum!==k||u.index!==V}function v(F,G,K,V){const L={},B=G.attributes;let k=0;const ie=K.getAttributes();for(const I in ie)if(ie[I].location>=0){let Z=B[I];Z===void 0&&(I==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),I==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor));const ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),L[I]=ce,k++}u.attributes=L,u.attributesNum=k,u.index=V}function g(){const F=u.newAttributes;for(let G=0,K=F.length;G<K;G++)F[G]=0}function x(F){M(F,0)}function M(F,G){const K=u.newAttributes,V=u.enabledAttributes,L=u.attributeDivisors;K[F]=1,V[F]===0&&(t.enableVertexAttribArray(F),V[F]=1),L[F]!==G&&((r.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,G),L[F]=G)}function A(){const F=u.newAttributes,G=u.enabledAttributes;for(let K=0,V=G.length;K<V;K++)G[K]!==F[K]&&(t.disableVertexAttribArray(K),G[K]=0)}function R(F,G,K,V,L,B,k){k===!0?t.vertexAttribIPointer(F,G,K,L,B):t.vertexAttribPointer(F,G,K,V,L,B)}function P(F,G,K,V){if(r.isWebGL2===!1&&(F.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const L=V.attributes,B=K.getAttributes(),k=G.defaultAttributeValues;for(const ie in B){const I=B[ie];if(I.location>=0){let Q=L[ie];if(Q===void 0&&(ie==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),ie==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){const Z=Q.normalized,ce=Q.itemSize,ue=n.get(Q);if(ue===void 0)continue;const _e=ue.buffer,Ue=ue.type,be=ue.bytesPerElement,Tt=r.isWebGL2===!0&&(Ue===t.INT||Ue===t.UNSIGNED_INT||Q.gpuType===NM);if(Q.isInterleavedBufferAttribute){const Ve=Q.data,N=Ve.stride,Lt=Q.offset;if(Ve.isInstancedInterleavedBuffer){for(let we=0;we<I.locationSize;we++)M(I.location+we,Ve.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let we=0;we<I.locationSize;we++)x(I.location+we);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let we=0;we<I.locationSize;we++)R(I.location+we,ce/I.locationSize,Ue,Z,N*be,(Lt+ce/I.locationSize*we)*be,Tt)}else{if(Q.isInstancedBufferAttribute){for(let Ve=0;Ve<I.locationSize;Ve++)M(I.location+Ve,Q.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ve=0;Ve<I.locationSize;Ve++)x(I.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Ve=0;Ve<I.locationSize;Ve++)R(I.location+Ve,ce/I.locationSize,Ue,Z,ce*be,ce/I.locationSize*Ve*be,Tt)}}else if(k!==void 0){const Z=k[ie];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(I.location,Z);break;case 3:t.vertexAttrib3fv(I.location,Z);break;case 4:t.vertexAttrib4fv(I.location,Z);break;default:t.vertexAttrib1fv(I.location,Z)}}}}A()}function S(){q();for(const F in s){const G=s[F];for(const K in G){const V=G[K];for(const L in V)_(V[L].object),delete V[L];delete G[K]}delete s[F]}}function T(F){if(s[F.id]===void 0)return;const G=s[F.id];for(const K in G){const V=G[K];for(const L in V)_(V[L].object),delete V[L];delete G[K]}delete s[F.id]}function X(F){for(const G in s){const K=s[G];if(K[F.id]===void 0)continue;const V=K[F.id];for(const L in V)_(V[L].object),delete V[L];delete K[F.id]}}function q(){O(),c=!0,u!==l&&(u=l,p(u.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:q,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:X,initAttributes:g,enableAttribute:x,disableUnusedAttributes:A}}function OF(t,e,n,r){const i=r.isWebGL2;let a;function o(u){a=u}function s(u,c){t.drawArrays(a,u,c),n.update(c,a,1)}function l(u,c,f){if(f===0)return;let h,p;if(i)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](a,u,c,f),n.update(c,a,f)}this.setMode=o,this.render=s,this.renderInstances=l}function NF(t,e,n){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let s=n.precision!==void 0?n.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,x=o||e.has("OES_texture_float"),M=g&&x,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:A}}function UF(t){const e=this;let n=null,r=0,i=!1,a=!1;const o=new zi,s=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||r!==0||i;return i=h,r=f.length,p},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!i||_===null||_.length===0||a&&!m)a?c(null):u();else{const v=a?0:r,g=v*4;let x=d.clippingState||null;l.value=x,x=c(_,h,g,p);for(let M=0;M!==g;++M)x[M]=n[M];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function c(f,h,p,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const d=p+y*4,v=h.matrixWorldInverse;s.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,x=p;g!==y;++g,x+=4)o.copy(f[g]).applyMatrix4(v,s),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function FF(t){let e=new WeakMap;function n(o,s){return s===Zh?o.mapping=_o:s===Qh&&(o.mapping=yo),o}function r(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Zh||s===Qh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new JO(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",i),n(u.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class kF extends QM{constructor(e=-1,n=1,r=1,i=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=r-e,o=r+e,s=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const qa=4,X_=[.125,.215,.35,.446,.526,.582],Gi=20,Od=new kF,Y_=new nt;let Nd=null;const Bi=(1+Math.sqrt(5))/2,Da=1/Bi,q_=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Bi,Da),new z(0,Bi,-Da),new z(Da,0,Bi),new z(-Da,0,Bi),new z(Bi,Da,0),new z(-Bi,Da,0)];class K_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){Nd=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd),e.scissorTest=!1,hu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_o||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Fs,format:Kn,colorSpace:gr,depthBuffer:!1},i=Z_(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z_(e,n,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zF(a)),this._blurMaterial=BF(a,e,n)}return i}_compileMaterial(e){const n=new rn(this._lodPlanes[0],e);this._renderer.compile(n,Od)}_sceneToCubeUV(e,n,r,i){const s=new Pn(90,1,n,r),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Y_),c.toneMapping=Nr,c.autoClear=!1;const p=new ni({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),_=new rn(new ol,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Y_),y=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(s.up.set(0,l[d],0),s.lookAt(u[d],0,0)):v===1?(s.up.set(0,0,l[d]),s.lookAt(0,u[d],0)):(s.up.set(0,l[d],0),s.lookAt(0,0,u[d]));const g=this._cubeSize;hu(i,v*g,d>2?g:0,g,g),c.setRenderTarget(i),y&&c.render(_,s),c.render(e,s)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===_o||e.mapping===yo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const a=i?this._cubemapMaterial:this._equirectMaterial,o=new rn(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;hu(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(o,Od)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=q_[(i-1)%q_.length];this._blur(e,i-1,i,a,o)}n.autoClear=r}_blur(e,n,r,i,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,r,i,"latitudinal",a),this._halfBlur(o,e,r,r,i,"longitudinal",a)}_halfBlur(e,n,r,i,a,o,s){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new rn(this._lodPlanes[i],u),h=u.uniforms,p=this._sizeLods[r]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Gi-1),y=a/_,m=isFinite(a)?1+Math.floor(c*y):Gi;m>Gi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const d=[];let v=0;for(let R=0;R<Gi;++R){const P=R/y,S=Math.exp(-P*P/2);d.push(S),R===0?v+=S:R<m&&(v+=2*S)}for(let R=0;R<d.length;R++)d[R]=d[R]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-r;const x=this._sizeLods[i],M=3*x*(i>g-qa?i-g+qa:0),A=4*(this._cubeSize-x);hu(n,M,A,3*x,2*x),l.setRenderTarget(n),l.render(f,Od)}}function zF(t){const e=[],n=[],r=[];let i=t;const a=t-qa+1+X_.length;for(let o=0;o<a;o++){const s=Math.pow(2,i);n.push(s);let l=1/s;o>t-qa?l=X_[o-t+qa-1]:o===0&&(l=0),r.push(l);const u=1/(s-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,y=3,m=2,d=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),x=new Float32Array(d*_*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,P=A>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(S,y*_*A),g.set(h,m*_*A);const T=[A,A,A,A,A,A];x.set(T,d*_*A)}const M=new pa;M.setAttribute("position",new vr(v,y)),M.setAttribute("uv",new vr(g,m)),M.setAttribute("faceIndex",new vr(x,d)),e.push(M),i>qa&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Z_(t,e,n){const r=new la(t,e,n);return r.texture.mapping=Kc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hu(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function BF(t,e,n){const r=new Float32Array(Gi),i=new z(0,1,0);return new ua({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jm(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Q_(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jm(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function J_(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Jm(){return`

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
	`}function HF(t){let e=new WeakMap,n=null;function r(s){if(s&&s.isTexture){const l=s.mapping,u=l===Zh||l===Qh,c=l===_o||l===yo;if(u||c)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return n===null&&(n=new K_(t)),f=u?n.fromEquirectangular(s,f):n.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(u&&f&&f.height>0||c&&f&&i(f)){n===null&&(n=new K_(t));const h=u?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",a),h.texture}else return null}}}return s}function i(s){let l=0;const u=6;for(let c=0;c<u;c++)s[c]!==void 0&&l++;return l===u}function a(s){const l=s.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function GF(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const i=n(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function VF(t,e,n,r){const i={},a=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete i[h.id];const p=a.get(h);p&&(e.remove(p),a.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function s(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,x=v.length;g<x;g+=3){const M=v[g+0],A=v[g+1],R=v[g+2];h.push(M,A,A,R,R,M)}}else{const v=_.array;y=_.version;for(let g=0,x=v.length/3-1;g<x;g+=3){const M=g+0,A=g+1,R=g+2;h.push(M,A,A,R,R,M)}}const m=new(VM(h)?KM:qM)(h,1);m.version=y;const d=a.get(f);d&&e.remove(d),a.set(f,m)}function c(f){const h=a.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:c}}function WF(t,e,n,r){const i=r.isWebGL2;let a;function o(h){a=h}let s,l;function u(h){s=h.type,l=h.bytesPerElement}function c(h,p){t.drawElements(a,p,s,h*l),n.update(p,a,1)}function f(h,p,_){if(_===0)return;let y,m;if(i)y=t,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](a,p,s,h*l,_),n.update(p,a,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function $F(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,o,s){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=s*(a/3);break;case t.LINES:n.lines+=s*(a/2);break;case t.LINE_STRIP:n.lines+=s*(a-1);break;case t.LINE_LOOP:n.lines+=s*a;break;case t.POINTS:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function jF(t,e){return t[0]-e[0]}function XF(t,e){return Math.abs(e[1])-Math.abs(t[1])}function YF(t,e,n){const r={},i=new Float32Array(8),a=new WeakMap,o=new Ot,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=_!==void 0?_.length:0;let m=a.get(c);if(m===void 0||m.count!==y){let G=function(){O.dispose(),a.delete(c),c.removeEventListener("dispose",G)};var p=G;m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),M===!0&&(S=3);let T=c.attributes.position.count*S,X=1;T>e.maxTextureSize&&(X=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const q=new Float32Array(T*X*4*y),O=new jM(q,T,X,y);O.type=li,O.needsUpdate=!0;const F=S*4;for(let K=0;K<y;K++){const V=A[K],L=R[K],B=P[K],k=T*X*4*K;for(let ie=0;ie<V.count;ie++){const I=ie*F;g===!0&&(o.fromBufferAttribute(V,ie),q[k+I+0]=o.x,q[k+I+1]=o.y,q[k+I+2]=o.z,q[k+I+3]=0),x===!0&&(o.fromBufferAttribute(L,ie),q[k+I+4]=o.x,q[k+I+5]=o.y,q[k+I+6]=o.z,q[k+I+7]=0),M===!0&&(o.fromBufferAttribute(B,ie),q[k+I+8]=o.x,q[k+I+9]=o.y,q[k+I+10]=o.z,q[k+I+11]=B.itemSize===4?o.w:1)}}m={count:y,texture:O,size:new Ye(T,X)},a.set(c,m),c.addEventListener("dispose",G)}let d=0;for(let g=0;g<h.length;g++)d+=h[g];const v=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let y=r[c.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];r[c.id]=y}for(let x=0;x<_;x++){const M=y[x];M[0]=x,M[1]=h[x]}y.sort(XF);for(let x=0;x<8;x++)x<_&&y[x][1]?(s[x][0]=y[x][0],s[x][1]=y[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(jF);const m=c.morphAttributes.position,d=c.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const M=s[x],A=M[0],R=M[1];A!==Number.MAX_SAFE_INTEGER&&R?(m&&c.getAttribute("morphTarget"+x)!==m[A]&&c.setAttribute("morphTarget"+x,m[A]),d&&c.getAttribute("morphNormal"+x)!==d[A]&&c.setAttribute("morphNormal"+x,d[A]),i[x]=R,v+=R):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),d&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),i[x]=0)}const g=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",i)}}return{update:l}}function qF(t,e,n,r){let i=new WeakMap;function a(l){const u=r.render.frame,c=l.geometry,f=e.get(l,c);return i.get(f)!==u&&(e.update(f),i.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),f}function o(){i=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const n1=new cn,r1=new jM,i1=new FO,a1=new JM,ey=[],ty=[],ny=new Float32Array(16),ry=new Float32Array(9),iy=new Float32Array(4);function Do(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let a=ey[i];if(a===void 0&&(a=new Float32Array(i),ey[i]=a),e!==0){r.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function St(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function Jc(t,e){let n=ty[e];n===void 0&&(n=new Int32Array(e),ty[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function KF(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ZF(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function QF(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(St(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function JF(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function ek(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(St(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(St(n,r))return;iy.set(r),t.uniformMatrix2fv(this.addr,!1,iy),Et(n,r)}}function tk(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(St(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(St(n,r))return;ry.set(r),t.uniformMatrix3fv(this.addr,!1,ry),Et(n,r)}}function nk(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(St(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(St(n,r))return;ny.set(r),t.uniformMatrix4fv(this.addr,!1,ny),Et(n,r)}}function rk(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ik(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function ak(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function ok(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function sk(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function lk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function uk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function ck(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function fk(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2D(e||n1,i)}function dk(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||i1,i)}function hk(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||a1,i)}function pk(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||r1,i)}function mk(t){switch(t){case 5126:return KF;case 35664:return ZF;case 35665:return QF;case 35666:return JF;case 35674:return ek;case 35675:return tk;case 35676:return nk;case 5124:case 35670:return rk;case 35667:case 35671:return ik;case 35668:case 35672:return ak;case 35669:case 35673:return ok;case 5125:return sk;case 36294:return lk;case 36295:return uk;case 36296:return ck;case 35678:case 36198:case 36298:case 36306:case 35682:return fk;case 35679:case 36299:case 36307:return dk;case 35680:case 36300:case 36308:case 36293:return hk;case 36289:case 36303:case 36311:case 36292:return pk}}function vk(t,e){t.uniform1fv(this.addr,e)}function gk(t,e){const n=Do(e,this.size,2);t.uniform2fv(this.addr,n)}function _k(t,e){const n=Do(e,this.size,3);t.uniform3fv(this.addr,n)}function yk(t,e){const n=Do(e,this.size,4);t.uniform4fv(this.addr,n)}function xk(t,e){const n=Do(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Sk(t,e){const n=Do(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ek(t,e){const n=Do(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Mk(t,e){t.uniform1iv(this.addr,e)}function wk(t,e){t.uniform2iv(this.addr,e)}function Tk(t,e){t.uniform3iv(this.addr,e)}function bk(t,e){t.uniform4iv(this.addr,e)}function Ak(t,e){t.uniform1uiv(this.addr,e)}function Rk(t,e){t.uniform2uiv(this.addr,e)}function Ck(t,e){t.uniform3uiv(this.addr,e)}function Pk(t,e){t.uniform4uiv(this.addr,e)}function Lk(t,e,n){const r=this.cache,i=e.length,a=Jc(n,i);St(r,a)||(t.uniform1iv(this.addr,a),Et(r,a));for(let o=0;o!==i;++o)n.setTexture2D(e[o]||n1,a[o])}function Ik(t,e,n){const r=this.cache,i=e.length,a=Jc(n,i);St(r,a)||(t.uniform1iv(this.addr,a),Et(r,a));for(let o=0;o!==i;++o)n.setTexture3D(e[o]||i1,a[o])}function Dk(t,e,n){const r=this.cache,i=e.length,a=Jc(n,i);St(r,a)||(t.uniform1iv(this.addr,a),Et(r,a));for(let o=0;o!==i;++o)n.setTextureCube(e[o]||a1,a[o])}function Ok(t,e,n){const r=this.cache,i=e.length,a=Jc(n,i);St(r,a)||(t.uniform1iv(this.addr,a),Et(r,a));for(let o=0;o!==i;++o)n.setTexture2DArray(e[o]||r1,a[o])}function Nk(t){switch(t){case 5126:return vk;case 35664:return gk;case 35665:return _k;case 35666:return yk;case 35674:return xk;case 35675:return Sk;case 35676:return Ek;case 5124:case 35670:return Mk;case 35667:case 35671:return wk;case 35668:case 35672:return Tk;case 35669:case 35673:return bk;case 5125:return Ak;case 36294:return Rk;case 36295:return Ck;case 36296:return Pk;case 35678:case 36198:case 36298:case 36306:case 35682:return Lk;case 35679:case 36299:case 36307:return Ik;case 35680:case 36300:case 36308:case 36293:return Dk;case 36289:case 36303:case 36311:case 36292:return Ok}}class Uk{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.setValue=mk(n.type)}}class Fk{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.size=n.size,this.setValue=Nk(n.type)}}class kk{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let a=0,o=i.length;a!==o;++a){const s=i[a];s.setValue(e,n[s.id],r)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function ay(t,e){t.seq.push(e),t.map[e.id]=e}function zk(t,e,n){const r=t.name,i=r.length;for(Ud.lastIndex=0;;){const a=Ud.exec(r),o=Ud.lastIndex;let s=a[1];const l=a[2]==="]",u=a[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===i){ay(n,u===void 0?new Uk(s,t,e):new Fk(s,t,e));break}else{let f=n.map[s];f===void 0&&(f=new kk(s),ay(n,f)),n=f}}}class Vu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const a=e.getActiveUniform(n,i),o=e.getUniformLocation(n,a.name);zk(a,o,this)}}setValue(e,n,r,i){const a=this.map[n];a!==void 0&&a.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,a=e.length;i!==a;++i){const o=e[i];o.id in n&&r.push(o)}return r}}function oy(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}let Bk=0;function Hk(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let o=i;o<a;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return r.join(`
`)}function Gk(t){switch(t){case gr:return["Linear","( value )"];case De:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function sy(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Hk(t.getShaderSource(e),o)}else return i}function Vk(t,e){const n=Gk(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Wk(t,e){let n;switch(e){case eO:n="Linear";break;case tO:n="Reinhard";break;case nO:n="OptimizedCineon";break;case rO:n="ACESFilmic";break;case iO:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function $k(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(is).join(`
`)}function jk(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function Xk(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const a=t.getActiveAttrib(e,i),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),n[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function is(t){return t!==""}function ly(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uy(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yk=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(t){return t.replace(Yk,qk)}function qk(t,e){const n=Oe[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return ip(n)}const Kk=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cy(t){return t.replace(Kk,Zk)}function Zk(t,e,n,r){let i="";for(let a=parseInt(e);a<parseInt(n);a++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function fy(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qk(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===PM?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ID?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===br&&(e="SHADOWMAP_TYPE_VSM"),e}function Jk(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case _o:case yo:e="ENVMAP_TYPE_CUBE";break;case Kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e4(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case yo:e="ENVMAP_MODE_REFRACTION";break}return e}function t4(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case DM:e="ENVMAP_BLENDING_MULTIPLY";break;case QD:e="ENVMAP_BLENDING_MIX";break;case JD:e="ENVMAP_BLENDING_ADD";break}return e}function n4(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function r4(t,e,n,r){const i=t.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=Qk(n),u=Jk(n),c=e4(n),f=t4(n),h=n4(n),p=n.isWebGL2?"":$k(n),_=jk(a),y=i.createProgram();let m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(is).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(is).join(`
`),d.length>0&&(d+=`
`)):(m=[fy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),d=[p,fy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Nr?"#define TONE_MAPPING":"",n.toneMapping!==Nr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Nr?Wk("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,Vk("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(is).join(`
`)),o=ip(o),o=ly(o,n),o=uy(o,n),s=ip(s),s=ly(s,n),s=uy(s,n),o=cy(o),s=cy(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===P_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===P_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=v+m+o,x=v+d+s,M=oy(i,i.VERTEX_SHADER,g),A=oy(i,i.FRAGMENT_SHADER,x);if(i.attachShader(y,M),i.attachShader(y,A),n.index0AttributeName!==void 0?i.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y),t.debug.checkShaderErrors){const S=i.getProgramInfoLog(y).trim(),T=i.getShaderInfoLog(M).trim(),X=i.getShaderInfoLog(A).trim();let q=!0,O=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,y,M,A);else{const F=sy(i,M,"vertex"),G=sy(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+F+`
`+G)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||X==="")&&(O=!1);O&&(this.diagnostics={runnable:q,programLog:S,vertexShader:{log:T,prefix:m},fragmentShader:{log:X,prefix:d}})}i.deleteShader(M),i.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new Vu(i,y)),R};let P;return this.getAttributes=function(){return P===void 0&&(P=Xk(i,y)),P},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bk++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=A,this}let i4=0;class a4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),a=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new o4(e),n.set(e,r)),r}}class o4{constructor(e){this.id=i4++,this.code=e,this.usedTimes=0}}function s4(t,e,n,r,i,a,o){const s=new Qm,l=new a4,u=[],c=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function m(S,T,X,q,O){const F=q.fog,G=O.geometry,K=S.isMeshStandardMaterial?q.environment:null,V=(S.isMeshStandardMaterial?n:e).get(S.envMap||K),L=V&&V.mapping===Kc?V.image.height:null,B=_[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const k=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ie=k!==void 0?k.length:0;let I=0;G.morphAttributes.position!==void 0&&(I=1),G.morphAttributes.normal!==void 0&&(I=2),G.morphAttributes.color!==void 0&&(I=3);let Q,Z,ce,ue;if(B){const mt=ur[B];Q=mt.vertexShader,Z=mt.fragmentShader}else Q=S.vertexShader,Z=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),ue=l.getFragmentShaderID(S);const _e=t.getRenderTarget(),Ue=O.isInstancedMesh===!0,be=!!S.map,Tt=!!S.matcap,Ve=!!V,N=!!S.aoMap,Lt=!!S.lightMap,we=!!S.bumpMap,Fe=!!S.normalMap,Ae=!!S.displacementMap,Qe=!!S.emissiveMap,He=!!S.metalnessMap,Le=!!S.roughnessMap,qe=S.anisotropy>0,It=S.clearcoat>0,zt=S.iridescence>0,b=S.sheen>0,E=S.transmission>0,$=qe&&!!S.anisotropyMap,ee=It&&!!S.clearcoatMap,te=It&&!!S.clearcoatNormalMap,oe=It&&!!S.clearcoatRoughnessMap,ye=zt&&!!S.iridescenceMap,se=zt&&!!S.iridescenceThicknessMap,Y=b&&!!S.sheenColorMap,xe=b&&!!S.sheenRoughnessMap,Se=!!S.specularMap,Me=!!S.specularColorMap,me=!!S.specularIntensityMap,ve=E&&!!S.transmissionMap,ke=E&&!!S.thicknessMap,Ke=!!S.gradientMap,C=!!S.alphaMap,ae=S.alphaTest>0,H=!!S.extensions,ne=!!G.attributes.uv1,le=!!G.attributes.uv2,je=!!G.attributes.uv3;return{isWebGL2:c,shaderID:B,shaderType:S.type,shaderName:S.name,vertexShader:Q,fragmentShader:Z,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:gr,map:be,matcap:Tt,envMap:Ve,envMapMode:Ve&&V.mapping,envMapCubeUVHeight:L,aoMap:N,lightMap:Lt,bumpMap:we,normalMap:Fe,displacementMap:h&&Ae,emissiveMap:Qe,normalMapObjectSpace:Fe&&S.normalMapType===_O,normalMapTangentSpace:Fe&&S.normalMapType===gO,metalnessMap:He,roughnessMap:Le,anisotropy:qe,anisotropyMap:$,clearcoat:It,clearcoatMap:ee,clearcoatNormalMap:te,clearcoatRoughnessMap:oe,iridescence:zt,iridescenceMap:ye,iridescenceThicknessMap:se,sheen:b,sheenColorMap:Y,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:Me,specularIntensityMap:me,transmission:E,transmissionMap:ve,thicknessMap:ke,gradientMap:Ke,opaque:S.transparent===!1&&S.blending===oo,alphaMap:C,alphaTest:ae,combine:S.combine,mapUv:be&&y(S.map.channel),aoMapUv:N&&y(S.aoMap.channel),lightMapUv:Lt&&y(S.lightMap.channel),bumpMapUv:we&&y(S.bumpMap.channel),normalMapUv:Fe&&y(S.normalMap.channel),displacementMapUv:Ae&&y(S.displacementMap.channel),emissiveMapUv:Qe&&y(S.emissiveMap.channel),metalnessMapUv:He&&y(S.metalnessMap.channel),roughnessMapUv:Le&&y(S.roughnessMap.channel),anisotropyMapUv:$&&y(S.anisotropyMap.channel),clearcoatMapUv:ee&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:te&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:xe&&y(S.sheenRoughnessMap.channel),specularMapUv:Se&&y(S.specularMap.channel),specularColorMapUv:Me&&y(S.specularColorMap.channel),specularIntensityMapUv:me&&y(S.specularIntensityMap.channel),transmissionMapUv:ve&&y(S.transmissionMap.channel),thicknessMapUv:ke&&y(S.thicknessMap.channel),alphaMapUv:C&&y(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Fe||qe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:ne,vertexUv2s:le,vertexUv3s:je,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(be||C),fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:I,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:Nr,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pr,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:H&&S.extensions.derivatives===!0,extensionFragDepth:H&&S.extensions.fragDepth===!0,extensionDrawBuffers:H&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:H&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||r.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const X in S.defines)T.push(X),T.push(S.defines[X]);return S.isRawShaderMaterial===!1&&(v(T,S),g(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function v(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function g(S,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),T.anisotropy&&s.enable(17),S.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),S.push(s.mask)}function x(S){const T=_[S.type];let X;if(T){const q=ur[T];X=qO.clone(q.uniforms)}else X=S.uniforms;return X}function M(S,T){let X;for(let q=0,O=u.length;q<O;q++){const F=u[q];if(F.cacheKey===T){X=F,++X.usedTimes;break}}return X===void 0&&(X=new r4(t,T,S,a),u.push(X)),X}function A(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:M,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:P}}function l4(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function r(a,o,s){t.get(a)[o]=s}function i(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:i}}function u4(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function dy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function hy(){const t=[];let e=0;const n=[],r=[],i=[];function a(){e=0,n.length=0,r.length=0,i.length=0}function o(f,h,p,_,y,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function s(f,h,p,_,y,m){const d=o(f,h,p,_,y,m);p.transmission>0?r.push(d):p.transparent===!0?i.push(d):n.push(d)}function l(f,h,p,_,y,m){const d=o(f,h,p,_,y,m);p.transmission>0?r.unshift(d):p.transparent===!0?i.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||u4),r.length>1&&r.sort(h||dy),i.length>1&&i.sort(h||dy)}function c(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:l,finish:c,sort:u}}function c4(){let t=new WeakMap;function e(r,i){const a=t.get(r);let o;return a===void 0?(o=new hy,t.set(r,[o])):i>=a.length?(o=new hy,a.push(o)):o=a[i],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function f4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new nt};break;case"SpotLight":n={position:new z,direction:new z,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function d4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let h4=0;function p4(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function m4(t,e){const n=new f4,r=d4(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new z);const a=new z,o=new Ut,s=new Ut;function l(c,f){let h=0,p=0,_=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let y=0,m=0,d=0,v=0,g=0,x=0,M=0,A=0,R=0,P=0;c.sort(p4);const S=f===!0?Math.PI:1;for(let X=0,q=c.length;X<q;X++){const O=c[X],F=O.color,G=O.intensity,K=O.distance,V=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=F.r*G*S,p+=F.g*G*S,_+=F.b*G*S;else if(O.isLightProbe)for(let L=0;L<9;L++)i.probe[L].addScaledVector(O.sh.coefficients[L],G);else if(O.isDirectionalLight){const L=n.get(O);if(L.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const B=O.shadow,k=r.get(O);k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.directionalShadow[y]=k,i.directionalShadowMap[y]=V,i.directionalShadowMatrix[y]=O.shadow.matrix,x++}i.directional[y]=L,y++}else if(O.isSpotLight){const L=n.get(O);L.position.setFromMatrixPosition(O.matrixWorld),L.color.copy(F).multiplyScalar(G*S),L.distance=K,L.coneCos=Math.cos(O.angle),L.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),L.decay=O.decay,i.spot[d]=L;const B=O.shadow;if(O.map&&(i.spotLightMap[R]=O.map,R++,B.updateMatrices(O),O.castShadow&&P++),i.spotLightMatrix[d]=B.matrix,O.castShadow){const k=r.get(O);k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.spotShadow[d]=k,i.spotShadowMap[d]=V,A++}d++}else if(O.isRectAreaLight){const L=n.get(O);L.color.copy(F).multiplyScalar(G),L.halfWidth.set(O.width*.5,0,0),L.halfHeight.set(0,O.height*.5,0),i.rectArea[v]=L,v++}else if(O.isPointLight){const L=n.get(O);if(L.color.copy(O.color).multiplyScalar(O.intensity*S),L.distance=O.distance,L.decay=O.decay,O.castShadow){const B=O.shadow,k=r.get(O);k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,i.pointShadow[m]=k,i.pointShadowMap[m]=V,i.pointShadowMatrix[m]=O.shadow.matrix,M++}i.point[m]=L,m++}else if(O.isHemisphereLight){const L=n.get(O);L.skyColor.copy(O.color).multiplyScalar(G*S),L.groundColor.copy(O.groundColor).multiplyScalar(G*S),i.hemi[g]=L,g++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==y||T.pointLength!==m||T.spotLength!==d||T.rectAreaLength!==v||T.hemiLength!==g||T.numDirectionalShadows!==x||T.numPointShadows!==M||T.numSpotShadows!==A||T.numSpotMaps!==R)&&(i.directional.length=y,i.spot.length=d,i.rectArea.length=v,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+R-P,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=P,T.directionalLength=y,T.pointLength=m,T.spotLength=d,T.rectAreaLength=v,T.hemiLength=g,T.numDirectionalShadows=x,T.numPointShadows=M,T.numSpotShadows=A,T.numSpotMaps=R,i.version=h4++)}function u(c,f){let h=0,p=0,_=0,y=0,m=0;const d=f.matrixWorldInverse;for(let v=0,g=c.length;v<g;v++){const x=c[v];if(x.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(d),h++}else if(x.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(d),_++}else if(x.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),s.identity(),o.copy(x.matrixWorld),o.premultiply(d),s.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),y++}else if(x.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:i}}function py(t,e){const n=new m4(t,e),r=[],i=[];function a(){r.length=0,i.length=0}function o(f){r.push(f)}function s(f){i.push(f)}function l(f){n.setup(r,f)}function u(f){n.setupView(r,f)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s}}function v4(t,e){let n=new WeakMap;function r(a,o=0){const s=n.get(a);let l;return s===void 0?(l=new py(t,e),n.set(a,[l])):o>=s.length?(l=new py(t,e),s.push(l)):l=s[o],l}function i(){n=new WeakMap}return{get:r,dispose:i}}class g4 extends Qc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mO,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _4 extends Qc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const y4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x4=`uniform sampler2D shadow_pass;
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
}`;function S4(t,e,n){let r=new e1;const i=new Ye,a=new Ye,o=new Ot,s=new g4({depthPacking:vO}),l=new _4,u={},c=n.maxTextureSize,f={[Ei]:un,[un]:Ei,[Pr]:Pr},h=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:y4,fragmentShader:x4}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new pa;_.setAttribute("position",new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new rn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PM;let d=this.type;this.render=function(M,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const P=t.getRenderTarget(),S=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),X=t.state;X.setBlending(_i),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const q=d!==br&&this.type===br,O=d===br&&this.type!==br;for(let F=0,G=M.length;F<G;F++){const K=M[F],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const L=V.getFrameExtents();if(i.multiply(L),a.copy(V.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(a.x=Math.floor(c/L.x),i.x=a.x*L.x,V.mapSize.x=a.x),i.y>c&&(a.y=Math.floor(c/L.y),i.y=a.y*L.y,V.mapSize.y=a.y)),V.map===null||q===!0||O===!0){const k=this.type!==br?{minFilter:Kt,magFilter:Kt}:{};V.map!==null&&V.map.dispose(),V.map=new la(i.x,i.y,k),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();const B=V.getViewportCount();for(let k=0;k<B;k++){const ie=V.getViewport(k);o.set(a.x*ie.x,a.y*ie.y,a.x*ie.z,a.y*ie.w),X.viewport(o),V.updateMatrices(K,k),r=V.getFrustum(),x(A,R,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===br&&v(V,R),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(P,S,T)};function v(M,A){const R=e.update(y);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new la(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(A,null,R,h,y,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(A,null,R,p,y,null)}function g(M,A,R,P){let S=null;const T=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)S=T;else if(S=R.isPointLight===!0?l:s,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=S.uuid,q=A.uuid;let O=u[X];O===void 0&&(O={},u[X]=O);let F=O[q];F===void 0&&(F=S.clone(),O[q]=F),S=F}if(S.visible=A.visible,S.wireframe=A.wireframe,P===br?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=t.properties.get(S);X.light=R}return S}function x(M,A,R,P,S){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===br)&&(!M.frustumCulled||r.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);const q=e.update(M),O=M.material;if(Array.isArray(O)){const F=q.groups;for(let G=0,K=F.length;G<K;G++){const V=F[G],L=O[V.materialIndex];if(L&&L.visible){const B=g(M,L,P,S);t.renderBufferDirect(R,null,q,B,M,V)}}}else if(O.visible){const F=g(M,O,P,S);t.renderBufferDirect(R,null,q,F,M,null)}}const X=M.children;for(let q=0,O=X.length;q<O;q++)x(X[q],A,R,P,S)}}function E4(t,e,n){const r=n.isWebGL2;function i(){let C=!1;const ae=new Ot;let H=null;const ne=new Ot(0,0,0,0);return{setMask:function(le){H!==le&&!C&&(t.colorMask(le,le,le,le),H=le)},setLocked:function(le){C=le},setClear:function(le,je,ut,mt,Pi){Pi===!0&&(le*=mt,je*=mt,ut*=mt),ae.set(le,je,ut,mt),ne.equals(ae)===!1&&(t.clearColor(le,je,ut,mt),ne.copy(ae))},reset:function(){C=!1,H=null,ne.set(-1,0,0,0)}}}function a(){let C=!1,ae=null,H=null,ne=null;return{setTest:function(le){le?_e(t.DEPTH_TEST):Ue(t.DEPTH_TEST)},setMask:function(le){ae!==le&&!C&&(t.depthMask(le),ae=le)},setFunc:function(le){if(H!==le){switch(le){case $D:t.depthFunc(t.NEVER);break;case jD:t.depthFunc(t.ALWAYS);break;case XD:t.depthFunc(t.LESS);break;case Kh:t.depthFunc(t.LEQUAL);break;case YD:t.depthFunc(t.EQUAL);break;case qD:t.depthFunc(t.GEQUAL);break;case KD:t.depthFunc(t.GREATER);break;case ZD:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=le}},setLocked:function(le){C=le},setClear:function(le){ne!==le&&(t.clearDepth(le),ne=le)},reset:function(){C=!1,ae=null,H=null,ne=null}}}function o(){let C=!1,ae=null,H=null,ne=null,le=null,je=null,ut=null,mt=null,Pi=null;return{setTest:function(ct){C||(ct?_e(t.STENCIL_TEST):Ue(t.STENCIL_TEST))},setMask:function(ct){ae!==ct&&!C&&(t.stencilMask(ct),ae=ct)},setFunc:function(ct,rr,jt){(H!==ct||ne!==rr||le!==jt)&&(t.stencilFunc(ct,rr,jt),H=ct,ne=rr,le=jt)},setOp:function(ct,rr,jt){(je!==ct||ut!==rr||mt!==jt)&&(t.stencilOp(ct,rr,jt),je=ct,ut=rr,mt=jt)},setLocked:function(ct){C=ct},setClear:function(ct){Pi!==ct&&(t.clearStencil(ct),Pi=ct)},reset:function(){C=!1,ae=null,H=null,ne=null,le=null,je=null,ut=null,mt=null,Pi=null}}}const s=new i,l=new a,u=new o,c=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,y=[],m=null,d=!1,v=null,g=null,x=null,M=null,A=null,R=null,P=null,S=!1,T=null,X=null,q=null,O=null,F=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(L)[1]),K=V>=1):L.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),K=V>=2);let B=null,k={};const ie=t.getParameter(t.SCISSOR_BOX),I=t.getParameter(t.VIEWPORT),Q=new Ot().fromArray(ie),Z=new Ot().fromArray(I);function ce(C,ae,H,ne){const le=new Uint8Array(4),je=t.createTexture();t.bindTexture(C,je),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ut=0;ut<H;ut++)r&&(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(ae+ut,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return je}const ue={};ue[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ue[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),_e(t.DEPTH_TEST),l.setFunc(Kh),Ae(!1),Qe(J0),_e(t.CULL_FACE),we(_i);function _e(C){h[C]!==!0&&(t.enable(C),h[C]=!0)}function Ue(C){h[C]!==!1&&(t.disable(C),h[C]=!1)}function be(C,ae){return p[C]!==ae?(t.bindFramebuffer(C,ae),p[C]=ae,r&&(C===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ae),C===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function Tt(C,ae){let H=y,ne=!1;if(C)if(H=_.get(ae),H===void 0&&(H=[],_.set(ae,H)),C.isWebGLMultipleRenderTargets){const le=C.texture;if(H.length!==le.length||H[0]!==t.COLOR_ATTACHMENT0){for(let je=0,ut=le.length;je<ut;je++)H[je]=t.COLOR_ATTACHMENT0+je;H.length=le.length,ne=!0}}else H[0]!==t.COLOR_ATTACHMENT0&&(H[0]=t.COLOR_ATTACHMENT0,ne=!0);else H[0]!==t.BACK&&(H[0]=t.BACK,ne=!0);ne&&(n.isWebGL2?t.drawBuffers(H):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function Ve(C){return m!==C?(t.useProgram(C),m=C,!0):!1}const N={[Na]:t.FUNC_ADD,[OD]:t.FUNC_SUBTRACT,[ND]:t.FUNC_REVERSE_SUBTRACT};if(r)N[r_]=t.MIN,N[i_]=t.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(N[r_]=C.MIN_EXT,N[i_]=C.MAX_EXT)}const Lt={[UD]:t.ZERO,[FD]:t.ONE,[kD]:t.SRC_COLOR,[LM]:t.SRC_ALPHA,[WD]:t.SRC_ALPHA_SATURATE,[GD]:t.DST_COLOR,[BD]:t.DST_ALPHA,[zD]:t.ONE_MINUS_SRC_COLOR,[IM]:t.ONE_MINUS_SRC_ALPHA,[VD]:t.ONE_MINUS_DST_COLOR,[HD]:t.ONE_MINUS_DST_ALPHA};function we(C,ae,H,ne,le,je,ut,mt){if(C===_i){d===!0&&(Ue(t.BLEND),d=!1);return}if(d===!1&&(_e(t.BLEND),d=!0),C!==DD){if(C!==v||mt!==S){if((g!==Na||A!==Na)&&(t.blendEquation(t.FUNC_ADD),g=Na,A=Na),mt)switch(C){case oo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case e_:t.blendFunc(t.ONE,t.ONE);break;case t_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case n_:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case oo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case e_:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case t_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case n_:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}x=null,M=null,R=null,P=null,v=C,S=mt}return}le=le||ae,je=je||H,ut=ut||ne,(ae!==g||le!==A)&&(t.blendEquationSeparate(N[ae],N[le]),g=ae,A=le),(H!==x||ne!==M||je!==R||ut!==P)&&(t.blendFuncSeparate(Lt[H],Lt[ne],Lt[je],Lt[ut]),x=H,M=ne,R=je,P=ut),v=C,S=!1}function Fe(C,ae){C.side===Pr?Ue(t.CULL_FACE):_e(t.CULL_FACE);let H=C.side===un;ae&&(H=!H),Ae(H),C.blending===oo&&C.transparent===!1?we(_i):we(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),s.setMask(C.colorWrite);const ne=C.stencilWrite;u.setTest(ne),ne&&(u.setMask(C.stencilWriteMask),u.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),u.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Le(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):Ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(C){T!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),T=C)}function Qe(C){C!==PD?(_e(t.CULL_FACE),C!==X&&(C===J0?t.cullFace(t.BACK):C===LD?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ue(t.CULL_FACE),X=C}function He(C){C!==q&&(K&&t.lineWidth(C),q=C)}function Le(C,ae,H){C?(_e(t.POLYGON_OFFSET_FILL),(O!==ae||F!==H)&&(t.polygonOffset(ae,H),O=ae,F=H)):Ue(t.POLYGON_OFFSET_FILL)}function qe(C){C?_e(t.SCISSOR_TEST):Ue(t.SCISSOR_TEST)}function It(C){C===void 0&&(C=t.TEXTURE0+G-1),B!==C&&(t.activeTexture(C),B=C)}function zt(C,ae,H){H===void 0&&(B===null?H=t.TEXTURE0+G-1:H=B);let ne=k[H];ne===void 0&&(ne={type:void 0,texture:void 0},k[H]=ne),(ne.type!==C||ne.texture!==ae)&&(B!==H&&(t.activeTexture(H),B=H),t.bindTexture(C,ae||ue[C]),ne.type=C,ne.texture=ae)}function b(){const C=k[B];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function E(){try{t.compressedTexImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{t.compressedTexImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{t.texSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{t.texStorage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(C){Q.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),Q.copy(C))}function me(C){Z.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),Z.copy(C))}function ve(C,ae){let H=f.get(ae);H===void 0&&(H=new WeakMap,f.set(ae,H));let ne=H.get(C);ne===void 0&&(ne=t.getUniformBlockIndex(ae,C.name),H.set(C,ne))}function ke(C,ae){const ne=f.get(ae).get(C);c.get(ae)!==ne&&(t.uniformBlockBinding(ae,ne,C.__bindingPointIndex),c.set(ae,ne))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),r===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},B=null,k={},p={},_=new WeakMap,y=[],m=null,d=!1,v=null,g=null,x=null,M=null,A=null,R=null,P=null,S=!1,T=null,X=null,q=null,O=null,F=null,Q.set(0,0,t.canvas.width,t.canvas.height),Z.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:_e,disable:Ue,bindFramebuffer:be,drawBuffers:Tt,useProgram:Ve,setBlending:we,setMaterial:Fe,setFlipSided:Ae,setCullFace:Qe,setLineWidth:He,setPolygonOffset:Le,setScissorTest:qe,activeTexture:It,bindTexture:zt,unbindTexture:b,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:xe,texImage3D:Se,updateUBOMapping:ve,uniformBlockBinding:ke,texStorage2D:se,texStorage3D:Y,texSubImage2D:ee,texSubImage3D:te,compressedTexSubImage2D:oe,compressedTexSubImage3D:ye,scissor:Me,viewport:me,reset:Ke}}function M4(t,e,n,r,i,a,o){const s=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,c=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let y;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,E){return d?new OffscreenCanvas(b,E):ks("canvas")}function g(b,E,$,ee){let te=1;if((b.width>ee||b.height>ee)&&(te=ee/Math.max(b.width,b.height)),te<1||E===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const oe=E?rp:Math.floor,ye=oe(te*b.width),se=oe(te*b.height);y===void 0&&(y=v(ye,se));const Y=$?v(ye,se):y;return Y.width=ye,Y.height=se,Y.getContext("2d").drawImage(b,0,0,ye,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ye+"x"+se+")."),Y}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function x(b){return L_(b.width)&&L_(b.height)}function M(b){return s?!1:b.wrapS!==qn||b.wrapT!==qn||b.minFilter!==Kt&&b.minFilter!==Cn}function A(b,E){return b.generateMipmaps&&E&&b.minFilter!==Kt&&b.minFilter!==Cn}function R(b){t.generateMipmap(b)}function P(b,E,$,ee,te=!1){if(s===!1)return E;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let oe=E;return E===t.RED&&($===t.FLOAT&&(oe=t.R32F),$===t.HALF_FLOAT&&(oe=t.R16F),$===t.UNSIGNED_BYTE&&(oe=t.R8)),E===t.RG&&($===t.FLOAT&&(oe=t.RG32F),$===t.HALF_FLOAT&&(oe=t.RG16F),$===t.UNSIGNED_BYTE&&(oe=t.RG8)),E===t.RGBA&&($===t.FLOAT&&(oe=t.RGBA32F),$===t.HALF_FLOAT&&(oe=t.RGBA16F),$===t.UNSIGNED_BYTE&&(oe=ee===De&&te===!1?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)),(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function S(b,E,$){return A(b,$)===!0||b.isFramebufferTexture&&b.minFilter!==Kt&&b.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function T(b){return b===Kt||b===a_||b===ld?t.NEAREST:t.LINEAR}function X(b){const E=b.target;E.removeEventListener("dispose",X),O(E),E.isVideoTexture&&_.delete(E)}function q(b){const E=b.target;E.removeEventListener("dispose",q),G(E)}function O(b){const E=r.get(b);if(E.__webglInit===void 0)return;const $=b.source,ee=m.get($);if(ee){const te=ee[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&F(b),Object.keys(ee).length===0&&m.delete($)}r.remove(b)}function F(b){const E=r.get(b);t.deleteTexture(E.__webglTexture);const $=b.source,ee=m.get($);delete ee[E.__cacheKey],o.memory.textures--}function G(b){const E=b.texture,$=r.get(b),ee=r.get(E);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)t.deleteFramebuffer($.__webglFramebuffer[te]),$.__webglDepthbuffer&&t.deleteRenderbuffer($.__webglDepthbuffer[te]);else{if(t.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&t.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&t.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let te=0;te<$.__webglColorRenderbuffer.length;te++)$.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer($.__webglColorRenderbuffer[te]);$.__webglDepthRenderbuffer&&t.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,oe=E.length;te<oe;te++){const ye=r.get(E[te]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),r.remove(E[te])}r.remove(E),r.remove(b)}let K=0;function V(){K=0}function L(){const b=K;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),K+=1,b}function B(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function k(b,E){const $=r.get(b);if(b.isVideoTexture&&It(b),b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be($,b,E);return}}n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+E)}function ie(b,E){const $=r.get(b);if(b.version>0&&$.__version!==b.version){be($,b,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+E)}function I(b,E){const $=r.get(b);if(b.version>0&&$.__version!==b.version){be($,b,E);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+E)}function Q(b,E){const $=r.get(b);if(b.version>0&&$.__version!==b.version){Tt($,b,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+E)}const Z={[Jh]:t.REPEAT,[qn]:t.CLAMP_TO_EDGE,[ep]:t.MIRRORED_REPEAT},ce={[Kt]:t.NEAREST,[a_]:t.NEAREST_MIPMAP_NEAREST,[ld]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[aO]:t.LINEAR_MIPMAP_NEAREST,[Us]:t.LINEAR_MIPMAP_LINEAR},ue={[xO]:t.NEVER,[AO]:t.ALWAYS,[SO]:t.LESS,[MO]:t.LEQUAL,[EO]:t.EQUAL,[bO]:t.GEQUAL,[wO]:t.GREATER,[TO]:t.NOTEQUAL};function _e(b,E,$){if($?(t.texParameteri(b,t.TEXTURE_WRAP_S,Z[E.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Z[E.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,Z[E.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,ce[E.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ce[E.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==qn||E.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,T(E.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==Kt&&E.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Kt||E.minFilter!==ld&&E.minFilter!==Us||E.type===li&&e.has("OES_texture_float_linear")===!1||s===!1&&E.type===Fs&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||r.get(E).__currentAnisotropy)&&(t.texParameterf(b,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy)}}function Ue(b,E){let $=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",X));const ee=E.source;let te=m.get(ee);te===void 0&&(te={},m.set(ee,te));const oe=B(E);if(oe!==b.__cacheKey){te[oe]===void 0&&(te[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,$=!0),te[oe].usedTimes++;const ye=te[b.__cacheKey];ye!==void 0&&(te[b.__cacheKey].usedTimes--,ye.usedTimes===0&&F(E)),b.__cacheKey=oe,b.__webglTexture=te[oe].texture}return $}function be(b,E,$){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const te=Ue(b,E),oe=E.source;n.bindTexture(ee,b.__webglTexture,t.TEXTURE0+$);const ye=r.get(oe);if(oe.version!==ye.__version||te===!0){n.activeTexture(t.TEXTURE0+$),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const se=M(E)&&x(E.image)===!1;let Y=g(E.image,se,!1,c);Y=zt(E,Y);const xe=x(Y)||s,Se=a.convert(E.format,E.colorSpace);let Me=a.convert(E.type),me=P(E.internalFormat,Se,Me,E.colorSpace);_e(ee,E,xe);let ve;const ke=E.mipmaps,Ke=s&&E.isVideoTexture!==!0,C=ye.__version===void 0||te===!0,ae=S(E,Y,xe);if(E.isDepthTexture)me=t.DEPTH_COMPONENT,s?E.type===li?me=t.DEPTH_COMPONENT32F:E.type===si?me=t.DEPTH_COMPONENT24:E.type===Ki?me=t.DEPTH24_STENCIL8:me=t.DEPTH_COMPONENT16:E.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Zi&&me===t.DEPTH_COMPONENT&&E.type!==Km&&E.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=si,Me=a.convert(E.type)),E.format===xo&&me===t.DEPTH_COMPONENT&&(me=t.DEPTH_STENCIL,E.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ki,Me=a.convert(E.type))),C&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,me,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,me,Y.width,Y.height,0,Se,Me,null));else if(E.isDataTexture)if(ke.length>0&&xe){Ke&&C&&n.texStorage2D(t.TEXTURE_2D,ae,me,ke[0].width,ke[0].height);for(let H=0,ne=ke.length;H<ne;H++)ve=ke[H],Ke?n.texSubImage2D(t.TEXTURE_2D,H,0,0,ve.width,ve.height,Se,Me,ve.data):n.texImage2D(t.TEXTURE_2D,H,me,ve.width,ve.height,0,Se,Me,ve.data);E.generateMipmaps=!1}else Ke?(C&&n.texStorage2D(t.TEXTURE_2D,ae,me,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,Se,Me,Y.data)):n.texImage2D(t.TEXTURE_2D,0,me,Y.width,Y.height,0,Se,Me,Y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,me,ke[0].width,ke[0].height,Y.depth);for(let H=0,ne=ke.length;H<ne;H++)ve=ke[H],E.format!==Kn?Se!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,Y.depth,Se,ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,me,ve.width,ve.height,Y.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,Y.depth,Se,Me,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,me,ve.width,ve.height,Y.depth,0,Se,Me,ve.data)}else{Ke&&C&&n.texStorage2D(t.TEXTURE_2D,ae,me,ke[0].width,ke[0].height);for(let H=0,ne=ke.length;H<ne;H++)ve=ke[H],E.format!==Kn?Se!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,ve.width,ve.height,Se,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,H,me,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,H,0,0,ve.width,ve.height,Se,Me,ve.data):n.texImage2D(t.TEXTURE_2D,H,me,ve.width,ve.height,0,Se,Me,ve.data)}else if(E.isDataArrayTexture)Ke?(C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,me,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Se,Me,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,Y.width,Y.height,Y.depth,0,Se,Me,Y.data);else if(E.isData3DTexture)Ke?(C&&n.texStorage3D(t.TEXTURE_3D,ae,me,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Se,Me,Y.data)):n.texImage3D(t.TEXTURE_3D,0,me,Y.width,Y.height,Y.depth,0,Se,Me,Y.data);else if(E.isFramebufferTexture){if(C)if(Ke)n.texStorage2D(t.TEXTURE_2D,ae,me,Y.width,Y.height);else{let H=Y.width,ne=Y.height;for(let le=0;le<ae;le++)n.texImage2D(t.TEXTURE_2D,le,me,H,ne,0,Se,Me,null),H>>=1,ne>>=1}}else if(ke.length>0&&xe){Ke&&C&&n.texStorage2D(t.TEXTURE_2D,ae,me,ke[0].width,ke[0].height);for(let H=0,ne=ke.length;H<ne;H++)ve=ke[H],Ke?n.texSubImage2D(t.TEXTURE_2D,H,0,0,Se,Me,ve):n.texImage2D(t.TEXTURE_2D,H,me,Se,Me,ve);E.generateMipmaps=!1}else Ke?(C&&n.texStorage2D(t.TEXTURE_2D,ae,me,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Me,Y)):n.texImage2D(t.TEXTURE_2D,0,me,Se,Me,Y);A(E,xe)&&R(ee),ye.__version=oe.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Tt(b,E,$){if(E.image.length!==6)return;const ee=Ue(b,E),te=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+$);const oe=r.get(te);if(te.version!==oe.__version||ee===!0){n.activeTexture(t.TEXTURE0+$),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ye=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,Y=[];for(let H=0;H<6;H++)!ye&&!se?Y[H]=g(E.image[H],!1,!0,u):Y[H]=se?E.image[H].image:E.image[H],Y[H]=zt(E,Y[H]);const xe=Y[0],Se=x(xe)||s,Me=a.convert(E.format,E.colorSpace),me=a.convert(E.type),ve=P(E.internalFormat,Me,me,E.colorSpace),ke=s&&E.isVideoTexture!==!0,Ke=oe.__version===void 0||ee===!0;let C=S(E,xe,Se);_e(t.TEXTURE_CUBE_MAP,E,Se);let ae;if(ye){ke&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,C,ve,xe.width,xe.height);for(let H=0;H<6;H++){ae=Y[H].mipmaps;for(let ne=0;ne<ae.length;ne++){const le=ae[ne];E.format!==Kn?Me!==null?ke?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne,0,0,le.width,le.height,Me,le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne,ve,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne,0,0,le.width,le.height,Me,me,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne,ve,le.width,le.height,0,Me,me,le.data)}}}else{ae=E.mipmaps,ke&&Ke&&(ae.length>0&&C++,n.texStorage2D(t.TEXTURE_CUBE_MAP,C,ve,Y[0].width,Y[0].height));for(let H=0;H<6;H++)if(se){ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Y[H].width,Y[H].height,Me,me,Y[H].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,ve,Y[H].width,Y[H].height,0,Me,me,Y[H].data);for(let ne=0;ne<ae.length;ne++){const je=ae[ne].image[H].image;ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne+1,0,0,je.width,je.height,Me,me,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne+1,ve,je.width,je.height,0,Me,me,je.data)}}else{ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Me,me,Y[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,ve,Me,me,Y[H]);for(let ne=0;ne<ae.length;ne++){const le=ae[ne];ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne+1,0,0,Me,me,le.image[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne+1,ve,Me,me,le.image[H])}}}A(E,Se)&&R(t.TEXTURE_CUBE_MAP),oe.__version=te.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Ve(b,E,$,ee,te){const oe=a.convert($.format,$.colorSpace),ye=a.convert($.type),se=P($.internalFormat,oe,ye,$.colorSpace);r.get(E).__hasExternalTextures||(te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,0,se,E.width,E.height,E.depth,0,oe,ye,null):n.texImage2D(te,0,se,E.width,E.height,0,oe,ye,null)),n.bindFramebuffer(t.FRAMEBUFFER,b),qe(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,te,r.get($).__webglTexture,0,Le(E)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,te,r.get($).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(b,E,$){if(t.bindRenderbuffer(t.RENDERBUFFER,b),E.depthBuffer&&!E.stencilBuffer){let ee=t.DEPTH_COMPONENT16;if($||qe(E)){const te=E.depthTexture;te&&te.isDepthTexture&&(te.type===li?ee=t.DEPTH_COMPONENT32F:te.type===si&&(ee=t.DEPTH_COMPONENT24));const oe=Le(E);qe(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,ee,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,ee,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(E.depthBuffer&&E.stencilBuffer){const ee=Le(E);$&&qe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,E.width,E.height):qe(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const ee=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0;te<ee.length;te++){const oe=ee[te],ye=a.convert(oe.format,oe.colorSpace),se=a.convert(oe.type),Y=P(oe.internalFormat,ye,se,oe.colorSpace),xe=Le(E);$&&qe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,Y,E.width,E.height):qe(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,Y,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Y,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Lt(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const ee=r.get(E.depthTexture).__webglTexture,te=Le(E);if(E.depthTexture.format===Zi)qe(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(E.depthTexture.format===xo)qe(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function we(b){const E=r.get(b),$=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Lt(E.__webglFramebuffer,b)}else if($){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=t.createRenderbuffer(),N(E.__webglDepthbuffer[ee],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),N(E.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(b,E,$){const ee=r.get(b);E!==void 0&&Ve(ee.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),$!==void 0&&we(b)}function Ae(b){const E=b.texture,$=r.get(b),ee=r.get(E);b.addEventListener("dispose",q),b.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,o.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,oe=b.isWebGLMultipleRenderTargets===!0,ye=x(b)||s;if(te){$.__webglFramebuffer=[];for(let se=0;se<6;se++)$.__webglFramebuffer[se]=t.createFramebuffer()}else{if($.__webglFramebuffer=t.createFramebuffer(),oe)if(i.drawBuffers){const se=b.texture;for(let Y=0,xe=se.length;Y<xe;Y++){const Se=r.get(se[Y]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&b.samples>0&&qe(b)===!1){const se=oe?E:[E];$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Y=0;Y<se.length;Y++){const xe=se[Y];$.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[Y]);const Se=a.convert(xe.format,xe.colorSpace),Me=a.convert(xe.type),me=P(xe.internalFormat,Se,Me,xe.colorSpace,b.isXRRenderTarget===!0),ve=Le(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,me,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,$.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),N($.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),_e(t.TEXTURE_CUBE_MAP,E,ye);for(let se=0;se<6;se++)Ve($.__webglFramebuffer[se],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se);A(E,ye)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){const se=b.texture;for(let Y=0,xe=se.length;Y<xe;Y++){const Se=se[Y],Me=r.get(Se);n.bindTexture(t.TEXTURE_2D,Me.__webglTexture),_e(t.TEXTURE_2D,Se,ye),Ve($.__webglFramebuffer,b,Se,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D),A(Se,ye)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(s?se=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(se,ee.__webglTexture),_e(se,E,ye),Ve($.__webglFramebuffer,b,E,t.COLOR_ATTACHMENT0,se),A(E,ye)&&R(se),n.unbindTexture()}b.depthBuffer&&we(b)}function Qe(b){const E=x(b)||s,$=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ee=0,te=$.length;ee<te;ee++){const oe=$[ee];if(A(oe,E)){const ye=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,se=r.get(oe).__webglTexture;n.bindTexture(ye,se),R(ye),n.unbindTexture()}}}function He(b){if(s&&b.samples>0&&qe(b)===!1){const E=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],$=b.width,ee=b.height;let te=t.COLOR_BUFFER_BIT;const oe=[],ye=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=r.get(b),Y=b.isWebGLMultipleRenderTargets===!0;if(Y)for(let xe=0;xe<E.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){oe.push(t.COLOR_ATTACHMENT0+xe),b.depthBuffer&&oe.push(ye);const Se=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Se===!1&&(b.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[xe]),Se===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),Y){const Me=r.get(E[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Me,0)}t.blitFramebuffer(0,0,$,ee,0,0,$,ee,te,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,oe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let xe=0;xe<E.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,se.__webglColorRenderbuffer[xe]);const Se=r.get(E[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Le(b){return Math.min(f,b.samples)}function qe(b){const E=r.get(b);return s&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function It(b){const E=o.render.frame;_.get(b)!==E&&(_.set(b,E),b.update())}function zt(b,E){const $=b.colorSpace,ee=b.format,te=b.type;return b.isCompressedTexture===!0||b.format===tp||$!==gr&&$!==Ji&&($===De?s===!1?e.has("EXT_sRGB")===!0&&ee===Kn?(b.format=tp,b.minFilter=Cn,b.generateMipmaps=!1):E=WM.sRGBToLinear(E):(ee!==Kn||te!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}this.allocateTextureUnit=L,this.resetTextureUnits=V,this.setTexture2D=k,this.setTexture2DArray=ie,this.setTexture3D=I,this.setTextureCube=Q,this.rebindTextures=Fe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=qe}function w4(t,e,n){const r=n.isWebGL2;function i(a,o=Ji){let s;if(a===yi)return t.UNSIGNED_BYTE;if(a===UM)return t.UNSIGNED_SHORT_4_4_4_4;if(a===FM)return t.UNSIGNED_SHORT_5_5_5_1;if(a===oO)return t.BYTE;if(a===sO)return t.SHORT;if(a===Km)return t.UNSIGNED_SHORT;if(a===NM)return t.INT;if(a===si)return t.UNSIGNED_INT;if(a===li)return t.FLOAT;if(a===Fs)return r?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===lO)return t.ALPHA;if(a===Kn)return t.RGBA;if(a===uO)return t.LUMINANCE;if(a===cO)return t.LUMINANCE_ALPHA;if(a===Zi)return t.DEPTH_COMPONENT;if(a===xo)return t.DEPTH_STENCIL;if(a===tp)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===fO)return t.RED;if(a===kM)return t.RED_INTEGER;if(a===dO)return t.RG;if(a===zM)return t.RG_INTEGER;if(a===BM)return t.RGBA_INTEGER;if(a===ud||a===cd||a===fd||a===dd)if(o===De)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===ud)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===cd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===fd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===dd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===ud)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===cd)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===fd)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===dd)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===o_||a===s_||a===l_||a===u_)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===o_)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===s_)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===l_)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===u_)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===hO)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===c_||a===f_)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===c_)return o===De?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===f_)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===d_||a===h_||a===p_||a===m_||a===v_||a===g_||a===__||a===y_||a===x_||a===S_||a===E_||a===M_||a===w_||a===T_)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===d_)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===h_)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===p_)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===m_)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===v_)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===g_)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===__)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===y_)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===x_)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===S_)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===E_)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===M_)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===w_)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===T_)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===hd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===hd)return o===De?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===pO||a===b_||a===A_||a===R_)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===hd)return s.COMPRESSED_RED_RGTC1_EXT;if(a===b_)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===A_)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===R_)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ki?r?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:i}}class T4 extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pu extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b4={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,a=null,o=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,r),d=this._getHandJoint(u,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(b4)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new pu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class A4 extends cn{constructor(e,n,r,i,a,o,s,l,u,c){if(c=c!==void 0?c:Zi,c!==Zi&&c!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&c===Zi&&(r=si),r===void 0&&c===xo&&(r=Ki),super(null,i,a,o,s,l,c,r,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class R4 extends Io{constructor(e,n){super();const r=this;let i=null,a=1,o=null,s="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const y=n.getContextAttributes();let m=null,d=null;const v=[],g=[];let x=null;const M=new Pn;M.layers.enable(1),M.viewport=new Ot;const A=new Pn;A.layers.enable(2),A.viewport=new Ot;const R=[M,A],P=new T4;P.layers.enable(1),P.layers.enable(2);let S=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(I){x=I},this.getController=function(I){let Q=v[I];return Q===void 0&&(Q=new Fd,v[I]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(I){let Q=v[I];return Q===void 0&&(Q=new Fd,v[I]=Q),Q.getGripSpace()},this.getHand=function(I){let Q=v[I];return Q===void 0&&(Q=new Fd,v[I]=Q),Q.getHandSpace()};function X(I){const Q=g.indexOf(I.inputSource);if(Q===-1)return;const Z=v[Q];Z!==void 0&&(Z.update(I.inputSource,I.frame,u||o),Z.dispatchEvent({type:I.type,data:I.inputSource}))}function q(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",O);for(let I=0;I<v.length;I++){const Q=g[I];Q!==null&&(g[I]=null,v[I].disconnect(Q))}S=null,T=null,e.setRenderTarget(m),p=null,h=null,f=null,i=null,d=null,ie.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){a=I,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){s=I,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(I){u=I},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",q),i.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await n.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,n,Q),i.updateRenderState({baseLayer:p}),d=new la(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Q=null,Z=null,ce=null;y.depth&&(ce=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=y.stencil?xo:Zi,Z=y.stencil?Ki:si);const ue={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:a};f=new XRWebGLBinding(i,n),h=f.createProjectionLayer(ue),i.updateRenderState({layers:[h]}),d=new la(h.textureWidth,h.textureHeight,{format:Kn,type:yi,depthTexture:new A4(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const _e=e.properties.get(d);_e.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(s),ie.setContext(i),ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(I){for(let Q=0;Q<I.removed.length;Q++){const Z=I.removed[Q],ce=g.indexOf(Z);ce>=0&&(g[ce]=null,v[ce].disconnect(Z))}for(let Q=0;Q<I.added.length;Q++){const Z=I.added[Q];let ce=g.indexOf(Z);if(ce===-1){for(let _e=0;_e<v.length;_e++)if(_e>=g.length){g.push(Z),ce=_e;break}else if(g[_e]===null){g[_e]=Z,ce=_e;break}if(ce===-1)break}const ue=v[ce];ue&&ue.connect(Z)}}const F=new z,G=new z;function K(I,Q,Z){F.setFromMatrixPosition(Q.matrixWorld),G.setFromMatrixPosition(Z.matrixWorld);const ce=F.distanceTo(G),ue=Q.projectionMatrix.elements,_e=Z.projectionMatrix.elements,Ue=ue[14]/(ue[10]-1),be=ue[14]/(ue[10]+1),Tt=(ue[9]+1)/ue[5],Ve=(ue[9]-1)/ue[5],N=(ue[8]-1)/ue[0],Lt=(_e[8]+1)/_e[0],we=Ue*N,Fe=Ue*Lt,Ae=ce/(-N+Lt),Qe=Ae*-N;Q.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Qe),I.translateZ(Ae),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const He=Ue+Ae,Le=be+Ae,qe=we-Qe,It=Fe+(ce-Qe),zt=Tt*be/Le*He,b=Ve*be/Le*He;I.projectionMatrix.makePerspective(qe,It,zt,b,He,Le),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function V(I,Q){Q===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(Q.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCameraXR=function(I){if(i===null)return I;x&&(I=x),P.near=A.near=M.near=I.near,P.far=A.far=M.far=I.far,(S!==P.near||T!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),S=P.near,T=P.far);const Q=I.parent,Z=P.cameras;V(P,Q);for(let ce=0;ce<Z.length;ce++)V(Z[ce],Q);return Z.length===2?K(P,M,A):P.projectionMatrix.copy(M.projectionMatrix),x&&L(P,Q),P};function L(I,Q){const Z=x;Q===null?Z.matrix.copy(I.matrixWorld):(Z.matrix.copy(Q.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(I.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0);const ce=Z.children;for(let ue=0,_e=ce.length;ue<_e;ue++)ce[ue].updateMatrixWorld(!0);Z.projectionMatrix.copy(I.projectionMatrix),Z.projectionMatrixInverse.copy(I.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=np*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(I){l=I,h!==null&&(h.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)};let B=null;function k(I,Q){if(c=Q.getViewerPose(u||o),_=Q,c!==null){const Z=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ce=!1;Z.length!==P.cameras.length&&(P.cameras.length=0,ce=!0);for(let ue=0;ue<Z.length;ue++){const _e=Z[ue];let Ue=null;if(p!==null)Ue=p.getViewport(_e);else{const Tt=f.getViewSubImage(h,_e);Ue=Tt.viewport,ue===0&&(e.setRenderTargetTextures(d,Tt.colorTexture,h.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(d))}let be=R[ue];be===void 0&&(be=new Pn,be.layers.enable(ue),be.viewport=new Ot,R[ue]=be),be.matrix.fromArray(_e.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(_e.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ue===0&&(P.matrix.copy(be.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ce===!0&&P.cameras.push(be)}}for(let Z=0;Z<v.length;Z++){const ce=g[Z],ue=v[Z];ce!==null&&ue!==void 0&&ue.update(ce,Q,u||o)}B&&B(I,Q),Q.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Q}),_=null}const ie=new t1;ie.setAnimationLoop(k),this.setAnimationLoop=function(I){B=I},this.dispose=function(){}}}function C4(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,ZM(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,v,g,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),f(m,d)):d.isMeshPhongMaterial?(a(m,d),c(m,d)):d.isMeshStandardMaterial?(a(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(a(m,d),_(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),y(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&s(m,d)):d.isPointsMaterial?l(m,d,v,g):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===un&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===un&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const g=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*g,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function s(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=g*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function P4(t,e,n,r){let i={},a={},o=[];const s=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const x=g.program;r.uniformBlockBinding(v,x)}function u(v,g){let x=i[v.id];x===void 0&&(_(v),x=c(v),i[v.id]=x,v.addEventListener("dispose",m));const M=g.program;r.updateUBOMapping(v,M);const A=e.render.frame;a[v.id]!==A&&(h(v),a[v.id]=A)}function c(v){const g=f();v.__bindingPointIndex=g;const x=t.createBuffer(),M=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,M,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function f(){for(let v=0;v<s;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=i[v.id],x=v.uniforms,M=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,R=x.length;A<R;A++){const P=x[A];if(p(P,A,M)===!0){const S=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let q=0;q<T.length;q++){const O=T[q],F=y(O);typeof O=="number"?(P.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,S+X,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=O.elements[0],P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=O.elements[0],P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=O.elements[0]):(O.toArray(P.__data,X),X+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,x){const M=v.value;if(x[g]===void 0){if(typeof M=="number")x[g]=M;else{const A=Array.isArray(M)?M:[M],R=[];for(let P=0;P<A.length;P++)R.push(A[P].clone());x[g]=R}return!0}else if(typeof M=="number"){if(x[g]!==M)return x[g]=M,!0}else{const A=Array.isArray(x[g])?x[g]:[x[g]],R=Array.isArray(M)?M:[M];for(let P=0;P<A.length;P++){const S=A[P];if(S.equals(R[P])===!1)return S.copy(R[P]),!0}}return!1}function _(v){const g=v.uniforms;let x=0;const M=16;let A=0;for(let R=0,P=g.length;R<P;R++){const S=g[R],T={boundary:0,storage:0},X=Array.isArray(S.value)?S.value:[S.value];for(let q=0,O=X.length;q<O;q++){const F=X[q],G=y(F);T.boundary+=G.boundary,T.storage+=G.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,R>0){A=x%M;const q=M-A;A!==0&&q-T.boundary<0&&(x+=M-A,S.__offset=x)}x+=T.storage}return A=x%M,A>0&&(x+=M-A),v.__size=x,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(i[g.id]),delete i[g.id],delete a[g.id]}function d(){for(const v in i)t.deleteBuffer(i[v]);o=[],i={},a={}}return{bind:l,update:u,dispose:d}}function L4(){const t=ks("canvas");return t.style.display="block",t}class o1{constructor(e={}){const{canvas:n=L4(),context:r=null,depth:i=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;r!==null?h=r.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=De,this.useLegacyLights=!0,this.toneMapping=Nr,this.toneMappingExposure=1;const g=this;let x=!1,M=0,A=0,R=null,P=-1,S=null;const T=new Ot,X=new Ot;let q=null;const O=new nt(0);let F=0,G=n.width,K=n.height,V=1,L=null,B=null;const k=new Ot(0,0,G,K),ie=new Ot(0,0,G,K);let I=!1;const Q=new e1;let Z=!1,ce=!1,ue=null;const _e=new Ut,Ue=new Ye,be=new z,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return R===null?V:1}let N=r;function Lt(w,U){for(let W=0;W<w.length;W++){const D=w[W],j=n.getContext(D,U);if(j!==null)return j}return null}try{const w={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qm}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",H,!1),n.addEventListener("webglcontextcreationerror",ne,!1),N===null){const U=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&U.shift(),N=Lt(U,w),N===null)throw Lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let we,Fe,Ae,Qe,He,Le,qe,It,zt,b,E,$,ee,te,oe,ye,se,Y,xe,Se,Me,me,ve,ke;function Ke(){we=new GF(N),Fe=new NF(N,we,e),we.init(Fe),me=new w4(N,we,Fe),Ae=new E4(N,we,Fe),Qe=new $F(N),He=new l4,Le=new M4(N,we,Ae,He,Fe,me,Qe),qe=new FF(g),It=new HF(g),zt=new nN(N,Fe),ve=new DF(N,we,zt,Fe),b=new VF(N,zt,Qe,ve),E=new qF(N,b,zt,Qe),xe=new YF(N,Fe,Le),ye=new UF(He),$=new s4(g,qe,It,we,Fe,ve,ye),ee=new C4(g,He),te=new c4,oe=new v4(we,Fe),Y=new IF(g,qe,It,Ae,E,h,l),se=new S4(g,E,Fe),ke=new P4(N,Qe,Fe,Ae),Se=new OF(N,we,Qe,Fe),Me=new WF(N,we,Qe,Fe),Qe.programs=$.programs,g.capabilities=Fe,g.extensions=we,g.properties=He,g.renderLists=te,g.shadowMap=se,g.state=Ae,g.info=Qe}Ke();const C=new R4(g,N);this.xr=C,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=we.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=we.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(G,K,!1))},this.getSize=function(w){return w.set(G,K)},this.setSize=function(w,U,W=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,K=U,n.width=Math.floor(w*V),n.height=Math.floor(U*V),W===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(G*V,K*V).floor()},this.setDrawingBufferSize=function(w,U,W){G=w,K=U,V=W,n.width=Math.floor(w*W),n.height=Math.floor(U*W),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(k)},this.setViewport=function(w,U,W,D){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,U,W,D),Ae.viewport(T.copy(k).multiplyScalar(V).floor())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,U,W,D){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,U,W,D),Ae.scissor(X.copy(ie).multiplyScalar(V).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(w){Ae.setScissorTest(I=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(w=!0,U=!0,W=!0){let D=0;if(w){let j=!1;if(R!==null){const he=R.texture.format;j=he===BM||he===zM||he===kM}if(j){const he=R.texture.type,Ee=he===yi||he===si||he===Km||he===Ki||he===UM||he===FM,Te=Y.getClearColor(),Re=Y.getClearAlpha(),ze=Te.r,Ce=Te.g,Ie=Te.b,Je=He.get(R).__webglFramebuffer;Ee?(p[0]=ze,p[1]=Ce,p[2]=Ie,p[3]=Re,N.clearBufferuiv(N.COLOR,Je,p)):(_[0]=ze,_[1]=Ce,_[2]=Ie,_[3]=Re,N.clearBufferiv(N.COLOR,Je,_))}else D|=N.COLOR_BUFFER_BIT}U&&(D|=N.DEPTH_BUFFER_BIT),W&&(D|=N.STENCIL_BUFFER_BIT),N.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",H,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),te.dispose(),oe.dispose(),He.dispose(),qe.dispose(),It.dispose(),E.dispose(),ve.dispose(),ke.dispose(),$.dispose(),C.dispose(),C.removeEventListener("sessionstart",ct),C.removeEventListener("sessionend",rr),ue&&(ue.dispose(),ue=null),jt.stop()};function ae(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=Qe.autoReset,U=se.enabled,W=se.autoUpdate,D=se.needsUpdate,j=se.type;Ke(),Qe.autoReset=w,se.enabled=U,se.autoUpdate=W,se.needsUpdate=D,se.type=j}function ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function le(w){const U=w.target;U.removeEventListener("dispose",le),je(U)}function je(w){ut(w),He.remove(w)}function ut(w){const U=He.get(w).programs;U!==void 0&&(U.forEach(function(W){$.releaseProgram(W)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,W,D,j,he){U===null&&(U=Tt);const Ee=j.isMesh&&j.matrixWorld.determinant()<0,Te=V1(w,U,W,D,j);Ae.setMaterial(D,Ee);let Re=W.index,ze=1;D.wireframe===!0&&(Re=b.getWireframeAttribute(W),ze=2);const Ce=W.drawRange,Ie=W.attributes.position;let Je=Ce.start*ze,ht=(Ce.start+Ce.count)*ze;he!==null&&(Je=Math.max(Je,he.start*ze),ht=Math.min(ht,(he.start+he.count)*ze)),Re!==null?(Je=Math.max(Je,0),ht=Math.min(ht,Re.count)):Ie!=null&&(Je=Math.max(Je,0),ht=Math.min(ht,Ie.count));const kn=ht-Je;if(kn<0||kn===1/0)return;ve.setup(j,D,Te,W,Re);let yr,vt=Se;if(Re!==null&&(yr=zt.get(Re),vt=Me,vt.setIndex(yr)),j.isMesh)D.wireframe===!0?(Ae.setLineWidth(D.wireframeLinewidth*Ve()),vt.setMode(N.LINES)):vt.setMode(N.TRIANGLES);else if(j.isLine){let We=D.linewidth;We===void 0&&(We=1),Ae.setLineWidth(We*Ve()),j.isLineSegments?vt.setMode(N.LINES):j.isLineLoop?vt.setMode(N.LINE_LOOP):vt.setMode(N.LINE_STRIP)}else j.isPoints?vt.setMode(N.POINTS):j.isSprite&&vt.setMode(N.TRIANGLES);if(j.isInstancedMesh)vt.renderInstances(Je,kn,j.count);else if(W.isInstancedBufferGeometry){const We=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,af=Math.min(W.instanceCount,We);vt.renderInstances(Je,kn,af)}else vt.render(Je,kn)},this.compile=function(w,U){function W(D,j,he){D.transparent===!0&&D.side===Pr&&D.forceSinglePass===!1?(D.side=un,D.needsUpdate=!0,dl(D,j,he),D.side=Ei,D.needsUpdate=!0,dl(D,j,he),D.side=Pr):dl(D,j,he)}m=oe.get(w),m.init(),v.push(m),w.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights(g.useLegacyLights),w.traverse(function(D){const j=D.material;if(j)if(Array.isArray(j))for(let he=0;he<j.length;he++){const Ee=j[he];W(Ee,w,D)}else W(j,w,D)}),v.pop(),m=null};let mt=null;function Pi(w){mt&&mt(w)}function ct(){jt.stop()}function rr(){jt.start()}const jt=new t1;jt.setAnimationLoop(Pi),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(w){mt=w,C.setAnimationLoop(w),w===null?jt.stop():jt.start()},C.addEventListener("sessionstart",ct),C.addEventListener("sessionend",rr),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(U=C.updateCameraXR(U)),w.isScene===!0&&w.onBeforeRender(g,w,U,R),m=oe.get(w,v.length),m.init(),v.push(m),_e.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,Z=ye.init(this.clippingPlanes,ce),y=te.get(w,d.length),y.init(),d.push(y),hv(w,U,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(L,B),Z===!0&&ye.beginShadows();const W=m.state.shadowsArray;if(se.render(W,w,U),Z===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,Y.render(y,w),m.setupLights(g.useLegacyLights),U.isArrayCamera){const D=U.cameras;for(let j=0,he=D.length;j<he;j++){const Ee=D[j];pv(y,w,Ee,Ee.viewport)}}else pv(y,w,U);R!==null&&(Le.updateMultisampleRenderTarget(R),Le.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(g,w,U),ve.resetDefaultState(),P=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function hv(w,U,W,D){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){D&&be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_e);const Ee=E.update(w),Te=w.material;Te.visible&&y.push(w,Ee,Te,W,be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){w.isSkinnedMesh&&w.skeleton.frame!==Qe.render.frame&&(w.skeleton.update(),w.skeleton.frame=Qe.render.frame);const Ee=E.update(w),Te=w.material;if(D&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),be.copy(w.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),be.copy(Ee.boundingSphere.center)),be.applyMatrix4(w.matrixWorld).applyMatrix4(_e)),Array.isArray(Te)){const Re=Ee.groups;for(let ze=0,Ce=Re.length;ze<Ce;ze++){const Ie=Re[ze],Je=Te[Ie.materialIndex];Je&&Je.visible&&y.push(w,Ee,Je,W,be.z,Ie)}}else Te.visible&&y.push(w,Ee,Te,W,be.z,null)}}const he=w.children;for(let Ee=0,Te=he.length;Ee<Te;Ee++)hv(he[Ee],U,W,D)}function pv(w,U,W,D){const j=w.opaque,he=w.transmissive,Ee=w.transparent;m.setupLightsView(W),Z===!0&&ye.setGlobalState(g.clippingPlanes,W),he.length>0&&G1(j,he,U,W),D&&Ae.viewport(T.copy(D)),j.length>0&&fl(j,U,W),he.length>0&&fl(he,U,W),Ee.length>0&&fl(Ee,U,W),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function G1(w,U,W,D){const j=Fe.isWebGL2;ue===null&&(ue=new la(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Fs:yi,minFilter:Us,samples:j&&s===!0?4:0})),g.getDrawingBufferSize(Ue),j?ue.setSize(Ue.x,Ue.y):ue.setSize(rp(Ue.x),rp(Ue.y));const he=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(O),F=g.getClearAlpha(),F<1&&g.setClearColor(16777215,.5),g.clear();const Ee=g.toneMapping;g.toneMapping=Nr,fl(w,W,D),Le.updateMultisampleRenderTarget(ue),Le.updateRenderTargetMipmap(ue);let Te=!1;for(let Re=0,ze=U.length;Re<ze;Re++){const Ce=U[Re],Ie=Ce.object,Je=Ce.geometry,ht=Ce.material,kn=Ce.group;if(ht.side===Pr&&Ie.layers.test(D.layers)){const yr=ht.side;ht.side=un,ht.needsUpdate=!0,mv(Ie,W,D,Je,ht,kn),ht.side=yr,ht.needsUpdate=!0,Te=!0}}Te===!0&&(Le.updateMultisampleRenderTarget(ue),Le.updateRenderTargetMipmap(ue)),g.setRenderTarget(he),g.setClearColor(O,F),g.toneMapping=Ee}function fl(w,U,W){const D=U.isScene===!0?U.overrideMaterial:null;for(let j=0,he=w.length;j<he;j++){const Ee=w[j],Te=Ee.object,Re=Ee.geometry,ze=D===null?Ee.material:D,Ce=Ee.group;Te.layers.test(W.layers)&&mv(Te,U,W,Re,ze,Ce)}}function mv(w,U,W,D,j,he){w.onBeforeRender(g,U,W,D,j,he),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(g,U,W,D,w,he),j.transparent===!0&&j.side===Pr&&j.forceSinglePass===!1?(j.side=un,j.needsUpdate=!0,g.renderBufferDirect(W,U,D,j,w,he),j.side=Ei,j.needsUpdate=!0,g.renderBufferDirect(W,U,D,j,w,he),j.side=Pr):g.renderBufferDirect(W,U,D,j,w,he),w.onAfterRender(g,U,W,D,j,he)}function dl(w,U,W){U.isScene!==!0&&(U=Tt);const D=He.get(w),j=m.state.lights,he=m.state.shadowsArray,Ee=j.state.version,Te=$.getParameters(w,j.state,he,U,W),Re=$.getProgramCacheKey(Te);let ze=D.programs;D.environment=w.isMeshStandardMaterial?U.environment:null,D.fog=U.fog,D.envMap=(w.isMeshStandardMaterial?It:qe).get(w.envMap||D.environment),ze===void 0&&(w.addEventListener("dispose",le),ze=new Map,D.programs=ze);let Ce=ze.get(Re);if(Ce!==void 0){if(D.currentProgram===Ce&&D.lightsStateVersion===Ee)return vv(w,Te),Ce}else Te.uniforms=$.getUniforms(w),w.onBuild(W,Te,g),w.onBeforeCompile(Te,g),Ce=$.acquireProgram(Te,Re),ze.set(Re,Ce),D.uniforms=Te.uniforms;const Ie=D.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=ye.uniform),vv(w,Te),D.needsLights=$1(w),D.lightsStateVersion=Ee,D.needsLights&&(Ie.ambientLightColor.value=j.state.ambient,Ie.lightProbe.value=j.state.probe,Ie.directionalLights.value=j.state.directional,Ie.directionalLightShadows.value=j.state.directionalShadow,Ie.spotLights.value=j.state.spot,Ie.spotLightShadows.value=j.state.spotShadow,Ie.rectAreaLights.value=j.state.rectArea,Ie.ltc_1.value=j.state.rectAreaLTC1,Ie.ltc_2.value=j.state.rectAreaLTC2,Ie.pointLights.value=j.state.point,Ie.pointLightShadows.value=j.state.pointShadow,Ie.hemisphereLights.value=j.state.hemi,Ie.directionalShadowMap.value=j.state.directionalShadowMap,Ie.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ie.spotShadowMap.value=j.state.spotShadowMap,Ie.spotLightMatrix.value=j.state.spotLightMatrix,Ie.spotLightMap.value=j.state.spotLightMap,Ie.pointShadowMap.value=j.state.pointShadowMap,Ie.pointShadowMatrix.value=j.state.pointShadowMatrix);const Je=Ce.getUniforms(),ht=Vu.seqWithValue(Je.seq,Ie);return D.currentProgram=Ce,D.uniformsList=ht,Ce}function vv(w,U){const W=He.get(w);W.outputColorSpace=U.outputColorSpace,W.instancing=U.instancing,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function V1(w,U,W,D,j){U.isScene!==!0&&(U=Tt),Le.resetTextureUnits();const he=U.fog,Ee=D.isMeshStandardMaterial?U.environment:null,Te=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:gr,Re=(D.isMeshStandardMaterial?It:qe).get(D.envMap||Ee),ze=D.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ce=!!W.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Ie=!!W.morphAttributes.position,Je=!!W.morphAttributes.normal,ht=!!W.morphAttributes.color,kn=D.toneMapped?g.toneMapping:Nr,yr=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,vt=yr!==void 0?yr.length:0,We=He.get(D),af=m.state.lights;if(Z===!0&&(ce===!0||w!==S)){const fn=w===S&&D.id===P;ye.setState(D,w,fn)}let bt=!1;D.version===We.__version?(We.needsLights&&We.lightsStateVersion!==af.state.version||We.outputColorSpace!==Te||j.isInstancedMesh&&We.instancing===!1||!j.isInstancedMesh&&We.instancing===!0||j.isSkinnedMesh&&We.skinning===!1||!j.isSkinnedMesh&&We.skinning===!0||We.envMap!==Re||D.fog===!0&&We.fog!==he||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ye.numPlanes||We.numIntersection!==ye.numIntersection)||We.vertexAlphas!==ze||We.vertexTangents!==Ce||We.morphTargets!==Ie||We.morphNormals!==Je||We.morphColors!==ht||We.toneMapping!==kn||Fe.isWebGL2===!0&&We.morphTargetsCount!==vt)&&(bt=!0):(bt=!0,We.__version=D.version);let Li=We.currentProgram;bt===!0&&(Li=dl(D,U,j));let gv=!1,No=!1,of=!1;const Xt=Li.getUniforms(),Ii=We.uniforms;if(Ae.useProgram(Li.program)&&(gv=!0,No=!0,of=!0),D.id!==P&&(P=D.id,No=!0),gv||S!==w){if(Xt.setValue(N,"projectionMatrix",w.projectionMatrix),Fe.logarithmicDepthBuffer&&Xt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),S!==w&&(S=w,No=!0,of=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const fn=Xt.map.cameraPosition;fn!==void 0&&fn.setValue(N,be.setFromMatrixPosition(w.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Xt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||j.isSkinnedMesh)&&Xt.setValue(N,"viewMatrix",w.matrixWorldInverse)}if(j.isSkinnedMesh){Xt.setOptional(N,j,"bindMatrix"),Xt.setOptional(N,j,"bindMatrixInverse");const fn=j.skeleton;fn&&(Fe.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Xt.setValue(N,"boneTexture",fn.boneTexture,Le),Xt.setValue(N,"boneTextureSize",fn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const sf=W.morphAttributes;if((sf.position!==void 0||sf.normal!==void 0||sf.color!==void 0&&Fe.isWebGL2===!0)&&xe.update(j,W,Li),(No||We.receiveShadow!==j.receiveShadow)&&(We.receiveShadow=j.receiveShadow,Xt.setValue(N,"receiveShadow",j.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Ii.envMap.value=Re,Ii.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),No&&(Xt.setValue(N,"toneMappingExposure",g.toneMappingExposure),We.needsLights&&W1(Ii,of),he&&D.fog===!0&&ee.refreshFogUniforms(Ii,he),ee.refreshMaterialUniforms(Ii,D,V,K,ue),Vu.upload(N,We.uniformsList,Ii,Le)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Vu.upload(N,We.uniformsList,Ii,Le),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Xt.setValue(N,"center",j.center),Xt.setValue(N,"modelViewMatrix",j.modelViewMatrix),Xt.setValue(N,"normalMatrix",j.normalMatrix),Xt.setValue(N,"modelMatrix",j.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const fn=D.uniformsGroups;for(let lf=0,j1=fn.length;lf<j1;lf++)if(Fe.isWebGL2){const _v=fn[lf];ke.update(_v,Li),ke.bind(_v,Li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Li}function W1(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function $1(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,W){He.get(w.texture).__webglTexture=U,He.get(w.depthTexture).__webglTexture=W;const D=He.get(w);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=W===void 0,D.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){const W=He.get(w);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,W=0){R=w,M=U,A=W;let D=!0,j=null,he=!1,Ee=!1;if(w){const Re=He.get(w);Re.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(N.FRAMEBUFFER,null),D=!1):Re.__webglFramebuffer===void 0?Le.setupRenderTarget(w):Re.__hasExternalTextures&&Le.rebindTextures(w,He.get(w.texture).__webglTexture,He.get(w.depthTexture).__webglTexture);const ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const Ce=He.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(j=Ce[U],he=!0):Fe.isWebGL2&&w.samples>0&&Le.useMultisampledRTT(w)===!1?j=He.get(w).__webglMultisampledFramebuffer:j=Ce,T.copy(w.viewport),X.copy(w.scissor),q=w.scissorTest}else T.copy(k).multiplyScalar(V).floor(),X.copy(ie).multiplyScalar(V).floor(),q=I;if(Ae.bindFramebuffer(N.FRAMEBUFFER,j)&&Fe.drawBuffers&&D&&Ae.drawBuffers(w,j),Ae.viewport(T),Ae.scissor(X),Ae.setScissorTest(q),he){const Re=He.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Re.__webglTexture,W)}else if(Ee){const Re=He.get(w.texture),ze=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.__webglTexture,W||0,ze)}P=-1},this.readRenderTargetPixels=function(w,U,W,D,j,he,Ee){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){Ae.bindFramebuffer(N.FRAMEBUFFER,Te);try{const Re=w.texture,ze=Re.format,Ce=Re.type;if(ze!==Kn&&me.convert(ze)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Ce===Fs&&(we.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&we.has("EXT_color_buffer_float"));if(Ce!==yi&&me.convert(Ce)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===li&&(Fe.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-D&&W>=0&&W<=w.height-j&&N.readPixels(U,W,D,j,me.convert(ze),me.convert(Ce),he)}finally{const Re=R!==null?He.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(w,U,W=0){const D=Math.pow(2,-W),j=Math.floor(U.image.width*D),he=Math.floor(U.image.height*D);Le.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,w.x,w.y,j,he),Ae.unbindTexture()},this.copyTextureToTexture=function(w,U,W,D=0){const j=U.image.width,he=U.image.height,Ee=me.convert(W.format),Te=me.convert(W.type);Le.setTexture2D(W,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,D,w.x,w.y,j,he,Ee,Te,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,D,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,Ee,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,D,w.x,w.y,Ee,Te,U.image),D===0&&W.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(w,U,W,D,j=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=w.max.x-w.min.x+1,Ee=w.max.y-w.min.y+1,Te=w.max.z-w.min.z+1,Re=me.convert(D.format),ze=me.convert(D.type);let Ce;if(D.isData3DTexture)Le.setTexture3D(D,0),Ce=N.TEXTURE_3D;else if(D.isDataArrayTexture)Le.setTexture2DArray(D,0),Ce=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const Ie=N.getParameter(N.UNPACK_ROW_LENGTH),Je=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ht=N.getParameter(N.UNPACK_SKIP_PIXELS),kn=N.getParameter(N.UNPACK_SKIP_ROWS),yr=N.getParameter(N.UNPACK_SKIP_IMAGES),vt=W.isCompressedTexture?W.mipmaps[0]:W.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,vt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,w.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,w.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?N.texSubImage3D(Ce,j,U.x,U.y,U.z,he,Ee,Te,Re,ze,vt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ce,j,U.x,U.y,U.z,he,Ee,Te,Re,vt.data)):N.texSubImage3D(Ce,j,U.x,U.y,U.z,he,Ee,Te,Re,ze,vt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ie),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ht),N.pixelStorei(N.UNPACK_SKIP_ROWS,kn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,yr),j===0&&D.generateMipmaps&&N.generateMipmap(Ce),Ae.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Le.setTextureCube(w,0):w.isData3DTexture?Le.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Le.setTexture2DArray(w,0):Le.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){M=0,A=0,R=null,Ae.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dr}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?Qi:HM}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qi?De:gr}}class I4 extends o1{}I4.prototype.isWebGL1Renderer=!0;class D4 extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const my={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class O4{constructor(e,n,r){const i=this;let a=!1,o=0,s=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(c){s++,a===!1&&i.onStart!==void 0&&i.onStart(c,o,s),a=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,s),o===s&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],_=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const N4=new O4;class s1{constructor(e){this.manager=e!==void 0?e:N4,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(i,a){r.load(e,i,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class U4 extends s1{constructor(e){super(e)}load(e,n,r,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=my.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){n&&n(o),a.manager.itemEnd(e)},0),o;const s=ks("img");function l(){c(),my.add(e,this),n&&n(this),a.manager.itemEnd(e)}function u(f){c(),i&&i(f),a.manager.itemError(e),a.manager.itemEnd(e)}function c(){s.removeEventListener("load",l,!1),s.removeEventListener("error",u,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class F4 extends s1{constructor(e){super(e)}load(e,n,r,i){const a=new cn,o=new U4(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,n!==void 0&&n(a)},r,i),a}}class k4{constructor(e,n,r=0,i=1/0){this.ray=new XM(e,n),this.near=r,this.far=i,this.camera=null,this.layers=new Qm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,r=[]){return ap(e,this,r,n),r.sort(vy),r}intersectObjects(e,n=!0,r=[]){for(let i=0,a=e.length;i<a;i++)ap(e[i],this,r,n);return r.sort(vy),r}}function vy(t,e){return t.distance-e.distance}function ap(t,e,n,r){if(t.layers.test(e.layers)&&t.raycast(e,n),r===!0){const i=t.children;for(let a=0,o=i.length;a<o;a++)ap(i[a],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qm);var gy=class{constructor(t,e){Pe(this,"target");Pe(this,"name");Pe(this,"intersected");Pe(this,"wasIntersected",!1);Pe(this,"distance");this.target=t,this.name=e,this.intersected=!1,this.distance=0}},en=class{constructor(t,e=null){Pe(this,"type");Pe(this,"cancelBubble");Pe(this,"originalEvent");Pe(this,"coords",new Ye(0,0));Pe(this,"distance",0);Pe(this,"intersected",!1);this.cancelBubble=!1,this.type=t,this.originalEvent=e}stopPropagation(){this.cancelBubble=!0}},z4=class{constructor(t,e,n,r){Pe(this,"renderer");Pe(this,"camera");Pe(this,"domElement");Pe(this,"bindEventsOnBodyElement");Pe(this,"autoAdd");Pe(this,"scene");Pe(this,"mouse");Pe(this,"supportsPointerEvents");Pe(this,"interactiveObjects");Pe(this,"closestObject");Pe(this,"raycaster");Pe(this,"treatTouchEventsAsMouseEvents");Pe(this,"dispose",()=>{this.domElement.removeEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("pointermove",this.onDocumentPointerMove):this.domElement.removeEventListener("pointermove",this.onDocumentPointerMove),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("mousemove",this.onDocumentMouseMove):this.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),this.domElement.removeEventListener("mousedown",this.onMouseDown),this.domElement.removeEventListener("mouseup",this.onMouseUp),this.domElement.removeEventListener("touchstart",this.onTouchStart),this.domElement.removeEventListener("touchmove",this.onTouchMove),this.domElement.removeEventListener("touchend",this.onTouchEnd)});Pe(this,"add",(t,e=[])=>{if(t&&!this.interactiveObjects.find(n=>n.target===t))if(e.length>0)e.forEach(n=>{let r=t.getObjectByName(n);if(r){let i=new gy(r,n);this.interactiveObjects.push(i)}});else{let n=new gy(t,t.name);this.interactiveObjects.push(n)}});Pe(this,"remove",(t,e=[])=>{!t||(e.length>0?e.forEach(n=>{let r=t.getObjectByName(n);r&&(this.interactiveObjects=this.interactiveObjects.filter(i=>i.target!==r))}):this.interactiveObjects=this.interactiveObjects.filter(n=>n.target!==t))});Pe(this,"update",()=>{this.raycaster.setFromCamera(this.mouse,this.camera),this.interactiveObjects.forEach(r=>{r.target&&this.checkIntersection(r)}),this.interactiveObjects.sort(function(r,i){return r.distance-i.distance});let t=this.interactiveObjects.find(r=>r.intersected)??null;if(t!=this.closestObject){if(this.closestObject){let r=new en("mouseout");this.dispatch(this.closestObject,r)}if(t){let r=new en("mouseover");this.dispatch(t,r)}this.closestObject=t}let e;this.interactiveObjects.forEach(r=>{!r.intersected&&r.wasIntersected&&(e||(e=new en("mouseleave")),this.dispatch(r,e))});let n;this.interactiveObjects.forEach(r=>{r.intersected&&!r.wasIntersected&&(n||(n=new en("mouseenter")),this.dispatch(r,n))})});Pe(this,"checkIntersection",t=>{let e=this.raycaster.intersectObjects([t.target],!0);if(t.wasIntersected=t.intersected,e.length>0){let n=e[0].distance;e.forEach(r=>{r.distance<n&&(n=r.distance)}),t.intersected=!0,t.distance=n}else t.intersected=!1});Pe(this,"onDocumentMouseMove",t=>{this.mapPositionToPoint(this.mouse,t.clientX,t.clientY);let e=new en("mousemove",t);this.interactiveObjects.forEach(n=>{this.dispatch(n,e)})});Pe(this,"onDocumentPointerMove",t=>{this.mapPositionToPoint(this.mouse,t.clientX,t.clientY);let e=new en("pointermove",t);this.interactiveObjects.forEach(n=>{this.dispatch(n,e)})});Pe(this,"onTouchMove",t=>{t.touches.length>0&&this.mapPositionToPoint(this.mouse,t.touches[0].clientX,t.touches[0].clientY);let e=new en(this.treatTouchEventsAsMouseEvents?"mousemove":"touchmove",t);this.interactiveObjects.forEach(n=>{this.dispatch(n,e)})});Pe(this,"onMouseClick",t=>{this.update();let e=new en("click",t);this.interactiveObjects.forEach(n=>{n.intersected&&this.dispatch(n,e)})});Pe(this,"onMouseDown",t=>{this.mapPositionToPoint(this.mouse,t.clientX,t.clientY),this.update();let e=new en("mousedown",t);this.interactiveObjects.forEach(n=>{n.intersected&&this.dispatch(n,e)})});Pe(this,"onPointerDown",t=>{this.mapPositionToPoint(this.mouse,t.clientX,t.clientY),this.update();let e=new en("pointerdown",t);this.interactiveObjects.forEach(n=>{n.intersected&&this.dispatch(n,e)})});Pe(this,"onTouchStart",t=>{t.touches.length>0&&this.mapPositionToPoint(this.mouse,t.touches[0].clientX,t.touches[0].clientY),this.update();let e=new en(this.treatTouchEventsAsMouseEvents?"mousedown":"touchstart",t);this.interactiveObjects.forEach(n=>{n.intersected&&this.dispatch(n,e)})});Pe(this,"onMouseUp",t=>{let e=new en("mouseup",t);this.interactiveObjects.forEach(n=>{this.dispatch(n,e)})});Pe(this,"onPointerUp",t=>{let e=new en("pointerup",t);this.interactiveObjects.forEach(n=>{this.dispatch(n,e)})});Pe(this,"onTouchEnd",t=>{t.touches.length>0&&this.mapPositionToPoint(this.mouse,t.touches[0].clientX,t.touches[0].clientY),this.update();let e=new en(this.treatTouchEventsAsMouseEvents?"mouseup":"touchend",t);this.interactiveObjects.forEach(n=>{this.dispatch(n,e)})});Pe(this,"dispatch",(t,e)=>{t.target&&!e.cancelBubble&&(e.coords=this.mouse,e.distance=t.distance,e.intersected=t.intersected,t.target.dispatchEvent(e))});Pe(this,"mapPositionToPoint",(t,e,n)=>{let r=this.renderer.domElement.getBoundingClientRect();t.x=(e-r.left)/r.width*2-1,t.y=-((n-r.top)/r.height)*2+1});this.renderer=t,this.camera=e,this.domElement=n,this.bindEventsOnBodyElement=r&&typeof r.bindEventsOnBodyElement<"u"?r.bindEventsOnBodyElement:!0,this.scene=r&&typeof r.scene<"u"?r.scene:null,this.scene&&(this.scene.onBeforeRender=()=>{this.autoAdd&&this.scene!==null&&this.scene.traverse(i=>{this.add(i),i.addEventListener("removed",a=>{this.remove(a.target)})}),this.update()}),this.autoAdd=r&&typeof r.autoAdd<"u"?r.autoAdd:!1,this.autoAdd&&this.scene===null&&console.error("Attention: Options.scene needs to be set when using options.autoAdd"),this.mouse=new Ye(-1,1),this.supportsPointerEvents=!!window.PointerEvent,this.interactiveObjects=[],this.closestObject=null,this.raycaster=new k4,n.addEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?n.ownerDocument.addEventListener("pointermove",this.onDocumentPointerMove):n.addEventListener("pointermove",this.onDocumentPointerMove),n.addEventListener("pointerdown",this.onPointerDown),n.addEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?n.ownerDocument.addEventListener("mousemove",this.onDocumentMouseMove):n.addEventListener("mousemove",this.onDocumentMouseMove),n.addEventListener("mousedown",this.onMouseDown),n.addEventListener("mouseup",this.onMouseUp),n.addEventListener("touchstart",this.onTouchStart,{passive:!0}),n.addEventListener("touchmove",this.onTouchMove,{passive:!0}),n.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.treatTouchEventsAsMouseEvents=!0}};function B4(t){let e=document.querySelector("#header"),n=document.querySelector("#three-canvas"),r=document.querySelector("#layer"),i=new CD.init(document.body,{renderByPixels:!0}),a=0,o,s=!1,l=0;const u=new D4,c=new Pn(75,window.innerWidth/window.innerHeight,.1,100),f=new o1;f.setSize(window.innerWidth,window.innerHeight,!1),document.querySelector("#three-canvas").appendChild(f.domElement);let h=new Array(35).fill(null);const p="rgb(255,174,66)",_=new F4,y=new rn(new Cr(5,5,5,5),new ni({color:p,wireframe:!0})),m=new rn(new Cr(35,5,35,5),new ni({color:p,wireframe:!0})),d=new rn(new Cr(35,5,35,5),new ni({color:p,wireframe:!0})),v=new rn(new Cr(35,5,35,5),new ni({color:p,wireframe:!0})),g=new rn(new Cr(35,5,35,5),new ni({color:p,wireframe:!0}));u.add(y,m,d,v,g);const x=new z4(f,c,f.domElement);let M=[],A=-1;h.forEach((q,O)=>{let F=new rn(new Cr(1,1,1,1),new ni({map:_.load("https://richicoder.com/richicoder_profile_photo.png")})),G=Math.round(Math.random()),K=Math.round(Math.random()),V=[Math.random()/3,-Math.random()/3];const L=V[G],B=V[K],k=-1*O/5+A;F.position.set(B,L,k),M.push({...F,initX:F.position.x,initY:F.position.y}),u.add(F),x.add(F),F.addEventListener("click",()=>{t.updateState("layer",!0)}),F.addEventListener("mouseover",()=>{document.body.style.cursor="pointer"}),F.addEventListener("mouseout",()=>{document.body.style.cursor="default"})}),c.position.set(0,0,0),c.lookAt(y.position),y.position.set(0,0,-17.5),m.position.set(2.5,0,0),m.rotation.y=-90*(2*3.14/360),d.position.set(-2.5,0,0),d.rotation.y=90*(2*3.14/360),v.position.set(0,2.5,0),v.rotation.x=90*(2*3.14/360),v.rotation.z=90*(2*3.14/360),g.position.set(0,-2.5,0),g.rotation.x=90*(2*3.14/360),g.rotation.z=90*(2*3.14/360),X();function R(){requestAnimationFrame(R),P(),s&&X(),x.update()}R();function P(){c.lookAt(y.position),c.position.z=-a/10,o=c.position.z,S(o)}function S(q){let O=1;M.forEach(F=>{const{x:G,y:K,z:V}=F.position,L=q-V;if(L<=O&&L>0){const B=2*(O-L);F.position.x=F.initX>=0?F.initX+B:F.initX-B,F.position.y=F.initY>=0?F.initY+B:F.initY-B}})}i.addListener(q=>{s=!0,a=i.offset.y/(i.size.content.height-document.documentElement.clientHeight)*100,console.log(a),Math.abs(a.toFixed(4)-l.toFixed(4))<=.005&&(s=!1,console.log("pause",a.toFixed(4),l.toFixed(4))),a==0&&(s=!1),a==100&&(s=!1);const O=q.offset;e.style.top=O.y+"px",n.style.top=O.y+"px",r.style.top=O.y+"px",l=a}),window.addEventListener("resize",T,!1);function T(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight),X()}function X(){f.render(u,c)}}const l1=dr.createContext(),sl=()=>dr.useContext(l1);function H4({children:t}){const[e,n]=dr.useState({layer:!1,menu:!1,connectWallet:!1}),i={state:e,updateState:(a,o)=>{console.log(a,o,"verr aqui"),n({...e,[a]:o})}};return pe.jsx(l1.Provider,{value:i,children:t})}function G4(){const t=sl();return dr.useEffect(()=>{B4(t)},[]),pe.jsx("div",{id:"three-canvas",className:"w-fit h-fit fixed top-0 left-0"})}function _y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function fe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_y(Object(n),!0).forEach(function(r){Mt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_y(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Mc(t){"@babel/helpers - typeof";return Mc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mc(t)}function V4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function W4(t,e,n){return e&&yy(t.prototype,e),n&&yy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Mt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ev(t,e){return j4(t)||Y4(t,e)||u1(t,e)||K4()}function ll(t){return $4(t)||X4(t)||u1(t)||q4()}function $4(t){if(Array.isArray(t))return op(t)}function j4(t){if(Array.isArray(t))return t}function X4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Y4(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function u1(t,e){if(t){if(typeof t=="string")return op(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return op(t,e)}}function op(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function q4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xy=function(){},tv={},c1={},f1=null,d1={mark:xy,measure:xy};try{typeof window<"u"&&(tv=window),typeof document<"u"&&(c1=document),typeof MutationObserver<"u"&&(f1=MutationObserver),typeof performance<"u"&&(d1=performance)}catch{}var Z4=tv.navigator||{},Sy=Z4.userAgent,Ey=Sy===void 0?"":Sy,Mi=tv,it=c1,My=f1,mu=d1;Mi.document;var jr=!!it.documentElement&&!!it.head&&typeof it.addEventListener=="function"&&typeof it.createElement=="function",h1=~Ey.indexOf("MSIE")||~Ey.indexOf("Trident/"),vu,gu,_u,yu,xu,Hr="___FONT_AWESOME___",sp=16,p1="fa",m1="svg-inline--fa",ca="data-fa-i2svg",lp="data-fa-pseudo-element",Q4="data-fa-pseudo-element-pending",nv="data-prefix",rv="data-icon",wy="fontawesome-i2svg",J4="async",ez=["HTML","HEAD","STYLE","SCRIPT"],v1=function(){try{return!0}catch{return!1}}(),tt="classic",dt="sharp",iv=[tt,dt];function ul(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[tt]}})}var zs=ul((vu={},Mt(vu,tt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Mt(vu,dt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),vu)),Bs=ul((gu={},Mt(gu,tt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Mt(gu,dt,{solid:"fass",regular:"fasr",light:"fasl"}),gu)),Hs=ul((_u={},Mt(_u,tt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Mt(_u,dt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),_u)),tz=ul((yu={},Mt(yu,tt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Mt(yu,dt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),yu)),nz=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,g1="fa-layers-text",rz=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,iz=ul((xu={},Mt(xu,tt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Mt(xu,dt,{900:"fass",400:"fasr",300:"fasl"}),xu)),_1=[1,2,3,4,5,6,7,8,9,10],az=_1.concat([11,12,13,14,15,16,17,18,19,20]),oz=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ji={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gs=new Set;Object.keys(Bs[tt]).map(Gs.add.bind(Gs));Object.keys(Bs[dt]).map(Gs.add.bind(Gs));var sz=[].concat(iv,ll(Gs),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ji.GROUP,ji.SWAP_OPACITY,ji.PRIMARY,ji.SECONDARY]).concat(_1.map(function(t){return"".concat(t,"x")})).concat(az.map(function(t){return"w-".concat(t)})),vs=Mi.FontAwesomeConfig||{};function lz(t){var e=it.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function uz(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(it&&typeof it.querySelector=="function"){var cz=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cz.forEach(function(t){var e=ev(t,2),n=e[0],r=e[1],i=uz(lz(n));i!=null&&(vs[r]=i)})}var y1={styleDefault:"solid",familyDefault:"classic",cssPrefix:p1,replacementClass:m1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vs.familyPrefix&&(vs.cssPrefix=vs.familyPrefix);var Eo=fe(fe({},y1),vs);Eo.autoReplaceSvg||(Eo.observeMutations=!1);var ge={};Object.keys(y1).forEach(function(t){Object.defineProperty(ge,t,{enumerable:!0,set:function(n){Eo[t]=n,gs.forEach(function(r){return r(ge)})},get:function(){return Eo[t]}})});Object.defineProperty(ge,"familyPrefix",{enumerable:!0,set:function(e){Eo.cssPrefix=e,gs.forEach(function(n){return n(ge)})},get:function(){return Eo.cssPrefix}});Mi.FontAwesomeConfig=ge;var gs=[];function fz(t){return gs.push(t),function(){gs.splice(gs.indexOf(t),1)}}var Jr=sp,fr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function dz(t){if(!(!t||!jr)){var e=it.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=it.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return it.head.insertBefore(e,r),t}}var hz="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vs(){for(var t=12,e="";t-- >0;)e+=hz[Math.random()*62|0];return e}function Oo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function av(t){return t.classList?Oo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function x1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pz(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(x1(t[n]),'" ')},"").trim()}function ef(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ov(t){return t.size!==fr.size||t.x!==fr.x||t.y!==fr.y||t.rotate!==fr.rotate||t.flipX||t.flipY}function mz(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function vz(t){var e=t.transform,n=t.width,r=n===void 0?sp:n,i=t.height,a=i===void 0?sp:i,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&h1?l+="translate(".concat(e.x/Jr-r/2,"em, ").concat(e.y/Jr-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Jr,"em), calc(-50% + ").concat(e.y/Jr,"em)) "):l+="translate(".concat(e.x/Jr,"em, ").concat(e.y/Jr,"em) "),l+="scale(".concat(e.size/Jr*(e.flipX?-1:1),", ").concat(e.size/Jr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var gz=`:root, :host {
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
}`;function S1(){var t=p1,e=m1,n=ge.cssPrefix,r=ge.replacementClass,i=gz;if(n!==t||r!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Ty=!1;function kd(){ge.autoAddCss&&!Ty&&(dz(S1()),Ty=!0)}var _z={mixout:function(){return{dom:{css:S1,insertCss:kd}}},hooks:function(){return{beforeDOMElementCreation:function(){kd()},beforeI2svg:function(){kd()}}}},Gr=Mi||{};Gr[Hr]||(Gr[Hr]={});Gr[Hr].styles||(Gr[Hr].styles={});Gr[Hr].hooks||(Gr[Hr].hooks={});Gr[Hr].shims||(Gr[Hr].shims=[]);var Zn=Gr[Hr],E1=[],yz=function t(){it.removeEventListener("DOMContentLoaded",t),wc=1,E1.map(function(e){return e()})},wc=!1;jr&&(wc=(it.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(it.readyState),wc||it.addEventListener("DOMContentLoaded",yz));function xz(t){jr&&(wc?setTimeout(t,0):E1.push(t))}function cl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,a=i===void 0?[]:i;return typeof t=="string"?x1(t):"<".concat(e," ").concat(pz(r),">").concat(a.map(cl).join(""),"</").concat(e,">")}function by(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Sz=function(e,n){return function(r,i,a,o){return e.call(n,r,i,a,o)}},zd=function(e,n,r,i){var a=Object.keys(e),o=a.length,s=i!==void 0?Sz(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,e[u],u,e);return c};function Ez(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((i&1023)<<10)+(a&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function up(t){var e=Ez(t);return e.length===1?e[0].toString(16):null}function Mz(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ay(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function cp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ay(e);typeof Zn.hooks.addPack=="function"&&!i?Zn.hooks.addPack(t,Ay(e)):Zn.styles[t]=fe(fe({},Zn.styles[t]||{}),a),t==="fas"&&cp("fa",e)}var Su,Eu,Mu,Ka=Zn.styles,wz=Zn.shims,Tz=(Su={},Mt(Su,tt,Object.values(Hs[tt])),Mt(Su,dt,Object.values(Hs[dt])),Su),sv=null,M1={},w1={},T1={},b1={},A1={},bz=(Eu={},Mt(Eu,tt,Object.keys(zs[tt])),Mt(Eu,dt,Object.keys(zs[dt])),Eu);function Az(t){return~sz.indexOf(t)}function Rz(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!Az(i)?i:null}var R1=function(){var e=function(a){return zd(Ka,function(o,s,l){return o[l]=zd(s,a,{}),o},{})};M1=e(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),w1=e(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),A1=e(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Ka||ge.autoFetchSvg,r=zd(wz,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});T1=r.names,b1=r.unicodes,sv=tf(ge.styleDefault,{family:ge.familyDefault})};fz(function(t){sv=tf(t.styleDefault,{family:ge.familyDefault})});R1();function lv(t,e){return(M1[t]||{})[e]}function Cz(t,e){return(w1[t]||{})[e]}function Xi(t,e){return(A1[t]||{})[e]}function C1(t){return T1[t]||{prefix:null,iconName:null}}function Pz(t){var e=b1[t],n=lv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wi(){return sv}var uv=function(){return{prefix:null,iconName:null,rest:[]}};function tf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?tt:n,i=zs[r][t],a=Bs[r][t]||Bs[r][i],o=t in Zn.styles?t:null;return a||o||null}var Ry=(Mu={},Mt(Mu,tt,Object.keys(Hs[tt])),Mt(Mu,dt,Object.keys(Hs[dt])),Mu);function nf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(e={},Mt(e,tt,"".concat(ge.cssPrefix,"-").concat(tt)),Mt(e,dt,"".concat(ge.cssPrefix,"-").concat(dt)),e),o=null,s=tt;(t.includes(a[tt])||t.some(function(u){return Ry[tt].includes(u)}))&&(s=tt),(t.includes(a[dt])||t.some(function(u){return Ry[dt].includes(u)}))&&(s=dt);var l=t.reduce(function(u,c){var f=Rz(ge.cssPrefix,c);if(Ka[c]?(c=Tz[s].includes(c)?tz[s][c]:c,o=c,u.prefix=c):bz[s].indexOf(c)>-1?(o=c,u.prefix=tf(c,{family:s})):f?u.iconName=f:c!==ge.replacementClass&&c!==a[tt]&&c!==a[dt]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?C1(u.iconName):{},p=Xi(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||p||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Ka.far&&Ka.fas&&!ge.autoFetchSvg&&(u.prefix="fas")}return u},uv());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===dt&&(Ka.fass||ge.autoFetchSvg)&&(l.prefix="fass",l.iconName=Xi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=wi()||"fas"),l}var Lz=function(){function t(){V4(this,t),this.definitions={}}return W4(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=fe(fe({},n.definitions[s]||{}),o[s]),cp(s,o[s]);var l=Hs[tt][s];l&&cp(l,o[s]),R1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),t}(),Cy=[],Za={},lo={},Iz=Object.keys(lo);function Dz(t,e){var n=e.mixoutsTo;return Cy=t,Za={},Object.keys(lo).forEach(function(r){Iz.indexOf(r)===-1&&delete lo[r]}),Cy.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Mc(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Za[o]||(Za[o]=[]),Za[o].push(a[o])})}r.provides&&r.provides(lo)}),n}function fp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Za[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function fa(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Za[t]||[];i.forEach(function(a){a.apply(null,n)})}function Vr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return lo[t]?lo[t].apply(null,e):void 0}function dp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||wi();if(e)return e=Xi(n,e)||e,by(P1.definitions,n,e)||by(Zn.styles,n,e)}var P1=new Lz,Oz=function(){ge.autoReplaceSvg=!1,ge.observeMutations=!1,fa("noAuto")},Nz={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return jr?(fa("beforeI2svg",e),Vr("pseudoElements2svg",e),Vr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;ge.autoReplaceSvg===!1&&(ge.autoReplaceSvg=!0),ge.observeMutations=!0,xz(function(){Fz({autoReplaceSvgRoot:n}),fa("watch",e)})}},Uz={icon:function(e){if(e===null)return null;if(Mc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Xi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=tf(e[0]);return{prefix:r,iconName:Xi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(ge.cssPrefix,"-"))>-1||e.match(nz))){var i=nf(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||wi(),iconName:Xi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var a=wi();return{prefix:a,iconName:Xi(a,e)||e}}}},wn={noAuto:Oz,config:ge,dom:Nz,parse:Uz,library:P1,findIconDefinition:dp,toHtml:cl},Fz=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?it:n;(Object.keys(Zn.styles).length>0||ge.autoFetchSvg)&&jr&&ge.autoReplaceSvg&&wn.dom.i2svg({node:r})};function rf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return cl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(jr){var r=it.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function kz(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,a=t.styles,o=t.transform;if(ov(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=ef(fe(fe({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function zz(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(ge.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:fe(fe({},i),{},{id:o}),children:r}]}]}function cv(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,h=t.watchable,p=h===void 0?!1:h,_=r.found?r:n,y=_.width,m=_.height,d=i==="fak",v=[ge.replacementClass,a?"".concat(ge.cssPrefix,"-").concat(a):""].filter(function(S){return f.classes.indexOf(S)===-1}).filter(function(S){return S!==""||!!S}).concat(f.classes).join(" "),g={children:[],attributes:fe(fe({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:v,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(m)})},x=d&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/m*16*.0625,"em")}:{};p&&(g.attributes[ca]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Vs())},children:[l]}),delete g.attributes.title);var M=fe(fe({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:fe(fe({},x),f.styles)}),A=r.found&&n.found?Vr("generateAbstractMask",M)||{children:[],attributes:{}}:Vr("generateAbstractIcon",M)||{children:[],attributes:{}},R=A.children,P=A.attributes;return M.children=R,M.attributes=P,s?zz(M):kz(M)}function Py(t){var e=t.content,n=t.width,r=t.height,i=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,u=fe(fe(fe({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[ca]="");var c=fe({},o.styles);ov(i)&&(c.transform=vz({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=ef(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function Bz(t){var e=t.content,n=t.title,r=t.extra,i=fe(fe(fe({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=ef(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Bd=Zn.styles;function hp(t){var e=t[0],n=t[1],r=t.slice(4),i=ev(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(ge.cssPrefix,"-").concat(ji.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ge.cssPrefix,"-").concat(ji.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(ge.cssPrefix,"-").concat(ji.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var Hz={found:!1,width:512,height:512};function Gz(t,e){!v1&&!ge.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function pp(t,e){var n=e;return e==="fa"&&ge.styleDefault!==null&&(e=wi()),new Promise(function(r,i){if(Vr("missingIconAbstract"),n==="fa"){var a=C1(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&Bd[e]&&Bd[e][t]){var o=Bd[e][t];return r(hp(o))}Gz(t,e),r(fe(fe({},Hz),{},{icon:ge.showMissingIcons&&t?Vr("missingIconAbstract")||{}:{}}))})}var Ly=function(){},mp=ge.measurePerformance&&mu&&mu.mark&&mu.measure?mu:{mark:Ly,measure:Ly},as='FA "6.4.0"',Vz=function(e){return mp.mark("".concat(as," ").concat(e," begins")),function(){return L1(e)}},L1=function(e){mp.mark("".concat(as," ").concat(e," ends")),mp.measure("".concat(as," ").concat(e),"".concat(as," ").concat(e," begins"),"".concat(as," ").concat(e," ends"))},fv={begin:Vz,end:L1},Wu=function(){};function Iy(t){var e=t.getAttribute?t.getAttribute(ca):null;return typeof e=="string"}function Wz(t){var e=t.getAttribute?t.getAttribute(nv):null,n=t.getAttribute?t.getAttribute(rv):null;return e&&n}function $z(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ge.replacementClass)}function jz(){if(ge.autoReplaceSvg===!0)return $u.replace;var t=$u[ge.autoReplaceSvg];return t||$u.replace}function Xz(t){return it.createElementNS("http://www.w3.org/2000/svg",t)}function Yz(t){return it.createElement(t)}function I1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Xz:Yz:n;if(typeof t=="string")return it.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){i.appendChild(I1(o,{ceFn:r}))}),i}function qz(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var $u={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(I1(i),n)}),n.getAttribute(ca)===null&&ge.keepOriginalSource){var r=it.createComment(qz(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~av(n).indexOf(ge.replacementClass))return $u.replace(e);var i=new RegExp("".concat(ge.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===ge.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return cl(s)}).join(`
`);n.setAttribute(ca,""),n.innerHTML=o}};function Dy(t){t()}function D1(t,e){var n=typeof e=="function"?e:Wu;if(t.length===0)n();else{var r=Dy;ge.mutateApproach===J4&&(r=Mi.requestAnimationFrame||Dy),r(function(){var i=jz(),a=fv.begin("mutate");t.map(i),a(),n()})}}var dv=!1;function O1(){dv=!0}function vp(){dv=!1}var Tc=null;function Oy(t){if(My&&ge.observeMutations){var e=t.treeCallback,n=e===void 0?Wu:e,r=t.nodeCallback,i=r===void 0?Wu:r,a=t.pseudoElementsCallback,o=a===void 0?Wu:a,s=t.observeMutationsRoot,l=s===void 0?it:s;Tc=new My(function(u){if(!dv){var c=wi();Oo(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Iy(f.addedNodes[0])&&(ge.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&ge.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Iy(f.target)&&~oz.indexOf(f.attributeName))if(f.attributeName==="class"&&Wz(f.target)){var h=nf(av(f.target)),p=h.prefix,_=h.iconName;f.target.setAttribute(nv,p||c),_&&f.target.setAttribute(rv,_)}else $z(f.target)&&i(f.target)})}}),jr&&Tc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Kz(){Tc&&Tc.disconnect()}function Zz(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Qz(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=nf(av(t));return i.prefix||(i.prefix=wi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Cz(i.prefix,t.innerText)||lv(i.prefix,up(t.innerText))),!i.iconName&&ge.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Jz(t){var e=Oo(t.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ge.autoA11y&&(n?e["aria-labelledby"]="".concat(ge.replacementClass,"-title-").concat(r||Vs()):(e["aria-hidden"]="true",e.focusable="false")),e}function eB(){return{iconName:null,title:null,titleId:null,prefix:null,transform:fr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ny(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Qz(t),r=n.iconName,i=n.prefix,a=n.rest,o=Jz(t),s=fp("parseNodeAttributes",{},t),l=e.styleParser?Zz(t):[];return fe({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:fr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var tB=Zn.styles;function N1(t){var e=ge.autoReplaceSvg==="nest"?Ny(t,{styleParser:!1}):Ny(t);return~e.extra.classes.indexOf(g1)?Vr("generateLayersText",t,e):Vr("generateSvgReplacementMutation",t,e)}var Ti=new Set;iv.map(function(t){Ti.add("fa-".concat(t))});Object.keys(zs[tt]).map(Ti.add.bind(Ti));Object.keys(zs[dt]).map(Ti.add.bind(Ti));Ti=ll(Ti);function Uy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!jr)return Promise.resolve();var n=it.documentElement.classList,r=function(f){return n.add("".concat(wy,"-").concat(f))},i=function(f){return n.remove("".concat(wy,"-").concat(f))},a=ge.autoFetchSvg?Ti:iv.map(function(c){return"fa-".concat(c)}).concat(Object.keys(tB));a.includes("fa")||a.push("fa");var o=[".".concat(g1,":not([").concat(ca,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(ca,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Oo(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=fv.begin("onTree"),u=s.reduce(function(c,f){try{var h=N1(f);h&&c.push(h)}catch(p){v1||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){D1(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),f(h)})})}function nB(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;N1(t).then(function(n){n&&D1([n],e)})}function rB(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:dp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:dp(i||{})),t(r,fe(fe({},n),{},{mask:i}))}}var iB=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?fr:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,p=n.titleId,_=p===void 0?null:p,y=n.classes,m=y===void 0?[]:y,d=n.attributes,v=d===void 0?{}:d,g=n.styles,x=g===void 0?{}:g;if(e){var M=e.prefix,A=e.iconName,R=e.icon;return rf(fe({type:"icon"},e),function(){return fa("beforeDOMElementCreation",{iconDefinition:e,params:n}),ge.autoA11y&&(h?v["aria-labelledby"]="".concat(ge.replacementClass,"-title-").concat(_||Vs()):(v["aria-hidden"]="true",v.focusable="false")),cv({icons:{main:hp(R),mask:l?hp(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:A,transform:fe(fe({},fr),i),symbol:o,title:h,maskId:c,titleId:_,extra:{attributes:v,styles:x,classes:m}})})}},aB={mixout:function(){return{icon:rB(iB)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Uy,n.nodeCallback=nB,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?it:r,a=n.callback,o=a===void 0?function(){}:a;return Uy(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(p,_){Promise.all([pp(i,s),c.iconName?pp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var m=ev(y,2),d=m[0],v=m[1];p([n,cv({icons:{main:d,mask:v},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:a,titleId:o,extra:h,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=ef(s);l.length>0&&(i.style=l);var u;return ov(o)&&(u=Vr("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},oB={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return rf({type:"layer"},function(){fa("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ge.cssPrefix,"-layers")].concat(ll(a)).join(" ")},children:o}]})}}}},sB={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return rf({type:"counter",content:n},function(){return fa("beforeDOMElementCreation",{content:n,params:r}),Bz({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(ge.cssPrefix,"-layers-counter")].concat(ll(s))}})})}}}},lB={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?fr:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,p=h===void 0?{}:h;return rf({type:"text",content:n},function(){return fa("beforeDOMElementCreation",{content:n,params:r}),Py({content:n,transform:fe(fe({},fr),a),title:s,extra:{attributes:f,styles:p,classes:["".concat(ge.cssPrefix,"-layers-text")].concat(ll(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(h1){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return ge.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Py({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},uB=new RegExp('"',"ug"),Fy=[1105920,1112319];function cB(t){var e=t.replace(uB,""),n=Mz(e,0),r=n>=Fy[0]&&n<=Fy[1],i=e.length===2?e[0]===e[1]:!1;return{value:up(i?e[0]:e),isSecondary:r||i}}function ky(t,e){var n="".concat(Q4).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var a=Oo(t.children),o=a.filter(function(R){return R.getAttribute(lp)===e})[0],s=Mi.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(rz),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?dt:tt,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Bs[h][l[2].toLowerCase()]:iz[h][u],_=cB(f),y=_.value,m=_.isSecondary,d=l[0].startsWith("FontAwesome"),v=lv(p,y),g=v;if(d){var x=Pz(y);x.iconName&&x.prefix&&(v=x.iconName,p=x.prefix)}if(v&&!m&&(!o||o.getAttribute(nv)!==p||o.getAttribute(rv)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var M=eB(),A=M.extra;A.attributes[lp]=e,pp(v,p).then(function(R){var P=cv(fe(fe({},M),{},{icons:{main:R,mask:uv()},prefix:p,iconName:g,extra:A,watchable:!0})),S=it.createElement("svg");e==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=P.map(function(T){return cl(T)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function fB(t){return Promise.all([ky(t,"::before"),ky(t,"::after")])}function dB(t){return t.parentNode!==document.head&&!~ez.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(lp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function zy(t){if(jr)return new Promise(function(e,n){var r=Oo(t.querySelectorAll("*")).filter(dB).map(fB),i=fv.begin("searchPseudoElements");O1(),Promise.all(r).then(function(){i(),vp(),e()}).catch(function(){i(),vp(),n()})})}var hB={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zy,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?it:r;ge.searchPseudoElements&&zy(i)}}},By=!1,pB={mixout:function(){return{dom:{unwatch:function(){O1(),By=!0}}}},hooks:function(){return{bootstrap:function(){Oy(fp("mutationObserverCallbacks",{}))},noAuto:function(){Kz()},watch:function(n){var r=n.observeMutationsRoot;By?vp():Oy(fp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Hy=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},mB={mixout:function(){return{parse:{transform:function(n){return Hy(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Hy(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:f,path:h};return{tag:"g",attributes:fe({},p.outer),children:[{tag:"g",attributes:fe({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:fe(fe({},r.icon.attributes),p.path)}]}]}}}},Hd={x:0,y:0,width:"100%",height:"100%"};function Gy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function vB(t){return t.tag==="g"?t.children:[t]}var gB={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?nf(i.split(" ").map(function(o){return o.trim()})):uv();return a.prefix||(a.prefix=wi()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,f=o.width,h=o.icon,p=mz({transform:l,containerWidth:f,iconWidth:u}),_={tag:"rect",attributes:fe(fe({},Hd),{},{fill:"white"})},y=c.children?{children:c.children.map(Gy)}:{},m={tag:"g",attributes:fe({},p.inner),children:[Gy(fe({tag:c.tag,attributes:fe(fe({},c.attributes),p.path)},y))]},d={tag:"g",attributes:fe({},p.outer),children:[m]},v="mask-".concat(s||Vs()),g="clip-".concat(s||Vs()),x={tag:"mask",attributes:fe(fe({},Hd),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,d]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:vB(h)},x]};return r.push(M,{tag:"rect",attributes:fe({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(v,")")},Hd)}),{children:r,attributes:i}}}},_B={provides:function(e){var n=!1;Mi.matchMedia&&(n=Mi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:fe(fe({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=fe(fe({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:fe(fe({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:fe(fe({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:fe(fe({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:fe(fe({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:fe(fe({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:fe(fe({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:fe(fe({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},yB={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},xB=[_z,aB,oB,sB,lB,hB,pB,mB,gB,_B,yB];Dz(xB,{mixoutsTo:wn});wn.noAuto;wn.config;wn.library;wn.dom;var gp=wn.parse;wn.findIconDefinition;wn.toHtml;var SB=wn.icon;wn.layer;wn.text;wn.counter;var U1={exports:{}},EB="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",MB=EB,wB=MB;function F1(){}function k1(){}k1.resetWarningCache=F1;var TB=function(){function t(r,i,a,o,s,l){if(l!==wB){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:k1,resetWarningCache:F1};return n.PropTypes=n,n};U1.exports=TB();var bB=U1.exports;const Be=$y(bB);function Vy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ui(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vy(Object(n),!0).forEach(function(r){Qa(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function bc(t){"@babel/helpers - typeof";return bc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bc(t)}function Qa(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function AB(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function RB(t,e){if(t==null)return{};var n=AB(t,e),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _p(t){return CB(t)||PB(t)||LB(t)||IB()}function CB(t){if(Array.isArray(t))return yp(t)}function PB(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function LB(t,e){if(t){if(typeof t=="string")return yp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yp(t,e)}}function yp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function IB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DB(t){var e,n=t.beat,r=t.fade,i=t.beatFade,a=t.bounce,o=t.shake,s=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,h=t.fixedWidth,p=t.inverse,_=t.border,y=t.listItem,m=t.flip,d=t.size,v=t.rotation,g=t.pull,x=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":p,"fa-border":_,"fa-li":y,"fa-flip":m===!0,"fa-flip-horizontal":m==="horizontal"||m==="both","fa-flip-vertical":m==="vertical"||m==="both"},Qa(e,"fa-".concat(d),typeof d<"u"&&d!==null),Qa(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),Qa(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Qa(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(x).map(function(M){return x[M]?M:null}).filter(function(M){return M})}function OB(t){return t=t-0,t===t}function z1(t){return OB(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var NB=["style"];function UB(t){return t.charAt(0).toUpperCase()+t.slice(1)}function FB(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=z1(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?e[UB(i)]=a:e[i]=a,e},{})}function B1(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return B1(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=FB(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[z1(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=RB(n,NB);return i.attrs.style=ui(ui({},i.attrs.style),o),t.apply(void 0,[e.tag,ui(ui({},i.attrs),s)].concat(_p(r)))}var H1=!1;try{H1=!0}catch{}function kB(){if(!H1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Wy(t){if(t&&bc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(gp.icon)return gp.icon(t);if(t===null)return null;if(t&&bc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Gd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Qa({},t,e):{}}var bi=tx.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,a=t.className,o=t.title,s=t.titleId,l=t.maskId,u=Wy(n),c=Gd("classes",[].concat(_p(DB(t)),_p(a.split(" ")))),f=Gd("transform",typeof t.transform=="string"?gp.transform(t.transform):t.transform),h=Gd("mask",Wy(r)),p=SB(u,ui(ui(ui(ui({},c),f),h),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!p)return kB("Could not find icon",u),null;var _=p.abstract,y={ref:e};return Object.keys(t).forEach(function(m){bi.defaultProps.hasOwnProperty(m)||(y[m]=t[m])}),zB(_[0],y)});bi.displayName="FontAwesomeIcon";bi.propTypes={beat:Be.bool,border:Be.bool,beatFade:Be.bool,bounce:Be.bool,className:Be.string,fade:Be.bool,flash:Be.bool,mask:Be.oneOfType([Be.object,Be.array,Be.string]),maskId:Be.string,fixedWidth:Be.bool,inverse:Be.bool,flip:Be.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Be.oneOfType([Be.object,Be.array,Be.string]),listItem:Be.bool,pull:Be.oneOf(["right","left"]),pulse:Be.bool,rotation:Be.oneOf([0,90,180,270]),shake:Be.bool,size:Be.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Be.bool,spinPulse:Be.bool,spinReverse:Be.bool,symbol:Be.oneOfType([Be.bool,Be.string]),title:Be.string,titleId:Be.string,transform:Be.oneOfType([Be.string,Be.object]),swapOpacity:Be.bool};bi.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var zB=B1.bind(null,tx.createElement),BB={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},HB={prefix:"fas",iconName:"left-long",icon:[512,512,["long-arrow-alt-left"],"f30a","M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z"]},GB={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]};function VB(){const t=sl(),e=t.state.connectWallet?"-translate-x-[110%]":"translate-x-0 md:translate-x-0",n=()=>{t.updateState("connectWallet",!1)};return pe.jsxs("div",{className:`w-screen h-screen md:w-96 md:h-96 bg-black text-white fixed top-10 right-[100vw] md:top-32 md:left-[100vw] transition-transform duration-1000 ${e} flex flex-col items-start px-5 py-5 rounded-2xl border-yellow-500 border`,children:[pe.jsx("h3",{children:"CONNECT YOUR WALLET"}),pe.jsx("p",{className:"text-sm",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad mollitia asperiores inventore dolore id adipisci consectetur, dignissimos suscipit cumque, quibusdam illo quis et nihil provident minus fugit, placeat nam!"}),pe.jsx("button",{className:"absolute top-5 right-5",onClick:n,children:pe.jsx(bi,{icon:GB})})]})}function WB(){const t=sl(),e=()=>{t.updateState("menu",!t.state.menu)},n=()=>{t.updateState("connectWallet",!0)};return pe.jsxs("div",{className:"w-full h-full flex flex-row items-center justify-between text-sm py-2 px-10",children:[pe.jsx("button",{className:"text-2xl",onClick:e,children:pe.jsx(bi,{icon:BB})}),pe.jsx("div",{children:"LOGO"}),pe.jsx("button",{className:"bg-white px-3 rounded-md h-full text-black sm:hover:bg-yellow-500 duration-200",onClick:n,children:"CONNECT TO WALLET"})]})}function $B(){const e=sl().state.menu?"translate-x-0":"-translate-x-full md:-translate-x-[300%]";return pe.jsxs("div",{className:`w-screen h-screen md:w-1/2 md:h-[80vh] bg-black fixed top-0 left-0 md:top-20 md:left-10 transition-transform duration-1000 ${e} text-sm flex flex-col items-center justify-end pb-24 md:pb-10 gap-y-10 pl-10 rounded-2xl md:border-yellow-500 md:border -z-10`,children:[pe.jsx("h2",{className:"text-3xl text-left w-full",children:"Art Auctions"}),pe.jsx("h3",{className:"text-left w-full",children:"THE NEXT 100 YEARS"}),pe.jsxs("ul",{className:"text-white flex flex-col items-start w-full",children:[pe.jsx("li",{children:pe.jsx("a",{children:"ARTISTS"})}),pe.jsx("li",{children:pe.jsx("a",{children:"FAQ"})}),pe.jsx("li",{children:pe.jsx("a",{children:"TIPS"})}),pe.jsx("li",{children:pe.jsx("a",{children:"ABOUT THIS"})})]}),pe.jsxs("ul",{className:"text-gray-500 flex flex-col items-start w-full",children:[pe.jsx("li",{children:pe.jsx("a",{children:"JOIN US"})}),pe.jsx("li",{children:pe.jsx("a",{children:"VISIT US"})}),pe.jsx("li",{children:pe.jsx("a",{children:"TERMS OF SERVICE"})}),pe.jsx("li",{children:pe.jsx("a",{children:"PRIVACY POLICY"})})]}),pe.jsx("div",{className:"w-full",children:pe.jsx("hr",{className:"w-[100%] border-gray-500"})}),pe.jsxs("div",{className:"flex flex-row items-center justify-start gap-x-5 text-xs self-start",children:[pe.jsx("p",{children:"IN PARTNERSHIP WITH RICHICODER"}),pe.jsx("div",{children:"LOGO"})]})]})}function jB(){return pe.jsxs("div",{id:"header",className:"fixed top-0 left-0 w-screen h-[50px] text-2xl text-white z-50 backdrop-blur bg-[rgba(0,0,0,0.7)]",children:[pe.jsx(WB,{}),pe.jsx($B,{}),pe.jsx(VB,{})]})}var XB={prefix:"far",iconName:"share-from-square",icon:[576,512,[61509,"share-square"],"f14d","M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"]},YB=XB;function qB(){const t=sl(),[e,n]=dr.useState("-z-[60] hidden"),[r,i]=dr.useState("-translate-x-full");dr.useEffect(()=>{t.state.layer?(n("z-[60] block"),setTimeout(()=>{i("translate-x-0")},100)):(i("-translate-x-full"),setTimeout(()=>{n("-z-[60] hidden")},500))},[t.state.layer]);const a=()=>{t.updateState("layer",!1)};return pe.jsx("div",{id:"layer",className:`fixed top-0 mt-[50px] left-0 w-screen h-[95vh] text-white ${e}`,children:pe.jsxs("div",{className:`w-full h-full bg-black text-white transition-transform duration-500 ${r} flex flex-row-reverse flex-wrap relative`,children:[pe.jsxs("div",{className:"w-full md:w-2/3 bg-gray-500 py-2 text-white text-md absolute top-0 left-0",children:[pe.jsxs("button",{className:"float-left ms-5",onClick:a,children:[pe.jsx(bi,{icon:HB})," GO BACK"]}),pe.jsxs("button",{className:"float-right me-5",children:["SHARE",pe.jsx(bi,{icon:YB})]})]}),pe.jsx("div",{id:"square-picture",className:"w-full md:w-1/3 bg-purple-500"}),pe.jsx("div",{id:"square-info",className:"flex flex-col w-full md:w-2/3 bg-black",children:pe.jsx("div",{children:"INFORMATION ON THE PHOTO !"})})]})})}function KB({children:t}){return pe.jsx("div",{id:"scroller",className:"fixed",children:t})}function ZB(){return pe.jsxs(pe.Fragment,{children:[pe.jsx(jB,{}),pe.jsx(KB,{}),pe.jsx(qB,{}),pe.jsx(G4,{})]})}Vd.createRoot(document.getElementById("root")).render(pe.jsx(H4,{children:pe.jsx(ZB,{})}));

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Qg={exports:{}},Pl={},Yg={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),nT=Symbol.for("react.portal"),rT=Symbol.for("react.fragment"),iT=Symbol.for("react.strict_mode"),sT=Symbol.for("react.profiler"),oT=Symbol.for("react.provider"),aT=Symbol.for("react.context"),lT=Symbol.for("react.forward_ref"),uT=Symbol.for("react.suspense"),cT=Symbol.for("react.memo"),hT=Symbol.for("react.lazy"),Ap=Symbol.iterator;function dT(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var Jg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xg=Object.assign,Zg={};function Fi(t,e,n){this.props=t,this.context=e,this.refs=Zg,this.updater=n||Jg}Fi.prototype.isReactComponent={};Fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ey(){}ey.prototype=Fi.prototype;function Lh(t,e,n){this.props=t,this.context=e,this.refs=Zg,this.updater=n||Jg}var Mh=Lh.prototype=new ey;Mh.constructor=Lh;Xg(Mh,Fi.prototype);Mh.isPureReactComponent=!0;var Rp=Array.isArray,ty=Object.prototype.hasOwnProperty,bh={current:null},ny={key:!0,ref:!0,__self:!0,__source:!0};function ry(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ty.call(e,r)&&!ny.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:mo,type:t,key:s,ref:o,props:i,_owner:bh.current}}function fT(t,e){return{$$typeof:mo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fh(t){return typeof t=="object"&&t!==null&&t.$$typeof===mo}function pT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pp=/\/+/g;function Ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pT(""+t.key):e.toString(36)}function wa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case mo:case nT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ou(o,0):r,Rp(i)?(n="",t!=null&&(n=t.replace(Pp,"$&/")+"/"),wa(i,e,n,"",function(h){return h})):i!=null&&(Fh(i)&&(i=fT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Rp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ou(s,l);o+=wa(s,e,n,u,i)}else if(u=dT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ou(s,l++),o+=wa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xo(t,e,n){if(t==null)return t;var r=[],i=0;return wa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function mT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Ea={transition:null},gT={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:bh};function iy(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Xo,forEach:function(t,e,n){Xo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xo(t,function(){e++}),e},toArray:function(t){return Xo(t,function(e){return e})||[]},only:function(t){if(!Fh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=Fi;X.Fragment=rT;X.Profiler=sT;X.PureComponent=Lh;X.StrictMode=iT;X.Suspense=uT;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gT;X.act=iy;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)ty.call(e,u)&&!ny.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:mo,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:aT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:oT,_context:t},t.Consumer=t};X.createElement=ry;X.createFactory=function(t){var e=ry.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:lT,render:t}};X.isValidElement=Fh;X.lazy=function(t){return{$$typeof:hT,_payload:{_status:-1,_result:t},_init:mT}};X.memo=function(t,e){return{$$typeof:cT,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=Ea.transition;Ea.transition={};try{t()}finally{Ea.transition=e}};X.unstable_act=iy;X.useCallback=function(t,e){return ot.current.useCallback(t,e)};X.useContext=function(t){return ot.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};X.useEffect=function(t,e){return ot.current.useEffect(t,e)};X.useId=function(){return ot.current.useId()};X.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return ot.current.useMemo(t,e)};X.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};X.useRef=function(t){return ot.current.useRef(t)};X.useState=function(t){return ot.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return ot.current.useTransition()};X.version="18.3.1";Yg.exports=X;var te=Yg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yT=te,_T=Symbol.for("react.element"),vT=Symbol.for("react.fragment"),wT=Object.prototype.hasOwnProperty,ET=yT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TT={key:!0,ref:!0,__self:!0,__source:!0};function sy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)wT.call(e,r)&&!TT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_T,type:t,key:s,ref:o,props:i,_owner:ET.current}}Pl.Fragment=vT;Pl.jsx=sy;Pl.jsxs=sy;Qg.exports=Pl;var V=Qg.exports,yc={},oy={exports:{}},wt={},ay={exports:{}},ly={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var J=B.length;B.push(G);e:for(;0<J;){var ge=J-1>>>1,le=B[ge];if(0<i(le,G))B[ge]=G,B[J]=le,J=ge;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],J=B.pop();if(J!==G){B[0]=J;e:for(var ge=0,le=B.length,Ie=le>>>1;ge<Ie;){var tn=2*(ge+1)-1,nn=B[tn],rn=tn+1,sn=B[rn];if(0>i(nn,J))rn<le&&0>i(sn,nn)?(B[ge]=sn,B[rn]=J,ge=rn):(B[ge]=nn,B[tn]=J,ge=tn);else if(rn<le&&0>i(sn,J))B[ge]=sn,B[rn]=J,ge=rn;else break e}}return G}function i(B,G){var J=B.sortIndex-G.sortIndex;return J!==0?J:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,g=3,I=!1,k=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(B){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=B)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function x(B){if(D=!1,A(B),!k)if(n(u)!==null)k=!0,Qi(j);else{var G=n(h);G!==null&&en(x,G.startTime-B)}}function j(B,G){k=!1,D&&(D=!1,S(y),y=-1),I=!0;var J=g;try{for(A(G),m=n(u);m!==null&&(!(m.expirationTime>G)||B&&!R());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,g=m.priorityLevel;var le=ge(m.expirationTime<=G);G=t.unstable_now(),typeof le=="function"?m.callback=le:m===n(u)&&r(u),A(G)}else r(u);m=n(u)}if(m!==null)var Ie=!0;else{var tn=n(h);tn!==null&&en(x,tn.startTime-G),Ie=!1}return Ie}finally{m=null,g=J,I=!1}}var U=!1,w=null,y=-1,_=5,E=-1;function R(){return!(t.unstable_now()-E<_)}function C(){if(w!==null){var B=t.unstable_now();E=B;var G=!0;try{G=w(!0,B)}finally{G?T():(U=!1,w=null)}}else U=!1}var T;if(typeof v=="function")T=function(){v(C)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,fr=Tt.port2;Tt.port1.onmessage=C,T=function(){fr.postMessage(null)}}else T=function(){L(C,0)};function Qi(B){w=B,U||(U=!0,T())}function en(B,G){y=L(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){k||I||(k=!0,Qi(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var J=g;g=G;try{return B()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=g;g=B;try{return G()}finally{g=J}},t.unstable_scheduleCallback=function(B,G,J){var ge=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,B){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,B={id:f++,callback:G,priorityLevel:B,startTime:J,expirationTime:le,sortIndex:-1},J>ge?(B.sortIndex=J,e(h,B),n(u)===null&&B===n(h)&&(D?(S(y),y=-1):D=!0,en(x,J-ge))):(B.sortIndex=le,e(u,B),k||I||(k=!0,Qi(j))),B},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(B){var G=g;return function(){var J=g;g=G;try{return B.apply(this,arguments)}finally{g=J}}}})(ly);ay.exports=ly;var IT=ay.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ST=te,vt=IT;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uy=new Set,zs={};function jr(t,e){Ti(t,e),Ti(t+"Capture",e)}function Ti(t,e){for(zs[t]=e,t=0;t<e.length;t++)uy.add(e[t])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=Object.prototype.hasOwnProperty,AT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cp={},kp={};function RT(t){return _c.call(kp,t)?!0:_c.call(Cp,t)?!1:AT.test(t)?kp[t]=!0:(Cp[t]=!0,!1)}function PT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function CT(t,e,n,r){if(e===null||typeof e>"u"||PT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uh=/[\-:]([a-z])/g;function jh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uh,jh);ze[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uh,jh);ze[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uh,jh);ze[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bh(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(CT(e,n,i,r)&&(n=null),r||i===null?RT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=ST.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),ei=Symbol.for("react.fragment"),zh=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),cy=Symbol.for("react.provider"),hy=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),Ec=Symbol.for("react.suspense_list"),Wh=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),dy=Symbol.for("react.offscreen"),Np=Symbol.iterator;function us(t){return t===null||typeof t!="object"?null:(t=Np&&t[Np]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Lu;function _s(t){if(Lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lu=e&&e[1]||""}return`
`+Lu+t}var Mu=!1;function bu(t,e){if(!t||Mu)return"";Mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Mu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_s(t):""}function kT(t){switch(t.tag){case 5:return _s(t.type);case 16:return _s("Lazy");case 13:return _s("Suspense");case 19:return _s("SuspenseList");case 0:case 2:case 15:return t=bu(t.type,!1),t;case 11:return t=bu(t.type.render,!1),t;case 1:return t=bu(t.type,!0),t;default:return""}}function Tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ei:return"Fragment";case Zr:return"Portal";case vc:return"Profiler";case zh:return"StrictMode";case wc:return"Suspense";case Ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hy:return(t.displayName||"Context")+".Consumer";case cy:return(t._context.displayName||"Context")+".Provider";case $h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wh:return e=t.displayName||null,e!==null?e:Tc(t.type)||"Memo";case On:e=t._payload,t=t._init;try{return Tc(t(e))}catch{}}return null}function NT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tc(e);case 8:return e===zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function DT(t){var e=fy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ea(t){t._valueTracker||(t._valueTracker=DT(t))}function py(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=fy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ba(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ic(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function my(t,e){e=e.checked,e!=null&&Bh(t,"checked",e,!1)}function Sc(t,e){my(t,e);var n=rr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ac(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ac(t,e,n){(e!=="number"||Ba(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vs=Array.isArray;function di(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(vs(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function gy(t,e){var n=rr(e.value),r=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ta,_y=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $s(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VT=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(t){VT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Cs[e]=Cs[t]})});function vy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Cs.hasOwnProperty(t)&&Cs[t]?(""+e).trim():e+"px"}function wy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var xT=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cc(t,e){if(e){if(xT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function kc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nc=null;function qh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dc=null,fi=null,pi=null;function Lp(t){if(t=_o(t)){if(typeof Dc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Vl(e),Dc(t.stateNode,t.type,e))}}function Ey(t){fi?pi?pi.push(t):pi=[t]:fi=t}function Ty(){if(fi){var t=fi,e=pi;if(pi=fi=null,Lp(t),e)for(t=0;t<e.length;t++)Lp(e[t])}}function Iy(t,e){return t(e)}function Sy(){}var Fu=!1;function Ay(t,e,n){if(Fu)return t(e,n);Fu=!0;try{return Iy(t,e,n)}finally{Fu=!1,(fi!==null||pi!==null)&&(Sy(),Ty())}}function Ws(t,e){var n=t.stateNode;if(n===null)return null;var r=Vl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Vc=!1;if(_n)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{Vc=!1}function OT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var ks=!1,za=null,$a=!1,xc=null,LT={onError:function(t){ks=!0,za=t}};function MT(t,e,n,r,i,s,o,l,u){ks=!1,za=null,OT.apply(LT,arguments)}function bT(t,e,n,r,i,s,o,l,u){if(MT.apply(this,arguments),ks){if(ks){var h=za;ks=!1,za=null}else throw Error(b(198));$a||($a=!0,xc=h)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ry(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mp(t){if(Br(t)!==t)throw Error(b(188))}function FT(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Mp(i),t;if(s===r)return Mp(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function Py(t){return t=FT(t),t!==null?Cy(t):null}function Cy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cy(t);if(e!==null)return e;t=t.sibling}return null}var ky=vt.unstable_scheduleCallback,bp=vt.unstable_cancelCallback,UT=vt.unstable_shouldYield,jT=vt.unstable_requestPaint,Ae=vt.unstable_now,BT=vt.unstable_getCurrentPriorityLevel,Hh=vt.unstable_ImmediatePriority,Ny=vt.unstable_UserBlockingPriority,Wa=vt.unstable_NormalPriority,zT=vt.unstable_LowPriority,Dy=vt.unstable_IdlePriority,Cl=null,qt=null;function $T(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:HT,WT=Math.log,qT=Math.LN2;function HT(t){return t>>>=0,t===0?32:31-(WT(t)/qT|0)|0}var na=64,ra=4194304;function ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ws(l):(s&=o,s!==0&&(r=ws(s)))}else o=n&~i,o!==0?r=ws(o):s!==0&&(r=ws(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Lt(e),i=1<<n,r|=t[n],e&=~i;return r}function KT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Lt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=KT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vy(){var t=na;return na<<=1,!(na&4194240)&&(na=64),t}function Uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Lt(e),t[e]=n}function QT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function xy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Oy,Gh,Ly,My,by,Lc=!1,ia=[],qn=null,Hn=null,Kn=null,qs=new Map,Hs=new Map,Mn=[],YT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fp(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hs.delete(e.pointerId)}}function hs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_o(e),e!==null&&Gh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function JT(t,e,n,r,i){switch(e){case"focusin":return qn=hs(qn,t,e,n,r,i),!0;case"dragenter":return Hn=hs(Hn,t,e,n,r,i),!0;case"mouseover":return Kn=hs(Kn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return qs.set(s,hs(qs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Hs.set(s,hs(Hs.get(s)||null,t,e,n,r,i)),!0}return!1}function Fy(t){var e=Er(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=Ry(n),e!==null){t.blockedOn=e,by(t.priority,function(){Ly(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ta(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nc=r,n.target.dispatchEvent(r),Nc=null}else return e=_o(n),e!==null&&Gh(e),t.blockedOn=n,!1;e.shift()}return!0}function Up(t,e,n){Ta(t)&&n.delete(e)}function XT(){Lc=!1,qn!==null&&Ta(qn)&&(qn=null),Hn!==null&&Ta(Hn)&&(Hn=null),Kn!==null&&Ta(Kn)&&(Kn=null),qs.forEach(Up),Hs.forEach(Up)}function ds(t,e){t.blockedOn===e&&(t.blockedOn=null,Lc||(Lc=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,XT)))}function Ks(t){function e(i){return ds(i,t)}if(0<ia.length){ds(ia[0],t);for(var n=1;n<ia.length;n++){var r=ia[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qn!==null&&ds(qn,t),Hn!==null&&ds(Hn,t),Kn!==null&&ds(Kn,t),qs.forEach(e),Hs.forEach(e),n=0;n<Mn.length;n++)r=Mn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Mn.length&&(n=Mn[0],n.blockedOn===null);)Fy(n),n.blockedOn===null&&Mn.shift()}var mi=Rn.ReactCurrentBatchConfig,Ha=!0;function ZT(t,e,n,r){var i=oe,s=mi.transition;mi.transition=null;try{oe=1,Qh(t,e,n,r)}finally{oe=i,mi.transition=s}}function e0(t,e,n,r){var i=oe,s=mi.transition;mi.transition=null;try{oe=4,Qh(t,e,n,r)}finally{oe=i,mi.transition=s}}function Qh(t,e,n,r){if(Ha){var i=Mc(t,e,n,r);if(i===null)Qu(t,e,r,Ka,n),Fp(t,r);else if(JT(i,t,e,n,r))r.stopPropagation();else if(Fp(t,r),e&4&&-1<YT.indexOf(t)){for(;i!==null;){var s=_o(i);if(s!==null&&Oy(s),s=Mc(t,e,n,r),s===null&&Qu(t,e,r,Ka,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qu(t,e,r,null,n)}}var Ka=null;function Mc(t,e,n,r){if(Ka=null,t=qh(r),t=Er(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ry(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ka=t,null}function Uy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BT()){case Hh:return 1;case Ny:return 4;case Wa:case zT:return 16;case Dy:return 536870912;default:return 16}default:return 16}}var zn=null,Yh=null,Ia=null;function jy(){if(Ia)return Ia;var t,e=Yh,n=e.length,r,i="value"in zn?zn.value:zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ia=i.slice(t,1<r?1-r:void 0)}function Sa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sa(){return!0}function jp(){return!1}function Et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sa:jp,this.isPropagationStopped=jp,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),e}var Ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jh=Et(Ui),yo=ve({},Ui,{view:0,detail:0}),t0=Et(yo),ju,Bu,fs,kl=ve({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fs&&(fs&&t.type==="mousemove"?(ju=t.screenX-fs.screenX,Bu=t.screenY-fs.screenY):Bu=ju=0,fs=t),ju)},movementY:function(t){return"movementY"in t?t.movementY:Bu}}),Bp=Et(kl),n0=ve({},kl,{dataTransfer:0}),r0=Et(n0),i0=ve({},yo,{relatedTarget:0}),zu=Et(i0),s0=ve({},Ui,{animationName:0,elapsedTime:0,pseudoElement:0}),o0=Et(s0),a0=ve({},Ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),l0=Et(a0),u0=ve({},Ui,{data:0}),zp=Et(u0),c0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=d0[t])?!!e[t]:!1}function Xh(){return f0}var p0=ve({},yo,{key:function(t){if(t.key){var e=c0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?h0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(t){return t.type==="keypress"?Sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),m0=Et(p0),g0=ve({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Et(g0),y0=ve({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),_0=Et(y0),v0=ve({},Ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),w0=Et(v0),E0=ve({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),T0=Et(E0),I0=[9,13,27,32],Zh=_n&&"CompositionEvent"in window,Ns=null;_n&&"documentMode"in document&&(Ns=document.documentMode);var S0=_n&&"TextEvent"in window&&!Ns,By=_n&&(!Zh||Ns&&8<Ns&&11>=Ns),Wp=" ",qp=!1;function zy(t,e){switch(t){case"keyup":return I0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $y(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ti=!1;function A0(t,e){switch(t){case"compositionend":return $y(e);case"keypress":return e.which!==32?null:(qp=!0,Wp);case"textInput":return t=e.data,t===Wp&&qp?null:t;default:return null}}function R0(t,e){if(ti)return t==="compositionend"||!Zh&&zy(t,e)?(t=jy(),Ia=Yh=zn=null,ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return By&&e.locale!=="ko"?null:e.data;default:return null}}var P0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!P0[t.type]:e==="textarea"}function Wy(t,e,n,r){Ey(r),e=Ga(e,"onChange"),0<e.length&&(n=new Jh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ds=null,Gs=null;function C0(t){t_(t,0)}function Nl(t){var e=ii(t);if(py(e))return t}function k0(t,e){if(t==="change")return e}var qy=!1;if(_n){var $u;if(_n){var Wu="oninput"in document;if(!Wu){var Kp=document.createElement("div");Kp.setAttribute("oninput","return;"),Wu=typeof Kp.oninput=="function"}$u=Wu}else $u=!1;qy=$u&&(!document.documentMode||9<document.documentMode)}function Gp(){Ds&&(Ds.detachEvent("onpropertychange",Hy),Gs=Ds=null)}function Hy(t){if(t.propertyName==="value"&&Nl(Gs)){var e=[];Wy(e,Gs,t,qh(t)),Ay(C0,e)}}function N0(t,e,n){t==="focusin"?(Gp(),Ds=e,Gs=n,Ds.attachEvent("onpropertychange",Hy)):t==="focusout"&&Gp()}function D0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(Gs)}function V0(t,e){if(t==="click")return Nl(e)}function x0(t,e){if(t==="input"||t==="change")return Nl(e)}function O0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:O0;function Qs(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_c.call(e,i)||!Ft(t[i],e[i]))return!1}return!0}function Qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yp(t,e){var n=Qp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qp(n)}}function Ky(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ky(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gy(){for(var t=window,e=Ba();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ba(t.document)}return e}function ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function L0(t){var e=Gy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ky(n.ownerDocument.documentElement,n)){if(r!==null&&ed(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Yp(n,s);var o=Yp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var M0=_n&&"documentMode"in document&&11>=document.documentMode,ni=null,bc=null,Vs=null,Fc=!1;function Jp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fc||ni==null||ni!==Ba(r)||(r=ni,"selectionStart"in r&&ed(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vs&&Qs(Vs,r)||(Vs=r,r=Ga(bc,"onSelect"),0<r.length&&(e=new Jh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ni)))}function oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ri={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},qu={},Qy={};_n&&(Qy=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function Dl(t){if(qu[t])return qu[t];if(!ri[t])return t;var e=ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qy)return qu[t]=e[n];return t}var Yy=Dl("animationend"),Jy=Dl("animationiteration"),Xy=Dl("animationstart"),Zy=Dl("transitionend"),e_=new Map,Xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){e_.set(t,e),jr(e,[t])}for(var Hu=0;Hu<Xp.length;Hu++){var Ku=Xp[Hu],b0=Ku.toLowerCase(),F0=Ku[0].toUpperCase()+Ku.slice(1);lr(b0,"on"+F0)}lr(Yy,"onAnimationEnd");lr(Jy,"onAnimationIteration");lr(Xy,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(Zy,"onTransitionEnd");Ti("onMouseEnter",["mouseout","mouseover"]);Ti("onMouseLeave",["mouseout","mouseover"]);Ti("onPointerEnter",["pointerout","pointerover"]);Ti("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Es));function Zp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bT(r,e,void 0,t),t.currentTarget=null}function t_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Zp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Zp(i,l,h),s=u}}}if($a)throw t=xc,$a=!1,xc=null,t}function de(t,e){var n=e[$c];n===void 0&&(n=e[$c]=new Set);var r=t+"__bubble";n.has(r)||(n_(e,t,2,!1),n.add(r))}function Gu(t,e,n){var r=0;e&&(r|=4),n_(n,t,r,e)}var aa="_reactListening"+Math.random().toString(36).slice(2);function Ys(t){if(!t[aa]){t[aa]=!0,uy.forEach(function(n){n!=="selectionchange"&&(U0.has(n)||Gu(n,!1,t),Gu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[aa]||(e[aa]=!0,Gu("selectionchange",!1,e))}}function n_(t,e,n,r){switch(Uy(e)){case 1:var i=ZT;break;case 4:i=e0;break;default:i=Qh}n=i.bind(null,e,n,t),i=void 0,!Vc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Er(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ay(function(){var h=s,f=qh(n),m=[];e:{var g=e_.get(t);if(g!==void 0){var I=Jh,k=t;switch(t){case"keypress":if(Sa(n)===0)break e;case"keydown":case"keyup":I=m0;break;case"focusin":k="focus",I=zu;break;case"focusout":k="blur",I=zu;break;case"beforeblur":case"afterblur":I=zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=r0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=_0;break;case Yy:case Jy:case Xy:I=o0;break;case Zy:I=w0;break;case"scroll":I=t0;break;case"wheel":I=T0;break;case"copy":case"cut":case"paste":I=l0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=$p}var D=(e&4)!==0,L=!D&&t==="scroll",S=D?g!==null?g+"Capture":null:g;D=[];for(var v=h,A;v!==null;){A=v;var x=A.stateNode;if(A.tag===5&&x!==null&&(A=x,S!==null&&(x=Ws(v,S),x!=null&&D.push(Js(v,x,A)))),L)break;v=v.return}0<D.length&&(g=new I(g,k,null,n,f),m.push({event:g,listeners:D}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==Nc&&(k=n.relatedTarget||n.fromElement)&&(Er(k)||k[vn]))break e;if((I||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,I?(k=n.relatedTarget||n.toElement,I=h,k=k?Er(k):null,k!==null&&(L=Br(k),k!==L||k.tag!==5&&k.tag!==6)&&(k=null)):(I=null,k=h),I!==k)){if(D=Bp,x="onMouseLeave",S="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(D=$p,x="onPointerLeave",S="onPointerEnter",v="pointer"),L=I==null?g:ii(I),A=k==null?g:ii(k),g=new D(x,v+"leave",I,n,f),g.target=L,g.relatedTarget=A,x=null,Er(f)===h&&(D=new D(S,v+"enter",k,n,f),D.target=A,D.relatedTarget=L,x=D),L=x,I&&k)t:{for(D=I,S=k,v=0,A=D;A;A=Qr(A))v++;for(A=0,x=S;x;x=Qr(x))A++;for(;0<v-A;)D=Qr(D),v--;for(;0<A-v;)S=Qr(S),A--;for(;v--;){if(D===S||S!==null&&D===S.alternate)break t;D=Qr(D),S=Qr(S)}D=null}else D=null;I!==null&&em(m,g,I,D,!1),k!==null&&L!==null&&em(m,L,k,D,!0)}}e:{if(g=h?ii(h):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var j=k0;else if(Hp(g))if(qy)j=x0;else{j=D0;var U=N0}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=V0);if(j&&(j=j(t,h))){Wy(m,j,n,f);break e}U&&U(t,g,h),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Ac(g,"number",g.value)}switch(U=h?ii(h):window,t){case"focusin":(Hp(U)||U.contentEditable==="true")&&(ni=U,bc=h,Vs=null);break;case"focusout":Vs=bc=ni=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Jp(m,n,f);break;case"selectionchange":if(M0)break;case"keydown":case"keyup":Jp(m,n,f)}var w;if(Zh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ti?zy(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(By&&n.locale!=="ko"&&(ti||y!=="onCompositionStart"?y==="onCompositionEnd"&&ti&&(w=jy()):(zn=f,Yh="value"in zn?zn.value:zn.textContent,ti=!0)),U=Ga(h,y),0<U.length&&(y=new zp(y,t,null,n,f),m.push({event:y,listeners:U}),w?y.data=w:(w=$y(n),w!==null&&(y.data=w)))),(w=S0?A0(t,n):R0(t,n))&&(h=Ga(h,"onBeforeInput"),0<h.length&&(f=new zp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=w))}t_(m,e)})}function Js(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ga(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ws(t,n),s!=null&&r.unshift(Js(t,s,i)),s=Ws(t,e),s!=null&&r.push(Js(t,s,i))),t=t.return}return r}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function em(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Ws(n,s),u!=null&&o.unshift(Js(n,u,l))):i||(u=Ws(n,s),u!=null&&o.push(Js(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var j0=/\r\n?/g,B0=/\u0000|\uFFFD/g;function tm(t){return(typeof t=="string"?t:""+t).replace(j0,`
`).replace(B0,"")}function la(t,e,n){if(e=tm(e),tm(t)!==e&&n)throw Error(b(425))}function Qa(){}var Uc=null,jc=null;function Bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,z0=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,$0=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(t){return nm.resolve(null).then(t).catch(W0)}:zc;function W0(t){setTimeout(function(){throw t})}function Yu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ks(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ks(e)}function Gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ji=Math.random().toString(36).slice(2),$t="__reactFiber$"+ji,Xs="__reactProps$"+ji,vn="__reactContainer$"+ji,$c="__reactEvents$"+ji,q0="__reactListeners$"+ji,H0="__reactHandles$"+ji;function Er(t){var e=t[$t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vn]||n[$t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rm(t);t!==null;){if(n=t[$t])return n;t=rm(t)}return e}t=n,n=t.parentNode}return null}function _o(t){return t=t[$t]||t[vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Vl(t){return t[Xs]||null}var Wc=[],si=-1;function ur(t){return{current:t}}function pe(t){0>si||(t.current=Wc[si],Wc[si]=null,si--)}function ce(t,e){si++,Wc[si]=t.current,t.current=e}var ir={},Ze=ur(ir),ht=ur(!1),Cr=ir;function Ii(t,e){var n=t.type.contextTypes;if(!n)return ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dt(t){return t=t.childContextTypes,t!=null}function Ya(){pe(ht),pe(Ze)}function im(t,e,n){if(Ze.current!==ir)throw Error(b(168));ce(Ze,e),ce(ht,n)}function r_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,NT(t)||"Unknown",i));return ve({},n,r)}function Ja(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Cr=Ze.current,ce(Ze,t),ce(ht,ht.current),!0}function sm(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=r_(t,e,Cr),r.__reactInternalMemoizedMergedChildContext=t,pe(ht),pe(Ze),ce(Ze,t)):pe(ht),ce(ht,n)}var un=null,xl=!1,Ju=!1;function i_(t){un===null?un=[t]:un.push(t)}function K0(t){xl=!0,i_(t)}function cr(){if(!Ju&&un!==null){Ju=!0;var t=0,e=oe;try{var n=un;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}un=null,xl=!1}catch(i){throw un!==null&&(un=un.slice(t+1)),ky(Hh,cr),i}finally{oe=e,Ju=!1}}return null}var oi=[],ai=0,Xa=null,Za=0,It=[],St=0,kr=null,cn=1,hn="";function _r(t,e){oi[ai++]=Za,oi[ai++]=Xa,Xa=t,Za=e}function s_(t,e,n){It[St++]=cn,It[St++]=hn,It[St++]=kr,kr=t;var r=cn;t=hn;var i=32-Lt(r)-1;r&=~(1<<i),n+=1;var s=32-Lt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cn=1<<32-Lt(e)+i|n<<i|r,hn=s+t}else cn=1<<s|n<<i|r,hn=t}function td(t){t.return!==null&&(_r(t,1),s_(t,1,0))}function nd(t){for(;t===Xa;)Xa=oi[--ai],oi[ai]=null,Za=oi[--ai],oi[ai]=null;for(;t===kr;)kr=It[--St],It[St]=null,hn=It[--St],It[St]=null,cn=It[--St],It[St]=null}var _t=null,gt=null,me=!1,Ot=null;function o_(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function om(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_t=t,gt=Gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_t=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:cn,overflow:hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_t=t,gt=null,!0):!1;default:return!1}}function qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hc(t){if(me){var e=gt;if(e){var n=e;if(!om(t,e)){if(qc(t))throw Error(b(418));e=Gn(n.nextSibling);var r=_t;e&&om(t,e)?o_(r,n):(t.flags=t.flags&-4097|2,me=!1,_t=t)}}else{if(qc(t))throw Error(b(418));t.flags=t.flags&-4097|2,me=!1,_t=t}}}function am(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_t=t}function ua(t){if(t!==_t)return!1;if(!me)return am(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bc(t.type,t.memoizedProps)),e&&(e=gt)){if(qc(t))throw a_(),Error(b(418));for(;e;)o_(t,e),e=Gn(e.nextSibling)}if(am(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=Gn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=_t?Gn(t.stateNode.nextSibling):null;return!0}function a_(){for(var t=gt;t;)t=Gn(t.nextSibling)}function Si(){gt=_t=null,me=!1}function rd(t){Ot===null?Ot=[t]:Ot.push(t)}var G0=Rn.ReactCurrentBatchConfig;function ps(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ca(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lm(t){var e=t._init;return e(t._payload)}function l_(t){function e(S,v){if(t){var A=S.deletions;A===null?(S.deletions=[v],S.flags|=16):A.push(v)}}function n(S,v){if(!t)return null;for(;v!==null;)e(S,v),v=v.sibling;return null}function r(S,v){for(S=new Map;v!==null;)v.key!==null?S.set(v.key,v):S.set(v.index,v),v=v.sibling;return S}function i(S,v){return S=Xn(S,v),S.index=0,S.sibling=null,S}function s(S,v,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<v?(S.flags|=2,v):A):(S.flags|=2,v)):(S.flags|=1048576,v)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,v,A,x){return v===null||v.tag!==6?(v=ic(A,S.mode,x),v.return=S,v):(v=i(v,A),v.return=S,v)}function u(S,v,A,x){var j=A.type;return j===ei?f(S,v,A.props.children,x,A.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===On&&lm(j)===v.type)?(x=i(v,A.props),x.ref=ps(S,v,A),x.return=S,x):(x=Da(A.type,A.key,A.props,null,S.mode,x),x.ref=ps(S,v,A),x.return=S,x)}function h(S,v,A,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=sc(A,S.mode,x),v.return=S,v):(v=i(v,A.children||[]),v.return=S,v)}function f(S,v,A,x,j){return v===null||v.tag!==7?(v=Rr(A,S.mode,x,j),v.return=S,v):(v=i(v,A),v.return=S,v)}function m(S,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ic(""+v,S.mode,A),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zo:return A=Da(v.type,v.key,v.props,null,S.mode,A),A.ref=ps(S,null,v),A.return=S,A;case Zr:return v=sc(v,S.mode,A),v.return=S,v;case On:var x=v._init;return m(S,x(v._payload),A)}if(vs(v)||us(v))return v=Rr(v,S.mode,A,null),v.return=S,v;ca(S,v)}return null}function g(S,v,A,x){var j=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(S,v,""+A,x);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Zo:return A.key===j?u(S,v,A,x):null;case Zr:return A.key===j?h(S,v,A,x):null;case On:return j=A._init,g(S,v,j(A._payload),x)}if(vs(A)||us(A))return j!==null?null:f(S,v,A,x,null);ca(S,A)}return null}function I(S,v,A,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return S=S.get(A)||null,l(v,S,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zo:return S=S.get(x.key===null?A:x.key)||null,u(v,S,x,j);case Zr:return S=S.get(x.key===null?A:x.key)||null,h(v,S,x,j);case On:var U=x._init;return I(S,v,A,U(x._payload),j)}if(vs(x)||us(x))return S=S.get(A)||null,f(v,S,x,j,null);ca(v,x)}return null}function k(S,v,A,x){for(var j=null,U=null,w=v,y=v=0,_=null;w!==null&&y<A.length;y++){w.index>y?(_=w,w=null):_=w.sibling;var E=g(S,w,A[y],x);if(E===null){w===null&&(w=_);break}t&&w&&E.alternate===null&&e(S,w),v=s(E,v,y),U===null?j=E:U.sibling=E,U=E,w=_}if(y===A.length)return n(S,w),me&&_r(S,y),j;if(w===null){for(;y<A.length;y++)w=m(S,A[y],x),w!==null&&(v=s(w,v,y),U===null?j=w:U.sibling=w,U=w);return me&&_r(S,y),j}for(w=r(S,w);y<A.length;y++)_=I(w,S,y,A[y],x),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?y:_.key),v=s(_,v,y),U===null?j=_:U.sibling=_,U=_);return t&&w.forEach(function(R){return e(S,R)}),me&&_r(S,y),j}function D(S,v,A,x){var j=us(A);if(typeof j!="function")throw Error(b(150));if(A=j.call(A),A==null)throw Error(b(151));for(var U=j=null,w=v,y=v=0,_=null,E=A.next();w!==null&&!E.done;y++,E=A.next()){w.index>y?(_=w,w=null):_=w.sibling;var R=g(S,w,E.value,x);if(R===null){w===null&&(w=_);break}t&&w&&R.alternate===null&&e(S,w),v=s(R,v,y),U===null?j=R:U.sibling=R,U=R,w=_}if(E.done)return n(S,w),me&&_r(S,y),j;if(w===null){for(;!E.done;y++,E=A.next())E=m(S,E.value,x),E!==null&&(v=s(E,v,y),U===null?j=E:U.sibling=E,U=E);return me&&_r(S,y),j}for(w=r(S,w);!E.done;y++,E=A.next())E=I(w,S,y,E.value,x),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?y:E.key),v=s(E,v,y),U===null?j=E:U.sibling=E,U=E);return t&&w.forEach(function(C){return e(S,C)}),me&&_r(S,y),j}function L(S,v,A,x){if(typeof A=="object"&&A!==null&&A.type===ei&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Zo:e:{for(var j=A.key,U=v;U!==null;){if(U.key===j){if(j=A.type,j===ei){if(U.tag===7){n(S,U.sibling),v=i(U,A.props.children),v.return=S,S=v;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===On&&lm(j)===U.type){n(S,U.sibling),v=i(U,A.props),v.ref=ps(S,U,A),v.return=S,S=v;break e}n(S,U);break}else e(S,U);U=U.sibling}A.type===ei?(v=Rr(A.props.children,S.mode,x,A.key),v.return=S,S=v):(x=Da(A.type,A.key,A.props,null,S.mode,x),x.ref=ps(S,v,A),x.return=S,S=x)}return o(S);case Zr:e:{for(U=A.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){n(S,v.sibling),v=i(v,A.children||[]),v.return=S,S=v;break e}else{n(S,v);break}else e(S,v);v=v.sibling}v=sc(A,S.mode,x),v.return=S,S=v}return o(S);case On:return U=A._init,L(S,v,U(A._payload),x)}if(vs(A))return k(S,v,A,x);if(us(A))return D(S,v,A,x);ca(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,v!==null&&v.tag===6?(n(S,v.sibling),v=i(v,A),v.return=S,S=v):(n(S,v),v=ic(A,S.mode,x),v.return=S,S=v),o(S)):n(S,v)}return L}var Ai=l_(!0),u_=l_(!1),el=ur(null),tl=null,li=null,id=null;function sd(){id=li=tl=null}function od(t){var e=el.current;pe(el),t._currentValue=e}function Kc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gi(t,e){tl=t,id=li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ct=!0),t.firstContext=null)}function Ct(t){var e=t._currentValue;if(id!==t)if(t={context:t,memoizedValue:e,next:null},li===null){if(tl===null)throw Error(b(308));li=t,tl.dependencies={lanes:0,firstContext:t}}else li=li.next=t;return e}var Tr=null;function ad(t){Tr===null?Tr=[t]:Tr.push(t)}function c_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ad(e)):(n.next=i.next,i.next=n),e.interleaved=n,wn(t,r)}function wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ln=!1;function ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wn(t,n)}return i=r.interleaved,i===null?(e.next=e,ad(r)):(e.next=i.next,i.next=e),r.interleaved=e,wn(t,n)}function Aa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kh(t,n)}}function um(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,r){var i=t.updateQueue;Ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,I=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,D=l;switch(g=e,I=n,D.tag){case 1:if(k=D.payload,typeof k=="function"){m=k.call(I,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=D.payload,g=typeof k=="function"?k.call(I,m,g):k,g==null)break e;m=ve({},m,g);break e;case 2:Ln=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else I={eventTime:I,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=I,u=m):f=f.next=I,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=m}}function cm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var vo={},Ht=ur(vo),Zs=ur(vo),eo=ur(vo);function Ir(t){if(t===vo)throw Error(b(174));return t}function ud(t,e){switch(ce(eo,e),ce(Zs,t),ce(Ht,vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pc(e,t)}pe(Ht),ce(Ht,e)}function Ri(){pe(Ht),pe(Zs),pe(eo)}function d_(t){Ir(eo.current);var e=Ir(Ht.current),n=Pc(e,t.type);e!==n&&(ce(Zs,t),ce(Ht,n))}function cd(t){Zs.current===t&&(pe(Ht),pe(Zs))}var ye=ur(0);function rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function hd(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var Ra=Rn.ReactCurrentDispatcher,Zu=Rn.ReactCurrentBatchConfig,Nr=0,_e=null,ke=null,Oe=null,il=!1,xs=!1,to=0,Q0=0;function Ke(){throw Error(b(321))}function dd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}function fd(t,e,n,r,i,s){if(Nr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ra.current=t===null||t.memoizedState===null?Z0:eI,t=n(r,i),xs){s=0;do{if(xs=!1,to=0,25<=s)throw Error(b(301));s+=1,Oe=ke=null,e.updateQueue=null,Ra.current=tI,t=n(r,i)}while(xs)}if(Ra.current=sl,e=ke!==null&&ke.next!==null,Nr=0,Oe=ke=_e=null,il=!1,e)throw Error(b(300));return t}function pd(){var t=to!==0;return to=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?_e.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function kt(){if(ke===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Oe===null?_e.memoizedState:Oe.next;if(e!==null)Oe=e,ke=t;else{if(t===null)throw Error(b(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Oe===null?_e.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function no(t,e){return typeof e=="function"?e(t):e}function ec(t){var e=kt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Nr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,_e.lanes|=f,Dr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Ft(r,e.memoizedState)||(ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Dr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tc(t){var e=kt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ft(s,e.memoizedState)||(ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function f_(){}function p_(t,e){var n=_e,r=kt(),i=e(),s=!Ft(r.memoizedState,i);if(s&&(r.memoizedState=i,ct=!0),r=r.queue,md(y_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,ro(9,g_.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(b(349));Nr&30||m_(n,e,i)}return i}function m_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function g_(t,e,n,r){e.value=n,e.getSnapshot=r,__(e)&&v_(t)}function y_(t,e,n){return n(function(){__(e)&&v_(t)})}function __(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ft(t,n)}catch{return!0}}function v_(t){var e=wn(t,1);e!==null&&Mt(e,t,1,-1)}function hm(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:t},e.queue=t,t=t.dispatch=X0.bind(null,_e,t),[e.memoizedState,t]}function ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function w_(){return kt().memoizedState}function Pa(t,e,n,r){var i=zt();_e.flags|=t,i.memoizedState=ro(1|e,n,void 0,r===void 0?null:r)}function Ol(t,e,n,r){var i=kt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&dd(r,o.deps)){i.memoizedState=ro(e,n,s,r);return}}_e.flags|=t,i.memoizedState=ro(1|e,n,s,r)}function dm(t,e){return Pa(8390656,8,t,e)}function md(t,e){return Ol(2048,8,t,e)}function E_(t,e){return Ol(4,2,t,e)}function T_(t,e){return Ol(4,4,t,e)}function I_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function S_(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4,4,I_.bind(null,e,t),n)}function gd(){}function A_(t,e){var n=kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function R_(t,e){var n=kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function P_(t,e,n){return Nr&21?(Ft(n,e)||(n=Vy(),_e.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=n)}function Y0(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Zu.transition;Zu.transition={};try{t(!1),e()}finally{oe=n,Zu.transition=r}}function C_(){return kt().memoizedState}function J0(t,e,n){var r=Jn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},k_(t))N_(e,n);else if(n=c_(t,e,n,r),n!==null){var i=it();Mt(n,t,r,i),D_(n,e,r)}}function X0(t,e,n){var r=Jn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(k_(t))N_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ft(l,o)){var u=e.interleaved;u===null?(i.next=i,ad(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=c_(t,e,i,r),n!==null&&(i=it(),Mt(n,t,r,i),D_(n,e,r))}}function k_(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function N_(t,e){xs=il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kh(t,n)}}var sl={readContext:Ct,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},Z0={readContext:Ct,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:dm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pa(4194308,4,I_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pa(4,2,t,e)},useMemo:function(t,e){var n=zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=J0.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:hm,useDebugValue:gd,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=hm(!1),e=t[0];return t=Y0.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=zt();if(me){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Le===null)throw Error(b(349));Nr&30||m_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,dm(y_.bind(null,r,s,t),[t]),r.flags|=2048,ro(9,g_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zt(),e=Le.identifierPrefix;if(me){var n=hn,r=cn;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=to++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Q0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eI={readContext:Ct,useCallback:A_,useContext:Ct,useEffect:md,useImperativeHandle:S_,useInsertionEffect:E_,useLayoutEffect:T_,useMemo:R_,useReducer:ec,useRef:w_,useState:function(){return ec(no)},useDebugValue:gd,useDeferredValue:function(t){var e=kt();return P_(e,ke.memoizedState,t)},useTransition:function(){var t=ec(no)[0],e=kt().memoizedState;return[t,e]},useMutableSource:f_,useSyncExternalStore:p_,useId:C_,unstable_isNewReconciler:!1},tI={readContext:Ct,useCallback:A_,useContext:Ct,useEffect:md,useImperativeHandle:S_,useInsertionEffect:E_,useLayoutEffect:T_,useMemo:R_,useReducer:tc,useRef:w_,useState:function(){return tc(no)},useDebugValue:gd,useDeferredValue:function(t){var e=kt();return ke===null?e.memoizedState=t:P_(e,ke.memoizedState,t)},useTransition:function(){var t=tc(no)[0],e=kt().memoizedState;return[t,e]},useMutableSource:f_,useSyncExternalStore:p_,useId:C_,unstable_isNewReconciler:!1};function Vt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ll={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=it(),i=Jn(t),s=mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Qn(t,s,i),e!==null&&(Mt(e,t,i,r),Aa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=it(),i=Jn(t),s=mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qn(t,s,i),e!==null&&(Mt(e,t,i,r),Aa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=it(),r=Jn(t),i=mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qn(t,i,r),e!==null&&(Mt(e,t,r,n),Aa(e,t,r))}};function fm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qs(n,r)||!Qs(i,s):!0}function V_(t,e,n){var r=!1,i=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(i=dt(e)?Cr:Ze.current,r=e.contextTypes,s=(r=r!=null)?Ii(t,i):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ll,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function pm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ll.enqueueReplaceState(e,e.state,null)}function Qc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ld(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ct(s):(s=dt(e)?Cr:Ze.current,i.context=Ii(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ll.enqueueReplaceState(i,i.state,null),nl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Pi(t,e){try{var n="",r=e;do n+=kT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nI=typeof WeakMap=="function"?WeakMap:Map;function x_(t,e,n){n=mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){al||(al=!0,oh=r),Yc(t,e)},n}function O_(t,e,n){n=mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yc(t,e),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=gI.bind(null,t,e,n),e.then(t,t))}function gm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ym(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mn(-1,1),e.tag=2,Qn(n,e,1))),n.lanes|=1),t)}var rI=Rn.ReactCurrentOwner,ct=!1;function rt(t,e,n,r){e.child=t===null?u_(e,null,n,r):Ai(e,t.child,n,r)}function _m(t,e,n,r,i){n=n.render;var s=e.ref;return gi(e,i),r=fd(t,e,n,r,s,i),n=pd(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(me&&n&&td(e),e.flags|=1,rt(t,e,r,i),e.child)}function vm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,L_(t,e,s,r,i)):(t=Da(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qs,n(o,r)&&t.ref===e.ref)return En(t,e,i)}return e.flags|=1,t=Xn(s,r),t.ref=e.ref,t.return=e,e.child=t}function L_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qs(s,r)&&t.ref===e.ref)if(ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ct=!0);else return e.lanes=t.lanes,En(t,e,i)}return Jc(t,e,n,r,i)}function M_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(ci,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(ci,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(ci,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(ci,mt),mt|=r;return rt(t,e,i,n),e.child}function b_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jc(t,e,n,r,i){var s=dt(n)?Cr:Ze.current;return s=Ii(e,s),gi(e,i),n=fd(t,e,n,r,s,i),r=pd(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(me&&r&&td(e),e.flags|=1,rt(t,e,n,i),e.child)}function wm(t,e,n,r,i){if(dt(n)){var s=!0;Ja(e)}else s=!1;if(gi(e,i),e.stateNode===null)Ca(t,e),V_(e,n,r),Qc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ct(h):(h=dt(n)?Cr:Ze.current,h=Ii(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&pm(e,o,r,h),Ln=!1;var g=e.memoizedState;o.state=g,nl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||ht.current||Ln?(typeof f=="function"&&(Gc(e,n,f,r),u=e.memoizedState),(l=Ln||fm(e,n,l,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,h_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Vt(e.type,l),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ct(u):(u=dt(n)?Cr:Ze.current,u=Ii(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&pm(e,o,r,u),Ln=!1,g=e.memoizedState,o.state=g,nl(e,r,o,i);var k=e.memoizedState;l!==m||g!==k||ht.current||Ln?(typeof I=="function"&&(Gc(e,n,I,r),k=e.memoizedState),(h=Ln||fm(e,n,h,r,g,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Xc(t,e,n,r,s,i)}function Xc(t,e,n,r,i,s){b_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sm(e,n,!1),En(t,e,s);r=e.stateNode,rI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ai(e,t.child,null,s),e.child=Ai(e,null,l,s)):rt(t,e,l,s),e.memoizedState=r.state,i&&sm(e,n,!0),e.child}function F_(t){var e=t.stateNode;e.pendingContext?im(t,e.pendingContext,e.pendingContext!==e.context):e.context&&im(t,e.context,!1),ud(t,e.containerInfo)}function Em(t,e,n,r,i){return Si(),rd(i),e.flags|=256,rt(t,e,n,r),e.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function U_(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return Hc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fl(o,r,0,null),t=Rr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=eh(n),e.memoizedState=Zc,t):yd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return iI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Xn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Xn(l,s):(s=Rr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zc,r}return s=t.child,t=s.sibling,r=Xn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function yd(t,e){return e=Fl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ha(t,e,n,r){return r!==null&&rd(r),Ai(e,t.child,null,n),t=yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=nc(Error(b(422))),ha(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fl({mode:"visible",children:r.children},i,0,null),s=Rr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ai(e,t.child,null,o),e.child.memoizedState=eh(o),e.memoizedState=Zc,s);if(!(e.mode&1))return ha(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=nc(s,r,void 0),ha(t,e,o,r)}if(l=(o&t.childLanes)!==0,ct||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wn(t,i),Mt(r,t,i,-1))}return Id(),r=nc(Error(b(421))),ha(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=yI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=Gn(i.nextSibling),_t=e,me=!0,Ot=null,t!==null&&(It[St++]=cn,It[St++]=hn,It[St++]=kr,cn=t.id,hn=t.overflow,kr=e),e=yd(e,r.children),e.flags|=4096,e)}function Tm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kc(t.return,e,n)}function rc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function j_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rt(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tm(t,n,e);else if(t.tag===19)Tm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&rl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),rc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&rl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}rc(e,!0,n,null,s);break;case"together":rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ca(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sI(t,e,n){switch(e.tag){case 3:F_(e),Si();break;case 5:d_(e);break;case 1:dt(e.type)&&Ja(e);break;case 4:ud(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(el,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?U_(t,e,n):(ce(ye,ye.current&1),t=En(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return j_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,M_(t,e,n)}return En(t,e,n)}var B_,th,z_,$_;B_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};th=function(){};z_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ir(Ht.current);var s=null;switch(n){case"input":i=Ic(t,i),r=Ic(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=Rc(t,i),r=Rc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qa)}Cc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(zs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(zs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};$_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ms(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function oI(t,e,n){var r=e.pendingProps;switch(nd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return dt(e.type)&&Ya(),Ge(e),null;case 3:return r=e.stateNode,Ri(),pe(ht),pe(Ze),hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ua(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ot!==null&&(uh(Ot),Ot=null))),th(t,e),Ge(e),null;case 5:cd(e);var i=Ir(eo.current);if(n=e.type,t!==null&&e.stateNode!=null)z_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Ge(e),null}if(t=Ir(Ht.current),ua(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$t]=e,r[Xs]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Es.length;i++)de(Es[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Dp(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":xp(r,s),de("invalid",r)}Cc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&la(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&la(r.textContent,l,t),i=["children",""+l]):zs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":ea(r),Vp(r,s,!0);break;case"textarea":ea(r),Op(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$t]=e,t[Xs]=r,B_(t,e,!1,!1),e.stateNode=t;e:{switch(o=kc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Es.length;i++)de(Es[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Dp(t,r),i=Ic(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),de("invalid",t);break;case"textarea":xp(t,r),i=Rc(t,r),de("invalid",t);break;default:i=r}Cc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?wy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_y(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&$s(t,u):typeof u=="number"&&$s(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Bh(t,s,u,o))}switch(n){case"input":ea(t),Vp(t,r,!1);break;case"textarea":ea(t),Op(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?di(t,!!r.multiple,s,!1):r.defaultValue!=null&&di(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Qa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)$_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Ir(eo.current),Ir(Ht.current),ua(e)){if(r=e.stateNode,n=e.memoizedProps,r[$t]=e,(s=r.nodeValue!==n)&&(t=_t,t!==null))switch(t.tag){case 3:la(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&la(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=e,e.stateNode=r}return Ge(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&gt!==null&&e.mode&1&&!(e.flags&128))a_(),Si(),e.flags|=98560,s=!1;else if(s=ua(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[$t]=e}else Si(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else Ot!==null&&(uh(Ot),Ot=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Ne===0&&(Ne=3):Id())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return Ri(),th(t,e),t===null&&Ys(e.stateNode.containerInfo),Ge(e),null;case 10:return od(e.type._context),Ge(e),null;case 17:return dt(e.type)&&Ya(),Ge(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ms(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rl(t),o!==null){for(e.flags|=128,ms(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Ci&&(e.flags|=128,r=!0,ms(s,!1),e.lanes=4194304)}else{if(!r)if(t=rl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Ge(e),null}else 2*Ae()-s.renderingStartTime>Ci&&n!==1073741824&&(e.flags|=128,r=!0,ms(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return Td(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function aI(t,e){switch(nd(e),e.tag){case 1:return dt(e.type)&&Ya(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ri(),pe(ht),pe(Ze),hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cd(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Si()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Ri(),null;case 10:return od(e.type._context),null;case 22:case 23:return Td(),null;case 24:return null;default:return null}}var da=!1,Je=!1,lI=typeof WeakSet=="function"?WeakSet:Set,z=null;function ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function nh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Im=!1;function uI(t,e){if(Uc=Ha,t=Gy(),ed(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,g=null;t:for(;;){for(var I;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)g=m,m=I;for(;;){if(m===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(I=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jc={focusedElem:t,selectionRange:n},Ha=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var D=k.memoizedProps,L=k.memoizedState,S=e.stateNode,v=S.getSnapshotBeforeUpdate(e.elementType===e.type?D:Vt(e.type,D),L);S.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){Te(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return k=Im,Im=!1,k}function Os(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&nh(e,n,s)}i=i.next}while(i!==r)}}function Ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function W_(t){var e=t.alternate;e!==null&&(t.alternate=null,W_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$t],delete e[Xs],delete e[$c],delete e[q0],delete e[H0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q_(t){return t.tag===5||t.tag===3||t.tag===4}function Sm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qa));else if(r!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}function sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}var be=null,xt=!1;function Vn(t,e,n){for(n=n.child;n!==null;)H_(t,e,n),n=n.sibling}function H_(t,e,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:Je||ui(n,e);case 6:var r=be,i=xt;be=null,Vn(t,e,n),be=r,xt=i,be!==null&&(xt?(t=be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(xt?(t=be,n=n.stateNode,t.nodeType===8?Yu(t.parentNode,n):t.nodeType===1&&Yu(t,n),Ks(t)):Yu(be,n.stateNode));break;case 4:r=be,i=xt,be=n.stateNode.containerInfo,xt=!0,Vn(t,e,n),be=r,xt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nh(n,e,o),i=i.next}while(i!==r)}Vn(t,e,n);break;case 1:if(!Je&&(ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Vn(t,e,n),Je=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function Am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lI),e.forEach(function(r){var i=_I.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,xt=!1;break e;case 3:be=l.stateNode.containerInfo,xt=!0;break e;case 4:be=l.stateNode.containerInfo,xt=!0;break e}l=l.return}if(be===null)throw Error(b(160));H_(s,o,i),be=null,xt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)K_(e,t),e=e.sibling}function K_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),Bt(t),r&4){try{Os(3,t,t.return),Ml(3,t)}catch(D){Te(t,t.return,D)}try{Os(5,t,t.return)}catch(D){Te(t,t.return,D)}}break;case 1:Dt(e,t),Bt(t),r&512&&n!==null&&ui(n,n.return);break;case 5:if(Dt(e,t),Bt(t),r&512&&n!==null&&ui(n,n.return),t.flags&32){var i=t.stateNode;try{$s(i,"")}catch(D){Te(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&my(i,s),kc(l,o);var h=kc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?wy(i,m):f==="dangerouslySetInnerHTML"?_y(i,m):f==="children"?$s(i,m):Bh(i,f,m,h)}switch(l){case"input":Sc(i,s);break;case"textarea":gy(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?di(i,!!s.multiple,I,!1):g!==!!s.multiple&&(s.defaultValue!=null?di(i,!!s.multiple,s.defaultValue,!0):di(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xs]=s}catch(D){Te(t,t.return,D)}}break;case 6:if(Dt(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Te(t,t.return,D)}}break;case 3:if(Dt(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ks(e.containerInfo)}catch(D){Te(t,t.return,D)}break;case 4:Dt(e,t),Bt(t);break;case 13:Dt(e,t),Bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wd=Ae())),r&4&&Am(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(h=Je)||f,Dt(e,t),Je=h):Dt(e,t),Bt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(z=t,f=t.child;f!==null;){for(m=z=f;z!==null;){switch(g=z,I=g.child,g.tag){case 0:case 11:case 14:case 15:Os(4,g,g.return);break;case 1:ui(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(D){Te(r,n,D)}}break;case 5:ui(g,g.return);break;case 22:if(g.memoizedState!==null){Pm(m);continue}}I!==null?(I.return=g,z=I):Pm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=vy("display",o))}catch(D){Te(t,t.return,D)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(D){Te(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Dt(e,t),Bt(t),r&4&&Am(t);break;case 21:break;default:Dt(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q_(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($s(i,""),r.flags&=-33);var s=Sm(t);sh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Sm(t);ih(t,l,o);break;default:throw Error(b(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cI(t,e,n){z=t,G_(t)}function G_(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||da;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=da;var h=Je;if(da=o,(Je=u)&&!h)for(z=i;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?Cm(i):u!==null?(u.return=o,z=u):Cm(i);for(;s!==null;)z=s,G_(s),s=s.sibling;z=i,da=l,Je=h}Rm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):Rm(t)}}function Rm(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Ml(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Ks(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Je||e.flags&512&&rh(e)}catch(g){Te(e,e.return,g)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function Pm(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function Cm(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ml(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{rh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{rh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var hI=Math.ceil,ol=Rn.ReactCurrentDispatcher,_d=Rn.ReactCurrentOwner,Rt=Rn.ReactCurrentBatchConfig,re=0,Le=null,Pe=null,je=0,mt=0,ci=ur(0),Ne=0,io=null,Dr=0,bl=0,vd=0,Ls=null,lt=null,wd=0,Ci=1/0,ln=null,al=!1,oh=null,Yn=null,fa=!1,$n=null,ll=0,Ms=0,ah=null,ka=-1,Na=0;function it(){return re&6?Ae():ka!==-1?ka:ka=Ae()}function Jn(t){return t.mode&1?re&2&&je!==0?je&-je:G0.transition!==null?(Na===0&&(Na=Vy()),Na):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Uy(t.type)),t):1}function Mt(t,e,n,r){if(50<Ms)throw Ms=0,ah=null,Error(b(185));go(t,n,r),(!(re&2)||t!==Le)&&(t===Le&&(!(re&2)&&(bl|=n),Ne===4&&bn(t,je)),ft(t,r),n===1&&re===0&&!(e.mode&1)&&(Ci=Ae()+500,xl&&cr()))}function ft(t,e){var n=t.callbackNode;GT(t,e);var r=qa(t,t===Le?je:0);if(r===0)n!==null&&bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bp(n),e===1)t.tag===0?K0(km.bind(null,t)):i_(km.bind(null,t)),$0(function(){!(re&6)&&cr()}),n=null;else{switch(xy(r)){case 1:n=Hh;break;case 4:n=Ny;break;case 16:n=Wa;break;case 536870912:n=Dy;break;default:n=Wa}n=nv(n,Q_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Q_(t,e){if(ka=-1,Na=0,re&6)throw Error(b(327));var n=t.callbackNode;if(yi()&&t.callbackNode!==n)return null;var r=qa(t,t===Le?je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ul(t,r);else{e=r;var i=re;re|=2;var s=J_();(Le!==t||je!==e)&&(ln=null,Ci=Ae()+500,Ar(t,e));do try{pI();break}catch(l){Y_(t,l)}while(!0);sd(),ol.current=s,re=i,Pe!==null?e=0:(Le=null,je=0,e=Ne)}if(e!==0){if(e===2&&(i=Oc(t),i!==0&&(r=i,e=lh(t,i))),e===1)throw n=io,Ar(t,0),bn(t,r),ft(t,Ae()),n;if(e===6)bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!dI(i)&&(e=ul(t,r),e===2&&(s=Oc(t),s!==0&&(r=s,e=lh(t,s))),e===1))throw n=io,Ar(t,0),bn(t,r),ft(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:vr(t,lt,ln);break;case 3:if(bn(t,r),(r&130023424)===r&&(e=wd+500-Ae(),10<e)){if(qa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){it(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zc(vr.bind(null,t,lt,ln),e);break}vr(t,lt,ln);break;case 4:if(bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Lt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hI(r/1960))-r,10<r){t.timeoutHandle=zc(vr.bind(null,t,lt,ln),r);break}vr(t,lt,ln);break;case 5:vr(t,lt,ln);break;default:throw Error(b(329))}}}return ft(t,Ae()),t.callbackNode===n?Q_.bind(null,t):null}function lh(t,e){var n=Ls;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=ul(t,e),t!==2&&(e=lt,lt=n,e!==null&&uh(e)),t}function uh(t){lt===null?lt=t:lt.push.apply(lt,t)}function dI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bn(t,e){for(e&=~vd,e&=~bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Lt(e),r=1<<n;t[n]=-1,e&=~r}}function km(t){if(re&6)throw Error(b(327));yi();var e=qa(t,0);if(!(e&1))return ft(t,Ae()),null;var n=ul(t,e);if(t.tag!==0&&n===2){var r=Oc(t);r!==0&&(e=r,n=lh(t,r))}if(n===1)throw n=io,Ar(t,0),bn(t,e),ft(t,Ae()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,lt,ln),ft(t,Ae()),null}function Ed(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Ci=Ae()+500,xl&&cr())}}function Vr(t){$n!==null&&$n.tag===0&&!(re&6)&&yi();var e=re;re|=1;var n=Rt.transition,r=oe;try{if(Rt.transition=null,oe=1,t)return t()}finally{oe=r,Rt.transition=n,re=e,!(re&6)&&cr()}}function Td(){mt=ci.current,pe(ci)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,z0(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(nd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ya();break;case 3:Ri(),pe(ht),pe(Ze),hd();break;case 5:cd(r);break;case 4:Ri();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:od(r.type._context);break;case 22:case 23:Td()}n=n.return}if(Le=t,Pe=t=Xn(t.current,null),je=mt=e,Ne=0,io=null,vd=bl=Dr=0,lt=Ls=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Tr=null}return t}function Y_(t,e){do{var n=Pe;try{if(sd(),Ra.current=sl,il){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}il=!1}if(Nr=0,Oe=ke=_e=null,xs=!1,to=0,_d.current=null,n===null||n.return===null){Ne=1,io=e,Pe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=gm(o);if(I!==null){I.flags&=-257,ym(I,o,l,s,e),I.mode&1&&mm(s,h,e),e=I,u=h;var k=e.updateQueue;if(k===null){var D=new Set;D.add(u),e.updateQueue=D}else k.add(u);break e}else{if(!(e&1)){mm(s,h,e),Id();break e}u=Error(b(426))}}else if(me&&l.mode&1){var L=gm(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),ym(L,o,l,s,e),rd(Pi(u,l));break e}}s=u=Pi(u,l),Ne!==4&&(Ne=2),Ls===null?Ls=[s]:Ls.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=x_(s,u,e);um(s,S);break e;case 1:l=u;var v=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Yn===null||!Yn.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=O_(s,l,e);um(s,x);break e}}s=s.return}while(s!==null)}Z_(n)}catch(j){e=j,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function J_(){var t=ol.current;return ol.current=sl,t===null?sl:t}function Id(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Le===null||!(Dr&268435455)&&!(bl&268435455)||bn(Le,je)}function ul(t,e){var n=re;re|=2;var r=J_();(Le!==t||je!==e)&&(ln=null,Ar(t,e));do try{fI();break}catch(i){Y_(t,i)}while(!0);if(sd(),re=n,ol.current=r,Pe!==null)throw Error(b(261));return Le=null,je=0,Ne}function fI(){for(;Pe!==null;)X_(Pe)}function pI(){for(;Pe!==null&&!UT();)X_(Pe)}function X_(t){var e=tv(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?Z_(t):Pe=e,_d.current=null}function Z_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aI(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Pe=null;return}}else if(n=oI(n,e,mt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);Ne===0&&(Ne=5)}function vr(t,e,n){var r=oe,i=Rt.transition;try{Rt.transition=null,oe=1,mI(t,e,n,r)}finally{Rt.transition=i,oe=r}return null}function mI(t,e,n,r){do yi();while($n!==null);if(re&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(QT(t,s),t===Le&&(Pe=Le=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fa||(fa=!0,nv(Wa,function(){return yi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rt.transition,Rt.transition=null;var o=oe;oe=1;var l=re;re|=4,_d.current=null,uI(t,n),K_(n,t),L0(jc),Ha=!!Uc,jc=Uc=null,t.current=n,cI(n),jT(),re=l,oe=o,Rt.transition=s}else t.current=n;if(fa&&(fa=!1,$n=t,ll=i),s=t.pendingLanes,s===0&&(Yn=null),$T(n.stateNode),ft(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(al)throw al=!1,t=oh,oh=null,t;return ll&1&&t.tag!==0&&yi(),s=t.pendingLanes,s&1?t===ah?Ms++:(Ms=0,ah=t):Ms=0,cr(),null}function yi(){if($n!==null){var t=xy(ll),e=Rt.transition,n=oe;try{if(Rt.transition=null,oe=16>t?16:t,$n===null)var r=!1;else{if(t=$n,$n=null,ll=0,re&6)throw Error(b(331));var i=re;for(re|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(z=h;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:Os(8,f,s)}var m=f.child;if(m!==null)m.return=f,z=m;else for(;z!==null;){f=z;var g=f.sibling,I=f.return;if(W_(f),f===h){z=null;break}if(g!==null){g.return=I,z=g;break}z=I}}}var k=s.alternate;if(k!==null){var D=k.child;if(D!==null){k.child=null;do{var L=D.sibling;D.sibling=null,D=L}while(D!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Os(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,z=S;break e}z=s.return}}var v=t.current;for(z=v;z!==null;){o=z;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,z=A;else e:for(o=v;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ml(9,l)}}catch(j){Te(l,l.return,j)}if(l===o){z=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,z=x;break e}z=l.return}}if(re=i,cr(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Cl,t)}catch{}r=!0}return r}finally{oe=n,Rt.transition=e}}return!1}function Nm(t,e,n){e=Pi(n,e),e=x_(t,e,1),t=Qn(t,e,1),e=it(),t!==null&&(go(t,1,e),ft(t,e))}function Te(t,e,n){if(t.tag===3)Nm(t,t,n);else for(;e!==null;){if(e.tag===3){Nm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){t=Pi(n,t),t=O_(e,t,1),e=Qn(e,t,1),t=it(),e!==null&&(go(e,1,t),ft(e,t));break}}e=e.return}}function gI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=it(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(je&n)===n&&(Ne===4||Ne===3&&(je&130023424)===je&&500>Ae()-wd?Ar(t,0):vd|=n),ft(t,e)}function ev(t,e){e===0&&(t.mode&1?(e=ra,ra<<=1,!(ra&130023424)&&(ra=4194304)):e=1);var n=it();t=wn(t,e),t!==null&&(go(t,e,n),ft(t,n))}function yI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ev(t,n)}function _I(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),ev(t,n)}var tv;tv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ht.current)ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ct=!1,sI(t,e,n);ct=!!(t.flags&131072)}else ct=!1,me&&e.flags&1048576&&s_(e,Za,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ca(t,e),t=e.pendingProps;var i=Ii(e,Ze.current);gi(e,n),i=fd(null,e,r,t,i,n);var s=pd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dt(r)?(s=!0,Ja(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ld(e),i.updater=Ll,e.stateNode=i,i._reactInternals=e,Qc(e,r,t,n),e=Xc(null,e,r,!0,s,n)):(e.tag=0,me&&s&&td(e),rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ca(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=wI(r),t=Vt(r,t),i){case 0:e=Jc(null,e,r,t,n);break e;case 1:e=wm(null,e,r,t,n);break e;case 11:e=_m(null,e,r,t,n);break e;case 14:e=vm(null,e,r,Vt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Jc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),wm(t,e,r,i,n);case 3:e:{if(F_(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,h_(t,e),nl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Pi(Error(b(423)),e),e=Em(t,e,r,n,i);break e}else if(r!==i){i=Pi(Error(b(424)),e),e=Em(t,e,r,n,i);break e}else for(gt=Gn(e.stateNode.containerInfo.firstChild),_t=e,me=!0,Ot=null,n=u_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Si(),r===i){e=En(t,e,n);break e}rt(t,e,r,n)}e=e.child}return e;case 5:return d_(e),t===null&&Hc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bc(r,i)?o=null:s!==null&&Bc(r,s)&&(e.flags|=32),b_(t,e),rt(t,e,o,n),e.child;case 6:return t===null&&Hc(e),null;case 13:return U_(t,e,n);case 4:return ud(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ai(e,null,r,n):rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),_m(t,e,r,i,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(el,r._currentValue),r._currentValue=o,s!==null)if(Ft(s.value,o)){if(s.children===i.children&&!ht.current){e=En(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=mn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Kc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Kc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gi(e,n),i=Ct(i),r=r(i),e.flags|=1,rt(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),vm(t,e,r,i,n);case 15:return L_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ca(t,e),e.tag=1,dt(r)?(t=!0,Ja(e)):t=!1,gi(e,n),V_(e,r,i),Qc(e,r,i,n),Xc(null,e,r,!0,t,n);case 19:return j_(t,e,n);case 22:return M_(t,e,n)}throw Error(b(156,e.tag))};function nv(t,e){return ky(t,e)}function vI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new vI(t,e,n,r)}function Sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wI(t){if(typeof t=="function")return Sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$h)return 11;if(t===Wh)return 14}return 2}function Xn(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Da(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ei:return Rr(n.children,i,s,e);case zh:o=8,i|=8;break;case vc:return t=At(12,n,e,i|2),t.elementType=vc,t.lanes=s,t;case wc:return t=At(13,n,e,i),t.elementType=wc,t.lanes=s,t;case Ec:return t=At(19,n,e,i),t.elementType=Ec,t.lanes=s,t;case dy:return Fl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cy:o=10;break e;case hy:o=9;break e;case $h:o=11;break e;case Wh:o=14;break e;case On:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function Fl(t,e,n,r){return t=At(22,t,r,e),t.elementType=dy,t.lanes=n,t.stateNode={isHidden:!1},t}function ic(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function sc(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ad(t,e,n,r,i,s,o,l,u){return t=new EI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ld(s),t}function TI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function rv(t){if(!t)return ir;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(dt(n))return r_(t,n,e)}return e}function iv(t,e,n,r,i,s,o,l,u){return t=Ad(n,r,!0,t,i,s,o,l,u),t.context=rv(null),n=t.current,r=it(),i=Jn(n),s=mn(r,i),s.callback=e??null,Qn(n,s,i),t.current.lanes=i,go(t,i,r),ft(t,r),t}function Ul(t,e,n,r){var i=e.current,s=it(),o=Jn(i);return n=rv(n),e.context===null?e.context=n:e.pendingContext=n,e=mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qn(i,e,o),t!==null&&(Mt(t,i,o,s),Aa(t,i,o)),o}function cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rd(t,e){Dm(t,e),(t=t.alternate)&&Dm(t,e)}function II(){return null}var sv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pd(t){this._internalRoot=t}jl.prototype.render=Pd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Ul(t,e,null,null)};jl.prototype.unmount=Pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Ul(null,t,null,null)}),e[vn]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=My();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mn.length&&e!==0&&e<Mn[n].priority;n++);Mn.splice(n,0,t),n===0&&Fy(t)}};function Cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function SI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=cl(o);s.call(h)}}var o=iv(e,r,t,0,null,!1,!1,"",Vm);return t._reactRootContainer=o,t[vn]=o.current,Ys(t.nodeType===8?t.parentNode:t),Vr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=cl(u);l.call(h)}}var u=Ad(t,0,!1,null,null,!1,!1,"",Vm);return t._reactRootContainer=u,t[vn]=u.current,Ys(t.nodeType===8?t.parentNode:t),Vr(function(){Ul(e,u,n,r)}),u}function zl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=cl(o);l.call(u)}}Ul(e,o,t,i)}else o=SI(n,e,t,i,r);return cl(o)}Oy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ws(e.pendingLanes);n!==0&&(Kh(e,n|1),ft(e,Ae()),!(re&6)&&(Ci=Ae()+500,cr()))}break;case 13:Vr(function(){var r=wn(t,1);if(r!==null){var i=it();Mt(r,t,1,i)}}),Rd(t,1)}};Gh=function(t){if(t.tag===13){var e=wn(t,134217728);if(e!==null){var n=it();Mt(e,t,134217728,n)}Rd(t,134217728)}};Ly=function(t){if(t.tag===13){var e=Jn(t),n=wn(t,e);if(n!==null){var r=it();Mt(n,t,e,r)}Rd(t,e)}};My=function(){return oe};by=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Dc=function(t,e,n){switch(e){case"input":if(Sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vl(r);if(!i)throw Error(b(90));py(r),Sc(r,i)}}}break;case"textarea":gy(t,n);break;case"select":e=n.value,e!=null&&di(t,!!n.multiple,e,!1)}};Iy=Ed;Sy=Vr;var AI={usingClientEntryPoint:!1,Events:[_o,ii,Vl,Ey,Ty,Ed]},gs={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RI={bundleType:gs.bundleType,version:gs.version,rendererPackageName:gs.rendererPackageName,rendererConfig:gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Py(t),t===null?null:t.stateNode},findFiberByHostInstance:gs.findFiberByHostInstance||II,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{Cl=pa.inject(RI),qt=pa}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AI;wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cd(e))throw Error(b(200));return TI(t,e,null,n)};wt.createRoot=function(t,e){if(!Cd(t))throw Error(b(299));var n=!1,r="",i=sv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ad(t,1,!1,null,null,n,!1,r,i),t[vn]=e.current,Ys(t.nodeType===8?t.parentNode:t),new Pd(e)};wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=Py(e),t=t===null?null:t.stateNode,t};wt.flushSync=function(t){return Vr(t)};wt.hydrate=function(t,e,n){if(!Bl(e))throw Error(b(200));return zl(null,t,e,!0,n)};wt.hydrateRoot=function(t,e,n){if(!Cd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=sv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=iv(e,null,t,1,n??null,i,!1,s,o),t[vn]=e.current,Ys(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jl(e)};wt.render=function(t,e,n){if(!Bl(e))throw Error(b(200));return zl(null,t,e,!1,n)};wt.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(b(40));return t._reactRootContainer?(Vr(function(){zl(null,null,t,!1,function(){t._reactRootContainer=null,t[vn]=null})}),!0):!1};wt.unstable_batchedUpdates=Ed;wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bl(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return zl(t,e,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ov)}catch(t){console.error(t)}}ov(),oy.exports=wt;var PI=oy.exports,xm=PI;yc.createRoot=xm.createRoot,yc.hydrateRoot=xm.hydrateRoot;var Om={};/**
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
 */const av=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},CI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},lv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,I=h&63;u||(I=64,o||(g=64)),r.push(n[f],n[m],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(av(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new kI;const g=s<<2|l>>4;if(r.push(g),h!==64){const I=l<<4&240|h>>2;if(r.push(I),m!==64){const k=h<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NI=function(t){const e=av(t);return lv.encodeByteArray(e,!0)},hl=function(t){return NI(t).replace(/\./g,"")},uv=function(t){try{return lv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function DI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VI=()=>DI().__FIREBASE_DEFAULTS__,xI=()=>{if(typeof process>"u"||typeof Om>"u")return;const t=Om.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uv(t[1]);return e&&JSON.parse(e)},$l=()=>{try{return VI()||xI()||OI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cv=t=>{var e,n;return(n=(e=$l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},LI=t=>{const e=cv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hv=()=>{var t;return(t=$l())===null||t===void 0?void 0:t.config},dv=t=>{var e;return(e=$l())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class MI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function bI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[hl(JSON.stringify(n)),hl(JSON.stringify(o)),""].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function UI(){var t;const e=(t=$l())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function BI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $I(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WI(){return!UI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qI(){try{return typeof indexedDB=="object"}catch{return!1}}function HI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const KI="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KI,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?GI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Pn(i,l,r)}}function GI(t,e){return t.replace(QI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const QI=/\{\$([^}]+)}/g;function YI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lm(s)&&Lm(o)){if(!dl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lm(t){return t!==null&&typeof t=="object"}/**
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
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ts(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Is(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JI(t,e){const n=new XI(t,e);return n.subscribe.bind(n)}class XI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=oc),i.error===void 0&&(i.error=oc),i.complete===void 0&&(i.complete=oc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oc(){}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wr="[DEFAULT]";/**
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
 */class eS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new MI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nS(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tS(t){return t===wr?void 0:t}function nS(t){return t.instantiationMode==="EAGER"}/**
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
 */class rS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const iS={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},sS=ee.INFO,oS={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},aS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=oS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kd{constructor(e){this.name=e,this._logLevel=sS,this._logHandler=aS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const lS=(t,e)=>e.some(n=>t instanceof n);let Mm,bm;function uS(){return Mm||(Mm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cS(){return bm||(bm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fv=new WeakMap,ch=new WeakMap,pv=new WeakMap,ac=new WeakMap,Nd=new WeakMap;function hS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Zn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fv.set(n,t)}).catch(()=>{}),Nd.set(e,t),e}function dS(t){if(ch.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ch.set(t,e)}let hh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fS(t){hh=t(hh)}function pS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lc(this),e,...n);return pv.set(r,e.sort?e.sort():[e]),Zn(r)}:cS().includes(t)?function(...e){return t.apply(lc(this),e),Zn(fv.get(this))}:function(...e){return Zn(t.apply(lc(this),e))}}function mS(t){return typeof t=="function"?pS(t):(t instanceof IDBTransaction&&dS(t),lS(t,uS())?new Proxy(t,hh):t)}function Zn(t){if(t instanceof IDBRequest)return hS(t);if(ac.has(t))return ac.get(t);const e=mS(t);return e!==t&&(ac.set(t,e),Nd.set(e,t)),e}const lc=t=>Nd.get(t);function gS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Zn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Zn(o.result),u.oldVersion,u.newVersion,Zn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const yS=["get","getKey","getAll","getAllKeys","count"],_S=["put","add","delete","clear"],uc=new Map;function Fm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uc.get(e))return uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return uc.set(e,s),s}fS(t=>({...t,get:(e,n,r)=>Fm(e,n)||t.get(e,n,r),has:(e,n)=>!!Fm(e,n)||t.has(e,n)}));/**
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
 */class vS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dh="@firebase/app",Um="0.10.13";/**
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
 */const Tn=new kd("@firebase/app"),ES="@firebase/app-compat",TS="@firebase/analytics-compat",IS="@firebase/analytics",SS="@firebase/app-check-compat",AS="@firebase/app-check",RS="@firebase/auth",PS="@firebase/auth-compat",CS="@firebase/database",kS="@firebase/data-connect",NS="@firebase/database-compat",DS="@firebase/functions",VS="@firebase/functions-compat",xS="@firebase/installations",OS="@firebase/installations-compat",LS="@firebase/messaging",MS="@firebase/messaging-compat",bS="@firebase/performance",FS="@firebase/performance-compat",US="@firebase/remote-config",jS="@firebase/remote-config-compat",BS="@firebase/storage",zS="@firebase/storage-compat",$S="@firebase/firestore",WS="@firebase/vertexai-preview",qS="@firebase/firestore-compat",HS="firebase",KS="10.14.1";/**
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
 */const fh="[DEFAULT]",GS={[dh]:"fire-core",[ES]:"fire-core-compat",[IS]:"fire-analytics",[TS]:"fire-analytics-compat",[AS]:"fire-app-check",[SS]:"fire-app-check-compat",[RS]:"fire-auth",[PS]:"fire-auth-compat",[CS]:"fire-rtdb",[kS]:"fire-data-connect",[NS]:"fire-rtdb-compat",[DS]:"fire-fn",[VS]:"fire-fn-compat",[xS]:"fire-iid",[OS]:"fire-iid-compat",[LS]:"fire-fcm",[MS]:"fire-fcm-compat",[bS]:"fire-perf",[FS]:"fire-perf-compat",[US]:"fire-rc",[jS]:"fire-rc-compat",[BS]:"fire-gcs",[zS]:"fire-gcs-compat",[$S]:"fire-fst",[qS]:"fire-fst-compat",[WS]:"fire-vertex","fire-js":"fire-js",[HS]:"fire-js-all"};/**
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
 */const fl=new Map,QS=new Map,ph=new Map;function jm(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ki(t){const e=t.name;if(ph.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;ph.set(e,t);for(const n of fl.values())jm(n,t);for(const n of QS.values())jm(n,t);return!0}function Dd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wt(t){return t.settings!==void 0}/**
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
 */const YS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},er=new wo("app","Firebase",YS);/**
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
 */class JS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
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
 */const Bi=KS;function mv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw er.create("bad-app-name",{appName:String(i)});if(n||(n=hv()),!n)throw er.create("no-options");const s=fl.get(i);if(s){if(dl(n,s.options)&&dl(r,s.config))return s;throw er.create("duplicate-app",{appName:i})}const o=new rS(i);for(const u of ph.values())o.addComponent(u);const l=new JS(n,r,o);return fl.set(i,l),l}function gv(t=fh){const e=fl.get(t);if(!e&&t===fh&&hv())return mv();if(!e)throw er.create("no-app",{appName:t});return e}function tr(t,e,n){var r;let i=(r=GS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(l.join(" "));return}ki(new xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const XS="firebase-heartbeat-database",ZS=1,so="firebase-heartbeat-store";let cc=null;function yv(){return cc||(cc=gS(XS,ZS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(so)}catch(n){console.warn(n)}}}}).catch(t=>{throw er.create("idb-open",{originalErrorMessage:t.message})})),cc}async function eA(t){try{const n=(await yv()).transaction(so),r=await n.objectStore(so).get(_v(t));return await n.done,r}catch(e){if(e instanceof Pn)Tn.warn(e.message);else{const n=er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function Bm(t,e){try{const r=(await yv()).transaction(so,"readwrite");await r.objectStore(so).put(e,_v(t)),await r.done}catch(n){if(n instanceof Pn)Tn.warn(n.message);else{const r=er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function _v(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tA=1024,nA=30*24*60*60*1e3;class rA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=nA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zm(),{heartbeatsToSend:r,unsentEntries:i}=iA(this._heartbeatsCache.heartbeats),s=hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Tn.warn(n),""}}}function zm(){return new Date().toISOString().substring(0,10)}function iA(t,e=tA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$m(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$m(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qI()?HI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $m(t){return hl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oA(t){ki(new xr("platform-logger",e=>new vS(e),"PRIVATE")),ki(new xr("heartbeat",e=>new rA(e),"PRIVATE")),tr(dh,Um,t),tr(dh,Um,"esm2017"),tr("fire-js","")}oA("");function Vd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function vv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aA=vv,wv=new wo("auth","Firebase",vv());/**
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
 */const pl=new kd("@firebase/auth");function lA(t,...e){pl.logLevel<=ee.WARN&&pl.warn(`Auth (${Bi}): ${t}`,...e)}function Va(t,...e){pl.logLevel<=ee.ERROR&&pl.error(`Auth (${Bi}): ${t}`,...e)}/**
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
 */function Ut(t,...e){throw xd(t,...e)}function Kt(t,...e){return xd(t,...e)}function Ev(t,e,n){const r=Object.assign(Object.assign({},aA()),{[e]:n});return new wo("auth","Firebase",r).create(e,{appName:t.name})}function gn(t){return Ev(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wv.create(t,...e)}function H(t,e,...n){if(!t)throw xd(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Va(e),new Error(e)}function In(t,e){t||dn(e)}/**
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
 */function mh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uA(){return Wm()==="http:"||Wm()==="https:"}function Wm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uA()||BI()||"connection"in navigator)?navigator.onLine:!0}function hA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class To{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=FI()||zI()}get(){return cA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Od(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Tv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fA=new To(3e4,6e4);function hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cn(t,e,n,r,i={}){return Iv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Eo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return jI()||(h.referrerPolicy="no-referrer"),Tv.fetch()(Sv(t,t.config.apiHost,n,l),h)})}async function Iv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dA),e);try{const i=new mA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ma(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ev(t,f,h);Ut(t,f)}}catch(i){if(i instanceof Pn)throw i;Ut(t,"network-request-failed",{message:String(i)})}}async function Io(t,e,n,r,i={}){const s=await Cn(t,e,n,r,i);return"mfaPendingCredential"in s&&Ut(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Sv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Od(t.config,i):`${t.config.apiScheme}://${i}`}function pA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),fA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kt(t,e,r);return i.customData._tokenResponse=n,i}function qm(t){return t!==void 0&&t.enterprise!==void 0}class gA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yA(t,e){return Cn(t,"GET","/v2/recaptchaConfig",hr(t,e))}/**
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
 */async function _A(t,e){return Cn(t,"POST","/v1/accounts:delete",e)}async function Av(t,e){return Cn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vA(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),i=Ld(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bs(hc(i.auth_time)),issuedAtTime:bs(hc(i.iat)),expirationTime:bs(hc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hc(t){return Number(t)*1e3}function Ld(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Va("JWT malformed, contained fewer than 3 sections"),null;try{const i=uv(n);return i?JSON.parse(i):(Va("Failed to decode base64 JWT payload"),null)}catch(i){return Va("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hm(t){const e=Ld(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ni(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&wA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class EA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ml(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ni(t,Av(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Rv(s.providerUserInfo):[],l=IA(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new gh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function TA(t){const e=Ve(t);await ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Rv(t){return t.map(e=>{var{providerId:n}=e,r=Vd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function SA(t,e){const n=await Iv(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Sv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Tv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AA(t,e){return Cn(t,"POST","/v2/accounts:revokeToken",hr(t,e))}/**
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
 */class _i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=Hm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await SA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _i;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _i,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function xn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ni(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vA(this,e)}reload(){return TA(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wt(this.auth.app))return Promise.reject(gn(this.auth));const e=await this.getIdToken();return await Ni(this,_A(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:x,isAnonymous:j,providerData:U,stsTokenManager:w}=n;H(A&&w,e,"internal-error");const y=_i.fromJSON(this.name,w);H(typeof A=="string",e,"internal-error"),xn(m,e.name),xn(g,e.name),H(typeof x=="boolean",e,"internal-error"),H(typeof j=="boolean",e,"internal-error"),xn(I,e.name),xn(k,e.name),xn(D,e.name),xn(L,e.name),xn(S,e.name),xn(v,e.name);const _=new fn({uid:A,auth:e,email:g,emailVerified:x,displayName:m,isAnonymous:j,photoURL:k,phoneNumber:I,tenantId:D,stsTokenManager:y,createdAt:S,lastLoginAt:v});return U&&Array.isArray(U)&&(_.providerData=U.map(E=>Object.assign({},E))),L&&(_._redirectEventId=L),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new _i;i.updateFromServerResponse(n);const s=new fn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ml(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Rv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new _i;l.updateFromIdToken(r);const u=new fn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Km=new Map;function pn(t){In(t instanceof Function,"Expected a class definition");let e=Km.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Km.set(t,e),e)}/**
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
 */class Pv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pv.type="NONE";const Gm=Pv;/**
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
 */function xa(t,e,n){return`firebase:${t}:${e}:${n}`}class vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xa(this.userKey,i.apiKey,s),this.fullPersistenceKey=xa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vi(pn(Gm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||pn(Gm);const o=xa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=fn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new vi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new vi(s,e,r))}}/**
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
 */function Qm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xv(e))return"Blackberry";if(Ov(e))return"Webos";if(kv(e))return"Safari";if((e.includes("chrome/")||Nv(e))&&!e.includes("edge/"))return"Chrome";if(Vv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cv(t=et()){return/firefox\//i.test(t)}function kv(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nv(t=et()){return/crios\//i.test(t)}function Dv(t=et()){return/iemobile/i.test(t)}function Vv(t=et()){return/android/i.test(t)}function xv(t=et()){return/blackberry/i.test(t)}function Ov(t=et()){return/webos/i.test(t)}function Md(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RA(t=et()){var e;return Md(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PA(){return $I()&&document.documentMode===10}function Lv(t=et()){return Md(t)||Vv(t)||Ov(t)||xv(t)||/windows phone/i.test(t)||Dv(t)}/**
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
 */function Mv(t,e=[]){let n;switch(t){case"Browser":n=Qm(et());break;case"Worker":n=`${Qm(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bi}/${r}`}/**
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
 */class CA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function kA(t,e={}){return Cn(t,"GET","/v2/passwordPolicy",hr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const NA=6;class DA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class VA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ym(this),this.idTokenSubscription=new Ym(this),this.beforeStateQueue=new CA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Av(this,{idToken:e}),r=await fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wt(this.app))return Promise.reject(gn(this));const n=e?Ve(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wt(this.app)?Promise.reject(gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wt(this.app)?Promise.reject(gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kA(this),n=new DA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await AA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await vi.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zr(t){return Ve(t)}class Ym{constructor(e){this.auth=e,this.observer=null,this.addObserver=JI(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xA(t){Wl=t}function bv(t){return Wl.loadJS(t)}function OA(){return Wl.recaptchaEnterpriseScript}function LA(){return Wl.gapiScript}function MA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bA="recaptcha-enterprise",FA="NO_RECAPTCHA";class UA{constructor(e){this.type=bA,this.auth=zr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{yA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new gA(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;qm(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(FA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&qm(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=OA();u.length!==0&&(u+=l),bv(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Jm(t,e,n,r=!1){const i=new UA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function yh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Jm(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Jm(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function jA(t,e){const n=Dd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(dl(s,e??{}))return i;Ut(i,"already-initialized")}return n.initialize({options:e})}function BA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zA(t,e,n){const r=zr(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Fv(e),{host:o,port:l}=$A(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),WA()}function Fv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $A(t){const e=Fv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xm(o)}}}function Xm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function qA(t,e){return Cn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function HA(t,e){return Io(t,"POST","/v1/accounts:signInWithPassword",hr(t,e))}/**
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
 */async function KA(t,e){return Io(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}async function GA(t,e){return Io(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}/**
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
 */class oo extends bd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yh(e,n,"signInWithPassword",HA);case"emailLink":return KA(e,{email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yh(e,r,"signUpPassword",qA);case"emailLink":return GA(e,{idToken:n,email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function wi(t,e){return Io(t,"POST","/v1/accounts:signInWithIdp",hr(t,e))}/**
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
 */const QA="http://localhost";class Or extends bd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Or(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wi(e,n)}buildRequest(){const e={requestUri:QA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
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
 */function YA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JA(t){const e=Ts(Is(t)).link,n=e?Ts(Is(e)).deep_link_id:null,r=Ts(Is(t)).deep_link_id;return(r?Ts(Is(r)).link:null)||r||n||e||t}class Fd{constructor(e){var n,r,i,s,o,l;const u=Ts(Is(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=YA((i=u.mode)!==null&&i!==void 0?i:null);H(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=JA(e);try{return new Fd(n)}catch{return null}}}/**
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
 */class zi{constructor(){this.providerId=zi.PROVIDER_ID}static credential(e,n){return oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fd.parseLink(n);return H(r,"argument-error"),oo._fromEmailAndCode(e,r.code,r.tenantId)}}zi.PROVIDER_ID="password";zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Uv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class So extends Uv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends So{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class Un extends So{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
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
 */class jn extends So{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
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
 */class Bn extends So{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
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
 */async function XA(t,e){return Io(t,"POST","/v1/accounts:signUp",hr(t,e))}/**
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
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await fn._fromIdTokenResponse(e,r,i),o=Zm(r);return new Lr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Zm(r);return new Lr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Zm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class gl extends Pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gl(e,n,r,i)}}function jv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gl._fromErrorAndOperation(t,s,e,r):s})}async function ZA(t,e,n=!1){const r=await Ni(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lr._forOperation(t,"link",r)}/**
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
 */async function eR(t,e,n=!1){const{auth:r}=t;if(Wt(r.app))return Promise.reject(gn(r));const i="reauthenticate";try{const s=await Ni(t,jv(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=Ld(s.idToken);H(o,r,"internal-error");const{sub:l}=o;return H(t.uid===l,r,"user-mismatch"),Lr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ut(r,"user-mismatch"),s}}/**
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
 */async function Bv(t,e,n=!1){if(Wt(t.app))return Promise.reject(gn(t));const r="signIn",i=await jv(t,r,e),s=await Lr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function tR(t,e){return Bv(zr(t),e)}/**
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
 */async function zv(t){const e=zr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nR(t,e,n){if(Wt(t.app))return Promise.reject(gn(t));const r=zr(t),o=await yh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",XA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&zv(t),u}),l=await Lr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function rR(t,e,n){return Wt(t.app)?Promise.reject(gn(t)):tR(Ve(t),zi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zv(t),r})}/**
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
 */async function iR(t,e){return Cn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function sR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ve(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ni(r,iR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function oR(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function aR(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function $v(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function lR(t){return Ve(t).signOut()}const yl="__sak";/**
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
 */class Wv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yl,"1"),this.storage.removeItem(yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const uR=1e3,cR=10;class qv extends Wv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);PA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qv.type="LOCAL";const hR=qv;/**
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
 */class Hv extends Wv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hv.type="SESSION";const Kv=Hv;/**
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
 */function dR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await dR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ql.receivers=[];/**
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
 */function Ud(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class fR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Ud("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Gt(){return window}function pR(t){Gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Gv(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function mR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yR(){return Gv()?self:null}/**
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
 */const Qv="firebaseLocalStorageDb",_R=1,_l="firebaseLocalStorage",Yv="fbase_key";class Ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hl(t,e){return t.transaction([_l],e?"readwrite":"readonly").objectStore(_l)}function vR(){const t=indexedDB.deleteDatabase(Qv);return new Ao(t).toPromise()}function _h(){const t=indexedDB.open(Qv,_R);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_l,{keyPath:Yv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_l)?e(r):(r.close(),await vR(),e(await _h()))})})}async function eg(t,e,n){const r=Hl(t,!0).put({[Yv]:e,value:n});return new Ao(r).toPromise()}async function wR(t,e){const n=Hl(t,!1).get(e),r=await new Ao(n).toPromise();return r===void 0?null:r.value}function tg(t,e){const n=Hl(t,!0).delete(e);return new Ao(n).toPromise()}const ER=800,TR=3;class Jv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _h(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>TR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ql._getInstance(yR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mR(),!this.activeServiceWorker)return;this.sender=new fR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _h();return await eg(e,yl,"1"),await tg(e,yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>eg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hl(i,!1).getAll();return new Ao(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ER)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jv.type="LOCAL";const IR=Jv;new To(3e4,6e4);/**
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
 */function SR(t,e){return e?pn(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class jd extends bd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AR(t){return Bv(t.auth,new jd(t),t.bypassAuthState)}function RR(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),eR(n,new jd(t),t.bypassAuthState)}async function PR(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),ZA(n,new jd(t),t.bypassAuthState)}/**
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
 */class Xv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AR;case"linkViaPopup":case"linkViaRedirect":return PR;case"reauthViaPopup":case"reauthViaRedirect":return RR;default:Ut(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CR=new To(2e3,1e4);class hi extends Xv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hi.currentPopupAction&&hi.currentPopupAction.cancel(),hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Ud();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CR.get())};e()}}hi.currentPopupAction=null;/**
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
 */const kR="pendingRedirect",Oa=new Map;class NR extends Xv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oa.get(this.auth._key());if(!e){try{const r=await DR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oa.set(this.auth._key(),e)}return this.bypassAuthState||Oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DR(t,e){const n=OR(e),r=xR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function VR(t,e){Oa.set(t._key(),e)}function xR(t){return pn(t._redirectPersistence)}function OR(t){return xa(kR,t.config.apiKey,t.name)}async function LR(t,e,n=!1){if(Wt(t.app))return Promise.reject(gn(t));const r=zr(t),i=SR(r,e),o=await new NR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const MR=10*60*1e3;class bR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MR&&this.cachedEventUids.clear(),this.cachedEventUids.has(ng(e))}saveEventToCache(e){this.cachedEventUids.add(ng(e)),this.lastProcessedEventTime=Date.now()}}function ng(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zv(t);default:return!1}}/**
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
 */async function UR(t,e={}){return Cn(t,"GET","/v1/projects",e)}/**
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
 */const jR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BR=/^https?/;async function zR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UR(t);for(const n of e)try{if($R(n))return}catch{}Ut(t,"unauthorized-domain")}function $R(t){const e=mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BR.test(n))return!1;if(jR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const WR=new To(3e4,6e4);function rg(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qR(t){return new Promise((e,n)=>{var r,i,s;function o(){rg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rg(),n(Kt(t,"network-request-failed"))},timeout:WR.get()})}if(!((i=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Gt().gapi)===null||s===void 0)&&s.load)o();else{const l=MA("iframefcb");return Gt()[l]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},bv(`${LA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw La=null,e})}let La=null;function HR(t){return La=La||qR(t),La}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const KR=new To(5e3,15e3),GR="__/auth/iframe",QR="emulator/auth/iframe",YR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XR(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Od(e,QR):`https://${t.config.authDomain}/${GR}`,r={apiKey:e.apiKey,appName:t.name,v:Bi},i=JR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Eo(r).slice(1)}`}async function ZR(t){const e=await HR(t),n=Gt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:XR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),l=Gt().setTimeout(()=>{s(o)},KR.get());function u(){Gt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const eP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tP=500,nP=600,rP="_blank",iP="http://localhost";class ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sP(t,e,n,r=tP,i=nP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},eP),{width:r.toString(),height:i.toString(),top:s,left:o}),h=et().toLowerCase();n&&(l=Nv(h)?rP:n),Cv(h)&&(e=e||iP,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[I,k])=>`${g}${I}=${k},`,"");if(RA(h)&&l!=="_self")return oP(e||"",l),new ig(null);const m=window.open(e||"",l,f);H(m,t,"popup-blocked");try{m.focus()}catch{}return new ig(m)}function oP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aP="__/auth/handler",lP="emulator/auth/handler",uP=encodeURIComponent("fac");async function sg(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bi,eventId:i};if(e instanceof Uv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof So){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${uP}=${encodeURIComponent(u)}`:"";return`${cP(t)}?${Eo(l).slice(1)}${h}`}function cP({config:t}){return t.emulator?Od(t,lP):`https://${t.authDomain}/${aP}`}/**
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
 */const dc="webStorageSupport";class hP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kv,this._completeRedirectFn=LR,this._overrideRedirectResult=VR}async _openPopup(e,n,r,i){var s;In((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await sg(e,n,r,mh(),i);return sP(e,o,Ud())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await sg(e,n,r,mh(),i);return pR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZR(e),r=new bR(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dc,{type:dc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dc];o!==void 0&&n(!!o),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lv()||kv()||Md()}}const dP=hP;var og="@firebase/auth",ag="1.7.9";/**
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
 */class fP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mP(t){ki(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mv(t)},h=new VA(r,i,s,u);return BA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ki(new xr("auth-internal",e=>{const n=zr(e.getProvider("auth").getImmediate());return(r=>new fP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(og,ag,pP(t)),tr(og,ag,"esm2017")}/**
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
 */const gP=5*60,yP=dv("authIdTokenMaxAge")||gP;let lg=null;const _P=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yP)return;const i=n==null?void 0:n.token;lg!==i&&(lg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vP(t=gv()){const e=Dd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jA(t,{popupRedirectResolver:dP,persistence:[IR,hR,Kv]}),r=dv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=_P(s.toString());aR(n,o,()=>o(n.currentUser)),oR(n,l=>o(l))}}const i=cv("auth");return i&&zA(n,`http://${i}`),n}function wP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",wP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mP("Browser");var EP="firebase",TP="10.14.1";/**
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
 */tr(EP,TP,"app");var ug=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,ew;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.D=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(E,R,C){for(var T=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)T[Tt-2]=arguments[Tt];return y.prototype[R].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,_){_||(_=0);var E=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)E[R]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(R=0;16>R;++R)E[R]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],R=w.g[2];var C=w.g[3],T=y+(C^_&(R^C))+E[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=C+(R^y&(_^R))+E[1]+3905402710&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(_^C&(y^_))+E[2]+606105819&4294967295,R=C+(T<<17&4294967295|T>>>15),T=_+(y^R&(C^y))+E[3]+3250441966&4294967295,_=R+(T<<22&4294967295|T>>>10),T=y+(C^_&(R^C))+E[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=C+(R^y&(_^R))+E[5]+1200080426&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(_^C&(y^_))+E[6]+2821735955&4294967295,R=C+(T<<17&4294967295|T>>>15),T=_+(y^R&(C^y))+E[7]+4249261313&4294967295,_=R+(T<<22&4294967295|T>>>10),T=y+(C^_&(R^C))+E[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=C+(R^y&(_^R))+E[9]+2336552879&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(_^C&(y^_))+E[10]+4294925233&4294967295,R=C+(T<<17&4294967295|T>>>15),T=_+(y^R&(C^y))+E[11]+2304563134&4294967295,_=R+(T<<22&4294967295|T>>>10),T=y+(C^_&(R^C))+E[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=C+(R^y&(_^R))+E[13]+4254626195&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(_^C&(y^_))+E[14]+2792965006&4294967295,R=C+(T<<17&4294967295|T>>>15),T=_+(y^R&(C^y))+E[15]+1236535329&4294967295,_=R+(T<<22&4294967295|T>>>10),T=y+(R^C&(_^R))+E[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=C+(_^R&(y^_))+E[6]+3225465664&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^_&(C^y))+E[11]+643717713&4294967295,R=C+(T<<14&4294967295|T>>>18),T=_+(C^y&(R^C))+E[0]+3921069994&4294967295,_=R+(T<<20&4294967295|T>>>12),T=y+(R^C&(_^R))+E[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=C+(_^R&(y^_))+E[10]+38016083&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^_&(C^y))+E[15]+3634488961&4294967295,R=C+(T<<14&4294967295|T>>>18),T=_+(C^y&(R^C))+E[4]+3889429448&4294967295,_=R+(T<<20&4294967295|T>>>12),T=y+(R^C&(_^R))+E[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=C+(_^R&(y^_))+E[14]+3275163606&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^_&(C^y))+E[3]+4107603335&4294967295,R=C+(T<<14&4294967295|T>>>18),T=_+(C^y&(R^C))+E[8]+1163531501&4294967295,_=R+(T<<20&4294967295|T>>>12),T=y+(R^C&(_^R))+E[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=C+(_^R&(y^_))+E[2]+4243563512&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^_&(C^y))+E[7]+1735328473&4294967295,R=C+(T<<14&4294967295|T>>>18),T=_+(C^y&(R^C))+E[12]+2368359562&4294967295,_=R+(T<<20&4294967295|T>>>12),T=y+(_^R^C)+E[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=C+(y^_^R)+E[8]+2272392833&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^_)+E[11]+1839030562&4294967295,R=C+(T<<16&4294967295|T>>>16),T=_+(R^C^y)+E[14]+4259657740&4294967295,_=R+(T<<23&4294967295|T>>>9),T=y+(_^R^C)+E[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=C+(y^_^R)+E[4]+1272893353&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^_)+E[7]+4139469664&4294967295,R=C+(T<<16&4294967295|T>>>16),T=_+(R^C^y)+E[10]+3200236656&4294967295,_=R+(T<<23&4294967295|T>>>9),T=y+(_^R^C)+E[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=C+(y^_^R)+E[0]+3936430074&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^_)+E[3]+3572445317&4294967295,R=C+(T<<16&4294967295|T>>>16),T=_+(R^C^y)+E[6]+76029189&4294967295,_=R+(T<<23&4294967295|T>>>9),T=y+(_^R^C)+E[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=C+(y^_^R)+E[12]+3873151461&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^_)+E[15]+530742520&4294967295,R=C+(T<<16&4294967295|T>>>16),T=_+(R^C^y)+E[2]+3299628645&4294967295,_=R+(T<<23&4294967295|T>>>9),T=y+(R^(_|~C))+E[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=C+(_^(y|~R))+E[7]+1126891415&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~_))+E[14]+2878612391&4294967295,R=C+(T<<15&4294967295|T>>>17),T=_+(C^(R|~y))+E[5]+4237533241&4294967295,_=R+(T<<21&4294967295|T>>>11),T=y+(R^(_|~C))+E[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=C+(_^(y|~R))+E[3]+2399980690&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~_))+E[10]+4293915773&4294967295,R=C+(T<<15&4294967295|T>>>17),T=_+(C^(R|~y))+E[1]+2240044497&4294967295,_=R+(T<<21&4294967295|T>>>11),T=y+(R^(_|~C))+E[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=C+(_^(y|~R))+E[15]+4264355552&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~_))+E[6]+2734768916&4294967295,R=C+(T<<15&4294967295|T>>>17),T=_+(C^(R|~y))+E[13]+1309151649&4294967295,_=R+(T<<21&4294967295|T>>>11),T=y+(R^(_|~C))+E[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=C+(_^(y|~R))+E[11]+3174756917&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~_))+E[2]+718787259&4294967295,R=C+(T<<15&4294967295|T>>>17),T=_+(C^(R|~y))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+C&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var _=y-this.blockSize,E=this.B,R=this.h,C=0;C<y;){if(R==0)for(;C<=_;)i(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<y;)if(E[R++]=w.charCodeAt(C++),R==this.blockSize){i(this,E),R=0;break}}else for(;C<y;)if(E[R++]=w[C++],R==this.blockSize){i(this,E),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var _=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=_&255,_/=256;for(this.u(w),w=Array(16),y=_=0;4>y;++y)for(var E=0;32>E;E+=8)w[_++]=this.g[y]>>>E&255;return w};function s(w,y){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function o(w,y){this.h=y;for(var _=[],E=!0,R=w.length-1;0<=R;R--){var C=w[R]|0;E&&C==y||(_[R]=C,E=!1)}this.g=_}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return L(h(-w));for(var y=[],_=1,E=0;w>=_;E++)y[E]=w/_|0,_*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return L(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),E=m,R=0;R<w.length;R+=8){var C=Math.min(8,w.length-R),T=parseInt(w.substring(R,R+C),y);8>C?(C=h(Math.pow(y,C)),E=E.j(C).add(h(T))):(E=E.j(_),E=E.add(h(T)))}return E}var m=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-L(this).m();for(var w=0,y=1,_=0;_<this.g.length;_++){var E=this.i(_);w+=(0<=E?E:4294967296+E)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(D(this))return"-"+L(this).toString(w);for(var y=h(Math.pow(w,6)),_=this,E="";;){var R=x(_,y).g;_=S(_,R.j(y));var C=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=R,k(_))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function D(w){return w.h==-1}t.l=function(w){return w=S(this,w),D(w)?-1:k(w)?0:1};function L(w){for(var y=w.g.length,_=[],E=0;E<y;E++)_[E]=~w.g[E];return new o(_,~w.h).add(g)}t.abs=function(){return D(this)?L(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0,R=0;R<=y;R++){var C=E+(this.i(R)&65535)+(w.i(R)&65535),T=(C>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);E=T>>>16,C&=65535,T&=65535,_[R]=T<<16|C}return new o(_,_[_.length-1]&-2147483648?-1:0)};function S(w,y){return w.add(L(y))}t.j=function(w){if(k(this)||k(w))return m;if(D(this))return D(w)?L(this).j(L(w)):L(L(this).j(w));if(D(w))return L(this.j(L(w)));if(0>this.l(I)&&0>w.l(I))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,_=[],E=0;E<2*y;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var R=0;R<w.g.length;R++){var C=this.i(E)>>>16,T=this.i(E)&65535,Tt=w.i(R)>>>16,fr=w.i(R)&65535;_[2*E+2*R]+=T*fr,v(_,2*E+2*R),_[2*E+2*R+1]+=C*fr,v(_,2*E+2*R+1),_[2*E+2*R+1]+=T*Tt,v(_,2*E+2*R+1),_[2*E+2*R+2]+=C*Tt,v(_,2*E+2*R+2)}for(E=0;E<y;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=y;E<2*y;E++)_[E]=0;return new o(_,0)};function v(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function A(w,y){this.g=w,this.h=y}function x(w,y){if(k(y))throw Error("division by zero");if(k(w))return new A(m,m);if(D(w))return y=x(L(w),y),new A(L(y.g),L(y.h));if(D(y))return y=x(w,L(y)),new A(L(y.g),y.h);if(30<w.g.length){if(D(w)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,E=y;0>=E.l(w);)_=j(_),E=j(E);var R=U(_,1),C=U(E,1);for(E=U(E,2),_=U(_,2);!k(E);){var T=C.add(E);0>=T.l(w)&&(R=R.add(_),C=T),E=U(E,1),_=U(_,1)}return y=S(w,R.j(y)),new A(R,y)}for(R=m;0<=w.l(y);){for(_=Math.max(1,Math.floor(w.m()/y.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=h(_),T=C.j(y);D(T)||0<T.l(w);)_-=E,C=h(_),T=C.j(y);k(C)&&(C=g),R=R.add(C),w=S(w,T)}return new A(R,w)}t.A=function(w){return x(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)&w.i(E);return new o(_,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)|w.i(E);return new o(_,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)^w.i(E);return new o(_,this.h^w.h)};function j(w){for(var y=w.g.length+1,_=[],E=0;E<y;E++)_[E]=w.i(E)<<1|w.i(E-1)>>>31;return new o(_,w.h)}function U(w,y){var _=y>>5;y%=32;for(var E=w.g.length-_,R=[],C=0;C<E;C++)R[C]=0<y?w.i(C+_)>>>y|w.i(C+_+1)<<32-y:w.i(C+_);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ew=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Pr=o}).apply(typeof ug<"u"?ug:typeof self<"u"?self:typeof window<"u"?window:{});var ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tw,Ss,nw,Ma,vh,rw,iw,sw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ga=="object"&&ga];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var P=a[p];if(!(P in d))break e;d=d[P]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,P={next:function(){if(!p&&d<a.length){var N=d++;return{value:c(N,a[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function I(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function k(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,P,N){for(var F=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)F[ue-2]=arguments[ue];return c.prototype[P].apply(p,F)}}function D(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function L(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const P=a.length||0,N=p.length||0;a.length=P+N;for(let F=0;F<N;F++)a[P+F]=p[F]}else a.push(p)}}class S{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var j=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function U(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,c){let d,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(d in p)a[d]=p[d];for(let N=0;N<_.length;N++)d=_[N],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function R(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function T(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Tt{constructor(){this.h=this.g=null}add(c,d){const p=fr.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var fr=new S(()=>new Qi,a=>a.reset());class Qi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let en,B=!1,G=new Tt,J=()=>{const a=l.Promise.resolve(void 0);en=()=>{a.then(ge)}};var ge=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){C(d)}var c=fr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var tn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function nn(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(j){e:{try{x(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:rn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nn.aa.h.call(this)}}k(nn,Ie);var rn={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),AE=0;function RE(a,c,d,p,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=P,this.key=++AE,this.da=this.fa=!1}function Oo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Lo(a){this.src=a,this.g={},this.h=0}Lo.prototype.add=function(a,c,d,p,P){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var F=du(a,c,p,P);return-1<F?(c=a[F],d||(c.fa=!1)):(c=new RE(c,this.src,N,!!p,P),c.fa=d,a.push(c)),c};function hu(a,c){var d=c.type;if(d in a.g){var p=a.g[d],P=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=P)&&Array.prototype.splice.call(p,P,1),N&&(Oo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function du(a,c,d,p){for(var P=0;P<a.length;++P){var N=a[P];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==p)return P}return-1}var fu="closure_lm_"+(1e6*Math.random()|0),pu={};function Rf(a,c,d,p,P){if(Array.isArray(c)){for(var N=0;N<c.length;N++)Rf(a,c[N],d,p,P);return null}return d=kf(d),a&&a[sn]?a.K(c,d,h(p)?!!p.capture:!1,P):PE(a,c,d,!1,p,P)}function PE(a,c,d,p,P,N){if(!c)throw Error("Invalid event type");var F=h(P)?!!P.capture:!!P,ue=gu(a);if(ue||(a[fu]=ue=new Lo(a)),d=ue.add(c,d,p,F,N),d.proxy)return d;if(p=CE(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)tn||(P=F),P===void 0&&(P=!1),a.addEventListener(c.toString(),p,P);else if(a.attachEvent)a.attachEvent(Cf(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function CE(){function a(d){return c.call(a.src,a.listener,d)}const c=kE;return a}function Pf(a,c,d,p,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)Pf(a,c[N],d,p,P);else p=h(p)?!!p.capture:!!p,d=kf(d),a&&a[sn]?(a=a.i,c=String(c).toString(),c in a.g&&(N=a.g[c],d=du(N,d,p,P),-1<d&&(Oo(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[c],a.h--)))):a&&(a=gu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=du(c,d,p,P)),(d=-1<a?c[a]:null)&&mu(d))}function mu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[sn])hu(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(Cf(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=gu(c))?(hu(d,a),d.h==0&&(d.src=null,c[fu]=null)):Oo(a)}}}function Cf(a){return a in pu?pu[a]:pu[a]="on"+a}function kE(a,c){if(a.da)a=!0;else{c=new nn(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&mu(a),a=d.call(p,c)}return a}function gu(a){return a=a[fu],a instanceof Lo?a:null}var yu="__closure_events_fn_"+(1e9*Math.random()>>>0);function kf(a){return typeof a=="function"?a:(a[yu]||(a[yu]=function(c){return a.handleEvent(c)}),a[yu])}function We(){le.call(this),this.i=new Lo(this),this.M=this,this.F=null}k(We,le),We.prototype[sn]=!0,We.prototype.removeEventListener=function(a,c,d,p){Pf(this,a,c,d,p)};function tt(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var P=c;c=new Ie(p,a),E(c,P)}if(P=!0,d)for(var N=d.length-1;0<=N;N--){var F=c.g=d[N];P=Mo(F,p,!0,c)&&P}if(F=c.g=a,P=Mo(F,p,!0,c)&&P,P=Mo(F,p,!1,c)&&P,d)for(N=0;N<d.length;N++)F=c.g=d[N],P=Mo(F,p,!1,c)&&P}We.prototype.N=function(){if(We.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)Oo(d[p]);delete a.g[c],a.h--}}this.F=null},We.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},We.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Mo(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,N=0;N<c.length;++N){var F=c[N];if(F&&!F.da&&F.capture==d){var ue=F.listener,Me=F.ha||F.src;F.fa&&hu(a.i,F),P=ue.call(Me,p)!==!1&&P}}return P&&!p.defaultPrevented}function Nf(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Df(a){a.g=Nf(()=>{a.g=null,a.i&&(a.i=!1,Df(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class NE extends le{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Df(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yi(a){le.call(this),this.h=a,this.g={}}k(Yi,le);var Vf=[];function xf(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&mu(c)},a),a.g={}}Yi.prototype.N=function(){Yi.aa.N.call(this),xf(this)},Yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _u=l.JSON.stringify,DE=l.JSON.parse,VE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function vu(){}vu.prototype.h=null;function Of(a){return a.h||(a.h=a.i())}function Lf(){}var Ji={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wu(){Ie.call(this,"d")}k(wu,Ie);function Eu(){Ie.call(this,"c")}k(Eu,Ie);var pr={},Mf=null;function bo(){return Mf=Mf||new We}pr.La="serverreachability";function bf(a){Ie.call(this,pr.La,a)}k(bf,Ie);function Xi(a){const c=bo();tt(c,new bf(c))}pr.STAT_EVENT="statevent";function Ff(a,c){Ie.call(this,pr.STAT_EVENT,a),this.stat=c}k(Ff,Ie);function nt(a){const c=bo();tt(c,new Ff(c,a))}pr.Ma="timingevent";function Uf(a,c){Ie.call(this,pr.Ma,a),this.size=c}k(Uf,Ie);function Zi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function es(){this.g=!0}es.prototype.xa=function(){this.g=!1};function xE(a,c,d,p,P,N){a.info(function(){if(a.g)if(N)for(var F="",ue=N.split("&"),Me=0;Me<ue.length;Me++){var ie=ue[Me].split("=");if(1<ie.length){var qe=ie[0];ie=ie[1];var He=qe.split("_");F=2<=He.length&&He[1]=="type"?F+(qe+"="+ie+"&"):F+(qe+"=redacted&")}}else F=null;else F=N;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+c+`
`+d+`
`+F})}function OE(a,c,d,p,P,N,F){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+c+`
`+d+`
`+N+" "+F})}function qr(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+ME(a,d)+(p?" "+p:"")})}function LE(a,c){a.info(function(){return"TIMEOUT: "+c})}es.prototype.info=function(){};function ME(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var F=1;F<P.length;F++)P[F]=""}}}}return _u(d)}catch{return c}}var Fo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tu;function Uo(){}k(Uo,vu),Uo.prototype.g=function(){return new XMLHttpRequest},Uo.prototype.i=function(){return{}},Tu=new Uo;function kn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Yi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bf}function Bf(){this.i=null,this.g="",this.h=!1}var zf={},Iu={};function Su(a,c,d){a.L=1,a.v=$o(on(c)),a.m=d,a.P=!0,$f(a,null)}function $f(a,c){a.F=Date.now(),jo(a),a.A=on(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),rp(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Bf,a.g=Ep(a.j,d?c:null,!a.m),0<a.O&&(a.M=new NE(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Vf[0]=P.toString()),P=Vf);for(var N=0;N<P.length;N++){var F=Rf(d,P[N],p||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Xi(),xE(a.i,a.u,a.A,a.l,a.R,a.m)}kn.prototype.ca=function(a){a=a.target;const c=this.M;c&&an(a)==3?c.j():this.Y(a)},kn.prototype.Y=function(a){try{if(a==this.g)e:{const He=an(this.g);var c=this.g.Ba();const Gr=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||cp(this.g)))){this.J||He!=4||c==7||(c==8||0>=Gr?Xi(3):Xi(2)),Au(this);var d=this.g.Z();this.X=d;t:if(Wf(this)){var p=cp(this.g);a="";var P=p.length,N=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),ts(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(N&&c==P-1)});p.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,OE(this.i,this.u,this.A,this.l,this.R,He,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Me=this.g;if((ue=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ue)){var ie=ue;break t}}ie=null}if(d=ie)qr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ru(this,d);else{this.o=!1,this.s=3,nt(12),mr(this),ts(this);break e}}if(this.P){d=!0;let Nt;for(;!this.J&&this.C<F.length;)if(Nt=bE(this,F),Nt==Iu){He==4&&(this.s=4,nt(14),d=!1),qr(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==zf){this.s=4,nt(15),qr(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else qr(this.i,this.l,Nt,null),Ru(this,Nt);if(Wf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||F.length!=0||this.h.h||(this.s=1,nt(16),d=!1),this.o=this.o&&d,!d)qr(this.i,this.l,F,"[Invalid Chunked Response]"),mr(this),ts(this);else if(0<F.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Vu(qe),qe.M=!0,nt(11))}}else qr(this.i,this.l,F,null),Ru(this,F);He==4&&mr(this),this.o&&!this.J&&(He==4?yp(this.j,this):(this.o=!1,jo(this)))}else eT(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),mr(this),ts(this)}}}catch{}finally{}};function Wf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function bE(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?Iu:(d=Number(c.substring(d,p)),isNaN(d)?zf:(p+=1,p+d>c.length?Iu:(c=c.slice(p,p+d),a.C=p+d,c)))}kn.prototype.cancel=function(){this.J=!0,mr(this)};function jo(a){a.S=Date.now()+a.I,qf(a,a.I)}function qf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Zi(g(a.ba,a),c)}function Au(a){a.B&&(l.clearTimeout(a.B),a.B=null)}kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(LE(this.i,this.A),this.L!=2&&(Xi(),nt(17)),mr(this),this.s=2,ts(this)):qf(this,this.S-a)};function ts(a){a.j.G==0||a.J||yp(a.j,a)}function mr(a){Au(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,xf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Ru(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Pu(d.h,a))){if(!a.K&&Pu(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Qo(d),Ko(d);else break e;Du(d),nt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Zi(g(d.Za,d),6e3));if(1>=Gf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else yr(d,11)}else if((a.K||d.g==a)&&Qo(d),!v(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let ie=P[c];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const qe=ie[3];qe!=null&&(d.la=qe,d.j.info("VER="+d.la));const He=ie[4];He!=null&&(d.Aa=He,d.j.info("SVER="+d.Aa));const Gr=ie[5];Gr!=null&&typeof Gr=="number"&&0<Gr&&(p=1.5*Gr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Nt=a.g;if(Nt){const Jo=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jo){var N=p.h;N.g||Jo.indexOf("spdy")==-1&&Jo.indexOf("quic")==-1&&Jo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Cu(N,N.h),N.h=null))}if(p.D){const xu=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;xu&&(p.ya=xu,he(p.I,p.D,xu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var F=a;if(p.qa=wp(p,p.J?p.ia:null,p.W),F.K){Qf(p.h,F);var ue=F,Me=p.L;Me&&(ue.I=Me),ue.B&&(Au(ue),jo(ue)),p.g=F}else mp(p);0<d.i.length&&Go(d)}else ie[0]!="stop"&&ie[0]!="close"||yr(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?yr(d,7):Nu(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}Xi(4)}catch{}}var FE=class{constructor(a,c){this.g=a,this.map=c}};function Hf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gf(a){return a.h?1:a.g?a.g.size:0}function Pu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Cu(a,c){a.g?a.g.add(c):a.h=c}function Qf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Hf.prototype.cancel=function(){if(this.i=Yf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Yf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return D(a.i)}function UE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function jE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function Jf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=jE(a),p=UE(a),P=p.length,N=0;N<P;N++)c.call(void 0,p[N],d&&d[N],a)}var Xf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),P=null;if(0<=p){var N=a[d].substring(0,p);P=a[d].substring(p+1)}else N=a[d];c(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function gr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gr){this.h=a.h,Bo(this,a.j),this.o=a.o,this.g=a.g,zo(this,a.s),this.l=a.l;var c=a.i,d=new is;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Zf(this,d),this.m=a.m}else a&&(c=String(a).match(Xf))?(this.h=!1,Bo(this,c[1]||"",!0),this.o=ns(c[2]||""),this.g=ns(c[3]||"",!0),zo(this,c[4]),this.l=ns(c[5]||"",!0),Zf(this,c[6]||"",!0),this.m=ns(c[7]||"")):(this.h=!1,this.i=new is(null,this.h))}gr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(rs(c,ep,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(rs(c,ep,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(rs(d,d.charAt(0)=="/"?WE:$E,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",rs(d,HE)),a.join("")};function on(a){return new gr(a)}function Bo(a,c,d){a.j=d?ns(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function zo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Zf(a,c,d){c instanceof is?(a.i=c,KE(a.i,a.h)):(d||(c=rs(c,qE)),a.i=new is(c,a.h))}function he(a,c,d){a.i.set(c,d)}function $o(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ns(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function rs(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,zE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function zE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ep=/[#\/\?@]/g,$E=/[#\?:]/g,WE=/[#\?]/g,qE=/[#\?@]/g,HE=/#/g;function is(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Nn(a){a.g||(a.g=new Map,a.h=0,a.i&&BE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=is.prototype,t.add=function(a,c){Nn(this),this.i=null,a=Hr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function tp(a,c){Nn(a),c=Hr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function np(a,c){return Nn(a),c=Hr(a,c),a.g.has(c)}t.forEach=function(a,c){Nn(this),this.g.forEach(function(d,p){d.forEach(function(P){a.call(c,P,p,this)},this)},this)},t.na=function(){Nn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const P=a[p];for(let N=0;N<P.length;N++)d.push(c[p])}return d},t.V=function(a){Nn(this);let c=[];if(typeof a=="string")np(this,a)&&(c=c.concat(this.g.get(Hr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Nn(this),this.i=null,a=Hr(this,a),np(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function rp(a,c,d){tp(a,c),0<d.length&&(a.i=null,a.g.set(Hr(a,c),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const N=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var P=N;F[p]!==""&&(P+="="+encodeURIComponent(String(F[p]))),a.push(P)}}return this.i=a.join("&")};function Hr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function KE(a,c){c&&!a.j&&(Nn(a),a.i=null,a.g.forEach(function(d,p){var P=p.toLowerCase();p!=P&&(tp(this,p),rp(this,P,d))},a)),a.j=c}function GE(a,c){const d=new es;if(l.Image){const p=new Image;p.onload=I(Dn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=I(Dn,d,"TestLoadImage: error",!1,c,p),p.onabort=I(Dn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=I(Dn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function QE(a,c){const d=new es,p=new AbortController,P=setTimeout(()=>{p.abort(),Dn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(N=>{clearTimeout(P),N.ok?Dn(d,"TestPingServer: ok",!0,c):Dn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Dn(d,"TestPingServer: error",!1,c)})}function Dn(a,c,d,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(d)}catch{}}function YE(){this.g=new VE}function JE(a,c,d){const p=d||"";try{Jf(a,function(P,N){let F=P;h(P)&&(F=_u(P)),c.push(p+N+"="+encodeURIComponent(F))})}catch(P){throw c.push(p+"type="+encodeURIComponent("_badmap")),P}}function Wo(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Wo,vu),Wo.prototype.g=function(){return new qo(this.l,this.j)},Wo.prototype.i=function(a){return function(){return a}}({});function qo(a,c){We.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(qo,We),t=qo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,os(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ss(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ip(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ip(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ss(this):os(this),this.readyState==3&&ip(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ss(this))},t.Qa=function(a){this.g&&(this.response=a,ss(this))},t.ga=function(){this.g&&ss(this)};function ss(a){a.readyState=4,a.l=null,a.j=null,a.v=null,os(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function os(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sp(a){let c="";return U(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function ku(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=sp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,c,d))}function Ee(a){We.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ee,We);var XE=/^https?$/i,ZE=["POST","PUT"];t=Ee.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tu.g(),this.v=this.o?Of(this.o):Of(Tu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){op(this,N);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)d.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ZE,c,void 0))||p||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,F]of d)this.g.setRequestHeader(N,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{up(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){op(this,N)}};function op(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,ap(a),Ho(a)}function ap(a){a.A||(a.A=!0,tt(a,"complete"),tt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,tt(this,"complete"),tt(this,"abort"),Ho(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ho(this,!0)),Ee.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?lp(this):this.bb())},t.bb=function(){lp(this)};function lp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||an(a)!=4||a.Z()!=2)){if(a.u&&an(a)==4)Nf(a.Ea,0,a);else if(tt(a,"readystatechange"),an(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=F===0){var P=String(a.D).match(Xf)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),p=!XE.test(P?P.toLowerCase():"")}d=p}if(d)tt(a,"complete"),tt(a,"success");else{a.m=6;try{var N=2<an(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",ap(a)}}finally{Ho(a)}}}}function Ho(a,c){if(a.g){up(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||tt(a,"ready");try{d.onreadystatechange=p}catch{}}}function up(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function an(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),DE(c)}};function cp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function eT(a){const c={};a=(a.g&&2<=an(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(v(a[p]))continue;var d=R(a[p]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[P]||[];c[P]=N,N.push(d)}w(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function as(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function hp(a){this.Aa=0,this.i=[],this.j=new es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=as("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=as("baseRetryDelayMs",5e3,a),this.cb=as("retryDelaySeedMs",1e4,a),this.Wa=as("forwardChannelMaxRetries",2,a),this.wa=as("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Hf(a&&a.concurrentRequestLimit),this.Da=new YE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){nt(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=wp(this,null,this.W),Go(this)};function Nu(a){if(dp(a),a.G==3){var c=a.U++,d=on(a.I);if(he(d,"SID",a.K),he(d,"RID",c),he(d,"TYPE","terminate"),ls(a,d),c=new kn(a,a.j,c),c.L=2,c.v=$o(on(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Ep(c.j,null),c.g.ea(c.v)),c.F=Date.now(),jo(c)}vp(a)}function Ko(a){a.g&&(Vu(a),a.g.cancel(),a.g=null)}function dp(a){Ko(a),a.u&&(l.clearTimeout(a.u),a.u=null),Qo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Go(a){if(!Kf(a.h)&&!a.s){a.s=!0;var c=a.Ga;en||J(),B||(en(),B=!0),G.add(c,a),a.B=0}}function tT(a,c){return Gf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Zi(g(a.Ga,a,c),_p(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new kn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),E(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=pp(this,P,c),d=on(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),ls(this,d),N&&(this.O?c="headers="+encodeURIComponent(String(sp(N)))+"&"+c:this.m&&ku(d,this.m,N)),Cu(this.h,P),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",c),he(d,"SID","null"),P.T=!0,Su(P,d,null)):Su(P,d,c),this.G=2}}else this.G==3&&(a?fp(this,a):this.i.length==0||Kf(this.h)||fp(this))};function fp(a,c){var d;c?d=c.l:d=a.U++;const p=on(a.I);he(p,"SID",a.K),he(p,"RID",d),he(p,"AID",a.T),ls(a,p),a.m&&a.o&&ku(p,a.m,a.o),d=new kn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=pp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Cu(a.h,d),Su(d,p,c)}function ls(a,c){a.H&&U(a.H,function(d,p){he(c,p,d)}),a.l&&Jf({},function(d,p){he(c,p,d)})}function pp(a,c,d){d=Math.min(a.i.length,d);var p=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let N=-1;for(;;){const F=["count="+d];N==-1?0<d?(N=P[0].g,F.push("ofs="+N)):N=0:F.push("ofs="+N);let ue=!0;for(let Me=0;Me<d;Me++){let ie=P[Me].g;const qe=P[Me].map;if(ie-=N,0>ie)N=Math.max(0,P[Me].g-100),ue=!1;else try{JE(qe,F,"req"+ie+"_")}catch{p&&p(qe)}}if(ue){p=F.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function mp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;en||J(),B||(en(),B=!0),G.add(c,a),a.v=0}}function Du(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Zi(g(a.Fa,a),_p(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,gp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Zi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Ko(this),gp(this))};function Vu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function gp(a){a.g=new kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=on(a.qa);he(c,"RID","rpc"),he(c,"SID",a.K),he(c,"AID",a.T),he(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(c,"TO",a.ja),he(c,"TYPE","xmlhttp"),ls(a,c),a.m&&a.o&&ku(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=$o(on(c)),d.m=null,d.P=!0,$f(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ko(this),Du(this),nt(19))};function Qo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function yp(a,c){var d=null;if(a.g==c){Qo(a),Vu(a),a.g=null;var p=2}else if(Pu(a.h,c))d=c.D,Qf(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;p=bo(),tt(p,new Uf(p,d)),Go(a)}else mp(a);else if(P=c.s,P==3||P==0&&0<c.X||!(p==1&&tT(a,c)||p==2&&Du(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),P){case 1:yr(a,5);break;case 4:yr(a,10);break;case 3:yr(a,6);break;default:yr(a,2)}}}function _p(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function yr(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),p=a.Xa;const P=!p;p=new gr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Bo(p,"https"),$o(p),P?GE(p.toString(),d):QE(p.toString(),d)}else nt(2);a.G=0,a.l&&a.l.sa(c),vp(a),dp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function vp(a){if(a.G=0,a.ka=[],a.l){const c=Yf(a.h);(c.length!=0||a.i.length!=0)&&(L(a.ka,c),L(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function wp(a,c,d){var p=d instanceof gr?on(d):new gr(d);if(p.g!="")c&&(p.g=c+"."+p.g),zo(p,p.s);else{var P=l.location;p=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var N=new gr(null);p&&Bo(N,p),c&&(N.g=c),P&&zo(N,P),d&&(N.l=d),p=N}return d=a.D,c=a.ya,d&&c&&he(p,d,c),he(p,"VER",a.la),ls(a,p),p}function Ep(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ee(new Wo({eb:d})):new Ee(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tp(){}t=Tp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Yo(){}Yo.prototype.g=function(a,c){return new pt(a,c)};function pt(a,c){We.call(this),this.g=new hp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Kr(this)}k(pt,We),pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){Nu(this.g)},pt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=_u(a),a=d);c.i.push(new FE(c.Ya++,a)),c.G==3&&Go(c)},pt.prototype.N=function(){this.g.l=null,delete this.j,Nu(this.g),delete this.g,pt.aa.N.call(this)};function Ip(a){wu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}k(Ip,wu);function Sp(){Eu.call(this),this.status=1}k(Sp,Eu);function Kr(a){this.g=a}k(Kr,Tp),Kr.prototype.ua=function(){tt(this.g,"a")},Kr.prototype.ta=function(a){tt(this.g,new Ip(a))},Kr.prototype.sa=function(a){tt(this.g,new Sp)},Kr.prototype.ra=function(){tt(this.g,"b")},Yo.prototype.createWebChannel=Yo.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,sw=function(){return new Yo},iw=function(){return bo()},rw=pr,vh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fo.NO_ERROR=0,Fo.TIMEOUT=8,Fo.HTTP_ERROR=6,Ma=Fo,jf.COMPLETE="complete",nw=jf,Lf.EventType=Ji,Ji.OPEN="a",Ji.CLOSE="b",Ji.ERROR="c",Ji.MESSAGE="d",We.prototype.listen=We.prototype.K,Ss=Lf,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,tw=Ee}).apply(typeof ga<"u"?ga:typeof self<"u"?self:typeof window<"u"?window:{});const cg="@firebase/firestore";/**
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
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let $i="10.14.0";/**
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
 */const Mr=new kd("@firebase/firestore");function ys(){return Mr.logLevel}function W(t,...e){if(Mr.logLevel<=ee.DEBUG){const n=e.map(Bd);Mr.debug(`Firestore (${$i}): ${t}`,...n)}}function Sn(t,...e){if(Mr.logLevel<=ee.ERROR){const n=e.map(Bd);Mr.error(`Firestore (${$i}): ${t}`,...n)}}function Di(t,...e){if(Mr.logLevel<=ee.WARN){const n=e.map(Bd);Mr.warn(`Firestore (${$i}): ${t}`,...n)}}function Bd(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${$i}) INTERNAL ASSERTION FAILED: `+t;throw Sn(e),new Error(e)}function ae(t,e){t||K()}function Y(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ow{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class SP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class AP{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new ow(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Ye(e)}}class RP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class PP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new RP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new CP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function NP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class aw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=NP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Vi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new De(0,0))}static max(){return new Q(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ao{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ao.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ao?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends ao{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const DP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends ao{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return DP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(fe.fromString(e))}static fromName(e){return new q(fe.fromString(e).popFirst(5))}static empty(){return new q(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new fe(e.slice()))}}function VP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new sr(i,q.empty(),e)}function xP(t){return new sr(t.readTime,t.key,-1)}class sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new sr(Q.min(),q.empty(),-1)}static max(){return new sr(Q.max(),q.empty(),-1)}}function OP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
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
 */const LP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ro(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==LP)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Po(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class zd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}zd.oe=-1;function Kl(t){return t==null}function vl(t){return t===0&&1/t==-1/0}function FP(t){return typeof t=="number"&&Number.isInteger(t)&&!vl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function hg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class we{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ya(this.root,e,this.comparator,!0)}}class ya{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Fe.RED,this.left=i??Fe.EMPTY,this.right=s??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Fe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Be{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dg(this.data.getIterator())}getIteratorFrom(e){return new dg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class dg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yt{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new yt([])}unionWith(e){let n=new Be(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class uw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new uw("Invalid base64 string: "+s):s}}(e);return new $e(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const UP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function or(t){if(ae(!!t),typeof t=="string"){let e=0;const n=UP.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
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
 */function $d(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wd(t){const e=t.mapValue.fields.__previous_value__;return $d(e)?Wd(e):e}function lo(t){const e=or(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class jP{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class uo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new uo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof uo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const _a={mapValue:{}};function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$d(t)?4:zP(t)?9007199254740991:BP(t)?10:11:K()}function Jt(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return lo(t).isEqual(lo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=or(i.timestampValue),l=or(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return br(i.bytesValue).isEqual(br(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?vl(o)===vl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Vi(t.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(hg(o)!==hg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Jt(o[u],l[u])))return!1;return!0}(t,e);default:return K()}}function co(t,e){return(t.values||[]).find(n=>Jt(n,e))!==void 0}function xi(t,e){if(t===e)return 0;const n=Fr(t),r=Fr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return fg(t.timestampValue,e.timestampValue);case 4:return fg(lo(t),lo(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=br(s),u=br(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=se(l[h],u[h]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Se(s.latitude),Se(o.latitude));return l!==0?l:se(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return pg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},g=o.fields||{},I=(l=m.value)===null||l===void 0?void 0:l.arrayValue,k=(u=g.value)===null||u===void 0?void 0:u.arrayValue,D=se(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:pg(I,k)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===_a.mapValue&&o===_a.mapValue)return 0;if(s===_a.mapValue)return 1;if(o===_a.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=se(u[m],f[m]);if(g!==0)return g;const I=xi(l[u[m]],h[f[m]]);if(I!==0)return I}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K()}}function fg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=or(t),r=or(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function pg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=xi(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Oi(t){return wh(t)}function wh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=wh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${wh(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function mg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Eh(t){return!!t&&"integerValue"in t}function qd(t){return!!t&&"arrayValue"in t}function gg(t){return!!t&&"nullValue"in t}function yg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ba(t){return!!t&&"mapValue"in t}function BP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Fs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $r(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ba(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fs(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Fs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ba(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ba(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$r(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ut(Fs(this.value))}}function cw(t){const e=[];return $r(t.fields,(n,r)=>{const i=new Ue([n]);if(ba(r)){const s=cw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new yt(e)}/**
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
 */class Xe{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Xe(e,0,Q.min(),Q.min(),Q.min(),ut.empty(),0)}static newFoundDocument(e,n,r,i){return new Xe(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Xe(e,2,n,Q.min(),Q.min(),ut.empty(),0)}static newUnknownDocument(e,n){return new Xe(e,3,n,Q.min(),Q.min(),ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wl{constructor(e,n){this.position=e,this.inclusive=n}}function _g(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=xi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function vg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class El{constructor(e,n="asc"){this.field=e,this.dir=n}}function $P(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class hw{}class Ce extends hw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qP(e,n,r):n==="array-contains"?new GP(e,r):n==="in"?new QP(e,r):n==="not-in"?new YP(e,r):n==="array-contains-any"?new JP(e,r):new Ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new HP(e,r):new KP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xi(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends hw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new jt(e,n)}matches(e){return dw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function dw(t){return t.op==="and"}function fw(t){return WP(t)&&dw(t)}function WP(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function Th(t){if(t instanceof Ce)return t.field.canonicalString()+t.op.toString()+Oi(t.value);if(fw(t))return t.filters.map(e=>Th(e)).join(",");{const e=t.filters.map(n=>Th(n)).join(",");return`${t.op}(${e})`}}function pw(t,e){return t instanceof Ce?function(r,i){return i instanceof Ce&&r.op===i.op&&r.field.isEqual(i.field)&&Jt(r.value,i.value)}(t,e):t instanceof jt?function(r,i){return i instanceof jt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&pw(o,i.filters[l]),!0):!1}(t,e):void K()}function mw(t){return t instanceof Ce?function(n){return`${n.field.canonicalString()} ${n.op} ${Oi(n.value)}`}(t):t instanceof jt?function(n){return n.op.toString()+" {"+n.getFilters().map(mw).join(" ,")+"}"}(t):"Filter"}class qP extends Ce{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class HP extends Ce{constructor(e,n){super(e,"in",n),this.keys=gw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KP extends Ce{constructor(e,n){super(e,"not-in",n),this.keys=gw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class GP extends Ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qd(n)&&co(n.arrayValue,this.value)}}class QP extends Ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&co(this.value.arrayValue,n)}}class YP extends Ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!co(this.value.arrayValue,n)}}class JP extends Ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>co(this.value.arrayValue,r))}}/**
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
 */class XP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function wg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new XP(t,e,n,r,i,s,o)}function Hd(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Th(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Kl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Oi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Oi(r)).join(",")),e.ue=n}return e.ue}function Kd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$P(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vg(t.startAt,e.startAt)&&vg(t.endAt,e.endAt)}function Ih(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Co{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ZP(t,e,n,r,i,s,o,l){return new Co(t,e,n,r,i,s,o,l)}function Gd(t){return new Co(t)}function Eg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yw(t){return t.collectionGroup!==null}function Us(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Be(Ue.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new El(s,r))}),n.has(Ue.keyField().canonicalString())||e.ce.push(new El(Ue.keyField(),r))}return e.ce}function Qt(t){const e=Y(t);return e.le||(e.le=eC(e,Us(t))),e.le}function eC(t,e){if(t.limitType==="F")return wg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new El(i.field,s)});const n=t.endAt?new wl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new wl(t.startAt.position,t.startAt.inclusive):null;return wg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sh(t,e){const n=t.filters.concat([e]);return new Co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ah(t,e,n){return new Co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gl(t,e){return Kd(Qt(t),Qt(e))&&t.limitType===e.limitType}function _w(t){return`${Hd(Qt(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>mw(i)).join(", ")}]`),Kl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Oi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Oi(i)).join(",")),`Target(${r})`}(Qt(t))}; limitType=${t.limitType})`}function Ql(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Us(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=_g(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Us(r),i)||r.endAt&&!function(o,l,u){const h=_g(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Us(r),i))}(t,e)}function tC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vw(t){return(e,n)=>{let r=!1;for(const i of Us(t)){const s=nC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function nC(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?xi(u,h):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class Wi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$r(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return lw(this.inner)}size(){return this.innerSize}}/**
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
 */const rC=new we(q.comparator);function An(){return rC}const ww=new we(q.comparator);function As(...t){let e=ww;for(const n of t)e=e.insert(n.key,n);return e}function Ew(t){let e=ww;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return js()}function Tw(){return js()}function js(){return new Wi(t=>t.toString(),(t,e)=>t.isEqual(e))}const iC=new we(q.comparator),sC=new Be(q.comparator);function Z(...t){let e=sC;for(const n of t)e=e.add(n);return e}const oC=new Be(se);function aC(){return oC}/**
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
 */function Qd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vl(e)?"-0":e}}function Iw(t){return{integerValue:""+t}}function lC(t,e){return FP(e)?Iw(e):Qd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Yl{constructor(){this._=void 0}}function uC(t,e,n){return t instanceof ho?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$d(s)&&(s=Wd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof fo?Aw(t,e):t instanceof po?Rw(t,e):function(i,s){const o=Sw(i,s),l=Tg(o)+Tg(i.Pe);return Eh(o)&&Eh(i.Pe)?Iw(l):Qd(i.serializer,l)}(t,e)}function cC(t,e,n){return t instanceof fo?Aw(t,e):t instanceof po?Rw(t,e):n}function Sw(t,e){return t instanceof Tl?function(r){return Eh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ho extends Yl{}class fo extends Yl{constructor(e){super(),this.elements=e}}function Aw(t,e){const n=Pw(e);for(const r of t.elements)n.some(i=>Jt(i,r))||n.push(r);return{arrayValue:{values:n}}}class po extends Yl{constructor(e){super(),this.elements=e}}function Rw(t,e){let n=Pw(e);for(const r of t.elements)n=n.filter(i=>!Jt(i,r));return{arrayValue:{values:n}}}class Tl extends Yl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Tg(t){return Se(t.integerValue||t.doubleValue)}function Pw(t){return qd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class hC{constructor(e,n){this.field=e,this.transform=n}}function dC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof fo&&i instanceof fo||r instanceof po&&i instanceof po?Vi(r.elements,i.elements,Jt):r instanceof Tl&&i instanceof Tl?Jt(r.Pe,i.Pe):r instanceof ho&&i instanceof ho}(t.transform,e.transform)}class fC{constructor(e,n){this.version=e,this.transformResults=n}}class bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jl{}function Cw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Nw(t.key,bt.none()):new ko(t.key,t.data,bt.none());{const n=t.data,r=ut.empty();let i=new Be(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new dr(t.key,r,new yt(i.toArray()),bt.none())}}function pC(t,e,n){t instanceof ko?function(i,s,o){const l=i.value.clone(),u=Sg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof dr?function(i,s,o){if(!Fa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Sg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(kw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof ko?function(s,o,l,u){if(!Fa(s.precondition,o))return l;const h=s.value.clone(),f=Ag(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof dr?function(s,o,l,u){if(!Fa(s.precondition,o))return l;const h=Ag(s.fieldTransforms,u,o),f=o.data;return f.setAll(kw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Fa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function mC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Sw(r.transform,i||null);s!=null&&(n===null&&(n=ut.empty()),n.set(r.field,s))}return n||null}function Ig(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Vi(r,i,(s,o)=>dC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ko extends Jl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class dr extends Jl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sg(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,cC(o,l,n[i]))}return r}function Ag(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,uC(s,o,e))}return r}class Nw extends Jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gC extends Jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Tw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Cw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Vi(this.mutations,e.mutations,(n,r)=>Ig(n,r))&&Vi(this.baseMutations,e.baseMutations,(n,r)=>Ig(n,r))}}class Yd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return iC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yd(e,n,r,i)}}/**
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
 */class _C{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class vC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Re,ne;function wC(t){switch(t){default:return K();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function Dw(t){if(t===void 0)return Sn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Re.OK:return O.OK;case Re.CANCELLED:return O.CANCELLED;case Re.UNKNOWN:return O.UNKNOWN;case Re.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Re.INTERNAL:return O.INTERNAL;case Re.UNAVAILABLE:return O.UNAVAILABLE;case Re.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Re.NOT_FOUND:return O.NOT_FOUND;case Re.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Re.ABORTED:return O.ABORTED;case Re.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Re.DATA_LOSS:return O.DATA_LOSS;default:return K()}}(ne=Re||(Re={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function EC(){return new TextEncoder}/**
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
 */const TC=new Pr([4294967295,4294967295],0);function Rg(t){const e=EC().encode(t),n=new ew;return n.update(e),new Uint8Array(n.digest())}function Pg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Pr([n,r],0),new Pr([i,s],0)]}class Jd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Rs(`Invalid padding: ${n}`);if(r<0)throw new Rs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Rs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Rs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Pr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Pr.fromNumber(r)));return i.compare(TC)===1&&(i=new Pr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Rg(e),[r,i]=Pg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Jd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Rg(e),[r,i]=Pg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Rs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,No.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xl(Q.min(),i,new we(se),An(),Z())}}class No{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new No(r,n,Z(),Z(),Z())}}/**
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
 */class Ua{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Vw{constructor(e,n){this.targetId=e,this.me=n}}class xw{constructor(e,n,r=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Cg{constructor(){this.fe=0,this.ge=Ng(),this.pe=$e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),n=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new No(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ng()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class IC{constructor(e){this.Le=e,this.Be=new Map,this.ke=An(),this.qe=kg(),this.Qe=new we(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Ih(s))if(r===0){const o=new q(s.path);this.Ue(n,o,Xe.newNoDocument(o,Q.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=br(r).toUint8Array()}catch(u){if(u instanceof uw)return Di("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Jd(o,i,s)}catch(u){return Di(u instanceof Rs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Ih(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Xe.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Z();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Xl(e,n,this.Qe,this.ke,r);return this.ke=An(),this.qe=kg(),this.Qe=new we(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Cg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Be(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Cg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function kg(){return new we(q.comparator)}function Ng(){return new we(q.comparator)}const SC={asc:"ASCENDING",desc:"DESCENDING"},AC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RC={and:"AND",or:"OR"};class PC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rh(t,e){return t.useProto3Json||Kl(e)?e:{value:e}}function Il(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ow(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function CC(t,e){return Il(t,e.toTimestamp())}function Yt(t){return ae(!!t),Q.fromTimestamp(function(n){const r=or(n);return new De(r.seconds,r.nanos)}(t))}function Xd(t,e){return Ph(t,e).canonicalString()}function Ph(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Lw(t){const e=fe.fromString(t);return ae(jw(e)),e}function Ch(t,e){return Xd(t.databaseId,e.path)}function fc(t,e){const n=Lw(e);if(n.get(1)!==t.databaseId.projectId)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(bw(n))}function Mw(t,e){return Xd(t.databaseId,e)}function kC(t){const e=Lw(t);return e.length===4?fe.emptyPath():bw(e)}function kh(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bw(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dg(t,e,n){return{name:Ch(t,e),fields:n.value.mapValue.fields}}function NC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ae(f===void 0||typeof f=="string"),$e.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),$e.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:Dw(h.code);return new $(f,h.message||"")}(o);n=new xw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fc(t,r.document.name),s=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):Q.min(),l=new ut({mapValue:{fields:r.document.fields}}),u=Xe.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ua(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fc(t,r.document),s=r.readTime?Yt(r.readTime):Q.min(),o=Xe.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ua([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fc(t,r.document),s=r.removedTargetIds||[];n=new Ua([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vC(i,s),l=r.targetId;n=new Vw(l,o)}}return n}function DC(t,e){let n;if(e instanceof ko)n={update:Dg(t,e.key,e.value)};else if(e instanceof Nw)n={delete:Ch(t,e.key)};else if(e instanceof dr)n={update:Dg(t,e.key,e.data),updateMask:jC(e.fieldMask)};else{if(!(e instanceof gC))return K();n={verify:Ch(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ho)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Tl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:CC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function VC(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Yt(i.updateTime):Yt(s);return o.isEqual(Q.min())&&(o=Yt(s)),new fC(o,i.transformResults||[])}(n,e))):[]}function xC(t,e){return{documents:[Mw(t,e.path)]}}function OC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Mw(t,i);const s=function(h){if(h.length!==0)return Uw(jt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Jr(g.field),direction:bC(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Rh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function LC(t){let e=kC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=Fw(m);return g instanceof jt&&fw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(k){return new El(Xr(k.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Kl(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,I=m.values||[];return new wl(I,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,I=m.values||[];return new wl(I,g)}(n.endAt)),ZP(e,i,o,s,l,"F",u,h)}function MC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xr(n.unaryFilter.field);return Ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xr(n.unaryFilter.field);return Ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xr(n.unaryFilter.field);return Ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xr(n.unaryFilter.field);return Ce.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Ce.create(Xr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jt.create(n.compositeFilter.filters.map(r=>Fw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function bC(t){return SC[t]}function FC(t){return AC[t]}function UC(t){return RC[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Xr(t){return Ue.fromServerFormat(t.fieldPath)}function Uw(t){return t instanceof Ce?function(n){if(n.op==="=="){if(yg(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NAN"}};if(gg(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yg(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NAN"}};if(gg(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(n.field),op:FC(n.op),value:n.value}}}(t):t instanceof jt?function(n){const r=n.getFilters().map(i=>Uw(i));return r.length===1?r[0]:{compositeFilter:{op:UC(n.op),filters:r}}}(t):K()}function jC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Wn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=$e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class BC{constructor(e){this.ct=e}}function zC(t){const e=LC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ah(e,e.limit,"L"):e}/**
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
 */class $C{constructor(){this.un=new WC}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(sr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(sr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class WC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Be(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(fe.comparator)).toArray()}}/**
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
 */class Li{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Li(0)}static kn(){return new Li(-1)}}/**
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
 */class qC{constructor(){this.changes=new Wi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class HC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class KC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bs(r.mutation,i,yt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=Sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=As();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=An();const o=js(),l=function(){return js()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof dr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Bs(f.mutation,h,f.mutation.getFieldMask(),De.now())):o.set(h.key,yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new HC(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=js();let i=new we((o,l)=>o-l),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||yt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||Z()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=Tw();f.forEach(g=>{if(!s.has(g)){const I=Cw(n.get(g),r.get(g));I!==null&&m.set(g,I),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Sr());let l=-1,u=s;return o.next(h=>M.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Z())).next(f=>({batchId:l,changes:Ew(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=As();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=As();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(m,g){return new Co(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Xe.newInvalidDocument(f)))});let l=As();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Bs(f.mutation,h,yt.empty(),De.now()),Ql(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class GC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Yt(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:zC(i.bundledQuery),readTime:Yt(i.readTime)}}(n)),M.resolve()}}/**
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
 */class QC{constructor(){this.overlays=new we(q.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Sr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Sr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Sr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _C(n,r));let s=this.Ir.get(n);s===void 0&&(s=Z(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class YC{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Zd{constructor(){this.Tr=new Be(xe.Er),this.dr=new Be(xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new xe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new xe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new fe([])),r=new xe(n,e),i=new xe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new fe([])),r=new xe(n,e),i=new xe(n,e+1);let s=Z();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new xe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class xe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
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
 */class JC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Be(xe.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new xe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new xe(n,0),i=new xe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(se);return n.forEach(i=>{const s=new xe(i,0),o=new xe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new xe(new q(s),0);let l=new Be(se);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new xe(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class XC{constructor(e){this.Mr=e,this.docs=function(){return new we(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Xe.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=An();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||OP(xP(f),r)<=0||(i.has(f.key)||Ql(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZC(this)}getSize(e){return M.resolve(this.size)}}class ZC extends qC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class ek{constructor(e){this.persistence=e,this.Nr=new Wi(n=>Hd(n),Kd),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Zd,this.targetCount=0,this.kr=Li.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Li(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
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
 */class tk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new zd(0),this.Kr=!1,this.Kr=!0,this.$r=new YC,this.referenceDelegate=e(this),this.Ur=new ek(this),this.indexManager=new $C,this.remoteDocumentCache=function(i){return new XC(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new BC(n),this.Gr=new GC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new JC(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new nk(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class nk extends MP{constructor(e){super(),this.currentSequenceNumber=e}}class ef{constructor(e){this.persistence=e,this.Jr=new Zd,this.Yr=null}static Zr(e){return new ef(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class tf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new tf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class rk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ik{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return WI()?8:bP(et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new rk;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ys()<=ee.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Yr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(ys()<=ee.DEBUG&&W("QueryEngine","Query:",Yr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ys()<=ee.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Yr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(n))):M.resolve())}Yi(e,n){if(Eg(n))return M.resolve(null);let r=Qt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ah(n,null,"F"),r=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Ah(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Eg(n)||i.isEqual(Q.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(ys()<=ee.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yr(n)),this.rs(e,o,n,VP(i,-1)).next(l=>l))})}ts(e,n){let r=new Be(vw(e));return n.forEach((i,s)=>{Ql(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ys()<=ee.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Yr(n)),this.Ji.getDocumentsMatchingQuery(e,n,sr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class sk{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new we(se),this._s=new Wi(s=>Hd(s),Kd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function ok(t,e,n,r){return new sk(t,e,n,r)}async function Bw(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Z();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function ak(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,g=m.keys();let I=M.resolve();return g.forEach(k=>{I=I.next(()=>f.getEntry(u,k)).next(D=>{const L=h.docVersions.get(k);ae(L!==null),D.version.compareTo(L)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Z();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function zw(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function lk(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let I=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken($e.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(m,I),function(D,L,S){return D.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,I,f)&&l.push(n.Ur.updateTargetData(s,I))});let u=An(),h=Z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(uk(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Q.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function uk(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=An();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function ck(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hk(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Nh(t,e,n){const r=Y(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Po(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Vg(t,e,n){const r=Y(t);let i=Q.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=Y(u),g=m._s.get(f);return g!==void 0?M.resolve(m.os.get(g)):m.Ur.getTargetData(h,f)}(r,o,Qt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:Z())).next(l=>(dk(r,tC(e),l),{documents:l,Ts:s})))}function dk(t,e,n){let r=t.us.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class xg{constructor(){this.activeTargetIds=aC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fk{constructor(){this.so=new xg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new xg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pk{_o(e){}shutdown(){}}/**
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
 */class Og{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let va=null;function pc(){return va===null?va=function(){return 268435456+Math.round(2147483648*Math.random())}():va++,"0x"+va.toString(16)}/**
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
 */const mk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Qe="WebChannelConnection";class yk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=pc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Di("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$i}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=mk[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=pc();return new Promise((o,l)=>{const u=new tw;u.setWithCredentials(!0),u.listenOnce(nw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ma.NO_ERROR:const f=u.getResponseJson();W(Qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Ma.TIMEOUT:W(Qe,`RPC '${e}' ${s} timed out`),l(new $(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ma.HTTP_ERROR:const m=u.getStatus();if(W(Qe,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g==null?void 0:g.error;if(I&&I.status&&I.message){const k=function(L){const S=L.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(S)>=0?S:O.UNKNOWN}(I.status);l(new $(k,I.message))}else l(new $(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(O.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{W(Qe,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);W(Qe,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=pc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sw(),l=iw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(Qe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,I=!1;const k=new gk({Io:L=>{I?W(Qe,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(g||(W(Qe,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),W(Qe,`RPC '${e}' stream ${i} sending:`,L),m.send(L))},To:()=>m.close()}),D=(L,S,v)=>{L.listen(S,A=>{try{v(A)}catch(x){setTimeout(()=>{throw x},0)}})};return D(m,Ss.EventType.OPEN,()=>{I||(W(Qe,`RPC '${e}' stream ${i} transport opened.`),k.yo())}),D(m,Ss.EventType.CLOSE,()=>{I||(I=!0,W(Qe,`RPC '${e}' stream ${i} transport closed`),k.So())}),D(m,Ss.EventType.ERROR,L=>{I||(I=!0,Di(Qe,`RPC '${e}' stream ${i} transport errored:`,L),k.So(new $(O.UNAVAILABLE,"The operation could not be completed")))}),D(m,Ss.EventType.MESSAGE,L=>{var S;if(!I){const v=L.data[0];ae(!!v);const A=v,x=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(x){W(Qe,`RPC '${e}' stream ${i} received error:`,x);const j=x.status;let U=function(_){const E=Re[_];if(E!==void 0)return Dw(E)}(j),w=x.message;U===void 0&&(U=O.INTERNAL,w="Unknown error status: "+j+" with message "+x.message),I=!0,k.So(new $(U,w)),m.close()}else W(Qe,`RPC '${e}' stream ${i} received:`,v),k.bo(v)}}),D(l,rw.STAT_EVENT,L=>{L.stat===vh.PROXY?W(Qe,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===vh.NOPROXY&&W(Qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function mc(){return typeof document<"u"?document:null}/**
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
 */function Zl(t){return new PC(t,!0)}/**
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
 */class $w{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Ww{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $w(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Sn(n.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _k extends Ww{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=NC(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Yt(o.readTime):Q.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=kh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Ih(u)?{documents:xC(s,u)}:{query:OC(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Ow(s,o.resumeToken);const h=Rh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=Il(s,o.snapshotVersion.toTimestamp());const h=Rh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=MC(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=kh(this.serializer),n.removeTarget=e,this.a_(n)}}class vk extends Ww{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=VC(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=kh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>DC(this.serializer,r))};this.a_(n)}}/**
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
 */class wk extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ph(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(O.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ph(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ek{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Sn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Tk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Wr(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.L_.add(4),await Do(h),h.q_.set("Unknown"),h.L_.delete(4),await eu(h)}(this))})}),this.q_=new Ek(r,i)}}async function eu(t){if(Wr(t))for(const e of t.B_)await e(!0)}async function Do(t){for(const e of t.B_)await e(!1)}function qw(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),of(n)?sf(n):qi(n).r_()&&rf(n,e))}function nf(t,e){const n=Y(t),r=qi(n);n.N_.delete(e),r.r_()&&Hw(n,e),n.N_.size===0&&(r.r_()?r.o_():Wr(n)&&n.q_.set("Unknown"))}function rf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qi(t).A_(e)}function Hw(t,e){t.Q_.xe(e),qi(t).R_(e)}function sf(t){t.Q_=new IC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),qi(t).start(),t.q_.v_()}function of(t){return Wr(t)&&!qi(t).n_()&&t.N_.size>0}function Wr(t){return Y(t).L_.size===0}function Kw(t){t.Q_=void 0}async function Ik(t){t.q_.set("Online")}async function Sk(t){t.N_.forEach((e,n)=>{rf(t,e)})}async function Ak(t,e){Kw(t),of(t)?(t.q_.M_(e),sf(t)):t.q_.set("Unknown")}async function Rk(t,e,n){if(t.q_.set("Online"),e instanceof xw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sl(t,r)}else if(e instanceof Ua?t.Q_.Ke(e):e instanceof Vw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const r=await zw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken($e.EMPTY_BYTE_STRING,f.snapshotVersion)),Hw(s,u);const m=new Wn(f.target,u,h,f.sequenceNumber);rf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Sl(t,r)}}async function Sl(t,e,n){if(!Po(e))throw e;t.L_.add(1),await Do(t),t.q_.set("Offline"),n||(n=()=>zw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await eu(t)})}function Gw(t,e){return e().catch(n=>Sl(t,n,e))}async function tu(t){const e=Y(t),n=ar(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Pk(e);)try{const i=await ck(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Ck(e,i)}catch(i){await Sl(e,i)}Qw(e)&&Yw(e)}function Pk(t){return Wr(t)&&t.O_.length<10}function Ck(t,e){t.O_.push(e);const n=ar(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Qw(t){return Wr(t)&&!ar(t).n_()&&t.O_.length>0}function Yw(t){ar(t).start()}async function kk(t){ar(t).p_()}async function Nk(t){const e=ar(t);for(const n of t.O_)e.m_(n.mutations)}async function Dk(t,e,n){const r=t.O_.shift(),i=Yd.from(r,e,n);await Gw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await tu(t)}async function Vk(t,e){e&&ar(t).V_&&await async function(r,i){if(function(o){return wC(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();ar(r).s_(),await Gw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await tu(r)}}(t,e),Qw(t)&&Yw(t)}async function Lg(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Wr(n);n.L_.add(3),await Do(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await eu(n)}async function xk(t,e){const n=Y(t);e?(n.L_.delete(2),await eu(n)):e||(n.L_.add(2),await Do(n),n.q_.set("Unknown"))}function qi(t){return t.K_||(t.K_=function(n,r,i){const s=Y(n);return s.w_(),new _k(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Ik.bind(null,t),Ro:Sk.bind(null,t),mo:Ak.bind(null,t),d_:Rk.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),of(t)?sf(t):t.q_.set("Unknown")):(await t.K_.stop(),Kw(t))})),t.K_}function ar(t){return t.U_||(t.U_=function(n,r,i){const s=Y(n);return s.w_(),new vk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:kk.bind(null,t),mo:Vk.bind(null,t),f_:Nk.bind(null,t),g_:Dk.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await tu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class af{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new af(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lf(t,e){if(Sn("AsyncQueue",`${e}: ${t}`),Po(t))return new $(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ei{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=As(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Ei(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Mg{constructor(){this.W_=new we(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Mi(e,n,Ei.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Ok{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Lk{constructor(){this.queries=bg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=bg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(O.ABORTED,"Firestore shutting down"))}}function bg(){return new Wi(t=>_w(t),Gl)}async function Jw(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Ok,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=lf(o,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&uf(n)}async function Xw(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Mk(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&uf(n)}function bk(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function uf(t){t.Y_.forEach(e=>{e.next()})}var Dh,Fg;(Fg=Dh||(Dh={})).ea="default",Fg.Cache="cache";class Zw{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Dh.Cache}}/**
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
 */class eE{constructor(e){this.key=e}}class tE{constructor(e){this.key=e}}class Fk{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=vw(e),this.Ra=new Ei(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Mg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),I=Ql(this.query,m)?m:null,k=!!g&&this.mutatedKeys.has(g.key),D=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let L=!1;g&&I?g.data.isEqual(I.data)?k!==D&&(r.track({type:3,doc:I}),L=!0):this.ga(g,I)||(r.track({type:2,doc:I}),L=!0,(u&&this.Aa(I,u)>0||h&&this.Aa(I,h)<0)&&(l=!0)):!g&&I?(r.track({type:0,doc:I}),L=!0):g&&!I&&(r.track({type:1,doc:g}),L=!0,(u||h)&&(l=!0)),L&&(I?(o=o.add(I),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(I,k){const D=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return D(I)-D(k)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Mi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Mg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new tE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new eE(r))}),n}ba(e){this.Ta=e.Ts,this.da=Z();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Mi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Uk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jk{constructor(e){this.key=e,this.va=!1}}class Bk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Wi(l=>_w(l),Gl),this.Ma=new Map,this.xa=new Set,this.Oa=new we(q.comparator),this.Na=new Map,this.La=new Zd,this.Ba={},this.ka=new Map,this.qa=Li.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function zk(t,e,n=!0){const r=aE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await nE(r,e,n,!0),i}async function $k(t,e){const n=aE(t);await nE(n,e,!0,!1)}async function nE(t,e,n,r){const i=await hk(t.localStore,Qt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Wk(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&qw(t.remoteStore,i),l}async function Wk(t,e,n,r,i){t.Ka=(m,g,I)=>async function(D,L,S,v){let A=L.view.ma(S);A.ns&&(A=await Vg(D.localStore,L.query,!1).then(({documents:w})=>L.view.ma(w,A)));const x=v&&v.targetChanges.get(L.targetId),j=v&&v.targetMismatches.get(L.targetId)!=null,U=L.view.applyChanges(A,D.isPrimaryClient,x,j);return jg(D,L.targetId,U.wa),U.snapshot}(t,m,g,I);const s=await Vg(t.localStore,e,!0),o=new Fk(e,s.Ts),l=o.ma(s.documents),u=No.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);jg(t,n,h.wa);const f=new Uk(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function qk(t,e,n){const r=Y(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Gl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Nh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&nf(r.remoteStore,i.targetId),Vh(r,i.targetId)}).catch(Ro)):(Vh(r,i.targetId),await Nh(r.localStore,i.targetId,!0))}async function Hk(t,e){const n=Y(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),nf(n.remoteStore,r.targetId))}async function Kk(t,e,n){const r=e1(t);try{const i=await function(o,l){const u=Y(o),h=De.now(),f=l.reduce((I,k)=>I.add(k.key),Z());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let k=An(),D=Z();return u.cs.getEntries(I,f).next(L=>{k=L,k.forEach((S,v)=>{v.isValidDocument()||(D=D.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,k)).next(L=>{m=L;const S=[];for(const v of l){const A=mC(v,m.get(v.key).overlayedDocument);A!=null&&S.push(new dr(v.key,A,cw(A.value.mapValue),bt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,S,l)}).next(L=>{g=L;const S=L.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(I,L.batchId,S)})}).then(()=>({batchId:g.batchId,changes:Ew(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new we(se)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Vo(r,i.changes),await tu(r.remoteStore)}catch(i){const s=lf(i,"Failed to persist write");n.reject(s)}}async function rE(t,e){const n=Y(t);try{const r=await lk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await Vo(n,r,e)}catch(r){await Ro(r)}}function Ug(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(h=!0)}),h&&uf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Gk(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new we(q.comparator);o=o.insert(s,Xe.newNoDocument(s,Q.min()));const l=Z().add(s),u=new Xl(Q.min(),new Map,new we(se),o,l);await rE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),cf(r)}else await Nh(r.localStore,e,!1).then(()=>Vh(r,e,n)).catch(Ro)}async function Qk(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await ak(n.localStore,e);sE(n,r,null),iE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vo(n,i)}catch(i){await Ro(i)}}async function Yk(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ae(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);sE(r,e,n),iE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vo(r,i)}catch(i){await Ro(i)}}function iE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function sE(t,e,n){const r=Y(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Vh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||oE(t,r)})}function oE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(nf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),cf(t))}function jg(t,e,n){for(const r of n)r instanceof eE?(t.La.addReference(r.key,e),Jk(t,r)):r instanceof tE?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||oE(t,r.key)):K()}function Jk(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),cf(t))}function cf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new jk(n)),t.Oa=t.Oa.insert(n,r),qw(t.remoteStore,new Wn(Qt(Gd(n.path)),r,"TargetPurposeLimboResolution",zd.oe))}}async function Vo(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=tf.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(h,g=>M.forEach(g.$i,I=>f.persistence.referenceDelegate.addReference(m,g.targetId,I)).next(()=>M.forEach(g.Ui,I=>f.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))}catch(m){if(!Po(m))throw m;W("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const I=f.os.get(g),k=I.snapshotVersion,D=I.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(g,D)}}}(r.localStore,s))}async function Xk(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await Bw(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(O.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vo(n,r.hs)}}function Zk(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return Z().add(r.key);{let i=Z();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function aE(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gk.bind(null,e),e.Ca.d_=Mk.bind(null,e.eventManager),e.Ca.$a=bk.bind(null,e.eventManager),e}function e1(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yk.bind(null,e),e}class Al{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return ok(this.persistence,new ik,e.initialUser,this.serializer)}Ga(e){return new tk(ef.Zr,this.serializer)}Wa(e){return new fk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Al.provider={build:()=>new Al};class xh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ug(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xk.bind(null,this.syncEngine),await xk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Lk}()}createDatastore(e){const n=Zl(e.databaseInfo.databaseId),r=function(s){return new yk(s)}(e.databaseInfo);return function(s,o,l,u){return new wk(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Tk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ug(this.syncEngine,n,0),function(){return Og.D()?new Og:new pk}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new Bk(i,s,o,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Do(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}xh.provider={build:()=>new xh};/**
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
 *//**
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
 */class lE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class t1{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=aw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Bw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Bg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await n1(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Lg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Lg(e.remoteStore,i)),t._onlineComponents=e}async function n1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Di("Error using user provided cache. Falling back to memory cache: "+n),await gc(t,new Al)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await gc(t,new Al);return t._offlineComponents}async function uE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Bg(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Bg(t,new xh))),t._onlineComponents}function r1(t){return uE(t).then(e=>e.syncEngine)}async function cE(t){const e=await uE(t),n=e.eventManager;return n.onListen=zk.bind(null,e.syncEngine),n.onUnlisten=qk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$k.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Hk.bind(null,e.syncEngine),n}function i1(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new lE({next:g=>{f.Za(),o.enqueueAndForget(()=>Xw(s,m));const I=g.docs.has(l);!I&&g.fromCache?h.reject(new $(O.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&u&&u.source==="server"?h.reject(new $(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new Zw(Gd(l.path),f,{includeMetadataChanges:!0,_a:!0});return Jw(s,m)}(await cE(t),t.asyncQueue,e,n,r)),r.promise}function s1(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new lE({next:g=>{f.Za(),o.enqueueAndForget(()=>Xw(s,m)),g.fromCache&&u.source==="server"?h.reject(new $(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new Zw(l,f,{includeMetadataChanges:!0,_a:!0});return Jw(s,m)}(await cE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function hE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const zg=new Map;/**
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
 */function dE(t,e,n){if(!n)throw new $(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function o1(t,e,n,r){if(e===!0&&r===!0)throw new $(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $g(t){if(!q.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wg(t){if(q.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function nu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nu(t);throw new $(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class qg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}o1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ru{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new IP;switch(r.type){case"firstParty":return new PP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=zg.get(n);r&&(W("ComponentProvider","Removing Datastore"),zg.delete(n),r.terminate())}(this),Promise.resolve()}}function a1(t,e,n,r={}){var i;const s=(t=Xt(t,ru))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ye.MOCK_USER;else{l=bI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new $(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ye(h)}t._authCredentials=new SP(new ow(l,u))}}/**
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
 */class Hi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hi(this.firestore,e,this._query)}}class st{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class nr extends Hi{constructor(e,n,r){super(e,n,Gd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new q(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function Ur(t,e,...n){if(t=Ve(t),dE("collection","path",e),t instanceof ru){const r=fe.fromString(e,...n);return Wg(r),new nr(t,null,r)}{if(!(t instanceof st||t instanceof nr))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Wg(r),new nr(t.firestore,null,r)}}function Ki(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=aw.newId()),dE("doc","path",e),t instanceof ru){const r=fe.fromString(e,...n);return $g(r),new st(t,null,new q(r))}{if(!(t instanceof st||t instanceof nr))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return $g(r),new st(t.firestore,t instanceof nr?t.converter:null,new q(r))}}/**
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
 */class Hg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $w(this,"async_queue_retry"),this.Vu=()=>{const r=mc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new yn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Po(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Sn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=af.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Gi extends ru{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Hg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hg(e),this._firestoreClient=void 0,await e}}}function l1(t,e){const n=typeof t=="object"?t:gv(),r=typeof t=="string"?t:"(default)",i=Dd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=LI("firestore");s&&a1(i,...s)}return i}function hf(t){if(t._terminated)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||u1(t),t._firestoreClient}function u1(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new jP(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,hE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new t1(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class bi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bi($e.fromBase64String(e))}catch(n){throw new $(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bi($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class iu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class su{constructor(e){this._methodName=e}}/**
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
 */class df{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ff{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const c1=/^__.*__$/;class h1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ko(e,this.data,n,this.fieldTransforms)}}class fE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function pE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class pf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Rl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(pE(this.Cu)&&c1.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class d1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zl(e)}Qu(e,n,r,i=!1){return new pf({Cu:e,methodName:n,qu:r,path:Ue.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ou(t){const e=t._freezeSettings(),n=Zl(t._databaseId);return new d1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mE(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);gf("Data must be an object, but it was:",o,r);const l=gE(r,o);let u,h;if(s.merge)u=new yt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=Oh(e,m,n);if(!o.contains(g))throw new $(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);_E(f,g)||f.push(g)}u=new yt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new h1(new ut(l),u,h)}class au extends su{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof au}}class mf extends su{_toFieldTransform(e){return new hC(e.path,new ho)}isEqual(e){return e instanceof mf}}function f1(t,e,n,r){const i=t.Qu(1,e,n);gf("Data must be an object, but it was:",i,r);const s=[],o=ut.empty();$r(r,(u,h)=>{const f=yf(e,u,n);h=Ve(h);const m=i.Nu(f);if(h instanceof au)s.push(f);else{const g=xo(h,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new yt(s);return new fE(o,l,i.fieldTransforms)}function p1(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Oh(e,r,n)],u=[i];if(s.length%2!=0)throw new $(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Oh(e,s[g])),u.push(s[g+1]);const h=[],f=ut.empty();for(let g=l.length-1;g>=0;--g)if(!_E(h,l[g])){const I=l[g];let k=u[g];k=Ve(k);const D=o.Nu(I);if(k instanceof au)h.push(I);else{const L=xo(k,D);L!=null&&(h.push(I),f.set(I,L))}}const m=new yt(h);return new fE(f,m,o.fieldTransforms)}function m1(t,e,n,r=!1){return xo(n,t.Qu(r?4:3,e))}function xo(t,e){if(yE(t=Ve(t)))return gf("Unsupported field value:",e,t),gE(t,e);if(t instanceof su)return function(r,i){if(!pE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=xo(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:Il(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Il(i.serializer,s)}}if(r instanceof df)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bi)return{bytesValue:Ow(i.serializer,r._byteString)};if(r instanceof st){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Xd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ff)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Qd(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${nu(r)}`)}(t,e)}function gE(t,e){const n={};return lw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$r(t,(r,i)=>{const s=xo(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof df||t instanceof bi||t instanceof st||t instanceof su||t instanceof ff)}function gf(t,e,n){if(!yE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=nu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Oh(t,e,n){if((e=Ve(e))instanceof iu)return e._internalPath;if(typeof e=="string")return yf(t,e);throw Rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const g1=new RegExp("[~\\*/\\[\\]]");function yf(t,e,n){if(e.search(g1)>=0)throw Rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new iu(...e.split("."))._internalPath}catch{throw Rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(O.INVALID_ARGUMENT,l+t+u)}function _E(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class vE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new y1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_f("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class y1 extends vE{data(){return super.data()}}function _f(t,e){return typeof e=="string"?yf(t,e):e instanceof iu?e._internalPath:e._delegate._internalPath}/**
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
 */function _1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vf{}class v1 extends vf{}function wf(t,e,...n){let r=[];e instanceof vf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Tf).length,l=s.filter(u=>u instanceof lu).length;if(o>1||o>0&&l>0)throw new $(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class lu extends v1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new lu(e,n,r)}_apply(e){const n=this._parse(e);return wE(e._query,n),new Hi(e.firestore,e.converter,Sh(e._query,n))}_parse(e){const n=ou(e.firestore);return function(s,o,l,u,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Gg(m,f);const I=[];for(const k of m)I.push(Kg(u,s,k));g={arrayValue:{values:I}}}else g=Kg(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Gg(m,f),g=m1(l,o,m,f==="in"||f==="not-in");return Ce.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ef(t,e,n){const r=e,i=_f("where",t);return lu._create(i,r,n)}class Tf extends vf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Tf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)wE(o,u),o=Sh(o,u)}(e._query,n),new Hi(e.firestore,e.converter,Sh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Kg(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new $(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yw(e)&&n.indexOf("/")!==-1)throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!q.isDocumentKey(r))throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mg(t,new q(r))}if(n instanceof st)return mg(t,n._key);throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nu(n)}.`)}function Gg(t,e){if(!Array.isArray(t)||t.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class w1{convertValue(e,n="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $r(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Se(o.doubleValue));return new ff(s)}convertGeoPoint(e){return new df(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(lo(e));default:return null}}convertTimestamp(e){const n=or(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ae(jw(r));const i=new uo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Sn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function EE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Ps{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class TE extends vE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_f("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ja extends TE{data(e={}){return super.data(e)}}class E1{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ps(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ja(this._firestore,this._userDataWriter,r.key,r,new Ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ja(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ps(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ja(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ps(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:T1(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function T1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function If(t){t=Xt(t,st);const e=Xt(t.firestore,Gi);return i1(hf(e),t._key).then(n=>A1(e,t,n))}class IE extends w1{constructor(e){super(),this.firestore=e}convertBytes(e){return new bi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function uu(t){t=Xt(t,Hi);const e=Xt(t.firestore,Gi),n=hf(e),r=new IE(e);return _1(t._query),s1(n,t._query).then(i=>new E1(e,r,t,i))}function I1(t,e,n){t=Xt(t,st);const r=Xt(t.firestore,Gi),i=EE(t.converter,e);return Af(r,[mE(ou(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,bt.none())])}function S1(t,e,n,...r){t=Xt(t,st);const i=Xt(t.firestore,Gi),s=ou(i);let o;return o=typeof(e=Ve(e))=="string"||e instanceof iu?p1(s,"updateDoc",t._key,e,n,r):f1(s,"updateDoc",t._key,e),Af(i,[o.toMutation(t._key,bt.exists(!0))])}function Sf(t,e){const n=Xt(t.firestore,Gi),r=Ki(t),i=EE(t.converter,e);return Af(n,[mE(ou(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function Af(t,e){return function(r,i){const s=new yn;return r.asyncQueue.enqueueAndForget(async()=>Kk(await r1(r),i,s)),s.promise}(hf(t),e)}function A1(t,e,n){const r=n.docs.get(e._key),i=new IE(t);return new TE(t,i,e._key,r,new Ps(n.hasPendingWrites,n.fromCache),e.converter)}function cu(){return new mf("serverTimestamp")}(function(e,n=!0){(function(i){$i=i})(Bi),ki(new xr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Gi(new AP(r.getProvider("auth-internal")),new kP(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),tr(cg,"4.7.3",e),tr(cg,"4.7.3","esm2017")})();const R1={apiKey:"AIzaSyA_u0FKCd6MlHANrRmDr2Ec5nA7fEL6UBQ",authDomain:"hedara-hashgraph.firebaseapp.com",projectId:"hedara-hashgraph",appId:"1:836955251346:web:386d093f94bf040782bc4b"},SE=mv(R1),Zt=vP(SE),Pt=l1(SE);function P1(){const[t,e]=te.useState(""),[n,r]=te.useState(""),i=async s=>{s.preventDefault();try{await rR(Zt,t,n),alert("Logged in!")}catch(o){alert(o.message)}};return V.jsxs("form",{onSubmit:i,className:"form",children:[V.jsx("h2",{children:"Login"}),V.jsx("input",{placeholder:"Email",onChange:s=>e(s.target.value)}),V.jsx("input",{type:"password",placeholder:"Password",onChange:s=>r(s.target.value)}),V.jsx("button",{type:"submit",className:"submit-btn",children:"Log In"})]})}function C1(){const[t,e]=te.useState(""),[n,r]=te.useState(""),[i,s]=te.useState(""),[o,l]=te.useState("worker"),u=async h=>{h.preventDefault();try{const f=await nR(Zt,t,n);await sR(f.user,{displayName:i}),alert("Registration complete!"),await I1(Ki(Pt,"users",f.user.uid),{name:i,email:t,role:o})}catch(f){alert(f.message)}};return V.jsxs("form",{onSubmit:u,className:"form",children:[V.jsx("h2",{children:"Register"}),V.jsx("input",{placeholder:"Full Name",onChange:h=>s(h.target.value)}),V.jsx("input",{placeholder:"Email",onChange:h=>e(h.target.value)}),V.jsxs("select",{onChange:h=>l(h.target.value),value:o,children:[V.jsx("option",{value:"worker",children:"Worker"}),V.jsx("option",{value:"contractor",children:"Contractor"})]}),V.jsx("input",{type:"password",placeholder:"Password",onChange:h=>r(h.target.value)}),V.jsx("button",{type:"submit",className:"submit-btn",children:"Register"})]})}function k1(){const[t,e]=te.useState([]),n=async()=>{const s=(await uu(Ur(Pt,"jobs"))).docs.map(o=>({id:o.id,...o.data()})).filter(o=>{var l;return(((l=o.acceptedBy)==null?void 0:l.length)||0)<o.slots});e(s)},r=async i=>{const s=Zt.currentUser;if(!s)return alert("Login required.");const o=i.acceptedBy||[];if(o.includes(s.uid))return alert("You have already accepted this job.");if(o.length>=i.slots)return alert("Job slots are full.");try{const l=[...o,s.uid];await S1(Ki(Pt,"jobs",i.id),{acceptedBy:l,acceptedAt:cu()}),alert("Job accepted!"),n()}catch(l){console.error("Error accepting job:",l)}};return te.useEffect(()=>{n()},[]),V.jsxs("div",{className:"job-section",children:[V.jsx("h4",{className:"section-title",children:"Available Jobs"}),V.jsxs("ul",{className:"job-list",children:[t.map(i=>{var s;return V.jsxs("li",{className:"job-card",children:[V.jsxs("div",{className:"job-info",children:[V.jsx("strong",{className:"job-title",children:i.title}),V.jsx("em",{className:"job-location",children:i.location}),V.jsxs("p",{className:"job-status",children:[((s=i.acceptedBy)==null?void 0:s.length)||0," / ",i.slots," filled"]})]}),V.jsx("button",{className:"submit-btn",onClick:()=>r(i),children:"Accept Job"})]},i.id)}),t.length===0&&V.jsx("p",{style:{textAlign:"center",marginTop:"20px"},children:"No available jobs at the moment."})]})]})}function N1({onJobPosted:t}){const[e,n]=te.useState(""),[r,i]=te.useState(""),[s,o]=te.useState(1),l=async u=>{u.preventDefault();const h=Zt.currentUser;if(!h)return alert("Login required.");try{await Sf(Ur(Pt,"jobs"),{title:e,location:r,createdAt:cu(),createdBy:h.uid,slots:Number(s),acceptedBy:[]}),alert("Job posted!"),n(""),i(""),o(1),t&&t()}catch(f){console.error("Error posting job:",f)}};return V.jsxs("form",{onSubmit:l,className:"job-post-form",children:[V.jsx("h4",{className:"form-title",children:"Post a New Job"}),V.jsx("input",{type:"text",placeholder:"Job Title",value:e,onChange:u=>n(u.target.value),required:!0,className:"form-input"}),V.jsx("input",{type:"text",placeholder:"Location",value:r,onChange:u=>i(u.target.value),required:!0,className:"form-input"}),V.jsx("input",{type:"number",placeholder:"Number of Workers",value:s,onChange:u=>o(u.target.value),min:1,required:!0,className:"form-input"}),V.jsx("button",{type:"submit",className:"submit-btn",children:"Post Job"})]})}function D1({role:t}){return V.jsx("span",{style:{padding:"4px 10px",borderRadius:"20px",fontWeight:"bold",marginLeft:"8px",fontSize:"0.85rem",backgroundColor:"white",color:"#00796b"},children:t})}function V1({jobId:t,toUserId:e,targetRole:n}){const[r,i]=te.useState(5),[s,o]=te.useState(""),l=async u=>{u.preventDefault();const h=Zt.currentUser.uid,f=n==="worker"?"reviews_worker":"reviews_contractor";try{await Sf(Ur(Pt,f),{jobId:t,from:h,to:e,rating:r,comment:s,createdAt:cu()}),alert("Review submitted!"),o(""),i(5)}catch(m){console.error("Error adding review:",m)}};return V.jsxs("form",{onSubmit:l,className:"review-form",children:[V.jsxs("label",{children:["Rating:",V.jsx("select",{value:r,onChange:u=>i(Number(u.target.value)),children:[5,4,3,2,1].map(u=>V.jsxs("option",{value:u,children:[u," Star",u!==1&&"s"]},u))})]}),V.jsx("textarea",{placeholder:"Leave a comment",value:s,onChange:u=>o(u.target.value),rows:3,required:!0}),V.jsx("button",{type:"submit",className:"submit-btn",children:"Submit Review"})]})}function x1(){const[t,e]=te.useState([]),[n,r]=te.useState(!0),[i,s]=te.useState({});te.useEffect(()=>{const l=Zt.onAuthStateChanged(async u=>{if(!u){e([]),r(!1);return}try{const h=wf(Ur(Pt,"jobs"),Ef("createdBy","==",u.uid)),f=await uu(h),m=await Promise.all(f.docs.map(async g=>{const I={id:g.id,...g.data()};if(Array.isArray(I.acceptedBy)&&I.acceptedBy.length>0){const k=I.acceptedBy.map(async D=>{const L=await If(Ki(Pt,"users",D));return L.exists()?{uid:D,name:L.data().name||D}:{uid:D,name:D}});I.acceptedByDetails=await Promise.all(k)}else I.acceptedByDetails=[];return I}));e(m)}catch(h){console.error("Error fetching jobs:",h)}finally{r(!1)}});return()=>l()},[]);const o=(l,u)=>{s(h=>{var f;return{...h,[l]:{...h[l],[u]:!((f=h==null?void 0:h[l])!=null&&f[u])}}})};return V.jsxs("div",{className:"my-jobs-section",children:[V.jsx("h4",{className:"section-title",children:"My Jobs"}),n?V.jsx("p",{className:"info-text",children:"Loading jobs..."}):t.length===0?V.jsx("p",{className:"info-text",children:"No jobs posted yet."}):V.jsx("ul",{className:"job-list",children:t.map(l=>{var u;return V.jsxs("li",{className:"job-card",children:[V.jsxs("div",{className:"job-header",children:[V.jsx("strong",{className:"job-title",children:l.title}),V.jsx("span",{className:"job-location",children:l.location})]}),V.jsxs("p",{className:"job-filled",children:["Filled: ",((u=l.acceptedByDetails)==null?void 0:u.length)||0," / ",l.slots]}),l.acceptedByDetails.length>0?V.jsxs("div",{className:"accepted-list",children:[V.jsx("p",{className:"accepted-label",children:"Accepted by:"}),V.jsx("ul",{children:l.acceptedByDetails.map((h,f)=>{var g;const m=(g=i==null?void 0:i[l.id])==null?void 0:g[h.uid];return V.jsxs("li",{className:"accepted-user",children:[V.jsxs("p",{children:[V.jsx("strong",{children:h.name})," ",V.jsx("button",{className:"toggle-review-btn",onClick:()=>o(l.id,h.uid),children:m?"Hide Review":"Leave Review"})]}),m&&V.jsx("div",{className:"review-collapse",children:V.jsx(V1,{jobId:l.id,toUserId:h.uid})})]},f)})})]}):V.jsx("p",{className:"job-pending",children:"Not yet accepted"})]},l.id)})})]})}function O1({userId:t,role:e}){const[n,r]=te.useState([]),i=e==="worker"?"reviews_contractor":"reviews_worker";return te.useEffect(()=>{async function s(){const o=wf(Ur(Pt,i),Ef("to","==",t)),l=await uu(o);r(l.docs.map(u=>u.data()))}s()},[t]),V.jsxs("div",{className:"review-list-container",children:[V.jsx("h4",{className:"review-title",children:"Reviews"}),n.length===0?V.jsx("p",{className:"no-reviews",children:"No reviews yet."}):V.jsx("ul",{className:"review-list",children:n.map((s,o)=>V.jsxs("li",{className:"review-item",children:[V.jsxs("div",{className:"review-rating",children:[s.rating,"★"]}),V.jsxs("div",{className:"review-comment",children:['"',s.comment,'"']})]},o))})]})}function L1(){const[t,e]=te.useState([]),[n,r]=te.useState(!0),[i,s]=te.useState(""),[o,l]=te.useState(5),[u,h]=te.useState(null),f=Zt.currentUser;te.useEffect(()=>{if(!f)return;(async()=>{try{const I=wf(Ur(Pt,"jobs"),Ef("acceptedBy","array-contains",f.uid)),k=await uu(I),D=await Promise.all(k.docs.map(async L=>{const S={id:L.id,...L.data()},v=await If(Ki(Pt,"users",S.createdBy));return S.contractorName=v.exists()?v.data().name:"Unknown",S}));e(D)}catch(I){console.error("Error fetching accepted jobs:",I)}finally{r(!1)}})()},[f]);const m=async(g,I)=>{if(!i.trim())return alert("Please enter a comment.");try{await Sf(Ur(Pt,"reviews_worker"),{from:f.uid,to:I,jobId:g,rating:o,comment:i,createdAt:cu()}),alert("Review submitted!"),h(null),s(""),l(5)}catch(k){console.error("Error submitting review:",k),alert("Failed to submit review.")}};return V.jsxs("div",{className:"my-jobs-section",children:[V.jsx("h4",{className:"section-title",children:"My Accepted Jobs"}),n?V.jsx("p",{children:"Loading..."}):t.length===0?V.jsx("p",{children:"You haven't accepted any jobs yet."}):V.jsx("ul",{className:"job-list",children:t.map(g=>V.jsxs("li",{className:"job-card",children:[V.jsxs("div",{className:"job-header",children:[V.jsx("strong",{children:g.title})," — ",V.jsx("em",{children:g.location})]}),V.jsxs("p",{children:["Posted by: ",g.contractorName]}),u===g.id?V.jsxs("div",{className:"review-form",children:[V.jsx("textarea",{placeholder:"Leave a review...",value:i,onChange:I=>s(I.target.value)}),V.jsx("select",{value:o,onChange:I=>l(Number(I.target.value)),children:[5,4,3,2,1].map(I=>V.jsxs("option",{value:I,children:[I," Star",I>1?"s":""]},I))}),V.jsx("button",{onClick:()=>m(g.id,g.createdBy),children:"Submit Review"}),V.jsx("button",{onClick:()=>h(null),style:{marginLeft:"8px"},children:"Cancel"})]}):V.jsx("button",{onClick:()=>h(g.id),children:"Leave Review"})]},g.id))})]})}function M1({role:t}){const[e,n]=te.useState(null),[r,i]=te.useState("");te.useEffect(()=>$v(Zt,n),[]),te.useEffect(()=>{t==="worker"&&i("jobs"),t==="contractor"&&i("form")},[t]);const s=()=>t==="worker"&&r==="jobs"?V.jsx(k1,{}):t==="contractor"&&r==="form"?V.jsx(N1,{}):t==="worker"&&r==="accepted"?V.jsx(L1,{}):t==="contractor"&&r==="myJobs"?V.jsx(x1,{}):r==="reviews"?V.jsx(O1,{userId:e.uid,role:t}):null;return e?V.jsxs("div",{className:"dashboard",children:[V.jsx("header",{className:"dashboard-header sticky-banner",children:V.jsxs("h3",{children:["Welcome ",e.displayName," ",V.jsx(D1,{role:t}),V.jsx("button",{onClick:()=>lR(Zt),className:"submit-btn",style:{marginLeft:"10rem"},children:"Log Out"})]})}),V.jsxs("nav",{className:"dashboard-nav",children:[t==="worker"&&V.jsxs(V.Fragment,{children:[V.jsx("button",{onClick:()=>i("jobs"),children:"Available Jobs"}),V.jsx("button",{onClick:()=>i("accepted"),children:"My Accepted Jobs"}),V.jsx("button",{onClick:()=>i("reviews"),children:"My Reviews"})," "]}),t==="contractor"&&V.jsxs(V.Fragment,{children:[V.jsx("button",{onClick:()=>i("form"),children:"Post Job"}),V.jsx("button",{onClick:()=>i("myJobs"),children:"My Jobs"}),V.jsx("button",{onClick:()=>i("reviews"),children:"My Reviews"})," "]})]}),V.jsx("main",{className:"dashboard-content",children:s()})]}):null}function b1(){const[t,e]=te.useState(null),[n,r]=te.useState(null),[i,s]=te.useState(!0);return te.useEffect(()=>{const o=$v(Zt,async l=>{if(e(l),l){const u=await If(Ki(Pt,"users",l.uid));u.exists()&&r(u.data().role)}else r(null)});return()=>o()},[]),V.jsx("div",{children:t?V.jsx(M1,{role:n}):V.jsxs(V.Fragment,{children:[i?V.jsx(P1,{}):V.jsx(C1,{}),V.jsx("p",{className:"toggle-text",children:i?V.jsxs(V.Fragment,{children:["Don't have an account?"," ",V.jsx("span",{onClick:()=>s(!1),className:"toggle-link",children:"Register"})]}):V.jsxs(V.Fragment,{children:["Already have an account?"," ",V.jsx("span",{onClick:()=>s(!0),className:"toggle-link",children:"Login"})]})})]})})}yc.createRoot(document.getElementById("root")).render(V.jsx(b1,{}));

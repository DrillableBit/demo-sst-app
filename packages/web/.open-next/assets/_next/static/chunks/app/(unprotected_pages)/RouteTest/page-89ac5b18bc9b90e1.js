(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28],{6788:function(t,r,e){Promise.resolve().then(e.bind(e,3001))},5168:function(t,r,e){"use strict";function n(){if(void 0===window.location)return null;let t=new URL("http://localhost:3000"),r=t.protocol+"//",e=t.hostname,n=t.port?":".concat(t.port):"",o=window.location.protocol+"//",c=window.location.hostname,u=window.location.port?":".concat(window.location.port):"",s="localhost"===c?r:o,i="localhost"===c?e:c,a=""===u&&"localhost"!==c?"":u||n;return"".concat(s).concat(i).concat(a)}e.d(r,{$:function(){return n}})},1756:function(t,r){"use strict";r.Z=t=>{throw console.error("An error occurred:",t),Error("An error occurred.")}},9306:function(t,r,e){"use strict";e.d(r,{F9:function(){return i},O8:function(){return a},ag:function(){return s}});var n=e(3132),o=e.n(n),c=e(1756),u=e(5168);async function s(t){let{path:r}=t,e=(0,u.$)();return o().get("".concat(e,"/api/tunnel/").concat(r),{}).then(t=>{if(200===t.status)return console.log("get returned response",t),{data:t.data.response,status:t.status};throw(0,c.Z)({message:t.statusText}),Error(t.statusText)}).catch(t=>{throw(0,c.Z)({error:t}),t})}async function i(t){let{path:r,data:e,additionalHeaders:n={}}=t,s=(0,u.$)();return o().post("".concat(s,"/api/tunnel/").concat(r),e,{}).then(t=>{if(200===t.status)return console.log("post returned response",t),{data:t.data.response,status:t.status};throw(0,c.Z)({message:t.statusText}),Error(t.statusText)}).catch(t=>{throw(0,c.Z)({error:t}),t})}async function a(t){let{path:r}=t,e=(0,u.$)();return o().delete("".concat(e,"/api/tunnel/").concat(r)).then(t=>{if(200===t.status)return{data:t.data.response,status:t.status};throw(0,c.Z)({message:t.statusText}),Error(t.statusText)}).catch(t=>{throw(0,c.Z)({error:t}),t})}},3001:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return i}});var n=e(4618),o=e(7024),c=e(9306),u=e(1756),s=t=>{let{path:r}=t,{data:e,isLoading:s,error:i}=function(t){let[r,e]=(0,o.useState)(null),[n,s]=(0,o.useState)(!0),[i,a]=(0,o.useState)(null);return(0,o.useEffect)(()=>{(0,c.ag)({path:t}).then(t=>{if(!t)throw(0,u.Z)(t),Error("Fetch error");return t.data}).then(t=>{e(t),s(!1)}).catch(t=>{a(t.toString()),s(!1)})},[t]),{data:r,isLoading:n,error:i}}(r);return s?(0,n.jsx)("div",{children:"Loading..."}):i?(0,n.jsxs)("div",{children:["Error: ",i]}):(0,n.jsx)("div",{children:e})};function i(){return(0,n.jsx)("div",{children:(0,n.jsx)(s,{path:"private"})})}},1432:function(t,r,e){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=e(7024),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(t,r,e){var n,c={},a=null,l=null;for(n in void 0!==e&&(a=""+e),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)u.call(r,n)&&!i.hasOwnProperty(n)&&(c[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:t,key:a,ref:l,props:c,_owner:s.current}}r.Fragment=c,r.jsx=a,r.jsxs=a},4618:function(t,r,e){"use strict";t.exports=e(1432)},9613:function(t){var r,e,n,o=t.exports={};function c(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===c||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:c}catch(t){r=c}try{e="function"==typeof clearTimeout?clearTimeout:u}catch(t){e=u}}();var i=[],a=!1,l=-1;function f(){a&&n&&(a=!1,n.length?i=n.concat(i):l=-1,i.length&&h())}function h(){if(!a){var t=s(f);a=!0;for(var r=i.length;r;){for(n=i,i=[];++l<r;)n&&n[l].run();l=-1,r=i.length}n=null,a=!1,function(t){if(e===clearTimeout)return clearTimeout(t);if((e===u||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{e(t)}catch(r){try{return e.call(null,t)}catch(r){return e.call(this,t)}}}(t)}}function d(t,r){this.fun=t,this.array=r}function p(){}o.nextTick=function(t){var r=Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];i.push(new d(t,r)),1!==i.length||a||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(t){return[]},o.binding=function(t){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},function(t){t.O(0,[132,89,676,744],function(){return t(t.s=6788)}),_N_E=t.O()}]);
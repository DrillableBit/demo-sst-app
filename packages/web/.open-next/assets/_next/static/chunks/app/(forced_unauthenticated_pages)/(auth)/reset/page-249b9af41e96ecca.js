(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[326],{5893:function(){},5103:function(e,r,n){Promise.resolve().then(n.bind(n,1892))},3073:function(e,r,n){"use strict";n.d(r,{So:function(){return s},X_:function(){return t},Zb:function(){return u},wv:function(){return i}});var o=n(7512);let t=new o.AM({UserPoolId:"eu-central-1_zmPNpG8HY",ClientId:"5s5tkn3i8dkgg8r0j16p2fgivv"});function s(e,r,n){let s=new o.sD({Username:e,Password:r}),i=new o.ws({Username:e,Pool:t});i.authenticateUser(s,n)}function i(e,r){let n=new o.ws({Username:e,Pool:t});n.forgotPassword({onSuccess:function(){console.log("internal succes"),r&&r.onSuccess&&r.onSuccess()},onFailure:function(e){console.log("internal failure"),r&&r.onFailure&&r.onFailure(e)},inputVerificationCode:function(e){console.log("internal inputVerificationCode"),r&&r.inputVerificationCode&&r.inputVerificationCode(e)}})}function u(e,r,n,s){let i=new o.ws({Username:e,Pool:t});i.confirmPassword(r,n,{onSuccess(){s&&s.onSuccess&&s.onSuccess()},onFailure(e){s&&s.onFailure&&s.onFailure(e)}})}},1892:function(e,r,n){"use strict";n.r(r);var o=n(4618),t=n(7024),s=n(3073),i=n(3911),u=n.n(i);r.default=()=>{let[e,r]=(0,t.useState)(""),[n,i]=(0,t.useState)(""),[l,a]=(0,t.useState)(""),[c,d]=(0,t.useState)("request"),[f,m]=(0,t.useState)(""),[b,p]=(0,t.useState)("");return(0,o.jsxs)(o.Fragment,{children:["request"===c?(0,o.jsxs)("form",{onSubmit:r=>{r.preventDefault(),console.log("initiated"),(0,s.wv)(e,{inputVerificationCode:()=>{m("Verification code sent to your email. Please check and proceed."),d("confirm")},onFailure:e=>{console.log("err"),p(e.message||JSON.stringify(e))}})},className:"space-y-6",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),(0,o.jsx)("input",{type:"email",id:"email",value:e,onChange:e=>r(e.target.value),required:!0,placeholder:"example@example.com",className:"mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"})]}),(0,o.jsx)("button",{type:"submit",className:"w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",children:"Request Password Reset"})]}):(0,o.jsxs)("form",{onSubmit:r=>{r.preventDefault(),(0,s.Zb)(e,n,l,{onSuccess:()=>{m("Password reset successful! You can now login with your new password.")},onFailure:e=>{p(e.message||JSON.stringify(e))}})},className:"space-y-6",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"verificationCode",className:"block text-sm font-medium text-gray-700",children:"Verification Code"}),(0,o.jsx)("input",{type:"text",id:"verificationCode",value:n,onChange:e=>i(e.target.value),required:!0,placeholder:"Enter your verification code",className:"mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"newPassword",className:"block text-sm font-medium text-gray-700",children:"New Password"}),(0,o.jsx)("input",{type:"password",id:"newPassword",value:l,onChange:e=>a(e.target.value),required:!0,placeholder:"Enter your new password",className:"mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"})]}),(0,o.jsx)("button",{type:"submit",className:"w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",children:"Confirm Password Reset"})]}),b&&(0,o.jsx)("div",{className:"mt-4 text-center text-red-600",children:b}),f&&(0,o.jsx)("div",{className:"mt-4 text-center text-green-600",children:f}),(0,o.jsx)("div",{className:"mt-4 text-center",children:(0,o.jsxs)("p",{children:["Remember your password?"," ",(0,o.jsx)(u(),{href:"/login",className:"text-blue-600 hover:text-blue-800",children:"Log in"})]})})]})}},1432:function(e,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n(7024),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,u=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var o,s={},a=null,c=null;for(o in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,o)&&!l.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===s[o]&&(s[o]=r[o]);return{$$typeof:t,type:e,key:a,ref:c,props:s,_owner:u.current}}r.Fragment=s,r.jsx=a,r.jsxs=a},4618:function(e,r,n){"use strict";e.exports=n(1432)}},function(e){e.O(0,[911,512,89,676,744],function(){return e(e.s=5103)}),_N_E=e.O()}]);
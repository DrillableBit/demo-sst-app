(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{5893:function(){},7411:function(e,t,n){Promise.resolve().then(n.bind(n,8139))},8976:function(e,t,n){"use strict";n.r(t),n.d(t,{dynamic:function(){return c},useAuth:function(){return u}});var s=n(4618),r=n(7024),o=n(4540);let c="force-dynamic",i=(0,r.createContext)(void 0);function u(){let e=(0,r.useContext)(i);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}t.default=e=>{let{children:t}=e,[n,c]=(0,r.useState)(!1),[u,l]=(0,r.useState)(!0),[a,d]=(0,r.useState)(!1),[f,m]=(0,r.useState)("");return(0,s.jsx)(i.Provider,{value:{isLoggedIn:n,setIsLoggedIn:c,authLoading:u,setAuthLoading:l,authStatus:a,setAuthStatus:d,status:f,setStatus:m},children:(0,s.jsx)(o.SessionProvider,{children:t})})}},3073:function(e,t,n){"use strict";n.d(t,{So:function(){return o},X_:function(){return r},Zb:function(){return i},wv:function(){return c}});var s=n(7512);let r=new s.AM({UserPoolId:"eu-central-1_zmPNpG8HY",ClientId:"5s5tkn3i8dkgg8r0j16p2fgivv"});function o(e,t,n){let o=new s.sD({Username:e,Password:t}),c=new s.ws({Username:e,Pool:r});c.authenticateUser(o,n)}function c(e,t){let n=new s.ws({Username:e,Pool:r});n.forgotPassword({onSuccess:function(){console.log("internal succes"),t&&t.onSuccess&&t.onSuccess()},onFailure:function(e){console.log("internal failure"),t&&t.onFailure&&t.onFailure(e)},inputVerificationCode:function(e){console.log("internal inputVerificationCode"),t&&t.inputVerificationCode&&t.inputVerificationCode(e)}})}function i(e,t,n,o){let c=new s.ws({Username:e,Pool:r});c.confirmPassword(t,n,{onSuccess(){o&&o.onSuccess&&o.onSuccess()},onFailure(e){o&&o.onFailure&&o.onFailure(e)}})}},8139:function(e,t,n){"use strict";n.r(t);var s=n(4618),r=n(7024),o=n(3073),c=n(3911),i=n.n(c),u=n(5041),l=n(8976);t.default=()=>{let[e,t]=(0,r.useState)(""),[n,c]=(0,r.useState)(""),[a,d]=(0,r.useState)(""),[f,m]=(0,r.useState)(""),[h,x]=(0,r.useState)(""),[g,b]=(0,r.useState)(!1),[p,S]=(0,r.useState)(""),{setIsLoggedIn:w}=(0,l.useAuth)();return(0,r.useEffect)(()=>{switch(p){case"Success":console.log("Success redirect"),(0,u.redirect)("/");break;case"Confirm":console.log("Confirm redirect"),(0,u.redirect)("/confirm")}}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{onSubmit:t=>{t.preventDefault(),(0,o.So)(e,n,{onSuccess:()=>{console.log("success"),S("Success"),w(!0)},onFailure:t=>{"UserNotConfirmedException"===t.code?(x("User is not confirmed"),localStorage.setItem("email",e),w(!1)):(m("error"),console.log("err"),d(t.message||JSON.stringify(t)))}})},className:"space-y-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),(0,s.jsx)("input",{type:"email",id:"email",value:e,onChange:e=>t(e.target.value),required:!0,placeholder:"example@example.com",className:"mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("input",{type:g?"text":"password",id:"password",value:n,onChange:e=>c(e.target.value),required:!0,placeholder:"P@ssw0rd1",className:"mt-1 flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"}),(0,s.jsx)("button",{type:"button",onClick:()=>b(!g),className:"ml-2 text-gray-500",children:g?"Hide":"Show"})]})]}),h,(0,s.jsx)("button",{type:"submit",className:"w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",children:"Sign In"})]}),(0,s.jsx)("div",{className:"mt-4 text-center ".concat("success"===f?"text-green-600":"text-red-600"),children:a}),(0,s.jsx)("div",{className:"mt-4 text-center",children:(0,s.jsxs)("p",{children:["Don't have an account?"," ",(0,s.jsx)(i(),{href:"/signup",className:"text-blue-600 hover:text-blue-800",children:"Sign up"})]})})]})}},5041:function(e,t,n){e.exports=n(6849)}},function(e){e.O(0,[540,911,512,89,676,744],function(){return e(e.s=7411)}),_N_E=e.O()}]);
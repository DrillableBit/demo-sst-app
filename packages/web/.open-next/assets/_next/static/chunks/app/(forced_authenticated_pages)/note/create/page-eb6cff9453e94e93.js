(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{2026:function(t,e,n){Promise.resolve().then(n.bind(n,9851))},9851:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return i}});var o=n(4618),r=n(7024),s=n(5041);n(6039);var a=n(4835),c=n(4540),u=n(9306);function i(){var t;let e=r.useRef(null),[n,i]=r.useState(""),[l,d]=r.useState(!1);(0,s.useRouter)();let h=(0,c.useSession)();async function f(){let t=await s3Upload();console.log(t)}async function p(t){if(t.preventDefault(),e.current&&e.current.size>5e6){alert("Please pick a file smaller than ".concat(5," MB."));return}console.log("submitting"),d(!0);try{let t=e.current?await (0,a.c)({file:e}):null,o=t.data.id;console.log(t),await g(n,o),d(!1)}catch(t){console.log(t),d(!1)}}async function g(t,e){return console.log("Sending request post in newNote"),(0,u.F9)({path:"notes",data:JSON.stringify({content:t,attachment:e})})}return null===(t=h.data?.user)||void 0===t||t.token,(0,o.jsxs)("div",{className:"NewNote",children:[(0,o.jsxs)("form",{onSubmit:p,children:[(0,o.jsx)("div",{children:(0,o.jsx)("textarea",{value:n,onChange:t=>i(t.target.value)})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{children:"Attachment"}),(0,o.jsx)("input",{onChange:function(t){e.current=t.target.files[0]},type:"file"})]}),(0,o.jsx)("button",{type:"submit",disabled:!(n.length>0),children:l?"Loading...":"Create"})]}),(0,o.jsx)("button",{onClick:()=>{f()},children:"Something Debug"})]})}},6039:function(t,e,n){"use strict";n(3132)},4835:function(t,e,n){"use strict";n.d(e,{c:function(){return c}});var o=n(3132),r=n.n(o);n(6039);var s=n(9306);let a=async()=>{let t=await (0,s.ag)({path:"presigned"});if(console.log("response",t),200!==t.status)throw Error("Failed to get pre-signed URL");let e=await t.data.url;return{url:e,key:t.data.key,user:t.data.user,id:t.data.id}};async function c(t){let{file:e}=t;console.log(e);let n=await a();return console.log(n),r().put("".concat(n.url),e.current,{headers:{"Content-Type":e.current.type,"Content-Disposition":'attachment; filename="'.concat(e.current.name,'"')}}).then(t=>{if(console.log("response",t),200===t.status)return{data:{response:"success",key:n.key,user:n.user,id:n.id},status:200,statusText:"OK",headers:{},config:{}};throw Error("An error occurred: ".concat(t.statusText))})}},5168:function(t,e,n){"use strict";function o(){if(void 0===window.location)return null;let t=new URL("http://localhost:3000"),e=t.protocol+"//",n=t.hostname,o=t.port?":".concat(t.port):"",r=window.location.protocol+"//",s=window.location.hostname,a=window.location.port?":".concat(window.location.port):"",c="localhost"===s?e:r,u="localhost"===s?n:s,i=""===a&&"localhost"!==s?"":a||o;return"".concat(c).concat(u).concat(i)}n.d(e,{$:function(){return o}})},1756:function(t,e){"use strict";e.Z=t=>{throw console.error("An error occurred:",t),Error("An error occurred.")}},9306:function(t,e,n){"use strict";n.d(e,{F9:function(){return u},O8:function(){return i},ag:function(){return c}});var o=n(3132),r=n.n(o),s=n(1756),a=n(5168);async function c(t){let{path:e}=t,n=(0,a.$)();return r().get("".concat(n,"/api/tunnel/").concat(e),{}).then(t=>{if(200===t.status)return console.log("get returned response",t),{data:t.data.response,status:t.status};throw(0,s.Z)({message:t.statusText}),Error(t.statusText)}).catch(t=>{throw(0,s.Z)({error:t}),t})}async function u(t){let{path:e,data:n,additionalHeaders:o={}}=t,c=(0,a.$)();return r().post("".concat(c,"/api/tunnel/").concat(e),n,{}).then(t=>{if(200===t.status)return console.log("post returned response",t),{data:t.data.response,status:t.status};throw(0,s.Z)({message:t.statusText}),Error(t.statusText)}).catch(t=>{throw(0,s.Z)({error:t}),t})}async function i(t){let{path:e}=t,n=(0,a.$)();return r().delete("".concat(n,"/api/tunnel/").concat(e)).then(t=>{if(200===t.status)return{data:t.data.response,status:t.status};throw(0,s.Z)({message:t.statusText}),Error(t.statusText)}).catch(t=>{throw(0,s.Z)({error:t}),t})}},5041:function(t,e,n){t.exports=n(6849)}},function(t){t.O(0,[540,132,89,676,744],function(){return t(t.s=2026)}),_N_E=t.O()}]);
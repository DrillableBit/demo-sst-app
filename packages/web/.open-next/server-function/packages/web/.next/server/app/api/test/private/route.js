"use strict";
(() => {
var exports = {};
exports.id = 3635;
exports.ids = [3635];
exports.modules = {

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 71004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/test/private/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(15293);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(945);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(6250);
// EXTERNAL MODULE: ../../node_modules/next/headers.js
var headers = __webpack_require__(95219);
// EXTERNAL MODULE: ../../node_modules/next-auth/jwt/index.js
var jwt = __webpack_require__(80789);
;// CONCATENATED MODULE: ./src/app/api/test/private/route.ts



// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// for making a cookie cart
async function getPostById(authorizationHeader) {
    console.log("authorizationHeader", authorizationHeader);
    try {
        const response = await fetch(`${"https://of1qdqu8ok.execute-api.eu-central-1.amazonaws.com"}/private`, {
            headers: {
                Authorization: `Bearer ${authorizationHeader}`
            }
        });
        const data = await response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
const GET = async (req)=>{
    const token = await (0,jwt.getToken)({
        req
    });
    console.log("token", token);
    // would rather not use http and instead use:
    const headersInstance = (0,headers.headers)();
    const authorizationHeader = headersInstance.get("authorization");
    // const authorizationHeader =
    //   req.headers instanceof Headers
    //     ? req.headers.get("authorization")
    //     : req.headers.authorization;
    // let authorizationHeader: string | null = null;
    // if ("headers" in req) {
    //   if (req.headers instanceof Headers) {
    //     authorizationHeader = req.headers.get("authorization");
    //   } else if (typeof req.headers === "object" && req.headers !== null) {
    //     authorizationHeader =
    //       (req.headers as IncomingHttpHeaders).authorization || null;
    //   }
    // }
    if (!authorizationHeader) {
        return next_response/* default */.Z.json({
            message: "No Bearer token"
        }, {
            status: 401
        });
    }
    try {
        const data = await getPostById(token?.token);
        if (!data) {
            return next_response/* default */.Z.json({
                message: "No response"
            }, {
                status: 400
            });
        }
        return next_response/* default */.Z.json(data, {
            status: 200
        });
    } catch (error) {
        console.error(error);
        return next_response/* default */.Z.json({
            message: "An error occured while fetching the post"
        }, {
            status: 500
        });
    }
};

;// CONCATENATED MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Ftest%2Fprivate%2Froute&name=app%2Fapi%2Ftest%2Fprivate%2Froute&pagePath=private-next-app-dir%2Fapi%2Ftest%2Fprivate%2Froute.ts&appDir=C%3A%5CUsers%5Caapli%5CDesktop%5CProgramming%5Csst-dynamo-api-auth-2%5Cnotes%5Cpackages%5Cweb%5Csrc%5Capp&appPaths=%2Fapi%2Ftest%2Fprivate%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/test/private/route","pathname":"/api/test/private","filename":"route","bundlePath":"app/api/test/private/route"},"resolvedPagePath":"C:\\Users\\aapli\\Desktop\\Programming\\sst-dynamo-api-auth-2\\notes\\packages\\web\\src\\app\\api\\test\\private\\route.ts","nextConfigOutput":"standalone"}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/test/private/route"

    

/***/ }),

/***/ 6250:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
}));
const _response = __webpack_require__(23452); //# sourceMappingURL=next-response.js.map


/***/ }),

/***/ 95219:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(67996);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1276,4036,3452,789], () => (__webpack_exec__(71004)));
module.exports = __webpack_exports__;

})();
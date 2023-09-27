"use strict";
(() => {
var exports = {};
exports.id = 8070;
exports.ids = [8070];
exports.modules = {

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

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

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 90801:
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

// NAMESPACE OBJECT: ./src/app/api/tunnel/[...proxy]/route.tsx
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (handler),
  GET: () => (handler),
  POST: () => (handler),
  PUT: () => (handler)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(15293);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(945);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ../../node_modules/next-auth/jwt/index.js
var jwt = __webpack_require__(80789);
;// CONCATENATED MODULE: ./src/_lib/apiRouteTools.tsx

const backendUrl = "https://gq8d9ob9dc.execute-api.eu-central-1.amazonaws.com";
async function getBearer(req) {
    const token = await (0,jwt.getToken)({
        req
    });
    if (!token) {
        return "";
    }
    return token.token;
}
async function parseUrl(url) {
    const segments = url.split("/api/tunnel/");
    const beforeApiTunnel = segments[0];
    const apiTunnel = "/api/tunnel/";
    const afterApiTunnel = segments[1];
    console.log("oldurl", url);
    if (!url || !beforeApiTunnel || !backendUrl || !apiTunnel || !afterApiTunnel) {
        return {
            error: "missing url",
            status: 400
        };
    }
    const newUrl = `${backendUrl}/${afterApiTunnel}`;
    console.log("newUrl", newUrl);
    return {
        url: newUrl,
        status: 200
    };
}

// EXTERNAL MODULE: ../../node_modules/axios/index.js
var axios = __webpack_require__(66064);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(6250);
;// CONCATENATED MODULE: ./src/app/api/tunnel/[...proxy]/route.tsx



async function handler(req, res) {
    try {
        const newUrl = await parseUrl(req.nextUrl.href);
        const accesstoken = await getBearer(req);
        if (newUrl.error === "missing url" || accesstoken === "") {
            return next_response/* default */.Z.json({
                response: "server error"
            }, {
                status: 400
            });
        }
        if (req.method === "GET") {
            // console.log("accestoken", accesstoken)
            const response = await axios_default().get(`${newUrl.url}`, {
                headers: {
                    Authorization: `Bearer ${accesstoken}`
                }
            });
            if (response.status === 200) {
                // console.log("Response inside Get", response);
                return next_response/* default */.Z.json({
                    response: response.data
                }, {
                    status: 200
                });
            } else {
                // console.log("Response inside Get err", response)
                return next_response/* default */.Z.json({
                    response: "server error"
                }, {
                    status: response.status
                });
            }
        }
        if (req.method === "POST") {
            const body = await req.json();
            console.log("body: ", body);
            const response = await axios_default().post(`${newUrl.url}`, body, {
                headers: {
                    Authorization: `Bearer ${accesstoken}`
                }
            });
            if (response.status === 200) {
                // console.log("Response inside Post", response);
                return next_response/* default */.Z.json({
                    response: response.data
                }, {
                    status: 200
                });
            } else {
                return next_response/* default */.Z.json({
                    response: "server error"
                }, {
                    status: response.status
                });
            }
        }
        if (req.method === "PUT") {
            const response = await axios_default().put(`${newUrl.url}`, {
                headers: {
                    Authorization: `Bearer ${accesstoken}`
                }
            });
            if (response.status === 200) {
                // console.log("Response inside put", response);
                return next_response/* default */.Z.json({
                    response: response.data
                }, {
                    status: 200
                });
            } else {
                return next_response/* default */.Z.json({
                    response: "server error"
                }, {
                    status: response.status
                });
            }
        }
        if (req.method === "DELETE") {
            const response = await axios_default()["delete"](`${newUrl.url}`, {
                headers: {
                    Authorization: `Bearer ${accesstoken}`
                }
            });
            if (response.status === 200) {
                // console.log("Response inside delete", response);
                return next_response/* default */.Z.json({
                    response: response.data
                }, {
                    status: 200
                });
            } else {
                return next_response/* default */.Z.json({
                    response: "server error"
                }, {
                    status: response.status
                });
            }
        }
    } catch (error) {
        console.log("error", error);
        return next_response/* default */.Z.json("Tunnel error");
    }
}


;// CONCATENATED MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Ftunnel%2F%5B...proxy%5D%2Froute&name=app%2Fapi%2Ftunnel%2F%5B...proxy%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Ftunnel%2F%5B...proxy%5D%2Froute.tsx&appDir=C%3A%5CUsers%5Caapli%5CDesktop%5CProgramming%5Csst-dynamo-api-auth-2%5Cnotes%5Cpackages%5Cweb%5Csrc%5Capp&appPaths=%2Fapi%2Ftunnel%2F%5B...proxy%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/tunnel/[...proxy]/route","pathname":"/api/tunnel/[...proxy]","filename":"route","bundlePath":"app/api/tunnel/[...proxy]/route"},"resolvedPagePath":"C:\\Users\\aapli\\Desktop\\Programming\\sst-dynamo-api-auth-2\\notes\\packages\\web\\src\\app\\api\\tunnel\\[...proxy]\\route.tsx","nextConfigOutput":"standalone"}
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

    const originalPathname = "/api/tunnel/[...proxy]/route"

    

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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1276,4036,3452,789,6064], () => (__webpack_exec__(90801)));
module.exports = __webpack_exports__;

})();
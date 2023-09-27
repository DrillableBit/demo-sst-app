"use strict";
(() => {
var exports = {};
exports.id = 2329;
exports.ids = [2329];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 32625:
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

// NAMESPACE OBJECT: ./src/app/api/test/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(15293);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(945);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(6250);
;// CONCATENATED MODULE: ./src/app/api/test/route.ts

// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// for making a cookie cart
async function getPostById(id) {
    try {
        const identifier = id;
        const post = await fetch(`https://nee1j08gc3.execute-api.eu-central-1.amazonaws.com/notes`);
        console.log(post);
        return {
            post
        };
    } catch (error) {
        console.log(error);
        return null;
    }
}
function createNote(note) {
    return fetch("https://nee1j08gc3.execute-api.eu-central-1.amazonaws.com/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            note
        })
    });
}
const GET = async (req, { params })=>{
    const id = params.id;
    console.log("got get");
    try {
        const post = await getPostById(id);
        console.log(post);
        if (!post) {
            return next_response/* default */.Z.json({
                message: "Please enter title"
            }, {
                status: 400
            });
        }
        return next_response/* default */.Z.json({
            post
        }, {
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
const POST = async (req, { params })=>{
    const body = await req.json();
    const post = body;
    // const session = await getSession({ req })
    try {
        const response = await createNote(post);
        console.log(response);
        if (!post) {
            return next_response/* default */.Z.json({
                message: "Please enter title"
            }, {
                status: 400
            });
        }
        return next_response/* default */.Z.json({
            response
        }, {
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

;// CONCATENATED MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Ftest%2Froute&name=app%2Fapi%2Ftest%2Froute&pagePath=private-next-app-dir%2Fapi%2Ftest%2Froute.ts&appDir=C%3A%5CUsers%5Caapli%5CDesktop%5CProgramming%5Csst-dynamo-api-auth-2%5Cnotes%5Cpackages%5Cweb%5Csrc%5Capp&appPaths=%2Fapi%2Ftest%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/test/route","pathname":"/api/test","filename":"route","bundlePath":"app/api/test/route"},"resolvedPagePath":"C:\\Users\\aapli\\Desktop\\Programming\\sst-dynamo-api-auth-2\\notes\\packages\\web\\src\\app\\api\\test\\route.ts","nextConfigOutput":"standalone"}
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

    const originalPathname = "/api/test/route"

    

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1276,4036,3452], () => (__webpack_exec__(32625)));
module.exports = __webpack_exports__;

})();
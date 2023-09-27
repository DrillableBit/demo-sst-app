"use strict";
(() => {
var exports = {};
exports.id = 4589;
exports.ids = [4589];
exports.modules = {

/***/ 36254:
/***/ ((module) => {

module.exports = require("aws-crt");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 32081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 85158:
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 77282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 36223:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerHooks: () => (/* binding */ headerHooks),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   serverHooks: () => (/* binding */ serverHooks),
/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15293);
/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(945);
/* harmony import */ var next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_aapli_Desktop_Programming_sst_dynamo_api_auth_2_notes_packages_web_src_app_api_test_public2_route_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5172);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([C_Users_aapli_Desktop_Programming_sst_dynamo_api_auth_2_notes_packages_web_src_app_api_test_public2_route_ts__WEBPACK_IMPORTED_MODULE_2__]);
C_Users_aapli_Desktop_Programming_sst_dynamo_api_auth_2_notes_packages_web_src_app_api_test_public2_route_ts__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/test/public2/route","pathname":"/api/test/public2","filename":"route","bundlePath":"app/api/test/public2/route"},"resolvedPagePath":"C:\\Users\\aapli\\Desktop\\Programming\\sst-dynamo-api-auth-2\\notes\\packages\\web\\src\\app\\api\\test\\public2\\route.ts","nextConfigOutput":"standalone"}
    const routeModule = new (next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1___default())({
      ...options,
      userland: C_Users_aapli_Desktop_Programming_sst_dynamo_api_auth_2_notes_packages_web_src_app_api_test_public2_route_ts__WEBPACK_IMPORTED_MODULE_2__,
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

    const originalPathname = "/api/test/public2/route"

    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5172:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET: () => (/* binding */ GET)
/* harmony export */ });
/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6250);
/* harmony import */ var sst_node_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4012);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sst_node_config__WEBPACK_IMPORTED_MODULE_1__]);
sst_node_config__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// for making a cookie cart
async function getPostById() {
    try {
        console.log("Stripe", sst_node_config__WEBPACK_IMPORTED_MODULE_1__/* .Config */ .D.STRIPE_KEY);
        const data = "Hello Stranger...";
        console.log("userid", 123, "eu-central-1_zmPNpG8HY");
        console.log("Stripe", sst_node_config__WEBPACK_IMPORTED_MODULE_1__/* .Config */ .D.STRIPE_KEY);
        console.log(data);
        return data;
    } catch (error) {
        return null;
    }
}
const GET = async (req, { params })=>{
    console.log("got get");
    try {
        const data = await getPostById();
        if (!data) {
            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.json({
                message: "No response"
            }, {
                status: 400
            });
        }
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.json(data, {
            status: 200
        });
    } catch (error) {
        console.error(error);
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.json({
            message: "An error occured while fetching the post"
        }, {
            status: 500
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1276,4036,3452,5131,6000], () => (__webpack_exec__(36223)));
module.exports = __webpack_exports__;

})();
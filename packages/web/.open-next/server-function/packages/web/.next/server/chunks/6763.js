"use strict";
exports.id = 6763;
exports.ids = [6763];
exports.modules = {

/***/ 63196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ getSiteUrl)
/* harmony export */ });
/* __next_internal_client_entry_do_not_use__ getSiteUrl auto */ function getSiteUrl() {
    if (true) return null;
    if (typeof window.location === "undefined") return null;
    // Parsing the NEXTAUTH_URL_INTERNAL
    const parsedUrl = new URL("http://localhost:3000");
    // Extracting protocol, hostname, and port from the URL
    const defaultProtocol = parsedUrl.protocol + "//";
    const defaultHostname = parsedUrl.hostname;
    const defaultPort = parsedUrl.port ? `:${parsedUrl.port}` : "";
    // Extract values from the window.location
    const protocol = window.location.protocol + "//";
    const hostname = window.location.hostname;
    const port = window.location.port ? `:${window.location.port}` : "";
    // Use defaults if values from window.location are empty or localhost
    const finalProtocol = hostname === "localhost" ? defaultProtocol : protocol;
    const finalHostname = hostname === "localhost" ? defaultHostname : hostname;
    const finalPort = port === "" && hostname !== "localhost" ? "" : port || defaultPort;
    return `${finalProtocol}${finalHostname}${finalPort}`;
}


/***/ }),

/***/ 76491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const handleError = (error)=>{
    console.error("An error occurred:", error);
    throw new Error(`An error occurred.`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleError);


/***/ }),

/***/ 6763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F9: () => (/* binding */ secure_request_post),
/* harmony export */   O8: () => (/* binding */ secure_request_delete),
/* harmony export */   ag: () => (/* binding */ secure_request_get)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42289);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handleError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76491);
/* harmony import */ var _getSiteUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63196);



async function secure_request_get({ path }) {
    const url = (0,_getSiteUrl__WEBPACK_IMPORTED_MODULE_1__/* .getSiteUrl */ .$)(); // replace this with a definitive url in production
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${url}/api/tunnel/${path}`, {}).then((response)=>{
        if (response.status === 200) {
            console.log("get returned response", response);
            return {
                data: response.data.response,
                status: response.status
            };
        } else {
            (0,_handleError__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
                message: response.statusText
            });
            throw new Error(response.statusText); // Throw an error
        }
    }).catch((error)=>{
        (0,_handleError__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
            error: error
        });
        throw error; // Re-throw the error to propagate it
    });
}
async function secure_request_post({ path, data, additionalHeaders = {} }) {
    const url = (0,_getSiteUrl__WEBPACK_IMPORTED_MODULE_1__/* .getSiteUrl */ .$)();
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${url}/api/tunnel/${path}`, data, {
    }).then((response)=>{
        if (response.status === 200) {
            console.log("post returned response", response);
            return {
                data: response.data.response,
                status: response.status
            };
        } else {
            (0,_handleError__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
                message: response.statusText
            });
            throw new Error(response.statusText); // Throw an error
        }
    }).catch((error)=>{
        (0,_handleError__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
            error: error
        });
        throw error; // Re-throw the error to propagate it
    });
// });
}
async function secure_request_delete({ path }) {
    const url = (0,_getSiteUrl__WEBPACK_IMPORTED_MODULE_1__/* .getSiteUrl */ .$)();
    return axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](`${url}/api/tunnel/${path}`).then((response)=>{
        if (response.status === 200) {
            return {
                data: response.data.response,
                status: response.status
            };
        } else {
            (0,_handleError__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
                message: response.statusText
            });
            throw new Error(response.statusText); // Throw an error
        }
    }).catch((error)=>{
        (0,_handleError__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
            error: error
        });
        throw error; // Re-throw the error to propagate it
    });
}


/***/ })

};
;
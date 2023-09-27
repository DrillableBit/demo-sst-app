"use strict";
exports.id = 5597;
exports.ids = [5597];
exports.modules = {

/***/ 36702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports request_post, request_get, request_delete */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42289);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


async function request_post({ url, data }) {
    return axios.post(`${url}`, data, {}).then((response)=>{
        if (response.status === 200) {
            return response;
        } else {
            handleError({
                message: response.statusText
            });
            throw new Error(response.statusText); // Throw an error
        }
    }).catch((error)=>{
        handleError({
            error: error
        });
        throw error; // Re-throw the error to propagate it
    });
// });
}
async function request_get({ url }) {
    return axios.get(`${url}`, {}).then((response)=>{
        if (response.status === 200) {
            return response;
        } else {
            handleError({
                message: response.statusText
            });
            throw new Error(response.statusText); // Throw an error
        }
    }).catch((error)=>{
        handleError({
            error: error
        });
        throw error; // Re-throw the error to propagate it
    });
}
async function request_delete({ url }) {
    return axios.delete(`${url}`, {}).then((response)=>{
        if (response.status === 200) {
            return response;
        } else {
            handleError({
                message: response.statusText
            });
            throw new Error(response.statusText); // Throw an error
        }
    }).catch((error)=>{
        handleError({
            error: error
        });
        throw error; // Re-throw the error to propagate it
    });
// });
}


/***/ }),

/***/ 55597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ postFile)
});

// EXTERNAL MODULE: ../../node_modules/axios/index.js
var axios = __webpack_require__(42289);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./src/_lib/fetchTools.ts
var fetchTools = __webpack_require__(36702);
// EXTERNAL MODULE: ./src/_lib/secureFetchTools.ts
var secureFetchTools = __webpack_require__(6763);
;// CONCATENATED MODULE: ./src/_lib/presignedUrl.ts


//This is currently not used
const getPresignedUrl = async ()=>{
    // Fetch the pre-signed URL from SST API
    const response = await request_get({
        url: `${"https://gq8d9ob9dc.execute-api.eu-central-1.amazonaws.com"}/presigned`
    });
    if (response.status !== 200) {
        throw new Error("Failed to get pre-signed URL");
    }
    const url = await response.data.url;
    return {
        url: url,
        key: response.data.key,
        user: response.data.user,
        id: response.data.id
    };
};
const getSecurePresignedUrl = async ()=>{
    const response = await (0,secureFetchTools/* secure_request_get */.ag)({
        path: `presigned`
    });
    console.log("response", response);
    if (response.status !== 200) {
        throw new Error("Failed to get pre-signed URL");
    }
    const url = await response.data.url;
    return {
        url: url,
        key: response.data.key,
        user: response.data.user,
        id: response.data.id
    };
};

;// CONCATENATED MODULE: ./src/_lib/fileTools.ts


async function postFile({ file }) {
    // return getJWTToken().then(async (token) => {
    console.log(file);
    const presignedUrl = await getSecurePresignedUrl();
    console.log(presignedUrl);
    return axios_default().put(`${presignedUrl.url}`, file.current, {
        headers: {
            //bugs when sending auth token... look into this...
            // Authorization: `Bearer ${secret}`,
            "Content-Type": file.current.type,
            "Content-Disposition": `attachment; filename="${file.current.name}"`
        }
    }).then((response)=>{
        console.log("response", response);
        if (response.status === 200) {
            return {
                data: {
                    response: "success",
                    key: presignedUrl.key,
                    user: presignedUrl.user,
                    id: presignedUrl.id
                },
                status: 200,
                statusText: "OK",
                headers: {},
                config: {}
            };
        } else {
            throw new Error(`An error occurred: ${response.statusText}`);
        }
    });
// });
}


/***/ })

};
;
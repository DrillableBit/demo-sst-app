"use strict";
exports.id = 9551;
exports.ids = [9551];
exports.modules = {

/***/ 89551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   So: () => (/* binding */ authenticateUser),
/* harmony export */   X_: () => (/* binding */ userPool),
/* harmony export */   Zb: () => (/* binding */ confirmPassword),
/* harmony export */   wv: () => (/* binding */ initiateForgotPassword)
/* harmony export */ });
/* unused harmony exports dynamic, getJWTToken, isUserLoggedIn, logUserOut, getCurrentUser */
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2232);
const dynamic = "force-dynamic";

const poolData = {
    UserPoolId: "eu-central-1_zmPNpG8HY",
    ClientId: "5s5tkn3i8dkgg8r0j16p2fgivv"
};
const userPool = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_0__/* .CognitoUserPool */ .AM(poolData);
function authenticateUser(email, password, callbacks) {
    const authenticationDetails = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_0__/* .AuthenticationDetails */ .sD({
        Username: email,
        Password: password
    });
    const cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_0__/* .CognitoUser */ .ws({
        Username: email,
        Pool: userPool
    });
    cognitoUser.authenticateUser(authenticationDetails, callbacks);
}
function initiateForgotPassword(email, callbacks) {
    const cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_0__/* .CognitoUser */ .ws({
        Username: email,
        Pool: userPool
    });
    cognitoUser.forgotPassword({
        onSuccess: function() {
            console.log("internal succes");
            if (callbacks && callbacks.onSuccess) {
                callbacks.onSuccess();
            }
        },
        onFailure: function(err) {
            console.log("internal failure");
            if (callbacks && callbacks.onFailure) {
                callbacks.onFailure(err);
            }
        },
        inputVerificationCode: function(data) {
            console.log("internal inputVerificationCode");
            if (callbacks && callbacks.inputVerificationCode) {
                callbacks.inputVerificationCode(data);
            }
        }
    });
}
function confirmPassword(email, verificationCode, newPassword, callbacks) {
    const cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_0__/* .CognitoUser */ .ws({
        Username: email,
        Pool: userPool
    });
    cognitoUser.confirmPassword(verificationCode, newPassword, {
        onSuccess () {
            if (callbacks && callbacks.onSuccess) {
                callbacks.onSuccess();
            }
        },
        onFailure (err) {
            if (callbacks && callbacks.onFailure) {
                callbacks.onFailure(err);
            }
        }
    });
}
function getJWTToken() {
    return new Promise((resolve, reject)=>{
        const currentUser = userPool.getCurrentUser();
        if (!currentUser) {
            reject("No current user");
            return;
        }
        currentUser.getSession((err, session)=>{
            if (err) {
                reject(err);
                return;
            }
            resolve(session.getIdToken().getJwtToken());
        });
    });
}
function getCurrentUser() {
    return userPool.getCurrentUser();
}
function isUserLoggedIn() {
    return Boolean(getCurrentUser());
}
function logUserOut() {
    const currentUser = getCurrentUser();
    if (currentUser) {
        currentUser.signOut();
    }
}



/***/ })

};
;
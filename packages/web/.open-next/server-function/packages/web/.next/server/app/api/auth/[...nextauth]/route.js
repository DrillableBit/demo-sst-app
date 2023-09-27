"use strict";
(() => {
var exports = {};
exports.id = 4912;
exports.ids = [4912];
exports.modules = {

/***/ 36254:
/***/ ((module) => {

module.exports = require("aws-crt");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

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

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

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

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

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

/***/ 54733:
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

// NAMESPACE OBJECT: ./src/app/api/auth/[...nextauth]/route.tsx
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (handler),
  POST: () => (handler)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(15293);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(945);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ../../node_modules/next-auth/index.js
var next_auth = __webpack_require__(83741);
var next_auth_default = /*#__PURE__*/__webpack_require__.n(next_auth);
// EXTERNAL MODULE: ../../node_modules/next-auth/providers/cognito.js
var cognito = __webpack_require__(63028);
// EXTERNAL MODULE: ../../node_modules/next-auth/providers/credentials.js
var credentials = __webpack_require__(25892);
// EXTERNAL MODULE: ../../node_modules/jsonwebtoken/index.js
var jsonwebtoken = __webpack_require__(78010);
var jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken);
// EXTERNAL MODULE: ../../node_modules/@aws-sdk/client-cognito-identity-provider/dist-cjs/index.js
var dist_cjs = __webpack_require__(48894);
// EXTERNAL MODULE: ../../node_modules/axios/index.js
var axios = __webpack_require__(66064);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/_lib/auth.tsx





const clientId = "5s5tkn3i8dkgg8r0j16p2fgivv";
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
const PoolId = "eu-central-1_zmPNpG8HY";
const region = "eu-central-1";
const IdentityPoolId = (/* unused pure expression or super */ null && ("eu-central-1:9942c7fa-62d1-4e64-ae69-9d4bef558deb"));
const issuer = `https://cognito-idp.${region}.amazonaws.com/${PoolId}`;
const authOptions = {
    secret: "50JPr1fhktUdTYZGgAzPNSHULpNY57StRbQMduW+HUE=",
    providers: [
        (0,cognito/* default */.Z)({
            clientId: clientId,
            clientSecret: clientSecret,
            issuer: issuer
        }),
        (0,credentials/* default */.Z)({
            name: "credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "jsmith"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials, req) {
                if (!credentials) throw new Error("No username or password provided");
                if (!credentials.username) throw new Error("No username provided");
                if (!credentials.password) throw new Error("No password provided");
                const client = new dist_cjs.CognitoIdentityProviderClient({
                    region: region
                });
                const command = new dist_cjs.InitiateAuthCommand({
                    AuthFlow: "USER_PASSWORD_AUTH",
                    ClientId: clientId,
                    AuthParameters: {
                        USERNAME: credentials.username,
                        PASSWORD: credentials.password
                    }
                });
                try {
                    const response = await client.send(command);
                    if (response.AuthenticationResult && response.AuthenticationResult.AccessToken && response.AuthenticationResult.RefreshToken) {
                        const user = {
                            refreshToken: response.AuthenticationResult.RefreshToken,
                            token: response.AuthenticationResult.AccessToken
                        };
                        const user_checked = await axios_default().post(`${"https://gq8d9ob9dc.execute-api.eu-central-1.amazonaws.com"}/create-user`, {
                            email: credentials.username
                        }, {
                            headers: {
                                Authorization: `Bearer ${user.token}`
                            }
                        });
                        const parsedBody = JSON.parse(user_checked.data.body);
                        user.newUser = parsedBody.newUser;
                        return user;
                    } else {
                        throw new Error("Authentication failed");
                    }
                } catch (error) {
                    throw new Error("Incorrect username or password");
                }
            }
        })
    ],
    callbacks: {
        async jwt ({ token, user, account, profile, session }) {
            if (!token.token) return {
                ...token,
                ...user
            };
            const accessToken = jsonwebtoken_default().decode(token.token);
            const expiresAt = accessToken.exp * 1000;
            console.log("Time remaining:", expiresAt - Date.now());
            console.log("Time expires at:", expiresAt);
            if (expiresAt > Date.now()) return {
                ...token,
                ...user
            };
            console.log("Token expired. Refreshing access token...");
            if (typeof token.refreshToken !== "string") {
                console.error("Error refreshing token. No refresh token available.");
                // Add signout() logic here
                return {
                    ...token,
                    ...user
                };
            }
            const client = new dist_cjs.CognitoIdentityProviderClient({
                region
            });
            const command = new dist_cjs.InitiateAuthCommand({
                AuthFlow: "REFRESH_TOKEN_AUTH",
                ClientId: clientId,
                AuthParameters: {
                    REFRESH_TOKEN: token.refreshToken
                }
            });
            try {
                const response = await client.send(command);
                if (response.AuthenticationResult && response.AuthenticationResult.AccessToken) {
                    token.token = response.AuthenticationResult.AccessToken;
                    token.refreshToken = response.AuthenticationResult.RefreshToken;
                    console.log("Access token refresh success");
                }
            } catch (error) {
                console.error("Error refreshing token:", error);
            }
            return {
                ...token,
                ...user
            };
        },
        async session ({ session, token, user }) {
            return session;
        }
    },
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error"
    },
    session: {
        strategy: "jwt"
    }
}; // if (token.token) {
 //   const accessToken = jwt.decode(token.token as string) as JWT_AWS;
 //   const expiresAt = (accessToken.exp as number) * 1000;
 //   console.log("Time remaining,", expiresAt - Date.now());
 //   console.log("Time expires at,", expiresAt);
 //   if (expiresAt <= Date.now()) {
 //     console.log("Token expired. Refreshing access token...");
 //     const client = new CognitoIdentityProviderClient({ region: region });
 //     if (typeof token.refreshToken === "string") {
 //       const command = new InitiateAuthCommand({
 //         AuthFlow: "REFRESH_TOKEN_AUTH",
 //         ClientId: clientId,
 //         AuthParameters: {
 //           REFRESH_TOKEN: token.refreshToken,
 //         },
 //       });
 //       try {
 //         const response = await client.send(command);
 //         if (
 //           response.AuthenticationResult &&
 //           response.AuthenticationResult.AccessToken
 //         ) {
 //           token.token = response.AuthenticationResult.AccessToken;
 //           token.refreshToken = response.AuthenticationResult.RefreshToken;
 //         }
 //       } catch (error) {
 //         console.error("Error refreshing token:", error);
 //       }
 //     }
 //     else {
 //       console.error("Error refreshing token. No refresh token available.");
 //     }
 //   }
 // }

;// CONCATENATED MODULE: ./src/app/api/auth/[...nextauth]/route.tsx


const handler = next_auth_default()(authOptions);


;// CONCATENATED MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.tsx&appDir=C%3A%5CUsers%5Caapli%5CDesktop%5CProgramming%5Csst-dynamo-api-auth-2%5Cnotes%5Cpackages%5Cweb%5Csrc%5Capp&appPaths=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/auth/[...nextauth]/route","pathname":"/api/auth/[...nextauth]","filename":"route","bundlePath":"app/api/auth/[...nextauth]/route"},"resolvedPagePath":"C:\\Users\\aapli\\Desktop\\Programming\\sst-dynamo-api-auth-2\\notes\\packages\\web\\src\\app\\api\\auth\\[...nextauth]\\route.tsx","nextConfigOutput":"standalone"}
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

    const originalPathname = "/api/auth/[...nextauth]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1276,4036,789,5131,6064,5891], () => (__webpack_exec__(54733)));
module.exports = __webpack_exports__;

})();
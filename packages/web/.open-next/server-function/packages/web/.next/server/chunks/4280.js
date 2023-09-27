exports.id = 4280;
exports.ids = [4280];
exports.modules = {

/***/ 73077:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2935))

/***/ }),

/***/ 82676:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 28859))

/***/ }),

/***/ 87988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ _nav_Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(8270);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ../../node_modules/next/image.js
var next_image = __webpack_require__(4550);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ../../node_modules/next/navigation.js
var navigation = __webpack_require__(44520);
;// CONCATENATED MODULE: ./src/_components/_nav/NavItem.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function NavItem({ href, children, onClick }) {
    const pathname = (0,navigation.usePathname)();
    const isActive = pathname === href;
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "text-l p-2  text-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            className: ` hover:text-slate-300 text-white ${isActive ? "font-bold" : ""}`,
            href: href,
            onClick: onClick,
            children: children
        })
    });
}
/* harmony default export */ const _nav_NavItem = (NavItem);

;// CONCATENATED MODULE: ./src/_components/_nav/MobileNavItem.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function MobileNavItem({ href, children, onClick }) {
    const pathname = (0,navigation.usePathname)();
    const isActive = pathname === href;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        className: ` ${isActive ? "font-bold" : ""}`,
        href: href,
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
            className: "cursor-pointer text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black",
            children: children
        })
    });
}
/* harmony default export */ const _nav_MobileNavItem = (MobileNavItem);

// EXTERNAL MODULE: ./src/_components/providers/AuthProvider.tsx
var AuthProvider = __webpack_require__(2935);
// EXTERNAL MODULE: ../../node_modules/next-auth/react/index.js
var react = __webpack_require__(82120);
;// CONCATENATED MODULE: ./src/_components/_nav/AuthNavbar.tsx
/* __next_internal_client_entry_do_not_use__ dynamic,default auto */ 
const dynamic = "force-dynamic";





function AuthNavBar() {
    const [loadingStatus, setLoadingStatus] = (0,react_.useState)(true);
    //   const { isLoggedIn, setIsLoggedIn } = useAuth();
    const session = (0,react.useSession)();
    const { authLoading, setAuthLoading } = (0,AuthProvider.useAuth)();
    // const {authStatus, setAuthStatus} = useAuth();
    const handleLogout = ()=>{
        console.log(session);
        // logUserOut();
        // setIsLoggedIn(false);
        (0,react.signOut)();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container flex items-center justify-center p-1",
        children: session.status === "authenticated" ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
            onClick: handleLogout,
            className: "bg-red-500 rounded py-1 px-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
            children: "Log Out"
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: session.status === "loading" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-slate-400 rounded py-4 px-8",
                children: " "
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/signup",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "bg-green-500 m-2 rounded py-1 px-2",
                            children: "Sign Up"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/auth/signin",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "bg-green-500 m-2 rounded py-1 px-2",
                            children: "Log In"
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/_components/_nav/Navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const navLinks = [
    {
        title: "RouteTest",
        path: "/RouteTest"
    },
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Profile",
        path: "/profile"
    },
    {
        title: "Uploads",
        path: "/uploads"
    },
    {
        title: "Note",
        path: "/note"
    },
    {
        title: "Settings",
        path: "/settings"
    }
];
const navbarTitle = {
    title: "Next SST Starter"
};
function Navbar() {
    const [navbar, setNavbar] = (0,react_.useState)(false);
    const handleMenu = ()=>{
        if (navbar === true) {
            setNavbar(!navbar);
            document.body.style.overflow = "unset";
        } else {
            setNavbar(!navbar);
            document.body.style.overflow = "hidden";
        }
    };
    const handleWindowResize = ()=>{
        console.log("resize");
        setNavbar(false);
        document.body.style.overflow = "unset";
    };
    (0,react_.useEffect)(()=>{
        // Add event listener when the component mounts
        window.addEventListener("resize", handleWindowResize);
        // Clean up the event listener when the component unmounts
        return ()=>{
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "w-full bg-gray-500 px-5 text-white ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-between md:py-5 md:flex md:justify-around md:align-middle ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex justify-between items-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-2xl font-bold md:5pl:5 py-4 md:py-0",
                                    children: navbarTitle.title
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "md:hidden py-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "py-3 rounded-md",
                                onClick: ()=>handleMenu(),
                                children: navbar ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/cross.svg",
                                        width: 25,
                                        height: 25,
                                        alt: "close",
                                        className: "invert"
                                    })
                                }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/menu.svg",
                                    width: 25,
                                    height: 25,
                                    alt: "menu",
                                    className: "invert"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden md:block",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "flex",
                                children: [
                                    navLinks.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx(_nav_NavItem, {
                                            href: link.path,
                                            onClick: handleWindowResize,
                                            children: link.title
                                        }, index)),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(AuthNavBar, {})
                                    })
                                ]
                            })
                        })
                    ]
                }),
                navbar === true ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: ` md block ${navbar ? "block" : "hidden"}`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "md:h-auto md:flex mt-8 h-screen",
                        children: [
                            navLinks.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx(_nav_MobileNavItem, {
                                    href: link.path,
                                    onClick: handleWindowResize,
                                    children: link.title
                                }, index)),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(AuthNavBar, {})
                            })
                        ]
                    })
                }) : null
            ]
        })
    });
}
/* harmony default export */ const _nav_Navbar = (Navbar);


/***/ }),

/***/ 2935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   dynamic: () => (/* binding */ dynamic),
/* harmony export */   useAuth: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82120);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ dynamic,useAuth,default auto */ 
const dynamic = "force-dynamic";


const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const AuthProvider = ({ children })=>{
    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [authLoading, setAuthLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [authStatus, setAuthStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            isLoggedIn,
            setIsLoggedIn,
            authLoading,
            setAuthLoading,
            authStatus,
            setAuthStatus,
            status,
            setStatus
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {
            children: children
        })
    });
};
function useAuth() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);


/***/ }),

/***/ 28859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_nav_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87988);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82120);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Page() {
    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
    console.log(session);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(session);
    }, [
        session
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nav_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-4xl font-bold",
                        children: "404"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-lg mt-4",
                        children: "Page was not found."
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page); // Page.getLayout = function getLayout(page: React.ReactElement) {
 //   return (
 //     <>
 //     <Layout>
 //       {page}
 //     </Layout>
 //     </>
 //   )
 // };


/***/ }),

/***/ 27754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ../../node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(11720);
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(67565);
;// CONCATENATED MODULE: ./src/_components/providers/AuthProvider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\aapli\Desktop\Programming\sst-dynamo-api-auth-2\notes\packages\web\src\_components\providers\AuthProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["dynamic"];

const e1 = proxy["useAuth"];


/* harmony default export */ const AuthProvider = (__default__);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(89586);
;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "SST - Next.js Starter",
    description: "Serverless Next.js deployment with Auth, S3 and DynamoDB"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(AuthProvider, {
                children: children
            })
        })
    });
}
/* harmony default export */ const layout = (RootLayout);


/***/ }),

/***/ 98384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67565);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\aapli\Desktop\Programming\sst-dynamo-api-auth-2\notes\packages\web\src\app\not-found.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 33965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97056);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 89586:
/***/ (() => {



/***/ })

};
;
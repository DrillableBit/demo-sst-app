exports.id = 5131;
exports.ids = [5131];
exports.modules = {

/***/ 5588:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AwsCrc32 = void 0;
var tslib_1 = __webpack_require__(75809);
var util_1 = __webpack_require__(26640);
var index_1 = __webpack_require__(71079);
var AwsCrc32 = /** @class */ function() {
    function AwsCrc32() {
        this.crc32 = new index_1.Crc32();
    }
    AwsCrc32.prototype.update = function(toHash) {
        if ((0, util_1.isEmptyData)(toHash)) return;
        this.crc32.update((0, util_1.convertToBuffer)(toHash));
    };
    AwsCrc32.prototype.digest = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
                return [
                    2 /*return*/ ,
                    (0, util_1.numToUint8)(this.crc32.digest())
                ];
            });
        });
    };
    AwsCrc32.prototype.reset = function() {
        this.crc32 = new index_1.Crc32();
    };
    return AwsCrc32;
}();
exports.AwsCrc32 = AwsCrc32; //# sourceMappingURL=aws_crc32.js.map


/***/ }),

/***/ 71079:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;
var tslib_1 = __webpack_require__(75809);
var util_1 = __webpack_require__(26640);
function crc32(data) {
    return new Crc32().update(data).digest();
}
exports.crc32 = crc32;
var Crc32 = /** @class */ function() {
    function Crc32() {
        this.checksum = 0xffffffff;
    }
    Crc32.prototype.update = function(data) {
        var e_1, _a;
        try {
            for(var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()){
                var byte = data_1_1.value;
                this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 0xff];
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return this;
    };
    Crc32.prototype.digest = function() {
        return (this.checksum ^ 0xffffffff) >>> 0;
    };
    return Crc32;
}();
exports.Crc32 = Crc32;
// prettier-ignore
var a_lookUpTable = [
    0x00000000,
    0x77073096,
    0xEE0E612C,
    0x990951BA,
    0x076DC419,
    0x706AF48F,
    0xE963A535,
    0x9E6495A3,
    0x0EDB8832,
    0x79DCB8A4,
    0xE0D5E91E,
    0x97D2D988,
    0x09B64C2B,
    0x7EB17CBD,
    0xE7B82D07,
    0x90BF1D91,
    0x1DB71064,
    0x6AB020F2,
    0xF3B97148,
    0x84BE41DE,
    0x1ADAD47D,
    0x6DDDE4EB,
    0xF4D4B551,
    0x83D385C7,
    0x136C9856,
    0x646BA8C0,
    0xFD62F97A,
    0x8A65C9EC,
    0x14015C4F,
    0x63066CD9,
    0xFA0F3D63,
    0x8D080DF5,
    0x3B6E20C8,
    0x4C69105E,
    0xD56041E4,
    0xA2677172,
    0x3C03E4D1,
    0x4B04D447,
    0xD20D85FD,
    0xA50AB56B,
    0x35B5A8FA,
    0x42B2986C,
    0xDBBBC9D6,
    0xACBCF940,
    0x32D86CE3,
    0x45DF5C75,
    0xDCD60DCF,
    0xABD13D59,
    0x26D930AC,
    0x51DE003A,
    0xC8D75180,
    0xBFD06116,
    0x21B4F4B5,
    0x56B3C423,
    0xCFBA9599,
    0xB8BDA50F,
    0x2802B89E,
    0x5F058808,
    0xC60CD9B2,
    0xB10BE924,
    0x2F6F7C87,
    0x58684C11,
    0xC1611DAB,
    0xB6662D3D,
    0x76DC4190,
    0x01DB7106,
    0x98D220BC,
    0xEFD5102A,
    0x71B18589,
    0x06B6B51F,
    0x9FBFE4A5,
    0xE8B8D433,
    0x7807C9A2,
    0x0F00F934,
    0x9609A88E,
    0xE10E9818,
    0x7F6A0DBB,
    0x086D3D2D,
    0x91646C97,
    0xE6635C01,
    0x6B6B51F4,
    0x1C6C6162,
    0x856530D8,
    0xF262004E,
    0x6C0695ED,
    0x1B01A57B,
    0x8208F4C1,
    0xF50FC457,
    0x65B0D9C6,
    0x12B7E950,
    0x8BBEB8EA,
    0xFCB9887C,
    0x62DD1DDF,
    0x15DA2D49,
    0x8CD37CF3,
    0xFBD44C65,
    0x4DB26158,
    0x3AB551CE,
    0xA3BC0074,
    0xD4BB30E2,
    0x4ADFA541,
    0x3DD895D7,
    0xA4D1C46D,
    0xD3D6F4FB,
    0x4369E96A,
    0x346ED9FC,
    0xAD678846,
    0xDA60B8D0,
    0x44042D73,
    0x33031DE5,
    0xAA0A4C5F,
    0xDD0D7CC9,
    0x5005713C,
    0x270241AA,
    0xBE0B1010,
    0xC90C2086,
    0x5768B525,
    0x206F85B3,
    0xB966D409,
    0xCE61E49F,
    0x5EDEF90E,
    0x29D9C998,
    0xB0D09822,
    0xC7D7A8B4,
    0x59B33D17,
    0x2EB40D81,
    0xB7BD5C3B,
    0xC0BA6CAD,
    0xEDB88320,
    0x9ABFB3B6,
    0x03B6E20C,
    0x74B1D29A,
    0xEAD54739,
    0x9DD277AF,
    0x04DB2615,
    0x73DC1683,
    0xE3630B12,
    0x94643B84,
    0x0D6D6A3E,
    0x7A6A5AA8,
    0xE40ECF0B,
    0x9309FF9D,
    0x0A00AE27,
    0x7D079EB1,
    0xF00F9344,
    0x8708A3D2,
    0x1E01F268,
    0x6906C2FE,
    0xF762575D,
    0x806567CB,
    0x196C3671,
    0x6E6B06E7,
    0xFED41B76,
    0x89D32BE0,
    0x10DA7A5A,
    0x67DD4ACC,
    0xF9B9DF6F,
    0x8EBEEFF9,
    0x17B7BE43,
    0x60B08ED5,
    0xD6D6A3E8,
    0xA1D1937E,
    0x38D8C2C4,
    0x4FDFF252,
    0xD1BB67F1,
    0xA6BC5767,
    0x3FB506DD,
    0x48B2364B,
    0xD80D2BDA,
    0xAF0A1B4C,
    0x36034AF6,
    0x41047A60,
    0xDF60EFC3,
    0xA867DF55,
    0x316E8EEF,
    0x4669BE79,
    0xCB61B38C,
    0xBC66831A,
    0x256FD2A0,
    0x5268E236,
    0xCC0C7795,
    0xBB0B4703,
    0x220216B9,
    0x5505262F,
    0xC5BA3BBE,
    0xB2BD0B28,
    0x2BB45A92,
    0x5CB36A04,
    0xC2D7FFA7,
    0xB5D0CF31,
    0x2CD99E8B,
    0x5BDEAE1D,
    0x9B64C2B0,
    0xEC63F226,
    0x756AA39C,
    0x026D930A,
    0x9C0906A9,
    0xEB0E363F,
    0x72076785,
    0x05005713,
    0x95BF4A82,
    0xE2B87A14,
    0x7BB12BAE,
    0x0CB61B38,
    0x92D28E9B,
    0xE5D5BE0D,
    0x7CDCEFB7,
    0x0BDBDF21,
    0x86D3D2D4,
    0xF1D4E242,
    0x68DDB3F8,
    0x1FDA836E,
    0x81BE16CD,
    0xF6B9265B,
    0x6FB077E1,
    0x18B74777,
    0x88085AE6,
    0xFF0F6A70,
    0x66063BCA,
    0x11010B5C,
    0x8F659EFF,
    0xF862AE69,
    0x616BFFD3,
    0x166CCF45,
    0xA00AE278,
    0xD70DD2EE,
    0x4E048354,
    0x3903B3C2,
    0xA7672661,
    0xD06016F7,
    0x4969474D,
    0x3E6E77DB,
    0xAED16A4A,
    0xD9D65ADC,
    0x40DF0B66,
    0x37D83BF0,
    0xA9BCAE53,
    0xDEBB9EC5,
    0x47B2CF7F,
    0x30B5FFE9,
    0xBDBDF21C,
    0xCABAC28A,
    0x53B39330,
    0x24B4A3A6,
    0xBAD03605,
    0xCDD70693,
    0x54DE5729,
    0x23D967BF,
    0xB3667A2E,
    0xC4614AB8,
    0x5D681B02,
    0x2A6F2B94,
    0xB40BBE37,
    0xC30C8EA1,
    0x5A05DF1B,
    0x2D02EF8D
];
var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
var aws_crc32_1 = __webpack_require__(5588);
Object.defineProperty(exports, "AwsCrc32", ({
    enumerable: true,
    get: function() {
        return aws_crc32_1.AwsCrc32;
    }
})); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 75809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 69111:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.convertToBuffer = void 0;
var util_utf8_browser_1 = __webpack_require__(32532);
// Quick polyfill
var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
    return Buffer.from(input, "utf8");
} : util_utf8_browser_1.fromUtf8;
function convertToBuffer(data) {
    // Already a Uint8, do nothing
    if (data instanceof Uint8Array) return data;
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
exports.convertToBuffer = convertToBuffer; //# sourceMappingURL=convertToBuffer.js.map


/***/ }),

/***/ 26640:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
var convertToBuffer_1 = __webpack_require__(69111);
Object.defineProperty(exports, "convertToBuffer", ({
    enumerable: true,
    get: function() {
        return convertToBuffer_1.convertToBuffer;
    }
}));
var isEmptyData_1 = __webpack_require__(71611);
Object.defineProperty(exports, "isEmptyData", ({
    enumerable: true,
    get: function() {
        return isEmptyData_1.isEmptyData;
    }
}));
var numToUint8_1 = __webpack_require__(99741);
Object.defineProperty(exports, "numToUint8", ({
    enumerable: true,
    get: function() {
        return numToUint8_1.numToUint8;
    }
}));
var uint32ArrayFrom_1 = __webpack_require__(30707);
Object.defineProperty(exports, "uint32ArrayFrom", ({
    enumerable: true,
    get: function() {
        return uint32ArrayFrom_1.uint32ArrayFrom;
    }
})); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 71611:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isEmptyData = void 0;
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
exports.isEmptyData = isEmptyData; //# sourceMappingURL=isEmptyData.js.map


/***/ }),

/***/ 99741:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.numToUint8 = void 0;
function numToUint8(num) {
    return new Uint8Array([
        (num & 0xff000000) >> 24,
        (num & 0x00ff0000) >> 16,
        (num & 0x0000ff00) >> 8,
        num & 0x000000ff
    ]);
}
exports.numToUint8 = numToUint8; //# sourceMappingURL=numToUint8.js.map


/***/ }),

/***/ 30707:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.uint32ArrayFrom = void 0;
// IE 11 does not support Array.from, so we do it manually
function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while(a_index < a_lookUpTable.length){
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
        }
        return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
}
exports.uint32ArrayFrom = uint32ArrayFrom; //# sourceMappingURL=uint32ArrayFrom.js.map


/***/ }),

/***/ 32532:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toUtf8 = exports.fromUtf8 = void 0;
const pureJs_1 = __webpack_require__(40193);
const whatwgEncodingApi_1 = __webpack_require__(17761);
const fromUtf8 = (input)=>typeof TextEncoder === "function" ? (0, whatwgEncodingApi_1.fromUtf8)(input) : (0, pureJs_1.fromUtf8)(input);
exports.fromUtf8 = fromUtf8;
const toUtf8 = (input)=>typeof TextDecoder === "function" ? (0, whatwgEncodingApi_1.toUtf8)(input) : (0, pureJs_1.toUtf8)(input);
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 40193:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toUtf8 = exports.fromUtf8 = void 0;
const fromUtf8 = (input)=>{
    const bytes = [];
    for(let i = 0, len = input.length; i < len; i++){
        const value = input.charCodeAt(i);
        if (value < 0x80) {
            bytes.push(value);
        } else if (value < 0x800) {
            bytes.push(value >> 6 | 192, value & 63 | 128);
        } else if (i + 1 < input.length && (value & 0xfc00) === 0xd800 && (input.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            const surrogatePair = 0x10000 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
            bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
        } else {
            bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
        }
    }
    return Uint8Array.from(bytes);
};
exports.fromUtf8 = fromUtf8;
const toUtf8 = (input)=>{
    let decoded = "";
    for(let i = 0, len = input.length; i < len; i++){
        const byte = input[i];
        if (byte < 0x80) {
            decoded += String.fromCharCode(byte);
        } else if (192 <= byte && byte < 224) {
            const nextByte = input[++i];
            decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
        } else if (240 <= byte && byte < 365) {
            const surrogatePair = [
                byte,
                input[++i],
                input[++i],
                input[++i]
            ];
            const encoded = "%" + surrogatePair.map((byteValue)=>byteValue.toString(16)).join("%");
            decoded += decodeURIComponent(encoded);
        } else {
            decoded += String.fromCharCode((byte & 15) << 12 | (input[++i] & 63) << 6 | input[++i] & 63);
        }
    }
    return decoded;
};
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 17761:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toUtf8 = exports.fromUtf8 = void 0;
function fromUtf8(input) {
    return new TextEncoder().encode(input);
}
exports.fromUtf8 = fromUtf8;
function toUtf8(input) {
    return new TextDecoder("utf-8").decode(input);
}
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 41246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const validator = __webpack_require__(99246);
const XMLParser = __webpack_require__(5789);
const XMLBuilder = __webpack_require__(56574);
module.exports = {
    XMLParser: XMLParser,
    XMLValidator: validator,
    XMLBuilder: XMLBuilder
};


/***/ }),

/***/ 78097:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

const nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
const nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
const nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
const regexName = new RegExp("^" + nameRegexp + "$");
const getAllMatches = function(string, regex) {
    const matches = [];
    let match = regex.exec(string);
    while(match){
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for(let index = 0; index < len; index++){
            allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
    }
    return matches;
};
const isName = function(string) {
    const match = regexName.exec(string);
    return !(match === null || typeof match === "undefined");
};
exports.isExist = function(v) {
    return typeof v !== "undefined";
};
exports.isEmptyObject = function(obj) {
    return Object.keys(obj).length === 0;
};
/**
 * Copy all the properties of a into b.
 * @param {*} target
 * @param {*} a
 */ exports.merge = function(target, a, arrayMode) {
    if (a) {
        const keys = Object.keys(a); // will return an array of own properties
        const len = keys.length; //don't make it inline
        for(let i = 0; i < len; i++){
            if (arrayMode === "strict") {
                target[keys[i]] = [
                    a[keys[i]]
                ];
            } else {
                target[keys[i]] = a[keys[i]];
            }
        }
    }
};
/* exports.merge =function (b,a){
  return Object.assign(b,a);
} */ exports.getValue = function(v) {
    if (exports.isExist(v)) {
        return v;
    } else {
        return "";
    }
};
// const fakeCall = function(a) {return a;};
// const fakeCallNoReturn = function() {};
exports.isName = isName;
exports.getAllMatches = getAllMatches;
exports.nameRegexp = nameRegexp;


/***/ }),

/***/ 99246:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

const util = __webpack_require__(78097);
const defaultOptions = {
    allowBooleanAttributes: false,
    unpairedTags: []
};
//const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
exports.validate = function(xmlData, options) {
    options = Object.assign({}, defaultOptions, options);
    //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
    //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
    //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
    const tags = [];
    let tagFound = false;
    //indicates that the root tag has been closed (aka. depth 0 has been reached)
    let reachedRoot = false;
    if (xmlData[0] === "\uFEFF") {
        // check for byte order mark (BOM)
        xmlData = xmlData.substr(1);
    }
    for(let i = 0; i < xmlData.length; i++){
        if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
            i += 2;
            i = readPI(xmlData, i);
            if (i.err) return i;
        } else if (xmlData[i] === "<") {
            //starting of tag
            //read until you reach to '>' avoiding any '>' in attribute value
            let tagStartPos = i;
            i++;
            if (xmlData[i] === "!") {
                i = readCommentAndCDATA(xmlData, i);
                continue;
            } else {
                let closingTag = false;
                if (xmlData[i] === "/") {
                    //closing tag
                    closingTag = true;
                    i++;
                }
                //read tagname
                let tagName = "";
                for(; i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "	" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++){
                    tagName += xmlData[i];
                }
                tagName = tagName.trim();
                //console.log(tagName);
                if (tagName[tagName.length - 1] === "/") {
                    //self closing tag without attributes
                    tagName = tagName.substring(0, tagName.length - 1);
                    //continue;
                    i--;
                }
                if (!validateTagName(tagName)) {
                    let msg;
                    if (tagName.trim().length === 0) {
                        msg = "Invalid space after '<'.";
                    } else {
                        msg = "Tag '" + tagName + "' is an invalid name.";
                    }
                    return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
                }
                const result = readAttributeStr(xmlData, i);
                if (result === false) {
                    return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
                }
                let attrStr = result.value;
                i = result.index;
                if (attrStr[attrStr.length - 1] === "/") {
                    //self closing tag
                    const attrStrStart = i - attrStr.length;
                    attrStr = attrStr.substring(0, attrStr.length - 1);
                    const isValid = validateAttributeString(attrStr, options);
                    if (isValid === true) {
                        tagFound = true;
                    //continue; //text may presents after self closing tag
                    } else {
                        //the result from the nested function returns the position of the error within the attribute
                        //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
                        //this gives us the absolute index in the entire xml, which we can use to find the line at last
                        return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
                    }
                } else if (closingTag) {
                    if (!result.tagClosed) {
                        return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
                    } else if (attrStr.trim().length > 0) {
                        return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
                    } else {
                        const otg = tags.pop();
                        if (tagName !== otg.tagName) {
                            let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                            return getErrorObject("InvalidTag", "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.", getLineNumberForPosition(xmlData, tagStartPos));
                        }
                        //when there are no more tags, we reached the root level.
                        if (tags.length == 0) {
                            reachedRoot = true;
                        }
                    }
                } else {
                    const isValid = validateAttributeString(attrStr, options);
                    if (isValid !== true) {
                        //the result from the nested function returns the position of the error within the attribute
                        //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
                        //this gives us the absolute index in the entire xml, which we can use to find the line at last
                        return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
                    }
                    //if the root level has been reached before ...
                    if (reachedRoot === true) {
                        return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
                    } else if (options.unpairedTags.indexOf(tagName) !== -1) {
                    //don't push into stack
                    } else {
                        tags.push({
                            tagName,
                            tagStartPos
                        });
                    }
                    tagFound = true;
                }
                //skip tag text value
                //It may include comments and CDATA value
                for(i++; i < xmlData.length; i++){
                    if (xmlData[i] === "<") {
                        if (xmlData[i + 1] === "!") {
                            //comment or CADATA
                            i++;
                            i = readCommentAndCDATA(xmlData, i);
                            continue;
                        } else if (xmlData[i + 1] === "?") {
                            i = readPI(xmlData, ++i);
                            if (i.err) return i;
                        } else {
                            break;
                        }
                    } else if (xmlData[i] === "&") {
                        const afterAmp = validateAmpersand(xmlData, i);
                        if (afterAmp == -1) return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
                        i = afterAmp;
                    } else {
                        if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
                            return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
                        }
                    }
                } //end of reading tag text value
                if (xmlData[i] === "<") {
                    i--;
                }
            }
        } else {
            if (isWhiteSpace(xmlData[i])) {
                continue;
            }
            return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
        }
    }
    if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
    } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
    } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t)=>t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
            line: 1,
            col: 1
        });
    }
    return true;
};
function isWhiteSpace(char) {
    return char === " " || char === "	" || char === "\n" || char === "\r";
}
/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */ function readPI(xmlData, i) {
    const start = i;
    for(; i < xmlData.length; i++){
        if (xmlData[i] == "?" || xmlData[i] == " ") {
            //tagname
            const tagname = xmlData.substr(start, i - start);
            if (i > 5 && tagname === "xml") {
                return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
            } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
                //check if valid attribut string
                i++;
                break;
            } else {
                continue;
            }
        }
    }
    return i;
}
function readCommentAndCDATA(xmlData, i) {
    if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
        //comment
        for(i += 3; i < xmlData.length; i++){
            if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
                i += 2;
                break;
            }
        }
    } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
        let angleBracketsCount = 1;
        for(i += 8; i < xmlData.length; i++){
            if (xmlData[i] === "<") {
                angleBracketsCount++;
            } else if (xmlData[i] === ">") {
                angleBracketsCount--;
                if (angleBracketsCount === 0) {
                    break;
                }
            }
        }
    } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
        for(i += 8; i < xmlData.length; i++){
            if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
                i += 2;
                break;
            }
        }
    }
    return i;
}
const doubleQuote = '"';
const singleQuote = "'";
/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */ function readAttributeStr(xmlData, i) {
    let attrStr = "";
    let startChar = "";
    let tagClosed = false;
    for(; i < xmlData.length; i++){
        if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
            if (startChar === "") {
                startChar = xmlData[i];
            } else if (startChar !== xmlData[i]) {
            //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
            } else {
                startChar = "";
            }
        } else if (xmlData[i] === ">") {
            if (startChar === "") {
                tagClosed = true;
                break;
            }
        }
        attrStr += xmlData[i];
    }
    if (startChar !== "") {
        return false;
    }
    return {
        value: attrStr,
        index: i,
        tagClosed: tagClosed
    };
}
/**
 * Select all the attributes whether valid or invalid.
 */ const validAttrStrRegxp = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""
function validateAttributeString(attrStr, options) {
    //console.log("start:"+attrStr+":end");
    //if(attrStr.trim().length === 0) return true; //empty string
    const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
    const attrNames = {};
    for(let i = 0; i < matches.length; i++){
        if (matches[i][1].length === 0) {
            //nospace before attribute name: a="sd"b="saf"
            return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] !== undefined && matches[i][4] === undefined) {
            return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
            //independent attribute: ab
            return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
        }
        /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */ const attrName = matches[i][2];
        if (!validateAttrName(attrName)) {
            return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
            //check for duplicate attribute.
            attrNames[attrName] = 1;
        } else {
            return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
        }
    }
    return true;
}
function validateNumberAmpersand(xmlData, i) {
    let re = /\d/;
    if (xmlData[i] === "x") {
        i++;
        re = /[\da-fA-F]/;
    }
    for(; i < xmlData.length; i++){
        if (xmlData[i] === ";") return i;
        if (!xmlData[i].match(re)) break;
    }
    return -1;
}
function validateAmpersand(xmlData, i) {
    // https://www.w3.org/TR/xml/#dt-charref
    i++;
    if (xmlData[i] === ";") return -1;
    if (xmlData[i] === "#") {
        i++;
        return validateNumberAmpersand(xmlData, i);
    }
    let count = 0;
    for(; i < xmlData.length; i++, count++){
        if (xmlData[i].match(/\w/) && count < 20) continue;
        if (xmlData[i] === ";") break;
        return -1;
    }
    return i;
}
function getErrorObject(code, message, lineNumber) {
    return {
        err: {
            code: code,
            msg: message,
            line: lineNumber.line || lineNumber,
            col: lineNumber.col
        }
    };
}
function validateAttrName(attrName) {
    return util.isName(attrName);
}
// const startsWithXML = /^xml/i;
function validateTagName(tagname) {
    return util.isName(tagname) /* && !tagname.match(startsWithXML) */ ;
}
//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
    const lines = xmlData.substring(0, index).split(/\r?\n/);
    return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
    };
}
//this function returns the position of the first character of match within attrStr
function getPositionFromMatch(match) {
    return match.startIndex + match[1].length;
}


/***/ }),

/***/ 56574:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

//parse Empty Node as self closing node
const buildFromOrderedJs = __webpack_require__(25970);
const defaultOptions = {
    attributeNamePrefix: "@_",
    attributesGroupName: false,
    textNodeName: "#text",
    ignoreAttributes: true,
    cdataPropName: false,
    format: false,
    indentBy: "  ",
    suppressEmptyNode: false,
    suppressUnpairedNode: true,
    suppressBooleanAttributes: true,
    tagValueProcessor: function(key, a) {
        return a;
    },
    attributeValueProcessor: function(attrName, a) {
        return a;
    },
    preserveOrder: false,
    commentPropName: false,
    unpairedTags: [],
    entities: [
        {
            regex: new RegExp("&", "g"),
            val: "&amp;"
        },
        {
            regex: new RegExp(">", "g"),
            val: "&gt;"
        },
        {
            regex: new RegExp("<", "g"),
            val: "&lt;"
        },
        {
            regex: new RegExp("'", "g"),
            val: "&apos;"
        },
        {
            regex: new RegExp('"', "g"),
            val: "&quot;"
        }
    ],
    processEntities: true,
    stopNodes: [],
    // transformTagName: false,
    // transformAttributeName: false,
    oneListGroup: false
};
function Builder(options) {
    this.options = Object.assign({}, defaultOptions, options);
    if (this.options.ignoreAttributes || this.options.attributesGroupName) {
        this.isAttribute = function() {
            return false;
        };
    } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
    }
    this.processTextOrObjNode = processTextOrObjNode;
    if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
    } else {
        this.indentate = function() {
            return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
    }
}
Builder.prototype.build = function(jObj) {
    if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
    } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
            jObj = {
                [this.options.arrayNodeName]: jObj
            };
        }
        return this.j2x(jObj, 0).val;
    }
};
Builder.prototype.j2x = function(jObj, level) {
    let attrStr = "";
    let val = "";
    for(let key in jObj){
        if (typeof jObj[key] === "undefined") {
        // supress undefined node
        } else if (jObj[key] === null) {
            if (key[0] === "?") val += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
            else val += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
        // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
        } else if (jObj[key] instanceof Date) {
            val += this.buildTextValNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
            //premitive type
            const attr = this.isAttribute(key);
            if (attr) {
                attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
            } else {
                //tag value
                if (key === this.options.textNodeName) {
                    let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
                    val += this.replaceEntitiesValue(newval);
                } else {
                    val += this.buildTextValNode(jObj[key], key, "", level);
                }
            }
        } else if (Array.isArray(jObj[key])) {
            //repeated nodes
            const arrLen = jObj[key].length;
            let listTagVal = "";
            for(let j = 0; j < arrLen; j++){
                const item = jObj[key][j];
                if (typeof item === "undefined") {
                // supress undefined node
                } else if (item === null) {
                    if (key[0] === "?") val += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
                    else val += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
                // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
                } else if (typeof item === "object") {
                    if (this.options.oneListGroup) {
                        listTagVal += this.j2x(item, level + 1).val;
                    } else {
                        listTagVal += this.processTextOrObjNode(item, key, level);
                    }
                } else {
                    listTagVal += this.buildTextValNode(item, key, "", level);
                }
            }
            if (this.options.oneListGroup) {
                listTagVal = this.buildObjectNode(listTagVal, key, "", level);
            }
            val += listTagVal;
        } else {
            //nested node
            if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
                const Ks = Object.keys(jObj[key]);
                const L = Ks.length;
                for(let j = 0; j < L; j++){
                    attrStr += this.buildAttrPairStr(Ks[j], "" + jObj[key][Ks[j]]);
                }
            } else {
                val += this.processTextOrObjNode(jObj[key], key, level);
            }
        }
    }
    return {
        attrStr: attrStr,
        val: val
    };
};
Builder.prototype.buildAttrPairStr = function(attrName, val) {
    val = this.options.attributeValueProcessor(attrName, "" + val);
    val = this.replaceEntitiesValue(val);
    if (this.options.suppressBooleanAttributes && val === "true") {
        return " " + attrName;
    } else return " " + attrName + '="' + val + '"';
};
function processTextOrObjNode(object, key, level) {
    const result = this.j2x(object, level + 1);
    if (object[this.options.textNodeName] !== undefined && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
    } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
    }
}
Builder.prototype.buildObjectNode = function(val, key, attrStr, level) {
    if (val === "") {
        if (key[0] === "?") return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
            return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
    } else {
        let tagEndExp = "</" + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
            piClosingChar = "?";
            tagEndExp = "";
        }
        if (attrStr && val.indexOf("<") === -1) {
            return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
            return this.indentate(level) + `<!--${val}-->` + this.newLine;
        } else {
            return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val + this.indentate(level) + tagEndExp;
        }
    }
};
Builder.prototype.closeTag = function(key) {
    let closeTag = "";
    if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode) closeTag = "/";
    } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
    } else {
        closeTag = `></${key}`;
    }
    return closeTag;
};
function buildEmptyObjNode(val, key, attrStr, level) {
    if (val !== "") {
        return this.buildObjectNode(val, key, attrStr, level);
    } else {
        if (key[0] === "?") return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
            return this.indentate(level) + "<" + key + attrStr + "/" + this.tagEndChar;
        // return this.buildTagStr(level,key, attrStr);
        }
    }
}
Builder.prototype.buildTextValNode = function(val, key, attrStr, level) {
    if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        return this.indentate(level) + `<![CDATA[${val}]]>` + this.newLine;
    } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        return this.indentate(level) + `<!--${val}-->` + this.newLine;
    } else if (key[0] === "?") {
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
    } else {
        let textValue = this.options.tagValueProcessor(key, val);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "") {
            return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
            return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
    }
};
Builder.prototype.replaceEntitiesValue = function(textValue) {
    if (textValue && textValue.length > 0 && this.options.processEntities) {
        for(let i = 0; i < this.options.entities.length; i++){
            const entity = this.options.entities[i];
            textValue = textValue.replace(entity.regex, entity.val);
        }
    }
    return textValue;
};
function indentate(level) {
    return this.options.indentBy.repeat(level);
}
function isAttribute(name /*, options*/ ) {
    if (name.startsWith(this.options.attributeNamePrefix)) {
        return name.substr(this.attrPrefixLen);
    } else {
        return false;
    }
}
module.exports = Builder;


/***/ }),

/***/ 25970:
/***/ ((module) => {

"use strict";

const EOL = "\n";
/**
 * 
 * @param {array} jArray 
 * @param {any} options 
 * @returns 
 */ function toXml(jArray, options) {
    let indentation = "";
    if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
    }
    return arrToStr(jArray, options, "", indentation);
}
function arrToStr(arr, options, jPath, indentation) {
    let xmlStr = "";
    let isPreviousElementTag = false;
    for(let i = 0; i < arr.length; i++){
        const tagObj = arr[i];
        const tagName = propName(tagObj);
        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName;
        else newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
            let tagText = tagObj[tagName];
            if (!isStopNode(newJPath, options)) {
                tagText = options.tagValueProcessor(tagName, tagText);
                tagText = replaceEntitiesValue(tagText, options);
            }
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += tagText;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.cdataPropName) {
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.commentPropName) {
            xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
            isPreviousElementTag = true;
            continue;
        } else if (tagName[0] === "?") {
            const attStr = attr_to_str(tagObj[":@"], options);
            const tempInd = tagName === "?xml" ? "" : indentation;
            let piTextNodeName = tagObj[tagName][0][options.textNodeName];
            piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : ""; //remove extra spacing
            xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr}?>`;
            isPreviousElementTag = true;
            continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
            newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
            if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
            else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
            xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
            xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
            xmlStr += tagStart + ">";
            if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
                xmlStr += indentation + options.indentBy + tagValue + indentation;
            } else {
                xmlStr += tagValue;
            }
            xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
    }
    return xmlStr;
}
function propName(obj) {
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        if (key !== ":@") return key;
    }
}
function attr_to_str(attrMap, options) {
    let attrStr = "";
    if (attrMap && !options.ignoreAttributes) {
        for(let attr in attrMap){
            let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
            attrVal = replaceEntitiesValue(attrVal, options);
            if (attrVal === true && options.suppressBooleanAttributes) {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
            } else {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
            }
        }
    }
    return attrStr;
}
function isStopNode(jPath, options) {
    jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
    let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
    for(let index in options.stopNodes){
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
    }
    return false;
}
function replaceEntitiesValue(textValue, options) {
    if (textValue && textValue.length > 0 && options.processEntities) {
        for(let i = 0; i < options.entities.length; i++){
            const entity = options.entities[i];
            textValue = textValue.replace(entity.regex, entity.val);
        }
    }
    return textValue;
}
module.exports = toXml;


/***/ }),

/***/ 46750:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const util = __webpack_require__(78097);
//TODO: handle comments
function readDocType(xmlData, i) {
    const entities = {};
    if (xmlData[i + 3] === "O" && xmlData[i + 4] === "C" && xmlData[i + 5] === "T" && xmlData[i + 6] === "Y" && xmlData[i + 7] === "P" && xmlData[i + 8] === "E") {
        i = i + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for(; i < xmlData.length; i++){
            if (xmlData[i] === "<" && !comment) {
                if (hasBody && isEntity(xmlData, i)) {
                    i += 7;
                    [entityName, val, i] = readEntityExp(xmlData, i + 1);
                    if (val.indexOf("&") === -1) entities[validateEntityName(entityName)] = {
                        regx: RegExp(`&${entityName};`, "g"),
                        val: val
                    };
                } else if (hasBody && isElement(xmlData, i)) i += 8; //Not supported
                else if (hasBody && isAttlist(xmlData, i)) i += 8; //Not supported
                else if (hasBody && isNotation(xmlData, i)) i += 9; //Not supported
                else if (isComment) comment = true;
                else throw new Error("Invalid DOCTYPE");
                angleBracketsCount++;
                exp = "";
            } else if (xmlData[i] === ">") {
                if (comment) {
                    if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
                        comment = false;
                        angleBracketsCount--;
                    }
                } else {
                    angleBracketsCount--;
                }
                if (angleBracketsCount === 0) {
                    break;
                }
            } else if (xmlData[i] === "[") {
                hasBody = true;
            } else {
                exp += xmlData[i];
            }
        }
        if (angleBracketsCount !== 0) {
            throw new Error(`Unclosed DOCTYPE`);
        }
    } else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
    }
    return {
        entities,
        i
    };
}
function readEntityExp(xmlData, i) {
    //External entities are not supported
    //    <!ENTITY ext SYSTEM "http://normal-website.com" >
    //Parameter entities are not supported
    //    <!ENTITY entityname "&anotherElement;">
    //Internal entities are supported
    //    <!ENTITY entityname "replacement text">
    //read EntityName
    let entityName1 = "";
    for(; i < xmlData.length && xmlData[i] !== "'" && xmlData[i] !== '"'; i++){
        // if(xmlData[i] === " ") continue;
        // else 
        entityName1 += xmlData[i];
    }
    entityName1 = entityName1.trim();
    if (entityName1.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    //read Entity Value
    const startChar = xmlData[i++];
    let val1 = "";
    for(; i < xmlData.length && xmlData[i] !== startChar; i++){
        val1 += xmlData[i];
    }
    return [
        entityName1,
        val1,
        i
    ];
}
function isComment(xmlData, i) {
    if (xmlData[i + 1] === "!" && xmlData[i + 2] === "-" && xmlData[i + 3] === "-") return true;
    return false;
}
function isEntity(xmlData, i) {
    if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "N" && xmlData[i + 4] === "T" && xmlData[i + 5] === "I" && xmlData[i + 6] === "T" && xmlData[i + 7] === "Y") return true;
    return false;
}
function isElement(xmlData, i) {
    if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "L" && xmlData[i + 4] === "E" && xmlData[i + 5] === "M" && xmlData[i + 6] === "E" && xmlData[i + 7] === "N" && xmlData[i + 8] === "T") return true;
    return false;
}
function isAttlist(xmlData, i) {
    if (xmlData[i + 1] === "!" && xmlData[i + 2] === "A" && xmlData[i + 3] === "T" && xmlData[i + 4] === "T" && xmlData[i + 5] === "L" && xmlData[i + 6] === "I" && xmlData[i + 7] === "S" && xmlData[i + 8] === "T") return true;
    return false;
}
function isNotation(xmlData, i) {
    if (xmlData[i + 1] === "!" && xmlData[i + 2] === "N" && xmlData[i + 3] === "O" && xmlData[i + 4] === "T" && xmlData[i + 5] === "A" && xmlData[i + 6] === "T" && xmlData[i + 7] === "I" && xmlData[i + 8] === "O" && xmlData[i + 9] === "N") return true;
    return false;
}
function validateEntityName(name) {
    if (util.isName(name)) return name;
    else throw new Error(`Invalid entity name ${name}`);
}
module.exports = readDocType;


/***/ }),

/***/ 93866:
/***/ ((__unused_webpack_module, exports) => {

const defaultOptions = {
    preserveOrder: false,
    attributeNamePrefix: "@_",
    attributesGroupName: false,
    textNodeName: "#text",
    ignoreAttributes: true,
    removeNSPrefix: false,
    allowBooleanAttributes: false,
    //ignoreRootElement : false,
    parseTagValue: true,
    parseAttributeValue: false,
    trimValues: true,
    cdataPropName: false,
    numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
    },
    tagValueProcessor: function(tagName, val) {
        return val;
    },
    attributeValueProcessor: function(attrName, val) {
        return val;
    },
    stopNodes: [],
    alwaysCreateTextNode: false,
    isArray: ()=>false,
    commentPropName: false,
    unpairedTags: [],
    processEntities: true,
    htmlEntities: false,
    ignoreDeclaration: false,
    ignorePiTags: false,
    transformTagName: false,
    transformAttributeName: false,
    updateTag: function(tagName, jPath, attrs) {
        return tagName;
    }
};
const buildOptions = function(options) {
    return Object.assign({}, defaultOptions, options);
};
exports.buildOptions = buildOptions;
exports.defaultOptions = defaultOptions;


/***/ }),

/***/ 93580:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

///@ts-check
const util = __webpack_require__(78097);
const xmlNode = __webpack_require__(48294);
const readDocType = __webpack_require__(46750);
const toNumber = __webpack_require__(68836);
const regx = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, util.nameRegexp);
//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");
class OrderedObjParser {
    constructor(options){
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
            "apos": {
                regex: /&(apos|#39|#x27);/g,
                val: "'"
            },
            "gt": {
                regex: /&(gt|#62|#x3E);/g,
                val: ">"
            },
            "lt": {
                regex: /&(lt|#60|#x3C);/g,
                val: "<"
            },
            "quot": {
                regex: /&(quot|#34|#x22);/g,
                val: '"'
            }
        };
        this.ampEntity = {
            regex: /&(amp|#38|#x26);/g,
            val: "&"
        };
        this.htmlEntities = {
            "space": {
                regex: /&(nbsp|#160);/g,
                val: " "
            },
            // "lt" : { regex: /&(lt|#60);/g, val: "<" },
            // "gt" : { regex: /&(gt|#62);/g, val: ">" },
            // "amp" : { regex: /&(amp|#38);/g, val: "&" },
            // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
            // "apos" : { regex: /&(apos|#39);/g, val: "'" },
            "cent": {
                regex: /&(cent|#162);/g,
                val: "\xa2"
            },
            "pound": {
                regex: /&(pound|#163);/g,
                val: "\xa3"
            },
            "yen": {
                regex: /&(yen|#165);/g,
                val: "\xa5"
            },
            "euro": {
                regex: /&(euro|#8364);/g,
                val: "€"
            },
            "copyright": {
                regex: /&(copy|#169);/g,
                val: "\xa9"
            },
            "reg": {
                regex: /&(reg|#174);/g,
                val: "\xae"
            },
            "inr": {
                regex: /&(inr|#8377);/g,
                val: "₹"
            }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
    }
}
function addExternalEntities(externalEntities) {
    const entKeys = Object.keys(externalEntities);
    for(let i = 0; i < entKeys.length; i++){
        const ent = entKeys[i];
        this.lastEntities[ent] = {
            regex: new RegExp("&" + ent + ";", "g"),
            val: externalEntities[ent]
        };
    }
}
/**
 * @param {string} val
 * @param {string} tagName
 * @param {string} jPath
 * @param {boolean} dontTrim
 * @param {boolean} hasAttributes
 * @param {boolean} isLeafNode
 * @param {boolean} escapeEntities
 */ function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
    if (val !== undefined) {
        if (this.options.trimValues && !dontTrim) {
            val = val.trim();
        }
        if (val.length > 0) {
            if (!escapeEntities) val = this.replaceEntitiesValue(val);
            const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
            if (newval === null || newval === undefined) {
                //don't parse
                return val;
            } else if (typeof newval !== typeof val || newval !== val) {
                //overwrite
                return newval;
            } else if (this.options.trimValues) {
                return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
                const trimmedVal = val.trim();
                if (trimmedVal === val) {
                    return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
                } else {
                    return val;
                }
            }
        }
    }
}
function resolveNameSpace(tagname) {
    if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
            return "";
        }
        if (tags.length === 2) {
            tagname = prefix + tags[1];
        }
    }
    return tagname;
}
//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const attrsRegx = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
function buildAttributesMap(attrStr, jPath, tagName) {
    if (!this.options.ignoreAttributes && typeof attrStr === "string") {
        // attrStr = attrStr.replace(/\r?\n/g, ' ');
        //attrStr = attrStr || attrStr.trim();
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length; //don't make it inline
        const attrs = {};
        for(let i = 0; i < len; i++){
            const attrName = this.resolveNameSpace(matches[i][1]);
            let oldVal = matches[i][4];
            let aName = this.options.attributeNamePrefix + attrName;
            if (attrName.length) {
                if (this.options.transformAttributeName) {
                    aName = this.options.transformAttributeName(aName);
                }
                if (aName === "__proto__") aName = "#__proto__";
                if (oldVal !== undefined) {
                    if (this.options.trimValues) {
                        oldVal = oldVal.trim();
                    }
                    oldVal = this.replaceEntitiesValue(oldVal);
                    const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
                    if (newVal === null || newVal === undefined) {
                        //don't parse
                        attrs[aName] = oldVal;
                    } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                        //overwrite
                        attrs[aName] = newVal;
                    } else {
                        //parse
                        attrs[aName] = parseValue(oldVal, this.options.parseAttributeValue, this.options.numberParseOptions);
                    }
                } else if (this.options.allowBooleanAttributes) {
                    attrs[aName] = true;
                }
            }
        }
        if (!Object.keys(attrs).length) {
            return;
        }
        if (this.options.attributesGroupName) {
            const attrCollection = {};
            attrCollection[this.options.attributesGroupName] = attrs;
            return attrCollection;
        }
        return attrs;
    }
}
const parseXml = function(xmlData) {
    xmlData = xmlData.replace(/\r\n?/g, "\n"); //TODO: remove this line
    const xmlObj = new xmlNode("!xml");
    let currentNode = xmlObj;
    let textData = "";
    let jPath = "";
    for(let i = 0; i < xmlData.length; i++){
        const ch = xmlData[i];
        if (ch === "<") {
            // const nextIndex = i+1;
            // const _2ndChar = xmlData[nextIndex];
            if (xmlData[i + 1] === "/") {
                const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
                let tagName = xmlData.substring(i + 2, closeIndex).trim();
                if (this.options.removeNSPrefix) {
                    const colonIndex = tagName.indexOf(":");
                    if (colonIndex !== -1) {
                        tagName = tagName.substr(colonIndex + 1);
                    }
                }
                if (this.options.transformTagName) {
                    tagName = this.options.transformTagName(tagName);
                }
                if (currentNode) {
                    textData = this.saveTextToParentTag(textData, currentNode, jPath);
                }
                //check if last tag of nested tag was unpaired tag
                const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
                if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
                    throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
                }
                let propIndex = 0;
                if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
                    propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
                    this.tagsNodeStack.pop();
                } else {
                    propIndex = jPath.lastIndexOf(".");
                }
                jPath = jPath.substring(0, propIndex);
                currentNode = this.tagsNodeStack.pop(); //avoid recursion, set the parent tag scope
                textData = "";
                i = closeIndex;
            } else if (xmlData[i + 1] === "?") {
                let tagData = readTagExp(xmlData, i, false, "?>");
                if (!tagData) throw new Error("Pi Tag is not closed.");
                textData = this.saveTextToParentTag(textData, currentNode, jPath);
                if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {} else {
                    const childNode = new xmlNode(tagData.tagName);
                    childNode.add(this.options.textNodeName, "");
                    if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                        childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
                    }
                    this.addChild(currentNode, childNode, jPath);
                }
                i = tagData.closeIndex + 1;
            } else if (xmlData.substr(i + 1, 3) === "!--") {
                const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
                if (this.options.commentPropName) {
                    const comment = xmlData.substring(i + 4, endIndex - 2);
                    textData = this.saveTextToParentTag(textData, currentNode, jPath);
                    currentNode.add(this.options.commentPropName, [
                        {
                            [this.options.textNodeName]: comment
                        }
                    ]);
                }
                i = endIndex;
            } else if (xmlData.substr(i + 1, 2) === "!D") {
                const result = readDocType(xmlData, i);
                this.docTypeEntities = result.entities;
                i = result.i;
            } else if (xmlData.substr(i + 1, 2) === "![") {
                const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
                const tagExp = xmlData.substring(i + 9, closeIndex);
                textData = this.saveTextToParentTag(textData, currentNode, jPath);
                //cdata should be set even if it is 0 length string
                if (this.options.cdataPropName) {
                    // let val = this.parseTextData(tagExp, this.options.cdataPropName, jPath + "." + this.options.cdataPropName, true, false, true);
                    // if(!val) val = "";
                    currentNode.add(this.options.cdataPropName, [
                        {
                            [this.options.textNodeName]: tagExp
                        }
                    ]);
                } else {
                    let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
                    if (val == undefined) val = "";
                    currentNode.add(this.options.textNodeName, val);
                }
                i = closeIndex + 2;
            } else {
                let result = readTagExp(xmlData, i, this.options.removeNSPrefix);
                let tagName = result.tagName;
                let tagExp = result.tagExp;
                let attrExpPresent = result.attrExpPresent;
                let closeIndex = result.closeIndex;
                if (this.options.transformTagName) {
                    tagName = this.options.transformTagName(tagName);
                }
                //save text as child node
                if (currentNode && textData) {
                    if (currentNode.tagname !== "!xml") {
                        //when nested tag is found
                        textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
                    }
                }
                //check if last tag was unpaired tag
                const lastTag = currentNode;
                if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
                    currentNode = this.tagsNodeStack.pop();
                    jPath = jPath.substring(0, jPath.lastIndexOf("."));
                }
                if (tagName !== xmlObj.tagname) {
                    jPath += jPath ? "." + tagName : tagName;
                }
                if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
                    let tagContent = "";
                    //self-closing tag
                    if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                        i = result.closeIndex;
                    } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                        i = result.closeIndex;
                    } else {
                        //read until closing tag is found
                        const result = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
                        if (!result) throw new Error(`Unexpected end of ${tagName}`);
                        i = result.i;
                        tagContent = result.tagContent;
                    }
                    const childNode = new xmlNode(tagName);
                    if (tagName !== tagExp && attrExpPresent) {
                        childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                    }
                    if (tagContent) {
                        tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
                    }
                    jPath = jPath.substr(0, jPath.lastIndexOf("."));
                    childNode.add(this.options.textNodeName, tagContent);
                    this.addChild(currentNode, childNode, jPath);
                } else {
                    //selfClosing tag
                    if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                        if (tagName[tagName.length - 1] === "/") {
                            tagName = tagName.substr(0, tagName.length - 1);
                            tagExp = tagName;
                        } else {
                            tagExp = tagExp.substr(0, tagExp.length - 1);
                        }
                        if (this.options.transformTagName) {
                            tagName = this.options.transformTagName(tagName);
                        }
                        const childNode = new xmlNode(tagName);
                        if (tagName !== tagExp && attrExpPresent) {
                            childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                        }
                        this.addChild(currentNode, childNode, jPath);
                        jPath = jPath.substr(0, jPath.lastIndexOf("."));
                    } else {
                        const childNode = new xmlNode(tagName);
                        this.tagsNodeStack.push(currentNode);
                        if (tagName !== tagExp && attrExpPresent) {
                            childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                        }
                        this.addChild(currentNode, childNode, jPath);
                        currentNode = childNode;
                    }
                    textData = "";
                    i = closeIndex;
                }
            }
        } else {
            textData += xmlData[i];
        }
    }
    return xmlObj.child;
};
function addChild(currentNode, childNode, jPath) {
    const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
    if (result === false) {} else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode);
    } else {
        currentNode.addChild(childNode);
    }
}
const replaceEntitiesValue = function(val) {
    if (this.options.processEntities) {
        for(let entityName in this.docTypeEntities){
            const entity = this.docTypeEntities[entityName];
            val = val.replace(entity.regx, entity.val);
        }
        for(let entityName in this.lastEntities){
            const entity = this.lastEntities[entityName];
            val = val.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
            for(let entityName in this.htmlEntities){
                const entity = this.htmlEntities[entityName];
                val = val.replace(entity.regex, entity.val);
            }
        }
        val = val.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return val;
};
function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
    if (textData) {
        if (isLeafNode === undefined) isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(textData, currentNode.tagname, jPath, false, currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false, isLeafNode);
        if (textData !== undefined && textData !== "") currentNode.add(this.options.textNodeName, textData);
        textData = "";
    }
    return textData;
}
//TODO: use jPath to simplify the logic
/**
 * 
 * @param {string[]} stopNodes 
 * @param {string} jPath
 * @param {string} currentTagName 
 */ function isItStopNode(stopNodes, jPath, currentTagName) {
    const allNodesExp = "*." + currentTagName;
    for(const stopNodePath in stopNodes){
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp) return true;
    }
    return false;
}
/**
 * Returns the tag Expression and where it is ending handling single-double quotes situation
 * @param {string} xmlData 
 * @param {number} i starting index
 * @returns 
 */ function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
    let attrBoundary;
    let tagExp = "";
    for(let index = i; index < xmlData.length; index++){
        let ch = xmlData[index];
        if (attrBoundary) {
            if (ch === attrBoundary) attrBoundary = ""; //reset
        } else if (ch === '"' || ch === "'") {
            attrBoundary = ch;
        } else if (ch === closingChar[0]) {
            if (closingChar[1]) {
                if (xmlData[index + 1] === closingChar[1]) {
                    return {
                        data: tagExp,
                        index: index
                    };
                }
            } else {
                return {
                    data: tagExp,
                    index: index
                };
            }
        } else if (ch === "	") {
            ch = " ";
        }
        tagExp += ch;
    }
}
function findClosingIndex(xmlData, str, i, errMsg) {
    const closingIndex = xmlData.indexOf(str, i);
    if (closingIndex === -1) {
        throw new Error(errMsg);
    } else {
        return closingIndex + str.length - 1;
    }
}
function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
    const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
    if (!result) return;
    let tagExp = result.data;
    const closeIndex = result.index;
    const separatorIndex = tagExp.search(/\s/);
    let tagName = tagExp;
    let attrExpPresent = true;
    if (separatorIndex !== -1) {
        tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, "");
        tagExp = tagExp.substr(separatorIndex + 1);
    }
    if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
            tagName = tagName.substr(colonIndex + 1);
            attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
    }
    return {
        tagName: tagName,
        tagExp: tagExp,
        closeIndex: closeIndex,
        attrExpPresent: attrExpPresent
    };
}
/**
 * find paired tag for a stop node
 * @param {string} xmlData 
 * @param {string} tagName 
 * @param {number} i 
 */ function readStopNodeData(xmlData, tagName, i) {
    const startIndex = i;
    // Starting at 1 since we already have an open tag
    let openTagCount = 1;
    for(; i < xmlData.length; i++){
        if (xmlData[i] === "<") {
            if (xmlData[i + 1] === "/") {
                const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
                let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
                if (closeTagName === tagName) {
                    openTagCount--;
                    if (openTagCount === 0) {
                        return {
                            tagContent: xmlData.substring(startIndex, i),
                            i: closeIndex
                        };
                    }
                }
                i = closeIndex;
            } else if (xmlData[i + 1] === "?") {
                const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
                i = closeIndex;
            } else if (xmlData.substr(i + 1, 3) === "!--") {
                const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
                i = closeIndex;
            } else if (xmlData.substr(i + 1, 2) === "![") {
                const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
                i = closeIndex;
            } else {
                const tagData = readTagExp(xmlData, i, ">");
                if (tagData) {
                    const openTagName = tagData && tagData.tagName;
                    if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                        openTagCount++;
                    }
                    i = tagData.closeIndex;
                }
            }
        }
    } //end for loop
}
function parseValue(val, shouldParse, options) {
    if (shouldParse && typeof val === "string") {
        //console.log(options)
        const newval = val.trim();
        if (newval === "true") return true;
        else if (newval === "false") return false;
        else return toNumber(val, options);
    } else {
        if (util.isExist(val)) {
            return val;
        } else {
            return "";
        }
    }
}
module.exports = OrderedObjParser;


/***/ }),

/***/ 5789:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const { buildOptions } = __webpack_require__(93866);
const OrderedObjParser = __webpack_require__(93580);
const { prettify } = __webpack_require__(23055);
const validator = __webpack_require__(99246);
class XMLParser {
    constructor(options){
        this.externalEntities = {};
        this.options = buildOptions(options);
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */ parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {} else if (xmlData.toString) {
            xmlData = xmlData.toString();
        } else {
            throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
            if (validationOption === true) validationOption = {}; //validate with default options
            const result = validator.validate(xmlData, validationOption);
            if (result !== true) {
                throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
            }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === undefined) return orderedResult;
        else return prettify(orderedResult, this.options);
    }
    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */ addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
            throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
            throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
            throw new Error("An entity with value '&' is not permitted");
        } else {
            this.externalEntities[key] = value;
        }
    }
}
module.exports = XMLParser;


/***/ }),

/***/ 23055:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * 
 * @param {array} node 
 * @param {any} options 
 * @returns 
 */ function prettify(node, options) {
    return compress(node, options);
}
/**
 * 
 * @param {array} arr 
 * @param {object} options 
 * @param {string} jPath 
 * @returns object
 */ function compress(arr, options, jPath) {
    let text;
    const compressedObj = {};
    for(let i = 0; i < arr.length; i++){
        const tagObj = arr[i];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === undefined) newJpath = property;
        else newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
            if (text === undefined) text = tagObj[property];
            else text += "" + tagObj[property];
        } else if (property === undefined) {
            continue;
        } else if (tagObj[property]) {
            let val = compress(tagObj[property], options, newJpath);
            const isLeaf = isLeafTag(val, options);
            if (tagObj[":@"]) {
                assignAttributes(val, tagObj[":@"], newJpath, options);
            } else if (Object.keys(val).length === 1 && val[options.textNodeName] !== undefined && !options.alwaysCreateTextNode) {
                val = val[options.textNodeName];
            } else if (Object.keys(val).length === 0) {
                if (options.alwaysCreateTextNode) val[options.textNodeName] = "";
                else val = "";
            }
            if (compressedObj[property] !== undefined && compressedObj.hasOwnProperty(property)) {
                if (!Array.isArray(compressedObj[property])) {
                    compressedObj[property] = [
                        compressedObj[property]
                    ];
                }
                compressedObj[property].push(val);
            } else {
                //TODO: if a node is not an array, then check if it should be an array
                //also determine if it is a leaf node
                if (options.isArray(property, newJpath, isLeaf)) {
                    compressedObj[property] = [
                        val
                    ];
                } else {
                    compressedObj[property] = val;
                }
            }
        }
    }
    // if(text && text.length > 0) compressedObj[options.textNodeName] = text;
    if (typeof text === "string") {
        if (text.length > 0) compressedObj[options.textNodeName] = text;
    } else if (text !== undefined) compressedObj[options.textNodeName] = text;
    return compressedObj;
}
function propName(obj) {
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        if (key !== ":@") return key;
    }
}
function assignAttributes(obj, attrMap, jpath, options) {
    if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length; //don't make it inline
        for(let i = 0; i < len; i++){
            const atrrName = keys[i];
            if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
                obj[atrrName] = [
                    attrMap[atrrName]
                ];
            } else {
                obj[atrrName] = attrMap[atrrName];
            }
        }
    }
}
function isLeafTag(obj, options) {
    const { textNodeName } = options;
    const propCount = Object.keys(obj).length;
    if (propCount === 0) {
        return true;
    }
    if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
    }
    return false;
}
exports.prettify = prettify;


/***/ }),

/***/ 48294:
/***/ ((module) => {

"use strict";

class XmlNode {
    constructor(tagname){
        this.tagname = tagname;
        this.child = []; //nested tags, text, cdata, comments in order
        this[":@"] = {}; //attributes map
    }
    add(key, val) {
        // this.child.push( {name : key, val: val, isCdata: isCdata });
        if (key === "__proto__") key = "#__proto__";
        this.child.push({
            [key]: val
        });
    }
    addChild(node) {
        if (node.tagname === "__proto__") node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
            this.child.push({
                [node.tagname]: node.child,
                [":@"]: node[":@"]
            });
        } else {
            this.child.push({
                [node.tagname]: node.child
            });
        }
    }
}
;
module.exports = XmlNode;


/***/ }),

/***/ 68836:
/***/ ((module) => {

"use strict";

const hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
const numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
// const octRegex = /0x[a-z0-9]+/;
// const binRegex = /0x[a-z0-9]+/;
//polyfill
if (!Number.parseInt && window.parseInt) {
    Number.parseInt = window.parseInt;
}
if (!Number.parseFloat && window.parseFloat) {
    Number.parseFloat = window.parseFloat;
}
const consider = {
    hex: true,
    leadingZeros: true,
    decimalPoint: ".",
    eNotation: true
};
function toNumber(str, options = {}) {
    // const options = Object.assign({}, consider);
    // if(opt.leadingZeros === false){
    //     options.leadingZeros = false;
    // }else if(opt.hex === false){
    //     options.hex = false;
    // }
    options = Object.assign({}, consider, options);
    if (!str || typeof str !== "string") return str;
    let trimmedStr = str.trim();
    // if(trimmedStr === "0.0") return 0;
    // else if(trimmedStr === "+0.0") return 0;
    // else if(trimmedStr === "-0.0") return -0;
    if (options.skipLike !== undefined && options.skipLike.test(trimmedStr)) return str;
    else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
    // } else if (options.parseOct && octRegex.test(str)) {
    //     return Number.parseInt(val, 8);
    // }else if (options.parseBin && binRegex.test(str)) {
    //     return Number.parseInt(val, 2);
    } else {
        //separate negative sign, leading zeros, and rest number
        const match = numRegex.exec(trimmedStr);
        if (match) {
            const sign = match[1];
            const leadingZeros = match[2];
            let numTrimmedByZeros = trimZeros(match[3]); //complete num without leading zeros
            //trim ending zeros for floating number
            const eNotation = match[4] || match[6];
            if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str; //-0123
            else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str; //0123
            else {
                const num = Number(trimmedStr);
                const numStr = "" + num;
                if (numStr.search(/[eE]/) !== -1) {
                    if (options.eNotation) return num;
                    else return str;
                } else if (eNotation) {
                    if (options.eNotation) return num;
                    else return str;
                } else if (trimmedStr.indexOf(".") !== -1) {
                    // const decimalPart = match[5].substr(1);
                    // const intPart = trimmedStr.substr(0,trimmedStr.indexOf("."));
                    // const p = numStr.indexOf(".");
                    // const givenIntPart = numStr.substr(0,p);
                    // const givenDecPart = numStr.substr(p+1);
                    if (numStr === "0" && numTrimmedByZeros === "") return num; //0.0
                    else if (numStr === numTrimmedByZeros) return num; //0.456. 0.79000
                    else if (sign && numStr === "-" + numTrimmedByZeros) return num;
                    else return str;
                }
                if (leadingZeros) {
                    // if(numTrimmedByZeros === numStr){
                    //     if(options.leadingZeros) return num;
                    //     else return str;
                    // }else return str;
                    if (numTrimmedByZeros === numStr) return num;
                    else if (sign + numTrimmedByZeros === numStr) return num;
                    else return str;
                }
                if (trimmedStr === numStr) return num;
                else if (trimmedStr === sign + numStr) return num;
                // else{
                //     //number with +/- sign
                //     trimmedStr.test(/[-+][0-9]);
                // }
                return str;
            }
        // else if(!eNotation && trimmedStr && trimmedStr !== Number(trimmedStr) ) return str;
        } else {
            return str;
        }
    }
}
/**
 * 
 * @param {string} numStr without leading zeros
 * @returns 
 */ function trimZeros(numStr) {
    if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, ""); //remove ending zeros
        if (numStr === ".") numStr = "0";
        else if (numStr[0] === ".") numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".") numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
    }
    return numStr;
}
module.exports = toNumber;


/***/ }),

/***/ 35092:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
/** @deprecated */ function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
/** @deprecated */ function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources
});


/***/ })

};
;
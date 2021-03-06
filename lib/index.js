"use strict";
/**
 * Geocode Module
 *
 * @package react-geocode
 * @author  Pir Shukarulalh Shah <shuker_rashdi@hotmail.com>  (http://www.shukarullah.com)
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @type {boolean | null} */
var DEBUG = false;
/** @type {string | null} */
var API_KEY = null;
/** @type {string | null} */
var LANGUAGE = "en";
/** @type {string | number | boolean | null} */
var REGION = null;
/** @type {string | null} */
var GOOGLE_API = "https://maps.google.com/maps/api/geocode/json";
/**
 * @param {string} message
 * @param {boolean} warn
 */
function log(message, warn) {
    if (warn === void 0) { warn = false; }
    if (DEBUG) {
        if (warn) {
            console.warn(message);
        }
        else {
            console.log(message);
        }
    }
}
/**
 * @param {RequestInfo} url
 * @returns {Promise<any>}
 */
function handleUrl(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url).catch(function () {
                        return Promise.reject(new Error("Error fetching data"));
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json().catch(function () {
                            log("Error parsing server response");
                            return Promise.reject(new Error("Error parsing server response"));
                        })];
                case 2:
                    json = _a.sent();
                    if (json.status === "OK") {
                        log(json);
                        return [2 /*return*/, json];
                    }
                    log(json.error_message + ".\nServer returned status code " + json.status, true);
                    return [2 /*return*/, Promise.reject(new Error(json.error_message + ".\nServer returned status code " + json.status))];
            }
        });
    });
}
var reactGeocode = {
    /**
     *
     *
     * @param {string} apiKey
     */
    setApiKey: function (apiKey) {
        API_KEY = apiKey;
    },
    /**
     *
     *
     * @param {string} language
     */
    setLanguage: function (language) {
        LANGUAGE = language;
    },
    /**
     *
     *
     * @param {string} region
     */
    setRegion: function (region) {
        REGION = region;
    },
    /**
     *
     *
     * @param {boolean} [flag=true]
     */
    enableDebug: function (flag) {
        if (flag === void 0) { flag = true; }
        DEBUG = flag;
    },
    /**
     *
     *
     * @param {string} lat
     * @param {string} lng
     * @param {string} [apiKey]
     * @param {string} [language]
     * @param {string | null} [region]
     * @returns {Promise<any>}
     */
    fromLatLng: function (lat, lng, apiKey, language, region) {
        return __awaiter(this, void 0, void 0, function () {
            var latLng, url;
            return __generator(this, function (_a) {
                if (!lat || !lng) {
                    log("Provided coordinates are invalid", true);
                    return [2 /*return*/, Promise.reject(new Error("Provided coordinates are invalid"))];
                }
                latLng = lat + "," + lng;
                url = GOOGLE_API + "?latlng=" + encodeURIComponent(latLng);
                if (apiKey || API_KEY) {
                    API_KEY = apiKey || API_KEY;
                    url += "&key=" + API_KEY;
                }
                if (language || LANGUAGE) {
                    LANGUAGE = language || LANGUAGE;
                    url += "&language=" + LANGUAGE;
                }
                if (region || REGION) {
                    REGION = region || REGION;
                    // @ts-ignore
                    url += "&region=" + encodeURIComponent(REGION);
                }
                return [2 /*return*/, handleUrl(url)];
            });
        });
    },
    /**
     *
     *
     * @param {string} address
     * @param {string} [apiKey]
     * @param {string} [language]
     * @param {string | null} [region]
     * @param {{[key: string]: any}} [components]
     * @returns {Promise<any>}
     */
    fromAddress: function (address, apiKey, language, region, components) {
        return __awaiter(this, void 0, void 0, function () {
            var url, elements, component;
            return __generator(this, function (_a) {
                if (!address) {
                    log("Provided address is invalid", true);
                    return [2 /*return*/, Promise.reject(new Error("Provided address is invalid"))];
                }
                url = GOOGLE_API + "?address=" + encodeURIComponent(address);
                if (apiKey || API_KEY) {
                    API_KEY = apiKey || API_KEY;
                    url += "&key=" + API_KEY;
                }
                if (language || LANGUAGE) {
                    LANGUAGE = language || LANGUAGE;
                    url += "&language=" + LANGUAGE;
                }
                if (region || REGION) {
                    REGION = region || REGION;
                    // @ts-ignore
                    url += "&region=" + encodeURIComponent(REGION);
                }
                if (typeof components === 'object' && components !== null) {
                    elements = "&components=";
                    for (component in components) {
                        if (components.hasOwnProperty(component)) {
                            if (elements.length > 12) {
                                elements += "|";
                            }
                            elements += component + ":" + encodeURIComponent(components[component]);
                        }
                    }
                    if (elements.length > 12) {
                        url += elements;
                    }
                }
                return [2 /*return*/, handleUrl(url)];
            });
        });
    }
};
exports.default = reactGeocode;

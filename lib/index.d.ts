export default reactGeocode;
declare namespace reactGeocode {
    /**
     *
     *
     * @param {string} apiKey
     */
    export function setApiKey(apiKey: string): void;
    /**
     *
     *
     * @param {string} apiKey
     */
    export function setApiKey(apiKey: string): void;
    /**
     *
     *
     * @param {string} language
     */
    export function setLanguage(language: string): void;
    /**
     *
     *
     * @param {string} language
     */
    export function setLanguage(language: string): void;
    /**
     *
     *
     * @param {string} region
     */
    export function setRegion(region: string): void;
    /**
     *
     *
     * @param {string} region
     */
    export function setRegion(region: string): void;
    /**
     *
     *
     * @param {boolean} [flag=true]
     */
    export function enableDebug(flag?: boolean | undefined): void;
    /**
     *
     *
     * @param {boolean} [flag=true]
     */
    export function enableDebug(flag?: boolean | undefined): void;
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
    export function fromLatLng(lat: string, lng: string, apiKey?: string | undefined, language?: string | undefined, region?: string | null | undefined): Promise<any>;
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
    export function fromLatLng(lat: string, lng: string, apiKey?: string | undefined, language?: string | undefined, region?: string | null | undefined): Promise<any>;
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
    export function fromAddress(address: string, apiKey?: string | undefined, language?: string | undefined, region?: string | null | undefined, components?: {
        [key: string]: any;
    } | undefined): Promise<any>;
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
    export function fromAddress(address: string, apiKey?: string | undefined, language?: string | undefined, region?: string | null | undefined, components?: {
        [key: string]: any;
    } | undefined): Promise<any>;
}

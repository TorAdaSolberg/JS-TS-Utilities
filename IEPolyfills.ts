

function createMap(obj: Object): Map<string, string> {
    /* creates a Map from an Object.
     * Polyfill for lacking Object.entries() which will be available from es2017.
     */
    const returnMap = new Map<string, string>();
    Object.keys(obj).forEach(key => returnMap.set(key, obj[key]));
    return returnMap;
}
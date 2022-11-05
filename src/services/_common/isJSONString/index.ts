export const isJSONString = (str: unknown, returnParsed?: boolean) => {
    if (typeof str !== 'string') return false;
    try {
        const s = JSON.parse(str);
        if (returnParsed) return s;
    } catch (e) {
        return false;
    }
    return true;
};

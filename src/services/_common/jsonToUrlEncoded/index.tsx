import isObject from 'services/_common/isObject';

const jsonToUrlEncoded = (element: unknown, key?: string, list?: string[]) => {
    const _list = list || [];
    if (isObject(element)) {
        const entries = Object.entries(element as Record<string, unknown>);
        entries.forEach(entry => {
            jsonToUrlEncoded(
                entry[1],
                key ? `${key}[${entry[0]}]` : entry[0],
                _list
            );
        });
    } else if (typeof element === 'string') {
        _list.push(`${key}=${encodeURIComponent(element)}`);
    }
    return _list.join('&');
};

export default jsonToUrlEncoded;

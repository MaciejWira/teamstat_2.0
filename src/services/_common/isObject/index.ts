const isObject = (data: unknown) =>
    Object.prototype.toString.call(data) === '[object Object]';

export default isObject;

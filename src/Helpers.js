export function createMarkup(content) {
    return {__html: content};
}

export const generateAppID = (length) => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    let i = 0, n = charset.length;
    for (; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
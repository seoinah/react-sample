export function isEmpty (value: any) {
    if (typeof value === 'number') {
        value = value.toString();
    }
    return value === undefined || value === null || (typeof value === 'string' && value.trim() === '');
}

export function isBlank (value: string) {
    return value.trim() === '';
}


export function isNil (value: any) {
    return value === null || value === undefined;
}

export function debounce (callback, limit) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(args);
        }, limit);
    };
}

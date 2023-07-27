export function enterCustom (event: any, callback: any) {
    if (event.keyCode === 13) {
        event.preventDefault();
        callback();
    }
}

export function getRandomString () {
    return Math.random().toString(36).substring(2, 12);
};
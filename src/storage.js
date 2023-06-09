export const STORAGE_ITEM_NAME = 'justproject-user'

export function saveToLocalStorage(key, value) {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + 60 * 60 * 1000 // 1 hour
    };
    localStorage.setItem(key, JSON.stringify(item));
}

export function getFromLocalStorage(key) {
    const itemString = localStorage.getItem(key);
    if (!itemString) {
        return null;
    }
    const item = JSON.parse(itemString);
    const now = new Date();
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}

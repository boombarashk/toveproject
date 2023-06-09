import CryptoJS from "crypto-js";

export const checkUnoUser = async ({user, password}) => {
    return CryptoJS.MD5(user).toString() === 'e3afed0047b08059d0fada10f400c1e5' &&
        CryptoJS.MD5(password).toString() === '827ccb0eea8a706c4c34a16891f84e7b'
}

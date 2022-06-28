import moment from "moment";

const TOKEN_KEY = 'jwt';

export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}

export const toMoment = (date) => {
    if (date) {
        const dateJs = new Date(date);
        const dateMoment = moment(dateJs, false);
        return dateMoment
    }
    return ""
}
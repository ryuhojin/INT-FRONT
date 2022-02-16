import { atom } from "recoil";

export const authAtom = atom({
    key: 'auth',
    default: null,
});

export const searchAtom = atom({
    key: 'search',
    default: "",
});

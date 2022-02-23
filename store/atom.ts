import { atom } from "recoil";

export const authAtom = atom({
    key: 'auth',
    default: null,
});

export const searchAtom = atom({
    key: 'search',
    default: "",
});

export const toggleAtom = atom({
    key: 'toggle',
    default: false,
})

export const mobileMenu = atom({
    key: 'mobileMenu',
    default: false,
})
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

export const messageAtom = atom({
    key: 'message',
    default: {
        title: "주의",
        message: "",
        isShow: false
    },
})

export const dialogAtom = atom({
    key: "dialog",
    default: {
        title: "알림",
        children: null,
        visible: false
    }
})
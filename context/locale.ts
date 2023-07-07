import { atom } from "recoil";

export interface ILocaleType {
    lang: 'ko' | 'en'
}

export const localeState = atom<ILocaleType>({
    key: 'locale',
    default: {
        lang: 'en'
    }
})
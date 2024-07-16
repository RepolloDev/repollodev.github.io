export const languages = {
    en: 'English',
    es: 'Español',
} as const

export const defaultLanguage = 'en'
export type Language = keyof typeof languages
import { languages, defaultLanguage, type Language } from "./lang";
import { ui, type Component } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) {
    return lang as Language;
  }
  return defaultLanguage;
}

export function useTranslations(lang: Language) {
  return function t(component: Component) {
    return ui[lang][component] || ui[defaultLanguage][component];
  };
}

export function getUrlFromLang(url: URL, lang: Language) {
  const [, ...path] = url.pathname.split("/");
  return new URL(`/${lang}/${path.join("/")}`, url.origin);
}

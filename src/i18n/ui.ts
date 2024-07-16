import { defaultLanguage } from './lang'
export const ui = {
    en: {
        "home.title": "Portfolio RepolloDev - Web developer and programmer",
        "home.description": "Contact RepolloDev to develop your web project, application or website. Custom web development and personalized web design. Put your ideas into action.",
        nav: {
            'experience': 'Experience',
            'projects': 'Projects',
            'about': 'About me',
            'contact': 'Contact',
        }
    },
    es: {
        "home.title": "Portfolio RepolloDev - Desarrollador y programador web",
        "home.description": "Contacta con RepolloDev para desarrollar tu proyecto web, aplicación o página web. Desarrollo web a medida y diseño web personalizado. Pon tus ideas en marcha.",
        nav: {
            'experience': 'Experiencia',
            'projects': 'Proyectos',
            'about': 'Sobre mí',
            'contact': 'Contacto',
        }
    }
} as const

export type Component = keyof typeof ui[typeof defaultLanguage]
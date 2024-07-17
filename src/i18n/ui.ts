import { defaultLanguage } from "./lang";
export const ui = {
  en: {
    "home.title": "Portfolio RepolloDev - Web developer and programmer",
    "home.description":
      "Contact RepolloDev to develop your web project, application or website. Custom web development and personalized web design.",
    nav: {
      experience: "Experience",
      projects: "Projects",
      about: "About me",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi 👋",
      title: "I am RepolloDev",
      description:
        "<strong>Systems Engineering Student and Programming Content Creator</strong> from La Paz, Bolivia. <br /> Specialized in web development and passionate about learning new technologies.",
      "btn.contact": "Contact me",
    },
  },
  es: {
    "home.title": "Portfolio RepolloDev - Desarrollador y programador web",
    "home.description":
      "Contacta con RepolloDev para desarrollar tu proyecto web, aplicación o página web. Desarrollo web a medida y diseño web personalizado.",
    nav: {
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      greeting: "Buenas 👋",
      title: "Soy RepolloDev",
      description:
        "Estudiante de <strong>Ingeniería en Sistemas y Creador de Contenido sobre Programación</strong> de La Paz, Bolivia. <br /> Especializado en desarrollo web y apasionado por aprender nuevas tecnologías.",
      "btn.contact": "Contáctame",
    },
  },
} as const;

export type Component = keyof (typeof ui)[typeof defaultLanguage];

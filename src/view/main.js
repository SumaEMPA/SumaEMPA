const m = require("mithril");
const StandardPage = require("/layout/standard-page.js");

const Card = require("/components/card.js");
const CardContainer = require("/components/card-container.js");

const DownloadItem = require("/components/download-item.js");
const DownloadContainer = require("/components/download-container.js");

const cards = [
    {
        image: require("/img/cards/card1.jpg"),
        title: "Nivelación",
        content: "El primer paso al mundo EMPA. Conocé todo acerca de los requisitos de nivelación para tu instrumento favorito.",
        links: [{
            url: "/lm",
            name: "Lenguaje Musical"
        },
        {
            url: "/instrumentos",
            name: "Instrumentos"
        }]

    },
    {
        image: require("/img/cards/card2.jpg"),
        title: "Formación básica",
        content: "Contiene los programas para todas las materias correspondientes a la Formación Básica.",
        links: [{
            url: "/foba",
            name: "FOBA"
        }]
    },
    {
        image: require("/img/cards/card3.jpg"),
        title: "Carreras",
        content: "¿Profesorado? ¿Tecnicatura? ¿Aún no decidis? Encontrá mas información en esta sección.",
        links: [{
            url: "/pimp",
            name: "PIMP"
        },{
            url: "/pem",
            name: "PEM"
        },{
            url: "/imp",
            name: "IMP"
        }]
    },
    {
        image: require("/img/cards/card4.jpg"),
        title: "Áreas",
        content: "Folklore, Tango o Jazz. Si querés acceder a los programas de tus materias según tun instrumento, accede aquí.",
        links: [{
            url: "/folklore",
            name: "Folklore"
        },{
            url: "/jazz",
            name: "Jazz"
        },{
            url: "/tango",
            name: "Tango"
        }]
    },
    {
        image: require("/img/cards/card5.jpg"),
        title: "Material extra",
        content: "Apuntes, partituras, audios, videos, libros y hasta programas de computadora. Encontrá todo lo que necesitas para tu carrera aquí.",
        links:[{
            url: "/material",
            name: "Click Aquí"
        }]
    },
    {
        image: require("/img/cards/card6.jpg"),
        title: "Grupos Telegram",
        content: "Grupos de alumnos de Telegram. Vení a compartir un rato con tus compañeros, consultar inquietudes o simplemente hacer amigos.",
        links: [{
            url: "https://empaentelegram.github.io/",
            name: "Click Aquí",
            newWindow: true
        }]
    }
]

const Main = {
    view(){
        return m(StandardPage, {hero: true},
                 m(CardContainer,
                   cards.map(card => m(Card, card))));

    }
};

module.exports = Main;

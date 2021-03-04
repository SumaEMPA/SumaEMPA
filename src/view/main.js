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
        content: "El primer paso al mundo EMPA. Conocé todo acerca de los cursos de nivelación y accedé a la información que sí o sí tenes que saber.",
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
        content: "¿Te crees que sos muy canchero por pasar la Nivelación? Esto recién empieza, la Formación Básica es donde la música realmente comienza.",
        links: [{
            url: "/foba",
            name: "FOBA"
        }]
    },
    {
        image: require("/img/cards/card3.jpg"),
        title: "Carreras",
        content: "Algo de PIMP, PEM e IMP. No tengo idea de que significan pero suena groso.",
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
        content: "No tengo idea :P",
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
        content: "Buscá entre todo el material disponible para ayudarte en tus estudios.",
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
    query: "",
    view(){
        return m(StandardPage, {hero: true},
                 m(CardContainer,
                   cards.map(card => m(Card, card))));

    }
};

module.exports = Main;

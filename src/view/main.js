const m = require("mithril");
const StandardPage = require("/layout/standard-page.js");

const Card = require("/components/card.js");
const CardContainer = require("/components/card-container.js");

const DownloadItem = require("/components/download-item.js");
const DownloadContainer = require("/components/download-container.js");

const cards = [
    {
        image: require("/img/cards/placeholder.jpg"),
        title: "Nivelación",
        content: "",
        links: [{
            url: "/lm",
            name: "LM"
        },
        {
            url: "/instrumentos",
            name: "Instrumentos"
        }]

    },
    {
        image: require("/img/cards/placeholder.jpg"),
        title: "Formación básica",
        content: "",
        links: [{
            url: "/foba",
            name: "FOBA"
        }]
    },
    {
        image: require("/img/cards/placeholder.jpg"),
        title: "Carreras",
        content: "",
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
        image: require("/img/cards/placeholder.jpg"),
        title: "Áreas",
        content: "",
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
        image: require("/img/cards/placeholder.jpg"),
        title: "Material extra",
        content: "",
        links:[{
            url: "/material",
            name: "Click aquí"
        }]
    },
    {
        image: require("/img/cards/placeholder.jpg"),
        title: "Grupos Telegram",
        content: "",
        links: [{
            url: "https://empaentelegram.github.io/",
            name: "Click Aquí"
        }]
    }
]

const Main = {
    query: "",
    view(){
        return m(StandardPage, {hero: true},
                 m("h1.text-align-center.main", "Título de la página, supongo"),
                 m(CardContainer,
                   cards.map(card => m(Card, card))));

    }
};

module.exports = Main;

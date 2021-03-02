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
        links: [{
            url: "/foba",
            name: "FOBA"
        }]
    },
    {
        image: require("/img/cards/card3.jpg"),
        title: "Carreras",
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
        links:[{
            url: "/material",
            name: "Click Aquí"
        }]
    },
    {
        image: require("/img/cards/card6.jpg"),
        title: "Grupos Telegram",
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

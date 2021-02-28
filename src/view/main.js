const m = require("mithril");
const StandardPage = require("/layout/standard-page.js");

const Card = require("/components/card.js");
const CardContainer = require("/components/card-container.js");

const DownloadItem = require("/components/download-item.js");
const DownloadContainer = require("/components/download-container.js");

const cards = [
    {
        image: require("/img/cards/placeholder.jpg"),
        title: "Tarjeta 1",
        content: "Hola, esta es una descripcion de algo, no se, ni idea",
        links: [{
            url: "http://www.google.com",
            name: "Cosa 1"
        },
        {
            url: "http://www.google.com",
            name: "cosa2"
        },
        {
            url: "http://www.google.com",
            name: "cosa3"
        }],

    },
    {
        image: require("/img/cards/placeholder.jpg"),
        title: "Tarjeta 2",
        content: "Hola, esta es una descripcion de algo, no se, ni idea",
        links: [{
            url: "http://www.google.com",
            name: "Google"
        },
        {
            url: "http://www.google.com",
            name: "Google2 (?"
        }]
    },
    {
        image: require("/img/cards/placeholder.jpg"),
        title: "Tarjeta 3",
        content: "Hola, esta es una descripcion de algo, no se, ni idea",
        links: [{
            url: "www.google.com",
            name: "Nada"
        }]
    },
    {
        image: require("/img/cards/placeholder.jpg"),
        title: "Tarjeta 4",
        content: "Hola, esta es una descripcion de algo, no se, ni idea"
    },
    {
        image: require("/img/cards/placeholder.jpg"),
        title: "Tarjeta 5",
        content: "Hola, esta es una descripcion de algo, no se, ni idea"
    },
    {
        image: require("/img/cards/placeholder.jpg"),
        title: "Tarjeta 6",
        content: "Hola, esta es una descripcion de algo, no se, ni idea"
    }

]

const Main = {
    query: "",
    view(){
        return m(StandardPage, {hero: true},
                 m("h1.text-align-center.main", "Título de la página, supongo"),
                 m(CardContainer,

                   cards.map(card => m(Card, card)))

                 /*
                   m("p"),
                   m("p"),
                   m("hr"),
                   m("p"),
                   m("p"),

                   m(DownloadContainer,
                   Material.buscar(this.query)
                   .map(item =>
                   m(DownloadItem, {
                   title: item.nombre,
                   description: item.descripcion,
                   url: item.url
                   })))
                 */
                );

    }
};

module.exports = Main;

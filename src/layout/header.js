const m = require("mithril");

const Header = {
    view(){
        return m("header",
                 m("nav",
                   m("logo",
                     m("img", {src: require("/img/logo.svg"), onclick: () => m.route.set("/")})),
                   m("title", "SUMA EMPA"),
                   m("search", m("img", {src: require("/img/search.svg"), onclick: () => m.route.set("/buscar")})),
                   m("hamburguer", m("img", {src: require("/img/hamburguer.svg")}))));
    }
};

module.exports = Header;

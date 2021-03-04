const m = require("mithril");

const Header = {
    view(){
        return m(".header",
                 m(".header__nav",
                   m(".header__logo-container",
                     m("img.header__logo", {src: require("/img/logo.svg"), onclick: () => m.route.set("/")})),
                   m(".header__search-container",
                     m("img.header__search", {src: require("/img/search.svg"), onclick: () => m.route.set("/material")})),
                   m(".header__hamburguer-container",
                     m("img.header__hamburguer", {src: require("/img/hamburguer.svg")}))));
    }
};

module.exports = Header;

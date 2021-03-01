const m = require("mithril");
const Header = require("/layout/header.js");
const Footer = require("/layout/footer.js");

const StandardPage = {
    view(vnode){
        return m("page",[
            m(Header),
            vnode.attrs.hero?m("hero.animated",
                               m("img", {src: require("/img/hero.jpg")}),
                               m("content",
                                 m("h1", "Sistema Unificado"),
                                 m("h1", "de Material para"),
                                 m("h1", "Alumn@s de la EMPA")
                                )):null,
            m("main",
              m("main-content",
                vnode.children)),
            m(Footer)
        ]);
    }
};

module.exports = StandardPage;

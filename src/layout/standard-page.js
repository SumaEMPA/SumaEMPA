const m = require("mithril");
const Header = require("/layout/header.js");
const Footer = require("/layout/footer.js");

const StandardPage = {
    view(vnode){
        return m("page",[
            m(Header),
            vnode.attrs.hero?m("hero",
                               m("img", {src: require("/img/hero.jpg")}),
                               m("content",
                                 m("h1", "SUMA EMPA"),
                                 m("p", "Sistema Unificado de Material para Alumnos del EMPA"))):null,
            m("main",
              m("main-content",
                vnode.children)),
            m(Footer)
        ]);
    }
};

module.exports = StandardPage;

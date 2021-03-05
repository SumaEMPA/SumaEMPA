const m = require("mithril");
const Header = require("/layout/header.js");
const Footer = require("/layout/footer.js");

const Hero = {
    oncreate(){
        console.log("cre");
    },
    view(){
        return m(".hero.fadein",
                 m("img.hero__img", {src: require("/img/hero.jpg")}),
                 m(".hero__content",
                   m("h1.hero__text", "Sistema Unificado"),
                   m("h1.hero__text", "de Material para"),
                   m("h1.hero__text", "Alumn@s de la EMPA")
                  ));
    }
}

const StandardPage = {
    view(vnode){
        return m("page",[
            m(Header),
            //vnode.attrs.hero?m(Hero):null,
            m("main",
              m("main-content.fadein",
                vnode.children)),
            m(Footer)
        ]);
    }
};

module.exports = StandardPage;

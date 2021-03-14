const m = require("mithril");

const Footer = {
    view(){
        return m(".footer",
                 m(".footer__content",
                   m("a", {href: "https://github.com/SumaEMPA/SumaEMPA", target: "_blank"}, "Made with ❤ by Pipa & Lucas")));
    }
};

module.exports = Footer;

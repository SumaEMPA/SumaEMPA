const m = require("mithril");

const Footer = {
    view(){
        return m(".footer",
                 m(".footer__content", "Made with ❤ by Pipa & Lucas"));
    }
};

module.exports = Footer;

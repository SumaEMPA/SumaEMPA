const m = require("mithril");
const StandardPage = require("/layout/standard-page.js");
const Accordion = require("/components/accordion.js");

const Programa = {
    view(){
        return m(StandardPage,
                 m("h1.text-align-center.main", "Lenguaje musical"),
                 m(Accordion,
                   "Ingreso a Nivel I",
                   m.trust(require("/programs/lm-nivel1.md")),
                   "Ingreso a Nivel II",
                   m.trust(require("/programs/lm-nivel2.md")),
                   "Ingreso a Nivel III",
                   m.trust(require("/programs/lm-nivel3.md")),
                   "Ingreso a Nivel Superior",
                   m.trust(require("/programs/lm-nivels.md")),
                  ));
    }
};

module.exports = Programa;

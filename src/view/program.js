const m = require("mithril");
const StandardPage = require("/layout/standard-page.js");
const Accordion = require("/components/accordion.js");
const AccordionGroup = require("/components/accordion-group.js");

const DownloadItem = require("/components/download-item.js");
const DownloadContainer = require("/components/download-container.js");

const Material = require("/model/material.js");

const Programa = {
    view(){
        return m(StandardPage,
                 m("h1.text-align-center.main", "Lenguaje musical"),
                 m(AccordionGroup,
                   "Ingreso al Nivel I",
                   m(Accordion,
                     "Pautas",
                     m.trust(require("/programs/lm-nivel1.md")),
                     "Material",
                     m(DownloadContainer,
                       Material.buscarNivel("FOBA1")
                               .map(item =>
                                   m(DownloadItem, {
                                       title: item.nombre,
                                       description: item.descripcion,
                                       url: item.url,
                                       icon: item.icono
                                   })))
                    )),
                 m(".hr"),
                 m(AccordionGroup,
                   "Ingreso al Nivel II",
                   m(Accordion,
                     "Pautas",
                     m.trust(require("/programs/lm-nivel2.md")))),
                 m(".hr"),
                 m(AccordionGroup,
                   "Ingreso al Nivel III",
                   m(Accordion,
                     "Pautas",
                     m.trust(require("/programs/lm-nivel3.md")))),
                 m(".hr"),
                 m(AccordionGroup,
                   "Ingreso al Nivel Superior",
                   m(Accordion,
                     "Pautas",
                     m.trust(require("/programs/lm-nivels.md")))));


    }
};

module.exports = Programa;

const m = require("mithril");
const StandardPage = require("/layout/standard-page.js");
const Accordion = require("/components/accordion.js");
const AccordionGroup = require("/components/accordion-group.js");

const DownloadItem = require("/components/download-item.js");
const DownloadContainer = require("/components/download-container.js");

const Material = require("/model/material.js");
const Program = require("/components/program.js")

const ProgramView = {
    view(){
        return m(StandardPage,
                 m("h1.center-text", "Lenguaje musical"),
                 m(AccordionGroup,
                   "Ingreso al Nivel I",
                   m(Accordion,
                     "Pautas",
                     m(Program, {name: "lm/1"}),
                     "Material",
                     m(DownloadContainer,
                       Material.buscarNivel("LM1")
                               .map(item =>
                                   m(DownloadItem, item)))
                    )),

                 m(AccordionGroup,
                   "Ingreso al Nivel II",
                   m(Accordion,
                     "Pautas",
                     m(Program, {name: "lm/2"}),
                     "Material",
                     m(DownloadContainer,
                       Material.buscarNivel("LM2")
                               .map(item =>
                                   m(DownloadItem, item)))
                    )),

                 m(AccordionGroup,
                   "Ingreso al Nivel III",
                   m(Accordion,
                     "Pautas",
                     m(Program, {name: "lm/3"}),
                     "Material",
                     m(DownloadContainer,
                       Material.buscarNivel("LM3")
                               .map(item =>
                                   m(DownloadItem, item)))
                    )),

                 m(AccordionGroup,
                   "Ingreso al Nivel Superior",
                   m(Accordion,
                     "Pautas",
                     m(Program, {name: "lm/s"}),
                     "Material",
                     m(DownloadContainer,
                       Material.buscarNivel("LMS")
                               .map(item =>
                                   m(DownloadItem, item)))
                    )));




    }
};

module.exports = ProgramView;

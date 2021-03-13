const m = require("mithril");
const Main = require("/view/main.js");
const Search = require("/view/search.js");
const ProgramView = require("/view/program.js");
const Materias = require("/model/materias.js");

m.route.prefix = '';

m.route(document.body, "/", {
    "/": Main,
    "/lm": {
        view: () => m(ProgramView, {
            title: "Lenguaje Musical",
            years: Materias.listarAños("lm")
        })
    },
    "/instrumentos": {
        view: () => m(ProgramView, {
            title: "Instrumentos",
            years: Materias.listarAños("inst"),
            instruments: Materias.listarInstrumentos()
        })
    },
    "/foba": {
        view: () => m(ProgramView, {
            title: "Formación Básica",
            years: Materias.listarAños("foba"),
            instruments: Materias.listarInstrumentos()
        })
    },
    "/pem": {
        view: () => m(ProgramView, {
            title: "Profesorado en Música",
            years: Materias.listarAños("pem"),
        })
    },
    "/imp": {
        view: () => m(ProgramView, {
            title: "IMP",
            years: Materias.listarAños("imp"),
            instruments: Materias.listarInstrumentos()
        })
    },
    "/pimp": {
        view: () => m(ProgramView, {
            title: "PIMP",
            years: Materias.listarAños("pimp"),
            instruments: Materias.listarInstrumentos()
        })
    },
    "/tango": {
        view: () => m(ProgramView, {
            title: "Area Tango",
            years: Materias.listarAños("tango"),
            instruments: Materias.listarInstrumentos("tango")
        })
    },
    "/jazz": {
        view: () => m(ProgramView, {
            title: "Area Jazz",
            years: Materias.listarAños("jazz"),
            instruments: Materias.listarInstrumentos("jazz")
        })
    },
    "/folklore": {
        view: () => m(ProgramView, {
            title: "Area Folklore",
            years: Materias.listarAños("folklore"),
            instruments: Materias.listarInstrumentos("folklore")
        })
    },


    "/material": Search
});

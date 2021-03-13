const m = require("mithril");
const Main = require("/view/main.js");
const Search = require("/view/search.js");
const Program = require("/view/program.js");
const Programa = require("/model/programa.js");

m.route.prefix = '';

m.route(document.body, "/", {
    "/": Main,
    "/lm": {
        view: () => m(Program, {
            title: "Lenguaje Musical",
            years: Programa.listarAños("lm")
        })
    },
    "/instrumentos": {
        view: () => m(Program, {
            title: "Instrumentos",
            years: Programa.listarAños("inst"),
            instruments: Programa.listarInstrumentos()
        })
    },
    "/foba": {
        view: () => m(Program, {
            title: "Formación Básica",
            years: Programa.listarAños("foba"),
            instruments: Programa.listarInstrumentos()
        })
    },
    "/pem": {
        view: () => m(Program, {
            title: "Profesorado en Música",
            years: Programa.listarAños("pem"),
        })
    },
    "/imp": {
        view: () => m(Program, {
            title: "IMP",
            years: Programa.listarAños("imp"),
            instruments: Programa.listarInstrumentos()
        })
    },
    "/pimp": {
        view: () => m(Program, {
            title: "PIMP",
            years: Programa.listarAños("pimp"),
            instruments: Programa.listarInstrumentos()
        })
    },
    "/tango": {
        view: () => m(Program, {
            title: "Area Tango",
            years: Programa.listarAños("tango"),
            instruments: Programa.listarInstrumentos("tango")
        })
    },
    "/jazz": {
        view: () => m(Program, {
            title: "Area Jazz",
            years: Programa.listarAños("jazz"),
            instruments: Programa.listarInstrumentos("jazz")
        })
    },
    "/folklore": {
        view: () => m(Program, {
            title: "Area Folklore",
            years: Programa.listarAños("folklore"),
            instruments: Programa.listarInstrumentos("folklore")
        })
    },


    "/material": Search
});

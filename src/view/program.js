const m = require("mithril");
const StandardPage = require("/layout/standard-page.js");
const Accordion = require("/components/accordion.js");
const AccordionGroup = require("/components/accordion-group.js");

const DownloadItem = require("/components/download-item.js");
const DownloadContainer = require("/components/download-container.js");

const Material = require("/model/material.js");
const Program = require("/components/program.js")
const Programa = require("/model/programa.js");

function yearToOption(year){
    return {name: year.nombre, value: year.codigo};
}

function instrumentToOption(inst){
    return {name: inst.nombre, value: inst.codigo};
}

const Select = {
    view(vnode){
        const selected = vnode.attrs.selected;
        const options = vnode.attrs.options || [];
        const onchange = vnode.attrs.onchange || (() => {});

        return m("select", {onchange},
                 options.map(option => m("option", {value: option.value}, option.name)));
    }
}

const ProgramView = function(initialVnode){
    var selectedYear =  null;
    var selectedInstrument= null;
    var years = null;
    var instruments = null;
    var title = "";

    function updateData(attrs){
        title = attrs.title || "";
        years = attrs.years;
        instruments = attrs.instruments;

        if(!selectedYear && years)
            selectedYear = years[0].codigo;
    }

    function selectYear(ev){
        selectedYear = ev.target.value;
    }

    function selectInstrument(ev){
        selectedInstrument = ev.target.value;
    }


    return {
        view(vnode){
            updateData(vnode.attrs);

            if(!years)
                return m(StandardPage);


            return m(StandardPage,
                     m("h1.center-text", title),

                     years && years.length>1 && m(Select, {
                         onchange: selectYear,
                         options: years.map(yearToOption),
                         selected: selectedYear
                     }),

                     instruments && m(Select, {
                         onchange: selectInstrument,
                         options: instruments.map(instrumentToOption),
                         selected: selectedInstrument
                     }),

                     Programa.listarMaterias(selectedYear, selectedInstrument)
                             .map(materia => m(AccordionGroup, {key: selectedYear+selectedInstrument},
                                              materia.nombre,
                                              m(Accordion,
                                                "Contenido",
                                                m(Program, {code: materia.codigo}),
                                                "Material",
                                                m(DownloadContainer,
                                                  Material.buscarNivel("lm")
                                                          .map(item =>
                                                              m(DownloadItem, item)))))));
        }
    };
};

module.exports = ProgramView;

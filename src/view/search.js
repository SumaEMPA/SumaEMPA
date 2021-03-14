const m = require("mithril");
const StandardPage = require("/layout/standard-page.js");

const Material = require("/model/material.js");

const DownloadItem = require("/components/download-item.js");
const DownloadContainer = require("/components/download-container.js");

function renderResults(vnode, paginacion){

    const show = paginacion.total!=0

    return m(".search-results",
             m(".search-results__count",
               show?
               `Encontradas ${paginacion.total} coincidencias.`:
               "No se encontraron resultados"
               ),

               m(DownloadContainer,
                 paginacion.resultados
                           .map(item  =>
                               m(DownloadItem, item))),

               show && m(".search-results__pager",
                         m(".search-results__pager-button", {onclick: () => vnode.state.page--}, "❮"),
                         m(".search-results__pager-summary", `Página ${paginacion.pagina} de ${paginacion.paginas}`),
                         m(".search-results__pager-button", {onclick: () => vnode.state.page++}, "❯")));
}


function updateQuery(vnode, query){
    vnode.state.query = query;
    vnode.state.page = 1;
}

const Search = {
    query: "",
    page: 1,
    view(vnode){

        const paginacion = Material.paginar(
            Material.buscar(vnode.state.query),
            vnode.state.page
        );

        vnode.state.page = paginacion.pagina;

        return m(StandardPage,
                 m("h1.center-text", "Búsqueda de material"),
                 m("input.search", {
                     type: "text",
                     oninput: ev => updateQuery(vnode, ev.target.value),
                     placeholder: "Ingrese lo que desea buscar"
                 }),
                 renderResults(vnode, paginacion));
    }
};

module.exports = Search;

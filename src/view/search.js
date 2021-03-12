const m = require("mithril");
const StandardPage = require("/layout/standard-page.js");

const Material = require("/model/material.js");

const DownloadItem = require("/components/download-item.js");
const DownloadContainer = require("/components/download-container.js");

const Search = {
    query: "",
    view(vnode){
        return m(StandardPage,
                 m("h1.center-text", "Búsqueda de material"),
                 m("input.search", {
                     type: "text",
                     oninput: ev => vnode.state.query = ev.target.value,
                     placeholder: "Ingrese lo que desea buscar"
                 }),
                 m(DownloadContainer,
                   Material.buscar(vnode.state.query)
                           .map(item =>
                               m(DownloadItem, item))))
    }
};

module.exports = Search;

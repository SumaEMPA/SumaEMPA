const m = require("mithril");
const StandardPage = require("/layout/standard-page.js");

const Material = require("/model/material.js");

const DownloadItem = require("/components/download-item.js");
const DownloadContainer = require("/components/download-container.js");

const Search = {
    query: "",
    view(){
        return m(StandardPage,
                 m("h1.text-align-center.main", "Búsqueda de material"),
                 m("input.search", {
                     type: "text",
                     oninput: ev => this.query = ev.target.value,
                     placeholder: "Ingrese lo que desea buscar"
                 }),
                 m(DownloadContainer,
                   Material.buscar(this.query)
                           .map(item =>
                               m(DownloadItem, {
                                   title: item.nombre,
                                   description: item.descripcion,
                                   url: item.url,
                                   icon: item.icono
                               }))))


    }
};

module.exports = Search;

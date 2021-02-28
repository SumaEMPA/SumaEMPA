const m = require("mithril");

const Material = {
    view(vnode){
        const item = vnode.attrs || {};
        return m("material",
                 m("nombre", item.nombre),
                 m("fecha", item.fecha));
    }
}


module.exports = Material;

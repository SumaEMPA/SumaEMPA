const m = require("mithril");

const icons = {
    "default": require("/img/icons/placeholder.png"),
    "youtube": require("/img/icons/yt.png")
}

function openUrl(url){
    if(url)
        window.open(url, '_blank');
}

const DownloadItem = {
    view(vnode){
        const attr = vnode.attrs;
        return m("download-item",
                 m("img", {src: icons["youtube"], onclick: () => openUrl(attr.url)}),
                 m("cuerpo",
                   m("h3", {onclick: () => openUrl(attr.url)}, attr.title),
                   m("p",  attr.description)));
    }
}

module.exports = DownloadItem;

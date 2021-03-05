const m = require("mithril");

const icons = {
    "exe": require("/img/icons/exe-64.png"),
    "link": require("/img/icons/link-64.png"),
    "audio": require("/img/icons/mp3-64.png"),
    "pdf": require("/img/icons/pdf-64.png"),
    "video": require("/img/icons/video-64.png"),
    "youtube": require("/img/icons/yt-64.png"),
    "zip": require("/img/icons/zip-64.png")
}

function getIcon(name){
    if(!icons[name])
        return icons['link'];
    return icons[name];
}

function openUrl(url){
    if(url)
        window.open(url, '_blank');
}

const DownloadItem = {
    view(vnode){
        const attr = vnode.attrs;

        return m(".download-item", {onclick: () => openUrl(attr.url)},
                 m("img.download-item__img", {src: getIcon(attr.icono), onclick: () => openUrl(attr.url)}),
                 m("download-item__body",
                   m("h3.download-item__title", attr.nombre),
                   m("p.download-item__text",  attr.descripcion)));
    }
}

module.exports = DownloadItem;

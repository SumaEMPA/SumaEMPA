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
        console.log(attr);
        return m("download-item.animated",
                 m("img", {src: getIcon(attr.icon), onclick: () => openUrl(attr.url)}),
                 m("cuerpo",
                   m("h3", {onclick: () => openUrl(attr.url)}, attr.title),
                   m("p",  attr.description)));
    }
}

module.exports = DownloadItem;

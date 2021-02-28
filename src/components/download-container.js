const m = require("mithril");

const DownloadContainer = {
    view(vnode){
        return m("download-container", vnode.children);
    }
}

module.exports = DownloadContainer;

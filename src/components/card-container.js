const m = require("mithril");

const CardContainer = {
    view(vnode){
        return m("card-container", vnode.children);
    }
}

module.exports = CardContainer;

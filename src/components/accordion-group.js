const m = require("mithril");


const AccordionGroup = {
    view(vnode){
        const children = vnode.children || [""];
        return m(".accordion-group",
                 m(".accordion-group__header", children.slice(0,1)),
                 children.slice(1));
    }
}


module.exports = AccordionGroup;

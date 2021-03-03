const m = require("mithril");


const Card = {
    view(vnode){
        const attrs = vnode.attrs;
        const content = attrs.content || "";
        const links = attrs.links || [];

        return m("card",
                 m("card-image",
                   m("img", {src: attrs.image})),
                 m("card-content",

                   m("card-body",
                     m("h3", attrs.title),
                     m("p", attrs.content)),

                   m("card-footer",
                     links.length && content.length?m(".hr"):null,
                     m("links",
                       links.map(link => m("a.btn", {href: link.url, target: link.newWindow?"_blank":""}, link.name))))));
    }
}


module.exports = Card;

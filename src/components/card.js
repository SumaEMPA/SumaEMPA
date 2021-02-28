const m = require("mithril");

const Card = {
    view(vnode){
        const attrs = vnode.attrs;
        const links = attrs.links || [];



        return m("card",
                 m("image",
                   m("img", {src: attrs.image})),
                 m("content",
                   m("h3", attrs.title),
                   m("p", attrs.content),
                   links.length?m("hr"):null,
                   m("links",
                     links.map(link => m("a.btn", {href: link.url, target: "_blank"}, link.name)))
                  ))
    }
}


module.exports = Card;

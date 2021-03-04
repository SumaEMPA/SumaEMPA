const m = require("mithril");


const Card = {
    view(vnode){
        const attrs = vnode.attrs;
        const content = attrs.content || "";
        const links = attrs.links || [];

        return m(".card",
                 m(".card__img-container",
                   m("img.card__img", {src: attrs.image})),
                 m(".card__content",

                   m(".card__body",
                     m("h3.card__title", attrs.title),
                     m("p.card__text", attrs.content)),

                   m(".card__footer",
                     links.length && content.length?m(".hr"):null,
                     m(".card__links",
                       links.map(link => m("a.btn.card__button", {href: link.url, target: link.newWindow?"_blank":""}, link.name))))));
    }
}


module.exports = Card;

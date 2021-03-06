const m = require("mithril");

function groupByTwo(array){
    var groups = [];

    for(var i = 0; i < array.length; i += 2)
        groups.push(array.slice(i, i + 2));

    return groups;
}

const Accordion = {
    selected: -1,
    view(vnode){
        const children = groupByTwo(vnode.children || []);

        return m(".accordion",
                 children.map(([title, body], i) =>{
                     let open = (i==this.selected);
                     return m(".accordion__item", {onclick: () => this.selected = open?-1:i},
                              m(".accordion__chevron", {class: open?null:"accordion__chevron--closed"},
                                "❯"),
                              m(".accordion__title", {
                                  class: open?null:"accordion__title--closed"
                              }, title),
                              m(".accordion__body-container", {class: open?"accordion__body-container--show":"accordion__body-container--hide"},
                                m(".accordion__body", {class: open?"accordion__body--show":"accordion__body--hide"},
                                  open?body:null)))
                 }));
    }
}


module.exports = Accordion;

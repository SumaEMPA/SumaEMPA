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
                 children.map(([title, body], i) =>
                     m(".accordion__item",
                       m(".accordion__title", {
                           onclick: ()=> this.selected = (i==this.selected)?-1:i,
                           class: i==this.selected?"accordion__title--closed":null
                       }, title),

                       m(".accordion__body-container", {class: i==this.selected?"accordion__body-container--show":"accordion__body-container--hide"},
                         m(".accordion__body", body)))));
    }
}


module.exports = Accordion;

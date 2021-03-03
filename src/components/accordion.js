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

        return m("accordion",
                 children.map(([title, body], i) =>
                     m("accordion-item",
                       m("accordion-title", {
                           onclick: ()=> this.selected = (i==this.selected)?-1:i,
                           class: i==this.selected?"rolledup":null
                       }, title),

                       m("accordion-body", {class: i==this.selected?"show":"hide"},
                         m("accordion-body-container", body)))));
    }
}


module.exports = Accordion;

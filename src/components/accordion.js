const m = require("mithril");

function groupByTwo(array){
  var groups = [];

  for(var i = 0; i < array.length; i += 2)
    groups.push(array.slice(i, i + 2));

  return groups;
}

const AccordionItem = {
  open: false,
  view(vnode){
    return m(".accordion__item",
             m(".accordion__chevron", {
               class: vnode.state.open && "accordion__chevron--closed"
             }, "❯"),
             m(".accordion__title", {
               onclick: () => vnode.state.open = !vnode.state.open,
               class: vnode.state.open?null:"accordion__title--closed"
             }, vnode.attrs.title),
             m(".accordion__body-container", {class: vnode.state.open?"accordion__body-container--show":"accordion__body-container--hide"},
               m(".accordion__body", {class: open?"accordion__body--show":"accordion__body--hide"},
                 vnode.state.open && vnode.children)))
  }
}

const Accordion = {
  view(vnode){
    const children = groupByTwo(vnode.children || []);

    return m(".accordion",
             children.map(([title, body], i) =>  m(AccordionItem, {title}, body)))
  }
}


module.exports = Accordion;

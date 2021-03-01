const m = require("mithril");
const Main = require("/view/main.js");
const Search = require("/view/search.js");

m.route.prefix = '';

m.route(document.body, "/", {
    "/": Main,
    "/material": Search
});

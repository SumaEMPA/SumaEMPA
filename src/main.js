const m = require("mithril");
const Main = require("/view/main.js");
const Search = require("/view/search.js");
const Program = require("/view/program.js");


m.route.prefix = '';

m.route(document.body, "/", {
    "/": Main,
    "/lm": Program,
    "/material": Search
});

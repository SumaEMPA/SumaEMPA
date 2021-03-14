const m = require("mithril");
const fuse = require("fuse.js").default;

const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.4,
  // distance: 100,
  useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: [
      "nombre",
      "descripcion",
      "instrumentos",
      "tipo",
      "nivel"
  ]
};


var Database = {
    data: [],
    loading: false,
    loaded: false,
    fuse: {search(){return [];}}
}

function setupDatabase(data){
    Database.loaded = true;
    Database.data = data || [];
    Database.fuse = new fuse(data, fuseOptions);
    Database.loading = false;
}

function loadDatabase(){
    if(Database.loaded)
        return;
    Database.loading = true;

    m.request("/material.json")
     .then(setupDatabase);
}

Material = {
  buscar(texto){
    if(!texto)
      return Database.data;

    return Database.fuse.search(texto).map(result => result.item);
  },
  paginar(resultados, pagina, resultadosPorPagina){
    resultadosPorPagina = resultadosPorPagina || 12;
    const cantidad = resultados.length;
    const paginas = Math.max(
      Math.ceil(cantidad/resultadosPorPagina),
      1);

    pagina = pagina || 0;
    pagina = Math.min(pagina, paginas);
    pagina = Math.max(pagina, 1);

    const primerResultado = (pagina-1)*resultadosPorPagina;
    const ultimoResultado = primerResultado+resultadosPorPagina;

    return {
      resultados: resultados.slice(primerResultado, ultimoResultado),
      total: resultados.length,
      paginas: paginas,
      pagina: pagina
    }
  },
  buscarNivel(nivel){
    return Database.data.filter(item => item.nivel.includes(nivel));
  }
}

loadDatabase();

window.db = Database
window.m=m

module.exports = Material;
